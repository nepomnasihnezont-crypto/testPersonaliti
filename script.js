const questions = [

    {
        text: "Ты договорился с человеком о встрече, но ближе к вечеру понимаешь, что планы начинают разваливаться.",
        answers: [
            {
                text: "Подожду, пока второй человек сам предложит решение.",
                score: { initiative: 1, independence: 0, reliability: 0, flexibility: 1 }
            },
            {
                text: "Напишу, что произошло, и предложу несколько вариантов.",
                score: { initiative: 2, independence: 1, reliability: 2, flexibility: 1 }
            },
            {
                text: "Скорее всего просто перенесу встречу.",
                score: { initiative: 0, independence: 1, reliability: 1, flexibility: 1 }
            },
            {
                text: "Попробую самостоятельно решить проблему, а потом сообщу, что получилось.",
                score: { initiative: 3, independence: 3, reliability: 2, flexibility: 1 }
            }
        ]
    },

    {
        text: "Тебе предлагают попробовать занятие, в котором ты вообще ничего не умеешь.",
        answers: [
            {
                text: "Если не получается с первого раза, скорее всего брошу.",
                score: { growth: 0, independence: 1, flexibility: 0 }
            },
            {
                text: "Попробую, если рядом есть человек, который умеет.",
                score: { growth: 2, independence: 1, flexibility: 2 }
            },
            {
                text: "Разберусь сам по ходу дела.",
                score: { growth: 3, independence: 3, initiative: 2 }
            },
            {
                text: "Сначала посмотрю, насколько это вообще полезно.",
                score: { growth: 2, independence: 2, responsibility: 2 }
            }
        ]
    },

    {
        text: "В компании начинается спор. Ты понимаешь, что оба человека немного неправы.",
        answers: [
            {
                text: "Лучше не вмешиваться, пусть сами разбираются.",
                score: { conflict: 1, flexibility: 1, empathy: 1 }
            },
            {
                text: "Попробую объяснить, где именно каждый ошибается.",
                score: { conflict: 3, empathy: 3, independence: 2 }
            },
            {
                text: "Поддержу того, с кем я ближе общаюсь.",
                score: { loyalty: 3, conflict: 1, flexibility: 0 }
            },
            {
                text: "Если спор не касается меня, лучше перевести тему.",
                score: { conflict: 1, flexibility: 2 }
            }
        ]
    },

    {
        text: "Ты случайно узнаёшь о неприятной ситуации, которая касается близкого тебе человека, но тебя напрямую о ней не спрашивали.",
        answers: [
            {
                text: "Ничего не скажу — раз не спросили, значит, не надо.",
                score: { boundaries: 2, loyalty: 1, empathy: 1 }
            },
            {
                text: "Сначала пойму, насколько информация вообще достоверна.",
                score: { responsibility: 3, flexibility: 2, empathy: 2 }
            },
            {
                text: "Скажу человеку, потому что считаю, что он должен знать.",
                score: { loyalty: 3, initiative: 2, responsibility: 2 }
            },
            {
                text: "Расскажу только если ситуация может реально повлиять на него.",
                score: { responsibility: 3, boundaries: 3, loyalty: 2 }
            }
        ]
    },

    {
        text: "Человек, которого ты уважаешь, делает то, с чем ты категорически не согласен.",
        answers: [
            {
                text: "Отношение к человеку от этого не изменится.",
                score: { loyalty: 2, flexibility: 2 }
            },
            {
                text: "Обсужу с ним, почему считаю поступок неправильным.",
                score: { independence: 3, conflict: 3, loyalty: 2 }
            },
            {
                text: "Если это меня не касается, промолчу.",
                score: { boundaries: 3, conflict: 0 }
            },
            {
                text: "Сначала постараюсь понять, почему он так поступил.",
                score: { empathy: 3, flexibility: 3 }
            }
        ]
    },

    {
        text: "Ты пообещал что-то сделать, но потом понял, что переоценил свои силы.",
        answers: [
            {
                text: "Постараюсь всё равно выполнить, даже если будет тяжело.",
                score: { reliability: 3, responsibility: 3 }
            },
            {
                text: "Скажу об этом как можно раньше.",
                score: { reliability: 3, responsibility: 3, communication: 2 }
            },
            {
                text: "Посмотрю, получится ли решить проблему без привлечения других.",
                score: { independence: 3, responsibility: 3, reliability: 2 }
            },
            {
                text: "Если не получится — значит, не получится.",
                score: { reliability: 0, flexibility: 1 }
            }
        ]
    },

    {
        text: "Твой знакомый просит помочь ему с задачей, которую ты уже умеешь делать.",
        answers: [
            {
                text: "Покажу один раз и дальше пусть сам.",
                score: { independence: 3, growth: 2 }
            },
            {
                text: "Сделаю за него, если это быстрее.",
                score: { initiative: 2, empathy: 2, independence: 0 }
            },
            {
                text: "Объясню принцип и помогу разобраться.",
                score: { growth: 3, empathy: 3, responsibility: 2 }
            },
            {
                text: "Сначала спрошу, что именно у него не получается.",
                score: { empathy: 3, communication: 3, flexibility: 2 }
            }
        ]
    },

    {
        text: "Ты понимаешь, что твоя первая реакция на конфликт была неправильной.",
        answers: [
            {
                text: "Если ситуация уже закончилась, лучше не возвращаться.",
                score: { conflict: 0, responsibility: 0 }
            },
            {
                text: "Признаю это, если человек сам поднимет тему.",
                score: { responsibility: 2, conflict: 1 }
            },
            {
                text: "Сам вернусь к разговору и исправлю ситуацию.",
                score: { responsibility: 3, initiative: 3, communication: 3 }
            },
            {
                text: "Объясню, почему в тот момент отреагировал именно так.",
                score: { communication: 3, empathy: 2, flexibility: 2 }
            }
        ]
    },

    {
        text: "В компании появляется человек, который тебе лично не нравится.",
        answers: [
            {
                text: "Постараюсь держаться от него подальше.",
                score: { boundaries: 3, conflict: 1 }
            },
            {
                text: "Буду нормально общаться, пока он не переходит границы.",
                score: { boundaries: 3, flexibility: 3, empathy: 2 }
            },
            {
                text: "Скорее всего сразу будет заметно, что он мне не нравится.",
                score: { independence: 2, conflict: 2, flexibility: 0 }
            },
            {
                text: "Отношение к нему будет зависеть от того, как он ведёт себя с другими.",
                score: { empathy: 3, flexibility: 3, responsibility: 2 }
            }
        ]
    },

    {
        text: "Кто-то начинает шутить над человеком, который не может нормально ответить.",
        answers: [
            {
                text: "Если человек сам не возражает, значит, всё нормально.",
                score: { boundaries: 0, empathy: 0 }
            },
            {
                text: "Поддержу шутку, если она действительно смешная.",
                score: { flexibility: 1, empathy: 0 }
            },
            {
                text: "Попробую остановить ситуацию, если она уже становится неприятной.",
                score: { boundaries: 3, loyalty: 3, conflict: 2 }
            },
            {
                text: "Скорее всего просто не буду участвовать.",
                score: { boundaries: 2, conflict: 1, empathy: 2 }
            }
        ]
    },

    {
        text: "Ты заметил, что близкий тебе человек в последнее время ведёт себя непривычно.",
        answers: [
            {
                text: "Дам ему пространство, пока сам не заговорит.",
                score: { boundaries: 3, empathy: 2 }
            },
            {
                text: "Спрошу напрямую, всё ли нормально.",
                score: { communication: 3, empathy: 3, initiative: 2 }
            },
            {
                text: "Понаблюдаю некоторое время, прежде чем спрашивать.",
                score: { flexibility: 2, empathy: 2, responsibility: 2 }
            },
            {
                text: "Попробую ненавязчиво выяснить причину.",
                score: { empathy: 3, communication: 2, initiative: 2 }
            }
        ]
    },

    {
        text: "Тебе рассказали личную информацию о другом человеке.",
        answers: [
            {
                text: "Если это интересная история, могу рассказать близкому другу.",
                score: { boundaries: 0, loyalty: 0 }
            },
            {
                text: "Не расскажу, если человек явно ожидал конфиденциальности.",
                score: { boundaries: 3, loyalty: 3, responsibility: 2 }
            },
            {
                text: "Могу рассказать, но без деталей.",
                score: { boundaries: 1, flexibility: 2 }
            },
            {
                text: "Зависит от того, насколько информация серьёзная.",
                score: { flexibility: 2, responsibility: 2 }
            }
        ]
    },

    {
        text: "Ты попал в ситуацию, где никто не знает, что делать.",
        answers: [
            {
                text: "Подожду, пока кто-нибудь предложит идею.",
                score: { initiative: 0, independence: 0 }
            },
            {
                text: "Предложу первый рабочий вариант и дальше будем корректировать.",
                score: { initiative: 3, independence: 3, flexibility: 3 }
            },
            {
                text: "Сначала соберу информацию.",
                score: { responsibility: 3, flexibility: 2 }
            },
            {
                text: "Если дело серьёзное, лучше найти человека, который разбирается.",
                score: { responsibility: 3, independence: 1 }
            }
        ]
    },

    {
        text: "У тебя есть возможность получить что-то приятное сейчас или вложиться во что-то, что даст результат позже.",
        answers: [
            {
                text: "Скорее выберу то, что хочется сейчас.",
                score: { responsibility: 0, growth: 1 }
            },
            {
                text: "Зависит от того, насколько большая разница.",
                score: { flexibility: 3, responsibility: 2 }
            },
            {
                text: "Обычно предпочту долгосрочный вариант.",
                score: { responsibility: 3, growth: 3 }
            },
            {
                text: "Разделю ресурсы между обоими.",
                score: { responsibility: 3, flexibility: 3 }
            }
        ]
    },

    {
        text: "Ты живёшь с другими людьми, и кто-то постоянно оставляет после себя беспорядок.",
        answers: [
            {
                text: "Если меня лично не касается — переживу.",
                score: { responsibility: 0, conflict: 1 }
            },
            {
                text: "Поговорю с человеком.",
                score: { communication: 3, responsibility: 3, conflict: 2 }
            },
            {
                text: "Начну просто убирать за собой и за ним, если быстрее.",
                score: { responsibility: 2, independence: 2, conflict: 0 }
            },
            {
                text: "Предложу договориться о понятных правилах.",
                score: { communication: 3, responsibility: 3, initiative: 3 }
            }
        ]
    },

    {
        text: "Тебе дают критику, с которой ты не согласен.",
        answers: [
            {
                text: "Скорее всего начну объяснять, почему человек неправ.",
                score: { independence: 2, flexibility: 0, conflict: 2 }
            },
            {
                text: "Сначала выслушаю, потом решу, есть ли в этом смысл.",
                score: { flexibility: 3, empathy: 3 }
            },
            {
                text: "Если человек мне не близок, могу вообще не учитывать мнение.",
                score: { independence: 2, flexibility: 0 }
            },
            {
                text: "Попрошу привести конкретные примеры.",
                score: { responsibility: 3, flexibility: 3, communication: 3 }
            }
        ]
    },

    {
        text: "Твой близкий человек тревожится из-за ситуации, которую ты считаешь незначительной.",
        answers: [
            {
                text: "Постараюсь быстро объяснить, почему волноваться не о чем.",
                score: { communication: 1, empathy: 0 }
            },
            {
                text: "Сначала выслушаю, что именно его тревожит.",
                score: { empathy: 3, communication: 3 }
            },
            {
                text: "Если проблема объективно небольшая, скажу об этом прямо.",
                score: { independence: 3, empathy: 1 }
            },
            {
                text: "Попробую разобраться вместе, даже если сам не вижу проблемы.",
                score: { empathy: 3, loyalty: 3, communication: 3 }
            }
        ]
    },

    {
        text: "Друг просит тебя скрыть от другого человека факт, который напрямую его касается.",
        answers: [
            {
                text: "Если это мой друг — сохраню его просьбу.",
                score: { loyalty: 3, boundaries: 1 }
            },
            {
                text: "Сначала выясню, почему он хочет это скрыть.",
                score: { communication: 3, flexibility: 2, responsibility: 2 }
            },
            {
                text: "Если информация может серьёзно повлиять на человека, скажу ему.",
                score: { responsibility: 3, loyalty: 2, boundaries: 3 }
            },
            {
                text: "Не люблю вмешиваться в чужие отношения.",
                score: { boundaries: 3, conflict: 1 }
            }
        ]
    },

    {
        text: "Ты заметил, что два твоих знакомых поссорились, и каждый рассказывает тебе совершенно разную версию.",
        answers: [
            {
                text: "Выберу того, кому больше доверяю.",
                score: { loyalty: 2, flexibility: 0 }
            },
            {
                text: "Не буду делать выводов, пока не услышу обе стороны.",
                score: { flexibility: 3, empathy: 3 }
            },
            {
                text: "Постараюсь понять, где факты, а где эмоции.",
                score: { responsibility: 3, flexibility: 3, independence: 2 }
            },
            {
                text: "Лучше вообще не вмешиваться.",
                score: { boundaries: 3, conflict: 1 }
            }
        ]
    },

    {
        text: "Человек, которого ты любишь, хочет попробовать что-то новое, что кажется тебе немного странным.",
        answers: [
            {
                text: "Если это безопасно, пусть пробует.",
                score: { flexibility: 3, boundaries: 3 }
            },
            {
                text: "Попробую вместе с ним.",
                score: { loyalty: 3, flexibility: 3, growth: 3 }
            },
            {
                text: "Сначала хочу понять, зачем ему это.",
                score: { empathy: 3, communication: 2 }
            },
            {
                text: "Поддержу, но сам участвовать не обязательно буду.",
                score: { boundaries: 3, loyalty: 2, flexibility: 2 }
            }
        ]
    },

    {
        text: "Ты заметил, что человек из твоего окружения регулярно пользуется чужой добротой.",
        answers: [
            {
                text: "Если меня лично это не касается, промолчу.",
                score: { boundaries: 2, conflict: 0 }
            },
            {
                text: "Скажу человеку, которого используют, что я это заметил.",
                score: { loyalty: 3, empathy: 3, initiative: 2 }
            },
            {
                text: "Поговорю с тем, кто так себя ведёт.",
                score: { conflict: 3, initiative: 3, boundaries: 3 }
            },
            {
                text: "Если человек сам позволяет это делать, вмешиваться не стоит.",
                score: { boundaries: 2, flexibility: 1 }
            }
        ]
    },

    {
        text: "Важный для тебя человек просит о помощи в момент, когда у тебя уже есть свои планы.",
        answers: [
            {
                text: "Если это действительно важно, пересмотрю планы.",
                score: { loyalty: 3, empathy: 3, flexibility: 2 }
            },
            {
                text: "Помогу, если могу сделать это без серьёзных последствий.",
                score: { responsibility: 3, boundaries: 3, loyalty: 2 }
            },
            {
                text: "Сначала выясню, насколько срочно ему нужна помощь.",
                score: { communication: 3, empathy: 3, responsibility: 2 }
            },
            {
                text: "Свои планы менять не люблю.",
                score: { boundaries: 3, independence: 3 }
            }
        ]
    },

    {
        text: "Ты сделал что-то лучше, чем ожидал от себя.",
        answers: [
            {
                text: "Просто отмечу это для себя.",
                score: { independence: 2 }
            },
            {
                text: "Захочу попробовать следующий уровень сложности.",
                score: { growth: 3, initiative: 3 }
            },
            {
                text: "Расскажу близким.",
                score: { communication: 2, loyalty: 2 }
            },
            {
                text: "Если это оказалось полезным, постараюсь повторить результат.",
                score: { growth: 3, responsibility: 3 }
            }
        ]
    },

    {
        text: "Тебе предлагают работу или проект, где сначала придётся многому научиться самостоятельно.",
        answers: [
            {
                text: "Соглашусь, если перспектива действительно хорошая.",
                score: { growth: 3, responsibility: 2 }
            },
            {
                text: "Предпочту вариант, где меня сначала всему научат.",
                score: { independence: 0, growth: 1 }
            },
            {
                text: "Попробую разобраться по ходу.",
                score: { independence: 3, growth: 3, initiative: 3 }
            },
            {
                text: "Сначала оценю, сколько времени и сил это займёт.",
                score: { responsibility: 3, flexibility: 2 }
            }
        ]
    },

    {
        text: "Представь, что ты должен выбрать одного человека для совместного дела, от которого зависит результат всей команды.",
        answers: [
            {
                text: "Человека, с которым легко общаться и который всегда поддержит.",
                score: { empathy: 3, loyalty: 3 }
            },
            {
                text: "Человека, который хорошо разбирается в деле, но может спорить и указывать на ошибки.",
                score: { growth: 3, independence: 3, flexibility: 2 }
            },
            {
                text: "Человека, который очень ответственный, даже если иногда слишком серьёзный.",
                score: { reliability: 3, responsibility: 3 }
            },
            {
                text: "Человека, который хорошо работает с людьми и умеет сглаживать конфликты.",
                score: { communication: 3, empathy: 3, conflict: 3 }
            }
        ]
    },

    /* 26 */

    {
        text: "Вы с человеком вместе взялись за дело. В процессе выясняется, что вы оба представляли результат по-разному.",
        answers: [
            {
                text: "Сначала обсудим, какой результат устроит обоих.",
                score: { communication: 3, flexibility: 3, loyalty: 2 }
            },
            {
                text: "Если моя версия объективно лучше, попробую это доказать.",
                score: { independence: 3, initiative: 2, flexibility: 1 }
            },
            {
                text: "Если разница не принципиальная, подстроюсь под его вариант.",
                score: { flexibility: 3, empathy: 2, loyalty: 2 }
            },
            {
                text: "Разделим задачу так, чтобы каждый сделал важную для него часть.",
                score: { initiative: 3, communication: 3, responsibility: 3 }
            }
        ]
    },

    /* 27 */

    {
        text: "Ты услышал мнение, которое сначала кажется тебе совершенно нелогичным. Но человек объясняет его достаточно уверенно.",
        answers: [
            {
                text: "Скорее всего останусь при своём мнении.",
                score: { independence: 2, flexibility: 0 }
            },
            {
                text: "Попробую найти слабое место в его аргументации.",
                score: { independence: 3, conflict: 2 }
            },
            {
                text: "Попрошу объяснить, как он к этому пришёл.",
                score: { empathy: 3, communication: 3, flexibility: 3 }
            },
            {
                text: "Возьму время подумать, даже если пока не согласен.",
                score: { flexibility: 3, responsibility: 2 }
            }
        ]
    },

    /* 28 */

    {
        text: "У тебя есть два близких человека, которые серьёзно поссорились. Оба считают, что правы, и оба хотят твоей поддержки.",
        answers: [
            {
                text: "Не стану выбирать сторону, потому что оба мне дороги.",
                score: { loyalty: 2, boundaries: 3, conflict: 1 }
            },
            {
                text: "Выберу сторону того, чьи аргументы считаю более убедительными.",
                score: { independence: 3, responsibility: 3, flexibility: 2 }
            },
            {
                text: "Скажу каждому отдельно, что думаю о его поведении.",
                score: { communication: 3, independence: 3, conflict: 3 }
            },
            {
                text: "Попробую сначала помирить их, а уже потом разбираться, кто был неправ.",
                score: { empathy: 3, loyalty: 3, conflict: 3 }
            }
        ]
    },

    /* 29 */

    {
        text: "Ты собирался провести день определённым образом, но внезапно большая часть планов отменяется.",
        answers: [
            {
                text: "Ну и ладно, проведём день как получится.",
                score: { flexibility: 2, initiative: 0 }
            },
            {
                text: "Быстро придумаю альтернативный план.",
                score: { initiative: 3, independence: 3, flexibility: 3 }
            },
            {
                text: "Спрошу остальных, чего им сейчас хочется.",
                score: { empathy: 3, communication: 3 }
            },
            {
                text: "Использую свободное время для чего-нибудь полезного.",
                score: { responsibility: 3, independence: 2 }
            }
        ]
    },

    /* 30 */

    {
        text: "Человек, с которым ты много времени проводишь, начинает делать что-то, что тебя постепенно раздражает. Пока ничего серьёзного не произошло, но если ничего не изменить, раздражение будет накапливаться.",
        answers: [
            {
                text: "Скажу сразу, пока проблема маленькая.",
                score: { communication: 3, initiative: 3, conflict: 2 }
            },
            {
                text: "Подожду и посмотрю, действительно ли это станет проблемой.",
                score: { flexibility: 2, responsibility: 2 }
            },
            {
                text: "Попробую изменить ситуацию своими действиями, не устраивая разговор.",
                score: { independence: 3, initiative: 2, communication: 0 }
            },
            {
                text: "Сначала подберу момент, когда об этом можно спокойно поговорить.",
                score: { communication: 3, empathy: 3, conflict: 2 }
            }
        ]
    }
];


