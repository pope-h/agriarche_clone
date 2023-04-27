// eslint-disable-next-line
import React from "react";


function App() {
    return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="first-container container-fluid">
    <a className="navbar-brand" href="#">
        <img src="https://agriarche.com/static/media/logo.494f96cf1e5daa53d44807fc4e170004.svg" />
    </a>
    <div className="home-container collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Who we are</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">kawusa</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
      <button className="btn me-2 btn-outline-success" type="submit">sign up</button>
      </form>
    </div>
  </div>
</nav>
    </div>
        
    )
}


export default App;