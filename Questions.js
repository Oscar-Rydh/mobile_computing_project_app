import QuestionID from './util/QuestionID'

export default {
    morning: {
        // Default questions
        had_break: {
            id: 1,
            type: 'boolean',
            question: '(MORNING) Har du tagit en paus?'
        },
        had_focus: {
            id: 2,
            type: 'boolean',
            question: '(MORNING) Har du haft högt fokus på den enskilt för stunden aktuella uppgiften?'
        },
        was_interruppted: {
            id: 3,
            type: 'boolean',
            question: '(MORNING) Har du blivit störd av dina telefon eller liknande när du varit fokuserad?'
        },
        did_procastinate: {
            id: 4,
            type: 'boolean',
            question: '(MORNING) Har du skjutit fram något som du skulle kunnat göra nu?'
        },
        did_lie: {
            id: 5,
            type: 'boolean',
            question: '(MORNING) Har du ljugit för dig själv, eller någon annan?'
        },
        has_messy_workspace: {
            id: 6,
            type: 'boolean',
            question: '(MORNING) Är din arbetsyta stökig just nu?'
        },
        has_eaten: {
            id: 7,
            type: 'boolean',
            question: '(MORNING) Har du ätit?'
        },
        is_super_full: {
            id: 8,
            type: 'boolean',
            question: '(MORNING) Känner du dig proppmätt?'
        },
        had_water: {
            id: 9,
            type: 'boolean',
            question: '(MORNING) Har du druckit vatten?'
        },
        did_smoke: {
            id: 10,
            type: 'boolean',
            question: '(MORNING) ( if smoker ) Har du rökt?'
        },
        did_workout: {
            id: 11,
            type: 'boolean',
            question: '(MORNING) Har du tränat?'
        },
        eaten_sweets: {
            id: 12,
            type: 'boolean',
            question: '(MORNING) Har du ätit sötsaker?'
        },
        well_being: {
            id: 13,
            type: 'scale',
            question: '(MORNING) Hur mår du? ( 1 - 4 )'
        },
        stressed: {
            id: 14,
            type: 'scale',
            question: '(MORNING) Känner du dig stressad? ( 1 - 4 )'
        },
        comment: {
            id: 15,
            type: 'text',
            question: '(MORNING) Kommentar för din egen skull ( Fritext )'
        },

        // Special for the morning
        email_before_workout: {
            id: 16,
            type: 'boolean',
            question: '(MORNING) Kollade du email/sociala medier innan du åt frukost/tränade?'
        },
        has_clear_daygoals: {
            id: 17,
            type: 'boolean',
            question: '(MORNING) Har du en klar bild av vad du ska åstadkomma idag?'
        },
        had_alcohol_yesterday: {
            id: 18,
            type: 'boolean',
            question: '(MORNING) ( if nykterist ) Drack du alkohol igår ?',
        },
        was_drunk_yesterday: {
            id: 19,
            type: 'boolean',
            question: '(MORNING) Blev du full igår ?'
        },
        had_enough_sleep: {
            id: 20,
            type: 'boolean',
            question: '(MORNING) Har du sovit åtta timmar eller mer inatt ?'
        }
    },
    lunch: {
        // Default questions
        had_break: {
            id: 21,
            type: 'boolean',
            question: '(LUNCH) Har du tagit en paus?'
        },
        had_focus: {
            id: 22,
            type: 'boolean',
            question: '(LUNCH) Har du haft högt fokus på den enskilt för stunden aktuella uppgiften?'
        },
        was_interruppted: {
            id: 23,
            type: 'boolean',
            question: '(LUNCH) Har du blivit störd av dina telefon eller liknande när du varit fokuserad?'
        },
        did_procastinate: {
            id: 24,
            type: 'boolean',
            question: '(LUNCH) Har du skjutit fram något som du skulle kunnat göra nu?'
        },
        did_lie: {
            id: 25,
            type: 'boolean',
            question: '(LUNCH) Har du ljugit för dig själv, eller någon annan'
        },
        has_messy_workspace: {
            id: 26,
            type: 'boolean',
            question: '(LUNCH) Är din arbetsyta stökig just nu?'
        },
        has_eaten: {
            id: 27,
            type: 'boolean',
            question: '(LUNCH) Har du ätit?'
        },
        is_super_full: {
            id: 28,
            type: 'boolean',
            question: '(LUNCH) Känner du dig proppmätt?'
        },
        had_water: {
            id: 29,
            type: 'boolean',
            question: '(LUNCH) Har du druckit vatten?'
        },
        did_smoke: {
            id: 30,
            type: 'boolean',
            question: '(LUNCH) ( if smoker ) Har du rökt?'
        },
        did_workout: {
            id: 31,
            type: 'boolean',
            question: '(LUNCH) Har du tränat?'
        },
        eaten_sweets: {
            id: 32,
            type: 'boolean',
            question: '(LUNCH) Har du ätit sötsaker?'
        },
        well_being: {
            id: 33,
            type: 'scale',
            question: '(LUNCH) Hur mår du? ( 1 - 4 )'
        },
        stressed: {
            id: 34,
            type: 'scale',
            question: '(LUNCH) Känner du dig stressad? ( 1 - 4 )'
        },
        comment: {
            id: 35,
            type: 'text',
            question: '(LUNCH) Kommentar för din egen skull ( Fritext )'
        },

        // Special for lunch
        too_much_coffee: {
            id: 36,
            type: 'boolean',
            question: '(LUNCH) Har du druckit mer än två koppar kaffe?'
        },
    },
    dinner: {
        // Default questions
        had_break: {
            id: 37,
            type: 'boolean',
            question: '(DINNER) Har du tagit en paus?'
        },
        had_focus: {
            id: 38,
            type: 'boolean',
            question: '(DINNER) Har du haft högt fokus på den enskilt för stunden aktuella uppgiften?'
        },
        was_interruppted: {
            id: 39,
            type: 'boolean',
            question: '(DINNER) Har du blivit störd av dina telefon eller liknande när du varit fokuserad?'
        },
        did_procastinate: {
            id: 40,
            type: 'boolean',
            question: '(DINNER) Har du skjutit fram något som du skulle kunnat göra nu?'
        },
        did_lie: {
            id: 41,
            type: 'boolean',
            question: '(DINNER) Har du ljugit för dig själv, eller någon annan?'
        },
        has_messy_workspace: {
            id: 42,
            type: 'boolean',
            question: '(DINNER) Är din arbetsyta stökig just nu?'
        },
        has_eaten: {
            id: 43,
            type: 'boolean',
            question: '(DINNER) Har du ätit?'
        },
        is_super_full: {
            id: 44,
            type: 'boolean',
            question: '(DINNER) Känner du dig proppmätt?'
        },
        had_water: {
            id: 45,
            type: 'boolean',
            question: '(DINNER) Har du druckit vatten?'
        },
        did_smoke: {
            id: 46,
            type: 'boolean',
            question: '(DINNER) ( if smoker ) Har du rökt?'
        },
        did_workout: {
            id: 47,
            type: 'boolean',
            question: '(DINNER) Har du tränat?'
        },
        eaten_sweets: {
            id: 48,
            type: 'boolean',
            question: '(DINNER) Har du ätit sötsaker?'
        },
        well_being: {
            id: 49,
            type: 'scale',
            question: '(DINNER) Hur mår du? ( 1 - 4 )'
        },
        stressed: {
            id: 50,
            type: 'scale',
            question: '(DINNER) Känner du dig stressad? ( 1 - 4 )'
        },
        comment: {
            id: 51,
            type: 'text',
            question: '(DINNER) Kommentar för din egen skull ( Fritext )'
        },

        // Special for dinner
        too_much_coffee: {
            id: 52,
            type: 'boolean',
            question: '(DINNER) Har du druckit mer än två koppar kaffe?'
        }
    },
    all_day: {
        productive_before_lunch: {
            id: 53,
            type: 'boolean',
            question: '(ALL DAY) När jobbade du med det mest utmanande under dagen? (Innan lunch / Efter Lunch)'
        },

        too_much_tv: {
            id: 54,
            type: 'boolean',
            question: '(ALL DAY) Har du kollat på TV / Netflix / YouTube mer än en timme idag?'
        },
        too_much_social_media: {
            id: 55,
            type: 'boolean',
            question: '(ALL DAY) Har du kollat publika sociala media kanaler mer än ... idag?'
        },
        regret_did_accept_task: {
            id: 56,
            type: 'boolean',
            question: '(ALL DAY) Har du tagit dig an att göra något, som du nu ångrar?'
        },
        had_enough_water: {
            id: 57,
            type: 'boolean',
            question: '(ALL DAY) Har du druckit två liter vatten eller mer idag?'
        },
        well_being: {
            id: 58,
            type: 'scale',
            question: '(ALL DAY) Hur har du mått idag? ( 1 - 4 )'
        },
        stressed: {
            id: 59,
            type: 'scale',
            question: '(ALL DAY) Har du känt dig stressad idag? ( 1 - 4 )'
        },
        comment: {
            id: 60,
            type: 'text',
            question: '(ALL DAY) Kommentar för din egen skull ( Fritext )'
        },
    }
}