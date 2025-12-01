import React, { useState } from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(v => !v);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Alexander DePue</Link>
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
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/projects" role="button" onClick={e => e.preventDefault()}>
                Projects
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/projects">Project Page</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/projects#blender">Blender</Link></li>
                <li><Link className="dropdown-item" to="/ideas">Ideas</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search">Search GIFs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">To-Do-List</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}