import R from 'ramda'

describe('add', () => {
  test('Adds two values', () => {
    expect(R.add(2, 3)).toEqual(5)
    expect(R.add(7)(10)).toEqual(17)
  })
})
