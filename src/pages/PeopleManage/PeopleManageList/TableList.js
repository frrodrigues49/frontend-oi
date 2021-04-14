import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EditIcon from "../../../components/ui/EditIcon";
import DeleteIcon from "../../../components/ui/DeleteIcon";
import { loadData, handleDelete } from "./actions";
import { ContainerDelete, ButtonDelete } from "./styles";

function TableList({ match }) {
  const [rows, setRows] = useState([]);
  const [alert, setAlert] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  const renderAlertDelete = id => {
    setAlert(true);
    setSelectedId(id);
  };
  const closeAlertDelete = () => {
    setAlert(false);
    setSelectedId("");
  };

  const renderKindPerson = kind => {
    switch (kind) {
      case "pfisica":
        return <td>PF</td>;
      case "pjuridica":
        return <td>PJ</td>;
      default:
        return null;
    }
  };

  useEffect(() => {
    loadData(setRows);
  }, []);

  return (
    <>
      {alert && (
        <ContainerDelete
          className="col-12 alert alert-danger small"
          role="alert"
        >
          Deseja realmente excluir?
          <div>
            <button
              className="btn btn-danger btn-sm"
              onClick={() =>
                handleDelete(selectedId, rows, setRows, setSelectedId, setAlert)
              }
            >
              Sim
            </button>
            <button
              className="btn btn-secondary btn-sm"
              onClick={closeAlertDelete}
            >
              Não
            </button>
          </div>
        </ContainerDelete>
      )}
      <table className="table small">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Nome/Razão Social</th>
            <th>CPF/CNPJ</th>
            <th>Telefone</th>
            <th>Cidade</th>
            <th colSpan="2" style={{ width: "5%" }}>
              Açoes
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row._id}>
              {renderKindPerson(row.kind)}
              <td>{row.name}</td>
              <td>{row.document}</td>
              <td>{row.phone}</td>
              <td>{row.city}</td>
              <td>
                <Link to={`${match.url}/edit/${row._id}`}>
                  <EditIcon />
                </Link>
              </td>
              <td>
                <ButtonDelete onClick={() => renderAlertDelete(row._id)}>
                  <DeleteIcon />
                </ButtonDelete>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TableList;
