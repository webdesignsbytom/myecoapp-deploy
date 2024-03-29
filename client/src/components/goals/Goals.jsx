import React from 'react';
// Data
import { GoalsList } from '../../utils/data/CompanyData';
// Components
import Goal from './Goal';

function Goals() {
  return (

      <section id='goals' className='grid min-h-screen mt-16 bg-red-400 p-4'>
        {/* Main */}
        <section className='bg-blue-200 '>
          <article className=''>
            <h4 className=''>What will be do?</h4>
            <h2 className=''>Goals</h2>
          </article>
          <section className=''>
            <article className='mb-2'>
              <p className=''>
              <span className='font-extrabold'>The funds we raised need to have a goal that people can get
                behind.</span> Our project relies on this site and our project reaching
                as many people as possible. Growing exponentially to allow us to
                help more people. We have three main goals we hope to achieve.
                They are designed to make people appreciate what environmental conciousness can do for a community. Instead of blocking their roads we want to improve their lives by improving their environment.
              </p>
            </article>
            
          </section>

          {/* Secondary info */}
          <section className='grid'>
            <div className='text-center mt-2 mb-6'>
              <h3 className=''>Our Ideas</h3>
            </div>
            <section className='grid lg:grid-cols-3 gap-4'>
              {GoalsList.map((goal, index) => {
                return (
                  <article className='group border-2 border-eco-green-dark rounded-lg overflow-hidden bg-eco-green hover:bg-white hover:border-eco-green-dark hover:border-2 dark:hover:bg-black'>
                    <Goal goal={goal} key={index} />
                  </article>
                );
              })}
            </section>
          </section>
        </section>
      </section>

  );
}

export default Goals;
