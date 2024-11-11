const petNameInput = document.getElementById('petName');
const ownerNameInput = document.getElementById('ownerName');
const speciesInput = document.getElementById('species');
const breedInput = document.getElementById('breed');

const myForm = document.getElementById('user-form');

const pets = [];

class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
        this.petName = _petName;
        this.ownerName = _ownerName;
        this.species = _species;
        this.breed = _breed;
    }

    hasSameOwner(otherPet) {
        return this.ownerName === otherPet.ownerName;
    }
}

myForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const newPet = new Pet(
        petNameInput.value,
        ownerNameInput.value,
        speciesInput.value,
        breedInput.value
    );

    console.log('ANIMALE CREATO:', newPet);

    
    let hasSameOwner = false;
    for (const pet of pets) {
        if (newPet.hasSameOwner(pet)) {
            console.log(`L'animale ${newPet.petName} ha lo stesso padrone di ${pet.petName}.`);
            hasSameOwner = true;
            break;
        }
    }

    if (!hasSameOwner) {
        console.log("Nessun padrone condiviso trovato.");
    }

    
    pets.push(newPet);
});

class User {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
    }

    
    compareAge(otherUser) {
        if (this.age > otherUser.age) {
            return `${this.firstName} è più vecchio di ${otherUser.firstName}.`;
        } else if (this.age < otherUser.age) {
            return `${this.firstName} è più giovane di ${otherUser.firstName}.`;
        } else {
            return `${this.firstName} e ${otherUser.firstName} hanno la stessa età.`;
        }
    }
}

const user1 = new User("Mario", "Rossi", 30, "Roma");
const user2 = new User("Antonio", "Gian", 28, "Salerno");
const user3 = new User("Luca", "Pappa", 25, "Napoli");


console.log(user1.compareAge(user2)); 
console.log(user2.compareAge(user1)); 
console.log(user1.compareAge(user3)); 
