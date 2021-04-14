import { api } from "../../../services/api";

export const loadData = async setRows => {
  const response = await api.get("person");
  const { peoples } = response.data;

  setRows(peoples);
};

export const handleDelete = (id, rows, setRows, setSelectedId, setAlert) => {
  const newRows = rows.filter(item => item._id !== id);
  setAlert(false);
  setSelectedId("");
  setRows(newRows);
  api.delete(`person/${id}`);
};
