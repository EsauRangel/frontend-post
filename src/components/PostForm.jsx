import { Modal } from 'react-bootstrap';
import { usePost } from '../hooks/usePost';
import { useSelector } from 'react-redux';


export const PostForm = () => {
    const {
        handleInputChange,
        values,
        handleSubmit,
        handleClose
    } = usePost();

    const { title, author, content } = values;
    const { openModal } = useSelector(state => state.posts);

    return (
        <Modal show={openModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Nueva entrada</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <div>
                            <label htmlFor="title">Titulo:</label>
                            <input
                                className='form-control'
                                type="text"
                                name='title'
                                placeholder="Titulo"
                                onChange={handleInputChange}
                                value={title}
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="author">Autor:</label>
                        <input
                            className='form-control'
                            type="text"
                            name='author'
                            placeholder="Autor"
                            onChange={handleInputChange}
                            value={author}
                            required
                        />

                    </div>
                    <div className="mb-3 d-flex flex-column"> {/* Cambio de flex-row a flex-column */}
                        <label htmlFor="content">Contenido:</label> {/* Cambio for por htmlFor */}
                        <div>
                            <textarea
                                name="content"
                                rows="10"
                                cols={45}
                                value={content}
                                maxLength={150}
                                height={"100px"}
                                width={"200px"}
                                placeholder={"Contenido..."}
                                onChange={handleInputChange}
                                required />
                        </div>
                    </div>
                    <div className='d-flex flex-row justify-content-between'>
                        <button className="btn btn-danger" type="button" onClick={handleClose}>
                            Cerrar
                        </button>

                        <button className="btn btn-primary" type="submit">
                            Guardar
                        </button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    )
}
