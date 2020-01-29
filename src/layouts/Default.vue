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
</style>
