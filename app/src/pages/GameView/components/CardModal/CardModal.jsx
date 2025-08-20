import Modal from "react-modal";

const CardModal = (card, setCard)=>{
    return(
        <Modal isOpen={!!card} onRequestClose={() => setCard(null)}>
            {card && (
                <>
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                    <button onClick={() => setCard(null)}>fechar</button>
                </>
            )}
        </Modal>
    );
}

export default CardModal