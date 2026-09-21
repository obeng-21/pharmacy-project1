import { useMemo, useState } from 'react'
import { filterMedicines, cartTotal } from './catalogue.js'

const medicines = [
  { id: 1, name: 'Paracetamol', category: 'Pain Relief', price: 12.5, stock: 42, icon: '💊', description: '500 mg tablets for pain and fever relief.' },
  { id: 2, name: 'Vitamin C', category: 'Vitamins', price: 28, stock: 18, icon: '🍊', description: '1000 mg immune-support tablets.' },
  { id: 3, name: 'Cough Syrup', category: 'Cold & Flu', price: 35, stock: 7, icon: '🧴', description: 'Soothing syrup for dry cough symptoms.' },
  { id: 4, name: 'First Aid Kit', category: 'First Aid', price: 95, stock: 12, icon: '🩹', description: 'Essential supplies for minor injuries.' },
  { id: 5, name: 'Cetirizine', category: 'Allergy', price: 18, stock: 25, icon: '🌿', description: 'Non-drowsy relief from allergy symptoms.' },
  { id: 6, name: 'Digital Thermometer', category: 'Equipment', price: 55, stock: 4, icon: '🌡️', description: 'Fast and accurate temperature readings.' },
]

export default function App() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [cart, setCart] = useState([])
  const categories = ['All', ...new Set(medicines.map((item) => item.category))]
  const results = useMemo(() => filterMedicines(medicines, query, category), [query, category])

  const addToCart = (medicine) => setCart((items) => {
    const existing = items.find((item) => item.id === medicine.id)
    return existing
      ? items.map((item) => item.id === medicine.id ? { ...item, quantity: item.quantity + 1 } : item)
      : [...items, { ...medicine, quantity: 1 }]
  })
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const total = cartTotal(cart)

  return <>
    <header>
      <a className="brand" href="#top"><span>✚</span> CarePoint</a>
      <nav><a href="#catalogue">Medicines</a><a href="#services">Services</a><a href="#about">About</a></nav>
      <button className="cart-button" aria-label={`${cartCount} items in cart`}>🛒 Cart <b>{cartCount}</b></button>
    </header>

    <main id="top">
      <section className="hero">
        <div><p className="eyebrow">YOUR HEALTH, OUR PRIORITY</p><h1>Pharmacy care made <em>simple.</em></h1>
          <p>Find everyday medicines and health essentials, check availability, and prepare your order from anywhere.</p>
          <a className="primary" href="#catalogue">Browse medicines →</a>
        </div>
        <div className="hero-card"><span>🏥</span><strong>Trusted local care</strong><p>Quality products. Helpful service. Clear prices.</p></div>
      </section>

      <section className="benefits" id="services">
        <div><span>✓</span><p><b>Verified products</b><br/>Carefully sourced medicines</p></div>
        <div><span>⚡</span><p><b>Quick ordering</b><br/>Simple and convenient</p></div>
        <div><span>☎</span><p><b>Pharmacist support</b><br/>Help when you need it</p></div>
      </section>

      <section className="catalogue" id="catalogue">
        <div className="section-heading"><div><p className="eyebrow">OUR CATALOGUE</p><h2>Find what you need</h2></div><p>{results.length} products available</p></div>
        <div className="filters">
          <label>🔎 <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search medicines..." /></label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} aria-label="Filter by category">
            {categories.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>
        <div className="product-grid">
          {results.map((medicine) => <article key={medicine.id}>
            <div className="product-icon">{medicine.icon}</div>
            <small>{medicine.category}</small><h3>{medicine.name}</h3><p>{medicine.description}</p>
            <div className="stock"><span className={medicine.stock < 8 ? 'low' : ''}>{medicine.stock < 8 ? `Only ${medicine.stock} left` : 'In stock'}</span></div>
            <div className="product-footer"><strong>GH₵ {medicine.price.toFixed(2)}</strong><button onClick={() => addToCart(medicine)}>Add +</button></div>
          </article>)}
        </div>
        {!results.length && <p className="empty">No medicines match your search.</p>}
      </section>

      {cartCount > 0 && <aside className="cart-summary"><div><b>{cartCount} item{cartCount > 1 ? 's' : ''} in cart</b><span>GH₵ {total.toFixed(2)}</span></div><button>Review order →</button></aside>}
    </main>
    <footer id="about"><strong>✚ CarePoint Pharmacy</strong><p>Demo pharmacy management system • Prices shown in Ghana cedis</p></footer>
  </>
}
