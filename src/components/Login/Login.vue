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
          v-model="userEnteredData.email"
        />
      </div>
      <div class="password">
        <label for="" class="block font-medium text-sm"
          >Password</label
        >
        <input
          type="password"
          class="w-full mb-5"
          v-model="userEnteredData.password"
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
        <p>
          {{
            (userEnteredData.email,
            userEnteredData.password)
          }}
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useUsersStore } from "../stores/usersStore";
import { useBookingStore } from "../stores/bookingStore";
import router from "@/router";
import { useRoute } from "vue-router";

export default {
  name: "Login",
  setup() {
    const userEnteredData = ref({
      email: "",
      password: "",
    });
    const signInError = ref("");
    const bookingStore = useBookingStore();
    const route = useRoute();

    async function logInHandler() {
      const usersStore = useUsersStore();
      /////////////////
      const dbUsers = await usersStore.getUsers();
      if (
        usersStore.checkUserExistence(
          userEnteredData.value.email
        )
      ) {
        const currentUser =
          await usersStore.checkUserExistence(
            userEnteredData.value.email
          );
        // console.log(bookingStore.isSearchClicked);
        // console.log(
        //   currentUser.password ===
        //     userEnteredData.value.password
        // );
        if (
          currentUser.password ===
            userEnteredData.value.password &&
          bookingStore.isSearchClicked === true
        ) {
          sessionStorage.setItem("loggedIn", "true");
          let searchInputs =
            await bookingStore.getSearchInputs;
          router.push({
            name: "results",
            query: searchInputs,
          });
        } else if (
          currentUser.password ===
          userEnteredData.value.password
        ) {
          sessionStorage.setItem("loggedIn", "true");
          router.push("/");
        } else {
          signInError.value = "Wrong Password! Try again.";
        }

        // currentUser.password ===
        //   userEnteredData.valuepassword &&
        // bookingStore.isSearchClicked === true
        //   ? (sessionStorage.setItem("loggedIn", "true"),
        //     router.push({
        //       name: "results",
        //       query: route.query,
        //     }))
        //   : currentUser.password ===
        //     userEnteredData.value.password
        //   ? (sessionStorage.setItem("loggedIn", "true"),
        //     router.push("/"))
        //   : (signInError.value =
        //       "Wrong Password! Try again.");
      } else {
        signInError.value =
          "This email doesn't exist please register first";
        setTimeout(() => {
          router.push("/register");
        }, 1000);
      }
    }
    return { userEnteredData, logInHandler, signInError };
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
