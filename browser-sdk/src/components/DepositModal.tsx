import React, { useState } from "react";
import QRCode from "react-qr-code";

function DepositModal() {
  const [showQR, setShowQR] = useState(false);
  const depositAddress = "some eth address";
  return (
    <div className="flex-column">
      {showQR ?
        <>
          <QRCode value={depositAddress} />
          <input
            type="text"
            value={depositAddress}
          />
        </>
        :
        <div className="underline" onClick={() => setShowQR(true)}>
          Or deposit using existing crypto wallet
        </div>}
    </div>
  )
}

export default DepositModal;