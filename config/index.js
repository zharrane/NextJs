const DEV = process.env.NODE_ENV !== "production"

export const SERVER = DEV
  ? "http://localhost:3000"
  : "https://zharrane-nextjs.netlify.app"
