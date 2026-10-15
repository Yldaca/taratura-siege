# Taratura Siege

Coach per trovare la sensibilità dei mirini in Rainbow Six Siege su PS5 con DualSense Edge.

Pagina unica, nessun server: i dati restano nel browser di chi la usa, cifrati con la sua password.

## Come si usa

Apri il link di GitHub Pages del repository, crea il tuo utente con email e password e segui la scheda **Oggi**. Dal telefono puoi installarla come app: in Safari "Condividi → Aggiungi alla schermata Home", in Chrome "menu ⋮ → Installa app".

## Novità della versione 7

- Interfaccia nuova, con tema chiaro e scuro automatico.
- Tasto **Indietro** in alto: torna alla pagina precedente. Funziona anche il gesto indietro del telefono.
- Sessione guidata senza voce. In ogni passo c'è **Indietro** per tornare al passo prima.
- **Account come su ogni sito**: email e password, i dati si ritrovano su ogni dispositivo. **Password dimenticata?** manda un codice via email.
- **Statistiche automatiche con il solo nome in gioco**: in Progressi scrivi il nome e scegli la piattaforma (PlayStation, Xbox o PC).
- Le classificate entrano nei **Consigli**: se un numero rende chiaramente di più in partita, il consiglio si sposta verso quello.
- Codice riscritto in TypeScript, diviso in moduli, con prove automatiche.
- Chi aveva già un utente sul dispositivo entra con la stessa email e password: i dati passano da soli sul suo account.

## Dati

- I dati di ogni account stanno sul server dell'app (un Worker Cloudflare con database D1) e in una copia sul dispositivo, così l'app funziona anche senza rete e sincronizza quando la rete torna.
- La password non viene mai inviata: l'app manda una chiave ricavata dalla password e il server ne tiene solo l'impronta.
- La copia di sicurezza in **Guida** resta disponibile.

## Per chi gestisce il server (una volta sola)

1. In Cloudflare, Worker `rainbow`: incolla il codice di `worker/worker.js` e premi Deploy. Collega il database D1 con il nome `DB` e aggiungi il trigger Cron `*/15 * * * *`.
2. In *Settings → Variables and Secrets*:
   - `API_KEY` (Secret): chiave di R6 Arenyze, per le statistiche automatiche.
   - `BREVO_API_KEY` (Secret) e `MAIL_FROM` (Text): per l'email «Password dimenticata». Brevo è gratuito fino a 300 email al giorno; `MAIL_FROM` è l'indirizzo che verifichi su Brevo.
   - Facoltativo `INVITE_CODE` (Secret): se c'è, serve per creare un account.
3. L'indirizzo del Worker va scritto nell'app al momento della build: `CLOUD_URL=https://… npm run build`.

## File

- `index.html`: l'app, già pronta (un solo file).
- `manifest.webmanifest`, `sw.js`, `icon-*.png`: servono per installarla e usarla senza rete.

## Codice sorgente

Il sorgente è in TypeScript e si costruisce con Vite in un solo `index.html`.

```
src/core/   logica: dati, calcoli del percorso, modello delle sensibilità, cifratura, statistiche automatiche
src/ui/     interfaccia: schede, sessione guidata, navigazione con Indietro (ui/nav.ts)
worker/     il Worker Cloudflare per le statistiche automatiche
tests/      prove: i calcoli confrontati con la versione 6
```

```
npm install
npm run dev     # prova in locale
npm test        # prove automatiche
npm run build   # crea dist/index.html
```

## Aggiornare

Sostituisci `index.html` con la versione nuova: GitHub Pages ripubblica da solo in un paio di minuti.
