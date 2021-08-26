"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[8466],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4301:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i={},l=void 0,p={unversionedId:"nodes/interpolate",id:"version-1.x.x/nodes/interpolate",isDocsHomePage:!1,title:"interpolate",description:"interpolate",source:"@site/versioned_docs/version-1.x.x/nodes/interpolate.md",sourceDirName:"nodes",slug:"/nodes/interpolate",permalink:"/react-native-reanimated/docs/1.x.x/nodes/interpolate",version:"1.x.x",frontMatter:{},sidebar:"version-1.x.x/docs",previous:{title:"event",permalink:"/react-native-reanimated/docs/1.x.x/nodes/event"},next:{title:"interpolateColors",permalink:"/react-native-reanimated/docs/1.x.x/nodes/interpolateColors"}},u=[{value:"<code>interpolate</code>",id:"interpolate",children:[]}],c={toc:u};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"interpolate"},(0,o.kt)("inlineCode",{parentName:"h2"},"interpolate")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"interpolate(node, {\n  // Input range for the interpolation. Should be monotonically increasing.\n  inputRange: [nodeOrValue...],\n  // Output range for the interpolation, should be the same length as the input range.\n  outputRange: [nodeOrValue...],\n  // Sets the left and right extrapolate modes.\n  extrapolate?: Extrapolate.EXTEND | Extrapolate.CLAMP | Extrapolate.IDENTITY,\n  // Set the left extrapolate mode, the behavior if the input is less than the first value in inputRange.\n  extrapolateLeft?: Extrapolate.EXTEND | Extrapolate.CLAMP | Extrapolate.IDENTITY,\n  // Set the right extrapolate mode, the behavior if the input is greater than the last value in inputRange.\n  extrapolateRight?: Extrapolate.EXTEND | Extrapolate.CLAMP | Extrapolate.IDENTITY,\n})\n\nExtrapolate.EXTEND; // Will extend the range linearly.\nExtrapolate.CLAMP; // Will clamp the input value to the range.\nExtrapolate.IDENTITY; // Will return the input value if the input value is out of range.\n")),(0,o.kt)("p",null,"Maps an input value within a range to an output value within a range. Also supports different types of extrapolation for when the value falls outside the range and mapping to strings. For example, if you wanted to animate a rotation you could do:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"concat(\n  interpolate(node, { inputRange: [0, 360], outputRange: [0, 360] }),\n  'deg'\n);\n")),(0,o.kt)("h5",{id:"note-in-order-to-interpolate-color-output-values-use-interpolatecolors-instead"},"Note: In order to interpolate color output values, use ",(0,o.kt)("a",{parentName:"h5",href:"/react-native-reanimated/docs/1.x.x/nodes/interpolateColors"},(0,o.kt)("inlineCode",{parentName:"a"},"interpolateColors"))," instead."))}s.isMDXComponent=!0}}]);