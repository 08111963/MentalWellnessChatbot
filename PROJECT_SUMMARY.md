# Mental Wellness App - Sommario del Progetto

## Descrizione
Un'applicazione per il benessere mentale che offre supporto psicologico personalizzato attraverso un'interfaccia conversazionale intelligente e compassionevole.

L'applicazione fornisce strumenti interattivi per la salute mentale combinando innovazione tecnologica con metodologie terapeutiche. Si concentra sulla creazione di un'esperienza utente intuitiva e reattiva che si adatta alle esigenze psicologiche individuali.

## Tecnologie e Architettura
- Frontend React con TypeScript e Tailwind CSS
- Backend Express.js con server di sviluppo Vite
- Supporto conversazionale AI guidato da OpenAI
- Internazionalizzazione (italiano e inglese)
- Metodologie di Terapia Cognitivo Comportamentale (CBT)
- Moduli di meditazione multilingue
- Sistema di pagamento con Stripe

## Caratteristiche Principali
- Interfaccia utente reattiva e accessibile
- Supporto multilingue (italiano e inglese)
- Chat AI per supporto psicologico
- Moduli di meditazione guidata
- Esercizi di terapia cognitivo-comportamentale
- Sistema di abbonamento premium
- Contenuti personalizzati in base alle preferenze dell'utente
- Ottimizzazione SEO e integrazione social

## Struttura del Progetto
- `/client`: Frontend React
  - `/src/components`: Componenti UI riutilizzabili
  - `/src/pages`: Pagine dell'applicazione
  - `/src/hooks`: Hook personalizzati
  - `/src/lib`: Utilità e contesti
- `/server`: Backend Express
  - Controllori e route API
  - Integrazione con OpenAI
  - Gestione pagamenti Stripe
  - Dati e risorse
- `/public`: Risorse statiche e localizzazione
  - `/locales`: File di traduzione
- `/shared`: Schemi e tipi condivisi
- File di configurazione (Vite, Tailwind, TypeScript)

## Configurazione Multi-Piattaforma
Il progetto include un sistema completo per il supporto multi-piattaforma con:
- Configurazione dinamica dei domini autorizzati
- Sistema CORS avanzato che verifica le origini delle richieste
- Middleware di protezione per endpoint sensibili di pagamento e autenticazione
- Opzioni flessibili per centralizzare o distribuire l'elaborazione dei pagamenti
- Istruzioni per il deployment su diverse piattaforme