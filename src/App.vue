<template>
  <div class="app-container">
    <welcome-view v-show="!isLoaderVisible" />
    <loading-view v-show="!isLoaderVisible" />
    <search-view v-show="isLoaderVisible" />
  </div>
</template>

<script>
import WelcomeView from '@/components/WelcomeView.vue'
import LoadingView from '@/components/LoadingView.vue'
import SearchView from '@/components/SearchView.vue'
export default {
  components: {
    WelcomeView,
    LoadingView,
    SearchView,
  },
  data() {
    return {
      isLoaderVisible: true,
    }
  },
}
</script>

<style scoped></style>
