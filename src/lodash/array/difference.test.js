import { difference } from 'lodash'

describe('difference', () => {
  test('Example', () => {
    expect(difference([2, 1], [2, 3])).toEqual([1])
  })
})
