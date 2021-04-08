import styled from 'styled-components';


export const StyledNavbar= styled.div`

  //width: 180px;
  //padding: 30px 40px;
  box-shadow: 0px 8px 10px rgba(0,0,0,0.1);
  position: sticky;

  p {
    margin: 0;
    padding: 0;
  }

  .logo {
    margin-bottom: 0px;
  }

  .logo img {
    width: 180px;
  }
  .hambuger__icon {
    display: none;
  }
  .nav-hidden {
    display: none;
  }

  @media only screen and (max-width:1023px) {

    width: 100%;
    padding: 0;
    box-shadow: none;
    box-sizing: border-box;
    position: relative;
    z-index: 10;

    .logo {
      margin-bottom: 0;
    }
    .hambuger__icon {
      display: block;
      cursor: pointer;
    }

    #nav-input:checked ~ div {
      display: block;
      transform: translate(0, 0);
      opacity: 1;
    }
  }

`;
export const StyledNavigation= styled.div`

  ul {
    list-style-type: none;
    padding: 0;

  }
  li {
    margin: 0;
    padding: 0;
  }
  .nav__item a {
    text-decoration: none;
    color: currentColor;
    display: flex;
    align-items: center;
    padding: 20px 30px;
  }
  .nav__item a:hover {
    background: #eeeeee;
  }
  svg.nav__icon {
    width: 25px;
    height: auto;
    margin-right: 20px;
  }
  svg.nav__icon g {
    fill: currentColor;
    opacity: 0.6;
  }
  .btn {
    margin: 30px;
  }

  @media only screen and (max-width:1023px) {

    position: absolute;
    top: 100;
    transform: translate(0, -100%);
    transition: .5s;
    background: #fff;
    width: 100%;
    padding: 0 30px 30px;
    box-sizing: border-box;
    opacity: 0;

    a {
      justify-content: center;
      font-weight: bold;
      font-size: 120%;
    }
    a:hover {
      opacity: 0.7;
      background: #fff;
    }
    svg.nav__icon {
      display: none;
    }
    li {
      margin: 0 0 30px 0;
    }
  }
`;
