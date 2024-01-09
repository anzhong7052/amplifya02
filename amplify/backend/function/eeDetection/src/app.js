// /*
// Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
//     http://aws.amazon.com/apache2.0/
// or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and limitations under the License.
// */


/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	API_EEADMINAPP_GRAPHQLAPIIDOUTPUT
	API_EEADMINAPP_GRAPHQLAPIENDPOINTOUTPUT
	line_url
Amplify Params - DO NOT EDIT */
// require("isomorphic-fetch");
// const aws = require("aws-sdk");
// const AWSAppSyncClient = require("aws-appsync").default;
const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const { Sha256 } = require('@aws-crypto/sha256-js');
const { defaultProvider } = require('@aws-sdk/credential-provider-node');
const { SignatureV4 } = require('@aws-sdk/signature-v4');
const { HttpRequest } = require('@aws-sdk/protocol-http');
const { default: fetch, Request } = require('node-fetch');
// バージニア北部リージョンを選択
const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");
// const AWSAppSyncClient = require("aws-appsync');
// const gql = require("graphql-tag");
const {
  getCameraInfo,
  createDetectsMutation,
} = require('./statements/statements');

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

const GRAPHQL_ENDPOINT =
  process.env.API_EEADMINAPP_GRAPHQLAPIENDPOINTOUTPUT;
const GRAPHQL_API_KEY = process.env.API_EEADMINAPP_GRAPHQLAPIIDOUTPUT;
const REGION = process.env.REGION;


const ses = new SESClient({region: 'us-east-1'});

async function makeRequest(querySql, variables) {
  // Create Graph QL request
  const endpoint = new URL(GRAPHQL_ENDPOINT);
  const signer = new SignatureV4({
    credentials: defaultProvider(),
    //   credentials: {
    //          accessKeyId: 'AKIAZAYVXMECM7LTLSPT',
    //          secretAccessKey: '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',
    //  },
    region: REGION,
    service: 'appsync',
    sha256: Sha256,
  });
  const requestToBeSigned = new HttpRequest({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      host: endpoint.host,
      // 'x-api-key': 'da2-ahfhotvixrblnp3yiu3dlz4zyi',
      // authorization:
      //   'eyJraWQiOiJpQ3BmTERlVm44XC9teG1oWmVVQU5TNkpZVEN1MU9RenBcL2dVcEtjRnRDckE9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI2MmE3MDk5OC05OTIxLTRhOWUtODdjNy1mM2I2OTEzNjFkMDciLCJjb2duaXRvOmdyb3VwcyI6WyJBZG1pbnMiLCJXcml0ZXJzIl0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJiaXJ0aGRhdGUiOiIxOTk3LTAxLTAxIiwiY29nbml0bzpwcmVmZXJyZWRfcm9sZSI6ImFybjphd3M6aWFtOjo2MjAxMzE0NzU3MTY6cm9sZVwvYXAtc291dGhlYXN0LTFfYVZVOHFodFg0LUFkbWluc0dyb3VwUm9sZSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aGVhc3QtMV9hVlU4cWh0WDQiLCJjb2duaXRvOnVzZXJuYW1lIjoiNjJhNzA5OTgtOTkyMS00YTllLTg3YzctZjNiNjkxMzYxZDA3IiwiZ2l2ZW5fbmFtZSI6Inl1a2lvIiwib3JpZ2luX2p0aSI6Ijg0YzUzNjhlLTVkYTItNGYzMi04MTdmLTE3NmEyMWMzMmU1NSIsImNvZ25pdG86cm9sZXMiOlsiYXJuOmF3czppYW06OjYyMDEzMTQ3NTcxNjpyb2xlXC9hcC1zb3V0aGVhc3QtMV9hVlU4cWh0WDQtV3JpdGVyc0dyb3VwUm9sZSIsImFybjphd3M6aWFtOjo2MjAxMzE0NzU3MTY6cm9sZVwvYXAtc291dGhlYXN0LTFfYVZVOHFodFg0LUFkbWluc0dyb3VwUm9sZSJdLCJhdWQiOiI1MHVmbzN2YXJtMGsybjllaWYzN2puNzA0ciIsImV2ZW50X2lkIjoiZWM5OWI0OTEtYmM1ZS00NzEyLWJlYWEtYmE0ZjRjZTRmZjFmIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2NzY1OTkzMjUsIm5pY2tuYW1lIjoiY2hvLlQiLCJleHAiOjE2NzY2MDI5MjUsImlhdCI6MTY3NjU5OTMyNSwiZmFtaWx5X25hbWUiOiJjaG8iLCJqdGkiOiJkZDhlNTdkNS1hZDE2LTQ0OWMtOTYzZS0yOGY5NDI5M2NmZDIiLCJlbWFpbCI6IjI3NDIxMDYxN2FAZ21haWwuY29tIn0.CA9nsQLe9YvnaJt5H6DlxXbmAoIlsm-wHJCZlWUSM7DH-Wvgs9WglLlav4-Rzo7nXEJb1yq1YZeDM3dHqb6cXzpDAEWqGd0Skhfc8R6nUNrc7EsqRbN5U1XvVt6EJYbzUP0Hz5x4CtsdtMKh3ffpmD-ap91flABYXP_O6lWwlVntsXImOBfhJx1P0-Y7j2YCa-_knARXy3_a2rZe_w_CvK5Fo3DJzXF67VNNGQuG_cjmdYKUy7hqkyyGzzOTsBEzhbW1xNirAoSDA6HKtnoMsc5TFN0xaQ_56EVwC-TPrrMnazWixm-MlhiOBjaZAwPQcBWqW0gxDPsaF-744hd1rw',
    },
    hostname: endpoint.host,
    body: variables
      ? JSON.stringify({ query: querySql, variables: variables })
      : JSON.stringify({ query: querySql }),
    path: endpoint.pathname,
  });
 
  try {
    const signed = await signer.sign(requestToBeSigned);
    const request = new Request(endpoint, signed);
    return request;
  } catch (err) {
    console.log("err");
    console.log(err);
  }
}

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

