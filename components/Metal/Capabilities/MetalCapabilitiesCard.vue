<template>
  <article class="metal-capabilities-card">
    <div class="metal-capabilities-card__container">
      <h3 class="metal-capabilities-card__title">
        {{ title }}
      </h3>
      <div class="metal-capabilities-card__description">
        <!-- TODO: HTML content should not be in strings but in components
        but lacking of a better solution given time constraints. -->
        <!-- eslint-disable vue/no-v-html -->
        <span v-html="description" />
        <!-- estlint-enable -->
      </div>
    </div>
    <video
      class="metal-capabilities-card__video"
      loop
      autoplay
      muted
      playsinline
    >
      <source :src="video" type="video/mp4" />
      <source :src="video" type="video/ogg" />
      Your browser does not support video.
    </video>
  </article>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  video: string;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.metal-capabilities-card {
  display: flex;
  min-height: 20rem;

  @include carbon.breakpoint-down(md) {
    flex-direction: column;
  }

  &__container {
    display: flex;
    flex: 1;
    padding-right: carbon.$spacing-07;

    @include carbon.breakpoint-down(lg) {
      flex-direction: column;
    }
  }

  &__title {
    flex: 0 0 12rem;
    padding-right: carbon.$spacing-07;

    @include carbon.breakpoint-down(lg) {
      flex: 0 0 auto;
      padding-right: 0;
      padding-bottom: carbon.$spacing-07;
    }

    @include carbon.breakpoint-down(md) {
      padding-bottom: 0;
      margin-bottom: carbon.$spacing-05;
    }
  }

  &__description {
    flex: 1;

    @include carbon.breakpoint-down(lg) {
      padding-bottom: carbon.$spacing-05;
    }

    @include carbon.breakpoint-down(md) {
      padding-bottom: 0;
      margin-bottom: carbon.$spacing-05;
    }
  }

  &__video {
    flex: 0 0 32rem;
    width: 100%;
    height: 100%;
    background-size: contain;
    background-position: center top;
    background-repeat: no-repeat;

    @include carbon.breakpoint-between(md, lg) {
      flex: 1.5;
    }

    @include carbon.breakpoint-up(md) {
      display: none;
    }

    @include carbon.breakpoint-down(md) {
      flex: 0 0 16rem;
      margin: 0;
    }
  }
}
</style>
