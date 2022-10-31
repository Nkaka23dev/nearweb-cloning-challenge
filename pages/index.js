import Link from 'next/link'
import { Fragment } from 'react'
import { Button } from '../components/Button'
import { TagButton } from '../components/TagButton'

export default function Home () {
  return (
    <Fragment>
      <section className='fixed top-0 left-0 right-0 bg-white'>
        <div className='max-w-[67rem] mx-auto h-24  px-2 lg:px-0 flex justify-between items-center'>
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
            <Link href='/wallet'>
              <TagButton name='Create wallet' />
            </Link>
          </div>
        </div>
      </section>
      <section className='max-w-5xl mx-auto h-[25rem] flex flex-col justify-end mt-40'>
        <div className='text-center mt-0'>
          <h1 className='lg:text-[75px] lg:w-full w-[200px] mx-auto font-semibold text-[36px] text-gray-700'>
            Get{' '}
            <span
              className='bg-gradient-to-b from-[#9092fb] via-[#86b5ef] to-[#7bdde2] text-transparent
        bg-clip-text tracking-wide'
            >
              NEAR
            </span>{' '}
            Certified!
          </h1>

          <h1 className='lg:text-[22px] text-lg tracking-wide  leading-[28px] text-[#676767] mt-10'>
            We, in NEAR Balkans, know how important it is to have regional and
            local support. Now{' '}
            <br className='hidden lg:block text-[#3f4246]'></br> you can become
            NEAR certified in a regional language of preference and connect
            <br className='hidden lg:block'></br> with our team to support your
            further growth within the NEAR ecosystem.
          </h1>
        </div>
      </section>
      {/* Next section */}
      <section className='max-w-[67rem] pt-24 pb-10 mx-auto flex'>
        <div className='m-auto'>
          <Link href=''>
            <img src='/svgs/sv3.svg' />
          </Link>
        </div>
      </section>
      <section className='max-w-[67rem] mx-auto h-52 flex'>
        <div className='m-auto grid mt-16 justify-items-center font-primary text-center text-dark-100 font-medium text-[32px] lg:text-5xl leading-7 lg:leading-[60px] tracking-[-0.02em] text-gray-700'>
        Making your NEAR <br></br> learning easy.
        </div>
      </section> 

    </Fragment>
  )
}
