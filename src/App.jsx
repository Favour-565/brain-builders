import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import ContactUs from "./pages/ContactUs";
import FAQs from "./pages/FAQs";
import Category from "./pages/Category";
import Learn from "./pages/Learn";
import Subscribe from "./pages/Subscribe";
import BuyCoins from "./pages/BuyCoins";
import Levels from "./pages/Levels";
import Profile from "./pages/Profile";
import Question from "./pages/Question";
import TermsAndConditions from "./pages/TermsAndConditions";
import LeaderBoard from "./pages/LeaderBoard";
import AboutUs from "./pages/AboutUs";
import Policy from "./pages/Policy";
import SubCategory from "./pages/SubCategory";
import SignUp from "./pages/SignUp";
import Instruction from "./pages/Instruction";
import Pricing from "./pages/Pricing";
import InviteFriends from "./pages/InviteFriends";
import Instructions from "./pages/Instructions";
import FAQs1 from "./pages/FAQs1";
import ContactUs1 from "./pages/ContactUs1";
import BuyCoin from "./pages/BuyCoin";
import Levels1 from "./pages/Levels1";
import AboutUs1 from "./pages/AboutUs1";
import PaymentMode from "./pages/PaymentMode";
import Category1 from "./pages/Category1";
import Profile1 from "./pages/Profile1";
import LandingPage from "./pages/LandingPage";
import Questions from "./pages/Questions";
import Subcategory1 from "./pages/Subcategory1";
import Register from "./pages/Register";
import TermsAndConditions1 from "./pages/TermsAndConditions1";
import Results from "./pages/Results";
import Policy1 from "./pages/Policy1";
import Leaderboard1 from "./pages/Leaderboard1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/payment":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "";
        metaDescription = "";
        break;
      case "/faqs":
        title = "";
        metaDescription = "";
        break;
      case "/category":
        title = "";
        metaDescription = "";
        break;
      case "/learn":
        title = "";
        metaDescription = "";
        break;
      case "/subscribe":
        title = "";
        metaDescription = "";
        break;
      case "/buy-coins":
        title = "";
        metaDescription = "";
        break;
      case "/levels":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/question":
        title = "";
        metaDescription = "";
        break;
      case "/terms-and-conditions":
        title = "";
        metaDescription = "";
        break;
      case "/leader-board":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/policy":
        title = "";
        metaDescription = "";
        break;
      case "/sub-category":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/instruction":
        title = "";
        metaDescription = "";
        break;
      case "/pricing":
        title = "";
        metaDescription = "";
        break;
      case "/invite-friends":
        title = "";
        metaDescription = "";
        break;
      case "/instructions":
        title = "";
        metaDescription = "";
        break;
      case "/faqs1":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us1":
        title = "";
        metaDescription = "";
        break;
      case "/buy-coin":
        title = "";
        metaDescription = "";
        break;
      case "/levels1":
        title = "";
        metaDescription = "";
        break;
      case "/about-us1":
        title = "";
        metaDescription = "";
        break;
      case "/payment-mode":
        title = "";
        metaDescription = "";
        break;
      case "/category1":
        title = "";
        metaDescription = "";
        break;
      case "/profile1":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/questions":
        title = "";
        metaDescription = "";
        break;
      case "/subcategory":
        title = "";
        metaDescription = "";
        break;
      case "/register":
        title = "";
        metaDescription = "";
        break;
      case "/terms-and-conditions1":
        title = "";
        metaDescription = "";
        break;
      case "/results":
        title = "";
        metaDescription = "";
        break;
      case "/policy1":
        title = "";
        metaDescription = "";
        break;
      case "/leaderboard":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/category" element={<Category />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/subscribe" element={<Subscribe />} />
      <Route path="/buy-coins" element={<BuyCoins />} />
      <Route path="/levels" element={<Levels />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/question" element={<Question />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/leader-board" element={<LeaderBoard />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/sub-category" element={<SubCategory />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/instruction" element={<Instruction />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/invite-friends" element={<InviteFriends />} />
      <Route path="/instructions" element={<Instructions />} />
      <Route path="/faqs1" element={<FAQs1 />} />
      <Route path="/contact-us1" element={<ContactUs1 />} />
      <Route path="/buy-coin" element={<BuyCoin />} />
      <Route path="/levels1" element={<Levels1 />} />
      <Route path="/about-us1" element={<AboutUs1 />} />
      <Route path="/payment-mode" element={<PaymentMode />} />
      <Route path="/category1" element={<Category1 />} />
      <Route path="/profile1" element={<Profile1 />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="/subcategory" element={<Subcategory1 />} />
      <Route path="/register" element={<Register />} />
      <Route path="/terms-and-conditions1" element={<TermsAndConditions1 />} />
      <Route path="/results" element={<Results />} />
      <Route path="/policy1" element={<Policy1 />} />
      <Route path="/leaderboard" element={<Leaderboard1 />} />
    </Routes>
  );
}
export default App;
