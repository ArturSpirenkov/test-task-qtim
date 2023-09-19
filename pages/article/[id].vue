<script setup lang="ts">
import { MockArticl } from '@/types';
const route = useRoute();

const articleData = ref<MockArticl | null>();
const getMocksData = async () => {
  try {
    const { data } = await useCustomFetch<MockArticl>(`/qtim-test-work/posts/${route.params.id}`);
    articleData.value = data.value;
  } catch (err) {
    console.log(err);
  }
};
getMocksData();
</script>

<template>
  <NuxtLayout name="page">
    <template #header>
      <HeaderComponent />
    </template>
    <ContainerComponent px="md" max-w="md" pt="120" pb="140">
      <ArticleComponent
        :image="articleData?.image"
        :title="articleData?.title"
        :description="articleData?.description"
      />
    </ContainerComponent>
    <template #footer>
      <FooterComponent />
    </template>
  </NuxtLayout>
</template>
