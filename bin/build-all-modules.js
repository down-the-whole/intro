// const fs = require('fs')
// const path = require('path')

// const modules = []

// const getFiles = (dirPath, currentLevel, maxLevel) => {
//     if (currentLevel > maxLevel) {
//         return
//     } else {
//         fs.readdirSync(dirPath).forEach(function (file) {
//             let filepath = path.join(dirPath, file)
//             let stat = fs.statSync(filepath)
//             if (stat.isDirectory() && !filePath.contains('@')) {

//             } else if (stat.isDirectory()) {
//                 getFiles(filepath, currentLevel + 1, maxLevel)
//             } else {
//                 console.info(filepath + '\n')
//             }
//         })
//     }
// }

// getFiles(path.join(__dirname, '../modules'), 0, 1)

var fs = require('fs')
var resolve = require('path').resolve
var join = require('path').join
var cp = require('child_process')
var os = require('os')

// get library path
var lib = resolve(__dirname, '../modules/')

fs.readdirSync(lib)
    .forEach(function (mod) {
        var modPath = join(lib, mod)
        // ensure path has package.json
        if (!fs.existsSync(join(modPath, 'package.json'))) return

        // npm binary based on OS
        var npmCmd = os.platform().startsWith('win') ? 'yarn.cmd' : 'yarn'

        // install folder
        cp.spawn(npmCmd, [], {
            env: process.env,
            cwd: modPath,
            stdio: 'inherit'
        })
    })
