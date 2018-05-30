(function(exports){
  function NoteListView(notes) {
    this.notes = notes || new NoteList;
  }

  NoteListView.prototype.htmlString = function() {
    // var notes = this.notes.printAll();
    var htmlList = [];

    this.notes.forEach(function(note, index) {
      htmlList.push(`<li>Note ${index + 1}: ${note}</li>`);
    });
    return htmlList
  };

  exports.NoteListView = NoteListView;

})(this);
