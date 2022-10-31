import Link from 'next/link'
import { Fragment } from 'react'
import { Button } from '../components/Button'
import { NavBar } from '../components/Navbar'
import { TagButton } from '../components/TagButton'

export default function Home () {
  return (
    <Fragment>
      <section className='max-w-5xl mx-auto flex h-24 justify-between items-center'>
        <div className='flex gap-5 '>
          <div className='flex items-center'>
            <span>
              <img className='h-10' src='/svgs/sv1.svg' />
            </span>
            <span className='ml-2 hidden md:block text-zinc-700 font-bold text-lg'>
              Dacade
            </span>
          </div>
          <span className='border-l-2 px-5'>
            <img className='h-10' src='/svgs/sv2.svg' />
          </span>
          <h1></h1>
        </div>
        <div className='flex gap-4'>
          <Button className='hidden lg:block' name='Start The Course' />
          <Link href="/wallet"><TagButton name='Create wallet' /></Link>
        </div>
      </section>
    </Fragment>
  )
}
