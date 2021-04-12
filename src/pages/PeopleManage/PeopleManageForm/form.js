import React from "react";
import { handleSubmit } from "./actions";
import { handleChange } from "../../../util/functions";

function Form({ initialData, data, setData }) {
  return (
    <div className="row">
      <div className="col-12">
        <input type="radio" id="pf" />
        <label htmlFor="pf">Pessoa Física</label>
        <input type="radio" id="pj" />
        <label htmlFor="pj">Pessoa Jurídica</label>
      </div>

      <div className="form-group col-lg-6 col-12">
        <input
          type="text"
          class="form-control"
          placeholder="Informe o Nome"
          name="name"
          value={initialData.name}
          onChange={e => handleChange(e, e.target.value, { data, setData })}
        />
      </div>
      <div className="form-group col-lg-6 col-12">
        <input
          type="text"
          class="form-control"
          placeholder="Informe o CPF"
          name="cpf_cnpj"
          value={initialData.cpf_cnpj}
          onChange={e => handleChange(e, e.target.value, { data, setData })}
        />
      </div>
      <div className="form-group col-md-4 col-12">
        <select
          className="form-control"
          name="uf"
          value={initialData.uf}
          onChange={e => handleChange(e, e.target.value, { data, setData })}
        >
          <option value="">Selecione UF</option>
        </select>
      </div>
      <div className="form-group col-md-8 col-12">
        <select
          className="form-control"
          name="city"
          value={initialData.city}
          onChange={e => handleChange(e, e.target.value, { data, setData })}
        >
          <option value="">Selecione Cidade</option>
        </select>
      </div>
      <div className="form-group col-lg-6 col-12">
        <input
          type="text"
          class="form-control"
          placeholder="Data de Nascimento"
          name="birth_date"
          value={initialData.birth_date}
          onChange={e => handleChange(e, e.target.value, { data, setData })}
        />
      </div>
      <div className="form-group col-lg-6 col-12">
        <input
          type="text"
          class="form-control"
          placeholder="Telefone"
          name="phone"
          value={initialData.phone}
          onChange={e => handleChange(e, e.target.value, { data, setData })}
        />
      </div>
      <div className="form-group col-12">
        <button className="btn btn-success" onClick={handleSubmit}>
          Salvar
        </button>
      </div>
    </div>
  );
}

export default Form;
