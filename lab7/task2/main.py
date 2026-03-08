from models import Animal, Cat, Dog


def main():
    a1 = Animal(age=12, name="debil", weight=12.4)
    a2 = Cat(age=10, name="murzik", weight=50.4, is_vaccinated=True)
    a3 = Dog(age=4, name="bobik", weight=30.4, breed="labrador")
    test([a1, a2, a3])


def test(animals: list[Animal]) -> None:
    for animal in animals:
        print(animal)
        animal.make_sound()
        if isinstance(animal, Cat):
            animal.scratch("person")
        elif isinstance(animal, Dog):
            animal.lick("person")


if __name__ == "__main__":
    main()
