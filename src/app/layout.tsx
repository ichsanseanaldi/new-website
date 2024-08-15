
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {Analytics} from '@vercel/analytics/react';
import { shared_metadata } from '../addons/shared-metadata'

const inter = Inter({
  weight:['100','200','400','600','900'],
  subsets: ['latin'],
  preload:true
})

export const metadata: Metadata = {
  title: `Ichsan Seanaldi Permana | Personal Website`,
  description:`Ichsan Seanaldi Permana is a Software Developer, He is experienced in developing apps with several programming language and frameworks`,
  ...shared_metadata,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" dir='ltr'>
      <body className={`flex justify-between min-h-dvh w-full max-w-[1000px] mx-auto bg-black ${inter.className} p-10`}>
        <Analytics/>
        <div className='w-full'>
          {children}
        </div>
      </body>
    </html>
  )
}
