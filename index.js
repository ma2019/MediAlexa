'use strict'
var KEY_CURRENT_TYPE = "messagetype";
var KEY_CURRENT_NAME = "name";
var KEY_CURRENT_PHONE = "phone";
var KEY_CURRENT_MESSAGE = "message";

var APP_ID = "amzn1.ask.skill.6d052ea4-3c93-4306-9399-b0be8dc8060c"; // Replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var AlexaSkill = require('./AlexaSkill');
var https = require('https');
var helpText = "HELLO YOU FUNKY MOTHER FUNKERS";
var helpTextAdd = "Enigma is a quiz that gives you interesting information about some great places around the world.";
var helpNameText = "To who I should send the message?";
var helpMessageText = "What message I should send?";

var ok = 0;



var TM = function () {
    AlexaSkill.call(this, APP_ID);
};

 
// Extend AlexaSkill.
TM.prototype = Object.create(AlexaSkill.prototype);
TM.prototype.constructor = TM;

TM.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    console.log("Session Started");
};


TM.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    var speechOutput = "Welcome, you have started medivoice" + helpText; // Start text.
    var repromptText = helpTextAdd;
    
    response.ask(speechOutput, repromptText);
};


TM.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    console.log("Session Closed");
};


TM.prototype.intentHandlers = {
    "medivoiceIntent": function (intent, session, response) {
        var medicineList = ["Paracetamol", "Nurofen", "Lemsip"];
        const cardTitle = intent.name;
        
      const medicineSlot = intent.slots.Medicine;
      let repromptText = '';
      let sessionAttributes = {};
      const shouldEndSession = false;
      let speechOutput = '';
    
    var medicineInput = medicineSlot.value.toLowerCase();
    
    
    
    
    if (medicineInput === "paracetamol") {
        const medicine = medicineSlot.value;
        //sessionAttributes = createFavoriteColorAttributes(favoriteColor);
        speechOutput = `Paracetamol contains blah blah which helps with blah and blah which helps with blah `;
        //repromptText = "You can ask me your favorite color by saying, what's my favorite color?";
    } else {
        speechOutput = "I'm not sure which medicine that is. Please try again.";
        //repromptText = "I'm not sure what your favorite color is. You can tell me your " +
         //   'favorite color by saying, my favorite color is red';
    }
    response.tell(speechOutput);
        
    }
};


// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the TM skill.
    var tm = new TM();
    tm.execute(event, context);
};