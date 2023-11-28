<template>
  <div class="mx-auto w-[27.8vw] ont-SFProDisplay mt-24">
    <h1 class="text-center text-[28px] font-semibold mb-10">
      Register
    </h1>
    <form>
      <div class="mb-5">
        <label for="" class="block font-medium text-sm"
          >Email address</label
        >
        <input
          type="email"
          class="w-full nisma"
          v-model="email"
          ref="emailInput"
          novalidate
          placeholder="Email"
        />
        <p class="text-xs text-red-600 font-SFProDisplay">
          {{ emailError }}
        </p>
      </div>
      <div class="password">
        <label for="" class="block font-medium text-sm"
          >Password</label
        >
        <input
          type="password"
          class="w-full mb-5"
          v-model="password"
          ref="passwordInput"
          placeholder="password"
        />
        <p class="text-xs text-red-600 font-SFProDisplay">
          {{ passwordError }}
        </p>
        <!-- <span><img src="../../assets/password.png" /></span> -->
      </div>
      <div class="password">
        <label for="" class="block font-medium text-sm"
          >Confirm Password</label
        >
        <input
          type="password"
          class="w-full mb-5"
          v-model="confirm_password"
          ref="confirmPasswordInput"
          placeholder="confirm password"
        />
        <!-- <span><img src="../../assets/password.png" /></span> -->
      </div>
      <div>
        <button
          @click.prevent="registerHandler()"
          class="bg-lightBlue px-4 py-2 text-center rounded-md text-white w-full"
        >
          Submit
        </button>
      </div>
      <div
        class="block text-center mt-5 text-[#4f4f4f] text-base"
      >
        <p>{{ emailExistenceError }}</p>
        <p>
          Already have an account?
          <router-link
            class="text-lightBlue"
            :to="{ name: 'login', path: '/login' }"
            >Sign in
          </router-link>
        </p>
      </div>
    </form>
    {{ email }}
    {{ password }}
    {{ confirm_password }}
  </div>
</template>

<script>
import { ref } from "vue";
import validatePassword from "../Composable/PasswordValidator.js";
import validateEmail from "../Composable/EmailValidator.js";
import { useUsersStore } from "../stores/usersStore.js";
export default {
  name: "Register",
  setup() {
    const email = ref("");
    const password = ref("");
    const confirm_password = ref("");
    const passwordError = ref("");
    const emailError = ref("");
    const emailInput = ref(null);
    const passwordInput = ref(null);
    const confirmPasswordInput = ref(null);
    const emailExistenceError = ref("");

    async function registerHandler() {
      validatePassword(
        passwordInput,
        confirmPasswordInput,
        password,
        confirm_password,
        passwordError
      );

      validateEmail(emailInput, email, emailError);

      if (
        passwordError.value == "" &&
        emailError.value == ""
      ) {
        const users = useUsersStore();

        if (users.checkUserExistence(email.value)) {
          emailExistenceError.value =
            "This email already exists";
        } else {
          const newUser = {
            email: email.value,
            password: password.value,
          };
          const stringifiedUser = JSON.stringify(newUser);
          users.addUser(stringifiedUser);
          setTimeout(
            () => (window.location.href = "/login"),
            1000
          );
        }
      }
    }

    return {
      emailError,
      email,
      password,
      confirm_password,
      registerHandler,
      passwordError,
      emailInput,
      passwordInput,
      confirmPasswordInput,
      emailExistenceError,
    };
  },
};
</script>

<style scoped>
input {
  padding: 11px 12px 12px;
  background: #f2f2f2;
  border-radius: 4px;
}

.password {
  position: relative;
}
.password span {
  content: url("../../assets/password.png");
  right: 15px;
  top: 35px;
  position: absolute;
}

input.invalid {
  border: red solid 1px;
}

input.valid {
  border: green solid 1px;
}
</style>
