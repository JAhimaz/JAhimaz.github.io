import styled from "styled-components"
import { Experience as ExperienceType } from "../../libs/types"

type Job = {
  company: string,
  role: string,
  description: string,
  logo: string,
  startDate: string,
  endDate: string,
  tags: string[],
  url: string
}

const Experience = ({ className, experiences } : { className ?: string, experiences: ExperienceType[] }) => {

  const goToPage = (url : string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section className={className}>
      {/* a mapped grid of jobs in a 4 x 4 cards with a logo title and description of the company and the role */}
      <div className="job-container">
        {
          experiences.map((job: Job, i: number) => {
            return (
              <div className="job-card" key={i} onClick={() => goToPage(job.url) }>
                {/* make the image have a background but its the image enlarged and blurred */}
                <div className="job-logo">
                  <img src={job.logo} alt="" width={100} />
                  <img src={job.logo} alt="" className="logo-bg" />
                </div>
                <div className="job-title">
                  <span>{job.startDate} to {job.endDate}</span>
                  <h3>{job.company}</h3>
                  <h4>{job.role}</h4>
                </div>
                <div className="job-description">
                  <p>{job.description}</p>
                </div>
                <div className="job-tags">
                  {
                    job.tags.map((tag, i) => {
                      return (
                        <span key={i}>{tag}</span>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

const StyledExperience = styled(Experience)`
  display: flex;
  height: 92%;

  padding: 2rem 2rem;



  // mobile optimised grid layout 3x3 on desktop, 2x2 on medium and 1x1 on mobile
  .job-container {

    overflow-y: auto;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    padding: 1rem 0;


    ::-webkit-scrollbar {
      display: none;
    }

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 1rem;

    @media only screen and (max-width: 1440px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }

    @media only screen and (max-width: 1024px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }
  }

  .job-card {
    display: flex;
    flex-direction: column;
    // align-items: center;
    position: relative;

    transition: transform 0.2s ease-in-out;
    cursor: pointer;
    
    :hover {
      transform: translateY(-0.5rem);
      z-index: 3;
      transition: transform 0.2s ease-in-out;
      border: 1px solid #e8e8e8;
    }


    background-color: #212020;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    border: 1px solid #1b1b1b;
    color: #fff;

    .job-logo {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100px;
      background-color: transparent;
      border-radius: 0.5rem 0.5rem 0 0;
      overflow: hidden;
      margin-bottom: 1rem;

      position: relative;

      // image but not including .logo-bg
      img {
        max-width: 600px;
        min-width: 200px;
        height: 60px;
        object-fit: contain;
        filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.5));
      }

      .logo-bg {
        position: absolute;
        top: -20%;
        width: 150%;
        height: 150%;
        object-fit: cover;
        filter: blur(30px);
        opacity: 0.4;
      }
    }

    .job-title {
      display: flex;
      flex-direction: column;
      align-items: left;
      
      padding: 0 1rem;

      > span {
        font-size: 0.8rem;
        color: #a0a0a0;
        font-style: italic;
      }

      h3 {
        font-size: 1.5rem;
        font-weight: 500;
        margin: 0.5rem 0;
        font-weight: 700;
      }

      h4 {
        font-size: 0.9rem;
        font-weight: 400;
        margin: 0.5rem 0;
        font-weight: 300;
      }
      
    }

    .job-description {

      margin: 0;
      padding: 0 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 1rem;

      p {
        font-size: 1rem;
        font-weight: 300;
        text-align: left;
        margin: 0;
      }
    } 

    .job-tags {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      margin: 0;
      padding: 0 1rem;
      margin-bottom: 1rem;

      span {
        font-size: 0.75rem;
        font-weight: 300;
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        background-color: #1b1b1b;

        :hover {
          background-color: #2b2b2b;
        }
      }
    }
`

export default StyledExperience
