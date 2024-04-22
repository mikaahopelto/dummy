import * as cdk from "aws-cdk-lib";
import {
  Architecture,
  Code,
  Function,
  FunctionUrlAuthType,
  LayerVersion,
} from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";
import config from "../config";
import path = require("path");

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Lambda layer
    const bunLayer = LayerVersion.fromLayerVersionArn(
      this,
      "BunLayer",
      config.BUN_LAYER_ARN
    );

    // Lambda function
    const dummyFn = new Function(this, "Dummy", {
      runtime: cdk.aws_lambda.Runtime.PROVIDED_AL2,
      handler: "handler.fetch",
      code: Code.fromAsset(path.join(__dirname, "../../dist")),
      layers: [bunLayer],
      architecture: Architecture.ARM_64,
    });

    // Lambda function url
    const lambdaUrl = dummyFn.addFunctionUrl({
      authType: FunctionUrlAuthType.NONE,
    });

    // Output the function url
    new cdk.CfnOutput(this, "LambdaUrl", {
      value: lambdaUrl.url,
    });
  }
}
