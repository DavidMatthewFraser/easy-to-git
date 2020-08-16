$(document).ready(function(){
  let theme = localStorage.getItem('theme')
  switch (theme) {
    case 'forest':
      changeTheme(forest)
      break;
    case 'beach':
      changeTheme(beach);
      break;
    case 'springGreen':
      changeTheme(springGreen);
      break;
    default:
      changeTheme(pageDefault)
  }
})

let pageDefault = {
  'themeName': 'pageDefault',
  'page-background': '#f1a7e4',
  'buttonContainer-background': '#c69dfc',
  'header-background': '#900e78',
  'header-color': 'white',
  'contributor-background': '#b9189c',
  'chooseTheme-background': '#b9189c',
  'btn-default-background': '##f2f2f2',
  'btn-primary-background': '#24a0ed',
  'btn-primary-color': 'white',
  'comment-slide-background': '#fdc4ff'
}

let forest = {
  'themeName': 'forest',
  'page-background': '#73b36b',
  'buttonContainer-background': '#bd9477',
  'header-background': '#4f784a',
  'header-color': 'black',
  'contributor-background': '#8f6f5e',
  'chooseTheme-background': '#8f6f5e',
  'btn-default-background': '#e7ffe6',
  'btn-primary-background': '#6fff69',
  'btn-primary-color': '#875735',
  'comment-slide-background': '#95ff91'
}

let beach = {
  'themeName': 'beach',
  'page-background': '#F1F1F3',
  'buttonContainer-background': '#F1F1F3',
  'header-background': '#C7D0D8',
  'header-color': '#4F545D',
  'contributor-background': '#E1CFBC',
  'chooseTheme-background': '#E1CFBC',
  'btn-default-background': '#8999AD',
  'btn-primary-background': '#8999AD',
  'btn-primary-color': 'white',
  'comment-slide-background': '#E1CFBC'
}

const darkgreen = '#1e470b';
const mediumgreen = "#306704";
const spring = "#d4f070";
const lightestgreen = "#e0face";
let springGreen = {
  'themeName': 'springGreen',
  'page-background': '{lightestgreen}',
  'buttonContainer-background': '{darkgreen}',
  'header-background': '{mediumgreen}',
  'header-color': '{lightestgreen}',
  'contributor-background': '{spring}',
  'chooseTheme-background': '{spring}',
  'btn-default-background': '{spring}',
  'btn-primary-background': '{spring}',
  'btn-primary-color': '{darkgreen}',
  'comment-slide-background': '{spring}'
}

forestTheme.onclick = () => {
  changeTheme(forest)
}
beachTheme.onclick = () => {
  changeTheme(beach)
}
springGreenTheme.onclick = () => {
  changeTheme(springGreen)
}
defaultTheme.onclick = () => {
  changeTheme(pageDefault)
}

let changeTheme = (theme) => {
  localStorage.setItem('theme', theme['themeName']);
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
  $('.carousel-inner').css('background-color', theme['comment-slide-background']);
}
