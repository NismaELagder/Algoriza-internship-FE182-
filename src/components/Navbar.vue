<template>
  <nav class="flex justify-between py-6 px-[100px]">
    <div class="flex w-[11.04vw]">
      <img
        src="../../src/assets/Vector.png"
        alt="Plan"
        class="w-6 h-6"
      />
      <p class="font-SFProDisplay font-medium text-lg">
        my Dream Place
      </p>
    </div>
    <ul class="flex w-[31.81vw] justify-between text-base">
      <li>
        <router-link :to="{ path: '/', name: 'home' }"
          >Home</router-link
        >
      </li>
      <li>
        <router-link
          :to="{ path: '/discover', name: 'discover' }"
          >Discover</router-link
        >
      </li>
      <li>
        <router-link
          :to="{ path: '/activities', name: 'activities' }"
          >Activities</router-link
        >
      </li>
      <li>
        <router-link :to="{ path: '/about', name: 'about' }"
          >About</router-link
        >
      </li>
      <li>
        <router-link
          :to="{ path: '/contact', name: 'contact' }"
          >Contact</router-link
        >
      </li>
    </ul>
    <div class="w-[5.69vw]">
      <router-link
        v-if="isLoggedIn == false"
        class="bg-lightBlue px-4 py-2 text-center rounded-md text-white"
        :to="{ name: 'login', path: '/login' }"
        >Login</router-link
      >
      <div v-else class="flex justify-between items-center">
        <img src="@/assets/notification.png" alt="" /><img
          src="@/assets/userPic.png"
          alt=""
        />
      </div>
    </div>
  </nav>
</template>

<script>
import { storeToRefs } from "pinia";
import { useUsersStore } from "./stores/usersStore";
import { onMounted } from "vue";
export default {
  name: "Navbar",
  setup() {
    const store = useUsersStore();
    const { isLoggedIn } = storeToRefs(store);
    onMounted(() => {
      if (sessionStorage.loggedIn === "true") {
        store.logIn();
      }
    });
    return { isLoggedIn };
  },
};
</script>
<style></style>
