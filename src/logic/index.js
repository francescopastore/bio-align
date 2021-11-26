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
  for (let i = 0; i < data.firstWord.length; i++) {
    row.push({ value: data.firstWord.charAt(i) })
  }
  table.push(row)

  for (let i = 0; i < data.secondWord.length; i++) {
    row = []
    row.push({ value: data.secondWord[i] })
    for (var j = 0; j < data.firstWord.length; j++) {
      row.push({ value: j, left: false, top: true, diag: true })
    }
    table.push(row)
  }

  return table
}

export default data
