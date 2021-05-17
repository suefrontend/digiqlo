import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ShirtIcon } from '../images/shirt.svg';
import { ReactComponent as SweeperIcon } from '../images/sweeper.svg';
import { ReactComponent as HeartIcon } from '../images/heart.svg';
import { ReactComponent as ChartIcon } from '../images/chart.svg';
import { ReactComponent as HamburgerIcon } from '../images/hamburger-menu.svg';
import { StyledHeaderContainer } from '../styles/Layout';
import { StyledNavbar, StyledNavigation } from '../styles/Nav';
import { StyledBtn } from '../styles/Button';
import logo from '../images/logo.png';

const Navigation = () => {
  return (
    <StyledNavbar>
      <StyledHeaderContainer>
        <p className="logo"><Link to="/"><img src={logo} alt="logo" /></Link></p>

        <label id="menubtn" htmlFor="nav-input"><HamburgerIcon className="hambuger__icon" /></label>
      </StyledHeaderContainer>

        <input id="nav-input" type="checkbox" className="nav-hidden" />
        <StyledNavigation>
          <nav className="nav">
              <ul className="nav__list">
                  <li className="nav__item"><Link to="/closet"><ShirtIcon className="nav__icon" />Closet</Link></li>
                  <li className="nav__item"><Link to="/reports"><ChartIcon className="nav__icon" />Reports</Link></li>
                  <li className="nav__item"><Link to="/organize"><SweeperIcon className="nav__icon"/>Organize</Link></li>
                  <li className="nav__item"><Link to="/wishlist"><HeartIcon className="nav__icon"/>Wishlist</Link></li>
              </ul>
          </nav>

          <StyledBtn className="btn primary"><Link to="/additem">Add Item</Link></StyledBtn>
        </StyledNavigation>

      </StyledNavbar>
  )
}

export default Navigation;
