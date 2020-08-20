module.exports = {
     uniqueTypes : (projects) => {
        let types = []

        for (let i = 0; i < projects.length; i++) {

            if (types.includes(projects[i].type)) {
                continue
            } else {
                types.push(projects[i].type)
            }
        }
        return types
    }
}