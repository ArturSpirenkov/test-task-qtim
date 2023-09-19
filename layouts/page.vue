<template>
  <div class="wrapper">
    <slot name="header" class="header" />
    <main class="main">
      <slot />
    </main>
    <slot name="footer" class="footer" />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1 1 auto;
  margin-top: 150px;
}

.footer {
}
</style>
