from task import Task
import json


def load_tasks(filename: str) -> list[Task] | None:
    tasks = []
    try:
        with open(filename, "r") as f:
            data = json.load(f)
            for obj in data:
                tasks.append(Task.from_dict(obj))
    except FileNotFoundError:
        tasks = []

    return tasks


def save_tasks(filename: str, tasks: list[Task]) -> None:
    with open(filename, "w") as f:
        serializable = [task.to_dict() for task in tasks]
        f.write(json.dumps(serializable))
