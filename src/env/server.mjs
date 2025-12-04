import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'
import { pino } from 'pino'

export const env = createEnv({
  // Server-side environment variables
  server: {
    /** App version */
    APP_VERSION: z.string(),
    /** Logger log level */
    PINO_LOG_LEVEL: z.enum(Object.values(pino().levels.labels))
  },
  experimental__runtimeEnv: {
    ENVIRONMENT: process.env.ENVIRONMENT || 'DEV'
  }
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  // skipValidation: !!process.env.SKIP_ENV_VALIDATION,
})
