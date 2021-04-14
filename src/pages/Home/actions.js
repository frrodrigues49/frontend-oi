import { api } from "../../services/api";

export const handleSubmit = async (e, { data, setRows }) => {
  e.preventDefault();

  const response = await api.post("phone", {
    document: data.default.document,
    uf: data.default.uf,
    city: data.default.city
  });
  const { people_numbers } = response.data;

  setRows(people_numbers);
};
