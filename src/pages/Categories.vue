<template>
  <Layout>
    <SfSection
      v-for="category in denode($page.categories)"
      :key="category.id"
      :title-heading="category.name"
      class="section"
    >
      <SfCarousel class="product-carousel">
        <SfCarouselItem
          v-for="product in category.products"
          :key="product.id"
        >
          <SfProductCard
            :title="product.name"
            :regular-price="formatPrice(product.price[0].amount)"
            :link="product.path"
            link-type="g-link"
            class="product-card"
          >
            <template #image>
              <g-image :src="product.main_image.image" />
            </template>
          </SfProductCard>
        </SfCarouselItem>
      </SfCarousel>
    </SfSection>
  </Layout>
</template>

<page-query>
  query {
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
            price {
              amount
            }
            main_image {
              id
              type
              image(width: 216, height: 326, fit: contain, background: "white")
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
    name: 'Categories',
    metaInfo: {
      title: 'Categories',
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
