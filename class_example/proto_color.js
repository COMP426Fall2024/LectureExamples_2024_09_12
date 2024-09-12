let Color = function (r, g, b) {

    this.getRed = () => r;
    this.getGreen = () => g;
    this.getBlue = () => b;

    this.setRed = (v) => {
        r = Color.checkAndClamp(v);
    }

    this.setGreen = (v) => {
        g = Color.checkAndClamp(v);
    }

    this.setBlue = (v) => {
        b = Color.checkAndClamp(v);
    }

    let makeHex = (value) => {
        let hex_str = value.toString(16);
        return ((hex_str.length < 2) ? "0" : "") + hex_str;
    };

    this.getHexRed = () => makeHex(r);
    this.getHexGreen = () => makeHex(g);
    this.getHexBlue = () => makeHex(b);

}

Color.checkAndClamp = (value) => {
    if (!value instanceof Number) {
        throw new Error("Value is not numeric");
    }
    if (isNaN(value) || !isFinite(value)) {
        throw new Error("Value is not legal");
    }
    return (value < 0 ? 0 : (value > 255 ? 255 : value));
}

Color.prototype.toHexString = function () {
    return `#${this.getHexRed()}${this.getHexGreen()}${this.getHexBlue()}`;
}

Color.prototype.equals = function (other) {
    return (this.getRed() == other.getRed()) && 
           (this.getGreen() == other.getGreen()) &&
           (this.getBlue() == other.getBlue());
}

let c1 = new Color(23, 245, 2);
let c2 = new Color(23, 245, 2);
let c3 = new Color(54, 78, 212);

console.log(c1.toHexString());
console.log(c1.equals(c2));

c3.setRed(-4);
console.log(c3.toHexString());

c3.setRed(7/0);

