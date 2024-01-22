import { useState } from "react";
import { useUserContext } from "../contexts/UserContext";
import useForm from "../customHooks/useForm";
import useFetch from "../customHooks/useFetch";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isEmpty, data } = useForm(e.currentTarget);

    if (isEmpty) {
      console.log("please provide all values");
      return;
    }

    try {
      const resp = await axios.post(
        "http://localhost:3000/api/v1/auth/register",
        data
      );
      console.log(resp.data);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Name</label>
        <input type="text" id="username" name="username" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Register;
