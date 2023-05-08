import "./myntra.css";
import "./untils.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCoffee,
  faHeart,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Myntra() {
  return (
    <>
      <header className="container">
        <nav className="flex space-between">
          <div className="left flex items-center">
            <img src="https://images.indianexpress.com/2021/01/myntra.png" />
          </div>
          <div className="menu-bar">
            <ul className="flex items-center justify-center ">
              <li className="a">
                MEN
                <div className="main-list">
                  <div>
                    <div className="list1">
                      <h1>Topwear</h1>
                      <ul>
                        <li>T-shirt</li>
                        <li>Casual Shirt</li>
                        <li>Formal Shirt</li>
                        <li>Sweatshirts</li>
                        <li>Sweaters</li>
                        <li>Jacket</li>
                        <li>Blazers & Coats</li>
                        <li>Suits</li>
                        <li>Rain Jacket</li>
                      </ul>
                    </div>
                    <div className="list1">
                      <h1>Indian $ festive wear</h1>
                      <ul>
                        <li>Kurtas & Kurta set</li>
                        <li>Sherwanis</li>
                        <li>Nehru jacket</li>
                        <li>Dhotis</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="list1">
                      <h1>Bottomwear</h1>
                      <ul>
                        <li>Jeans</li>
                        <li>Casual Trousers</li>
                        <li>Formal Trousers</li>
                        <li>Shorts</li>
                        <li>Track paint & Joggers</li>
                      </ul>
                    </div>
                    <div className="list1">
                      <h1>Innerwear & Sleeper</h1>
                      <ul>
                        <li>Briefs & Trunks</li>
                        <li>Boxer</li>
                        <li>Vest</li>
                        <li>Sleepwear & Loungewear</li>
                      </ul>
                    </div>
                    <div>
                      <h1>Plus Size</h1>
                    </div>
                  </div>
                  <div>
                    <div className="list1">
                      <h1>Footwear</h1>
                      <ul>
                        <li>Casual shoes</li>
                        <li>Sport shoes</li>
                        <li>Formal Shoes</li>
                        <li>Sneaker</li>
                        <li>Sandels & Floaters</li>
                        <li>Flip Flop</li>
                        <li>Socks</li>
                      </ul>
                    </div>
                    <div className="list1">
                      <h2>Indian $ Festive wear</h2>
                      <ul>
                        <li>Kurtas & Kurta set</li>
                        <li>Sherwanis</li>
                        <li>Nehru jacket</li>
                        <li>Dhotis</li>
                      </ul>
                    </div>
                    <div>
                      <h1>Persional care & Grooming</h1>
                    </div>
                    <div>
                      <h1>Sunglasses frame</h1>
                    </div>
                    <div>
                      <h1>Watches</h1>
                    </div>
                  </div>
                  <div>
                    <div className="list1">
                      <h1>Sports & Active wear</h1>
                      <ul>
                        <li>Sports Shoes</li>
                        <li>Sports Sandals</li>
                        <li>Active T-shirts</li>
                        <li>Track pants & Shorts</li>
                        <li>Tracksuits</li>
                        <li>Jackets & Sweatshirts</li>
                        <li>Sports Accessories</li>
                        <li>Swimwear</li>
                      </ul>
                    </div>
                    <div className="list1">
                      <h1>Gadgets</h1>
                      <ul>
                        <li>Smart Wearables</li>
                        <li>Fitness Gadgets</li>
                        <li>Headphones</li>
                        <li>Speakers</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="list1">
                      <h1>Fashion Accessories</h1>
                      <ul>
                        <li>Wallets</li>
                        <li>Belts</li>
                        <li>Perfume &Body Mists</li>
                        <li>Trimmer</li>
                        <li>Deodorants</li>
                        <li>Ties,Cufflinks & Pocket Squares</li>
                        <li>Accessory Gift Sets</li>
                        <li>Caps & Hats</li>
                        <li>Mufflers,Sarves & Glove</li>
                        <li>Phone Cases</li>
                        <li>Rings & Wristwear</li>
                        <li>Hemlets</li>
                      </ul>
                    </div>
                    <div>
                      <h1>Bags & Backpack</h1>
                    </div>
                    <div>
                      <h1>Laggages & Trolley</h1>
                    </div>
                  </div>
                </div>
              </li>
              <li className="b">WOMEN</li>
              <div>
              <div className="list1">
                <h1>Fashion Accessories</h1>
                <ul>
                  <li>Wallets</li>
                  <li>Belts</li>
                  <li>Perfume &Body Mists</li>
                  <li>Trimmer</li>
                  <li>Deodorants</li>
                  <li>Ties,Cufflinks & Pocket Squares</li>
                  <li>Accessory Gift Sets</li>
                  <li>Caps & Hats</li>
                  <li>Mufflers,Sarves & Glove</li>
                  <li>Phone Cases</li>
                  <li>Rings & Wristwear</li>
                  <li>Hemlets</li>
                </ul>
              </div>
              <li className="c">KIDS</li>
              <li className="d">HOME & LIVING</li>
              <li className="e">BEAUTY</li>
              <li className="f">STUDIO</li>
            </ul>
          </div>
              </div>
              
          
        

          <div className="search-box">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
            <input
              className="search desktop-searchbar"
              placeholder="Search for products,brands and more"
              value=""
              data-reactid="904"
            />
          </div>
          <div className="icons">
            <div className="profile mx-2">
              {" "}
              <FontAwesomeIcon icon={faUser} />
              <b>Profile</b>
            </div>
            <div className="wishlist mx-2">
              <FontAwesomeIcon icon={faHeart} />
              <b> Wishlist</b>{" "}
            </div>
            <div className="bag mx-2">
              <FontAwesomeIcon icon={faBagShopping} />
              <b> Bag</b>
            </div>
          </div>
        </nav>
      </header>
      <section className="section1">
        The European languages are members of the same family. Their separate
        existence is a myth. For science, music, sport, etc, Europe uses the
        same vocabulary. The languages only differ in their grammar, their
        pronunciation and their most common words. Everyone realizes why a new
        common language would be desirable: one could refuse to pay expensive
        translators. To achieve this, it would be necessary to have uniform
        grammar, pronunciation and more common words. If several languages
        coalesce, the grammar of the resulting language is more simple and
        regular than that of the individual languages. The new common language
        will be more simple and regular than the existing European languages. It
        will be as simple as Occidental; in fact, it will be Occidental. To an
        English person, it will seem like simplified English, as a skeptical
        Cambridge friend of mine told me what Occidental is.The European
        languages are members of the same family. Their separate existence is a
        myth. For science, music, sport, etc, Europe uses the same vocabulary.
        The languages only differ in their grammar, their pronunciation and
        their most common words. Everyone realizes why a new common language
        would be desirable: one could refuse to pay expensive translators. To
      </section>
    </>
  );
}
export default Myntra;
