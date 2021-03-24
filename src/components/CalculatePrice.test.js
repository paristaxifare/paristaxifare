import CalculatePrice from './CalculatePrice'

describe('Test CalculatePrice 01', () => {
  it('value should match', () => {
    expect(CalculatePrice({id:1, startTime:"2020-06-19T13:01:17.031Z", distance:2, duration:9000})).toEqual(6);
  })
})

describe('Test CalculatePrice 02', () => {
  it('value should match', () => {
    expect(CalculatePrice({id:2, startTime:"2020-06-19T12:01:17.031Z", distance:1, duration:6000})).toEqual(3.5);
  })
})

describe('Test CalculatePrice 03', () => {
  it('value should match', () => {
    expect(CalculatePrice({id:3, startTime:"2020-06-19T14:01:17.031Z", distance:5, duration:7000})).toEqual(13.5);
  })
})

describe('Test CalculatePrice 04', () => {
  it('value should match', () => {
    expect(CalculatePrice({id:4, startTime:"2020-06-19T14:11:17.031Z", distance:5, duration:4000})).toEqual(13.5);
  })
})

describe('Test CalculatePrice 05', () => {
  it('value should match', () => {
    expect(CalculatePrice({id:5, startTime:"2020-06-19T20:11:17.031Z", distance:1, duration:4000})).toEqual(4);
  })
})

