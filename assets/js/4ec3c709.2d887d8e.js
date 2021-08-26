"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[1386],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=a.createContext({}),d=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,m=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=d(n),k=i,c=u["".concat(m,".").concat(k)]||u[k]||s[k]||l;return n?a.createElement(c,o(o({ref:t},p),{},{components:n})):a.createElement(c,o({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=u;var r={};for(var m in t)hasOwnProperty.call(t,m)&&(r[m]=t[m]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5330:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return r},metadata:function(){return m},toc:function(){return d},default:function(){return s}});var a=n(7462),i=n(3366),l=(n(7294),n(3905)),o={id:"entryAnimations",title:"Entering Animations",sidebar_label:"Entering Animations"},r=void 0,m={unversionedId:"api/LayoutAnimations/entryAnimations",id:"version-2.3.0-alpha.3/api/LayoutAnimations/entryAnimations",isDocsHomePage:!1,title:"Entering Animations",description:"In React Native every component appears instantly whenever you add it to the component hierarchy. It's not something we are used to in the real world. Layout Animations are here to address the problem and help you animate an appearance of any view.",source:"@site/versioned_docs/version-2.3.0-alpha.3/api/LayoutAnimations/EntryAnimations.md",sourceDirName:"api/LayoutAnimations",slug:"/api/LayoutAnimations/entryAnimations",permalink:"/react-native-reanimated/docs/api/LayoutAnimations/entryAnimations",version:"2.3.0-alpha.3",frontMatter:{id:"entryAnimations",title:"Entering Animations",sidebar_label:"Entering Animations"},sidebar:"version-2.3.0-alpha.3/docs",previous:{title:"Custom Animations",permalink:"/react-native-reanimated/docs/api/LayoutAnimations/customAnimations"},next:{title:"Exiting Animations",permalink:"/react-native-reanimated/docs/api/LayoutAnimations/exitAnimations"}},d=[{value:"How to use predefined entering animation?",id:"how-to-use-predefined-entering-animation",children:[{value:"1. Import chosen animation",id:"1-import-chosen-animation",children:[]},{value:"2. Choose Animated Component which entering you want to animate",id:"2-choose-animated-component-which-entering-you-want-to-animate",children:[]},{value:"3. Customize the animation",id:"3-customize-the-animation",children:[]},{value:"4. Make sure that your animated component is under an AnimatedLayout. If it&#39;s not then add AnimatedLayout somewhere above the component.",id:"4-make-sure-that-your-animated-component-is-under-an-animatedlayout-if-its-not-then-add-animatedlayout-somewhere-above-the-component",children:[]}]},{value:"Predefined Animations",id:"predefined-animations",children:[{value:"Fade",id:"fade",children:[]},{value:"Bounce",id:"bounce",children:[]},{value:"Flip",id:"flip",children:[]},{value:"Stretch",id:"stretch",children:[]},{value:"Zoom",id:"zoom",children:[]},{value:"Slide",id:"slide",children:[]},{value:"LightSpeed",id:"lightspeed",children:[]},{value:"Pinwheel",id:"pinwheel",children:[]},{value:"Roll",id:"roll",children:[]},{value:"Rotate",id:"rotate",children:[]}]}],p={toc:d};function s(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In React Native every component appears instantly whenever you add it to the component hierarchy. It's not something we are used to in the real world. Layout Animations are here to address the problem and help you animate an appearance of any view."),(0,l.kt)("p",null,"We provide an easy API that allows you to code almost any animation you want. Because some of the animations are more frequently used than the others we coded them for you and provided in an accessible way. Below you can find an instruction step by step explaining how to use them. A little further down you will find a detailed description of all the predefined entering animations."),(0,l.kt)("p",null,"If you want to create more complex animation you can use ",(0,l.kt)("a",{parentName:"p",href:"keyframeAnimations"},"Keyframes"),"."),(0,l.kt)("h2",{id:"how-to-use-predefined-entering-animation"},"How to use predefined entering animation?"),(0,l.kt)("h3",{id:"1-import-chosen-animation"},"1. Import chosen animation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// AnimationName is just an example and should be replaced by real animation. For Instance FadeIn\nimport { AnimationName } from 'react-native-reanimated'; \n")),(0,l.kt)("h3",{id:"2-choose-animated-component-which-entering-you-want-to-animate"},"2. Choose Animated Component which entering you want to animate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// AnimatedComponent - component created by createAnimatedComponent or imported from Reanimated\n<AnimatedComponent entering={AnimationName} > \n")),(0,l.kt)("h3",{id:"3-customize-the-animation"},"3. Customize the animation"),(0,l.kt)("p",null,"Different type of entering animations can be customized differently. For the complete list of option please refer to the paragraph specific to the particular animation type."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"<AnimatedComponent entering={AnimationName.duration(3000).otherModifier()} >\n")),(0,l.kt)("h3",{id:"4-make-sure-that-your-animated-component-is-under-an-animatedlayout-if-its-not-then-add-animatedlayout-somewhere-above-the-component"},"4. Make sure that your animated component is under an AnimatedLayout. If it's not then add AnimatedLayout somewhere above the component."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"<AnimatedLayout> // +\n    <View> sth </View>\n    <View> \n        <AnimatedComponent entering={AnimationName}>\n    </View>\n</AnimatedLayout> // +\n")),(0,l.kt)("h2",{id:"predefined-animations"},"Predefined Animations"),(0,l.kt)("p",null,"Below we listed all of the currently available predefined entering animations grouped by their type. Each group contains all of its modifiers and a video presenting what it looks like when applied to a simple button."),(0,l.kt)("p",null,"If you cannot find an animation that suits you then you can create a custom one. If you think that the animation should be here, please open an issue or create a pull request. "),(0,l.kt)("h3",{id:"fade"},"Fade"),(0,l.kt)("p",null,"Simple animation based on changing of opacity."),(0,l.kt)("h4",{id:"animations"},"Animations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"FadeIn"),(0,l.kt)("li",{parentName:"ul"},"FadeInRight"),(0,l.kt)("li",{parentName:"ul"},"FadeInLeft"),(0,l.kt)("li",{parentName:"ul"},"FadeInUp"),(0,l.kt)("li",{parentName:"ul"},"FadeInDown")),(0,l.kt)("h4",{id:"modifiers"},"Modifiers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,l.kt)("inlineCode",{parentName:"li"},"withTiming")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends")),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("video",{src:"https://user-images.githubusercontent.com/36106620/120317260-b3ccbe00-c2de-11eb-8434-8998b12dfa3c.mov",controls:"controls",muted:"muted"}),(0,l.kt)("h3",{id:"bounce"},"Bounce"),(0,l.kt)("p",null,"Animation based on smoothly shaking of component."),(0,l.kt)("h4",{id:"animations-1"},"Animations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"BounceIn"),(0,l.kt)("li",{parentName:"ul"},"BounceInRight"),(0,l.kt)("li",{parentName:"ul"},"BounceInLeft"),(0,l.kt)("li",{parentName:"ul"},"BounceInUp"),(0,l.kt)("li",{parentName:"ul"},"BounceInDown")),(0,l.kt)("h4",{id:"modifiers-1"},"Modifiers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 250"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends")),(0,l.kt)("h4",{id:"example-1"},"Example"),(0,l.kt)("video",{src:"https://user-images.githubusercontent.com/36106620/120317341-cc3cd880-c2de-11eb-9d72-4065c740667e.mov",controls:"controls",muted:"muted"}),(0,l.kt)("h3",{id:"flip"},"Flip"),(0,l.kt)("p",null,"3D animation based on flipping object over specific axis."),(0,l.kt)("h4",{id:"animations-2"},"Animations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"FlipInYRight"),(0,l.kt)("li",{parentName:"ul"},"FlipInYLeft"),(0,l.kt)("li",{parentName:"ul"},"FlipInXUp"),(0,l.kt)("li",{parentName:"ul"},"FlipInXDown"),(0,l.kt)("li",{parentName:"ul"},"FlipInEasyX"),(0,l.kt)("li",{parentName:"ul"},"FlipInEasyY")),(0,l.kt)("h4",{id:"modifiers-2"},"Modifiers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,l.kt)("inlineCode",{parentName:"li"},"withTiming")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends")),(0,l.kt)("h4",{id:"example-2"},"Example"),(0,l.kt)("video",{src:"https://user-images.githubusercontent.com/36106620/120317406-deb71200-c2de-11eb-8dee-c658a4e1e47a.mov",controls:"controls",muted:"muted"}),(0,l.kt)("h3",{id:"stretch"},"Stretch"),(0,l.kt)("p",null,"Animation based on changing width or height of object."),(0,l.kt)("h4",{id:"animations-3"},"Animations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"StretchInX"),(0,l.kt)("li",{parentName:"ul"},"StretchInY")),(0,l.kt)("h4",{id:"modifiers-3"},"Modifiers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,l.kt)("inlineCode",{parentName:"li"},"withTiming")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends")),(0,l.kt)("h4",{id:"example-3"},"Example"),(0,l.kt)("video",{src:"https://user-images.githubusercontent.com/36106620/120317473-f42c3c00-c2de-11eb-8772-b366c2ddde7f.mov",controls:"controls",muted:"muted"}),(0,l.kt)("h3",{id:"zoom"},"Zoom"),(0,l.kt)("p",null,"Animation based on changing scale of object."),(0,l.kt)("h4",{id:"animations-4"},"Animations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ZoomIn"),(0,l.kt)("li",{parentName:"ul"},"ZoomInRotate"),(0,l.kt)("li",{parentName:"ul"},"ZoomInRight"),(0,l.kt)("li",{parentName:"ul"},"ZoomInLeft"),(0,l.kt)("li",{parentName:"ul"},"ZoomInUp"),(0,l.kt)("li",{parentName:"ul"},"ZoomInDown"),(0,l.kt)("li",{parentName:"ul"},"ZoomInEasyUp"),(0,l.kt)("li",{parentName:"ul"},"ZoomInEasyDown")),(0,l.kt)("h4",{id:"modifiers-4"},"Modifiers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,l.kt)("inlineCode",{parentName:"li"},"withTiming")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends")),(0,l.kt)("h4",{id:"example-4"},"Example"),(0,l.kt)("video",{src:"https://user-images.githubusercontent.com/36106620/120317529-04441b80-c2df-11eb-9627-c56e986e44c1.mov",controls:"controls",muted:"muted"}),(0,l.kt)("h3",{id:"slide"},"Slide"),(0,l.kt)("p",null,"Animation based on horizontal or vertical moving of object."),(0,l.kt)("h4",{id:"animations-5"},"Animations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"SlideInRight"),(0,l.kt)("li",{parentName:"ul"},"SlideInLeft"),(0,l.kt)("li",{parentName:"ul"},"SlideInUp"),(0,l.kt)("li",{parentName:"ul"},"SlideInDown")),(0,l.kt)("h4",{id:"modifiers-5"},"Modifiers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,l.kt)("inlineCode",{parentName:"li"},"withTiming")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends")),(0,l.kt)("h4",{id:"example-5"},"Example"),(0,l.kt)("video",{src:"https://user-images.githubusercontent.com/36106620/120317587-1a51dc00-c2df-11eb-937a-c53a237afca2.mov",controls:"controls",muted:"muted"}),(0,l.kt)("h3",{id:"lightspeed"},"LightSpeed"),(0,l.kt)("p",null,"Animation based on horizontal moving of object with changing of opacity and skew."),(0,l.kt)("h4",{id:"animations-6"},"Animations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"LightSpeedInRight"),(0,l.kt)("li",{parentName:"ul"},"LightSpeedInLeft")),(0,l.kt)("h4",{id:"modifiers-6"},"Modifiers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 250"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,l.kt)("inlineCode",{parentName:"li"},"withTiming")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends")),(0,l.kt)("h4",{id:"example-6"},"Example"),(0,l.kt)("video",{src:"https://user-images.githubusercontent.com/48885911/125057634-c094bc80-e0a9-11eb-98d9-0c8eed1e63b0.mov",controls:"controls",muted:"muted"}),(0,l.kt)("h3",{id:"pinwheel"},"Pinwheel"),(0,l.kt)("p",null,"Animation based on rotation with scale and opacity change."),(0,l.kt)("h4",{id:"animations-7"},"Animations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"PinwheelIn")),(0,l.kt)("h4",{id:"modifiers-7"},"Modifiers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,l.kt)("inlineCode",{parentName:"li"},"withTiming")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends")),(0,l.kt)("h4",{id:"example-7"},"Example"),(0,l.kt)("video",{src:"https://user-images.githubusercontent.com/48885911/125058126-40228b80-e0aa-11eb-8396-7f373af7fcbe.mov",controls:"controls",muted:"muted"}),(0,l.kt)("h3",{id:"roll"},"Roll"),(0,l.kt)("p",null,"Animation based on horizontal moving of object with rotation."),(0,l.kt)("h4",{id:"animations-8"},"Animations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"RollInLeft"),(0,l.kt)("li",{parentName:"ul"},"RollInRight")),(0,l.kt)("h4",{id:"modifiers-8"},"Modifiers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,l.kt)("inlineCode",{parentName:"li"},"withTiming")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends")),(0,l.kt)("h4",{id:"example-8"},"Example"),(0,l.kt)("video",{src:"https://user-images.githubusercontent.com/48885911/125058243-60524a80-e0aa-11eb-94c8-79728688e2f3.mov",controls:"controls",muted:"muted"}),(0,l.kt)("h3",{id:"rotate"},"Rotate"),(0,l.kt)("p",null,"Animation based on rotation of object."),(0,l.kt)("h4",{id:"animations-9"},"Animations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"RotateInDownLeft"),(0,l.kt)("li",{parentName:"ul"},"RotateInDownRight"),(0,l.kt)("li",{parentName:"ul"},"RotateInUpLeft"),(0,l.kt)("li",{parentName:"ul"},"RotateInUpRight")),(0,l.kt)("h4",{id:"modifiers-9"},"Modifiers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,l.kt)("inlineCode",{parentName:"li"},"withTiming")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends")),(0,l.kt)("h4",{id:"example-9"},"Example"),(0,l.kt)("video",{src:"https://user-images.githubusercontent.com/48885911/125058359-79f39200-e0aa-11eb-8c78-c31e461e3748.mov",controls:"controls",muted:"muted"}))}s.isMDXComponent=!0}}]);