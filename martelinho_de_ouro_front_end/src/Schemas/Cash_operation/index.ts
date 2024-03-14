import { z } from "zod";

const cashOperationSchema = z.object({
  tipe: z.string(),
  name: z.string(),
  description: z.string(),
  value: z
    .number()
    .refine((val) => val > 0, { message: "Insira um valor acima de 0" }),
  date: z.date(),
});

const cashOperationResolveSchema = z.object({
  tipe: z.string().refine((val) => val.length > 0, {
    message: "É necessario preencher o campo",
  }),
  name: z.string().refine((val) => val.length > 0, {
    message: "É necessario preencher o campo",
  }),
  description: z.string().refine((val) => val.length > 0, {
    message: "É necessario preencher o campo",
  }),
  value: z
    .string()
    .refine((val) => val !== "0", { message: "Insira um valor acima de 0" })
    .refine((val) => val.length > 0, {
      message: "É necessario preencher o campo",
    }),
  date: z.string().refine((val) => val.length > 0, {
    message: "É necessario preencher o campo",
  }),
});

const cashOperationResponseSchema = cashOperationSchema.extend({
  id: z.string(),
});

const cashOperationUpdateSchema = cashOperationSchema.partial();

const listCashOperations = cashOperationResponseSchema.array();

export {
  cashOperationResponseSchema,
  cashOperationSchema,
  cashOperationUpdateSchema,
  listCashOperations,
  cashOperationResolveSchema,
};
