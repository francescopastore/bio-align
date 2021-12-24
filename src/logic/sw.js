export default function calculate(data) {
  let table = []

  let firstString = '-' + data.firstString
  let secondString = '-' + data.secondString

  table = initialize(table, firstString, secondString, data.gapWeight)

  let result = fill(table, firstString, secondString, data)
  table = result.table

  table = traceback(table, firstString, secondString, result.tableMax)

  return table
}

function initialize(table, firstString, secondString, gapWeight) {
  // initialization
  table[0] = [
    {
      value: 0,
    },
  ]

  // first row
  for (let i = 1; i < secondString.length; i++) {
    table[0].push({
      value: 0,
      left: false,
    })
  }

  // first column
  for (let i = 1; i < firstString.length; i++) {
    table[i] = []
    table[i].push({
      value: 0,
      top: false,
    })
  }

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
  let row = 0
  let col = 0

  // search for max value index
  for (let i = 1; i < firstString.length; i++) {
    for (let j = 1; j < secondString.length; j++) {
      if (table[i][j].value === tableMax) {
        row = i
        col = j
        break
      }
    }
    if (row !== 0) {
      break
    }
  }

  // traceback to find the path
  while (table[row][col].value !== 0 && row !== 0 && col !== 0) {
    table[row][col].isPath = true
    if (table[row][col].diag) {
      row--
      col--
    } else if (table[row][col].left) {
      col--
    } else {
      row--
    }
  }
  table[row][col].isPath = true
  return table
}
