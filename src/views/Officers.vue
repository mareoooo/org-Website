<script setup>
import AppNavBar from '@/components/AppNavBar.vue'
import OfficerSection from '@/sections/OfficerSection.vue'
import CommitteeSection from '@/sections/CommitteeSection.vue'
import AdviserSection from '@/sections/AdviserSection.vue'

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
  })
}
</script>

<template>
  <AppNavBar />
  <div class="main">
    <OfficerSection />
    <CommitteeSection />
    <AdviserSection />
  </div>
</template>

<style scoped>
.main {
  gap: 10px;
  display: flex;
  flex-direction: column;
  padding-top: 120px;
}

@media (max-width: 768px) {
  .main {
    padding-top: 130px;
  }
}
</style>
