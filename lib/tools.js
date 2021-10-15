export function getSortedTools() {
    // const filenames = fs.readdirSync(projectsDirectory)
    // const allLinks = filenames.map(filename => {
    //     const fullPath = path.join(projectsDirectory, filename)

    //     const fileContents = JSON.parse(fs.readFileSync(fullPath, 'utf8'))

    //     return {
    //         imageURL: fileContents.imageURL,
    //         name: fileContents.name,
    //         link: fileContents.link,
    //         description: fileContents.description,
    //         order: fileContents.order
    //     }
    // })

    const allTools = require('../.ignore/tools.json')

    return allTools.sort((a, b) => {
        if (a.order < b.order) {
            return 1
        } else {
            return -1
        }
    })
}