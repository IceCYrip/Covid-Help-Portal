import React, { useContext, useState, useEffect } from "react";
import "./AreaSelectv2.css";
import SignUpContext from "./context/signupdata/SignUpContext";

function AreaSelectv2({ inputValue, changefn, signup }) {
  const { details, setDetails } = useContext(SignUpContext);
  const [area, setArea] = useState("");

  function handleData(e) {
    setArea(e.target.value);
  }

  useEffect(() => {
    setDetails({
      fname: details.fname,
      lname: details.lname,
      email: details.email,
      phone: details.phone,
      password: details.password,
      area: area,
    });
  }, [area]);

  return (
    <div className="textfieldsnormal">
      <div className="nameleft">Area</div>

      <div className="textgetter">
        <select onChange={signup ? handleData : changefn} value={inputValue}>
          <option value=" " disabled selected hidden>
            Select Area
          </option>
          <option value={"Kothrud"}>Kothrud</option>
          <option value={"Baner"}>Baner</option>
          <option value={"Aundh"}>Aundh</option>
          <option value={"Shivajinagar"}>Shivajinagar</option>
          <option value={"Pimple Saudagar"}>Pimple Saudagar</option>
        </select>
      </div>
    </div>
  );
}

export default AreaSelectv2;
