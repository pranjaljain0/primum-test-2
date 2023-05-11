import { addOnSchema, planSchema } from "@/schema/index"

import { z } from "zod"

export type addOn = z.infer<typeof addOnSchema>
export type plans = z.infer<typeof planSchema>
