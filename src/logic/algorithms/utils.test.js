import utils from './utils'

test('initialize', () => {
  let tests = [
    {
      table: [],
      numRows: 3,
      numCols: 3,
      weight: 0,
      expected: [
        [{ value: 0 }, { value: 0, left: true }, { value: 0, left: true }],
        [{ value: 0, top: true }],
        [{ value: 0, top: true }],
      ],
    },
    {
      table: [],
      numRows: 4,
      numCols: 3,
      weight: 1,
      expected: [
        [{ value: 0 }, { value: 1, left: true }, { value: 2, left: true }],
        [{ value: 1, top: true }],
        [{ value: 2, top: true }],
        [{ value: 3, top: true }],
      ],
    },
  ]

  tests.forEach((v) => {
    const actual = utils.initialize(v.table, v.numRows, v.numCols, v.weight)
    expect(actual).toEqual(v.expected)
  })
})

test('initializeWithZero', () => {
  let tests = [
    {
      table: [],
      numRows: 3,
      numCols: 3,
      expected: [
        [{ value: 0 }, { value: 0 }, { value: 0 }],
        [{ value: 0 }],
        [{ value: 0 }],
      ],
    },
    {
      table: [],
      numRows: 4,
      numCols: 5,
      expected: [
        [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
        [{ value: 0 }],
        [{ value: 0 }],
        [{ value: 0 }],
      ],
    },
  ]

  tests.forEach((v) => {
    const actual = utils.initializeWithZero(v.table, v.numRows, v.numCols)
    expect(actual).toEqual(v.expected)
  })
})

test('traceback', () => {
  let tests = [
    {
      table: [
        [{ value: 0 }, { value: 0 }, { value: 0 }],
        [{ value: 0 }, { value: 1, diag: true }, { value: 2, left: true }],
      ],
      expected: [
        [{ value: 0, isPath: true }, { value: 0 }, { value: 0 }],
        [
          { value: 0 },
          { value: 1, diag: true, isPath: true },
          { value: 2, left: true, isPath: true },
        ],
      ],
    },
  ]

  tests.forEach((v) => {
    const actual = utils.traceback(v.table)
    expect(actual).toEqual(v.expected)
  })
})

test('tracebackToZero', () => {
  let tests = [
    {
      row: 2,
      col: 2,
      table: [
        [{ value: 0 }, { value: 0 }, { value: 0 }],
        [{ value: 0 }, { value: 0 }, { value: 0 }],
        [{ value: 0 }, { value: 1, diag: true }, { value: 2, left: true }],
      ],
      expected: [
        [{ value: 0 }, { value: 0 }, { value: 0 }],
        [{ value: 0 }, { value: 0 }, { value: 0 }],
        [
          { value: 0 },
          { value: 1, diag: true, isPath: true },
          { value: 2, left: true, isPath: true },
        ],
      ],
    },
  ]

  tests.forEach((v) => {
    const actual = utils.tracebackToZero(v.table, v.row, v.col)
    expect(actual).toEqual(v.expected)
  })
})

test('findMaxIndex', () => {
  let tests = [
    {
      table: [
        [{ value: 0 }, { value: 1 }, { value: 1 }],
        [{ value: 1 }, { value: 1 }, { value: 3 }],
        [{ value: 2 }, { value: 2 }, { value: 1 }],
      ],
      tableMax: 3,
      expected: { row: 1, col: 2 },
    },
    {
      table: [
        [{ value: 0 }, { value: 1 }, { value: 2 }, { value: 3 }],
        [{ value: 1 }, { value: 3 }, { value: 3 }, { value: 3 }],
        [{ value: 2 }, { value: 3 }, { value: 3 }, { value: 3 }],
      ],
      tableMax: 3,
      expected: { row: 1, col: 1 },
    },
  ]

  tests.forEach((v) => {
    const actual = utils.findMaxIndex(v.table, v.tableMax)
    expect(actual).toEqual(v.expected)
  })
})

test('generatePrintableTable', () => {
  let tests = [
    {
      table: [],
      expected: 'No data',
    },
    {
      table: [
        [{ value: 0 }, { value: 0 }, { value: 0 }],
        [{ value: 0 }, { value: 0 }, { value: 0 }],
        [{ value: 0 }, { value: 0 }, { value: 0 }],
        [{ value: 0 }, { value: 0 }, { value: 0 }],
        [{ value: 0 }, { value: 0 }, { value: 0 }],
      ],
      expected: '0 0 0 \n0 0 0 \n0 0 0 \n0 0 0 \n0 0 0 \n',
    },
  ]

  tests.forEach((v) => {
    const actual = utils.generatePrintableTable(v.table)
    expect(actual).toEqual(v.expected)
  })
})
