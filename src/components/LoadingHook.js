import useJsonFetch from "../hooks/useJsonFetch";

function LoadingHook() {
    const URL = "http://localhost:7070/loading";
    const [data, loading, error] = useJsonFetch(URL);

    return (
        <li className="list-item">
            <h2>LoadingHook</h2>
            <div>{loading ? <span>Loading...</span> : data.status}</div>
        </li>

    );
}

export default LoadingHook;
