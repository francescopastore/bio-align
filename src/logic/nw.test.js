import nw from './nw'

const tests = [
  {
    data: {
      firstString: 'ATTC',
      secondString: 'GTT',
      matchWeight: 0,
      mismatchWeight: 1,
      gapWeight: 1,
    },
    expected: [
      [
        { value: 0, isPath: true },
        { value: 1, left: true },
        { value: 2, left: true },
        { value: 3, left: true },
      ],
      [
        { value: 1, top: true, isPath: true },
        { value: 2, left: true, top: true, diag: false },
        { value: 3, left: true, top: true, diag: false },
        { value: 4, left: true, top: true, diag: false },
      ],
      [
        { value: 2, top: true, isPath: true },
        { value: 3, left: true, top: true, diag: false },
        { value: 4, left: true, top: true, diag: false },
        { value: 5, left: true, top: true, diag: false },
      ],
      [
        { value: 3, top: true, isPath: true },
        { value: 4, left: true, top: true, diag: false },
        { value: 5, left: true, top: true, diag: false },
        { value: 6, left: true, top: true, diag: false },
      ],
      [
        { value: 4, top: true, isPath: true },
        { value: 5, left: true, top: true, diag: false, isPath: true },
        { value: 6, left: true, top: true, diag: false, isPath: true },
        { value: 7, left: true, top: true, diag: false, isPath: true },
      ],
    ],
  },
]

it('should calculate correctly', () => {
  tests.forEach((v) => {
    const actual = nw(v.data)
    expect(actual).toEqual(v.expected)
  })
})
