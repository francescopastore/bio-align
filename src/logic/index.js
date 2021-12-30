import ld from './algorithms/ld'
import nw from './algorithms/nw'
import lcs from './algorithms/lcs'
import sw from './algorithms/sw'

// list of algorithm available
// each algorithm has a label and a calculate function
const data = {
  algorithms: [
    {
      label: 'Levenshtein distance',
      calculate: ld,
      defaultData: {
        disableWeights: true,
        matchWeight: 0,
        mismatchWeight: 1,
        gapWeight: 1,
      },
    },
    {
      label: 'Needleman-Wunsch',
      calculate: nw,
      defaultData: {
        disableWeights: false,
        matchWeight: 1,
        mismatchWeight: -1,
        gapWeight: -1,
      },
    },
    {
      label: 'Longest Common Subsequence',
      calculate: lcs,
      defaultData: {
        disableWeights: true,
        matchWeight: 0,
        mismatchWeight: 0,
        gapWeight: 0,
      },
    },
    {
      label: 'Smith-Waterman',
      calculate: sw,
      defaultData: {
        disableWeights: false,
        matchWeight: 1,
        mismatchWeight: -1,
        gapWeight: -1,
      },
    },
  ],
}

export default data
