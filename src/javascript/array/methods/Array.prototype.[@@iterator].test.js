// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator

describe('Array', () => {
  describe('prototype.[@@iterator]', () => {
    let consoleLogSpy

    beforeEach(() => {
      consoleLogSpy = jest.fn(() => {})
      jest.spyOn(console, 'log').mockImplementation(consoleLogSpy)
    })

    afterEach(() => {
      jest.clearAllMocks()
    })

    test('Manually hand-rolling the iterator', () => {
      const arr = ['a', 'b', 'c', 'd', 'e']
      const arrIter = arr[Symbol.iterator]()

      for (const letter of arrIter) {
        console.log(letter)
      }

      expect(consoleLogSpy).toHaveBeenCalledTimes(5)
      expect(consoleLogSpy).toHaveBeenNthCalledWith(1, 'a')
      expect(consoleLogSpy).toHaveBeenNthCalledWith(2, 'b')
      expect(consoleLogSpy).toHaveBeenNthCalledWith(3, 'c')
      expect(consoleLogSpy).toHaveBeenNthCalledWith(4, 'd')
      expect(consoleLogSpy).toHaveBeenNthCalledWith(5, 'e')
    })

    test('Handling strings and string arrays with the same function', () => {
      function logIterable(it) {
        if (!(typeof it[Symbol.iterator] === 'function')) {
          console.log(`${it} is not an iterable object.`)
          return
        }

        for (const letter of it) {
          console.log(letter)
        }
      }

      logIterable(['a', 'b', 'c'])
      expect(consoleLogSpy).toHaveBeenNthCalledWith(1, 'a')
      expect(consoleLogSpy).toHaveBeenNthCalledWith(2, 'b')
      expect(consoleLogSpy).toHaveBeenNthCalledWith(3, 'c')

      consoleLogSpy.mockReset()

      logIterable('abc')
      expect(consoleLogSpy).toHaveBeenNthCalledWith(1, 'a')
      expect(consoleLogSpy).toHaveBeenNthCalledWith(2, 'b')
      expect(consoleLogSpy).toHaveBeenNthCalledWith(3, 'c')

      consoleLogSpy.mockReset()

      logIterable(123)
      expect(consoleLogSpy).toHaveBeenCalledWith('123 is not an iterable object.')
    })
  })
})
