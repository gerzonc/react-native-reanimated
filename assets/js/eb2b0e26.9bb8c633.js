"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[965],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,b=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return t?a.createElement(b,p(p({ref:n},u),{},{components:t})):a.createElement(b,p({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var s=2;s<o;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4929:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const o={id:"web-support",title:"Web Support",sidebar_label:"Web Support"},p=void 0,l={unversionedId:"fundamentals/web-support",id:"fundamentals/web-support",title:"Web Support",description:"Since the",source:"@site/docs/fundamentals/web-support.md",sourceDirName:"fundamentals",slug:"/fundamentals/web-support",permalink:"/react-native-reanimated/docs/next/fundamentals/web-support",draft:!1,tags:[],version:"current",frontMatter:{id:"web-support",title:"Web Support",sidebar_label:"Web Support"},sidebar:"docs",previous:{title:"Migration from v1",permalink:"/react-native-reanimated/docs/next/fundamentals/migration"},next:{title:"Troubleshooting",permalink:"/react-native-reanimated/docs/next/fundamentals/troubleshooting"}},i={},s=[{value:"Webpack support",id:"webpack-support",level:2}],u={toc:s};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Since the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated/releases/tag/2.0.0-alpha.7"},"2.0.0-alpha.7"),"\nrelease it's possible to launch reanimated 2 in a web browser. For that case all of the functionalities are implemented purely in javascript, hence the efficiency of the animations might drop."),(0,r.kt)("p",null,"Reanimated for Web requires the following configuration steps. You need to add ",(0,r.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-plugin-proposal-export-namespace-from"},(0,r.kt)("inlineCode",{parentName:"a"},"@babel/plugin-proposal-export-namespace-from"))," as well as Reanimated Babel plugin to your ",(0,r.kt)("inlineCode",{parentName:"p"},"babel.config.js"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @babel/plugin-proposal-export-namespace-from\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{5,6}","{5,6}":!0},"module.exports = {\n  presets: [\n      ...\n  ],\n  plugins: [\n    ...\n    '@babel/plugin-proposal-export-namespace-from',\n    'react-native-reanimated/plugin',\n  ],\n};\n")),(0,r.kt)("p",null,"If you use\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/software-mansion-labs/reanimated-2-playground"},"playground"),"\napp and want to start it in the browser just type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn web\n")),(0,r.kt)("p",null,"If you want to start the example applications from the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated"},"reanimated repository"),"\nyou need to run the following command inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"Example")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn start-web\n")),(0,r.kt)("h2",{id:"webpack-support"},"Webpack support"),(0,r.kt)("p",null,"If you want to use Reanimated in a ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack")," app you should adjust your ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack")," config."),(0,r.kt)("p",null,"Example webpack config file with Reanimated support:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{6,14,15,34}","{6,14,15,34}":!0},"const HtmlWebpackPlugin = require('html-webpack-plugin');\nconst webpack = require('webpack');\n\nmodule.exports = {\n  entry: [\n    'babel-polyfill', \n    './index.js'\n  ],\n  plugins: [\n    new HtmlWebpackPlugin({\n      filename: 'index.html',\n      template: './index.html',\n    }),\n    new webpack.EnvironmentPlugin({ JEST_WORKER_ID: null }),\n    new webpack.DefinePlugin({ process: { env: {} } })\n  ],\n  module: {\n    rules: [\n      {\n        test: /\\.(js|jsx)$/,\n        use: {\n          loader: 'babel-loader',\n          options: {\n            presets: [\n              '@babel/preset-react',\n              { plugins: ['@babel/plugin-proposal-class-properties'] }\n            ],\n          },\n        },\n      },\n    ],\n  },\n  resolve: {\n    alias: { 'react-native$': 'react-native-web', },\n    extensions: ['.web.js', '.js'],\n  },\n};\n")))}c.isMDXComponent=!0}}]);