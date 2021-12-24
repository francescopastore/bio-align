import ld from './ld'

const tests = [
  {
    data: {
      firstString: 'GTGT',
      secondString: 'ATTC',
    },
    expected: [
      [
        { value: 0, isPath: true },
        { value: 1, left: true },
        { value: 2, left: true },
        { value: 3, left: true },
        { value: 4, left: true },
      ],
      [
        { value: 1, top: true },
        { value: 1, left: false, top: false, diag: true, isPath: true },
        { value: 2, left: true, top: false, diag: true },
        { value: 3, left: true, top: false, diag: true },
        { value: 4, left: true, top: false, diag: true },
      ],
      [
        { value: 2, top: true },
        { value: 2, left: false, top: true, diag: true },
        { value: 1, left: false, top: false, diag: true, isPath: true },
        { value: 2, left: true, top: false, diag: true },
        { value: 3, left: true, top: false, diag: false },
      ],
      [
        { value: 3, top: true },
        { value: 3, left: false, top: true, diag: true },
        { value: 2, left: false, top: true, diag: false },
        { value: 2, left: false, top: false, diag: true, isPath: true },
        { value: 3, left: true, top: false, diag: true },
      ],
      [
        { value: 4, top: true },
        { value: 4, left: false, top: true, diag: true },
        { value: 3, left: false, top: true, diag: true },
        { value: 2, left: false, top: false, diag: true },
        { value: 3, left: true, top: false, diag: true, isPath: true },
      ],
    ],
  },
]

it('should calculate correctly', () => {
  tests.forEach((v) => {
    const actual = ld(v.data)
    expect(actual).toEqual(v.expected)
  })
})
