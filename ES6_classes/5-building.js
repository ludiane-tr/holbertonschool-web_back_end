/* eslint-disable */
class Building {
    constructor(sqft) {
      this._sqft = sqft;
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
