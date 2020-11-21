$(document).ready(function () {
  if (localStorage.getItem("theme") == null) {
    changeTheme(pageDefault);
  } else {
    changeTheme(JSON.parse(localStorage.getItem("theme")));
  }
});
// Homepage Themes
let pageDefault = {
  "page-background": "#190F26",
  "sectionContainer-background": "#F1F1F3",
  "header-background": "#392259",
  "header-color": "white",
  "contributor-background": "#5A378C",
  "panel-background": "#1f011a",
  "panel-border-left": "15px solid #620050",
  "contributor-name-color": "#900e78",
  "role-color": "#620050",
  "github-btn-background": "#3b0632",
  "chooseTheme-background": "#392259",
  "btn-default-background": "#392259",
  "btn-default-color": "white",
  "btn-primary-background": "#5A378C",
  "btn-primary-color": "white",
  "comment-slide-background": "#392259",
  "comment-slide-color": "white",
  "widget-background": "white",
  "section-header-color": "#c57ee6",
  "contributor-btn-color": "#fff",
};
let light = {
  themeName: "light",
  "page-background": "#f1a7e4",
  "sectionContainer-background": "#c69dfc",
  "header-background": "#900e78",
  "header-color": "white",
  "contributor-background": "#b9189c",
  "panel-background": "#1f011a",
  "panel-border-left": "15px solid #620050",
  "contributor-name-color": "#900e78",
  "role-color": "#620050",
  "github-btn-background": "#3b0632",
  "chooseTheme-background": "#b9189c",
  "btn-default-background": "#e3baff",
  "btn-primary-background": "#24a0ed",
  "btn-default-color": "black",
  "btn-primary-color": "white",
  "comment-slide-background": "#fdc4ff",
  "comment-slide-color": "black",
  "widget-background": "#e3baff",
  "section-header-color": "#900e78",
};
let forest = {
  themeName: "forest",
  "page-background": "#73b36b",
  "sectionContainer-background": "#60805c",
  "header-background": "#4f784a",
  "header-color": "black",
  "contributor-background": "#8f6f5e",
  "panel-background": "#1f011a",
  "panel-border-left": "15px solid #620050",
  "contributor-name-color": "#900e78",
  "role-color": "#620050",
  "github-btn-background": "#3b0632",
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
  "panel-background": "#1f011a",
  "panel-border-left": "15px solid #620050",
  "contributor-name-color": "#900e78",
  "role-color": "#620050",
  "github-btn-background": "#3b0632",
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
// Summer Day Colors
const lightyellow = "#FDE1A9";
const lightorange = "#F89D70";
const deepcoral = "#D5544B";
const almostwhite = "#E3EAF3";
const lightblue = "#BADCF6";
const blue = "#A4CAED";
const brick = "#6b2a1d";
const orange = "#ff9900";
//
let summerday = {
  themeName: "summerday",
  "page-background": lightyellow,
  "sectionContainer-background": lightorange,
  "header-background": lightorange,
  "header-color": "white",
  "contributor-background": deepcoral,
  "panel-background": deepcoral,
  "panel-border-left": "15px solid #cf4449",
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
/// Brian Loveless Pumpkin Spice fall
// Pumpkin Colors
const BLlightyellow = "#ccff99";
const BLlightorange = "#ffcc66";
const BLblack = "#000000";
const BLorange = "#ff9900";
//
let pumpkinSpice = {
  themeName: "pumpkinSpice",
  "page-background": BLorange,
  "sectionContainer-background": BLlightorange,
  "header-background": BLlightorange,
  "header-color": "white",
  "contributor-background": BLorange,
  "panel-background": BLorange,
  "panel-border-left": "15px dotted #A4CAED",
  "contributor-name-color": BLlightyellow,
  "role-color": BLblack,
  "github-btn-background": BLlightorange,
  "chooseTheme-background": BLorange,
  "btn-default-background": BLlightyellow,
  "btn-default-color": BLblack,
  "btn-primary-background": BLlightyellow,
  "btn-primary-color": BLblack,
  "comment-slide-background": BLlightyellow,
  "comment-slide-color": BLblack,
  "widget-background": BLorange,
  "section-header-color": BLblack,
};

//New
let abyss = {
  themeName: "abyss",
  "body-font": "'Montserrat', sans-serif",
  "home-text-size": "1.2em",
  "page-background": "black",
  "sectionContainer-background": "hsla(0,0%,10%, 0.5)",
  "sectionContainer-text": "hsl(0,0%, 85%)",
  "header-background": "black",
  "header-color": "#fff",
  "contributor-background": "hsl(7, 72%, 50%)",
  "panel-background": "hsl(0,0%,5%)",
  "panel-border-left": "2px solid #ba301e",
  "panel-box-shadow": "0 0 10px 2px #ba301e",
  "contributor-name-color": "hsl(0,0%, 95%)",
  "contributor-btn-color": "hsl(0,0%, 90%)",
  "contributor-border-radius": "2px",
  "role-color": brick,
  "github-btn-background": lightorange,
  "chooseTheme-background": deepcoral,
  "btn-default-background": "transparent",
  "btn-default-color": "hsl(0,0%,80%)",
  "btn-primary-background": lightyellow,
  "btn-primary-color": "#ba301e",
  "web-nav-border": "2px solid #fff",
  "web-nav-shadow": "0px 10px 10px 2px hsl(0,0%,15%)",
  "web-nav-border-radius": "2px",
  "comment-slide-background": lightyellow,
  "comment-slide-color": brick,
  "widget-background": deepcoral,
  "section-header-color": "#ba301e",
  "footer-bg": "hsl(0,0%,5%)",
};
let winter = {
  themeName: "winter",
  "page-background": "#19C9E1 ",
  "sectionContainer-background": "#E3F5F8",
  "header-background": "#97E7F5",
  "header-color": "white",
  "contributor-background": "#B6DCE2 ",
  "panel-background": "#B6DCE2 ",
  "panel-border-left": "15px solid #669DA5 ",
  "contributor-name-color": "#4AB0C0 ",
  "role-color": "#620050",
  "github-btn-background": "#3b0632",
  "chooseTheme-background": "#B6DCE2",
  "btn-default-background": "#B6DCE2  ",
  "btn-primary-background": "#B6DCE2 ",
  "btn-default-color": "black",
  "btn-primary-color": "white",
  "comment-slide-background": "#B6DCE2",
  "comment-slide-color": "black",
  "widget-background": "#B6DCE2",
  "section-header-color": "white",
};

let sky = {
  themeName: "sky",
  "page-background": "#58B1FF",
  "sectionContainer-background": "#E3F5F8",
  "header-background": "#239CFF",
  "header-color": "white",
  "contributor-background": "#B8DEFF ",
  "panel-background": "#B8DEFF ",
  "panel-border-left": "15px solid #669DA5 ",
  "contributor-name-color": "#B8DEFF ",
  "role-color": "#620050",
  "github-btn-background": "#3b0632",
  "chooseTheme-background": "#B8DEFF",
  "btn-default-background": "#B8DEFF  ",
  "btn-primary-background": "#B8DEFF ",
  "btn-default-color": "black",
  "btn-primary-color": "white",
  "comment-slide-background": "#B8DEFF",
  "comment-slide-color": "black",
  "widget-background": "#B8DEFF",
  "section-header-color": "white",
  "footer-bg": "hsl(0,0%,5%)",
};

let autumn = {
  themeName: "autumn",
  "page-background": "#2d1b00",
  "sectionContainer-background": "#ffe184",
  "sectionContainer-text": "#141414",
  "header-background": "#EEC643",
  "header-color": "#011638",
  "contributor-background": "#fd7e14",
  "panel-background": "#2d1b00",
  "panel-border-left": "15px solid #EEC643",
  "contributor-name-color": "#EEC643",
  "contributor-btn-color": "white",
  "role-color": "#141414",
  "github-btn-background": "#EEC643",
  "chooseTheme-background": "#fd7e14",
  "btn-default-background": "#FC7E12",
  "btn-primary-background": "#141414",
  "btn-default-color": "#141414",
  "btn-primary-color": "white",
  "comment-slide-background": "#FC7E12",
  "comment-slide-color": "#2d1b00",
  "widget-background": "#EEF0F2",
  "section-header-color": "#EEC643",
  "footer-bg": "black",
  "home-text-size": "1.2em",
};

let CharcoalBlue = {
  themeName: "CharcoalBlue",
  "page-background": "#36454f",
  "sectionContainer-background": "#6b778d",
  "sectionContainer-text": "#17223b",
  "header-background": "#6b778d",
  "header-color": "#17223b",
  "contributor-background": "#36454f",
  "panel-background": "#6b778d",
  "panel-border-left": "15px solid #263859",
  "contributor-name-color": "#17223b",
  "contributor-btn-color": "e8e8e8",
  "role-color": "#060930",
  "github-btn-background": "#17223b",
  "chooseTheme-background": "#283149",
  "btn-default-background": "#36454f",
  "btn-primary-background": "#e8e8e8",
  "btn-default-color": "#e8e8e8",
  "btn-primary-color": "white",
  "comment-slide-background": "#36454f",
  "comment-slide-color": "#e8e8e8",
  "widget-background": "#17223b",
  "section-header-color": "#e8e8e8",
  "footer-bg": "#6b778d",
  "home-text-size": "1.2em",
};

//Change Theme with jQuery selectors
let changeTheme = (theme) => {
  localStorage.setItem("theme", JSON.stringify(theme));
  $("body").css("font-family", theme["body-font" || "sans-serif"]);
  $("h3").css("font-size", theme["home-text-size"] || "1.75rem");
  $(".container-fluid").css("background-color", theme["page-background"]);
  $(".section-container").css(
    "background-color",
    theme["sectionContainer-background"]
  );
  $(".section-container").css(
    "color",
    theme["sectionContainer-text"] || "inherit"
  );
  $(".google-wrap").css(
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
  $(".contributors-btn").css(
    "color",
    theme["contributor-btn-color"] || "black"
  );
  $(".contributors-btn").css(
    "border-radius",
    theme["contributor-border-radius"] || "5px"
  );
  $(".btn-default").css("background-color", theme["btn-default-background"]);
  $(".btn-default").css("color", theme["btn-default-color"]);
  $(".web-nav").css("background-color", theme["btn-default-background"]);
  $(".web-nav").css("color", theme["btn-default-color"]);
  $(".web-nav").css("border", theme["web-nav-border"] || "initial");
  $(".web-nav").css("box-shadow", theme["web-nav-shadow"] || "initial");
  $(".web-nav").css("border-radius", theme["web-nav-border-radius"], "5px");
  $(".name").css("color", theme["header-background"]);
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
  $(".panel").css("border-bottom", theme["panel-border-left"]);
  $(".panel").css("box-shadow", theme["panel-box-shadow"] || "none");
  $(".role").css("color", theme["role-color"]);
  $(".github-btn").css("background", theme["github-btn-background"]);
  $(".name").css("color", theme["contributor-name-color"]);
  $("footer").css("background", theme["footer-bg"] || "initial");
};
