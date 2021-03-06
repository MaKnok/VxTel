import { useState,useEffect,useRef} from 'react';
import ReactModal from 'react-modal';

const Modal = (props) => {

  const {children, isOpen, setIsOpen} = props 

  const [modalStatus,setModalStatus] = useState(false);

  const prevModalRef = useRef();

  useEffect(()=>{
    prevModalRef.current = isOpen;
  })

  const modalPreviousValue = prevModalRef.current ?? isOpen;

  useEffect(()=>{
    if (modalPreviousValue !== isOpen){
      console.log(isOpen, setIsOpen);
      setModalStatus(isOpen) 
    }
  },[isOpen,setIsOpen,modalPreviousValue]);
 
    return (
      <ReactModal
        shouldCloseOnOverlayClick={!false}
        onRequestClose={setIsOpen}
        isOpen={modalStatus}
        ariaHideApp={false}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: '#F0F0F5',
            color: '#000000',
            borderRadius: '8px',
            width: '736px',
            border: 'none',
          },
          overlay: {
            backgroundColor: '#121214e6',
          },
        }}
      >
        {children}
      </ReactModal>
    );
  
};

export default Modal;
