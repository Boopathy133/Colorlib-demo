import './App.css';
import BreadCrums from './Components/BreadCrums/BreadCrums';
import CapitalShop from './Components/CapitalShop/CapitalShop';
import FindMore from './Components/FindMore/FindMore';
import Navbar from './Components/Navbar/Navbar';
import PricingCapitalShop from './Components/PricingcapitalShop/PricingCapitalShop';
import ShareButton from './Components/ShareButtons/ShareButton';
import SocialMediaIcon from './Components/SocialMedia/SocialMediaIcon';
import TemplateDetails from './Components/TemplateDetails/TemplateDetails';

function App() {
  return (
    <div className="App">
      <SocialMediaIcon />
      <Navbar />
      <BreadCrums />
      <CapitalShop />
      <TemplateDetails />
      <PricingCapitalShop />
      <ShareButton />
      <FindMore/>
    </div>
  );
}

export default App;
