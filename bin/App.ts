import * as cdk from 'aws-cdk-lib';
import { StripeFunctionsStack } from '../lib/stripe-stack';

const app = new cdk.App();
new StripeFunctionsStack(app, `StripeBackendStack-${process.env.stage || 'dev'}`, {
  env: {
    region: process.env.AWS_REIGON,
  },
});
