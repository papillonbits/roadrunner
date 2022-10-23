import R from 'ramda'

describe('divide', () => {
  test('Divides two numbers. Equivalent to a / b', () => {
    expect(R.divide(71, 100)).toEqual(0.71)

    const half = R.divide(R.__, 2)
    expect(half(42)).toEqual(21)

    const reciprocal = R.divide(1)
    expect(reciprocal(4)).toEqual(0.25)
  })
})
