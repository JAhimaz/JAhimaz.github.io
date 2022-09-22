import styled from "styled-components"

const Contact = ({ className } : { className ?: string }) => {
  return (
    <section className={className}>
      Contact
    </section>
  )
}

const StyledContact = styled(Contact)`
  display: flex;
  height: 100%;
`

export default StyledContact