import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link, useNavigate } from "react-router-dom"
import Breadcrumb from "./Breadcrumb"
import AppBackground from "../../components/Images/AppBackground";

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
    if (step > totalSteps) navigate("/studio")
    setStep(step => step + 1)
  }

  return (
      <div className="bg-black inset-0 absolute z-[1000] p-10">
        <AppBackground type={`${step <= 1 ? "main_full_opacity" : "main"}`}>
          <div className={`h-full flex items-center justify-center text-black px-10 md:px-0`}>
              {step === 0 && (
                <AnimatePresence mode="wait">
                  <motion.img
                      key="icon"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      alt="agora-icon"
                      src="./assets/token-studio.svg"
                      className="w-[313px] h-[47px] md:w-[542px] md:h-[80px] lg:w-[767px] lg:h-[115px]"
                  />
                </AnimatePresence>
              )}

              {step === 1 && (
                  <AnimatePresence mode="wait">
                  <motion.img
                      key="icon"
                      initial={{opacity: 0}}
                      animate={{opacity: 1}}
                      exit={{opacity: 0}}
                      transition={{delay: 0.5, duration: 1.5}}
                      alt="agora-icon"
                      src="./assets/icon.svg"
                      className="w-[140px] h-[140px] md:w-[200px] md:h-[200px]"
                  />
                  </AnimatePresence>
              )}

              {step > 1 && (
                  <AnimatePresence mode="wait">
                  <motion.div  initial={{opacity: 0}}
                               animate={{opacity: 1}}
                               exit={{opacity: 0}}
                               transition={{delay: 0.5, duration: 1.5}} className="relative text-center">
                    <div className="max-w-lg space-y-10">
                      <div className="space-y-2">
                        <h3 className="text-white font-bold leading-10 text-center text-[24px] md:text-[40px] mb-6">
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
                            className="flex justify-center items-center gap-2 w-full p-4 px-8 text-black bg-lightOrange hover:bg-darkOrange rounded max-w-sm mx-auto"
                        >
                          {step !== 6 ? "Next" : "Go to marketplace"}
                        </button>

                        {step !== 6 && (
                            <div>
                              <Link className="text-white" to="/studio">
                                Go to custom token
                              </Link>
                            </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                  </AnimatePresence>
              )}
          </div>
        </AppBackground>
      </div>

  )
}

