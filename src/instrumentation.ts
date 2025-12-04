export const register = async () => {
  // Confirm environment variables are set when Next.js server starts
  console.log('Validating Environent Variables.')
  await import('@/env/server.mjs')
  // await import('@/env/client.mjs')
}
