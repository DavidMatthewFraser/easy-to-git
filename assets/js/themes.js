$(document).ready(function(){
  let theme = localStorage.getItem('theme')
  switch (theme) {
    case 'forest':
      changeTheme(forest)
      break;
    case 'beach':
      changeTheme(beach);
      break;
    case 'summerday':
      changeTheme(summerday);
      break;
      case 'dark':
        changeTheme(dark);
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
  'btn-default-background': '#f2f2f2',
  'btn-primary-background': '#24a0ed',
  'btn-default-color': 'black',
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
  'btn-default-color': 'black',
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
  'btn-default-color': 'white',
  'btn-primary-color': 'white',
  'comment-slide-background': '#E1CFBC'
}

let dark = {
  'themeName': 'dark',
  'page-background': '#190F26',
  'buttonContainer-background': '#F1F1F3',
  'header-background': '#392259',
  'header-color': 'white',
  'contributor-background': '#5A378C',
  'chooseTheme-background': '#392259',
  'btn-default-background': '#392259',
  'btn-default-color': 'white',
  'btn-primary-background': '#5A378C',
  'btn-primary-color': 'white',
  'comment-slide-background': '#392259'
}

const lightyellow = '#FDE1A9';
const lightorange = "#F89D70";
const deepcoral = '#D5544B';
const almostwhite = '#E3EAF3';
const lightblue = '#BADCF6';
const blue = '#A4CAED';
const brick = '#6b2a1d'
let summerday = {
  'themeName': 'summerday',
  'page-background': lightblue,
  'buttonContainer-background': blue,
  'header-background': lightorange,
  'header-color': 'white',
  'contributor-background': deepcoral,
  'chooseTheme-background': deepcoral,
  'btn-default-background': lightyellow,
  'btn-default-color': brick,
  'btn-primary-background': lightyellow,
  'btn-primary-color': brick,
  'comment-slide-background': lightyellow
}



darkTheme.onclick = () => {
  changeTheme(dark)
}

forestTheme.onclick = () => {
  changeTheme(forest)
}
beachTheme.onclick = () => {
  changeTheme(beach)
}
summerdayTheme.onclick = () => {
  changeTheme(summerday)
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
