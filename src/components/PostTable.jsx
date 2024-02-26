import { useSelector } from 'react-redux';
import { Button } from "react-bootstrap";;
import { usePostTable } from '../hooks/usePostTable';
import { Header } from './Header';
import { Footer } from './Footer';
import { motion } from "framer-motion"

export const PostTable = () => {

    const {
        values,
        handleShowText,
        validItem,
        handleSetModal,
        formatDate,
        handleInputChange,
    } = usePostTable();

    const { q } = values;
    const { posts } = useSelector(state => state.posts);

    return (
        <>
            <Header
                handleInputChange={handleInputChange}
                q={q}
            />

            <motion.div
                className="container"
            >


                <motion.div className="row"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                      ease: [0, 0.71, 0.2, 1.01]
                    }}>
                    <div className="col pb-4">
                        <Button onClick={handleSetModal}>Nueva entrada</Button>
                    </div>
                </motion.div>

                {posts.map(post => (
                    <>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                type: "spring", stiffness: 400, damping: 10,
                                duration: 0.4,
                                delay: 0.2,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                            key={post.id} id={post.id} onClick={() => validItem(post.id)} className="post">
                            <div
                            >
                                <h2>Titulo: {post.title}</h2>
                                <p>Autor: {post.author}</p>
                                <p>{handleShowText(post.id, post.content)}</p>
                                <p className="meta">Fecha de Creación: {formatDate(post.createdAt)}</p>
                            </div>

                        </motion.div>

                    </>
                ))}
            </motion.div>

            <Footer />
        </>
    )
}
