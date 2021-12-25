// initialize matrix with the given weight
function initialize(table, numRows, numCols, weight) {
  table[0] = [
    {
      value: 0,
    },
  ]

  // first row
  for (let i = 1; i < numCols; i++) {
    let value = table[0][i - 1].value + weight
    table[0].push({
      value: value,
      left: true,
    })
  }

  // first column
  for (let i = 1; i < numRows; i++) {
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
function initializeWithZero(table, numRows, numCols) {
  table[0] = [
    {
      value: 0,
    },
  ]

  // first row
  for (let i = 1; i < numCols; i++) {
    table[0].push({
      value: 0,
    })
  }

  // first column
  for (let i = 1; i < numRows; i++) {
    table[i] = []
    table[i].push({
      value: 0,
    })
  }

  return table
}

// traceback from the given start point only for nw type of algorithms
function traceback(table) {
  let i = table.length - 1
  let j = table[0].length - 1
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
  table[i][j].isPath = true
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
function findMaxIndex(table, tableMax) {
  let row = 0
  let col = 0
  for (let i = 1; i < table.length; i++) {
    for (let j = 1; j < table[0].length; j++) {
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
function generatePrintableTable(table) {
  let str = ''
  if (table.length === 0) {
    return 'No data'
  }
  for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table[0].length; j++) {
      str += table[i][j].value + ' '
    }
    str += '\n'
  }
  return str
}

const utils = {
  initialize,
  initializeWithZero,
  traceback,
  tracebackToZero,
  findMaxIndex,
  generatePrintableTable,
}

export default utils
