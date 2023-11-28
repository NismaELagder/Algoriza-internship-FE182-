<template>
  <div class="mx-auto w-[27.8vw] font-SFProDisplay mt-24">
    <h1 class="text-center text-[28px] font-semibold mb-10">
      Sign in
    </h1>
    <form @submit.prevent="logInHandler">
      <div class="mb-5">
        <label for="" class="block font-medium text-sm"
          >Email address</label
        >
        <input
          type="email"
          class="w-full"
          v-model="email"
        />
      </div>
      <div class="password">
        <label for="" class="block font-medium text-sm"
          >Password</label
        >
        <input
          type="password"
          class="w-full mb-5"
          v-model="password"
        />
        <!-- <span><img src="../../assets/password.png" /></span> -->
      </div>
      <div>
        <button
          class="bg-lightBlue px-4 py-2 text-center rounded-md text-white w-full"
        >
          Sign in
        </button>
        <p class="text-xs text-red-600 font-SFProDisplay">
          {{ signInError }}
        </p>
      </div>
      <div
        class="block text-center mt-5 text-[#4f4f4f] text-base"
      >
        <p>
          Don't have an account?
          <router-link
            class="text-lightBlue"
            :to="{ name: 'register', path: '/register' }"
            >Register
          </router-link>
        </p>
        <p>{{ (email, password) }}</p>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useUsersStore } from "../stores/usersStore";

export default {
  name: "Login",
  setup() {
    const email = ref("");
    const password = ref("");
    const signInError = ref("");
    async function logInHandler() {
      const usersStore = useUsersStore();
      const users = await usersStore.getUsers();
      if (usersStore.checkUserExistence(email.value)) {
        const currentUser = usersStore.checkUserExistence(
          email.value
        );

        currentUser.password === password.value
          ? (sessionStorage.setItem("loggedIn", "true"),
            (window.location.href = "/"))
          : (signInError.value =
              "Wrong Password! Try again.");
      } else {
        signInError.value =
          "This email doesn't exist please register first";
        setTimeout(() => {
          window.location.href = "/register";
        }, 1000);
      }
    }
    return { email, password, logInHandler, signInError };
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
  right: 15px;
  top: 35px;
  position: absolute;
}
</style>
