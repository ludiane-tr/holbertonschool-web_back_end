/* eslint-disable */
class Airport {
    constructor(name, code) {
      this._name = name;
      this._code = code;
    }
  
    // Surcharge de la méthode toString pour afficher [object CODE]
    toString() {
      return `[object ${this._code}]`;
    }
  }
  
  export default Airport;
  