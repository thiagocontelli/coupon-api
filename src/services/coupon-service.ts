import type { CreateCouponInput } from "@/validations";

async function createCoupon(createCouponInput: CreateCouponInput) {
    console.log(createCouponInput)
}

export const couponService = {
    createCoupon,
} as const;