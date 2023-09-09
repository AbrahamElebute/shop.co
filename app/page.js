import {Hero, Arrivals, Selling, Browse } from '@/sections'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero/>
      <Arrivals/>
      <Selling/>
      <Browse/>
    </main>
  )
}
