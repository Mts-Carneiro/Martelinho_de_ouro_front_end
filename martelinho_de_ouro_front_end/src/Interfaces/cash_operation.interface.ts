import { z } from "zod";
import { DeepPartial } from "react-hook-form";
import {
  cashOperationResponseSchema,
  cashOperationSchema,
  listCashOperations,
} from "../Schemas/Cash_operation";

type ICashOperationRequest = z.infer<typeof cashOperationSchema>;
type ICashOperation = z.infer<typeof cashOperationResponseSchema>;
type ICashOperations = z.infer<typeof listCashOperations>;
type ICashOperationUpdate = DeepPartial<ICashOperationRequest>;

export type {
  ICashOperation,
  ICashOperationRequest,
  ICashOperationUpdate,
  ICashOperations,
};
