import createArray from './createArray'
import splitIntoDigits from './splitIntoDigits'

const ARCANOS = 22

/** 
  * function that reduce your birth date and returns a number lesser or equal to 22
  * @param  {String} date date as string
  * @return {number}
  */

function missaoDeVida(date) {
  const sumOfDigits = (number) => splitIntoDigits(number).reduce((acc, cur) => acc + cur, 0)

  // Validate date format (dd/MM/yyyy)
  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(date)) {
    throw new Error('Invalid date format. Expected dd/MM/yyyy');
  }

  const arr = createArray(date)
  const arrReduced = arr.reduce((acc, cur) => acc + cur, 0)
  const result1 = sumOfDigits(arrReduced)
  const mdv = result1 <= ARCANOS ? result1 : sumOfDigits(result1)

  return mdv
}

export default missaoDeVida
