<template>
  <Layout>
    <div id="product">
      <SfBreadcrumbs
        class="breadcrumbs desktop-only"
        :breadcrumbs="breadcrumbs"
      />
      <div class="product">
        <div class="product__gallery">
          <g-image
            :src="$page.product.main_image.image_mobile"
            class=" mobile-only"
            width="390"
          />
          <g-image
            :src="$page.product.main_image.image_desktop"
            class="desktop-only"
            width="590"
          />
        </div>
        <div class="product__description">
          <SfSticky class="product-details">
            <div class="product-details__mobile-top">
              <div>
                <SfHeading
                  :title="$page.product.name"
                  :level="2"
                  class="sf-heading--no-underline sf-heading--left product-details__heading"
                />
                <div class="product-details__sub">
                  <SfPrice
                    :regular="formatPrice($page.product.price[0].amount)"
                    class="sf-price--big product-details__sub-price"
                  />
                </div>
              </div>
            </div>
            <p class="product-details__description">
              {{ $page.product.description }}
            </p>
            <div class="product-details__section">
              <SfAddToCart
                :key="$page.product.id"
                class="product-details__add-to-cart"
              >
                <template #add-to-cart-btn>
                  <span
                    class="moltin-buy-button sf-add-to-cart__button sf-button sf-shopkit-button"
                    :data-moltin-product-id="$page.product.id"
                    data-moltin-open-cart="true"
                    data-moltin-text="Add to Cart"
                  />
                </template>
              </SfAddToCart>
            </div>
            <div class="product-details__description">
              <SfProperty
                name="SKU"
                :value="$page.product.sku"
                class="product-property"
              />
              <SfProperty
                name="Category"
                :value="$page.product.categories.edges[0].node.name"
                class="product-property"
              />
            </div>
          </SfSticky>
        </div>
      </div>
      <SfSection
        :key="$page.product.id"
        :title-heading="`More ${$page.product.categories.edges[0].node.name} Products`"
        class="section"
      >
        <SfCarousel class="product-carousel">
          <SfCarouselItem
            v-for="product in related.filter(others)"
            :key="product.id"
          >
            <SfProductCard
              :title="product.name"
              :regular-price="formatPrice(product.price[0].amount)"
              :link="product.path"
              link-type="g-link"
              wishlist-icon="false"
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
                  data-moltin-open-cart="true"
                  data-moltin-text="Add to Cart"
                  @click.prevent
                />
              </template>
            </SfProductCard>
          </SfCarouselItem>
        </SfCarousel>
      </SfSection>
      <SfSection
        v-for="collection in denode($page.product.collections).filter(others)"
        :key="collection.id"
        :title-heading="`Also in ${collection.name}`"
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
              wishlist-icon="false"
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
                  data-moltin-open-cart="true"
                  data-moltin-text="Add to Cart"
                  @click.prevent
                />
              </template>
            </SfProductCard>
          </SfCarouselItem>
        </SfCarousel>
      </SfSection>
    </div>
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    product: moltinProduct(id: $id) {
      id
      sku
      slug
      name
      description
      manage_stock
      status
      commodity_type
      created_at
      updated_at
      main_image {
        id
        type
        image_mobile: image(width: 390, quality: 90)
        image_desktop: image(width: 590, quality: 90)
        file_name
        mime_type
        created_at
      }
      price {
        amount
      }
      categories: belongsTo(filter: { typeName: { eq: MoltinCategory } }) {
        edges {
          node {
            ... on MoltinCategory {
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
      brands: belongsTo(filter: { typeName: { eq: MoltinBrand } }) {
        edges {
          node {
            ... on MoltinBrand {
              name
            }
          }
        }
      }
      collections: belongsTo(filter: { typeName: { eq: MoltinCollection } }) {
        edges {
          node {
            ... on MoltinCollection {
              id
              name
              products {
                id
                name
                path
                main_image {
                  id
                  type
                  image(
                    width: 216
                    height: 326
                    fit: contain
                    quality: 90
                    background: "white"
                  )
                  file_name
                  mime_type
                  created_at
                }
                price {
                  amount
                }
              }
            }
          }
        }
      }
    }
  }
</page-query>

<script>
  import {
    SfAddToCart,
    SfBreadcrumbs,
    SfCarousel,
    SfHeading,
    SfPrice,
    SfProductCard,
    SfProperty,
    SfSection,
    SfSticky,
  } from '@storefront-ui/vue';

  import denode from '~/lib/denode';
  import formatPrice from '~/lib/format-price';

  export default {
    name: 'Product',
    components: {
      SfAddToCart,
      SfBreadcrumbs,
      SfCarousel,
      SfHeading,
      SfPrice,
      SfProductCard,
      SfProperty,
      SfSection,
      SfSticky,
    },
    computed: {
      related() {
        return this.$page.product.categories.edges.map((n) => n.node.products)[0];
      },
      breadcrumbs() {
        return [
          {
            text: 'Home',
            route: {
              link: '/',
            },
          },
          {
            text: this.$page.product.categories.edges[0].node.name,
            route: {
              link: this.$page.product.categories.edges[0].node.path,
            },
          },
        ];
      },
    },
    methods: {
      denode,
      formatPrice,
      others(n) {
        return n.id !== this.$page.product.id;
      },
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
  #product {
    box-sizing: border-box;
    @include for-desktop {
      max-width: 1240px;
      margin: auto;
    }
  }
  .banner-application {
    min-height: 420px;
    max-width: 1040px;
    margin: auto;
    padding-right: calc(25% + 5rem);
    padding-left: 2.5rem;
    line-height: 1.6;
    &__title {
      margin: $spacer-big 0 0 0;
      font-size: $h1-font-size-desktop;
      font-weight: $h1-font-weight-desktop;
    }
    &__subtitle {
      color: #a3a5ad;
      font-family: $body-font-family-primary;
      font-size: $font-size-extra-big-desktop;
      font-weight: $body-font-weight-primary;
    }
    &__download {
      max-height: 47px;
      margin-top: $spacer-extra-big;
      & + & {
        margin-left: $spacer-big;
      }
    }
  }
  .breadcrumbs {
    padding: $spacer-big $spacer-extra-big $spacer-extra-big;
  }
  .gallery-mobile {
    $height-other: 240px;
    $height-iOS: 265px;
    height: calc(100vh - #{$height-other});
    @supports (-webkit-overflow-scrolling: touch) {
      height: calc(100vh - #{$height-iOS});
    }
    ::v-deep .sf-image {
      img {
        width: 100%;
      }
    }
  }
  .images-grid {
    &__row {
      display: flex;
      & + & {
        margin-top: $spacer-big / 2;
        @include for-desktop {
          margin-top: $spacer-big;
        }
      }
    }
    &__col {
      margin: 0;
      & + & {
        margin-left: $spacer-big / 2;
        @include for-desktop {
          margin-left: $spacer-big;
        }
      }
    }
  }
  .product {
    @include for-desktop {
      display: flex;
    }
    &__gallery,
    &__description {
      flex: 1;
    }
    &__description {
      padding: 0 $spacer-big;
      @include for-desktop {
        margin-left: $spacer-big * 5;
      }
    }
  }
  .product-card {
    max-width: unset; // ?
    &:hover {
      @include for-desktop {
        box-shadow: 0px 4px 20px rgba(168, 172, 176, 0.19);
      }
    }
  }
  .product-carousel {
    margin: -20px -#{$spacer-big} -20px 0;
    @include for-desktop {
      margin: -20px 0;
    }
    ::v-deep .sf-carousel__wrapper {
      padding: 20px 0;
      @include for-desktop {
        padding: 20px;
        max-width: calc(100% - 216px);
      }
    }
  }
  .product-details {
    &__action {
      display: flex;
      margin: $spacer-big 0 ($spacer-big / 2);
      @include for-desktop {
        justify-content: flex-end;
      }
    }
    &__add-to-cart {
      margin-top: 1.5rem;
      @include for-desktop {
        margin-top: $spacer-extra-big;
      }
    }
    &__alert {
      margin-top: 1.5rem;
    }
    &__attribute {
      margin-bottom: $spacer-big;
    }
    &__description {
      margin: $spacer-extra-big 0 ($spacer-big * 3) 0;
      font-family: $body-font-family-secondary;
      font-size: $font-size-regular-mobile;
      line-height: 1.6;
      @include for-desktop {
        font-size: $font-size-regular-desktop;
      }
    }
    &__divider {
      margin-top: 30px;
    }
    &__heading {
      margin-top: $spacer-big;
      ::v-deep .sf-heading__title {
        font-size: $font-size-big-mobile;
        font-weight: $body-font-weight-primary;
        @include for-desktop {
          font-size: $h1-font-size-desktop;
          font-weight: $body-font-weight-secondary;
        }
      }
      @include for-desktop {
        margin-top: 0;
      }
    }
    &__mobile-bar {
      display: none;
      padding: $spacer-medium 0;
      box-sizing: border-box;
      .product--is-active & {
        display: block;
        @include for-desktop {
          display: none;
        }
      }
      @include for-desktop {
        display: none;
      }
    }
    &__mobile-top {
      display: flex;
      align-items: center;
      @include for-desktop {
        display: block;
      }
    }
    &__properties {
      margin-top: $spacer-big;
    }
    &__sub {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }
    &__sub-price {
      flex-basis: 100%;
      margin-top: $spacer-big / 4;
      @include for-desktop {
        flex-basis: auto;
        margin-top: $spacer-big / 2;
      }
    }
    &__sub-rating {
      display: flex;
      margin-top: $spacer-big / 2;
      @include for-desktop {
        margin-left: auto;
      }
    }
    &__sub-reviews {
      margin-left: 10px;
      font-size: 0.75rem;
    }
    &__section {
      border-bottom: 1px solid #f1f2f3;
      padding-bottom: 10px;
      @include for-desktop {
        border: 0;
        padding-bottom: 0;
      }
    }
    &__tabs {
      margin-top: $spacer-big;
      @include for-desktop {
        margin-top: 5 * $spacer-big;
      }
      p {
        margin: 0;
      }
    }
    &__review {
      padding-bottom: $spacer-big;
      @include for-desktop {
        padding-bottom: $spacer-extra-big;
        border-bottom: 1px solid $c-light;
      }
      & + & {
        padding-top: $spacer-extra-big;
        border-top: 1px solid $c-light;
        @include for-desktop {
          border-top: 0;
          padding-top: $spacer-extra-big;
        }
      }
    }
  }
  .product-property {
    padding: $spacer-small 0;
  }
  .section {
    padding-left: $spacer-big;
    padding-right: $spacer-big;
    @include for-desktop {
      padding-left: 0;
      padding-right: 0;
    }
  }
  /* SfAction or SfButton modifier */
  .sf-action {
    padding: 0;
    border: 0;
    outline: none;
    background-color: transparent;
    color: $c-text;
    font-family: $body-font-family-secondary;
    font-size: $font-size-regular-mobile;
    font-weight: $body-font-weight-secondary;
    line-height: 1.6;
    text-decoration: underline;
    cursor: pointer;
    @include for-desktop {
      font-size: $font-size-regular-desktop;
    }
  }
</style>
