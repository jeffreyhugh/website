import path from 'path'
import fs from "fs";

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
    // Get file names under /posts
    // const fileNames = fs.readdirSync(postsDirectory)
    // const allPostsData = fileNames.map(fileName => {
    //     // Remove ".md" from file name to get id
    //     const id = fileName.replace(/\.js$/, '')
    //
    //     // Read markdown file as string
    //     const fullPath = path.join(postsDirectory, fileName)
    //     // const fileContents = fs.readFileSync(fullPath, 'utf8')
    //
    //     // Use gray-matter to parse the post metadata section
    //     // const matterResult = matter(fileContents)
    //
    //     // Combine the data with the id
    //     return {
    //         id,
    //         ...matterResult.data
    //     }
    // })
    const allPostsData = require('../.ignore/posts.json')
    let finalPostsData = []

    for (let i = 0; i < allPostsData.length; i++) {
        if (!allPostsData[i].hidden) {
            finalPostsData.push(allPostsData[i])
        }
    }

    // Sort posts by date
    return finalPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.js$/, '')
            }
        }
    })
}

// export async function getPostData(id) {
//     const fullPath = path.join(postsDirectory, `${id}.md`)
//     const fileContents = fs.readFileSync(fullPath, 'utf8')
//
//     // Use gray-matter to parse the post metadata section
//     const matterResult = matter(fileContents)
//
//     // Use remark to convert markdown into HTML string
//     // const processedContent = await remark()
//     //     .use(html)
//     //     .process(matterResult.content)
//     // const contentHtml = processedContent.toString()
//     const contentHtml = parseMarkdown(matterResult.content)
//
//     // Combine the data with the id and contentHtml
//     return {
//         id,
//         contentHtml,
//         ...matterResult.data
//     }
// }

export async function getPostData(id) {
    const allPostsData = require('../.ignore/posts.json')
    for (let i = 0; i < allPostsData.length; i++) {
        if (allPostsData[i].id === id) {
            return allPostsData[i]
        }
    }

    return {}
}
