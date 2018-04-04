import QuestionID from './util/QuestionID'

export default {
    // Please update this as you add new questions
    current_max_id: 84,
    prenoon: {
        // Default questions
        has_worked: {
            id: 85,
            type: 'boolean',
            question: 'Have you worked before lunch?',
            session: 1,
            dependants: [1, 2, 3, 6, 16, 17]
        },
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
            session: 1,
            dependants: [8]
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
            question: 'Have you been smoking before lunch?',
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
            question: 'Did you drink alcohol yesterday?',
            session: 1,
            dependants: [19]
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
        },

        // Feeling questions
        happy: {
            id: 61,
            type: 'scale',
            question: 'How happy did you feel before lunch?',
            session: 1
        },
        productive: {
            id: 62,
            type: 'scale',
            question: 'How productive have you been before lunch?',
            session: 1
        },
        headache: {
            id: 63,
            type: 'scale',
            question: 'How much headache have you had before lunch?',
            session: 1
        },
        sad: {
            id: 64,
            type: 'scale',
            question: 'How sad did you feel before lunch?',
            session: 1
        },
        angry: {
            id: 65,
            type: 'scale',
            question: 'How angry did you feel before lunch?',
            session: 1
        },
        calm: {
            id: 66,
            type: 'scale',
            question: 'How calm did you feel before lunch?',
            session: 1
        },
        stressed: {
            id: 14,
            type: 'scale',
            question: 'How stressed did you feel before lunch?',
            session: 1
        },
        well_being: {
            id: 13,
            type: 'scale',
            question: 'Overall how did you feel before lunch?',
            session: 1
        },
        comment: {
            id: 15,
            type: 'text',
            question: 'Optional Comment',
            session: 1
        },

    },
    postnoon: {
        // Default questions
        has_worked: {
            id: 86,
            type: 'boolean',
            question: 'Have you worked before dinner?',
            session: 2,
            dependants: [21, 22, 23, 26]
        },
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
            session: 2,
            dependants: [28]
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
            question: 'Have you been smoking before dinner?',
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
            question: 'Have eaten any sweets before dinner?',
            session: 2
        },

        // Special for postnoon
        too_much_coffee: {
            id: 36,
            type: 'boolean',
            question: 'Have you had more than two cups of coffee this afternoon?',
            session: 2
        },

        // Feeling questions
        happy: {
            id: 67,
            type: 'scale',
            question: 'How happy did you feel before dinner?',
            session: 2
        },
        productive: {
            id: 68,
            type: 'scale',
            question: 'How productive have you been before dinner?',
            session: 2
        },
        headache: {
            id: 69,
            type: 'scale',
            question: 'How much headache have you had before dinner?',
            session: 2
        },
        sad: {
            id: 70,
            type: 'scale',
            question: 'How sad did you feel before dinner?',
            session: 2
        },
        angry: {
            id: 71,
            type: 'scale',
            question: 'How angry did you feel before dinner?',
            session: 2
        },
        calm: {
            id: 72,
            type: 'scale',
            question: 'How calm did you feel before dinner?',
            session: 2
        },
        stressed: {
            id: 34,
            type: 'scale',
            question: 'How stressed did you feel before dinner?',
            session: 2
        },
        well_being: {
            id: 33,
            type: 'scale',
            question: 'Overall how did you feel before dinner?',
            session: 2
        },
        comment: {
            id: 35,
            type: 'text',
            question: 'Optional Comment',
            session: 2
        },
    },
    evening: {
        // Default questions
        has_worked: {
            id: 87,
            type: 'boolean',
            question: 'Have you worked after dinner?',
            session: 3,
            dependants: [37, 38, 39, 42]
        },
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
            question: 'Have you been disturbed by your phone or similar when working after dinner?',
            session: 3
        },
        did_procastinate: {
            id: 40,
            type: 'boolean',
            question: 'Have you postponed something you could have done after dinner?',
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
            session: 3,
            dependants: [44]
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
            question: 'Have you been smoking after dinner?',
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

        // Special for evening
        too_much_coffee: {
            id: 52,
            type: 'boolean',
            question: 'Have you had more than two cups of coffee since dinner?',
            session: 3
        },

        // Feeling questions
        happy: {
            id: 73,
            type: 'scale',
            question: 'How happy did you feel after dinner?',
            session: 3
        },
        productive: {
            id: 74,
            type: 'scale',
            question: 'How productive have you been after dinner?',
            session: 3
        },
        headache: {
            id: 75,
            type: 'scale',
            question: 'How much headache have you had after dinner?',
            session: 3
        },
        sad: {
            id: 76,
            type: 'scale',
            question: 'How sad did you feel after dinner?',
            session: 3
        },
        angry: {
            id: 77,
            type: 'scale',
            question: 'How angry did you feel after dinner?',
            session: 3
        },
        calm: {
            id: 78,
            type: 'scale',
            question: 'How calm did you feel after dinner?',
            session: 3
        },
        stressed: {
            id: 50,
            type: 'scale',
            question: 'How stressed did you feel after dinner?',
            session: 3
        },
        well_being: {
            id: 49,
            type: 'scale',
            question: 'Overall how did you feel after dinner?',
            session: 3
        },
        comment: {
            id: 51,
            type: 'text',
            question: 'Optional Comment',
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
        happy: {
            id: 79,
            type: 'scale',
            question: 'How happy have you felt during the whole day?',
            session: 3
        },
        productive: {
            id: 80,
            type: 'scale',
            question: 'How productive have you been during the whole day?',
            session: 3
        },
        headache: {
            id: 81,
            type: 'scale',
            question: 'How much headache have had during the whole day?',
            session: 3
        },
        sad: {
            id: 82,
            type: 'scale',
            question: 'How sad have you felt during the whole day?',
            session: 3
        },
        angry: {
            id: 83,
            type: 'scale',
            question: 'How angry have you felt during the whole day?',
            session: 3
        },
        calm: {
            id: 84,
            type: 'scale',
            question: 'How calm have you felt during the whole day?',
            session: 3
        },
        stressed: {
            id: 59,
            type: 'scale',
            question: 'How stressed have you felt during the whole day?',
            session: 3
        },
        well_being: {
            id: 58,
            type: 'scale',
            question: 'Overall, how have you felt during the whole day?',
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