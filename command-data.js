// All Discord bot commands organized by category
const commandsData = {
    admin: [
        {
            name: "settings",
            description: "Configure server settings including prefix, log channel, and welcome messages",
            usage: "/settings [option] [value]",
            permissions: ["Administrator"],
            category: "admin",
            icon: "fas fa-cog"
        },
        {
            name: "customcommand",
            description: "Create, edit, or delete custom commands for your server",
            usage: "/customcommand <action> <name> [response]",
            permissions: ["Manage Server"],
            category: "admin",
            icon: "fas fa-plus-circle"
        },
        {
            name: "stats",
            description: "View detailed server statistics including user count, messages, and bot performance",
            usage: "/stats",
            permissions: ["Administrator"],
            category: "admin",
            icon: "fas fa-chart-bar"
        },
        {
            name: "reload",
            description: "Reload bot commands and configurations without restarting",
            usage: "/reload [command]",
            permissions: ["Administrator"],
            category: "admin",
            icon: "fas fa-sync"
        }
    ],
    moderation: [
        {
            name: "kick",
            description: "Remove a user from the server with an optional reason",
            usage: "/kick <user> [reason]",
            permissions: ["Kick Members"],
            category: "moderation",
            icon: "fas fa-user-times"
        },
        {
            name: "ban",
            description: "Permanently ban a user from the server with message deletion options",
            usage: "/ban <user> [reason] [days]",
            permissions: ["Ban Members"],
            category: "moderation",
            icon: "fas fa-hammer"
        },
        {
            name: "unban",
            description: "Remove a ban from a previously banned user",
            usage: "/unban <user_id> [reason]",
            permissions: ["Ban Members"],
            category: "moderation",
            icon: "fas fa-user-check"
        },
        {
            name: "mute",
            description: "Temporarily mute a user for a specified duration",
            usage: "/mute <user> <duration> [reason]",
            permissions: ["Moderate Members"],
            category: "moderation",
            icon: "fas fa-volume-mute"
        },
        {
            name: "unmute",
            description: "Remove timeout from a muted user",
            usage: "/unmute <user> [reason]",
            permissions: ["Moderate Members"],
            category: "moderation",
            icon: "fas fa-volume-up"
        },
        {
            name: "warn",
            description: "Issue a warning to a user with automatic action thresholds",
            usage: "/warn <user> <reason>",
            permissions: ["Manage Messages"],
            category: "moderation",
            icon: "fas fa-exclamation-triangle"
        },
        {
            name: "warnings",
            description: "View all warnings for a specific user",
            usage: "/warnings <user>",
            permissions: ["Manage Messages"],
            category: "moderation",
            icon: "fas fa-list-alt"
        },
        {
            name: "purge",
            description: "Bulk delete messages with various filtering options",
            usage: "/purge <amount> [user] [contains]",
            permissions: ["Manage Messages"],
            category: "moderation",
            icon: "fas fa-broom"
        },
        {
            name: "automod",
            description: "Configure automatic moderation including anti-spam, anti-swear, and raid protection",
            usage: "/automod <setup|status|whitelist>",
            permissions: ["Manage Server"],
            category: "moderation",
            icon: "fas fa-shield-alt"
        }
    ],
    economy: [
        {
            name: "balance",
            description: "Check your current balance and bank account",
            usage: "/balance [user]",
            permissions: [],
            category: "economy",
            icon: "fas fa-wallet"
        },
        {
            name: "daily",
            description: "Claim your daily reward (24-hour cooldown)",
            usage: "/daily",
            permissions: [],
            category: "economy",
            icon: "fas fa-calendar-day"
        },
        {
            name: "work",
            description: "Work different jobs to earn money with varying payouts",
            usage: "/work",
            permissions: [],
            category: "economy",
            icon: "fas fa-briefcase"
        },
        {
            name: "crime",
            description: "Commit crimes for high risk, high reward money earning",
            usage: "/crime",
            permissions: [],
            category: "economy",
            icon: "fas fa-mask"
        },
        {
            name: "deposit",
            description: "Deposit money into your bank account for safekeeping",
            usage: "/deposit <amount>",
            permissions: [],
            category: "economy",
            icon: "fas fa-piggy-bank"
        },
        {
            name: "withdraw",
            description: "Withdraw money from your bank account",
            usage: "/withdraw <amount>",
            permissions: [],
            category: "economy",
            icon: "fas fa-money-bill-wave"
        },
        {
            name: "pay",
            description: "Transfer money to another user",
            usage: "/pay <user> <amount>",
            permissions: [],
            category: "economy",
            icon: "fas fa-hand-holding-usd"
        },
        {
            name: "leaderboard",
            description: "View economy leaderboard showing richest users",
            usage: "/leaderboard [type]",
            permissions: [],
            category: "economy",
            icon: "fas fa-trophy"
        },
        {
            name: "gamble",
            description: "Gamble money with dice rolls for potential big wins",
            usage: "/gamble <amount>",
            permissions: [],
            category: "economy",
            icon: "fas fa-dice"
        },
        {
            name: "rob",
            description: "Attempt to rob money from other users (risk vs reward)",
            usage: "/rob <user>",
            permissions: [],
            category: "economy",
            icon: "fas fa-user-ninja"
        }
    ],
    games: [
        {
            name: "trivia",
            description: "Play trivia games with multiple categories and difficulties, earn money for correct answers",
            usage: "/trivia [category]",
            permissions: [],
            category: "games",
            icon: "fas fa-brain"
        },
        {
            name: "hangman",
            description: "Classic hangman word guessing game with different difficulty levels",
            usage: "/hangman [difficulty]",
            permissions: [],
            category: "games",
            icon: "fas fa-spell-check"
        },
        {
            name: "slots",
            description: "Slot machine gambling game with various winning combinations",
            usage: "/slots <bet>",
            permissions: [],
            category: "games",
            icon: "fas fa-coins"
        },
        {
            name: "blackjack",
            description: "Play blackjack against the dealer with interactive buttons",
            usage: "/blackjack <bet>",
            permissions: [],
            category: "games",
            icon: "fas fa-spade"
        },
        {
            name: "8ball",
            description: "Ask the magic 8-ball any yes/no question",
            usage: "/8ball <question>",
            permissions: [],
            category: "games",
            icon: "fas fa-magic"
        },
        {
            name: "coinflip",
            description: "Flip a coin and bet on heads or tails",
            usage: "/coinflip <choice> [bet]",
            permissions: [],
            category: "games",
            icon: "fas fa-circle"
        },
        {
            name: "dice",
            description: "Roll dice and bet on the outcome",
            usage: "/dice [sides] [bet]",
            permissions: [],
            category: "games",
            icon: "fas fa-dice-six"
        },
        {
            name: "rps",
            description: "Play rock, paper, scissors against the bot",
            usage: "/rps <choice>",
            permissions: [],
            category: "games",
            icon: "fas fa-hand-rock"
        }
    ],
    music: [
        {
            name: "play",
            description: "Play music from YouTube with URL or search query",
            usage: "/play <song>",
            permissions: [],
            category: "music",
            icon: "fas fa-play"
        },
        {
            name: "skip",
            description: "Skip the currently playing song",
            usage: "/skip",
            permissions: [],
            category: "music",
            icon: "fas fa-step-forward"
        },
        {
            name: "stop",
            description: "Stop music playback and clear the queue",
            usage: "/stop",
            permissions: [],
            category: "music",
            icon: "fas fa-stop"
        },
        {
            name: "queue",
            description: "Display the current music queue with upcoming songs",
            usage: "/queue",
            permissions: [],
            category: "music",
            icon: "fas fa-list-ol"
        },
        {
            name: "nowplaying",
            description: "Show information about the currently playing song",
            usage: "/nowplaying",
            permissions: [],
            category: "music",
            icon: "fas fa-music"
        },
        {
            name: "volume",
            description: "Adjust the music volume (0-100)",
            usage: "/volume <level>",
            permissions: [],
            category: "music",
            icon: "fas fa-volume-up"
        },
        {
            name: "pause",
            description: "Pause the currently playing music",
            usage: "/pause",
            permissions: [],
            category: "music",
            icon: "fas fa-pause"
        },
        {
            name: "resume",
            description: "Resume paused music playback",
            usage: "/resume",
            permissions: [],
            category: "music",
            icon: "fas fa-play-circle"
        },
        {
            name: "shuffle",
            description: "Shuffle the current music queue randomly",
            usage: "/shuffle",
            permissions: [],
            category: "music",
            icon: "fas fa-random"
        }
    ],
    social: [
        {
            name: "ship",
            description: "Ship two users together and see their compatibility percentage",
            usage: "/ship <user1> [user2]",
            permissions: [],
            category: "social",
            icon: "fas fa-heart"
        },
        {
            name: "hug",
            description: "Send a virtual hug to another user",
            usage: "/hug <user>",
            permissions: [],
            category: "social",
            icon: "fas fa-hand-holding-heart"
        },
        {
            name: "marry",
            description: "Propose marriage to another user with interactive buttons",
            usage: "/marry <user>",
            permissions: [],
            category: "social",
            icon: "fas fa-ring"
        },
        {
            name: "divorce",
            description: "Divorce your current partner",
            usage: "/divorce",
            permissions: [],
            category: "social",
            icon: "fas fa-heartbeat"
        },
        {
            name: "profile",
            description: "View detailed user profile with stats, level, economy info, and social status",
            usage: "/profile [user]",
            permissions: [],
            category: "social",
            icon: "fas fa-user-circle"
        },
        {
            name: "rank",
            description: "Check your current level, XP, and server ranking",
            usage: "/rank [user]",
            permissions: [],
            category: "social",
            icon: "fas fa-medal"
        },
        {
            name: "givexp",
            description: "Give XP to a user (Admin only)",
            usage: "/givexp <user> <amount>",
            permissions: ["Administrator"],
            category: "social",
            icon: "fas fa-gift"
        },
        {
            name: "removexp",
            description: "Remove XP from a user (Admin only)",
            usage: "/removexp <user> <amount>",
            permissions: ["Administrator"],
            category: "social",
            icon: "fas fa-minus-circle"
        },
        {
            name: "resetxp",
            description: "Reset XP for a user or everyone (Admin only)",
            usage: "/resetxp [user] [confirm]",
            permissions: ["Administrator"],
            category: "social",
            icon: "fas fa-redo"
        }
    ],
    utility: [
        {
            name: "ping",
            description: "Check bot latency and response time",
            usage: "/ping",
            permissions: [],
            category: "utility",
            icon: "fas fa-satellite-dish"
        },
        {
            name: "serverinfo",
            description: "Display detailed information about the current server",
            usage: "/serverinfo",
            permissions: [],
            category: "utility",
            icon: "fas fa-server"
        },
        {
            name: "userinfo",
            description: "Show detailed information about a specific user",
            usage: "/userinfo [user]",
            permissions: [],
            category: "utility",
            icon: "fas fa-id-card"
        },
        {
            name: "poll",
            description: "Create interactive polls with multiple options and reactions",
            usage: "/poll <question> <option1> <option2> [...]",
            permissions: [],
            category: "utility",
            icon: "fas fa-poll"
        },
        {
            name: "remind",
            description: "Set reminders that the bot will send you via DM",
            usage: "/remind <time> <message>",
            permissions: [],
            category: "utility",
            icon: "fas fa-clock"
        },
        {
            name: "avatar",
            description: "Display a user's avatar in high resolution",
            usage: "/avatar [user]",
            permissions: [],
            category: "utility",
            icon: "fas fa-image"
        },
        {
            name: "weather",
            description: "Get current weather information for any city",
            usage: "/weather <city>",
            permissions: [],
            category: "utility",
            icon: "fas fa-cloud-sun"
        },
        {
            name: "ticket",
            description: "Create a support ticket with priority levels",
            usage: "/ticket <reason> [priority]",
            permissions: [],
            category: "utility",
            icon: "fas fa-ticket-alt"
        },
        {
            name: "closeticket",
            description: "Close an active support ticket",
            usage: "/closeticket [reason]",
            permissions: [],
            category: "utility",
            icon: "fas fa-times-circle"
        },
        {
            name: "tickets",
            description: "View all tickets (Support team only)",
            usage: "/tickets [status]",
            permissions: ["Support Role"],
            category: "utility",
            icon: "fas fa-list"
        },
        {
            name: "ticketsetup",
            description: "Configure the ticket system settings",
            usage: "/ticketsetup [category] [role]",
            permissions: ["Administrator"],
            category: "utility",
            icon: "fas fa-tools"
        }
    ],
    fun: [
        {
            name: "joke",
            description: "Get a random joke from various categories",
            usage: "/joke",
            permissions: [],
            category: "fun",
            icon: "fas fa-laugh"
        },
        {
            name: "fact",
            description: "Learn a random interesting fact",
            usage: "/fact",
            permissions: [],
            category: "fun",
            icon: "fas fa-lightbulb"
        },
        {
            name: "choose",
            description: "Let the bot choose between multiple options for you",
            usage: "/choose <option1> <option2> [...]",
            permissions: [],
            category: "fun",
            icon: "fas fa-question"
        },
        {
            name: "compliment",
            description: "Get a nice compliment to brighten your day",
            usage: "/compliment [user]",
            permissions: [],
            category: "fun",
            icon: "fas fa-smile"
        }
    ]
};

// Category icons and descriptions
const categoryInfo = {
    admin: {
        icon: "fas fa-crown",
        description: "Server administration and configuration commands",
        color: "#ff6b6b"
    },
    moderation: {
        icon: "fas fa-shield-alt",
        description: "Moderation tools for managing your server",
        color: "#4ecdc4"
    },
    economy: {
        icon: "fas fa-coins",
        description: "Virtual economy system with currency and transactions",
        color: "#45b7d1"
    },
    games: {
        icon: "fas fa-gamepad",
        description: "Interactive games and entertainment",
        color: "#96ceb4"
    },
    music: {
        icon: "fas fa-music",
        description: "Music player with YouTube integration",
        color: "#ffeaa7"
    },
    social: {
        icon: "fas fa-users",
        description: "Social features and user interaction commands",
        color: "#fd79a8"
    },
    utility: {
        icon: "fas fa-tools",
        description: "Useful utility commands and server information",
        color: "#6c5ce7"
    },
    fun: {
        icon: "fas fa-smile",
        description: "Fun and entertainment commands",
        color: "#a29bfe"
    }
};
