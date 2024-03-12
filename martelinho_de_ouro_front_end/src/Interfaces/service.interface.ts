import { z } from "zod";
import {
  listServicesSchema,
  serviceResponseSchema,
  serviceSchema,
  serviceUpdateSchema,
  serviceResolveSchema,
  serviceUpdateResolveSchema,
} from "../Schemas/Service";
import { DeepPartial } from "react-hook-form";

type IServiceRequest = z.infer<typeof serviceSchema>;
type IServiceResolveRequest = z.infer<typeof serviceResolveSchema>;
type IService = z.infer<typeof serviceResponseSchema>;
type IServices = z.infer<typeof listServicesSchema>;
type IServiceUpdate = DeepPartial<IServiceRequest>;
type IServiceResolveUpdate = DeepPartial<IServiceResolveRequest>;

export type {
  IService,
  IServiceRequest,
  IServiceUpdate,
  IServices,
  IServiceResolveRequest,
  IServiceResolveUpdate,
};
