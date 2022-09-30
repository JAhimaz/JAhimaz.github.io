import styled from "styled-components"
import { ReactComponent as GitHub } from '../assets/icons/Github.svg';
import { ReactComponent as LinkedIn } from '../assets/icons/linkedin.svg';
import { ReactComponent as Twitter } from '../assets/icons/twitter.svg';

type NavigationProps = {
    className?: string
    changePage: (page: string) => void
}

const Navigation = ({ className, changePage } : NavigationProps) => {

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
                <div><span onClick={() => changePage("aboutme")}>About Me</span></div>
                <div><span onClick={() => changePage("experience")}>Experience</span></div>
                <div><span onClick={() => changePage("portfolio")}>Portfolio</span></div>
                <div><span onClick={() => changePage("contact")}>Contact</span></div>
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

    .logos {
        -webkit-animation: slideInRight 0.5s forwards;
        -moz-animation: slideInRight 0.5s forwards;
        animation: slideInRight 0.5s forwards;
        display: flex;
        flex-direction: row;
        justify-content: right;
        > * {
            width: 2.5rem;
            margin-left: 1.5rem;
            cursor: pointer;
            transition: 0.2s;
            &:hover {
                transition: 0.2s;
                transform: scale(1.3);
            }
        }
    }

    .navigation-items {

        -webkit-animation: slideInRight 0.5s forwards;
        -moz-animation: slideInRight 0.5s forwards;
        animation: slideInRight 0.5s forwards;

        @-webkit-keyframes slideInRight {
            0% {
              transform: translateX(50vw);
            }
            100% {
              transform: translateX(0);
            }
          }
          @-moz-keyframes slideInRight {
            0% {
              transform: translateX(50vw);
            }
            100% {
              transform: translateX(0);
            }
          }
          @keyframes slideInRight {
            0% {
              transform: translateX(50vw);
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
            text-align: right;

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
                    ::before {
                        content: "_";
                    }

                }
            }
        }
`

export default StyledNavigation