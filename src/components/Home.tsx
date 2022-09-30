import { useState } from "react";
import styled from "styled-components"
import Navigation from './Navigation';
import NavigationMobile from './Navigation-Mobile';

import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Portfolio from "./sections/Portfolio";

type HomeProps = {
  className?: string
}

const Home = ({ className } : HomeProps) => { 

  const [page, setPage] = useState<string>("about");

  const changePage = (page : string) => {
    setPage(page);
  }

  return (
    <div className={className}>
      <span className="bg-text">JOSHUA<br/>{page.toUpperCase()}<br/>AHIMAZ</span>
      <span className="pages">
        {
          page === "aboutme" ? <About /> :
          page === "experience" ? <Experience /> :
          page === "portfolio" ? <Portfolio /> :
          page === "contact" ? <Contact /> :
          <About />
        }
      </span>
      <NavigationMobile changePage={(page : string) => changePage(page)} />
      <Navigation changePage={(page : string) => changePage(page)} />
    </div>
  )
}

const StyledHome = styled(Home)`

  .navigation-mobile {
    display: none;

    @media (max-width: 768px) {
      position: fixed;
      display: block;
    }
  }

  @media (max-width: 768px) {
    .navigation {
      display: none;
    }

  }

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  position: relative;

  height: 100vh;
  width: 100vw;

  overflow: hidden;
  
  z-index: 0;

  background-color: #1B1B1B;

  .bg-text {
    position: absolute;
    top: -50px;
    left: 0;
    font-size: 48vh;
    line-height: 0.8;

    z-index: 1;
    color: #191919;

    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */

  }

  > * {
    position: relative;
    z-index: 2;
  }

  .pages {
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
    }

    > section {

      -webkit-animation: slideIn 0.5s forwards;
      -moz-animation: slideIn 0.5s forwards;
      animation: slideIn 0.5s forwards;

      @media (max-width: 768px) {
        -webkit-animation: slideDown 0.5s forwards;
        -moz-animation: slideDown 0.5s forwards;
        animation: slideDown 0.5s forwards;
      }
  
    }
  }

  @-webkit-keyframes slideIn {
    0% {
      transform: translateX(-50vw);
    }
    100% {
      transform: translateX(0);
    }
  }
  @-moz-keyframes slideIn {
    0% {
      transform: translateX(-50vw);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes slideIn {
    0% {
      transform: translateX(-50vw);
    }
    100% {
      transform: translateX(0);
    }
  }

  @-webkit-keyframes slideDown {
    0% {
      transform: translateY(50vw);
    }
    100% {
      transform: translateY(0);
    }
  }
  @-moz-keyframes slideDown {
    0% {
      transform: translateY(50vw);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes slideDown {
    0% {
      transform: translateY(50vw);
    }
    100% {
      transform: translateY(0);
    }
  }

  

  h2 {
    margin: 0 0 2rem 0;
  }
`

export default StyledHome
