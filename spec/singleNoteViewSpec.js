(function(exports) {
  var note = "Note 1...";
  var singleNoteView = new SingleNote(note);

  describe("#htmlString");
    it("returns the note in a html div");
    assert.isEqual(singleNoteView.htmlString(), "<div>Note 1...</div>")

})(this)
