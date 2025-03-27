/* eslint-disable */
class HolbertonClass {
    constructor(size, location) {
      this._size = size;
      this._location = location;
    }
  
    // Cast en Number => retourne la taille (size)
    valueOf() {
      return this._size;
    }
  
    // Cast en String => retourne la localisation (location)
    toString() {
      return this._location;
    }
  }
  
  export default HolbertonClass;
  