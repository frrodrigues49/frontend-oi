export const handleChange = (e, vlr, { data, setData }) => {
  const auxValues = { ...data };
  auxValues.default[e.target.name] = vlr;
  setData(auxValues);
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
