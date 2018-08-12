const Helper = require("../utils/Helper")
const ResponseBuilder = require("../utils/ResponseBuilder")

class LoanController {
    static getRepayment(req, res) {
        try {
            let amount = req.get("amount");
            let tenure = req.get("tenure");

            if (!Helper.isAmountValid(amount)) {
              let error = ResponseBuilder.error("INVALID_AMOUNT")
              res.send(error)
              return
            }

            if (!Helper.isTenureValid(tenure)) {
              let error = ResponseBuilder.error("INVALID_TENURE")
              res.send(error)
              return
            }

            amount = parseInt(amount)
            tenure = parseInt(tenure)
            let repaymentValues = Helper.computeRepayment(amount, tenure);
            let response = ResponseBuilder.success(repaymentValues)
            res.send(response)
        } catch (error) {
            console.log("Error computing repayment values :: " + error)
            res.send(error)
        }
    }
}

module.exports = LoanController
