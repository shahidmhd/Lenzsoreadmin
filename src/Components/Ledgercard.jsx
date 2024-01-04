import React from 'react'

function Ledgercard() {
  return (
    <div className="row g-3 mb-3 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-4">
            <div className="col">
              <div className="alert-success alert mb-0">
                <div className="d-flex align-items-center">
                  <div className="avatar rounded no-thumbnail bg-success text-light">
                  <i class="fa fa-dollar-sign fa-lg"></i>
                  
                  </div>
                  <div className="flex-fill ms-3 text-truncate">
                    <div className="h6 mb-0">Revenue</div>
                    <span className="small">$18,925</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="alert-danger alert mb-0">
                <div className="d-flex align-items-center">
                  <div className="avatar rounded no-thumbnail bg-danger text-light">
                    <i className="fa fa-credit-card fa-lg" />
                  </div>
                  <div className="flex-fill ms-3 text-truncate">
                    <div className="h6 mb-0">Expense</div>
                    <span className="small">$11,024</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="alert-warning alert mb-0">
                <div className="d-flex align-items-center">
                  <div className="avatar rounded no-thumbnail bg-warning text-light">
                    {/* <i className="fa fa-smile-o fa-lg" /> */}
                    <i className="fa fa-credit-card fa-lg" />
                  </div>
                  <div className="flex-fill ms-3 text-truncate">
                    <div className="h6 mb-0">Happy Clients</div>
                    <span className="small">8,925</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="alert-info alert mb-0">
                <div className="d-flex align-items-center">
                  <div className="avatar rounded no-thumbnail bg-info text-light">
                    <i className="fa fa-shopping-bag" aria-hidden="true" />
                  </div>
                  <div className="flex-fill ms-3 text-truncate">
                    <div className="h6 mb-0">New StoreOpen</div>
                    <span className="small">8,925</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Ledgercard