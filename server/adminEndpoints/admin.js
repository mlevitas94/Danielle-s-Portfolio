const bcrypt = require('bcryptjs')
module.exports = {
    login: async (req, res) => {
        const db = req.app.get('db')
        
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
                return res.status(200).send(true)
            }else{
                return res.status(401).send('Invalid username or Password')
            }
        }catch(err){
            return res.status(500).send(err)
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

    }
}