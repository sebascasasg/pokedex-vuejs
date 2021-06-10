<template>
  <div class="app-container">
    <welcome-view v-if="isWelcomeView" @change-view="changeView" />
    <search-view v-else />
  </div>
</template>

<script>
import WelcomeView from '@/components/WelcomeView.vue'
import SearchView from '@/components/SearchView.vue'
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
    changeView() {
      this.isWelcomeView = false
    },
  },
}
</script>

<style scoped>
.app-container {
  min-height: 100vh;
}
</style>
