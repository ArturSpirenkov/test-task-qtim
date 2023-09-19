<script setup lang="ts">
enum SizePadding {
  md = '20',
  lg = '40',
}

enum MaxWidth {
  md = '1289',
  lg = '1440',
}

interface ContainerProps {
  px: keyof typeof SizePadding;
  maxW: keyof typeof MaxWidth;
  pt?: string;
  pb?: string;
}

const props = withDefaults(defineProps<ContainerProps>(), {
  px: 'lg',
  maxW: 'lg',
});

const paddingX = ref(`${SizePadding[props.px]}px`);
const maxWidth = ref(`${MaxWidth[props.maxW]}px`);

const ptop = ref(`${props.pt}px`);
const ptob = ref(`${props.pb}px`);
</script>
<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  margin: auto;
  padding-left: v-bind(paddingX);
  padding-right: v-bind(paddingX);
  padding-top: v-bind(ptop);
  padding-bottom: v-bind(ptob);
  max-width: v-bind(maxWidth);
}
</style>
