<script setup>
import AppNavBar from '@/components/AppNavBar.vue'
import EventsSection from '@/sections/EventsSection.vue'
</script>

<template>
  <AppNavBar />
  <div class="main">
    <EventsSection />
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  padding-top: 90px;
}

@media (max-width: 768px) {
  .main {
    padding-top: 130px;
  }
}
</style>
