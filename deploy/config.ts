import * as dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

export default z
  .object({
    BUN_LAYER_ARN: z.string(),
    CDK_DEFAULT_ACCOUNT: z.string(),
    CDK_DEFAULT_REGION: z.string(),
  })
  .parse(process.env);
