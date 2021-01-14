window.onload = async function() {

    let headerBlock = `
        <div class="container">
            <div class="row">
                <div class="header__logo">
                    <img src="/img/logo.png" alt="">
                </div>
                <div class="header__menu">
                    <ul></ul>
                </div>
            </div>
        </div>
    `

    document.querySelector('.header').innerHTML = headerBlock

    let data = await fetch('http://localhost:8080/api/page/home', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then((data) => {
        return data
    });
    
    data.map((e) => {
        document.querySelector('.header__menu ul').insertAdjacentHTML('beforeend', `<li><a href='${e.url}'>${e.text}</a></li>`)
    })

}