import React from 'react';
import { ReactComponent as ShirtIcon } from '../images/shirt.svg';
import { ReactComponent as SweeperIcon } from '../images/sweeper.svg';
import { ReactComponent as HeartIcon } from '../images/heart.svg';
import { ReactComponent as ChartIcon } from '../images/chart.svg';
import { ReactComponent as HamburgerIcon } from '../images/hamburger-menu.svg';
import { StyledHeaderContainer } from '../styles/Layout';
import { StyledNavbar, StyledNavigation } from '../styles/Nav';
import { StyledBtn } from './Button';
import logo from '../images/logo.png';

const Navigation = () => {
  return (
    <StyledNavbar>
      <StyledHeaderContainer>
        <p className="logo"><a href="#"><img src={logo} alt="logo" /></a></p>

        <label id="menubtn" for="nav-input"><HamburgerIcon className="hambuger__icon" /></label>
      </StyledHeaderContainer>

        <input id="nav-input" type="checkbox" class="nav-hidden" />
        <StyledNavigation>
          <nav className="nav">
              <ul className="nav__list">
                  <li className="nav__item"><a href="#"><ShirtIcon className="nav__icon" />Closet</a></li>
                  <li className="nav__item"><a href="#"><ChartIcon className="nav__icon" />Reports</a></li>
                  <li className="nav__item"><a href="#"><SweeperIcon className="nav__icon"/>Organize</a></li>
                  <li className="nav__item"><a href="#"><HeartIcon className="nav__icon"/>Wishlist</a></li>
              </ul>
          </nav>

          <StyledBtn className="btn"><a href="#">Add Item</a></StyledBtn>
        </StyledNavigation>

      </StyledNavbar>
  )
}

export default Navigation;
