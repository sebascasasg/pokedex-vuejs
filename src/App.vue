<template>
  <div class="app-container">
    <welcome-view v-if="isWelcomeView" @change-view="goToSearch" />
    <search-view v-else @change-view="goToHome" />
  </div>
</template>

<script>
import WelcomeView from '@/components/views/WelcomeView.vue'
import SearchView from '@/components/views/SearchView.vue'
export default {
  components: {
    WelcomeView,
    SearchView,
  },
  data() {
    return {
      isWelcomeView: true,
    }
  },
  methods: {
    goToSearch() {
      this.isWelcomeView = false
    },
    goToHome() {
      this.isWelcomeView = true
    },
  },
}
</script>

<style scoped>
.app-container {
  min-height: 100vh;
}
</style>
