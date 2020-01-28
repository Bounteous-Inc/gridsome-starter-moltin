<template>
  <Layout>
    <h1>Collections</h1>
    <ul>
      <li
        v-for="{ node } in $page.collections.edges"
        :key="node.id"
      >
        <a :href="node.path">{{ node.name }}</a>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
  query {
    collections: allMoltinCollection {
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
      title: 'Collections',
    },
  };
</script>
