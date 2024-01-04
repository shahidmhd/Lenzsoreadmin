import React from 'react'

function Addproduct() {
  return (
    <>
  <div className="row align-items-center">
    <div className="border-0 mb-4">
      <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
        <h3 className="fw-bold mb-0">Products Add</h3>
        <button
          type="submit"
          className="btn btn-primary btn-set-task w-sm-100 py-2 px-5 text-uppercase"
        >
          Save
        </button>
      </div>
    </div>
  </div>{" "}
  {/* Row end  */}
  <div className="row g-3 mb-3">
    <div className="col-xl-4 col-lg-4">
      <div className="sticky-lg-top">
        <div className="card mb-3">
          <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
            <h6 className="m-0 fw-bold">Pricing Info</h6>
          </div>
          <div className="card-body">
            <div className="row g-3 align-items-center">
              <div className="col-md-12">
                <label className="form-label">Product Price Old</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-12">
                <label className="form-label">Product Price New</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-12">
                <label className="form-label">Product Coupon</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
            <h6 className="m-0 fw-bold">Visibility Status</h6>
          </div>
          <div className="card-body">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="couponsstatus"
                defaultChecked=""
              />
              <label className="form-check-label">Published</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="couponsstatus"
              />
              <label className="form-check-label">Scheduled</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="couponsstatus"
              />
              <label className="form-check-label">Hidden</label>
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
            <h6 className="m-0 fw-bold">Size</h6>
          </div>
          <div className="card-body">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="sizechek1"
              />
              <label className="form-check-label" htmlFor="sizechek1">
                XS
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="sizechek2"
              />
              <label className="form-check-label" htmlFor="sizechek2">
                S
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="sizechek3"
              />
              <label className="form-check-label" htmlFor="sizechek3">
                M
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="sizechek4"
              />
              <label className="form-check-label" htmlFor="sizechek4">
                L
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="sizechek5"
              />
              <label className="form-check-label" htmlFor="sizechek5">
                XL
              </label>
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
            <h6 className="m-0 fw-bold">Publish Schedule</h6>
          </div>
          <div className="card-body">
            <div className="row g-3 align-items-center">
              <div className="col-md-12">
                <label className="form-label">Publish Date</label>
                <input type="date" className="form-control w-100" />
              </div>
              <div className="col-md-12">
                <label className="form-label">Publish Time</label>
                <input type="time" className="form-control w-100" />
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
            <h6 className="m-0 fw-bold">Tags</h6>
          </div>
          <div className="card-body">
            <div className="form-group demo-tagsinput-area">
              <div className="form-line">
                <input
                  type="text"
                  className="form-control"
                  data-role="tagsinput"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
            <h6 className="m-0 fw-bold">Categories</h6>
          </div>
          <div className="card-body">
            <label className="form-label">Categories Select</label>
            <select
              className="form-select"
              size={3}
              aria-label="size 3 select example"
            >
              <option value={1}>Watch</option>
              <option value={2}>Clothes</option>
              <option value={3}>Toy</option>
              <option value={4}>Cosmetic</option>
              <option value={5}>Laptop</option>
              <option value={6}>Mobile</option>
              <option value={7}>Gaming accessories</option>
            </select>
          </div>
        </div>
        <div className="card">
          <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
            <h6 className="m-0 fw-bold">Inventory Info</h6>
          </div>
          <div className="card-body">
            <div className="row g-3 align-items-center">
              <div className="col-md-12">
                <label className="form-label">SKU</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-12">
                <label className="form-label">Total Stock Quantity</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-8 col-lg-8">
      <div className="card mb-3">
        <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
          <h6 className="mb-0 fw-bold ">Basic information</h6>
        </div>
        <div className="card-body">
          <form>
            <div className="row g-3 align-items-center">
              <div className="col-md-6">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Page Title</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-12">
                <label className="form-label">Product Identifier URL</label>
                <div className="input-group mb-3">
                  <span className="input-group-text">https://eBazar.com/</span>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-12">
                <label className="form-label">Product Description</label>
                <div id="editor">
                  <h4>Enter Product Description Here</h4>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      
      <div className="card mb-3">
        <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
          <h6 className="mb-0 fw-bold ">Images</h6>
        </div>
        <div className="card-body">
          <form>
            <div className="row g-3 align-items-center">
              <div className="col-md-12">
                <label className="form-label">Product Images Upload</label>
                <small className="d-block text-muted mb-2">
                  Only portrait or square images, 2M max and 2000px max-height.
                </small>
                <input
                  type="file"
                  id="input-file-to-destroy"
                  className="dropify"
                  data-allowed-formats="portrait square"
                  data-max-file-size="2M"
                  data-max-height={2000}
                />
              </div>
              <div className="col-md-12">
                <label className="form-label w-100">Select Product Color</label>
                <input type="color" id="color" />
              </div>
              <div className="col-md-12">
                <div className="product-cart">
                  <div className="checkout-table table-responsive">
                    <table
                      id="myCartTable"
                      className="table display dataTable table-hover align-middle"
                      style={{ width: "100%" }}
                    >
                      <thead>
                        <tr>
                          <th className="product">Product</th>
                          <th className="product">Product Tag Name</th>
                          <th className="quantity">Color</th>
                          <th className="quantity">Quantity</th>
                          <th className="quantity">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="product-cart d-flex align-items-center">
                              <div className="product-thumb">
                                <img
                                  src="assets/images/product/upload.png"
                                  className="img-fluid avatar xl"
                                  alt="Product"
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Product tag name"
                            />
                          </td>
                          <td>
                            <input type="color" className="form-control" />
                          </td>
                          <td>
                            <div className="product-quantity d-inline-flex">
                              <input type="number" />
                            </div>
                          </td>
                          <td>
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic outlined example"
                            >
                              <button
                                type="button"
                                className="btn btn-outline-secondary deleterow"
                              >
                                <i className="icofont-ui-delete text-danger" />
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="product-cart d-flex align-items-center">
                              <div className="product-thumb">
                                <img
                                  src="assets/images/product/upload.png"
                                  className="img-fluid avatar xl"
                                  alt="Product"
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Product tag name"
                            />
                          </td>
                          <td>
                            <input type="color" className="form-control" />
                          </td>
                          <td>
                            <div className="product-quantity d-inline-flex">
                              <input type="number" />
                            </div>
                          </td>
                          <td>
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic outlined example"
                            >
                              <button
                                type="button"
                                className="btn btn-outline-secondary deleterow"
                              >
                                <i className="icofont-ui-delete text-danger" />
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="product-cart d-flex align-items-center">
                              <div className="product-thumb">
                                <img
                                  src="assets/images/product/upload.png"
                                  className="img-fluid avatar xl"
                                  alt="Product"
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Product tag name"
                            />
                          </td>
                          <td>
                            <input type="color" className="form-control" />
                          </td>
                          <td>
                            <div className="product-quantity d-inline-flex">
                              <input type="number" />
                            </div>
                          </td>
                          <td>
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic outlined example"
                            >
                              <button
                                type="button"
                                className="btn btn-outline-secondary deleterow"
                              >
                                <i className="icofont-ui-delete text-danger" />
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="product-cart d-flex align-items-center">
                              <div className="product-thumb">
                                <img
                                  src="assets/images/product/upload.png"
                                  className="img-fluid avatar xl"
                                  alt="Product"
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Product tag name"
                            />
                          </td>
                          <td>
                            <input type="color" className="form-control" />
                          </td>
                          <td>
                            <div className="product-quantity d-inline-flex">
                              <input type="number" />
                            </div>
                          </td>
                          <td>
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic outlined example"
                            >
                              <button
                                type="button"
                                className="btn btn-outline-secondary deleterow"
                              >
                                <i className="icofont-ui-delete text-danger" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/*  */}
      {/*  */}
    </div>
  </div>
  {/* Row end  */}
</>

  )
}

export default Addproduct