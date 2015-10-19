describe('findAndReplace', function() {

  it("Replaces any word within a given phrase with a new word", function() {
    expect(findAndReplace("Test phrase here", "Test", "Spec")).to.equal("Spec phrase here")
  });

  it("Replaces any word within a given phrase with a new word, regardless of casing", function(){
    expect(findAndReplace("TEST phrase here", "test", "SPec")).to.equal("SPec phrase here")
  });

  it("Replaces multiple instances of a word within a given phrase", function(){
    expect(findAndReplace("I love love love love vegan food", "love", "hate")).to.equal("I hate hate hate hate vegan food")
  });

});
