<template>
  <div class="error-container">
    <h1 class="primary-bold title">
      Uh-oh!
    </h1>
    <p class="primary-regular intro">
      You look lost on your journey!
    </p>
    <app-button @click="handleClick" class="button">Go back to home</app-button>
  </div>
</template>

<script>
import AppButton from '@/components/ui/AppButton.vue'
export default {
  components: {
    AppButton,
  },
  emits: ['click-button'],
  methods: {
    handleClick() {
      this.$emit('click-button')
    },
  },
}
</script>

<style scoped>
.error-container {
  padding: 70px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.img-container {
  width: 325px;
  max-width: 100%;
  margin-bottom: 60px;
  position: relative;
}
.title {
  margin-bottom: 10px;
  font-size: 36px;
  line-height: 43px;
  text-align: center;
  color: var(--black);
}
.intro {
  width: 315px;
  margin-bottom: 25px;
  font-size: 20px;
  line-height: 30px;
  color: var(--dark-grey);
  text-align: center;
}
.button:hover,
.button:focus {
  background-color: var(--dark-red);
}

@media only screen and (min-width: 768px) {
  .intro {
    width: 560px;
  }
  .error-container {
    margin: 0;
  }
}
</style>
