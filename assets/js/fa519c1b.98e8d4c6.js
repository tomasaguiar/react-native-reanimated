"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[7753],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=i,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return t?a.createElement(f,r(r({ref:n},p),{},{components:t})):a.createElement(f,r({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5772:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(7294),i="container_2oFM",o="gifs_3p7Y",r="rightArrow_2vVe",s="downArrow_3Hd5",c=t(6010),l=function(e){var n=e.before,t=e.after,l=(0,a.useState)(null),p=l[0],m=l[1];return(0,a.useEffect)((function(){function e(){var e=window.innerWidth;m(e)}return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a.createElement("div",{className:(0,c.Z)(i)},a.createElement("img",{src:n,className:(0,c.Z)(o)}),p&&p>=650&&a.createElement("div",{className:(0,c.Z)(r)},"\u2192"),p&&p<650&&a.createElement("div",{className:(0,c.Z)(s)},"\u2193"),a.createElement("img",{src:t,className:(0,c.Z)(o)}))}},7819:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(7294),i="container_1zvi",o="roundedStep_3opA",r="description_1txH",s="stepTitle_3RiT",c="code_QhLf",l="codeInactive_2fTW",p=t(6010),m=function(e){var n=e.children,t=e.title,m=(0,a.useState)(!1),u=m[0],d=m[1],f=(0,a.useRef)(),y=function(){var e=window.innerHeight,n=window.pageYOffset,t=f.current.offsetTop-e/3,a=f.current.offsetTop+f.current.scrollHeight+60-e/3;d(n>t&&n<a)};return(0,a.useEffect)((function(){return y(),window.addEventListener("scroll",y,{passive:!0}),function(){window.removeEventListener("scroll",y)}}),[]),a.createElement("div",{className:(0,p.Z)(i),ref:f},a.createElement("div",{className:(0,p.Z)(r)},a.createElement("div",{className:(0,p.Z)(o),style:u?{borderColor:"#001a72"}:{}},a.createElement("div",{className:(0,p.Z)(s)},t),n[0])),a.createElement("div",{className:(0,p.Z)(u?c:[c,l])},n[1]))}},8610:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return A},default:function(){return E},frontMatter:function(){return Z},metadata:function(){return P},toc:function(){return V}});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),r=t(7819),s=t(5772),c={toc:[]};function l(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport { Button, View, Text, ScrollView, TextInput } from 'react-native';\n\ninterface EventParticipant {\n  name: string;\n  id: string;\n}\n\nconst styles = {\n  participantView: {\n    borderBottomColor: 'black',\n    width: '100%',\n    borderBottomWidth: 1,\n    padding: 10,\n    display: 'flex',\n    flexDirection: 'row',\n    alignItems: 'center',\n    justifyContent: 'space-between',\n    backgroundColor: '#fffbeb',\n  },\n  listView: {\n    display: 'flex',\n    flexDirection: 'column',\n    alignItems: 'center',\n    justifyContent: 'space-between',\n    height: '100%',\n    paddingBottom: 30,\n  },\n  bottomRow: {\n    width: '100%',\n    display: 'flex',\n    flexDirection: 'row',\n    justifyContent: 'space-between',\n    alignItems: 'center',\n    padding: 10,\n  },\n  textInput:  {\n    display: 'flex',\n    flexDirection: 'row',\n    alignItems: 'center',\n  },\n}\n\nfunction Participant({\n  name,\n  onRemove,\n}: {\n  name: string;\n  onRemove: () => void;\n}): React.ReactElement {\n  return (\n    <View\n      style={[styles.participantView]}>\n      <Text>{name}</Text>\n      <Button title=\"Remove\" color=\"red\" onPress={onRemove} />\n    </View>\n  );\n}\n\nexport default function AnimatedListExample(): React.ReactElement {\n  const [inputValue, setInputValue] = useState('');\n  const [participantList, setParticipantList] = useState<EventParticipant[]>(\n    []\n  );\n\n  const addParticipant = () => {\n    setParticipantList(\n      [{ name: inputValue, id: Date.now().toString() }].concat(participantList)\n    );\n    setInputValue('');\n  };\n\n  const removeParticipant = (id: string) => {\n    setParticipantList(\n      participantList.filter((participant) => participant.id !== id)\n    );\n  };\n\n  return (\n    <View\n      style={[styles.listView]}>\n      <ScrollView style={[{ width: '100%' }]}>\n        {participantList.map((participant) => (\n          <Participant\n            key={participant.id}\n            name={participant.name}\n            onRemove={() => removeParticipant(participant.id)}\n          />\n        ))}\n      </ScrollView>\n\n      <View\n        style={[ styles.bottomRow]}>\n        <View\n          style={[styles.textInput]}>\n          <Text>Add participant: </Text>\n          <TextInput\n            placeholder=\"Name\"\n            value={inputValue}\n            onChangeText={setInputValue}\n          />\n        </View>\n\n        <Button\n          title=\"Add\"\n          disabled={inputValue === ''}\n          onPress={addParticipant}\n        />\n      </View>\n    </View>\n  );\n}\n")))}l.isMDXComponent=!0;var p={toc:[]};function m(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{4-8}","{4-8}":!0},"...\n<ScrollView style={[{ width: '100%' }]}>\n  {participantList.map((participant) => (\n    <Participant\n      key={participant.id}\n      name={participant.name}\n      onRemove={() => removeParticipant(participant.id)}\n    />\n  ))}\n</ScrollView>\n...\n")))}m.isMDXComponent=!0;var u={toc:[]};function d(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{10,14}","{10,14}":!0},'...\nfunction Participant({\n  name,\n  onRemove,\n}: {\n  name: string;\n  onRemove: () => void;\n}): React.ReactElement {\n  return (\n    <View\n      style={[styles.participantView]}>\n      <Text>{name}</Text>\n      <Button title="Remove" color="red" onPress={onRemove} />\n    </View>\n  );\n}\n...\n')))}d.isMDXComponent=!0;var f={toc:[]};function y(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{1,11,15}","{1,11,15}":!0},'import Animated from \'react-native-reanimated\';\n...\nfunction Participant({\n  name,\n  onRemove,\n}: {\n  name: string;\n  onRemove: () => void;\n}): React.ReactElement {\n  return (\n    <Animated.View\n      style={[styles.participantView]}>\n      <Text>{name}</Text>\n      <Button title="Remove" color="red" onPress={onRemove} />\n    </Animated.View>\n  );\n}\n...\n')))}y.isMDXComponent=!0;var g={toc:[]};function v(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{1,12}","{1,12}":!0},'import Animated, {LightSpeedInLeft} from \'react-native-reanimated\';\n...\nfunction Participant({\n  name,\n  onRemove,\n}: {\n  name: string;\n  onRemove: () => void;\n}): React.ReactElement {\n  return (\n    <Animated.View\n      entering={LightSpeedInLeft}\n      style={[styles.participantView]}>\n      <Text>{name}</Text>\n      <Button title="Remove" color="red" onPress={onRemove} />\n    </Animated.View>\n  );\n}\n...\n')))}v.isMDXComponent=!0;var w={toc:[]};function h(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},w,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{3,16}","{3,16}":!0},'import Animated, {\n  LightSpeedInLeft, \n  Layout\n} from \'react-native-reanimated\';\n...\nfunction Participant({\n  name,\n  onRemove,\n}: {\n  name: string;\n  onRemove: () => void;\n}): React.ReactElement {\n  return (\n    <Animated.View\n      entering={LightSpeedInLeft}\n      layout={Layout.springify()}\n      style={[styles.participantView]}>\n      <Text>{name}</Text>\n      <Button title="Remove" color="red" onPress={onRemove} />\n    </Animated.View>\n  );\n}\n...\n')))}h.isMDXComponent=!0;var x={toc:[]};function b(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},x,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{3,17}","{3,17}":!0},'import Animated, {\n  LightSpeedInLeft, \n  LightSpeedOutRight\n  Layout\n} from \'react-native-reanimated\';\n...\nfunction Participant({\n  name,\n  onRemove,\n}: {\n  name: string;\n  onRemove: () => void;\n}): React.ReactElement {\n  return (\n    <Animated.View\n      entering={LightSpeedInLeft}\n      exiting={LightSpeedOutRight}\n      layout={Layout.springify()}\n      style={[styles.participantView]}>\n      <Text>{name}</Text>\n      <Button title="Remove" color="red" onPress={onRemove} />\n    </Animated.View>\n  );\n}\n...\n')))}b.isMDXComponent=!0;var k=t(579),T=t(4643),L=t(878),R=t(9438),Z={id:"layoutAnimations",title:"How to easily animate your screens and components",sidebar_label:"Layout Animations",hide_table_of_contents:!0},A=void 0,P={unversionedId:"tutorials/LayoutAnimations/layoutAnimations",id:"version-2.3.0-alpha.3/tutorials/LayoutAnimations/layoutAnimations",isDocsHomePage:!1,title:"How to easily animate your screens and components",description:"This tutorial will help you make your screens and components more smooth by adding animations.",source:"@site/versioned_docs/version-2.3.0-alpha.3/tutorials/LayoutAnimations/animated_list.mdx",sourceDirName:"tutorials/LayoutAnimations",slug:"/tutorials/LayoutAnimations/layoutAnimations",permalink:"/react-native-reanimated/docs/tutorials/LayoutAnimations/layoutAnimations",version:"2.3.0-alpha.3",frontMatter:{id:"layoutAnimations",title:"How to easily animate your screens and components",sidebar_label:"Layout Animations",hide_table_of_contents:!0},sidebar:"version-2.3.0-alpha.3/docs",previous:{title:"Testing with Jest",permalink:"/react-native-reanimated/docs/guide/testing"},next:{title:"Community",permalink:"/react-native-reanimated/docs/community"}},V=[],S={toc:V};function E(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},S,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This tutorial will help you make your screens and components more smooth by adding animations.\nWe will use a new feature from the Reanimated library - Layout Animations which lets us animate:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"components appearance"),(0,o.kt)("li",{parentName:"ul"},"components disappearance"),(0,o.kt)("li",{parentName:"ul"},"layout changes")),(0,o.kt)("p",null,"using predefined animations. There are plenty of predefined animations you can use, however,\nif you need to create more customized animation, you can easily implemented your own."),(0,o.kt)("p",null,"To give you a better understanding of how to use those animations,\nwe are gonna prettify already existing screen - participant list, by adding layout animations to its components.\nHere you can see, change that we will get after going through this tutorial."),(0,o.kt)(s.Z,{before:k.Z,after:R.Z,mdxType:"BeforeAndAfter"}),(0,o.kt)(r.Z,{title:"Screen Introduction",mdxType:"TutorialStep"},(0,o.kt)("div",null,"Here we have already an existing codebase for participant list, which you can easily copy and try for yourself. Let's focus on parts that we will animate, in this case - Participant component."),(0,o.kt)(l,{mdxType:"FullCode"})),(0,o.kt)(r.Z,{title:"Participant component",mdxType:"TutorialStep"},(0,o.kt)("div",null,"Participant component is responsible for displaying a list item, which we will be animating."),(0,o.kt)(m,{mdxType:"ParticipantComponent"})),(0,o.kt)(r.Z,{title:"Participant component internals",mdxType:"TutorialStep"},(0,o.kt)("div",null,"As you can see Participant component is wrapped in one View component, and that's the place where will be adding our animations. We can animate only components that are provided by reanimated ( e.g. Animated.View ), or components we changed using createAnimatedComponent."),(0,o.kt)(d,{mdxType:"ParticipantInternals"})),(0,o.kt)(r.Z,{title:"Step 1",mdxType:"TutorialStep"},(0,o.kt)("div",null,"Let's import Animated from reanimated and replace View with Animated.View, so we can add animations to our component."),(0,o.kt)(y,{mdxType:"Step1"})),(0,o.kt)(r.Z,{title:"Step 2",mdxType:"TutorialStep"},(0,o.kt)("div",null,"Now let's add an entering animation. We can choose entering animation from plenty of available\xa0",(0,o.kt)("a",{href:"https://docs.swmansion.com/react-native-reanimated/docs/api/LayoutAnimations/entryAnimations"},"predefined animation."),"\xa0We will go with LightSpeedInLeft effect."),(0,o.kt)(v,{mdxType:"Step2"})),(0,o.kt)(r.Z,{title:"Current result",mdxType:"TutorialStep"},(0,o.kt)("div",null,"Here you can see, the effect we have achieved by adding entering animation."),(0,o.kt)("img",{src:T.Z,style:{height:"500px",width:"auto",borderRadius:"5%"}})),(0,o.kt)(r.Z,{title:"Step 3",mdxType:"TutorialStep"},(0,o.kt)("div",null,"Now let's add layout transition."),(0,o.kt)(h,{mdxType:"Step3"})),(0,o.kt)(r.Z,{title:"Current result",mdxType:"TutorialStep"},(0,o.kt)("div",null,"Here you can see, the effect we have achieved by adding layout transition."),(0,o.kt)("img",{src:L.Z,style:{height:"500px",width:"auto",borderRadius:"5%"}})),(0,o.kt)(r.Z,{title:"Step 4",mdxType:"TutorialStep"},(0,o.kt)("div",null,"Now let's add an exiting animation. We can choose exiting animation from plenty of available\xa0",(0,o.kt)("a",{href:"https://docs.swmansion.com/react-native-reanimated/docs/api/LayoutAnimations/exitingAnimations"},"predefined animation."),"\xa0We will go with LightSpeedOutRight effect."),(0,o.kt)(b,{mdxType:"Step4"})),(0,o.kt)("h4",{id:"and-thats-all-you-can-see-that-adding-layout-animations-to-our-list-was-super-easy-and-the-user-experience-is-way-better-full-code-of-the-animated-list-you-can-find-here"},"And that's all! You can see that adding layout animations to our list was super easy and the user experience is way better. Full code of the animated list you can find ",(0,o.kt)("a",{parentName:"h4",href:"https://gist.github.com/jmysliv/0056d6cd3021883ea0f2c7f4af0526b2"},"here"),"."),(0,o.kt)("center",null,(0,o.kt)("img",{src:R.Z,height:"500px",style:{borderRadius:"5%"}})))}E.isMDXComponent=!0},6010:function(e,n,t){function a(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}function i(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(i&&(i+=" "),i+=n);return i}t.d(n,{Z:function(){return i}})},9438:function(e,n,t){n.Z=t.p+"assets/images/after-e3e04aaf52902a396d6f5887bdc1bdb5.gif"},579:function(e,n,t){n.Z=t.p+"assets/images/before-ccd07f388857274c1860e64e5155bc9c.gif"},4643:function(e,n,t){n.Z=t.p+"assets/images/entering-2ec23ca10dce1dad1319cc6c5e195267.gif"},878:function(e,n,t){n.Z=t.p+"assets/images/layout-341920cb35d6f1c27bad9e20059bdaf6.gif"}}]);