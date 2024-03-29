import React from 'react';

function TimelineHomePage() {
  return (
    <section className='px-8 mt-6'>
      <div className='my-2 w-full grid justify-end mb-4'>
        <h4 className='text-main-colour'>TIMELINE OF EVENTS</h4>
      </div>
      <ol className='border-l border-neutral-300 dark:border-neutral-500 md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t'>
        <li>
          <div className='flex-start flex items-center pt-2 md:block md:pt-0'>
            <div className='-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0'></div>
            <p className='mt-2 text-sm text-neutral-500 dark:text-neutral-300'>
              01.07.2021
            </p>
          </div>
          <div className='ml-4 mt-2 pb-5 md:ml-0'>
            <h4 className='mb-1.5 text-xs font-semibold text-main-colour'>Title of section 1</h4>
            <p className='mb-3 text-neutral-500 text-xs leading-4 dark:text-neutral-300'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              scelerisque diam non nisi sempe
            </p>
          </div>
        </li>

        <li>
          <div className='flex-start flex items-center pt-2 md:block md:pt-0'>
            <div className='-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0'></div>
            <p className='mt-2 text-sm text-neutral-500 dark:text-neutral-300'>
              13.09.2021
            </p>
          </div>
          <div className='ml-4 mt-2 pb-5 md:ml-0'>
            <h4 className='mb-1.5 text-xs font-semibold text-main-colour'>Title of section 2</h4>
            <p className='mb-3 text-xs text-neutral-500 leading-4 dark:text-neutral-300'>
              Libero expedita explicabo eius fugiat quia aspernatur autem
              laudantium error archit
            </p>
          </div>
        </li>

        <li>
          <div className='flex-start flex items-center pt-2 md:block md:pt-0'>
            <div className='-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0'></div>
            <p className='mt-2 text-sm text-neutral-500 dark:text-neutral-300'>
              25.11.2021
            </p>
          </div>
          <div className='ml-4 mt-2 pb-5 md:ml-0'>
            <h4 className='mb-1.5 text-xs font-semibold text-main-colour'>Title of section 3</h4>
            <p className='mb-3 text-neutral-500 text-xs leading-4 dark:text-neutral-300'>
              Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit
              natus! Eum corporis illum nihil officiis tempore. Excepturi illo
              natus li
            </p>
          </div>
        </li>
      </ol>
    </section>
  );
}

export default TimelineHomePage;
