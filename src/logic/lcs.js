export default function calculate(data) {
  let table = []

  let firstString = '-' + data.firstString
  let secondString = '-' + data.secondString

  table = initialize(table, firstString, secondString)

  let result = fill(table, firstString, secondString)
  table = result.table

  table = traceback(table, firstString, secondString, result.tableMax)

  return table
}

function initialize(table, firstString, secondString) {
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
    })
  }

  // first column
  for (let i = 1; i < firstString.length; i++) {
    table[i] = []
    table[i].push({
      value: 0,
    })
  }

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
