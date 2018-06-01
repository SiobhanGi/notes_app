(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList || new NoteList();
    this.notes = [];
  }

  NoteController.prototype.createNote = function(text = "Default note") {
    this.noteList.createNote(text)
    this.notes = this.noteList.notes;
  }

  // NoteController.prototype.showNotesInHtml = function() {
  //   var notesString = new NoteListView(this.notes).htmlString();
  //   document.getElementById('app').innerHTML = notesString;
  // }

  exports.NoteController = NoteController;

})(this);

// var test = new NoteController();
// test.createNote("Favourite drink: Seltzer");
// test.showNoteInHtml();
