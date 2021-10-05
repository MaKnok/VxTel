import { Container } from './styles';


const TopBanner = (props) => {

    const openModal = props.openModal;

    return (
      <Container>
        <div className="hero">

            <div className="pageTitle">
              <h2>Já conhece o <strong>FaleMais</strong>? Veja todas as vantagens!</h2>
            </div>

            <nav>
              <div>
                <button
                  type="button"
                  onClick={openModal}>
                  <div className="text"><h3>Quero saber mais!</h3></div>
                </button>
              </div>
            </nav>
    
        </div>
     
      </Container>
    )
}


export default TopBanner;
