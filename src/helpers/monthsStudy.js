const numberForWord = [
  "um",
  "dois",
  "três",
  "quatro",
  "cinco",
  "seis",
  "sete",
  "oito",
  "nove",
  "dez",
];

export default function monthsStudy() {
  const initialMonthStudy = 1;
  const actualMonth = new Date().getMonth;
  return numberForWord[initialMonthStudy - actualMonth];
}
