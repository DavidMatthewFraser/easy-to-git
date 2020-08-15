
let pageDefault = {
  'page-background': '#f1a7e4', //
  'buttonContainer-background': '#c69dfc', //
  'header-background': '#900e78',//
  'header-color': 'white', //
  'contributor-background': '#b9189c', //
  'chooseTheme-background': '#b9189c', //
  'btn-default-background': '##f2f2f2',
  'btn-primary-background': '#24a0ed', //
  'btn-primary-color': 'white' //
}

let forest = {
  'page-background': '#73b36b',
  'buttonContainer-background': '#bd9477',
  'header-background': '#4f784a',
  'header-color': 'black',
  'contributor-background': '#8f6f5e',
  'chooseTheme-background': '#8f6f5e',
  'btn-default-background': '#e7ffe6',
  'btn-primary-background': '#6fff69',
  'btn-primary-color': '#875735'
}

let changeTheme = (theme) => {
  $('.container-fluid').css('background-color', theme['page-background']);
  $('.buttons-container').css('background-color', theme['buttonContainer-background']);
  $('.header').css('background-color', theme['header-background']);
  $('.header').css('color', theme['header-color']);
  $('.dropdown-toggle').css('background-color', theme['chooseTheme-background']);
  $('.contributors-btn').css('background-color', theme['contributor-background']);
  $('.btn-default').css('background-color', theme['btn-default-background']);
  $('.btn-default').css('color', theme['btn-default-color']);
  $('.btn-primary').css('background-color', theme['btn-primary-background']);
  $('.btn-primary').css('color', theme['btn-primary-color']);
  $('body').addClass('.forest');
}
