<template>
  <Layout>
    <SfSection
      :title-heading="$page.category.name"
      class="section"
    />

    <div class="main section">
      <div class="products">
        <div class="products__list">
          <SfProductCard
            v-for="product in $page.category.products"
            :key="product.id"
            :title="product.name"
            :regular-price="formatPrice(product.price[0].amount)"
            :link="product.path"
            link-type="g-link"
            wishlist-icon="false"
            class="products__product-card"
            :show-add-to-cart-button="true"
          >
            <template #image>
              <g-image :src="product.main_image.image" />
            </template>
            <template #add-to-cart>
              <span
                class="moltin-buy-button sf-add-to-cart__button sf-button sf-shopkit-button"
                :data-moltin-product-id="product.id"
                data-moltin-text="Add to Cart"
                @click.prevent
              />
            </template>
          </SfProductCard>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    category: moltinCategory(id: $id) {
      id
      type
      name
      slug
      description
      status
      created_at
      updated_at
      products {
        id
        name
        path
        price {
          amount
        }
        main_image {
          id
          type
          image(
            width: 216
            height: 326
            quality: 90
            fit: contain
            background: "white"
          )
          file_name
          mime_type
          created_at
        }
      }
    }
  }
</page-query>

<script>
  import {
    SfSection,
    SfProductCard,
  } from '@storefront-ui/vue';

  import formatPrice from '~/lib/format-price';

  export default {
    components: {
      SfSection,
      SfProductCard,
    },
    methods: {
      formatPrice,
    },
  };
</script>

<style lang="scss" scoped>
  @import "~@storefront-ui/vue/styles";
  @mixin for-desktop {
    @media screen and (min-width: $desktop-min) {
      @content;
    }
  }
  .products {
    box-sizing: border-box;
    flex: 1;
    margin: 0 -#{$spacer};
    @include for-desktop {
      margin: $spacer-big;
    }
    &__list {
      display: flex;
      flex-wrap: wrap;
      margin-top: 1.875rem - 0.5rem;
    }
    &__product-card {
      flex: 0 0 50%;
      padding: $spacer;
      @include for-desktop {
        flex: 0 0 25%;
        padding: $spacer-big;
      }
    }
    &__pagination {
      @include for-desktop {
        display: flex;
        justify-content: center;
        margin-top: $spacer-extra-big;
      }
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

</style>
