class Currency {
    constructor(code, name) {
      this._code = code;  // Stocke le code de la monnaie
      this._name = name;  // Stocke le nom de la monnaie
    }
  
    // Getter pour 'code'
    get code() {
      return this._code;
    }
  
    // Setter pour 'code'
    set code(value) {
      this._code = value;
    }
  
    // Getter pour 'name'
    get name() {
      return this._name;
    }
  
    // Setter pour 'name'
    set name(value) {
      this._name = value;
    }
  
    // Méthode 'displayFullCurrency' qui renvoie les attributs dans le format "name (code)"
    displayFullCurrency() {
      return `${this._name} (${this._code})`;
    }
  }
  
  export default Currency;
  