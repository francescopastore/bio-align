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
      disableWeights: true,
      matchWeight: 0,
      mismatchWeight: 1,
      gapWeight: 1,
    },
    {
      label: 'Needleman-Wunsch',
      calculate: nw,
      disableWeights: false,
      matchWeight: 1,
      mismatchWeight: -1,
      gapWeight: -1,
    },
    {
      label: 'Longest Common Subsequence',
      calculate: lcs,
      disableWeights: true,
      matchWeight: 0,
      mismatchWeight: 0,
      gapWeight: 0,
    },
    // TODO: { label: 'Smith-Waterman' },
  ],
}

export default data
