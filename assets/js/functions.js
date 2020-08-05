// jquery to hide and toggle the comments until button is clicked

function changeButtonName(button) {
  var currentBtnText = $(button).text();
  var buttonAction = currentBtnText.includes('see') ? 'hide' : 'see';
  $(button).text('Click to ' + buttonAction + ' Comments Slide');
}

// toggle function
$('#btn_com').click(function(){
  $('#randSec').toggle('swing', changeButtonName.bind(null, this));
});

console.log('Easy to Function')
