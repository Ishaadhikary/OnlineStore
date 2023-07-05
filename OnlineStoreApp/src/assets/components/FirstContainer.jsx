// Nav Bar Container
import { AiOutlineSearch } from "react-icons/ai";
import "../css/firstContainer.css";

export default function FirstContainer() {
  return (
    <>
      <div class="first-container">
        <img src="/logo.svg" alt="" />
        <span className="first-container-second-item">
            <a href="#" >Products</a>
            <a href="#">Categories</a>
            <a href="#">What's New</a>
          </span>
          <span class="first-container-third-item">
            <input type="text" name="search" id="search" placeholder="Search" />{" "}
            <AiOutlineSearch />
          </span>

      </div>
    </>
  );
}
