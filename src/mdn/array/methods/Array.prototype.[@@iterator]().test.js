// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator

describe('Array', () => {
  let consoleLogSpy

  beforeEach(() => {
    consoleLogSpy = jest.fn(() => {})
    jest.spyOn(console, 'log').mockImplementation(consoleLogSpy)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('prototype.[@@iterator]()', () => {
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
})
