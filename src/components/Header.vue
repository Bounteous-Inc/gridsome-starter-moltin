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
    SfHeader,
  } from '@storefront-ui/vue';

  import MegaMenu from './MegaMenu.vue';

  export default {
    components: {
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
        return [
          {
            name: 'Categories',
            path: '/categories',
            children: this.$static.categories.edges.map((n) => n.node),
          },
          {
            name: 'Collections',
            path: '/collections',
            children: this.$static.collections.edges.map((n) => n.node),
          },
          // {
          //   name: 'Brands',
          //   path: '/brands',
          //   children: this.$static.brands.edges.map((n) => n.node),
          // },
        ];
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
