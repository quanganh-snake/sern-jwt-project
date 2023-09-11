import React from "react";
import { useNavigate} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.scss";

export default function Login() {
    const navigate = useNavigate()
    const handleCreateNewAccount = () => {
        navigate('/register')
    }

  return (
    <div className="login-box w-100 my-5 py-5 px-5">
      <div className="container">
        <div className="row">
          <div className="login-left p-2 d-sm-none d-lg-block col-lg-7">
            <h1 className="text-info">Form Login</h1>
            <p>Loading Login...</p>
          </div>

          <div className="login-right p-4 col-sm-12 col-lg-5 border rounded">
            <form className="container">
              <div className="row">
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Email address or phone number"
                />
                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Password"
                />
                <button type="submit" className="btn btn-primary mb-3">
                  Login
                </button>
                <a
                  href="#"
                  className="text-center text-info forgot-password mb-4"
                >
                  Forgot your password?
                </a>
                <hr />
                <button className="btn btn-success" onClick={handleCreateNewAccount}>
                  Create New Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
