import React from 'react';
// Components
import HeaderCTA from './HeaderCTA';
// Icon
import GameIcon from '../../assets/img/space-invaders.png';
import TechIcon from '../../assets/img/technology.png';

function HomePageHeader() {
  return (
    <header id='hero' className='grid p-4 w-full'>
      <div className='grid md:grid-cols-2x h-full'>
        {/* Text Section Left */}
        <section className='grid h-full'>
          <div className='mt-2 md:mt-6 md:pl-10'>
            <article className='h-fit'>
              <div className='text-lg'>
                <h4>Brand new web project</h4>
              </div>
              <h1 className='text-main-colour font-extrabold text-6xl lg:text-7xl 2xl:text-9xl pb-6 md:pb-8 text-center md:text-left'>
                myecoapp
              </h1>
              <h2 className='font-sans text-2xl 2xl:text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-100 max-w-lg mb-6'>
                Help The Planet <br className='hidden md:block' />
                by existing,{' '}
                <span className='inline-block text-deep-purple-accent-400'>
                  visting and sharing!
                </span>
              </h2>
              <div className='md:max-w-[80%]'>
                <p className='text-text-grey leading-5 dark:text-slate-100 text-base md:text-lg font-poppins'>
                  Help the environment from anywhere for free! At home or at any
                  event. Use our apps to earn while you relax. We have done what
                  we can to provide entertainment for you. Check it out below.
                </p>
              </div>
            </article>
            <section className='grid md:max-w-[80%] mb-6 md:mb-0 mt-8'>
              <HeaderCTA />
            </section>
          </div>

          {/* icons */}
          <section className='grid'>
            <div className='grid grid-cols-5 gap-2 md:ml-10 md:mr-20 h-fit'>
              <article className='grid outline-2 outline-main-colour outline rounded-xl p-2'>
                <div className='grid items-center w-fit justify-center'>
                  <img className='w-10 md:w-20' src={GameIcon} alt='' />
                </div>
                <div>
                  <h4 className='font-semibold text-xs md:text-base text-center'>SERVICES</h4>
                </div>
              </article>
              <article className='grid outline-2 outline-main-colour outline rounded-xl p-2'>
                <div className='grid items-center w-fit justify-center'>
                  <img className='w-10 md:w-20' src={GameIcon} alt='' />
                </div>
                <div>
                  <h4 className='font-semibold text-xs md:text-base text-center'>SERVICES</h4>
                </div>
              </article>
              <article className='grid outline-2 outline-main-colour outline rounded-xl p-2'>
                <div className='grid items-center w-fit justify-center'>
                  <img className='w-10 md:w-20' src={GameIcon} alt='' />
                </div>
                <div>
                  <h4 className='font-semibold text-xs md:text-base text-center'>SERVICES</h4>
                </div>
              </article>
              <article className='grid outline-2 outline-main-colour outline rounded-xl p-2'>
                <div className='grid items-center w-fit justify-center'>
                  <img className='w-10 md:w-20' src={GameIcon} alt='' />
                </div>
                <div>
                  <h4 className='font-semibold text-xs md:text-base text-center'>SERVICES</h4>
                </div>
              </article>
              <article className='grid outline-2 outline-main-colour outline rounded-xl p-2'>
                <div className='grid items-center w-fit justify-center'>
                  <img className='w-10 md:w-20' src={GameIcon} alt='' />
                </div>
                <div>
                  <h4 className='font-semibold text-xs md:text-base text-center'>SERVICES</h4>
                </div>
              </article>
            </div>
          </section>
        </section>

        {/* Phone images */}
        <section className='grid mt-10 md:mt-0'>
          <div className='grid relative grid-flow-col'>
            <div className=' relative z-10 md:-ml-4 grid items-center'>
              <img
                className='object-cover'
                src='https://kitwind.io/assets/kometa/one-girl-phone.png'
                alt=''
              />
            </div>
            <div className='relative z-0 grid items-center'>
              <img
                className='object-cover '
                src='https://kitwind.io/assets/kometa/two-girls-phone.png'
                alt=''
              />
            </div>
          </div>
        </section>
      </div>
    </header>
  );
}

export default HomePageHeader;
