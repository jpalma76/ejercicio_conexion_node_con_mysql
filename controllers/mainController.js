const controller = {
    index: (req, res)=> {
        res.render("index")
    },
    login: (req, res) => {
        res.render('login')
    },
    register: (req, res) => {
        res.render('register')
    },
    errorLogin: (req, res) => {
        res.render('errorLogin')
    },
    ping: (req, res)=> {
        res.render("ping")
    }
}

module.exports = controller;