<script setup lang="ts">
import { MockArticl } from '@/types';
const route = useRoute();
const router = useRouter();

const articlesByPage = ref<(MockArticl[] | null)[]>([]);
const currentArticles = ref<MockArticl[] | null>();
const pageId = ref(Number(route.query?.page) || 1);
const limit = ref(8);
const totalArticles = ref(0);

const getTotalArticles = async () => {
  //need to take totalArticles from ResponseHeaders
  const totalArticles = 83;
  return Promise.resolve(totalArticles);
};

const getMocksData = async () => {
  if (articlesByPage.value[pageId.value]) {
    currentArticles.value = articlesByPage.value[pageId.value];
    return;
  }
  try {
    const { data } = await useCustomFetch<MockArticl[]>('/qtim-test-work/posts/', {
      params: {
        limit: limit.value,
        page: pageId.value,
      },
    });
    currentArticles.value = data.value;
    articlesByPage.value[pageId.value] = data.value;
    totalArticles.value = await getTotalArticles();
  } catch (err) {
    console.log(err);
  }
};

getMocksData();

function changePage(pageNumber: any) {
  pageId.value = pageNumber;
  router.push({ path: '/', query: { page: pageNumber } });
  getMocksData();
}

watch(
  () => route.query,
  () => {
    pageId.value = Number(route.query?.page || 1);
    getMocksData();
  }
);
</script>

<template>
  <NuxtLayout name="page">
    <template #header>
      <HeaderComponent />
    </template>
    <ContainerComponent px="md" max-w="md" pt="120" pb="140">
      <ListPreview :items="currentArticles!" />
      <BasePagination :totalElements="83" :max-elements="limit" :page="pageId" @update:page="changePage" />
    </ContainerComponent>
    <template #footer>
      <FooterComponent />
    </template>
  </NuxtLayout>
</template>
