import React, { useEffect, useState } from "react";
import Body from "../Body";
import "./table.css";

function Table() {

    const [employeeList, setEmployeeList] = useState([]);

    const [sortedEmployeeList, setSortedEmployeeList] = useState([]);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => {
            setEmployeeList(data.results)
        })
    })

    return (
        <>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Number</th>
                    </tr>
                </thead>
                <tbody>
                {
                    employeeList.map(employee => {
                        return (<Body employeeData={employee}/>)
                    })
                }
                </tbody>
            </table>
        </>
    )
}

export default Table;