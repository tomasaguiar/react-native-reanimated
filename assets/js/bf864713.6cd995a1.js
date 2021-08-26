"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[2498],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1787:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i={},l=void 0,c={unversionedId:"nodes/interpolateColors",id:"version-1.x.x/nodes/interpolateColors",isDocsHomePage:!1,title:"interpolateColors",description:"interpolateColors",source:"@site/versioned_docs/version-1.x.x/nodes/interpolateColors.md",sourceDirName:"nodes",slug:"/nodes/interpolateColors",permalink:"/react-native-reanimated/docs/1.x.x/nodes/interpolateColors",version:"1.x.x",frontMatter:{},sidebar:"version-1.x.x/docs",previous:{title:"interpolate",permalink:"/react-native-reanimated/docs/1.x.x/nodes/interpolate"},next:{title:"onChange",permalink:"/react-native-reanimated/docs/1.x.x/nodes/onChange"}},u=[{value:"<code>interpolateColors</code>",id:"interpolatecolors",children:[]}],p={toc:u};function s(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"interpolatecolors"},(0,a.kt)("inlineCode",{parentName:"h2"},"interpolateColors")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'interpolateColors(node, {\n  // Input range for the interpolation. Should be monotonically increasing.\n  inputRange: [nodeOrValue, ...],\n\n  // Output colors range for the interpolation.\n  // Should be the same length as the input range.\n  //\n  // Each color should be a string like "red" "#ff0" "#ff0000" "rgba(255, 0, 0, 1)"\n  // or a number like `0xrrggbbaa`.\n  outputColorRange: [color, ...],\n})\n')),(0,a.kt)("p",null,"Maps an input value within a range to an output value within a color range."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const color = Animated.interpolateColors(node, {\n  inputRange: [0, 1],\n  outputColorRange: ['red', 'blue'],\n});\n\nreturn <Animated.View style={{ backgroundColor: color }} />;\n")))}s.isMDXComponent=!0}}]);