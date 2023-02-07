const fs = require('node:fs')
const path = require('path')


//File system
// fs.mkdir(path.join(__dirname, 'notes'), (e) => {
//     if (e) throw new Error(e)
//
//     console.log('Папка создана')
// })

// fs.writeFile(path.join(__dirname, 'notes', 'mynotes.txt'),
//     'Hello world',
//     (e) => {
//         if (e) throw new Error(e)
//         console.log('Файл был создан')
//
//         fs.appendFile(
//             path.join(__dirname, 'notes', 'mynotes.txt'),
//             ' From append file',
//             e => {
//                 if (e) throw new Error(e)
//                 console.log('Файл был изменён')
//             }
//         )
//
//         fs.readFile(
//             path.join(__dirname, 'notes', 'mynotes.txt'),
//             'utf-8',
//             (e, data) => {
//                 if (e) throw new Error(e)
//                 console.log(data)
//             }
//         )
//     }
// )

fs.rename(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'note.txt'),
    (err) => {
        if (err) throw err
        console.log('Rename complete!')
    }
)