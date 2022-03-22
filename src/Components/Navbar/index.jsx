import React, { useContext } from 'react';
import { Logobar, Main, Menubar, Logo } from './styled';
import logo from '../../Assets/imgs/logo.png';
import { ActiveContext } from '../Context/Context';
export const Navbar = () => {
  const [active, dispatch] = useContext(ActiveContext);
  console.log(active);
  return (
    <Main>
      <Logobar>
        <Logo src={logo} alt={'Logotipe'}></Logo>
        <Logobar.Tytle>Housing</Logobar.Tytle>
      </Logobar>
      <Menubar>
        <Menubar.Menu
          onClick={() => dispatch({ type: 'Home' })}
          className={` ${active === 'Home' && 'active'}`}
        >
          {' '}
          HOME
        </Menubar.Menu>
        <Menubar.Menu
          onClick={() => dispatch({ type: 'Buy' })}
          className={` ${active === 'Buy' && 'active'}`}
        >
          BUY
        </Menubar.Menu>
        <Menubar.Menu
          onClick={() => dispatch({ type: 'Sell' })}
          className={` ${active === 'Sell' && 'active'}`}
        >
          SELL
        </Menubar.Menu>
        <Menubar.Menu
          onClick={() => dispatch({ type: 'Rent' })}
          className={` ${active === 'Rent' && 'active'}`}
        >
          RENT
        </Menubar.Menu>
        <Menubar.Menu
          onClick={() => dispatch({ type: 'Profile' })}
          className={` ${active === 'Profile' && 'active'}`}
        >
          PROFILE
        </Menubar.Menu>
        <Menubar.Menu
          onClick={() => dispatch({ type: 'Registration' })}
          className={` ${active === 'Registration' && 'active'}`}
        >
          LOGIN
        </Menubar.Menu>
      </Menubar>
    </Main>
  );
};
