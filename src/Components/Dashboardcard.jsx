import React from 'react'

function Dashboardcard() {
  return (
    <div className="row g-3">
    <div className="col-lg-12 col-md-12">
      <div className="tab-filter d-flex align-items-center justify-content-between mb-3 flex-wrap">
        <ul className="nav nav-tabs tab-card tab-body-header rounded  d-inline-flex w-sm-100">
          <li className="nav-item">
            <a
              className="nav-link active"
              data-bs-toggle="tab"
              href="#summery-today"
            >
              Today
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="tab"
              href="#summery-week"
            >
              Week
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="tab"
              href="#summery-month"
            >
              Month
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="tab"
              href="#summery-year"
            >
              Year
            </a>
          </li>
        </ul>
        <div className="date-filter d-flex align-items-center mt-2 mt-sm-0 w-sm-100">
          <div className="input-group">
            <input type="date" className="form-control" />
            <button className="btn btn-primary" type="button">
              <i className="icofont-filter fs-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="tab-content mt-1">
        <div className="tab-pane fade show active" id="summery-today">
          <div className="row g-1 g-sm-3 mb-3 row-deck">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-info">
                    <span className="text-muted">Customers</span>
                    <div>
                      <span className="fs-6 fw-bold me-2">14,208</span>
                    </div>
                  </div>
                  <div className="right-icon">
                    <i className="icofont-student-alt fs-3 color-light-orange" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-info">
                    <span className="text-muted">Order</span>
                    <div>
                      <span className="fs-6 fw-bold me-2">2314</span>
                    </div>
                  </div>
                  <div className="right-icon">
                    <i className="icofont-shopping-cart fs-3 color-lavender-purple" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-info">
                    <span className="text-muted">Avg Sale</span>
                    <div>
                      <span className="fs-6 fw-bold me-2">$1770</span>
                    </div>
                  </div>
                  <div className="right-icon">
                    <i className="icofont-sale-discount fs-3 color-santa-fe" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-info">
                    <span className="text-muted">Avg Item Sale</span>
                    <div>
                      <span className="fs-6 fw-bold me-2">185</span>
                    </div>
                  </div>
                  <div className="right-icon">
                    <i className="icofont-calculator-alt-2 fs-3 color-danger" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-info">
                    <span className="text-muted">Total Sale</span>
                    <div>
                      <span className="fs-6 fw-bold me-2">$35000</span>
                    </div>
                  </div>
                  <div className="right-icon">
                    <i className="icofont-calculator-alt-1 fs-3 color-lightblue" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-info">
                    <span className="text-muted">Visitors</span>
                    <div>
                      <span className="fs-6 fw-bold me-2">11452</span>
                    </div>
                  </div>
                  <div className="right-icon">
                    <i className="icofont-users-social fs-3 color-light-success" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-info">
                    <span className="text-muted">Total Products</span>
                    <div>
                      <span className="fs-6 fw-bold me-2">184511</span>
                    </div>
                  </div>
                  <div className="right-icon">
                    <i className="icofont-bag fs-3 color-light-orange" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-info">
                    <span className="text-muted">Top Selling Item</span>
                    <div>
                      <span className="fs-6 fw-bold me-2">122</span>
                    </div>
                  </div>
                  <div className="right-icon">
                    <i className="icofont-star fs-3 color-lightyellow" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-info">
                    <span className="text-muted">Dealership</span>
                    <div>
                      <span className="fs-6 fw-bold me-2">32</span>
                    </div>
                  </div>
                  <div className="right-icon">
                    <i className="icofont-handshake-deal fs-3 color-lavender-purple" />
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* row end */}
        </div>
        <div className="tab-pane fade" id="summery-week">
          <div className="row g-3 mb-4 row-deck">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-info">
                    <span className="text-muted">Customers</span>
                    <div>
                      <span className="fs-6 fw-bold me-2">54,208</span>
                    </div>
                  </div>
                  <div className="right-icon">
                    <i className="icofont-student-alt fs-3 color-light-orange" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-info">
                    <span className="text-muted">Order</span>
                    <div>
                      <span className="fs-6 fw-bold me-2">12314</span>
                    </div>
                  </div>
                  <div className="right-icon">
                    <i className="icofont-shopping-cart fs-3 color-lavender-purple" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-info">
                    <span className="text-muted">Avg Sale</span>
                    <div>
                      <span className="fs-6 fw-bold me-2">$11770</span>
                    </div>
                  </div>
                  <div className="right-icon">
                    <i className="icofont-sale-discount fs-3 color-santa-fe" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-info">
                    <span className="text-muted">Avg Item Sale</span>
                    <div>
                      <span className="fs-6 fw-bold me-2">1185</span>
                    </div>
                  </div>
                  <div className="right-icon">
                    <i className="icofont-calculator-alt-2 fs-3 color-danger" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-info">
                    <span className="text-muted">Total Sale</span>
                    <div>
                      <span className="fs-6 fw-bold me-2">$135000</span>
                    </div>
                  </div>
                  <div className="right-icon">
                    <i className="icofont-calculator-alt-1 fs-3 color-lightblue" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-info">
                    <span className="text-muted">Visitors</span>
                    <div>
                      <span className="fs-6 fw-bold me-2">111452</span>
                    </div>
                  </div>
                  <div className="right-icon">
                    <i className="icofont-users-social fs-3 color-light-success" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-info">
                    <span className="text-muted">Total Products</span>
                    <div>
                      <span className="fs-6 fw-bold me-2">194511</span>
                    </div>
                  </div>
                  <div className="right-icon">
                    <i className="icofont-bag fs-3 color-light-orange" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-info">
                    <span className="text-muted">Top Selling Item</span>
                    <div>
                      <span className="fs-6 fw-bold me-2">1122</span>
                    </div>
                  </div>
                  <div className="right-icon">
                    <i className="icofont-star fs-3 color-lightyellow" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-info">
                    <span className="text-muted">Dealership</span>
                    <div>
                      <span className="fs-6 fw-bold me-2">132</span>
                    </div>
                  </div>
                  <div className="right-icon">
                    <i className="icofont-handshake-deal fs-3 color-lavender-purple" />
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* row end */}
        </div>
        <div className="tab-pane fade" id="summery-month">
          <div className="row g-3 mb-4 row-deck">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-info">
                    <span className="text-muted">Customers</span>
                    <div>
                      <span className="fs-6 fw-bold me-2">74,208</span>
                    </div>
                  </div>
                  <div className="right-icon">
                    <i className="icofont-student-alt fs-3 color-light-orange" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-info">
                    <span className="text-muted">Order</span>
                    <div>
                      <span className="fs-6 fw-bold me-2">22314</span>
                    </div>
                  </div>
                  <div className="right-icon">
                    <i className="icofont-shopping-cart fs-3 color-lavender-purple" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-info">
                    <span className="text-muted">Avg Sale</span>
                    <div>
                      <span className="fs-6 fw-bold me-2">$21770</span>
                    </div>
                  </div>
                  <div className="right-icon">
                    <i className="icofont-sale-discount fs-3 color-santa-fe" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-info">
                    <span className="text-muted">Avg Item Sale</span>
                    <div>
                      <span className="fs-6 fw-bold me-2">2185</span>
                    </div>
                  </div>
                  <div className="right-icon">
                    <i className="icofont-calculator-alt-2 fs-3 color-danger" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-info">
                    <span className="text-muted">Total Sale</span>
                    <div>
                      <span className="fs-6 fw-bold me-2">$235000</span>
                    </div>
                  </div>
                  <div className="right-icon">
                    <i className="icofont-calculator-alt-1 fs-3 color-lightblue" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-info">
                    <span className="text-muted">Visitors</span>
                    <div>
                      <span className="fs-6 fw-bold me-2">211452</span>
                    </div>
                  </div>
                  <div className="right-icon">
                    <i className="icofont-users-social fs-3 color-light-success" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-info">
                    <span className="text-muted">Total Products</span>
                    <div>
                      <span className="fs-6 fw-bold me-2">284511</span>
                    </div>
                  </div>
                  <div className="right-icon">
                    <i className="icofont-bag fs-3 color-light-orange" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-info">
                    <span className="text-muted">Top Selling Item</span>
                    <div>
                      <span className="fs-6 fw-bold me-2">222</span>
                    </div>
                  </div>
                  <div className="right-icon">
                    <i className="icofont-star fs-3 color-lightyellow" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-info">
                    <span className="text-muted">Dealership</span>
                    <div>
                      <span className="fs-6 fw-bold me-2">232</span>
                    </div>
                  </div>
                  <div className="right-icon">
                    <i className="icofont-handshake-deal fs-3 color-lavender-purple" />
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* row end */}
        </div>
        <div className="tab-pane fade" id="summery-year">
          <div className="row g-3 mb-4 row-deck">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-info">
                    <span className="text-muted">Customers</span>
                    <div>
                      <span className="fs-6 fw-bold me-2">104,208</span>
                    </div>
                  </div>
                  <div className="right-icon">
                    <i className="icofont-student-alt fs-3 color-light-orange" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-info">
                    <span className="text-muted">Order</span>
                    <div>
                      <span className="fs-6 fw-bold me-2">252314</span>
                    </div>
                  </div>
                  <div className="right-icon">
                    <i className="icofont-shopping-cart fs-3 color-lavender-purple" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-info">
                    <span className="text-muted">Avg Sale</span>
                    <div>
                      <span className="fs-6 fw-bold me-2">$852770</span>
                    </div>
                  </div>
                  <div className="right-icon">
                    <i className="icofont-sale-discount fs-3 color-santa-fe" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-info">
                    <span className="text-muted">Avg Item Sale</span>
                    <div>
                      <span className="fs-6 fw-bold me-2">75885</span>
                    </div>
                  </div>
                  <div className="right-icon">
                    <i className="icofont-calculator-alt-2 fs-3 color-danger" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-info">
                    <span className="text-muted">Total Sale</span>
                    <div>
                      <span className="fs-6 fw-bold me-2">$350000</span>
                    </div>
                  </div>
                  <div className="right-icon">
                    <i className="icofont-calculator-alt-1 fs-3 color-lightblue" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-info">
                    <span className="text-muted">Visitors</span>
                    <div>
                      <span className="fs-6 fw-bold me-2">114521452</span>
                    </div>
                  </div>
                  <div className="right-icon">
                    <i className="icofont-users-social fs-3 color-light-success" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-info">
                    <span className="text-muted">Total Products</span>
                    <div>
                      <span className="fs-6 fw-bold me-2">884511</span>
                    </div>
                  </div>
                  <div className="right-icon">
                    <i className="icofont-bag fs-3 color-light-orange" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-info">
                    <span className="text-muted">Top Selling Item</span>
                    <div>
                      <span className="fs-6 fw-bold me-2">7522</span>
                    </div>
                  </div>
                  <div className="right-icon">
                    <i className="icofont-star fs-3 color-lightyellow" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-info">
                    <span className="text-muted">Dealership</span>
                    <div>
                      <span className="fs-6 fw-bold me-2">1832</span>
                    </div>
                  </div>
                  <div className="right-icon">
                    <i className="icofont-handshake-deal fs-3 color-lavender-purple" />
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* row end */}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Dashboardcard