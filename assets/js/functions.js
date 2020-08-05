// jquery to hide and toggle the comments until button is clicked

function changeButtonName(button) {
  var currentBtnText = $(button).text();
  var buttonAction = currentBtnText.includes('see') ? 'hide' : 'see';
  $(button).text('Click to ' + buttonAction + ' Comments');
}

// toggle function
$('#btn_com').click(function(){
  $('#randSec').toggle('swing', changeButtonName.bind(null, this));
});

// console.log('Easy to Function')


// display time 
// added by theTradeCoder
function displayTime() {  
  setInterval(() => {
    const date = new Date();
    $("#date").html(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()},`);
    $("#time").html(`${date.toLocaleTimeString()}`)
  }, 1000);
};
displayTime();
