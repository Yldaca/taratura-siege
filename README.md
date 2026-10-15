# Taratura Siege

Coach per trovare la sensibilità dei mirini in Rainbow Six Siege su PS5 con DualSense Edge.

Pagina unica. I dati di ogni account stanno sul server dell'app (un Worker Cloudflare) e li ritrovi su ogni dispositivo.

## Come si usa

Apri il link di GitHub Pages del repository, crea il tuo utente con email e password e segui la scheda **Oggi**. Dal telefono puoi installarla come app: in Safari "Condividi → Aggiungi alla schermata Home", in Chrome "menu ⋮ → Installa app".

## Novità della versione 8.4: sicurezza

- Limiti di tentativi per indirizzo (accessi, iscrizioni, collegamenti del nome in gioco) oltre al blocco di ogni account dopo 8 password sbagliate.
- Per cambiare la password serve quella attuale; le nuove password hanno almeno 8 caratteri.
- Il server risponde solo al sito dell'app, accetta solo email con caratteri normali e non mostra dettagli interni negli errori.
- La pagina ha una Content Security Policy: solo i suoi script possono girare e i dati possono andare solo al server dell'app.
- Tolta dal server la parte «password dimenticata».

## Novità della versione 8.3

- Si tara solo l'**1.0x**, poi la cappetta. 2.5x, 3.5x e 8.0x seguono l'1.0x: una regola per lo zoom all'inizio, poi il tuo rapporto dai round di mantenimento con quei mirini e dalle partite.
- In **Oggi** un riquadro spiega come collegare il tuo ID PlayStation dal profilo.
- Tolta l'analisi della foto che caricavi nel rinculo; restano le animazioni di esempio, senza il link «Video veri».
- **Transizioni** adattate al poligono di Siege: un solo manichino e due punti sul muro, dal punto alla testa alternando i lati.

## Novità della versione 8

- **Il tuo profilo**: icona in alto a destra. Account, nome in gioco per le statistiche automatiche, link a R6 Tracker (con il nome PlayStation), password, uscita.
- **Le tue partite** si riempiono da sole: totali, grafico sessione per sessione (colpi in testa, K/D, uccisioni a partita, vittorie) e tabella. Niente inserimento a mano.
- **Consigli** riordinati: prima la sensibilità consigliata per ogni mirino, con da dove viene (esercizi e partite); poi i tuoi numeri, allenamento e partite, con la tendenza.
- Calcolo delle partite sui conteggi (colpi in testa su uccisioni, uccisioni su morti, uccisioni a partita), con il rumore fra serate stimato dai tuoi dati e la prima sessione dopo un cambio che pesa la metà.
- Colpi in testa delle partite dai dati degli operatori di R6 Arenyze.
- Tasto **Indietro** anche nella registrazione e in «Password dimenticata».
- Tolte la scheda Test e ogni recupero della password: chi la dimentica crea un account nuovo. Guida più corta.

## Novità della versione 7

- Interfaccia nuova, tasto Indietro, sessione guidata senza voce, account sul server, statistiche automatiche con il solo nome in gioco.

## Dati

- I dati di ogni account stanno sul server dell'app (un Worker Cloudflare con database D1) e in una copia sul dispositivo, così l'app funziona anche senza rete e sincronizza quando la rete torna.
- La password non viene mai inviata: l'app manda una chiave ricavata dalla password e il server ne tiene solo l'impronta.
- Una copia dei dati si può esportare dal **profilo**.

## Per chi gestisce il server (una volta sola)

1. In Cloudflare, Worker `rainbow`: incolla il codice di `worker/worker.js` e premi Deploy. Collega il database D1 con il nome `DB` e aggiungi il trigger Cron `*/15 * * * *`.
2. In *Settings → Variables and Secrets*:
   - `API_KEY` (Secret): chiave di R6 Arenyze, per le statistiche automatiche (il piano Free dà 2.000 letture al mese, il Worker ne usa al massimo 1.800).
   - Facoltativo `INVITE_CODE` (Secret): se c'è, serve per creare un account.
3. L'indirizzo del Worker va scritto nell'app al momento della build: `CLOUD_URL=https://… npm run build`.
4. Se il sito cambia indirizzo, aggiorna `APP_URL` nel Worker: il server accetta richieste solo da quel sito.

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
