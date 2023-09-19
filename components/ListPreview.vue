<script setup lang="ts">
import { MockArticl } from '@/types';
interface ListProps {
  items: MockArticl[] | null;
}
const props = defineProps<ListProps>();
</script>

<template>
  <div class="list">
    <h1 class="list__title">Articles</h1>
    <div class="list__items">
      <ArticlePreview
        v-for="{ id, image, preview } in props.items"
        :key="id"
        :image="image"
        :preview="preview"
        :id="id"
        class="article"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list {
  &__title {
    margin-bottom: 39px;
    font-size: 84px;
    font-weight: 400;
    line-height: 100%;
  }
  &__items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
.article {
  margin: 0 32px 60px 0;
}
</style>
