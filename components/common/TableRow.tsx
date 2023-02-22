import React from "react";
import { TableRowProps } from "../../interface/TableRow";

const TableRow = ({ name, text, date, count }: TableRowProps) => {
  return (
    <tr>
      <td className='px-6 py-3'>{text}</td>
      <td className='px-6 py-3'>{name}</td>
      <td className='px-6 py-3'>{date}</td>
      <td className='px-6 py-3'>{count}</td>
    </tr>
  );
};

export default TableRow;
