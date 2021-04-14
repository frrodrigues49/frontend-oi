import React from "react";
import InputMask from "react-input-mask";
import { handleChange, formatDate } from "../../../util/functions";

function Form({ initialData, data, setData, onSubmitForm }) {
  console.log("Form -> initialData", formatDate(initialData.birth_date));
  const renderPersonInput = () => {
    switch (initialData.kind) {
      case "pfisica":
        return (
          <InputMask
            mask="999.999.999-99"
            className="form-control"
            placeholder="Informe o CPF"
            name="document"
            value={initialData.document}
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
            value={initialData.document}
            onChange={e => handleChange(e, e.target.value, { data, setData })}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="row">
      <div className="col-12" style={{ marginBottom: 30 }}>
        <div className="custom-control custom-radio custom-control-inline">
          <input
            className="custom-control-input"
            type="radio"
            id="pfisica"
            name="kind"
            value="pfisica"
            checked={initialData.kind === "pfisica"}
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
            checked={initialData.kind === "pjuridica"}
            onChange={e => handleChange(e, e.target.value, { data, setData })}
          />
          <label className="custom-control-label" htmlFor="pjuridica">
            Pessoa Jurídica
          </label>
        </div>
      </div>

      <div className="form-group col-lg-6 col-12">
        <input
          type="text"
          className="form-control"
          placeholder="Informe o Nome"
          name="name"
          value={initialData.name}
          onChange={e => handleChange(e, e.target.value, { data, setData })}
        />
      </div>
      <div className="form-group col-lg-6 col-12">{renderPersonInput()}</div>
      <div className="form-group col-md-6 col-12">
        <select
          className="form-control"
          name="uf"
          value={initialData.uf}
          onChange={e => handleChange(e, e.target.value, { data, setData })}
        >
          <option value="">Selecione UF</option>
        </select>
      </div>
      <div className="form-group col-md-6 col-12">
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
          type="date"
          className="form-control"
          placeholder="Data de Nascimento"
          name="birth_date"
          value={formatDate(initialData.birth_date)}
          onChange={e => handleChange(e, e.target.value, { data, setData })}
        />
      </div>
      <div className="form-group col-lg-6 col-12">
        <InputMask
          mask="99 99999-9999"
          maskChar=" "
          className="form-control"
          placeholder="Telefone"
          name="phone"
          value={initialData.phone}
          onChange={e => handleChange(e, e.target.value, { data, setData })}
        />
      </div>
      <div className="form-group col-12">
        <button className="btn btn-success" onClick={e => onSubmitForm(e)}>
          Salvar
        </button>
      </div>
    </div>
  );
}

export default Form;
