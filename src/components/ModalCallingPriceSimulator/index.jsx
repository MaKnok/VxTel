import { React, useState, useEffect } from 'react'
import {useForm} from 'react-hook-form'

import { Form } from './styles'
import Modal from '../Modal'



const ModalCallingPriceSimulator = (props) => {

  const {isOpen, setIsOpen} = props; 
  const { 
    watch, 
    register
   }  = useForm();

  const [formStep,setFormStep] = useState(0);

  const [originDestiny, setOriginDestiny] = useState('011-016');
  const [timeDurationCall, setTimeDurationCall] = useState(0);
  const [planName, setPlanName] = useState('falemais-30');

  const [minuteValue, setMinuteValue] = useState(0);
  const [planValue, setPlanValue] = useState(0);
  const [planTitle, setPlanTitle] = useState('');

  const [resultWithFaleMais, setResultWithFaleMais] = useState(0);
  const [resultWithoutFaleMais, setResultWithoutFaleMais] = useState(0);

  useEffect(()=>{

    switch(originDestiny){

      case '011-016':
        setMinuteValue(1.90);
      break;
      
      case '011-017':
        setMinuteValue(1.70);
      break;
      
      case '011-018':
        setMinuteValue(0.90);
      break;
      
      case '017-011':
        setMinuteValue (2.70);
      break;
      
      case '018-011':
        setMinuteValue(1.90);
      break;
      
      default:
        setMinuteValue(0);
   }
       
  },[originDestiny]);


  useEffect(()=>{

    switch(planName){

      case 'falemais-30':
        setPlanValue(30);
      break;
      
      case 'falemais-60':
        setPlanValue(60);
      break;
      
      case 'falemais-120':
        setPlanValue(120);
      break;

      default:
        setPlanValue(0);
   }
       
  },[planName]);

  useEffect(()=>{

    switch(planValue){

      case 30:
        setPlanTitle('FaleMais 30');
      break;
      
      case 60:
        setPlanTitle('FaleMais 60');
      break;
      
      case 120:
        setPlanTitle('FaleMais 120');
      break;

      default:
        setPlanTitle('');
   }
       
  },[planValue]);



  const completeFormStep = () => {
    setFormStep(cur => cur + 1)
    console.log(formStep)
  }
  const goBackFormStep = () => {
    setFormStep(cur => cur - 1)
  }

  const handleNext = () => {
      completeFormStep();
      console.log(timeDurationCall);
  }

  const handleBack = () => {
    goBackFormStep();
  }

  function handleOriginDestinyChanged(e) {
    setOriginDestiny(e.target.value);
  }

  function handleTimeDurationCallChanged(e) {
  
      setTimeDurationCall(e.target.value);
    
  }

  function handlePlanChanged(e) {
    setPlanName(e.target.value);
  }

  async function handleSubmit(dataOriginDestiny,dataDurationCall,dataPlan) {

      setOriginDestiny(dataOriginDestiny);
      setTimeDurationCall(dataDurationCall);
      setPlanName(dataPlan);
  
      //** Result with FaleMais **//
  
      if (timeDurationCall <= planValue) {
        setResultWithFaleMais(0);
      }else{
        const remainingMinutes = timeDurationCall - planValue;
        const newMinuteValue = minuteValue + (minuteValue/10);
        setResultWithFaleMais(remainingMinutes * newMinuteValue);
        console.log(resultWithFaleMais);
       
      }
     
      //** Result without FaleMais **//
      setResultWithoutFaleMais(timeDurationCall * minuteValue);
      console.log(resultWithoutFaleMais);
  
  };

  const renderButton = () => {

    if (formStep < 1){
      return(
        <button onClick={handleNext} type="button">
              <p className="text">Continuar</p>
        </button>
      )
    }else if (formStep === 1 || formStep <= 2){
      return(
        <div className="nav-buttons">
          <button onClick={handleBack} type="button" className="go-back">
            <p className="text">Voltar</p>
          </button>

          <button onClick={handleNext} type="button">
            <p className="text">Continuar</p>
          </button>
        </div>
      )
    }else if (formStep > 2){
      return (
        <div className="nav-buttons">

          <button onClick={() => handleSubmit(originDestiny,timeDurationCall,planName)} type="button">
              <p className="text">Calcular</p>
          </button>

        </div>
      );
    }

  }

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form>

          { formStep === 0 && (
          <section>
            <h3>Origem e Destino da sua Ligação</h3>

            <div className="form-group">
              <input type="radio" id="011-016" name="origin-destiny" value="011-016" onChange={handleOriginDestinyChanged.bind(this)}  checked={true}/>
              <label htmlFor="011-016">(011) {'>>'} (016)</label><br></br>
            </div>

            <div className="form-group">
              <input type="radio" id="011-017" name="origin-destiny" value="011-017" onChange={handleOriginDestinyChanged.bind(this)}/>
              <label htmlFor="011-017">(011) {'>>'} (017)</label><br></br>
            </div>

            <div className="form-group">
              <input type="radio" id="011-018" name="origin-destiny" value="011-018" onChange={handleOriginDestinyChanged.bind(this)}/>
              <label htmlFor="011-018">(011) {'>>'} (018)</label><br></br>
            </div>

            <div className="form-group">
              <input type="radio" id="016-011" name="origin-destiny" value="016-011" onChange={handleOriginDestinyChanged.bind(this)}/>
              <label htmlFor="016-011">(016) {'>>'} (011)</label><br></br>
            </div>

            <div className="form-group">
              <input type="radio" id="017-011" name="origin-destiny" value="017-011" onChange={handleOriginDestinyChanged.bind(this)}/>
              <label htmlFor="017-011">(017) {'>>'} (011)</label><br></br>
            </div>

            <div className="form-group">
              <input type="radio" id="018-011" name="origin-destiny" value="018-011" onChange={handleOriginDestinyChanged.bind(this)}/>
              <label htmlFor="018-011">(018) {'>>'} (011)</label><br></br>
            </div>

          </section>)}
          
          { formStep === 1 && (
          <section>

          <h3>Tempo de duração da sua ligação em <strong>minutos</strong></h3>

          <div className="form-group">
            <input 
            type="number" 
            id="time-duration-call" 
            name="time-duration-call" 
            onChange={handleTimeDurationCallChanged.bind(this)}
            />
          </div>

          </section>
          )}
            
          { formStep === 2 && (
          <section><h2>Qual é o plano do seu interesse?</h2>

          <div className="form-group">
            <input type="radio" id="falemais-30" name="falemais" value="falemais-30" onChange={handlePlanChanged.bind(this)}  checked={true} />
            <label htmlFor="falemais-30">FaleMais 30</label><br></br>
          </div>
         
          <div className="form-group">
            <input type="radio" id="falemais-60"  name="falemais" value="falemais-60" onChange={handlePlanChanged.bind(this)}/>
            <label htmlFor="falemais-60">FaleMais 60</label><br></br>
          </div>
          
          <div className="form-group">
            <input type="radio" id="falemais-120"  name="falemais" value="falemais-120" onChange={handlePlanChanged.bind(this)}/>
            <label htmlFor="falemais-120">FaleMais 120</label><br></br>
          </div>

          </section>)}


          { formStep === 3 && (
          <section>
            <h3>Resumo</h3>
            <div>
              Origem - Destino: {originDestiny} <br/>
              <hr/>
              <br/>
              Tempo de duração da ligação: {timeDurationCall}
              <br/>
              Plano: {planTitle}
              <br/>
              <br/>

              <div>
                <h4>Com o FaleMais: <strong>R$ {resultWithFaleMais.toFixed(2)}</strong></h4>
                <h4>Sem o FaleMais: <strong>R$ {resultWithoutFaleMais.toFixed(2)}</strong></h4>
              </div> 

            </div>
          </section>)}

          {renderButton()}
            
        </Form>
      </Modal>
                  
    );
}


export default ModalCallingPriceSimulator;
