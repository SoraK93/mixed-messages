// Fire Signs (Aries, Leo, Sagittarius), Earth Signs (Taurus, Virgo, Capricorn), Air Signs (Gemini, Libra, Aquarius), and Water Signs (Cancer, Scorpio, Pisces).
const data = {
  horoscope: [
    "Aries",
    "Leo",
    "Sagittarius",
    "Taurus",
    "Virgo",
    "Capricorn",
    "Gemini",
    "Libra",
    "Aquarius",
    "Cancer",
    "Scorpio",
    "Pisces",
  ],
  todayFortune: ["Very Lucky", "Slightly Lucky", "Unlucky", "Very Unlucky"],
  advice: {
    message1: ["get", "eat", "make", "give"],
    message2: ["tea", "noodles", "paper", "water", "rice"],
  },
};

function randSelect(num) {
  return Math.floor(Math.random() * num);
}

function printForcast({ zodiac, fortune, advice }) {
  console.log(`Zodiac sign: ${zodiac}`);
  console.log(`You are ${fortune}`);
  console.log(`You need to ${advice}`);
}
