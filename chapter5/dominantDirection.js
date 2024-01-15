//My Solution

var SCRIPTS = [
  {
    name: "Arabic",
    ranges: [
      [1536, 1541],
      [1542, 1548],
      [1549, 1563],
      [1564, 1565],
      [1566, 1567],
      [1568, 1600],
      [1601, 1611],
      [1622, 1648],
      [1649, 1757],
      [1758, 1792],
      [1872, 1920],
      [2208, 2229],
      [2230, 2238],
      [2260, 2274],
      [2275, 2304],
      [64336, 64450],
      [64467, 64830],
      [64848, 64912],
      [64914, 64968],
      [65008, 65022],
      [65136, 65141],
      [65142, 65277],
      [69216, 69247],
      [126464, 126468],
      [126469, 126496],
      [126497, 126499],
      [126500, 126501],
      [126503, 126504],
      [126505, 126515],
      [126516, 126520],
      [126521, 126522],
      [126523, 126524],
      [126530, 126531],
      [126535, 126536],
      [126537, 126538],
      [126539, 126540],
      [126541, 126544],
      [126545, 126547],
      [126548, 126549],
      [126551, 126552],
      [126553, 126554],
      [126555, 126556],
      [126557, 126558],
      [126559, 126560],
      [126561, 126563],
      [126564, 126565],
      [126567, 126571],
      [126572, 126579],
      [126580, 126584],
      [126585, 126589],
      [126590, 126591],
      [126592, 126602],
      [126603, 126620],
      [126625, 126628],
      [126629, 126634],
      [126635, 126652],
      [126704, 126706],
    ],
    direction: "rtl",
    year: 400,
    living: true,
    link: "https://en.wikipedia.org/wiki/Arabic_script",
  },

  {
    name: "Latin",
    ranges: [
      [65, 91],
      [97, 123],
      [170, 171],
      [186, 187],
      [192, 215],
      [216, 247],
      [248, 697],
      [736, 741],
      [7424, 7462],
      [7468, 7517],
      [7522, 7526],
      [7531, 7544],
      [7545, 7615],
      [7680, 7936],
      [8305, 8306],
      [8319, 8320],
      [8336, 8349],
      [8490, 8492],
      [8498, 8499],
      [8526, 8527],
      [8544, 8585],
      [11360, 11392],
      [42786, 42888],
      [42891, 42927],
      [42928, 42936],
      [42999, 43008],
      [43824, 43867],
      [43868, 43877],
      [64256, 64263],
      [65313, 65339],
      [65345, 65371],
    ],
    direction: "ltr",
    year: -700,
    living: true,
    link: "https://en.wikipedia.org/wiki/Latin_script",
  },
];

const characterScript = (code) =>
  SCRIPTS.find((script) =>
    script.ranges.some(([from, to]) => code >= from && code < to)
  ) || null;

const countBy = (items, groupName) => {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex((c) => c.name === name);

    if (known === -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
};

const dominantDirection = (text) => {
  const counted = countBy(
    text,
    (char) =>
      (characterScript(char.codePointAt(0)) || { direction: "none" }).direction
  ).filter(({ name }) => name !== "none");

  return counted.length === 0
    ? "ltr"
    : counted.reduce((a, b) => (a.count > b.count ? a : b)).name;
};

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl


//Author's Solution

function dominantDirection2(text) {
    let counted = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }).filter(({name}) => name != "none");
  
    if (counted.length == 0) return "ltr";
  
    return counted.reduce((a, b) => a.count > b.count ? a : b).name;
  }
  
  console.log(dominantDirection2("Hello!"));
  // → ltr
  console.log(dominantDirection2("Hey, مساء الخير"));
  // → rtl