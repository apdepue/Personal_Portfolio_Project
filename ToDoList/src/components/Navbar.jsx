import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(v => !v);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">Alexander DePue</a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggle}
          aria-controls="navbarSupportedContent"
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse${open ? " show" : ""}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" onClick={e => e.preventDefault()} aria-expanded="false">
                Projects
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/projects">Project Page</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/projects#blender">Blender</a></li>
                <li><a className="dropdown-item" href="/ideas">Ideas</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/search">Search GIFs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}