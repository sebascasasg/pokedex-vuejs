<template>
  <input type="text" class="searchbox" placeholder="Search" v-model="search" />
</template>

<script>
export default {
  emits: ['change-term'],
  data() {
    return {
      search: '',
    }
  },
  watch: {
    search(newValue) {
      this.$emit('change-term', newValue)
    },
  },
}
</script>

<style scoped>
.searchbox {
  width: 100%;
  height: 50px;
  padding-left: 43px;
  color: var(--black);
  font-family: var(--secondary-font);
  font-size: 16px;
  background: url('~@/assets/images/search-icon.svg') no-repeat scroll 16px 16px;
  background-color: var(--white);
  border: none;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
}
.searchbox::placeholder {
  color: var(--grey);
}
.searchbox:focus {
  outline: none;
}
</style>
