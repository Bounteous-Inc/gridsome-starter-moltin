<template>
  <Layout>
    <h1>{{ $page.product.name }}</h1>

    <p>{{ $page.product.description }}</p>

    <g-image :src="$page.product.main_image.image" />
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
    }
  }
</page-query>

<script>
  export default {
    metaInfo: {
      title: 'Category',
    },
  };
</script>

<style>
</style>
