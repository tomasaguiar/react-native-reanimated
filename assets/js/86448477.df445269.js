"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[9311],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=u(n),c=i,y=m["".concat(l,".").concat(c)]||m[c]||p[c]||o;return n?a.createElement(y,r(r({ref:t},d),{},{components:n})):a.createElement(y,r({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6946:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r={id:"layoutTransitions",title:"Layout Transitions",sidebar_label:"Layout Transitions"},s=void 0,l={unversionedId:"api/LayoutAnimations/layoutTransitions",id:"version-2.3.0-alpha.1/api/LayoutAnimations/layoutTransitions",isDocsHomePage:!1,title:"Layout Transitions",description:"The document explains how can you animate all layout changes for a specific view just by adding a single property to the view.",source:"@site/versioned_docs/version-2.3.0-alpha.1/api/LayoutAnimations/LayoutTransitions.md",sourceDirName:"api/LayoutAnimations",slug:"/api/LayoutAnimations/layoutTransitions",permalink:"/react-native-reanimated/docs/2.3.0-alpha.1/api/LayoutAnimations/layoutTransitions",version:"2.3.0-alpha.1",frontMatter:{id:"layoutTransitions",title:"Layout Transitions",sidebar_label:"Layout Transitions"},sidebar:"version-2.3.0-alpha.1/docs",previous:{title:"Exiting Animations",permalink:"/react-native-reanimated/docs/2.3.0-alpha.1/api/LayoutAnimations/exitAnimations"},next:{title:"runOnJS",permalink:"/react-native-reanimated/docs/2.3.0-alpha.1/api/miscellaneous/runOnJS"}},u=[{value:"How to use layout transition?",id:"how-to-use-layout-transition",children:[{value:"1. Import Layout",id:"1-import-layout",children:[]},{value:"2. Choose Animated Component which layout you want to animate",id:"2-choose-animated-component-which-layout-you-want-to-animate",children:[]},{value:"3. Customize the animation",id:"3-customize-the-animation",children:[]},{value:"4. Make sure that your animated component is under an AnimatedLayout. If it&#39;s not then add AnimatedLayout somewhere above the component.",id:"4-make-sure-that-your-animated-component-is-under-an-animatedlayout-if-its-not-then-add-animatedlayout-somewhere-above-the-component",children:[]}]},{value:"Available modifiers",id:"available-modifiers",children:[{value:"springify",id:"springify",children:[]},{value:"damping (spring only)",id:"damping-spring-only",children:[]},{value:"mass (spring only)",id:"mass-spring-only",children:[]},{value:"stiffness (spring only)",id:"stiffness-spring-only",children:[]},{value:"overshootClamping (spring only)",id:"overshootclamping-spring-only",children:[]},{value:"restDisplacementThreshold (spring only)",id:"restdisplacementthreshold-spring-only",children:[]},{value:"restSpeedThreshol (spring only)",id:"restspeedthreshol-spring-only",children:[]},{value:"duration (only without spring)",id:"duration-only-without-spring",children:[]},{value:"easing (only without spring)",id:"easing-only-without-spring",children:[]},{value:"delay",id:"delay",children:[]}]},{value:"Example",id:"example",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The document explains how can you animate all layout changes for a specific view just by adding a single property to the view.\nTo be precise how to animate positions and dimensions of components. What's important it will all happen entirely on UI thread without any communication through the bridge. There are plenty of ways in which you can animated layout changes however in contrast to entering and exiting animations they are not so regular and because of that, we decided to provide just one most popular animation that animated both position and dimensions in the same way. However, there is also a way to create a custom layout transition. To find an exact instruction explaining how to create a custom layout transition, please go to the Layout Transition document."),(0,o.kt)("h2",{id:"how-to-use-layout-transition"},"How to use layout transition?"),(0,o.kt)("h3",{id:"1-import-layout"},"1. Import Layout"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"    import { Layout } from 'react-native-reanimated';\n")),(0,o.kt)("h3",{id:"2-choose-animated-component-which-layout-you-want-to-animate"},"2. Choose Animated Component which layout you want to animate"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"    // AnimatedComponent - component created by createAnimatedComponent or imported from Reanimated\n    <AnimatedComponent layout={Layout} >\n")),(0,o.kt)("h3",{id:"3-customize-the-animation"},"3. Customize the animation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"    <AnimatedComponent layout={Layout.duration(3000).otherModifier()} >\n")),(0,o.kt)("h3",{id:"4-make-sure-that-your-animated-component-is-under-an-animatedlayout-if-its-not-then-add-animatedlayout-somewhere-above-the-component"},"4. Make sure that your animated component is under an AnimatedLayout. If it's not then add AnimatedLayout somewhere above the component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"    <AnimatedLayout> // +\n        <View> sth </View>\n        <View> \n            <AnimatedComponent exiting={animation}>\n        </View>\n    </AnimatedLayout> // +\n")),(0,o.kt)("h2",{id:"available-modifiers"},"Available modifiers"),(0,o.kt)("p",null,"The order of Modifiers doesn't matter."),(0,o.kt)("h3",{id:"springify"},"springify"),(0,o.kt)("p",null,"The default animation used for layout transitions is ",(0,o.kt)("inlineCode",{parentName:"p"},"timing"),". Use this modifier to change animation to ",(0,o.kt)("inlineCode",{parentName:"p"},"spring"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"    Layout.otherModifier().(...).springify().(...).otherModifier();\n")),(0,o.kt)("h3",{id:"damping-spring-only"},"damping (spring only)"),(0,o.kt)("p",null,"default: 10"),(0,o.kt)("h3",{id:"mass-spring-only"},"mass (spring only)"),(0,o.kt)("p",null,"default: 1"),(0,o.kt)("h3",{id:"stiffness-spring-only"},"stiffness (spring only)"),(0,o.kt)("p",null,"default: 100"),(0,o.kt)("h3",{id:"overshootclamping-spring-only"},"overshootClamping (spring only)"),(0,o.kt)("p",null,"default: false"),(0,o.kt)("h3",{id:"restdisplacementthreshold-spring-only"},"restDisplacementThreshold (spring only)"),(0,o.kt)("p",null,"default: 0.001"),(0,o.kt)("h3",{id:"restspeedthreshol-spring-only"},"restSpeedThreshol (spring only)"),(0,o.kt)("p",null,"default: 0.001"),(0,o.kt)("h3",{id:"duration-only-without-spring"},"duration (only without spring)"),(0,o.kt)("p",null,"default: 300\nHow long the animation should last"),(0,o.kt)("h3",{id:"easing-only-without-spring"},"easing (only without spring)"),(0,o.kt)("p",null,"Worklet that drives the easing curve for the animation"),(0,o.kt)("h3",{id:"delay"},"delay"),(0,o.kt)("p",null,"default: 0\nAllows to start with a specified delay."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("video",{src:"https://user-images.githubusercontent.com/36106620/120326673-44100080-c2e9-11eb-8b14-564d3b4e3102.mov",controls:"controls",muted:"muted"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function Box({label, state}: {label: string, state: boolean}) {\n  const ind = label.charCodeAt(0) - (\'A\').charCodeAt(0);\n  const delay = 300 * ind;\n  return (\n    <Animated.View \n        layout={Layout.delay(delay).springify()} \n        style={[styles.box,\n          { \n            flexDirection: (state)? \'row\': \'row-reverse\', \n            height: (state)? 30 : 60,\n          }]} \n    >\n      <Text> {label} </Text>\n    </Animated.View>\n  );\n}\n\nexport function SpringLayoutAnimation(): React.ReactElement {\n  const [state, setState] =  useState(true);\n  return (\n    <View style={{marginTop: 30}} >\n      <View style={{height: 300}} >\n        <AnimatedLayout style={{flexDirection: state? \'row\' : \'column\'}} >\n          {state && <Box key="a" label="A" state={state} />}\n          <Box key="b" label="B" state={state} />\n          {!state && <Box key="a" label="A" state={state} />}\n          <Box key="c" label="C" state={state} />\n        </AnimatedLayout>\n      </View>\n    \n      <Button onPress={() => {setState(!state)}} title="toggle" />\n    </View>\n  );\n}\n')))}p.isMDXComponent=!0}}]);