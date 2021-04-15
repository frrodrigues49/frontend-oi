import { api } from "../../../services/api";

export const handleSubmit = async (
  e,
  { isEdit, id, data, history, setAlert, setMsg }
) => {
  e.preventDefault();

  const { kind, name, document, uf, city, birth_date, phone } = data.default;

  if (!kind || !name || !document || !uf || !city || !birth_date || !phone) {
    setAlert(true);
    setMsg("Campos obrigatórios");

    setTimeout(() => {
      setAlert(false);
      setMsg("");
    }, 3000);
    return false;
  }

  try {
    if (!isEdit) {
      await api.post("person", {
        kind: data.default.kind,
        name: data.default.name,
        document: data.default.document,
        uf: data.default.uf,
        city: data.default.city,
        birth_date: data.default.birth_date,
        phone: data.default.phone
      });
    } else {
      await api.put(`person/${id}`, {
        kind: data.default.kind,
        name: data.default.name,
        document: data.default.document,
        uf: data.default.uf,
        city: data.default.city,
        birth_date: data.default.birth_date,
        phone: data.default.phone
      });
    }
    setTimeout(() => {
      history.goBack();
    }, 500);
  } catch (error) {
    console.log("Ops => ", error);
  }
};
export const findDataToId = async (id, data, setData) => {
  try {
    const response = await api.get(`person/${id}`);
    const { peoples } = response.data;

    if (data) {
      setData(prevState => {
        return {
          ...prevState,
          id: peoples.id,
          default: {
            kind: peoples.kind,
            name: peoples.name,
            document: peoples.document,
            uf: peoples.uf,
            city: peoples.city,
            birth_date: peoples.birth_date,
            phone: peoples.phone
          }
        };
      });
    }
  } catch (error) {
    console.log("Ops => ", error);
  }
};
