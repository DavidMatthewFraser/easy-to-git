// jquery to hide and toggle the comments until button is clicked

// toggle function
$('#btn_com').click(function(){
    $('#randSec').toggle('');
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
