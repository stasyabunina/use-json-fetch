import useJsonFetch from "../hooks/useJsonFetch";


function ErrorHook() {
    const URL = "http://localhost:7070/error";
    const [data, loading, error] = useJsonFetch(URL);

    return (
        <li className="list-item">
            <h2>ErrorHook</h2>
            <div>{error ? error : data.status}</div>
        </li>

    );
}

export default ErrorHook;