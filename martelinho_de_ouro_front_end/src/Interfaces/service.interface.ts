import { z } from "zod";
import {
  listServicesSchema,
  serviceResponseSchema,
  serviceSchema,
  serviceUpdateSchema,
  serviceResolveSchema,
  serviceUpdateResolveSchema,
} from "../Schemas/Service";

type IServiceRequest = z.infer<typeof serviceSchema>;
type IServiceResolveRequest = z.infer<typeof serviceResolveSchema>;
type IService = z.infer<typeof serviceResponseSchema>;
type IServices = z.infer<typeof listServicesSchema>;
type IServiceUpdate = z.infer<typeof serviceUpdateSchema>;
type IServiceResolveUpdate = z.infer<typeof serviceUpdateResolveSchema>;

export type {
  IService,
  IServiceRequest,
  IServiceUpdate,
  IServices,
  IServiceResolveRequest,
  IServiceResolveUpdate,
};
