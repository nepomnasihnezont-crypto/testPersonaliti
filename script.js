const questions = [
    {
        text: "Вы с друзьями собираетесь куда-то на выходных. До поездки осталось два дня, но никто ничего толком не организовал. Что ты скорее сделаешь?",
        answers: [
            {
                text: "Подожду — если всем надо, кто-нибудь в итоге займётся организацией.",
                score: { initiative: 0, independence: 1, flexibility: 3 }
            },
            {
                text: "Сам предложу конкретный план и посмотрю, кто подключится.",
                score: { initiative: 4, reliability: 3, responsibility: 3 }
            },
            {
                text: "Напишу каждому отдельно и выясню, чего вообще хотят люди.",
                score: { communication: 4, empathy: 3, flexibility: 3 }
            },
            {
                text: "Предложу отменить всё и придумать что-нибудь проще.",
                score: { independence: 2, flexibility: 4, initiative: 2 }
            }
        ]
    },

    {
        text: "Тебе предлагают попробовать занятие, в котором ты вообще не разбираешься, но оно потенциально может тебе понравиться.",
        answers: [
            {
                text: "Сначала посмотрю, как это делают другие.",
                score: { flexibility: 3, independence: 2, communication: 1 }
            },
            {
                text: "Сразу попробую, а там разберусь.",
                score: { initiative: 4, flexibility: 4, growth: 4 }
            },
            {
                text: "Почитаю немного информации и решу, стоит ли оно времени.",
                score: { independence: 4, responsibility: 3, growth: 3 }
            },
            {
                text: "Скорее откажусь — не люблю тратить время на непонятные вещи.",
                score: { independence: 2, responsibility: 2, flexibility: 0 }
            }
        ]
    },

    {
        text: "Ты получил неожиданно свободные деньги, которые не обязан тратить прямо сейчас.",
        answers: [
            {
                text: "Куплю то, что давно хотелось.",
                score: { initiative: 2, flexibility: 3, responsibility: 1 }
            },
            {
                text: "Отложу большую часть, а остальное потрачу на приятное.",
                score: { responsibility: 4, reliability: 3, independence: 3 }
            },
            {
                text: "Вложу в что-нибудь, что потенциально принесёт пользу позже.",
                score: { growth: 4, initiative: 3, independence: 4 }
            },
            {
                text: "Пока ничего не буду решать — пусть полежат.",
                score: { responsibility: 3, flexibility: 2, independence: 2 }
            }
        ]
    },

    {
        text: "В совместном деле человек постоянно говорит «сделаю», но потом забывает.",
        answers: [
            {
                text: "Начну делать его часть сам, чтобы не зависеть от него.",
                score: { independence: 4, responsibility: 4, initiative: 3 }
            },
            {
                text: "Прямо скажу, что меня это не устраивает.",
                score: { communication: 4, conflict: 4, reliability: 4 }
            },
            {
                text: "Дам ему ещё один шанс — вдруг сейчас действительно что-то случилось.",
                score: { empathy: 4, flexibility: 3, loyalty: 3 }
            },
            {
                text: "Перестану рассчитывать на него и просто буду учитывать это дальше.",
                score: { independence: 4, responsibility: 3, conflict: 2 }
            }
        ]
    },

    {
        text: "Человек, которого ты хорошо знаешь, поступил с кем-то довольно неприятно. Ты не знаешь всей ситуации.",
        answers: [
            {
                text: "Не буду вмешиваться в чужую историю.",
                score: { independence: 3, boundaries: 4, conflict: 2 }
            },
            {
                text: "Сначала попробую понять, что произошло с обеих сторон.",
                score: { empathy: 4, communication: 4, flexibility: 4 }
            },
            {
                text: "Спрошу знакомого напрямую, зачем он так сделал.",
                score: { communication: 4, initiative: 3, conflict: 3 }
            },
            {
                text: "Если пострадавший мне близок, сначала встану на его сторону.",
                score: { loyalty: 4, boundaries: 2, empathy: 3 }
            }
        ]
    },

    {
        text: "Ты с кем-то договорился о встрече, а человек за пару часов до неё всё отменяет.",
        answers: [
            {
                text: "Ничего страшного, займусь своими делами.",
                score: { independence: 4, flexibility: 4, conflict: 1 }
            },
            {
                text: "Предложу сразу выбрать другую дату.",
                score: { initiative: 4, communication: 3, reliability: 3 }
            },
            {
                text: "Спрошу, что случилось, прежде чем решать, как к этому относиться.",
                score: { empathy: 4, communication: 4, flexibility: 3 }
            },
            {
                text: "Скорее всего, мне станет неприятно, и второй раз инициировать встречу не захочу.",
                score: { boundaries: 3, reliability: 2, conflict: 2 }
            }
        ]
    },

    {
        text: "Ты заметил, что человек рядом с тобой сильно переживает из-за ситуации, которая тебе кажется незначительной.",
        answers: [
            {
                text: "Попытаюсь быстро его успокоить и переключить внимание.",
                score: { empathy: 3, initiative: 3, communication: 2 }
            },
            {
                text: "Спрошу, что именно его беспокоит.",
                score: { empathy: 4, communication: 4 }
            },
            {
                text: "Скажу честно, что проблема кажется мне не такой серьёзной.",
                score: { communication: 3, independence: 3, empathy: 1 }
            },
            {
                text: "Дам ему пространство — если захочет, сам расскажет.",
                score: { boundaries: 4, empathy: 3, independence: 3 }
            }
        ]
    },

    {
        text: "В споре ты понял, что твоя первая реакция была несправедливой.",
        answers: [
            {
                text: "Если спор уже закончился, не вижу смысла возвращаться.",
                score: { conflict: 1, independence: 3, responsibility: 1 }
            },
            {
                text: "Скажу об этом сразу, даже если будет неловко.",
                score: { communication: 4, responsibility: 4, conflict: 4 }
            },
            {
                text: "Подожду, пока эмоции улягутся, и потом поговорю.",
                score: { conflict: 4, flexibility: 3, communication: 4 }
            },
            {
                text: "Постараюсь исправить ситуацию поступком, не делая из этого отдельного разговора.",
                score: { responsibility: 4, initiative: 3, communication: 2 }
            }
        ]
    },

    {
        text: "Тебе нужно выбрать человека для важного совместного проекта. Один очень талантливый, но часто подводит. Второй средний по способностям, зато всегда делает обещанное.",
        answers: [
            {
                text: "Возьму талантливого — результат важнее всего.",
                score: { growth: 4, initiative: 3, responsibility: 1 }
            },
            {
                text: "Возьму надёжного — стабильность важнее максимального результата.",
                score: { reliability: 4, responsibility: 4, independence: 2 }
            },
            {
                text: "Попробую распределить задачи так, чтобы использовать сильные стороны обоих.",
                score: { initiative: 4, communication: 4, flexibility: 4 }
            },
            {
                text: "Сначала выясню, насколько критична ошибка, если первый снова подведёт.",
                score: { responsibility: 4, independence: 4, communication: 2 }
            }
        ]
    },

    {
        text: "Кто-то при всех пошутил над человеком, которого ты хорошо знаешь. Шутка вроде смешная, но тебе кажется, что она задела.",
        answers: [
            {
                text: "Не буду вмешиваться — человек сам разберётся.",
                score: { independence: 3, boundaries: 4, conflict: 1 }
            },
            {
                text: "Поддержу шутку, если она действительно смешная.",
                score: { flexibility: 3, communication: 2, loyalty: 1 }
            },
            {
                text: "Переведу разговор в другую сторону.",
                score: { conflict: 3, empathy: 3, flexibility: 4 }
            },
            {
                text: "Если вижу, что человеку реально неприятно, остановлю это.",
                score: { loyalty: 4, conflict: 4, initiative: 4 }
            }
        ]
    },

    {
        text: "Тебе предлагают возможность, которая может сильно улучшить твою жизнь, но потребует много времени и усилий ближайшие полгода.",
        answers: [
            {
                text: "Соглашусь — такие возможности редко появляются.",
                score: { initiative: 4, growth: 4, flexibility: 3 }
            },
            {
                text: "Сначала посчитаю, что конкретно потеряю ради этого.",
                score: { responsibility: 4, independence: 4, reliability: 3 }
            },
            {
                text: "Попробую найти способ совместить это с нынешней жизнью.",
                score: { initiative: 4, flexibility: 4, growth: 3 }
            },
            {
                text: "Скорее откажусь — полгода слишком большой срок.",
                score: { responsibility: 2, flexibility: 1, growth: 1 }
            }
        ]
    },

    {
        text: "Ты живёшь с другим человеком, и он регулярно оставляет после себя мелкий беспорядок.",
        answers: [
            {
                text: "Буду убирать сам, если меня это раздражает.",
                score: { responsibility: 3, independence: 3, communication: 1 }
            },
            {
                text: "Скажу об этом прямо, пока проблема небольшая.",
                score: { communication: 4, conflict: 4, responsibility: 4 }
            },
            {
                text: "Предложу договориться, кто за что отвечает.",
                score: { initiative: 4, communication: 4, reliability: 4 }
            },
            {
                text: "Не буду обращать внимания, пока это не станет серьёзной проблемой.",
                score: { flexibility: 4, boundaries: 3, responsibility: 1 }
            }
        ]
    },

    {
        text: "Тебе нужно разобраться с вещью, которую ты никогда раньше не делал, а инструкции нет.",
        answers: [
            {
                text: "Найду человека, который умеет это делать.",
                score: { communication: 3, independence: 1, initiative: 2 }
            },
            {
                text: "Начну разбираться самостоятельно методом проб и ошибок.",
                score: { independence: 4, initiative: 4, flexibility: 4 }
            },
            {
                text: "Поищу информацию и сначала пойму принцип.",
                score: { independence: 4, growth: 4, responsibility: 3 }
            },
            {
                text: "Попробую сделать на глаз — иногда проще начать, чем долго готовиться.",
                score: { initiative: 4, flexibility: 4, responsibility: 1 }
            }
        ]
    },

    {
        text: "Твой близкий человек рассказывает тебе о конфликте с кем-то. По его версии, он полностью прав.",
        answers: [
            {
                text: "Поддержу его — ему сейчас важнее всего почувствовать, что он не один.",
                score: { loyalty: 4, empathy: 4, boundaries: 2 }
            },
            {
                text: "Сначала выслушаю подробности, а потом скажу, как это выглядит со стороны.",
                score: { communication: 4, empathy: 4, independence: 4 }
            },
            {
                text: "Не стану оценивать, пока не услышу вторую сторону.",
                score: { independence: 4, flexibility: 4, boundaries: 4 }
            },
            {
                text: "Если считаю, что он неправ, прямо скажу это.",
                score: { honesty: 4, communication: 4, conflict: 4 }
            }
        ]
    },

    {
        text: "Тебе поручили дело, которое ты обещал закончить к определённому сроку. В процессе стало понятно, что ты не успеваешь.",
        answers: [
            {
                text: "Буду выкладываться до последнего, даже если придётся сильно напрячься.",
                score: { responsibility: 4, reliability: 4, initiative: 3 }
            },
            {
                text: "Предупрежу заранее и предложу новый срок.",
                score: { communication: 4, reliability: 4, responsibility: 4 }
            },
            {
                text: "Попробую найти способ сократить объём работы.",
                score: { initiative: 4, independence: 4, flexibility: 3 }
            },
            {
                text: "Попрошу кого-нибудь помочь — так будет быстрее.",
                score: { communication: 3, flexibility: 4, independence: 2 }
            }
        ]
    },

    {
        text: "Ты заметил, что человек часто соглашается на всё, а потом оказывается перегружен.",
        answers: [
            {
                text: "Это его выбор — пусть сам разбирается.",
                score: { independence: 4, boundaries: 4, empathy: 1 }
            },
            {
                text: "Попробую объяснить ему, что он берёт на себя слишком много.",
                score: { empathy: 3, communication: 4, initiative: 3 }
            },
            {
                text: "Предложу конкретно помочь с чем-то из его списка.",
                score: { initiative: 4, empathy: 4, responsibility: 3 }
            },
            {
                text: "Подожду, пока он сам попросит о помощи.",
                score: { boundaries: 4, independence: 3, empathy: 2 }
            }
        ]
    },

    {
        text: "Ты узнаёшь, что человек присвоил себе часть заслуг за работу, которую в основном сделал кто-то другой.",
        answers: [
            {
                text: "Если это меня напрямую не касается, не полезу.",
                score: { boundaries: 4, independence: 3 }
            },
            {
                text: "Скажу ему лично, что это выглядит нечестно.",
                score: { conflict: 4, communication: 4, responsibility: 3 }
            },
            {
                text: "Попробую сделать так, чтобы настоящий автор получил признание.",
                score: { initiative: 4, loyalty: 4, responsibility: 4 }
            },
            {
                text: "Запомню это и просто больше не буду на него рассчитывать.",
                score: { independence: 4, boundaries: 3, reliability: 2 }
            }
        ]
    },

    {
        text: "У тебя есть свободный вечер. Ты устал, но есть несколько дел, которые давно откладывал.",
        answers: [
            {
                text: "Отложу всё ещё на день и нормально отдохну.",
                score: { flexibility: 4, independence: 3, responsibility: 1 }
            },
            {
                text: "Сделаю хотя бы самое важное, потом буду отдыхать.",
                score: { responsibility: 4, reliability: 4, initiative: 3 }
            },
            {
                text: "Попробую быстро закрыть все мелкие дела одним заходом.",
                score: { initiative: 4, responsibility: 3, independence: 3 }
            },
            {
                text: "Выберу то дело, которое даст самый заметный результат.",
                score: { growth: 3, independence: 4, responsibility: 3 }
            }
        ]
    },

    {
        text: "Тебе нужно принять решение, но два близких тебе человека советуют совершенно разные вещи.",
        answers: [
            {
                text: "Выберу тот совет, который лучше подходит лично мне.",
                score: { independence: 4, responsibility: 4 }
            },
            {
                text: "Попрошу каждого объяснить, почему он так думает.",
                score: { communication: 4, flexibility: 4 }
            },
            {
                text: "Скорее прислушаюсь к тому, кому больше доверяю.",
                score: { loyalty: 3, boundaries: 2 }
            },
            {
                text: "Отложу решение, пока сам не пойму, чего хочу.",
                score: { independence: 4, flexibility: 3 }
            }
        ]
    },

    {
        text: "Человек, с которым ты близко общаешься, начал вести себя заметно холоднее.",
        answers: [
            {
                text: "Дам ему время — возможно, дело вообще не во мне.",
                score: { flexibility: 4, boundaries: 4, empathy: 3 }
            },
            {
                text: "Спросю прямо, всё ли нормально.",
                score: { communication: 4, initiative: 4 }
            },
            {
                text: "Понаблюдаю несколько дней и уже потом решу, стоит ли спрашивать.",
                score: { independence: 3, flexibility: 3, boundaries: 3 }
            },
            {
                text: "Стану общаться так же холодно в ответ.",
                score: { boundaries: 3, conflict: 2, loyalty: 1 }
            }
        ]
    },

    {
        text: "Тебе дают возможность возглавить небольшую команду, но вместе с этим придётся отвечать за чужие ошибки.",
        answers: [
            {
                text: "Соглашусь — интересно попробовать себя в этой роли.",
                score: { initiative: 4, growth: 4, responsibility: 3 }
            },
            {
                text: "Сначала выясню, какие именно у меня будут полномочия.",
                score: { responsibility: 4, independence: 4, communication: 3 }
            },
            {
                text: "Скорее откажусь — не хочу отвечать за то, что не контролирую.",
                score: { boundaries: 4, independence: 3, initiative: 1 }
            },
            {
                text: "Соглашусь, если смогу самостоятельно выбирать людей.",
                score: { initiative: 4, independence: 4, responsibility: 4 }
            }
        ]
    },

    {
        text: "Ты договорился с человеком о плане, но обстоятельства внезапно всё поменяли.",
        answers: [
            {
                text: "Попробую сохранить первоначальный план любой ценой.",
                score: { reliability: 4, responsibility: 3, flexibility: 1 }
            },
            {
                text: "Быстро придумаю новый вариант.",
                score: { initiative: 4, flexibility: 4 }
            },
            {
                text: "Сначала обсудим, что теперь вообще имеет смысл делать.",
                score: { communication: 4, flexibility: 4 }
            },
            {
                text: "Если новый вариант слишком неудобный, просто перенесу всё.",
                score: { boundaries: 3, responsibility: 3, flexibility: 2 }
            }
        ]
    },

    {
        text: "Ты несколько раз подряд замечаешь одну и ту же проблему в своей жизни.",
        answers: [
            {
                text: "Со временем привыкну и перестану обращать внимание.",
                score: { flexibility: 3, responsibility: 1 }
            },
            {
                text: "Попробую понять причину и изменить её.",
                score: { growth: 4, independence: 4, initiative: 4 }
            },
            {
                text: "Попрошу совета у человека, который уже с этим сталкивался.",
                score: { communication: 4, growth: 3, independence: 2 }
            },
            {
                text: "Буду решать проблему каждый раз, когда она появляется.",
                score: { responsibility: 3, reliability: 3, initiative: 2 }
            }
        ]
    },

    {
        text: "Тебе нужно выбрать между быстрым решением, которое сработает сейчас, и более сложным, которое может решить проблему надолго.",
        answers: [
            {
                text: "Выберу быстрое — если понадобится, потом переделаю.",
                score: { flexibility: 4, initiative: 3, responsibility: 2 }
            },
            {
                text: "Сделаю сложный вариант сразу.",
                score: { responsibility: 4, reliability: 4, growth: 3 }
            },
            {
                text: "Сравню затраты времени и пойму, окупится ли долгий вариант.",
                score: { independence: 4, responsibility: 4 }
            },
            {
                text: "Попробую найти третий вариант между ними.",
                score: { initiative: 4, flexibility: 4, growth: 3 }
            }
        ]
    },

    {
        text: "Твой друг просит тебя скрыть от другого человека информацию, которая его касается.",
        answers: [
            {
                text: "Сохраню тайну — если друг попросил, значит, у него есть причина.",
                score: { loyalty: 4, boundaries: 3 }
            },
            {
                text: "Сначала спрошу, почему он хочет это скрыть.",
                score: { communication: 4, empathy: 3, independence: 3 }
            },
            {
                text: "Если информация может серьёзно повлиять на человека, не стану участвовать в сокрытии.",
                score: { responsibility: 4, boundaries: 4, loyalty: 2 }
            },
            {
                text: "Скажу, что не хочу знать такие вещи и не буду в этом участвовать.",
                score: { boundaries: 4, independence: 4 }
            }
        ]
    },

    {
        text: "Ты видишь, что человек рядом с тобой хочет бросить начатое дело после первой серьёзной неудачи.",
        answers: [
            {
                text: "Не буду вмешиваться — это его решение.",
                score: { boundaries: 4, independence: 3 }
            },
            {
                text: "Попробую убедить его дать себе ещё один шанс.",
                score: { empathy: 4, initiative: 3, growth: 4 }
            },
            {
                text: "Спрошу, почему именно он хочет бросить.",
                score: { communication: 4, empathy: 4 }
            },
            {
                text: "Если это явно не его, соглашусь, что лучше остановиться.",
                score: { flexibility: 4, independence: 3, empathy: 3 }
            }
        ]
    },

    {
        text: "В компании возникает ситуация, где никто не хочет первым принимать решение.",
        answers: [
            {
                text: "Подожду, пока кто-нибудь возьмёт ответственность.",
                score: { flexibility: 3, initiative: 0 }
            },
            {
                text: "Предложу первый вариант, даже если он не идеальный.",
                score: { initiative: 4, responsibility: 4 }
            },
            {
                text: "Попробую выяснить мнение остальных.",
                score: { communication: 4, empathy: 3 }
            },
            {
                text: "Если мне всё равно, просто соглашусь с большинством.",
                score: { flexibility: 4, independence: 1 }
            }
        ]
    },

    {
        text: "Человек извинился за неприятный поступок, но через некоторое время повторил его.",
        answers: [
            {
                text: "Дам ещё шанс — все иногда ошибаются.",
                score: { empathy: 4, flexibility: 4, loyalty: 3 }
            },
            {
                text: "Обращу внимание уже не на слова, а на повторяющийся результат.",
                score: { reliability: 4, independence: 4, responsibility: 3 }
            },
            {
                text: "Скажу прямо, что одного извинения недостаточно.",
                score: { communication: 4, conflict: 4, boundaries: 4 }
            },
            {
                text: "Дистанцируюсь, не устраивая очередной разговор.",
                score: { boundaries: 4, independence: 4 }
            }
        ]
    },

    {
        text: "Тебе предлагают работу или проект с хорошими перспективами, но пока без гарантии результата.",
        answers: [
            {
                text: "Рискну — иначе ничего нового не попробовать.",
                score: { initiative: 4, growth: 4, flexibility: 4 }
            },
            {
                text: "Сначала проверю, насколько реальны эти перспективы.",
                score: { independence: 4, responsibility: 4 }
            },
            {
                text: "Попробую договориться о безопасном формате на первое время.",
                score: { communication: 4, flexibility: 4, responsibility: 3 }
            },
            {
                text: "Скорее останусь на проверенном варианте.",
                score: { reliability: 4, responsibility: 3, growth: 1 }
            }
        ]
    },

    {
        text: "Ты случайно допустил ошибку, из-за которой другому человеку придётся потратить своё время.",
        answers: [
            {
                text: "Сразу признаю ошибку и предложу сам исправить последствия.",
                score: { responsibility: 4, reliability: 4, initiative: 4 }
            },
            {
                text: "Извинюсь и объясню, как так получилось.",
                score: { communication: 4, responsibility: 3 }
            },
            {
                text: "Попытаюсь сначала самостоятельно всё исправить, а потом расскажу.",
                score: { independence: 4, initiative: 4, responsibility: 4 }
            },
            {
                text: "Если ущерб небольшой, не стану делать из этого большую проблему.",
                score: { flexibility: 4, responsibility: 1 }
            }
        ]
    },

    {
        text: "Тебе приходится выбирать: провести вечер с близким человеком или заняться делом, которое может принести пользу в будущем.",
        answers: [
            {
                text: "Выберу человека — такие моменты нельзя постоянно откладывать.",
                score: { loyalty: 4, empathy: 4, boundaries: 2 }
            },
            {
                text: "Выберу дело — будущее тоже требует вложений.",
                score: { growth: 4, independence: 4, responsibility: 4 }
            },
            {
                text: "Попробую разделить время между обоими.",
                score: { flexibility: 4, communication: 3, responsibility: 3 }
            },
            {
                text: "Посмотрю, что из этого важнее именно сегодня.",
                score: { flexibility: 4, independence: 3, responsibility: 3 }
            }
        ]
    }
];

