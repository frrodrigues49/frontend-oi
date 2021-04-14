import { api } from "../services/api";

export const handleChange = (e, vlr, { data, setData, setUfSelectd }) => {
  const auxValues = { ...data };
  const inputName = e.target.name;
  auxValues.default[inputName] = vlr;

  if (inputName === "uf") {
    setUfSelectd(vlr);
  }
  setData(auxValues);
};

export const loadUfs = async setUfs => {
  const response = await api.get("uf");
  const { ufs } = response.data;

  setUfs(ufs);
};

export const loadCities = async (ufSelectd, setCities) => {
  const response = await api.get(`city/${ufSelectd}`);
  const { cities } = response.data;

  setCities(cities);
};

export function getDateNew() {
  var data = new Date(),
    dia = data
      .getDate()
      .toString()
      .padStart(2, "0"),
    mes = (data.getMonth() + 1).toString().padStart(2, "0"), //+1 pois no getMonth Janeiro começa com zero.
    ano = data.getFullYear();
  return ano + "-" + mes + "-" + dia;
}

export function formatDate(date) {
  var data = new Date(date),
    dia = data
      .getDate()
      .toString()
      .padStart(2, "0"),
    mes = (data.getMonth() + 1).toString().padStart(2, "0"), //+1 pois no getMonth Janeiro começa com zero.
    ano = data.getFullYear();

  return ano + "-" + mes + "-" + dia;
}
