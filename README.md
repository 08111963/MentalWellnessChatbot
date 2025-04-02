# Auralis - Piattaforma per il benessere mentale

Auralis è un'app di supporto psicologico alimentata da intelligenza artificiale, progettata per fornire meditazioni guidate, esercizi di mindfulness e risorse per il benessere mentale.

## Configurazione per distribuzione multi-piattaforma

L'app è progettata per essere distribuita su diverse piattaforme. La sezione seguente fornisce istruzioni per configurare l'app per la distribuzione su più domini.

### Variabili d'ambiente per multi-piattaforma

Per configurare Auralis per l'esecuzione su più domini, devi impostare le seguenti variabili d'ambiente:

```
# URL di base per la gestione centralizzata dei pagamenti (opzionale)
PAYMENT_BASE_URL=https://pagamenti.auralis.app

# Attiva la gestione centralizzata dei pagamenti
USE_CENTRALIZED_PAYMENTS=false

# Configurazione chiavi Stripe
STRIPE_SECRET_KEY=sk_xxxx
STRIPE_PUBLISHABLE_KEY=pk_xxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxx

# ID prezzi Stripe personalizzati (opzionali)
STRIPE_PRICE_MONTHLY=price_xxxx
STRIPE_PRICE_YEARLY=price_xxxx
```

### Domini supportati

L'applicazione è configurata per funzionare sui seguenti domini:

- auralis.replit.app (deployment principale su Replit)
- auralis.app (dominio personalizzato)
- auralis.it (dominio italiano personalizzato)
- auralis.vercel.app (deployment su Vercel)
- auralis.netlify.app (deployment su Netlify)
- localhost (per sviluppo locale)

Per aggiungere nuovi domini, modifica l'array `ALLOWED_DOMAINS` in `server/config.ts`.

### Gestione centralizzata pagamenti

Se desideri centralizzare tutti i pagamenti su un singolo dominio:

1. Imposta `PAYMENT_BASE_URL` all'URL del tuo dominio principale per i pagamenti
2. Attiva `USE_CENTRALIZED_PAYMENTS=true`

Questa configurazione farà sì che tutti i checkout di Stripe vengano reindirizzati al dominio specificato, indipendentemente da quale versione dell'app ha iniziato il processo di pagamento.

### Domini e CORS

Il sistema include una gestione CORS avanzata che:

1. Verifica l'origine delle richieste API
2. Configura automaticamente le intestazioni CORS corrette per i domini autorizzati
3. Impedisce richieste da domini non autorizzati

## Autenticazione e sicurezza

L'app utilizza un sistema di autenticazione basato su sessioni con password hash. Non sono richieste credenziali esterne, ma è necessario configurare Stripe per i pagamenti.

## Account di test

Per testare l'applicazione sono disponibili due account preconfigurati:

- **Utente standard**: Username: `test`, Password: `password`
- **Utente premium**: Username: `premium`, Password: `password`

## Funzionalità principali

- Meditazioni guidate
- Esercizi di mindfulness
- Moduli AI per supporto psicologico
- Sistema di pagamento e abbonamenti
- Supporto multilingua (Italiano/Inglese)
- Responsive design per dispositivi mobili e desktop