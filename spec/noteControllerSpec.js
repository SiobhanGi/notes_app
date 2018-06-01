(function(exports) {

  describe("#createNote");
    it("creates a note with given text");

    var doubleNoteList = {
          notes: [],
      createNote: function(text) {
        doubleNoteList.notes.push(text)
      }
    }

    doubleNoteList.createNote("Favourite drink");
    assert.isEqualToArray(["Favourite drink"], doubleNoteList.notes, "returns text");

  describe("#showNotesInHtml");
    it("takes array of notes and interpolates the notes into html string");
    var doubleNoteListView = {
      htmlString: function() {
        return (`<ul><li>Note 1: ${doubleNoteList.notes[0]}</li></ul>`);
      }
    }
    assert.isEqual(doubleNoteListView.htmlString(), `<ul><li>Note 1: Favourite drink</li></ul>`)



})(this);
