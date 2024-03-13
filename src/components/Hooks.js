import "../App.css";
import DataHook from "./DataHook";
import ErrorHook from "./ErrorHook";
import LoadingHook from "./LoadingHook";

function Hooks() {
    return (
        <div className="container">
            <ul className="list">
                <DataHook />
                <ErrorHook />
                <LoadingHook />
            </ul>
        </div>
    );
}

export default Hooks;
