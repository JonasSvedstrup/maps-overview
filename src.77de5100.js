// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"data/maps.json":[function(require,module,exports) {
module.exports = [{
  "name": "Foggy Hills",
  "dlc": "Vanilla",
  "theme": "European",
  "buildableArea": 74,
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "milestones": [400, 800, 1300, 2200, 4200, 6500, 8500, 14000, 17000, 28000, 36000, 55000, 65000],
  "hasImages": true
}, {
  "name": "Grand River",
  "dlc": "Vanilla",
  "theme": "European",
  "buildableArea": 84,
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "milestones": [360, 750, 1200, 2200, 4600, 7500, 10000, 17000, 22000, 36000, 48000, 70000, 90000],
  "hasImages": true
}, {
  "name": "Green Plains",
  "dlc": "Vanilla",
  "theme": "Boreal",
  "buildableArea": 74,
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "milestones": [500, 1000, 1500, 2600, 5500, 7500, 11000, 16000, 20000, 32000, 44000, 65000, 80000],
  "hasImages": true
}, {
  "name": "Islands",
  "dlc": "Vanilla",
  "theme": "Temperate",
  "buildableArea": 74,
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "milestones": [400, 800, 1200, 2200, 4200, 6500, 8500, 14000, 17000, 26000, 36000, 55000, 65000],
  "hasImages": true
}, {
  "name": "Lagoon Shore",
  "dlc": "Vanilla",
  "theme": "Tropical",
  "buildableArea": 56,
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "milestones": [460, 900, 1400, 2400, 4800, 7000, 10000, 16000, 19000, 30000, 42000, 60000, 75000],
  "hasImages": true
}, {
  "name": "Riverrun",
  "dlc": "Vanilla",
  "theme": "Boreal",
  "buildableArea": 74,
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "milestones": [460, 900, 1400, 2600, 5500, 8000, 11000, 18000, 22000, 36000, 48000, 70000, 90000],
  "hasImages": true
}, {
  "name": "Sandy Beach",
  "dlc": "Vanilla",
  "theme": "Tropical",
  "buildableArea": 63,
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "milestones": [500, 1000, 1500, 2600, 4800, 7000, 9500, 15000, 18000, 28000, 38000, 55000, 70000],
  "hasImages": true
}, {
  "name": "Shady Strands",
  "dlc": "Vanilla",
  "theme": "Temperate",
  "buildableArea": 57,
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "milestones": [440, 900, 1400, 2400, 4600, 7000, 9500, 15000, 19000, 30000, 40000, 60000, 75000],
  "hasImages": true
}, {
  "name": "Two Rivers",
  "dlc": "Vanilla",
  "theme": "Temperate",
  "buildableArea": 78,
  "connections": {
    "highway": true,
    "railway": true,
    "ship": false,
    "air": true
  },
  "milestones": [420, 850, 1300, 2400, 4600, 7000, 9500, 16000, 20000, 32000, 44000, 65000, 80000],
  "hasImages": true
}, {
  "name": "Black Woods",
  "dlc": "Vanilla",
  "theme": "Boreal",
  "buildableArea": 69,
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "milestones": [320, 650, 1000, 1800, 3600, 5500, 7500, 12000, 15000, 24000, 34000, 48000, 60000],
  "hasImages": true
}, {
  "name": "Cliffside Bay",
  "dlc": "Vanilla",
  "theme": "European",
  "buildableArea": 53,
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "milestones": [400, 800, 1300, 2200, 4200, 6500, 8500, 14000, 17000, 28000, 36000, 55000, 65000],
  "hasImages": true
}, {
  "name": "Diamond Coast",
  "dlc": "Vanilla",
  "theme": "Tropical",
  "buildableArea": 69,
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "milestones": [500, 1000, 1600, 2600, 5000, 7500, 10000, 16000, 20000, 30000, 42000, 60000, 75000],
  "hasImages": true
}, {
  "name": "Frosty Rivers",
  "dlc": "Snowfall",
  "theme": "Winter",
  "buildableArea": 56,
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "milestones": [380, 60000],
  "hasImages": true
}, {
  "name": "Frozenshire",
  "dlc": "Snowfall",
  "theme": "Winter",
  "buildableArea": 51,
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "milestones": [440, 850, 1300, 2400, 4400, 6500, 9000, 14000, 18000, 28000, 38000, 55000, 70000],
  "hasImages": true
}, {
  "name": "Icy Islands",
  "dlc": "Snowfall",
  "theme": "Winter",
  "buildableArea": 59,
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "milestones": [340, 650, 1100, 1800, 3600, 5500, 7500, 13000, 16000, 26000, 34000, 50000, 65000],
  "hasImages": false
}, {
  "name": "Snowy Coasts",
  "dlc": "Snowfall",
  "theme": "Winter",
  "buildableArea": 68,
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "milestones": [440, 850, 1300, 2400, 4400, 7000, 9000, 15000, 18000, 28000, 40000, 60000, 70000],
  "hasImages": false
}, {
  "name": "Winter Hills",
  "dlc": "Snowfall",
  "theme": "Winter",
  "buildableArea": 68,
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "milestones": [500, 1000, 1500, 2600, 5000, 7500, 10000, 16000, 20000, 32000, 44000, 65000, 80000],
  "hasImages": false
}, {
  "name": "Prussian Peaks",
  "dlc": "Natural Disasters",
  "theme": "Boreal",
  "buildableArea": 52,
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "milestones": [320, 60000],
  "hasImages": false
}, {
  "name": "The Archipelago",
  "dlc": "Natural Disasters",
  "theme": "Tropical",
  "buildableArea": 21,
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "milestones": [120, 20000],
  "hasImages": false
}, {
  "name": "The Dust Bowl",
  "dlc": "Natural Disasters",
  "theme": "Temperate",
  "buildableArea": 82,
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "milestones": [440, 90000],
  "hasImages": false
}, {
  "name": "Arid Plains",
  "dlc": "Mass Transit",
  "buildableArea": 79,
  "theme": "Temperate",
  "milestones": [500, 90000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Regal Hills",
  "dlc": "Mass Transit",
  "buildableArea": 72,
  "theme": "European",
  "milestones": [460, 80000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Seven Lakes",
  "dlc": "Mass Transit",
  "buildableArea": 81,
  "theme": "Boreal",
  "milestones": [380, 75000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Eden Valley",
  "dlc": "Green Cities",
  "buildableArea": 79,
  "theme": "Temperate",
  "milestones": [440, 85000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Garden Rivers",
  "dlc": "Green Cities",
  "buildableArea": 80,
  "theme": "Tropical",
  "milestones": [480, 75000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Lavender Lake",
  "dlc": "Green Cities",
  "buildableArea": 75,
  "theme": "Boreal",
  "milestones": [420, 90000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Cavern Coast",
  "dlc": "Parklife",
  "buildableArea": 61,
  "theme": "Tropical",
  "milestones": [400, 70000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": false,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Honu Island",
  "dlc": "Parklife",
  "buildableArea": 45,
  "theme": "Tropical",
  "milestones": [380, 36000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Mountain Meadows",
  "dlc": "Parklife",
  "buildableArea": 69,
  "theme": "European",
  "milestones": [360, 90000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Pine Rivers",
  "dlc": "Parklife",
  "buildableArea": 84,
  "theme": "Boreal",
  "milestones": [500, 85000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": false,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Windfield",
  "dlc": "Parklife",
  "buildableArea": 65,
  "theme": "Temperate",
  "milestones": [480, 90000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Green Peaks",
  "dlc": "Industries",
  "buildableArea": 54,
  "theme": "European",
  "milestones": [460, 75000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Marble Canyon",
  "dlc": "Industries",
  "buildableArea": 69,
  "theme": "Temperate",
  "milestones": [460, 75000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": false,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Pearl Bay",
  "dlc": "Industries",
  "buildableArea": 58,
  "theme": "Tropical",
  "milestones": [340, 70000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": true
}, {
  "name": "Twin Fjords",
  "dlc": "Industries",
  "buildableArea": 69,
  "theme": "Boreal",
  "milestones": [440, 70000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": false
  },
  "hasImages": false
}, {
  "name": "Woodgarden",
  "dlc": "Industries",
  "buildableArea": 62,
  "theme": "Boreal",
  "milestones": [340, 60000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": false,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Murky Coast",
  "dlc": "Campus",
  "buildableArea": 71,
  "theme": "Boreal",
  "milestones": [460, 70000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": true
}, {
  "name": "Northwood Hills",
  "dlc": "Campus",
  "buildableArea": 72,
  "theme": "European",
  "milestones": [420, 75000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": false,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Roslyn Peninsula",
  "dlc": "Campus",
  "buildableArea": 56,
  "theme": "Tropical",
  "milestones": [460, 65000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": true
}, {
  "name": "Wolf Creek",
  "dlc": "Campus",
  "buildableArea": 60,
  "theme": "Boreal",
  "milestones": [500, 80000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": false,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Marin Bay",
  "dlc": "Campus",
  "buildableArea": 61,
  "theme": "Temperate",
  "milestones": [300, 55000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": true
}, {
  "name": "Azure Gulf",
  "dlc": "Sunset Harbor",
  "buildableArea": 65,
  "theme": "Temperate",
  "milestones": [460, 75000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Crater Falls",
  "dlc": "Sunset Harbor",
  "buildableArea": 46,
  "theme": "Boreal",
  "milestones": [420, 60000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": false,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Desert Oasis",
  "dlc": "Sunset Harbor",
  "buildableArea": 76,
  "theme": "Tropical",
  "milestones": [500, 90000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": false,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Fisher Enclave",
  "dlc": "Sunset Harbor",
  "buildableArea": 45,
  "theme": "European",
  "milestones": [300, 70000],
  "connections": {
    "highway": true,
    "railway": false,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Swamplands",
  "dlc": "Sunset Harbor",
  "buildableArea": 71,
  "theme": "Boreal",
  "milestones": [380, 85000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": true
}, {
  "name": "Asanu Beach",
  "dlc": "Airports",
  "buildableArea": 75,
  "theme": "Tropical",
  "milestones": [500, 90000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Hanami Bay",
  "dlc": "Airports",
  "buildableArea": 70,
  "theme": "Temperate",
  "milestones": [550, 80000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Noyou Port",
  "dlc": "Airports",
  "buildableArea": 80,
  "theme": "Boreal",
  "milestones": [480, 90000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Cape Apple",
  "dlc": "Plazas and Promenades",
  "buildableArea": 84,
  "theme": "Temperate",
  "milestones": [340, 55000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Coastal Gem",
  "dlc": "Plazas and Promenades",
  "buildableArea": 57,
  "theme": "Tropical",
  "milestones": [420, 70000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Gondola Islands",
  "dlc": "Plazas and Promenades",
  "buildableArea": 34,
  "theme": "European",
  "milestones": [460, 50000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Oracle Lake",
  "dlc": "Plazas and Promenades",
  "buildableArea": 78,
  "theme": "Boreal",
  "milestones": [480, 80000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Splitz Tributary",
  "dlc": "Plazas and Promenades",
  "buildableArea": 89,
  "theme": "European",
  "milestones": [480, 90000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Gray Waters",
  "dlc": "Financial Districts",
  "buildableArea": 56,
  "theme": "Boreal",
  "milestones": [400, 60000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Narrow Passage",
  "dlc": "Financial Districts",
  "buildableArea": 49,
  "theme": "Temperate",
  "milestones": [360, 46000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "River Terrace",
  "dlc": "Financial Districts",
  "buildableArea": 64,
  "theme": "Boreal",
  "milestones": [420, 60000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Windblown Coast",
  "dlc": "Financial Districts",
  "buildableArea": 66,
  "theme": "Tropical",
  "milestones": [500, 75000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Wyvern Pass",
  "dlc": "Financial Districts",
  "buildableArea": 66,
  "theme": "Tropical",
  "milestones": [380, 70000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Coastal Flatland",
  "dlc": "Hotels & Retreats",
  "buildableArea": 57,
  "theme": "Temperate",
  "milestones": [380, 48000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Emerald Cliffs",
  "dlc": "Hotels & Retreats",
  "buildableArea": 72,
  "theme": "European",
  "milestones": [480, 80000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Maze Valley",
  "dlc": "Hotels & Retreats",
  "buildableArea": 74,
  "theme": "European",
  "milestones": [380, 70000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Shifting Sands",
  "dlc": "Hotels & Retreats",
  "buildableArea": 72,
  "theme": "Tropical",
  "milestones": [550, 80000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Weaving Waters",
  "dlc": "Hotels & Retreats",
  "buildableArea": 84,
  "theme": "European",
  "milestones": [460, 80000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Biomes Valley",
  "dlc": "Map Pack 1",
  "buildableArea": 73,
  "theme": "European",
  "milestones": [500, 85000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": false,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Desert Pass",
  "dlc": "Map Pack 1",
  "buildableArea": 89,
  "theme": "European",
  "milestones": [440, 90000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": false,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Farmland Flats",
  "dlc": "Map Pack 1",
  "buildableArea": 90,
  "theme": "Temperate",
  "milestones": [550, 95000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": false,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Meandering River",
  "dlc": "Map Pack 1",
  "buildableArea": 83,
  "theme": "Boreal",
  "milestones": [440, 85000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Mountain Taper",
  "dlc": "Map Pack 1",
  "buildableArea": 78,
  "theme": "Temperate",
  "milestones": [480, 90000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "River Valley Plain",
  "dlc": "Map Pack 1",
  "buildableArea": 59,
  "theme": "Boreal",
  "milestones": [440, 80000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": false,
    "air": true
  },
  "hasImages": false
}, {
  "name": "The Eyeland",
  "dlc": "Map Pack 1",
  "buildableArea": 62,
  "theme": "Tropical",
  "milestones": [500, 65000],
  "connections": {
    "highway": true,
    "railway": false,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Tropical Pass",
  "dlc": "Map Pack 1",
  "buildableArea": 68,
  "theme": "Tropical",
  "milestones": [500, 70000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Bay of Rivers",
  "dlc": "Map Pack 2",
  "buildableArea": 48,
  "theme": "Temperate",
  "milestones": [480, 75000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Desert Valley",
  "dlc": "Map Pack 2",
  "buildableArea": 89,
  "theme": "European",
  "milestones": [480, 90000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": false,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Fertile Desert",
  "dlc": "Map Pack 2",
  "buildableArea": 79,
  "theme": "European",
  "milestones": [550, 95000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": false,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Hilly Strait",
  "dlc": "Map Pack 2",
  "buildableArea": 26,
  "theme": "Boreal",
  "milestones": [320, 60000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Land of the Isles",
  "dlc": "Map Pack 2",
  "buildableArea": 48,
  "theme": "Temperate",
  "milestones": [380, 60000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Mountain Plain",
  "dlc": "Map Pack 2",
  "buildableArea": 70,
  "theme": "Boreal",
  "milestones": [480, 85000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "River Delta",
  "dlc": "Map Pack 2",
  "buildableArea": 78,
  "theme": "Boreal",
  "milestones": [400, 70000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "River Plains",
  "dlc": "Map Pack 2",
  "buildableArea": 81,
  "theme": "European",
  "milestones": [500, 80000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Table Mountains",
  "dlc": "Map Pack 2",
  "buildableArea": 77,
  "theme": "European",
  "milestones": [400, 80000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Winding River",
  "dlc": "Map Pack 2",
  "buildableArea": 46,
  "theme": "Tropical",
  "milestones": [500, 65000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Caldera County",
  "dlc": "Map Pack 3",
  "buildableArea": 83,
  "theme": "Temperate",
  "milestones": [550, 85000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": false,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Expedition Harbor",
  "dlc": "Map Pack 3",
  "buildableArea": 47,
  "theme": "Boreal",
  "milestones": [340, 55000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Fondue Lake",
  "dlc": "Map Pack 3",
  "buildableArea": 60,
  "theme": "European",
  "milestones": [420, 60000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Karstlands",
  "dlc": "Map Pack 3",
  "buildableArea": 68,
  "theme": "Tropical",
  "milestones": [360, 65000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": false,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Milestone Valley",
  "dlc": "Map Pack 3",
  "buildableArea": 83,
  "theme": "Temperate",
  "milestones": [480, 90000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": false,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Nordheim",
  "dlc": "Map Pack 3",
  "buildableArea": 62,
  "theme": "Boreal",
  "milestones": [480, 80000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Orca Sound",
  "dlc": "Map Pack 3",
  "buildableArea": 39,
  "theme": "European",
  "milestones": [180, 36000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Promise Island",
  "dlc": "Map Pack 3",
  "buildableArea": 46,
  "theme": "Tropical",
  "milestones": [480, 48000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Redcliff Reservoir",
  "dlc": "Map Pack 3",
  "buildableArea": 64,
  "theme": "European",
  "milestones": [380, 55000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": false,
    "air": true
  },
  "hasImages": false
}, {
  "name": "Tranquility Cove",
  "dlc": "Map Pack 3",
  "buildableArea": 44,
  "theme": "Temperate",
  "milestones": [340, 65000],
  "connections": {
    "highway": true,
    "railway": true,
    "ship": true,
    "air": true
  },
  "hasImages": false
}];
},{}],"index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
exports.__esModule = true;
var maps_json_1 = __importDefault(require("./data/maps.json"));
console.log(maps_json_1["default"]);
},{"./data/maps.json":"data/maps.json"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52425" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/src.77de5100.js.map