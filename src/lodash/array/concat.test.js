import { concat } from 'lodash'

describe('concat', () => {
  test('Returns the new concatenated array', () => {
    const array = [1]
    const other = concat(array, 2, [3], [[4]])

    expect(other).toEqual([1, 2, 3, [4]])
    expect(array).toEqual([1])
  })
})
