import { couponService } from "@/services";
import { formatZodError, validate } from "@/utils";
import { createCouponSchema } from "@/validations";
import type { FastifyInstance } from "fastify";

export async function couponRoutes(fastify: FastifyInstance) {
    fastify.post('/coupon', async (request, reply) => {
        const validation = validate(createCouponSchema, request.body)
        if (!validation.success) {
            return reply.status(400).send({
                message: 'Invalid request body',
                issues: formatZodError(validation.error)
            });
        }
        await couponService.createCoupon(validation.data);
        return reply.status(201).send();
    });
}
