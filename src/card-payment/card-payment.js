import Navbar from "../account/loginnav";

export default function CardPayment() {
  return (
    <>
      <Navbar />
      <div className="solar-roof-main">
        <div style={{ width: "100%" }} className="solar-roof-main1">
          <img src="https://cdn.motor1.com/images/mgl/weMzo/s3/tesla-solar-roof.webp" />
        </div>
        <div style={{ width: "40%" }} className="solar-roof-main2">
          <form style={{ width: "80%" }}>
            <h1>Card</h1>
            <label>Name on Card</label>
            <input type="text" />
            <label>Card Number</label>
            <input type="text" />
            <label>Expiration Month</label>
            <input type="text" />
            <label>Expiration Year</label>
            <input type="text" />
            <label>CVV</label>
            <input type="text" />
            <w>Non-refundable Order Deposit.Non-transferable.</w>
            <input
              type="submit"
              value="Next"
              style={{ backgroundColor: "blue", color: "white" }}
            />
          </form>
        </div>
      </div>
    </>
  );
}
