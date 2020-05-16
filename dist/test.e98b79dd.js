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
})({"test.js":[function(require,module,exports) {
var string = "\n  .skin * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  .skin *::before,\n    .skin *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  .skin {\n    position: relative;\n    background: #ffe600;\n    height: 100vh;\n  }\n  .nose {\n  }\n  @keyframes wave {\n    0% {\n      transform: rotate(0deg);\n    }\n    33% {\n      transform: rotate(5deg);\n    }\n    66% {\n      transform: rotate(-5deg);\n    }\n    100% {\n      transform: rotate(0deg);\n    }\n  }\n  .san:hover {\n    transform-origin: center bottom;\n    animation: wave 200ms infinite linear;\n  }\n  .san {\n    border: 10px solid red;\n    border-color: black transparent transparent;\n    border-bottom: none;\n    position: absolute;\n    width: 0px;\n    height: 0px;\n    left: 50%;\n    top: 180px;\n    margin-left: -10px;\n  }\n  .yuan {\n    position: absolute;\n    width: 20px;\n    height: 6px;\n    top: -16px;\n    left: -10px;\n    border-radius: 10px 10px 0 0;\n    background: black;\n  }\n  .eye {\n    border: 2px solid black;\n    width: 62px;\n    height: 62px;\n    position: absolute;\n    left: 50%;\n    top: 140px;\n    transform: translateX(-50%);\n    border-radius: 50%;\n    background: #2e2e2e;\n  }\n  .eye::before {\n    content: \"\";\n    display: block;\n    border: 2px solid black;\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    position: absolute;\n    left: 8px;\n    background: #fff;\n  }\n  .left {\n    margin-left: -130px;\n  }\n  .right {\n    margin-left: 130px;\n  }\n  .upMouth {\n    width: 200px;\n    height: 30px;\n    position: absolute;\n    left: 50%;\n    margin-left: -100px;\n    top: 210px;\n    overflow: hidden;\n    z-index: 1;\n  }\n  \n  .mouth .upMouth .lipLeft {\n    border: 3px solid black;\n    width: 90px;\n    height: 40px;\n    border-radius: 0 0 0 50px;\n    border-color: transparent transparent transparent black;\n    transform: rotate(-22deg);\n    position: absolute;\n    top: -19px;\n    left: 9px;\n    background: #ffe600;\n  }\n  .mouth .upMouth .lipRight {\n    border: 3px solid black;\n    width: 90px;\n    height: 40px;\n    border-radius: 0 0 50px 0;\n    border-color: transparent black transparent transparent;\n    transform: rotate(22deg);\n    position: absolute;\n    top: -19px;\n    right: 9px;\n    background: #ffe600;\n    z-index: 1;\n  }\n  .mouth .upMouth .content {\n    content: \"\";\n    display: block;\n    border: 2px solid black;\n    width: 0px;\n    height: 0px;\n    background: black;\n    position: absolute;\n    left: 50%;\n    margin-left: -2.82px;\n    top: 1px;\n    z-index: 2;\n  }\n  .mouth .downMouth {\n    width: 200px;\n    height: 180px;\n    position: absolute;\n    left: 50%;\n    margin-left: -100px;\n    top: 210px;\n    overflow: hidden;\n  }\n  .mouth .downMouth .yuan1 {\n    border: 3px solid black;\n    height: 1000px;\n    width: 200px;\n    position: absolute;\n    left: 50%;\n    margin-left: -100px;\n    bottom: 0;\n    border-radius: 100px / 500px;\n    background: #9b000a;\n    overflow: hidden;\n  }\n  .mouth .downMouth .yuan1 .yuan2 {\n    background: #ff485f;\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    left: -3px;\n    bottom: -56px;\n    border-radius: 50%;\n  }\n  .face {\n    border: 3px solid black;\n    width: 88px;\n    height: 88px;\n    position: absolute;\n    left: 50%;\n    margin-left: -44px;\n    top: 250px;\n    border-radius: 50%;\n    background: #ff0000;\n    z-index: 3;\n  }\n  .face.left {\n    transform: translateX(-185px);\n  }\n  .face.right {\n    transform: translateX(185px);\n  }\n  .face > img {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n  }\n  .face.left > img {\n    transform: rotateY(180deg);\n    transform-origin: 0 0;\n  }\n\n";
var n = 1;
var demo = document.querySelector("#demo");
var demo2 = document.querySelector("#demo2");
demo.innerText = string.substr(0, n);
demo2.innerHTML = string.substr(0, n);

var run = function run() {
  n += 1;

  if (n > string.length) {
    window.clearInterval(st);
    return;
  }

  demo.innerText = string.substr(0, n);
  demo2.innerHTML = string.substr(0, n);
  demo.scrollTop = demo.scrollHeight;
};

var stop = function stop() {
  window.clearInterval(st);
};

var time = 100;

var play = function play() {
  return setInterval(run, time);
};

var st = play();

document.querySelector("#btnPlay").onclick = function () {
  stop();
  st = play();
};

document.querySelector("#btnStop").onclick = stop;

document.querySelector("#btnSlow").onclick = function () {
  stop();
  time = 200;
  st = play();
};

document.querySelector("#btnNormal").onclick = function () {
  stop();
  time = 100;
  st = play();
};

document.querySelector("#btnFast").onclick = function () {
  stop();
  time = 0;
  st = play();
};
},{}],"C:/Users/binghao/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "9302" + '/');

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
      }); // Enable HMR for CSS by default.

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
  overlay.id = OVERLAY_ID; // html encode message and stack trace

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
},{}]},{},["C:/Users/binghao/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map