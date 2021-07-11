import { Container } from "./styles"
import { useEffect, useState } from "react"

import imgEdit from '../../assets/edit.svg'
import imgDelete from '../../assets/trash.svg'
import ReactModal from "react-modal"

import api from '../../services/api'

export function List() {
    const [editModal, setEditModal] = useState(false);
    const [products, setProducts] = useState([]);

    const [quant, setQuantEdit] = useState(0);
    const [name, setNameEdit] = useState('');
    const [id, setIdEdit] = useState(0);

    useEffect(() => {
        api.get('/products').then(response => setProducts(response.data))
    }, [products])

    async function handleEdit(prodid) {

        await api.get(`/products/${prodid}`).then(response => { setQuantEdit(response.data.quant); setNameEdit(response.data.name); setIdEdit(response.data.id) })
        setEditModal(true);
    }

    async function handleFinalizeRemove(event) {
        event.preventDefault()
        const data = { id, quant, name }

        await api.put(`/products/${id}`, data)

        setQuantEdit(0);
        setNameEdit('');
        setIdEdit(0);
        setEditModal(false)
    }

    async function handleRemove(prodID) {

        await api.delete(`/products/${prodID}`)
    }



    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <td>Quant.</td>
                        <td>Produto</td>
                        <td>Ações</td>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => {
                        return (
                            <tr key={product.id}>
                                <td>{product.quant}</td>
                                <td>{product.name}</td>
                                <td>
                                    <button onClick={() => handleEdit(product.id)}>
                                        <img src={imgEdit} alt="" />
                                    </button>
                                    <button onClick={() => handleRemove(product.id)}>
                                        <img src={imgDelete} alt="" />
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <ReactModal isOpen={editModal} onRequestClose={() => setEditModal(false)} className="modal" overlayClassName="modal-overlay">
                <h1>Editar Item</h1>
                <form action="" onSubmit={handleFinalizeRemove}>
                    <input type="number"
                        className="quant"
                        value={quant}
                        placeholder="qt."
                        onChange={event => setQuantEdit(event.target.value)}
                    />
                    <input
                        type="text"
                        className="name"
                        value={name}
                        placeholder="Nome do produto"
                        onChange={event => setNameEdit(event.target.value)}
                    />
                    <button>✔</button>
                </form>
            </ReactModal>
        </Container>
    )
}