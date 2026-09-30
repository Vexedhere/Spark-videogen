import type {Config} from "tailwindcss";
const config:Config={content:["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}","./lib/**/*.{ts,tsx}"],theme:{extend:{colors:{ink:"#07070a",panel:"#101016",accent:"#8b5cf6"},boxShadow:{glow:"0 0 60px rgba(139,92,246,.18)"}}},plugins:[]};
export default config;