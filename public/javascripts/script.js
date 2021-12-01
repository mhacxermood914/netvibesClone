(function () {
    const registerBtn = $('#registerBtn'), myModal = $('#myModal'), close = $('.close')

    $(registerBtn).click(function (e) {
        e.preventDefault()
        $(myModal).css('display', 'block')
    })
    $(close).click(function (e) {
        $(myModal).css('display', 'none')
    })
    
})()