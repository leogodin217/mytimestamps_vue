<template>
  <div class="timestamps">
    <h2>Timestamps</h2>
    <AddTimestamp />
    <ul>
      <li v-for="timestamp in timestamps" :key="timestamp.id">
        <Timestamp :timestamp="timestamp" />
      </li>
    </ul>
  </div>
</template>

<script>
import Timestamp from "@/components/Timestamp";
import AddTimestamp from "@/components/AddTimestamp";
export default {
  name: "Timestamps",
  components: { Timestamp, AddTimestamp },
  data() {
    return {
      message: "",
      categoryId: 1
    };
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
    timestamps() {
      return this.$store.state.timestamps;
    }
  },
  methods: {}
};
</script>

<style scoped>
ul,
li {
  text-align: left;
}
</style>