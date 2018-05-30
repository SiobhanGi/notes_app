
// tests if #createNote function saves new note object to array

(function(exports) {
  function createNote() {
    var note = "New List";
    var noteList = new NoteList();
    noteList.createNote(note);
    assert.isEqual(note, noteList.notes[0], "returns correct text");
  };

  createNote();

  function printAll() {
    var noteList = new NoteList();
    noteList.createNote("Note1");
    noteList.createNote("Note2");
    assert.isEqualToArray(noteList.printAll(), ["Note1", "Note2"], "returns correct text");
  }

  printAll();

})(this);
