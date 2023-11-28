export default function validateEmail(
  emailInput,
  emailStore,
  emailError
) {
  if (
    /[@]/.test(emailStore.value) &&
    /.com/.test(emailStore.value)
  ) {
    emailInput.value.classList.add("valid");
    emailError.value = "";
  } else {
    emailError.value = "Please enter a valid email";
    emailInput.value.classList.contains("valid")
      ? emailInput.value.classList.remove("valid")
      : "";
    emailInput.value.classList.add("invalid");
  }
}
