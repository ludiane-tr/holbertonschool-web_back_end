/* eslint-disable */
import Building from './5-building.js';

class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
        super(sqft); // Appel du constructeur de la classe parente (Building)
        this._floors = floors;
    }

    // Getter pour floors
    get floors() {
        return this._floors;
    }

    // Surcharge de la méthode evacuationWarningMessage
    evacuationWarningMessage() {
        return `Evacuate slowly the ${this._floors} floors`;
    }
}

export default SkyHighBuilding;
