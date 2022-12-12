// import './globals.css'
import '../styles/dist.css'
import { Poppins, Open_Sans } from "@next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins"
})

const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-open-sans"
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${open_sans.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      < head />
      <body>{children}</body>
    </html >
  )
}
