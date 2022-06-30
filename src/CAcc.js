import React, { useContext, useEffect, useState } from "react";
import SignUpContext from "./context/signupdata/SignUpContext";
import { Link } from "react-router-dom";
import "./CAcc.css";
import { useNavigate } from "react-router-dom";
import NormalField from "./NormalField";
import NumField from "./NumField";
import AreaSelectv2 from "./AreaSelectv2";
import RedBttn from "./RedBttn";
import axios from "axios";

function CAcc() {
  const { details } = useContext(SignUpContext);
  const [tokenheader] = useState(details.token);

  const [id, setID] = useState("");

  const goTo = useNavigate();

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [pincode, setPincode] = useState("");
  const [area, setArea] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    getDatafn();
  }, []);

  const getDatafn = async () => {
    try {
      const res = await fetch(`/api/auth/getuser`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "auth-token": tokenheader,
        },
        credentials: "include",
        body: JSON.stringify({
          uname: details.email,
          usertype: "customer",
        }),
      });

      const data = await res.json();
      console.log(data);

      setID(data._id);
      setFirst(data.fname);
      setLast(data.lname);
      setContact(data.contact);
      setEmail(data.uname);
      setPincode(data.pincode);
      setArea(data.area);
      setAddress(data.address);

      if (res.status === 401) {
        goTo("/");
      }
    } catch (error) {
      console.log(error);
      // goTo('/')
    }
  };

  // // Edit customer data
  const editCustomerData = async () => {
    try {
      await axios
        .put(`/api/customer/updatecustomer/${id}`, {
          fname: first,
          lname: last,
          uname: email,
          contact: contact,
          pincode: pincode,
          area: area,
          address: address,
        })
        .then(() => {
          //res has been removed from (res) =>{}
          alert("Your Data has been updated");
        });
    } catch (error) {
      console.log("failure");
      // goTo('/')
    }
  };

  return (
    <div className="CDashboard">
      <div className="bigcontainer">
        <div className="left">
          <img className="logo" src={"/images/Logo.png"} alt="" />

          <h3>
            Covid Help <br></br>Management System
          </h3>

          <div className="fstepcacc1">
            <br></br>
            <Link Link to="/customer" style={{ textDecoration: "none" }}>
              {" "}
              <h8>Dashboard</h8>
            </Link>
            <br></br>
            <br></br>
          </div>

          <div className="sstepacc1">
            <br></br>
            <h8>Account</h8>
            <br></br>
            <br></br>
          </div>

          <div className="logoutcacc">
            <Link Link to="/" style={{ textDecoration: "none" }}>
              <h9>Logout</h9>
            </Link>
          </div>
        </div>

        <div className="rightaccounts">
          <NormalField
            textleft={"First Name"}
            inputvalue={first}
            required="required"
            changefn={(e) => setFirst(e.target.value)}
          />
          <br></br>
          <NormalField
            textleft={"Last Name"}
            inputvalue={last}
            required="required"
            changefn={(e) => setLast(e.target.value)}
          />
          <br></br>
          <NumField
            textleft={"Contact"}
            inputvalue={contact}
            required="required"
            changefn={(e) => setContact(e.target.value)}
          />
          <br></br>
          <NormalField
            textleft={"Email"}
            inputvalue={email}
            required="required"
            changefn={(e) => setEmail(e.target.value)}
            inputting={true}
          />
          <br></br>
          <NumField
            textleft={"Pin Code"}
            inputvalue={pincode}
            required="required"
            changefn={(e) => setPincode(e.target.value)}
          />
          <br></br>
          <AreaSelectv2
            inputValue={area}
            changefn={(e) => setArea(e.target.value)}
            signup={false}
          />
          <br></br>
          <NormalField
            textleft={"Address"}
            inputvalue={address}
            required="required"
            changefn={(e) => setAddress(e.target.value)}
          />
          <br></br>
          <br></br>
          <RedBttn textname={"Save"} clickfn={editCustomerData} />
        </div>
      </div>
    </div>
  );
}

export default CAcc;
