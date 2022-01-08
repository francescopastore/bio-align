import sw from './sw'

const tests = [
  {
    data: {
      firstString: 'GGTTA',
      secondString: 'TGTTA',
      matchWeight: 1,
      mismatchWeight: -1,
      gapWeight: -1,
    },
    expected: [
      [
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
      ],
      [
        { value: 0 },
        { value: 0, left: false, top: false, diag: false },
        { value: 1, left: false, top: false, diag: true },
        { value: 0, left: false, top: false, diag: false },
        { value: 0, left: false, top: false, diag: false },
        { value: 0, left: false, top: false, diag: false },
      ],
      [
        { value: 0 },
        { value: 0, left: false, top: false, diag: false },
        { value: 1, left: false, top: false, diag: true, isPath: true },
        { value: 0, left: false, top: false, diag: false },
        { value: 0, left: false, top: false, diag: false },
        { value: 0, left: false, top: false, diag: false },
      ],
      [
        { value: 0 },
        { value: 1, left: false, top: false, diag: true },
        { value: 0, left: false, top: false, diag: false },
        { value: 2, left: false, top: false, diag: true, isPath: true },
        { value: 1, left: true, top: false, diag: true },
        { value: 0, left: false, top: false, diag: false },
      ],
      [
        { value: 0 },
        { value: 1, left: false, top: false, diag: true },
        { value: 0, left: false, top: false, diag: false },
        { value: 1, left: false, top: true, diag: true },
        { value: 3, left: false, top: false, diag: true, isPath: true },
        { value: 2, left: true, top: false, diag: false },
      ],
      [
        { value: 0 },
        { value: 0, left: false, top: false, diag: false },
        { value: 0, left: false, top: false, diag: false },
        { value: 0, left: false, top: false, diag: false },
        { value: 2, left: false, top: true, diag: false },
        { value: 4, left: false, top: false, diag: true, isPath: true },
      ],
    ],
  },
]

it('should calculate correctly', () => {
  tests.forEach((v) => {
    const actual = sw(v.data)
    expect(actual).toEqual(v.expected)
  })
})
