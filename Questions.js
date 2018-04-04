import QuestionID from './util/QuestionID'

export default {
    prenoon: {
        // Default questions
        had_break: {
            id: 1,
            type: 'boolean',
            question: 'Have you taken a break when working before lunch?',
            session: 1
        },
        had_focus: {
            id: 2,
            type: 'boolean',
            question: 'Have you had high focus on the tasks done before lunch?',
            session: 1
        },
        was_interruppted: {
            id: 3,
            type: 'boolean',
            question: 'Have you been disturbed by your phone or similar when working before lunch?',
            session: 1
        },
        did_procastinate: {
            id: 4,
            type: 'boolean',
            question: 'Have you postponed something you could have done before lunch?',
            session: 1
        },
        did_lie: {
            id: 5,
            type: 'boolean',
            question: 'Have you lied to yourself or anyone else before lunch?',
            session: 1
        },
        has_messy_workspace: {
            id: 6,
            type: 'boolean',
            question: 'Has your workspace been messy before lunch?',
            session: 1
        },
        has_eaten: {
            id: 7,
            type: 'boolean',
            question: 'Did you eat breakfast?',
            session: 1
        },
        is_super_full: {
            id: 8,
            type: 'boolean',
            question: 'Did you eat to much breakfast?',
            session: 1
        },
        had_water: {
            id: 9,
            type: 'boolean',
            question: 'Have you been drinking water regularly before breakfast?',
            session: 1
        },
        did_smoke: {
            id: 10,
            type: 'boolean',
            question: '( if smoker ) Have you been smoking before lunch?',
            session: 1
        },
        did_workout: {
            id: 11,
            type: 'boolean',
            question: 'Did you workout before lunch?',
            session: 1
        },
        eaten_sweets: {
            id: 12,
            type: 'boolean',
            question: 'Have eaten any sweets before breakfast?',
            session: 1
        },
        well_being: {
            id: 13,
            type: 'scale',
            question: 'Hur mår du? ( 1 - 4 )',
            session: 1
        },
        stressed: {
            id: 14,
            type: 'scale',
            question: 'Känner du dig stressad? ( 1 - 4 )',
            session: 1
        },
        comment: {
            id: 15,
            type: 'text',
            question: 'Comment Kommentar för din egen skull ( Fritext )',
            session: 1
        },

        // Special for the morning
        email_before_workout: {
            id: 16,
            type: 'boolean',
            question: 'Did you check your email/socialmedia before you started to work this morning?',
            session: 1
        },
        has_clear_daygoals: {
            id: 17,
            type: 'boolean',
            question: 'Did plan your day before starting to work this morning?',
            session: 1
        },
        had_alcohol_yesterday: {
            id: 18,
            type: 'boolean',
            question: '( if nykterist ) Did you drink alcohol yesterday?',
            session: 1
        },
        was_drunk_yesterday: {
            id: 19,
            type: 'boolean',
            question: 'Did you get drunk yesterday?',
            session: 1
        },
        had_enough_sleep: {
            id: 20,
            type: 'boolean',
            question: 'Did you sleep more than eight hours last night?',
            session: 1
        }
    },
    postnoon: {
        // Default questions
        had_break: {
            id: 21,
            type: 'boolean',
            question: 'Have you taken a break when working before dinner?',
            session: 2
        },
        had_focus: {
            id: 22,
            type: 'boolean',
            question: 'Have you had high focus on the tasks done before dinner?',
            session: 2
        },
        was_interruppted: {
            id: 23,
            type: 'boolean',
            question: 'Have you been disturbed by your phone or similar when working before dinner?',
            session: 2
        },
        did_procastinate: {
            id: 24,
            type: 'boolean',
            question: 'Have you postponed something you could have done before dinner?',
            session: 2
        },
        did_lie: {
            id: 25,
            type: 'boolean',
            question: 'Have you lied to yourself or anyone else before dinner?',
            session: 2
        },
        has_messy_workspace: {
            id: 26,
            type: 'boolean',
            question: 'Has your workspace been messy before dinner?',
            session: 2
        },
        has_eaten: {
            id: 27,
            type: 'boolean',
            question: 'Did you eat lunch?',
            session: 2
        },
        is_super_full: {
            id: 28,
            type: 'boolean',
            question: 'Did you eat to much lunch?',
            session: 2
        },
        had_water: {
            id: 29,
            type: 'boolean',
            question: 'Have you been drinking water regularly before dinner?',
            session: 2
        },
        did_smoke: {
            id: 30,
            type: 'boolean',
            question: '( if smoker ) Have you been smoking before dinner?',
            session: 2
        },
        did_workout: {
            id: 31,
            type: 'boolean',
            question: 'Did you workout before dinner?',
            session: 2
        },
        eaten_sweets: {
            id: 32,
            type: 'boolean',
            question: 'Have eaten any sweets before breakfast?',
            session: 2
        },
        well_being: {
            id: 33,
            type: 'scale',
            question: '(LUNCH) Hur mår du? ( 1 - 4 )',
            session: 2
        },
        stressed: {
            id: 34,
            type: 'scale',
            question: '(LUNCH) Känner du dig stressad? ( 1 - 4 )',
            session: 2
        },
        comment: {
            id: 35,
            type: 'text',
            question: '(LUNCH) Kommentar för din egen skull ( Fritext )',
            session: 2
        },

        // Special for lunch
        too_much_coffee: {
            id: 36,
            type: 'boolean',
            question: 'Have you had more than two cups of coffee this afternoon?',
            session: 2
        },
    },
    evening: {
        // Default questions
        had_break: {
            id: 37,
            type: 'boolean',
            question: 'Have you taken a break when working after dinner?',
            session: 3
        },
        had_focus: {
            id: 38,
            type: 'boolean',
            question: 'Have you had high focus on the tasks done after dinner?',
            session: 3
        },
        was_interruppted: {
            id: 39,
            type: 'boolean',
            question: 'Have you postponed something you could have done after dinner?',
            session: 3
        },
        did_procastinate: {
            id: 40,
            type: 'boolean',
            question: '(DINNER) Har du skjutit fram något som du skulle kunnat göra nu?',
            session: 3
        },
        did_lie: {
            id: 41,
            type: 'boolean',
            question: 'Have you lied to yourself or anyone else after dinner?',
            session: 3
        },
        has_messy_workspace: {
            id: 42,
            type: 'boolean',
            question: 'Has your workspace been messy after dinner?',
            session: 3
        },
        has_eaten: {
            id: 43,
            type: 'boolean',
            question: 'Did you eat dinner?',
            session: 3
        },
        is_super_full: {
            id: 44,
            type: 'boolean',
            question: 'Did you eat to much dinner?',
            session: 3
        },
        had_water: {
            id: 45,
            type: 'boolean',
            question: 'Have you been drinking water regularly after dinner?',
            session: 3
        },
        did_smoke: {
            id: 46,
            type: 'boolean',
            question: '( if smoker ) Have you been smoking after dinner?',
            session: 3
        },
        did_workout: {
            id: 47,
            type: 'boolean',
            question: 'Did you workout after dinner?',
            session: 3
        },
        eaten_sweets: {
            id: 48,
            type: 'boolean',
            question: 'Have eaten any sweets after dinner?',
            session: 3
        },
        well_being: {
            id: 49,
            type: 'scale',
            question: '(DINNER) Hur mår du? ( 1 - 4 )',
            session: 3
        },
        stressed: {
            id: 50,
            type: 'scale',
            question: '(DINNER) Känner du dig stressad? ( 1 - 4 )',
            session: 3
        },
        comment: {
            id: 51,
            type: 'text',
            question: '(DINNER) Kommentar för din egen skull ( Fritext )',
            session: 3
        },

        // Special for dinner
        too_much_coffee: {
            id: 52,
            type: 'boolean',
            question: 'Have you had more than two cups of coffee since dinner?',
            session: 3
        }
    },
    allday: {
        productive_before_lunch: {
            id: 53,
            type: 'boolean',
            question: 'When did you do the most challenging tasks today?',
            session: 3,
            yesLabel: 'Before lunch',
            noLabel: 'After Lunch'
        },

        too_much_tv: {
            id: 54,
            type: 'boolean',
            question: 'Have you wathed TV / Netflix / YouTube more than one hour during the whole day?',
            session: 3
        },
        too_much_social_media: {
            id: 55,
            type: 'boolean',
            question: 'Have you browsed public social media channels more than 30 minutes during the whole day?',
            session: 3
        },
        regret_did_accept_task: {
            id: 56,
            type: 'boolean',
            question: 'Have you agreed to do a task today, that you now regret?',
            session: 3
        },
        had_enough_water: {
            id: 57,
            type: 'boolean',
            question: 'Have you drunk at least two liters of water during the whole day?',
            session: 3
        },
        well_being: {
            id: 58,
            type: 'scale',
            question: 'All in all, how would you say you have felt today? ( 1 - 4 )',
            session: 3
        },
        stressed: {
            id: 59,
            type: 'scale',
            question: 'How stressed have you felt during the whole day?',
            session: 3
        },
        comment: {
            id: 60,
            type: 'text',
            question: 'Here you can write a comment, summarizing the whole day',
            session: 3
        },
    }
}