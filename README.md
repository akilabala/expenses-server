# Summary

A PoC to demonstrate usage of Amazon Web Services and Amazon DynamoDB using Express.js.

# Set-up instructions

1. Run npm install.

2. Create an AWS account and get your Access Key ID and Secret Access Key as explained here: 

http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSGettingStartedGuide/GettingSetUp.html

3. Create a "credentials" file at ~/.aws/credentials on Mac/Linux or C:\Users\USERNAME\.aws\credentials on Windows: 

https://aws.amazon.com/sdk-for-node-js/

```
[default]

aws_access_key_id = your_access_key

aws_secret_access_key = your_secret_key

```
4. Log into AWS account, go to DynamoDB section and click "Create Table" button:

Table Name: Expenses

Primary Key: UserId, Type: NUMBER
 
5. Run nodemon server.js


