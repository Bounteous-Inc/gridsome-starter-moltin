<template>
  <main>
    <Header id="nav-header" />
    <slot />
  </main>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<script>
  import Header from '~/components/Header.vue';

  export default {
    components: {
      Header,
    },
  };
</script>


<style lang="scss">
  @import "~@storefront-ui/vue/styles";
  @mixin for-desktop {
    @media screen and (min-width: $desktop-min) {
      @content;
    }
  }
  main {
    box-sizing: border-box;
    @include for-desktop {
      max-width: 1240px;
      margin: auto;
    }
  }
  .section {
    padding-left: $spacer-big;
    padding-right: $spacer-big;
    @include for-desktop {
      padding-left: 0;
      padding-right: 0;
    }
  }
  #nav-header {
    z-index: 10;
  }
  body {
    color: $c-text-primary;
  }

  a {
    color: $c-text-link;
  }

  .shopkit-primary {
    background: $c-primary !important;
    font: unset !important;
    font-family: $body-font-family-primary !important;
  }
  .shopkit-primary-text {
    color: unset !important;
    font: unset !important;
    font-family: $body-font-family-primary !important;
  }
  .shopkit-modal {
    color: unset !important;
    font: unset !important;
    font-family: $body-font-family-primary !important;
  }

  .sf-shopkit-button {
    padding: 0;
    display: flex;

    & > .shopkit-button {
      background-color: unset !important;
      border: none !important;
      flex: 1 0 100% !important;
      font: unset !important;
    }
  }

</style>
