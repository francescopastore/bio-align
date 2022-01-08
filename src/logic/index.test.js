import index from './index'

it('should have valid values', () => {
  index.algorithms.forEach((v) => {
    expect(v.label).toBeDefined()
    expect(v.calculate).toBeDefined()
    expect(v.defaultForm.disableWeights).toBeDefined()
    expect(v.defaultForm.matchWeight).toBeDefined()
    expect(v.defaultForm.mismatchWeight).toBeDefined()
    expect(v.defaultForm.gapWeight).toBeDefined()
  })
})
