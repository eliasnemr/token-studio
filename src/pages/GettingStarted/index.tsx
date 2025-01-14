import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link, useNavigate } from "react-router-dom"
import Breadcrumb from "./Breadcrumb"

export default function GettingStarted() {
  const [step, setStep] = useState(0)
  const totalSteps = 5
  const navigate = useNavigate()

  const currentTitle = [
    "Welcome to Token Studio, your gateway to the world of Tokens and NFTs on the Minima blockchain.",
    "Create Simple Tokens",
    "Create Custom Tokens",
    "Create NFTs",
    "After Creation",
  ]
  
  const currentSubtitle = [
    "",
    "Creating a Simple Token is as easy as choosing a name and total supply—you're ready to go!",
    "Token Studio offers all the functionality you need to create Custom Tokens tailored to your tokens needs.",
    "Effortlessly mint NFTs with Token Studio and bring your digital creations to life.",
    "Your Tokens and NFTs will appear in your balance within your Minima node wallet, ready to be stored away safely or transferred to Ichiba, the NFT Minima marketplace to be traded.",
  ]

  // Auto-play animation for first two steps
  useEffect(() => {
    if (step < 2) {
      const timer = setTimeout(() => {
        setStep(prev => prev + 1)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [step])

  const handleStepChange = (newStep: number) => {
    // Only allow navigation to steps that have been unlocked
    if (newStep <= step) {
      setStep(newStep)
    }
  }

  const handleClickNext = () => {
    if (step > totalSteps) navigate("/")
    setStep(step => step + 1)
  }

  return (
    <div className="bg-subheader-gradient bg-cover bg-center bg-no-repeat h-[calc(100vh_-_160px)] md:h-[calc(100vh_-_200px)] flex items-center justify-center text-black px-10">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.img
            key="icon"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            alt="agora-icon"
            src="./assets/icon.svg"
            className="w-[71px] h-[71px] md:w-[224px] md:h-[224px]"
          />
        )}

        {step === 1 && (
          <motion.p
            key="title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white text-3xl"
          >
            Agora
          </motion.p>
        )}

        {step > 1 && (
          <div className="relative text-center">
            <div className="max-w-lg space-y-10">
              <div className="space-y-2">
                <h3 className="text-white font-bold leading-10 text-center text-[24px] md:text-[40px]">
                  {currentTitle[step - 2]}
                </h3>

                {step > 2 && (
                  <p className="text-white">
                    {currentSubtitle[step - 2]}
                  </p>
                )}
              </div>

              <div>
                <Breadcrumb onStepChange={handleStepChange} currentStep={step} totalSteps={5} />
              </div>

              <div className="space-y-4">
                <button
                  onClick={handleClickNext}
                  type="button"
                  className="flex justify-center items-center gap-2 w-full p-4 px-8 text-black bg-lightOrange hover:bg-darkOrange rounded"
                >
                  {step !== 6 ? "Next" : "Go to marketplace"}
                </button>

                {step !== 6 && (
                  <div>
                    <Link className="text-white" to="/">
                      Go to custom token
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

