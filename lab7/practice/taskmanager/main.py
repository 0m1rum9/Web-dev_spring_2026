from task_manager import TaskManager


def main():
    m = TaskManager()
    options = [show_tasks, add_task, complete_task, delete_task]
    while True:
        show_menu()
        try:
            option = int(input("Choose option: "))
            if option == 5:
                exit()
            elif option > 5:
                print("invalid option")
                continue

            options[option - 1](manager=m)

        except ValueError:
            print("Enter number")


def show_menu():
    print(
        "=== Task Manager ===\n"
        + "1. Show tasks\n"
        + "2. Add task\n"
        + "3. Complete task\n"
        + "4. Delete task\n"
        + "5. Exit\n"
    )


def show_tasks(manager: TaskManager):
    manager.list_tasks()


def add_task(manager: TaskManager):
    title = input("Enter task title: ")
    print(manager.add_task(title))


def complete_task(manager: TaskManager):
    try:
        id = int(input("Enter task ID to complete: "))
        if manager.complete_task(id):
            print("Task completed!")
        else:
            print("No such task")

    except ValueError:
        print("Enter number")


def delete_task(manager: TaskManager):
    try:
        id = int(input("Enter task ID to delete: "))
        if manager.delete_task(id):
            print("Task deleted!")
        else:
            print("No such task")

    except ValueError:
        print("Enter number")


if __name__ == "__main__":
    main()
