import React from 'react'
import Ledgercard from '../Components/Ledgercard'
import Dashboardcard from '../Components/Dashboardcard'

function Dashboard() {
  return (
    <>
      {/*Ledgercard  */}
      <Ledgercard />
            {/*  */}
            {/* Row end  */}
            <Dashboardcard />
            {/* Row end  */}
            <div className="row g-3 mb-3">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                    <h6 className="m-0 fw-bold">Sales Status</h6>
                  </div>
                  <div className="card-body">
                    <div id="apex-GenderOverview" />
                  </div>
                </div>
              </div>
            </div>
            {/* Row end  */}
            <div className="row g-3 mb-3">
              <div className="col-xxl-8 col-xl-8">
                <div className="card mb-3">
                  <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                    <h6 className="m-0 fw-bold">Shopping Status</h6>
                  </div>
                  <div className="card-body">
                    <div
                      className="ac-line-transparent"
                      id="apex-shoppingstatus"
                    />
                  </div>
                </div>
                <div className="card">
                  <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                    <h6 className="m-0 fw-bold">Top Selling Product</h6>
                  </div>
                  <div className="card-body">
                    <div id="topselling" />
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4">
                <div className="card">
                  <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                    <h6 className="m-0 fw-bold">
                      Our Branch Location &amp; Revenue
                    </h6>
                  </div>
                  <div className="card-body">
                    <div
                      id="googleMap"
                      style={{ width: "100%", height: 397 }}
                    />
                    <div className="location-revenue mt-5">
                      <label className="fw-bold">India</label>
                      <div className="progress mb-4" style={{ height: 8 }}>
                        <div
                          className="progress-bar progress-bar-striped"
                          role="progressbar"
                          style={{ width: "30%" }}
                          aria-valuenow={30}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <label className="fw-bold">Mauritius</label>
                      <div className="progress mb-4" style={{ height: 8 }}>
                        <div
                          className="progress-bar progress-bar-striped bg-success"
                          role="progressbar"
                          style={{ width: "45%" }}
                          aria-valuenow={45}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <label className="fw-bold">Colombia</label>
                      <div className="progress mb-4" style={{ height: 8 }}>
                        <div
                          className="progress-bar progress-bar-striped bg-info"
                          role="progressbar"
                          style={{ width: "60%" }}
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <label className="fw-bold">Russia</label>
                      <div className="progress mb-4" style={{ height: 8 }}>
                        <div
                          className="progress-bar progress-bar-striped bg-warning"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <label className="fw-bold">France</label>
                      <div className="progress mb-3" style={{ height: 8 }}>
                        <div
                          className="progress-bar progress-bar-striped bg-danger"
                          role="progressbar"
                          style={{ width: "98%" }}
                          aria-valuenow={98}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Row end  */}
            <div className="row g-3 mb-3 row-deck">
              <div className="col-lg-4 col-md-12">
                <div className="card">
                  <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                    <h6 className="m-0 fw-bold">Active Users Status</h6>
                  </div>
                  <div className="card-body">
                    <div className="p-4 active-user bg-lightblue rounded-2 mb-2">
                      <span className="fw-bold d-flex justify-content-center fs-3">
                        1345
                      </span>
                    </div>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Active pages</th>
                            <th scope="col">Users</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <a href="#">/dist/product.html</a>
                            </td>
                            <td>245</td>
                          </tr>
                          <tr>
                            <td>
                              <a href="#">/dist/product-cart.html</a>
                            </td>
                            <td>455</td>
                          </tr>
                          <tr>
                            <td>
                              <a href="#">/dist/admin-profile.html</a>
                            </td>
                            <td>45</td>
                          </tr>
                          <tr>
                            <td>
                              <a href="#">/dist/order-history.html</a>
                            </td>
                            <td>545</td>
                          </tr>
                          <tr>
                            <td>
                              <a href="#">/dist/product-detail.html</a>
                            </td>
                            <td>55</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="card">
                  <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                    <h6 className="m-0 fw-bold">Avg Expense Costs</h6>
                  </div>
                  <div className="card-body">
                    <div className="h2 mb-0">$1105.5</div>
                    <span className="text-muted small">
                      Avg Expense Costs All Month
                    </span>
                    <div id="apex-expense" />
                  </div>
                </div>
              </div>
            </div>
            {/* Row end  */}
            <div className="row g-3 mb-3">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                    <h6 className="m-0 fw-bold">Recent Transactions</h6>
                  </div>
                  <div className="card-body">
                    <table
                      id="myDataTable"
                      className="table table-hover align-middle mb-0"
                      style={{ width: "100%" }}
                    >
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Item</th>
                          <th>Customer Name</th>
                          <th>Payment Info</th>
                          <th>Price</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <strong>#Order-78414</strong>
                          </td>
                          <td>
                            <img
                              src="assets/images/product/product-1.jpg"
                              className="avatar lg rounded me-2"
                              alt="profile-image"
                            />
                            <span> Oculus VR </span>
                          </td>
                          <td>Molly</td>
                          <td>Credit Card</td>
                          <td>$420</td>
                          <td>
                            <span className="badge bg-warning">Progress</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>#Order-58414</strong>
                          </td>
                          <td>
                            <img
                              src="assets/images/product/product-2.jpg"
                              className="avatar lg rounded me-2"
                              alt="profile-image"
                            />
                            <span>Wall Clock</span>
                          </td>
                          <td>Brian</td>
                          <td>Debit Card</td>
                          <td>$220</td>
                          <td>
                            <span className="badge bg-success">Complited</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>#Order-48414</strong>
                          </td>
                          <td>
                            <img
                              src="assets/images/product/product-3.jpg"
                              className="avatar lg rounded me-2"
                              alt="profile-image"
                            />
                            <span>Note Diaries</span>
                          </td>
                          <td>Julia</td>
                          <td>Debit Card</td>
                          <td>$250</td>
                          <td>
                            <span className="badge bg-success">Complited</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>#Order-38414</strong>
                          </td>
                          <td>
                            <img
                              src="assets/images/product/product-4.jpg"
                              className="avatar lg rounded me-2"
                              alt="profile-image"
                            />
                            <span>Flower Port</span>
                          </td>
                          <td>Sonia</td>
                          <td>Credit Card</td>
                          <td>$320</td>
                          <td>
                            <span className="badge bg-warning">Progress</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>#Order-28414</strong>
                          </td>
                          <td>
                            <img
                              src="assets/images/product/product-1.jpg"
                              className="avatar lg rounded me-2"
                              alt="profile-image"
                            />
                            <span>Oculus VR</span>
                          </td>
                          <td>Adam H</td>
                          <td>Debit Card</td>
                          <td>$20</td>
                          <td>
                            <span className="badge bg-warning">Progress</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>#Order-18414</strong>
                          </td>
                          <td>
                            <img
                              src="assets/images/product/product-2.jpg"
                              className="avatar lg rounded me-2"
                              alt="profile-image"
                            />
                            <span>Wall Clock</span>
                          </td>
                          <td>Alexander</td>
                          <td>Debit Card</td>
                          <td>$820</td>
                          <td>
                            <span className="badge bg-success">Complited</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>#Order-11414</strong>
                          </td>
                          <td>
                            <img
                              src="assets/images/product/product-3.jpg"
                              className="avatar lg rounded me-2"
                              alt="profile-image"
                            />
                            <span>Note Diaries</span>
                          </td>
                          <td>Gabrielle</td>
                          <td>Bank Emi</td>
                          <td>$620</td>
                          <td>
                            <span className="badge bg-success">Complited</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* Row end  */}
    </>
  )
}

export default Dashboard