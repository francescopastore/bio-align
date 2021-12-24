// initialize matrix with the given weight
function initialize(table, firstString, secondString, weight) {
  table[0] = [
    {
      value: 0,
    },
  ]

  // first row
  for (let i = 1; i < secondString.length; i++) {
    let value = table[0][i - 1].value + weight
    table[0].push({
      value: value,
      left: true,
    })
  }

  // first column
  for (let i = 1; i < firstString.length; i++) {
    table[i] = []
    let value = table[i - 1][0].value + weight
    table[i].push({
      value: value,
      top: true,
    })
  }

  return table
}

// initializeWithZero for zero weight
function initializeWithZero(table, firstString, secondString) {
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

// traceback from the given start point only for nw type of algorithms
function traceback(table, firstString, secondString) {
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

// traceback from the given start point until zero, only for sw type of algorithms
function tracebackToZero(table, row, col) {
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

// findMaxIndex for traceback
function findMaxIndex(table, firstString, secondString, tableMax) {
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
  return { row, col }
}

// generatePrintableTable useful for debugging
function generatePrintableTable(firstString, secondString, table) {
  let str = ''
  for (let i = 0; i < firstString.length + 1; i++) {
    for (let j = 0; j < secondString.length + 1; j++) {
      str += table[i][j].value + ' '
    }
    str += '\n'
  }
  return str
}

const utils = {
  initialize,
  initializeWithZero,
  generatePrintableTable,
  traceback,
  tracebackToZero,
  findMaxIndex,
}

export default utils
