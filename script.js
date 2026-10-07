

const questions = [

  {
    text: "Представь: ты приходишь в новое место, а там внезапно появляется задача, которую никто не взял на себя. Что ты скорее сделаешь?",
    answers: [
      {
        text: "Если меня попросят — помогу.",
        scores: { initiative: 2, reliability: 2 }
      },
      {
        text: "Сначала посмотрю, что происходит, и возьму то, с чем могу справиться.",
        scores: { initiative: 5, reliability: 4 }
      },
      {
        text: "Если я этого не умею, лучше не вмешиваться.",
        scores: { initiative: 1, independence: 2 }
      },
      {
        text: "Сначала выясню, почему это вообще оказалось моей проблемой.",
        scores: { independence: 4, boundaries: 3 }
      }
    ]
  },


  {
    text: "Твой близкий человек делает то, с чем ты категорически не согласен. Что кажется тебе наиболее здоровым вариантом?",
    answers: [
      {
        text: "Поддержать его в любом случае.",
        scores: { loyalty: 5, maturity: 1 }
      },
      {
        text: "Сказать ему честно, что я думаю, но решить проблему между нами.",
        scores: { maturity: 5, loyalty: 5, team: 5 }
      },
      {
        text: "Не вмешиваться. Каждый сам отвечает за свои решения.",
        scores: { independence: 5, team: 1 }
      },
      {
        text: "Сразу рассказать другим людям, что он неправ.",
        scores: { maturity: 1, loyalty: 1, boundaries: 1 }
      }
    ]
  },


  {
    text: "Друг предлагает тебе провести вечер в компании людей, которых ты почти не знаешь. Твоя первая реакция?",
    answers: [
      {
        text: "Почему бы и нет. Разберусь по ситуации.",
        scores: { independence: 4, initiative: 3 }
      },
      {
        text: "Сначала хочу понять, кто там будет.",
        scores: { boundaries: 4, maturity: 3 }
      },
      {
        text: "Если друзья идут, я тоже.",
        scores: { loyalty: 3, team: 2 }
      },
      {
        text: "Предпочту не идти, если компания мне незнакома.",
        scores: { boundaries: 3, independence: 2 }
      }
    ]
  },


  {
    text: "Если человек, которого ты уважаешь, говорит тебе: «Ты здесь неправ», что тебе ближе?",
    answers: [
      {
        text: "Скорее всего, начну доказывать свою позицию.",
        scores: { independence: 3, maturity: 1 }
      },
      {
        text: "Выслушаю и попробую понять, есть ли в его словах смысл.",
        scores: { maturity: 5, independence: 4 }
      },
      {
        text: "Если это близкий человек, скорее соглашусь.",
        scores: { loyalty: 3, team: 3 }
      },
      {
        text: "Предпочту вообще не спорить.",
        scores: { maturity: 2, boundaries: 1 }
      }
    ]
  },


  {
    text: "Ты не умеешь делать какую-то практическую вещь, но она неожиданно становится необходимой. Что ближе?",
    answers: [
      {
        text: "Попрошу человека, который умеет.",
        scores: { reliability: 2 }
      },
      {
        text: "Посмотрю инструкцию и попробую разобраться.",
        scores: { initiative: 5, independence: 5, reliability: 5 }
      },
      {
        text: "Если это не моя специализация, лучше не лезть.",
        scores: { boundaries: 4 }
      },
      {
        text: "Буду пробовать, даже если сначала получится криво.",
        scores: { initiative: 5, independence: 4 }
      }
    ]
  },


  {
    text: "Два близких тебе человека серьёзно поссорились. Какой подход тебе ближе?",
    answers: [
      {
        text: "Я не вмешиваюсь вообще.",
        scores: { independence: 4, team: 1 }
      },
      {
        text: "Постараюсь понять обе стороны и помочь им нормально поговорить.",
        scores: { maturity: 5, team: 4 }
      },
      {
        text: "Поддержу того, кто мне ближе.",
        scores: { loyalty: 4, team: 3 }
      },
      {
        text: "Если один явно неправ, скажу ему об этом.",
        scores: { maturity: 4, independence: 4 }
      }
    ]
  },


  {
    text: "Как ты относишься к людям, которые постоянно меняют планы в последний момент?",
    answers: [
      {
        text: "Нормально, всякое бывает.",
        scores: { maturity: 2 }
      },
      {
        text: "Раздражает, особенно если это происходит постоянно.",
        scores: { boundaries: 4, reliability: 4 }
      },
      {
        text: "Мне всё равно, я сам ничего не планирую.",
        scores: { independence: 2, reliability: 1 }
      },
      {
        text: "Если человек предупредил и объяснил — нормально.",
        scores: { maturity: 5, boundaries: 4 }
      }
    ]
  },


  {
    text: "Ты видишь, что человеку рядом с тобой явно нужна помощь, но он ничего не просит. Что скорее всего сделаешь?",
    answers: [
      {
        text: "Ничего. Если понадобится — попросит.",
        scores: { boundaries: 4 }
      },
      {
        text: "Скорее предложу помощь.",
        scores: { initiative: 5, team: 4, loyalty: 4 }
      },
      {
        text: "Сначала посмотрю, действительно ли ему нужна помощь.",
        scores: { maturity: 4, initiative: 3 }
      },
      {
        text: "Подожду, пока ситуация станет очевидной.",
        scores: { initiative: 1 }
      }
    ]
  },


  {
    text: "Что для тебя важнее всего в близком человеке?",
    answers: [
      {
        text: "Чтобы с ним было интересно.",
        scores: { independence: 3 }
      },
      {
        text: "Чтобы на него можно было положиться.",
        scores: { reliability: 5, loyalty: 4 }
      },
      {
        text: "Чтобы он давал мне много свободы.",
        scores: { independence: 5, boundaries: 4 }
      },
      {
        text: "Чтобы мы почти всегда были на одной стороне.",
        scores: { team: 5, loyalty: 5 }
      }
    ]
  },


  {
    text: "Человек из твоего круга общения негативно высказывается о твоём близком. Твоя первая реакция?",
    answers: [
      {
        text: "Пусть сами разбираются.",
        scores: { independence: 4, loyalty: 1 }
      },
      {
        text: "Сначала выясню, что именно произошло.",
        scores: { maturity: 5, boundaries: 4 }
      },
      {
        text: "Сразу встану на сторону близкого.",
        scores: { loyalty: 5, team: 5 }
      },
      {
        text: "Попрошу не втягивать меня в это.",
        scores: { boundaries: 4, team: 1 }
      }
    ]
  },


  {
    text: "Как ты обычно относишься к критике от близких людей?",
    answers: [
      {
        text: "Тяжело воспринимаю, даже если понимаю, что она справедлива.",
        scores: { maturity: 1 }
      },
      {
        text: "Если критика конкретная, я могу её принять.",
        scores: { maturity: 5, independence: 4 }
      },
      {
        text: "Близкие не должны меня критиковать.",
        scores: { maturity: 1, boundaries: 1 }
      },
      {
        text: "Выслушаю, но решение всё равно принимаю сам.",
        scores: { maturity: 5, independence: 5 }
      }
    ]
  },


  {
    text: "Представь, что твой партнёр хочет попробовать что-то новое, а тебе это не особенно интересно. Что ты сделаешь?",
    answers: [
      {
        text: "Откажусь, если мне это неинтересно.",
        scores: { independence: 4, boundaries: 4 }
      },
      {
        text: "Попробую хотя бы один раз.",
        scores: { team: 4, initiative: 4, maturity: 4 }
      },
      {
        text: "Скорее соглашусь, если партнёру это важно.",
        scores: { loyalty: 4, team: 5 }
      },
      {
        text: "Предложу альтернативу, которая понравится обоим.",
        scores: { maturity: 5, team: 5 }
      }
    ]
  },


  {
    text: "Что хуже для совместного дела?",
    answers: [
      {
        text: "Человек не умеет что-то делать.",
        scores: { reliability: 2 }
      },
      {
        text: "Человек боится попробовать.",
        scores: { initiative: 1 }
      },
      {
        text: "Человек делает по-своему.",
        scores: { independence: 4 }
      },
      {
        text: "Человек обещает и потом не делает.",
        scores: { reliability: 1 }
      }
    ]
  },


  {
    text: "Если ты понимаешь, что твой друг относится к твоему партнёру несправедливо, что тебе ближе?",
    answers: [
      {
        text: "Это их конфликт, я не вмешиваюсь.",
        scores: { independence: 4, loyalty: 1 }
      },
      {
        text: "Поговорю с другом отдельно.",
        scores: { boundaries: 5, maturity: 5, loyalty: 4 }
      },
      {
        text: "Скажу партнёру, чтобы он не обращал внимания.",
        scores: { team: 1, maturity: 2 }
      },
      {
        text: "Постараюсь сохранить хорошие отношения со всеми.",
        scores: { maturity: 3, boundaries: 2 }
      }
    ]
  },


  {
    text: "Как ты понимаешь здоровую независимость в отношениях?",
    answers: [
      {
        text: "Каждый живёт практически своей жизнью.",
        scores: { independence: 5, team: 1 }
      },
      {
        text: "У каждого есть своё пространство, но важные вещи мы решаем вместе.",
        scores: { independence: 5, team: 5, maturity: 5 }
      },
      {
        text: "Главное — никогда не ограничивать друг друга.",
        scores: { independence: 5, boundaries: 4 }
      },
      {
        text: "Лучше делать всё вместе.",
        scores: { team: 5, independence: 1 }
      }
    ]
  },


  {
    text: "Если близкий человек расстроен из-за твоего поступка, что тебе ближе?",
    answers: [
      {
        text: "Если я не хотел его обидеть, значит проблемы нет.",
        scores: { maturity: 1 }
      },
      {
        text: "Попробую понять, что именно его задело.",
        scores: { maturity: 5, team: 4 }
      },
      {
        text: "Извинюсь, даже если считаю себя правым.",
        scores: { loyalty: 4, maturity: 3 }
      },
      {
        text: "Объясню свою позицию и не буду продолжать разговор.",
        scores: { independence: 4, maturity: 2 }
      }
    ]
  },


  {
    text: "Что тебе ближе: быть человеком, который знает всё заранее, или человеком, который умеет разбираться по ходу?",
    answers: [
      {
        text: "Лучше всё знать заранее.",
        scores: { reliability: 4, boundaries: 3 }
      },
      {
        text: "Уметь разбираться по ходу.",
        scores: { initiative: 5, independence: 5 }
      },
      {
        text: "Зависит от ситуации.",
        scores: { maturity: 4 }
      },
      {
        text: "Предпочитаю, чтобы кто-нибудь другой уже всё решил.",
        scores: { initiative: 1, reliability: 1 }
      }
    ]
  },


  {
    text: "Твой близкий человек совершил ошибку перед другими людьми. Что кажется тебе наиболее правильным?",
    answers: [
      {
        text: "Сразу сказать ему, что он неправ.",
        scores: { maturity: 2 }
      },
      {
        text: "Не унижать его публично, а обсудить потом.",
        scores: { loyalty: 5, team: 5, maturity: 5 }
      },
      {
        text: "Сделать вид, что ничего не произошло.",
        scores: { maturity: 2, loyalty: 3 }
      },
      {
        text: "Сказать другим, что я с ним не согласен.",
        scores: { loyalty: 1, team: 1 }
      }
    ]
  },


  {
    text: "Если отношения становятся сложнее, чем были в начале, твоя первая реакция?",
    answers: [
      {
        text: "Если стало сложно — возможно, это не мой человек.",
        scores: { commitment: 1 }
      },
      {
        text: "Попробовать понять, что изменилось.",
        scores: { maturity: 5, commitment: 5 }
      },
      {
        text: "Дать отношениям время и посмотреть.",
        scores: { commitment: 3 }
      },
      {
        text: "Поговорить напрямую.",
        scores: { maturity: 5, commitment: 5, team: 5 }
      }
    ]
  },


  {
    text: "Что для тебя сильнее всего показывает характер человека?",
    answers: [
      {
        text: "То, как он ведёт себя, когда всё идёт по плану.",
        scores: { reliability: 3 }
      },
      {
        text: "То, что он делает, когда никто не контролирует.",
        scores: { reliability: 5, independence: 5 }
      },
      {
        text: "То, как он выглядит в глазах других.",
        scores: { loyalty: 2 }
      },
      {
        text: "То, как он ведёт себя, когда ему трудно.",
        scores: { reliability: 5, maturity: 5 }
      }
    ]
  },


  {
    text: "Тебе предлагают выбор между комфортным вариантом и вариантом, который даст больше опыта. Что выберешь?",
    answers: [
      {
        text: "Комфорт.",
        scores: { boundaries: 3 }
      },
      {
        text: "Опыт.",
        scores: { initiative: 5, independence: 4 }
      },
      {
        text: "Зависит от риска.",
        scores: { maturity: 5 }
      },
      {
        text: "Выберу то, что уже умею.",
        scores: { reliability: 3 }
      }
    ]
  },


  {
    text: "Как ты относишься к фразе «мы — команда»?",
    answers: [
      {
        text: "Звучит красиво, но каждый всё равно сам за себя.",
        scores: { independence: 5, team: 1 }
      },
      {
        text: "Это значит, что важные проблемы мы решаем вместе.",
        scores: { team: 5, maturity: 5 }
      },
      {
        text: "Это значит всегда соглашаться друг с другом.",
        scores: { team: 4, maturity: 1 }
      },
      {
        text: "Это скорее про поддержку, а не про постоянное согласие.",
        scores: { team: 5, loyalty: 5, maturity: 5 }
      }
    ]
  },


  {
    text: "Если тебе говорят: «Мне неприятно, как этот человек со мной разговаривает», что ты скорее сделаешь?",
    answers: [
      {
        text: "Скажу, что человек мог не иметь плохих намерений.",
        scores: { maturity: 2 }
      },
      {
        text: "Попрошу объяснить, что именно произошло.",
        scores: { maturity: 5, boundaries: 4 }
      },
      {
        text: "Если это близкий мне человек — вмешаюсь.",
        scores: { loyalty: 5, team: 5, boundaries: 5 }
      },
      {
        text: "Скажу, что лучше не обращать внимания.",
        scores: { loyalty: 1, team: 1 }
      }
    ]
  },


  {
    text: "Что тебе ближе в долгосрочных отношениях?",
    answers: [
      {
        text: "Смотреть, как всё развивается само.",
        scores: { commitment: 1 }
      },
      {
        text: "Понимать, куда мы движемся.",
        scores: { commitment: 5, reliability: 4 }
      },
      {
        text: "Не загадывать слишком далеко.",
        scores: { independence: 4, commitment: 2 }
      },
      {
        text: "Строить планы, но оставлять место для изменений.",
        scores: { commitment: 5, maturity: 5 }
      }
    ]
  },


  {
    text: "Если ты понимаешь, что твой близкий человек сильно расстроен, но формально он неправ, что тебе ближе?",
    answers: [
      {
        text: "Сказать ему прямо, что он неправ.",
        scores: { independence: 4, maturity: 3 }
      },
      {
        text: "Сначала поддержать, потом обсудить, где он ошибся.",
        scores: { loyalty: 5, team: 5, maturity: 5 }
      },
      {
        text: "Не вмешиваться.",
        scores: { independence: 4, team: 1 }
      },
      {
        text: "Согласиться с ним, чтобы не расстраивать.",
        scores: { loyalty: 4, maturity: 1 }
      }
    ]
  },


  {
    text: "Какой человек вызывает у тебя больше уважения?",
    answers: [
      {
        text: "Тот, кто всегда знает, что делает.",
        scores: { reliability: 4 }
      },
      {
        text: "Тот, кто может признать, что чего-то не знает, и научиться.",
        scores: { initiative: 5, maturity: 5, independence: 5 }
      },
      {
        text: "Тот, кто умеет добиваться своего.",
        scores: { independence: 5, initiative: 4 }
      },
      {
        text: "Тот, кто умеет ладить со всеми.",
        scores: { maturity: 3, boundaries: 2 }
      }
    ]
  }

];



