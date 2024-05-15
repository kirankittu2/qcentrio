import Button from "./ui/global/button";
import NavBarContainer from "./ui/global/nav-bar-container";

export default async function NotFound() {
  return (
    <div className="not-found">
      <div className="hero">
        <NavBarContainer />
      </div>
      <div className="not-found-content">
        <h1>404</h1>
        <p>UH OH, WE CAN'T FIND THAT PAGE...</p>
        <a href="/">
          <Button name="Home Page" />
        </a>
      </div>
      <div className="not-found-footer"></div>
    </div>
  );
}
