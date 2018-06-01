(function(exports){
  function NoteListView(notes) {
    var note;
    this.maxLength = 20;
    this.htmlListArray = [];
    this.notes = notes || new NoteList().notes;
  }

  // converts individual notes to html
  NoteListView.prototype.htmlString = function() {
    var current = this; // makes 'this' part of the lexical context of the function, aka function knows what this is

    current.notes.forEach(function(note, index) {
      if ( current.maxLengthCheck(note) ) {
        note = note.slice( 0, current.maxLength )
        current.htmlListArray.push(`<li><a>href="#note${index + 1}"</a>Note ${index + 1}: ${note}...</li>`);
      } else {
        current.htmlListArray.push(`<li><a>href="#note${index + 1}"</a>Note ${index + 1}: ${note}</li>`);
      }
    });
    return (`<ul>${current.htmlListArray.join("")}</ul>`);
  };

  // checks notes length
  NoteListView.prototype.maxLengthCheck = function(note) {
    return note.length > this.maxLength;
  }

  exports.NoteListView = NoteListView;

})(this);
