import { z } from "zod";
import {
  listServicesSchema,
  serviceResponseSchema,
  serviceSchema,
  serviceUpdateSchema,
} from "../Schemas/Service";

type IServiceRequest = z.infer<typeof serviceSchema>;
type IService = z.infer<typeof serviceResponseSchema>;
type IServices = z.infer<typeof listServicesSchema>;
type IServiceUpdate = z.infer<typeof serviceUpdateSchema>;

export type { IService, IServiceRequest, IServiceUpdate, IServices };
