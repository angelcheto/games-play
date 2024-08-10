import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useCreateGame } from "../../hooks/useGames";

const initialValues = { 
    title: '',
    category: '',
    maxLevel: '',
    imageUrl: '',
    summary: '',
};

export default function GameCreate() {
    
    const navigate = useNavigate();
    const createGame = useCreateGame();
    
    const createHandler = async (values) => {
        try {
            const { _id: gameId } = await createGame(values);
            navigate(`/games/${gameId}/details`);
        } catch (err) {
            console.log(err.message);
        }
    };
    
    const { values, changeHandler, submitHandler,
    } = useForm (initialValues, createHandler)

    return(
        <section id="create-page" className="auth">
            <form id="create" onSubmit={submitHandler}>
                <div className="container">

                    <h1>Create Game</h1>
                    <label htmlFor="title">Legendary title:</label>
                    <input type="text" id="title" name="title" value={values.title} onChange={changeHandler} placeholder="Enter game title..." />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value={values.category} onChange={changeHandler} placeholder="Enter game category..." />

                    <label htmlFor="maxLevel">Max Level:</label>
                    <input type="number" id="maxLevel" name="maxLevel" value={values.maxLevel} onChange={changeHandler} min="1" placeholder="1" />

                    <label htmlFor="imageUrl">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={values.imageUrl} onChange={changeHandler} placeholder="Upload a photo..." />

                    <label htmlFor="summary">Summary:</label>
                    <textarea id="summary" name="summary" value={values.summary} onChange={changeHandler} />
                        
                    <input className="btn submit" type="submit" value="Create Game"/>
                </div>
            </form>
        </section>
    );
}