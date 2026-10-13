import React, { useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Glow Radiance Serum",
    category: "Serum",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    description:
      "Një serum i lehtë me vitaminë C që ndihmon lëkurën të duket më e ndritshme, e freskët dhe me shkëlqim natyral.",
    ingredients: "Vitamin C, Hyaluronic Acid, Aloe Vera",
  },
  {
    id: 2,
    name: "Pure Balance Cleanser",
    category: "Cleanser",
    price: 18.5,
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80",
    description:
      "Pastrues i butë për përdorim të përditshëm që largon papastërtitë pa e tharë lëkurën.",
    ingredients: "Aloe Vera, Green Tea, Glycerin",
  },
  {
    id: 3,
    name: "Hydra Calm Cream",
    category: "Moisturizer",
    price: 27.99,
    image:
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=800&q=80",
    description:
      "Krem hidratues për një ndjesi të butë dhe të rehatshme gjatë gjithë ditës.",
    ingredients: "Shea Butter, Ceramides, Hyaluronic Acid",
  },
  {
    id: 4,
    name: "Botanical Face Oil",
    category: "Face Oil",
    price: 22.0,
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80",
    description:
      "Vaj fytyre me përbërës botanikë për një pamje të ushqyer dhe të shkëlqyeshme.",
    ingredients: "Jojoba Oil, Rosehip Oil, Vitamin E",
  },
  {
    id: 5,
    name: "Green Tea Eye Cream",
    category: "Eye Care",
    price: 21.99,
    image:
      "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?auto=format&fit=crop&w=800&q=80",
    description:
      "Krem i lehtë për zonën rreth syve me ekstrakt të çajit të gjelbër.",
    ingredients: "Green Tea, Caffeine, Vitamin E",
  },
  {
    id: 6,
    name: "Soft Skin Toner",
    category: "Toner",
    price: 16.99,
    image:
      "https://images.unsplash.com/photo-1600428853876-fb5a850b444f?auto=format&fit=crop&w=800&q=80",
    description:
      "Toner freskues që përgatit lëkurën për hapat e tjerë të rutinës.",
    ingredients: "Rose Water, Niacinamide, Aloe Vera",
  },
  {
    id: 7,
    name: "Clay Detox Mask",
    category: "Face Mask",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80",
    description:
      "Maskë me argjilë për një ndjesi të pastër dhe të freskët.",
    ingredients: "Kaolin Clay, Green Tea, Zinc",
  },
  {
    id: 8,
    name: "Daily SPF 50",
    category: "Sunscreen",
    price: 25.99,
    image:
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=800&q=80",
    description:
      "Krem i përditshëm me SPF 50 për mbrojtje nga rrezet UV.",
    ingredients: "SPF 50, Vitamin E, Aloe Vera",
  },
  {
    id: 9,
    name: "Rose Petal Mist",
    category: "Face Mist",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
    description:
      "Mist freskues me aromë delikate trëndafili për një ndjesi të freskët.",
    ingredients: "Rose Water, Glycerin, Aloe Vera",
  },
  {
    id: 10,
    name: "Night Repair Serum",
    category: "Serum",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
    description:
      "Serum nate i krijuar për ta bërë rutinën e mbrëmjes më të veçantë.",
    ingredients: "Peptides, Hyaluronic Acid, Vitamin E",
  },
  {
    id: 11,
    name: "Coffee Body Scrub",
    category: "Body Care",
    price: 17.5,
    image:
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=800&q=80",
    description:
      "Scrub me kafe për një lëkurë të butë dhe të lëmuar.",
    ingredients: "Coffee, Sugar, Coconut Oil",
  },
  {
    id: 12,
    name: "Aloe Fresh Gel",
    category: "Gel",
    price: 13.99,
    image:
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=800&q=80",
    description:
      "Gel freskues me aloe vera për një ndjesi qetësuese dhe hidratuese.",
    ingredients: "Aloe Vera, Panthenol, Glycerin",
  },
];

