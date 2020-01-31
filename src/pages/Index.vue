<template>
  <Layout>
    <SfSection
      title-heading="Newest Arrivals"
      class="section"
    >
      <SfCarousel class="product-carousel">
        <SfCarouselItem
          v-for="{ node } in $page.arrivals.edges"
          :key="node.id"
        >
          <SfProductCard
            :title="node.name"
            :regular-price="formatPrice(node.price[0].amount)"
            :link="node.path"
            link-type="g-link"
            class="product-card"
            :show-add-to-cart-button="true"
          >
            <template #image>
              <g-image :src="node.main_image.image" />
            </template>
            <template #add-to-cart>
              <span
                class="moltin-buy-button sf-add-to-cart__button sf-button sf-shopkit-button"
                :data-moltin-product-id="node.id"
                data-moltin-text="Add to Cart"
                @click.prevent
              />
            </template>
          </SfProductCard>
        </SfCarouselItem>
      </SfCarousel>
    </SfSection>
    <SfCallToAction
      title="Subscribe to Newsletters"
      button-text="Subscribe"
      description="Be aware of upcoming sales and events. Receive gifts and special offers!"
      class="call-to-action-newsletter"
    />
  </layout>
</template>

<page-query>
  query {
    arrivals: allMoltinProduct(limit: 6, sortBy: "date") {
      edges {
        node {
          id
          name
          description
          path
          price {
            amount
          }
          main_image {
            image(
              width: 216
              height: 326
              quality: 90
              fit: contain
              background: "white"
            )
          }
        }
      }
    }
  }
</page-query>

<script>
  import {
    SfCallToAction,
    SfSection,
    SfCarousel,
    SfProductCard,
  } from '@storefront-ui/vue';

  import formatPrice from '~/lib/format-price';

  export default {
    name: 'Home',
    components: {
      SfCallToAction,
      SfSection,
      SfCarousel,
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
.call-to-action-newsletter {
  margin: $spacer-big 0;
  box-sizing: border-box;
  @include for-desktop {
    margin: $spacer-extra-big * 2 0;
  }
}
.banner-central {
  @include for-desktop {
    padding-right: 30%;
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
.banners {
  margin: $spacer-big 0;
  @include for-desktop {
    margin: $spacer-extra-big 0;
  }
}
.images-grid {
  max-width: 960px;
  margin: auto;
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
    flex: 1;
    & + & {
      margin-left: $spacer-big / 2;
      @include for-desktop {
        margin-left: $spacer-big;
      }
    }
  }
}
.product-card {
  max-width: unset;
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
</style>
