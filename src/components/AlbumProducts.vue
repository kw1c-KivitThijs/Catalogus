<script setup lang="ts">
import type { Album } from '@/data/albums'
import { cn } from '@/lib/utils'
import { defineProps } from 'vue'

interface AlbumArtworkProps {
  album: Album
  aspectRatio?: 'portrait' | 'square'
  width?: number
  height?: number
}
const { album, aspectRatio, width, height } = defineProps<AlbumArtworkProps>()

const loading = false // Moet worden bijgewerkt vanuit het parent-component


</script>

<template>
  <div class="space-y-4" v-bind="$attrs">
    <div class="overflow-hidden rounded-md">
      <img
        :src="album.mainimage_url"
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
    <div class="space-y-1 text-m flex justify-between">
      <h3 class="text-m font-bold text-muted-foreground leading-none text-wrap">
        {{ album.name }}
      </h3>
      <p class="text-lg font-bold pl-10">€{{ album.price }}</p>
    </div>
  </div>
  <div v-if="loading">Loading...</div>
</template>
