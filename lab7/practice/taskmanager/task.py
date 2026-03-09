class Task:
    def __init__(self, id: int, title: str, completed: bool = False):
        self._id = id
        self.title = title
        self.completed = completed

    @property
    def id(self) -> int:
        return self._id

    def mark_completed(self) -> None:
        self.completed = True

    def __str__(self) -> str:
        return f"[{self.id}] {self.title} {'✅' if self.completed else '❌'}"

    def to_dict(self) -> dict:
        return {"id": self.id, "title": self.title, "completed": self.completed}

    @classmethod
    def from_dict(cls, data: dict) -> Task:
        return Task(id=data["id"], title=data["title"], completed=data["completed"])
