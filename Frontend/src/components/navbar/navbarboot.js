import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


export default function Navbarboot(props){
  const { loginWithRedirect,isAuthenticated,logout,user} = useAuth0();
  return (
    <div className="navbar navbar-expand-lg bg-body-tertiary" style={{ width: "100%" }}>
      <div className="container-fluid" style={{ maxWidth: "100%" }}>
        <a className="navbar-brand" href="#">BITSBids</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Account
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/profile">Profile</a></li>
                <li><a className="dropdown-item" href="/logout">Logout</a></li>
                <li><a className="dropdown-item" href="/yourbids">YourBids</a></li>
                <li><a className="dropdown-item" href="/enlist">Enlist</a></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex w-100">
            <input className="form-control me-2 flex-grow-1" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          {isAuthenticated &&( 
            <li><p> {user.name}
            </p></li>)}
          
          {
            isAuthenticated ?(
            <li>
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </button>
          </li>
          ) : (
            <li>
          <button onClick={() => loginWithRedirect()}>Log In</button>
          </li>
          )
          }
                    
        </div>
      </div>
    </div>
  );
}
