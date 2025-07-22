import { couponRoutes } from "@/modules/coupon";
import type { FastifyInstance } from "fastify";

export async function appRoutes(fastify: FastifyInstance) {
    await couponRoutes(fastify);
}
