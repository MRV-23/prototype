<template>
  <h1>This is cliente {{ collapsed ? 'closed' : 'open' }}</h1>
  <button @click="toggleSidebar">T</button>
</template>

<script>
import { collapsed, toggleSidebar } from '@/components/sidebar/state'

export default {
  setup() {
    return { collapsed, toggleSidebar }
  }
}
</script>
