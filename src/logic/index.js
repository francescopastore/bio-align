import nw from './nw'
import lcs from './lcs'

// list of algorithm available
// each algorithm has a label and a calculate function
const data = {
  algorithms: [
    { label: 'Needleman-Wunsch', calculate: nw },
    { label: 'Longest Common Subsequence', calculate: lcs },
    { label: 'Smith-Waterman', calculate: test },
  ],
}

function test(data) {
  let table = []
  for (let i = 0; i < data.secondString.length; i++) {
    table[i] = []
    for (var j = 0; j < data.firstString.length; j++) {
      table[i].push({
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
