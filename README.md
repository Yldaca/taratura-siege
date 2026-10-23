# Taratura Siege

Coach per trovare la sensibilità dei mirini in Rainbow Six Siege su PS5 con DualSense Edge.

Pagina unica. I dati di ogni account stanno sul server dell'app (un Worker Cloudflare) e li ritrovi su ogni dispositivo.

## Come si usa

Apri il link di GitHub Pages del repository, crea il tuo utente con email e password e segui la scheda **Oggi**. Dal telefono puoi installarla come app: in Safari "Condividi → Aggiungi alla schermata Home", in Chrome "menu ⋮ → Installa app".

## Novità della versione 8.7

- **Si parte dal tuo 1.0x**: se scrivi l'1.0x che hai nel gioco prima del primo round, il percorso parte da quel numero e non più da 11. La sessione guidata mostra lo stesso numero della home (anche quello scritto da te a metà percorso), con sotto la riga che dice da dove viene.
- **Rifai la fase dell'1.0x** riparte dal numero che hai nel gioco; se togli l'unico round dell'1.0x si riparte dal numero con cui l'avevi fatto.

## Novità della versione 8.6: calcoli rivisti

- **Rumore del punteggio** misurato davvero: deviazione standard fra round fatti con gli stessi numeri e lo stesso analogico (con un valore di partenza di 8 punti finché i round sono pochi). Ogni confronto fra due medie usa 1,64 × rumore × √(1/n1 + 1/n2), cioè il 90%. Prima la soglia era più bassa del dovuto e dichiarava differenze che non c'erano.
- **«Cappetta» diventa «analogico»** in tutta l'app.
- **Rinculo**: i colpi del caricatore si mettono da soli in base all'arma scelta (anche scritta a mano); restano − e + per il colpo in canna o un caricatore diverso.
- **Ho solo questo analogico**: una spunta (nella fase dell'analogico, in Oggi → Analogici, curve e deadzone, e in Progressi → Analogici) per chi non può cambiarlo. Il percorso salta il test e l'app non consiglia mai di cambiarlo.
- **Test dell'analogico** nuovo: 4 round alternati (il tuo, Convesso alto, Convesso alto, il tuo), così riscaldamento e stanchezza pesano uguale. I test già chiusi restano com'erano; in Progressi → Analogici c'è «Rifai il test dell'analogico».
- **Scegliere il migliore fra più numeri** (allenamento, partite, analogici, operatori) alza la soglia (Bonferroni): con 3 numeri 1,96, con 4 2,13.
- **Partite**: se due numeri li hai usati in periodi separati, il consiglio si sposta la metà (una parte può essere il periodo). Il «prima e dopo» un cambio non dice più «il cambio funziona», ma suggerisce come verificarlo.
- **Round della stessa sera** non contano più come indipendenti: varianza della media = w²/n + τ²/k (rumore dentro la sera e fra sere). Il test dell'analogico confronta i round della stessa sera fra loro (appaiato), così la forma della sera si cancella. Le tendenze dell'allenamento si calcolano sulle sere.
- **Home**: 2.5x, 3.5x e 8.0x calcolati dall'1.0x si aggiornano subito quando cambi l'1.0x (anche mentre scrivi e durante il percorso); quelli scritti da te restano. «Usa i numeri consigliati» non li sgancia se il consiglio è proprio la regola dall'1.0x.
- **Quanto allenarsi**: in Oggi una scheda dice quanti round fare di fila (di solito 3, il primo è il riscaldamento; il numero viene dai tuoi dati) e quando dire «per adesso basta»: round consigliati fatti, punteggio in calo oltre il rumore (stanchezza), 5 round di fila. Al massimo 2 allenamenti al giorno, ad almeno 3 ore di distanza. Un allenamento = i round fatti di fila (meno di 3 ore uno dall'altro): il riscaldamento e i confronti appaiati ora vanno per allenamento, non per giorno; nel test dell'analogico il riscaldamento non conta.
- **Guida → «Dettagli statistici»**: modelli, varianze e covarianze di tutti i calcoli (anche perché la formula del K/D non ha un termine di covarianza).
- **Margine all'80%** del flick solo da 6 round in su; la fiducia «alta» dipende da quanto è stretto il margine.
- **Tendenze** (allenamento, settimane) e **avviso sui due lati del flick** solo quando la differenza supera il rumore.

## Novità della versione 8.5

- Nuova scheda **Partite**: totali per sessione, grafico sempre visibile con sotto il mirino 1.0x usato, e ogni serata con una riga per partita (esito, uccisioni, morti, colpi in testa). Gli analogici passano in **Progressi**.
- I numeri scritti nella home («I numeri che hai nel gioco») restano salvati sul tuo account, valgono ovunque (niente più 11 di partenza nei Consigli) e ogni partita prende quelli che avevi quando l'hai giocata. Si possono anche scrivere a mano.
- **Consigli**: una riga semplice per ogni mirino, il perché si apre a richiesta, e la tabella «Allenamento e partite a confronto», numero per numero. Con sole partite (senza round) il consiglio parte dal numero che usi.
- Guida riscritta: come funziona, cosa trovi in ogni scheda, le parole dell'app.
- Server (versione 7): una riga per ogni lettura, letture ogni 15 minuti mentre giochi (variabili facoltative `ACTIVE_MIN`, `WARM_MIN`, `IDLE_MIN`).

## Novità della versione 8.4: sicurezza

- Limiti di tentativi per indirizzo (accessi, iscrizioni, collegamenti del nome in gioco) oltre al blocco di ogni account dopo 8 password sbagliate.
- Per cambiare la password serve quella attuale; le nuove password hanno almeno 8 caratteri.
- Il server risponde solo al sito dell'app, accetta solo email con caratteri normali e non mostra dettagli interni negli errori.
- La pagina ha una Content Security Policy: solo i suoi script possono girare e i dati possono andare solo al server dell'app.
- Tolta dal server la parte «password dimenticata».

## Novità della versione 8.3

- Si tara solo l'**1.0x**, poi l'analogico. 2.5x, 3.5x e 8.0x seguono l'1.0x: una regola per lo zoom all'inizio, poi il tuo rapporto dai round di mantenimento con quei mirini e dalle partite.
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
