import React from "react"
import Layout from "../components/Layout"
import CardOrari from "../components/CardOrari"
import styles from "./index-css-modules.module.css"

const orarioArrampicata = [
  {
    "day": "Lunedì",
    "hour": "9.00 - 23.00"
  },
  {
    "day": "Martedì",
    "hour": "9.00 - 23.00"
  },
  {
    "day": "Mercoledì",
    "hour": "9.00 - 23.00"
  },
  {
    "day": "Giovedì",
    "hour": "9.00 - 23.00"
  },
  {
    "day": "Venerdì",
    "hour": "9.00 - 23.00"
  },
  {
    "day": "Sabato",
    "hour": "9.00 - 23.00"
  },
  {
    "day": "Domenica",
    "hour": "9.00 - 23.00"
  },
]

const orarioSalaPesi = [
  {
    "day": "Lunedì",
    "hour": "9.00 - 23.00"
  },
  {
    "day": "Martedì",
    "hour": "9.00 - 23.00"
  },
  {
    "day": "Mercoledì",
    "hour": "9.00 - 23.00"
  },
  {
    "day": "Giovedì",
    "hour": "9.00 - 23.00"
  },
  {
    "day": "Venerdì",
    "hour": "9.00 - 23.00"
  },
  {
    "day": "Sabato",
    "hour": "9.00 - 18.00"
  },
  {
    "day": "Domenica",
    "hour": "CHIUSO"
  },
]

export default function Prezzi() {
  return (
    <Layout>
      <div className="mt-20 mx-auto lg:max-w-7xl">
        <h1 className={"text-4xl font-bold text-green-700 " + styles.newstitle}><span>Prezzi e Orari</span></h1>
        <div className="my-14">
          <CardOrari orari={orarioArrampicata} index={1} name="Orario Palestra Arrampicata" />
          <CardOrari orari={orarioSalaPesi} index={2} name="Orario Sala Pesi" />
        </div>
        <p className="italic my-10 ml-6 font-light"><span className="font-bold">Attenzione,</span> gli orari della sala pesi potrebbero variare in corrispondenza delle partite di pallavolo.<br/>Consulta sempre la sezione news per maggiori informazioni.</p>
      </div>
    </Layout>
  )
}
