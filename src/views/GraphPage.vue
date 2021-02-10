<template>
    <AdminPanel/>
    <Graph/>
</template>

<script>
import AdminPanel from  '@/components/AdminPanel.vue'
import Graph from  '@/components/Graph.vue'
export default {
  name: 'GraphPage',
  components: {
    AdminPanel,
    Graph
  }
}
</script>