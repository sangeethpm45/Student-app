import React from "react";
import { useFormik } from "formik";
import "./Student.css";
import { useState } from "react";
import studentservice from "../services/Service";
import { useEffect } from "react";
import { Data } from "./Data";
import * as Yup from "yup";
var Loader = require("react-loader");
function Student() {
  const [data, setdata] = useState([]);
  const [loaded, setloaded] = useState(true);
  const validationSchema = Yup.object({
    name: Yup.string().required("Required").typeError("String is required"),
    dateofbirth: Yup.string().required("Required"),
    sclass: Yup.string().required("Required"),
    divishion: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      dateofbirth: "",
      sclass: "",
      divishion: "",
      gender: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setloaded(false);
      studentservice
        .addstudent(values)
        .then((result) => {
          if (result.status === 201) {
            setloaded(true);
            getallstudents();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  const getallstudents = (event) => {
    studentservice
      .getallstudents()
      .then((result) => {
        if (result.status === 200) {
          setdata(result.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getallstudents();
  }, []);

  return (
    <div className="container-fluid h-100 d-flex flex-column ">
      <div className="row h-100 m-5 rounded-3">
        <div className="col-md-6  col-sm-12 col-lg-6 shadow-sm   register h-100 m-2 mx-auto  bg-light   ">
          <h3 className="text-center">
            <strong>Student Registration Form</strong>
          </h3>
          <form
            action=""
            className="col-12 px-0 mx-0 row bg-light"
            onSubmit={formik.handleSubmit}
            onBlur={formik.handleBlur}
          >
            <div className="col-md-6 col-12  mb-3">
              <label htmlFor="">
                Student name <span className="text-danger">*</span>{" "}
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              />
              <div style={{ color: "red" }}>
                {formik.touched.name ? formik.errors.name : null}
              </div>
            </div>
            <div className="col-md-6 col-12 form-group mb-3">
              <label>
                Date of Birth <span className="text-danger">*</span>
              </label>
              <input
                type="date"
                name="dateofbirth"
                className="form-control"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.dateofbirth}
              />
              <div style={{ color: "red" }}>
                {formik.touched.dateofbirth ? formik.errors.dateofbirth : null}
              </div>
            </div>
            <div className="col-md-6 col-12 form-group mb-3">
              <label htmlFor="">
                Class <span className="text-danger">*</span>
              </label>
              <select
                name="sclass"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.sclass}
                onBlur={formik.handleBlur}
              >
                <option value="" disabled defaultValue>
                  Select class
                </option>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III"> III</option>
                <option value="IV">IV</option>
                <option value="V"> V</option>
                <option value="VI"> VI</option>
                <option value="VII"> VII</option>
                <option value="VIII"> VIII</option>
                <option value="IX"> IX</option>
                <option value="X"> X</option>
              </select>
              <div style={{ color: "red" }}>
                {formik.touched.sclass ? formik.errors.sclass : null}
              </div>
            </div>

            <div className="col-md-6 col-12 form-group mb-3">
              <label htmlFor="">
                Division<span className="text-danger">*</span>
              </label>
              <select
                name="divishion"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.division}
                onBlur={formik.handleBlur}
                defaultValue="select divishion"
              >
                <option value="select divishion" defaultValue disabled>
                  Select divishion
                </option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
              <div style={{ color: "red" }}>
                {formik.touched.divishion ? formik.errors.divishion : null}
              </div>
            </div>
            <div className="col-md-12  col-12  mb-3 ">
              <p>
                Gender <span className="text-danger">*</span>{" "}
              </p>
              <div className="form-check ">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="gender"
                  onChange={formik.handleChange}
                  value="male"
                  onBlur={formik.handleBlur}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Male
                </label>
              </div>
              <div className="form-check ">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="gender2"
                  onChange={formik.handleChange}
                  value="female"
                  onBlur={formik.handleBlur}
                />

                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Female
                </label>
                <div style={{ color: "red" }}>
                  {formik.touched.gender ? formik.errors.gender : null}
                </div>
              </div>
              <div className="text-center  ">
                <button className="btn btn-success" type="submit">
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className= "col-md-6 col-lg-6 col-sm-12 m-2 h-100 shadow-sm data  mx-auto">
          {data.length === 0 ? (
            <div className=" justify-content-center d-flex">
              <h3 className="text-danger  d-flex align-self-center bg-white rounded-2 mt-3">
                No Records Found !!
              </h3>
            </div>
          ) : (
            <Data student={data}></Data>
          )}
        </div>

        <div className="loader">
          <Loader
            loaded={loaded}
            lines={13}
            length={20}
            width={10}
            radius={30}
            corners={1}
            rotate={0}
            direction={1}
            color="red"
            speed={1}
            trail={60}
            shadow={false}
            hwaccel={false}
            className="spinner"
            zIndex={2e9}
            top="50%"
            left="50%"
            scale={1.0}
            loadedClassName="loadedContent"
          />
        </div>
      </div>
    </div>
  );
}

export default Student;
