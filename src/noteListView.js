(function(exports){
  function NoteListView(notes) {
    this.notes = notes || new NoteList().notes;
  }

  NoteListView.prototype.htmlString = function() {
    var htmlList = [];

    this.notes.forEach(function(note, index) {
      htmlList.push(`<li>Note ${index + 1}: ${note}</li>`);
    });
    return (`<ul>${htmlList.join("")}</ul>`);
  };

  exports.NoteListView = NoteListView;

})(this);
