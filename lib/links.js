import fs from "fs";
import path from "path";

const linksDirectory = path.join(process.cwd(), 'links')

export function getSortedLinks() {
    const filenames = fs.readdirSync(linksDirectory)
    const allLinks = filenames.map(filename => {
        const fullPath = path.join(linksDirectory, filename)

        const fileContents = JSON.parse(fs.readFileSync(fullPath, 'utf8'))

        return {
            order: fileContents.order,
            icon: fileContents.icon,
            link: fileContents.link,
            alt: fileContents.alt
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