import Task from "../../components/Task/Task";
import useDataFetching from "../../hooks/useDataFetching"
import "./Backlog.css";

export default function Backlog () {
    const [loading, error, tasks] = useDataFetching(`https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks`);
    
    return (
        <div className="Tasks-wrapper">
            {loading || error ? (
                <span>{error || 'Loading...'}</span>
            ) : (
                tasks.map((task) => (
                    <Task
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        body={task.body}
                    />
                    ))
            )}
        </div>
    )
}