const createSendEmailCommand = (toAddress, fromAddress) => {
  return new SendEmailCommand({
    Destination: {
      /* required */
      CcAddresses: [
        /* more items */
      ],
      ToAddresses: toAddress,
    },
    Message: {
      /* required */
      Body: {
        /* required */
        Html: {
          Charset: "UTF-8",
          Data: "火災が感知されました！",
        },
        Text: {
          Charset: "UTF-8",
          Data: "火災が感知されました！",
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Fire感知",
      },
    },
    Source: fromAddress,
    ReplyToAddresses: [
    ],
  });
};
/**********************
 * Example get method *
 **********************/

app.get('/reaction', function(req, res) {


  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

/****************************
* Example post method *
****************************/
// sensor_id": "0000000019", "detect_time": "20240105105823957", "detect_code": 888, "detect_info": [{"x":100, "y":80, "width":150, "height":100, "rate": 68.4},{"x":10, "y":50, "width":100, "height":50, "rate": 92.1}]
app.post('/detection', async (req, res, next) => {
  console.log("/detection",req.body )
  if (!req.body.sensor_id) {
    const err = new Error('sensor_id is required');
    err.statusCode = 400;
    return next(err);
  }
  if (!req.body.image) {
    const err = new Error('image is required');
    err.statusCode = 400;
    return next(err);
  }
  if (!req.body.detect_time) {
    const err = new Error('detect_time is required');
    err.statusCode = 400;
    return next(err);
  }
  if (!req.body.detect_code) {
    const err = new Error('detect_time is required');
    err.statusCode = 400;
    return next(err);
  }
  if (!req.body.detect_info) {
    const err = new Error('detect_info is required');
    err.statusCode = 400;
    return next(err);
  }

  let variables = {
    input: {
      cameraId: req.body.sensor_id,
      detectThumb: req.body.image,
      detectTime: req.body.detect_time,
      detectCode: req.body.detect_code,
      details: JSON.stringify(req.body.detect_info)
    }
  };
  console.log("variables",variables )
  const request = await makeRequest(createDetectsMutation, variables);
  console.log("request" )
  const resp = await fetch(request);
  console.log("resp" )
  const respData = await resp.json();
  console.log("respData", respData )
  // const client = new AWSAppSyncClient({
  //   url: GRAPHQL_ENDPOINT,
  //   region: REGION,
  //   disableOffline: true
  //   auth: {
  //     type: "AWS_IAM",
  //     credentials: () => aws.config.credentials,
  //   }
  // });
  // console.log("client" )

  // const result = await client.mutate({
  //   mutation: gql(createDetectsMutation),
  //   variables: {
  //     input: variables
  //   }
  // });
  // console.log("result" , result)
  console.log("request1" )
  const req1 = await makeRequest(getCameraInfo, {id: req.body.sensor_id});
  const response = await fetch(req1);
  console.log("response" )
  // const result1 = await client.query({
  //   query: gql(getCameraInfo),
  //   variables: {
  //     input: { id: req.body.sensor_id },
  //   }
  // });
  // console.log("result1", result1 )
  // console.log(JSON.stringify(result));
  const templatesData1 = await response.json();
  if (templatesData1.errors) statusCode = 400;
  console.log("templatesData1", templatesData1 )
  console.log("templatesData1.data", templatesData1.data )
  console.log("templatesData1.data.getCameraInfo", templatesData1.data.getCameraInfo )
  console.log("templatesData1.data.getCameraInfo.members", templatesData1.data.getCameraInfo.members )
  // const lstTemplate = templatesData.data.getCameraInfo.members.items;
  // const templatesData = JSON.stringify(templatesData1);
  // console.log("templatesData", templatesData )
  // console.log("templatesData.data", templatesData )
  const lstTemplate = templatesData1.data.getCameraInfo.members.items;
  console.log("lstTemplate.data", lstTemplate )
  mailAddress = []
  lstTemplate.forEach(element => {
    console.log("lstTemplate.data element", element )
    const email = element.memberInfo.email;
    mailAddress.push(email)
  }); 
  console.log("mailAddress", mailAddress )

  if(mailAddress.length > 0){
  const sendEmailCommand = createSendEmailCommand(mailAddress, 'notify@ai-cloud.biz');
  // メール送信
  const sendResult = await ses.send(sendEmailCommand);
  console.log("sendResult", sendResult )
  }
  // TODO send message to linework
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});



/****************************
* Example put method *
****************************/


/****************************
* Example delete method *
****************************/
// Error middleware must be defined last
app.use((err, req, res, next) => {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
  res.status(err.statusCode).json({ message: err.message }).end();
});
const checkPath = function (req, res, next) {
  console.log("App checkPath");
  console.log(req);
  if (req.path != '/detection' || req.path != '/reaction') {
    return next();
  }
}
// app.all('*', checkPath);
app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
