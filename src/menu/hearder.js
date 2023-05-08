import "./header.css";

function Menu() {
  return (
    <>
      <header>
        <ul>
          <li>
            <a href="#">outer</a>
          </li>
          <li>
            <a href="#">Top</a>
          </li>
          <li>
            <a href="#">Skirt</a>
          </li>
          <li>
            <a href="#">Paint</a>
          </li>
          <li>
            <a href="#">Accessories</a>
          </li>
        </ul>
        <div className="image-logo">
          <img
            src="https://1000logos.net/wp-content/uploads/2022/08/Myntra-Logo.png"
            alt="myntra logo"
          />
        </div>
        <div className="container">
          <div className="search-box">
            <input type="text" placeholder="Search" name="q" />
            <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="cart">
            <i className="fa-solid fa-cart-shopping"></i>{" "}
          </div>
          <div className="user">
            <button>
              <i className="fa-solid fa-user"></i> Sign in{" "}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
export default Menu;
