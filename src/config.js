// API Configuration
// In development, use localhost
// In production, this will be set via environment variable
const API_URL = (
	process.env.REACT_APP_API_URL || "http://localhost:5001"
).replace(/\/$/, "");

export default API_URL;
