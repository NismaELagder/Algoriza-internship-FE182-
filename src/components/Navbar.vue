<template>
  <nav
    class="flex justify-between py-6 px-[100px] relative z-[10000]"
    ref="navbar"
  >
    <div class="flex w-[11.04vw]">
      <img
        src="../../src/assets/Vector.png"
        alt="Plan"
        class="w-6 h-6"
        v-if="whiteNav"
      />
      <img
        src="../../src/assets/white-plane.png"
        alt="Plan"
        class="w-6 h-6"
        v-else
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
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Navbar",
  setup() {
    const store = useUsersStore();
    const { isLoggedIn } = storeToRefs(store);
    const navbar = ref(null);
    const whiteNav = ref(false);
    const router = useRouter();
    onMounted(() => {
      if (sessionStorage.loggedIn === "true") {
        store.logIn();
      }
      if (
        router.options.history.location.includes("/results")
      ) {
        navbar.value.classList.add("text-white");
      }
    });

    return { isLoggedIn, navbar, whiteNav };
  },
};
</script>
<style></style>
