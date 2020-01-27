<template>
  <Layout>
    <h1>Brands</h1>
    <ul>
      <li
        v-for="{ node } in $page.brands.edges"
        :key="node.id"
      >
        <a :href="node.path">{{ node.name }}</a>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
  query {
    brands: allMoltinBrand {
      edges {
        node {
          id
          name
          path
        }
      }
    }
  }
</page-query>

<script>
  export default {
    metaInfo: {
      title: 'Brands',
    },
  };
</script>
