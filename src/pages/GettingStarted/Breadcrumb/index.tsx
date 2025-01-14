interface BreadcrumbProps {
  currentStep: number;
  totalSteps?: number;
  onStepChange: (step: number) => void;
}

export default function Breadcrumb({ currentStep, totalSteps = 6, onStepChange }: BreadcrumbProps) {
  return (
    <div className="relative flex justify-center gap-1.5" role="navigation" aria-label="Progress steps">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const stepNumber = index + 2 // Since steps start at 2
        const isCurrentStep = index === currentStep - 2
        
        return (
          <button
            key={index}
            onClick={() => onStepChange(stepNumber)}
            className={`!p-0 h-2 w-2 focus:outline-lightOrange focus:outline-2 rounded-full transition-colors duration-300 hover:bg-white/80 cursor-pointer ${
              isCurrentStep ? "bg-white" : "bg-white/30"
            }`}
            aria-label={`Go to step ${stepNumber}`}
            aria-current={isCurrentStep ? "step" : undefined}
          />
        )
      })}
    </div>
  )
}

