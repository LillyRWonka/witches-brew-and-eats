import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../utils/mutations";

const Register = () => {
  const [formState, setFormState] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(CREATE_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      window.location.assign("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="d-flex flex-row justify-content-center">
      <div className="col-6 col-lg-4">
        <div className="card">
          <h4 className="card-header bg-light text-dark p-2">Register!</h4>
          <div className="card-body">
            {data ? (
              <p>Success! You may now head </p>
            ) : (
              <form
                className="d-flex flex-column gap-3"
                onSubmit={handleFormSubmit}
              >
                <input
                  className="form-input"
                  placeholder="Your username"
                  name="userName"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="**"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: "pointer" }}
                  type="submit"
                >
                  Click Register
                </button>
                <Link to="/">Cancel!</Link>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
