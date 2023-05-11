import { z } from "zod"

export const UserSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().regex(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, { message: "Invalid Email address" }).min(1, { message: "Email is required" }),
    phone: z.string().regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im, { message: "Invalid Phone number" }).min(1, { message: "Phone is required" })
})

export const planSchema = z.object({
    name: z.string(),
    icon: z.string(),
    priceMo: z.number(),
    priceYr: z.number(),
    tab: z.number()
})

export const addOnSchema = z.object({
    id: z.string(),
    name: z.string(),
    desc: z.string(),
    priceAddMo: z.number(),
    priceAddYr: z.number()
})