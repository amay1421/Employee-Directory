import React from "react";
import "./body.css";

function Body (props) {
    return (
        <tr>
        <th scope="row">{props.number}</th>
        <td>{props.employeeData.name.first} {props.employeeData.name.last}</td>
        <td>{props.employeeData.email}</td>
        <td>{props.employeeData.number}</td>
    </tr>
    )
}

export default Body;