export const handleChange = (e, vlr, { data, setData }) => {
  const auxValues = { ...data };
  auxValues.default[e.target.name] = vlr;
  setData(auxValues);
};
