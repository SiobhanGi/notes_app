
// returns the text passed into note function
(function(exports) {
  function returnsText() {
    var note = new Note("My favourite language is JavaScript");
    var text = "My favourite language is JavaScript";
    assert.isEqual(note.returnText(), text, "returns correct text");
  };

  returnsText();
})(this);
