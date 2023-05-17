<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>

<template>
  <main class="bg-gray-100">
    <el-button @click="counter.increment">
      count++
    </el-button>
    <span class="text-red-300">{{ counter.count }}</span>
  </main>
</template>
