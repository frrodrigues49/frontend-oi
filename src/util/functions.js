export const handleChange = (e, { data, setData }) => {
  const auxValues = { ...data };
  auxValues.default[e.target.name] = e.target.value;
  setData(auxValues);
};
