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

// initializeWithZero for no left and top values and zero weight
function initializeWithZero(table, firstString, secondString) {
  table = utils.initialize(table, firstString, secondString, 0)

  for (let i = 1; i < secondString.length; i++) {
    delete table[0][i].left
  }

  for (let i = 1; i < firstString.length; i++) {
    delete table[i][0].top
  }

  return table
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
}

export default utils
