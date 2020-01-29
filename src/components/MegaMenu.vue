<template>
  <SfMegaMenu
    :title="title"
    :visible="visible"
    :style="{ position: 'absolute', left: 0, width: '100%', top: '100%' }"
  >
    <SfMegaMenuColumn
      v-for="child in children"
      :key="child.id"
    >
      <template #title>
        <h3>
          <g-link :to="child.path">
            {{ child.name }}
          </g-link>
        </h3>
      </template>
      <SfMenuItem
        v-for="product in child.products"
        :key="product.id"
        :label="product.name"
      >
        <template #label>
          <g-link
            :to="product.path"
            class="sf-menu-item__label"
          >
            {{ product.name }}
          </g-link>
        </template>
      </SfMenuItem>
    </SfMegaMenuColumn>
  </SfMegaMenu>
</template>

<script>
  import {
    SfMegaMenu,
    SfMenuItem,
    // AsidePlaceholder,
  } from '@storefront-ui/vue';

  export default {
    components: {
      SfMegaMenu,
      SfMenuItem,
      // AsidePlaceholder,
    },
    props: {
      title: {
        type: String,
        default: 'L1',
      },
      children: {
        type: Array,
        default: () => ([]),
      },
      visible: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .sf-menu-item {
    font-weight: unset;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
</style>
