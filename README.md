# Taratura Siege

Coach per trovare la sensibilità dei mirini in Rainbow Six Siege su PS5 con DualSense Edge.

Pagina unica, nessun server: i dati restano nel browser di chi la usa, cifrati con la sua password.

## Come si usa

Apri il link di GitHub Pages del repository, crea il tuo utente con email e password e segui la scheda **Oggi**. Dal telefono puoi installarla come app: in Safari "Condividi → Aggiungi alla schermata Home", in Chrome "menu ⋮ → Installa app".

## Dati

- Ogni persona ha il suo utente: i dati restano nel suo browser, su quel dispositivo.
- Non c'è recupero password e non c'è sincronizzazione tra dispositivi: per spostare i dati si usa la copia di sicurezza in **Guida**.

## Statistiche automatiche (facoltative)

Le sessioni di classificate possono arrivare da sole. Un Worker gratuito su Cloudflare legge i totali del giocatore da R6 Arenyze e l'app ricava le sessioni. I passaggi sono nell'app, in **Progressi → Statistiche automatiche**; il codice del Worker si copia da lì. La chiave del servizio resta solo nelle impostazioni del Worker, mai in questo repository.

## File

- `index.html`: l'app.
- `manifest.webmanifest`, `sw.js`, `icon-*.png`: servono per installarla e usarla senza rete.

## Aggiornare

Sostituisci `index.html` con la versione nuova: GitHub Pages ripubblica da solo in un paio di minuti.
