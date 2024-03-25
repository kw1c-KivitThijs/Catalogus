<script setup lang="ts">
import type { Album } from '@/data/albums'
import { cn } from '@/lib/utils'
import { defineProps } from 'vue'

interface AlbumSideImage {
  album: Album
  aspectRatio?: 'portrait' | 'square'
  width?: number
  height?: number
}
const { album, aspectRatio, width, height } = defineProps<AlbumSideImage>()

const loading = false // Moet worden bijgewerkt vanuit het parent-component


</script>

<template>
  <div class="space-y-4" v-bind="$attrs">
    <div class="overflow-hidden rounded-md">
      <img
          :src="album.sideimage_url"
          :alt="album.name"
          :width="width"
          :height="height"
          :class="
          cn(
            'h-auto w-auto object-cover transition-all hover:scale-105',
            aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square'
          )
        "
      />
    </div>
  </div>
  <div v-if="loading">Loading...</div>
</template>
