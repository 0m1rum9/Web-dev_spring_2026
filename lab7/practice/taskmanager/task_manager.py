from task import Task


class TaskManager:
    def __init__(self, tasks: list[Task] = []) -> None:
        self.tasks = tasks

    @property
    def tasks(self):
        return self._tasks

    @tasks.setter
    def tasks(self, tasks: list[Task]):
        self._tasks = tasks

    def add_task(self, title: str) -> Task:
        task = Task(id=self._get_next_id(), title=title, completed=False)
        self.tasks.append(task)
        return task

    def list_tasks(self):
        for task in self.tasks:
            print(task)

    def complete_task(self, id: int) -> bool:
        for task in self.tasks:
            if task.id == id:
                task.mark_completed()
                return True
        return False

    def delete_task(self, id: int) -> Task | None:
        returnable = None
        for task in self.tasks:
            if task.id == id:
                returnable = task
                self.tasks.remove(task)
                break
        return returnable

    def _get_next_id(self) -> int:
        if not self.tasks:
            return 1
        return max(task.id for task in self.tasks) + 1
