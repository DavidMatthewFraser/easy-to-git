$(".back-button").click(() => (window.location = "../index.html"));

let remainingTime = 30;
let quizEnded = false;
let chosenSection = "";
let correct = 0;

const questionSections = [
  {
    number: 1,
    title: "html",
    totalQuestions: htmlQuestions.length,
  },
  {
    number: 2,
    title: "css",
    totalQuestions: cssQuestions.length,
  },
  {
    number: 3,
    title: "javascript",
    totalQuestions: javascriptQuestions.length,
  },
  {
    number: 4,
    title: "Data Structure",
    totalQuestions: dataStructure.length,
  }
];

const addToCorrect = () => correct++;

const answer = (answer) => {
  const text = answer.includes("<")
    ? `<code>${answer.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code>`
    : answer;

  return `<div class="answer flex">
    <div class="answer-button flex-center">
      <div class="answer-circle"></div>
    </div>
    <div class="flex-center">
      <h3 class="answer-text">${text}</h3>
    </div>
  </div>`;
};

const animateCSS = (element, animation, prefix = "animate__") =>
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    element.addClass(`${prefix}animated ${animationName}`);

    const handleAnimationEnd = () => {
      element.removeClass(`${prefix}animated ${animationName}`);
      element.off("animationend", handleAnimationEnd);

      resolve("Animation ended");
    };

    element.on("animationend", handleAnimationEnd);
  });

const cleanAnswers = () => {
  $(".answers").html(null);
};

const reset = () => {
  correct = 0;
  quizEnded = false;
  remainingTime = 30;
};

const showScore = (total) => {
  quizEnded = true;
  $(".quiz-over").append(
    `<h1 class="end-score">You scored ${correct} out of ${total}</h1>`
  );
};

const slideUpAnimation = async (question) => {
  const questionArea = $(".question-area");
  await animateCSS(questionArea, "fadeOutUp");

  showQuestion(++question);

  animateCSS(questionArea, "fadeInUp");
};

// const startTimer = (question) => {
//   let interval = setInterval(() => {
//     remainingTime--;
//     if (remainingTime < 1) {
//        slideUpAnimation(question)
//        remainingTime = 30
//       clearInterval(interval);
//     }
//   }, 1000);
// };

function showQuestion(question) {
  $(".end-score").remove();
  cleanAnswers();
  // startTimer(question);
  const currentQuestion = chosenSection[question];
  const questionText = currentQuestion.question.endsWith("?")
    ? currentQuestion.question
    : currentQuestion.question + "?";
  $(".slide-amount").text(`${question + 1} / ${chosenSection.length}`);
  $(".question").text(questionText);
  $.each(currentQuestion.answers, (index, item) => {
    $(".answers").append(answer(item));
  });
  const correctAnswer = currentQuestion.correctAnswer;
  const answerNodes = $(".answer");
  $.each(answerNodes, (index, node) => {
    $(node).click(function () {
      if (!quizEnded) {
        $(this).find(".answer-circle").css("background", "white");
        const textNode = $(this).find(".answer-text");
        const text = textNode.text().toLowerCase();
        if (text === correctAnswer.toLowerCase()) {
          addToCorrect();
        }
        if (question < chosenSection.length - 1) {
          slideUpAnimation(question);
        } else {
          showScore(chosenSection.length);
        }
      }
    });
  });
}

const startQuiz = async () => {
  reset();
  const startScreen = $(".start-screen");
  const questionArea = $(".question-area");
  await animateCSS(startScreen, "fadeOutUp");
  startScreen.hide();
  questionArea.show();
  showQuestion(0);
  animateCSS(questionArea, "fadeInUp");
};

const slideLeftAnimation = async ({ title }, firstLoad) => {
  const startScreen = $(".start-screen");
  const questionArea = $(".question-area");
  const startScreenHidden = startScreen.css("display") === "none";
  $(".title").text(title);

  if (startScreenHidden) {
    await animateCSS(questionArea, "backOutDown");
    questionArea.hide();
    startScreen.show();

    $(".start-screen h1").text(`${title} quiz`);
    $(".start-screen h3").text(`Test your ${title} skills out.`);
    await animateCSS(startScreen, "backInDown");
  } else {
    if (!firstLoad) {
      await animateCSS(startScreen, "bounceOutRight");
    }

    $(".start-screen h1").text(`${title} quiz`);
    $(".start-screen h3").text(`Test your ${title} skills out.`);
    if (!firstLoad) {
      animateCSS(startScreen, "bounceInLeft");
    }
  }
};

const updateQuiz = (section) => {
  const currentSection = sections[section];
  chosenSection = currentSection;
  $(".slide-amount").text("");
};

const changeSection = (number, firstLoad) => {
  const section = number - 1;

  $(".circle").each((index, item) => {
    if (index === section) {
      $(item).addClass("fill");
    } else {
      $(item).removeClass("fill");
    }
  });

  updateQuiz(section);
  slideLeftAnimation(questionSections[section], firstLoad);
};

const chooserButton = ({ number, title, totalQuestions }) => {
  return `<div class="chooser-button" onClick="changeSection(${number})">
         <div class="number">
        <h2 class="number-title">${number}</h2>
      </div>
      <div class="chooser-text">
        <div class="chooser-text-wrap">
          <p class="chooser-title">${title}</p>
          <p class="chooser-subtitle">${totalQuestions} Questions</p>
        </div>
      </div>
      <div class="chooser-button-wrap" >
        <div class="circle"></div>
      </div>
    </div>`;
};

$.each(questionSections, (index, item) => {
  $(".buttons").append(chooserButton(item));
});

changeSection(1, true);

$(".start-btn").click(startQuiz);
