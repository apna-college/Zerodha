import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">Open a Zerodha account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
