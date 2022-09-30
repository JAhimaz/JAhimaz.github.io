import styled from "styled-components"
import { education } from "../../libs/data"

type educationType = {
  degree: string,
  school: string,
  yearStart: number,
  yearEnd: number,
  logo?: string,
}

const About = ({ className } : { className ?: string }) => {

  return (
    <section className={className}>
      <span>Welcome, I am 👋🧑🏾‍💻</span>
      <h2>Joshua Daveston Ahimaz</h2>

      <p>
        I am a software engineer based in Kuala Lumpur, Malaysia. My love for programming started at the age of 12, and my passion for building
        elements that would help people has lead me down the path of studying Computer Science.
      </p>

      <p>
        Some of my achievements that I'd love to share are:
        <ul>
          <li><b>Founding Survival Asia Minecraft Community</b> - Once Asia's 2nd Biggest Minecraft Server with over 50,000 Unique players and 500+ Active daily users.</li>
          <li><b>Hosting my own Charity Event</b> - Raised over RM1000 through a Gaming Event for a Cat Shelter at the peak of Covid 19</li>
          <li><b>Becoming a Speaker</b> - Helping students get jobs in the tech industry and introducing them to the powers of Blockchain technology.</li>
          <li><b>Being a Mentor @ my University</b> - Helping students with their projects and guiding them through their studies.</li>
          <li><b>Diving into the world of Cryptocurrency</b> - Going from passion to profession in blockchain technology and development.</li>
          <li><b>Furthering My Studies</b> - Taking my education to the next level by pursuing my Masters Degree</li>
        </ul>
      </p>

      <div className="education">
        {
          education.map((education: educationType, index: number) => {
            return (
              <div className="education-item" key={index}>
                <span>{education.degree}</span>
                <span>{education.school}</span>
                <span>{education.yearStart} - {education.yearEnd}</span>
                <img src={education.logo} alt={education.school} />
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

const StyledAbout = styled(About)`
  display: flex;
  flex-direction: column;
  height: 100%;

  overflow-y: auto;

  padding: 4rem;

  color: white;
  font-size: 2rem;

  @media (max-width: 768px) {
    text-align: center;
  }

  span, h2 {
    @media (max-width: 768px) {
      text-align: center;
    }
  }

  b {
    color: #c488ff;
  }

  h2 {
    margin: 0;
    color: #c488ff;
  }

  p {
    font-size: 1.2rem;
    font-weight: 300;
    text-align: justify;

    @media (max-width: 768px) {
      text-align: left;
    }

  }

  .education {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;

    @media (max-width: 768px) {
      overflow: visible;
      margin-bottom: 4em;
    }

    > * {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      overflow: hidden;

      margin: 0.3rem 0;

      > :first-child {
        flex: 2;
      }

      > :nth-child(2) {
        flex: 2;
      }

      > :last-child {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        flex: 1;
      }

      img {
        position: absolute;
        z-index: 0;
        opacity: 0.05;
        top: -50%;
        right: 0;
        height: 200%;

      }

      background-color: #1a1a1a;
      // margin: 0.25rem 0;
      border-radius: 0.5rem;
      border: 1px solid #2a2a2a;
      padding: 1rem;
      color: white;
      font-size: 1rem;
    }
  }
`

export default StyledAbout