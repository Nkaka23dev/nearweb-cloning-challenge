import Link from 'next/link'
import { Fragment } from 'react'
import Image from 'next/image'
import { Button } from '../components/Button'
import { TagButton } from '../components/TagButton'

export default function Home () {
  return (
    <Fragment>
      <section className='fixed top-0 left-0 right-0 bg-white z-10'>
        <div className='max-w-[67rem] mx-auto h-24  px-2 lg:px-0 flex justify-between items-center'>
         <Link href="/nextPage">
         <div className='flex gap-5 '>
            <div className='flex items-center'>
              <span>
                <img className='h-8 lg:h-10' src='/svgs/sv1.svg' />
              </span>
              <span className='ml-2 hidden md:block text-zinc-700 font-bold text-lg'>
                Dacade
              </span>
            </div>
            <span className='border-l-2 px-5'>
              <img className='h-10 hidden lg:block'  src='/svgs/sv2.svg' />
              <img className='h-8 block lg:hidden ' src='/svgs/sv15.svg' />
            </span>
            <h1></h1>
          </div>
         </Link>
          <div className='flex gap-4'>
            <Button className='hidden lg:block' name='Start The Course' />
            <Link href='/wallet'>
              <TagButton name='Create wallet' />
            </Link>
          </div>
        </div>
      </section>
      <section className='max-w-5xl mx-auto h-[23rem] flex flex-col justify-end mt-40 relative overflow-hidden'>
      <div className='hero-background-color -top-72 block lg:hidden absolute w-full h-96 '></div>
        <div className='text-center mt-0'>
          <h1 className='lg:text-[75px] lg:w-full w-[200px] mx-auto text-[36px] text-gray-700  font-medium  '>
            Get{' '}
            <span
              className='bg-gradient-to-b from-[#9092fb] via-[#86b5ef] to-[#7bdde2] text-transparent
        bg-clip-text tracking-wide'
            >
              NEAR
            </span>{' '}
            Certified!
          </h1>
         
          <h1 className= 'max-w-md lg:max-w-full lg:text-[22px] text-lg tracking-wide leading-[28px] text-[#676767] mt-3 mx-auto'>
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
      {/* Next section */}
      <section className='max-w-5xl mx-auto px-10 pt-32 pb-16'>
        <div className='flex px-10 lg:px-0 flex-col gap-5 lg:flex-row lg:justify-between'>
          <div className='font-primary text-center lg:text-left my-auto'>
            <h1 className='text-dark-100 font-medium text-2xl text-center lg:text-left lg:text-4xl leading-[44px] tracking-wide text-gray-700'>
              Open NEAR wallet
            </h1>
            <p className='"text-dark-200 font-normal text-base lg:text-lg lg:leading-6 pt-[6px] text-gray-700 tracking-wide'>
              <span className='hidden lg:block'>
                Opening a NEAR wallet is the first step and<br></br> essential
                part of joining the NEAR community<br></br> as well as starting
                this course.
              </span>
              <span className='block max-w-md lg:hidden mx-auto'>
                Opening a NEAR wallet is the first step andessential
                part of joining the NEAR community as well as starting
                this course.
              </span>
            </p>
            <button type="button" className="font-normal text-dark-100 text-base mt-8  border border-gray-600 px-6  focus:outline-none cursor-pointer leading-4 transition-250ms w-fit border-accent border-solid rounded-full py-3 rounded-4xl inline-block">Create wallet</button>
          </div>
          {/* <div className='near-logo absolute -right-60 w-[70%] h-96 border-b'></div> */}
          <Image
            src='/images/image1.png'
            alt='Picture of the author'
            className='shadow-sm mx-auto'
            width={300}
            height={300}
          />
          
        </div>
      </section>
      <section className='max-w-[67rem] hidden mx-auto lg:flex'>
        <div className='m-auto grid justify-items-center'>
          <img src='/svgs/sv4.svg' />
        </div>
      </section>
      {/* Next Section */}
      <section className='max-w-5xl mx-auto px-10 pt-5 pb-16'>
        <div className='flex px-10 lg:px-0 flex-col gap-5 lg:flex-row lg:justify-between'>
          <div className='font-primary text-center lg:text-left my-auto'>
            <Image
              src='/svgs/sv5.svg'
              alt='Picture of the author'
              className='shadow-sm mx-auto'
              width={300}
              height={300}
            />
          </div>
          <div className='flex flex-col mx-auto gap-5 my-auto  lg:mr-16'>
            <h1 className='text-dark-100 font-medium text-2xl text-center lg:text-left lg:text-4xl leading-[44px] tracking-wide text-gray-700'>
              Complete the course
            </h1>
            <p className='text-dark-200 text-lg tracking-wide leading-6 mt-1 '>
              In three simple modules, learn:
            </p>
            <div className='flex flex-row gap-4  lg:items-end'>
              <Image
                src='/images/image3.png'
                alt='Picture of the author'
                className='shadow-sm '
                width={30}
                height={30}
              />
              <h4 className='text-end text-lg tracking-wide'>
                {' '}
                Essential NEAR concepts
              </h4>
            </div>
            <div className='flex gap-4 items-end'>
              <Image
                src='/images/image4.png'
                alt='Picture of the author'
                className='shadow-sm'
                width={30}
                height={30}
              />
              <h4 className='text-lg tracking-wide'>
                {' '}
                How to write smart contracts on NEAR
              </h4>
            </div>
            <div className='flex gap-4 items-end'>
              <Image
                src='/images/image5.png'
                alt='Picture of the author'
                className='shadow-sm'
                width={30}
                height={30}
              />
              <h4 className='text-lg tracking-wide'>
                {' '}
                How to build dapps on the NEAR blockchain
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section className='max-w-[67rem] hidden mx-auto lg:flex'>
        <div className='m-auto grid justify-items-center'>
          <img src='/svgs/sv6.svg' />
        </div>
      </section>
      <section className='max-w-[67rem] mx-auto  flex mt-10'>
        <div className='text-center mx-auto text-gray-700 w-full'>
          <h1 className='text-dark-100 text-center  font-medium text-2xl lg:text-4xl leading-[44px] tracking-[-0.02em]'>
            Claim NEAR certificate
            <div className='hidden lg:block absolute top-0 -mt-[38%] left-[40%]'></div>
          </h1>
          <p className='text-dark-200 font-normal text-lg leading-6 text-center'>
            <span className='hidden lg:block '>
              {' '}
              Upon course completion, receive the NEAR dev 101<br></br>{' '}
              certificate as an NFT on your NEAR wallet.
            </span>
            <span className='block lg:hidden'>
              Upon course completion, receive the NEAR dev 101 certificate as an
              NFT on your NEAR wallet.
            </span>
          </p>
        </div>
      </section>
      <section className='max-w-[67rem] mx-auto flex justify-center py-16'>
        <Image
          src='/images/image6.png'
          alt='Picture of the author'
          width={650}
          height={500}
        />
      </section>
      {/* Next Section */}
      <section className='max-w-[60rem] mx-auto mt-32 relative overflow-hidden'>
        <div className='bottom-development absolute w-full h-96 border-b'></div>
        <div className='flex px-10 lg:px-0 flex-col gap-5 lg:flex-row lg:justify-between'>
          <div className='text-center lg:text-left my-auto'>
          <Image
            src='/images/image7.png'
            alt='Picture of the author'
            className='shadow-sm mx-auto block lg:hidden'
            width={200}
            height={200}
          />
          <div className='flex flex-col justify-center lg:justify-start gap-5'>
            <h1 className='text-dark-100 font-medium text-2xl text-center lg:text-left lg:text-4xl leading-[44px] tracking-wide text-gray-700'>NEAR Development 101</h1>
            <button type="button" className="font-normal text-dark-100 text-base -mt-4 lg:mt-1 border border-gray-200 px-6  focus:outline-none cursor-pointer leading-4 transition-250ms w-fit border-accent border-solid rounded-full py-3 rounded-4xl mx-auto lg:mx-0 inline-block">Create wallet</button>
          </div>

          </div>
          <Image
            src='/images/image7.png'
            alt='Picture of the author'
            className='shadow-sm mx-auto hidden lg:block'
            width={390}
            height={350}
          />
        </div>
      </section>
      {/*Next Section  */}
      <section className='max-w-[50rem] mx-auto flex py-20 px-10 lg:px-0 flex-col gap-10'>
        <div className='mx-auto text-lg cursor-pointer'>
          <h1 className='text-xl text-center'>
            Visit{' '}
            <span className='font-bold text-gray-700 text-center cursor-pointer'>nearbalkans.org </span>{' '}
            and make sure to follow us on our social and community channels!
          </h1>
        </div>
        {/* second flex */}
        <div className='mx-auto text-lg cursor-pointer'>
          <div className='flex flex-col lg:flex-row gap-16'>

            <div className='flex items-center'>
              <span className='mx-auto lg:border-r-2 lg:px-16'>
                <img className='h-10' src='/svgs/sv2.svg' />
              </span>
            </div>

            <div className='flex gap-10 lg:gap-5 items-center'>
            <Image
            src='/svgs/sv7.svg'
            alt='Picture of the author'
            className='shadow-sm'
            width={30}
            height={30}
          /> 
           <Image
            src='/svgs/sv8.svg'
            alt='Picture of the author'
            className='shadow-sm'
            width={30}
            height={30}
          />
            <Image
            src='/svgs/sv9.svg'
            alt='Picture of the author'
            className='shadow-sm'
            width={30}
            height={30}
          />
            <Image
            src='/svgs/sv10.svg'
            alt='Picture of the author'
            className='shadow-sm'
            width={15}
            height={15}
          />
           <Image
            src='/svgs/sv11.svg'
            alt='Picture of the author'
            className='shadow-sm'
            width={30}
            height={30}
          />
           <Image
            src='/svgs/sv13.svg'
            alt='Picture of the author'
            className='shadow-sm'
            width={30}
            height={30}
          />
            <Image
            src='/svgs/sv12.svg'
            alt='Picture of the author'
            className='shadow-sm'
            width={30}
            height={30}
          />
            </div>
          </div>
        </div>
        {/* second flex */}
        <div className='flex flex-col lg:flex-row justify-between text-lg cursor-pointer'>
          <h1 className='text-center'>NEAR Balkans <br className='hidden lg:block'></br> 2022</h1>
          <h1  className='text-center'>info@nearbalkans.org</h1>
          <h1  className='text-center'>Privacy <br className='hidden lg:block'></br>  Policy</h1>
          <h1  className='text-center'>Cookie <br className='hidden lg:block'></br>  Policy</h1>
          <h1  className='text-center'>Terms & <br className='hidden lg:block'></br>  Policy</h1>
        </div>
        {/* Third flex */}
        <div className='text-lg cursor-pointer'>
          <h1 className='text-lg text-center'>NEAR Balkans Hub: Bosnia & Herzegovina, Bulgaria, Croatia, Montenegro, North Macedonia, <br></br> Serbia, and Slovenia</h1>
        </div>
      </section>
    </Fragment>
  )
}
