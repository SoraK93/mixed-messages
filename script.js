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

function dailyForcast() {
  let indexHoroscope = randSelect(data.horoscope.length);
  let indexFortune = randSelect(data.todayFortune.length);
  let indexAdvice1 = randSelect(data.advice.message1.length);
  let indexAdvice2 = randSelect(data.advice.message2.length);

  let zodiac = data.horoscope[indexHoroscope];
  let fortune = data.todayFortune[indexFortune];
  let advice = `${data.advice.message1[indexAdvice1]} ${data.advice.message2[indexAdvice2]}`;

  printForcast({ zodiac, fortune, advice });
}


dailyForcast();