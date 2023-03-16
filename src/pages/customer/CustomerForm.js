import React, { useState } from "react";

function CustomerForm() {
  const [formFields, setFormFields] = useState([]);
  return (
    <div>
      <form>
        <div className="row g-3">
          <div>
            <label for="your-name" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              className="form-control"
              id="your-name"
              name="your-name"
              required
            />
          </div>
          <div>
            <label for="your-surname" className="form-label">
              Your Surname
            </label>
            <input
              type="text"
              className="form-control"
              id="your-surname"
              name="your-surname"
              required
            />
          </div>
          <div>
            <label for="your-email" className="form-label">
              Your Email
            </label>
            <input
              type="email"
              className="form-control"
              id="your-email"
              name="your-email"
              required
            />
          </div>
          <div>
            <label for="your-email" className="form-label">
              Your Mobile No.
            </label>
            <input
              type="number"
              className="form-control"
              id="your-number"
              name="your-number"
              required
            />
          </div>
          <div>
            <label for="your-subject" className="form-label">
              Your Subject
            </label>
            <input
              type="text"
              className="form-control"
              id="your-subject"
              name="your-subject"
            />
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-md-6">
                <button
                  data-res="<?php echo $sum; ?>"
                  type="submit"
                  className="btn btn-dark w-100 fw-bold"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CustomerForm;
