/* eslint-disable */
module.exports = function (app, express) {

  var apiRouter = express.Router();
  var AWS = require('aws-sdk');
  var DOC = require('dynamodb-doc');
  var dynamoDB = new AWS.DynamoDB({
    region: "us-west-2"
  });
  var client = new DOC.DynamoDB(dynamoDB);

  apiRouter
    .route('/expenses')
    .get(function (req, res) {
      var params = {
        TableName: "Expenses"
      };
      client.scan(params, function (err, data) {
        if (err) {
          console.log(JSON.stringify(err, null, 2));
          res.json(err);
        } else {
          console.log(JSON.stringify(data, null, 2));
          res.json(data);
        }
      });
    })
    .post(function(req, res) {
      var expenseItem = {
        UserId: req.body.userId,
        Income: req.body.income,
        LivingExpenses: req.body.livingExpenses,
        HealthcareExpenses: req.body.healthcareExpenses,
        DiscretionaryExpenses: req.body.discretionaryExpenses
      };
      var params = {
        TableName: "Expenses",
        Item: expenseItem
      };
      client.putItem(params, function(err, data) {
        if (err) {
          console.log(JSON.stringify(err, null, 2));
          res.json(err);
        } else {
          console.log(JSON.stringify(data, null, 2));
          res.json(data);
        }
      });
    });

  apiRouter
    .route('/expenses/:userId')
    .get(function (req, res) {
      var params = {
        TableName: "Expenses",
        Key: {
          UserId: parseInt(req.params.userId)
        }
      };
      client.getItem(params, function (err, data) {
        if (err) {
          console.log(JSON.stringify(err, null, 2));
          res.json(err);
        } else {
          console.log(JSON.stringify(data, null, 2));
          res.json(data);
        }
      });
    })
    .delete(function(req, res) {
      var params = {
        TableName: "Expenses",
        Key: {
          UserId: parseInt(req.params.userId)
        }
      };
      client.deleteItem(params, function (err, data) {
        if (err) {
          console.log(JSON.stringify(err, null, 2));
          res.json(err);
        } else {
          console.log(JSON.stringify(data, null, 2));
          res.json(data);
        }
      });
    });

  return apiRouter;
};
/* eslint-enable */

