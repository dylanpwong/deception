const Event = require('../models/Event');
const mongoose = require('mongoose');
const db = require('../config/keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch((err) => console.log(err));

Event.deleteMany({})
    .then(() => console.log('deleted event cards'))
    .catch((error) => console.log(error))

const events = 
    new Event({
        Location: [
        'App Academy',
        'Sailboat',
        'Kitchen',
        'Bathroom',
        'Alley',
        'White House',
        ],
        causeOfDeath: [
        'Trauma',
        'Bleed Out',
        'Poisoning',
        'Drowning',
        'Bullet Wound'
        ],
        murdersPersonality: [
        'Jolly',
        'Depressed',
        'Serious',
        'Comical',
        'Erratic'
        ],
        noticedByBystander: [
        'Unnoticed',
        'Single Bystander',
        'Large Group',
        'Killed Bystander',
        'Seen from a distance'
        ],
        traceAtTheScene: [
        'None',
        'Left Few Pieces of Evidence',
        'Blood Everywhere',
        'Everything Was Smashed',
        'Poorly Cleaned Up'
        ],
        socialRelationship: [
        'Colleague',
        'Spouse',
        'Child',
        'Friend',
        'Neighbor'
        ],
        victimsIdentity: [
        'College-age Female',
        'Elderly Male',
        'Middle-aged Man',
        'Overweight Male',
        'Brown-haired Girl',
        ],
        stateOfScene: [
        'Burnt to the Ground',
        'Everything Thrown All Around',
        'Clean and Untouched',
        'Broken Glass on the Ground',
        'Blood on Walls'
        ],
        weather: [ 
        'Sunny',
        'Overcast',
        'Rainy',
        'Snowing',
        'Partially Cloudly'
        ],
        corpseCondition: [
        'Burnt',
        'Cut',
        'Untouched',
        'Decapitated',
        'Decaying'
        ],
        hintOnCorpse: [
        'Cut on Chest',
        'Unidentified Piece of Hair',
        'Blood on Clothing',
        'Foam in Mouth',
        'Eyes Bloodshot'
        ],
        motiveOfCrime: [
        'Victim Owed Money',
        'Victim Previously Dated',
        'Robbery Gone Wrong',
        'Unknown at the Time',
        'Victim Involved in Rival Gang'
        ],
        durationOfCrime: [
        'Under Two Minutes',
        'Three Days',
        'Seven Hours',
        'About 5 Seconds',
        '45 Minutes'
        ],
        evidenceLeftBehind: [
        'Murder Weapon',
        'Note Stating the Reason',
        'Initials In Blood',
        'Different Colored Hair on Floor',
        'Getaway Vehicle'
        ],
        victimsClothes: [
        'Winter Jacket with Blue Jeans',
        'T-Shirt and Shorts',
        'Pajamas',
        'Suit',
        'Windbreaker and Sweatpants'
        ],
        suddenIncident: [
        'Seemed to be Pre-Planned',
        'Struggle Appeared to Have Lasted Hours',
        'Incident Seems Random',
        'Over Almost Immediately',
        'Occured Over a Few Days'
        ],
        victimsBuild: [
        'Short and Stocky',
        'Long and Lengthy',
        'Overweight and Tall',
        'Small and Thin-Framed',
        'Average Height and Normal Weight'
        ],
        victimsExpression: [
        'Scared',
        'Smiling',
        'Shocked',
        'Content',
        'Frozen'
        ]
    })

function exit() {
    mongoose
        .disconnect()
        .then(() => console.log('Disconnected'))
        .catch((error) => console.log(error))
}

events.save().then(() => exit()).catch(error => console.log(error));


