var configuredRules = require("../../configs/rules.json")

class Helper {

  static computeRepayment(amount, tenure) {
    var interest = this.getInterest(amount, tenure)
    var factor = (interest / 100)
    var repayment = (amount * factor) + amount
    let monthly = repayment / tenure

    return {
      interest: `${interest}%`,
      monthly: monthly,
      repayment: repayment,
      loanAmount: amount,
      tenureInMonths: tenure,
      tenure: {
        years: Math.floor(tenure / 12),
        months: (tenure % 12)
      }
    }
  }

  static getInterest(amount, tenure) {
    let { rules } = configuredRules;
    //let's look for the rule first
    let rule = rules.find( r =>
      amount >= r.amount.min && amount <= r.amount.max
    )

    // let's see if the tenure is within the rule
    let tenureRule = rule.tenure.find( t =>
      tenure >= t.min && tenure <= t.max
    )

    return tenureRule.percent
  }

  static isAmountValid(amount) {
    if (isNaN(amount)) {
      return false
    }
    let { rules } = configuredRules;

    let rule = rules.find( r =>
      amount >= r.amount.min && amount <= r.amount.max
    )

    if (rule === undefined) {
      return false
    }

    return true
  }

  static isTenureValid(tenure) {
    if (isNaN(tenure)) {
      return false
    }

    let { rules } = configuredRules;

    var tenureRules;

    for (var rule of rules) {
        tenureRules = rule.tenure.find(t =>
          tenure >= t.min && tenure <= t.max
        )
    }

    if (tenureRules === undefined) {
      return false
    }

    return true
  }
}

module.exports = Helper;
