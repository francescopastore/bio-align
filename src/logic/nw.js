import utils from './utils'

export default function calculate(data) {
  let table = []

  let firstString = '-' + data.firstString
  let secondString = '-' + data.secondString

  table = utils.initialize(
    table,
    firstString.length,
    secondString.length,
    data.gapWeight
  )
  table[0][0].isPath = true

  table = fill(table, firstString, secondString, data)

  table = utils.traceback(table, firstString, secondString)

  return table
}

function fill(table, firstString, secondString, data) {
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

      table[i].push({
        value: max,
        left: max === left,
        top: max === top,
        diag: max === diag,
      })
    }
  }

  return table
}
