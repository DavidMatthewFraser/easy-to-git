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
];

const cssQuestions = [
  {
    question: "Which position is not affected by the top, bottom, left, and right properties",
    answers: ["relative", "absolute", "fixed", "static"],
    correctAnswer: "static",
  },
  {
    question: "Which of the following is not a valid border-style property value",
    answers: ["dotted", "solid", "double", "slashes"],
    correctAnswer: "slashes",
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
];

const sections = [htmlQuestions, cssQuestions, javascriptQuestions];
