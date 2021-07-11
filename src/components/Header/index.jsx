import { Container } from './styles'
import ReactModal from 'react-modal'
import { useState } from "react"
import api from '../../services/api';

export function Header() {
    const [openModal, setOpenModal] = useState(false);
    const [quant, setQuant] = useState(0);
    const [name, setName] = useState('');


    async function handleNewProduct(event) {
        const id = Math.floor(Math.random() * 10)
        const data = { id, quant, name }

        await api.post('/products', data)

        setName('');
        setQuant(0);
        setOpenModal(false);
    }


    return (
        <>
            <Container>
                <div>
                    <h1>Lista de Compras</h1>
                    <button onClick={() => setOpenModal(true)}>
                        Adicionar Item
                    </button>
                </div>
                <ReactModal isOpen={openModal} onRequestClose={() => { setOpenModal(false) }} className="modal" overlayClassName="modal-overlay">
                    <h1>Novo item</h1>
                    <form onSubmit={handleNewProduct}>
                        <input type="number" value={quant} onChange={event => setQuant(event.target.value)} className="quant" maxLength="1" placeholder="qt." />
                        <input type="text" className="name" value={name} onChange={event => setName(event.target.value)} placeholder="Nome do produto" />
                        <button type="submit">+</button>
                    </form>
                </ReactModal>
            </Container>
        </>
    )
}