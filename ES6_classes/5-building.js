/* eslint-disable */
class Building {
    constructor(sqft) {
        if (new.target === Building) {
            throw new Error('Building is an abstract class and cannot be instantiated directly');
        }
        this._sqft = sqft;
        if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
            throw new Error('Class extending Building must override evacuationWarningMessage');
        }
    }

    // Getter pour sqft
    get sqft() {
        return this._sqft;
    }

    // Méthode abstraite à implémenter dans les sous-classes
    evacuationWarningMessage() {
        throw new Error('Class extending Building must override evacuationWarningMessage');
    }
}

export default Building;
