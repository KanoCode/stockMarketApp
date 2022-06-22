import './styles/App.css';
import { FaMicrophone } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { MdOutlineSouthEast, MdNorthEast } from 'react-icons/md';
import { BsGraphUp } from 'react-icons/bs';

import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Profile from './pages/profile';

function App() {
  return (
    <div className="App">
      <header className="App-header d-flex align-items-center">
        <h1>Stock data</h1>
        <div>
          {' '}
          <FaMicrophone />
          <IoMdSettings />
        </div>
      </header>

      <div className="trends">
        <h2>
          Trending now
        </h2>
        <span>

          {' '}
          <BsGraphUp />
        </span>
      </div>

      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card p-1 m-2">
              <div className="card-body d-flex flex-column align-items-start">
                <div className="icon border d-flex ">
                  <h5 className="card-title">TSLA</h5>
                  <img
                    className="rounded cpny-logo"
                    src="https://financialmodelingprep.com/image-stock/TSLA.png"
                    alt="Card cap"
                  />
                </div>
                <p>$ 1223</p>
                <span>
                  +
                  {0.23}
                  {' '}
                  (beta)
                </span>
                <div className="d-flex btn-links">
                  {' '}
                  <button type="button" className="btn border-dark btn-one ">
                    Sell
                    <MdNorthEast />
                  </button>
                  {' '}
                  <button type="button" className="btn btn-dark ">
                    buy
                    {' '}
                    <MdOutlineSouthEast />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card p-1 m-2">
              <div className="card-body d-flex flex-column align-items-start">
                <div className="icon border d-flex ">
                  <h5 className="card-title">CASH</h5>
                  <img
                    className="rounded cpny-logo"
                    src="https://financialmodelingprep.com/image-stock/CASH.png"
                    alt="Card cap"
                  />
                </div>
                <p>$ 1223</p>
                <span>
                  +
                  {0.23}
                  {' '}
                  (beta)
                </span>
                <div className="d-flex btn-links">
                  {' '}
                  <button type="button" className="btn border-dark btn-one ">
                    Sell
                    <MdNorthEast />
                  </button>
                  {' '}
                  <button type="button" className="btn btn-dark ">
                    buy
                    {' '}
                    <MdOutlineSouthEast />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card p-1 m-2">
              <div className="card-body d-flex flex-column align-items-start">
                <div className="icon border d-flex ">
                  <h5 className="card-title">META</h5>
                  <img
                    className="rounded cpny-logo"
                    src="https://financialmodelingprep.com/image-stock/FB.png"
                    alt="Card cap"
                  />
                </div>
                <p>$ 1223</p>
                <span>
                  +
                  {0.23}
                  {' '}
                  (beta)
                </span>
                <div className="d-flex btn-links">
                  {' '}
                  <button type="button" className="btn border-dark btn-one ">
                    Sell
                    <MdNorthEast />
                  </button>
                  {' '}
                  <button type="button" className="btn btn-dark ">
                    buy
                    {' '}
                    <MdOutlineSouthEast />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
