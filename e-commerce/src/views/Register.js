import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {registerUser} from "../store/actions/userActions";

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      registerUser({
        name,
        email,
        password,
      })
    );
  };

  return (
    <div className="d-flex justify-content-center">
      {/* <!-- Register --> */}
      <form className="text-center p-5" action="#!">
        <p className="h4 mb-4">Ny Kund</p>

        {/* <!-- Name --> */}
        <input onChange={(e) => setName(e.target.value)} type="name" id="defaultRegisterFormName" className="form-control mb-4" placeholder="Name" />

        {/* <!-- Email --> */}
        <input onChange={(e) => setEmail(e.target.value)} type="email" id="defaultRegisterFormEmail" className="form-control mb-4" placeholder="E-mail" />

        {/* <!-- Password --> */}
        <input onChange={(e) => setPassword(e.target.value)} type="password" id="defaultRegisterFormPassword" className="form-control mb-4" placeholder="Password" />

        {/* <!-- Register in button --> */}
        <button onClick={onSubmit} className="btn btn-grey btn-info btn-block my-4" type="submit">
          Registrera
        </button>
      </form>
    </div>
  );
}
