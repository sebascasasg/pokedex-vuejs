<template>
  <li class="list-item" @click="handleItemClick">
    <div class="item-content">
      <p class="primary-regular name">{{ name }}</p>
      <div class="favstar-container" @click="handleFavClick">
        <img :src="require('@/assets/images/star-circle.svg')" alt="" class="star-base" />
        <img :src="isFavorite ? require('@/assets/images/active-star.svg') : require('@/assets/images/normal-star.svg')" alt="" class="star" />
      </div>
    </div>
  </li>
</template>

<script>
export default {
  emits: ['click-item'],
  props: {
    name: {
      type: String,
    },
  },
  data() {
    return {
      isFavorite: false,
    }
  },
  methods: {
    handleItemClick() {
      this.$emit('click-item', this.name)
    },
    handleFavClick(event) {
      event.stopPropagation()
      this.isFavorite = !this.isFavorite
    },
  },
}
</script>

<style scoped>
.item-content {
  height: 60px;
  padding: 8px 10px 8px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  background-color: var(--white);
}
.list-item {
  list-style-type: none;
  cursor: pointer;
}
.name {
  font-size: 22px;
  text-transform: capitalize;
  color: var(--black);
}
.favstar-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.star {
  position: absolute;
}
</style>
