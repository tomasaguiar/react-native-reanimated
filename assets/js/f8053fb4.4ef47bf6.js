"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[1356],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8652:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o={id:"useAnimatedStyle",title:"useAnimatedStyle",sidebar_label:"useAnimatedStyle"},s=void 0,l={unversionedId:"api/hooks/useAnimatedStyle",id:"version-2.3.0-alpha.3/api/hooks/useAnimatedStyle",isDocsHomePage:!1,title:"useAnimatedStyle",description:"This hook is one of the main elements of the new Reanimated v2 API.",source:"@site/versioned_docs/version-2.3.0-alpha.3/api/hooks/useAnimatedStyle.md",sourceDirName:"api/hooks",slug:"/api/hooks/useAnimatedStyle",permalink:"/react-native-reanimated/docs/api/hooks/useAnimatedStyle",version:"2.3.0-alpha.3",frontMatter:{id:"useAnimatedStyle",title:"useAnimatedStyle",sidebar_label:"useAnimatedStyle"},sidebar:"version-2.3.0-alpha.3/docs",previous:{title:"useSharedValue",permalink:"/react-native-reanimated/docs/api/hooks/useSharedValue"},next:{title:"useDerivedValue",permalink:"/react-native-reanimated/docs/api/hooks/useDerivedValue"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This hook is one of the main elements of the new Reanimated v2 API.\nIt allows for creating an association between shared values and View properties."),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"updater-function"},(0,i.kt)("inlineCode",{parentName:"h4"},"updater")," ","[Function]"),(0,i.kt)("p",null,"Single worklet which is responsible for returning an object with view style properties."),(0,i.kt)("h4",{id:"dependencies-array"},(0,i.kt)("inlineCode",{parentName:"h4"},"dependencies")," ","[Array]"),(0,i.kt)("p",null,"Optional array of values which changes cause this hook to receive updated values during rerender of the wrapping component. This matters when, for instance, worklet uses values dependent on the component's state."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{9}","{9}":!0},"const App = () => {\n  const [state, setState] = useState(0);\n  const sv = useSharedValue(state);\n\n  const style = useAnimatedStyle(() => {\n    return {\n      width: sv.value,\n    };\n  }, dependencies);\n  //...\n  return <></>;\n};\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dependencies")," here may be:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"undefined"),"(argument skipped) - worklet will be rebuilt if there is any change in it's body or any values from it's closure(variables from outer scope used in worklet),"),(0,i.kt)("li",{parentName:"ul"},"empty array(",(0,i.kt)("inlineCode",{parentName:"li"},"[]"),") - worklet will be rebuilt only if it's body changes,"),(0,i.kt)("li",{parentName:"ul"},"array of values(",(0,i.kt)("inlineCode",{parentName:"li"},"[val1, val2, ..., valN]"),") - worklet will be rebuilt if there is any change in it's body or any values from the given array.")),(0,i.kt)("h3",{id:"returns"},"Returns"),(0,i.kt)("p",null,"Animated style - in order to connect the animated style hook result, you need to pass it as one of the ",(0,i.kt)("inlineCode",{parentName:"p"},"style")," properties to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Animated")," version of the component (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"Animated.View"),").\nIn React Native, View's ",(0,i.kt)("inlineCode",{parentName:"p"},"style")," property can take an array of styles, which gives you a way to mix static and dynamic styles.\nWe recommend that you defined static styles using React Native's ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/stylesheet"},(0,i.kt)("inlineCode",{parentName:"a"},"StyleSheet")," API")," and pass them along the animated styles object returned by this hook.\nIt is more efficient to only keep styles that are actually changed as a result of animation in the animated style hook, and the rest of the styles should be either provided as inline objects or using StyleSheets."),(0,i.kt)("p",null,"If the style worklet uses any shared values, it will be executed upon these values updates and the connected view will be updated."),(0,i.kt)("p",null,"For the list of available properties you can refer to the React Native core documentation on ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view-style-props"},"View Style Props"),". You may also want to check React Native's ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/style"},"guide on styling views"),"."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Animated styles cannot be shared between views."),(0,i.kt)("p",{parentName:"div"},"To work around this you can generate multiple useAnimatedStyle in top-level loop (number of iterations must be static, see React's ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level"},"Rules of Hooks")," for more information)."))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{11-15}","{11-15}":!0},"import { StyleSheet } from 'react-native';\nimport {\n  Animated,\n  useSharedValue,\n  useAnimatedStyle,\n} from 'react-native-reanimated';\n\nfunction App() {\n  const width = useSharedValue(50);\n\n  const animatedStyle = useAnimatedStyle(() => {\n    return {\n      width: width.value,\n    };\n  });\n\n  // attach animated style to a View using style property\n  return <Animated.View style={[styles.box, animatedStyle]} />;\n}\n\nconst styles = StyleSheet.create({\n  box: {\n    height: 50,\n    backgroundColor: 'blue',\n  },\n});\n")),(0,i.kt)("p",null,"In the above example, the used shared value is not changing, hence there is no real benefit of using an animated style there.\nCheck out the documentation of ",(0,i.kt)("a",{parentName:"p",href:"useSharedValue"},(0,i.kt)("inlineCode",{parentName:"a"},"useSharedValue"))," to learn how shared values can be updated."))}p.isMDXComponent=!0}}]);