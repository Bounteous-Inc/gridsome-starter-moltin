<template>
  <SfHeader>
    <template #logo>
      <h1 class="sf-header__title">
        <g-link
          class="sf-header__link"
          to="/"
        >
          {{ $static.metadata.siteName }}
        </g-link>
      </h1>
    </template>
    <template #navigation>
      <SfHeaderNavigationItem
        v-for="nav of navigation"
        :key="nav.href"
        @mouseenter="hovered = nav.path"
        @mouseleave="hovered = null"
        @click="hovered = null"
      >
        <g-link
          :to="nav.path"
          @click="hovered = null"
        >
          {{ nav.name }}
        </g-link>
        <MegaMenu
          :title="nav.name"
          :visible="hovered === nav.path"
          :children="nav.children"
        />
      </SfHeaderNavigationItem>
    </template>
    <template #header-icons>
      <span
        v-once
        class="moltin-cart-button sf-button sf-shopkit-button"
      />
    </template>
  </SfHeader>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
    categories: allMoltinCategory {
      edges {
        node {
          id
          name
          path
          products {
            id
            name
            path
          }
        }
      }
    }
    collections: allMoltinCollection {
      edges {
        node {
          id
          name
          path
          products {
            id
            name
            path
          }
        }
      }
    }
    brands: allMoltinBrand {
      edges {
        node {
          id
          name
          path
          products {
            id
            name
            path
          }
        }
      }
    }
  }
</static-query>

<script>
  import {
    // SfCircleIcon,
    SfHeader,
  } from '@storefront-ui/vue';

  import MegaMenu from './MegaMenu.vue';

  export default {
    components: {
      // SfCircleIcon,
      SfHeader,
      MegaMenu,
    },
    data() {
      return {
        hovered: null,
      };
    },
    computed: {
      navigation() {
        return ['categories', 'collections', 'brands']
          .filter((hierarchy) => this.$static[hierarchy].edges.length > (hierarchy === 'brands' ? 1 : 0))
          .map((hierarchy) => ({
            name: `${hierarchy.charAt(0).toUpperCase()}${hierarchy.slice(1)}`,
            path: `/${hierarchy}`,
            children: this.$static[hierarchy].edges.map((n) => n.node),
          }));
      },
    },
    watch: {
      $route() {
        this.hovered = null;
      },
    },
  };
</script>

<style scoped>
  .sf-header__link {
    letter-spacing: 0.2em;
    text-transform: uppercase;
    background: linear-gradient(162deg, rgba(215,111,42,1) 0%, rgba(208,46,97,1) 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