// --------------------------------------------------
// НАСТРОЙКИ
// --------------------------------------------------

const traitNames = {
    initiative: "Инициативность",
    independence: "Самостоятельность",
    reliability: "Надёжность",
    responsibility: "Ответственность",
    loyalty: "Лояльность",
    boundaries: "Границы",
    flexibility: "Гибкость",
    empathy: "Эмпатия",
    communication: "Коммуникация",
    conflict: "Умение решать конфликты",
    growth: "Развитие"
};


// --------------------------------------------------
// ПРОФИЛИ
// --------------------------------------------------

const profiles = [
    {
        id: "organizer",

        title: "Практический организатор",

        description:
            "Ты больше доверяешь конкретным действиям, чем красивым обещаниям. " +
            "Когда появляется проблема, тебе проще искать рабочее решение, " +
            "чем долго обсуждать сам факт её существования.",

        message:
            "Ты, скорее всего, из тех людей, которым спокойнее, когда понятно, " +
            "что происходит и кто за что отвечает. Тебе нравится ощущение, " +
            "что на человека можно положиться не только на словах.",

        required: {
            responsibility: 7,
            initiative: 6,
            reliability: 6
        }
    },

    {
        id: "independent",

        title: "Самостоятельный исследователь",

        description:
            "Ты предпочитаешь разбираться в вещах самостоятельно и ценишь " +
            "возможность принимать собственные решения. Новое тебя скорее " +
            "интересует, чем пугает.",

        message:
            "Тебе важно чувствовать, что ты способен справиться сам. " +
            "При этом тебе не обязательно делать всё в одиночку — главное, " +
            "чтобы помощь была выбором, а не необходимостью.",

        required: {
            independence: 7,
            growth: 6,
            initiative: 5
        }
    },

    {
        id: "team",

        title: "Командный человек",

        description:
            "Для тебя большое значение имеют люди рядом. Ты умеешь учитывать " +
            "чужие чувства и предпочитаешь решать сложные ситуации так, " +
            "чтобы отношения не разрушались из-за одной проблемы.",

        message:
            "Ты хорошо чувствуешь атмосферу между людьми. Для тебя важен не " +
            "только конечный результат, но и то, каким способом люди к нему пришли.",

        required: {
            empathy: 7,
            loyalty: 6,
            communication: 6
        }
    },

    {
        id: "strategist",

        title: "Спокойный стратег",

        description:
            "Ты предпочитаешь сначала понять ситуацию, а уже потом принимать " +
            "решение. Импульсивность тебе не особенно близка — ты скорее " +
            "соберёшь информацию и выберешь наиболее разумный вариант.",

        message:
            "Ты не обязательно первым входишь в ситуацию, зато часто замечаешь " +
            "то, что другие пропустили. Твоя сильная сторона — способность " +
            "смотреть на ситуацию чуть шире.",

        required: {
            flexibility: 6,
            responsibility: 6,
            empathy: 5
        }
    }
];


