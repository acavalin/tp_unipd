# otrs-helpdesk.user.js
Migliora l'usabilità dell'installazione di OTRS (v 3.3.8).

## Configurazione OTRS

### Visualizzazione "Tickets"

Gli elenchi (*Visualizza le mie code* e *Visualizzazione stato*) devono essere
nel formato "Piccolo", cliccate sulla lettera `S` in alto a destra dove vedete
i tre quadratini `S M L`

Le colonne nelle videate **devono** riportare nell'ordine i seguenti campi:

1. TicketNumber
2. Tempo trascorso
3. Titolo
4. Stato
5. Gestisci
6. Operatore
7. Coda

per modificare l'elenco e l'ordine delle colonne dovete cliccare sul triangolino
situato sull'estrema destra dell'intestazione (qui vi consiglio anche di impostare
il numero più elevato di righe per pagina).
Potete aggiungere quanti campi volete **dopo** la colonna 7.

### Visualizzazione "Cruscotto"

Le colonne nelle videate **devono** riportare nell'ordine i seguenti campi:

1. TicketNumber
2. Tempo trascorso
3. CustomerName
4. Titolo
5. Stato
6. Gestisci
7. Operatore
8. Coda

per modificare l'elenco e l'ordine delle colonne dovete cliccare sull'ingranaggio
situato sull'estrema destra dell'intestazione della tabella "Ticket Aperti"
(viene mostrato quando ci passate sopra col mouse).
Potete aggiungere quanti campi volete **dopo** la colonna 7.

## Migliorie generali

* pagina più compatta senza spreco di prezioso spazio verticale

## Migliorie elenchi ticket

* suddivisione dei tickets in 3 gruppi ognuno ordinato secondo l'ordinamento scelto:<br>
  1- grigio: i ticket propri (cosa stai facendo)<br>
  2- bianco: i ticket liberi (da fare)<br>
  3- viola:  i ticket assegnati ad altri (cosa fan gli altri)<br>
  *NB:* il titolo pagina riflette i conteggi dei 3 gruppi `1|2/TOT`
* colonna Ticket# evidenziata
* colonna DA/OGGETTO: info su un'unica riga e nome utente evidenziato
* colonna tempo più leggibile
* ridimensionate le colonne per dare più spazio all'oggetto
* colonna coda: mostra solo il nome

## Migliorie dettaglio ticket

* compattata l'interfaccia principale e le info sulla destra
* filtri su `Area` e `Servizio` per lo spostamento di coda
* storico del ticket subito visibile sopra all'elenco dei post e filtrato per
  cambio di operatore e spostamenti (le cose veramente utili)
* toggle righe di sistema nell'elenco dei post + salvataggio in locale della preferenza
* elenco dei post autoridimensionato al numero dei post (si vedono tutti)
* info a destra: evidenziati stato e operatore, nome coda accorciato, email
  cliccabile, elenco ticket collegati in linea, numero di telefono evidenziato
  (compreso l'eventuale `821`)
* evidenzia se il ticket proviene da un TEAM
* icone sulla barra delle azioni

## Migliorie cambio gestore

* selezione gestore: inverti nome e cognome e riordina voci
* autoselect del precedente proprietario
* imposta oggetto predefinito "per Tizio Caio"
* imposta testo pedefinito "fatto"

## Migliorie lato customer

* nascoste le righe di sistema
