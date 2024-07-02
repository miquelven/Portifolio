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
  const initialMonthStudy = new Date(2023, 11);
  const currentMonth = new Date();
  const differenceInMonths =
    (currentMonth.getFullYear() - initialMonthStudy.getFullYear()) * 12 +
    currentMonth.getMonth() -
    initialMonthStudy.getMonth();
  return numberForWord[differenceInMonths - 1];
}
