import { api } from "../../../services/api";

export const handleSubmit = async (
  e,
  { isEdit, id, data, setData, setSuccess, setError, history }
) => {
  e.preventDefault();

  try {
    if (!isEdit) {
      const response = await api.post("people", {
        name: data.default.name
      });

      const { cashier_banks } = response.data;

      await setData({
        ...data,
        id: cashier_banks.id,
        default: {
          name: cashier_banks.name
        }
      });
    } else {
      const response = await api.put(`people/${id}`, {
        name: data.default.name
      });

      const { cashier_banks } = response.data;

      await setData({
        ...data,
        id: cashier_banks.id,
        default: {
          name: cashier_banks.name
        }
      });
    }
    setSuccess(true);
    setTimeout(() => {
      history.goBack();
    }, 500);
  } catch (error) {
    setError(true);
    console.log("Ops => ", error);
  }
};
