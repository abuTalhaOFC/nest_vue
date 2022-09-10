<template>
  <header>
    <div
      :class="[
        'fixed',
        'top-0',
        'bottom-0',
        'left-0',
        'overflow-auto',
        'block',
        'bg-white',
        'border-r',
        'border-gray-200',
        headerWidthClass,
      ]"
    >
      <div class="flex flex-col">
        <!-- Logo And Toggle button  start -->
        <div
          class="flex flex-row h-20 justify-between items-center flex-nowrap p-4 border-b border-gray-200"
        >
          <img
            v-if="isMenuSidebarExpend"
            src="http://wp.alithemes.com/html/nest/backend/assets/imgs/theme/logo.svg"
            alt="XX"
            class="w-28"
          />
          <div
            class="text-xl ml-3 font-semibold cursor-pointer text-gray-400"
            @click="munubarexpend"
          >
            <font-awesome-icon icon="fa-solid fa-bars-staggered" />
          </div>
        </div>
        <!-- Logo And Toggle button  end -->

        <!-- Menu item start -->

        <div class="flex flex-col">
          <div class="flex flex-col border-b text-gray-600 border-gray-200 p-4">
            <router-link to="/">
              <dashbord-nav />
            </router-link>
            <router-link to="/">
              <products-nav />
            </router-link>
            <router-link to="/">
              <orders-nav />
            </router-link>
            <router-link to="/">
              <seller-nav />
            </router-link>
            <router-link to="/">
              <add-product-nav />
            </router-link>
            <router-link to="/">
              <transactions-nav />
            </router-link>
            <router-link to="/">
              <account-nav />
            </router-link>
            <router-link to="/">
              <reviews-nav />
            </router-link>
            <router-link to="/">
              <brands-nav />
            </router-link>
            <router-link to="/">
              <statistics-nav />
            </router-link>
          </div>

          <!-- Menu item end -->
          <!-- setting button start  -->
          <div class="flex flex-col text-gray-600 p-4">
            <router-link to="/">
              <settings-nav />
            </router-link>
            <router-link to="/">
              <starter-page-nav />
            </router-link>
          </div>
          <!-- setting button end  -->
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import DashbordNav from "@/components/Sidebarnav/DashbordNav.vue";
import ProductsNav from "@/components/Sidebarnav/ProductsNav.vue";
import OrdersNav from "@/components/Sidebarnav/OrdersNav.vue";
import SellerNav from "@/components/Sidebarnav/SellersNav.vue";
import AddProductNav from "@/components/Sidebarnav/AddProduct.vue";
import TransactionsNav from "@/components/Sidebarnav/TransactionsNav.vue";
import AccountNav from "@/components/Sidebarnav/AccountNav.vue";
import ReviewsNav from "@/components/Sidebarnav/ReviewsNav.vue";
import BrandsNav from "@/components/Sidebarnav/BrandsNav.vue";
import StatisticsNav from "@/components/Sidebarnav/StatisticsNav.vue";
import SettingsNav from "@/components/Sidebarnav/SettingsNav.vue";
import StarterPageNav from "@/components/Sidebarnav/StarterPageNav.vue";
import { MENU_SIDEBAR_EXPEND } from "@/store";

export default {
  name: "SideBarNav",
  components: {
    ProductsNav,
    OrdersNav,
    SellerNav,
    AddProductNav,
    TransactionsNav,
    AccountNav,
    DashbordNav,
    ReviewsNav,
    BrandsNav,
    StatisticsNav,
    SettingsNav,
    StarterPageNav,
  },

  computed: {
    headerWidthClass() {
      return {
        "w-72": this.isMenuSidebarExpend,
        "w-20": !this.isMenuSidebarExpend,
      };
    },
    isMenuSidebarExpend() {
      return this.$store.state.isMenuSidebarExpend;
    },
  },
  methods: {
    munubarexpend() {
      this.$store.commit(MENU_SIDEBAR_EXPEND);
    },
  },
};
</script>
