const questionTemplate = {
  question: "",
  answers: ["", "", "", ""],
  correctAnswer: "",
};

// feel free to add some questions to the arrays a template is above, you can put more of less than for answers but dont have to many

const htmlQuestions = [
  {
    question: "What does HTML stand for",
    answers: [
      "hypertemplate markup language",
      "hybridtext markup language",
      "hypertext markup language",
      "hybridtemplate markup language",
    ],
    correctAnswer: "hypertext markup language",
  },
  {
    question: "How many types of heading does an HTML contain",
    answers: ["5", "10", "8", "6"],
    correctAnswer: "6",
  },
  {
    question: "What kind of element is a <div>",
    answers: ["inline", "block", "inline-block"],
    correctAnswer: "block",
  },
  {
    question: "Which of the following tags defines superscript text",
    answers: ["<sup>", "<downtext>", "<sub>", "<subscript>"],
    correctAnswer: "<sup>",
  },
  {
    question: "which tag defines an inline frame",
    answers: ["<frame>", "<inline>", "<iframe>", "<inline frame>"],
    correctAnswer: "<iframe>",
  },
  {
    question:
      "Which of the following characters indicates the closing of a tag?",
    answers: [".", "\\", "/", ","],
    correctAnswer: "/",
  },

  {
    question: "How is the document type initialized in HTML5.?",
    answers: [
      "<DOCTYPE html>",
      "<!DOCTYPE>",
      "<!DOCTYPE html>",
      "</DOCTYPE html>",
    ],
    correctAnswer: "<!DOCTYPE html>",
  },
  {
    question: "Who is the creator of HTML?",
    answers: ["Bill Gates", "Charles Babbage", "Tim Berners-Lee", "Google"],
    correctAnswer: "Tim Berners-Lee",
  },
  {
    question: "Which of these adds a line break?",
    answers: ["<break>", "<lb>", "<br>", "<linebreak>"],
    correctAnswer: "<br>",
  },
  {
    question: "Where in my html code would I place a line that determines the size of the viewport?",
    answers: ["<body>", "<header>", "<footer>", "<head>"],
    correctAnswer: "<head>",
  },
  {
    question: "In what order should the following tags be located?",
    answers: ["<html>, <body>, <head>", "<body>, <html>, <head>",
              "<head>, <body> <html>", "<html>, <head>, <body>"],
    correctAnswer: "<html>, <head>, <body>",
  },
  {
    question: "In which element would I usually find <footer>?",
    answers: ["<header>", "<body>", "<head>", "<nav>"],
    correctAnswer: "<body>",
  },
  {
    question: "Which of the following can never contain an attribute?",
    answers: ["<body>", "<html>", "<!DOCTYPE html>", "<a>"],
    correctAnswer: "<!DOCTYPE html>",
  },
  {
    question: "Which of the following is not a list tag?",
    answers: ["<dl>", "<ol>", "<dd>", "<ul>"],
    correctAnswer: "<dd>",
  },
];

const cssQuestions = [
  {
    question: "What does CSS stand for?",
    answers: [
      "Colourful Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets",
    ],
    correctAnswer: "Cascading Style Sheets",
  },
  {
    question:
      "What is the correct HTML for referring to an external style sheet?",
    answers: [
      "<stylesheet>mystyle.css</stylesheet>",
      '<link rel="stylesheet" type="text/css" href="mystyle.css">',
      ' <style src="mystyle.css">',
    ],
    correctAnswer: '<link rel="stylesheet" type="text/css" href="mystyle.css">',
  },
  {
    question:
      "Which position is not affected by the top, bottom, left, and right properties",
    answers: ["relative", "absolute", "fixed", "static"],
    correctAnswer: "static",
  },
  {
    question:
      "Which of the following is not a valid border-style property value",
    answers: ["dotted", "solid", "double", "slashes"],
    correctAnswer: "slashes",
  },
  {
    question:
      "How many heading tags does HTML have",
    answers: ["3", "6", "7", "6"],
    correctAnswer: "6",
  },
  {
    question:
      "Which of this does no require a closing tag",
    answers: ["img", "h1", "a", "p"],
    correctAnswer: "img",
  },

];

const javascriptQuestions = [
  {
    question: "Which of the following has function scope",
    answers: ["var", "let", "const"],
    correctAnswer: "var",
  },
  {
    question: "Which of the following values is not falsy",
    answers: ["0", "undefined", "null", "'false'"],
    correctAnswer: "'false'",
  },
  {
    question: "Inside which HTML element does the JavaScript go?",
    answers: ["<js>", "<javascript>", "<script>", "<execute>"],
    correctAnswer: "<script>",
  },
  {
    question: "An external JavaScript file must contain the <script> tag.",
    answers: ["True", "False"],
    correctAnswer: "False",
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: [
      'alertBox("Hello World")',
      'alert("Hello World")',
      'message("Hello World")',
      'print("Hello World")',
    ],
    correctAnswer: 'alert("Hello World")',
  },
  {
    question: "Which of the following is used to convert an input from prompt() to a number?",
    answers: ["int()", "Number()", "alert()", "Math.floor()"],
    correctAnswer: "Number()",
  },
  {
    question: "What is the file extension for JavaScript?",
    answers: [".j", ".jscript", ".js", ".jasc"],
    correctAnswer: ".js",
  },
  {
    question: "What is the result of the expression 'var1 && var2' if var1 = true and var2 = false",
    answers: ["false", "null", "true", "undefined"],
    correctAnswer: "false",
  },
];

const dataStructure= [
  {
    question: "Process of inserting an element in stack is called ____________.",
    answers: ["Create", "Push", "Evaluation","Pop"],
    correctAnswer: "Push",
  },
  {
    question: "Process of removing an element from stack is called __________",
    answers: ["Create", "Push", "Evaluation", "Pop"],
    correctAnswer: "Pop",
  },
  {
    question: "In a stack, if a user tries to remove an element from empty stack it is called _________",
    answers: ["Underflow", "Empty collection", "Overflow", "Garbage Collection"],
    correctAnswer: "Underflow",
  },
  {
    question: " Pushing an element into stack already having five elements and stack size of 5, then stack becomes?",
    answers: ["Overflow", "Crash","Underflow","User flow"],
    correctAnswer: "Overflow",
  },
];

const sections = [htmlQuestions, cssQuestions, javascriptQuestions,dataStructure];
