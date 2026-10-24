<template>
  <section class="home" id="home">
    <div class="container">
      <div class="left">
        <p class="sub-top">the ITSO community that bridges hardware, software, and users</p>
        <h1 class="title">
          INITIALIZE<br />
          CONNECT<br />
          COMPILE<br />
          BUILD<br />
          DEPLOY
        </h1>
        <h2 class="sub">different FIELDS, ONE codebase</h2>
        <button class="btn" @click="$router.push('/about')">About Us</button>
      </div>
      <div class="right">
        <div class="image"><img src="@/assets/image/ITSO-pic.png" alt="" /></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  display: flex;
  align-items: flex-start;
  scroll-margin-top: 140px;
}

.container {
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  padding: 0 2rem 0 4rem;
  gap: 3rem;
  align-items: center;
  justify-content: space-between;
}
.left {
  flex: 1;
  max-width: 500px;
  background-color: rgba(10, 11, 11, 0);
  padding: 20px 0;
}
.sub-top {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #3f235f;
}

.title {
  font-size: 3rem;
  font-weight: 900;
  line-height: 1.1;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
  color: #3f235f;
}
.sub {
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 2rem;
  color: #ffcc80;
}

.btn {
  background-color: #53035e;
  color: #fafaf5;
  font-weight: 700;
  border: none;
  padding: 0.85rem 1.75rem;
  border-radius: 6px;
  cursor: pointer;
  transition:
    transform 0.2s,
    background-color 0.2s;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.btn:hover {
  background-color: #7a0589;
  transform: translateY(-3px);
}
.right {
  flex: 1;
  display: flex;
  height: 500px;
  justify-content: flex-end;

  img {
    width: auto;
    max-width: 100%;
    align-items: center;
    object-fit: contain;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  }
}
@media (max-width: 768px) {
  .home {
    scroll-margin-top: 190px;
  }

  .container {
    flex-direction: column;
    gap: 40px;

    .btn:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6);
    }

    .left {
      min-height: 50vh;
      padding-top: 45px;
    }
    .right {
      min-height: 50vh;
      width: 100%;
      background-position: center;
    }
  }
}
</style>
