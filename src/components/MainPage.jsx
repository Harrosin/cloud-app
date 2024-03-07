import { useNavigate } from "react-router-dom";

function MainPage() {
    const navigate = useNavigate()

    return (
        <>
        <button onClick={() => navigate("/walkers")}>Walkers</button>
        <button onClick={() => navigate("/owners")}>Owners</button>
        </>
    )
}

export default MainPage;