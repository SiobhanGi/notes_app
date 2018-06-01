(function(exports) {
  function SingleNote(note) {
    this.note = note || new Note().text;
  }

  SingleNote.prototype.htmlString = function() {
    return (`<div>${this.note}</div>`)
  };

  exports.SingleNote = SingleNote;

})(this);
