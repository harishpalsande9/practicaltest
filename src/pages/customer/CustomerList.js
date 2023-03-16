import React from "react";
import { Table } from "react-bootstrap";
import { Eye, Pen, Trash } from "react-bootstrap-icons";

function CustomerList() {
  return (
    <div>
      <Table striped bordered hover size="sm" className="mt-5">
        <thead>
          <tr>
            <th>Id No.</th>
            <th> Name</th>
            <th> Surname</th>
            <th>Email</th>
            <th>Mobile No.</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2">1</td>
            <td className="py-2">Harish</td>
            <td className="py-2">Palsande</td>
            <td className="py-2">harish@gmail.com</td>
            <td className="py-2">7757958578</td>

            <td className="py-2 text-center">
              <Pen color="blue" className="mx-1" />
            </td>
            <td className="py-2 text-center">
              <Trash color="red" className="mx-1" />
            </td>
          </tr>
          <tr>
            <td className="py-2">2</td>
            <td className="py-2">Harish</td>
            <td className="py-2">Palsande</td>
            <td className="py-2">harish@gmail.com</td>
            <td className="py-2">7757958578</td>

            <td className="py-2 text-center">
              <Pen color="blue" className="mx-1" />
            </td>
            <td className="py-2 text-center">
              <Trash color="red" className="mx-1" />
            </td>
          </tr>
          <tr>
            <td className="py-2">3</td>
            <td className="py-2">Harish</td>
            <td className="py-2">Palsande</td>
            <td className="py-2">harish@gmail.com</td>
            <td className="py-2">7757958578</td>

            <td className="py-2 text-center">
              <Pen color="blue" className="mx-1" />
            </td>
            <td className="py-2 text-center">
              <Trash color="red" className="mx-1" />
            </td>
          </tr>
          <tr>
            <td className="py-2">4</td>
            <td className="py-2">Harish</td>
            <td className="py-2">Palsande</td>
            <td className="py-2">harish@gmail.com</td>
            <td className="py-2">7757958578</td>

            <td className="py-2 text-center">
              <Pen color="blue" className="mx-1" />
            </td>
            <td className="py-2 text-center">
              <Trash color="red" className="mx-1" />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default CustomerList;
