const expect = require("chai").expect
const assert = require("chai").assert
const Helper = require("../api/utils/Helper")

describe("Helper Unit tests Tenure", function() {
  it('Should return true if tenure is valid', function() {
    let isTenureValid = Helper.isTenureValid(1)
    assert.isTrue(isTenureValid)
  })

  it('Should return false if tenure is not valid', function() {
    let isTenureValid = Helper.isTenureValid(25)
    assert.isFalse(isTenureValid)
  })

  it('Should return false if tenure is empty', function() {
    let isTenureValid = Helper.isTenureValid()
    assert.isFalse(isTenureValid)
  })

  it('Should return false if tenure is a string', function() {
    let isTenureValid = Helper.isTenureValid("aaa")
    assert.isFalse(isTenureValid)
  })
})

describe("Helper Unit tests Amount", function() {
  it('Should return true if amount is valid', function() {
    let isAmountValid = Helper.isAmountValid(25000)
    assert.isTrue(isAmountValid)
  })

  it('Should return false if amount is not valid', function() {
    let isAmountValid = Helper.isAmountValid(25)
    assert.isFalse(isAmountValid)
  })

  it('Should return false if amount is empty', function() {
    let isAmountValid = Helper.isAmountValid()
    assert.isFalse(isAmountValid)
  })

  it('Should return false if amount is a string', function() {
    let isAmountValid = Helper.isAmountValid("aaa")
    assert.isFalse(isAmountValid)
  })
})

describe("Helper Unit tests Get Repayment", function() {
  it('Should return correct repayment percentage', function() {
    assert.equal(Helper.getRepaymentPercent(25000, 6), 1)
    assert.equal(Helper.getRepaymentPercent(65000, 2), 0.5)
    assert.equal(Helper.getRepaymentPercent(50000, 12), 1.5)
  })
})

describe("Helper Unit tests Compute Repayment", function() {
  it('Should return correct computed values', function() {
    let repayment = Helper.computeRepayment(35000, 8)
    assert.equal(repayment.repayment, 35525)
    assert.equal(repayment.monthly, 4440.625)
    assert.equal(repayment.tenure.years, 0)
    assert.equal(repayment.tenure.months, 8)
  })
})
