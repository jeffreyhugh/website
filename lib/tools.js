import fs from "fs";
import path from "path";

const toolsDirectory = path.join(process.cwd(), 'tools')

export function getSortedTools() {
    const filenames = fs.readdirSync(toolsDirectory)
    const allLinks = filenames.map(filename => {
        const fullPath = path.join(toolsDirectory, filename)

        const fileContents = JSON.parse(fs.readFileSync(fullPath, 'utf8'))

        return {
            imageURL: fileContents.imageURL,
            name: fileContents.name,
            link: fileContents.link,
            description: fileContents.description,
            order: fileContents.order
        }
    })

    return allLinks.sort((a, b) => {
        if (a.order > b.order) {
            return 1
        } else {
            return -1
        }
    })
}