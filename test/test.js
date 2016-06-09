import chai from 'chai'
import getBowlingScore from '../src/utils/bowling'

chai.should()

describe ('Test', () => {
  it ('1frame game', () => {
    getBowlingScore('1').should.equal(1)
    getBowlingScore('2').should.equal(2)
  })
})
