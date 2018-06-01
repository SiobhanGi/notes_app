(function(exports) {

  console.log(`%cNoteListView`, `color: GoldenRod`)

  describe("#htmlString")
  it("converts 1 individual note into html format")
    var notes = ["Hi"];
    var List = new NoteListView(notes);
    assert.isEqual(List.htmlString(), "<ul><li>Note 1: Hi</li></ul>");

  it("converts empty notes into html format")
    var notesEmpty = new NoteList().notes;
    var List_empty = new NoteListView(notesEmpty);
    assert.isEqual(List_empty.htmlString(), "<ul></ul>");

    it("will limit text shown to 20 chars")
    var notes = ["123456789012345iiiiii678901"];
    var List2 = new NoteListView(notes);
    assert.isEqual(List2.htmlString(), "<ul><li>Note 1: 12345678901234567890...</li></ul>")

})(this);
