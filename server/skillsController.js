module.exports = {
    getSkills: async (req,res) => {
        const db = req.app.get('db')
        const skills = await db.get_skills()
        res.status(200).send(skills)
    },
    getBackendSkills: async (req, res) => {
        const db = req.app.get('db')
        const backend = await db.get_backend_skills()
        res.status(200).send(backend)
    }, 
    getOtherSkills: async (req, res) => {
        const db = req.app.get('db')
        const other = await db.get_other_skills()
        res.status(200).send(other)
    }
}