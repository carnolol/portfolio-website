module.exports = {
    getSkills: async (req,res) => {
        const db = req.app.get('db')
        const skills = await db.get_skills()
        res.status(200).send(skills)
    }
}