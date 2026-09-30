export const PLANS={free:{label:"Free",monthly:3,resolution:"480p",maxFrames:49},creator:{label:"Creator",monthly:30,resolution:"480p",maxFrames:81},studio:{label:"Studio",monthly:100,resolution:"480p",maxFrames:81}} as const;
export type Plan=keyof typeof PLANS;
export function planFor(v:string|undefined):Plan{return v==="creator"||v==="studio"?v:"free";}