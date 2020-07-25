<template>
  <div>
    <form @submit.prevent="addTimestamp">
      <select v-model="categoryId" @change="loadFields">
        <option
          v-for="category in categories"
          :key="category.id"
          :label="category.category"
          :value="category.id"
        ></option>
      </select>
      <input v-model="message" placeholder="Message here" />
      <br />
      <div v-for="field in fields" :key="field.name">
        <label>{{ field.label }}</label>
        <input v-model="field.value" />
      </div>
      <button>Create</button>
    </form>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "AddTimestamp",
  data() {
    return {
      message: "",
      categoryId: 1, // All users have Default which is categoryId = 1
      fields: []
    };
  },
  methods: {
    addTimestamp() {
      const newTimestamp = {
        timestamp: new Date(),
        message: this.message,
        categoryId: this.categoryId,
        category: this.currentCategory.category,
        fields: this.fields
      };
      this.$store.commit("addTimestamp", newTimestamp);
      // Reset the fields
      this.loadFields();
    },
    loadFields() {
      // We want to load the fields into the form dynamically.
      // Using a clone, ensures we do not change the default behavior of
      // the fields.
      this.fields = _.cloneDeep(this.currentCategoryFields);
    }
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
    currentCategory() {
      // current category is selected form the select drop down
      return this.$store.state.categories.find(
        category => category.id === this.categoryId
      );
    },
    currentCategoryFields() {
      return this.currentCategory.fields;
    },
    currentCategoryFieldCount() {
      return this.currentCategory.fields.length;
    }
  }
};
</script>

<style scoped>
.additional-fields {
  border: 1px, solid, black;
}
</style>