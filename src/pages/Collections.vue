<template>
  <Layout>
    <SfSection
      v-for="collection in denode($page.collections)"
      :key="collection.id"
      :title-heading="collection.name"
      class="section"
    >
      <SfCarousel class="product-carousel">
        <SfCarouselItem
          v-for="product in collection.products"
          :key="product.id"
        >
          <SfProductCard
            :title="product.name"
            :regular-price="formatPrice(product.price[0].amount)"
            :link="product.path"
            link-type="g-link"
            class="product-card"
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
        </SfCarouselItem>
      </SfCarousel>
    </SfSection>
  </Layout>
</template>

<page-query>
  query {
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
    }
  }
</page-query>

<script>
  import {
    SfCarousel,
    SfProductCard,
    SfSection,
  } from '@storefront-ui/vue';

  import denode from '~/lib/denode';
  import formatPrice from '~/lib/format-price';

  export default {
    name: 'Collections',
    metaInfo: {
      title: 'Collections',
    },
    components: {
      SfCarousel,
      SfProductCard,
      SfSection,
    },
    methods: {
      denode,
      formatPrice,
    },
  };
</script>
