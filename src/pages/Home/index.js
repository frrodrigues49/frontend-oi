import React, { useState } from "react";
import Card from "../../components/Card";
import { handleChange } from "../../util/functions";
import { InputRadio } from "./styles";

function Home() {
  const [data, setData] = useState({
    default: {
      type: "pfisica",
      cpf_cnpj: "",
      uf: "",
      city: ""
    }
  });

  return (
    <Card
      title="Lista pública de telefone"
      textLink="Gerenciar pessoas"
      actionLink="/manage"
    >
      <div className="row">
        <InputRadio className="col-12">
          <div className="custom-control custom-radio custom-control-inline">
            <input
              className="custom-control-input"
              type="radio"
              id="pfisica"
              name="type"
              value="pfisica"
              checked={data.default.type === "pfisica"}
              onChange={e => handleChange(e, e.target.value, { data, setData })}
            />
            <label className="custom-control-label" htmlFor="pfisica">
              Pessoa Física
            </label>
          </div>

          <div className="custom-control custom-radio custom-control-inline">
            <input
              className="custom-control-input"
              type="radio"
              id="pjuridica"
              name="type"
              value="pjuridica"
              checked={data.default.type === "pjuridica"}
              onChange={e => handleChange(e, e.target.value, { data, setData })}
            />
            <label className="custom-control-label" htmlFor="pjuridica">
              Pessoa Jurídica
            </label>
          </div>
        </InputRadio>

        <div className="col-lg-6 col-12">
          <div className="row">
            <div className="form-group col-12">
              <input
                className="form-control"
                placeholder="Informe o CPF"
                name="cpf_cnpj"
                value={data.default.cpf_cnpj}
                onChange={e =>
                  handleChange(e, e.target.value, { data, setData })
                }
              />
            </div>
            <div className="form-group col-md-4 col-12">
              <select
                className="form-control"
                name="uf"
                value={data.default.uf}
                onChange={e =>
                  handleChange(e, e.target.value, { data, setData })
                }
              >
                <option value="">Selecione UF</option>
              </select>
            </div>
            <div className="form-group col-md-8 col-12">
              <select
                className="form-control"
                name="city"
                value={data.default.city}
              >
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
