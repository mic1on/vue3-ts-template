<script setup lang="ts">
const count = ref(0)
</script>

<template>
  <main>
    <el-button @click="count++">
      count++
    </el-button>
    {{ count }}
  </main>
</template>
