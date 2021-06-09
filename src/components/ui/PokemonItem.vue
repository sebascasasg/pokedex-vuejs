<template>
  <li class="list-item">
    <div class="item-content">
      <p class="primary-regular name">{{ name }}</p>
      <div class="favstar-container">
        <img :src="require('@/assets/images/star-circle.svg')" alt="" class="star-base" />
        <img :src="require('@/assets/images/normal-star.svg')" alt="" class="star" />
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
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
}
.name {
  font-size: 22px;
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
