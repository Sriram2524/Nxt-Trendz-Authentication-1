// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="text-container">
        <h1 className="home-heading">Clothes That Get You Noticed</h1>
        <img
          className="home-ig"
          alt="clothes that get you noticed"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        />
        <p className="des">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button type="button" className="shop-button">
          Shop Now
        </button>
      </div>
      <img
        className="home-img"
        alt="clothes that get you noticed"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
      />
    </div>
  </>
)
export default Home
