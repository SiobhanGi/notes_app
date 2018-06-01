(function(exports) {

  console.log(`%cNoteListView`, `color: GoldenRod`);

  describe("#htmlString")
  it("converts 1 individual note into html format");
    var notes = ["Hi"];
    var List = new NoteListView(notes);
    assert.isEqual(List.htmlString(), `<ul><li><a>href="#note1"</a>Note 1: Hi</li></ul>`);

  it("converts empty notes into html format");
    var notesEmpty = new NoteList().notes;
    var List_empty = new NoteListView(notesEmpty);
    assert.isEqual(List_empty.htmlString(), `<ul></ul>`);

    it("will limit text shown to 20 chars");
    var notes = ["123456789012345678901"];
    var List2 = new NoteListView(notes);
    assert.isEqual(List2.htmlString(), `<ul><li><a>href="#note1"</a>Note 1: 12345678901234567890...</li></ul>`);

  describe("#maxLengthCheck");
  it("return false when note is smaller than max length");
    var List = new NoteListView();
    note = "12345";
    assert.isEqual(List.maxLengthCheck(note), false);
  it("returns true when note is greater than max length");
    var largeNote = "123456789012345678901"
    assert.isEqual(List.maxLengthCheck(largeNote), true);

})(this);
