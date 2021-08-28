const DEV = process.env.NODE_ENV !== "production"

export const SERVER = DEV
  ? "http://localhost:3000"
  : "https://sad-jepsen-3af991.netlify.app"
