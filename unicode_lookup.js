const entities = {
  a: "&#97;",
  b: "&#98;",
  c: "&#99;",
  d: "&#100;",
  e: "&#101;",
  f: "&#102;",
  g: "&#103;",
  h: "&#104;",
  i: "&#105;",
  j: "&#106;",
  k: "&#107;",
  l: "&#108;",
  m: "&#109;",
  n: "&#110;",
  o: "&#111;",
  p: "&#112;",
  q: "&#113;",
  r: "&#114;",
  s: "&#115;",
  t: "&#116;",
  u: "&#117;",
  v: "&#118;",
  w: "&#119;",
  x: "&#120;",
  y: "&#121;",
  z: "&#122;",
  0: "&#48;",
  1: "&#49;",
  2: "&#50;",
  3: "&#51;",
  4: "&#52;",
  5: "&#53;",
  6: "&#54;",
  7: "&#55;",
  8: "&#56;",
  9: "&#57;"
};

module.exports = function(str, useUnicode = true) {
  let uni = '';
  if (useUnicode) {
    let unicode = str.charCodeAt(0).toString(16).toUpperCase();
    while (unicode.length < 4) {
      unicode = '0' + unicode;
    }
    unicode = '\\u' + unicode;
    uni += unicode;
  } else {
    uni += entities[str];
  }

  return uni;
}

