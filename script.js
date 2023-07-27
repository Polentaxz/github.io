// Array para almacenar las notas
let notes = [];

// Elementos del DOM
const noteInput = document.getElementById('note-input');
const addButton = document.getElementById('add-button');
const noteList = document.getElementById('note-list');

// Función para agregar una nota
function addNote() {
    const noteText = noteInput.value.trim();

    if (noteText !== '') {
        const note = {
            id: Date.now(),
            text: noteText
        };

        notes.push(note);
        noteInput.value = '';
        renderNotes();
    }
}

// Función para eliminar una nota
function deleteNote(id) {
    notes = notes.filter(note => note.id !== id);
    renderNotes();
}

// Función para renderizar las notas
function renderNotes() {
    noteList.innerHTML = '';

    notes.forEach(note => {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');

        const actionsElement = document.createElement('div');
        actionsElement.classList.add('actions');

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Eliminar';
        deleteButton.addEventListener('click', () => deleteNote(note.id));

        actionsElement.appendChild(deleteButton);

        const contentElement = document.createElement('div');
        contentElement.classList.add('content');
        contentElement.innerText = note.text;

        noteElement.appendChild(actionsElement);
        noteElement.appendChild(contentElement);

        noteList.appendChild(noteElement);
    });
}

// Evento click para agregar una nota
addButton.addEventListener('click', addNote);