const traitNames = {
    initiative: "Инициативность",
    independence: "Самостоятельность",
    reliability: "Надёжность",
    responsibility: "Ответственность",
    loyalty: "Лояльность",
    boundaries: "Личные границы",
    flexibility: "Гибкость",
    empathy: "Эмпатия",
    communication: "Коммуникация",
    conflict: "Поведение в конфликте",
    growth: "Развитие"
};

const profiles = [
    {
        title: "Практический организатор",
        description:
            "Ты предпочитаешь не оставлять важные вещи на волю случая. Если что-то нужно сделать — проще разобраться и сделать, чем долго ждать.",
        message:
            "Твой стиль — меньше лишних слов, больше конкретных действий."
    },
    {
        title: "Самостоятельный исследователь",
        description:
            "Ты довольно спокойно двигаешься своим путём и не любишь принимать решения только потому, что так принято или кто-то так сказал.",
        message:
            "Тебе важно понимать, зачем ты что-то делаешь, а не просто следовать готовому сценарию."
    },
    {
        title: "Командный человек",
        description:
            "Для тебя многое зависит от людей вокруг. Ты умеешь учитывать чужую позицию, договариваться и находить решения, которые работают не только для тебя.",
        message:
            "Ты хорошо чувствуешь разницу между «сделать самому» и «сделать вместе»."
    },
    {
        title: "Спокойный стратег",
        description:
            "Ты не всегда стремишься действовать первым. Зато предпочитаешь сначала понять ситуацию и только потом принимать решение.",
        message:
            "Твоя сильная сторона — способность не теряться, когда ситуация становится сложнее первоначального плана."
    }
];

