/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');
const ImagePath = "https://s3.us-east-2.amazonaws.com/marypic/Athena/";

const GetNewFactHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'GetNewFactIntent');
  },
  handle(handlerInput) {
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = GET_FACT_MESSAGE + randomFact.phonetic + randomFact.meaning;
    const textOutput = randomFact.rune + randomFact.meaning;
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, textOutput)
      .getResponse();
  },
};

const HelpHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(HELP_MESSAGE)
      .reprompt(HELP_REPROMPT)
      .getResponse();
  },
};

const ExitHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && (request.intent.name === 'AMAZON.CancelIntent'
        || request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(STOP_MESSAGE)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Odin is having trouble concentrating.  Try again later.')
     // .reprompt('Sorry, an error occurred.')
      .getResponse();
  },
};

const SKILL_NAME = 'Daily Rune';
const GET_FACT_MESSAGE = 'Here\'s your daily rune casting: ';
const HELP_MESSAGE = 'You can say open daily rune, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

const data = [
    { "rune": "Fehu.  ", "phonetic": "Fay-who.", "meaning": "Cattle, wealth. Possessions won or earned, earned income, luck. Abundance, financial strength in the present or near future. Sign of hope and plenty, success and happiness." },
    { "rune": "Uruz.  ", "phonetic": "Or-rooz.", "meaning": "A wild ox.  Physical strength and speed, untamed potential. A time of great energy and health. Freedom, energy, action, courage, strength, tenacity, understanding, wisdom. Sudden or unexpected changes (usually for the better)." },
    { "rune:": "Tpurizas.  ", "phonetic": "Thoor-ee-saz.", "meaning": "Thorn or a Giant. Reactive force, directed force of destruction and defense, conflict. Instinctual will, vital eroticism, regenerative catalyst. A tendency toward change. Catharsis, purging, cleansing fire." },
    { "rune": "Ansuz.  ", "phonetic": "Awn-sooze.", "meaning": "The ancestral god, Odin. A revealing message or insight, communication. Signals, inspiration, enthusiasm, speech, true vision, power of words and naming. Blessings, the taking of advice. Good health, harmony, truth, wisdom." },
    { "rune": "Raido. ", "phonetic": "Rye-though.", "meaning": "Wagon or chariot. Travel, both in physical terms and those of lifestyle direction. A journey, vacation, relocation, evolution, change of place or setting. Seeing a larger perspective. Seeing the right move for you to make and deciding upon it. Personal rhythm, world rhythm, dance of life." },
    { "rune": "Kanu. ", "phonetic": "Kane-awze.", "meaning": " Beacon or torch. Vision, revelation, knowledge, creativity, inspiration, technical ability. Vital fire of life, harnessed power, fire of transformation and regeneration. Power to create your own reality, the power of light. Open to new strength, energy, and power now. Passion, sexual love."},
    { "rune": "Gebo.  ", "phonetic": "Geh-boe.", "meaning": "Gift. Gifts, both in the sense of sacrifice and of generosity, indicating balance. All matters in relation to exchanges, including contracts, personal relationships and partnerships." },
    { "rune": "Wunjo.  ", "phonetic": "Voon-yoe.", "meaning": "Joy.  comfort, pleasure. Fellowship, harmony, prosperity. Ecstasy, glory, spiritual reward, but also the possibility of going over the top. If restrained, the meaning is general success and recognition of worth." },
    { "rune": "Hagall.  ", "phonetic": "Haw-gaw-laws.", "meaning": "Hail.  Wrath of nature, destructive, uncontrolled forces, especially the weather, or within the unconscious. Tempering, testing, trial. Controlled crisis, leading to completion, inner harmony." },
    { "rune": "Nauthiz.  ", "phonetic": "Now-these.", "meaning": "Need. Delays, restriction. Resistance leading to strength, innovation, need-fire (self-reliance). Distress, confusion, conflict, and the power of will to overcome them. Endurance, survival, determination. A time to exercise patience. Recognition of one's fate. Major self-initiated change. Face your fears." },
    { "rune": "Isa.  ", "phonetic": "Ee-saw.", "meaning": "Ice. A challenge or frustration. Psychological blocks to thought or activity, including grievances. Standstill, or a time to turn inward and wait for what is to come, or to seek clarity. This rune reinforces runes around it. Isa Merkstave " },
    { "rune": "Jera.  ", "phonetic": "Yare-awe.", "meaning": "A year, a good harvest. The results of earlier efforts are realized. A time of peace and happiness, fruitful season. It can break through stagnancy. Hopes and expectations of peace and prosperity. The promise of success earned. Life cycle, cyclical pattern of the universe. Everything changes, in its own time." },
    { "rune": "Eihwaz.  ", "phonetic": "Eye-wawz.", "Meaning": "Yew tree. Strength, reliability, dependability, trustworthiness. Enlightenment, endurance. Defense, protection. The driving force to acquire, providing motivation and a sense of purpose. Indicates that you have set your sights on a reasonable target and can achieve your goals. An honest man who can be relied upon." },
    { "rune": "Perthro.  ", "phonetic": "Pear-throw.", "meaning": "Lot cup. Uncertain meaning, a secret matter, a mystery, hidden things and occult abilities. Initiation, knowledge of one's destiny, knowledge of future matters, determining the future or your path. Pertaining to things feminine, feminine mysteries including female fertility. Good lot, fellowship and joy. Evolutionary change." },
    { "rune": "Algiz.  ", "phonetic": "All-geez.", "meaning": "Elk, protection. Protection, a shield. The protective urge to shelter oneself or others. Defense, warding off of evil, shield, guardian. Connection with the gods, awakening, higher life. It can be used to channel energies appropriately. Follow your instincts. Keep hold of success or maintain a position won or earned. " },
    { "rune": "Sowelo.  ", "phonetic": "Soe-vel-oh.", "meaning": " Success, goals achieved, honor. The life-force, health. A time when power will be available to you for positive changes in your life, victory, health, and success. Contact between the higher self and the unconscious. Wholeness, power, elemental force, sword of flame, cleansing fire." },
    { "rune": "Tiewaz.  ", "phonetic": "Tea-wawz", "meaning": "The sky god. Honor, justice, leadership and authority. Analysis, rationality. Knowing where one's true strengths lie. Willingness to self-sacrifice. Victory and success in any competition or in legal matters. " },
    { "rune": "Berkana.  ", "phonetic": "Bear-kawn-ah.", "meaning": "The birch-goddess.  Birth, general fertility, both mental and physical and personal growth, liberation. Regenerative power and light of spring, renewal, promise of new beginnings, new growth. Arousal of desire. A love affair or new birth. The prospering of an enterprise or venture." },
    { "rune": "Ehwaz.  ", "phonetic": "Ay-wawz.", "meaning": "Horse, two horses.  Transportation. May represent a horse, car, plane, boat or other vehicle. Movement and change for the better. Gradual development and steady progress are indicated. Harmony, teamwork, trust, loyalty. An ideal marriage or partnership. Confirmation beyond doubt the meanings of the runes around it." },
    { "rune": "Mannaz.  ", "phonetic": "Mawn-nawz.", "meaning": "Man, mankind.  The Self; the individual or the human race. Your attitude toward others and their attitudes towards you. Friends and enemies, social order. Intelligence, forethought, create, skill, ability. Divine structure, intelligence, awareness. Expect to receive some sort of aid or cooperation now. " },
    { "rune": "Laguz.  ", "phonetic": "Law-gooze.", "meaning": "Water, or a leek.  Flow, water, sea, a fertility source, the healing power of renewal. Life energy and organic growth. Imagination and psychic matters. Dreams, fantasies, mysteries, the unknown, the hidden, the deep, the underworld. Success in travel or acquisition, but with the possibility of loss." },
    { "rune": "Inguz.  ", "phonetic": "Ing-ooz.", "meaning": "Ing, the earth god. Male fertility, gestation, internal growth. Common virtues, common sense, simple strengths, family love, caring, human warmth, the home. Rest stage, a time of relief, of no anxiety. A time when all loose strings are tied and you are free to move in a new direction. Listen to yourself." },
    { "rune": "Dagaz.  ", "phonetic": "Daw-gauze.", "meaning": "Day or dawn. Breakthrough, awakening, awareness. Daylight clarity as opposed to nighttime uncertainty. A time to plan or embark upon an enterprise. The power of change directed by your own will, transformation. Hope/happiness, the ideal. Security and certainty. Growth and release. Balance point, the place where opposites meet." },
    { "rune": "Othala", "phonetic": "Oath-awe-law.", "meaning": "Ancestral property.  Inherited property or possessions, a house, a home. What is truly important to one. Group order, group prosperity. Land of birth, spiritual heritage, experience and fundamental values. Aid in spiritual and physical journeys. Source of safety, increase and abundance." }

];

const skillBuilder = Alexa.SkillBuilders.standard();

exports.handler = skillBuilder
  .addRequestHandlers(
    GetNewFactHandler,
    HelpHandler,
    ExitHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
