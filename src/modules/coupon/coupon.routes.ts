import type { FastifyInstance } from "fastify";
import { createCouponHandler } from "./coupon.controller";

export async function couponRoutes(app: FastifyInstance) {
    app.register(async (router) => {
        router.post("/", createCouponHandler);
    }, { prefix: "/coupon" });
}
