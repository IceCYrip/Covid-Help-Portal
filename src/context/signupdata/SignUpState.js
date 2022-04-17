import SignUpContext from "./SignUpContext";
import { useState } from "react";
import CSignUp1 from "../../CSignUp1";


const SignUpState = (props) => {

    const SignUp = {
        "fname": "Karan",
        "lname": " ",
        "password": "",
    }

    const [details, setDetails] = useState(SignUp)

    return (
        <SignUpContext.Provider value={{ details, setDetails }}>

        </SignUpContext.Provider>
    )

}
export default NoteState;