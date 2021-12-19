import index from './index'

it('should have valid values', () => {
  index.algorithms.forEach((v) => {
    expect(v.label).toBeDefined()
    expect(v.calculate).toBeDefined()
    expect(v.disableWeights).toBeDefined()
    expect(v.matchWeight).toBeDefined()
    expect(v.mismatchWeight).toBeDefined()
    expect(v.gapWeight).toBeDefined()
  })
})
