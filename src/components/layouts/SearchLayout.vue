<template>
  <div class="layout-container">
    <header class="header-bar">
      <app-search-box class="searchbox" @change-term="searchChangeHandler" />
    </header>
    <slot />
    <footer class="bottom-bar">
      <app-button :class="['button', { active: isAllActive }]" @click="handleButtonClick('all')"> <img :src="require('@/assets/images/all-button-icon.svg')" alt="" class="button-img" /><span>All</span> </app-button>
      <app-button :class="['button', { active: !isAllActive }]" @click="handleButtonClick('fav')"> <img :src="require('@/assets/images/favorites-button-icon.svg')" alt="" class="button-img" /><span>Favorites</span> </app-button>
    </footer>
  </div>
</template>

<script>
import AppButton from '@/components/ui/AppButton.vue'
import AppSearchBox from '@/components/ui/AppSearchBox.vue'
export default {
  components: { AppButton, AppSearchBox },
  emits: ['button-click', 'change-search'],
  props: {
    allActive: {
      type: Boolean,
    },
  },
  data() {
    return {
      isAllActive: this.allActive,
    }
  },
  methods: {
    handleButtonClick(button) {
      if (button === 'all') {
        this.isAllActive = true
        this.$emit('button-click', 'all')
      } else if (button === 'fav') {
        this.isAllActive = false
        this.$emit('button-click', 'fav')
      }
    },
    searchChangeHandler(searchValue) {
      this.$emit('change-search', searchValue)
    },
  },
}
</script>

<style scoped>
.header-bar {
  width: 100%;
  padding: 35px 30px 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: var(--body-grey);
}
.bottom-bar {
  width: 100%;
  height: 80px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  -webkit-box-shadow: 0px -5px 4px 0px rgba(0, 0, 0, 0.04);
  box-shadow: 0px -5px 4px 0px rgba(0, 0, 0, 0.04);
}
.button {
  min-width: 150px;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--grey);
}
.active {
  background-color: var(--red);
}
.button-img {
  width: 18px;
  height: 18px;
  margin-right: 10px;
}
@media only screen and (min-width: 768px) {
  .searchbox {
    width: 570px;
    display: block;
    margin: auto;
  }
  .button {
    min-width: 275px;
  }
}
</style>
