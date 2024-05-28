import "@syncfusion/ej2-layouts/styles/material.css";
import "@syncfusion/ej2-react-buttons/styles/material.css";
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-react-navigations/styles/material.css";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import "./wrapper.css";
import { Link, NavLink } from "react-router-dom";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";

const Wrapper = ({ children }) => {
  return (
    <div className="wrapper">
      <header>
        <Link className="title" to="/dashboard" title="visit dashboard">
          Geva Digital Shop
        </Link>
        <span className="username">Hello Prashant</span>
      </header>
      <main>
        <SidebarComponent id="default-sidebar" className="e-card sidebar">
          <nav>
            <ul className="menu">
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/manage-products"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Manage Products
                </NavLink>
              </li>
            </ul>
          </nav>
          <ButtonComponent
            cssClass="e-danger e-block"
            onClick={() => {}}
            style={{ fontSize: "1.2em" }}
          >
            Logout
          </ButtonComponent>
        </SidebarComponent>
        <section className="e-card" id="main-area">
          {children}
        </section>
      </main>
    </div>
  );
};

export default Wrapper;
