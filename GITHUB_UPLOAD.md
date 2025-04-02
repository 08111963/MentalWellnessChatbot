# Istruzioni per Caricare il Progetto su GitHub

Ecco le istruzioni per caricare il progetto su GitHub:

## Opzione 1: Caricamento tramite Git (Metodo Consigliato)

Se hai Git installato sul tuo computer e hai accesso SSH a GitHub:

1. Crea un nuovo repository su GitHub
   - Vai su https://github.com/new
   - Dai un nome al repository (es. "mental-wellness-app")
   - Scegli se renderlo pubblico o privato
   - Non inizializzare il repository con README, .gitignore o licenza
   - Clicca "Create repository"

2. Configura il repository remoto e carica il codice
   ```bash
   # Dalla directory del progetto sul tuo computer
   git remote add origin https://github.com/tuoUtente/mental-wellness-app.git
   git push -u origin main
   ```

## Opzione 2: Caricamento Manuale del File ZIP

Se non puoi usare Git direttamente:

1. Scarica il file `mental-wellness-app.zip` da Replit
   - Clicca sul file nella sidebar di Replit
   - Clicca sui 3 puntini (...) e seleziona "Download"

2. Crea un nuovo repository su GitHub
   - Vai su https://github.com/new
   - Dai un nome al repository (es. "mental-wellness-app")
   - Scegli se renderlo pubblico o privato
   - Inizializza il repository con un README
   - Clicca "Create repository"

3. Carica il progetto
   - Nella pagina del nuovo repository, clicca su "Add file" > "Upload files"
   - Estrai il contenuto del file ZIP sul tuo computer
   - Trascina i file estratti nella finestra di caricamento di GitHub
   - Aggiungi un messaggio di commit (es. "Caricamento iniziale del progetto")
   - Clicca "Commit changes"

## Opzione 3: Caricamento tramite GitHub CLI

Se hai GitHub CLI installato:

1. Crea un nuovo repository
   ```bash
   gh repo create mental-wellness-app --private
   ```

2. Carica il codice
   ```bash
   # Dalla directory del progetto
   git remote add origin https://github.com/tuoUtente/mental-wellness-app.git
   git push -u origin main
   ```

## Dopo il Caricamento

Una volta caricato il progetto su GitHub, puoi:

1. Collegare il repository a servizi di deploying come Vercel o Netlify
2. Impostare workflow CI/CD con GitHub Actions
3. Invitare collaboratori al progetto