const {Router} = require('express')

const router = Router()

const menu = [
    {url: '/', text: 'home'},
    {url: '/about.html', text: 'about'}
]

router.get('/home', (req, res) => {
    res.status(200).json(menu)
})

module.exports = router