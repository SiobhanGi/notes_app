(function(exports) {
  function NoteList() {
    this.all = []
  }

  NoteList.prototype.createNote = function(note) {
    this.all.push(note);
  }

  exports.NoteList = NoteList;

})(this);
