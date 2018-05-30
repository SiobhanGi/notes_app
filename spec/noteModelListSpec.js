(function(exports) {
  function createNote() {
    var note = "New List";
    var noteList = new NoteList();
    
    noteList.createNote(note);
    assert.isEqual(note, noteList.all[0], "returns correct text");
  };

  createNote();
})(this);
