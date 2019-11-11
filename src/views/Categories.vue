<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <loader v-if="loading"></loader>
      <div class="row" v-else>
        <category-create @created="addNewCategory"></category-create>
        <category-edit
          v-if="categories.length"
          @updated="updateCategories"
          :categories="categories"
          :key="categories.length + updateCount"
        ></category-edit>
        <p class="center" v-else>Категорий пока нет</p>
      </div>
    </section>
  </div>
</template>

<script>
  import CategoryCreate from './../components/CategoryCreate'
  import CategoryEdit from './../components/CategoryEdit'

  export default {
    name: 'categories',
    components: {
      CategoryCreate,
      CategoryEdit,
    },
    data: () => ({
      categories: [],
      loading: true,
      updateCount: 0
    }),
    async mounted() {
      this.categories = await this.$store.dispatch('fetchCategories')
      this.loading = false
    },
    methods: {
      addNewCategory(category) {
        this.categories.push(category)
      },
      updateCategories(category) {
        const idx = this.categories.findIndex(c => c.id === category.id)
        this.categories[idx].title = category.title
        this.categories[idx].limit = category.limit
        this.updateCount++
      }
    }

  }

</script>
