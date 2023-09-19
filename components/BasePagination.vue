<script lang="ts" setup>
import { ArrowIcon } from './icons';

interface PaginationProps {
  totalElements: number;
  maxElements: number;
  page: number;
  visiblePagesCount: number;
}

interface Emits {
  (e: 'update:page', page: number): void;
}
const emit = defineEmits<Emits>();
const props = withDefaults(defineProps<PaginationProps>(), {
  visiblePagesCount: 5,
});

const totalPages = computed(() => Math.ceil(props.totalElements / props.maxElements));
const startPagination = computed(() => {
  const possibleStart = props.page - Math.floor(props.visiblePagesCount / 2);
  const isEnd = totalPages.value - props.page < props.visiblePagesCount;
  if (isEnd) {
    return totalPages.value - props.visiblePagesCount + 1;
  }
  return possibleStart > 0 ? possibleStart : 1;
});

const pagesToShow = computed(() => {
  if (props.visiblePagesCount >= totalPages.value)
    return Array.from(new Array(totalPages.value).keys()).map((num) => num + 1);
  return Array.from(new Array(props.visiblePagesCount).keys()).map((num) => num + startPagination.value);
});

const onForward = () => {
  const next = props.page + 1;
  if (props.page <= next) emit('update:page', next);
};

const onPrev = () => {
  const prev = props.page - 1;
  if (prev > 0) emit('update:page', prev);
};

watch(
  () => props.page,
  (newValue, _) => {
    if (newValue > totalPages.value) emit('update:page', totalPages.value);
    if (newValue < 1) emit('update:page', 1);
  },
  { immediate: true }
);
</script>
<template>
  <ul class="page">
    <li class="page__arrow-prev" v-show="page > 1" @click="onPrev">
      <ArrowIcon />
    </li>
    <li
      v-for="pageNumber in pagesToShow"
      :key="pageNumber"
      class="page__number"
      :class="{
        'current-page': page === pageNumber,
      }"
      @click="$emit('update:page', pageNumber)"
    >
      {{ pageNumber }}
    </li>
    <li class="page__arrow-forward" v-show="totalPages > page" @click="onForward">
      <ArrowIcon />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import '@/assets/styles';
.page {
  display: flex;
  align-items: center;

  &__arrow-prev {
    transform: rotate(180deg);
    display: flex;
    width: 44px;
    height: 44px;
    padding: 11px 17px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: $color-white;
    border-radius: 12px;
    border-radius: 12px;
    border: 1px solid $color-gray;
    position: relative;
    cursor: pointer;
    & svg {
      position: absolute;
    }
    &:hover {
      background-color: $color-gray;
    }
  }

  &__number {
    display: flex;
    width: 44px;
    height: 44px;
    padding: 11px 17px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 10px;
    background-color: $color-gray;
    margin: 0 4px;
    border-radius: 12px;
    cursor: pointer;
  }

  &__arrow-forward {
    display: flex;
    width: 44px;
    height: 44px;
    padding: 11px 17px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    gap: 10px;
    background-color: $color-white;
    border-radius: 12px;
    border-radius: 12px;
    border: 1px solid $color-gray;
    position: relative;
    & svg {
      position: absolute;
    }
    &:hover {
      background-color: $color-gray;
    }
  }
}
.current-page {
  color: $color-white;
  border-radius: 12px;
  background: $color-black;
}
</style>
