<template>
  <Layout>
    <h2>Categories</h2>
    <ul>
      <li
        v-for="{ node } in $page.categories.edges"
        :key="node.id"
      >
        <a :href="node.path">{{ node.name }}</a>
      </li>
    </ul>
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
        }
      }
    }
  }
</page-query>

<script>
  export default {
    metaInfo: {
      title: 'About us',
    },
  };
</script>
