<script setup lang="ts">
import { RouteParamValue, useRouter } from 'vue-router'
import axios from 'axios'
import { ref, onMounted } from 'vue'
import AlbumArtwork from '@/components/AlbumProduct.vue'
import SideImage from '@/components/SideImage.vue'

interface Product {
  slug: string
  name: string
  // Voeg andere benodigde eigenschappen toe
}

const router = useRouter()

const product = ref<Product | null>(null)
const loading = ref<boolean>(true)

const fetchProductData = async (slug: string | RouteParamValue[]) => {
  try {
    const response = await axios.get(`http://localhost/products/${slug}`)
    product.value = response.data
    loading.value = false
  } catch (error) {
    console.error('Fout bij het ophalen van productgegevens:', error)
    loading.value = false
  }
}

onMounted(() => {
  const slug = router.currentRoute.value.params.slug
  fetchProductData(slug)
})
</script>

<template>
  <div id="product" class="mt-24 ml-14">
    <div v-if="loading">Laden...</div>
    <div v-else>
      <div>
        <div class="overflow-hidden rounded-md">
          <AlbumArtwork :album="product" class="w-[590px]" aspect-ratio="square" />
          <div class="flex justify-between mt-10">
            <side-image v-for="index in 4" :key="index" :album="product" class="w-[100px]" aspect-ratio="square" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="product">
      <div class="space-y-1 text-sm" id="productpadding">
        <h3 class="text-5xl font-bold leading-none text-wrap">
          {{ product.name }}
        </h3>
        <p class="text-xl font-extrabold text-muted-foreground">€{{ product.price }}</p>
        <p class="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

      </div>
    </div>
  </div>
</template>


