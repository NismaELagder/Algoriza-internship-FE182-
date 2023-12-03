import {
  createRouter,
  createWebHistory,
  useRoute,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import ActivitiesView from "../views/ActivitiesView.vue";
import AboutView from "../views/AboutView.vue";
import DiscoverView from "../views/DiscoverView.vue";
import ContactView from "../views/ContactView.vue";
import ResultsView from "../views/ResultsView.vue";
import HoteldetailsView from "../views/HoteldetailsView.vue";
import PaymentsView from "../views/PaymentsView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/results",
    name: "results",
    component: ResultsView,
  },
  {
    path: "/hoteldetails",
    name: "hoteldetails",
    component: HoteldetailsView,
  },
  {
    path: "/payments",
    name: "payments",
    component: PaymentsView,
  },
  {
    path: "/activities",
    name: "activities",
    component: ActivitiesView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/discover",
    name: "discover",
    component: DiscoverView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  sensitive: true,
});

export default router;
