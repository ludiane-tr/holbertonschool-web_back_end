/* eslint-disable */
class Building {
    constructor(sqft) {
        this._sqft = sqft;
        // Vérifie si la classe dérivée a bien défini evacuationWarningMessage
        if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
            throw new Error('Class extending Building must override evacuationWarningMessage');
        }
    }

    // Getter pour sqft
    get sqft() {
        return this._sqft;
    }
}

export default Building;
