import editDistance from './edit-distance'
import { generateTable } from './utils'

// list of algorithm available
// each algorithm has a label and a calculate function
const data = {
  algorithms: [
    { label: 'Needleman-Wunsh', calculate: calculate },
    { label: 'Edit Distance', calculate: editDistance },
    { label: 'Longest Common Subsequence', calculate: calculate },
    { label: 'Smith-Waterman', calculate: calculate },
  ],
}

function calculate(data) {
  let table = generateTable(data)

  for (let i = 0; i < data.secondString.length; i++) {
    for (var j = 0; j < data.firstString.length; j++) {
      table[i + 1].push({
        value: j,
        left: false,
        top: true,
        diag: true,
        isPath: true,
      })
    }
  }

  return table
}

export default data
