import { z } from 'zod';

export const createCouponSchema = z.object({
    code: z.string().min(1),
    description: z.string().min(1),
    isActive: z.boolean().optional().default(true),
});

export type CreateCouponInput = z.infer<typeof createCouponSchema>;
