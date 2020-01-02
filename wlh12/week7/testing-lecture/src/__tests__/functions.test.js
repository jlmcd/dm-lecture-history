import { sum, bankAccount } from '../functions'

// ** The most basic of tests ** //
test('2 equals 2', () => {
  expect(2).toBe(2)
})

describe('sum function', () => {
  test('sum of 1 & 2 should be 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
  test('sum works with strings', () => {
    expect(sum('1', '5')).toBe(6)
  })
})

test('object has id', () => {
  expect({id: 4}).toEqual({id: 4})
})

test('2 does not equal 4', () => {
  expect(2).not.toBe(4)
})

test('falsy values are falsy', () => {
  expect(null).toBeFalsy()
})

const wishList = ['Steinway', 'Bosenderfer', 'Yamaha', 'Fazioli']

test('Wishlist contains Steinway', () => {
  expect(wishList).toContain('Steinway')
})

// * GROUPING TESTS * //

describe('Bank account methods and properties', () => {
  afterEach(() => {
    bankAccount.balance = 1000
  })
  // beforeEach() also exists
  test('Initial balance is 1000', () => {
    expect(bankAccount.balance).toBe(1000)
  })
  test('deposit should correctly alter balance', () => {
    bankAccount.deposit(5000)
    expect(bankAccount.balance).toBe(6000)
  })
  test('withdraw should correctly alter balance', () => {
    bankAccount.withdraw(400)
    expect(bankAccount.balance).toBe(600)
  })
})