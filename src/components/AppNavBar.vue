<template>
  <div class="navbar">
    <div class="top">
      <div class="logo">
        <img src="@/assets/image/ITSO-logo.png" alt="" />
        <p>Information Technology Students Organization</p>
      </div>
      <div class="menu">
        <div class="dropdown">
          <a @click="goToSection('/', 'home')">Home</a>
          <div class="submenu">
            <a @click="goToSection('/', 'highlights')">Highlights</a>
            <a @click="goToSection('/', 'program')">Programs</a>
          </div>
        </div>
        <div class="dropdown">
          <RouterLink to="/about">About</RouterLink>
          <div class="submenu">
            <a @click="goToSection('/about', 'history')">History</a>
            <a @click="goToSection('/about', 'mission')">Mission and Vision</a>
            <a @click="goToSection('/about', 'objectives')">Objectives</a>
          </div>
        </div>
        <div class="dropdown">
          <RouterLink to="/officers">Officers</RouterLink>
          <div class="submenu">
            <a @click="goToSection('/officers', 'executive')">Executive Board</a>
            <a @click="goToSection('/officers', 'committees')">Committees</a>
            <a @click="goToSection('/officers', 'advisers')">Advisers</a>
          </div>
        </div>
        <RouterLink to="/events">Events</RouterLink>
        <div class="dropdown">
          <RouterLink to="/contact">Contact</RouterLink>
          <div class="submenu">
            <a @click="goToSection('/contact', 'contact')">Contact Info</a>
            <a @click="goToSection('/contact', 'faq')">FAQ</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToSection = async (path, id) => {
  if (router.currentRoute.value.path !== path) {
    await router.push(path)
  }

  setTimeout(() => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })
  })
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  background-color: #180124;
  box-shadow: 0 8px 24px rgba(60, 59, 59, 0.7);

  .top {
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    display: flex;
    align-items: center;
    padding: 30px;

    p {
      margin-left: 10px;
      max-width: 180px;
      font-size: 18px;
      font-weight: bold;
      line-height: 1.2;
      color: #f9f9f9;
    }
  }

  img {
    width: 60px;
  }

  .menu {
    display: flex;
    font-size: 15px;
    padding: 3px 20px;
    gap: 25px;
    color: aliceblue;
    font-weight: bold;
    cursor: pointer;
    a {
      color: aliceblue;
      text-decoration: none;
    }

    a:hover,
    a.router-link-active {
      color: #ffcc80;
    }
  }

  .dropdown {
    position: relative;

    .submenu {
      position: absolute;
      display: none;
      flex-direction: column;
      background-color: #180124;
      min-width: 170px;
      border-radius: 5px;
      padding: 10px;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);
      gap: 10px;
    }
  }

  .dropdown:hover .submenu {
    display: flex;
  }

  .dropdown:last-child .submenu {
    right: 0;
  }
}

@media (max-width: 760px) {
  .navbar {
    .top {
      height: auto;
      flex-direction: column;
      padding: 10px 0;
    }

    .logo {
      padding: 0;
      justify-content: center;
    }

    .logo p {
      font-size: 12px;
      max-width: 150px;
    }

    img {
      width: 50px;
    }

    .menu {
      font-size: 14px;
      gap: 15px;
      padding: 5px;
    }

    .dropdown {
      .dropdown-menu {
        display: flex;
        position: static;
        flex-direction: row;
        gap: 10px;
        padding: 5px 0 0;
        font-size: 12px;
        background-color: transparent;
      }
    }
  }
}
</style>
