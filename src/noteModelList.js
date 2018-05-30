(function(exports) {
  function NoteList() {
    this.notes = []
  }

  NoteList.prototype.createNote = function(text) {
    this.notes.push(new Note(text).text);
  };

  NoteList.prototype.all = function() {
    return this.notes
  };

  exports.NoteList = NoteList;

})(this);
