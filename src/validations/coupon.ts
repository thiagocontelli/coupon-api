import { z } from 'zod'

export const createCouponSchema = z.object({
    code: z.string().min(1),
    description: z.string().min(1),
    isActive: z.boolean().optional().default(true),
    discountId: z.uuid().nullable().default(null),
})

export type CreateCouponInput = z.infer<typeof createCouponSchema>
