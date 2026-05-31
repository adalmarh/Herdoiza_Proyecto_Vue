<template>
  <section id="newsletter" class="newsletter">
    <div class="container">
      <h2>📧 Ofertas exclusivas para gamers</h2>
      <p>Recibe códigos de descuento, lanzamientos y noticias antes que nadie</p>
      <form @submit.prevent="validateAndSubmit" class="newsletter-form">
        <input type="email" v-model="email" placeholder="tu@email.com" />
        <button type="submit">Suscribirme 🎁</button>
      </form>
      <p v-if="error" class="error-msg">{{ error }}</p>
      <p v-if="success" class="success-msg">✅ ¡Suscripción exitosa! Revisa tu bandeja</p>
      <p class="small">Sin spam. Puedes cancelar cuando quieras.</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return { email: '', error: '', success: false }
  },
  methods: {
    validateAndSubmit() {
      if (!this.email.trim()) {
        this.error = 'Email requerido'
      } else if (!/^\S+@\S+\.\S+$/.test(this.email)) {
        this.error = 'Email inválido'
      } else {
        this.error = ''
        this.success = true
        this.email = ''
        setTimeout(() => { this.success = false }, 3000)
      }
    }
  }
}
</script>

<style scoped>
.newsletter {
  background: linear-gradient(135deg, #1e1e2a, #2a2a35);
  padding: 80px 0;
  text-align: center;
}
.newsletter-form {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 30px 0;
  flex-wrap: wrap;
}
.newsletter-form input {
  padding: 15px 25px;
  width: 300px;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
}
.newsletter-form button {
  padding: 15px 30px;
  background: linear-gradient(135deg, #ff6b6b, #ff4757);
  border: none;
  border-radius: 50px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s;
}
.newsletter-form button:hover { transform: scale(1.05); }
.error-msg { color: #ff6b6b; margin-top: 15px; }
.success-msg { color: #4ecdc4; margin-top: 15px; }
.small { font-size: 0.8rem; opacity: 0.7; margin-top: 15px; }
@media (max-width: 768px) {
  .newsletter-form { flex-direction: column; align-items: center; }
  .newsletter-form input { width: 90%; }
}
</style>