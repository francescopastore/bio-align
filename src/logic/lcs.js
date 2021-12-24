import utils from './utils'

export default function calculate(data) {
  let table = []

  let firstString = '-' + data.firstString
  let secondString = '-' + data.secondString

  table = utils.initializeWithZero(table, firstString, secondString)

  let result = fill(table, firstString, secondString)
  table = result.table

  table = traceback(table, firstString, secondString, result.tableMax)

  return table
}

function fill(table, firstString, secondString) {
  let tableMax = 0

  // filling with values
  for (let i = 1; i < firstString.length; i++) {
    for (let j = 1; j < secondString.length; j++) {
      let left = table[i][j - 1].value
      let top = table[i - 1][j].value
      let diag = 0
      if (firstString[i] === secondString[j]) {
        diag = table[i - 1][j - 1].value + 1
      } else {
        diag = table[i - 1][j - 1].value
      }

      let max = left
      if (top > max) {
        max = top
      }
      if (diag > max) {
        max = diag
      }

      if (max > tableMax) {
        tableMax = max
      }

      table[i].push({
        value: max,
        left: max !== 0 && max === left,
        top: max !== 0 && max === top,
        diag: max !== 0 && max === diag,
      })
    }
  }

  return { table, tableMax }
}

function traceback(table, firstString, secondString, tableMax) {
  let { row, col } = utils.findMaxIndex(
    table,
    firstString,
    secondString,
    tableMax
  )
  utils.tracebackToZero(table, row, col)
  return table
}
