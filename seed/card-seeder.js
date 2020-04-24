const Card = require('../models/Card');
const mongoose = require('mongoose');
const db = require('../config/keys').mongoURI;
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch((err) => console.log(err));

Card.deleteMany({})
    .then(() => console.log('deleted cards'))
    .catch((error) => console.log(error))

const cards = [
    new Card({
        name: 'Axe',
        type: 'murder',
    }),
    new Card({
        name: 'Ameoba',
        type: 'murder',
    }),
    new Card({
        name: 'Alcohol',
        type: 'murder',
    }),
    new Card({
        name: 'Bamboo Tip',
        type: 'murder',
    }),
    new Card({
        name: 'Blender',
        type: 'murder',
    }),
    new Card({
        name: 'Shotgun',
        type: 'murder'
    }), 
    new Card({
        name: 'Lawnmower',
        type: 'murder'
    }),
    new Card({
        name: 'Cup',
        type: 'murder'
    }),
    new Card({
        name: 'Samurai Sword',
        type: 'murder'
    }),
    new Card({
        name: 'Nail Gun',
        type: 'murder'
    }),
    new Card({
        name: 'Nunchucks',
        type: 'murder'
    }),
    new Card({
        name: 'Lasso',
        type: 'murder'
    }),
    new Card({
        name: 'Hammer',
        type: 'murder'
    }),
    new Card({
        name: 'Brick',
        type: 'murder'
    }),
    new Card({
        name: 'Chemicals',
        type: 'murder'
    }),
    new Card({
        name: 'Cleaver',
        type: 'murder'
    }),
    new Card({
        name: 'Dumbbell',
        type: 'murder'
    }),
    new Card({
        name: 'Taser',
        type: 'murder'
    }),
    new Card({
        name: 'Mad Dog',
        type: 'murder'
    }),
    new Card({
        name: 'Roundhouse Kick',
        type: 'murder'
    }),
    new Card({
        name: 'Arrow',
        type: 'murder'
    }),
    new Card({
        name: 'Baguette',
        type: 'murder'
    }),
    new Card({
        name: 'Heroin',
        type: 'murder'
    }),
    new Card({
        name: 'Dynamite',
        type: 'murder'
    }),
    new Card({
        name: 'Virus',
        type: 'murder'
    }),
    new Card({
        name: 'Nintendo Switch',
        type: 'murder'
    }),
    new Card({
        name: 'Razor',
        type: 'murder'
    }),
    new Card({
        name: 'Staircase',
        type: 'murder'
    }),
    new Card({
        name: 'Bike',
        type: "murder"
    }),
    new Card({
        name: 'Keyboard',
        type: 'murder',
    }),
    new Card({
        name: 'Spoon',
        type: 'murder'
    }),
    new Card({
        name: "Microwave",
        type: 'murder'
    }),
    new Card ({
        name: "Toilet Lid",
        type: 'murder'
    }),
    new Card ({
        name: 'Toolbox',
        type: 'murder'
    }),
    new Card({
        name: 'Flaregun',
        type: 'evidence'
    }),
    new Card ({
        name: 'fish',
        type: 'evidence'
    }),
    new Card({
        name: 'tape',
        type: 'evidence'
    }),
    new Card({
        name: 'Bait',
        type: 'evidence'
    }),
    new Card({
        name: "Pickle",
        type: "evidence"
    }),
    new Card({
        name: 'Soap',
        type: 'evidence'
    }),
    new Card({
        name: 'Candy wrapper',
        type: 'evidence'
    }),
    new Card({
        name: 'Cookie',
        type: 'evidence'
    }),
    new Card({
        name: 'Sponge',
        type: 'evidence'
    }),
    new Card({
        name: 'Life Preserver',
        type: 'evidence'
    }),
    new Card({
        name: 'Pill Case',
        type: 'evidence'
    }),
    new Card({
        name: 'Headphones',
        type: 'evidence'
    }),
    new Card({
        name: 'Spoon',
        type: 'evidence'
    }),
    new Card({
        name: 'Dog Collar',
        type: 'evidence'
    }),
    new Card({
        name: 'Bloody Apron',
        type: 'evidence'
    }),
    new Card({
        name: 'Ripped Shirt',
        type: 'evidence'
    }),
    new Card({
        name: 'Pencil',
        type: 'evidence'
    }),
    new Card({
        name: 'Hamburger',
        type: 'evidence'
    }),
    new Card({
        name: 'Ashtray',
        type: 'evidence'
    }),
    new Card({
        name: 'Chewing Gum',
        type: 'evidence'
    }),
    new Card({
        name: 'Computer Mouse',
        type: 'evidence'
    }),
    new Card({
        name: 'iPhone 5S',
        type: 'evidence'
    }),
    new Card({
        name: 'Manga Book',
        type: 'evidence'
    }),
    new Card({
        name: 'Pearl Necklace',
        type: 'evidence'
    }),
    new Card({
        name: 'Toyota Corolla',
        type: 'evidence'
    }),
    new Card({
        name: 'Locket of Hair',
        type: 'evidence'
    }),
    new Card({
        name: 'Half Filled Water Bottle',
        type: 'evidence'
    }),
    new Card({
        name: 'Pinned Butterfly',
        type: 'evidence'
    }),
    new Card({
        name: 'Bitten Apple',
        type: 'evidence'
    }),
    new Card({
        name: 'Jumprope',
        type: 'evidence'
    }),
    new Card({
        name: 'Bottle of Vodka',
        type: 'evidence'
    }),
    new Card({
        name: 'Deception: Murder in Hong Kong Game',
        type: 'evidence'
    }),
    new Card({
        name: 'Cracked Lightbulb',
        type: 'evidence'
    }),
    new Card({
        name: 'Wrench',
        type: 'evidence'
    })

]

let finished = 0;
for (let i = 0; i < cards.length; i++) {
    cards[i].save().then((user) => {
        finished++;
        if (finished === cards.length) {
            exit();
        }
    }).catch((error) => console.log(error));
}

function exit() {
    mongoose
        .disconnect()
        .then(() => console.log('Disconnected'))
        .catch((error) => console.log(error))
}