let currentQuestion = 0;
let answersChosen = [];
let scores = {};

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answers");

const currentQuestionEl = document.getElementById("currentQuestion");
const totalQuestionsEl = document.getElementById("totalQuestions");
const questionNumberEl = document.getElementById("questionNumber");
const progressBar = document.getElementById("progressBar");

const resultTitle = document.getElementById("resultTitle");
const resultDescription = document.getElementById("resultDescription");
const resultMessage = document.getElementById("resultMessage");
const traitsContainer = document.getElementById("traits");

totalQuestionsEl.textContent = questions.length;

startBtn.addEventListener("click", startTest);
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", restartTest);

function startTest() {
    currentQuestion = 0;
    answersChosen = [];
    scores = {};

    startScreen.classList.remove("active");
    resultScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestion];

    currentQuestionEl.textContent = currentQuestion + 1;
    questionNumberEl.textContent = String(currentQuestion + 1).padStart(2, "0");

    questionText.textContent = question.text;

    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    progressBar.style.width = `${progress}%`;

    answersContainer.innerHTML = "";
    nextBtn.disabled = true;

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.className = "answer-btn";
        button.textContent = answer.text;

        button.addEventListener("click", () => {
            document
                .querySelectorAll(".answer-btn")
                .forEach(btn => btn.classList.remove("selected"));

            button.classList.add("selected");

            answersChosen[currentQuestion] = index;
            nextBtn.disabled = false;
        });

        answersContainer.appendChild(button);
    });

    nextBtn.textContent =
        currentQuestion === questions.length - 1
            ? "Показать результат"
            : "Далее";
}