const extraProducts = [
  {
    category: "Serum",
    baseId: 1,
    names: [
      "Vitamin C Bright Serum",
      "Hyaluronic Glow Serum",
      "Niacinamide Balance Serum",
      "Peptide Firming Serum",
      "Rose Hydration Serum",
      "Vitamin E Repair Serum",
      "Daily Glow Serum",
      "Deep Hydration Serum",
      "Radiance Boost Serum",
      "Overnight Renewal Serum",
      "Botanical Glow Serum",
    ],
  },
  {
    category: "Cleanser",
    baseId: 2,
    names: [
      "Gentle Foam Cleanser",
      "Hydrating Milk Cleanser",
      "Daily Glow Cleanser",
      "Green Tea Purifying Cleanser",
      "Rose Water Cleanser",
      "Sensitive Skin Cleanser",
      "Deep Clean Gel",
      "Vitamin C Face Wash",
      "Aloe Gentle Wash",
      "Balancing Gel Cleanser",
      "Silky Cream Cleanser",
    ],
  },
  {
    category: "Moisturizer",
    baseId: 3,
    names: [
      "Daily Dew Moisturizer",
      "Rich Hydration Cream",
      "Ceramide Barrier Cream",
      "Velvet Soft Moisturizer",
      "Aloe Water Cream",
      "Rose Glow Cream",
      "24H Hydration Cream",
      "Vitamin E Moisture Cream",
      "Sensitive Skin Cream",
      "Cloud Nine Face Cream",
      "Deep Nourish Moisturizer",
    ],
  },
];

const allProducts = [
  ...products,
  ...extraProducts.flatMap((group, groupIndex) => {
    const base = products.find(
      (product) => product.id === group.baseId
    );

    return group.names.map((name, index) => ({
      ...base,
      id: 100 + groupIndex * 20 + index,
      name,
      category: group.category,
      price: Number(
        (14.99 + ((index * 3.17) % 16)).toFixed(2)
      ),
    }));
  }),
];

const translations = {
  sq: {
    home: "Ballina",
    products: "Produktet",
    about: "Rreth nesh",
    contact: "Kontakt",
    shop: "Bli tani",
    title: "Kujdesi natyral për lëkurën tënde",
    subtitle:
      "Produkte të përzgjedhura për një rutinë të thjeshtë, elegante dhe të shëndetshme.",
    explore: "Shiko produktet",
    featured: "Produktet tona",
    all: "Të gjitha",
    serum: "Serum",
    cleanser: "Cleanser",
    moisturizer: "Krem",
    ingredients: "Përbërësit",
    details: "Shiko detajet",
    add: "Shto në shportë",
    aboutTitle: "Bukuria fillon me kujdesin",
    aboutText:
      "BLINA SKIN krijon një eksperiencë moderne skincare me produkte të frymëzuara nga natyra dhe rutina të thjeshta.",
    contactTitle: "Na kontakto",
    name: "Emri",
    email: "Email",
    message: "Mesazhi",
    send: "Dërgo mesazhin",
    cart: "Shporta",
    empty: "Shporta është bosh.",
    checkout: "Përfundo porosinë",
    payment: "Metoda e pagesës",
    cash: "Cash",
    card: "Kartelë",
    cardNumber: "Numri i kartelës",
    expiry: "Skadimi",
    cvv: "CVV",
    placeOrder: "Porosit tani",
    total: "Totali",
    success: "Porosia u pranua me sukses!",
  },

  en: {
    home: "Home",
    products: "Products",
    about: "About",
    contact: "Contact",
    shop: "Shop now",
    title: "Natural care for your skin",
    subtitle:
      "Carefully selected products for a simple, elegant and healthy skincare routine.",
    explore: "Explore products",
    featured: "Our products",
    all: "All",
    serum: "Serum",
    cleanser: "Cleanser",
    moisturizer: "Moisturizer",
    ingredients: "Ingredients",
    details: "View details",
    add: "Add to cart",
    aboutTitle: "Beauty starts with care",
    aboutText:
      "BLINA SKIN creates a modern skincare experience with nature-inspired products and simple routines.",
    contactTitle: "Contact us",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send message",
    cart: "Cart",
    empty: "Your cart is empty.",
    checkout: "Complete your order",
    payment: "Payment method",
    cash: "Cash",
    card: "Card",
    cardNumber: "Card number",
    expiry: "Expiry",
    cvv: "CVV",
    placeOrder: "Place order",
    total: "Total",
    success: "Your order was successfully placed!",
  },
};

