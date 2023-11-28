export default function validatePassword(
  passwordInput,
  confirmPasswordInput,
  passwordStore,
  confirmedPasswordStore,
  passwordError
) {
  if (
    (/[A-Z]/g.test(passwordStore.value) &&
      /[0-9]/g.test(passwordStore.value) &&
      /[a-z]/g.test(passwordStore.value) &&
      passwordStore.value ==
        confirmedPasswordStore.value) ||
    passwordStore.value.length > 8
  ) {
    passwordInput.value.classList.add("valid");
    confirmPasswordInput.value.classList.add("valid");
    passwordError.value = "";
  } else {
    passwordError.value =
      " Password must contain at least 8 characters, must contain at least one capital letter, one small letter, and a number.";

    //add invalid classes to password and confirmed password
    //and remove valid classes in case of it's extisence.

    passwordInput.value.classList.add("invalid");
    confirmPasswordInput.value.classList.add("invalid");

    confirmPasswordInput.value.classList.contains("valid")
      ? confirmPasswordInput.value.classList.remove("valid")
      : "";
    passwordInput.value.classList.contains("valid")
      ? passwordInput.value.classList.remove("valid")
      : "";
  }
}
