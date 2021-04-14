import React from "react";
import { Link } from "react-router-dom";
import Card from "../../../components/Card";
import TableList from "./TableList";
import { ButtonNew } from "./styles";

function PeopleManage({ match }) {
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
          <TableList match={match} />
        </div>
      </div>
    </Card>
  );
}

export default PeopleManage;
