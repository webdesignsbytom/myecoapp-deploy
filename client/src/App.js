import { Route, Routes } from 'react-router-dom';
// Analytics
import ReactGA from 'react-ga';
// Pages
import AdminPage from './pages/admin/AdminPage';
import DeveloperPage from './pages/developer/DeveloperPage';
import Error404 from './pages/error/Error404';
import HomePage from './pages/home/HomePage';
import NewsletterSignup from './pages/newsletter/NewsletterSignup';
import RegisterPage from './users/register/RegisterPage';
import TestPage from './pages/test/TestPage';
import UserAgreement from './pages/auth/UserAgreement';
import AboutPage from './pages/about/AboutPage';
import GoalsPage from './pages/goals/GoalsPage';
import FundingPage from './pages/funding/FundingPage';
import FundraisingPage from './pages/funding/FundraisingPage';
import ContactUsPage from './pages/contact/ContactUsPage';
import LoginPage from './users/login/LoginPage';
import LotteryHomePage from './pages/lottery/LotteryHomePage';
import MediaMainPage from './pages/media/MediaMainPage';
import GamesMainPage from './pages/games/GamesMainPage';
import GamesMainPage2 from './pages/games/GamesMainPage2';
import PasswordResetPage from './pages/account/PasswordResetPage';
// Myeco Home Pages
import MyHomeMain from './pages/myecohome/MyHomeMain';
import SearchBarEcoHome from './pages/myecohome/SearchBarEcoHome';
// Utils
import {
  AuthenticateUser,
  AuthenticateAdmin,
  AuthenticateDeveloper,
} from './utils/AuthenticateUser';
import AppPageHomePage from './pages/myecohome/AppPageHomePage';
import SketchPadHomePage from './pages/myecohome/SketchPadHomePage';
import NewsPageHomePage from './pages/myecohome/NewsPageHomePage';
import MirrorHomePage from './pages/myecohome/MirrorHomePage';
import HomePage2 from './pages/home/HomePage2';
import AboutUsPage from './pages/about/AboutUsPage';
import TheDailysHomePage from './pages/myecohome/TheDailysHomePage';
import MyecohomeMainPage from './pages/myecohome/MyecohomeMainPage';
import BioClickerMainGamePage from './pages/games/bioClicker/BioClickerMainGamePage';
import EcoCityMainGamePage from './pages/games/ecoCity/EcoCityMainGamePage';
import CustomMyecohomePage from './pages/myecohome/CustomMyecohomePage';
import TimelinePage from './pages/timeline/TimelinePage';
import ContactMyecoappPage from './pages/contact/ContactMyecoappPage';
import EcoEventsMainPage from './pages/ecoEvents/EcoEventsMainPage';
import DonationsPage from './pages/donations/DonationsPage';
import ServicesPage from './pages/services/ServicesPage';
import ProfileMainPage from './pages/account/profile/ProfileMainPage';
import AppsMainPage from './pages/apps/AppsMainPage';

function App() {
  ReactGA.initialize('G-5TSPX20DLD');
  ReactGA.pageview('/');

  return (
    <>
      <Routes>
        <Route path='/' index element={<HomePage />} />
        <Route path='/2' index element={<HomePage2 />} />

        {/* General */}
        <Route path='/about-us' element={<AboutPage />} />
        <Route path='/about-myecoapp' element={<AboutUsPage />} />
        <Route path='/our-goals' element={<GoalsPage />} />
        <Route path='/funding' element={<FundingPage />} />
        <Route path='/funding2' element={<FundraisingPage />} />
        <Route path='/contact-us' element={<ContactMyecoappPage />} />
        <Route path='/media' element={<MediaMainPage />} />
        <Route path='/timeline' element={<TimelinePage />} />
        <Route path='/events' element={<EcoEventsMainPage />} />
        <Route path='/donations' element={<DonationsPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/apps' element={<AppsMainPage />} />

        {/* Games */}
        <Route path='/games-home' element={<GamesMainPage />} />
        <Route path='/games2' element={<GamesMainPage2 />} />
        <Route path='/games/bio-clicker/in-game' element={<BioClickerMainGamePage />} />
        <Route path='/games/eco-city/in-game' element={<EcoCityMainGamePage />} />
        <Route path='/games/petigotchi/in-game' element={<EcoCityMainGamePage />} />

        {/* Myeco Home Pages */}
        <Route path='/myecohome' element={<MyHomeMain />} />
        <Route path='/myecohome2' element={<MyecohomeMainPage />} />
        <Route path='/myecohome/search-home' element={<SearchBarEcoHome />} />
        <Route path='/myecohome/mirror-home' element={<MirrorHomePage />} />
        <Route path='/myecohome/myea-news-home' element={<NewsPageHomePage />} />
        <Route path='/myecohome/sketch-home' element={<SketchPadHomePage />} />
        <Route path='/myecohome/myea-home' element={<AppPageHomePage />} />
        <Route path='/myecohome/the-dailys' element={<TheDailysHomePage />} />
        <Route path='/myecohome/custom' element={<CustomMyecohomePage />} />

        {/* Lottery */}
        <Route path='/lottery-home' element={<LotteryHomePage />} />

        {/* User routes */}
        <Route path='/profile' element={<ProfileMainPage />} />
        <Route path='/newsletter-signup' element={<NewsletterSignup />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<RegisterPage />} />
        <Route path='/reset-password' element={<PasswordResetPage />} />

        {/* Secure routes */}
        <Route
          path='/admin'
          element={
            <AuthenticateAdmin>
              <AdminPage />
            </AuthenticateAdmin>
          }
        />
        <Route
          path='/development'
          element={
            // <AuthenticateDeveloper>
              <DeveloperPage />
            // </AuthenticateDeveloper>
          }
        />

        {/* Util Routes */}
        <Route path='/user-cookie-policy' element={<UserAgreement />} />
        <Route path='/terms-and-conditions' element={<UserAgreement />} />
        <Route path='/test' element={<TestPage />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
