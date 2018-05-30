(function(exports) {
  function htmlString() {
    // 1 item
    var note = ["Hi"];
    var List = new NoteListView(note);
    // empty list
    var notesEmpty = new NoteList().notes;
    var List_empty = new NoteListView(notesEmpty);

    assert.isEqual(List.htmlString(), "<ul><li>Note 1: Hi</li></ul>", "returns text");
    assert.isEqual(List_empty.htmlString(), "<ul></ul>", "returns text");
  }

  htmlString();

})(this);
