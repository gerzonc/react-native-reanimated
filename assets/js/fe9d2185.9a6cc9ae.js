"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[1491],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return y}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(n),y=o,f=p["".concat(s,".").concat(y)]||p[y]||m[y]||r;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3612:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return c}});var a=n(3117),o=(n(7294),n(3905));const r={id:"layout_animations",title:"Layout Animations",sidebar_label:"Layout Animations"},i=void 0,u={unversionedId:"fundamentals/layout_animations",id:"version-2.5.x/fundamentals/layout_animations",title:"Layout Animations",description:"Layout Animation - the easiest way to animate entering/exiting/layout of your components.",source:"@site/versioned_docs/version-2.5.x/fundamentals/layout_animations.md",sourceDirName:"fundamentals",slug:"/fundamentals/layout_animations",permalink:"/react-native-reanimated/docs/fundamentals/layout_animations",draft:!1,tags:[],version:"2.5.x",frontMatter:{id:"layout_animations",title:"Layout Animations",sidebar_label:"Layout Animations"},sidebar:"version-2.5.x/docs",previous:{title:"Custom Events",permalink:"/react-native-reanimated/docs/fundamentals/custom_events"},next:{title:"Architecture",permalink:"/react-native-reanimated/docs/fundamentals/architecture"}},s={},c=[{value:"Layout Animation - the easiest way to animate entering/exiting/layout of your components.",id:"layout-animation---the-easiest-way-to-animate-enteringexitinglayout-of-your-components",level:4},{value:"Read more about LayoutAnimation",id:"read-more-about-layoutanimation",level:3}],l={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"layout-animation---the-easiest-way-to-animate-enteringexitinglayout-of-your-components"},"Layout Animation - the easiest way to animate entering/exiting/layout of your components."),(0,o.kt)("p",null,"In React Native every component appears instantly whenever you add it to the component hierarchy. It's not something we are used to in the real world. Layout Animations are here to address the problem and help you animate an appearance of any view."),(0,o.kt)("p",null,"During unmounting of components from the hierarchy of views, it just disappears in the next frame. However you can beautify this process using Exiting Animations. Reanimated make a pretty animation of disappearing of component for you."),(0,o.kt)("h3",{id:"read-more-about-layoutanimation"},(0,o.kt)("a",{parentName:"h3",href:"./../api/LayoutAnimations/entryAnimations"},"Read more about LayoutAnimation")),(0,o.kt)("iframe",{width:"940px",height:"557px",src:"https://www.youtube.com/embed/6UXfS6FI674",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}m.isMDXComponent=!0}}]);