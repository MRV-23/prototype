<script>
import SidebarLink from './SidebarLink'
import { collapsed, toggleSidebar, sidebarWidth } from './state'

export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span >Diversion Yayon</span>
    </h1>

    <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
    <SidebarLink to="/renta" icon="fas fa-chart-area">Renta</SidebarLink>
    <SidebarLink to="/brincolin" icon="fas fa-campground">Brincolines</SidebarLink>
    <SidebarLink to="/clientes" icon="fas fa-users">Clientes</SidebarLink>
    

    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left text-white" />
    </span>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #3498DB;
  --sidebar-item-hover: #D6EAF8;
  --sidebar-item-active: #2E86C1;
}
</style>

<style scoped>
.sidebar {
  @apply text-white bg-yellow-400 float-left fixed top-0 left-0 bottom-0 p-5 flex flex-col;
}
.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}


</style>