function App() {
  const [language, setLanguage] = useState("sq");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [payment, setPayment] = useState("cash");
  const [orderSuccess, setOrderSuccess] = useState(false);

  const t = translations[language];

 
const filteredProducts =
  category === "All"
    ? allProducts
    : allProducts.filter(
        (product) => product.category === category
      );


  const addToCart = (product) => {
    setCart([...cart, product]);
    setSelectedProduct(null);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, product) => sum + product.price, 0);

  const handleOrder = (e) => {
    e.preventDefault();

    setOrderSuccess(true);

    setTimeout(() => {
      setOrderSuccess(false);
      setCart([]);
      setShowCart(false);
    }, 2500);
  };

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">

        <a href="#home" className="logo">
          <span className="logo-icon">✦</span>
          BLINA<span>SKIN</span>
        </a>

        <div className="nav-links">
          <a href="#home">{t.home}</a>
          <a href="#products">{t.products}</a>
          <a href="#about">{t.about}</a>
          <a href="#contact">{t.contact}</a>
        </div>

        <div className="nav-actions">

          <button
            className="language"
            onClick={() =>
              setLanguage(language === "sq" ? "en" : "sq")
            }
          >
            {language === "sq" ? "🇬🇧 EN" : "🇦🇱 SQ"}
          </button>

          <button
            className="cart-button"
            onClick={() => setShowCart(true)}
          >
            🛍️
            <span>{cart.length}</span>
          </button>

        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">

        <div className="hero-content">

          <p className="eyebrow">
            NATURAL • SIMPLE • BEAUTIFUL
          </p>

          <h1>
            {t.title}
            <em>.</em>
          </h1>

          <p className="hero-description">
            {t.subtitle}
          </p>

          <a href="#products" className="main-button">
            {t.explore}
            <span>→</span>
          </a>

          <div className="hero-info">

            <div>
              <strong>100%</strong>
              <small>Carefully selected</small>
            </div>

            <div>
              <strong>12+</strong>
              <small>Skincare products</small>
            </div>

            <div>
              <strong>24/7</strong>
              <small>Customer care</small>
            </div>

          </div>
        </div>

        <div className="hero-image">

          <div className="circle-decoration"></div>

          <img
            src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=1000&q=85"
            alt="BLINA SKIN"
          />

          <div className="floating-card">

            <span>✦</span>

            <div>
              <strong>Glow naturally</strong>
              <small>with BLINA SKIN</small>
            </div>

          </div>

        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products-section" id="products">

        <div className="section-heading">

          <div>
            <p className="eyebrow">
              DISCOVER YOUR ROUTINE
            </p>

            <h2>{t.featured}</h2>
          </div>

          <div className="filters">

            {["All", "Serum", "Cleanser", "Moisturizer"].map(
              (item) => (

                <button
                  key={item}
                  className={
                    category === item ? "active" : ""
                  }
                  onClick={() => setCategory(item)}
                >
                  {item === "All"
                    ? t.all
                    : item === "Moisturizer"
                    ? t.moisturizer
                    : item === "Cleanser"
                    ? t.cleanser
                    : t.serum}
                </button>

              )
            )}

          </div>

        </div>

        <div className="products-grid">

          {filteredProducts.map((product) => (

            <div
              className="product-card"
              key={product.id}
            >

              <div className="product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

                <button
                  className="quick-view"
                  onClick={() =>
                    setSelectedProduct(product)
                  }
                >
                  +
                </button>

                <span className="product-category">
                  {product.category}
                </span>

              </div>

              <div className="product-info">

                <div>
                  <h3>{product.name}</h3>
                  <p>Premium skincare</p>
                </div>

                <strong>
                  €{product.price.toFixed(2)}
                </strong>

              </div>

              <button
                className="product-button"
                onClick={() =>
                  setSelectedProduct(product)
                }
              >
                {t.details}
                <span>→</span>
              </button>

            </div>

          ))}

        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section" id="about">

        <div className="about-image">

          <img
            src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1000&q=85"
            alt="BLINA SKIN products"
          />

        </div>

        <div className="about-content">

          <p className="eyebrow">
            OUR PHILOSOPHY
          </p>

          <h2>{t.aboutTitle}</h2>

          <p>
            {t.aboutText}
          </p>

          <div className="about-points">

            <div>
              <span>01</span>

              <div>
                <h4>Simple routines</h4>
                <p>
                  Less products, more intentional care.
                </p>
              </div>
            </div>

            <div>
              <span>02</span>

              <div>
                <h4>Nature inspired</h4>
                <p>
                  Ingredients selected with care.
                </p>
              </div>
            </div>

            <div>
              <span>03</span>

              <div>
                <h4>Everyday glow</h4>
                <p>
                  Designed for your daily skincare ritual.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">

        <div className="contact-info">

          <p className="eyebrow">
            GET IN TOUCH
          </p>

          <h2>{t.contactTitle}</h2>

          <p>
            Na gjej në dyqanin tonë ose na shkruaj për
            informacione rreth produkteve dhe porosive.
          </p>

          <div className="contact-details">

            <div>
              <span>📍</span>

              <div>
                <strong>Lokacioni</strong>
                <p>Prishtina, Kosovo</p>
              </div>
            </div>

            <div>
              <span>✉️</span>

              <div>
                <strong>Email</strong>
                <p>hello@blinaskin.com</p>
              </div>
            </div>

            <div>
              <span>☎️</span>

              <div>
                <strong>Phone</strong>
                <p>+383 44 000 000</p>
              </div>
            </div>

          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={(e) => e.preventDefault()}
        >

          <input
            placeholder={t.name}
            required
          />

          <input
            type="email"
            placeholder={t.email}
            required
          />

          <textarea
            placeholder={t.message}
            rows="6"
            required
          ></textarea>

          <button
            type="submit"
            className="main-button"
          >
            {t.send} →
          </button>

        </form>

      </section>

      {/* FOOTER */}
      <footer>

        <div className="footer-logo">
          ✦ BLINA<span>SKIN</span>
        </div>

        <p>
          © 2026 BLINA SKIN. Made with care.
        </p>

        <div className="socials">
          <a href="#">Instagram</a>
          <a href="#">TikTok</a>
          <a href="#">Facebook</a>
        </div>

      </footer>

      {/* PRODUCT MODAL */}
      {selectedProduct && (

        <div
          className="modal-overlay"
          onClick={() => setSelectedProduct(null)}
        >

          <div
            className="product-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-button"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>

            <div className="modal-image">

              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
              />

            </div>

            <div className="modal-content">

              <p className="modal-category">
                {selectedProduct.category}
              </p>

              <h2>
                {selectedProduct.name}
              </h2>

              <div className="stars">
                ★★★★★
              </div>

              <p className="modal-description">
                {selectedProduct.description}
              </p>

              <div className="ingredients">

                <h4>{t.ingredients}</h4>

                <p>
                  {selectedProduct.ingredients}
                </p>

              </div>

              <div className="modal-bottom">

                <strong>
                  €{selectedProduct.price.toFixed(2)}
                </strong>

                <button
                  className="main-button"
                  onClick={() =>
                    addToCart(selectedProduct)
                  }
                >
                  {t.add} +
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

      {/* CART */}
      {showCart && (

        <div
          className="modal-overlay"
          onClick={() => setShowCart(false)}
        >

          <div
            className="cart-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-button"
              onClick={() => setShowCart(false)}
            >
              ×
            </button>

            <p className="eyebrow">
              YOUR SHOPPING BAG
            </p>

            <h2>{t.cart}</h2>

            {cart.length === 0 ? (

              <div className="empty-cart">

                <div>🛍️</div>

                <p>{t.empty}</p>

              </div>

            ) : (

              <>

                <div className="cart-items">

                  {cart.map((item, index) => (

                    <div
                      className="cart-item"
                      key={`${item.id}-${index}`}
                    >

                      <img
                        src={item.image}
                        alt={item.name}
                      />

                      <div>
                        <h4>{item.name}</h4>

                        <p>
                          €{item.price.toFixed(2)}
                        </p>
                      </div>

                      <button
                        onClick={() =>
                          removeFromCart(index)
                        }
                      >
                        ×
                      </button>

                    </div>

                  ))}

                </div>

                <div className="cart-total">

                  <span>{t.total}</span>

                  <strong>
                    €{total.toFixed(2)}
                  </strong>

                </div>

                <div className="checkout">

                  <h3>
                    {t.checkout}
                  </h3>

                  <form onSubmit={handleOrder}>

                    <input
                      placeholder={t.name}
                      required
                    />

                    <input
                      placeholder="Address"
                      required
                    />

                    <input
                      placeholder={t.email}
                      type="email"
                      required
                    />

                    <h4>
                      {t.payment}
                    </h4>

                    <div className="payment-options">

                      <button
                        type="button"
                        className={
                          payment === "cash"
                            ? "selected"
                            : ""
                        }
                        onClick={() =>
                          setPayment("cash")
                        }
                      >
                        💵 {t.cash}
                      </button>

                      <button
                        type="button"
                        className={
                          payment === "card"
                            ? "selected"
                            : ""
                        }
                        onClick={() =>
                          setPayment("card")
                        }
                      >
                        💳 {t.card}
                      </button>

                    </div>

                    {payment === "card" && (

                      <div className="card-fields">

                        <input
                          placeholder={t.cardNumber}
                          maxLength="19"
                          required
                        />

                        <div>

                          <input
                            placeholder={t.expiry}
                            required
                          />

                          <input
                            placeholder={t.cvv}
                            required
                          />

                        </div>

                      </div>

                    )}

                    <button
                      className="checkout-button"
                      type="submit"
                    >
                      {t.placeOrder} • €
                      {total.toFixed(2)}
                    </button>

                  </form>

                </div>

              </>

            )}

            {orderSuccess && (

              <div className="success-message">
                ✓ {t.success}
              </div>

            )}

          </div>

        </div>

      )}

    </div>
  );
}

export default App;
