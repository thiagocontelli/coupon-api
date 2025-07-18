import { ZodType, ZodError, treeifyError } from 'zod'

export const validate = <T>(schema: ZodType<T>, data: unknown) => {
    const result = schema.safeParse(data)

    return result.success
        ? { success: true as const, data: result.data }
        : { success: false as const, error: result.error }
}

export const formatZodError = (error: ZodError) => treeifyError(error)
