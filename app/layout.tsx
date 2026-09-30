import "./globals.css";
import type {Metadata} from "next";
export const metadata:Metadata={title:"Spark VideoGen",description:"Create AI videos from text with Spark VideoGen."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}