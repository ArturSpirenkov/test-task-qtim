<script setup lang="ts">
interface ArticlProps {
  image: string | undefined;
  title: string | undefined;
  description: string | undefined;
}
const props = defineProps<ArticlProps>();
</script>

<template>
  <article class="article">
    <h1 class="article__title">{{ props.title }}</h1>
    <div class="article__img">
      <img :src="props.image" :alt="props.image" />
    </div>
    <div class="article__descr descr">
      <p class="descr__article">About</p>
      <div class="descr__text">{{ props.description }}</div>
    </div>
  </article>
</template>

<style scoped lang="scss">
.article {
  &__title {
    font-size: 84px;
    line-height: 100%;
    margin-bottom: 73px;
  }

  &__img {
    width: 100%;
    height: 700px;
    background-image: radial-gradient(circle, #e2beff, #d3b2ee, #c5a6dd, #b69acc, #a88ebc);
    position: relative;
    & img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__descr {
    margin-top: 80px;
  }
}
.descr {
  &__article {
    font-size: 16px;
    line-height: 100%;
    margin-bottom: 32px;
  }

  &__text {
    color: #101010;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 124%;
    max-width: 695px;
    text-align: start;
  }
}
</style>
