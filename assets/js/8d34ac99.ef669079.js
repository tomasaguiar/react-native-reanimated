"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[266],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=l(n),c=r,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6837:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i={id:"useAnimatedProps",title:"useAnimatedProps",sidebar_label:"useAnimatedProps"},p=void 0,s={unversionedId:"api/useAnimatedProps",id:"version-2.3.0-alpha.3/api/useAnimatedProps",isDocsHomePage:!1,title:"useAnimatedProps",description:"This hook is a counterpart of useAnimatedStyle hook, but works for a non-style view properties.",source:"@site/versioned_docs/version-2.3.0-alpha.3/api/useAnimatedProps.md",sourceDirName:"api",slug:"/api/useAnimatedProps",permalink:"/react-native-reanimated/docs/api/useAnimatedProps",version:"2.3.0-alpha.3",frontMatter:{id:"useAnimatedProps",title:"useAnimatedProps",sidebar_label:"useAnimatedProps"},sidebar:"version-2.3.0-alpha.3/docs",previous:{title:"useAnimatedReaction",permalink:"/react-native-reanimated/docs/api/useAnimatedReaction"},next:{title:"withTiming",permalink:"/react-native-reanimated/docs/api/withTiming"}},l=[{value:"Example",id:"example",children:[{value:"Arguments",id:"arguments",children:[]}]},{value:"Example",id:"example-1",children:[]}],d={toc:l};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This hook is a counterpart of ",(0,o.kt)("a",{parentName:"p",href:"/react-native-reanimated/docs/api/useAnimatedStyle"},(0,o.kt)("inlineCode",{parentName:"a"},"useAnimatedStyle"))," hook, but works for a non-style view properties.\nIt allows for defining a set of native view properties that can be updated on the UI thread as a response to a Shared Value change.\nSimilarily to ",(0,o.kt)("a",{parentName:"p",href:"/react-native-reanimated/docs/api/useAnimatedStyle"},(0,o.kt)("inlineCode",{parentName:"a"},"useAnimatedStyle")),", this hook takes a single worklet (it is not necessary to add ",(0,o.kt)("inlineCode",{parentName:"p"},"worklet")," directive here, because the method will be converted to worklet automatically).\nThe provided worklet is responsible for returning a object with view properties."),(0,o.kt)("p",null,'Only "native" properties of "native views" can be set via ',(0,o.kt)("inlineCode",{parentName:"p"},"useAnimatedProps"),".\nThe most common usecase for this hook is when we want to animate properties of some third-party native component, since most of the properties for the core React Native components are a part of the styles anyways (at least the properties for which it makes sense to be animated).\nYou can use the following functions to animate properties that Reanimated don't support by default:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"addWhitelistedNativeProps()")," is used to animate properties that trigger layout recalculation, you can find them ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated/blob/master/src/ConfigHelper.js#L31"},"here"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"addWhitelistedUIProps()")," is used for properties that are updated directly on the UI thread, currently allowed props are listed ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated/blob/master/src/ConfigHelper.js#L6"},"here"),"."))),(0,o.kt)("p",null,"In order to connect the ",(0,o.kt)("inlineCode",{parentName:"p"},"useAnimatedProps")," hook result to a view, you need to pass it as ",(0,o.kt)("inlineCode",{parentName:"p"},"animatedProps")," property to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Animated")," version of the component (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"Animated.View"),").\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"animatedProps")," property is added when a native component is wrapped with ",(0,o.kt)("inlineCode",{parentName:"p"},"Animated.createAnimatedComponent"),"."),(0,o.kt)("p",null,"If the animated props worklet uses any shared values, it will be executed upon these values updates and the connected view will be updated."),(0,o.kt)("p",null,"In the example below we use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-svg"},(0,o.kt)("inlineCode",{parentName:"a"},"react-native-svg"))," package and animate one of the native properties of SVG views:"),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{12-16}","{12-16}":!0},"import React from 'react';\nimport { StyleSheet } from 'react-native';\nimport Animated, {\n  useSharedValue,\n  useAnimatedProps,\n} from 'react-native-reanimated';\nimport Svg, { Path } from 'react-native-svg';\n\nconst AnimatedPath = Animated.createAnimatedComponent(Path);\n\nfunction App() {\n  const radius = useSharedValue(50);\n\n  const animatedProps = useAnimatedProps(() => {\n    // draw a circle\n    const path = `\n    M 100, 100\n    m -${radius.value}, 0\n    a ${radius.value},${radius.value} 0 1,0 ${radius.value * 2},0\n    a ${radius.value},${radius.value} 0 1,0 ${-radius.value * 2},0\n    `;\n    return {\n      d: path,\n    };\n  });\n\n  // attach animated props to an SVG path using animatedProps\n  return (\n    <Svg>\n      <AnimatedPath animatedProps={animatedProps} fill=\"black\" />\n    </Svg>\n  );\n}\n")),(0,o.kt)("h1",{id:"createanimatedpropadapter"},"createAnimatedPropAdapter"),(0,o.kt)("p",null,"In some third-party libraries(but also may happen in users' custom components), props are named differently on the API layer than they really are underneath. This tool lets users handle such situations by defining a proper way to convert specific props."),(0,o.kt)("p",null,"Note: It is recommended to create adapters outside of components. ",(0,o.kt)("inlineCode",{parentName:"p"},"createAnimatedPropAdapter")," is not a hook and should not be called on every component's rerender."),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"adapter-function"},(0,o.kt)("inlineCode",{parentName:"h4"},"adapter")," ","[Function]"),(0,o.kt)("p",null,"Required parameter, this is a function that would receive an object of props that are supposed to be updated on the UI thread. The function itself doesn't have to return anything - modifying the received object is enough."),(0,o.kt)("h4",{id:"nativeprops-array"},(0,o.kt)("inlineCode",{parentName:"h4"},"nativeProps")," ","[Array]"),(0,o.kt)("p",null,"A list of props that should be added to ",(0,o.kt)("inlineCode",{parentName:"p"},"NATIVE_THREAD_PROPS_WHITELIST"),"."),(0,o.kt)("h2",{id:"example-1"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{3,9,24}","{3,9,24}":!0},"class Hello extends React.Component {\n  render() {\n    return <Text style={{ fontSize: this.props.helloSize }}>Hello</Text>;\n  }\n}\n\nconst AnimatedHello = Animated.createAnimatedComponent(Hello);\n\nconst adapter = createAnimatedPropAdapter(\n  (props) => {\n    if (Object.keys(props).includes('helloSize')) {\n      props.fontSize = props.helloSize;\n      delete props.helloSize;\n    }\n  },\n  ['fontSize']\n);\n\nexport default function Component() {\n  const sv = useSharedValue(14);\n  const helloProps = useAnimatedProps(\n    () => ({ helloSize: sv.value }),\n    null,\n    adapter\n  );\n\n  return <AnimatedHello animatedProps={helloProps} />;\n}\n")))}u.isMDXComponent=!0}}]);