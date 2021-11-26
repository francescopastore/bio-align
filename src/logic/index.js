// list of algorithm available
// each algorithm has a label and a calculate function
const data = {
  algorithms: [
    { label: 'Needleman-Wunsh', calculate: forTesting },
    { label: 'Edit Distance', calculate: forTesting },
    { label: 'Longest Common Subsequence', calculate: forTesting },
    { label: 'Smith-Waterman', calculate: forTesting },
  ],
}

function forTesting(data) {
  let table = []
  let row = [{}] // first cell is empty

  console.log(data)
  for (let i = 0; i < data.firstString.length; i++) {
    row.push({ value: data.firstString.charAt(i) })
  }
  table.push(row)

  for (let i = 0; i < data.secondString.length; i++) {
    row = []
    row.push({ value: data.secondString[i] })
    for (var j = 0; j < data.firstString.length; j++) {
      row.push({ value: j, left: false, top: true, diag: true })
    }
    table.push(row)
  }

  return table
}

export default data
