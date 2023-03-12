// const fs = require('fs')

// const getNotes = function () {
//     return 'Your notes...'
// }

// const addNote = function (title, body) {
//     const notes = loadNotes()
//     // const duplicateNotes = notes.filter(function (note) {
//     //     return note.title === title
//     // })

//     // if (duplicateNotes.length === 0) {
//         notes.push({
//             title: title,
//             body: body
//         })
//         saveNotes(notes)
//         console.log('New note added!')
//     // } else {
//     //     console.log('Note title taken!')
//     // }
// }

// const saveNotes = function (notes) {
//     const dataJSON = JSON.stringify(notes)
//     fs.writeFileSync('notes.json', dataJSON)
// }

// const loadNotes = function () {
//     try {
//         const dataBuffer = fs.readFileSync('notes.json')
//         const dataJSON = dataBuffer.toString()
//         return JSON.parse(dataJSON)
//     } catch (e) {
//         return []
//     }
// }

// module.exports = {
//     getNotes: getNotes,
//     addNote: addNote
// }

const fs = require('fs')

// Creating an addNote fucntion takes two args title and body

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log("new Note Added!")
    } else {
        console.log("Note title taken!")
    }

}

// creating a saveNotes function to save the notes in the notes.json file
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)
}

//creating the loadNotes function to load the notes in the notes array 
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter( (note) => {
        return note.title !== title
    })
    // if(notes.lenght > notesToKeep.lenght){
    //     console.log("Note removed!")
       
    // }else{
    //     console.log("No note to be removed!")
    // }
    saveNotes(notesToKeep)
}

const listNote = () => {
    const notes = loadNotes()

    console.log('your notes')

    notes.forEach((note) => {
        console.log(note.title)
    })
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote
}  


   