import React from "react";
import { Table } from "react-bootstrap";

function CustomerList() {
  return (
    <div>
      <Table striped bordered hover size="sm" className="mt-5">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile No.</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2">1</td>
            <td className="py-2">Harish</td>
            <td className="py-2">Palsande</td>
            <td className="py-2">harish@gmail.com</td>
            <td className="py-2">7757958578</td>
            <td className="py-2">Hello</td>
          </tr>
          <tr>
            <td className="py-2">2</td>
            <td className="py-2">Harish</td>
            <td className="py-2">Palsande</td>
            <td className="py-2">harish@gmail.com</td>
            <td className="py-2">7757958578</td>
            <td className="py-2">Hello</td>
          </tr>
          <tr>
            <td className="py-2">3</td>
            <td className="py-2">Harish</td>
            <td className="py-2">Palsande</td>
            <td className="py-2">harish@gmail.com</td>
            <td className="py-2">7757958578</td>
            <td className="py-2">Hello</td>
          </tr>
          <tr>
            <td className="py-2">4</td>
            <td className="py-2">Harish</td>
            <td className="py-2">Palsande</td>
            <td className="py-2">harish@gmail.com</td>
            <td className="py-2">7757958578</td>
            <td className="py-2">Hello</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default CustomerList;
