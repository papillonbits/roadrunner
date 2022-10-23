import { difference } from 'lodash'

describe('difference', () => {
  test('Returns the new array of filtered values', () => {
    expect(difference([2, 1], [2, 3])).toEqual([1])
  })
})
