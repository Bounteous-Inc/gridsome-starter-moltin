<template>
  <Layout>
    <h1>{{ $page.category.name }}</h1>

    <p>{{ $page.category.description }}</p>

    <ul>
      <li
        v-for="product in $page.category.products"
        :key="product.id"
      >
        <a :href="product.path">{{ product.name }}</a>
      </li>
    </ul>
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
        slug
        path
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
