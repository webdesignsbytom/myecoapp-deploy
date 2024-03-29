import React from 'react';

function UserInfoSection() {
  return (
    <section className='grid w-full h-full overflow-hidden'>
      <div className='px-10 grid grid-rows-2 gap-y-4'>
        <article>
          <div className='py-4'>
            <h6>How users can help</h6>
          </div>
          <div>
            <p>
              Because users can earn money just by visiting our website. We have
              made a fun way to keep you coming back. We created loads of games,
              home pages, shops, new and articles and other web and mobile
              products. We can make money by giving you free stuff!
            </p>
          </div>
        </article>

        <article>
          <div>
            <p>
              <span>The gaming experience</span>
            </p>
            <div>
              <p>
                We have all the user features you would find in an online game.
                Achievements to complete, badges to earn, levels to grind and
                friends to make. Be sure to take part in events. We found a way
                to make visiting our site as entertaining as possible. Each time
                you do. You are helping the planet!
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default UserInfoSection;
