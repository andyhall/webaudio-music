!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";function a(e,t){return Math.floor(function(e,t){return e+(t-e)*Math.random()}(e,t))}function r(e){return e[a(0,e.length)]}function i(e,t,n){return Math.max(e,Math.min(n,t))}n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}))},function(e,t,n){var a=function(e){"use strict";if(!Function.bind||!Object.defineProperty)throw new Error("Prerequisite APIs not available.");var t=!1,n=[],a=Array.isArray,r="object",i=function(e){return e},o=function(e){return function(){try{return e.apply(this,arguments)}catch(e){console.error(e.stack?e.stack:e)}}};function s(e){return(e+"").replace(/[<>]/g,(function(e){return{">":"&gt;","<":"&lt;"}[e]}))}function l(e,t){for(var n=e.length,a=0;a<n;a++)t(e[a],a,e)}function c(e,t){l("pop push reverse shift sort splice unshift".split(" "),function(a){this[a]=function(){this.__dirty=!0;var r=u({},n[a].apply(this,arguments));return delete this.__dirty,e&&t.ready&&e(this),r}.bind(this)}.bind(this));var a=this.length;return Object.defineProperty(this,"length",{configurable:!1,enumerable:!0,set:function(e){if(!this.__dirty){var t=1*e;return a!==t&&(t>a?this.push.apply(this,new Array(t-a)):this.splice(t),a=t),e}a=e},get:function(){return a}}),this}function u(e,t){return t instanceof Object?(l(Object.getOwnPropertyNames(t),(function(n){var i=t[n];f.prototype[n]||"__callback"===n||(typeof i===r&&null!==i&&i instanceof Array?e[n]=[].map.call(i,(function(t){return t instanceof Object?u(e[n]||{},t):t})):typeof i!==r||null===i||a(i)||"[Object object]"!==i.toString()?e[n]=i:e[n]=u(e[n]||{},i))})),e):t}function f(n,h,p){if(!this||this===e)return new f(n,h);var v={context:p||e.document,mapping:h||{},callbacks:{},deferred:[],ready:!1,instance:this};return function n(h,p,v,d){if(d||(d=[]),v.ready&&p.__callback)return h;if(p instanceof f)return p;var m;try{var y=v.context||document;m=y.querySelectorAll.bind(y)}catch(e){}return l(Object.getOwnPropertyNames(p),(function(f){if("__callback"!==f){var y,g=p[f],b=[].slice.call(d),_=function(e){return s(e)},w=i;b.push(f);var k,x=v.mapping[b.join(".")];if(t&&console.log("key: %s / %s",f,b.join("."),x),x&&"[object Object]"===x.toString()&&(x.callback&&(y=x.callback),x.transform&&(_=o(x.transform.bind({safe:s}))),x.parse&&(w=o(x.parse)),x=x.dom),"string"==typeof x?k=m(x||"☺"):e.Element&&x instanceof e.Element&&(k=[x]),"function"==typeof x)y=x;else if(k){0===k.length&&console.warn('No elements found against "'+x+'" selector');var T=["OPTION","INPUT","PROGRESS","TEXTAREA"];null==g&&(g=-1!==T.indexOf(k[0].nodeName)?k[0].hasOwnProperty("checked")?w("on"===k[0].value?k[0].checked:k[0].value):w(k[0].value):w(k[0].innerHTML));var q=y;y=function(e){(k=m(x||"☺"))&&l(k,(function(t){if(!t.__dirty)if(-1!==T.indexOf(t.nodeName)){var n=_(e,h);if("checkbox"===t.type)if(e instanceof Array)0===e.filter((function(e){if(e===t.value)return t.checked=t.value===e,!0})).length&&(t.checked=!1);else"boolean"==typeof e&&(t.checked=e);else if("radio"===t.type)t.checked=t.value===n;else if("number"==typeof t.value)try{t.value=1*n}catch(e){console.error(e.message)}else t.value=n}else{e instanceof Array||(e=[e]);var a=[];l(e,(function(e){a.push(_(e,h))})),"object"==typeof a[0]?(t.innerHTML="",a.forEach((function(e){t.appendChild(e)}))):t.innerHTML=a.join("")}})),q&&q.apply(h,arguments)},l(k,(function(e){if("INPUT"===e.nodeName||"SELECT"===e.nodeName||"TEXTAREA"===e.nodeName){var t={checkbox:"change",radio:"change"}[e.type];e.addEventListener(t||"input",(function(){var t;if(this.__dirty=!0,"checkbox"===e.type){var n=(e.form||document).querySelectorAll('input[name="'+e.name+'"][type="checkbox"]');if(h[f]instanceof Array){var a=[];l(n,(function(e){e.checked&&a.push(w("on"===e.value?e.checked:e.value))})),t=a}else t=w("on"===this.value?this.checked:this.value)}else"radio"===e.type&&(t=w("on"===this.value?this.checked:this.value)),t="number"==typeof h[f]?w(1*this.value):w(this.value);void 0===t&&(t=this.value),h[f]=t,this.__dirty=!1}))}}))}y&&b.reduce((function(e,t,n,a){return e[t]||(e[t]={}),n===a.length-1&&(e[t].__callback=y),e[t]}),v.callbacks);var A=function(e){var n=[],a=[],r=v.instance,i=!1,o=!1;t&&console.log("> finding callback for %s",f,b),b.reduce((function(t,s,l){if(t&&t[s]&&s){if(null==(r=r[s]))return t[s]||{};if("function"==typeof t[s].__callback){var c=l===b.length-1?e:r;r.__dirty&&(i=!0),l===b.length-1&&t[s].__callback&&(o={path:b.join("."),callback:t[s].__callback,instance:c}),i||(a.push(u(c instanceof Array?[]:{},c)),n.push(t[s].__callback))}return t[s]||{}}}),v.callbacks),i||(a.reverse(),n.reverse().forEach((function(e,t){e.call(v.instance,a[t])}))),i&&o&&(r=o.instance,o.callback.call(v.instance,u(r instanceof Array?[]:{},r)))},M={configurable:!0,enumerable:!0,set:function(e){var i=g!==e?g:void 0;g=!v.ready||typeof e!==r||null===e||a(e)||e.__callback?a(e)?n(new c(A,v),e,v,b):e:n(h[f]?u({},h[f]):{},e,v,b),t&&console.log("set: key(%s): %s -> %s",f,JSON.stringify(i),JSON.stringify(e)),v.ready?A(g):void 0!==v.mapping[b.join(".")]&&v.deferred.push(A.bind(h,g,i))},get:function(){return g}};try{Object.defineProperty(h,f,M)}catch(e){t&&console.log("failed on Object.defineProperty",e.toString(),e.stack)}typeof g!==r||null===g||a(g)?a(g)?h[f]=n(new c(A,v),g,v,b):h instanceof c||(h[f]=g):h[f]=n(h[f]||{},g,v,b)}})),h instanceof c&&h.push.apply(h,p),h}(this,n,v),v.ready=!0,v.deferred.length&&l(v.deferred,(function(e){e()})),this}return c.prototype=[],f.prototype.__export=function(){return u({},this)},f}(this);e.exports=a},function(e,t,n){var a={"./bass.js":3,"./drums.js":4,"./melody.js":5};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=2},function(e,t,n){"use strict";n.r(t);var a=n(0);t.default=function(e,t){t({pan:-.5},e=>{e.program=r;var t=40;e.onBeat=(n,r)=>{t+=Object(a.b)(1,5)*Object(a.c)([1,-1]),t=Object(a.a)(36,t,45),e.playSound(t,.8)}})};var r=[{type:"sine",freq:{type:"sine",freq:{t:3},gain:{t:4,a:.02,h:.01,d:.3,s:0,r:.05}},gain:{t:.5,a:0,h:.01,d:.3,s:0,r:.2}}]},function(e,t,n){"use strict";n.r(t);var a=n(0);t.default=function(e,t){t({},e=>{e.program=r,e.onBeat=(t,n)=>{e.playPattern(t,n,45,"#------# #")}}),t({pan:-.2},e=>{e.program=i,e.onBeat=(t,n)=>{e.playPattern(t,n,55,"-#-#")}}),t({pan:.3},e=>{var t="-#-#-#-#",n=["-#-#","#-#-","--##","##-#"];e.program=o,e.onBeat=(r,i)=>{0===i&&(t=Object(a.c)(n)+Object(a.c)(n)),e.playPattern(r,i,77,t)}})};var r=[{type:"sine",freq:{p:.3,q:.1},gain:{a:.01,h:0,s:0,d:.1,r:.1}},{type:"square",freq:{t:.5},gain:{t:.2,a:.01,h:0,s:0,d:.05,r:.02}}],i=[{type:"triangle",freq:{p:.5},gain:{t:.3,a:0,h:.03,d:.05,s:0,r:.05}},{type:"n0",gain:{t:.6,a:0,h:.02,d:.01,s:0,r:.01}}],o=[{type:"n1",gain:{t:.2,a:0,s:0,h:0,d:.04,r:.05}},{type:"highpass",freq:{t:2}}]},function(e,t,n){"use strict";n.r(t);var a=n(0);t.default=function(e,t){t({pan:.5},e=>{e.program=r;var t=70;e.onBeat=(n,r)=>{t+=Object(a.b)(1,3)*Object(a.c)([1,-1]),t=Object(a.a)(62,t,88),e.playSound(t,.35),Object(a.c)([0,1])&&(t+=Object(a.b)(-3,4),e.playSound(t,.35,.5))}})};var r=[{type:"tri",gain:{t:.6,k:-.2}}]},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a);function i(e,t,n){if(!e)throw"Scheduler needs an AudioContext!";var a=this;this.bpm=t||60,this.playing=!1,this.context=e,this.beatsToSeconds=e=>60*+e/a.bpm,this.onBeat=()=>{},n=n||.2;var r=0;setInterval(()=>{if(a.playing)for(var t=e.currentTime,i=60/a.bpm,o=r+i;o<=t+n;){var s=o<=t?t+.01:o;a.onBeat(s-t),r=s,o=s+i}},1e3*n/3)}function o(e){e||(e=new AudioContext);var t=new i(e,60);t.onBeat=e=>this.onBeat(e);var n=function(e){var t=e.createDynamicsCompressor();return t.threshold.value=-30,t.knee.value=25,t.ratio.value=12,t.attack.value=.003,t.release.value=.25,t}(e),a=e.createGain();n.connect(a),a.connect(e.destination),this.input=n,this.output=a;var r=t=>{var n=t<1?t*t:t,r=e.currentTime;a.gain.cancelScheduledValues(0),a.gain.setTargetAtTime(n,r,.04)};this.context=e,this.beat=0,this.swing=0,this.playing=!1,this.volume=1,this.bpm=60,s(this,"playing",this.playing,e=>{e?(this.context.resume(),r(this.volume)):(r(0),setTimeout(()=>{this.context.suspend()},100)),t.playing=e}),s(this,"volume",this.volume,r),s(this,"bpm",this.bpm,e=>t.bpm=e),this.onBeat=e=>{},this.beatsToSeconds=e=>{e=+e;var n=Math.floor(e);if(e>n){var a=e-n;e=n+Math.pow(a,1-.75*this.swing)}return t.beatsToSeconds(e)}}function s(e,t,n,a){var r=typeof n;a=a||(()=>{}),Object.defineProperty(e,t,{get:()=>n,set:e=>{"number"===r&&(e=+e),"boolean"===r&&(e=!!e),a(n=e)}})}var l={usesFreq:!0,usesGain:!1,usesQ:!1};var c,u={pe:"peaking",ba:"bandpass",no:"notch",al:"allpass",lo:"lowpass",hi:"highpass",lowsh:"lowshelf",highs:"highshelf"},f={lowpass:"fq",highpass:"fq",bandpass:"fq",lowshelf:"fg",highshelf:"fg",peaking:"fqg",notch:"fq",allpass:"fq"};function h(e,t){var n;return c!==e&&(c=e,v={},d={}),"w"===(t=t.toLowerCase())[0]&&(n=function(e){var t=c.createOscillator();e.length<2&&(e+="9");return t.setPeriodicWave(function(e){if(!v[e]){for(var t=new Float32Array(e.length),n=new Float32Array(e.length),a=1;a<e.length;++a){var r=parseFloat(e[a])/9;t[a]=r*r}v[e]=c.createPeriodicWave(n,t)}return v[e]}(e)),t}(t)),"n"===t[0]&&(n=function(e){var t=c.createBufferSource(),n="n0";/p/.test(e)&&(n="np");/1/.test(e)&&(n="n1");d[n]||(d[n]=function(e){var t={n0:1,n1:1.5,np:2}[e]*c.sampleRate|0,n=c.createBuffer(1,t,c.sampleRate),a=n.getChannelData(0);"n0"===e&&function(e){for(var t=0;t<e.length;t++)e[t]=2*Math.random()-1}(a);"np"===e&&function(e){for(var t=0,n=0,a=0,r=0;r<e.length;r++){var i=2*Math.random()-1;t=.99765*t+.099046*i,n=.963*n+.2965164*i,a=.57*a+1.0526913*i,e[r]=t+n+a+.1848*i}}(a);"n1"===e&&function(e){for(var t=y(1),n=0;n<24;n++){t=y(t),m(e,1+n%16,2+10*t,.25)}g=null}(a);return n}(n));return t.buffer=d[n],t.loop=!0,t}(t)),n||(n=function(e){var t=c.createOscillator();return t.type="t"===e[0]?"triangle":p[e.substr(0,2)]||"sine",t}(t)),n}var p={si:"sine",sq:"square",sa:"sawtooth",tr:"triangle"};var v={};var d={};var m=(e,t,n,a)=>{for(var r=2*Math.PI*440/c.sampleRate,i=2*Math.random()*Math.PI,o=2*Math.random()*Math.PI,s=0;s<e.length;s++){var l=s*r,u=g(i+t*l),f=g(o+n*l);e[s]+=u*f*a}};function y(e){return(e=(e+Math.sqrt(17))*Math.sqrt(23))-Math.floor(e)}var g=(()=>{for(var e=[],t=512/(2*Math.PI),n=0;n<512;n++)e[n]=Math.sin(n/t);return n=>e[n*t&511]})();function b(e,t,n,a,r,i,o,s,l){x("start"),x("PARAM: ",o,"time",r,"for prog",i);var c={needsEnvelope:l,initializedValue:!1,appliedEnvelope:!1,envData:{param:t,ramps:[],r:-1,z:0}};c.needsEnvelope&&(x("implicit t=0 value of 0"),t.setValueAtTime(0,0),c.initializedValue=!0);var u="freq"===o?a:1;if("gain"===o&&"freq"===s&&(u=a),(Array.isArray(i)?i:[i]).forEach(i=>{(i=function(e,t){if(!isNaN(e))return"freq"===t?{t:0,f:e}:{t:e};return"object"!=typeof e?{}:e}(i,o)).type?T(e,n,i,a,r,o,l).connect(t):u=w(t,i,c,a,r,u)}),c.needsEnvelope&&!c.appliedEnvelope){x("- applying implicit envelope:");var f={a:k.a};w(t,f,c,a,r,u)}c.initializedValue||(x("- implicit t=0 value after program: ",u),t.setValueAtTime(u,0),c.initializedValue=!0);var h=c.envData;if((h.ramps.length>0||h.r>=0)&&n.envelopes.push(h),"freq"===o&&(!s||"freq"===s)){var p=u/a;0!==p&&n.bendables.push({param:t,mult:p})}c.envData=null,c=null,x("end")}function _(e){return!isNaN(e)}function w(e,t,n,a,r,i){var o=Object.assign({},k,t);r+=o.w;var s=i*o.t+o.f;0!==o.k&&(s*=Math.pow(a/261.625,o.k));var l=1!==o.p;if(l){n.initializedValue||(e.setValueAtTime(s,0),x("- sweep init",s,"time=0"),n.initializedValue=!0);var c=s*o.p;e.setTargetAtTime(c,r,o.q),x("- sweep target",s,"time",r)}var u=_(t.a)||_(t.d)||_(t.s)||_(t.r)||_(t.h);if(u){x("- starting env, base",i,"local",s);var f=s;if(n.initializedValue||(e.setValueAtTime(0,0),n.initializedValue=!0,x("- env t=0 value: ",0)),0!==f){var h=r,p=r+Math.max(o.a,.003);e.setValueAtTime(0,h),e.linearRampToValueAtTime(f,p),x("- env ramp: ",0,"to",f,"times",h,"to",p),n.envData.ramps.push({v0:0,v1:f,t0:h,t1:p}),r=p,s=f}if(1!==o.s){r+=o.h;var v=f*o.s;e.setTargetAtTime(v,r,o.d),x("- env decay to",v,"time",r)}(n.needsEnvelope||_(t.r))&&(n.envData.r=o.r,_(t.z)&&(n.envData.z=t.z),x("- env stored release val",o.r)),n.appliedEnvelope=!0}return l||u||x("- prog with no params applied, val => ",s),s}var k={w:0,t:1,f:0,k:0,p:1,q:.1,a:.05,h:0,d:.1,s:.8,r:.1},x=()=>{};function T(e,t,n,a,r,i,o){var s=(n=function(e){var t="object"==typeof e?e:{};t.type||(t.type="");return t}(n)).type,c=function(e){var t=e.substr(0,2).toLowerCase();if(!u[t])return null;var n=f[u[t]];return l.usesGain=n.includes("g"),l.usesQ=n.includes("q"),l}(s),p=!c||c.usesGain,v=!c||c.usesFreq,d=!!c&&c.usesQ;if(c&&i)throw"Filters only allowed at root level of program";var m=c?function(e,t){t=t.toLowerCase();var n=e.createBiquadFilter();return n.type=u[t.substr(0,5)]||u[t.substr(0,2)]||"lowpass",n}(e,s):h(e,s);(m.start&&m.start(r),t.nodes.push(m),v)&&b(e,m.frequency||m.playbackRate,t,a,r,n.freq,"freq",i,!1);if(d&&b(e,m.Q,t,a,r,n.Q,"Q",i,!1),p){if(!m.gain){var y=e.createGain();t.nodes.push(y),m.connect(y),m=y}c&&(o=!1),b(e,m.gain,t,a,r,n.gain,"gain",i,o)}return m}function q(e){var t={},n=[];function a(e){for(;n.length>e;){var a=n.shift();s(t[a]),delete t[a]}}function r(e){++i>9999&&(i=1),this.id=i,this.time=+e,this.endTime=0,this.nodes=[],this.envelopes=[],this.bendables=[]}this.maxVoices=32,this.play=function(i,l,c,u,f,h){!function(){for(var a=e.currentTime,r=0;r<n.length;r++){var i=n[r],o=t[i];0===o.endTime||a<o.endTime||(s(o),delete t[i],n.splice(r,1),r--)}}(),a(this.maxVoices-1);var p=function(t,n,a,i,o){var s=new r(i),l=e.createGain();s.nodes.push(l);for(var c=0;c<t.length;c++){var u=t[c],f=T(e,s,u,n,i,"",!0);f.Q?(l.connect(f),l=e.createGain(),s.nodes.push(l),f.connect(l)):f.connect(l)}if(1===a)l.connect(o);else{var h=e.createGain();s.nodes.push(h),h.gain.value=a<1?a*a:a,l.connect(h),h.connect(o)}return s}(i,l,c,u,h);return n.push(p.id),t[p.id]=p,f&&o(p,f),p.id},this.bend=function(e,n,a,r){var i=t[e];i&&function(e,t,n,a){if(e.endTime>0)return;e.bendables.forEach(e=>{var r=t*e.mult;e.param.cancelScheduledValues(a),e.param.setTargetAtTime(r,a,n)})}(i,n,a,r)},this.release=function(e,n){var a=t[e];a&&o(a,n)},this.isPlaying=function(e){return!!t[e]},this.releaseAll=function(e){n.forEach(n=>{o(t[n],e)})},this.dispose=function(){a(0),t=null,n=null};var i=0;function o(e,t){if(!(e.endTime>0)){var n=t;e.envelopes.forEach(e=>{if(!(e.r<0)){var a=e.param;a.cancelScheduledValues(t),e.ramps.forEach(e=>{if(!(t<e.t0||t>e.t1)){var n=(t-e.t0)/(e.t1-e.t0),r=e.v0+n*(e.v1-e.v0);a.cancelScheduledValues(t),a.linearRampToValueAtTime(r,t)}});var r=e.z,i=e.r;a.setTargetAtTime(r,t,i),n=Math.max(n,t+8*i)}}),e.endTime=n}}function s(e){for(;e.nodes.length>0;){var t=e.nodes.pop();t.stop&&t.stop(),t.buffer&&(t.buffer=null),t.gain&&t.gain.cancelScheduledValues(0),t.frequency&&t.frequency.cancelScheduledValues(0),t.playbackRate&&t.playbackRate.cancelScheduledValues(0),t.Q&&t.Q.cancelScheduledValues(0),t.disconnect(),t=null}e.nodes=null,e.envelopes=null,e.bendables=null}}function A(e,t,n){var a=this,r=e||new AudioContext,i=new q(r),o=t||r.destination,s=()=>r.currentTime+.05;function l(){c&&c.disconnect(),n||((c=r.createDynamicsCompressor()).threshold.value=-24,c.knee.value=25,c.ratio.value=20,c.attack.value=.003,c.release.value=.25,c.connect(o),a.compressor=c)}this.play=function(e,t,n,a,l,u){return"running"!==r.state&&r.resume(),t=t||440,n=n||1,a=a||s(),l=l||0,u=u||c||o,e=function(e){Array.isArray(e)||(e=[]);for(var t=0;t<e.length;t++)"object"!=typeof e[t]&&(e.splice(t,1),t--);0===e.length&&e.push({});return e}(e),i.play(e,t,n,a,l,u)},this.bend=function(e,t,n,a){t=t||440,n=n||.1,a=a||s(),i.bend(e,t,n,a)},this.release=function(e,t){t=t||s(),i.release(e,t)},this.noteIsPlaying=function(e){return i.isPlaying(e)},this.releaseAll=function(e){e=e||s(),i.releaseAll(e)},this.compressor=null,this.now=function(){return r.currentTime},this.maxVoices=function(e){return e&&(i.maxVoices=e),i.maxVoices},this.destination=function(e){return e&&(o=e,l()),o},this.audioContext=function(e){return e&&(this.dispose(),i=new q(r=e),o=r.destination,l()),r};var c=null;l(),this.dispose=function(){i.dispose(),i=null,c&&c.disconnect(),c=null,o=null,r=null}}class M{constructor(e){this.gen=new A(e.context,e.input,!0),this.timeUntilNextBeat=0,this._bts=e.beatsToSeconds}playSound(e,t,n,a,r,i){r=r||0,a=a||.75;var o=this.gen.now()+this.timeUntilNextBeat,s=o+this._bts(r),l=o+this._bts(r+a);i=i||1;var c=440*Math.pow(2,(e-69)/12);this.gen.play(t,c,i,s,l,n)}}class S{constructor(e,t,n,a,r,i){this._now=()=>e.currentTime,this._gain=null,this._comp=null,this._pan=null,this._player=n,this.dest=null,this.program=[{}],this.beforeBeat=e=>{},this.onBeat=e=>{};var o=t;"number"==typeof r&&(o=this._pan=function(e,t,n){var a=e.createStereoPanner();return a.pan.setValueAtTime(t,0),a.connect(n),a}(e,r,o)),a&&(o=this._gain=function(e,t,n){var a=e.createGain();return a.gain.setValueAtTime(t,0),a.connect(n),a}(e,a,o)),i&&(o=this._comp=function(e,t,n){var a=e.createDynamicsCompressor(t||null);return a.connect(n),a}(e,i,o)),this.dest=o}setPan(e,t){this._pan&&this._pan.pan.setTargetAtTime(e,this._now(),t||.05)}setGain(e,t){this._gain&&this._gain.gain.setTargetAtTime(e,this._now(),t||.05)}playSound(e,t,n,a,r,i){r=r||this.program,i=i||this.dest,this._player.playSound(e,r,i,t,n,a)}playPattern(e,t,n,a){for(var r=a.split(/\s+/),i=r[e%r.length],o=i.length/4,s=t*o,l=(t+1)*o,c=1/o,u=Math.ceil(s-.01);u<l-.01;u++)if("-"!==i[u]){var f=u*c-t;this.playSound(n,c,f)}}dispose(){setTimeout(e=>{var t=[e._pan,e._gain,e._comp];for(var n in t.forEach(e=>{e&&e.disconnect()}),e)e[n]=null},1e3,this)}}function j(e){var t,n,a,r=e.context,i=e.input,o=new M(e),s={},l={},c=(e,t)=>{return new t(l,(t,n)=>((e,t,n)=>{var a=t||{},l=new S(r,i,o,a.gain,a.pan,a.comp);return s[e]=s[e]||[],s[e].push(l),n(l),l})(e,t,n))},u={};t=(e,t)=>{if(s[e])for(;s[e].length;)s[e].pop().dispose();u[e]=c(e,t.default||t)},n={},(a=O()).keys().forEach(e=>(e=>{var r=a.resolve(e),i=a(e);i!==n[r]&&(t(r,i,n[r]||null),n[r]=i)})(e));var f=0;e.onBeat=e=>{o.timeUntilNextBeat=e;var t=Math.floor(f/4),n=f%4;Object.keys(s).forEach(e=>{s[e].forEach(e=>e.beforeBeat(t,n))}),Object.keys(s).forEach(e=>{s[e].forEach(e=>e.onBeat(t,n))}),f++}}var O=()=>n(2);class P{constructor(e,t,n,a,r){if(this.paused=!1,this.mode=r||0,this.minDb=-96,this.maxDb=-15,this.minFreq=150,this.maxFreq=15e3,this._ctx=e,this._canvasCtx=t.getContext("2d"),this._analyser=e.createAnalyser(),this._input=null,this._lastMode=-1,this.setInput(n),(a=a||30)>=60){var i=()=>{this.render(),requestAnimationFrame(i)};requestAnimationFrame(i)}else setInterval(()=>this.render(),1e3/a)}setInput(e){this._input&&this._input.disconnect(this._analyser),e.connect(this._analyser),this._input=e}render(){(function(e){var t=e._ctx.state;Q||(Q=t);if(t===Q)return;Q=t,"suspended"===t&&(U=!0);if("running"===t&&U)return e._input.disconnect(e._analyser),e._analyser=e._ctx.createAnalyser(),e._input.connect(e._analyser),U=!1,!0})(this)||this.paused||"running"===this._ctx.state&&(0===this.mode&&function(e){var t=e._analyser,n=e._canvasCtx;t.fftSize=V;var a=t.frequencyBinCount;C||(C=new Uint8Array(a));t.getByteFrequencyData(C);var r=C;e.clear();for(var i=n.canvas.width,o=n.canvas.height,s=Math.log2(e.maxFreq),l=Math.log2(e.minFreq),c=e._ctx.sampleRate/2,u=t.frequencyBinCount,f=0;f<i;f++){var h=f/(i-1),p=Math.pow(2,l+h*(s-l)),v=Math.round(p/c*u),d=r[v]/255,m=d*o;n.fillStyle=E(d),n.fillRect(f,o-m,1,m)}}(this),1===this.mode&&function(e){var t=e._analyser,n=e._canvasCtx;t.fftSize=B,t.minDecibels=e.minDb,t.maxDecibels=e.maxDb;var a=t.frequencyBinCount;D||(D=new Float32Array(a));t.getFloatTimeDomainData(D);var r=D;e.clear();var i=n.canvas.width,o=n.canvas.height,s=function(e){var t=[],n=0;for(;t.length<8&&n>=0;)(n=N(e,n,e.length/2))>0&&t.push(n);if(t.length<2)return t[0]||0;n=0;var a=999999.9;return t.forEach(t=>{var r=function(e,t){return F.reduce((n,a,r)=>{var i=t[e+a];return n+Math.abs(i-z[r])},0)}(t,e);r>a||(a=.95*r-1,n=t)}),z=F.map(t=>e[t+n]),n}(r);n.lineWidth=2,n.beginPath(),n.moveTo(0,o/2);for(var l=a/2,c=0,u=0;u<l;u++){var f=u+s,h=f<a?D[f]:0;h>c&&(c=h);var p=i*u/l,v=o*(.5*(h+1));n.lineTo(p,o-v)}n.strokeStyle=E(Math.max(.2,c)),n.stroke()}(this),2===this.mode&&function(e,t){var n=e._analyser,a=e._canvasCtx;n.fftSize=R,n.smoothingTimeConstant=.3,n.minDecibels=e.minDb,n.maxDecibels=e.maxDb;var r=n.frequencyBinCount;I||(I=new Uint8Array(r));n.getByteFrequencyData(I);var i=I,o=a.canvas.width,s=a.canvas.height;t?(a.fillStyle=E(0),a.fillRect(0,0,o,s)):a.drawImage(a.canvas,-1,0,o,s);for(var l=Math.log2(e.maxFreq),c=Math.log2(e.minFreq),u=e._ctx.sampleRate/2,f=n.frequencyBinCount,h=0;h<s;h++){var p=(s-1-h)/(s-1),v=Math.pow(2,c+p*(l-c)),d=Math.round(v/u*f),m=i[d]/255;a.fillStyle=E(m),a.fillRect(o-1,h,1,1)}}(this,this.mode!==this._lastMode),this._lastMode=this.mode)}clear(e){var t=this._canvasCtx.canvas.width,n=this._canvasCtx.canvas.height;this._canvasCtx.fillStyle=e||E(0),this._canvasCtx.fillRect(0,0,t,n)}}function E(e){if(0===e)return"#000";var t=Math.round(130*e-80),n=Math.round(20+50*e);return e>.99&&(n+=30),`hsl(${t},100%,${n}%)`}var V=1024,C=null;var B=4096,D=null;var F=[30,40,50,80,100,105,110,150,160],z=F.map(e=>0);function N(e,t,n){for(var a=0,r=t;r<n;r++)if(e[r]<0&&a++,e[r]>0&&a>5)return r;return-1}var R=1024,I=null;var L,G,Q="",U=!1;function H(){L||((L=new o).volume=$.volume,L.swing=$.swing,L.bpm=$.bpm,window.manager=new j(L)),X()}setTimeout(H,1);var W=document.querySelector(".viz"),J=0;function X(){G||((G=new P(L.context,W,L.output,20,0)).paused=!0,G.clear("#FFF"),window.viz=G)}W.addEventListener("click",e=>{X(),J=(J+1)%4,G.mode=J-1,G.paused=0===J,0===J&&G.clear("#FFF"),$.vizLabel=0===J?"(click to toggle visualizer)":""});var $=r()({playMsg:"Start",volume:.75,swing:0,bpm:100,log:"",vizLabel:"(click to toggle visualizer)"},{playMsg:".play",volume:{dom:".vol",callback:e=>{L&&(L.volume=e)}},swing:{dom:".swing",callback:e=>{L&&(L.swing=e)}},bpm:{dom:".bpm",callback:e=>{L&&(L.bpm=e)}},log:".log",vizLabel:".vizLabel"}),K=()=>{H(),L.playing=!L.playing,$.playMsg=L.playing?"Stop":"Start",$.log=L.playing?"(playing)":"&nbsp;"};(e=>document.querySelector(e))(".play").onclick=K,window.onkeydown=e=>{" "===e.key&&(e.preventDefault(),K())}}]);