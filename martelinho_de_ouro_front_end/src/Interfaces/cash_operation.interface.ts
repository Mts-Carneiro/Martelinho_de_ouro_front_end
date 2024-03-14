import { z } from "zod";
import { DeepPartial } from "react-hook-form";
import {
  cashOperationResponseSchema,
  cashOperationSchema,
  listCashOperations,
  cashOperationResolveSchema,
} from "../Schemas/Cash_operation";

type ICashOperationRequest = z.infer<typeof cashOperationSchema>;
type ICashOperationResolveRequest = z.infer<typeof cashOperationResolveSchema>;
type ICashOperation = z.infer<typeof cashOperationResponseSchema>;
type ICashOperations = z.infer<typeof listCashOperations>;
type ICashOperationUpdate = DeepPartial<ICashOperationRequest>;

export type {
  ICashOperation,
  ICashOperationRequest,
  ICashOperationUpdate,
  ICashOperations,
  ICashOperationResolveRequest,
};
