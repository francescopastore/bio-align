import lcs from './lcs'

const tests = [
  {
    data: {
      firstString: 'ATTC',
      secondString: 'GTGT',
      matchWeight: 0,
      mismatchWeight: 1,
      gapWeight: 1,
    },
    expected: [
      [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
      [
        { value: 0 },
        { value: 0, left: false, top: false, diag: false },
        { value: 0, left: false, top: false, diag: false },
        { value: 0, left: false, top: false, diag: false },
        { value: 0, left: false, top: false, diag: false },
      ],
      [
        { value: 0 },
        { value: 0, left: false, top: false, diag: false },
        { value: 1, left: false, top: false, diag: true, isPath: true },
        { value: 1, left: true, top: false, diag: false, isPath: true },
        { value: 1, left: true, top: false, diag: true },
      ],
      [
        { value: 0 },
        { value: 0, left: false, top: false, diag: false },
        { value: 1, left: false, top: true, diag: true },
        { value: 1, left: true, top: true, diag: true },
        { value: 2, left: false, top: false, diag: true, isPath: true },
      ],
      [
        { value: 0 },
        { value: 0, left: false, top: false, diag: false },
        { value: 1, left: false, top: true, diag: false },
        { value: 1, left: true, top: true, diag: true },
        { value: 2, left: false, top: true, diag: false },
      ],
    ],
  },
]

it('should calculate correctly', () => {
  tests.forEach((v) => {
    const actual = lcs(v.data)
    expect(actual).toEqual(v.expected)
  })
})
