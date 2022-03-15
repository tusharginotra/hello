import React from 'react'
import {Link} from 'react-router-dom'


export default function Navbar(props) {



  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}` }  >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/TextForm">Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">Link</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/About">About</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href={null} > Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/List">List</Link>
            </li>
            <div className= {`form-check form-switch text-${props.mode==='light'?'dark':'light'} `}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Enable Dark mode</label>
    </div>
          </ul>
          <button type="button" onClick={()=>{document.body.style.backgroundColor='green' }}  className="btn btn mx-2" style={{backgroundColor : "green" }}></button>
          <button type="button" onClick={()=>{document.body.style.backgroundColor='purple'}} className="btn btn mx-2" style={{backgroundColor : "purple" }}></button>
          <button type="button" onClick={()=>{document.body.style.backgroundColor='yellow'}} className="btn btn mx-2" style={{backgroundColor : "yellow" }}></button>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </>
  )
}
