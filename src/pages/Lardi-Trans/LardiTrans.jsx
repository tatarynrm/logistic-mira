import React from "react";
import { getMyCargo } from "../../LARDI_TRANS_API/lardi-requests";
const LardiTrans = () => {
  return (
    <div>
      <button onClick={getMyCargo}>OK</button>

      <div>Data</div>
    </div>
  );
};

export default LardiTrans;
