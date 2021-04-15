import React, { useState, useEffect } from "react";
import InputMask from "react-input-mask";
import Card from "../../components/Card";
import { handleChange, loadUfs, loadCities } from "../../util/functions";
import { InputRadio, Mensage } from "./styles";
import TableList from "./TableList";
import { handleSubmit } from "./actions";

function Home() {
  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);
  const [rows, setRows] = useState([]);
  const [ufSelectd, setUfSelectd] = useState("");
  const [alert, setAlert] = useState(false);
  const [msg, setMsg] = useState("");
  const [data, setData] = useState({
    default: {
      kind: "pfisica",
      document: "",
      uf: "",
      city: ""
    }
  });

  useEffect(() => {
    loadUfs(setUfs);
  }, []);

  useEffect(() => {
    loadCities(ufSelectd, setCities);
  }, [ufSelectd]);

  const renderPersonInput = () => {
    switch (data.default.kind) {
      case "pfisica":
        return (
          <InputMask
            mask="999.999.999-99"
            className="form-control"
            placeholder="Informe o CPF"
            name="document"
            value={data.default.document}
            onChange={e => handleChange(e, e.target.value, { data, setData })}
          />
        );
      case "pjuridica":
        return (
          <InputMask
            mask="99.999.999/9999-99"
            className="form-control"
            placeholder="Informe o CNPJ"
            name="document"
            value={data.default.document}
            onChange={e => handleChange(e, e.target.value, { data, setData })}
          />
        );
      default:
        return null;
    }
  };

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
              name="kind"
              value="pfisica"
              checked={data.default.kind === "pfisica"}
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
              name="kind"
              value="pjuridica"
              checked={data.default.kind === "pjuridica"}
              onChange={e => handleChange(e, e.target.value, { data, setData })}
            />
            <label className="custom-control-label" htmlFor="pjuridica">
              Pessoa Jurídica
            </label>
          </div>
        </InputRadio>

        <div className="col-lg-6 col-12">
          <div className="row">
            <div className="form-group col-12">{renderPersonInput()}</div>
            <div className="form-group col-md-4 col-12">
              <select
                className="form-control"
                name="uf"
                value={data.default.uf}
                onChange={e =>
                  handleChange(e, e.target.value, {
                    data,
                    setData,
                    setUfSelectd
                  })
                }
              >
                <option value="">Selecione UF</option>
                {ufs.map(item => (
                  <option key={item._id} value={item.uf}>
                    {item.uf}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group col-md-8 col-12">
              <select
                className="form-control"
                name="city"
                value={data.default.city}
                onChange={e =>
                  handleChange(e, e.target.value, { data, setData })
                }
                disabled={data.default.uf ? false : true}
              >
                <option value="">Selecione Cidade</option>
                {cities.map(item => (
                  <option key={item._id} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group col-12">
              <button
                className="btn btn-success col-12"
                onClick={e =>
                  handleSubmit(e, { data, setRows, setAlert, setMsg })
                }
              >
                BUSCAR
              </button>
            </div>
          </div>
        </div>

        <div className="table-responsive col-lg-6 col-12">
          {alert && (
            <Mensage className="col-12 alert alert-danger small" role="alert">
              {msg}
            </Mensage>
          )}
          <TableList rows={rows} />
        </div>
      </div>
    </Card>
  );
}

export default Home;
