import React from "react";
import Card from "../../components/Card";
import { InputRadio } from "./styles";

function Home() {
  return (
    <Card
      title="Lista pública de telefone"
      textLink="Gerenciar pessoas"
      actionLink="/manage"
    >
      <div className="row">
        <InputRadio className="col-12">
          <input type="radio" id="pf" />
          <label htmlFor="pf">Pessoa Física</label>
          <input type="radio" id="pj" />
          <label htmlFor="pj">Pessoa Jurídica</label>
        </InputRadio>

        <div className="col-12">
          <label>Informe CPF</label>
        </div>
        <div className="col-lg-6 col-12">
          <div className="row">
            <div className="form-group col-12">
              <input
                type="text"
                class="form-control"
                placeholder="Informe o CPF"
              />
            </div>
            <div className="form-group col-md-4 col-12">
              <select className="form-control">
                <option value="">Selecione UF</option>
              </select>
            </div>
            <div className="form-group col-md-8 col-12">
              <select className="form-control">
                <option value="">Selecione Cidade</option>
              </select>
            </div>
            <div className="form-group col-12">
              <button className="btn btn-success col-12">BUSCAR</button>
            </div>
          </div>
        </div>

        <div className="table-responsive col-lg-6 col-12">
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
            <tbody></tbody>
          </table>
        </div>
      </div>
    </Card>
  );
}

export default Home;
