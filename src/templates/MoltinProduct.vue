<template>
  <Layout>
    <h1>{{ $page.product.name }}</h1>

    <div class="product-wrapper">
      <div class="product-image">
        <g-image :src="$page.product.main_image.image" />
      </div>
      <div class="product-details">
        <p><span>Price:</span> {{ formatPrice }}</p>

        <p><span>SKU: </span> {{ $page.product.sku }}</p>

        <p><span>Description</span> {{ $page.product.description }}</p>

        <p><span>Type:</span> {{ $page.product.commodity_type }}</p>

        <SfAddToCart
          v-model="qty"
          :stock="stock"
          :can-add-to-cart="stock > 0"
          class="product-details__add-to-cart"
        />
        <SfProperty
          v-for="(property, i) in getProperties"
          :key="i"
          :name="property.property"
          :value="property.value"
          class="product-property"
        />
      </div>
    </div>
    <SfSection
      title-heading="You might also like"
      class="section"
    >
      <SfCarousel class="product-carousel">
        <SfCarouselItem
          v-for="(product, i) in getRelated"
          :key="i"
        >
          <SfProductCard
            :title="product.name"
            :regular-price="product.price[0].amount"
            :image="product.main_image.image.src"
            class="product-card"
            @click:wishlist="toggleWishlist(i)"
          />
        </SfCarouselItem>
      </SfCarousel>
    </SfSection>
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
        image
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
              name
              products {
                name
                main_image {
                  id
                  type
                  image
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
              name
            }
          }
        }
      }
    }
  }
</page-query>

<script>
  import {
    // SfAlert,
    SfProperty,
    // SfHeading,
    // SfPrice,
    // SfRating,
    // SfSelect,
    SfAddToCart,
    // SfGallery,
    SfProductCard,
    SfCarousel,
    SfSection,
    // SfImage,
    // SfBreadcrumbs,
  } from '@storefront-ui/vue';

  export default {
    name: 'Product',
    components: {
      // SfAlert,
      SfProperty,
      // SfHeading,
      // SfPrice,
      // SfRating,
      // SfSelect,
      SfAddToCart,
      // SfGallery,
      SfProductCard,
      SfCarousel,
      SfSection,
      // SfImage,
      // SfBreadcrumbs,
    },
    data() {
      return {
        qty: '1',
        stock: 5,
        size: '',
        sizes: [
          { label: 'XXS', value: 'xxs' },
          { label: 'XS', value: 'xs' },
          { label: 'S', value: 's' },
          { label: 'M', value: 'm' },
          { label: 'L', value: 'l' },
          { label: 'XL', value: 'xl' },
          { label: 'XXL', value: 'xxl' },
        ],
        color: '',
        colors: [
          { label: 'Red', value: 'red', color: '#990611' },
          { label: 'Black', value: 'black', color: '#000000' },
          { label: 'Yellow', value: 'yellow', color: '#DCA742' },
          { label: 'Blue', value: 'blue', color: '#004F97' },
          { label: 'Navy', value: 'navy', color: '#656466' },
          { label: 'White', value: 'white', color: '#FFFFFF' },
        ],
        properties: [
          {
            name: 'Product Code',
            value: '578902-00',
          },
          {
            name: 'Category',
            value: 'Pants',
          },
          {
            name: 'Material',
            value: 'Cotton',
          },
          {
            name: 'Country',
            value: 'Germany',
          },
        ],
        products: [
          {
            title: 'Cream Beach Bag',
            image: 'assets/storybook/Home/productA.jpg',
            price: { regular: '50.00 $' },
            rating: { max: 5, score: 4 },
            isOnWishlist: false,
          },
          {
            title: 'Cream Beach Bag',
            image: 'assets/storybook/Home/productB.jpg',
            price: { regular: '50.00 $' },
            rating: { max: 5, score: 4 },
            isOnWishlist: false,
          },
          {
            title: 'Cream Beach Bag',
            image: 'assets/storybook/Home/productC.jpg',
            price: { regular: '50.00 $' },
            rating: { max: 5, score: 4 },
            isOnWishlist: false,
          },
          {
            title: 'Cream Beach Bag',
            image: 'assets/storybook/Home/productA.jpg',
            price: { regular: '50.00 $' },
            rating: { max: 5, score: 4 },
            isOnWishlist: false,
          },
          {
            title: 'Cream Beach Bag',
            image: 'assets/storybook/Home/productB.jpg',
            price: { regular: '50.00 $' },
            rating: { max: 5, score: 4 },
            isOnWishlist: false,
          },
          {
            title: 'Cream Beach Bag',
            image: 'assets/storybook/Home/productC.jpg',
            price: { regular: '50.00 $' },
            rating: { max: 5, score: 4 },
            isOnWishlist: false,
          },
          {
            title: 'Cream Beach Bag',
            image: 'assets/storybook/Home/productA.jpg',
            price: { regular: '50.00 $' },
            rating: { max: 5, score: 4 },
            isOnWishlist: false,
          },
          {
            title: 'Cream Beach Bag',
            image: 'assets/storybook/Home/productB.jpg',
            price: { regular: '50.00 $' },
            rating: { max: 5, score: 4 },
            isOnWishlist: false,
          },
        ],
        reviews: [
          {
            author: 'Jane D.Smith',
            date: 'April 2019',
            message:
              'I was looking for a bright light for the kitchen.',
            rating: 4,
          },
          {
            author: 'Mari',
            date: 'Jan 2018',
            message:
              'Excellent light output from this led fitting. Relatively easy to fix to the ceiling.',
            rating: 5,
          },
        ],
        detailsIsActive: false,
        breadcrumbs: [
          {
            text: 'Home',
            route: {
              link: '#',
            },
          },
          {
            text: 'Category',
            route: {
              link: '#',
            },
          },
          {
            text: 'Pants',
            route: {
              link: '#',
            },
          },
        ],
      };
    },
    computed: {
      formatPrice() {
        return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(this.$page.product.price[0].amount);
      },
      getProperties() {
        const properties = [];
        const sku = { property: 'SKU', value: this.$page.product.sku };
        const category = { property: 'Category', value: this.$page.product.categories.edges[0].node.name };

        properties.push(sku, category);

        return properties;
      },
      getRelated() {
        return this.$page.product.categories.edges.map((n) => n.node.products)[0];
      },
    },
    methods: {
      toggleWishlist(index) {
        this.products[index].isOnWishlist = !this.products[index].isOnWishlist;
      },
    },
  };
</script>

<style>
  .product-wrapper {
    display: flex;
  }
  .product-image {
    max-width: 800px;
  }
  .product-details  {
    max-width: 400px;
  }
</style>
