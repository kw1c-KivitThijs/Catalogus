<script setup lang="ts">
import AlbumArtwork from '@/components/AlbumProducts.vue'
import { reactive, UnwrapNestedRefs } from 'vue'
import axios from 'axios'
import { Separator } from '@/components/ui/separator'
import { casualFilter, womanFilter, menFilter, accesoriesFilter } from '@/data/filters'
interface Product {
  slug: string
  name: string
}

const data: UnwrapNestedRefs<{
  products: Product[]
  loading: boolean
}> = reactive({
  products: [],
  loading: true
})

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost/')
    console.log(response.data) // Log the response data
    data.products = response.data
    data.loading = false // Update loading statem
  } catch (error) {
    console.error('Error fetching products:', error)
    data.loading = false // Update loading state even on error
  }
}

fetchData()
</script>
<template>
  <div class="space-y-4 py-4" id="products">
    <div class="px-3 py-2 flex flex-col pl-6">
      <h2 class="mb-2 px-4 text-lg font-semibold tracking-tight">Casual</h2>
      <div class="space-y-1 p-2">
        <button
          class="px-3 py-2 flex flex-col"
          v-for="(item, index) in casualFilter"
          :key="index"
        >
          {{ item.name }}
        </button>
      </div>
      <separator class="m-2"></separator>
      <h2 class="mb-2 px-4 text-lg font-semibold tracking-tight">Woman</h2>
      <div class="space-y-1 p-2">
        <button
          class="px-3 py-2 flex flex-col"
          v-for="(item, index) in womanFilter"
          :key="index"
        >
          {{ item.name }}
        </button>
      </div>
      <separator class="m-2"></separator>
      <h2 class="mb-2 px-4 text-lg font-semibold tracking-tight">Men</h2>
      <div class="space-y-1 p-2">
        <button
          class="px-3 py-2 flex flex-col"
          v-for="(item, index) in menFilter"
          :key="index"
        >
          {{ item.name }}
        </button>
      </div>
      <separator class="m-2"></separator>
      <h2 class="mb-2 px-4 text-lg font-semibold tracking-tight">Accesories</h2>
      <div class="space-y-1 p-2">
        <button
          class="px-3 py-2 flex flex-col"
          v-for="(item, index) in accesoriesFilter"
          :key="index"
        >
          {{ item.name }}
        </button>
      </div>
    </div>
    <div class="relative mt-10 mb-10">
      <h1 class="mt-20 mb-10 text-lg font-medium text-gray-900 dark:text-white">Our newest products</h1>
      <div class="flex gap-8 pb-4 flex-wrap">
        <RouterLink
            v-for="(product, index) in data.products"
            :to="`/products/${product.slug}`"
            :key="index"
        >
          <AlbumArtwork :album="product" class="w-[350px]" aspect-ratio="portrait" />
        </RouterLink>
      </div>
    </div>
  </div>


</template>
