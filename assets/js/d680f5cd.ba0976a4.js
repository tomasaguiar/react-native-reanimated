"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[9007],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},287:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i={id:"runOnJS",title:"runOnJS",sidebar_label:"runOnJS"},l=void 0,c={unversionedId:"api/runOnJS",id:"version-2.1.0/api/runOnJS",isDocsHomePage:!1,title:"runOnJS",description:"When you call a function on UI thread you can't be sure if you call a worklet or a callback from JS thread. To make it more transparent we introduced runOnJS, which calls a callback asynchronously. An exception will be thrown if you call a JS callback without this function.",source:"@site/versioned_docs/version-2.1.0/api/runonJS.md",sourceDirName:"api",slug:"/api/runOnJS",permalink:"/react-native-reanimated/docs/2.1.0/api/runOnJS",version:"2.1.0",frontMatter:{id:"runOnJS",title:"runOnJS",sidebar_label:"runOnJS"},sidebar:"version-2.1.0/docs",previous:{title:"scrollTo",permalink:"/react-native-reanimated/docs/2.1.0/api/nativeMethods/scrollTo"},next:{title:"Testing with Jest",permalink:"/react-native-reanimated/docs/2.1.0/testing"}},s=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],u={toc:s};function p(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When you call a function on UI thread you can't be sure if you call a worklet or a callback from JS thread. To make it more transparent we introduced ",(0,o.kt)("inlineCode",{parentName:"p"},"runOnJS"),", which calls a callback asynchronously. An exception will be thrown if you call a JS callback without this function."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you want to invoke some function from external library in ",(0,o.kt)("inlineCode",{parentName:"p"},"runOnJS")," please wrap it into a separate function."),(0,o.kt)("p",{parentName:"div"},"Code like this may not work:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"useDerivedValue(() => {\n  runOnJS(externalLibraryFunction)(args);\n});\n")),(0,o.kt)("p",{parentName:"div"},"But something like this will work:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const wrapper = (args) => {\n  externalLibraryFunction(args);\n};\nuseDerivedValue(() => {\n  runOnJS(wrapper)(args);\n});\n")),(0,o.kt)("p",{parentName:"div"},"This is because internally ",(0,o.kt)("inlineCode",{parentName:"p"},"runOnJS")," uses ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.defineProperty"),". Therefore if we want to call a method of some object we may not have an access to ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," inside a called function."),(0,o.kt)("p",{parentName:"div"},"This code shows how it works:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class A {\n  foo() {\n    //... playing with [this]\n  }\n}\n\nconst a = new A();\nconst ob = {};\nObject.defineProperty(ob, 'foo', { enumerable: false, value: a.foo }); // we do something like this in runOnJS\n\na.foo(5); // normal [this] access\nob.foo(5); // [this] is not correct\n")))),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"fn-function"},(0,o.kt)("inlineCode",{parentName:"h4"},"fn")," ","[function]"),(0,o.kt)("p",null,"The first and the only argument is a function which is supposed to be run."),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"runOnJS")," returns a function which can be safely run from UI thread."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Here is an example of calling a javascript callback from the UI thread:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{22}","{22}":!0},"import {\n  useSharedValue,\n  runOnJS,\n  useDerivedValue,\n  useAnimatedReaction,\n} from 'react-native-reanimated';\nimport { View, Button } from 'react-native';\nimport React from 'react';\n\nexport default function App() {\n  const randomWidth = useSharedValue(10);\n  const lastResults = [];\n\n  const recordResult = (result) => {\n    lastResults.push(result);\n    if (lastResults.length > 3) {\n      lastResults.shift();\n    }\n  };\n\n  useDerivedValue(() => {\n    runOnJS(recordResult)(randomWidth.value);\n  });\n\n  return (\n    <View>\n      <Button\n        title=\"toggle\"\n        onPress={() => {\n          randomWidth.value = Math.round(Math.random() * 350);\n        }}\n      />\n    </View>\n  );\n}\n")))}p.isMDXComponent=!0}}]);