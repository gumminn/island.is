import { UnemploymentStep } from './../../entities/enums/unemployment-step.enum'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
        
const Index: React.FC = () => {
    const { query } = useRouter()
    const stepQuery = query.step
    const [step, setStep] = useState(1)
    const router = useRouter()
  
    /** Load the client and set the step from query if there is one */
    useEffect(() => {
      async function loadApplication() {
        const application = await getApplication()
        // TODO: set the application
      }
      loadApplication()
      
      document.title = ""
    }, [step])
  
    const getApplication = async () => {
      // TODO: Load the application from service
    }
  
    const changesMade = () => {
      getApplication()
    }
  
    const handleNext = () => {
      setStep(step + 1)
    }
  
    const handleStepChange = (step: UnemploymentStep) => {
      setStep(step)
    }
  
    const handleBack = () => {
      setStep(step - 1)
    }
  
    const handleCancel = () => {
      router.push('/clients')
    }
  
    const handleSaved = (application: any) => {
        getApplication()
        handleNext()      
    }
  
    switch (step) {
      case UnemploymentStep.PersonalInformation:
        return (
            <div className="test"></div>
        )
      default: {
        return (
          <div className="test2"></div>
        )
      }
    }
  }
  
  export default Index