import React from "react"
import Layout from "../components/Layout"
import Square from "../components/Square"
import News from "../components/News"
import styles from "./index-css-modules.module.css"
import { Link } from "gatsby"

const squares = [{
  "title": "titolo-1",
  "subtitle": "sottotitolo-1",
  "url": "#"
},
{
  "title": "titolo-2",
  "subtitle": "sottotitolo-2",
  "url": "#"
},
{
  "title": "titolo-3",
  "subtitle": "sottotitolo-3",
  "url": "#"
},
]

const newsList = [{
  "date": (new Date()).toDateString(),
  "title": "title-1",
  "description": "Adipisicing esse deserunt laborum magna officia proident occaecat ullamco incididunt laboris labore cillum exercitation quis. Nostrud amet deserunt sint cillum commodo duis. Commodo laborum ullamco ut consectetur est cillum duis excepteur. Adipisicing qui veniam ex eiusmod officia nisi occaecat. Sit consectetur quis ex veniam elit eiusmod et non sint consectetur aliquip dolore consectetur."
},
{
  "date": (new Date()).toDateString(),
  "title": "title-2",
  "description": "Enim exercitation laborum laborum ex ea ad ad. Non consequat cillum elit irure ullamco. Nostrud pariatur ea veniam dolor in ex eu consequat duis do nulla. Mollit officia ullamco eiusmod sunt enim exercitation fugiat consectetur occaecat. Consequat consequat amet sit aute cupidatat."
},
{
  "date": (new Date()).toDateString(),
  "title": "title-3",
  "description": "Velit irure ex exercitation Lorem magna aliqua consectetur pariatur est. Laborum cillum aute id mollit non excepteur nulla sint ullamco deserunt. Occaecat nulla veniam dolor laborum culpa enim reprehenderit.. Fugiat sunt amet voluptate aliqua occaecat deserunt. Excepteur do eiusmod sit veniam sunt cillum ea duis dolore qui anim eu non et. Exercitation non duis duis reprehenderit occaecat labore exercitation velit amet adipisicing culpa dolor. Dolore nisi veniam elit consectetur do fugiat laboris in veniam cillum fugiat. Officia aliqua irure officia minim esse consectetur qui sit commodo.",
},
]
export default function Home() {
  return (
    <Layout>
      <div className="mt-5 w-full">
        <img src="/banner_home_1.jpg" className="w-full" alt="" />
      </div>

      <div className="mx-auto lg:max-w-7xl">
        <div className="flex mb-10">
          <div className="w-full -mt-16 mb-10 mx-8 grid gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {squares.map((square, i) => {
              return (
                <Square square={square} index={i}></Square>
              )
            })}
          </div>
        </div>

        <h1 className={"text-4xl font-bold text-green-700 " + styles.newstitle}><span>News</span></h1>

        <div className="mt-8 flex mx-auto lg:max-w-7xl">
          <div className="w-full">
            {newsList.map((news, i) => {
              return (
                <News news={news} index={i}></News>
              )
            })}
          </div>
        </div>

        <div className="flex my-6 w-full">
        <Link to="news" className="ml-auto mr-16 px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-green-600 hover:text-white border-2 border-green-700 focus:outline-none">
            Scopri di più!
          </Link>
        </div>

      </div>



    </Layout>
  )
}
