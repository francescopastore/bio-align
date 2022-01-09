import stringsMatch from './stringsMatch'

const tests = [
  {
    form: {
      firstString: 'TTT',
      secondString: 'AAA',
    },
    solution: [
      [{ value: 0, isPath: true }, {}, {}, {}],
      [{}, { value: 1, isPath: true, diag: true }, {}, {}],
      [{}, {}, { value: 2, isPath: true, diag: true }, {}],
      [{}, {}, {}, { value: 3, isPath: true, diag: true }],
    ],
    expected: {
      firstString: 'TTT',
      secondString: 'AAA',
      score: 3,
    },
  },
  {
    form: {
      firstString: 'AAA',
      secondString: 'AAC',
    },
    solution: [
      [{ value: 0, isPath: true }, {}, {}, {}],
      [{}, { value: 1, isPath: true, diag: true }, {}, {}],
      [{}, {}, { value: 2, isPath: true, diag: true }, {}],
      [{}, {}, {}, { value: 3, isPath: true, diag: true }],
    ],
    expected: {
      firstString: 'AAA',
      secondString: 'AAC',
      score: 3,
    },
  },
  {
    form: {
      firstString: 'AAA',
      secondString: 'AATC',
    },
    solution: [
      [{ value: 0, isPath: true }, {}, {}, {}, {}],
      [{}, { value: 0, isPath: true, diag: true }, {}, {}, {}],
      [{}, {}, { value: 0, isPath: true, diag: true }, {}, {}],
      [
        {},
        {},
        {},
        { value: 1, isPath: true, diag: true },
        { value: 2, isPath: true, left: true },
      ],
    ],
    expected: {
      firstString: 'AAA-',
      secondString: 'AATC',
      score: 2,
    },
  },
]

it('should return valid values', () => {
  tests.forEach((t) => {
    let actual = stringsMatch(t.form, t.solution)
    expect(actual).toEqual(t.expected)
  })
})
