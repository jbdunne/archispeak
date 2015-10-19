var findAndReplace = function(phrase, word, replacement) {
  return phrase.replace(new RegExp(word, "gi"),replacement);
}

$(document).ready(function(){
  $("#findreplace").submit(function(event) {
    var phrase = $("input#phrase").val();
    var word = $("input#word").val();
    var replacement = $("input#replacement").val();
    var output = findAndReplace(phrase, word, replacement);
    $(".output").text(output);
    $("#result").slideToggle("slow");
    $("#result").addClass('animated fadeInDownBig');
    event.preventDefault();
  });

});