function nextQuestion() {
    if (answersChosen[currentQuestion] === undefined) return;

    const selectedIndex = answersChosen[currentQuestion];
    const selectedAnswer =
        questions[currentQuestion].answers[selectedIndex];

    Object.entries(selectedAnswer.score).forEach(([trait, value]) => {
        scores[trait] = (scores[trait] || 0) + value;
    });

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");

    const profile = getProfile();

    resultTitle.textContent = profile.title;
    resultDescription.textContent = profile.description;
    resultMessage.textContent = profile.message;

    renderTraits();
}

function getProfile() {
    const values = Object.values(scores);

    const initiative =
        scores.initiative || 0;

    const independence =
        scores.independence || 0;

    const communication =
        scores.communication || 0;

    const reliability =
        scores.reliability || 0;

    const growth =
        scores.growth || 0;

    const average =
        values.length > 0
            ? values.reduce((a, b) => a + b, 0) / values.length
            : 0;

    if (
        initiative + reliability >=
        independence + communication &&
        initiative >= growth
    ) {
        return profiles[0];
    }

    if (
        independence + growth >=
        communication + reliability
    ) {
        return profiles[1];
    }

    if (
        communication + reliability >=
        independence + initiative &&
        communication >= average
    ) {
        return profiles[2];
    }

    return profiles[3];
}

function renderTraits() {
    traitsContainer.innerHTML = "";

    const visibleTraits = [
        "initiative",
        "independence",
        "reliability",
        "flexibility",
        "communication",
        "growth"
    ];

    visibleTraits.forEach(trait => {
        const value = scores[trait] || 0;

        const maxPossible = questions.reduce((total, question) => {
            const maxForQuestion = Math.max(
                ...question.answers.map(answer =>
                    answer.score[trait] || 0
                )
            );

            return total + maxForQuestion;
        }, 0);

        const percentage =
            maxPossible > 0
                ? Math.round((value / maxPossible) * 100)
                : 0;

        const traitElement = document.createElement("div");
        traitElement.className = "trait";

        traitElement.innerHTML = `
            <div class="trait-header">
                <span>${traitNames[trait]}</span>
                <strong>${percentage}%</strong>
            </div>

            <div class="trait-bar">
                <div class="trait-fill" style="width: ${percentage}%"></div>
            </div>
        `;

        traitsContainer.appendChild(traitElement);
    });
}

function restartTest() {
    currentQuestion = 0;
    answersChosen = [];
    scores = {};

    resultScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion();
}
