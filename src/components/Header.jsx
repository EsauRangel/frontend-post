import React from 'react'

export const Header = ({handleInputChange, q}) => {
    return (
        <header className="navbar navbar-dark bg-primary ">
            <div className="container">
                <div className="row w-100">
                    <div className="col-md-3">
                        <h1 className="navbar-brand">Blog App</h1>
                    </div>

                    <div className="col-md-9">
                        <div className="search-container">
                            <input
                                type="text"
                                name='q'
                                placeholder="Buscar por títudovo, contenido o autor"
                                onChange={handleInputChange}
                                value={q}
                            />
                        </div>
                    </div>
                </div>
                {/* <Button className='secondary' onClick={handleSetModal}>Nueva entrada</Button> */}
            </div>
        </header>
    )
}
