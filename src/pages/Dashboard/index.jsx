import {useState} from 'react';

import Header from '../../components/Header';
import TopBanner from '../../components/TopBanner';
import ModalCallingPriceSimulator from '../../components/ModalCallingPriceSimulator';


const Dashboard = () => {

  const [isPriceSimulatorOpen,setPriceSimulatorModalOpen] = useState(false);
  const [formStep, setFormStep] = useState(0);


  function handleCalculate(data) {
    console.log(data)
  }
  
  function handleTogglePriceSimulatorModal() {
    setPriceSimulatorModalOpen(!isPriceSimulatorOpen);
  }

    return (
      <>
        <Header/>
        <TopBanner openModal={handleTogglePriceSimulatorModal}/>
        <ModalCallingPriceSimulator
          isOpen={isPriceSimulatorOpen}
          setIsOpen={handleTogglePriceSimulatorModal}
          handleCalculate={handleCalculate}
          formStep={formStep}
          setFormStep={setFormStep}
        />
      </>
    );
}


export default Dashboard;
