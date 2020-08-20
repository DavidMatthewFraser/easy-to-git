$(document).ready(function () {
  if (localStorage.getItem("theme") == null) {
    changeTheme(pageDefault);
  } else {
    changeTheme(JSON.parse(localStorage.getItem("theme")));
  }
});

let pageDefault = {
  themeName: "pageDefault",
  "page-background": "#f1a7e4",
  "sectionContainer-background": "#c69dfc",
  "header-background": "#900e78",
  "header-color": "white",
  "contributor-background": "#b9189c",
  "chooseTheme-background": "#b9189c",
  "btn-default-background": "#f2f2f2",
  "btn-primary-background": "#24a0ed",
  "btn-default-color": "black",
  "btn-primary-color": "white",
  "comment-slide-background": "#fdc4ff",
  "comment-slide-color": "black",
  "widget-background": "#e3baff",
  "section-header-color": "black",
};

let forest = {
  themeName: "forest",
  "page-background": "#73b36b",
  "sectionContainer-background": "#60805c",
  "header-background": "#4f784a",
  "header-color": "black",
  "contributor-background": "#8f6f5e",
  "chooseTheme-background": "#8f6f5e",
  "btn-default-background": "#e7ffe6",
  "btn-primary-background": "#6fff69",
  "btn-default-color": "black",
  "btn-primary-color": "#875735",
  "comment-slide-background": "#95ff91",
  "comment-slide-color": "black",
  "widget-background": "#9eb89a",
  "section-header-color": "black",
};

let beach = {
  themeName: "beach",
  "page-background": "#F1F1F3",
  "sectionContainer-background": "#C7D0D8",
  "header-background": "#C7D0D8",
  "header-color": "#4F545D",
  "contributor-background": "#E1CFBC",
  "chooseTheme-background": "#E1CFBC",
  "btn-default-background": "#8999AD",
  "btn-primary-background": "#8999AD",
  "btn-default-color": "white",
  "btn-primary-color": "white",
  "comment-slide-background": "#E1CFBC",
  "comment-slide-color": "black",
  "widget-background": "white",
  "section-header-color": "black",
};

let dark = {
  themeName: "dark",
  "page-background": "#190F26",
  "sectionContainer-background": "#F1F1F3",
  "header-background": "#392259",
  "header-color": "white",
  "contributor-background": "#5A378C",
  "chooseTheme-background": "#392259",
  "btn-default-background": "#392259",
  "btn-default-color": "white",
  "btn-primary-background": "#5A378C",
  "btn-primary-color": "white",
  "comment-slide-background": "#392259",
  "comment-slide-color": "white",
  "widget-background": "white",
  "section-header-color": "#c57ee6",
};

const lightyellow = "#FDE1A9";
const lightorange = "#F89D70";
const deepcoral = "#D5544B";
const almostwhite = "#E3EAF3";
const lightblue = "#BADCF6";
const blue = "#A4CAED";
const brick = "#6b2a1d";
const orange = "#ff9900";
let summerday = {
  themeName: "summerday",
  "page-background": lightyellow,
  "sectionContainer-background": lightorange,
  "header-background": lightorange,
  "header-color": "white",
  "contributor-background": deepcoral,
  "panel-background": deepcoral,
  "panel-border-left": lightorange,
  "contributor-name-color": lightyellow,
  "role-color": brick,
  "github-btn-background": lightorange,
  "chooseTheme-background": deepcoral,
  "btn-default-background": lightyellow,
  "btn-default-color": brick,
  "btn-primary-background": lightyellow,
  "btn-primary-color": brick,
  "comment-slide-background": lightyellow,
  "comment-slide-color": brick,
  "widget-background": deepcoral,
  "section-header-color": brick,
};

darkTheme.onclick = () => {
  changeTheme(dark);
};

forestTheme.onclick = () => {
  changeTheme(forest);
};

beachTheme.onclick = () => {
  changeTheme(beach);
};

summerdayTheme.onclick = () => {
  changeTheme(summerday);
};

defaultTheme.onclick = () => {
  changeTheme(pageDefault);
};

let changeTheme = (theme) => {
  localStorage.setItem("theme", JSON.stringify(theme));
  $(".container-fluid").css("background-color", theme["page-background"]);
  $(".section-container").css(
    "background-color",
    theme["sectionContainer-background"]
  );
  $(".header").css("background-color", theme["header-background"]);
  $(".header").css("color", theme["header-color"]);
  $(".dropdown-toggle").css(
    "background-color",
    theme["chooseTheme-background"]
  );
  $(".contributors-btn").css(
    "background-color",
    theme["contributor-background"]
  );
  $(".btn-default").css("background-color", theme["btn-default-background"]);
  $(".btn-default").css("color", theme["btn-default-color"]);
  $(".btn-primary").css("background-color", theme["btn-primary-background"]);
  $(".btn-primary").css("color", theme["btn-primary-color"]);
  $(".carousel-inner").css(
    "background-color",
    theme["comment-slide-background"]
  );
  $(".carousel-comment").css("color", theme["comment-slide-color"]);
  $(".widget").css("background-color", theme["widget-background"]);
  $(".section-header").css("color", theme["section-header-color"]);
  $(".panel").css("background", theme["panel-background"]);
  $(".panel").css("border-left", theme["panel-border-left"]);
  $(".role").css("color", theme["role-color"]);
  $(".github-btn").css("background", theme["github-btn-background"]);
  $(".name").css("color", theme["contributor-name-color"]);
};