// --------------------------------------------------
// СОСТОЯНИЕ
// --------------------------------------------------

let currentQuestion = 0;
let selectedAnswer = null;

let scores = {};

function resetScores() {

    scores = {};

    Object.keys(traitNames).forEach(trait => {
        scores[trait] = 0;
    });
}


// --------------------------------------------------
// ЭЛЕМЕНТЫ
// --------------------------------------------------

const startScreen =
    document.getElementById("startScreen");

const quizScreen =
    document.getElementById("quizScreen");

const resultScreen =
    document.getElementById("resultScreen");

const startBtn =
    document.getElementById("startBtn");

const nextBtn =
    document.getElementById("nextBtn");

const restartBtn =
    document.getElementById("restartBtn");

const answersContainer =
    document.getElementById("answers");

const questionText =
    document.getElementById("questionText");

const questionNumber =
    document.getElementById("questionNumber");

const currentQuestionElement =
    document.getElementById("currentQuestion");

const totalQuestionsElement =
    document.getElementById("totalQuestions");

const progressBar =
    document.getElementById("progressBar");


// --------------------------------------------------
// НАЧАЛО
// --------------------------------------------------

totalQuestionsElement.textContent = questions.length;

startBtn.addEventListener("click", () => {

    resetScores();

    currentQuestion = 0;

    selectedAnswer = null;

    startScreen.classList.remove("active");

    resultScreen.classList.remove("active");

    quizScreen.classList.add("active");

    showQuestion();
});


