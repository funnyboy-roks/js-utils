const fs = require('fs');
const path = require('path');

const file = path.join('src', 'add.js');

let out = 'function add(x, y) {\n';

const n = 1000;

for(let x = 0; x < n; ++x) {
    for(let y = 0; y < n; ++y) {
        out += `if(x === ${x} && y === ${y}) {\nreturn ${x + y};\n}\n`;
    }
}

out += 'return -1;\n}';

fs.writeFileSync(file, out);