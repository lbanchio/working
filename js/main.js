var word = [
    'buenísimo.',
    'fantástico.',
    'increíble.',
    'sensacional.',
    'asombroso.',
    'estupendo.',
    'impresionante.',
    'sorprendente.',
    'genial.'];

var current = 1;
var timer = null;

function nextWord() {
  if (current < word.length) {
    ret = word[current];
    current = current + 1;
    return ret;
  }

  current = 1;
  return word[0];
}

function changeWord () {
  $('#adj').text(nextWord());
  $('#adj').removeClass().addClass('animated flipInX').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){$(this).removeClass();});

}

$(document).on("ready",
  function () {
    timer = setInterval(changeWord, 3000);
  });
