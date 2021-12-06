const RssFeedEmitter = require('rss-feed-emitter');
const feeder = new RssFeedEmitter();
const RssWidget = (req, res) => {

    const { uri } = req.query

    let result, array = [];

    const cb = (response) => {

        array.push(response)

        if (array.length === 17) {
            res.status(200).json(array)
        }

    }

    try {
        feeder.add({
            url: uri,
            refresh: 2000
        });

        feeder.on('new-item', function (item) {
            result = {
                title: item.title,
                summary: item.summary,
                image: item.image,
                link:item.link
            }

            //console.log(item)

            cb(result)



        });
        // console.log(feeder.list)

    } catch (error) {
        return res.status(400).json(error)
    }


    // console.log('cool')

    // feeder.on('error', () => {
    //     return res.status(400).json('Url not found')
    // })



}

module.exports = {
    RssWidget
}