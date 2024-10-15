const fs = require('fs')
const path = require('path')

const distDir = path.join(__dirname, 'build/server')

function injectAssertions() {
    fs.readdir(distDir, (err, files) => {
        if (err) throw err

        files.forEach((file) => {
            const filePath = path.join(distDir, file)
            if (path.extname(file) === '.js') {
                fs.readFile(filePath, 'utf8', (err, data) => {
                    if (err) throw err

                    const modifiedData = data.replace(
                        /import\s+apiDocs\s+from\s+['"](.+?)['"]/,
                        `import apiDocs from "$1" assert { type: "json" }`,
                    )

                    fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
                        if (err) throw err
                    })
                })
            }
        })
    })
}

injectAssertions()
