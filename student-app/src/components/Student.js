import React from "react";
import { useFormik } from "formik";
import "./Student.css";
import { useState } from "react";
import studentservice from "../services/Service";
import { useEffect } from "react";
import * as Yup from "yup";

function Student() {
  const [data, setdata] = useState([]);
  const [id, setid] = useState("id");
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
      studentservice
        .addstudent(values)
        .then((result) => {
          if (result.status === 201) {
            console.log(result);
            getallstudents();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  useEffect(() => {
    getallstudents();
  }, [id]);

  const getallstudents = (event) => {
    studentservice
      .getallstudents()
      .then((result) => {
        if (result.status === 200) {
          console.log(result.data);
          setdata(result.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4 shadow-sm bg-white px-1 mx-auto mx-0  rounded-3 ">
          <h2>
            <strong className="text-center">Register Student</strong>
          </h2>
          <form
            action=""
            className="col-12 px-0 mx-0 row  bg-white"
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
              {formik.errors.name ? formik.errors.name : null}
            </div>
            <div className="col-md-6 col-12 form-group mb-3">
              <label>
                date of Birth <span className="text-danger">*</span>
              </label>
              <input
                type="date"
                name="dateofbirth"
                className="form-control"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.dateofbirth}
              />
              {formik.errors.dateofbirth ? formik.errors.dateofbirth : null}
            </div>
            <div className="col-md-6 col-12 form-group mb-3">
              <label htmlFor="">
                class<span className="text-danger">*</span>
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
              {formik.errors.sclass ? formik.errors.sclass : null}
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
              >
                <option value="" disabled defaultValue>
                  Select division
                </option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
              {formik.errors.divishion ? formik.errors.divishion : null}
            </div>
            <div className="col-md-12 col-12  mb-3 ">
              <p>Gender</p>
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
                {formik.errors.gender ? formik.errors.gender : null}
              </div>
              <div className="text-center  ">
                <button className="btn btn-success" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-6 shadow-sm bg-white px-1 mx-auto mx-0  rounded-3 ">
          <h2>
            <strong className="text-center"> Students</strong>
          </h2>
          <table className="uk-table uk-table-responsive uk-table-divider border bg-white">
            <thead>
              <tr>
                <td></td>
              </tr>
              <tr>
                <th className="text-md-center text-start">SL.No</th>
                <th className="text-md-center text-start">Student Name</th>
                <th className="text-md-center text-start">Date of birth</th>
                <th className="text-md-center text-start">class</th>
                <th className="text-md-center text-start">Division</th>
                <th className="text-md-center text-start">Gender</th>
              </tr>
            </thead>
            <tbody>
              {data.map((obj, i) => {
                return (
                  <tr key={obj.id}>
                    <td className="text-md-center text-start">{i + 1}</td>
                    <td className="text-md-center text-start">{obj.name}</td>
                    <td className="text-md-center text-start">
                      {obj.dateofbirth}
                    </td>
                    <td className="text-md-center text-start">{obj.sclass}</td>
                    <td className="text-md-center text-start">
                      {obj.divishion}
                    </td>
                    <td className="text-md-center text-start">{obj.gender}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          
        </div>
      </div>
    </div>
  );
}

export default Student;
