export const validate = () => {
  let nameError = "";
  let emailError = "";
  // let passwordError = "";

  if (!this.state.name) {
    nameError = "Campo obrigatório";
  }

  if (!this.state.email.includes("@")) {
    emailError = "invalid email";
  }

  if (emailError || nameError) {
    this.setState({ emailError, nameError });
    return false;
  }

  return true;
};
