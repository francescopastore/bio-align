export const generateTable = (data) => {
  let table = []
  let row = [{}] // first cell is empty

  // first row
  for (let i = 0; i < data.firstString.length; i++) {
    row.push({ value: data.firstString.charAt(i) })
  }
  table.push(row)

  // first col
  for (let i = 0; i < data.secondString.length; i++) {
    table.push([{ value: data.secondString[i] }])
  }

  return table
}
