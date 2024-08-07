import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Images
import MyeaLogo from '../../assets/images/logos/my_eco_app_main_logo.svg';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Components
import SocialMediaLinkBar from '../../components/social/SocialMediaLinkBar';
import { UserContext } from '../../context/UserContext';

function Navbar() {
  const { toggleNavbar, isNavbarMenuOpen } = useContext(ToggleContext);
  const { user, setUser } = useContext(UserContext);

  const [activeNav, setActiveNav] = useState('/');

  let navigate = useNavigate();

  useEffect(() => {
    setActiveNav(window.location.pathname);
  }, []);

  const signOut = (event) => {
    event.preventDefault();

    setUser();
    localStorage.removeItem(process.env.REACT_APP_USER_TOKEN);

    navigate('/', { replace: true });
  };

  return (
    <nav className='bg-main-bg-colour dark:bg-main-bg-dark-colour px-1 py-1 drop-shadow border-b-[1px] border-main-border border-solid'>
      <header className='grid grid-flow-col rounded bg-colour-dark p-2 justify-between w-full h-fit items-center px-4 font-poppins'>
        <section>
          <Link className='cursor-pointer' to='/'>
            <img
              className='w-12 h-12 rounded no__highlights'
              src={MyeaLogo}
              alt='my eco app logo'
            />
          </Link>
        </section>

        {/* Phone Nav */}
        <section
          onClick={() => {
            toggleNavbar();
          }}
          className='md:hidden no__highlights'
        >
          <span className='cursor-pointer text-gray-100 hover:text-hover-grey'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-10 h-10 transition no__highlights duration-200 ease-in-out select-none no__highlights focus:scale-125 active:scale-125'
              data-te-animation-init
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </span>
        </section>

        {/* Large sreen nav */}
        <section className='text-gray-100 hidden md:grid'>
          <ul className='grid grid-flow-col gap-4 mr-8'>
            {/* Home */}
            <li>
              <Link to='/'>
                <span
                  className={
                    activeNav === '/'
                      ? 'px-2 py-4 text-center text-green-400'
                      : 'px-2 py-4 text-center text-gray-100'
                  }
                >
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link to='/2'>
                <span
                  className={
                    activeNav === '/'
                      ? 'px-2 py-4 text-center text-green-400'
                      : 'px-2 py-4 text-center text-gray-100'
                  }
                >
                  Home 2
                </span>
              </Link>
            </li>
            {/* Myecohome */}
            <li>
              <Link to='/myecohome'>
                <span
                  className={
                    activeNav === '/myecohome'
                      ? 'px-2 py-4 text-center text-green-400'
                      : 'px-2 py-4 text-center text-gray-100'
                  }
                >
                  Myecohome
                </span>
              </Link>
            </li>
            {/* About */}
            <li>
              <Link to='/about-us'>
                <span
                  className={
                    activeNav === '/about'
                      ? 'px-2 py-4 text-center text-green-400'
                      : 'px-2 py-4 text-center text-gray-100'
                  }
                >
                  About
                </span>
              </Link>
            </li>
            {/* Funding */}
            <li>
              <Link to='/funding'>
                <span
                  className={
                    activeNav === '/funding'
                      ? 'px-2 py-4 text-center text-green-400'
                      : 'px-2 py-4 text-center text-gray-100'
                  }
                >
                  Funding
                </span>
              </Link>
            </li>
            {/* Goals */}
            <li>
              <Link to='/our-goals'>
                <span
                  className={
                    activeNav === '/our-goalsv'
                      ? 'px-2 py-4 text-center text-green-400'
                      : 'px-2 py-4 text-center text-gray-100'
                  }
                >
                  Goals
                </span>
              </Link>
            </li>
            {/* Newsletter */}
            <li>
              <Link to='/newsletter-signup'>
                <span
                  className={
                    activeNav === '/newsletter-signup'
                      ? 'px-2 py-4 text-center text-green-400'
                      : 'px-2 py-4 text-center text-gray-100'
                  }
                >
                  Newsletter
                </span>
              </Link>
            </li>
            {/* Contact */}
            <li>
              <Link to='/contact-us'>
                <span
                  className={
                    activeNav === '/contact-us'
                      ? 'px-2 py-4 text-center text-green-400'
                      : 'px-2 py-4 text-center text-gray-100'
                  }
                >
                  Contact
                </span>
              </Link>
            </li>
            {/* Login */}
            {!user.email && (
              <>
                <li>
                  <Link to='/login'>
                    <span
                      className={
                        activeNav === '/login'
                          ? 'px-2 py-4 text-center text-green-400'
                          : 'px-2 py-4 text-center text-gray-100'
                      }
                    >
                      Login
                    </span>
                  </Link>
                </li>
                {/* Sign up */}
                <li>
                  <Link to='/sign-up'>
                    <span
                      className={
                        activeNav === '/sign-up'
                          ? 'px-2 py-4 text-center text-green-400'
                          : 'px-2 py-4 text-center text-gray-100'
                      }
                    >
                      Sign Up
                    </span>
                  </Link>
                </li>
              </>
            )}

            {/* Sign out */}
            {user.email && (
              <li className='nav__link'>
                <Link onClick={signOut}>Sign out</Link>
              </li>
            )}
          </ul>
        </section>

        <section className='hidden lg:grid grid-flow-col gap-4'>
          <SocialMediaLinkBar />
        </section>
      </header>

      {/* Phone navigation drop down */}
      {isNavbarMenuOpen && (
        <section className='z-30 mt-6 lg:hidden'>
          <nav className='bg-green-800 text-gray-100 grid outline outline-4 outline-main-colour'>
            <ul className='grid items-center py-4 text-xl'>
              {/* Home */}
              <li
                onClick={toggleNavbar}
                className={
                  activeNav === '/'
                    ? 'px-2 py-4 text-center text-main-colour'
                    : 'px-2 py-4 text-center'
                }
              >
                <Link to='/'>
                  <span>Home</span>
                </Link>
              </li>
              <li
                onClick={toggleNavbar}
                className={
                  activeNav === '/'
                    ? 'px-2 py-4 text-center text-main-colour'
                    : 'px-2 py-4 text-center'
                }
              >
                <Link to='/2'>
                  <span>Home 2</span>
                </Link>
              </li>
              {/* Myecohome */}
              {/* <li
                  onClick={toggleNavbar}
                  className={
                    activeNav === '/myecohome'
                      ? 'px-2 py-4 text-center text-main-colour'
                      : 'px-2 py-4 text-center'
                  }
                >
                  <Link to='/myecohome'>
                    <span>Myecohome</span>
                  </Link>
                </li> */}
              {/* About */}
              <li
                onClick={toggleNavbar}
                className={
                  activeNav === '/about'
                    ? 'px-2 py-4 text-center text-main-colour'
                    : 'px-2 py-4 text-center'
                }
              >
                <Link to='/about-us'>
                  <span>About Us</span>
                </Link>
              </li>
              {/* Funding */}
              <li
                onClick={toggleNavbar}
                className={
                  activeNav === '/funding'
                    ? 'px-2 py-4 text-center text-main-colour'
                    : 'px-2 py-4 text-center'
                }
              >
                <Link to='/funding'>
                  <span>Funding</span>
                </Link>
              </li>
              {/* Goals */}
              <li
                onClick={toggleNavbar}
                className={
                  activeNav === '/our-goals'
                    ? 'px-2 py-4 text-center text-main-colour'
                    : 'px-2 py-4 text-center'
                }
              >
                <Link to='/our-goals'>
                  <span>Goals</span>
                </Link>
              </li>
              {/* Newsletter */}
              <li
                onClick={toggleNavbar}
                className={
                  activeNav === '/newsletter-signup'
                    ? 'px-2 py-4 text-center text-main-colour'
                    : 'px-2 py-4 text-center'
                }
              >
                <Link to='/newsletter-signup'>
                  <span>Newsletter</span>
                </Link>
              </li>
              {/* Contact */}
              <li
                onClick={toggleNavbar}
                className={
                  activeNav === '/contact-us'
                    ? 'px-2 py-4 text-center text-main-colour'
                    : 'px-2 py-4 text-center'
                }
              >
                <Link to='/contact-us'>
                  <span>Contact</span>
                </Link>
              </li>
              {/* Login */}
              <li
                onClick={toggleNavbar}
                className={
                  activeNav === '/login'
                    ? 'px-2 py-4 text-center text-main-colour'
                    : 'px-2 py-4 text-center'
                }
              >
                <Link to='/login'>
                  <span>Login</span>
                </Link>
              </li>
              {/* Sign Up */}
              <li
                onClick={toggleNavbar}
                className={
                  activeNav === '/sign-up'
                    ? 'px-2 py-4 text-center text-main-colour'
                    : 'px-2 py-4 text-center'
                }
              >
                <Link to='/sign-up'>
                  <span>Sign Up</span>
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      )}
    </nav>
  );
}

export default Navbar;
