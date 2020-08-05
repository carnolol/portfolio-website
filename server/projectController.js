module.exports={
    projects: async(req, res) => {
        const db = req.app.get('db')
        const projects = await db.get_projects()
        res.status(200).send(projects)
    }
}