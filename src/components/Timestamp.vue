<template>
  <div>{{ formattedDate }} - {{ timestamp.category }} - {{ timestamp.message }} - {{ fields }}</div>
</template>

<script>
export default {
  name: "Timestamp",
  props: ["timestamp"],
  computed: {
    formattedDate() {
      return this.timestamp.timestamp.toLocaleString();
    },
    fields() {
      return this.timestamp.fields.map(
        field => field.label + ": " + field.value
      );
    }
  }
};
</script>

<style scoped>
</style>