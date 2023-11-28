import { defineStore } from "pinia";
export const useUsersStore = defineStore("Users", {
  state: () => {
    return { data: [], isLoggedIn: false };
  },
  getters: {
    checkUserExistence() {
      return (email) =>
        this.data.find((el) => el.email === email);
    },
  },

  actions: {
    async getUsers() {
      const res = await fetch(
        "http://localhost:4000/users"
      );

      const users = await res.json();

      this.data = users;
    },
    logIn() {
      sessionStorage.setItem("loggedIn", "true");
      this.isLoggedIn = true;
      console.log(this.isLoggedIn);
    },

    addUser(user) {
      fetch("http://localhost:4000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: user,
      });
    },
  },
});
