<template>
  <Layout>
    <h1>{{ $page.moltinProduct.name }}</h1>

    <p>{{ $page.moltinProduct.description }}</p>
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    moltinProduct(id: $id) {
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
