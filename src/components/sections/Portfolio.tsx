import styled from "styled-components"

const Portfolio = ({ className } : { className ?: string }) => {
  return (
    <section className={className}>
      Portfolio
    </section>
  )
}

const StyledPortfolio = styled(Portfolio)`
  display: flex;
  height: 100%;
`

export default StyledPortfolio