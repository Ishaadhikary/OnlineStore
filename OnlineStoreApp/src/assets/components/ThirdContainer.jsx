import "../css/thirdContainer.css";

export default function ThirdContainer() {
  return (
    <>
      <div className="third-container">
        <h2>Category<hr/></h2>
        <div className="third-container-bottom-item">
        <button className="third-container-items">
          <img src="/logo.svg" alt="Category" />
          Men's Cloths
        </button>
        <button className="third-container-items">
          <img src="/logo.svg" alt="Category" />
          Women's Cloths
        </button>
        <button className="third-container-items">
          <img src="/logo.svg" alt="Category" />
          Jewelery
        </button>
        <button className="third-container-items">
          <img src="/logo.svg" alt="Category" />
          Electronics
        </button>
      </div>
      </div>
    </>
  );
}
