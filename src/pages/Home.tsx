import { useEffect, useState } from 'react'

interface HomeProps {
  currentTheme: string
}

interface Product {
  id: number
  title: string
  description: string
  price: number
  image: string
  category: string
}

function Home({ currentTheme }: HomeProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://fakestoreapi.com/products?limit=6")
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.log("error", error)
        setError('Failed to load products')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`
  }

  return (
    <div className={`page page_${currentTheme}`}>
      <section className={`hero hero_${currentTheme}`}>
        <h1 className={`hero-title hero-title_${currentTheme}`}>
        Welcome to StyleSwitch
        </h1>
        <p className={`hero-subtitle hero-subtitle_${currentTheme}`}>
        Your one-stop shop for premium fashion, outdoor gear, and everyday essentials — all with a twist of personalization through themes!
        </p>
      </section>

      <section className={`features features_${currentTheme}`}>
        <h2 className={`section-title section-title_${currentTheme}`}>
          Featured Products
        </h2>
        <div className={`features-grid features-grid_${currentTheme}`}>
          {loading && (
            <div className={`feature-card feature-card_${currentTheme}`}>
              <p>Loading products...</p>
            </div>
          )}
          
          {error && (
            <div className={`feature-card feature-card_${currentTheme}`}>
              <p>Error: {error}</p>
            </div>
          )}

          {!loading && !error && products.map((item) => (
            <div className={`feature-card feature-card_${currentTheme}`} key={item.id}>
              <img src={item.image} alt={item.title} />
              <h3 className={`feature-title feature-title_${currentTheme}`}>
                {item.title.length > 50 ? `${item.title.substring(0, 50)}...` : item.title}
              </h3>
              <p className={`feature-description feature-description_${currentTheme}`}>
                {item.description.length > 100 ? `${item.description.substring(0, 100)}...` : item.description}
              </p>
              <label className={`product-price product-price_${currentTheme}`}>
                {formatPrice(item.price)}
              </label>
            </div>
          ))}
        </div>
      </section>

      <section className={`cta cta_${currentTheme}`}>
        <h2 className={`cta-title cta-title_${currentTheme}`}>
          Ready to Explore?
        </h2>
        <p className={`cta-text cta-text_${currentTheme}`}>
          Navigate through our pages to see how the theme adapts across different content.
        </p>
      </section>
    </div>
  )
}

export default Home 