/*
=========================================
STATE
=========================================
*/

let currentQuestion = 0;

let selectedAnswer = null;

let scores = {
  initiative: 0,
  reliability: 0,
  team: 0,
  boundaries: 0,
  independence: 0,
  maturity: 0,
  loyalty: 0,
  commitment: 0
};


/*
=========================================
DOM
=========================================
*/

const startScreen =
  document.getElementById("start-screen");

const quizScreen =
  document.getElementById("quiz-screen");

const resultScreen =
  document.getElementById("result-screen");

const startBtn =
  document.getElementById("start-btn");

const nextBtn =
  document.getElementById("next-btn");

const restartBtn =
  document.getElementById("restart-btn");

const questionText =
  document.getElementById("question-text");

const questionNumber =
  document.getElementById("question-number");

const answersContainer =
  document.getElementById("answers");

const questionCounter =
  document.getElementById("question-counter");

const progress =
  document.getElementById("progress");

const percent =
  document.getElementById("percent");



/*
=========================================
START
=========================================
*/

startBtn.addEventListener("click", startQuiz);

function startQuiz() {

  currentQuestion = 0;

  scores = {
    initiative: 0,
    reliability: 0,
    team: 0,
    boundaries: 0,
    independence: 0,
    maturity: 0,
    loyalty: 0,
    commitment: 0
  };

  startScreen.classList.remove("active");

  resultScreen.classList.remove("active");

  quizScreen.classList.add("active");

  showQuestion();
}



