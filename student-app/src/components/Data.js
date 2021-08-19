import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export const Data = (props) => {
  useEffect(() => {
    setdata(props.student);
  }, [props.student]);
  const [data, setdata] = useState(props.student);

  return (
    <div    >
      <h3 className="text-center">
        <strong className="text-center text-dark "> Student Record</strong>
      </h3>

      <table className="uk-table uk-table-responsive uk-table-divider mx-0 w-100 px-0 border bg-white" style={{tableLayout:"fixed"}}>
        <thead>
          <tr>
            <td></td>
          </tr>
          <tr>
            <th className="text-md-center text-start">SL.No</th>
            <th className="text-md-center text-start">Student Name</th>
            <th className="text-md-center text-start">Roll number</th>
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
                <td className="text-md-center text-start">{obj.rollnumber}</td>
                <td className="text-md-center text-start">{obj.dateofbirth}</td>
                <td className="text-md-center text-start">{obj.sclass}</td>
                <td className="text-md-center text-start">{obj.divishion}</td>
                <td className="text-md-center text-start">{obj.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
