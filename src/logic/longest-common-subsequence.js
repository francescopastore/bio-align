export default function calculate(data) {
  let table = []

  // initialization
  table[0] = [
    {
      value: data.firstString,
    },
  ]

  // first row
  for (let i = 1; i < data.secondString.length; i++) {
    table[0].push({
      value: 0,
      left: true,
    })
  }

  // first column
  for (let i = 1; i < data.firstString.length; i++) {
    table[i] = []
    table[i].push({
      value: 0,
      top: true,
    })
  }

  // filling with values
  for (let i = 1; i < data.firstString.length; i++) {
    for (let j = 1; j < data.secondString.length; j++) {
      let left = table[i][j - 1].value
      let top = table[i - 1][j].value
      let diag = 0
      if (data.firstString[i] === data.secondString[j]) {
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

      table[i].push({
        value: max,
        left: max === left,
        top: max === top,
        diag: max === diag,
      })
    }
  }

  // traceback
  // let i = data.firstString.length - 1
  // let j = data.secondString.length - 1
  // while (i !== 0 || j !== 0) {
  //   table[i][j].isPath = true
  //   if (table[i][j].diag) {
  //     i--
  //     j--
  //   } else if (table[i][j].left) {
  //     j--
  //   } else {
  //     i--
  //   }
  // }

  return table
}