// --------------------------------------------------
// ПОКАЗ ВОПРОСА
// --------------------------------------------------

function showQuestion() {

    selectedAnswer = null;

    nextBtn.disabled = true;

    nextBtn.classList.remove("ready");

    const question = questions[currentQuestion];

    questionText.textContent = question.text;

    questionNumber.textContent =
        String(currentQuestion + 1).padStart(2, "0");

    currentQuestionElement.textContent =
        currentQuestion + 1;

    const progress =
        ((currentQuestion) / questions.length) * 100;

    progressBar.style.width = `${progress}%`;

    answersContainer.innerHTML = "";

    question.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.className = "answer";

        button.innerHTML = `
            <span class="answer-letter">
                ${String.fromCharCode(65 + index)}
            </span>
            ${answer.text}
        `;

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".answer")
                .forEach(item => {
                    item.classList.remove("selected");
                });

            button.classList.add("selected");

            selectedAnswer = answer;

            nextBtn.disabled = false;

            nextBtn.classList.add("ready");
        });

        answersContainer.appendChild(button);
    });

    nextBtn.textContent =
        currentQuestion === questions.length - 1
            ? "Получить результат"
            : "Далее";
}


// --------------------------------------------------
// ПЕРЕХОД ДАЛЬШЕ
// --------------------------------------------------

