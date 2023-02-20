export const metadata = {
  title: 'Checkout - Wappler Brewing',
  description: 'Wappler Webshop',
};

export default function cartPage() {
  return (
    <div>
      <h1>checkout page</h1>
      <div>
        <h2>Shipping Info</h2>
        <div>
          <label>
            <strong>First Name: </strong>
            <input
              data-test-id="checkout-first-name"
              name="first name"
              required
            />
          </label>
          <label>
            <strong>Last Name: </strong>
            <input
              data-test-id="checkout-last-name"
              name="last name"
              required
            />
          </label>
          <label>
            <strong>Email: </strong>
            <input data-test-id="checkout-email" name="email" required />
          </label>
          <label>
            <strong>Address: </strong>
            <input data-test-id="checkout-address" name="address" required />
          </label>
          <label>
            <strong>City: </strong>
            <input data-test-id="checkout-city" name="city" required />
          </label>
          <label>
            <strong>Postal Code: </strong>
            <input
              data-test-id="checkout-postal-code"
              name="postal code"
              required
            />
          </label>
          <label>
            <strong>Country: </strong>
            <input data-test-id="checkout-country" name="country" required />
          </label>
        </div>
        <hr />
      </div>
      <div>
        <h2>Payment Info</h2>
        <div>
          <label>
            <strong>Credit Card Number: </strong>
            <input
              data-test-id="checkout-credit-card"
              name="credit card number"
              maxlength="19"
              type="number"
              required
            />
          </label>
          <label>
            <strong>Expiration Date: </strong>
            <input
              data-test-id="checkout-expiration-date"
              name="expiration date"
              maxlength="5"
              placeholder="MM/YY"
              required
            />
          </label>
          <label>
            <strong>Security Code: </strong>
            <input
              data-test-id="checkout-security-code"
              name="security code"
              maxlength="3"
              required
            />
          </label>
        </div>
      </div>
      <button data-test-id="checkout-confirm-order">Confirm Order</button>
    </div>
  );
}
