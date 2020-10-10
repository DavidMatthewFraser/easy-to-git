const questionTemplate = {
  question: "",
  answers: ["", "", "", ""],
  correctAnswer: "",
};
// Feel free to add more questions to the htmlQuestions array below.  The template above shows the expected format.  You can add more or less than the standard four answers, but don't add too many.

const htmlQuestions = [
  {
    question: "What does HTML stand for?",
    answers: [
      "hypertemplate markup language",
      "hybridtext markup language",
      "hypertext markup language",
      "hybridtemplate markup language",
    ],
    correctAnswer: "hypertext markup language",
  },
  {
    question: "How many section heading elements are there in HTML?",
    answers: ["5", "10", "8", "6"],
    correctAnswer: "6",
  },
  {
    question: "What kind of element is a <div>.",
    answers: ["inline", "block", "inline-block"],
    correctAnswer: "block",
  },
  {
    question: "Which of the following tags defines superscript text?",
    answers: ["<sup>", "<downtext>", "<sub>", "<subscript>"],
    correctAnswer: "<sup>",
  },
  {
    question: "Which tag defines an inline frame?",
    answers: ["<frame>", "<inline>", "<iframe>", "<inline frame>"],
    correctAnswer: "<iframe>",
  },
  {
    question:
      "Which of these elements don't require a closing tag?",
    answers: ["img", "h1", "a", "p"],
    correctAnswer: "img",
  },
  {
    question:
      "In HTML5 the break tag requires a closing tag.",
    answers: ["false", "true"],
    correctAnswer: "false",
  },
  {
    question:
      "Which of the following characters indicates the closing of a tag?",
    answers: [".", "\\", "/", ","],
    correctAnswer: "/",
  },
  {
    question: "How is the document type initialized in HTML5?",
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
    question: "Which of these elements adds a line break?",
    answers: ["<break>", "<lb>", "<br>", "<linebreak>"],
    correctAnswer: "<br>",
  },
  {
    question: "Where in my HTML code would I place a line that determines the size of the viewport?",
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
    question: "Which of the tags is the grandparent of tag <strong> in this expression? <div><span><strong></strong></span></div>?",
    answers: ["<span>", "<div>", "</strong>", "no grandparent tag"],
    correctAnswer: "<div>",
  },
  {
    question: "Each of these html extensions are valid except",
    answers: [".html", ".html5", ".htm"],
    correctAnswer: ".html5",
  },
  {
    question: "The tag that displays texts as italics is?",
    answers: ["<li>", "<i>", "<italics>", "<em>"],
    correctAnswer: "<em>",
  },
  {
    question: "HTML is a programming language.",
    answers: ["false", "true"],
    correctAnswer: "false",
  },
  {
    question: "How do you insert a comment in HTML?",
    answers: ["<!-- comment -->", "!! coment !!", "/* comment */", "% comment %"],
    correctAnswer: "<!-- comment -->",
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
      "What is the correct HTML element for referring to an external style sheet?",
    answers: [
      "<stylesheet>mystyle.css</stylesheet>",
      '<link rel="stylesheet" href="mystyle.css">',
      '<style src="mystyle.css">',
    ],
    correctAnswer: '<link rel="stylesheet" href="mystyle.css">',
  },
  {
    question:
      "Which position is not affected by the top, bottom, left, and right properties?",
    answers: ["relative", "absolute", "fixed", "static"],
    correctAnswer: "static",
  },
  {
    question:
      "Which of the following is not a valid border-style property value?",
    answers: ["dotted", "solid", "double", "slashes"],
    correctAnswer: "slashes",
  },
  {
    question:
      "Which of these specificity will take precedence over others?",
    answers: ["h1.red", "h1#yellow", "h1"],
    correctAnswer: "h1#yellow",
  },
  {
    question:
      "Dot (.) is to id while hash (#) is to class. This statement is?",
    answers: ["correct", "wrong"],
    correctAnswer: "wrong",
  },
  {
    question:
      "Internal css does not require the <style> tag in HTML 5.",
    answers: ["true", "false"],
    correctAnswer: "false",
  },
  {
    question:
      "______ is used to select an html tag with an id in css.",
    answers: ["/", ".", "#", "#/"],
    correctAnswer: "#",
  },
  {
    question:
      "If the following styles are found in this order, what color will be displayed? h1{color:red} h1{color:blue} h1{color: green}",
    answers: ["red", "blue", "green"],
    correctAnswer: "green",
  },
  {
    question:
      "Which of these color values is not valid?",
    answers: ["rgba(white)", "rgb(255, 255, 255)", "#fff", "white"],
    correctAnswer: "rgba(white)",
  },
  {
    question:
    "What CSS property is used to apply a background color to a given HTML element?",
    answers: ["color", "border-color", "bg-color", "background-color"],
    correctAnswer: "background-color",
  },
  {
    question: "How do you insert a comment in a CSS file?",
    answers: [
      "// this is a comment",
      "/* this is a comment */",
      "// this is a comment //",
      "' this is a comment"
    ],
    correctAnswer: "/* this is a comment */"
  },
  {
    question: "How do you make the text bold?",
    answers: [
      "font: bold;",
      "font-weight: bold;",
      "style: bold;"
    ],
    correctAnswer: "font-weight: bold;"
  }
];

const javascriptQuestions = [
  {
    question: "Which of the following has function scope?",
    answers: ["var", "let", "const"],
    correctAnswer: "var",
  },
  {
    question: "Which of the following values is not falsy?",
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
    question: "What is the result of the expression 'var1 && var2' if var1 = true and var2 = false?",
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
    question: "Process of removing an element from stack is called __________.",
    answers: ["Create", "Push", "Evaluation", "Pop"],
    correctAnswer: "Pop",
  },
  {
    question: "In a stack, if a user tries to remove an element from empty stack it is called _________.",
    answers: ["Underflow", "Empty collection", "Overflow", "Garbage Collection"],
    correctAnswer: "Underflow",
  },
  {
    question: "Pushing an element into stack already having five elements and stack size of 5, then stack becomes?",
    answers: ["Overflow", "Crash","Underflow","User flow"],
    correctAnswer: "Overflow",
  },
];

const sections = [htmlQuestions, cssQuestions, javascriptQuestions, dataStructure];
