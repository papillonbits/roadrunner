// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

describe('Array', () => {
  describe('prototype.concat()', () => {
    let consoleLogSpy

    beforeEach(() => {
      consoleLogSpy = jest.fn(() => {})
      jest.spyOn(console, 'log').mockImplementation(consoleLogSpy)
    })

    afterEach(() => {
      jest.clearAllMocks()
    })

    test('Try it', () => {
      const array1 = ['a', 'b', 'c']
      const array2 = ['d', 'e', 'f']

      expect(array1.concat(array2)).toEqual(['a', 'b', 'c', 'd', 'e', 'f'])
    })

    test('Concatenating two arrays', () => {
      const letters = ['a', 'b', 'c']
      const numbers = [1, 2, 3]

      const alphaNumeric = letters.concat(numbers)

      expect(alphaNumeric).toEqual(['a', 'b', 'c', 1, 2, 3])
    })

    test('Concatenating three arrays', () => {
      const num1 = [1, 2, 3]
      const num2 = [4, 5, 6]
      const num3 = [7, 8, 9]

      const numbers = num1.concat(num2, num3)

      expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    })

    test('Concatenating values to an array', () => {
      const letters = ['a', 'b', 'c']

      const alphaNumeric = letters.concat(1, [2, 3])

      expect(alphaNumeric).toEqual(['a', 'b', 'c', 1, 2, 3])
    })

    test('Concatenating nested arrays', () => {
      const num1 = [[1]]
      const num2 = [2, [3]]

      const numbers = num1.concat(num2)

      num1[0].push(4)

      expect(numbers).toEqual([[1, 4], 2, [3]])
    })

    test('Concatenating array-like objects with Symbol.isConcatSpreadable', () => {
      const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 }
      const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true }

      expect([0].concat(obj1, obj2)).toEqual([0, { 0: 1, 1: 2, 2: 3, length: 3 }, 1, 2, 3])
    })

    test('Using concat() on sparse arrays', () => {
      expect([1, , 3].concat([4, 5])).toEqual([1, , 3, 4, 5])
      expect([1, 2].concat([3, , 5])).toEqual([1, 2, 3, , 5])
    })

    test('Calling concat() on non-array objects', () => {
      expect(Array.prototype.concat.call({}, 1, 2, 3)).toEqual([{}, 1, 2, 3])
      console.log(Array.prototype.concat.call(1, 2, 3)) // [ [Number: 1], 2, 3 ]
      const arrayLike = { [Symbol.isConcatSpreadable]: true, length: 2, 0: 1, 1: 2 }
      expect(Array.prototype.concat.call(arrayLike, 3, 4)).toEqual([1, 2, 3, 4])
    })
  })
})
