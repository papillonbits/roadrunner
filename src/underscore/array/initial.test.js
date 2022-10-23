import { initial } from 'underscore'

describe('initial', () => {
  test('Returns everything but the last entry of the array. Especially useful on the arguments object. Pass n to exclude the last n elements from the result', () => {
    expect(initial([5, 4, 3, 2, 1])).toEqual([5, 4, 3, 2])
  })
})
