import React from "react";

function Earnings() {
  return (
    <>
      <div className="row row-cols-1 row-cols-xl-4">
        <div className="col">
          <div className="card border-primary border-bottom rounded-4">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <p className="mb-0 fs-6">Total Sales</p>
                <div className="dropdown">
                  <a
                    href="javascript:;"
                    className="dropdown-toggle-nocaret options dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <span className="material-icons-outlined fs-5">
                      more_vert
                    </span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="javascript:;">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:;">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:;">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between mt-3">
                <div className="">
                  <h4 className="mb-0 fw-bold">$100000</h4>
                  <div className="d-flex align-items-center justify-content-start gap-1 text-success mt-3">
                    <span className="material-icons-outlined fs-6">north</span>
                    <p className="mb-0 fs-6">20%</p>
                  </div>
                </div>
                <div id="chart1"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-success border-bottom rounded-4">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <p className="mb-0 fs-6">Total Income</p>
                <div className="dropdown">
                  <a
                    href="javascript:;"
                    className="dropdown-toggle-nocaret options dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <span className="material-icons-outlined fs-5">
                      more_vert
                    </span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="javascript:;">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:;">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:;">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between mt-3">
                <div className="">
                  <h4 className="mb-0 fw-bold">$9000.20</h4>
                  <div className="d-flex align-items-center justify-content-start gap-1 text-success mt-3">
                    <span className="material-icons-outlined fs-6">north</span>
                    <p className="mb-0 fs-6">9%</p>
                  </div>
                </div>
                <div id="chart2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-danger border-bottom rounded-4">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <p className="mb-0 fs-6">Product Views</p>
                <div className="dropdown">
                  <a
                    href="javascript:;"
                    className="dropdown-toggle-nocaret options dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <span className="material-icons-outlined fs-5">
                      more_vert
                    </span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="javascript:;">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:;">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:;">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between mt-3">
                <div className="">
                  <h4 className="mb-0 fw-bold">300.9K</h4>
                  <div className="d-flex align-items-center justify-content-start gap-1 text-success mt-3">
                    <span className="material-icons-outlined fs-6">north</span>
                    <p className="mb-0 fs-6">100.5%</p>
                  </div>
                </div>
                <div id="chart3"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-warning border-bottom rounded-4">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <p className="mb-0 fs-6">New Accouts</p>
                <div className="dropdown">
                  <a
                    href="javascript:;"
                    className="dropdown-toggle-nocaret options dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <span className="material-icons-outlined fs-5">
                      more_vert
                    </span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="javascript:;">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:;">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:;">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between mt-3">
                <div className="">
                  <h4 className="mb-0 fw-bold">2497</h4>
                  <div className="d-flex align-items-center justify-content-start gap-1 text-success mt-3">
                    <span className="material-icons-outlined fs-6">north</span>
                    <p className="mb-0 fs-6">5.6%</p>
                  </div>
                </div>
                <div id="chart4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Earnings;
