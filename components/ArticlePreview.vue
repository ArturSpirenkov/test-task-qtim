<script setup lang="ts">
interface ArticlPreviewProps {
  image: string;
  preview: string;
  id: string;
}
const props = defineProps<ArticlPreviewProps>();
</script>

<template>
  <div class="block-prev" @click="$router.push(`/article/${props.id}`)">
    <div class="block-prev__img">
      <img :src="props.image" :alt="props.image" />
    </div>
    <h2 class="block-prev__descr">{{ props.preview }}</h2>
    <button class="block-prev__btn">
      <a>Read more</a>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles';

.block-prev {
  width: 280px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-20px);
  }
  &__img {
    width: 280px;
    height: 280px;
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
    margin-top: 24px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-family: TT Commons;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
  }
  &:hover &__btn {
    display: block;
  }

  &__btn {
    padding-top: 12px;
    display: none;
    position: absolute;
    color: $color-pink;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    & a:visited {
      color: inherit;
    }
  }
}

.first_block {
  display: inline-block;
  width: 300px;
  height: 200px;
  padding: 10px;
}

.second_block {
  display: none;
}

.first_block:hover .second_block {
  display: block;
}
</style>
