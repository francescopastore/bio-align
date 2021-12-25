import utils from './utils'

export default function calculate(data) {
  let table = []

  let firstString = '-' + data.firstString
  let secondString = '-' + data.secondString

  table = utils.initializeWithZero(
    table,
    firstString.length,
    secondString.length
  )

  let result = fill(table, firstString, secondString, data)
  table = result.table

  table = traceback(table, result.tableMax)

  return table
}

function fill(table, firstString, secondString, data) {
  let tableMax = 0
  // filling with values
  for (let i = 1; i < firstString.length; i++) {
    for (let j = 1; j < secondString.length; j++) {
      let left = data.gapWeight + table[i][j - 1].value
      let top = data.gapWeight + table[i - 1][j].value
      let diag = 0
      if (firstString[i] === secondString[j]) {
        diag = data.matchWeight + table[i - 1][j - 1].value
      } else {
        diag = data.mismatchWeight + table[i - 1][j - 1].value
      }

      let max = left
      if (top > max) {
        max = top
      }
      if (diag > max) {
        max = diag
      }

      if (max < 0) {
        max = 0
      }

      if (max > tableMax) {
        tableMax = max
      }

      table[i].push({
        value: max,
        left: left === max && left !== 0,
        top: top === max && top !== 0,
        diag: diag === max && diag !== 0,
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