nextBtn.addEventListener("click", () => {

    if (!selectedAnswer) {
        return;
    }

    addScore(selectedAnswer.score);

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        showQuestion();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } else {

        progressBar.style.width = "100%";

        showResult();
    }
});


// --------------------------------------------------
// ДОБАВЛЕНИЕ БАЛЛОВ
// --------------------------------------------------

function addScore(score) {

    Object.keys(score).forEach(trait => {

        if (scores[trait] === undefined) {
            scores[trait] = 0;
        }

        scores[trait] += score[trait];
    });
}


// --------------------------------------------------
// НОРМАЛИЗАЦИЯ
// --------------------------------------------------

function getTraitPercentages() {

    const result = {};

    Object.keys(scores).forEach(trait => {

        /*
         * Большинство шкал получают примерно
         * 0–20+ баллов.
         *
         * Ограничиваем отображение диапазоном 35–98,
         * чтобы результат не выглядел как школьная оценка.
         */

        const raw = scores[trait];

        const percentage =
            Math.round(
                Math.min(
                    98,
                    Math.max(
                        35,
                        45 + raw * 2.5
                    )
                )
            );

        result[trait] = percentage;
    });

    return result;
}


// --------------------------------------------------
// ВЫБОР ПРОФИЛЯ
// --------------------------------------------------

