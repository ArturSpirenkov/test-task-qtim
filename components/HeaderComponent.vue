<script setup lang="ts">
import { LogoMain } from './icons';
import { LangSelect } from './icons';
</script>

<template>
  <header class="header">
    <ContainerComponent px="md" max-w="lg">
      <div class="header__box">
        <a href="/" class="logo">
          <LogoMain />
        </a>
        <div class="header__right">
          <nav class="nav">
            <a href="/" class="item">Works</a>
            <a href="/" class="item">About</a>
          </nav>
          <div class="actions">
            <div class="actions__select select">
              <LangSelect />
            </div>
            <button>Let's work</button>
          </div>
        </div>
      </div>
    </ContainerComponent>
  </header>
</template>

<style lang="scss" scoped>
@import '@/assets/styles';
.header {
  color: $color-black;
  background-color: $color-white;
  width: 100%;
  margin: auto;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  padding: 47px 0;
  &__box {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__right {
    display: flex;
  }
}
.logo {
  font-size: 0px;
}
.nav {
  display: flex;
  align-items: center;
  margin-right: 91px;
  & a {
    margin-right: 58px;
    color: inherit;
    font-size: 20px;
    &:last-child {
      margin-right: 91px;
    }
  }
}
.actions {
  display: flex;
  align-items: center;

  &__select {
    margin-right: 16px;
    cursor: pointer;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    display: flex;
    border: 2px solid hsla(0, 0%, 100%, 0.4);
    border: 2px solid rgba(0, 0, 0, 0.1);
    background: $color-white;
    display: flex;
    justify-content: center;
  }
  & button {
    border-radius: 999px;
    border: 1px solid $color-black;
    background: $color-black;
    color: $color-white;
    padding: 16px 32px;
    font-size: 17px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
}
</style>
