const bcrypt = require('bcryptjs')
module.exports = {
    login: async (req, res) => {
        const db = req.app.get('db')
        const { session } = req
        
        const {username, password} = req.body

        if(!username || !password){
            return res.status(406).send('need all info')
        }

        try{
            let user = await db.adminLogin(username);
            user = user[0]
            if(!user){
                return res.status(401).send('Invalid Username or Password')
            }

            const authedAdmin = bcrypt.compareSync(password, user.password)

            if(authedAdmin){
                session.admin = {
                    authed: true
                }
                return res.status(200).send(true)
            }else{
                return res.status(401).send('Invalid username or Password')
            }
        }catch(err){
            return res.status(500).send('Server Error')
        }

    },

    createAdmin : async (req, res) => {
        const db = req.app.get('db')

        const {username, password} = req.body

        if(!username || !password){
            return res.status(406).send('invalid info')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        try{
            await db.newAdmin(username, hash)
            return res.status(200).send('Admin Created')
        }catch(err){
            return res.status(500).send(err)
        }

    },

    getAdmin : async (req,res) => {
        const { session } = req;
        if (!session.admin) {
            return res.sendStatus(401)
        } else {
            return res.sendStatus(200)
        }
    },

    checkAdmin : async (req,res, next) => {
        const { session } = req;
        if (!session.admin) {
            return res.sendStatus(401)
        } else {
            next()
        }
    },

    newProject : async (req,res) => {
        const db = req.app.get('db')
        const {title, content, type, imageURLS, links} = req.body

        if(!title, !content, !type){
            return res.status(401).send('Needs required info')
        }
        for(let i = 0; i < links.length ; i++){
            if(!links[i].caption || !links[i].hyperlink){
                return res.status(401).send('Needs required info')
            }
        }

        try{
            await db.newProject(title, content, imageURLS, type, links)
            return res.status(200).send('Project added')
        }catch(err){
            return res.status(500).send(err)
        }


    },
    deleteProject : async (req,res) => {
        const db = req.app.get('db')
        const {id} = req.body
        try{
            await db.deleteProject(id)
            return res.status(200).send('Project deleted')
        }catch(err){
            return res.status(500).send(err)
        }
    }
}