function chooseProfile() {

    let bestProfile = profiles[0];

    let bestScore = -Infinity;

    profiles.forEach(profile => {

        let profileScore = 0;

        Object.keys(profile.required).forEach(trait => {

            const requirement =
                profile.required[trait];

            const actual =
                scores[trait] || 0;

            profileScore +=
                Math.min(actual, requirement);
        });

        /*
         * Небольшие дополнительные бонусы
         * за сильные стороны профиля.
         */

        if (
            profile.id === "organizer" &&
            scores.reliability >= 8
        ) {
            profileScore += 3;
        }

        if (
            profile.id === "independent" &&
            scores.independence >= 8
        ) {
            profileScore += 3;
        }

        if (
            profile.id === "team" &&
            scores.empathy >= 8
        ) {
            profileScore += 3;
        }

        if (
            profile.id === "strategist" &&
            scores.flexibility >= 8
        ) {
            profileScore += 3;
        }

        if (profileScore > bestScore) {

            bestScore = profileScore;

            bestProfile = profile;
        }
    });

    return bestProfile;
}


// --------------------------------------------------
// РЕЗУЛЬТАТ
// --------------------------------------------------

function showResult() {

    quizScreen.classList.remove("active");

    resultScreen.classList.add("active");

    const profile = chooseProfile();

    document.getElementById("resultTitle")
        .textContent = profile.title;

    document.getElementById("resultDescription")
        .textContent = profile.description;

    document.getElementById("resultMessage")
        .textContent = profile.message;

    renderTraits();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// --------------------------------------------------
// ШКАЛЫ
// --------------------------------------------------

function renderTraits() {

    const container =
        document.getElementById("traits");

    container.innerHTML = "";

    const percentages =
        getTraitPercentages();

    /*
     * Показываем не все 11 характеристик.
     * Так результат выглядит естественнее.
     */

    const visibleTraits = [
        "initiative",
        "independence",
        "reliability",
        "flexibility",
        "communication",
        "growth"
    ];

    visibleTraits.forEach(trait => {

        const value =
            percentages[trait];

        const element =
            document.createElement("div");

        element.className = "trait";

        element.innerHTML = `
            <div class="trait-top">

                <span class="trait-name">
                    ${traitNames[trait]}
                </span>

                <span class="trait-value">
                    ${value}%
                </span>

            </div>

            <div class="trait-line">

                <div
                    class="trait-fill"
                    style="width: ${value}%"
                ></div>

            </div>
        `;

        container.appendChild(element);
    });
}


// --------------------------------------------------
// ПЕРЕЗАПУСК
// --------------------------------------------------

restartBtn.addEventListener("click", () => {

    resetScores();

    currentQuestion = 0;

    selectedAnswer = null;

    resultScreen.classList.remove("active");

    quizScreen.classList.remove("active");

    startScreen.classList.add("active");

    progressBar.style.width = "0%";
});
