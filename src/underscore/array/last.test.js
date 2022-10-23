import { last } from 'underscore'

describe('last', () => {
  test('Returns the last element of an array. Passing n will return the last n elements of the array', () => {
    expect(last([5, 4, 3, 2, 1])).toEqual(1)
  })
})
