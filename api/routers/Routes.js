module.exports = function(app) {
    var controller = require('../controllers/LoanController');

    app.route('/repayment')
        .get(controller.getRepayment)
}
