import { useState } from "react";
import styled from "styled-components"
import { ReactComponent as GitHub } from '../assets/icons/Github.svg';
import { ReactComponent as LinkedIn } from '../assets/icons/linkedin.svg';
import { ReactComponent as Twitter } from '../assets/icons/twitter.svg';

import { ReactComponent as ChevronUp } from '../assets/chevron-double-up.svg';
import { ReactComponent as ChevronDown } from '../assets/chevron-double-down.svg';

type NavigationMobileProps = {
    className?: string
    changePage: (page: string) => void
}

const NavigationMobile = ({ className, changePage } : NavigationMobileProps) => {

    const [isActive, setIsActive] = useState<boolean>(false);

    const goToSocial = (social : string) => {
      window.open(social, "_blank", "noopener,noreferrer");
    }

    const toggleMenu = () => {
      isActive ? setIsActive(false) : setIsActive(true);
    }

    const navigate = (page : string) => {
      setIsActive(false);
      changePage(page)
    }

    return (
        <div className={"navigation-mobile " + className}>
            { isActive ? 
              <div className="panel">
                        <div><span onClick={() => navigate("aboutme")}>About Me</span></div>
                        <div><span onClick={() => navigate("experience")}>Experience</span></div>
                        <div><span onClick={() => navigate("portfolio")}>Portfolio</span></div>
                        <div><span onClick={() => navigate("contact")}>Contact</span></div>
                                    
                        <section className="logos">
                            <GitHub onClick={() => goToSocial("https://github.com/JAhimaz")}/>
                            <LinkedIn onClick={() => goToSocial("https://www.linkedin.com/in/joshuaahimaz/")}/>
                            <Twitter onClick={() => goToSocial("https://twitter.com/TheCoolerJosh")}/>
                        </section>
              </div> :
              null
            }
            <button className="accordion" onClick={() => toggleMenu()}>
              { isActive ? <ChevronUp /> : <ChevronDown /> }
            </button>




        </div>
    )
}


const StyledNavigationMobile = styled(NavigationMobile)`
    width: 100%;
    .accordion {
        background-color: #131313;
        color: #444;
        cursor: pointer;
        padding: 18px;
        width: 100%;
        border: none;
        text-align: left;
        outline: none;  
        height: 5vh;
        display: flex;
        justify-content: center;
        align-items: center;

        > * {
            height: 3vh;
            width: 3vh;
        }
    }

    .active, .accordion:hover {
        background-color: #181818;
    }

    .panel {
        padding: 0 18px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #131313;
        padding: 2em 0;

        > div {
            font-size: 5vh;
            margin-top: 0.5em;
            color: white;
            text-transform: uppercase;
            cursor: pointer;
            color: transparent;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: white;

            &:hover {
              color: white;
              ::before {
                  content: "_";
              }

          }
        }
    }

    .logos {
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      margin-top: 2em;
      > * {
          height: 5vh;
          width: 5vh;
          margin: 0 1rem;
          transition: 0.2s;
          &:hover {
            cursor: pointer;
            transition: 0.2s;
            transform: scale(1.3);
      }
    }



      


`

export default StyledNavigationMobile
