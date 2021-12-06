class RssWidget {
    constructor() {
        this.name = "Rss"
    }

    createRssWidget(url, element) {

        fetch("/api/widgets/rss?uri=" + url)
            .then(function (resp) {
                return resp.json()
            })
            .then(function (data) {
                // console.log(data)

                _.map(data, (el) => {

                    console.log({ el })
                    const stream = `
                        <div>
                            <img src=${el.image.url} alt="">
                        </div>
                        <div>
                            <h1>${el.title}</h1>
                            <p>${el.summary}</p>
                        </div>
                    `
                    // console.log(stream)

                    console.log({ element })
                    $(element).append(stream)

                })




                // $(display_temperature).html("")

                // $(display_temperature).removeClass('hidden')

                // $(display_temperature).append(second)

                // console.log({ second })
            })
            .catch(function () {
                return false
            })
    }
}