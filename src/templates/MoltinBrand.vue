<template>
  <Layout>
    <h1>{{ $page.moltinBrand.name }}</h1>

    <p>{{ $page.moltinBrand.description }}</p>

    <ul>
      <li
        v-for="product in $page.moltinBrand.products"
        :key="product.id"
      >
        <a :href="product.path">{{ product.name }}</a>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    moltinBrand(id: $id) {
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
        slug
        path
      }
    }
  }
</page-query>

<script>
  export default {
    metaInfo: {
      title: 'Brand',
    },
  };
</script>

<style>
</style>
