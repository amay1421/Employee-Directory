import React from "react";
import "./body.css";

function Body (props) {
    return (
        <tr>
        <th scope="row">{props.number}</th>
        <td>{props.employeeData.name.title}</td>
        <td>the Bird</td>
        <td>@twitter</td>
    </tr>
    )
}

export default Body;