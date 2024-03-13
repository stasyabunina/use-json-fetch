import useJsonFetch from "../hooks/useJsonFetch";

function DataHook() {
    const URL = "http://localhost:7070/data";
    const [data, loading, error] = useJsonFetch(URL);

    return (
        <li className="list-item">
            <h2>DataHook</h2>
            <div>{data.status}</div>
        </li>

    );
}

export default DataHook;