import React from "react";

function Footer() {

  return (
    <div className="px-8 lg:px-14 w-full mt-4 max-w-6xl place-self-center place-items-center">
      <div className="grid gap-2 row-gap-6 mb-8 grid-cols-2">
        <div className="space-y-2 text-sm">
          <p className="font-bold text-gray-900 text-xl">Contatti</p>
          <div className="flex mt-2">
            <p className="mr-1 text-gray-800">Telefono:</p>
            <a
              href="tel:0461-217478"
              aria-label="Sanbapolis numero"
              title="Sanbapolis numero"
              className="transition-colors duration-300 hover:text-green-800"
            >
              0461 217478
          </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-900">Email:</p>
            <a
              href="mailto:info@sanbapolis.it"
              aria-label="Sanbapolis e-mail"
              title="Sanbapolis e-mail"
              className="transition-colors duration-300 hover:text-green-800"
            >
              info@sanbapolis.it
          </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Indirizzo:</p>
            <a
              href="https://www.google.com/maps/place/Sanb%C3%A0Polis/@46.046804,11.1308422,17z/data=!3m1!4b1!4m5!3m4!1s0x4782741c3dd84083:0xe1221411ae6cb6ef!8m2!3d46.046804!4d11.1330309"
              target="_blank"
              aria-label="Sanbapolis indirizzo"
              title="Sanbapolis indirizzo"
              className="transition-colors duration-300 hover:text-green-800"
            >
              Via della Malpensada, 88, 38123 Trento TN
            </a>
          </div>
        </div>
        <div>
          <p className="font-bold text-gray-900 text-xl">Social</p>
          <div className="flex items-center mt-2 space-x-3">
            <a href="https://www.instagram.com/sanbapolis/?hl=it" className="text-gray-500 transition-colors duration-300 hover:text-green-700"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="https://it-it.facebook.com/pages/category/Rock-Climbing-Gym/Sanbapolis-607057872682265/"
              className="text-gray-500 transition-colors duration-300 hover:text-blue-700"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken
            spare ribs salami.
        </p>
        </div>
      </div>
      <div className="flex justify-center border-t py-4">
        <p className="text-sm text-gray-600">© Copyright {"2021"} Sanbapolis All rights reserved.</p>        
      </div>
    </div>
  )
}

export default Footer;