export default function calculate(data) {
  let table = []

  // initialization
  table[0] = [
    {
      value: 0,
      isPath: true,
    },
  ]

  let firstString = '-' + data.firstString
  let secondString = '-' + data.secondString

  // first row
  for (let i = 1; i < secondString.length; i++) {
    let value = data.gapWeight + table[0][i - 1].value
    table[0].push({
      value: value,
      left: true,
    })
  }

  // first column
  for (let i = 1; i < firstString.length; i++) {
    table[i] = []
    let value = data.gapWeight + table[i - 1][0].value
    table[i].push({
      value: value,
      top: true,
    })
  }

  console.log('min')
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

      let goal = left
      if (top > goal) {
        goal = top
      }
      if (diag > goal) {
        goal = diag
      }

      table[i].push({
        value: goal,
        left: goal === left,
        top: goal === top,
        diag: goal === diag,
      })
    }
  }

  // traceback
  let i = firstString.length - 1
  let j = secondString.length - 1
  while (i !== 0 || j !== 0) {
    table[i][j].isPath = true
    if (table[i][j].diag) {
      i--
      j--
    } else if (table[i][j].left) {
      j--
    } else {
      i--
    }
  }

  return table
}
