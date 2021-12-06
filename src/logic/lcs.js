export default function calculate(data) {
  let table = []

  // initialization
  table[0] = [
    {
      value: 0,
    },
  ]

  let firstString = '-' + data.firstString
  let secondString = '-' + data.secondString

  // first row
  for (let i = 1; i < secondString.length; i++) {
    table[0].push({
      value: 0,
      left: true,
    })
  }

  // first column
  for (let i = 1; i < firstString.length; i++) {
    table[i] = []
    table[i].push({
      value: 0,
      top: true,
    })
  }

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
        left: max === left,
        top: max === top,
        diag: max === diag,
      })
    }
  }

  let row = 0
  let col = 0
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

  while (table[row][col] !== 0 && row !== 0 && col !== 0) {
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
