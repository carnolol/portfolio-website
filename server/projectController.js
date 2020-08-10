module.exports={
    projects: async(req, res) => {
        const db = req.app.get('db')
        const projects = await db.get_projects()
        res.status(200).send(projects)
    },
    projectPictures: async(req, res) => {
        const db = req.app.get('db')
        // const {project_id} = req.params
        // console.log(project_id)
        const screenShots = await db.get_project_screenshots()
        res.status(200).send(screenShots)
        //* might need to send(screenshots[0])
    }
}