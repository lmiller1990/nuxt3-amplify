export default defineEventHandler(async (event) => {
  return {
    status: `OK. The value for process.env.AUTH_ORIGIN is: ${process.env.AUTH_ORIGIN}`,
  };
});
