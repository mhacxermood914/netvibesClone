const RssFeedEmitter = require('rss-feed-emitter');
const feeder = new RssFeedEmitter();
const User = require('../services/users');
const Widget = require('../models/widget');

const RssWidget = (req, res) => {

    const { uri } = req.query

    let result, array = [];

    const cb = (response) => {

        array.push(response)

        if (array.length === 8) {
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
                link: item.link
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

const createWidget = async (req, res) => {
    const { name, userId } = req.body;
    const user = await User.getUserBy(userId);

    if (typeof name !== 'string') res.status(201).json({ message: 'You should send a string value...' });
    if (typeof userId !== 'number' && !user) res.status(201).json({ message: 'You should send a valid user id...' });

    Widget.create({ name: name, userId: userId })
        .then((data) => res.send({ message: 'Widget is created successfully...', data: data }))
        .catch(e => console.error(e))
}

const getAllWidget = async (req, res) => {
    const { userId } = req.params;
    const datas = await Widget.findAll({ where: { userId } });
    if (!datas) res.status(201).json({ message: 'You should send a valid user id...' });

    res.status(200).json({ datas: datas });

}

const deleteWidget = (req, res) => {
    const { id } = req.params;
    Widget.destroy({
        where: { id: id }
    }).then((data) => {
        if (!data) {
            return res.status(201).json({ message: "You should send a valid widget id..." });
        } else {
            return res.status(200).json({ message: "The widget has been deleted successfully..." })
        }
    })
}

module.exports = {
    RssWidget,
    createWidget,
    getAllWidget,
    deleteWidget
}