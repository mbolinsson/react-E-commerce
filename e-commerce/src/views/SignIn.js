import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {signInUser} from "../store/actions/userActions";

export default function SignIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      signInUser({
        email,
        password,
      })
    );
  };
  return (
    <div className="d-flex justify-content-center">
      {/* <!-- Default form login --> */}
      <form className="text-center p-5" action="#!">
        <p className="h4 mb-4">Logga In</p>

        {/* <!-- Email --> */}
        <input onChange={(e) => setEmail(e.target.value)} type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail" />
        {/* <!-- Password --> */}
        <input onChange={(e) => setPassword(e.target.value)} type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password" />
        {/*<!-- Sign in button --> */}
        <button onClick={onSubmit} className="btn btn-info btn-grey btn-block my-4" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
}
