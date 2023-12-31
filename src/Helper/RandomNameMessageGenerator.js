var nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];

var finalName = "";

export function RandomNameGenerator() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

export function getRandomComment() {
  const comments = [
    "Great job! 👏👍",
    "I love this! ❤️😍",
    "This is amazing! 🌟✨",
    "Keep up the good work! 💪👊",
    "Awesome! 😎🚀",
    "Fantastic! 🎉🙌",
    "You're a genius! 🤩🧠",
    "Impressive! 👌😲",
    "Outstanding! 🏆👏",
    "I'm speechless! 😶💬",
    "Bravo! 👏👏",
    "Incredible! 😱🤯",
    "You're a rockstar! 🎸🌟",
    "I'm blown away! 💨💥",
    "You're on fire! 🔥🔥",
    "This is outstanding! 🌟👍",
    "Absolutely amazing! 😍🙌",
    "I'm in awe! 🤯👏",
    "You're the best! 🏆😎",
    "This is pure genius! 🤩💡",
    "Incredibly impressive! 👌🚀",
    "You never cease to amaze! 🎉👊",
    "This is top-notch! 👏🌟",
    "You're a legend! 🏆🌟",
    "Spectacular work! 🌟🔥",
    "This is a masterpiece! 🎨🤯",
    "You're a true artist! 🎨😇",
    "I'm inspired! 💡😍",
    "You're a creative genius! 🤩✨",
    "I can't believe how good this is! 😲👍",
    "This is exceptional! 👌🚀",
    "You've outdone yourself! 🙌😎",
    "This is beyond words! 😶💬",
    "You're a marvel! 🌟👏",
    "I'm in heaven! 😍❤️",
    "You're a magician! 🎩✨",
    "This is phenomenal! 🙌🔥",
    "You're on another level! 🌟🚀",
    "I'm on cloud nine! ☁️9⃣",
    "You're a wizard! ⚡🪄",
    "This is sheer perfection! 👌👏",
    "You're a shining star! 🌟💫",
    "I'm over the moon! 🌙😍",
    "You're a prodigy! 🌟🌟",
    "This is a masterpiece! 🖼️🙌",
    "You're extraordinary! 🌟🌟",
    "I'm in paradise! 🏝️🤯",
    "You're a virtuoso! 🌟🎶",
    "This is a work of art! 🎨❤️",
    "You're a legend in the making! 🏆✨",
    "I'm absolutely enchanted! ✨😍",
    "You're a champion! 🏆🔥",
    "This is legendary! 🌟🚀",
    "You're a maestro! 🎶💡",
    "I'm captivated! 🤩😊",
    "You're a sensation! 🌟👏",
    "This is breathtaking! 😍🙌",
    "You're a virtuoso! 🌟🎸",
    "I'm head over heels! 👠❤️",
    "You're a rockstar! 🎸🔥",
    "This is mesmerizing! 🌟✨",
    "You're a phenomenon! 🌟🤩",
    "I'm dazzled! ✨😎",
    "You're a superstar! ⭐🌟",
    "This is spellbinding! 🌟🎩",
    "You're a marvel! 🌟😇",
    "I'm in wonder! 😲💬",
    "You're a master! 🌟👑",
    "This is a revelation! 🌟🌟",
    "You're a trailblazer! 🚀🙌",
    "I'm in ecstasy! 🌈😍",
    "You're a legend! 🏆🏆",
    "This is monumental! 🏞️🤯",
    "You're a genius! 🌟💡",
    "I'm delighted! 🤩❤️",
    "You're an icon! 🌟🌟",
    "This is extraordinary! 🌟👌",
    "You're the best! 🥇🚀",
    "I'm euphoric! 🌟😎",
    "You're a phenomenon! 🌟✨",
    "This is top-class! 👏🏆",
    "You're a champion! 🏆🌟",
    "I'm thrilled! 🎉👏",
    "You're a luminary! 🌟🌟",
    "This is unparalleled! 👌😍",
    "You're a virtuoso! 🌟🎼",
    "I'm enchanted! ✨❤️",
    "You're the ultimate! 🌟💫",
    "This is a masterpiece! 🎨🎉",
    "You're remarkable! 🌟🌟",
    "I'm in heaven! 😇🤯",
    "You're a prodigy! 🌟💡",
    "This is exceptional! 🌟🙌",
    "You're on another level! 🚀🏆",
    "I'm on cloud nine! ☁️🎶",
    "You're a virtuoso! 🌟🎹",
    "This is unparalleled! 👏🌟",
    "You're a shining star! 🌟🌟",
    "I'm over the moon! 🌙💬",
    "You're a wizard! ⚡🌟",
    "This is sheer perfection! 👌😍",
    "You're a shining star! 🌟🔥",
    "I'm absolutely enchanted! ✨🌟",
    "You're a champion! 🏆🤩",
    "This is legendary! 🌟🔥",
    "You're a maestro! 🎶👏",
    "I'm captivated! 🌟🔥",
    "You're a sensation! 🌟💫",
    "This is breathtaking! 😍🏆",
    "You're a virtuoso! 🌟🎤",
    "I'm head over heels! 🌟😍",
    "You're a rockstar! 🎸🏆",
    "This is mesmerizing! 🌟🚀",
    "You're a phenomenon! 🌟✨",
    "I'm dazzled! ✨👌",
    "You're a superstar! ⭐🤩",
    "This is spellbinding! 🌟💥",
    "You're a marvel! 🌟💥",
    "I'm in wonder! 🌟😎",
    "You're a master! 🌟🌟",
    "This is a revelation! 🌟🚀",
    "You're a trailblazer! 🌟🙌",
    "I'm in ecstasy! 🌟🌟",
    "You're a legend! 🏆💥",
    "This is monumental! 🌟🏆",
    "You're a genius! 🌟🤩",
    "I'm delighted! 🌟🌟",
    "You're an icon! 🌟🏆",
    "This is extraordinary! 🌟💥",
    "You're the best! 🌟✨",
    "I'm euphoric! 🌟💥",
  ];

  const randomIndex = Math.floor(Math.random() * comments.length);
  return comments[randomIndex];
}
