import { api } from "../../services/api";

export const handleSubmit = async (e, { data, setRows, setAlert, setMsg }) => {
  e.preventDefault();
  const { document, uf, city } = data.default;

  if (!document || !uf || !city) {
    setAlert(true);
    setMsg("Campos obrigatorios");

    setTimeout(() => {
      setAlert(false);
      setMsg("");
    }, 3000);
    return false;
  }

  try {
    const response = await api.post("phone", {
      document: data.default.document,
      uf: data.default.uf,
      city: data.default.city
    });
    const { people_numbers } = response.data;

    if (people_numbers == "") {
      setAlert(true);
      setMsg("Nao foram encotrados registros para esta busca!");
      setRows(people_numbers);

      setTimeout(() => {
        setAlert(false);
        setMsg("");
      }, 5000);
      return false;
    }
    setRows(people_numbers);
  } catch (error) {
    console.log("erro");
  }
};
