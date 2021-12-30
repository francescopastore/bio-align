export default function stringsMatch(form, solution) {
  let row, col
  const firstString = '-' + form.firstString
  const secondString = '-' + form.secondString

  for (let i = 1; i < firstString.length; i++) {
    for (let j = 1; j < secondString.length; j++) {
      if (solution[i][j].isPath) {
        row = i
        col = j
      }
    }
  }

  let stringsMatch = {
    firstString: '',
    secondString: '',
    score: solution[row][col].value,
  }

  while (row > 0 && col > 0 && solution[row][col].isPath) {
    const curr = solution[row][col]
    if (curr.diag || (row === 0 && col === 0) || (!curr.left && !curr.top)) {
      stringsMatch.firstString = firstString[row] + stringsMatch.firstString
      stringsMatch.secondString = secondString[col] + stringsMatch.secondString
      row--
      col--
    } else if (curr.left) {
      stringsMatch.firstString = '-' + stringsMatch.firstString
      stringsMatch.secondString = secondString[col] + stringsMatch.secondString
      col--
    } else {
      stringsMatch.firstString = firstString[row] + stringsMatch.firstString
      stringsMatch.secondString = '-' + stringsMatch.secondString
      row--
    }
  }

  while (row > 0 && solution[row][col].isPath) {
    stringsMatch.firstString = firstString[row] + stringsMatch.firstString
    stringsMatch.secondString = '-' + stringsMatch.secondString
    row--
  }

  while (col > 0 && solution[row][col].isPath) {
    stringsMatch.firstString = '-' + stringsMatch.firstString
    stringsMatch.secondString = secondString[col] + stringsMatch.secondString
    col--
  }

  return stringsMatch
}
