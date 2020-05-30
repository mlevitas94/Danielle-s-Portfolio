module.exports = {
    getProjects = async (req,res) => {
        const db = req.app.get('db')

        try{
            const projects = await db.getProjects()
            return res.status(200).send(projects)
        }catch(err){
            console.log(err)
            return res.status(500).send('Server Err')
        }
        

        
    }
}