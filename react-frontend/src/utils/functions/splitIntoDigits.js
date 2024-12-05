/**
  * function that receives  a number and split it into single digits
  * @param {Number} number 
  * @returns {Array<Number>} digits
  */

export default function splitIntoDigits(number) {
  return number
    .toString()
    .split("")
    .map(Number)
}
