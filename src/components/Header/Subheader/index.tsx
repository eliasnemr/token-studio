'use client'

import { useContext } from "react"
import {Link, useLocation, useNavigate} from "react-router-dom"
import { appContext } from "../../../AppContext"

export default function Subheader() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { isMobile, balance } = useContext(appContext)

  const getTitle = () => {
    if (pathname.includes("/user") || pathname.includes("/blocked_users") || pathname.includes("/hidden_listings") || pathname.includes("/hide")) {
      return (
          <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-white text-base hover:text-white hover:opacity-80 p-0"
          >
            <img alt="Back" src="./assets/arrow_back.svg" /> Back
          </button>
      )
    }

    if (pathname.includes("intro")) {
      return "Intro";
    }

    if (pathname.includes("help")) {
      return "Help"
    }

    if (pathname.includes("/wallet") && (!pathname.includes("nft") && !pathname.includes("withdraw") && !pathname.includes("deposit") && !pathname.includes("cancel"))) {
      return "Agora Wallet"
    }

    if (pathname.includes("/cancel")) {
      return (
        <Link 
          to="/wallet"
          className="flex items-center gap-2 text-white text-base hover:text-white hover:opacity-80"
        >
          <img alt="Back" src="./assets/arrow_back.svg" /> Back
        </Link>
      )
    }
    
    if (pathname.includes("/listing") && pathname.includes("checkout")) {
      return (
        <Link 
          to={`${pathname.split("/checkout")[0]}`}
          className="flex items-center gap-2 text-white text-base hover:text-white hover:opacity-80"
        >
          <img alt="Back" src="./assets/arrow_back.svg" /> Back to Listing
        </Link>
      )
    }
    if (pathname.includes("/listing") && !pathname.includes("checkout")) {
      return (
        <Link 
          to="/market"
          className="flex items-center gap-2 text-white text-base hover:text-white hover:opacity-80"
        >
          <img alt="Back" src="./assets/arrow_back.svg" /> Back to Marketplace
        </Link>
      )
    }
    if ((pathname.includes("nft") || pathname.includes("deposit") || pathname.includes("withdraw")) && isMobile) {
      return (
        <Link 
          to="/wallet"
          className="flex items-center gap-2 text-white text-base hover:text-white hover:opacity-80"
        >
          <img alt="Back" src="./assets/arrow_back.svg" /> Back
        </Link>
      )
    }
    if (pathname.includes("nft") && !isMobile) {
      return "Agora Wallet"
    }
    if (pathname.includes("readmode") && !isMobile) {
      return "Agora Wallet"
    }
    if (pathname.includes("global")) {
      return "Global NFT Exchange"
    }
    return "Agora"
  }

  const title = getTitle()
  const isHomePage = title === "Agora"

  if (title === 'Intro') {
    return null;
  }

  if (title === "Agora Wallet") {
    return <div
        className={`w-full bg-darkContrast`}
    >
      <div className="max-w-[1800px] mx-auto">
        <div className="items-center grid gap-8 lg:flex justify-between py-8 md:text-4xl">
          <h1 className="text-3xl md:text-4xl sm:text-footer-title font-semibold px-4 md:px-15 text-white w-full">
            Agora Wallet
          </h1>
          <div className="whitespace-nowrap grid gap-4 md:flex md:gap-8 text-base px-4 md:px-15">
            <div className="space-y-2">
              <h3>Confirmed Minima</h3>
              <p className="text-lightOrange">{balance?.confirmed}</p>
            </div>
            <div className="space-y-2">
              <h3>Unconfirmed Minima</h3>
              <p className="text-lightOrange">{balance?.unconfirmed}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  }


  if (isHomePage) {
    return <div
        className={`w-full pointer-events-none ${
            isHomePage ? "relative" : "bg-darkContrast"
        }`}
    >
      {isHomePage && (
          <div
              className="absolute -z-10 inset-0 bg-gradient-to-r from-[#FF8630] via-[#6162FB] to-[#6162FB]
               sm:bg-gradient-to-r sm:from-[#FF8630] sm:via-[#6162FB] sm:to-[#6162FB]
               md:bg-gradient-to-r md:from-[#FF8630] md:via-[#6162FB] md:to-[#6162FB]
               lg:bg-gradient-to-r lg:from-[#FF8630] lg:via-[#6162FB] lg:to-[#6162FB]"
              style={{
                backgroundImage: `
        linear-gradient(90deg, #FF8630 16.58%, #6162FB 69.45%),
        linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))
      `,
                backgroundBlendMode: 'multiply'
              }}
          ></div>
      )}
      <div className="max-w-[1800px] mx-auto">
        <div className="flex items-center justify-between py-8 md:text-4xl">
          <h1 className="text-3xl -z-10 md:text-4xl sm:text-footer-title font-semibold px-4 md:px-15 text-white w-full">
            Agora
          </h1>
          <p className="text-base -z-10 md:whitespace-nowrap px-4 md:px-15">The NFT marketplace powered by Minima</p>
        </div>
      </div>
    </div>
  }

  return (
    <div
        className={`w-full ${
            isHomePage ? "bg-subheader-gradient bg-no-repeat bg-cover" : "bg-darkContrast"
          }`}
      >
        <div className="max-w-[1800px] mx-auto">
          <div className="flex items-center font-bold text-2xl py-8 md:text-4xl">
            <h1 className="text-2xl md:text-4xl sm:text-footer-title font-semibold px-4 md:px-15 text-white w-full">
              {title}
            </h1>
          </div>
        </div>
    </div>
  )
}