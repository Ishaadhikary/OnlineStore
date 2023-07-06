import "../css/secondContainer.css";
export default function SecondContainer() {
  return (
    <>
      <div className="second-container" >
        <div className="second-container-text">
          <h1>LET’S EXPLORE</h1> <h1 className="second-container-center-text">UNIQUE</h1><h1> CLOTHES.</h1>
          <div className="second-container-bottom-text"> <img src="/secondContainerVector.svg" alt="" /><button className="seconde-container-button">Shop Now</button></div>
        </div>
        <div className="second-container-img">
          <img src="/secondContainerImg.svg" alt="Girl Dancing" />
        </div>
      </div>
    </>
  );
}
