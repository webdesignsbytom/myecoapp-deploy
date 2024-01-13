import React, { useState } from 'react';
// Components
import Navbar from '../../components/navigation/Navbar';
import { myecohomeOptionsArray } from '../../data/ListOfMyecohomeData';
import EcoHomeItem from '../../components/myecohome/EcoHomeItem';
import { useNavigate } from 'react-router-dom';
// Data

function MyHomeMain() {
  const [ecoPagesArray, setEcoPagesArray] = useState(myecohomeOptionsArray);
  console.log('ecoPagesArray', ecoPagesArray);

  let navigate = useNavigate();

  const navigateToMyecohomePage = (page) => {
    console.log('page', page);
    navigate(`${page.url}`, { replace: true });
  }

  return (
    <div className='bg-main-bg-colour dark:bg-main-bg-dark-colour min-h-screen h-screen'>
      <div className=' grid grid-rows-reg h-full'>
        {/* Navigation */}
        <Navbar />

        {/* Main Page */}
        <main className='bg-main-bg-colour grid h-full w-full'>
          <div className='grid grid-rows-reg h-full w-3/4 mx-auto'>
            {/* Title section */}
            <header className='grid grid-cols-reg gap-8 h-fit mt-10 mb-10'>
              <div className='bg-main-colour px-6 py-10 grid text-center items-center rounded-lg'>
                <h1 className='text-2xl font-bold text-main-white-text mb-2'>
                  myecohome
                </h1>
              </div>
              <div className='grid'>
                <p className='leading-5 text-end mt-5'>
                  <strong className='text-main-colour'>One</strong> of the ways
                  we can make money to help the planet. Is by offering you free
                  content! It's a simple idea that can snowball into making a
                  huge difference for the planet. These pages displayed below
                  are part of the <span>myecohome</span> project. If you set
                  your home page to one of our page options, you can donate to
                  us without knowing every time you start up a web enabled
                  device!
                </p>
              </div>
            </header>

            {/* Display of myecohome pages */}
            <section className='grid grid-rows-reg w-full h-full'>
              <article className='text-center font-semibold text-main-white-text bg-main-colour rounded-lg outline outline-2 outline-main-border h-fit w-full py-2'>
                <h2>Pick your Favorite Page</h2>
                <h3>Set as Home Page</h3>
                <h4>Turn off adblocker for that page</h4>
              </article>

              <section className='grid grid-cols-2 gap-x-4 gap-y-2 pt-4'>
                {ecoPagesArray.map((page, index) => {
                  return <EcoHomeItem page={page} key={index} navigateToMyecohomePage={navigateToMyecohomePage} />;
                })}
              </section>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default MyHomeMain;
