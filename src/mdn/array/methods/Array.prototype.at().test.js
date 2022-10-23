// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at

describe('Array', () => {
  describe('prototype.at()', () => {
    let consoleLogSpy

    beforeEach(() => {
      consoleLogSpy = jest.fn(() => {})
      jest.spyOn(console, 'log').mockImplementation(consoleLogSpy)
    })

    afterEach(() => {
      jest.clearAllMocks()
    })

    test('Try it', () => {
      const array1 = [5, 12, 8, 130, 44]

      let index = 2

      console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`)

      expect(consoleLogSpy).toHaveBeenCalledWith('Using an index of 2 the item returned is 8')

      index = -2

      console.log(`Using an index of ${index} item returned is ${array1.at(index)}`)

      expect(consoleLogSpy).toHaveBeenCalledWith('Using an index of -2 item returned is 130')
    })

    test('Return the last value of an array', () => {
      const cart = ['apple', 'banana', 'pear']

      function returnLast(arr) {
        return arr.at(-1)
      }

      const item1 = returnLast(cart)
      expect(item1).toEqual('pear')

      cart.push('orange')
      const item2 = returnLast(cart)
      expect(item2).toEqual('orange')
    })

    test('Comparing methods', () => {
      const colors = ['red', 'green', 'blue']

      const lengthWay = colors[colors.length - 2]
      expect(lengthWay).toEqual('green')

      const sliceWay = colors.slice(-2, -1)
      expect(sliceWay[0]).toEqual('green')

      const atWay = colors.at(-2)
      expect(atWay).toEqual('green')
    })

    test('Calling at() on non-array objects', () => {
      const arrayLike = {
        length: 2,
        0: 'a',
        1: 'b',
      }

      expect(Array.prototype.at.call(arrayLike, -1)).toEqual('b')
    })
  })
})
