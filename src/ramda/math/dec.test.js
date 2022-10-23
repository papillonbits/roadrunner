import R from 'ramda'

describe('dec', () => {
  test('Decrements its argument', () => {
    expect(R.dec(42)).toEqual(41)
  })
})
