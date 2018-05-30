(function(exports) {
  function htmlString() {
    var notes = ["Hi"];
    var List = new NoteListView(notes);
    assert.isEqualToArray(List.htmlString(), ["<li>Note 1: Hi</li>"], "returns text");
  }

  htmlString();

})(this);
