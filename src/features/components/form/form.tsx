export const Form = () => {
    return (
        <>
            <h3>Crea tu personaje</h3>
            <form className="form">
                <div>
                    <input
                        type="text"
                        id="title"
                        placeholder="Cual es el nombre del personaje?"
                        required
                    />
                </div>
                <div>
                    <input
                        type="text"
                        id="resp"
                        placeholder="Cual es su role?"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        id="resp"
                        placeholder="Cual su la edad?"
                    />
                </div>
                <div>
                    <label htmlFor="lifeStatus">Esta vivo?</label>
                    <input type="checkbox" name="lifeStatus" id="lifeStatus" />
                </div>
                <div>
                    <input
                        type="text"
                        id="resp"
                        placeholder="añade una url (imagen)"
                    />
                </div>
                <button type="submit">Guardar</button>
            </form>
        </>
    );
};
