<template>
  <header>
    <div class="fixed top-0 bottom-0 overflow-auto  block w-72  bg-white border-r border-gray-200 scbr ">
      <div class="flex flex-col">
        <!-- Logo And Toggle button  start -->
        <div class="flex flex-row justify-between items-center flex-nowrap p-4 border-b border-gray-200 ">
          <img
            src="http://wp.alithemes.com/html/nest/backend/assets/imgs/theme/logo.svg"
            alt="XX"
            class="w-28"
          >
          <div class="text-xl font-semibold">
            x
          </div>
        </div>
        <!-- Logo And Toggle button  end -->

        <!-- Menu item start -->
        
        <div class="flex flex-col ">
          <div class="flex flex-col border-b border-gray-200 p-4 ">
            <dashbord-nav />
            <products-nav />
            <orders-nav />
            <seller-nav />
            <add-product-nav />
            <transactions-nav />
            <account-nav />
            <reviews-nav />
            <brands-nav />
            <statistics-nav />
          </div>
          
        
          <!-- Menu item end -->
          <!-- setting button start  -->
          <div class="flex flex-col  text-gray-600 p-4 ">
            <settings-nav />
            <starter-page-nav />
          </div>
        <!-- setting button end  -->
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import DashbordNav from '@/components/Sidebarnav/DashbordNav.vue'
import ProductsNav from '@/components/Sidebarnav/ProductsNav.vue';
import OrdersNav from '@/components/Sidebarnav/OrdersNav.vue';
import SellerNav from '@/components/Sidebarnav/SellersNav.vue';
import AddProductNav from '@/components/Sidebarnav/AddProduct.vue';
import TransactionsNav from '@/components/Sidebarnav/TransactionsNav.vue';
import AccountNav from '@/components/Sidebarnav/AccountNav.vue';
import ReviewsNav from '@/components/Sidebarnav/ReviewsNav.vue';
import BrandsNav from '@/components/Sidebarnav/BrandsNav.vue';
import StatisticsNav from '@/components/Sidebarnav/StatisticsNav.vue';
import SettingsNav from '@/components/Sidebarnav/SettingsNav.vue';
import StarterPageNav from '@/components/Sidebarnav/StarterPageNav.vue';

  export default{
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
    }
  }
</script>



