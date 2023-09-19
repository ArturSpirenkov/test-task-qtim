<script setup lang="ts">
import { AddressIcon } from './icons';
</script>

<template>
  <footer class="footer">
    <ContainerComponent px="md" max-w="md">
      <div class="footer__box">
        <div class="footer__caption">Is there a project?</div>
        <div class="footer__body">
          <div class="footer__body-left">
            <button class="footer__title">
              <h2>Let’s work together</h2>
            </button>
          </div>
          <div class="footer__body-right">
            <address class="footer__address">
              <div class="footer__address-block">
                <span>For all questions</span>
                <a href="tel:+79202780068">+7 (920) 278—00—68</a>
                <a href="mailto:qtim@agency.com">qtim@agency.com</a>
              </div>
              <div class="footer__address-block">
                <span>Office in Russia</span>
                <div>139 Ruben Station Lake Drew, NM 52678</div>
                <a class="btn-location">
                  <AddressIcon />
                </a>
              </div>
              <div class="footer__address-block">
                <span>Office in Dubai</span>
                <div>139 Ruben Station Lake Drew, NM 52678</div>
                <a class="btn-location">
                  <AddressIcon />
                </a>
              </div>
            </address>
          </div>
        </div>
        <div class="footer__bottom">
          <div class="footer__bottom-block">
            <a href="/">Facebook</a>
            <a href="/">Instagram</a>
            <a href="/">Telegram</a>
          </div>
          <button class="footer__btn-go"><span>Go</span></button>
          <div class="footer__bottom-block">
            <a href="/">Behance</a>
            <a href="/">Linkedn</a>
            <a href="/">Privacy Policy</a>
          </div>
        </div>
      </div>
    </ContainerComponent>
  </footer>
</template>

<style lang="scss" scoped>
@import '@/assets/styles';

.footer {
  overflow: hidden;
  width: 100%;
  margin: auto;
  background-color: $color-pink;
  &__caption {
    margin-bottom: 56px;
    margin-top: 140px;
    font-size: 16px;
    line-height: 120%;
  }
  &__body {
    display: flex;
  }
  &__body-left {
    flex-basis: 70%;
  }
  &__address {
    margin-top: 10px;
    font-size: 16px;
    line-height: 120%;
    letter-spacing: 0.16px;
    display: flex;
    flex-direction: column;
    max-width: 152px;
  }
  &__address-block {
    margin-bottom: 36px;
    display: flex;
    flex-direction: column;
    & span {
      display: block;
      margin-bottom: 12px;
    }
    & a {
      color: $color-black;
      margin: 4px 0;
    }
    & div {
      font-size: 16px;
      line-height: 120%;
    }
    & .btn-location {
      background: $color-black;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      display: flex;
      margin-top: 8px;
      transition: all 0.3s ease;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      position: relative;
    }
  }
  &__title {
    color: $color-black;
    transition: all 0.2s linear;
    display: block;
    text-align: left;
    max-width: 464px;
    & h2 {
      font-size: 112px;
      line-height: 100%;
      font-weight: 400;
      display: inline;
      text-decoration: 1px underline;
    }
  }
  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 273px;
    position: relative;
    margin-bottom: 30px;
  }
  &__btn-go {
    width: 358px;
    height: 358px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background: $color-black;
    font-weight: 400;
    font-size: 32px;
    line-height: 100%;
    color: $color-white;
    bottom: -210px;
    z-index: 5;
    transition: all 0.6s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      transform: translateX(-50%) scale(1.5);
    }
    & span {
      position: absolute;
      top: 122px;
      transition: opacity 0.2s ease;
      pointer-events: none;
    }
  }
  &__bottom-block {
    & a {
      margin: 16px;
      font-size: 16px;
      color: inherit;
      text-decoration: 1px underline;
      text-underline-offset: 5px;
    }
  }
}
</style>
