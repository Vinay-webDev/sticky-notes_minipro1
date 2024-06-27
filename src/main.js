/////////////////////////////////////
// need 6 functions
const notesContainer = document.getElementById("app");
const addNoteButton = document.querySelector(".add-note");

// to get notes
function getNotes() {
    return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
}

function saveNotes(notes) {
    localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}

function createNoteElement(id, content) {
    
}

function addNote() {

}

function update(id, newContent) {

}

function deleteNote() {

}





















