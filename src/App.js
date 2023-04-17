import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobileNumber: "",
    address: "",
  });

  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
    mobileNumberError: "",
    addressError: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [`${name}Error`]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (formData.name.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        nameError: "Name is required",
      }));
      isValid = false;
    }

    if (formData.email.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        emailError: "Email is required",
      }));
      isValid = false;
    } else if (
      !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        emailError: "Invalid email format",
      }));
      isValid = false;
    }

    if (formData.password.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        passwordError: "Password is required",
      }));
      isValid = false;
    }

    if (formData.mobileNumber.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        mobileNumberError: "Mobile Number is required",
      }));
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        mobileNumberError: "Invalid Mobile Number",
      }));
      isValid = false;
    }

    if (formData.address.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        addressError: "Address is required",
      }));
      isValid = false;
    }

    if (isValid) {
      console.log("Form data:", formData);
      alert("Form data has been submitted!");
      setFormData({
        name: "",
        email: "",
        password: "",
        mobileNumber: "",
        address: "",
      });
    }
  };

  return (
    <div className="bg-gray-200 w-screen h-screen flex justify-center items-center px-4">
      <form
        action={`mailto:${formData.email}`}
        method="post"
        enctype="text/plain"
        onSubmit={handleSubmit}
        className="w-full md:w-4/5 lg:w-3/5 bg-white rounded-lg flex flex-col gap-6 items-center p-4"
      >
        <h1 className="text-xl text-center md:text-3xl lg:text-5xl font-bold text-blue-800">
          FORM
        </h1>
        <div className="flex flex-col gap-2 w-4/5">
          <label className="text-left text-sm font-semibold text-gray-400">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="p-2 rounded-md bg-gray-50 outline-blue-800 border border-gray-100"
          />
          <span className="text-red-500 text-xs">{errors.nameError}</span>
        </div>

        <div className="flex flex-col gap-2 w-4/5">
          <label className="text-left text-sm font-semibold text-gray-400">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="abc@email.com"
            className="p-2 rounded-md bg-gray-50 outline-blue-800 border border-gray-100"
          />
          <span className="text-red-500 text-xs">{errors.emailError}</span>
        </div>

        <div className="flex flex-col gap-2 w-4/5">
          <label className="text-left text-sm font-semibold text-gray-400">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="******"
            className="p-2 rounded-md bg-gray-50 outline-blue-800 border border-gray-100"
          />
          <span className="text-red-500 text-xs">{errors.passwordError}</span>
        </div>

        <div className="flex flex-col gap-2 w-4/5">
          <label className="text-left text-sm font-semibold text-gray-400">
            Mobile Number
          </label>

          <input
            type="number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="p-2 rounded-md bg-gray-50 outline-blue-800 border border-gray-100"
          />
          <span className="text-red-500 text-xs">
            {errors.mobileNumberError}
          </span>
        </div>

        <div className="flex flex-col gap-2 w-4/5">
          <label className="text-left text-sm font-semibold text-gray-400">
            Address
          </label>
          <textarea
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="p-2 rounded-md bg-gray-50 outline-blue-800 border border-gray-100"
            rows="4"
          />
          <span className="text-red-500 text-xs">{errors.addressError}</span>
        </div>

        <button
          type="submit"
          className="w-4/5 lg:w-1/5 bg-blue-600 text-white font-semibold hover:bg-blue-800 rounded-lg my-2 px-4 py-2"
        >
          Submit Details
        </button>
      </form>
    </div>
  );
};

export default Form;
