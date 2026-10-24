<script setup>
import AppNavBar from '@/components/AppNavBar.vue'
import ContactSection from '@/sections/ContactSection.vue'
import FaqSection from '@/sections/FaqSection.vue'

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
  })
}
</script>

<template>
  <AppNavBar />
  <div class="main">
    <ContactSection />
    <FaqSection />
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
