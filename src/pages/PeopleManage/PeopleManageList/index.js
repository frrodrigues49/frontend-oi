import React from "react";
import { Link } from "react-router-dom";
import Card from "../../../components/Card";
import { ButtonNew } from "./styles";

function PeopleManage() {
  return (
    <Card
      title="Gerenciamento de Pessoas Físicas e Jurídicas"
      textLink="Voltar a tela de pesquisa de telefone"
      actionLink="/"
    >
      <div className="row">
        <ButtonNew className="col-12 ">
          <Link to="/manage/create">
            <button className="btn btn-success">Criar uma Nova Pessoa</button>
          </Link>
        </ButtonNew>

        <div className="table-responsive col-12">
          <table className="table small">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Nome/Razão Social</th>
                <th>CPF/CNPJ</th>
                <th>Telefone</th>
                <th>Cidade</th>
                <th colSpan="2">Açoes</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </Card>
  );
}

export default PeopleManage;
