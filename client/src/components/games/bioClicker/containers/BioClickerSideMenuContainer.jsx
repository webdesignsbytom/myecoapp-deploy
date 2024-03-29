import React, { useState } from 'react';
// Components
import BioClickerMenuProduct from './BioClickerMenuProduct';

function BioClickerSideMenuContainer({ displayArray }) {
  const [purchaseAmount, setPurchaseAmount] = useState(1);

  return (
    <section className='grid overflow-hidden'>
      <div className='grid grid-rows-reg bg-slate-500 p-1 overflow-hidden'>
        {/* Header */}
        <article className='grid p-1 text-center mb-2'>
          <div className='outline outline-4 outline-black w-full bg-gray-50 rounded py-1'>
            <h3 className='text-xl font-semibold'>{displayArray.title}</h3>
          </div>
        </article>

        {/* List of items */}
        <div className='grid overflow-hidden p-1 overflow-y-scroll'>
          <ol className='grid gap-2 outline outline-2 outline-white bg-black rounded overflow-y-scroll p-1'>
            {displayArray.content.map((product, index) => {
              return (
                <BioClickerMenuProduct
                  key={index}
                  product={product}
                  purchaseAmount={purchaseAmount}
                  productType={displayArray.type}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default BioClickerSideMenuContainer;
