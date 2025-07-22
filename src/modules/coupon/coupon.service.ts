import type { CreateCouponInput } from "@/modules/coupon";

export async function createCoupon(createCouponInput: CreateCouponInput) {
    return {
        ...createCouponInput,
        id: crypto.randomUUID(),
        code: createCouponInput.code.toUpperCase(),
    };
}