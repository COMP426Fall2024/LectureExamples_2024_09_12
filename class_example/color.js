
class Color {

    // Private fields
    #red
    #green
    #blue

    // Constructor

    constructor(r, g, b) {
        this.#red = r;
        this.#green = g;
        this.#blue = b;
    }

    // Property syntax getters
    get red() {
        return this.#red;
    }

    set red(v) {
        this.#red = Color.#checkAndClamp(v);
    }
    
    get green() {
        return this.#green;
    }

    set green(v) {
        this.#green = Color.#checkAndClamp(v);
    }

    get blue() {
        return this.#blue;
    }

    set blue(v) {
        this.#blue = Color.#checkAndClamp(v);
    }

    get hexRed() {
        return this.#makeHex(this.red);
    }

    get hexGreen() {
        return this.#makeHex(this.green);
    }

    get hexBlue() {
        return this.#makeHex(this.blue);
    }

    // Private methods
    static #checkAndClamp (value) {
        if (!value instanceof Number) {
            throw new Error("Value is not numeric");
        }
        if (isNaN(value) || !isFinite(value)) {
            throw new Error("Value is not legal");
        }
        return (value < 0 ? 0 : (value > 255 ? 255 : value));
    }

    #makeHex (value) {
        let hex_str = value.toString(16);
        return ((hex_str.length < 2) ? "0" : "") + hex_str;
    }

    // Public methods
    toHexString() {
        return `#${this.hexRed}${this.hexGreen}${this.hexBlue}`;
    }

    equals(other) {
        return (this.#red == other.#red) && 
               (this.#green == other.#green) &&
               (this.#blue == other.#blue);
    }
}

let c1 = new Color(23, 245, 2);
let c2 = new Color(23, 245, 2);
let c3 = new Color(54, 78, 212);

console.log(c1.toHexString());
console.log(c1.equals(c2));

c3.red = -4;
console.log(c3.toHexString());

c3.red = (7/0);

