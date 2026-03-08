class Animal:
    def make_sound(self) -> None:
        print("animal sound~~")

    def eat(self) -> None:
        print("animal's eating")

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, name: str):
        if len(name) == 0:
            raise ValueError("Name cannot be empty")
        self._name = name

    def __init__(self, name: str, age: int, weight: float) -> None:
        self.name = name
        self.age = age
        self.weight = weight

    def __str__(self) -> str:
        return f"Name: {self.name}, Age: {self.age}, Weight: {self.weight}"


class Dog(Animal):
    def __init__(self, name: str, age: int, weight: float, breed: str) -> None:
        super().__init__(name, age, weight)
        self.breed = breed

    def make_sound(self) -> None:
        print("bark~~")

    def lick(self, person: str):
        print(f"licking {person}")

    def __str__(self) -> str:
        return super().__str__() + f", Breed: {self.breed}"


class Cat(Animal):
    def __init__(self, name: str, age: int, weight: float, is_vaccinated: bool) -> None:
        super().__init__(name, age, weight)
        self.is_vaccinated = is_vaccinated

    def make_sound(self) -> None:
        print("meow~~")

    def scratch(self, scratchable: str) -> None:
        print(f"scratching {scratchable}")
