import { useState } from "react";
import { menuData } from "./data/menuData";
function App() {
  const [openCategory, setOpenCategory] = useState(null);
const [search, setSearch] = useState("");

  const handleToggle = (category) => {
    setOpenCategory(
      openCategory === category ? null : category
    );
  };
  const isSearching = search.trim() !== "";

  return (
    <div className="container">
     <div className="restaurant-header">
        <img
          src="/restaurant-banner.jpg"
          alt="Komali's Kitchen"
          className="restaurant-logo"
        />

        <div className="restaurant-details">
          <h1>Komali's Kitchen</h1>

          <p>Multi Cuisine Restaurant</p>

          <div className="restaurant-info">
            <span>⭐ 4.5 Rating</span>
            <span>🕒 7 AM - 11 PM</span>
          </div>
        </div>
      </div>
     {menuData.map((category) => {

        const filteredItems = category.items.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        );

        if (isSearching && filteredItems.length === 0) {
          return null;
        }

        return (
          <div key={category.category}>

            <div
              className="category-card"
              onClick={() => handleToggle(category.category)}
            >
              <div>
                  <div>
                    {category.icon} {category.category}
                  </div>

                  <small>
                    {category.items.length} items
                  </small>
                </div>

              <span>
                {openCategory === category.category ? "▲" : "▼"}
              </span>
            </div>

            {(openCategory === category.category || isSearching) && (
              <div className="items-container">

                {filteredItems.map((item) => (
                 <div className="item-row" key={item.name}>
                      <div>
                        <div className="item-name">
                          {item.type === "veg" ? "🟢" : "🔴"} {item.name}
                        </div>

                       {/*  <div className="item-desc">
                          Freshly prepared
                        </div> */}
                      </div>

                      <div className="item-price">
                        ₹{item.price}
                      </div>
                    </div>
                ))}

              </div>
            )}

          </div>
        );
})}
    </div>
  );
}

export default App;