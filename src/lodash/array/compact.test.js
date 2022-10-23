import { compact } from 'lodash'

describe('compact', () => {
  test('Example', () => {
    expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3])
  })
})
