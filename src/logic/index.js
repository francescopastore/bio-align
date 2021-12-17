import ld from './ld'
import nw from './nw'
import lcs from './lcs'

// list of algorithm available
// each algorithm has a label and a calculate function
const data = {
  algorithms: [
    {
      label: 'Levenshtein distance',
      calculate: ld,
      matchWeight: 0,
      mismatchWeight: 1,
      gapWeight: 1,
    },
    {
      label: 'Needleman-Wunsch',
      calculate: nw,
      matchWeight: 1,
      mismatchWeight: -1,
      gapWeight: -1,
    },
    {
      label: 'Longest Common Subsequence',
      calculate: lcs,
      disableWeights: true,
    },
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
