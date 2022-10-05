import styled from "styled-components"
import { ReactComponent as GitHub } from '../assets/icons/Github.svg';
import { ReactComponent as LinkedIn } from '../assets/icons/linkedin.svg';
import { ReactComponent as Twitter } from '../assets/icons/twitter.svg';

type NavigationProps = {
    className?: string
    changePage: (page: string) => void
    selectedPage: string
}

const Navigation = ({ className, changePage, selectedPage } : NavigationProps) => {

    const goToSocial = (social : string) => {
      window.open(social, "_blank", "noopener,noreferrer");
    }

    return (
        <div className={"navigation " + className}>
            <section className="logos">
                <GitHub onClick={() => goToSocial("https://github.com/JAhimaz")}/>
                <LinkedIn onClick={() => goToSocial("https://www.linkedin.com/in/joshuaahimaz/")}/>
                <Twitter onClick={() => goToSocial("https://twitter.com/TheCoolerJosh")}/>
            </section>
            <section className="navigation-items">
                <div><span onClick={() => changePage("aboutme")} className={selectedPage === "aboutme" ? "selected" : ""}>About Me</span></div>
                <div><span onClick={() => changePage("experience")} className={selectedPage === "experience" ? "selected" : ""}>Experience</span></div>
                <div><span onClick={() => changePage("portfolio")} className={selectedPage === "portfolio" ? "selected" : ""}>Portfolio</span></div>
                {/* <div><span onClick={() => changePage("contact")} className={selectedPage === "contact" ? "selected" : ""}>Contact</span></div> */}
            </section>
        </div>
    )
}

const StyledNavigation = styled(Navigation)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem;
    width: 50%;

    .selected {
      -webkit-text-stroke-color: #c488ff !important;
      :hover {
        color: #c488ff !important;
      }
    }

    .logos {
        -webkit-animation: slideInRight 0.5s forwards;
        -moz-animation: slideInRight 0.5s forwards;
        animation: slideInRight 0.5s forwards;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        > * {
            width: 2.5rem;
            margin-left: 1.5rem;
            cursor: pointer;
            transition: 0.2s;
            &:hover {
                transition: 0.2s;
                transform: scale(1.3);
                > *:first-child {
                  fill: #c488ff;
                }    
            }
        }
    }

    .navigation-items {

        -webkit-animation: slideInRight 0.5s forwards;
        -moz-animation: slideInRight 0.5s forwards;
        animation: slideInRight 0.5s forwards;

        @-webkit-keyframes slideInRight {
            0% {
              transform: translateX(-50vw);
            }
            100% {
              transform: translateX(0);
            }
          }
          @-moz-keyframes slideInRight {
            0% {
              transform: translateX(-50vw);
            }
            100% {
              transform: translateX(0);
            }
          }
          @keyframes slideInRight {
            0% {
              transform: translateX(-50vw);
            }
            100% {
              transform: translateX(0);
            }
          }



        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 80%;
        > * {
            color: white;
            font-size: 5vw;
            text-transform: uppercase;
            text-align: left;

            > span {
                cursor: pointer;
                color: transparent;
                transition: font-size 0.3s;
                -webkit-text-stroke-width: 1px;
                -webkit-text-stroke-color: white;

                &:hover {
                    color: white;
                    font-size: 7.5vw;
                    transition: font-size 0.3s;
                    ::after {
                        content: "_";
                    }

                }
            }
        }
`

export default StyledNavigation