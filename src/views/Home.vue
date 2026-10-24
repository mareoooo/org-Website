<script setup>
import AppNavBar from '@/components/AppNavBar.vue'
import HomeSection from '@/sections/HomeSection.vue'
import ProgramSection from '@/sections/ProgramSection.vue'
import HighlightsSection from '@/sections/HighlightsSection.vue'

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
  })
}
</script>

<template>
  <AppNavBar />
  <div class="main">
    <HomeSection />
    <ProgramSection />
    <HighlightsSection />
  </div>
</template>

<style scoped>
.main {
  gap: 0;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-top: 120px;
}

@media (max-width: 768px) {
  .main {
    padding-top: 130px;
  }
}
</style>
