const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/((19|20)\d\d)$/

/** 
  * function that receives a string with mask ("dd/MM/YYYY") and returns an array of numbers. 
  *
  * @example
  * createArray("06/01/1999")
  *
  * @param {String} date date as string
  *
  * @returns {Array<number>} returns the date as number array
  *
  * returns [6,1,1999]
  */

export default function createArray(date) {
  const arrStr = date.match(regex)
  const arr = arrStr.map(str => parseInt(str))

  arr.shift()
  arr.pop()

  return arr
}

