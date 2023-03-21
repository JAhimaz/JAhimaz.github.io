import styled from "styled-components"

const Loading = ({ className } : { className?: string} ) => (
    <div className={className}>
      <span className="bg-text">JOSHUA<br/>LOADING<br/>AHIMAZ</span>
      <Spinner className="spinner" />
    </div>
)

const StyledLoading = styled(Loading)`
  background-color: #1B1B1B;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .bg-text {
    position: absolute;
    top: -50px;
    left: 0;
    font-size: 48vh;
    line-height: 0.8;

    height: 100vh;
    width: 100vw;
    overflow: hidden;

    z-index: 1;
    color: #191919;

    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */

  }

  .spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const SpinnerComponent = ({ className } : { className?: string} ) => (
  <div className={className}>
    <div></div><div></div><div></div><div></div>
  </div>
)

const Spinner = styled(SpinnerComponent)`
  
  display: inline-block;
  position: relative;
  width: 100px;
  height: 100px;

  z-index: 100;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #c488ff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #c488ff transparent transparent transparent;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

`



export default StyledLoading

