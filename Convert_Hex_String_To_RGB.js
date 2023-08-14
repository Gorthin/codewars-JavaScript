// When working with color values it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. Implement a function that meets these requirements:

// Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
// Returns a Map<String, int> with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255
// Note: your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF")

// Example
// "#FF9933" --> {r: 255, g: 153, b: 51}


function hexStringToRGB(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  function hexStringToRGB(h) {
    return {
      r: parseInt(h.slice(1,3), 16),
      g: parseInt(h.slice(3,5), 16),
      b: parseInt(h.slice(5,7), 16)
    };  
  }


  const hexStringToRGB = str => {
    const [r, g, b] = str.match(/\w{2}/g).map(x => parseInt(x, 16));
    return { r, g, b };
  }