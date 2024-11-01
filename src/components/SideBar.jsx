import React from "react";

function SideBar() {
  return (
    <>
      <aside className="sidebar-wrapper ">
        <div className="sidebar-header">
          <div className="logo-icon">
            <img
              src="assets/images/admin.jpeg"
              className="logo-img rounded-lg"
              alt=""
            />
          </div>
          <div className="logo-name flex-grow-1">
            <h5 className="mb-0">Admin</h5>
          </div>
          <div className="sidebar-close">
            <span className="material-icons-outlined">close</span>
          </div>
        </div>

        <div className="sidebar-nav" data-simplebar="true">
          {/* <!--navigation--> */}
          <ul className="metismenu" id="sidenav">
            <li>
              <a href="javascript:;" className="has-arrow">
                <div className="parent-icon">
                  <i className="material-icons-outlined">home</i>
                </div>
                <div className="menu-title">Dashboard</div>
              </a>
              <ul>
                <li>
                  <a href="index.html">
                    <i className="material-icons-outlined">arrow_right</i>
                    Home
                  </a>
                </li>
                <li>
                  <a href="index2.html">
                    <i className="material-icons-outlined">arrow_right</i>
                    Others
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="javascript:;" className="has-arrow">
                <div className="parent-icon">
                  <i className="material-icons-outlined">widgets</i>
                </div>
                <div className="menu-title">Product List</div>
              </a>
              <ul>
                <li>
                  <a href="widgets-data.html">
                    <i className="material-icons-outlined">arrow_right</i>
                    Inventory
                  </a>
                </li>
                <li>
                  <a href="widgets-advance.html">
                    <i className="material-icons-outlined">arrow_right</i>
                    Sales Analytics
                  </a>
                </li>
              </ul>
            </li>

            <li className="menu-label">Product</li>
            <li>
              <a href="javascript:;" className="has-arrow">
                <div className="parent-icon">
                  <i className="material-icons-outlined">inventory_2</i>
                </div>
                <div className="menu-title">Product Cards</div>
              </a>
              <ul>
                <li>
                  <a href="component-cards-basic.html">
                    <i className="material-icons-outlined">arrow_right</i>Basic
                    Details
                  </a>
                </li>
                <li>
                  <a href="component-cards-advance.html">
                    <i className="material-icons-outlined">arrow_right</i>
                    Advance Details
                  </a>
                </li>
                <li>
                  <a href="component-cards-contact.html">
                    <i className="material-icons-outlined">arrow_right</i>
                    Customer Contacts
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="javascript:;" className="has-arrow">
                <div className="parent-icon">
                  <i className="material-icons-outlined">shopping_bag</i>
                </div>
                <div className="menu-title">eCommerce</div>
              </a>
              <ul>
                <li>
                  <a href="ecommerce-add-product.html">
                    <i className="material-icons-outlined">arrow_right</i>Add
                    Product
                  </a>
                </li>
                <li>
                  <a href="ecommerce-products.html">
                    <i className="material-icons-outlined">arrow_right</i>
                    Products
                  </a>
                </li>
                <li>
                  <a href="ecommerce-customers.html">
                    <i className="material-icons-outlined">arrow_right</i>
                    Customers
                  </a>
                </li>
                <li>
                  <a href="ecommerce-customer-details.html">
                    <i className="material-icons-outlined">arrow_right</i>
                    Customer Details
                  </a>
                </li>
                <li>
                  <a href="ecommerce-orders.html">
                    <i className="material-icons-outlined">arrow_right</i>Orders
                  </a>
                </li>
                <li>
                  <a href="ecommerce-customer-details.html">
                    <i className="material-icons-outlined">arrow_right</i>Order
                    Details
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:;">
                <div className="parent-icon">
                  <i className="material-icons-outlined">card_giftcard</i>
                </div>
                <div className="menu-title">Suppliers</div>
              </a>
              <ul>
                <li>
                  <a href="component-alerts.html">
                    <i className="material-icons-outlined">arrow_right</i>Alerts
                  </a>
                </li>
                <li>
                  <a href="component-accordions.html">
                    <i className="material-icons-outlined">arrow_right</i>
                    Supplier Overview
                  </a>
                </li>
                <li>
                  <a href="component-badges.html">
                    <i className="material-icons-outlined">arrow_right</i>Badges
                  </a>
                </li>
                <li>
                  <a href="component-buttons.html">
                    <i className="material-icons-outlined">arrow_right</i>
                    Supplier Agreements
                  </a>
                </li>
                <li>
                  <a href="component-carousels.html">
                    <i className="material-icons-outlined">arrow_right</i>
                    Inventory Tracking
                  </a>
                </li>
                <li>
                  <a href="component-media-object.html">
                    <i className="material-icons-outlined">arrow_right</i>Media
                    Shipping Schedules
                  </a>
                </li>
                <li>
                  <a href="component-modals.html">
                    <i className="material-icons-outlined">arrow_right</i>
                    Warehouse
                  </a>
                </li>
                <li>
                  <a href="component-navs-tabs.html">
                    <i className="material-icons-outlined">arrow_right</i>Navs &
                    Delivery Tracking
                  </a>
                </li>
                {/*                 
                <li>
                  <a href="component-navbar.html">
                    <i className="material-icons-outlined">arrow_right</i>Navbar
                  </a>
                </li> */}

                <li>
                  <a href="component-paginations.html">
                    <i className="material-icons-outlined">arrow_right</i>
                    Order Fulfillment
                  </a>
                </li>
                <li>
                  <a href="component-popovers-tooltips.html">
                    <i className="material-icons-outlined">arrow_right</i>
                    Document Management
                  </a>
                </li>
                <li>
                  <a href="component-progress-bars.html">
                    <i className="material-icons-outlined">arrow_right</i>
                    Warehouse Locations
                  </a>
                </li>
                <li>
                  <a href="component-spinners.html">
                    <i className="material-icons-outlined">arrow_right</i>
                    Shipment In-Transit
                  </a>
                </li>
                <li>
                  <a href="component-notifications.html">
                    <i className="material-icons-outlined">arrow_right</i>
                    Supplier Communications
                  </a>
                </li>
                <li>
                  <a href="component-avtars-chips.html">
                    <i className="material-icons-outlined">arrow_right</i>
                    Supply Chain Status
                  </a>
                </li>
                <li>
                  <a href="component-typography.html">
                    <i className="material-icons-outlined">arrow_right</i>
                    Quality Control
                  </a>
                </li>
                <li>
                  <a href="component-text-utilities.html">
                    <i className="material-icons-outlined">arrow_right</i>
                    Payment & Invoices
                  </a>
                </li>
              </ul>
            </li>

            {/* <li>
              <a className="has-arrow" href="javascript:;">
                <div className="parent-icon">
                  <i className="material-icons-outlined">view_agenda</i>
                </div>
                <div className="menu-title">Icons</div>
              </a>
              <ul>
                <li>
                  <a href="icons-line-icons.html">
                    <i className="material-icons-outlined">arrow_right</i>Line
                    Icons
                  </a>
                </li>
                <li>
                  <a href="icons-boxicons.html">
                    <i className="material-icons-outlined">arrow_right</i>
                    Boxicons
                  </a>
                </li>
                <li>
                  <a href="icons-feather-icons.html">
                    <i className="material-icons-outlined">arrow_right</i>
                    Feather Icons
                  </a>
                </li>
              </ul>
            </li>
             */}

            {/* <li className="menu-label">Forms & Tables</li>
            <li>
              <a className="has-arrow" href="javascript:;">
                <div className="parent-icon">
                  <i className="material-icons-outlined">toc</i>
                </div>
                <div className="menu-title">Forms</div>
              </a>
              <ul>
                <li>
                  <a href="form-elements.html">
                    <i className="material-icons-outlined">arrow_right</i>Form
                    Elements
                  </a>
                </li>
                <li>
                  <a href="form-input-group.html">
                    <i className="material-icons-outlined">arrow_right</i>Input
                    Groups
                  </a>
                </li>
                <li>
                  <a href="form-radios-and-checkboxes.html">
                    <i className="material-icons-outlined">arrow_right</i>Radios
                    & Checkboxes
                  </a>
                </li>
                <li>
                  <a href="form-layouts.html">
                    <i className="material-icons-outlined">arrow_right</i>Forms
                    Layouts
                  </a>
                </li>
                <li>
                  <a href="form-validations.html">
                    <i className="material-icons-outlined">arrow_right</i>Form
                    Validation
                  </a>
                </li>
                <li>
                  <a href="form-wizard.html">
                    <i className="material-icons-outlined">arrow_right</i>Form
                    Wizard
                  </a>
                </li>
                <li>
                  <a href="form-file-upload.html">
                    <i className="material-icons-outlined">arrow_right</i>File
                    Upload
                  </a>
                </li>
                <li>
                  <a href="form-date-time-pickes.html">
                    <i className="material-icons-outlined">arrow_right</i>Date
                    Pickers
                  </a>
                </li>
                <li>
                  <a href="form-select2.html">
                    <i className="material-icons-outlined">arrow_right</i>
                    Select2
                  </a>
                </li>
                <li>
                  <a href="form-repeater.html">
                    <i className="material-icons-outlined">arrow_right</i>Form
                    Repeater
                  </a>
                </li>
              </ul>
            </li> */}

            <li>
              <a className="has-arrow" href="javascript:;">
                <div className="parent-icon">
                  <i className="material-icons-outlined">api</i>
                </div>
                <div className="menu-title">Tables</div>
              </a>
              <ul>
                <li>
                  <a href="table-basic-table.html">
                    <i className="material-icons-outlined">arrow_right</i>Basic
                    Table
                  </a>
                </li>
                <li>
                  <a href="table-datatable.html">
                    <i className="material-icons-outlined">arrow_right</i>Data
                    Table
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:;">
                <div className="parent-icon">
                  <i className="material-icons-outlined">apps</i>
                </div>
                <div className="menu-title">Apps</div>
              </a>
              <ul>
                <li>
                  <a href="app-fullcalender.html">
                    <i className="material-icons-outlined">arrow_right</i>
                    Calendar
                  </a>
                </li>
                <li>
                  <a href="app-to-do.html">
                    <i className="material-icons-outlined">arrow_right</i>To do
                  </a>
                </li>
                <li>
                  <a href="app-invoice.html">
                    <i className="material-icons-outlined">arrow_right</i>
                    Invoice
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-label">Auth</li>
            <li>
              <a className="has-arrow" href="javascript:;">
                <div className="parent-icon">
                  <i className="material-icons-outlined">lock</i>
                </div>
                <div className="menu-title">Authentication</div>
              </a>
              <ul>
                <li>
                  <a className="has-arrow" href="javascript:;">
                    <i className="material-icons-outlined">arrow_right</i>Basic
                  </a>
                  <ul>
                    <li>
                      <a href="auth-basic-login.html" target="_blank">
                        <i className="material-icons-outlined">arrow_right</i>
                        Login
                      </a>
                    </li>
                    <li>
                      <a href="auth-basic-register.html" target="_blank">
                        <i className="material-icons-outlined">arrow_right</i>
                        Register
                      </a>
                    </li>
                    <li>
                      <a href="auth-basic-forgot-password.html" target="_blank">
                        <i className="material-icons-outlined">arrow_right</i>
                        Forgot Password
                      </a>
                    </li>
                    <li>
                      <a href="auth-basic-reset-password.html" target="_blank">
                        <i className="material-icons-outlined">arrow_right</i>
                        Reset Password
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="has-arrow" href="javascript:;">
                    <i className="material-icons-outlined">arrow_right</i>Cover
                  </a>
                  <ul>
                    <li>
                      <a href="auth-cover-login.html" target="_blank">
                        <i className="material-icons-outlined">arrow_right</i>
                        Login
                      </a>
                    </li>
                    <li>
                      <a href="auth-cover-register.html" target="_blank">
                        <i className="material-icons-outlined">arrow_right</i>
                        Register
                      </a>
                    </li>
                    <li>
                      <a href="auth-cover-forgot-password.html" target="_blank">
                        <i className="material-icons-outlined">arrow_right</i>
                        Forgot Password
                      </a>
                    </li>
                    <li>
                      <a href="auth-cover-reset-password.html" target="_blank">
                        <i className="material-icons-outlined">arrow_right</i>
                        Reset Password
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="has-arrow" href="javascript:;">
                    <i className="material-icons-outlined">arrow_right</i>Boxed
                  </a>
                  <ul>
                    <li>
                      <a href="auth-boxed-login.html" target="_blank">
                        <i className="material-icons-outlined">arrow_right</i>
                        Login
                      </a>
                    </li>
                    <li>
                      <a href="auth-boxed-register.html" target="_blank">
                        <i className="material-icons-outlined">arrow_right</i>
                        Register
                      </a>
                    </li>
                    <li>
                      <a href="auth-boxed-forgot-password.html" target="_blank">
                        <i className="material-icons-outlined">arrow_right</i>
                        Forgot Password
                      </a>
                    </li>
                    <li>
                      <a href="auth-boxed-reset-password.html" target="_blank">
                        <i className="material-icons-outlined">arrow_right</i>
                        Reset Password
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="user-profile.html">
                <div className="parent-icon">
                  <i className="material-icons-outlined">person</i>
                </div>
                <div className="menu-title">User Profile</div>
              </a>
            </li>
            <li>
              <a href="timeline.html">
                <div className="parent-icon">
                  <i className="material-icons-outlined">join_right</i>
                </div>
                <div className="menu-title">Timeline</div>
              </a>
            </li>
            <li>
              <a className="has-arrow" href="javascript:;">
                <div className="parent-icon">
                  <i className="material-icons-outlined">report_problem</i>
                </div>
                <div className="menu-title">Vault</div>
              </a>
              <ul>
                <li>
                  <a href="pages-error-404.html" target="_blank">
                    <i className="material-icons-outlined">arrow_right</i>404
                    Error
                  </a>
                </li>
                <li>
                  <a href="pages-error-505.html" target="_blank">
                    <i className="material-icons-outlined">arrow_right</i>505
                    Error
                  </a>
                </li>
                <li>
                  <a href="pages-coming-soon.html" target="_blank">
                    <i className="material-icons-outlined">arrow_right</i>Coming
                    Soon
                  </a>
                </li>
                <li>
                  <a href="pages-starter-page.html" target="_blank">
                    <i className="material-icons-outlined">arrow_right</i>Blank
                    Page
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="faq.html">
                <div className="parent-icon">
                  <i className="material-icons-outlined">help_outline</i>
                </div>
                <div className="menu-title">FAQ</div>
              </a>
            </li>

            {/* <li>
              <a href="pricing-table.html">
                <div className="parent-icon">
                  <i className="material-icons-outlined">sports_football</i>
                </div>
                <div className="menu-title">Pricing</div>
              </a>
            </li> */}

            {/* <li className="menu-label">Charts & Maps</li> */}

            {/* 
            <li>
              <a className="has-arrow" href="javascript:;">
                <div className="parent-icon">
                  <i className="material-icons-outlined">fitbit</i>
                </div>
                <div className="menu-title">Charts</div>
              </a>
              <ul>
                <li>
                  <a href="charts-apex-chart.html">
                    <i className="material-icons-outlined">arrow_right</i>Apex
                  </a>
                </li>
                <li>
                  <a href="charts-chartjs.html">
                    <i className="material-icons-outlined">arrow_right</i>
                    Chartjs
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:;">
                <div className="parent-icon">
                  <i className="material-icons-outlined">sports_football</i>
                </div>
                <div className="menu-title">Maps</div>
              </a>
              <ul>
                <li>
                  <a href="map-google-maps.html">
                    <i className="material-icons-outlined">arrow_right</i>Google
                    Maps
                  </a>
                </li>
                <li>
                  <a href="map-vector-maps.html">
                    <i className="material-icons-outlined">arrow_right</i>Vector
                    Maps
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-label">Others</li>
            <li>
              <a className="has-arrow" href="javascript:;">
                <div className="parent-icon">
                  <i className="material-icons-outlined">face_5</i>
                </div>
                <div className="menu-title">Menu Levels</div>
              </a>
              <ul>
                <li>
                  <a className="has-arrow" href="javascript:;">
                    <i className="material-icons-outlined">arrow_right</i>Level
                    One
                  </a>
                  <ul>
                    <li>
                      <a className="has-arrow" href="javascript:;">
                        <i className="material-icons-outlined">arrow_right</i>
                        Level Two
                      </a>
                      <ul>
                        <li>
                          <a href="javascript:;">
                            <i className="material-icons-outlined">
                              arrow_right
                            </i>
                            Level Three
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascrpt:;">
                <div className="parent-icon">
                  <i className="material-icons-outlined">description</i>
                </div>
                <div className="menu-title">Documentation</div>
              </a>
            </li>
            <li>
              <a href="javascrpt:;">
                <div className="parent-icon">
                  <i className="material-icons-outlined">support</i>
                </div>
                <div className="menu-title">Support</div>
              </a>
            </li> */}
          </ul>
          {/* <!--end navigation--> */}
        </div>

        <div className="sidebar-bottom gap-4">
          <div className="dropdown dropup-center dropup dropdown-laungauge">
            <a
              className="dropdown-toggle dropdown-toggle-nocaret footer-icon"
              href="avascript:;"
              data-bs-toggle="dropdown"
            >
              <img src="assets/images/county/kenya2.png" width="22" alt="" />
            </a>

            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a
                  className="dropdown-item d-flex align-items-center py-2"
                  href="javascript:;"
                >
                  <img src="assets/images/county/01.png" width="20" alt="" />
                  <span className="ms-2">English</span>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item d-flex align-items-center py-2"
                  href="javascript:;"
                >
                  <img src="assets/images/county/02.png" width="20" alt="" />
                  <span className="ms-2">Catalan</span>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item d-flex align-items-center py-2"
                  href="javascript:;"
                >
                  <img src="assets/images/county/03.png" width="20" alt="" />
                  <span className="ms-2">French</span>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item d-flex align-items-center py-2"
                  href="javascript:;"
                >
                  <img src="assets/images/county/04.png" width="20" alt="" />
                  <span className="ms-2">Belize</span>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item d-flex align-items-center py-2"
                  href="javascript:;"
                >
                  <img src="assets/images/county/05.png" width="20" alt="" />
                  <span className="ms-2">Colombia</span>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item d-flex align-items-center py-2"
                  href="javascript:;"
                >
                  <img src="assets/images/county/06.png" width="20" alt="" />
                  <span className="ms-2">Spanish</span>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item d-flex align-items-center py-2"
                  href="javascript:;"
                >
                  <img src="assets/images/county/07.png" width="20" alt="" />
                  <span className="ms-2">Georgian</span>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item d-flex align-items-center py-2"
                  href="javascript:;"
                >
                  <img src="assets/images/county/08.png" width="20" alt="" />
                  <span className="ms-2">Hindi</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="dropdown dropup-center dropup dropdown-help">
            <a
              className="footer-icon  dropdown-toggle dropdown-toggle-nocaret option"
              // href="javascript:;"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {/* <span className="material-icons-outlined">info</span> */}
            </a>

            {/* <div className="dropdown-menu dropdown-option dropdown-menu-end shadow">
              <div>
                <a
                  className="dropdown-item d-flex align-items-center gap-2 py-2"
                  href="javascript:;"
                >
                  <i className="material-icons-outlined fs-6">inventory_2</i>
                  Archive All
                </a>
              </div>
              <div>
                <a
                  className="dropdown-item d-flex align-items-center gap-2 py-2"
                  href="javascript:;"
                >
                  <i className="material-icons-outlined fs-6">done_all</i>Mark
                  all as read
                </a>
              </div>
              <div>
                <a
                  className="dropdown-item d-flex align-items-center gap-2 py-2"
                  href="javascript:;"
                >
                  <i className="material-icons-outlined fs-6">mic_off</i>Disable
                  Notifications
                </a>
              </div>
              <div>
                <a
                  className="dropdown-item d-flex align-items-center gap-2 py-2"
                  href="javascript:;"
                >
                  <i className="material-icons-outlined fs-6">grade</i>What's
                  new ?
                </a>
              </div>
              <div>
                <hr className="dropdown-divider" />
              </div>
              <div>
                <a
                  className="dropdown-item d-flex align-items-center gap-2 py-2"
                  href="javascript:;"
                >
                  <i className="material-icons-outlined fs-6">leaderboard</i>
                  Reports
                </a>
              </div>
            </div> */}
          </div>

          <div className="dark-mode">
            <a href="javascript:;" className="footer-icon dark-mode-icon">
              <i className="material-icons-outlined">dark_mode</i>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}

export default SideBar;
