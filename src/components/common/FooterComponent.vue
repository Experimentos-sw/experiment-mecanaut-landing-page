<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="logo-container">
        <img src="@/assets/images/logo-white.svg" alt="Macanaut Logo" class="footer-logo" />
        <h2 class="footer-title">Mecanaut</h2>
      </div>

      <div class="footer-links">
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="footer-link"
          >YouTube</a
        >
        <a href="mailto:info@Macanaut.com" class="footer-link">E-mail</a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-link"
          >Instagram</a
        >
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" class="footer-link"
          >Tiktok</a
        >
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="footer-link"
          >Facebook</a
        >
      </div>

      <div class="footer-divider"></div>

      <div class="footer-copyright">©2025 Mecanaut. Derechos reservados.</div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
.footer {
  width: 100%;
  background: linear-gradient(to bottom, var(--color-primary-1), var(--color-primary-2));
  border-radius: 20px;
  padding: 3rem 2rem;
  margin: 2em 0;
  color: white;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

.footer-logo {
  width: 60px;
  height: 60px;
  margin-bottom: 0.5rem;
}

.footer-title {
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0;
  color: white;
}

.footer-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  margin-bottom: 2rem;
  width: 100%;
}

.footer-link {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  transition: opacity 0.3s ease;
}

.footer-link:hover {
  opacity: 0.8;
}

.footer-divider {
  width: 80%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.3);
  margin-bottom: 1.5rem;
}

.footer-copyright {
  font-size: 0.9rem;
  opacity: 0.9;
  text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
  .footer {
    padding: 2.5rem 1.5rem;
    border-radius: 15px;
  }

  .footer-links {
    gap: 2rem;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

  .footer-logo {
    width: 50px;
    height: 50px;
  }

  .footer-title {
    font-size: 1.6rem;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 2rem 1rem;
    border-radius: 12px;
  }

  .footer-links {
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .footer-link {
    font-size: 0.9rem;
  }

  .footer-logo {
    width: 40px;
    height: 40px;
  }

  .footer-title {
    font-size: 1.4rem;
  }

  .footer-copyright {
    font-size: 0.8rem;
  }
}
</style>
