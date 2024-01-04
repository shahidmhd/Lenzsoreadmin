import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className="sidebar px-4 py-4 py-md-4 me-0">
    <div className="d-flex flex-column h-100">
      <Link to={"/"} className="mb-0 brand-icon">
        <span className="logo-icon">
          <i className="bi bi-bag-check-fill fs-4" />
        </span>
        <span className="logo-text">Lenzstore</span>
      </Link>
      {/* Menu: main ul */}
      <ul className="menu-list flex-grow-1 mt-3">
        <li>
          <Link to={"/"}  className="m-link active">
            <i className="icofont-home fs-5" /> <span>Dashboard</span>
          </Link>
        </li>
        <li className="collapsed">
          <a
            className="m-link"
            data-bs-toggle="collapse"
            data-bs-target="#menu-product"
            href="#"
          >
            <i className="icofont-truck-loaded fs-5" /> <span>Products</span>{" "}
            <span className="arrow icofont-rounded-down ms-auto text-end fs-5" />
          </a>
          {/* Menu: Sub menu ul */}
          <ul className="sub-menu collapse" id="menu-product">
            <li>
              <a className="ms-link" href="product-grid.html">
                Product Grid
              </a>
            </li>
            <li>
              <a className="ms-link" href="product-list.html">
                Product List
              </a>
            </li>
            <li>
              <a className="ms-link" href="product-edit.html">
                Product Edit
              </a>
            </li>
            <li>
              <a className="ms-link" href="product-detail.html">
                Product Details
              </a>
            </li>
            <li>
              <Link to={'/addproduct'} className="ms-link" >
                Product Add
              </Link>
            </li>
            <li>
              <a className="ms-link" href="product-cart.html">
                Shopping Cart
              </a>
            </li>
            <li>
              <a className="ms-link" href="checkout.html">
                Checkout
              </a>
            </li>
          </ul>
        </li>
        <li className="collapsed">
          <a
            className="m-link"
            data-bs-toggle="collapse"
            data-bs-target="#categories"
            href="#"
          >
            <i className="icofont-chart-flow fs-5" /> <span>Categories</span>{" "}
            <span className="arrow icofont-rounded-down ms-auto text-end fs-5" />
          </a>
          {/* Menu: Sub menu ul */}
          <ul className="sub-menu collapse" id="categories">
            <li>
              <a className="ms-link" href="categorie-list.html">
                Categories List
              </a>
            </li>
            <li>
              <a className="ms-link" href="categories-edit.html">
                Categories Edit
              </a>
            </li>
            <li>
              <a className="ms-link" href="categories-add.html">
                Categories Add
              </a>
            </li>
          </ul>
        </li>
        <li className="collapsed">
          <a
            className="m-link"
            data-bs-toggle="collapse"
            data-bs-target="#menu-order"
            href="#"
          >
            <i className="icofont-notepad fs-5" /> <span>Orders</span>{" "}
            <span className="arrow icofont-rounded-down ms-auto text-end fs-5" />
          </a>
          {/* Menu: Sub menu ul */}
          <ul className="sub-menu collapse" id="menu-order">
            <li>
              <a className="ms-link" href="order-list.html">
                Orders List
              </a>
            </li>
            <li>
              <a className="ms-link" href="order-details.html">
                Order Details
              </a>
            </li>
            <li>
              <a className="ms-link" href="order-invoices.html">
                Order Invoices
              </a>
            </li>
          </ul>
        </li>
        <li className="collapsed">
          <a
            className="m-link"
            data-bs-toggle="collapse"
            data-bs-target="#customers-info"
            href="#"
          >
            <i className="icofont-funky-man fs-5" /> <span>Customers</span>{" "}
            <span className="arrow icofont-rounded-down ms-auto text-end fs-5" />
          </a>
          {/* Menu: Sub menu ul */}
          <ul className="sub-menu collapse" id="customers-info">
            <li>
              <a className="ms-link" href="customers.html">
                Customers List
              </a>
            </li>
            <li>
              <a className="ms-link" href="customer-detail.html">
                Customers Details
              </a>
            </li>
          </ul>
        </li>
        <li className="collapsed">
          <a
            className="m-link"
            data-bs-toggle="collapse"
            data-bs-target="#menu-sale"
            href="#"
          >
            <i className="icofont-sale-discount fs-5" />{" "}
            <span>Sales Promotion</span>{" "}
            <span className="arrow icofont-rounded-down ms-auto text-end fs-5" />
          </a>
          {/* Menu: Sub menu ul */}
          <ul className="sub-menu collapse" id="menu-sale">
            <li>
              <a className="ms-link" href="coupons-list.html">
                Coupons List
              </a>
            </li>
            <li>
              <a className="ms-link" href="coupon-add.html">
                Coupons Add
              </a>
            </li>
            <li>
              <a className="ms-link" href="coupon-edit.html">
                Coupons Edit
              </a>
            </li>
          </ul>
        </li>
        <li className="collapsed">
          <a
            className="m-link"
            data-bs-toggle="collapse"
            data-bs-target="#menu-inventory"
            href="#"
          >
            <i className="icofont-chart-histogram fs-5" />{" "}
            <span>Inventory</span>{" "}
            <span className="arrow icofont-rounded-down ms-auto text-end fs-5" />
          </a>
          {/* Menu: Sub menu ul */}
          <ul className="sub-menu collapse" id="menu-inventory">
            <li>
              <a className="ms-link" href="inventory-info.html">
                Stock List
              </a>
            </li>
            <li>
              <a className="ms-link" href="purchase.html">
                Purchase
              </a>
            </li>
            <li>
              <a className="ms-link" href="supplier.html">
                Supplier
              </a>
            </li>
            <li>
              <a className="ms-link" href="returns.html">
                Returns
              </a>
            </li>
            <li>
              <a className="ms-link" href="department.html">
                Department
              </a>
            </li>
          </ul>
        </li>
        <li className="collapsed">
          <a
            className="m-link"
            data-bs-toggle="collapse"
            data-bs-target="#menu-Componentsone"
            href="#"
          >
            <i className="icofont-ui-calculator" /> <span>Accounts</span>{" "}
            <span className="arrow icofont-rounded-down ms-auto text-end fs-5" />
          </a>
          {/* Menu: Sub menu ul */}
          <ul className="sub-menu collapse" id="menu-Componentsone">
            <li>
              <a className="ms-link" href="invoices.html">
                Invoices{" "}
              </a>
            </li>
            <li>
              <a className="ms-link" href="expenses.html">
                Expenses{" "}
              </a>
            </li>
            <li>
              <a className="ms-link" href="salaryslip.html">
                Salary Slip{" "}
              </a>
            </li>
            <li>
              <a className="ms-link" href="create-invoice.html">
                Create Invoice{" "}
              </a>
            </li>
          </ul>
        </li>
        <li className="collapsed">
          <a
            className="m-link"
            data-bs-toggle="collapse"
            data-bs-target="#app"
            href="#"
          >
            <i className="icofont-code-alt fs-5" /> <span>App</span>{" "}
            <span className="arrow icofont-rounded-down ms-auto text-end fs-5" />
          </a>
          {/* Menu: Sub menu ul */}
          <ul className="sub-menu collapse" id="app">
            <li>
              <a className="ms-link" href="calendar.html">
                Calandar
              </a>
            </li>
            <li>
              <a className="ms-link" href="chat.html">
                {" "}
                Chat App
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a className="m-link" href="store-locator.html">
            <i className="icofont-focus fs-5" /> <span>Store Locator</span>
          </a>
        </li>
        <li>
          <a className="m-link" href="ui-elements/ui-alerts.html">
            <i className="icofont-paint fs-5" /> <span>UI Components</span>
          </a>
        </li>
        <li className="collapsed">
          <a
            className="m-link"
            data-bs-toggle="collapse"
            data-bs-target="#page"
            href="#"
          >
            <i className="icofont-page fs-5" /> <span>Other Pages</span>{" "}
            <span className="arrow icofont-rounded-down ms-auto text-end fs-5" />
          </a>
          {/* Menu: Sub menu ul */}
          <ul className="sub-menu collapse" id="page">
            <li>
              <a className="ms-link" href="admin-profile.html">
                Profile Page
              </a>
            </li>
            <li>
              <a className="ms-link" href="purchase-plan.html">
                Price Plan Example
              </a>
            </li>
            <li>
              <a className="ms-link" href="charts.html">
                Charts Example
              </a>
            </li>
            <li>
              <a className="ms-link" href="table.html">
                Table Example
              </a>
            </li>
            <li>
              <a className="ms-link" href="forms.html">
                Forms Example
              </a>
            </li>
            <li>
              <a className="ms-link" href="icon.html">
                Icons
              </a>
            </li>
            <li>
              <a className="ms-link" href="contact.html">
                Contact Us
              </a>
            </li>
            <li>
              <a className="ms-link" href="todo-list.html">
                Todo List
              </a>
            </li>
          </ul>
        </li>
      </ul>
      {/* Menu: menu collepce btn */}
      <button
        type="button"
        className="btn btn-link sidebar-mini-btn text-light"
      >
        <span className="ms-2">
          <i className="icofont-bubble-right" />
        </span>
      </button>
    </div>
  </div>
  )
}

export default Sidebar