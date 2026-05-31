<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <h2>📝 Contáctanos</h2>
      <p class="section-description">
        ¿Tienes preguntas? Escríbenos y te responderemos lo antes posible
      </p>
      
      <!-- Mensaje de éxito -->
      <div v-if="submitted" class="success-message">
        <span class="success-icon">✅</span>
        <div>
          <strong>¡Mensaje enviado con éxito!</strong>
          <p>Nos pondremos en contacto contigo pronto.</p>
        </div>
      </div>
      
      <!-- Formulario -->
      <form @submit.prevent="handleSubmit" class="contact-form" novalidate>
        <!-- Campo Nombre -->
        <div class="form-group">
          <label for="name">
            Nombre completo <span class="required">*</span>
          </label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            @input="clearError('name')"
            placeholder="Ej: Juan Pérez"
            :class="{ 'error-input': errors.name }"
          />
          <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
          <small class="helper-text">Mínimo 2 caracteres</small>
        </div>
        
        <!-- Campo Email -->
        <div class="form-group">
          <label for="email">
            Correo electrónico <span class="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            @input="clearError('email')"
            placeholder="Ej: juan@ejemplo.com"
            :class="{ 'error-input': errors.email }"
          />
          <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
          <small class="helper-text">Te responderemos a este correo</small>
        </div>
        
        <!-- Campo Mensaje -->
        <div class="form-group">
          <label for="message">
            Mensaje <span class="required">*</span>
          </label>
          <textarea
            id="message"
            v-model="formData.message"
            @input="clearError('message')"
            placeholder="Escribe tu mensaje aquí..."
            rows="5"
            :class="{ 'error-input': errors.message }"
          ></textarea>
          <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
          <small class="helper-text">{{ formData.message.length }}/500 caracteres</small>
        </div>
        
        <!-- Botón de envío -->
        <button 
          type="submit" 
          class="submit-button"
          :disabled="isSubmitting"
        >
          <span v-if="isSubmitting" class="spinner"></span>
          {{ isSubmitting ? 'Enviando...' : 'Enviar mensaje ✨' }}
        </button>
      </form>
      
      <!-- Información de contacto -->
      <div class="contact-info">
        <div class="info-item">
          <span class="info-icon">📧</span>
          <span>soporte@pixelstore.com</span>
        </div>
        <div class="info-item">
          <span class="info-icon">📱</span>
          <span>+1 234 567 890</span>
        </div>
        <div class="info-item">
          <span class="info-icon">⏰</span>
          <span>Lun - Vie: 9am - 6pm</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Newsletter',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      errors: {},
      submitted: false,
      isSubmitting: false
    }
  },
  methods: {
    // Validar formulario
    validateForm() {
      const newErrors = {};
      
      // Validación de nombre
      if (!this.formData.name.trim()) {
        newErrors.name = 'El nombre es obligatorio';
      } else if (this.formData.name.trim().length < 2) {
        newErrors.name = 'El nombre debe tener al menos 2 caracteres';
      } else if (this.formData.name.trim().length > 50) {
        newErrors.name = 'El nombre no puede tener más de 50 caracteres';
      }
      
      // Validación de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.formData.email.trim()) {
        newErrors.email = 'El email es obligatorio';
      } else if (!emailRegex.test(this.formData.email)) {
        newErrors.email = 'Ingresa un email válido (ejemplo: usuario@dominio.com)';
      }
      
      // Validación de mensaje
      if (!this.formData.message.trim()) {
        newErrors.message = 'El mensaje es obligatorio';
      } else if (this.formData.message.trim().length < 10) {
        newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
      } else if (this.formData.message.trim().length > 500) {
        newErrors.message = 'El mensaje no puede tener más de 500 caracteres';
      }
      
      return newErrors;
    },
    
    // Limpiar error específico
    clearError(field) {
      if (this.errors[field]) {
        this.errors[field] = '';
      }
    },
    
    // Manejar envío
    async handleSubmit() {
      const newErrors = this.validateForm();
      
      if (Object.keys(newErrors).length === 0) {
        // Formulario válido
        this.isSubmitting = true;
        
        // Simular envío a servidor
        setTimeout(() => {
          console.log('Datos enviados:', this.formData);
          this.submitted = true;
          this.isSubmitting = false;
          
          // Resetear formulario
          this.formData = {
            name: '',
            email: '',
            message: ''
          };
          
          // Ocultar mensaje después de 5 segundos
          setTimeout(() => {
            this.submitted = false;
          }, 5000);
        }, 1000);
      } else {
        this.errors = newErrors;
      }
    }
  }
}
</script>

<style scoped>
.contact-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #0f0f14, #1a1a2e);
}

.section-description {
  text-align: center;
  color: #ccc;
  margin-bottom: 40px;
  font-size: 1.1rem;
}

/* Formulario */
.contact-form {
  max-width: 600px;
  margin: 0 auto;
  background: rgba(26, 26, 36, 0.9);
  padding: 40px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 107, 107, 0.2);
}

.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #fff;
}

.required {
  color: #ff6b6b;
  margin-left: 4px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #ff6b6b;
  background: rgba(0, 0, 0, 0.5);
}

.form-group input.error-input,
.form-group textarea.error-input {
  border-color: #ff4757;
  background: rgba(255, 71, 87, 0.1);
}

.error-message {
  display: block;
  color: #ff4757;
  font-size: 0.85rem;
  margin-top: 5px;
}

.helper-text {
  display: block;
  color: #888;
  font-size: 0.75rem;
  margin-top: 5px;
}

/* Botón */
.submit-button {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #ff6b6b, #ff4757);
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(255, 107, 107, 0.3);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Spinner */
.spinner {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Mensaje éxito */
.success-message {
  max-width: 600px;
  margin: 0 auto 30px;
  padding: 20px;
  background: rgba(78, 205, 196, 0.1);
  border: 1px solid #4ecdc4;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 15px;
  animation: slideDown 0.5s ease;
}

.success-icon {
  font-size: 2rem;
}

.success-message strong {
  color: #4ecdc4;
  display: block;
  margin-bottom: 5px;
}

.success-message p {
  color: #ccc;
  font-size: 0.9rem;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Info contacto */
.contact-info {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
  flex-wrap: wrap;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #ccc;
  font-size: 0.9rem;
}

.info-icon {
  font-size: 1.2rem;
}

/* Responsive */
@media (max-width: 768px) {
  .contact-form {
    padding: 25px;
    margin: 0 20px;
  }
  
  .contact-info {
    gap: 20px;
  }
  
  .info-item {
    font-size: 0.8rem;
  }
}
</style>