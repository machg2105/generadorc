function saveNote() {
    const noteText = document.getElementById('note').value;
    const expiryDateTime = new Date(document.getElementById('expiryDateTime').value).getTime();
    const noteObj = {
        text: noteText,
        expiryTime: expiryDateTime
    };
    localStorage.setItem('secureNote', JSON.stringify(noteObj));
    alert('Nota guardada exitosamente.');
}

function checkExpiry() {
    const storedNote = JSON.parse(localStorage.getItem('secureNote'));
    if (storedNote) {
        const currentTime = new Date().getTime();
        if (currentTime >= storedNote.expiryTime) {
            document.getElementById('noteDisplay').innerText = storedNote.text;
            document.getElementById('noteDisplay').style.display = 'block';
        } else {
            alert('La nota aún no está disponible.');
        }
    } else {
        alert('No se ha guardado ninguna nota.');
    }
}

function editNote() {
    const storedNote = JSON.parse(localStorage.getItem('secureNote'));
    if (storedNote) {
        document.getElementById('note').value = storedNote.text;
        document.getElementById('expiryDateTime').value = new Date(storedNote.expiryTime).toISOString().slice(0, 16);
    } else {
        alert('No se ha guardado ninguna nota.');
    }
}

function deleteNote() {
    localStorage.removeItem('secureNote');
    alert('Nota eliminada.');
    document.getElementById('note').value = '';
    document.getElementById('expiryDateTime').value = '';
    document.getElementById('noteDisplay').innerText = '';
    document.getElementById('noteDisplay').style.display = 'none';
}
