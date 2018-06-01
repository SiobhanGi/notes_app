(function(exports) {

  console.log(`%cNoteModelList`, `color: GoldenRod`)

  describe("#createNote")
  it("turns passed text into a note")
    var note = "New note";
    var noteList = new NoteList();
    noteList.createNote(note);
    assert.isEqual(note, noteList.notes[0]);

  describe("#printAll")
  it("it prints out all the notes in notes array")
    var noteList = new NoteList();
    noteList.createNote("Note1");
    noteList.createNote("Note2");
    assert.isEqualToArray(noteList.printAll(), ["Note1", "Note2"]);


})(this);