/*
=========================================
SHOW QUESTION
=========================================
*/

function showQuestion() {

  selectedAnswer = null;

  nextBtn.disabled = true;

  const question = questions[currentQuestion];

  questionText.textContent = question.text;

  questionNumber.textContent =
    String(currentQuestion + 1).padStart(2, "0");

  questionCounter.textContent =
    `Вопрос ${currentQuestion + 1} из ${questions.length}`;

  const percentage =
    Math.round(
      ((currentQuestion + 1) / questions.length) * 100
    );

  percent.textContent = `${percentage}%`;

  progress.style.width = `${percentage}%`;

  answersContainer.innerHTML = "";

  const shuffledAnswers =
    [...question.answers].sort(() => Math.random() - 0.5);

  shuffledAnswers.forEach((answer, index) => {

    const button =
      document.createElement("button");

    button.className = "answer";

    button.innerHTML = `
      <span class="answer-letter">
        ${String.fromCharCode(65 + index)}
      </span>
      ${answer.text}
    `;

    button.addEventListener(
      "click",
      () => selectAnswer(button, answer)
    );

    answersContainer.appendChild(button);
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}



/*
=========================================
SELECT ANSWER
=========================================
*/

function selectAnswer(button, answer) {

  document
    .querySelectorAll(".answer")
    .forEach(el =>
      el.classList.remove("selected")
    );

  button.classList.add("selected");

  selectedAnswer = answer;

  nextBtn.disabled = false;
}



/*
=========================================
NEXT
=========================================
*/

nextBtn.addEventListener("click", nextQuestion);

function nextQuestion() {

  if (!selectedAnswer) return;

  Object.entries(selectedAnswer.scores)
    .forEach(([trait, value]) => {

      scores[trait] += value;

    });

  currentQuestion++;

  if (currentQuestion >= questions.length) {

    finishQuiz();

  } else {

    showQuestion();

  }
}



/*
=========================================
NORMALIZE SCORES
=========================================
*/

function normalizeScores() {

  const maxPossible = {};

  Object.keys(scores).forEach(trait => {
    maxPossible[trait] = 25 * 5;
  });

  const normalized = {};

  Object.keys(scores).forEach(trait => {

    normalized[trait] =
      Math.min(
        100,
        Math.round(
          (scores[trait] / maxPossible[trait]) * 100
        )
      );

  });

  return normalized;
}



/*
=========================================
COMPATIBILITY
=========================================

Здесь задаётся профиль, который условно
считается наиболее совместимым с тобой.

Не показываем эти веса пользователю.
=========================================
*/

function calculateCompatibility(s) {

  const ideal = {

    initiative: 85,

    reliability: 85,

    team: 90,

    boundaries: 85,

    independence: 80,

    maturity: 90,

    loyalty: 90,

    commitment: 80

  };


  const weights = {

    initiative: 1.2,

    reliability: 1.2,

    team: 1.4,

    boundaries: 1.3,

    independence: 0.9,

    maturity: 1.4,

    loyalty: 1.5,

    commitment: 1.0

  };


  let total = 0;

  let weightTotal = 0;


  Object.keys(ideal).forEach(trait => {

    const difference =
      Math.abs(
        s[trait] - ideal[trait]
      );

    const similarity =
      100 - difference;

    total +=
      similarity * weights[trait];

    weightTotal +=
      100 * weights[trait];

  });


  return Math.round(
    (total / weightTotal) * 100
  );
}



/*
=========================================
PROFILE
=========================================
*/

function getProfile(s) {

  const team =
    s.team >= 75;

  const initiative =
    s.initiative >= 70;

  const maturity =
    s.maturity >= 75;

  const independence =
    s.independence >= 70;

  const loyalty =
    s.loyalty >= 75;

  const commitment =
    s.commitment >= 70;


  if (
    team &&
    initiative &&
    maturity &&
    loyalty
  ) {

    return {
      title: "Командный самостоятельный",

      description:
        "Ты умеешь сочетать самостоятельность с ощущением команды. Для тебя близость не означает потерю свободы, а поддержка не означает отсутствие собственного мнения. Ты скорее за отношения, где оба человека остаются собой, но в важных ситуациях действуют как команда."
    };

  }


  if (
    initiative &&
    independence &&
    !team
  ) {

    return {
      title: "Автономный исследователь",

      description:
        "Ты привык рассчитывать на себя и ценишь свободу действий. Тебе комфортно самому принимать решения и разбираться с возникающими проблемами. Иногда тебе может быть сложнее перестроиться на формат, где важные решения требуют постоянной координации с другим человеком."
    };

  }


  if (
    loyalty &&
    team &&
    !independence
  ) {

    return {
      title: "Верный командный человек",

      description:
        "Для тебя особенно важны близость, взаимная поддержка и ощущение «мы». Ты хорошо включаешься в отношения и ценишь чувство принадлежности. При этом тебе важно не забывать о собственных границах и интересах."
    };

  }


  if (
    maturity &&
    independence &&
    initiative
  ) {

    return {
      title: "Самостоятельный стратег",

      description:
        "Ты предпочитаешь сначала разобраться в ситуации, а затем действовать. Ценишь собственное мнение, умеешь принимать решения и скорее воспринимаешь сложности как задачи, которые можно решить."
    };

  }


  return {
    title: "Гибкий адаптер",

    description:
      "Ты достаточно гибко реагируешь на обстоятельства и предпочитаешь оценивать ситуацию по контексту. Твой стиль поведения может сильно меняться в зависимости от людей и обстоятельств."
  };
}



/*
=========================================
FINISH
=========================================
*/

function finishQuiz() {

  const normalized =
    normalizeScores();

  const compatibility =
    calculateCompatibility(normalized);

  const profile =
    getProfile(normalized);


  quizScreen.classList.remove("active");

  resultScreen.classList.add("active");


  document.getElementById(
    "result-title"
  ).textContent = profile.title;


  document.getElementById(
    "result-description"
  ).textContent = profile.description;


  animateNumber(
    "compatibility-score",
    compatibility
  );


  setTimeout(() => {

    document.getElementById(
      "score-progress"
    ).style.width = `${compatibility}%`;

  }, 200);


  document.getElementById(
    "score-text"
  ).textContent =
    getCompatibilityText(compatibility);


  setTrait(
    "initiative",
    normalized.initiative
  );

  setTrait(
    "reliability",
    normalized.reliability
  );

  setTrait(
    "team",
    normalized.team
  );

  setTrait(
    "boundaries",
    normalized.boundaries
  );

  setTrait(
    "independence",
    normalized.independence
  );

  setTrait(
    "maturity",
    normalized.maturity
  );

  setTrait(
    "loyalty",
    normalized.loyalty
  );

  setTrait(
    "commitment",
    normalized.commitment
  );


  generateHiddenMessage(normalized);


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}



/*
=========================================
TRAIT UI
=========================================
*/

function setTrait(name, value) {

  const valueElement =
    document.getElementById(
      `${name}-value`
    );

  const barElement =
    document.getElementById(
      `${name}-bar`
    );


  valueElement.textContent =
    `${value}%`;


  setTimeout(() => {

    barElement.style.width =
      `${value}%`;

  }, 200);
}



/*
=========================================
COMPATIBILITY TEXT
=========================================
*/

function getCompatibilityText(score) {

  if (score >= 90) {

    return "Очень сильное совпадение по ключевым ценностям.";

  }

  if (score >= 80) {

    return "Высокая совместимость. Большинство базовых установок хорошо сочетаются.";

  }

  if (score >= 70) {

    return "Хорошая совместимость, но есть несколько зон, где взгляды могут различаться.";

  }

  if (score >= 60) {

    return "Средняя совместимость. Многое будет зависеть от общения и готовности учитывать различия.";

  }

  return "Заметные различия в важных жизненных установках. Это не приговор, но потребуется больше взаимопонимания.";

}



/*
=========================================
HIDDEN MESSAGE
=========================================

Это можно оставить только тебе,
если ты потом будешь смотреть результаты.
=========================================
*/

function generateHiddenMessage(s) {

  const message =
    document.getElementById(
      "hidden-message"
    );


  let text = "";


  if (s.initiative < 55) {

    text +=
      "Низкая инициативность: человек может чаще ждать внешнего импульса, чем сам начинать действовать. ";

  }


  if (s.boundaries < 55) {

    text +=
      "Границы: может быть склонность избегать жёстких столкновений и сохранять комфортные отношения с разными людьми. ";

  }


  if (s.team < 55) {

    text +=
      "Командность: отношения могут восприниматься более индивидуалистично, чем формат «мы». ";

  }


  if (s.loyalty >= 80) {

    text +=
      "Лояльность высокая: близкие отношения воспринимаются как значимая зона ответственности. ";

  }


  if (s.maturity >= 80) {

    text +=
      "Эмоциональная зрелость высокая: человек склонен разбираться в причинах конфликтов, а не только реагировать на эмоции. ";

  }


  if (s.commitment < 55) {

    text +=
      "Отношение к долгосрочности более осторожное или неопределённое. ";

  }


  if (!text) {

    text =
      "Профиль достаточно сбалансированный: выраженного перекоса по ключевым шкалам не обнаружено.";

  }


  message.textContent = text;
}



/*
=========================================
NUMBER ANIMATION
=========================================
*/

function animateNumber(id, target) {

  const element =
    document.getElementById(id);

  let current = 0;

  const duration = 900;

  const start =
    performance.now();


  function update(time) {

    const progress =
      Math.min(
        (time - start) / duration,
        1
      );


    current =
      Math.floor(
        progress * target
      );


    element.textContent =
      current;


    if (progress < 1) {

      requestAnimationFrame(update);

    }

  }


  requestAnimationFrame(update);
}




restartBtn.addEventListener(
  "click",
  () => {

    resultScreen.classList.remove(
      "active"
    );

    startScreen.classList.add(
      "active"
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }
);
