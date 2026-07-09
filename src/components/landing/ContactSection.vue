<template>
  <section class="contact-section">
    <div class="contact-inner">
      <h2 class="contact-title">Contáctanos</h2>
      <p class="contact-sub">¿Tienes dudas o quieres saber más? Escríbenos.</p>

      <form class="contact-form" @submit.prevent="submit">
        <input v-model="name" type="text" placeholder="Nombre" required class="input" />
        <input v-model="email" type="email" placeholder="Correo" required class="input" />
        <textarea v-model="message" placeholder="Mensaje" required class="textarea"></textarea>

        <div class="actions">
          <button type="submit" :disabled="loading" class="btn">
            {{ loading ? 'Enviando...' : 'Enviar mensaje' }}
          </button>
        </div>
      </form>

      <div v-if="success" class="toast success">Mensaje enviado correctamente. Gracias!</div>
      <div v-if="error" class="toast error">{{ error }}</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const loading = ref(false)
const success = ref(false)
const error = ref('')

const startTime = ref(Date.now())

onMounted(() => {
  startTime.value = Date.now()
  sendTelemetry('Assignment', 0, true, {})
})

const sendTelemetry = (actionType: string, duration: number, isSuccess: boolean, extraData: Record<string, unknown>) => {
  const baseUrl = (import.meta.env.VITE_API_BASE_URL as string) || 'http://localhost:5128'
  const telemetryUrl = `${baseUrl}/api/v1/experiment-telemetry`
  fetch(telemetryUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      experimentName: 'US33-R',
      variant: 'Treatment',
      actionType,
      durationMilliseconds: duration * 1000,
      isSuccess,
      additionalData: JSON.stringify(extraData)
    })
  }).catch(() => {})
}

const submit = async () => {
  error.value = ''
  success.value = false
  if (!name.value || !email.value || !message.value) {
    error.value = 'Por favor completa todos los campos.'
    return
  }
  loading.value = true
  
  const duration = Math.floor((Date.now() - startTime.value) / 1000)

  try {
    const baseUrl = (import.meta.env.VITE_API_BASE_URL as string) || 'http://localhost:5128'
    const apiUrl = `${baseUrl}/api/v1/support-requests`
    const headers: Record<string,string> = { 'Content-Type': 'application/json' }

    const resp = await fetch(apiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify({ name: name.value, email: email.value, message: message.value }),
    })
    if (!resp.ok) {
      const txt = await resp.text()
      throw new Error(txt || `${resp.status} ${resp.statusText}`)
    }
    
    sendTelemetry('Landing_Form_Submitted', duration, true, { name: name.value })
    
    success.value = true
    name.value = ''
    email.value = ''
    message.value = ''
    setTimeout(() => (success.value = false), 5000)
  } catch (e: unknown) {
    const errMsg = e instanceof Error ? e.message : 'Error al enviar el mensaje.'
    error.value = errMsg
    sendTelemetry('Landing_Form_Submitted', duration, false, { error: errMsg })
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.contact-section {
  width: 100%;
  margin: 2.5rem 0;
  display: flex;
  justify-content: center;
}
.contact-inner {
  width: 100%;
  max-width: 900px;
  background: var(--color-surface, #fff);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 6px 18px rgba(0,0,0,0.06);
}
.contact-title {
  margin: 0 0 0.25rem 0;
  font-size: 1.6rem;
  color: var(--color-text, #111);
}
.contact-sub {
  margin: 0 0 1rem 0;
  color: var(--color-muted, #666);
}
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.input, .textarea {
  width: 100%;
  padding: 0.85rem 1rem;
  border-radius: 8px;
  border: 1px solid rgba(0,0,0,0.08);
  font-size: 1rem;
}
.textarea { min-height: 140px; resize: vertical; }
.actions { display:flex; justify-content:flex-end; margin-top:0.25rem }
.btn {
  background: linear-gradient(90deg,var(--color-primary-1,#0066ff),var(--color-primary-2,#00a3ff));
  color: white;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}
.btn:disabled { opacity: 0.6; cursor: not-allowed }
.toast { margin-top: 0.75rem; padding: 0.75rem 1rem; border-radius: 8px; }
.toast.success { background: rgba(34,197,94,0.08); color: #166534; border: 1px solid rgba(34,197,94,0.15) }
.toast.error { background: rgba(239,68,68,0.06); color: #991b1b; border: 1px solid rgba(239,68,68,0.12) }

@media (max-width: 768px) {
  .contact-inner { padding: 1.25rem }
}
</style>
