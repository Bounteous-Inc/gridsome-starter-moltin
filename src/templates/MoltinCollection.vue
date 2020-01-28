<template>
  <Layout>
    <h1>{{ $page.collection.name }}</h1>

    <p>{{ $page.collection.description }}</p>

    <ul>
      <li
        v-for="product in $page.collection.products"
        :key="product.id"
      >
        <a :href="product.path">{{ product.name }}</a>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    collection: moltinCollection(id: $id) {
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
      title: 'Collection',
    },
  };
</script>

<style>
</style>
