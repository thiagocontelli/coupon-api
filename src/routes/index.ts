import { couponRoutes } from "@/routes/coupon";
import type { FastifyInstance } from "fastify";

export async function appRoutes(fastify: FastifyInstance) {
    await couponRoutes(fastify);
}
