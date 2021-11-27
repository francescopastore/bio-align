import { generateTable } from './utils'

export default function calculate(data) {
  let table = generateTable(data)

  // initialization
  for (let i = 0; i < data.secondString.length; i++) {
    table[i + 1].push({
      value: 0,
      left: true,
      top: false,
      diag: false,
      isPath: false,
    })
  }

  for (let i = 0; i < data.secondString.length; i++) {
    for (var j = 0; j < data.firstString.length; j++) {
      table[i + 2].push({
        value: 0,
        left: true,
        top: false,
        diag: false,
        isPath: false,
      })
    }
  }

  return table
}
