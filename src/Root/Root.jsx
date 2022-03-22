import React, { useContext } from 'react';
import { Buy } from '../Components/Body/Buy/index';
import { Sell } from '../Components/Body/Sell/index';
import { Home } from '../Components/Body/Home/index';
import { Rent } from '../Components/Body/Rent/index';
import { Profile } from '../Components/Body/Profile/index';
import { Footer } from '../Components/Body/Footer/index';
import { Registration } from '../Components/RnS/Registration';
import { Navbar } from '../Components/Navbar/index';
import { Header } from './styled';
import { ActiveContext } from '../Components/Context/Context';
export const Root = () => {
  const [active, dispatch] = useContext(ActiveContext);
  return (
    <div>
      <Header>
        <Navbar />
        {active === 'Home' && <Home />}
        {active === 'Buy' && <Buy />}
        {active === 'Sell' && <Sell />}
        {active === 'Rent' && <Rent />}
        {active === 'Profile' && <Profile />}
        {active === 'Registration' && <Registration />}
      </Header>
      <Footer />
    </div>
  );
};
