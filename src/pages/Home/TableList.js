import React from "react";

function TableList({ rows }) {
  return (
    <table className="table small">
      <thead>
        <tr>
          <th>Nome</th>
          <th>CPF</th>
          <th>UF</th>
          <th>Cidade</th>
          <th>Telefone</th>
        </tr>
      </thead>
      <tbody>
        {rows ? (
          rows.map(item => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.document}</td>
              <td>{item.uf}</td>
              <td>{item.city}</td>
              <td>{item.phone}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5">Sem dados</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default TableList;
