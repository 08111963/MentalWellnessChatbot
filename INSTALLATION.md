# Istruzioni di Installazione

Questo documento fornisce le istruzioni per installare e configurare l'applicazione Mental Wellness App.

## Prerequisiti
- Node.js (versione 18 o superiore)
- npm (incluso con Node.js)
- Git (per clonare il repository)

## Passaggi di Installazione

### 1. Clonare il Repository
```bash
git clone https://github.com/tuoUtente/mental-wellness-app.git
cd mental-wellness-app
```

### 2. Installare le Dipendenze
```bash
npm install
```

### 3. Configurare le Variabili di Ambiente
Crea un file `.env` nella directory principale con le seguenti variabili:

```
# Stripe (opzionale - per funzionalità di pagamento)
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key

# OpenAI (opzionale - per funzionalità di chat AI)
OPENAI_API_KEY=your_openai_api_key
```

### 4. Avviare l'Applicazione in Modalità Sviluppo
```bash
npm run dev
```

L'applicazione sarà disponibile all'indirizzo: http://localhost:3000

## Modalità di Pagamento

L'applicazione supporta due modalità di pagamento:

1. **Simulata**: Utilizza un sistema di pagamento simulato per testare le funzionalità di abbonamento senza integrazioni reali. Questa è la modalità predefinita se non vengono fornite le chiavi Stripe.

2. **Produzione**: Utilizza Stripe per l'elaborazione dei pagamenti reali. Richiede la configurazione delle chiavi API di Stripe nel file `.env`.

## Configurazione Multi-Piattaforma

Per la configurazione multi-piattaforma, modifica il file `server/config.ts`:

```typescript
export const PLATFORM_CONFIG = {
  ALLOWED_DOMAINS: ['tuodominio.com', 'altrodominio.it'],
  PAYMENT_BASE_URL: 'https://tuodominio.com', // URL principale per i pagamenti
  CENTRALIZE_PAYMENTS: true // Centralizza i pagamenti su PAYMENT_BASE_URL
};
```

## Deployment

### Vercel
1. Crea un nuovo progetto su Vercel e collega il tuo repository GitHub
2. Configura le variabili d'ambiente (vedi sezione #3 sopra)
3. Deploy dell'applicazione

### Altri Ambienti
L'applicazione può essere deployata su qualsiasi ambiente che supporti Node.js:

1. Crea una build di produzione:
```bash
npm run build
```

2. Avvia il server di produzione:
```bash
npm start
```