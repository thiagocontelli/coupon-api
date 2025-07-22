import { createCoupon } from "@/modules/coupon";
import { createCouponSchema } from "@/modules/coupon";
import { formatZodError, validate } from "@/utils";
import type { FastifyReply, FastifyRequest } from "fastify";

export async function createCouponHandler(request: FastifyRequest, reply: FastifyReply) {
    const validation = validate(createCouponSchema, request.body)
    if (!validation.success) {
        return reply.status(400).send({
            message: 'Invalid request body',
            issues: formatZodError(validation.error)
        });
    }
    const coupon = await createCoupon(validation.data);
    return reply.status(201).send(coupon);
}
