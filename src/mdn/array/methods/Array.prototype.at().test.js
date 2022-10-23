// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at

describe('Array', () => {
  let consoleLogSpy

  beforeEach(() => {
    consoleLogSpy = jest.fn(() => {})
    jest.spyOn(console, 'log').mockImplementation(consoleLogSpy)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('prototype.at()', () => {
    const array1 = [5, 12, 8, 130, 44]

    let index = 2

    console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`)

    expect(consoleLogSpy).toHaveBeenCalledWith('Using an index of 2 the item returned is 8')

    index = -2

    console.log(`Using an index of ${index} item returned is ${array1.at(index)}`)

    expect(consoleLogSpy).toHaveBeenCalledWith('Using an index of -2 item returned is 130')
  })
})
