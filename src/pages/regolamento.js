import React from "react"
import Layout from "../components/Layout"

export default function Regolamento() {
  return (
    <Layout>
      <div className="mt-8 mx-auto lg:max-w-7xl">
        <section className="text-gray-700">
          <div className="container px-5 py-20 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl text-center title-font font-bold text-gray-900 mb-4">
                Regolamento di accesso alla struttura
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                Prima di accedere alla struttura consulta il regolamento
            </p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="w-full px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    Regole Generali
                  </summary>
                  <span>
                    Sono autorizzate all’uso del centro d’arrampicata solo le persone in possesso di un
                    valido biglietto/ticket/abbonamento di ingresso e dopo aver firmato la scheda di iscrizione,
                  si prevede anche lo scatto di una foto del titolare al momento dell’iscrizione.<br />
                  In partiolare si fa presente:<br />
                  </span>
                  <ul className="list-inside list-disc">
                    <li>
                      I minori di 14 anni possono accedere alla palestra solo se accompagnati da un genitore o da chi ne fa le veci
                      (l’accompagnamento si intende attivo e implica il controllo costante e responsabile del minore).
                    </li>
                    <li>
                      Ai minori di 18 anni è concesso l’accesso alla palestra di arrampicata solo dopo avvenuta autorizzazione
                      per minori firmata da un genitore o da chi ne fa le veci.
                    </li>
                    <li>
                      Per i partecipanti di corsi si assume la responsabilità l’istruttore del corso.
                    </li>
                    <li>
                      Tutti i ticket/biglietti/abbonamenti, sono a titolo personale e non sono trasferibili,
                      pena il ritiro del ticket/biglietti/abbonamenti.
                    </li>
                    <li>
                      Per usufruire della riduzione del prezzo previsto nel listino è necessario presentare un documento
                      valido per l’anno in corso comprovante il titolo per la riduzione richiesta.
                    </li>
                    <li>
                      Nel caso di furto o di smarrimento del ticket di ingresso,è prevista la sostituzione solo per gli
                      abbonamenti mensili o trimestrali – nel caso di infortunio che impedisca la pratica dell’arrampicata
                      previa presentazione di certificato medico l’abbonamento può essere prolungato.
                    </li>
                    <li>
                      L’utilizzo degli spazi nella palestra può essere limitato parzialmente da corsi d’arrampicata, dalla tracciatura
                      di vie, da lavori di manutenzione o per altri motivi senza diritto al rimborso.
                    </li>
                    <li>
                      Prese, moschettoni, rinvii, corde o altra attrezzatura presente non può essere modificata, asportata
                      o reinstallata; se si riscontrano danni o mancanze si deve comunicarlo immediatamente al personale della ù
                      struttura sportiva.
                    </li>
                    <li>
                      È vietato il consumo di cibo in tutta la palestra d’arrampicata, per le bevande si devono utilizzare 
                      contenitori infrangibili e non in vetro. – È vietato arrampicarsi ed assicurare a piedi nudi o in 
                      calzinima solo con idonee calzature. – E’ vietato l’ingresso di animali. – E vietato utilizzare lo 
                      spazio boulder con sacchetti di magnesio addosso. – E’ vietato fumare. – E’ vietato occupare le vie 
                      non utilizzate al momento.
                    </li>
                    <li>
                      Ogni utente deve comportarsi in modo da non creare situazioni pericolose per se e gli altri utenti, 
                      così come deve mantenere puliti gli spazi di cui si usufruisce.
                    </li>
                    <li>
                      Non si assume nessuna responsabilità per perdità o furto di attrezzatura, abbigliamento o altri 
                      oggetti personali. Questo vale per tutta l`area della palestra di arrampicata, incluso gli spogliatoi.
                    </li>
                    <li>
                      Per il noleggio di attrezzatura di arrampicata i prezzi sono riportati nel listino, in caso di non 
                      restituzione del materiale si prevede l’automatica denuncia per furto alle autorità competenti.
                    </li>
                    <li>
                      Nel caso di materiale fotografico acquisito all’interno della palestra per scopi pubblicitari autorizzo 
                      l’uso della mia immagine.
                    </li>
                    <li>
                      <span className="font-bold">
                        Il personale della palestra di roccia è autorizzato ad allontanare dalla palestra chiunque non si 
                        attiene a quanto sottoscritto e a quanto previsto nel regolamento generale della palestra.
                      </span>
                    </li>
                  </ul>

                </details>
                <details className="mb-4">
                  <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    Regole di Sicurezza
                </summary>
                  <span>
                  L’arrampicata è uno sport ad alto rischio che richiede responsabilità, attenzione e conoscenza 
                  delle corrette tecniche di assicurazione. 
                  L’uso della struttura sportiva è a proprio rischio e pericolo.
                  Il gestore si assume la responsabilità della manutenzione ordinaria e programmata per un corretto 
                  funzionamento dell’impianto sportivo. La palestra di roccia è stata realizzata secondo quanto previsto dalla 
                  normativa vigente (EN12572).
                </span>
                <ul className="list-inside list-disc">
                  <li>
                    Non può essere utilizzato nessun dispositivo che possa creare distrazioni, quali i telefoni cellulari, ù
                    lettori di musica e quant’altro mentre si sta arrampicando e si fa sicura.
                  </li>
                  <li>
                    L’arrampicata senza corda è consentita solo nella sala boulder.
                  </li>
                  <li>
                    L’accesso alle vie ferrate è vietato e l’eventuale utilizzo deve essere autorizzato dal personale della palestra.
                  </li>
                  <li>
                    Il collegamento tra corda e imbragatura dev’essere diretto, senza moschettone ad esclusione delle 
                    vie già predisposte per il top rope.
                  </li>
                  <li>
                    La lunghezza minima della corda dev’essere di metri 50.
                  </li>
                  <li>
                    E’ obbligatorio utilizzare un freno di assicurazione autobloccante tipo gri-gri, cinch, click-up, eddy ecc
                  </li>
                  <li>
                    Prima di partire è obbligatorio eseguire sempre il partner-check con controllo nodo e dispositivo di assicurazione.
                  </li>
                  <li>
                    La corda dell’arrampicatore primo di cordata deve passare in tutti i rinvii.
                  </li>
                  <li>
                    Massima attenzione nella fase di calata anche ad eventuali cordate vicine.
                  </li>
                  <li>
                    Nel caso di arrampicata da secondo (top rope) è obbligatorio passare tutti e due gli ancoraggi della sosta.
                  </li>
                  <li>
                    Chi assicura deve rimanere sempre all’interno dell’apposito spazio.
                  </li>
                  <li>
                    Chi non sta assicurando non deve rimanere nello spazio segnalato sul pavimento per questo scopo.
                  </li>
                  <li>
                    Fare attenzione al pericolo di pendolare o dell’eventuale caduta del primo di cordata.
                  </li>
                  <li>
                    Rispettare la precedenza di chi arrampica sulle vie a fianco, considerando il pericolo derivante da una 
                    caduta non solo del proprio compagno ma anche della cordata vicina.
                  </li>
                  <li>
                    Nella zona boulder così come nel resto della palestra i minori di 14 anni devono sempre essere 
                    sorvegliati dal genitore o da chi ne fa le veci.
                  </li>
                  <li>
                    Nella zona boulder massima attenzione alla possibile caduta di chi è già impegnato nei passaggi; 
                    è assolutamente vietato passare sotto l’arrampicatore in azione.
                  </li>
                  <li>
                    Si consiglia l’utilizzo di un sacco portacorda che evita possibili intralci nell’uso della corda.
                  </li>
                  <li>
                    Il personale della palestra di roccia è presente in palestra ed è sempre a vostra disposizione per 
                    chiarimenti o in caso di qualunque dubbio specie sulle corrette modalità di assicurazione.
                  </li>
                </ul>

                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Scheda di iscrizione
                </summary>
                  <span>
                    L'accesso alla palestra è consentito previa compilazione della seguente scheda di iscrizione che dovrà essere compilata
                    e consegnata al primo ingresso nella struttura.
                </span>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
