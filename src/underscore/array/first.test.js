import { first } from 'underscore'

describe('first', () => {
  test('Returns the first element of an array. Passing n will return the first n elements of the array', () => {
    expect(first([5, 4, 3, 2, 1])).toEqual(5)
  })
})
