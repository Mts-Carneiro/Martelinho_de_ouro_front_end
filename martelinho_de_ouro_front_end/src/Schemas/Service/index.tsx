import { z } from "zod";

const serviceSchema = z.object({
  enterprise: z.enum(["Localiza", "Veneza", "Particular"]),
  vehicle: z.string(),
  license_plate: z
    .string()
    .length(7, "The plate numbering must be seven digits long"),
  description: z.string(),
  phone: z.string(),
  value: z.number(),
  status: z.string().nullable(),
  delivery_date: z.string(),
});

const serviceResolveSchema = z.object({
  enterprise: z.enum(["Localiza", "Veneza", "Particular"]),
  vehicle: z.string(),
  license_plate: z
    .string()
    .length(7, "The plate numbering must be seven digits long"),
  description: z.string(),
  phone: z.string(),
  value: z.string(),
  status: z.string().nullable(),
  delivery_date: z.string(),
});

const serviceUpdateResolveSchema = serviceResolveSchema.partial();

const serviceResponseSchema = serviceSchema.extend({
  id: z.string(),
});

const listServicesSchema = serviceResponseSchema.array();

const serviceUpdateSchema = serviceSchema.partial();

export {
  serviceResponseSchema,
  serviceSchema,
  serviceUpdateSchema,
  listServicesSchema,
  serviceResolveSchema,
  serviceUpdateResolveSchema,
};
