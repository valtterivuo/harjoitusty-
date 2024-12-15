(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(a){if(a.ep)return;a.ep=!0;const u=t(a);fetch(a.href,u)}})();var Eh={exports:{}},ca={},wh={exports:{}},Ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function Ov(){if(rm)return Ee;rm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),D=Symbol.iterator;function U(O){return O===null||typeof O!="object"?null:(O=D&&O[D]||O["@@iterator"],typeof O=="function"?O:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,J={};function K(O,z,ae){this.props=O,this.context=z,this.refs=J,this.updater=ae||q}K.prototype.isReactComponent={},K.prototype.setState=function(O,z){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,z,"setState")},K.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function Ae(){}Ae.prototype=K.prototype;function Te(O,z,ae){this.props=O,this.context=z,this.refs=J,this.updater=ae||q}var ge=Te.prototype=new Ae;ge.constructor=Te,X(ge,K.prototype),ge.isPureReactComponent=!0;var _e=Array.isArray,He=Object.prototype.hasOwnProperty,we={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function I(O,z,ae){var ye,ve={},Re=null,Le=null;if(z!=null)for(ye in z.ref!==void 0&&(Le=z.ref),z.key!==void 0&&(Re=""+z.key),z)He.call(z,ye)&&!k.hasOwnProperty(ye)&&(ve[ye]=z[ye]);var xe=arguments.length-2;if(xe===1)ve.children=ae;else if(1<xe){for(var ze=Array(xe),pt=0;pt<xe;pt++)ze[pt]=arguments[pt+2];ve.children=ze}if(O&&O.defaultProps)for(ye in xe=O.defaultProps,xe)ve[ye]===void 0&&(ve[ye]=xe[ye]);return{$$typeof:i,type:O,key:Re,ref:Le,props:ve,_owner:we.current}}function A(O,z){return{$$typeof:i,type:O.type,key:z,ref:O.ref,props:O.props,_owner:O._owner}}function C(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function N(O){var z={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ae){return z[ae]})}var V=/\/+/g;function S(O,z){return typeof O=="object"&&O!==null&&O.key!=null?N(""+O.key):z.toString(36)}function Ze(O,z,ae,ye,ve){var Re=typeof O;(Re==="undefined"||Re==="boolean")&&(O=null);var Le=!1;if(O===null)Le=!0;else switch(Re){case"string":case"number":Le=!0;break;case"object":switch(O.$$typeof){case i:case e:Le=!0}}if(Le)return Le=O,ve=ve(Le),O=ye===""?"."+S(Le,0):ye,_e(ve)?(ae="",O!=null&&(ae=O.replace(V,"$&/")+"/"),Ze(ve,z,ae,"",function(pt){return pt})):ve!=null&&(C(ve)&&(ve=A(ve,ae+(!ve.key||Le&&Le.key===ve.key?"":(""+ve.key).replace(V,"$&/")+"/")+O)),z.push(ve)),1;if(Le=0,ye=ye===""?".":ye+":",_e(O))for(var xe=0;xe<O.length;xe++){Re=O[xe];var ze=ye+S(Re,xe);Le+=Ze(Re,z,ae,ze,ve)}else if(ze=U(O),typeof ze=="function")for(O=ze.call(O),xe=0;!(Re=O.next()).done;)Re=Re.value,ze=ye+S(Re,xe++),Le+=Ze(Re,z,ae,ze,ve);else if(Re==="object")throw z=String(O),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return Le}function Ct(O,z,ae){if(O==null)return O;var ye=[],ve=0;return Ze(O,ye,"","",function(Re){return z.call(ae,Re,ve++)}),ye}function Pt(O){if(O._status===-1){var z=O._result;z=z(),z.then(function(ae){(O._status===0||O._status===-1)&&(O._status=1,O._result=ae)},function(ae){(O._status===0||O._status===-1)&&(O._status=2,O._result=ae)}),O._status===-1&&(O._status=0,O._result=z)}if(O._status===1)return O._result.default;throw O._result}var Ue={current:null},Y={transition:null},le={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:Y,ReactCurrentOwner:we};function ee(){throw Error("act(...) is not supported in production builds of React.")}return Ee.Children={map:Ct,forEach:function(O,z,ae){Ct(O,function(){z.apply(this,arguments)},ae)},count:function(O){var z=0;return Ct(O,function(){z++}),z},toArray:function(O){return Ct(O,function(z){return z})||[]},only:function(O){if(!C(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ee.Component=K,Ee.Fragment=t,Ee.Profiler=a,Ee.PureComponent=Te,Ee.StrictMode=s,Ee.Suspense=y,Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,Ee.act=ee,Ee.cloneElement=function(O,z,ae){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var ye=X({},O.props),ve=O.key,Re=O.ref,Le=O._owner;if(z!=null){if(z.ref!==void 0&&(Re=z.ref,Le=we.current),z.key!==void 0&&(ve=""+z.key),O.type&&O.type.defaultProps)var xe=O.type.defaultProps;for(ze in z)He.call(z,ze)&&!k.hasOwnProperty(ze)&&(ye[ze]=z[ze]===void 0&&xe!==void 0?xe[ze]:z[ze])}var ze=arguments.length-2;if(ze===1)ye.children=ae;else if(1<ze){xe=Array(ze);for(var pt=0;pt<ze;pt++)xe[pt]=arguments[pt+2];ye.children=xe}return{$$typeof:i,type:O.type,key:ve,ref:Re,props:ye,_owner:Le}},Ee.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:u,_context:O},O.Consumer=O},Ee.createElement=I,Ee.createFactory=function(O){var z=I.bind(null,O);return z.type=O,z},Ee.createRef=function(){return{current:null}},Ee.forwardRef=function(O){return{$$typeof:m,render:O}},Ee.isValidElement=C,Ee.lazy=function(O){return{$$typeof:w,_payload:{_status:-1,_result:O},_init:Pt}},Ee.memo=function(O,z){return{$$typeof:v,type:O,compare:z===void 0?null:z}},Ee.startTransition=function(O){var z=Y.transition;Y.transition={};try{O()}finally{Y.transition=z}},Ee.unstable_act=ee,Ee.useCallback=function(O,z){return Ue.current.useCallback(O,z)},Ee.useContext=function(O){return Ue.current.useContext(O)},Ee.useDebugValue=function(){},Ee.useDeferredValue=function(O){return Ue.current.useDeferredValue(O)},Ee.useEffect=function(O,z){return Ue.current.useEffect(O,z)},Ee.useId=function(){return Ue.current.useId()},Ee.useImperativeHandle=function(O,z,ae){return Ue.current.useImperativeHandle(O,z,ae)},Ee.useInsertionEffect=function(O,z){return Ue.current.useInsertionEffect(O,z)},Ee.useLayoutEffect=function(O,z){return Ue.current.useLayoutEffect(O,z)},Ee.useMemo=function(O,z){return Ue.current.useMemo(O,z)},Ee.useReducer=function(O,z,ae){return Ue.current.useReducer(O,z,ae)},Ee.useRef=function(O){return Ue.current.useRef(O)},Ee.useState=function(O){return Ue.current.useState(O)},Ee.useSyncExternalStore=function(O,z,ae){return Ue.current.useSyncExternalStore(O,z,ae)},Ee.useTransition=function(){return Ue.current.useTransition()},Ee.version="18.3.1",Ee}var im;function ud(){return im||(im=1,wh.exports=Ov()),wh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function Vv(){if(sm)return ca;sm=1;var i=ud(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,v){var w,D={},U=null,q=null;v!==void 0&&(U=""+v),y.key!==void 0&&(U=""+y.key),y.ref!==void 0&&(q=y.ref);for(w in y)s.call(y,w)&&!u.hasOwnProperty(w)&&(D[w]=y[w]);if(m&&m.defaultProps)for(w in y=m.defaultProps,y)D[w]===void 0&&(D[w]=y[w]);return{$$typeof:e,type:m,key:U,ref:q,props:D,_owner:a.current}}return ca.Fragment=t,ca.jsx=h,ca.jsxs=h,ca}var om;function Lv(){return om||(om=1,Eh.exports=Vv()),Eh.exports}var Me=Lv(),Hs=ud(),Jl={},Th={exports:{}},Qt={},Ih={exports:{}},Sh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var am;function xv(){return am||(am=1,function(i){function e(Y,le){var ee=Y.length;Y.push(le);e:for(;0<ee;){var O=ee-1>>>1,z=Y[O];if(0<a(z,le))Y[O]=le,Y[ee]=z,ee=O;else break e}}function t(Y){return Y.length===0?null:Y[0]}function s(Y){if(Y.length===0)return null;var le=Y[0],ee=Y.pop();if(ee!==le){Y[0]=ee;e:for(var O=0,z=Y.length,ae=z>>>1;O<ae;){var ye=2*(O+1)-1,ve=Y[ye],Re=ye+1,Le=Y[Re];if(0>a(ve,ee))Re<z&&0>a(Le,ve)?(Y[O]=Le,Y[Re]=ee,O=Re):(Y[O]=ve,Y[ye]=ee,O=ye);else if(Re<z&&0>a(Le,ee))Y[O]=Le,Y[Re]=ee,O=Re;else break e}}return le}function a(Y,le){var ee=Y.sortIndex-le.sortIndex;return ee!==0?ee:Y.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var y=[],v=[],w=1,D=null,U=3,q=!1,X=!1,J=!1,K=typeof setTimeout=="function"?setTimeout:null,Ae=typeof clearTimeout=="function"?clearTimeout:null,Te=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ge(Y){for(var le=t(v);le!==null;){if(le.callback===null)s(v);else if(le.startTime<=Y)s(v),le.sortIndex=le.expirationTime,e(y,le);else break;le=t(v)}}function _e(Y){if(J=!1,ge(Y),!X)if(t(y)!==null)X=!0,Pt(He);else{var le=t(v);le!==null&&Ue(_e,le.startTime-Y)}}function He(Y,le){X=!1,J&&(J=!1,Ae(I),I=-1),q=!0;var ee=U;try{for(ge(le),D=t(y);D!==null&&(!(D.expirationTime>le)||Y&&!N());){var O=D.callback;if(typeof O=="function"){D.callback=null,U=D.priorityLevel;var z=O(D.expirationTime<=le);le=i.unstable_now(),typeof z=="function"?D.callback=z:D===t(y)&&s(y),ge(le)}else s(y);D=t(y)}if(D!==null)var ae=!0;else{var ye=t(v);ye!==null&&Ue(_e,ye.startTime-le),ae=!1}return ae}finally{D=null,U=ee,q=!1}}var we=!1,k=null,I=-1,A=5,C=-1;function N(){return!(i.unstable_now()-C<A)}function V(){if(k!==null){var Y=i.unstable_now();C=Y;var le=!0;try{le=k(!0,Y)}finally{le?S():(we=!1,k=null)}}else we=!1}var S;if(typeof Te=="function")S=function(){Te(V)};else if(typeof MessageChannel<"u"){var Ze=new MessageChannel,Ct=Ze.port2;Ze.port1.onmessage=V,S=function(){Ct.postMessage(null)}}else S=function(){K(V,0)};function Pt(Y){k=Y,we||(we=!0,S())}function Ue(Y,le){I=K(function(){Y(i.unstable_now())},le)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Y){Y.callback=null},i.unstable_continueExecution=function(){X||q||(X=!0,Pt(He))},i.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<Y?Math.floor(1e3/Y):5},i.unstable_getCurrentPriorityLevel=function(){return U},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function(Y){switch(U){case 1:case 2:case 3:var le=3;break;default:le=U}var ee=U;U=le;try{return Y()}finally{U=ee}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(Y,le){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var ee=U;U=Y;try{return le()}finally{U=ee}},i.unstable_scheduleCallback=function(Y,le,ee){var O=i.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?O+ee:O):ee=O,Y){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=ee+z,Y={id:w++,callback:le,priorityLevel:Y,startTime:ee,expirationTime:z,sortIndex:-1},ee>O?(Y.sortIndex=ee,e(v,Y),t(y)===null&&Y===t(v)&&(J?(Ae(I),I=-1):J=!0,Ue(_e,ee-O))):(Y.sortIndex=z,e(y,Y),X||q||(X=!0,Pt(He))),Y},i.unstable_shouldYield=N,i.unstable_wrapCallback=function(Y){var le=U;return function(){var ee=U;U=le;try{return Y.apply(this,arguments)}finally{U=ee}}}}(Sh)),Sh}var lm;function Mv(){return lm||(lm=1,Ih.exports=xv()),Ih.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um;function Fv(){if(um)return Qt;um=1;var i=ud(),e=Mv();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(a[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},D={};function U(n){return y.call(D,n)?!0:y.call(w,n)?!1:v.test(n)?D[n]=!0:(w[n]=!0,!1)}function q(n,r,o,c){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function X(n,r,o,c){if(r===null||typeof r>"u"||q(n,r,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function J(n,r,o,c,d,p,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=_}var K={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){K[n]=new J(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];K[r]=new J(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){K[n]=new J(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){K[n]=new J(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){K[n]=new J(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){K[n]=new J(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){K[n]=new J(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){K[n]=new J(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){K[n]=new J(n,5,!1,n.toLowerCase(),null,!1,!1)});var Ae=/[\-:]([a-z])/g;function Te(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(Ae,Te);K[r]=new J(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(Ae,Te);K[r]=new J(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(Ae,Te);K[r]=new J(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){K[n]=new J(n,1,!1,n.toLowerCase(),null,!1,!1)}),K.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){K[n]=new J(n,1,!1,n.toLowerCase(),null,!0,!0)});function ge(n,r,o,c){var d=K.hasOwnProperty(r)?K[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(X(r,o,d,c)&&(o=null),c||d===null?U(r)&&(o===null?n.removeAttribute(r):n.setAttribute(r,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(r=d.attributeName,c=d.attributeNamespace,o===null?n.removeAttribute(r):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,c?n.setAttributeNS(c,r,o):n.setAttribute(r,o))))}var _e=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,He=Symbol.for("react.element"),we=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),N=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),Ze=Symbol.for("react.suspense_list"),Ct=Symbol.for("react.memo"),Pt=Symbol.for("react.lazy"),Ue=Symbol.for("react.offscreen"),Y=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=Y&&n[Y]||n["@@iterator"],typeof n=="function"?n:null)}var ee=Object.assign,O;function z(n){if(O===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var ae=!1;function ye(n,r){if(!n||ae)return"";ae=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var c=F}Reflect.construct(n,[],r)}else{try{r.call()}catch(F){c=F}n.call(r.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),p=c.stack.split(`
`),_=d.length-1,T=p.length-1;1<=_&&0<=T&&d[_]!==p[T];)T--;for(;1<=_&&0<=T;_--,T--)if(d[_]!==p[T]){if(_!==1||T!==1)do if(_--,T--,0>T||d[_]!==p[T]){var R=`
`+d[_].replace(" at new "," at ");return n.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",n.displayName)),R}while(1<=_&&0<=T);break}}}finally{ae=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?z(n):""}function ve(n){switch(n.tag){case 5:return z(n.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return n=ye(n.type,!1),n;case 11:return n=ye(n.type.render,!1),n;case 1:return n=ye(n.type,!0),n;default:return""}}function Re(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case we:return"Portal";case A:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case Ze:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case N:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case V:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Ct:return r=n.displayName||null,r!==null?r:Re(n.type)||"Memo";case Pt:r=n._payload,n=n._init;try{return Re(n(r))}catch{}}return null}function Le(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Re(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function xe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ze(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function pt(n){var r=ze(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,p.call(this,_)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Qn(n){n._valueTracker||(n._valueTracker=pt(n))}function Gi(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),c="";return n&&(c=ze(n)?n.checked?"true":"false":n.value),n=c,n!==o?(r.setValue(n),!0):!1}function Tr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ci(n,r){var o=r.checked;return ee({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Qi(n,r){var o=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;o=xe(r.value!=null?r.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function go(n,r){r=r.checked,r!=null&&ge(n,"checked",r,!1)}function yo(n,r){go(n,r);var o=xe(r.value),c=r.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Yi(n,r.type,o):r.hasOwnProperty("defaultValue")&&Yi(n,r.type,xe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Fa(n,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,o||r===n.value||(n.value=r),n.defaultValue=r}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Yi(n,r,o){(r!=="number"||Tr(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Yn=Array.isArray;function Xn(n,r,o,c){if(n=n.options,r){r={};for(var d=0;d<o.length;d++)r["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=r.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&c&&(n[o].defaultSelected=!0)}else{for(o=""+xe(o),r=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function _o(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Xi(n,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(t(92));if(Yn(o)){if(1<o.length)throw Error(t(93));o=o[0]}r=o}r==null&&(r=""),o=r}n._wrapperState={initialValue:xe(o)}}function Ji(n,r){var o=xe(r.value),c=xe(r.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),r.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function vo(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function lt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ut(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?lt(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Jn,Eo=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,o,c,d)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Jn=Jn||document.createElement("div"),Jn.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Jn.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Ir(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var hi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},di=["Webkit","ms","Moz","O"];Object.keys(hi).forEach(function(n){di.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),hi[r]=hi[n]})});function wo(n,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||hi.hasOwnProperty(n)&&hi[n]?(""+r).trim():r+"px"}function To(n,r){n=n.style;for(var o in r)if(r.hasOwnProperty(o)){var c=o.indexOf("--")===0,d=wo(o,r[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,d):n[o]=d}}var Io=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function So(n,r){if(r){if(Io[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Ao(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fi=null;function Zi(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var es=null,sn=null,Vn=null;function ts(n){if(n=Qo(n)){if(typeof es!="function")throw Error(t(280));var r=n.stateNode;r&&(r=fl(r),es(n.stateNode,n.type,r))}}function Ln(n){sn?Vn?Vn.push(n):Vn=[n]:sn=n}function Ro(){if(sn){var n=sn,r=Vn;if(Vn=sn=null,ts(n),r)for(n=0;n<r.length;n++)ts(r[n])}}function pi(n,r){return n(r)}function Co(){}var Zn=!1;function Po(n,r,o){if(Zn)return n(r,o);Zn=!0;try{return pi(n,r,o)}finally{Zn=!1,(sn!==null||Vn!==null)&&(Co(),Ro())}}function et(n,r){var o=n.stateNode;if(o===null)return null;var c=fl(o);if(c===null)return null;o=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,r,typeof o));return o}var ns=!1;if(m)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){ns=!0}}),window.addEventListener("test",mn,mn),window.removeEventListener("test",mn,mn)}catch{ns=!1}function mi(n,r,o,c,d,p,_,T,R){var F=Array.prototype.slice.call(arguments,3);try{r.apply(o,F)}catch($){this.onError($)}}var gi=!1,rs=null,gn=!1,ko=null,Gu={onError:function(n){gi=!0,rs=n}};function is(n,r,o,c,d,p,_,T,R){gi=!1,rs=null,mi.apply(Gu,arguments)}function Ua(n,r,o,c,d,p,_,T,R){if(is.apply(this,arguments),gi){if(gi){var F=rs;gi=!1,rs=null}else throw Error(t(198));gn||(gn=!0,ko=F)}}function yn(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,r.flags&4098&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function yi(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function _n(n){if(yn(n)!==n)throw Error(t(188))}function ba(n){var r=n.alternate;if(!r){if(r=yn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var o=n,c=r;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return _n(d),n;if(p===c)return _n(d),r;p=p.sibling}throw Error(t(188))}if(o.return!==c.return)o=d,c=p;else{for(var _=!1,T=d.child;T;){if(T===o){_=!0,o=d,c=p;break}if(T===c){_=!0,c=d,o=p;break}T=T.sibling}if(!_){for(T=p.child;T;){if(T===o){_=!0,o=p,c=d;break}if(T===c){_=!0,c=p,o=d;break}T=T.sibling}if(!_)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:r}function No(n){return n=ba(n),n!==null?ss(n):null}function ss(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=ss(n);if(r!==null)return r;n=n.sibling}return null}var os=e.unstable_scheduleCallback,Do=e.unstable_cancelCallback,za=e.unstable_shouldYield,Qu=e.unstable_requestPaint,je=e.unstable_now,ja=e.unstable_getCurrentPriorityLevel,_i=e.unstable_ImmediatePriority,Sr=e.unstable_UserBlockingPriority,on=e.unstable_NormalPriority,Oo=e.unstable_LowPriority,Ba=e.unstable_IdlePriority,vi=null,Xt=null;function $a(n){if(Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(vi,n,void 0,(n.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:Ha,Vo=Math.log,qa=Math.LN2;function Ha(n){return n>>>=0,n===0?32:31-(Vo(n)/qa|0)|0}var as=64,ls=4194304;function Ar(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ei(n,r){var o=n.pendingLanes;if(o===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,_=o&268435455;if(_!==0){var T=_&~d;T!==0?c=Ar(T):(p&=_,p!==0&&(c=Ar(p)))}else _=o&~d,_!==0?c=Ar(_):p!==0&&(c=Ar(p));if(c===0)return 0;if(r!==0&&r!==c&&!(r&d)&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if(c&4&&(c|=o&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)o=31-Ut(r),d=1<<o,c|=n[o],r&=~d;return c}function Yu(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function er(n,r){for(var o=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var _=31-Ut(p),T=1<<_,R=d[_];R===-1?(!(T&o)||T&c)&&(d[_]=Yu(T,r)):R<=r&&(n.expiredLanes|=T),p&=~T}}function Jt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function wi(){var n=as;return as<<=1,!(as&4194240)&&(as=64),n}function Rr(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function Cr(n,r,o){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Ut(r),n[r]=o}function be(n,r){var o=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-Ut(o),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,o&=~p}}function Pr(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var c=31-Ut(o),d=1<<c;d&r|n[c]&r&&(n[c]|=r),o&=~d}}var Se=0;function kr(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Wa,us,Ka,Ga,Qa,Lo=!1,xn=[],wt=null,vn=null,En=null,Nr=new Map,an=new Map,Mn=[],Xu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ya(n,r){switch(n){case"focusin":case"focusout":wt=null;break;case"dragenter":case"dragleave":vn=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":Nr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":an.delete(r.pointerId)}}function Bt(n,r,o,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:o,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=Qo(r),r!==null&&us(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function Ju(n,r,o,c,d){switch(r){case"focusin":return wt=Bt(wt,n,r,o,c,d),!0;case"dragenter":return vn=Bt(vn,n,r,o,c,d),!0;case"mouseover":return En=Bt(En,n,r,o,c,d),!0;case"pointerover":var p=d.pointerId;return Nr.set(p,Bt(Nr.get(p)||null,n,r,o,c,d)),!0;case"gotpointercapture":return p=d.pointerId,an.set(p,Bt(an.get(p)||null,n,r,o,c,d)),!0}return!1}function Xa(n){var r=Ri(n.target);if(r!==null){var o=yn(r);if(o!==null){if(r=o.tag,r===13){if(r=yi(o),r!==null){n.blockedOn=r,Qa(n.priority,function(){Ka(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function tr(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=cs(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);fi=c,o.target.dispatchEvent(c),fi=null}else return r=Qo(o),r!==null&&us(r),n.blockedOn=o,!1;r.shift()}return!0}function Ti(n,r,o){tr(n)&&o.delete(r)}function Ja(){Lo=!1,wt!==null&&tr(wt)&&(wt=null),vn!==null&&tr(vn)&&(vn=null),En!==null&&tr(En)&&(En=null),Nr.forEach(Ti),an.forEach(Ti)}function wn(n,r){n.blockedOn===r&&(n.blockedOn=null,Lo||(Lo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ja)))}function Tn(n){function r(d){return wn(d,n)}if(0<xn.length){wn(xn[0],n);for(var o=1;o<xn.length;o++){var c=xn[o];c.blockedOn===n&&(c.blockedOn=null)}}for(wt!==null&&wn(wt,n),vn!==null&&wn(vn,n),En!==null&&wn(En,n),Nr.forEach(r),an.forEach(r),o=0;o<Mn.length;o++)c=Mn[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<Mn.length&&(o=Mn[0],o.blockedOn===null);)Xa(o),o.blockedOn===null&&Mn.shift()}var nr=_e.ReactCurrentBatchConfig,Dr=!0;function We(n,r,o,c){var d=Se,p=nr.transition;nr.transition=null;try{Se=1,xo(n,r,o,c)}finally{Se=d,nr.transition=p}}function Zu(n,r,o,c){var d=Se,p=nr.transition;nr.transition=null;try{Se=4,xo(n,r,o,c)}finally{Se=d,nr.transition=p}}function xo(n,r,o,c){if(Dr){var d=cs(n,r,o,c);if(d===null)cc(n,r,c,Ii,o),Ya(n,c);else if(Ju(d,n,r,o,c))c.stopPropagation();else if(Ya(n,c),r&4&&-1<Xu.indexOf(n)){for(;d!==null;){var p=Qo(d);if(p!==null&&Wa(p),p=cs(n,r,o,c),p===null&&cc(n,r,c,Ii,o),p===d)break;d=p}d!==null&&c.stopPropagation()}else cc(n,r,c,null,o)}}var Ii=null;function cs(n,r,o,c){if(Ii=null,n=Zi(c),n=Ri(n),n!==null)if(r=yn(n),r===null)n=null;else if(o=r.tag,o===13){if(n=yi(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Ii=n,null}function Mo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ja()){case _i:return 1;case Sr:return 4;case on:case Oo:return 16;case Ba:return 536870912;default:return 16}default:return 16}}var Zt=null,hs=null,$t=null;function Fo(){if($t)return $t;var n,r=hs,o=r.length,c,d="value"in Zt?Zt.value:Zt.textContent,p=d.length;for(n=0;n<o&&r[n]===d[n];n++);var _=o-n;for(c=1;c<=_&&r[o-c]===d[p-c];c++);return $t=d.slice(n,1<c?1-c:void 0)}function ds(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Fn(){return!0}function Uo(){return!1}function Tt(n){function r(o,c,d,p,_){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=_,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(o=n[T],this[T]=o?o(p):p[T]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Fn:Uo,this.isPropagationStopped=Uo,this}return ee(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Fn)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Fn)},persist:function(){},isPersistent:Fn}),r}var In={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fs=Tt(In),Un=ee({},In,{view:0,detail:0}),ec=Tt(Un),ps,rr,Or,Si=ee({},Un,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Or&&(Or&&n.type==="mousemove"?(ps=n.screenX-Or.screenX,rr=n.screenY-Or.screenY):rr=ps=0,Or=n),ps)},movementY:function(n){return"movementY"in n?n.movementY:rr}}),ms=Tt(Si),bo=ee({},Si,{dataTransfer:0}),Za=Tt(bo),gs=ee({},Un,{relatedTarget:0}),ys=Tt(gs),el=ee({},In,{animationName:0,elapsedTime:0,pseudoElement:0}),ir=Tt(el),tl=ee({},In,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),nl=Tt(tl),rl=ee({},In,{data:0}),zo=Tt(rl),_s={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},il={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=il[n])?!!r[n]:!1}function bn(){return sl}var l=ee({},Un,{key:function(n){if(n.key){var r=_s[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=ds(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?bt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bn,charCode:function(n){return n.type==="keypress"?ds(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ds(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=Tt(l),g=ee({},Si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Tt(g),L=ee({},Un,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bn}),b=Tt(L),Q=ee({},In,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fe=Tt(Q),ct=ee({},Si,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ce=Tt(ct),mt=[9,13,27,32],it=m&&"CompositionEvent"in window,ln=null;m&&"documentMode"in document&&(ln=document.documentMode);var en=m&&"TextEvent"in window&&!ln,Ai=m&&(!it||ln&&8<ln&&11>=ln),vs=" ",Yd=!1;function Xd(n,r){switch(n){case"keyup":return mt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Es=!1;function k_(n,r){switch(n){case"compositionend":return Jd(r);case"keypress":return r.which!==32?null:(Yd=!0,vs);case"textInput":return n=r.data,n===vs&&Yd?null:n;default:return null}}function N_(n,r){if(Es)return n==="compositionend"||!it&&Xd(n,r)?(n=Fo(),$t=hs=Zt=null,Es=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Ai&&r.locale!=="ko"?null:r.data;default:return null}}var D_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zd(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!D_[n.type]:r==="textarea"}function ef(n,r,o,c){Ln(c),r=cl(r,"onChange"),0<r.length&&(o=new fs("onChange","change",null,o,c),n.push({event:o,listeners:r}))}var jo=null,Bo=null;function O_(n){vf(n,0)}function ol(n){var r=As(n);if(Gi(r))return n}function V_(n,r){if(n==="change")return r}var tf=!1;if(m){var tc;if(m){var nc="oninput"in document;if(!nc){var nf=document.createElement("div");nf.setAttribute("oninput","return;"),nc=typeof nf.oninput=="function"}tc=nc}else tc=!1;tf=tc&&(!document.documentMode||9<document.documentMode)}function rf(){jo&&(jo.detachEvent("onpropertychange",sf),Bo=jo=null)}function sf(n){if(n.propertyName==="value"&&ol(Bo)){var r=[];ef(r,Bo,n,Zi(n)),Po(O_,r)}}function L_(n,r,o){n==="focusin"?(rf(),jo=r,Bo=o,jo.attachEvent("onpropertychange",sf)):n==="focusout"&&rf()}function x_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ol(Bo)}function M_(n,r){if(n==="click")return ol(r)}function F_(n,r){if(n==="input"||n==="change")return ol(r)}function U_(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Sn=typeof Object.is=="function"?Object.is:U_;function $o(n,r){if(Sn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),c=Object.keys(r);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!y.call(r,d)||!Sn(n[d],r[d]))return!1}return!0}function of(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function af(n,r){var o=of(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=r&&c>=r)return{node:o,offset:r-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=of(o)}}function lf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?lf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function uf(){for(var n=window,r=Tr();r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=Tr(n.document)}return r}function rc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function b_(n){var r=uf(),o=n.focusedElem,c=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&lf(o.ownerDocument.documentElement,o)){if(c!==null&&rc(o)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(n,o.value.length);else if(n=(r=o.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=af(o,p);var _=af(o,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=o;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)n=r[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var z_=m&&"documentMode"in document&&11>=document.documentMode,ws=null,ic=null,qo=null,sc=!1;function cf(n,r,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;sc||ws==null||ws!==Tr(c)||(c=ws,"selectionStart"in c&&rc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),qo&&$o(qo,c)||(qo=c,c=cl(ic,"onSelect"),0<c.length&&(r=new fs("onSelect","select",null,r,o),n.push({event:r,listeners:c}),r.target=ws)))}function al(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var Ts={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionend:al("Transition","TransitionEnd")},oc={},hf={};m&&(hf=document.createElement("div").style,"AnimationEvent"in window||(delete Ts.animationend.animation,delete Ts.animationiteration.animation,delete Ts.animationstart.animation),"TransitionEvent"in window||delete Ts.transitionend.transition);function ll(n){if(oc[n])return oc[n];if(!Ts[n])return n;var r=Ts[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in hf)return oc[n]=r[o];return n}var df=ll("animationend"),ff=ll("animationiteration"),pf=ll("animationstart"),mf=ll("transitionend"),gf=new Map,yf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vr(n,r){gf.set(n,r),u(r,[n])}for(var ac=0;ac<yf.length;ac++){var lc=yf[ac],j_=lc.toLowerCase(),B_=lc[0].toUpperCase()+lc.slice(1);Vr(j_,"on"+B_)}Vr(df,"onAnimationEnd"),Vr(ff,"onAnimationIteration"),Vr(pf,"onAnimationStart"),Vr("dblclick","onDoubleClick"),Vr("focusin","onFocus"),Vr("focusout","onBlur"),Vr(mf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ho));function _f(n,r,o){var c=n.type||"unknown-event";n.currentTarget=o,Ua(c,r,void 0,n),n.currentTarget=null}function vf(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var _=c.length-1;0<=_;_--){var T=c[_],R=T.instance,F=T.currentTarget;if(T=T.listener,R!==p&&d.isPropagationStopped())break e;_f(d,T,F),p=R}else for(_=0;_<c.length;_++){if(T=c[_],R=T.instance,F=T.currentTarget,T=T.listener,R!==p&&d.isPropagationStopped())break e;_f(d,T,F),p=R}}}if(gn)throw n=ko,gn=!1,ko=null,n}function $e(n,r){var o=r[gc];o===void 0&&(o=r[gc]=new Set);var c=n+"__bubble";o.has(c)||(Ef(r,n,2,!1),o.add(c))}function uc(n,r,o){var c=0;r&&(c|=4),Ef(o,n,c,r)}var ul="_reactListening"+Math.random().toString(36).slice(2);function Wo(n){if(!n[ul]){n[ul]=!0,s.forEach(function(o){o!=="selectionchange"&&($_.has(o)||uc(o,!1,n),uc(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[ul]||(r[ul]=!0,uc("selectionchange",!1,r))}}function Ef(n,r,o,c){switch(Mo(r)){case 1:var d=We;break;case 4:d=Zu;break;default:d=xo}o=d.bind(null,r,o,n),d=void 0,!ns||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,o,{capture:!0,passive:d}):n.addEventListener(r,o,!0):d!==void 0?n.addEventListener(r,o,{passive:d}):n.addEventListener(r,o,!1)}function cc(n,r,o,c,d){var p=c;if(!(r&1)&&!(r&2)&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var R=_.tag;if((R===3||R===4)&&(R=_.stateNode.containerInfo,R===d||R.nodeType===8&&R.parentNode===d))return;_=_.return}for(;T!==null;){if(_=Ri(T),_===null)return;if(R=_.tag,R===5||R===6){c=p=_;continue e}T=T.parentNode}}c=c.return}Po(function(){var F=p,$=Zi(o),H=[];e:{var B=gf.get(n);if(B!==void 0){var Z=fs,re=n;switch(n){case"keypress":if(ds(o)===0)break e;case"keydown":case"keyup":Z=f;break;case"focusin":re="focus",Z=ys;break;case"focusout":re="blur",Z=ys;break;case"beforeblur":case"afterblur":Z=ys;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=ms;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=Za;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=b;break;case df:case ff:case pf:Z=ir;break;case mf:Z=Fe;break;case"scroll":Z=ec;break;case"wheel":Z=Ce;break;case"copy":case"cut":case"paste":Z=nl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=E}var ie=(r&4)!==0,tt=!ie&&n==="scroll",x=ie?B!==null?B+"Capture":null:B;ie=[];for(var P=F,M;P!==null;){M=P;var W=M.stateNode;if(M.tag===5&&W!==null&&(M=W,x!==null&&(W=et(P,x),W!=null&&ie.push(Ko(P,W,M)))),tt)break;P=P.return}0<ie.length&&(B=new Z(B,re,null,o,$),H.push({event:B,listeners:ie}))}}if(!(r&7)){e:{if(B=n==="mouseover"||n==="pointerover",Z=n==="mouseout"||n==="pointerout",B&&o!==fi&&(re=o.relatedTarget||o.fromElement)&&(Ri(re)||re[sr]))break e;if((Z||B)&&(B=$.window===$?$:(B=$.ownerDocument)?B.defaultView||B.parentWindow:window,Z?(re=o.relatedTarget||o.toElement,Z=F,re=re?Ri(re):null,re!==null&&(tt=yn(re),re!==tt||re.tag!==5&&re.tag!==6)&&(re=null)):(Z=null,re=F),Z!==re)){if(ie=ms,W="onMouseLeave",x="onMouseEnter",P="mouse",(n==="pointerout"||n==="pointerover")&&(ie=E,W="onPointerLeave",x="onPointerEnter",P="pointer"),tt=Z==null?B:As(Z),M=re==null?B:As(re),B=new ie(W,P+"leave",Z,o,$),B.target=tt,B.relatedTarget=M,W=null,Ri($)===F&&(ie=new ie(x,P+"enter",re,o,$),ie.target=M,ie.relatedTarget=tt,W=ie),tt=W,Z&&re)t:{for(ie=Z,x=re,P=0,M=ie;M;M=Is(M))P++;for(M=0,W=x;W;W=Is(W))M++;for(;0<P-M;)ie=Is(ie),P--;for(;0<M-P;)x=Is(x),M--;for(;P--;){if(ie===x||x!==null&&ie===x.alternate)break t;ie=Is(ie),x=Is(x)}ie=null}else ie=null;Z!==null&&wf(H,B,Z,ie,!1),re!==null&&tt!==null&&wf(H,tt,re,ie,!0)}}e:{if(B=F?As(F):window,Z=B.nodeName&&B.nodeName.toLowerCase(),Z==="select"||Z==="input"&&B.type==="file")var se=V_;else if(Zd(B))if(tf)se=F_;else{se=x_;var ue=L_}else(Z=B.nodeName)&&Z.toLowerCase()==="input"&&(B.type==="checkbox"||B.type==="radio")&&(se=M_);if(se&&(se=se(n,F))){ef(H,se,o,$);break e}ue&&ue(n,B,F),n==="focusout"&&(ue=B._wrapperState)&&ue.controlled&&B.type==="number"&&Yi(B,"number",B.value)}switch(ue=F?As(F):window,n){case"focusin":(Zd(ue)||ue.contentEditable==="true")&&(ws=ue,ic=F,qo=null);break;case"focusout":qo=ic=ws=null;break;case"mousedown":sc=!0;break;case"contextmenu":case"mouseup":case"dragend":sc=!1,cf(H,o,$);break;case"selectionchange":if(z_)break;case"keydown":case"keyup":cf(H,o,$)}var ce;if(it)e:{switch(n){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else Es?Xd(n,o)&&(fe="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(fe="onCompositionStart");fe&&(Ai&&o.locale!=="ko"&&(Es||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&Es&&(ce=Fo()):(Zt=$,hs="value"in Zt?Zt.value:Zt.textContent,Es=!0)),ue=cl(F,fe),0<ue.length&&(fe=new zo(fe,n,null,o,$),H.push({event:fe,listeners:ue}),ce?fe.data=ce:(ce=Jd(o),ce!==null&&(fe.data=ce)))),(ce=en?k_(n,o):N_(n,o))&&(F=cl(F,"onBeforeInput"),0<F.length&&($=new zo("onBeforeInput","beforeinput",null,o,$),H.push({event:$,listeners:F}),$.data=ce))}vf(H,r)})}function Ko(n,r,o){return{instance:n,listener:r,currentTarget:o}}function cl(n,r){for(var o=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=et(n,o),p!=null&&c.unshift(Ko(n,p,d)),p=et(n,r),p!=null&&c.push(Ko(n,p,d))),n=n.return}return c}function Is(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function wf(n,r,o,c,d){for(var p=r._reactName,_=[];o!==null&&o!==c;){var T=o,R=T.alternate,F=T.stateNode;if(R!==null&&R===c)break;T.tag===5&&F!==null&&(T=F,d?(R=et(o,p),R!=null&&_.unshift(Ko(o,R,T))):d||(R=et(o,p),R!=null&&_.push(Ko(o,R,T)))),o=o.return}_.length!==0&&n.push({event:r,listeners:_})}var q_=/\r\n?/g,H_=/\u0000|\uFFFD/g;function Tf(n){return(typeof n=="string"?n:""+n).replace(q_,`
`).replace(H_,"")}function hl(n,r,o){if(r=Tf(r),Tf(n)!==r&&o)throw Error(t(425))}function dl(){}var hc=null,dc=null;function fc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var pc=typeof setTimeout=="function"?setTimeout:void 0,W_=typeof clearTimeout=="function"?clearTimeout:void 0,If=typeof Promise=="function"?Promise:void 0,K_=typeof queueMicrotask=="function"?queueMicrotask:typeof If<"u"?function(n){return If.resolve(null).then(n).catch(G_)}:pc;function G_(n){setTimeout(function(){throw n})}function mc(n,r){var o=r,c=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(c===0){n.removeChild(d),Tn(r);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=d}while(o);Tn(r)}function Lr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Sf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}var Ss=Math.random().toString(36).slice(2),zn="__reactFiber$"+Ss,Go="__reactProps$"+Ss,sr="__reactContainer$"+Ss,gc="__reactEvents$"+Ss,Q_="__reactListeners$"+Ss,Y_="__reactHandles$"+Ss;function Ri(n){var r=n[zn];if(r)return r;for(var o=n.parentNode;o;){if(r=o[sr]||o[zn]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=Sf(n);n!==null;){if(o=n[zn])return o;n=Sf(n)}return r}n=o,o=n.parentNode}return null}function Qo(n){return n=n[zn]||n[sr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function As(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function fl(n){return n[Go]||null}var yc=[],Rs=-1;function xr(n){return{current:n}}function qe(n){0>Rs||(n.current=yc[Rs],yc[Rs]=null,Rs--)}function Be(n,r){Rs++,yc[Rs]=n.current,n.current=r}var Mr={},kt=xr(Mr),qt=xr(!1),Ci=Mr;function Cs(n,r){var o=n.type.contextTypes;if(!o)return Mr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in o)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Ht(n){return n=n.childContextTypes,n!=null}function pl(){qe(qt),qe(kt)}function Af(n,r,o){if(kt.current!==Mr)throw Error(t(168));Be(kt,r),Be(qt,o)}function Rf(n,r,o){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Le(n)||"Unknown",d));return ee({},o,c)}function ml(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Mr,Ci=kt.current,Be(kt,n),Be(qt,qt.current),!0}function Cf(n,r,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=Rf(n,r,Ci),c.__reactInternalMemoizedMergedChildContext=n,qe(qt),qe(kt),Be(kt,n)):qe(qt),Be(qt,o)}var or=null,gl=!1,_c=!1;function Pf(n){or===null?or=[n]:or.push(n)}function X_(n){gl=!0,Pf(n)}function Fr(){if(!_c&&or!==null){_c=!0;var n=0,r=Se;try{var o=or;for(Se=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}or=null,gl=!1}catch(d){throw or!==null&&(or=or.slice(n+1)),os(_i,Fr),d}finally{Se=r,_c=!1}}return null}var Ps=[],ks=0,yl=null,_l=0,un=[],cn=0,Pi=null,ar=1,lr="";function ki(n,r){Ps[ks++]=_l,Ps[ks++]=yl,yl=n,_l=r}function kf(n,r,o){un[cn++]=ar,un[cn++]=lr,un[cn++]=Pi,Pi=n;var c=ar;n=lr;var d=32-Ut(c)-1;c&=~(1<<d),o+=1;var p=32-Ut(r)+d;if(30<p){var _=d-d%5;p=(c&(1<<_)-1).toString(32),c>>=_,d-=_,ar=1<<32-Ut(r)+d|o<<d|c,lr=p+n}else ar=1<<p|o<<d|c,lr=n}function vc(n){n.return!==null&&(ki(n,1),kf(n,1,0))}function Ec(n){for(;n===yl;)yl=Ps[--ks],Ps[ks]=null,_l=Ps[--ks],Ps[ks]=null;for(;n===Pi;)Pi=un[--cn],un[cn]=null,lr=un[--cn],un[cn]=null,ar=un[--cn],un[cn]=null}var tn=null,nn=null,Ke=!1,An=null;function Nf(n,r){var o=pn(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=n,r=n.deletions,r===null?(n.deletions=[o],n.flags|=16):r.push(o)}function Df(n,r){switch(n.tag){case 5:var o=n.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,tn=n,nn=Lr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,tn=n,nn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=Pi!==null?{id:ar,overflow:lr}:null,n.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=pn(18,null,null,0),o.stateNode=r,o.return=n,n.child=o,tn=n,nn=null,!0):!1;default:return!1}}function wc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Tc(n){if(Ke){var r=nn;if(r){var o=r;if(!Df(n,r)){if(wc(n))throw Error(t(418));r=Lr(o.nextSibling);var c=tn;r&&Df(n,r)?Nf(c,o):(n.flags=n.flags&-4097|2,Ke=!1,tn=n)}}else{if(wc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ke=!1,tn=n}}}function Of(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;tn=n}function vl(n){if(n!==tn)return!1;if(!Ke)return Of(n),Ke=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!fc(n.type,n.memoizedProps)),r&&(r=nn)){if(wc(n))throw Vf(),Error(t(418));for(;r;)Nf(n,r),r=Lr(r.nextSibling)}if(Of(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(r===0){nn=Lr(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}n=n.nextSibling}nn=null}}else nn=tn?Lr(n.stateNode.nextSibling):null;return!0}function Vf(){for(var n=nn;n;)n=Lr(n.nextSibling)}function Ns(){nn=tn=null,Ke=!1}function Ic(n){An===null?An=[n]:An.push(n)}var J_=_e.ReactCurrentBatchConfig;function Yo(n,r,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(_){var T=d.refs;_===null?delete T[p]:T[p]=_},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function El(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Lf(n){var r=n._init;return r(n._payload)}function xf(n){function r(x,P){if(n){var M=x.deletions;M===null?(x.deletions=[P],x.flags|=16):M.push(P)}}function o(x,P){if(!n)return null;for(;P!==null;)r(x,P),P=P.sibling;return null}function c(x,P){for(x=new Map;P!==null;)P.key!==null?x.set(P.key,P):x.set(P.index,P),P=P.sibling;return x}function d(x,P){return x=Hr(x,P),x.index=0,x.sibling=null,x}function p(x,P,M){return x.index=M,n?(M=x.alternate,M!==null?(M=M.index,M<P?(x.flags|=2,P):M):(x.flags|=2,P)):(x.flags|=1048576,P)}function _(x){return n&&x.alternate===null&&(x.flags|=2),x}function T(x,P,M,W){return P===null||P.tag!==6?(P=ph(M,x.mode,W),P.return=x,P):(P=d(P,M),P.return=x,P)}function R(x,P,M,W){var se=M.type;return se===k?$(x,P,M.props.children,W,M.key):P!==null&&(P.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===Pt&&Lf(se)===P.type)?(W=d(P,M.props),W.ref=Yo(x,P,M),W.return=x,W):(W=ql(M.type,M.key,M.props,null,x.mode,W),W.ref=Yo(x,P,M),W.return=x,W)}function F(x,P,M,W){return P===null||P.tag!==4||P.stateNode.containerInfo!==M.containerInfo||P.stateNode.implementation!==M.implementation?(P=mh(M,x.mode,W),P.return=x,P):(P=d(P,M.children||[]),P.return=x,P)}function $(x,P,M,W,se){return P===null||P.tag!==7?(P=Fi(M,x.mode,W,se),P.return=x,P):(P=d(P,M),P.return=x,P)}function H(x,P,M){if(typeof P=="string"&&P!==""||typeof P=="number")return P=ph(""+P,x.mode,M),P.return=x,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case He:return M=ql(P.type,P.key,P.props,null,x.mode,M),M.ref=Yo(x,null,P),M.return=x,M;case we:return P=mh(P,x.mode,M),P.return=x,P;case Pt:var W=P._init;return H(x,W(P._payload),M)}if(Yn(P)||le(P))return P=Fi(P,x.mode,M,null),P.return=x,P;El(x,P)}return null}function B(x,P,M,W){var se=P!==null?P.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return se!==null?null:T(x,P,""+M,W);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case He:return M.key===se?R(x,P,M,W):null;case we:return M.key===se?F(x,P,M,W):null;case Pt:return se=M._init,B(x,P,se(M._payload),W)}if(Yn(M)||le(M))return se!==null?null:$(x,P,M,W,null);El(x,M)}return null}function Z(x,P,M,W,se){if(typeof W=="string"&&W!==""||typeof W=="number")return x=x.get(M)||null,T(P,x,""+W,se);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case He:return x=x.get(W.key===null?M:W.key)||null,R(P,x,W,se);case we:return x=x.get(W.key===null?M:W.key)||null,F(P,x,W,se);case Pt:var ue=W._init;return Z(x,P,M,ue(W._payload),se)}if(Yn(W)||le(W))return x=x.get(M)||null,$(P,x,W,se,null);El(P,W)}return null}function re(x,P,M,W){for(var se=null,ue=null,ce=P,fe=P=0,_t=null;ce!==null&&fe<M.length;fe++){ce.index>fe?(_t=ce,ce=null):_t=ce.sibling;var Ve=B(x,ce,M[fe],W);if(Ve===null){ce===null&&(ce=_t);break}n&&ce&&Ve.alternate===null&&r(x,ce),P=p(Ve,P,fe),ue===null?se=Ve:ue.sibling=Ve,ue=Ve,ce=_t}if(fe===M.length)return o(x,ce),Ke&&ki(x,fe),se;if(ce===null){for(;fe<M.length;fe++)ce=H(x,M[fe],W),ce!==null&&(P=p(ce,P,fe),ue===null?se=ce:ue.sibling=ce,ue=ce);return Ke&&ki(x,fe),se}for(ce=c(x,ce);fe<M.length;fe++)_t=Z(ce,x,fe,M[fe],W),_t!==null&&(n&&_t.alternate!==null&&ce.delete(_t.key===null?fe:_t.key),P=p(_t,P,fe),ue===null?se=_t:ue.sibling=_t,ue=_t);return n&&ce.forEach(function(Wr){return r(x,Wr)}),Ke&&ki(x,fe),se}function ie(x,P,M,W){var se=le(M);if(typeof se!="function")throw Error(t(150));if(M=se.call(M),M==null)throw Error(t(151));for(var ue=se=null,ce=P,fe=P=0,_t=null,Ve=M.next();ce!==null&&!Ve.done;fe++,Ve=M.next()){ce.index>fe?(_t=ce,ce=null):_t=ce.sibling;var Wr=B(x,ce,Ve.value,W);if(Wr===null){ce===null&&(ce=_t);break}n&&ce&&Wr.alternate===null&&r(x,ce),P=p(Wr,P,fe),ue===null?se=Wr:ue.sibling=Wr,ue=Wr,ce=_t}if(Ve.done)return o(x,ce),Ke&&ki(x,fe),se;if(ce===null){for(;!Ve.done;fe++,Ve=M.next())Ve=H(x,Ve.value,W),Ve!==null&&(P=p(Ve,P,fe),ue===null?se=Ve:ue.sibling=Ve,ue=Ve);return Ke&&ki(x,fe),se}for(ce=c(x,ce);!Ve.done;fe++,Ve=M.next())Ve=Z(ce,x,fe,Ve.value,W),Ve!==null&&(n&&Ve.alternate!==null&&ce.delete(Ve.key===null?fe:Ve.key),P=p(Ve,P,fe),ue===null?se=Ve:ue.sibling=Ve,ue=Ve);return n&&ce.forEach(function(Dv){return r(x,Dv)}),Ke&&ki(x,fe),se}function tt(x,P,M,W){if(typeof M=="object"&&M!==null&&M.type===k&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case He:e:{for(var se=M.key,ue=P;ue!==null;){if(ue.key===se){if(se=M.type,se===k){if(ue.tag===7){o(x,ue.sibling),P=d(ue,M.props.children),P.return=x,x=P;break e}}else if(ue.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===Pt&&Lf(se)===ue.type){o(x,ue.sibling),P=d(ue,M.props),P.ref=Yo(x,ue,M),P.return=x,x=P;break e}o(x,ue);break}else r(x,ue);ue=ue.sibling}M.type===k?(P=Fi(M.props.children,x.mode,W,M.key),P.return=x,x=P):(W=ql(M.type,M.key,M.props,null,x.mode,W),W.ref=Yo(x,P,M),W.return=x,x=W)}return _(x);case we:e:{for(ue=M.key;P!==null;){if(P.key===ue)if(P.tag===4&&P.stateNode.containerInfo===M.containerInfo&&P.stateNode.implementation===M.implementation){o(x,P.sibling),P=d(P,M.children||[]),P.return=x,x=P;break e}else{o(x,P);break}else r(x,P);P=P.sibling}P=mh(M,x.mode,W),P.return=x,x=P}return _(x);case Pt:return ue=M._init,tt(x,P,ue(M._payload),W)}if(Yn(M))return re(x,P,M,W);if(le(M))return ie(x,P,M,W);El(x,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,P!==null&&P.tag===6?(o(x,P.sibling),P=d(P,M),P.return=x,x=P):(o(x,P),P=ph(M,x.mode,W),P.return=x,x=P),_(x)):o(x,P)}return tt}var Ds=xf(!0),Mf=xf(!1),wl=xr(null),Tl=null,Os=null,Sc=null;function Ac(){Sc=Os=Tl=null}function Rc(n){var r=wl.current;qe(wl),n._currentValue=r}function Cc(n,r,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===o)break;n=n.return}}function Vs(n,r){Tl=n,Sc=Os=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&r&&(Wt=!0),n.firstContext=null)}function hn(n){var r=n._currentValue;if(Sc!==n)if(n={context:n,memoizedValue:r,next:null},Os===null){if(Tl===null)throw Error(t(308));Os=n,Tl.dependencies={lanes:0,firstContext:n}}else Os=Os.next=n;return r}var Ni=null;function Pc(n){Ni===null?Ni=[n]:Ni.push(n)}function Ff(n,r,o,c){var d=r.interleaved;return d===null?(o.next=o,Pc(r)):(o.next=d.next,d.next=o),r.interleaved=o,ur(n,c)}function ur(n,r){n.lanes|=r;var o=n.alternate;for(o!==null&&(o.lanes|=r),o=n,n=n.return;n!==null;)n.childLanes|=r,o=n.alternate,o!==null&&(o.childLanes|=r),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Ur=!1;function kc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uf(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function cr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function br(n,r,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,De&2){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,ur(n,o)}return d=c.interleaved,d===null?(r.next=r,Pc(c)):(r.next=d.next,d.next=r),c.interleaved=r,ur(n,o)}function Il(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,o|=c,r.lanes=o,Pr(n,o)}}function bf(n,r){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var _={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?d=p=_:p=p.next=_,o=o.next}while(o!==null);p===null?d=p=r:p=p.next=r}else d=p=r;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}function Sl(n,r,o,c){var d=n.updateQueue;Ur=!1;var p=d.firstBaseUpdate,_=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var R=T,F=R.next;R.next=null,_===null?p=F:_.next=F,_=R;var $=n.alternate;$!==null&&($=$.updateQueue,T=$.lastBaseUpdate,T!==_&&(T===null?$.firstBaseUpdate=F:T.next=F,$.lastBaseUpdate=R))}if(p!==null){var H=d.baseState;_=0,$=F=R=null,T=p;do{var B=T.lane,Z=T.eventTime;if((c&B)===B){$!==null&&($=$.next={eventTime:Z,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var re=n,ie=T;switch(B=r,Z=o,ie.tag){case 1:if(re=ie.payload,typeof re=="function"){H=re.call(Z,H,B);break e}H=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=ie.payload,B=typeof re=="function"?re.call(Z,H,B):re,B==null)break e;H=ee({},H,B);break e;case 2:Ur=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,B=d.effects,B===null?d.effects=[T]:B.push(T))}else Z={eventTime:Z,lane:B,tag:T.tag,payload:T.payload,callback:T.callback,next:null},$===null?(F=$=Z,R=H):$=$.next=Z,_|=B;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;B=T,T=B.next,B.next=null,d.lastBaseUpdate=B,d.shared.pending=null}}while(!0);if($===null&&(R=H),d.baseState=R,d.firstBaseUpdate=F,d.lastBaseUpdate=$,r=d.shared.interleaved,r!==null){d=r;do _|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);Vi|=_,n.lanes=_,n.memoizedState=H}}function zf(n,r,o){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=o,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Xo={},jn=xr(Xo),Jo=xr(Xo),Zo=xr(Xo);function Di(n){if(n===Xo)throw Error(t(174));return n}function Nc(n,r){switch(Be(Zo,r),Be(Jo,n),Be(jn,Xo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ut(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ut(r,n)}qe(jn),Be(jn,r)}function Ls(){qe(jn),qe(Jo),qe(Zo)}function jf(n){Di(Zo.current);var r=Di(jn.current),o=ut(r,n.type);r!==o&&(Be(Jo,n),Be(jn,o))}function Dc(n){Jo.current===n&&(qe(jn),qe(Jo))}var Ge=xr(0);function Al(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Oc=[];function Vc(){for(var n=0;n<Oc.length;n++)Oc[n]._workInProgressVersionPrimary=null;Oc.length=0}var Rl=_e.ReactCurrentDispatcher,Lc=_e.ReactCurrentBatchConfig,Oi=0,Qe=null,ht=null,gt=null,Cl=!1,ea=!1,ta=0,Z_=0;function Nt(){throw Error(t(321))}function xc(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!Sn(n[o],r[o]))return!1;return!0}function Mc(n,r,o,c,d,p){if(Oi=p,Qe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Rl.current=n===null||n.memoizedState===null?rv:iv,n=o(c,d),ea){p=0;do{if(ea=!1,ta=0,25<=p)throw Error(t(301));p+=1,gt=ht=null,r.updateQueue=null,Rl.current=sv,n=o(c,d)}while(ea)}if(Rl.current=Nl,r=ht!==null&&ht.next!==null,Oi=0,gt=ht=Qe=null,Cl=!1,r)throw Error(t(300));return n}function Fc(){var n=ta!==0;return ta=0,n}function Bn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?Qe.memoizedState=gt=n:gt=gt.next=n,gt}function dn(){if(ht===null){var n=Qe.alternate;n=n!==null?n.memoizedState:null}else n=ht.next;var r=gt===null?Qe.memoizedState:gt.next;if(r!==null)gt=r,ht=n;else{if(n===null)throw Error(t(310));ht=n,n={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},gt===null?Qe.memoizedState=gt=n:gt=gt.next=n}return gt}function na(n,r){return typeof r=="function"?r(n):r}function Uc(n){var r=dn(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=ht,d=c.baseQueue,p=o.pending;if(p!==null){if(d!==null){var _=d.next;d.next=p.next,p.next=_}c.baseQueue=d=p,o.pending=null}if(d!==null){p=d.next,c=c.baseState;var T=_=null,R=null,F=p;do{var $=F.lane;if((Oi&$)===$)R!==null&&(R=R.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var H={lane:$,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};R===null?(T=R=H,_=c):R=R.next=H,Qe.lanes|=$,Vi|=$}F=F.next}while(F!==null&&F!==p);R===null?_=c:R.next=T,Sn(c,r.memoizedState)||(Wt=!0),r.memoizedState=c,r.baseState=_,r.baseQueue=R,o.lastRenderedState=c}if(n=o.interleaved,n!==null){d=n;do p=d.lane,Qe.lanes|=p,Vi|=p,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function bc(n){var r=dn(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,d=o.pending,p=r.memoizedState;if(d!==null){o.pending=null;var _=d=d.next;do p=n(p,_.action),_=_.next;while(_!==d);Sn(p,r.memoizedState)||(Wt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),o.lastRenderedState=p}return[p,c]}function Bf(){}function $f(n,r){var o=Qe,c=dn(),d=r(),p=!Sn(c.memoizedState,d);if(p&&(c.memoizedState=d,Wt=!0),c=c.queue,zc(Wf.bind(null,o,c,n),[n]),c.getSnapshot!==r||p||gt!==null&&gt.memoizedState.tag&1){if(o.flags|=2048,ra(9,Hf.bind(null,o,c,d,r),void 0,null),yt===null)throw Error(t(349));Oi&30||qf(o,r,d)}return d}function qf(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=Qe.updateQueue,r===null?(r={lastEffect:null,stores:null},Qe.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function Hf(n,r,o,c){r.value=o,r.getSnapshot=c,Kf(r)&&Gf(n)}function Wf(n,r,o){return o(function(){Kf(r)&&Gf(n)})}function Kf(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!Sn(n,o)}catch{return!0}}function Gf(n){var r=ur(n,1);r!==null&&kn(r,n,1,-1)}function Qf(n){var r=Bn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:n},r.queue=n,n=n.dispatch=nv.bind(null,Qe,n),[r.memoizedState,n]}function ra(n,r,o,c){return n={tag:n,create:r,destroy:o,deps:c,next:null},r=Qe.updateQueue,r===null?(r={lastEffect:null,stores:null},Qe.updateQueue=r,r.lastEffect=n.next=n):(o=r.lastEffect,o===null?r.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,r.lastEffect=n)),n}function Yf(){return dn().memoizedState}function Pl(n,r,o,c){var d=Bn();Qe.flags|=n,d.memoizedState=ra(1|r,o,void 0,c===void 0?null:c)}function kl(n,r,o,c){var d=dn();c=c===void 0?null:c;var p=void 0;if(ht!==null){var _=ht.memoizedState;if(p=_.destroy,c!==null&&xc(c,_.deps)){d.memoizedState=ra(r,o,p,c);return}}Qe.flags|=n,d.memoizedState=ra(1|r,o,p,c)}function Xf(n,r){return Pl(8390656,8,n,r)}function zc(n,r){return kl(2048,8,n,r)}function Jf(n,r){return kl(4,2,n,r)}function Zf(n,r){return kl(4,4,n,r)}function ep(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function tp(n,r,o){return o=o!=null?o.concat([n]):null,kl(4,4,ep.bind(null,r,n),o)}function jc(){}function np(n,r){var o=dn();r=r===void 0?null:r;var c=o.memoizedState;return c!==null&&r!==null&&xc(r,c[1])?c[0]:(o.memoizedState=[n,r],n)}function rp(n,r){var o=dn();r=r===void 0?null:r;var c=o.memoizedState;return c!==null&&r!==null&&xc(r,c[1])?c[0]:(n=n(),o.memoizedState=[n,r],n)}function ip(n,r,o){return Oi&21?(Sn(o,r)||(o=wi(),Qe.lanes|=o,Vi|=o,n.baseState=!0),r):(n.baseState&&(n.baseState=!1,Wt=!0),n.memoizedState=o)}function ev(n,r){var o=Se;Se=o!==0&&4>o?o:4,n(!0);var c=Lc.transition;Lc.transition={};try{n(!1),r()}finally{Se=o,Lc.transition=c}}function sp(){return dn().memoizedState}function tv(n,r,o){var c=$r(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},op(n))ap(r,o);else if(o=Ff(n,r,o,c),o!==null){var d=jt();kn(o,n,c,d),lp(o,r,c)}}function nv(n,r,o){var c=$r(n),d={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(op(n))ap(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var _=r.lastRenderedState,T=p(_,o);if(d.hasEagerState=!0,d.eagerState=T,Sn(T,_)){var R=r.interleaved;R===null?(d.next=d,Pc(r)):(d.next=R.next,R.next=d),r.interleaved=d;return}}catch{}finally{}o=Ff(n,r,d,c),o!==null&&(d=jt(),kn(o,n,c,d),lp(o,r,c))}}function op(n){var r=n.alternate;return n===Qe||r!==null&&r===Qe}function ap(n,r){ea=Cl=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function lp(n,r,o){if(o&4194240){var c=r.lanes;c&=n.pendingLanes,o|=c,r.lanes=o,Pr(n,o)}}var Nl={readContext:hn,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useInsertionEffect:Nt,useLayoutEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useMutableSource:Nt,useSyncExternalStore:Nt,useId:Nt,unstable_isNewReconciler:!1},rv={readContext:hn,useCallback:function(n,r){return Bn().memoizedState=[n,r===void 0?null:r],n},useContext:hn,useEffect:Xf,useImperativeHandle:function(n,r,o){return o=o!=null?o.concat([n]):null,Pl(4194308,4,ep.bind(null,r,n),o)},useLayoutEffect:function(n,r){return Pl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Pl(4,2,n,r)},useMemo:function(n,r){var o=Bn();return r=r===void 0?null:r,n=n(),o.memoizedState=[n,r],n},useReducer:function(n,r,o){var c=Bn();return r=o!==void 0?o(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=tv.bind(null,Qe,n),[c.memoizedState,n]},useRef:function(n){var r=Bn();return n={current:n},r.memoizedState=n},useState:Qf,useDebugValue:jc,useDeferredValue:function(n){return Bn().memoizedState=n},useTransition:function(){var n=Qf(!1),r=n[0];return n=ev.bind(null,n[1]),Bn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,o){var c=Qe,d=Bn();if(Ke){if(o===void 0)throw Error(t(407));o=o()}else{if(o=r(),yt===null)throw Error(t(349));Oi&30||qf(c,r,o)}d.memoizedState=o;var p={value:o,getSnapshot:r};return d.queue=p,Xf(Wf.bind(null,c,p,n),[n]),c.flags|=2048,ra(9,Hf.bind(null,c,p,o,r),void 0,null),o},useId:function(){var n=Bn(),r=yt.identifierPrefix;if(Ke){var o=lr,c=ar;o=(c&~(1<<32-Ut(c)-1)).toString(32)+o,r=":"+r+"R"+o,o=ta++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=Z_++,r=":"+r+"r"+o.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},iv={readContext:hn,useCallback:np,useContext:hn,useEffect:zc,useImperativeHandle:tp,useInsertionEffect:Jf,useLayoutEffect:Zf,useMemo:rp,useReducer:Uc,useRef:Yf,useState:function(){return Uc(na)},useDebugValue:jc,useDeferredValue:function(n){var r=dn();return ip(r,ht.memoizedState,n)},useTransition:function(){var n=Uc(na)[0],r=dn().memoizedState;return[n,r]},useMutableSource:Bf,useSyncExternalStore:$f,useId:sp,unstable_isNewReconciler:!1},sv={readContext:hn,useCallback:np,useContext:hn,useEffect:zc,useImperativeHandle:tp,useInsertionEffect:Jf,useLayoutEffect:Zf,useMemo:rp,useReducer:bc,useRef:Yf,useState:function(){return bc(na)},useDebugValue:jc,useDeferredValue:function(n){var r=dn();return ht===null?r.memoizedState=n:ip(r,ht.memoizedState,n)},useTransition:function(){var n=bc(na)[0],r=dn().memoizedState;return[n,r]},useMutableSource:Bf,useSyncExternalStore:$f,useId:sp,unstable_isNewReconciler:!1};function Rn(n,r){if(n&&n.defaultProps){r=ee({},r),n=n.defaultProps;for(var o in n)r[o]===void 0&&(r[o]=n[o]);return r}return r}function Bc(n,r,o,c){r=n.memoizedState,o=o(c,r),o=o==null?r:ee({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Dl={isMounted:function(n){return(n=n._reactInternals)?yn(n)===n:!1},enqueueSetState:function(n,r,o){n=n._reactInternals;var c=jt(),d=$r(n),p=cr(c,d);p.payload=r,o!=null&&(p.callback=o),r=br(n,p,d),r!==null&&(kn(r,n,d,c),Il(r,n,d))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var c=jt(),d=$r(n),p=cr(c,d);p.tag=1,p.payload=r,o!=null&&(p.callback=o),r=br(n,p,d),r!==null&&(kn(r,n,d,c),Il(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=jt(),c=$r(n),d=cr(o,c);d.tag=2,r!=null&&(d.callback=r),r=br(n,d,c),r!==null&&(kn(r,n,c,o),Il(r,n,c))}};function up(n,r,o,c,d,p,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,_):r.prototype&&r.prototype.isPureReactComponent?!$o(o,c)||!$o(d,p):!0}function cp(n,r,o){var c=!1,d=Mr,p=r.contextType;return typeof p=="object"&&p!==null?p=hn(p):(d=Ht(r)?Ci:kt.current,c=r.contextTypes,p=(c=c!=null)?Cs(n,d):Mr),r=new r(o,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Dl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function hp(n,r,o,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,c),r.state!==n&&Dl.enqueueReplaceState(r,r.state,null)}function $c(n,r,o,c){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},kc(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=hn(p):(p=Ht(r)?Ci:kt.current,d.context=Cs(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(Bc(n,r,p,o),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Dl.enqueueReplaceState(d,d.state,null),Sl(n,o,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function xs(n,r){try{var o="",c=r;do o+=ve(c),c=c.return;while(c);var d=o}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function qc(n,r,o){return{value:n,source:null,stack:o??null,digest:r??null}}function Hc(n,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var ov=typeof WeakMap=="function"?WeakMap:Map;function dp(n,r,o){o=cr(-1,o),o.tag=3,o.payload={element:null};var c=r.value;return o.callback=function(){Ul||(Ul=!0,oh=c),Hc(n,r)},o}function fp(n,r,o){o=cr(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;o.payload=function(){return c(d)},o.callback=function(){Hc(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Hc(n,r),typeof c!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),o}function pp(n,r,o){var c=n.pingCache;if(c===null){c=n.pingCache=new ov;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(o)||(d.add(o),n=Ev.bind(null,n,r,o),r.then(n,n))}function mp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function gp(n,r,o,c,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===r?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=cr(-1,1),r.tag=2,br(o,r,1))),o.lanes|=1),n)}var av=_e.ReactCurrentOwner,Wt=!1;function zt(n,r,o,c){r.child=n===null?Mf(r,null,o,c):Ds(r,n.child,o,c)}function yp(n,r,o,c,d){o=o.render;var p=r.ref;return Vs(r,d),c=Mc(n,r,o,c,p,d),o=Fc(),n!==null&&!Wt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,hr(n,r,d)):(Ke&&o&&vc(r),r.flags|=1,zt(n,r,c,d),r.child)}function _p(n,r,o,c,d){if(n===null){var p=o.type;return typeof p=="function"&&!fh(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=p,vp(n,r,p,c,d)):(n=ql(o.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,!(n.lanes&d)){var _=p.memoizedProps;if(o=o.compare,o=o!==null?o:$o,o(_,c)&&n.ref===r.ref)return hr(n,r,d)}return r.flags|=1,n=Hr(p,c),n.ref=r.ref,n.return=r,r.child=n}function vp(n,r,o,c,d){if(n!==null){var p=n.memoizedProps;if($o(p,c)&&n.ref===r.ref)if(Wt=!1,r.pendingProps=c=p,(n.lanes&d)!==0)n.flags&131072&&(Wt=!0);else return r.lanes=n.lanes,hr(n,r,d)}return Wc(n,r,o,c,d)}function Ep(n,r,o){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Be(Fs,rn),rn|=o;else{if(!(o&1073741824))return n=p!==null?p.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Be(Fs,rn),rn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:o,Be(Fs,rn),rn|=c}else p!==null?(c=p.baseLanes|o,r.memoizedState=null):c=o,Be(Fs,rn),rn|=c;return zt(n,r,d,o),r.child}function wp(n,r){var o=r.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function Wc(n,r,o,c,d){var p=Ht(o)?Ci:kt.current;return p=Cs(r,p),Vs(r,d),o=Mc(n,r,o,c,p,d),c=Fc(),n!==null&&!Wt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,hr(n,r,d)):(Ke&&c&&vc(r),r.flags|=1,zt(n,r,o,d),r.child)}function Tp(n,r,o,c,d){if(Ht(o)){var p=!0;ml(r)}else p=!1;if(Vs(r,d),r.stateNode===null)Vl(n,r),cp(r,o,c),$c(r,o,c,d),c=!0;else if(n===null){var _=r.stateNode,T=r.memoizedProps;_.props=T;var R=_.context,F=o.contextType;typeof F=="object"&&F!==null?F=hn(F):(F=Ht(o)?Ci:kt.current,F=Cs(r,F));var $=o.getDerivedStateFromProps,H=typeof $=="function"||typeof _.getSnapshotBeforeUpdate=="function";H||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==c||R!==F)&&hp(r,_,c,F),Ur=!1;var B=r.memoizedState;_.state=B,Sl(r,c,_,d),R=r.memoizedState,T!==c||B!==R||qt.current||Ur?(typeof $=="function"&&(Bc(r,o,$,c),R=r.memoizedState),(T=Ur||up(r,o,T,c,B,R,F))?(H||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=R),_.props=c,_.state=R,_.context=F,c=T):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{_=r.stateNode,Uf(n,r),T=r.memoizedProps,F=r.type===r.elementType?T:Rn(r.type,T),_.props=F,H=r.pendingProps,B=_.context,R=o.contextType,typeof R=="object"&&R!==null?R=hn(R):(R=Ht(o)?Ci:kt.current,R=Cs(r,R));var Z=o.getDerivedStateFromProps;($=typeof Z=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==H||B!==R)&&hp(r,_,c,R),Ur=!1,B=r.memoizedState,_.state=B,Sl(r,c,_,d);var re=r.memoizedState;T!==H||B!==re||qt.current||Ur?(typeof Z=="function"&&(Bc(r,o,Z,c),re=r.memoizedState),(F=Ur||up(r,o,F,c,B,re,R)||!1)?($||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,re,R),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,re,R)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&B===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&B===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=re),_.props=c,_.state=re,_.context=R,c=F):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&B===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&B===n.memoizedState||(r.flags|=1024),c=!1)}return Kc(n,r,o,c,p,d)}function Kc(n,r,o,c,d,p){wp(n,r);var _=(r.flags&128)!==0;if(!c&&!_)return d&&Cf(r,o,!1),hr(n,r,p);c=r.stateNode,av.current=r;var T=_&&typeof o.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&_?(r.child=Ds(r,n.child,null,p),r.child=Ds(r,null,T,p)):zt(n,r,T,p),r.memoizedState=c.state,d&&Cf(r,o,!0),r.child}function Ip(n){var r=n.stateNode;r.pendingContext?Af(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Af(n,r.context,!1),Nc(n,r.containerInfo)}function Sp(n,r,o,c,d){return Ns(),Ic(d),r.flags|=256,zt(n,r,o,c),r.child}var Gc={dehydrated:null,treeContext:null,retryLane:0};function Qc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Ap(n,r,o){var c=r.pendingProps,d=Ge.current,p=!1,_=(r.flags&128)!==0,T;if((T=_)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Be(Ge,d&1),n===null)return Tc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(r.mode&1?n.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(_=c.children,n=c.fallback,p?(c=r.mode,p=r.child,_={mode:"hidden",children:_},!(c&1)&&p!==null?(p.childLanes=0,p.pendingProps=_):p=Hl(_,c,0,null),n=Fi(n,c,o,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=Qc(o),r.memoizedState=Gc,n):Yc(r,_));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return lv(n,r,_,c,T,d,o);if(p){p=c.fallback,_=r.mode,d=n.child,T=d.sibling;var R={mode:"hidden",children:c.children};return!(_&1)&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=R,r.deletions=null):(c=Hr(d,R),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?p=Hr(T,p):(p=Fi(p,_,o,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,_=n.child.memoizedState,_=_===null?Qc(o):{baseLanes:_.baseLanes|o,cachePool:null,transitions:_.transitions},p.memoizedState=_,p.childLanes=n.childLanes&~o,r.memoizedState=Gc,c}return p=n.child,n=p.sibling,c=Hr(p,{mode:"visible",children:c.children}),!(r.mode&1)&&(c.lanes=o),c.return=r,c.sibling=null,n!==null&&(o=r.deletions,o===null?(r.deletions=[n],r.flags|=16):o.push(n)),r.child=c,r.memoizedState=null,c}function Yc(n,r){return r=Hl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Ol(n,r,o,c){return c!==null&&Ic(c),Ds(r,n.child,null,o),n=Yc(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function lv(n,r,o,c,d,p,_){if(o)return r.flags&256?(r.flags&=-257,c=qc(Error(t(422))),Ol(n,r,_,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=Hl({mode:"visible",children:c.children},d,0,null),p=Fi(p,d,_,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,r.mode&1&&Ds(r,n.child,null,_),r.child.memoizedState=Qc(_),r.memoizedState=Gc,p);if(!(r.mode&1))return Ol(n,r,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,p=Error(t(419)),c=qc(p,c,void 0),Ol(n,r,_,c)}if(T=(_&n.childLanes)!==0,Wt||T){if(c=yt,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(c.suspendedLanes|_)?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,ur(n,d),kn(c,n,d,-1))}return dh(),c=qc(Error(t(421))),Ol(n,r,_,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=wv.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,nn=Lr(d.nextSibling),tn=r,Ke=!0,An=null,n!==null&&(un[cn++]=ar,un[cn++]=lr,un[cn++]=Pi,ar=n.id,lr=n.overflow,Pi=r),r=Yc(r,c.children),r.flags|=4096,r)}function Rp(n,r,o){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Cc(n.return,r,o)}function Xc(n,r,o,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=o,p.tailMode=d)}function Cp(n,r,o){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if(zt(n,r,c.children,o),c=Ge.current,c&2)c=c&1|2,r.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Rp(n,o,r);else if(n.tag===19)Rp(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Be(Ge,c),!(r.mode&1))r.memoizedState=null;else switch(d){case"forwards":for(o=r.child,d=null;o!==null;)n=o.alternate,n!==null&&Al(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=r.child,r.child=null):(d=o.sibling,o.sibling=null),Xc(r,!1,d,o,p);break;case"backwards":for(o=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Al(n)===null){r.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}Xc(r,!0,o,null,p);break;case"together":Xc(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Vl(n,r){!(r.mode&1)&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function hr(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),Vi|=r.lanes,!(o&r.childLanes))return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,o=Hr(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=Hr(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function uv(n,r,o){switch(r.tag){case 3:Ip(r),Ns();break;case 5:jf(r);break;case 1:Ht(r.type)&&ml(r);break;case 4:Nc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;Be(wl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(Be(Ge,Ge.current&1),r.flags|=128,null):o&r.child.childLanes?Ap(n,r,o):(Be(Ge,Ge.current&1),n=hr(n,r,o),n!==null?n.sibling:null);Be(Ge,Ge.current&1);break;case 19:if(c=(o&r.childLanes)!==0,n.flags&128){if(c)return Cp(n,r,o);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Be(Ge,Ge.current),c)break;return null;case 22:case 23:return r.lanes=0,Ep(n,r,o)}return hr(n,r,o)}var Pp,Jc,kp,Np;Pp=function(n,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Jc=function(){},kp=function(n,r,o,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Di(jn.current);var p=null;switch(o){case"input":d=ci(n,d),c=ci(n,c),p=[];break;case"select":d=ee({},d,{value:void 0}),c=ee({},c,{value:void 0}),p=[];break;case"textarea":d=_o(n,d),c=_o(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=dl)}So(o,c);var _;o=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var T=d[F];for(_ in T)T.hasOwnProperty(_)&&(o||(o={}),o[_]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(a.hasOwnProperty(F)?p||(p=[]):(p=p||[]).push(F,null));for(F in c){var R=c[F];if(T=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&R!==T&&(R!=null||T!=null))if(F==="style")if(T){for(_ in T)!T.hasOwnProperty(_)||R&&R.hasOwnProperty(_)||(o||(o={}),o[_]="");for(_ in R)R.hasOwnProperty(_)&&T[_]!==R[_]&&(o||(o={}),o[_]=R[_])}else o||(p||(p=[]),p.push(F,o)),o=R;else F==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,T=T?T.__html:void 0,R!=null&&T!==R&&(p=p||[]).push(F,R)):F==="children"?typeof R!="string"&&typeof R!="number"||(p=p||[]).push(F,""+R):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(a.hasOwnProperty(F)?(R!=null&&F==="onScroll"&&$e("scroll",n),p||T===R||(p=[])):(p=p||[]).push(F,R))}o&&(p=p||[]).push("style",o);var F=p;(r.updateQueue=F)&&(r.flags|=4)}},Np=function(n,r,o,c){o!==c&&(r.flags|=4)};function ia(n,r){if(!Ke)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Dt(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(r)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=o,r}function cv(n,r,o){var c=r.pendingProps;switch(Ec(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(r),null;case 1:return Ht(r.type)&&pl(),Dt(r),null;case 3:return c=r.stateNode,Ls(),qe(qt),qe(kt),Vc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(vl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,An!==null&&(uh(An),An=null))),Jc(n,r),Dt(r),null;case 5:Dc(r);var d=Di(Zo.current);if(o=r.type,n!==null&&r.stateNode!=null)kp(n,r,o,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Dt(r),null}if(n=Di(jn.current),vl(r)){c=r.stateNode,o=r.type;var p=r.memoizedProps;switch(c[zn]=r,c[Go]=p,n=(r.mode&1)!==0,o){case"dialog":$e("cancel",c),$e("close",c);break;case"iframe":case"object":case"embed":$e("load",c);break;case"video":case"audio":for(d=0;d<Ho.length;d++)$e(Ho[d],c);break;case"source":$e("error",c);break;case"img":case"image":case"link":$e("error",c),$e("load",c);break;case"details":$e("toggle",c);break;case"input":Qi(c,p),$e("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},$e("invalid",c);break;case"textarea":Xi(c,p),$e("invalid",c)}So(o,p),d=null;for(var _ in p)if(p.hasOwnProperty(_)){var T=p[_];_==="children"?typeof T=="string"?c.textContent!==T&&(p.suppressHydrationWarning!==!0&&hl(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(p.suppressHydrationWarning!==!0&&hl(c.textContent,T,n),d=["children",""+T]):a.hasOwnProperty(_)&&T!=null&&_==="onScroll"&&$e("scroll",c)}switch(o){case"input":Qn(c),Fa(c,p,!0);break;case"textarea":Qn(c),vo(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=dl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=lt(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(o,{is:c.is}):(n=_.createElement(o),o==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,o),n[zn]=r,n[Go]=c,Pp(n,r,!1,!1),r.stateNode=n;e:{switch(_=Ao(o,c),o){case"dialog":$e("cancel",n),$e("close",n),d=c;break;case"iframe":case"object":case"embed":$e("load",n),d=c;break;case"video":case"audio":for(d=0;d<Ho.length;d++)$e(Ho[d],n);d=c;break;case"source":$e("error",n),d=c;break;case"img":case"image":case"link":$e("error",n),$e("load",n),d=c;break;case"details":$e("toggle",n),d=c;break;case"input":Qi(n,c),d=ci(n,c),$e("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ee({},c,{value:void 0}),$e("invalid",n);break;case"textarea":Xi(n,c),d=_o(n,c),$e("invalid",n);break;default:d=c}So(o,d),T=d;for(p in T)if(T.hasOwnProperty(p)){var R=T[p];p==="style"?To(n,R):p==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&Eo(n,R)):p==="children"?typeof R=="string"?(o!=="textarea"||R!=="")&&Ir(n,R):typeof R=="number"&&Ir(n,""+R):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?R!=null&&p==="onScroll"&&$e("scroll",n):R!=null&&ge(n,p,R,_))}switch(o){case"input":Qn(n),Fa(n,c,!1);break;case"textarea":Qn(n),vo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+xe(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?Xn(n,!!c.multiple,p,!1):c.defaultValue!=null&&Xn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=dl)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Dt(r),null;case 6:if(n&&r.stateNode!=null)Np(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(o=Di(Zo.current),Di(jn.current),vl(r)){if(c=r.stateNode,o=r.memoizedProps,c[zn]=r,(p=c.nodeValue!==o)&&(n=tn,n!==null))switch(n.tag){case 3:hl(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&hl(c.nodeValue,o,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[zn]=r,r.stateNode=c}return Dt(r),null;case 13:if(qe(Ge),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ke&&nn!==null&&r.mode&1&&!(r.flags&128))Vf(),Ns(),r.flags|=98560,p=!1;else if(p=vl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[zn]=r}else Ns(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Dt(r),p=!1}else An!==null&&(uh(An),An=null),p=!0;if(!p)return r.flags&65536?r:null}return r.flags&128?(r.lanes=o,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,r.mode&1&&(n===null||Ge.current&1?dt===0&&(dt=3):dh())),r.updateQueue!==null&&(r.flags|=4),Dt(r),null);case 4:return Ls(),Jc(n,r),n===null&&Wo(r.stateNode.containerInfo),Dt(r),null;case 10:return Rc(r.type._context),Dt(r),null;case 17:return Ht(r.type)&&pl(),Dt(r),null;case 19:if(qe(Ge),p=r.memoizedState,p===null)return Dt(r),null;if(c=(r.flags&128)!==0,_=p.rendering,_===null)if(c)ia(p,!1);else{if(dt!==0||n!==null&&n.flags&128)for(n=r.child;n!==null;){if(_=Al(n),_!==null){for(r.flags|=128,ia(p,!1),c=_.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=o,o=r.child;o!==null;)p=o,n=c,p.flags&=14680066,_=p.alternate,_===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=_.childLanes,p.lanes=_.lanes,p.child=_.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=_.memoizedProps,p.memoizedState=_.memoizedState,p.updateQueue=_.updateQueue,p.type=_.type,n=_.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Be(Ge,Ge.current&1|2),r.child}n=n.sibling}p.tail!==null&&je()>Us&&(r.flags|=128,c=!0,ia(p,!1),r.lanes=4194304)}else{if(!c)if(n=Al(_),n!==null){if(r.flags|=128,c=!0,o=n.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),ia(p,!0),p.tail===null&&p.tailMode==="hidden"&&!_.alternate&&!Ke)return Dt(r),null}else 2*je()-p.renderingStartTime>Us&&o!==1073741824&&(r.flags|=128,c=!0,ia(p,!1),r.lanes=4194304);p.isBackwards?(_.sibling=r.child,r.child=_):(o=p.last,o!==null?o.sibling=_:r.child=_,p.last=_)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=je(),r.sibling=null,o=Ge.current,Be(Ge,c?o&1|2:o&1),r):(Dt(r),null);case 22:case 23:return hh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&r.mode&1?rn&1073741824&&(Dt(r),r.subtreeFlags&6&&(r.flags|=8192)):Dt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function hv(n,r){switch(Ec(r),r.tag){case 1:return Ht(r.type)&&pl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ls(),qe(qt),qe(kt),Vc(),n=r.flags,n&65536&&!(n&128)?(r.flags=n&-65537|128,r):null;case 5:return Dc(r),null;case 13:if(qe(Ge),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ns()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return qe(Ge),null;case 4:return Ls(),null;case 10:return Rc(r.type._context),null;case 22:case 23:return hh(),null;case 24:return null;default:return null}}var Ll=!1,Ot=!1,dv=typeof WeakSet=="function"?WeakSet:Set,ne=null;function Ms(n,r){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){Je(n,r,c)}else o.current=null}function Zc(n,r,o){try{o()}catch(c){Je(n,r,c)}}var Dp=!1;function fv(n,r){if(hc=Dr,n=uf(),rc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var _=0,T=-1,R=-1,F=0,$=0,H=n,B=null;t:for(;;){for(var Z;H!==o||d!==0&&H.nodeType!==3||(T=_+d),H!==p||c!==0&&H.nodeType!==3||(R=_+c),H.nodeType===3&&(_+=H.nodeValue.length),(Z=H.firstChild)!==null;)B=H,H=Z;for(;;){if(H===n)break t;if(B===o&&++F===d&&(T=_),B===p&&++$===c&&(R=_),(Z=H.nextSibling)!==null)break;H=B,B=H.parentNode}H=Z}o=T===-1||R===-1?null:{start:T,end:R}}else o=null}o=o||{start:0,end:0}}else o=null;for(dc={focusedElem:n,selectionRange:o},Dr=!1,ne=r;ne!==null;)if(r=ne,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ne=n;else for(;ne!==null;){r=ne;try{var re=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(re!==null){var ie=re.memoizedProps,tt=re.memoizedState,x=r.stateNode,P=x.getSnapshotBeforeUpdate(r.elementType===r.type?ie:Rn(r.type,ie),tt);x.__reactInternalSnapshotBeforeUpdate=P}break;case 3:var M=r.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(W){Je(r,r.return,W)}if(n=r.sibling,n!==null){n.return=r.return,ne=n;break}ne=r.return}return re=Dp,Dp=!1,re}function sa(n,r,o){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&Zc(r,o,p)}d=d.next}while(d!==c)}}function xl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==r)}}function eh(n){var r=n.ref;if(r!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof r=="function"?r(n):r.current=n}}function Op(n){var r=n.alternate;r!==null&&(n.alternate=null,Op(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[zn],delete r[Go],delete r[gc],delete r[Q_],delete r[Y_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Vp(n){return n.tag===5||n.tag===3||n.tag===4}function Lp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Vp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function th(n,r,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(n,r):o.insertBefore(n,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(n,o)):(r=o,r.appendChild(n)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=dl));else if(c!==4&&(n=n.child,n!==null))for(th(n,r,o),n=n.sibling;n!==null;)th(n,r,o),n=n.sibling}function nh(n,r,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(nh(n,r,o),n=n.sibling;n!==null;)nh(n,r,o),n=n.sibling}var It=null,Cn=!1;function zr(n,r,o){for(o=o.child;o!==null;)xp(n,r,o),o=o.sibling}function xp(n,r,o){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(vi,o)}catch{}switch(o.tag){case 5:Ot||Ms(o,r);case 6:var c=It,d=Cn;It=null,zr(n,r,o),It=c,Cn=d,It!==null&&(Cn?(n=It,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):It.removeChild(o.stateNode));break;case 18:It!==null&&(Cn?(n=It,o=o.stateNode,n.nodeType===8?mc(n.parentNode,o):n.nodeType===1&&mc(n,o),Tn(n)):mc(It,o.stateNode));break;case 4:c=It,d=Cn,It=o.stateNode.containerInfo,Cn=!0,zr(n,r,o),It=c,Cn=d;break;case 0:case 11:case 14:case 15:if(!Ot&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,_=p.destroy;p=p.tag,_!==void 0&&(p&2||p&4)&&Zc(o,r,_),d=d.next}while(d!==c)}zr(n,r,o);break;case 1:if(!Ot&&(Ms(o,r),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(T){Je(o,r,T)}zr(n,r,o);break;case 21:zr(n,r,o);break;case 22:o.mode&1?(Ot=(c=Ot)||o.memoizedState!==null,zr(n,r,o),Ot=c):zr(n,r,o);break;default:zr(n,r,o)}}function Mp(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new dv),r.forEach(function(c){var d=Tv.bind(null,n,c);o.has(c)||(o.add(c),c.then(d,d))})}}function Pn(n,r){var o=r.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c];try{var p=n,_=r,T=_;e:for(;T!==null;){switch(T.tag){case 5:It=T.stateNode,Cn=!1;break e;case 3:It=T.stateNode.containerInfo,Cn=!0;break e;case 4:It=T.stateNode.containerInfo,Cn=!0;break e}T=T.return}if(It===null)throw Error(t(160));xp(p,_,d),It=null,Cn=!1;var R=d.alternate;R!==null&&(R.return=null),d.return=null}catch(F){Je(d,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Fp(r,n),r=r.sibling}function Fp(n,r){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Pn(r,n),$n(n),c&4){try{sa(3,n,n.return),xl(3,n)}catch(ie){Je(n,n.return,ie)}try{sa(5,n,n.return)}catch(ie){Je(n,n.return,ie)}}break;case 1:Pn(r,n),$n(n),c&512&&o!==null&&Ms(o,o.return);break;case 5:if(Pn(r,n),$n(n),c&512&&o!==null&&Ms(o,o.return),n.flags&32){var d=n.stateNode;try{Ir(d,"")}catch(ie){Je(n,n.return,ie)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,_=o!==null?o.memoizedProps:p,T=n.type,R=n.updateQueue;if(n.updateQueue=null,R!==null)try{T==="input"&&p.type==="radio"&&p.name!=null&&go(d,p),Ao(T,_);var F=Ao(T,p);for(_=0;_<R.length;_+=2){var $=R[_],H=R[_+1];$==="style"?To(d,H):$==="dangerouslySetInnerHTML"?Eo(d,H):$==="children"?Ir(d,H):ge(d,$,H,F)}switch(T){case"input":yo(d,p);break;case"textarea":Ji(d,p);break;case"select":var B=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Z=p.value;Z!=null?Xn(d,!!p.multiple,Z,!1):B!==!!p.multiple&&(p.defaultValue!=null?Xn(d,!!p.multiple,p.defaultValue,!0):Xn(d,!!p.multiple,p.multiple?[]:"",!1))}d[Go]=p}catch(ie){Je(n,n.return,ie)}}break;case 6:if(Pn(r,n),$n(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(ie){Je(n,n.return,ie)}}break;case 3:if(Pn(r,n),$n(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Tn(r.containerInfo)}catch(ie){Je(n,n.return,ie)}break;case 4:Pn(r,n),$n(n);break;case 13:Pn(r,n),$n(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(sh=je())),c&4&&Mp(n);break;case 22:if($=o!==null&&o.memoizedState!==null,n.mode&1?(Ot=(F=Ot)||$,Pn(r,n),Ot=F):Pn(r,n),$n(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!$&&n.mode&1)for(ne=n,$=n.child;$!==null;){for(H=ne=$;ne!==null;){switch(B=ne,Z=B.child,B.tag){case 0:case 11:case 14:case 15:sa(4,B,B.return);break;case 1:Ms(B,B.return);var re=B.stateNode;if(typeof re.componentWillUnmount=="function"){c=B,o=B.return;try{r=c,re.props=r.memoizedProps,re.state=r.memoizedState,re.componentWillUnmount()}catch(ie){Je(c,o,ie)}}break;case 5:Ms(B,B.return);break;case 22:if(B.memoizedState!==null){zp(H);continue}}Z!==null?(Z.return=B,ne=Z):zp(H)}$=$.sibling}e:for($=null,H=n;;){if(H.tag===5){if($===null){$=H;try{d=H.stateNode,F?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(T=H.stateNode,R=H.memoizedProps.style,_=R!=null&&R.hasOwnProperty("display")?R.display:null,T.style.display=wo("display",_))}catch(ie){Je(n,n.return,ie)}}}else if(H.tag===6){if($===null)try{H.stateNode.nodeValue=F?"":H.memoizedProps}catch(ie){Je(n,n.return,ie)}}else if((H.tag!==22&&H.tag!==23||H.memoizedState===null||H===n)&&H.child!==null){H.child.return=H,H=H.child;continue}if(H===n)break e;for(;H.sibling===null;){if(H.return===null||H.return===n)break e;$===H&&($=null),H=H.return}$===H&&($=null),H.sibling.return=H.return,H=H.sibling}}break;case 19:Pn(r,n),$n(n),c&4&&Mp(n);break;case 21:break;default:Pn(r,n),$n(n)}}function $n(n){var r=n.flags;if(r&2){try{e:{for(var o=n.return;o!==null;){if(Vp(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Ir(d,""),c.flags&=-33);var p=Lp(n);nh(n,p,d);break;case 3:case 4:var _=c.stateNode.containerInfo,T=Lp(n);th(n,T,_);break;default:throw Error(t(161))}}catch(R){Je(n,n.return,R)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function pv(n,r,o){ne=n,Up(n)}function Up(n,r,o){for(var c=(n.mode&1)!==0;ne!==null;){var d=ne,p=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||Ll;if(!_){var T=d.alternate,R=T!==null&&T.memoizedState!==null||Ot;T=Ll;var F=Ot;if(Ll=_,(Ot=R)&&!F)for(ne=d;ne!==null;)_=ne,R=_.child,_.tag===22&&_.memoizedState!==null?jp(d):R!==null?(R.return=_,ne=R):jp(d);for(;p!==null;)ne=p,Up(p),p=p.sibling;ne=d,Ll=T,Ot=F}bp(n)}else d.subtreeFlags&8772&&p!==null?(p.return=d,ne=p):bp(n)}}function bp(n){for(;ne!==null;){var r=ne;if(r.flags&8772){var o=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Ot||xl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Ot)if(o===null)c.componentDidMount();else{var d=r.elementType===r.type?o.memoizedProps:Rn(r.type,o.memoizedProps);c.componentDidUpdate(d,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&zf(r,p,c);break;case 3:var _=r.updateQueue;if(_!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}zf(r,_,o)}break;case 5:var T=r.stateNode;if(o===null&&r.flags&4){o=T;var R=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&o.focus();break;case"img":R.src&&(o.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var $=F.memoizedState;if($!==null){var H=$.dehydrated;H!==null&&Tn(H)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ot||r.flags&512&&eh(r)}catch(B){Je(r,r.return,B)}}if(r===n){ne=null;break}if(o=r.sibling,o!==null){o.return=r.return,ne=o;break}ne=r.return}}function zp(n){for(;ne!==null;){var r=ne;if(r===n){ne=null;break}var o=r.sibling;if(o!==null){o.return=r.return,ne=o;break}ne=r.return}}function jp(n){for(;ne!==null;){var r=ne;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{xl(4,r)}catch(R){Je(r,o,R)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(R){Je(r,d,R)}}var p=r.return;try{eh(r)}catch(R){Je(r,p,R)}break;case 5:var _=r.return;try{eh(r)}catch(R){Je(r,_,R)}}}catch(R){Je(r,r.return,R)}if(r===n){ne=null;break}var T=r.sibling;if(T!==null){T.return=r.return,ne=T;break}ne=r.return}}var mv=Math.ceil,Ml=_e.ReactCurrentDispatcher,rh=_e.ReactCurrentOwner,fn=_e.ReactCurrentBatchConfig,De=0,yt=null,st=null,St=0,rn=0,Fs=xr(0),dt=0,oa=null,Vi=0,Fl=0,ih=0,aa=null,Kt=null,sh=0,Us=1/0,dr=null,Ul=!1,oh=null,jr=null,bl=!1,Br=null,zl=0,la=0,ah=null,jl=-1,Bl=0;function jt(){return De&6?je():jl!==-1?jl:jl=je()}function $r(n){return n.mode&1?De&2&&St!==0?St&-St:J_.transition!==null?(Bl===0&&(Bl=wi()),Bl):(n=Se,n!==0||(n=window.event,n=n===void 0?16:Mo(n.type)),n):1}function kn(n,r,o,c){if(50<la)throw la=0,ah=null,Error(t(185));Cr(n,o,c),(!(De&2)||n!==yt)&&(n===yt&&(!(De&2)&&(Fl|=o),dt===4&&qr(n,St)),Gt(n,c),o===1&&De===0&&!(r.mode&1)&&(Us=je()+500,gl&&Fr()))}function Gt(n,r){var o=n.callbackNode;er(n,r);var c=Ei(n,n===yt?St:0);if(c===0)o!==null&&Do(o),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(o!=null&&Do(o),r===1)n.tag===0?X_($p.bind(null,n)):Pf($p.bind(null,n)),K_(function(){!(De&6)&&Fr()}),o=null;else{switch(kr(c)){case 1:o=_i;break;case 4:o=Sr;break;case 16:o=on;break;case 536870912:o=Ba;break;default:o=on}o=Xp(o,Bp.bind(null,n))}n.callbackPriority=r,n.callbackNode=o}}function Bp(n,r){if(jl=-1,Bl=0,De&6)throw Error(t(327));var o=n.callbackNode;if(bs()&&n.callbackNode!==o)return null;var c=Ei(n,n===yt?St:0);if(c===0)return null;if(c&30||c&n.expiredLanes||r)r=$l(n,c);else{r=c;var d=De;De|=2;var p=Hp();(yt!==n||St!==r)&&(dr=null,Us=je()+500,xi(n,r));do try{_v();break}catch(T){qp(n,T)}while(!0);Ac(),Ml.current=p,De=d,st!==null?r=0:(yt=null,St=0,r=dt)}if(r!==0){if(r===2&&(d=Jt(n),d!==0&&(c=d,r=lh(n,d))),r===1)throw o=oa,xi(n,0),qr(n,c),Gt(n,je()),o;if(r===6)qr(n,c);else{if(d=n.current.alternate,!(c&30)&&!gv(d)&&(r=$l(n,c),r===2&&(p=Jt(n),p!==0&&(c=p,r=lh(n,p))),r===1))throw o=oa,xi(n,0),qr(n,c),Gt(n,je()),o;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Mi(n,Kt,dr);break;case 3:if(qr(n,c),(c&130023424)===c&&(r=sh+500-je(),10<r)){if(Ei(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){jt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=pc(Mi.bind(null,n,Kt,dr),r);break}Mi(n,Kt,dr);break;case 4:if(qr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var _=31-Ut(c);p=1<<_,_=r[_],_>d&&(d=_),c&=~p}if(c=d,c=je()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*mv(c/1960))-c,10<c){n.timeoutHandle=pc(Mi.bind(null,n,Kt,dr),c);break}Mi(n,Kt,dr);break;case 5:Mi(n,Kt,dr);break;default:throw Error(t(329))}}}return Gt(n,je()),n.callbackNode===o?Bp.bind(null,n):null}function lh(n,r){var o=aa;return n.current.memoizedState.isDehydrated&&(xi(n,r).flags|=256),n=$l(n,r),n!==2&&(r=Kt,Kt=o,r!==null&&uh(r)),n}function uh(n){Kt===null?Kt=n:Kt.push.apply(Kt,n)}function gv(n){for(var r=n;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var d=o[c],p=d.getSnapshot;d=d.value;try{if(!Sn(p(),d))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function qr(n,r){for(r&=~ih,r&=~Fl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var o=31-Ut(r),c=1<<o;n[o]=-1,r&=~c}}function $p(n){if(De&6)throw Error(t(327));bs();var r=Ei(n,0);if(!(r&1))return Gt(n,je()),null;var o=$l(n,r);if(n.tag!==0&&o===2){var c=Jt(n);c!==0&&(r=c,o=lh(n,c))}if(o===1)throw o=oa,xi(n,0),qr(n,r),Gt(n,je()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Mi(n,Kt,dr),Gt(n,je()),null}function ch(n,r){var o=De;De|=1;try{return n(r)}finally{De=o,De===0&&(Us=je()+500,gl&&Fr())}}function Li(n){Br!==null&&Br.tag===0&&!(De&6)&&bs();var r=De;De|=1;var o=fn.transition,c=Se;try{if(fn.transition=null,Se=1,n)return n()}finally{Se=c,fn.transition=o,De=r,!(De&6)&&Fr()}}function hh(){rn=Fs.current,qe(Fs)}function xi(n,r){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,W_(o)),st!==null)for(o=st.return;o!==null;){var c=o;switch(Ec(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&pl();break;case 3:Ls(),qe(qt),qe(kt),Vc();break;case 5:Dc(c);break;case 4:Ls();break;case 13:qe(Ge);break;case 19:qe(Ge);break;case 10:Rc(c.type._context);break;case 22:case 23:hh()}o=o.return}if(yt=n,st=n=Hr(n.current,null),St=rn=r,dt=0,oa=null,ih=Fl=Vi=0,Kt=aa=null,Ni!==null){for(r=0;r<Ni.length;r++)if(o=Ni[r],c=o.interleaved,c!==null){o.interleaved=null;var d=c.next,p=o.pending;if(p!==null){var _=p.next;p.next=d,c.next=_}o.pending=c}Ni=null}return n}function qp(n,r){do{var o=st;try{if(Ac(),Rl.current=Nl,Cl){for(var c=Qe.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Cl=!1}if(Oi=0,gt=ht=Qe=null,ea=!1,ta=0,rh.current=null,o===null||o.return===null){dt=1,oa=r,st=null;break}e:{var p=n,_=o.return,T=o,R=r;if(r=St,T.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var F=R,$=T,H=$.tag;if(!($.mode&1)&&(H===0||H===11||H===15)){var B=$.alternate;B?($.updateQueue=B.updateQueue,$.memoizedState=B.memoizedState,$.lanes=B.lanes):($.updateQueue=null,$.memoizedState=null)}var Z=mp(_);if(Z!==null){Z.flags&=-257,gp(Z,_,T,p,r),Z.mode&1&&pp(p,F,r),r=Z,R=F;var re=r.updateQueue;if(re===null){var ie=new Set;ie.add(R),r.updateQueue=ie}else re.add(R);break e}else{if(!(r&1)){pp(p,F,r),dh();break e}R=Error(t(426))}}else if(Ke&&T.mode&1){var tt=mp(_);if(tt!==null){!(tt.flags&65536)&&(tt.flags|=256),gp(tt,_,T,p,r),Ic(xs(R,T));break e}}p=R=xs(R,T),dt!==4&&(dt=2),aa===null?aa=[p]:aa.push(p),p=_;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var x=dp(p,R,r);bf(p,x);break e;case 1:T=R;var P=p.type,M=p.stateNode;if(!(p.flags&128)&&(typeof P.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(jr===null||!jr.has(M)))){p.flags|=65536,r&=-r,p.lanes|=r;var W=fp(p,T,r);bf(p,W);break e}}p=p.return}while(p!==null)}Kp(o)}catch(se){r=se,st===o&&o!==null&&(st=o=o.return);continue}break}while(!0)}function Hp(){var n=Ml.current;return Ml.current=Nl,n===null?Nl:n}function dh(){(dt===0||dt===3||dt===2)&&(dt=4),yt===null||!(Vi&268435455)&&!(Fl&268435455)||qr(yt,St)}function $l(n,r){var o=De;De|=2;var c=Hp();(yt!==n||St!==r)&&(dr=null,xi(n,r));do try{yv();break}catch(d){qp(n,d)}while(!0);if(Ac(),De=o,Ml.current=c,st!==null)throw Error(t(261));return yt=null,St=0,dt}function yv(){for(;st!==null;)Wp(st)}function _v(){for(;st!==null&&!za();)Wp(st)}function Wp(n){var r=Yp(n.alternate,n,rn);n.memoizedProps=n.pendingProps,r===null?Kp(n):st=r,rh.current=null}function Kp(n){var r=n;do{var o=r.alternate;if(n=r.return,r.flags&32768){if(o=hv(o,r),o!==null){o.flags&=32767,st=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dt=6,st=null;return}}else if(o=cv(o,r,rn),o!==null){st=o;return}if(r=r.sibling,r!==null){st=r;return}st=r=n}while(r!==null);dt===0&&(dt=5)}function Mi(n,r,o){var c=Se,d=fn.transition;try{fn.transition=null,Se=1,vv(n,r,o,c)}finally{fn.transition=d,Se=c}return null}function vv(n,r,o,c){do bs();while(Br!==null);if(De&6)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=o.lanes|o.childLanes;if(be(n,p),n===yt&&(st=yt=null,St=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||bl||(bl=!0,Xp(on,function(){return bs(),null})),p=(o.flags&15990)!==0,o.subtreeFlags&15990||p){p=fn.transition,fn.transition=null;var _=Se;Se=1;var T=De;De|=4,rh.current=null,fv(n,o),Fp(o,n),b_(dc),Dr=!!hc,dc=hc=null,n.current=o,pv(o),Qu(),De=T,Se=_,fn.transition=p}else n.current=o;if(bl&&(bl=!1,Br=n,zl=d),p=n.pendingLanes,p===0&&(jr=null),$a(o.stateNode),Gt(n,je()),r!==null)for(c=n.onRecoverableError,o=0;o<r.length;o++)d=r[o],c(d.value,{componentStack:d.stack,digest:d.digest});if(Ul)throw Ul=!1,n=oh,oh=null,n;return zl&1&&n.tag!==0&&bs(),p=n.pendingLanes,p&1?n===ah?la++:(la=0,ah=n):la=0,Fr(),null}function bs(){if(Br!==null){var n=kr(zl),r=fn.transition,o=Se;try{if(fn.transition=null,Se=16>n?16:n,Br===null)var c=!1;else{if(n=Br,Br=null,zl=0,De&6)throw Error(t(331));var d=De;for(De|=4,ne=n.current;ne!==null;){var p=ne,_=p.child;if(ne.flags&16){var T=p.deletions;if(T!==null){for(var R=0;R<T.length;R++){var F=T[R];for(ne=F;ne!==null;){var $=ne;switch($.tag){case 0:case 11:case 15:sa(8,$,p)}var H=$.child;if(H!==null)H.return=$,ne=H;else for(;ne!==null;){$=ne;var B=$.sibling,Z=$.return;if(Op($),$===F){ne=null;break}if(B!==null){B.return=Z,ne=B;break}ne=Z}}}var re=p.alternate;if(re!==null){var ie=re.child;if(ie!==null){re.child=null;do{var tt=ie.sibling;ie.sibling=null,ie=tt}while(ie!==null)}}ne=p}}if(p.subtreeFlags&2064&&_!==null)_.return=p,ne=_;else e:for(;ne!==null;){if(p=ne,p.flags&2048)switch(p.tag){case 0:case 11:case 15:sa(9,p,p.return)}var x=p.sibling;if(x!==null){x.return=p.return,ne=x;break e}ne=p.return}}var P=n.current;for(ne=P;ne!==null;){_=ne;var M=_.child;if(_.subtreeFlags&2064&&M!==null)M.return=_,ne=M;else e:for(_=P;ne!==null;){if(T=ne,T.flags&2048)try{switch(T.tag){case 0:case 11:case 15:xl(9,T)}}catch(se){Je(T,T.return,se)}if(T===_){ne=null;break e}var W=T.sibling;if(W!==null){W.return=T.return,ne=W;break e}ne=T.return}}if(De=d,Fr(),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(vi,n)}catch{}c=!0}return c}finally{Se=o,fn.transition=r}}return!1}function Gp(n,r,o){r=xs(o,r),r=dp(n,r,1),n=br(n,r,1),r=jt(),n!==null&&(Cr(n,1,r),Gt(n,r))}function Je(n,r,o){if(n.tag===3)Gp(n,n,o);else for(;r!==null;){if(r.tag===3){Gp(r,n,o);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(jr===null||!jr.has(c))){n=xs(o,n),n=fp(r,n,1),r=br(r,n,1),n=jt(),r!==null&&(Cr(r,1,n),Gt(r,n));break}}r=r.return}}function Ev(n,r,o){var c=n.pingCache;c!==null&&c.delete(r),r=jt(),n.pingedLanes|=n.suspendedLanes&o,yt===n&&(St&o)===o&&(dt===4||dt===3&&(St&130023424)===St&&500>je()-sh?xi(n,0):ih|=o),Gt(n,r)}function Qp(n,r){r===0&&(n.mode&1?(r=ls,ls<<=1,!(ls&130023424)&&(ls=4194304)):r=1);var o=jt();n=ur(n,r),n!==null&&(Cr(n,r,o),Gt(n,o))}function wv(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),Qp(n,o)}function Tv(n,r){var o=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Qp(n,o)}var Yp;Yp=function(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps||qt.current)Wt=!0;else{if(!(n.lanes&o)&&!(r.flags&128))return Wt=!1,uv(n,r,o);Wt=!!(n.flags&131072)}else Wt=!1,Ke&&r.flags&1048576&&kf(r,_l,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Vl(n,r),n=r.pendingProps;var d=Cs(r,kt.current);Vs(r,o),d=Mc(null,r,c,n,d,o);var p=Fc();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Ht(c)?(p=!0,ml(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,kc(r),d.updater=Dl,r.stateNode=d,d._reactInternals=r,$c(r,c,n,o),r=Kc(null,r,c,!0,p,o)):(r.tag=0,Ke&&p&&vc(r),zt(null,r,d,o),r=r.child),r;case 16:c=r.elementType;e:{switch(Vl(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=Sv(c),n=Rn(c,n),d){case 0:r=Wc(null,r,c,n,o);break e;case 1:r=Tp(null,r,c,n,o);break e;case 11:r=yp(null,r,c,n,o);break e;case 14:r=_p(null,r,c,Rn(c.type,n),o);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Rn(c,d),Wc(n,r,c,d,o);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Rn(c,d),Tp(n,r,c,d,o);case 3:e:{if(Ip(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,Uf(n,r),Sl(r,c,null,o);var _=r.memoizedState;if(c=_.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=xs(Error(t(423)),r),r=Sp(n,r,c,o,d);break e}else if(c!==d){d=xs(Error(t(424)),r),r=Sp(n,r,c,o,d);break e}else for(nn=Lr(r.stateNode.containerInfo.firstChild),tn=r,Ke=!0,An=null,o=Mf(r,null,c,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ns(),c===d){r=hr(n,r,o);break e}zt(n,r,c,o)}r=r.child}return r;case 5:return jf(r),n===null&&Tc(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,_=d.children,fc(c,d)?_=null:p!==null&&fc(c,p)&&(r.flags|=32),wp(n,r),zt(n,r,_,o),r.child;case 6:return n===null&&Tc(r),null;case 13:return Ap(n,r,o);case 4:return Nc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Ds(r,null,c,o):zt(n,r,c,o),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Rn(c,d),yp(n,r,c,d,o);case 7:return zt(n,r,r.pendingProps,o),r.child;case 8:return zt(n,r,r.pendingProps.children,o),r.child;case 12:return zt(n,r,r.pendingProps.children,o),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,_=d.value,Be(wl,c._currentValue),c._currentValue=_,p!==null)if(Sn(p.value,_)){if(p.children===d.children&&!qt.current){r=hr(n,r,o);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var T=p.dependencies;if(T!==null){_=p.child;for(var R=T.firstContext;R!==null;){if(R.context===c){if(p.tag===1){R=cr(-1,o&-o),R.tag=2;var F=p.updateQueue;if(F!==null){F=F.shared;var $=F.pending;$===null?R.next=R:(R.next=$.next,$.next=R),F.pending=R}}p.lanes|=o,R=p.alternate,R!==null&&(R.lanes|=o),Cc(p.return,o,r),T.lanes|=o;break}R=R.next}}else if(p.tag===10)_=p.type===r.type?null:p.child;else if(p.tag===18){if(_=p.return,_===null)throw Error(t(341));_.lanes|=o,T=_.alternate,T!==null&&(T.lanes|=o),Cc(_,o,r),_=p.sibling}else _=p.child;if(_!==null)_.return=p;else for(_=p;_!==null;){if(_===r){_=null;break}if(p=_.sibling,p!==null){p.return=_.return,_=p;break}_=_.return}p=_}zt(n,r,d.children,o),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Vs(r,o),d=hn(d),c=c(d),r.flags|=1,zt(n,r,c,o),r.child;case 14:return c=r.type,d=Rn(c,r.pendingProps),d=Rn(c.type,d),_p(n,r,c,d,o);case 15:return vp(n,r,r.type,r.pendingProps,o);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Rn(c,d),Vl(n,r),r.tag=1,Ht(c)?(n=!0,ml(r)):n=!1,Vs(r,o),cp(r,c,d),$c(r,c,d,o),Kc(null,r,c,!0,n,o);case 19:return Cp(n,r,o);case 22:return Ep(n,r,o)}throw Error(t(156,r.tag))};function Xp(n,r){return os(n,r)}function Iv(n,r,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(n,r,o,c){return new Iv(n,r,o,c)}function fh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Sv(n){if(typeof n=="function")return fh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===V)return 11;if(n===Ct)return 14}return 2}function Hr(n,r){var o=n.alternate;return o===null?(o=pn(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function ql(n,r,o,c,d,p){var _=2;if(c=n,typeof n=="function")fh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case k:return Fi(o.children,d,p,r);case I:_=8,d|=8;break;case A:return n=pn(12,o,r,d|2),n.elementType=A,n.lanes=p,n;case S:return n=pn(13,o,r,d),n.elementType=S,n.lanes=p,n;case Ze:return n=pn(19,o,r,d),n.elementType=Ze,n.lanes=p,n;case Ue:return Hl(o,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:_=10;break e;case N:_=9;break e;case V:_=11;break e;case Ct:_=14;break e;case Pt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=pn(_,o,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function Fi(n,r,o,c){return n=pn(7,n,c,r),n.lanes=o,n}function Hl(n,r,o,c){return n=pn(22,n,c,r),n.elementType=Ue,n.lanes=o,n.stateNode={isHidden:!1},n}function ph(n,r,o){return n=pn(6,n,null,r),n.lanes=o,n}function mh(n,r,o){return r=pn(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Av(n,r,o,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rr(0),this.expirationTimes=Rr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function gh(n,r,o,c,d,p,_,T,R){return n=new Av(n,r,o,T,R),r===1?(r=1,p===!0&&(r|=8)):r=0,p=pn(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},kc(p),n}function Rv(n,r,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:we,key:c==null?null:""+c,children:n,containerInfo:r,implementation:o}}function Jp(n){if(!n)return Mr;n=n._reactInternals;e:{if(yn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Ht(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Ht(o))return Rf(n,o,r)}return r}function Zp(n,r,o,c,d,p,_,T,R){return n=gh(o,c,!0,n,d,p,_,T,R),n.context=Jp(null),o=n.current,c=jt(),d=$r(o),p=cr(c,d),p.callback=r??null,br(o,p,d),n.current.lanes=d,Cr(n,d,c),Gt(n,c),n}function Wl(n,r,o,c){var d=r.current,p=jt(),_=$r(d);return o=Jp(o),r.context===null?r.context=o:r.pendingContext=o,r=cr(p,_),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=br(d,r,_),n!==null&&(kn(n,d,_,p),Il(n,d,_)),_}function Kl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function em(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function yh(n,r){em(n,r),(n=n.alternate)&&em(n,r)}function Cv(){return null}var tm=typeof reportError=="function"?reportError:function(n){console.error(n)};function _h(n){this._internalRoot=n}Gl.prototype.render=_h.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Wl(n,r,null,null)},Gl.prototype.unmount=_h.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Li(function(){Wl(null,n,null,null)}),r[sr]=null}};function Gl(n){this._internalRoot=n}Gl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Ga();n={blockedOn:null,target:n,priority:r};for(var o=0;o<Mn.length&&r!==0&&r<Mn[o].priority;o++);Mn.splice(o,0,n),o===0&&Xa(n)}};function vh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ql(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function nm(){}function Pv(n,r,o,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var F=Kl(_);p.call(F)}}var _=Zp(r,c,n,0,null,!1,!1,"",nm);return n._reactRootContainer=_,n[sr]=_.current,Wo(n.nodeType===8?n.parentNode:n),Li(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var F=Kl(R);T.call(F)}}var R=gh(n,0,!1,null,null,!1,!1,"",nm);return n._reactRootContainer=R,n[sr]=R.current,Wo(n.nodeType===8?n.parentNode:n),Li(function(){Wl(r,R,o,c)}),R}function Yl(n,r,o,c,d){var p=o._reactRootContainer;if(p){var _=p;if(typeof d=="function"){var T=d;d=function(){var R=Kl(_);T.call(R)}}Wl(r,_,n,d)}else _=Pv(o,r,n,d,c);return Kl(_)}Wa=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var o=Ar(r.pendingLanes);o!==0&&(Pr(r,o|1),Gt(r,je()),!(De&6)&&(Us=je()+500,Fr()))}break;case 13:Li(function(){var c=ur(n,1);if(c!==null){var d=jt();kn(c,n,1,d)}}),yh(n,1)}},us=function(n){if(n.tag===13){var r=ur(n,134217728);if(r!==null){var o=jt();kn(r,n,134217728,o)}yh(n,134217728)}},Ka=function(n){if(n.tag===13){var r=$r(n),o=ur(n,r);if(o!==null){var c=jt();kn(o,n,r,c)}yh(n,r)}},Ga=function(){return Se},Qa=function(n,r){var o=Se;try{return Se=n,r()}finally{Se=o}},es=function(n,r,o){switch(r){case"input":if(yo(n,o),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var c=o[r];if(c!==n&&c.form===n.form){var d=fl(c);if(!d)throw Error(t(90));Gi(c),yo(c,d)}}}break;case"textarea":Ji(n,o);break;case"select":r=o.value,r!=null&&Xn(n,!!o.multiple,r,!1)}},pi=ch,Co=Li;var kv={usingClientEntryPoint:!1,Events:[Qo,As,fl,Ln,Ro,ch]},ua={findFiberByHostInstance:Ri,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Nv={bundleType:ua.bundleType,version:ua.version,rendererPackageName:ua.rendererPackageName,rendererConfig:ua.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_e.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=No(n),n===null?null:n.stateNode},findFiberByHostInstance:ua.findFiberByHostInstance||Cv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xl.isDisabled&&Xl.supportsFiber)try{vi=Xl.inject(Nv),Xt=Xl}catch{}}return Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kv,Qt.createPortal=function(n,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vh(r))throw Error(t(200));return Rv(n,r,null,o)},Qt.createRoot=function(n,r){if(!vh(n))throw Error(t(299));var o=!1,c="",d=tm;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=gh(n,1,!1,null,null,o,!1,c,d),n[sr]=r.current,Wo(n.nodeType===8?n.parentNode:n),new _h(r)},Qt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=No(r),n=n===null?null:n.stateNode,n},Qt.flushSync=function(n){return Li(n)},Qt.hydrate=function(n,r,o){if(!Ql(r))throw Error(t(200));return Yl(null,n,r,!0,o)},Qt.hydrateRoot=function(n,r,o){if(!vh(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,d=!1,p="",_=tm;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(_=o.onRecoverableError)),r=Zp(r,null,n,1,o??null,d,!1,p,_),n[sr]=r.current,Wo(n),c)for(n=0;n<c.length;n++)o=c[n],d=o._getVersion,d=d(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,d]:r.mutableSourceEagerHydrationData.push(o,d);return new Gl(r)},Qt.render=function(n,r,o){if(!Ql(r))throw Error(t(200));return Yl(null,n,r,!1,o)},Qt.unmountComponentAtNode=function(n){if(!Ql(n))throw Error(t(40));return n._reactRootContainer?(Li(function(){Yl(null,null,n,!1,function(){n._reactRootContainer=null,n[sr]=null})}),!0):!1},Qt.unstable_batchedUpdates=ch,Qt.unstable_renderSubtreeIntoContainer=function(n,r,o,c){if(!Ql(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Yl(n,r,o,!1,c)},Qt.version="18.3.1-next-f1338f8080-20240426",Qt}var cm;function Uv(){if(cm)return Th.exports;cm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Th.exports=Fv(),Th.exports}var hm;function bv(){if(hm)return Jl;hm=1;var i=Uv();return Jl.createRoot=i.createRoot,Jl.hydrateRoot=i.hydrateRoot,Jl}var zv=bv(),dm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},jv=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const a=i[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const u=i[t++];e[s++]=String.fromCharCode((a&31)<<6|u&63)}else if(a>239&&a<365){const u=i[t++],h=i[t++],m=i[t++],y=((a&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((a&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Dg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const u=i[a],h=a+1<i.length,m=h?i[a+1]:0,y=a+2<i.length,v=y?i[a+2]:0,w=u>>2,D=(u&3)<<4|m>>4;let U=(m&15)<<2|v>>6,q=v&63;y||(q=64,h||(U=64)),s.push(t[w],t[D],t[U],t[q])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Ng(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):jv(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const u=t[i.charAt(a++)],m=a<i.length?t[i.charAt(a)]:0;++a;const v=a<i.length?t[i.charAt(a)]:64;++a;const D=a<i.length?t[i.charAt(a)]:64;if(++a,u==null||m==null||v==null||D==null)throw new Bv;const U=u<<2|m>>4;if(s.push(U),v!==64){const q=m<<4&240|v>>2;if(s.push(q),D!==64){const X=v<<6&192|D;s.push(X)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Bv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $v=function(i){const e=Ng(i);return Dg.encodeByteArray(e,!0)},mu=function(i){return $v(i).replace(/\./g,"")},Og=function(i){try{return Dg.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv=()=>qv().__FIREBASE_DEFAULTS__,Wv=()=>{if(typeof process>"u"||typeof dm>"u")return;const i=dm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Kv=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Og(i[1]);return e&&JSON.parse(e)},Nu=()=>{try{return Hv()||Wv()||Kv()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Vg=i=>{var e,t;return(t=(e=Nu())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},Gv=i=>{const e=Vg(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Lg=()=>{var i;return(i=Nu())===null||i===void 0?void 0:i.config},xg=i=>{var e;return(e=Nu())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[mu(JSON.stringify(t)),mu(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function Jv(){var i;const e=(i=Nu())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Zv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function e0(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function t0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function n0(){const i=Ft();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function r0(){return!Jv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function i0(){try{return typeof indexedDB=="object"}catch{return!1}}function s0(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var u;e(((u=a.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0="FirebaseError";class Er extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=o0,Object.setPrototypeOf(this,Er.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pa.prototype.create)}}class Pa{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,u=this.errors[e],h=u?a0(u,s):"Error",m=`${this.serviceName}: ${h} (${a}).`;return new Er(a,m,s)}}function a0(i,e){return i.replace(l0,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const l0=/\{\$([^}]+)}/g;function u0(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function gu(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const u=i[a],h=e[a];if(fm(u)&&fm(h)){if(!gu(u,h))return!1}else if(u!==h)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function fm(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ha(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,u]=s.split("=");e[decodeURIComponent(a)]=decodeURIComponent(u)}}),e}function da(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function c0(i,e){const t=new h0(i,e);return t.subscribe.bind(t)}class h0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");d0(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=Ah),a.error===void 0&&(a.error=Ah),a.complete===void 0&&(a.complete=Ah);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function d0(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Ah(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(i){return i&&i._delegate?i._delegate:i}class $i{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Qv;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(a)return null;throw u}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(m0(e))try{this.getOrInitializeService({instanceIdentifier:Ui})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:a});s.resolve(u)}catch{}}}}clearInstance(e=Ui){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ui){return this.instances.has(e)}getOptions(e=Ui){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(a)}return a}onInit(e,t){var s;const a=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(a,u);const h=this.instances.get(a);return h&&e(h,a),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:p0(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ui){return this.component?this.component.multipleInstances?e:Ui:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function p0(i){return i===Ui?void 0:i}function m0(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new f0(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ie||(Ie={}));const y0={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},_0=Ie.INFO,v0={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},E0=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=v0[e];if(a)console[a](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cd{constructor(e){this.name=e,this._logLevel=_0,this._logHandler=E0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?y0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const w0=(i,e)=>e.some(t=>i instanceof t);let pm,mm;function T0(){return pm||(pm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function I0(){return mm||(mm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mg=new WeakMap,Fh=new WeakMap,Fg=new WeakMap,Rh=new WeakMap,hd=new WeakMap;function S0(i){const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(ei(i.result)),a()},h=()=>{s(i.error),a()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Mg.set(t,i)}).catch(()=>{}),hd.set(e,i),e}function A0(i){if(Fh.has(i))return;const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),a()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});Fh.set(i,e)}let Uh={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Fh.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Fg.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ei(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function R0(i){Uh=i(Uh)}function C0(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Ch(this),e,...t);return Fg.set(s,e.sort?e.sort():[e]),ei(s)}:I0().includes(i)?function(...e){return i.apply(Ch(this),e),ei(Mg.get(this))}:function(...e){return ei(i.apply(Ch(this),e))}}function P0(i){return typeof i=="function"?C0(i):(i instanceof IDBTransaction&&A0(i),w0(i,T0())?new Proxy(i,Uh):i)}function ei(i){if(i instanceof IDBRequest)return S0(i);if(Rh.has(i))return Rh.get(i);const e=P0(i);return e!==i&&(Rh.set(i,e),hd.set(e,i)),e}const Ch=i=>hd.get(i);function k0(i,e,{blocked:t,upgrade:s,blocking:a,terminated:u}={}){const h=indexedDB.open(i,e),m=ei(h);return s&&h.addEventListener("upgradeneeded",y=>{s(ei(h.result),y.oldVersion,y.newVersion,ei(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),a&&y.addEventListener("versionchange",v=>a(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const N0=["get","getKey","getAll","getAllKeys","count"],D0=["put","add","delete","clear"],Ph=new Map;function gm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Ph.get(e))return Ph.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=D0.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||N0.includes(t)))return;const u=async function(h,...m){const y=this.transaction(h,a?"readwrite":"readonly");let v=y.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),a&&y.done]))[0]};return Ph.set(e,u),u}R0(i=>({...i,get:(e,t,s)=>gm(e,t)||i.get(e,t,s),has:(e,t)=>!!gm(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(V0(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function V0(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bh="@firebase/app",ym="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=new cd("@firebase/app"),L0="@firebase/app-compat",x0="@firebase/analytics-compat",M0="@firebase/analytics",F0="@firebase/app-check-compat",U0="@firebase/app-check",b0="@firebase/auth",z0="@firebase/auth-compat",j0="@firebase/database",B0="@firebase/data-connect",$0="@firebase/database-compat",q0="@firebase/functions",H0="@firebase/functions-compat",W0="@firebase/installations",K0="@firebase/installations-compat",G0="@firebase/messaging",Q0="@firebase/messaging-compat",Y0="@firebase/performance",X0="@firebase/performance-compat",J0="@firebase/remote-config",Z0="@firebase/remote-config-compat",eE="@firebase/storage",tE="@firebase/storage-compat",nE="@firebase/firestore",rE="@firebase/vertexai",iE="@firebase/firestore-compat",sE="firebase",oE="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh="[DEFAULT]",aE={[bh]:"fire-core",[L0]:"fire-core-compat",[M0]:"fire-analytics",[x0]:"fire-analytics-compat",[U0]:"fire-app-check",[F0]:"fire-app-check-compat",[b0]:"fire-auth",[z0]:"fire-auth-compat",[j0]:"fire-rtdb",[B0]:"fire-data-connect",[$0]:"fire-rtdb-compat",[q0]:"fire-fn",[H0]:"fire-fn-compat",[W0]:"fire-iid",[K0]:"fire-iid-compat",[G0]:"fire-fcm",[Q0]:"fire-fcm-compat",[Y0]:"fire-perf",[X0]:"fire-perf-compat",[J0]:"fire-rc",[Z0]:"fire-rc-compat",[eE]:"fire-gcs",[tE]:"fire-gcs-compat",[nE]:"fire-fst",[iE]:"fire-fst-compat",[rE]:"fire-vertex","fire-js":"fire-js",[sE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu=new Map,lE=new Map,jh=new Map;function _m(i,e){try{i.container.addComponent(e)}catch(t){yr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function Js(i){const e=i.name;if(jh.has(e))return yr.debug(`There were multiple attempts to register component ${e}.`),!1;jh.set(e,i);for(const t of yu.values())_m(t,i);for(const t of lE.values())_m(t,i);return!0}function dd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function fr(i){return i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ti=new Pa("app","Firebase",uE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new $i("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ti.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=oE;function fd(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:zh,automaticDataCollectionEnabled:!1},e),a=s.name;if(typeof a!="string"||!a)throw ti.create("bad-app-name",{appName:String(a)});if(t||(t=Lg()),!t)throw ti.create("no-options");const u=yu.get(a);if(u){if(gu(t,u.options)&&gu(s,u.config))return u;throw ti.create("duplicate-app",{appName:a})}const h=new g0(a);for(const y of jh.values())h.addComponent(y);const m=new cE(t,s,h);return yu.set(a,m),m}function Ug(i=zh){const e=yu.get(i);if(!e&&i===zh&&Lg())return fd();if(!e)throw ti.create("no-app",{appName:i});return e}function ni(i,e,t){var s;let a=(s=aE[i])!==null&&s!==void 0?s:i;t&&(a+=`-${t}`);const u=a.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${a}" with version "${e}":`];u&&m.push(`library name "${a}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yr.warn(m.join(" "));return}Js(new $i(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE="firebase-heartbeat-database",dE=1,wa="firebase-heartbeat-store";let kh=null;function bg(){return kh||(kh=k0(hE,dE,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(wa)}catch(t){console.warn(t)}}}}).catch(i=>{throw ti.create("idb-open",{originalErrorMessage:i.message})})),kh}async function fE(i){try{const t=(await bg()).transaction(wa),s=await t.objectStore(wa).get(zg(i));return await t.done,s}catch(e){if(e instanceof Er)yr.warn(e.message);else{const t=ti.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yr.warn(t.message)}}}async function vm(i,e){try{const s=(await bg()).transaction(wa,"readwrite");await s.objectStore(wa).put(e,zg(i)),await s.done}catch(t){if(t instanceof Er)yr.warn(t.message);else{const s=ti.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});yr.warn(s.message)}}}function zg(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE=1024,mE=30*24*60*60*1e3;class gE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new _E(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Em();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:a}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const m=new Date(h.date).valueOf();return Date.now()-m<=mE}),this._storage.overwrite(this._heartbeatsCache))}catch(s){yr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Em(),{heartbeatsToSend:s,unsentEntries:a}=yE(this._heartbeatsCache.heartbeats),u=mu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return yr.warn(t),""}}}function Em(){return new Date().toISOString().substring(0,10)}function yE(i,e=pE){const t=[];let s=i.slice();for(const a of i){const u=t.find(h=>h.agent===a.agent);if(u){if(u.dates.push(a.date),wm(t)>e){u.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),wm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class _E{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return i0()?s0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await fE(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return vm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return vm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function wm(i){return mu(JSON.stringify({version:2,heartbeats:i})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(i){Js(new $i("platform-logger",e=>new O0(e),"PRIVATE")),Js(new $i("heartbeat",e=>new gE(e),"PRIVATE")),ni(bh,ym,i),ni(bh,ym,"esm2017"),ni("fire-js","")}vE("");var Tm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zi,jg;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,I){function A(){}A.prototype=I.prototype,k.D=I.prototype,k.prototype=new A,k.prototype.constructor=k,k.C=function(C,N,V){for(var S=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)S[Ze-2]=arguments[Ze];return I.prototype[N].apply(C,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(k,I,A){A||(A=0);var C=Array(16);if(typeof I=="string")for(var N=0;16>N;++N)C[N]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(N=0;16>N;++N)C[N]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=k.g[0],A=k.g[1],N=k.g[2];var V=k.g[3],S=I+(V^A&(N^V))+C[0]+3614090360&4294967295;I=A+(S<<7&4294967295|S>>>25),S=V+(N^I&(A^N))+C[1]+3905402710&4294967295,V=I+(S<<12&4294967295|S>>>20),S=N+(A^V&(I^A))+C[2]+606105819&4294967295,N=V+(S<<17&4294967295|S>>>15),S=A+(I^N&(V^I))+C[3]+3250441966&4294967295,A=N+(S<<22&4294967295|S>>>10),S=I+(V^A&(N^V))+C[4]+4118548399&4294967295,I=A+(S<<7&4294967295|S>>>25),S=V+(N^I&(A^N))+C[5]+1200080426&4294967295,V=I+(S<<12&4294967295|S>>>20),S=N+(A^V&(I^A))+C[6]+2821735955&4294967295,N=V+(S<<17&4294967295|S>>>15),S=A+(I^N&(V^I))+C[7]+4249261313&4294967295,A=N+(S<<22&4294967295|S>>>10),S=I+(V^A&(N^V))+C[8]+1770035416&4294967295,I=A+(S<<7&4294967295|S>>>25),S=V+(N^I&(A^N))+C[9]+2336552879&4294967295,V=I+(S<<12&4294967295|S>>>20),S=N+(A^V&(I^A))+C[10]+4294925233&4294967295,N=V+(S<<17&4294967295|S>>>15),S=A+(I^N&(V^I))+C[11]+2304563134&4294967295,A=N+(S<<22&4294967295|S>>>10),S=I+(V^A&(N^V))+C[12]+1804603682&4294967295,I=A+(S<<7&4294967295|S>>>25),S=V+(N^I&(A^N))+C[13]+4254626195&4294967295,V=I+(S<<12&4294967295|S>>>20),S=N+(A^V&(I^A))+C[14]+2792965006&4294967295,N=V+(S<<17&4294967295|S>>>15),S=A+(I^N&(V^I))+C[15]+1236535329&4294967295,A=N+(S<<22&4294967295|S>>>10),S=I+(N^V&(A^N))+C[1]+4129170786&4294967295,I=A+(S<<5&4294967295|S>>>27),S=V+(A^N&(I^A))+C[6]+3225465664&4294967295,V=I+(S<<9&4294967295|S>>>23),S=N+(I^A&(V^I))+C[11]+643717713&4294967295,N=V+(S<<14&4294967295|S>>>18),S=A+(V^I&(N^V))+C[0]+3921069994&4294967295,A=N+(S<<20&4294967295|S>>>12),S=I+(N^V&(A^N))+C[5]+3593408605&4294967295,I=A+(S<<5&4294967295|S>>>27),S=V+(A^N&(I^A))+C[10]+38016083&4294967295,V=I+(S<<9&4294967295|S>>>23),S=N+(I^A&(V^I))+C[15]+3634488961&4294967295,N=V+(S<<14&4294967295|S>>>18),S=A+(V^I&(N^V))+C[4]+3889429448&4294967295,A=N+(S<<20&4294967295|S>>>12),S=I+(N^V&(A^N))+C[9]+568446438&4294967295,I=A+(S<<5&4294967295|S>>>27),S=V+(A^N&(I^A))+C[14]+3275163606&4294967295,V=I+(S<<9&4294967295|S>>>23),S=N+(I^A&(V^I))+C[3]+4107603335&4294967295,N=V+(S<<14&4294967295|S>>>18),S=A+(V^I&(N^V))+C[8]+1163531501&4294967295,A=N+(S<<20&4294967295|S>>>12),S=I+(N^V&(A^N))+C[13]+2850285829&4294967295,I=A+(S<<5&4294967295|S>>>27),S=V+(A^N&(I^A))+C[2]+4243563512&4294967295,V=I+(S<<9&4294967295|S>>>23),S=N+(I^A&(V^I))+C[7]+1735328473&4294967295,N=V+(S<<14&4294967295|S>>>18),S=A+(V^I&(N^V))+C[12]+2368359562&4294967295,A=N+(S<<20&4294967295|S>>>12),S=I+(A^N^V)+C[5]+4294588738&4294967295,I=A+(S<<4&4294967295|S>>>28),S=V+(I^A^N)+C[8]+2272392833&4294967295,V=I+(S<<11&4294967295|S>>>21),S=N+(V^I^A)+C[11]+1839030562&4294967295,N=V+(S<<16&4294967295|S>>>16),S=A+(N^V^I)+C[14]+4259657740&4294967295,A=N+(S<<23&4294967295|S>>>9),S=I+(A^N^V)+C[1]+2763975236&4294967295,I=A+(S<<4&4294967295|S>>>28),S=V+(I^A^N)+C[4]+1272893353&4294967295,V=I+(S<<11&4294967295|S>>>21),S=N+(V^I^A)+C[7]+4139469664&4294967295,N=V+(S<<16&4294967295|S>>>16),S=A+(N^V^I)+C[10]+3200236656&4294967295,A=N+(S<<23&4294967295|S>>>9),S=I+(A^N^V)+C[13]+681279174&4294967295,I=A+(S<<4&4294967295|S>>>28),S=V+(I^A^N)+C[0]+3936430074&4294967295,V=I+(S<<11&4294967295|S>>>21),S=N+(V^I^A)+C[3]+3572445317&4294967295,N=V+(S<<16&4294967295|S>>>16),S=A+(N^V^I)+C[6]+76029189&4294967295,A=N+(S<<23&4294967295|S>>>9),S=I+(A^N^V)+C[9]+3654602809&4294967295,I=A+(S<<4&4294967295|S>>>28),S=V+(I^A^N)+C[12]+3873151461&4294967295,V=I+(S<<11&4294967295|S>>>21),S=N+(V^I^A)+C[15]+530742520&4294967295,N=V+(S<<16&4294967295|S>>>16),S=A+(N^V^I)+C[2]+3299628645&4294967295,A=N+(S<<23&4294967295|S>>>9),S=I+(N^(A|~V))+C[0]+4096336452&4294967295,I=A+(S<<6&4294967295|S>>>26),S=V+(A^(I|~N))+C[7]+1126891415&4294967295,V=I+(S<<10&4294967295|S>>>22),S=N+(I^(V|~A))+C[14]+2878612391&4294967295,N=V+(S<<15&4294967295|S>>>17),S=A+(V^(N|~I))+C[5]+4237533241&4294967295,A=N+(S<<21&4294967295|S>>>11),S=I+(N^(A|~V))+C[12]+1700485571&4294967295,I=A+(S<<6&4294967295|S>>>26),S=V+(A^(I|~N))+C[3]+2399980690&4294967295,V=I+(S<<10&4294967295|S>>>22),S=N+(I^(V|~A))+C[10]+4293915773&4294967295,N=V+(S<<15&4294967295|S>>>17),S=A+(V^(N|~I))+C[1]+2240044497&4294967295,A=N+(S<<21&4294967295|S>>>11),S=I+(N^(A|~V))+C[8]+1873313359&4294967295,I=A+(S<<6&4294967295|S>>>26),S=V+(A^(I|~N))+C[15]+4264355552&4294967295,V=I+(S<<10&4294967295|S>>>22),S=N+(I^(V|~A))+C[6]+2734768916&4294967295,N=V+(S<<15&4294967295|S>>>17),S=A+(V^(N|~I))+C[13]+1309151649&4294967295,A=N+(S<<21&4294967295|S>>>11),S=I+(N^(A|~V))+C[4]+4149444226&4294967295,I=A+(S<<6&4294967295|S>>>26),S=V+(A^(I|~N))+C[11]+3174756917&4294967295,V=I+(S<<10&4294967295|S>>>22),S=N+(I^(V|~A))+C[2]+718787259&4294967295,N=V+(S<<15&4294967295|S>>>17),S=A+(V^(N|~I))+C[9]+3951481745&4294967295,k.g[0]=k.g[0]+I&4294967295,k.g[1]=k.g[1]+(N+(S<<21&4294967295|S>>>11))&4294967295,k.g[2]=k.g[2]+N&4294967295,k.g[3]=k.g[3]+V&4294967295}s.prototype.u=function(k,I){I===void 0&&(I=k.length);for(var A=I-this.blockSize,C=this.B,N=this.h,V=0;V<I;){if(N==0)for(;V<=A;)a(this,k,V),V+=this.blockSize;if(typeof k=="string"){for(;V<I;)if(C[N++]=k.charCodeAt(V++),N==this.blockSize){a(this,C),N=0;break}}else for(;V<I;)if(C[N++]=k[V++],N==this.blockSize){a(this,C),N=0;break}}this.h=N,this.o+=I},s.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var I=1;I<k.length-8;++I)k[I]=0;var A=8*this.o;for(I=k.length-8;I<k.length;++I)k[I]=A&255,A/=256;for(this.u(k),k=Array(16),I=A=0;4>I;++I)for(var C=0;32>C;C+=8)k[A++]=this.g[I]>>>C&255;return k};function u(k,I){var A=m;return Object.prototype.hasOwnProperty.call(A,k)?A[k]:A[k]=I(k)}function h(k,I){this.h=I;for(var A=[],C=!0,N=k.length-1;0<=N;N--){var V=k[N]|0;C&&V==I||(A[N]=V,C=!1)}this.g=A}var m={};function y(k){return-128<=k&&128>k?u(k,function(I){return new h([I|0],0>I?-1:0)}):new h([k|0],0>k?-1:0)}function v(k){if(isNaN(k)||!isFinite(k))return D;if(0>k)return K(v(-k));for(var I=[],A=1,C=0;k>=A;C++)I[C]=k/A|0,A*=4294967296;return new h(I,0)}function w(k,I){if(k.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(k.charAt(0)=="-")return K(w(k.substring(1),I));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=v(Math.pow(I,8)),C=D,N=0;N<k.length;N+=8){var V=Math.min(8,k.length-N),S=parseInt(k.substring(N,N+V),I);8>V?(V=v(Math.pow(I,V)),C=C.j(V).add(v(S))):(C=C.j(A),C=C.add(v(S)))}return C}var D=y(0),U=y(1),q=y(16777216);i=h.prototype,i.m=function(){if(J(this))return-K(this).m();for(var k=0,I=1,A=0;A<this.g.length;A++){var C=this.i(A);k+=(0<=C?C:4294967296+C)*I,I*=4294967296}return k},i.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(X(this))return"0";if(J(this))return"-"+K(this).toString(k);for(var I=v(Math.pow(k,6)),A=this,C="";;){var N=_e(A,I).g;A=Ae(A,N.j(I));var V=((0<A.g.length?A.g[0]:A.h)>>>0).toString(k);if(A=N,X(A))return V+C;for(;6>V.length;)V="0"+V;C=V+C}},i.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function X(k){if(k.h!=0)return!1;for(var I=0;I<k.g.length;I++)if(k.g[I]!=0)return!1;return!0}function J(k){return k.h==-1}i.l=function(k){return k=Ae(this,k),J(k)?-1:X(k)?0:1};function K(k){for(var I=k.g.length,A=[],C=0;C<I;C++)A[C]=~k.g[C];return new h(A,~k.h).add(U)}i.abs=function(){return J(this)?K(this):this},i.add=function(k){for(var I=Math.max(this.g.length,k.g.length),A=[],C=0,N=0;N<=I;N++){var V=C+(this.i(N)&65535)+(k.i(N)&65535),S=(V>>>16)+(this.i(N)>>>16)+(k.i(N)>>>16);C=S>>>16,V&=65535,S&=65535,A[N]=S<<16|V}return new h(A,A[A.length-1]&-2147483648?-1:0)};function Ae(k,I){return k.add(K(I))}i.j=function(k){if(X(this)||X(k))return D;if(J(this))return J(k)?K(this).j(K(k)):K(K(this).j(k));if(J(k))return K(this.j(K(k)));if(0>this.l(q)&&0>k.l(q))return v(this.m()*k.m());for(var I=this.g.length+k.g.length,A=[],C=0;C<2*I;C++)A[C]=0;for(C=0;C<this.g.length;C++)for(var N=0;N<k.g.length;N++){var V=this.i(C)>>>16,S=this.i(C)&65535,Ze=k.i(N)>>>16,Ct=k.i(N)&65535;A[2*C+2*N]+=S*Ct,Te(A,2*C+2*N),A[2*C+2*N+1]+=V*Ct,Te(A,2*C+2*N+1),A[2*C+2*N+1]+=S*Ze,Te(A,2*C+2*N+1),A[2*C+2*N+2]+=V*Ze,Te(A,2*C+2*N+2)}for(C=0;C<I;C++)A[C]=A[2*C+1]<<16|A[2*C];for(C=I;C<2*I;C++)A[C]=0;return new h(A,0)};function Te(k,I){for(;(k[I]&65535)!=k[I];)k[I+1]+=k[I]>>>16,k[I]&=65535,I++}function ge(k,I){this.g=k,this.h=I}function _e(k,I){if(X(I))throw Error("division by zero");if(X(k))return new ge(D,D);if(J(k))return I=_e(K(k),I),new ge(K(I.g),K(I.h));if(J(I))return I=_e(k,K(I)),new ge(K(I.g),I.h);if(30<k.g.length){if(J(k)||J(I))throw Error("slowDivide_ only works with positive integers.");for(var A=U,C=I;0>=C.l(k);)A=He(A),C=He(C);var N=we(A,1),V=we(C,1);for(C=we(C,2),A=we(A,2);!X(C);){var S=V.add(C);0>=S.l(k)&&(N=N.add(A),V=S),C=we(C,1),A=we(A,1)}return I=Ae(k,N.j(I)),new ge(N,I)}for(N=D;0<=k.l(I);){for(A=Math.max(1,Math.floor(k.m()/I.m())),C=Math.ceil(Math.log(A)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),V=v(A),S=V.j(I);J(S)||0<S.l(k);)A-=C,V=v(A),S=V.j(I);X(V)&&(V=U),N=N.add(V),k=Ae(k,S)}return new ge(N,k)}i.A=function(k){return _e(this,k).h},i.and=function(k){for(var I=Math.max(this.g.length,k.g.length),A=[],C=0;C<I;C++)A[C]=this.i(C)&k.i(C);return new h(A,this.h&k.h)},i.or=function(k){for(var I=Math.max(this.g.length,k.g.length),A=[],C=0;C<I;C++)A[C]=this.i(C)|k.i(C);return new h(A,this.h|k.h)},i.xor=function(k){for(var I=Math.max(this.g.length,k.g.length),A=[],C=0;C<I;C++)A[C]=this.i(C)^k.i(C);return new h(A,this.h^k.h)};function He(k){for(var I=k.g.length+1,A=[],C=0;C<I;C++)A[C]=k.i(C)<<1|k.i(C-1)>>>31;return new h(A,k.h)}function we(k,I){var A=I>>5;I%=32;for(var C=k.g.length-A,N=[],V=0;V<C;V++)N[V]=0<I?k.i(V+A)>>>I|k.i(V+A+1)<<32-I:k.i(V+A);return new h(N,k.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,jg=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=w,zi=h}).apply(typeof Tm<"u"?Tm:typeof self<"u"?self:typeof window<"u"?window:{});var Zl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bg,fa,$g,ou,Bh,qg,Hg,Wg;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,g){return l==Array.prototype||l==Object.prototype||(l[f]=g.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zl=="object"&&Zl];for(var f=0;f<l.length;++f){var g=l[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function a(l,f){if(f)e:{var g=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var L=l[E];if(!(L in g))break e;g=g[L]}l=l[l.length-1],E=g[l],f=f(E),f!=E&&f!=null&&e(g,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var g=0,E=!1,L={next:function(){if(!E&&g<l.length){var b=g++;return{value:f(b,l[b]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}a("Array.prototype.values",function(l){return l||function(){return u(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function y(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function v(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function w(l,f,g){return l.call.apply(l.bind,arguments)}function D(l,f,g){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),l.apply(f,L)}}return function(){return l.apply(f,arguments)}}function U(l,f,g){return U=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:D,U.apply(null,arguments)}function q(l,f){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function X(l,f){function g(){}g.prototype=f.prototype,l.aa=f.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(E,L,b){for(var Q=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)Q[Fe-2]=arguments[Fe];return f.prototype[L].apply(E,Q)}}function J(l){const f=l.length;if(0<f){const g=Array(f);for(let E=0;E<f;E++)g[E]=l[E];return g}return[]}function K(l,f){for(let g=1;g<arguments.length;g++){const E=arguments[g];if(y(E)){const L=l.length||0,b=E.length||0;l.length=L+b;for(let Q=0;Q<b;Q++)l[L+Q]=E[Q]}else l.push(E)}}class Ae{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function Te(l){return/^[\s\xa0]*$/.test(l)}function ge(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function _e(l){return _e[" "](l),l}_e[" "]=function(){};var He=ge().indexOf("Gecko")!=-1&&!(ge().toLowerCase().indexOf("webkit")!=-1&&ge().indexOf("Edge")==-1)&&!(ge().indexOf("Trident")!=-1||ge().indexOf("MSIE")!=-1)&&ge().indexOf("Edge")==-1;function we(l,f,g){for(const E in l)f.call(g,l[E],E,l)}function k(l,f){for(const g in l)f.call(void 0,l[g],g,l)}function I(l){const f={};for(const g in l)f[g]=l[g];return f}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(l,f){let g,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(g in E)l[g]=E[g];for(let b=0;b<A.length;b++)g=A[b],Object.prototype.hasOwnProperty.call(E,g)&&(l[g]=E[g])}}function N(l){var f=1;l=l.split(":");const g=[];for(;0<f&&l.length;)g.push(l.shift()),f--;return l.length&&g.push(l.join(":")),g}function V(l){m.setTimeout(()=>{throw l},0)}function S(){var l=le;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class Ze{constructor(){this.h=this.g=null}add(f,g){const E=Ct.get();E.set(f,g),this.h?this.h.next=E:this.g=E,this.h=E}}var Ct=new Ae(()=>new Pt,l=>l.reset());class Pt{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Ue,Y=!1,le=new Ze,ee=()=>{const l=m.Promise.resolve(void 0);Ue=()=>{l.then(O)}};var O=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(g){V(g)}var f=Ct;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}Y=!1};function z(){this.s=this.s,this.C=this.C}z.prototype.s=!1,z.prototype.ma=function(){this.s||(this.s=!0,this.N())},z.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ae(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var ye=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};m.addEventListener("test",g,f),m.removeEventListener("test",g,f)}catch{}return l}();function ve(l,f){if(ae.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(He){e:{try{_e(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else g=="mouseover"?f=l.fromElement:g=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Re[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&ve.aa.h.call(this)}}X(ve,ae);var Re={2:"touch",3:"pen",4:"mouse"};ve.prototype.h=function(){ve.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Le="closure_listenable_"+(1e6*Math.random()|0),xe=0;function ze(l,f,g,E,L){this.listener=l,this.proxy=null,this.src=f,this.type=g,this.capture=!!E,this.ha=L,this.key=++xe,this.da=this.fa=!1}function pt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Qn(l){this.src=l,this.g={},this.h=0}Qn.prototype.add=function(l,f,g,E,L){var b=l.toString();l=this.g[b],l||(l=this.g[b]=[],this.h++);var Q=Tr(l,f,E,L);return-1<Q?(f=l[Q],g||(f.fa=!1)):(f=new ze(f,this.src,b,!!E,L),f.fa=g,l.push(f)),f};function Gi(l,f){var g=f.type;if(g in l.g){var E=l.g[g],L=Array.prototype.indexOf.call(E,f,void 0),b;(b=0<=L)&&Array.prototype.splice.call(E,L,1),b&&(pt(f),l.g[g].length==0&&(delete l.g[g],l.h--))}}function Tr(l,f,g,E){for(var L=0;L<l.length;++L){var b=l[L];if(!b.da&&b.listener==f&&b.capture==!!g&&b.ha==E)return L}return-1}var ci="closure_lm_"+(1e6*Math.random()|0),Qi={};function go(l,f,g,E,L){if(Array.isArray(f)){for(var b=0;b<f.length;b++)go(l,f[b],g,E,L);return null}return g=vo(g),l&&l[Le]?l.K(f,g,v(E)?!!E.capture:!!E,L):yo(l,f,g,!1,E,L)}function yo(l,f,g,E,L,b){if(!f)throw Error("Invalid event type");var Q=v(L)?!!L.capture:!!L,Fe=Xi(l);if(Fe||(l[ci]=Fe=new Qn(l)),g=Fe.add(f,g,E,Q,b),g.proxy)return g;if(E=Fa(),g.proxy=E,E.src=l,E.listener=g,l.addEventListener)ye||(L=Q),L===void 0&&(L=!1),l.addEventListener(f.toString(),E,L);else if(l.attachEvent)l.attachEvent(Xn(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Fa(){function l(g){return f.call(l.src,l.listener,g)}const f=_o;return l}function Yi(l,f,g,E,L){if(Array.isArray(f))for(var b=0;b<f.length;b++)Yi(l,f[b],g,E,L);else E=v(E)?!!E.capture:!!E,g=vo(g),l&&l[Le]?(l=l.i,f=String(f).toString(),f in l.g&&(b=l.g[f],g=Tr(b,g,E,L),-1<g&&(pt(b[g]),Array.prototype.splice.call(b,g,1),b.length==0&&(delete l.g[f],l.h--)))):l&&(l=Xi(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Tr(f,g,E,L)),(g=-1<l?f[l]:null)&&Yn(g))}function Yn(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Le])Gi(f.i,l);else{var g=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(g,E,l.capture):f.detachEvent?f.detachEvent(Xn(g),E):f.addListener&&f.removeListener&&f.removeListener(E),(g=Xi(f))?(Gi(g,l),g.h==0&&(g.src=null,f[ci]=null)):pt(l)}}}function Xn(l){return l in Qi?Qi[l]:Qi[l]="on"+l}function _o(l,f){if(l.da)l=!0;else{f=new ve(f,this);var g=l.listener,E=l.ha||l.src;l.fa&&Yn(l),l=g.call(E,f)}return l}function Xi(l){return l=l[ci],l instanceof Qn?l:null}var Ji="__closure_events_fn_"+(1e9*Math.random()>>>0);function vo(l){return typeof l=="function"?l:(l[Ji]||(l[Ji]=function(f){return l.handleEvent(f)}),l[Ji])}function lt(){z.call(this),this.i=new Qn(this),this.M=this,this.F=null}X(lt,z),lt.prototype[Le]=!0,lt.prototype.removeEventListener=function(l,f,g,E){Yi(this,l,f,g,E)};function ut(l,f){var g,E=l.F;if(E)for(g=[];E;E=E.F)g.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new ae(f,l);else if(f instanceof ae)f.target=f.target||l;else{var L=f;f=new ae(E,l),C(f,L)}if(L=!0,g)for(var b=g.length-1;0<=b;b--){var Q=f.g=g[b];L=Jn(Q,E,!0,f)&&L}if(Q=f.g=l,L=Jn(Q,E,!0,f)&&L,L=Jn(Q,E,!1,f)&&L,g)for(b=0;b<g.length;b++)Q=f.g=g[b],L=Jn(Q,E,!1,f)&&L}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var g=l.g[f],E=0;E<g.length;E++)pt(g[E]);delete l.g[f],l.h--}}this.F=null},lt.prototype.K=function(l,f,g,E){return this.i.add(String(l),f,!1,g,E)},lt.prototype.L=function(l,f,g,E){return this.i.add(String(l),f,!0,g,E)};function Jn(l,f,g,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,b=0;b<f.length;++b){var Q=f[b];if(Q&&!Q.da&&Q.capture==g){var Fe=Q.listener,ct=Q.ha||Q.src;Q.fa&&Gi(l.i,Q),L=Fe.call(ct,E)!==!1&&L}}return L&&!E.defaultPrevented}function Eo(l,f,g){if(typeof l=="function")g&&(l=U(l,g));else if(l&&typeof l.handleEvent=="function")l=U(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function Ir(l){l.g=Eo(()=>{l.g=null,l.i&&(l.i=!1,Ir(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class hi extends z{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Ir(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function di(l){z.call(this),this.h=l,this.g={}}X(di,z);var wo=[];function To(l){we(l.g,function(f,g){this.g.hasOwnProperty(g)&&Yn(f)},l),l.g={}}di.prototype.N=function(){di.aa.N.call(this),To(this)},di.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Io=m.JSON.stringify,So=m.JSON.parse,Ao=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function fi(){}fi.prototype.h=null;function Zi(l){return l.h||(l.h=l.i())}function es(){}var sn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Vn(){ae.call(this,"d")}X(Vn,ae);function ts(){ae.call(this,"c")}X(ts,ae);var Ln={},Ro=null;function pi(){return Ro=Ro||new lt}Ln.La="serverreachability";function Co(l){ae.call(this,Ln.La,l)}X(Co,ae);function Zn(l){const f=pi();ut(f,new Co(f))}Ln.STAT_EVENT="statevent";function Po(l,f){ae.call(this,Ln.STAT_EVENT,l),this.stat=f}X(Po,ae);function et(l){const f=pi();ut(f,new Po(f,l))}Ln.Ma="timingevent";function ns(l,f){ae.call(this,Ln.Ma,l),this.size=f}X(ns,ae);function mn(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function mi(){this.g=!0}mi.prototype.xa=function(){this.g=!1};function gi(l,f,g,E,L,b){l.info(function(){if(l.g)if(b)for(var Q="",Fe=b.split("&"),ct=0;ct<Fe.length;ct++){var Ce=Fe[ct].split("=");if(1<Ce.length){var mt=Ce[0];Ce=Ce[1];var it=mt.split("_");Q=2<=it.length&&it[1]=="type"?Q+(mt+"="+Ce+"&"):Q+(mt+"=redacted&")}}else Q=null;else Q=b;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+f+`
`+g+`
`+Q})}function rs(l,f,g,E,L,b,Q){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+f+`
`+g+`
`+b+" "+Q})}function gn(l,f,g,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+Gu(l,g)+(E?" "+E:"")})}function ko(l,f){l.info(function(){return"TIMEOUT: "+f})}mi.prototype.info=function(){};function Gu(l,f){if(!l.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var E=g[l];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var b=L[0];if(b!="noop"&&b!="stop"&&b!="close")for(var Q=1;Q<L.length;Q++)L[Q]=""}}}}return Io(g)}catch{return f}}var is={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ua={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},yn;function yi(){}X(yi,fi),yi.prototype.g=function(){return new XMLHttpRequest},yi.prototype.i=function(){return{}},yn=new yi;function _n(l,f,g,E){this.j=l,this.i=f,this.l=g,this.R=E||1,this.U=new di(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ba}function ba(){this.i=null,this.g="",this.h=!1}var No={},ss={};function os(l,f,g){l.L=1,l.v=Pr(Jt(f)),l.m=g,l.P=!0,Do(l,null)}function Do(l,f){l.F=Date.now(),je(l),l.A=Jt(l.v);var g=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),Nr(g.i,"t",E),l.C=0,g=l.j.J,l.h=new ba,l.g=rl(l.j,g?f:null,!l.m),0<l.O&&(l.M=new hi(U(l.Y,l,l.g),l.O)),f=l.U,g=l.g,E=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(wo[0]=L.toString()),L=wo);for(var b=0;b<L.length;b++){var Q=go(g,L[b],E||f.handleEvent,!1,f.h||f);if(!Q)break;f.g[Q.key]=Q}f=l.H?I(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),Zn(),gi(l.i,l.u,l.A,l.l,l.R,l.m)}_n.prototype.ca=function(l){l=l.target;const f=this.M;f&&$t(l)==3?f.j():this.Y(l)},_n.prototype.Y=function(l){try{if(l==this.g)e:{const it=$t(this.g);var f=this.g.Ba();const ln=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||Fo(this.g)))){this.J||it!=4||f==7||(f==8||0>=ln?Zn(3):Zn(2)),_i(this);var g=this.g.Z();this.X=g;t:if(za(this)){var E=Fo(this.g);l="";var L=E.length,b=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){on(this),Sr(this);var Q="";break t}this.h.i=new m.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(b&&f==L-1)});E.length=0,this.h.g+=l,this.C=0,Q=this.h.g}else Q=this.g.oa();if(this.o=g==200,rs(this.i,this.u,this.A,this.l,this.R,it,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,ct=this.g;if((Fe=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Te(Fe)){var Ce=Fe;break t}}Ce=null}if(g=Ce)gn(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Oo(this,g);else{this.o=!1,this.s=3,et(12),on(this),Sr(this);break e}}if(this.P){g=!0;let en;for(;!this.J&&this.C<Q.length;)if(en=Qu(this,Q),en==ss){it==4&&(this.s=4,et(14),g=!1),gn(this.i,this.l,null,"[Incomplete Response]");break}else if(en==No){this.s=4,et(15),gn(this.i,this.l,Q,"[Invalid Chunk]"),g=!1;break}else gn(this.i,this.l,en,null),Oo(this,en);if(za(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||Q.length!=0||this.h.h||(this.s=1,et(16),g=!1),this.o=this.o&&g,!g)gn(this.i,this.l,Q,"[Invalid Chunked Response]"),on(this),Sr(this);else if(0<Q.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+Q.length),bo(mt),mt.M=!0,et(11))}}else gn(this.i,this.l,Q,null),Oo(this,Q);it==4&&on(this),this.o&&!this.J&&(it==4?ys(this.j,this):(this.o=!1,je(this)))}else ds(this.g),g==400&&0<Q.indexOf("Unknown SID")?(this.s=3,et(12)):(this.s=0,et(13)),on(this),Sr(this)}}}catch{}finally{}};function za(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Qu(l,f){var g=l.C,E=f.indexOf(`
`,g);return E==-1?ss:(g=Number(f.substring(g,E)),isNaN(g)?No:(E+=1,E+g>f.length?ss:(f=f.slice(E,E+g),l.C=E+g,f)))}_n.prototype.cancel=function(){this.J=!0,on(this)};function je(l){l.S=Date.now()+l.I,ja(l,l.I)}function ja(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=mn(U(l.ba,l),f)}function _i(l){l.B&&(m.clearTimeout(l.B),l.B=null)}_n.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(ko(this.i,this.A),this.L!=2&&(Zn(),et(17)),on(this),this.s=2,Sr(this)):ja(this,this.S-l)};function Sr(l){l.j.G==0||l.J||ys(l.j,l)}function on(l){_i(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,To(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Oo(l,f){try{var g=l.j;if(g.G!=0&&(g.g==l||Ut(g.h,l))){if(!l.K&&Ut(g.h,l)&&g.G==3){try{var E=g.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)gs(g),In(g);else break e;ms(g),et(18)}}else g.za=L[1],0<g.za-g.T&&37500>L[2]&&g.F&&g.v==0&&!g.C&&(g.C=mn(U(g.Za,g),6e3));if(1>=$a(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else ir(g,11)}else if((l.K||g.g==l)&&gs(g),!Te(f))for(L=g.Da.g.parse(f),f=0;f<L.length;f++){let Ce=L[f];if(g.T=Ce[0],Ce=Ce[1],g.G==2)if(Ce[0]=="c"){g.K=Ce[1],g.ia=Ce[2];const mt=Ce[3];mt!=null&&(g.la=mt,g.j.info("VER="+g.la));const it=Ce[4];it!=null&&(g.Aa=it,g.j.info("SVER="+g.Aa));const ln=Ce[5];ln!=null&&typeof ln=="number"&&0<ln&&(E=1.5*ln,g.L=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const en=l.g;if(en){const Ai=en.g?en.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ai){var b=E.h;b.g||Ai.indexOf("spdy")==-1&&Ai.indexOf("quic")==-1&&Ai.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Vo(b,b.h),b.h=null))}if(E.D){const vs=en.g?en.g.getResponseHeader("X-HTTP-Session-Id"):null;vs&&(E.ya=vs,be(E.I,E.D,vs))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),E=g;var Q=l;if(E.qa=nl(E,E.J?E.ia:null,E.W),Q.K){qa(E.h,Q);var Fe=Q,ct=E.L;ct&&(Fe.I=ct),Fe.B&&(_i(Fe),je(Fe)),E.g=Q}else Si(E);0<g.i.length&&Un(g)}else Ce[0]!="stop"&&Ce[0]!="close"||ir(g,7);else g.G==3&&(Ce[0]=="stop"||Ce[0]=="close"?Ce[0]=="stop"?ir(g,7):Tt(g):Ce[0]!="noop"&&g.l&&g.l.ta(Ce),g.v=0)}}Zn(4)}catch{}}var Ba=class{constructor(l,f){this.g=l,this.map=f}};function vi(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xt(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function $a(l){return l.h?1:l.g?l.g.size:0}function Ut(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Vo(l,f){l.g?l.g.add(f):l.h=f}function qa(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}vi.prototype.cancel=function(){if(this.i=Ha(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Ha(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const g of l.g.values())f=f.concat(g.D);return f}return J(l.i)}function as(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(y(l)){for(var f=[],g=l.length,E=0;E<g;E++)f.push(l[E]);return f}f=[],g=0;for(E in l)f[g++]=l[E];return f}function ls(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(y(l)||typeof l=="string"){var f=[];l=l.length;for(var g=0;g<l;g++)f.push(g);return f}f=[],g=0;for(const E in l)f[g++]=E;return f}}}function Ar(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(y(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var g=ls(l),E=as(l),L=E.length,b=0;b<L;b++)f.call(void 0,E[b],g&&g[b],l)}var Ei=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yu(l,f){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var E=l[g].indexOf("="),L=null;if(0<=E){var b=l[g].substring(0,E);L=l[g].substring(E+1)}else b=l[g];f(b,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function er(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof er){this.h=l.h,wi(this,l.j),this.o=l.o,this.g=l.g,Rr(this,l.s),this.l=l.l;var f=l.i,g=new xn;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),Cr(this,g),this.m=l.m}else l&&(f=String(l).match(Ei))?(this.h=!1,wi(this,f[1]||"",!0),this.o=Se(f[2]||""),this.g=Se(f[3]||"",!0),Rr(this,f[4]),this.l=Se(f[5]||"",!0),Cr(this,f[6]||"",!0),this.m=Se(f[7]||"")):(this.h=!1,this.i=new xn(null,this.h))}er.prototype.toString=function(){var l=[],f=this.j;f&&l.push(kr(f,us,!0),":");var g=this.g;return(g||f=="file")&&(l.push("//"),(f=this.o)&&l.push(kr(f,us,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(kr(g,g.charAt(0)=="/"?Ga:Ka,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",kr(g,Lo)),l.join("")};function Jt(l){return new er(l)}function wi(l,f,g){l.j=g?Se(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Rr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Cr(l,f,g){f instanceof xn?(l.i=f,Mn(l.i,l.h)):(g||(f=kr(f,Qa)),l.i=new xn(f,l.h))}function be(l,f,g){l.i.set(f,g)}function Pr(l){return be(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Se(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function kr(l,f,g){return typeof l=="string"?(l=encodeURI(l).replace(f,Wa),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Wa(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var us=/[#\/\?@]/g,Ka=/[#\?:]/g,Ga=/[#\?]/g,Qa=/[#\?@]/g,Lo=/#/g;function xn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function wt(l){l.g||(l.g=new Map,l.h=0,l.i&&Yu(l.i,function(f,g){l.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}i=xn.prototype,i.add=function(l,f){wt(this),this.i=null,l=an(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(f),this.h+=1,this};function vn(l,f){wt(l),f=an(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function En(l,f){return wt(l),f=an(l,f),l.g.has(f)}i.forEach=function(l,f){wt(this),this.g.forEach(function(g,E){g.forEach(function(L){l.call(f,L,E,this)},this)},this)},i.na=function(){wt(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let E=0;E<f.length;E++){const L=l[E];for(let b=0;b<L.length;b++)g.push(f[E])}return g},i.V=function(l){wt(this);let f=[];if(typeof l=="string")En(this,l)&&(f=f.concat(this.g.get(an(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)f=f.concat(l[g])}return f},i.set=function(l,f){return wt(this),this.i=null,l=an(this,l),En(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Nr(l,f,g){vn(l,f),0<g.length&&(l.i=null,l.g.set(an(l,f),J(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var E=f[g];const b=encodeURIComponent(String(E)),Q=this.V(E);for(E=0;E<Q.length;E++){var L=b;Q[E]!==""&&(L+="="+encodeURIComponent(String(Q[E]))),l.push(L)}}return this.i=l.join("&")};function an(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function Mn(l,f){f&&!l.j&&(wt(l),l.i=null,l.g.forEach(function(g,E){var L=E.toLowerCase();E!=L&&(vn(this,E),Nr(this,L,g))},l)),l.j=f}function Xu(l,f){const g=new mi;if(m.Image){const E=new Image;E.onload=q(Bt,g,"TestLoadImage: loaded",!0,f,E),E.onerror=q(Bt,g,"TestLoadImage: error",!1,f,E),E.onabort=q(Bt,g,"TestLoadImage: abort",!1,f,E),E.ontimeout=q(Bt,g,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function Ya(l,f){const g=new mi,E=new AbortController,L=setTimeout(()=>{E.abort(),Bt(g,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(b=>{clearTimeout(L),b.ok?Bt(g,"TestPingServer: ok",!0,f):Bt(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),Bt(g,"TestPingServer: error",!1,f)})}function Bt(l,f,g,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(g)}catch{}}function Ju(){this.g=new Ao}function Xa(l,f,g){const E=g||"";try{Ar(l,function(L,b){let Q=L;v(L)&&(Q=Io(L)),f.push(E+b+"="+encodeURIComponent(Q))})}catch(L){throw f.push(E+"type="+encodeURIComponent("_badmap")),L}}function tr(l){this.l=l.Ub||null,this.j=l.eb||!1}X(tr,fi),tr.prototype.g=function(){return new Ti(this.l,this.j)},tr.prototype.i=function(l){return function(){return l}}({});function Ti(l,f){lt.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}X(Ti,lt),i=Ti.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Tn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wn(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Tn(this)),this.g&&(this.readyState=3,Tn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ja(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ja(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?wn(this):Tn(this),this.readyState==3&&Ja(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,wn(this))},i.Qa=function(l){this.g&&(this.response=l,wn(this))},i.ga=function(){this.g&&wn(this)};function wn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Tn(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=f.next();return l.join(`\r
`)};function Tn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ti.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function nr(l){let f="";return we(l,function(g,E){f+=E,f+=":",f+=g,f+=`\r
`}),f}function Dr(l,f,g){e:{for(E in g){var E=!1;break e}E=!0}E||(g=nr(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):be(l,f,g))}function We(l){lt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}X(We,lt);var Zu=/^https?$/i,xo=["POST","PUT"];i=We.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():yn.g(),this.v=this.o?Zi(this.o):Zi(yn),this.g.onreadystatechange=U(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(b){Ii(this,b);return}if(l=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)g.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const b of E.keys())g.set(b,E.get(b));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(b=>b.toLowerCase()=="content-type"),L=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(xo,f,void 0))||E||L||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,Q]of g)this.g.setRequestHeader(b,Q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{hs(this),this.u=!0,this.g.send(l),this.u=!1}catch(b){Ii(this,b)}};function Ii(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,cs(l),Zt(l)}function cs(l){l.A||(l.A=!0,ut(l,"complete"),ut(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ut(this,"complete"),ut(this,"abort"),Zt(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zt(this,!0)),We.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Mo(this):this.bb())},i.bb=function(){Mo(this)};function Mo(l){if(l.h&&typeof h<"u"&&(!l.v[1]||$t(l)!=4||l.Z()!=2)){if(l.u&&$t(l)==4)Eo(l.Ea,0,l);else if(ut(l,"readystatechange"),$t(l)==4){l.h=!1;try{const Q=l.Z();e:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var E;if(E=Q===0){var L=String(l.D).match(Ei)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),E=!Zu.test(L?L.toLowerCase():"")}g=E}if(g)ut(l,"complete"),ut(l,"success");else{l.m=6;try{var b=2<$t(l)?l.g.statusText:""}catch{b=""}l.l=b+" ["+l.Z()+"]",cs(l)}}finally{Zt(l)}}}}function Zt(l,f){if(l.g){hs(l);const g=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||ut(l,"ready");try{g.onreadystatechange=E}catch{}}}function hs(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function $t(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),So(f)}};function Fo(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function ds(l){const f={};l=(l.g&&2<=$t(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(Te(l[E]))continue;var g=N(l[E]);const L=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const b=f[L]||[];f[L]=b,b.push(g)}k(f,function(E){return E.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fn(l,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||f}function Uo(l){this.Aa=0,this.i=[],this.j=new mi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Fn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Fn("baseRetryDelayMs",5e3,l),this.cb=Fn("retryDelaySeedMs",1e4,l),this.Wa=Fn("forwardChannelMaxRetries",2,l),this.wa=Fn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new vi(l&&l.concurrentRequestLimit),this.Da=new Ju,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Uo.prototype,i.la=8,i.G=1,i.connect=function(l,f,g,E){et(0),this.W=l,this.H=f||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.I=nl(this,null,this.W),Un(this)};function Tt(l){if(fs(l),l.G==3){var f=l.U++,g=Jt(l.I);if(be(g,"SID",l.K),be(g,"RID",f),be(g,"TYPE","terminate"),rr(l,g),f=new _n(l,l.j,f),f.L=2,f.v=Pr(Jt(g)),g=!1,m.navigator&&m.navigator.sendBeacon)try{g=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&m.Image&&(new Image().src=f.v,g=!0),g||(f.g=rl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),je(f)}tl(l)}function In(l){l.g&&(bo(l),l.g.cancel(),l.g=null)}function fs(l){In(l),l.u&&(m.clearTimeout(l.u),l.u=null),gs(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function Un(l){if(!Xt(l.h)&&!l.s){l.s=!0;var f=l.Ga;Ue||ee(),Y||(Ue(),Y=!0),le.add(f,l),l.B=0}}function ec(l,f){return $a(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=mn(U(l.Ga,l,f),el(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new _n(this,this.j,l);let b=this.o;if(this.S&&(b?(b=I(b),C(b,this.S)):b=this.S),this.m!==null||this.O||(L.H=b,b=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=Or(this,L,f),g=Jt(this.I),be(g,"RID",l),be(g,"CVER",22),this.D&&be(g,"X-HTTP-Session-Id",this.D),rr(this,g),b&&(this.O?f="headers="+encodeURIComponent(String(nr(b)))+"&"+f:this.m&&Dr(g,this.m,b)),Vo(this.h,L),this.Ua&&be(g,"TYPE","init"),this.P?(be(g,"$req",f),be(g,"SID","null"),L.T=!0,os(L,g,null)):os(L,g,f),this.G=2}}else this.G==3&&(l?ps(this,l):this.i.length==0||Xt(this.h)||ps(this))};function ps(l,f){var g;f?g=f.l:g=l.U++;const E=Jt(l.I);be(E,"SID",l.K),be(E,"RID",g),be(E,"AID",l.T),rr(l,E),l.m&&l.o&&Dr(E,l.m,l.o),g=new _n(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Or(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Vo(l.h,g),os(g,E,f)}function rr(l,f){l.H&&we(l.H,function(g,E){be(f,E,g)}),l.l&&Ar({},function(g,E){be(f,E,g)})}function Or(l,f,g){g=Math.min(l.i.length,g);var E=l.l?U(l.l.Na,l.l,l):null;e:{var L=l.i;let b=-1;for(;;){const Q=["count="+g];b==-1?0<g?(b=L[0].g,Q.push("ofs="+b)):b=0:Q.push("ofs="+b);let Fe=!0;for(let ct=0;ct<g;ct++){let Ce=L[ct].g;const mt=L[ct].map;if(Ce-=b,0>Ce)b=Math.max(0,L[ct].g-100),Fe=!1;else try{Xa(mt,Q,"req"+Ce+"_")}catch{E&&E(mt)}}if(Fe){E=Q.join("&");break e}}}return l=l.i.splice(0,g),f.D=l,E}function Si(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Ue||ee(),Y||(Ue(),Y=!0),le.add(f,l),l.v=0}}function ms(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=mn(U(l.Fa,l),el(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,Za(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=mn(U(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,et(10),In(this),Za(this))};function bo(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function Za(l){l.g=new _n(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=Jt(l.qa);be(f,"RID","rpc"),be(f,"SID",l.K),be(f,"AID",l.T),be(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&be(f,"TO",l.ja),be(f,"TYPE","xmlhttp"),rr(l,f),l.m&&l.o&&Dr(f,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=Pr(Jt(f)),g.m=null,g.P=!0,Do(g,l)}i.Za=function(){this.C!=null&&(this.C=null,In(this),ms(this),et(19))};function gs(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function ys(l,f){var g=null;if(l.g==f){gs(l),bo(l),l.g=null;var E=2}else if(Ut(l.h,f))g=f.D,qa(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var L=l.B;E=pi(),ut(E,new ns(E,g)),Un(l)}else Si(l);else if(L=f.s,L==3||L==0&&0<f.X||!(E==1&&ec(l,f)||E==2&&ms(l)))switch(g&&0<g.length&&(f=l.h,f.i=f.i.concat(g)),L){case 1:ir(l,5);break;case 4:ir(l,10);break;case 3:ir(l,6);break;default:ir(l,2)}}}function el(l,f){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*f}function ir(l,f){if(l.j.info("Error code "+f),f==2){var g=U(l.fb,l),E=l.Xa;const L=!E;E=new er(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||wi(E,"https"),Pr(E),L?Xu(E.toString(),g):Ya(E.toString(),g)}else et(2);l.G=0,l.l&&l.l.sa(f),tl(l),fs(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),et(2)):(this.j.info("Failed to ping google.com"),et(1))};function tl(l){if(l.G=0,l.ka=[],l.l){const f=Ha(l.h);(f.length!=0||l.i.length!=0)&&(K(l.ka,f),K(l.ka,l.i),l.h.i.length=0,J(l.i),l.i.length=0),l.l.ra()}}function nl(l,f,g){var E=g instanceof er?Jt(g):new er(g);if(E.g!="")f&&(E.g=f+"."+E.g),Rr(E,E.s);else{var L=m.location;E=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var b=new er(null);E&&wi(b,E),f&&(b.g=f),L&&Rr(b,L),g&&(b.l=g),E=b}return g=l.D,f=l.ya,g&&f&&be(E,g,f),be(E,"VER",l.la),rr(l,E),E}function rl(l,f,g){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new We(new tr({eb:g})):new We(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function zo(){}i=zo.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function _s(){}_s.prototype.g=function(l,f){return new bt(l,f)};function bt(l,f){lt.call(this),this.g=new Uo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!Te(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!Te(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new bn(this)}X(bt,lt),bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},bt.prototype.close=function(){Tt(this.g)},bt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=Io(l),l=g);f.i.push(new Ba(f.Ya++,l)),f.G==3&&Un(f)},bt.prototype.N=function(){this.g.l=null,delete this.j,Tt(this.g),delete this.g,bt.aa.N.call(this)};function il(l){Vn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const g in f){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}X(il,Vn);function sl(){ts.call(this),this.status=1}X(sl,ts);function bn(l){this.g=l}X(bn,zo),bn.prototype.ua=function(){ut(this.g,"a")},bn.prototype.ta=function(l){ut(this.g,new il(l))},bn.prototype.sa=function(l){ut(this.g,new sl)},bn.prototype.ra=function(){ut(this.g,"b")},_s.prototype.createWebChannel=_s.prototype.g,bt.prototype.send=bt.prototype.o,bt.prototype.open=bt.prototype.m,bt.prototype.close=bt.prototype.close,Wg=function(){return new _s},Hg=function(){return pi()},qg=Ln,Bh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},is.NO_ERROR=0,is.TIMEOUT=8,is.HTTP_ERROR=6,ou=is,Ua.COMPLETE="complete",$g=Ua,es.EventType=sn,sn.OPEN="a",sn.CLOSE="b",sn.ERROR="c",sn.MESSAGE="d",lt.prototype.listen=lt.prototype.K,fa=es,We.prototype.listenOnce=We.prototype.L,We.prototype.getLastError=We.prototype.Ka,We.prototype.getLastErrorCode=We.prototype.Ba,We.prototype.getStatus=We.prototype.Z,We.prototype.getResponseJson=We.prototype.Oa,We.prototype.getResponseText=We.prototype.oa,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Ha,Bg=We}).apply(typeof Zl<"u"?Zl:typeof self<"u"?self:typeof window<"u"?window:{});const Im="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Lt.UNAUTHENTICATED=new Lt(null),Lt.GOOGLE_CREDENTIALS=new Lt("google-credentials-uid"),Lt.FIRST_PARTY=new Lt("first-party-uid"),Lt.MOCK_USER=new Lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lo="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=new cd("@firebase/firestore");function zs(){return qi.logLevel}function te(i,...e){if(qi.logLevel<=Ie.DEBUG){const t=e.map(pd);qi.debug(`Firestore (${lo}): ${i}`,...t)}}function _r(i,...e){if(qi.logLevel<=Ie.ERROR){const t=e.map(pd);qi.error(`Firestore (${lo}): ${i}`,...t)}}function Zs(i,...e){if(qi.logLevel<=Ie.WARN){const t=e.map(pd);qi.warn(`Firestore (${lo}): ${i}`,...t)}}function pd(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(i="Unexpected state"){const e=`FIRESTORE (${lo}) INTERNAL ASSERTION FAILED: `+i;throw _r(e),new Error(e)}function Xe(i,e){i||me()}function Ne(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends Er{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class EE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Lt.UNAUTHENTICATED))}shutdown(){}}class wE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class TE{constructor(e){this.t=e,this.currentUser=Lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Xe(this.o===void 0);let s=this.i;const a=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let u=new ji;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ji,e.enqueueRetryable(()=>a(this.currentUser))};const h=()=>{const y=u;e.enqueueRetryable(async()=>{await y.promise,await a(this.currentUser)})},m=y=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(y=>m(y)),setTimeout(()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ji)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Xe(typeof s.accessToken=="string"),new Kg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Xe(e===null||typeof e=="string"),new Lt(e)}}class IE{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Lt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class SE{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new IE(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class AE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RE{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Xe(this.o===void 0);const s=u=>{u.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,te("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const a=u=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>a(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?a(u):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Xe(typeof t.token=="string"),this.R=t.token,new AE(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const a=CE(40);for(let u=0;u<a.length;++u)s.length<20&&a[u]<t&&(s+=e.charAt(a[u]%e.length))}return s}}function ke(i,e){return i<e?-1:i>e?1:0}function eo(i,e,t){return i.length===e.length&&i.every((s,a)=>t(s,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{static now(){return Et.fromMillis(Date.now())}static fromDate(e){return Et.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new Et(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new oe(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new oe(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new oe(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{static fromTimestamp(e){return new pe(e)}static min(){return new pe(new Et(0,0))}static max(){return new pe(new Et(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,t,s){t===void 0?t=0:t>e.length&&me(),s===void 0?s=e.length-t:s>e.length-t&&me(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ta.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ta?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const u=e.get(a),h=t.get(a);if(u<h)return-1;if(u>h)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ye extends Ta{construct(e,t,s){return new Ye(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new oe(G.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(a=>a.length>0))}return new Ye(t)}static emptyPath(){return new Ye([])}}const kE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Mt extends Ta{construct(e,t,s){return new Mt(e,t,s)}static isValidIdentifier(e){return kE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Mt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Mt(["__name__"])}static fromServerFormat(e){const t=[];let s="",a=0;const u=()=>{if(s.length===0)throw new oe(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;a<e.length;){const m=e[a];if(m==="\\"){if(a+1===e.length)throw new oe(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[a+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new oe(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,a+=2}else m==="`"?(h=!h,a++):m!=="."||h?(s+=m,a++):(u(),a++)}if(u(),h)throw new oe(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Mt(t)}static emptyPath(){return new Mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(Ye.fromString(e))}static fromName(e){return new he(Ye.fromString(e).popFirst(5))}static empty(){return new he(Ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ye.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new Ye(e.slice()))}}function NE(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,a=pe.fromTimestamp(s===1e9?new Et(t+1,0):new Et(t,s));return new ii(a,he.empty(),e)}function DE(i){return new ii(i.readTime,i.key,-1)}class ii{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new ii(pe.min(),he.empty(),-1)}static max(){return new ii(pe.max(),he.empty(),-1)}}function OE(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=he.comparator(i.documentKey,e.documentKey),t!==0?t:ke(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class LE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Du(i){if(i.code!==G.FAILED_PRECONDITION||i.message!==VE)throw i;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&me(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new j((s,a)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,a)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof j?t:j.resolve(t)}catch(t){return j.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):j.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):j.reject(t)}static resolve(e){return new j((t,s)=>{t(e)})}static reject(e){return new j((t,s)=>{s(e)})}static waitFor(e){return new j((t,s)=>{let a=0,u=0,h=!1;e.forEach(m=>{++a,m.next(()=>{++u,h&&u===a&&t()},y=>s(y))}),h=!0,u===a&&t()})}static or(e){let t=j.resolve(!1);for(const s of e)t=t.next(a=>a?j.resolve(a):s());return t}static forEach(e,t){const s=[];return e.forEach((a,u)=>{s.push(t.call(this,a,u))}),this.waitFor(s)}static mapArray(e,t){return new j((s,a)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const v=y;t(e[v]).next(w=>{h[v]=w,++m,m===u&&s(h)},w=>a(w))}})}static doWhile(e,t){return new j((s,a)=>{const u=()=>{e()===!0?t().next(()=>{u()},a):s()};u()})}}function xE(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function uo(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ou.oe=-1;function Vu(i){return i==null}function _u(i){return i===0&&1/i==-1/0}function ME(i){return typeof i=="number"&&Number.isInteger(i)&&!_u(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=Sm(e)),e=UE(i.get(t),e);return Sm(e)}function UE(i,e){let t=e;const s=i.length;for(let a=0;a<s;a++){const u=i.charAt(a);switch(u){case"\0":t+="";break;case"":t+="";break;default:t+=u}}return t}function Sm(i){return i+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function co(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function Gg(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t){this.comparator=e,this.root=t||At.EMPTY}insert(e,t){return new rt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,At.BLACK,null,null))}remove(e){return new rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,At.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eu(this.root,e,this.comparator,!1)}getReverseIterator(){return new eu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eu(this.root,e,this.comparator,!0)}}class eu{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&a&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class At{constructor(e,t,s,a,u){this.key=e,this.value=t,this.color=s??At.RED,this.left=a??At.EMPTY,this.right=u??At.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,u){return new At(e??this.key,t??this.value,s??this.color,a??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const u=s(e,a.key);return a=u<0?a.copy(null,null,null,a.left.insert(e,t,s),null):u===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return At.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return At.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,At.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,At.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw me();const e=this.left.check();if(e!==this.right.check())throw me();return e+(this.isRed()?0:1)}}At.EMPTY=null,At.RED=!0,At.BLACK=!1;At.EMPTY=new class{constructor(){this.size=0}get key(){throw me()}get value(){throw me()}get color(){throw me()}get left(){throw me()}get right(){throw me()}copy(e,t,s,a,u){return this}insert(e,t,s){return new At(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.comparator=e,this.data=new rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Rm(this.data.getIterator())}getIteratorFrom(e){return new Rm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof ft)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,u=s.getNext().key;if(this.comparator(a,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ft(this.comparator);return t.data=e,t}}class Rm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e){this.fields=e,e.sort(Mt.comparator)}static empty(){return new Jr([])}unionWith(e){let t=new ft(Mt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Jr(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return eo(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new Qg("Invalid base64 string: "+u):u}}(e);return new Rt(t)}static fromUint8Array(e){const t=function(a){let u="";for(let h=0;h<a.length;++h)u+=String.fromCharCode(a[h]);return u}(e);return new Rt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Rt.EMPTY_BYTE_STRING=new Rt("");const bE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function si(i){if(Xe(!!i),typeof i=="string"){let e=0;const t=bE.exec(i);if(Xe(!!t),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:nt(i.seconds),nanos:nt(i.nanos)}}function nt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function oi(i){return typeof i=="string"?Rt.fromBase64String(i):Rt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Lu(i){const e=i.mapValue.fields.__previous_value__;return md(e)?Lu(e):e}function Ia(i){const e=si(i.mapValue.fields.__local_write_time__.timestampValue);return new Et(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e,t,s,a,u,h,m,y,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=v}}class Sa{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Sa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Sa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ai(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?md(i)?4:BE(i)?9007199254740991:jE(i)?10:11:me()}function Gn(i,e){if(i===e)return!0;const t=ai(i);if(t!==ai(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Ia(i).isEqual(Ia(e));case 3:return function(a,u){if(typeof a.timestampValue=="string"&&typeof u.timestampValue=="string"&&a.timestampValue.length===u.timestampValue.length)return a.timestampValue===u.timestampValue;const h=si(a.timestampValue),m=si(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(a,u){return oi(a.bytesValue).isEqual(oi(u.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(a,u){return nt(a.geoPointValue.latitude)===nt(u.geoPointValue.latitude)&&nt(a.geoPointValue.longitude)===nt(u.geoPointValue.longitude)}(i,e);case 2:return function(a,u){if("integerValue"in a&&"integerValue"in u)return nt(a.integerValue)===nt(u.integerValue);if("doubleValue"in a&&"doubleValue"in u){const h=nt(a.doubleValue),m=nt(u.doubleValue);return h===m?_u(h)===_u(m):isNaN(h)&&isNaN(m)}return!1}(i,e);case 9:return eo(i.arrayValue.values||[],e.arrayValue.values||[],Gn);case 10:case 11:return function(a,u){const h=a.mapValue.fields||{},m=u.mapValue.fields||{};if(Am(h)!==Am(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!Gn(h[y],m[y])))return!1;return!0}(i,e);default:return me()}}function Aa(i,e){return(i.values||[]).find(t=>Gn(t,e))!==void 0}function to(i,e){if(i===e)return 0;const t=ai(i),s=ai(e);if(t!==s)return ke(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return ke(i.booleanValue,e.booleanValue);case 2:return function(u,h){const m=nt(u.integerValue||u.doubleValue),y=nt(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1}(i,e);case 3:return Cm(i.timestampValue,e.timestampValue);case 4:return Cm(Ia(i),Ia(e));case 5:return ke(i.stringValue,e.stringValue);case 6:return function(u,h){const m=oi(u),y=oi(h);return m.compareTo(y)}(i.bytesValue,e.bytesValue);case 7:return function(u,h){const m=u.split("/"),y=h.split("/");for(let v=0;v<m.length&&v<y.length;v++){const w=ke(m[v],y[v]);if(w!==0)return w}return ke(m.length,y.length)}(i.referenceValue,e.referenceValue);case 8:return function(u,h){const m=ke(nt(u.latitude),nt(h.latitude));return m!==0?m:ke(nt(u.longitude),nt(h.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return Pm(i.arrayValue,e.arrayValue);case 10:return function(u,h){var m,y,v,w;const D=u.fields||{},U=h.fields||{},q=(m=D.value)===null||m===void 0?void 0:m.arrayValue,X=(y=U.value)===null||y===void 0?void 0:y.arrayValue,J=ke(((v=q==null?void 0:q.values)===null||v===void 0?void 0:v.length)||0,((w=X==null?void 0:X.values)===null||w===void 0?void 0:w.length)||0);return J!==0?J:Pm(q,X)}(i.mapValue,e.mapValue);case 11:return function(u,h){if(u===tu.mapValue&&h===tu.mapValue)return 0;if(u===tu.mapValue)return 1;if(h===tu.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),v=h.fields||{},w=Object.keys(v);y.sort(),w.sort();for(let D=0;D<y.length&&D<w.length;++D){const U=ke(y[D],w[D]);if(U!==0)return U;const q=to(m[y[D]],v[w[D]]);if(q!==0)return q}return ke(y.length,w.length)}(i.mapValue,e.mapValue);default:throw me()}}function Cm(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return ke(i,e);const t=si(i),s=si(e),a=ke(t.seconds,s.seconds);return a!==0?a:ke(t.nanos,s.nanos)}function Pm(i,e){const t=i.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const u=to(t[a],s[a]);if(u)return u}return ke(t.length,s.length)}function no(i){return $h(i)}function $h(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=si(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return oi(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return he.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",a=!0;for(const u of t.values||[])a?a=!1:s+=",",s+=$h(u);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let a="{",u=!0;for(const h of s)u?u=!1:a+=",",a+=`${h}:${$h(t.fields[h])}`;return a+"}"}(i.mapValue):me()}function au(i){switch(ai(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Lu(i);return e?16+au(e):16;case 5:return 2*i.stringValue.length;case 6:return oi(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((a,u)=>a+au(u),0)}(i.arrayValue);case 10:case 11:return function(s){let a=0;return co(s.fields,(u,h)=>{a+=u.length+au(h)}),a}(i.mapValue);default:throw me()}}function km(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function qh(i){return!!i&&"integerValue"in i}function gd(i){return!!i&&"arrayValue"in i}function Nm(i){return!!i&&"nullValue"in i}function Dm(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Nh(i){return!!i&&"mapValue"in i}function jE(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ga(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return co(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=ga(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ga(i.arrayValue.values[t]);return e}return Object.assign({},i)}function BE(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.value=e}static empty(){return new qn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Nh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ga(t)}setAll(e){let t=Mt.emptyPath(),s={},a=[];e.forEach((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,a),s={},a=[],t=m.popLast()}h?s[m.lastSegment()]=ga(h):a.push(m.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,a)}delete(e){const t=this.field(e.popLast());Nh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Gn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];Nh(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){co(t,(a,u)=>e[a]=u);for(const a of s)delete e[a]}clone(){return new qn(ga(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,t,s,a,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new xt(e,0,pe.min(),pe.min(),pe.min(),qn.empty(),0)}static newFoundDocument(e,t,s,a){return new xt(e,1,t,pe.min(),s,a,0)}static newNoDocument(e,t){return new xt(e,2,t,pe.min(),pe.min(),qn.empty(),0)}static newUnknownDocument(e,t){return new xt(e,3,t,pe.min(),pe.min(),qn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,t){this.position=e,this.inclusive=t}}function Om(i,e,t){let s=0;for(let a=0;a<i.position.length;a++){const u=e[a],h=i.position[a];if(u.field.isKeyField()?s=he.comparator(he.fromName(h.referenceValue),t.key):s=to(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Vm(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!Gn(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,t="asc"){this.field=e,this.dir=t}}function $E(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{}class at extends Yg{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new HE(e,t,s):t==="array-contains"?new GE(e,s):t==="in"?new QE(e,s):t==="not-in"?new YE(e,s):t==="array-contains-any"?new XE(e,s):new at(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new WE(e,s):new KE(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(to(t,this.value)):t!==null&&ai(this.value)===ai(t)&&this.matchesComparison(to(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dn extends Yg{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Dn(e,t)}matches(e){return Xg(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Xg(i){return i.op==="and"}function Jg(i){return qE(i)&&Xg(i)}function qE(i){for(const e of i.filters)if(e instanceof Dn)return!1;return!0}function Hh(i){if(i instanceof at)return i.field.canonicalString()+i.op.toString()+no(i.value);if(Jg(i))return i.filters.map(e=>Hh(e)).join(",");{const e=i.filters.map(t=>Hh(t)).join(",");return`${i.op}(${e})`}}function Zg(i,e){return i instanceof at?function(s,a){return a instanceof at&&s.op===a.op&&s.field.isEqual(a.field)&&Gn(s.value,a.value)}(i,e):i instanceof Dn?function(s,a){return a instanceof Dn&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce((u,h,m)=>u&&Zg(h,a.filters[m]),!0):!1}(i,e):void me()}function ey(i){return i instanceof at?function(t){return`${t.field.canonicalString()} ${t.op} ${no(t.value)}`}(i):i instanceof Dn?function(t){return t.op.toString()+" {"+t.getFilters().map(ey).join(" ,")+"}"}(i):"Filter"}class HE extends at{constructor(e,t,s){super(e,t,s),this.key=he.fromName(s.referenceValue)}matches(e){const t=he.comparator(e.key,this.key);return this.matchesComparison(t)}}class WE extends at{constructor(e,t){super(e,"in",t),this.keys=ty("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class KE extends at{constructor(e,t){super(e,"not-in",t),this.keys=ty("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ty(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>he.fromName(s.referenceValue))}class GE extends at{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return gd(t)&&Aa(t.arrayValue,this.value)}}class QE extends at{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Aa(this.value.arrayValue,t)}}class YE extends at{constructor(e,t){super(e,"not-in",t)}matches(e){if(Aa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Aa(this.value.arrayValue,t)}}class XE extends at{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!gd(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Aa(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e,t=null,s=[],a=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=u,this.startAt=h,this.endAt=m,this.ue=null}}function Lm(i,e=null,t=[],s=[],a=null,u=null,h=null){return new JE(i,e,t,s,a,u,h)}function yd(i){const e=Ne(i);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Hh(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Vu(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>no(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>no(s)).join(",")),e.ue=t}return e.ue}function _d(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!$E(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!Zg(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Vm(i.startAt,e.startAt)&&Vm(i.endAt,e.endAt)}function Wh(i){return he.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,t=null,s=[],a=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ZE(i,e,t,s,a,u,h,m){return new Na(i,e,t,s,a,u,h,m)}function ny(i){return new Na(i)}function xm(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function ry(i){return i.collectionGroup!==null}function ya(i){const e=Ne(i);if(e.ce===null){e.ce=[];const t=new Set;for(const u of e.explicitOrderBy)e.ce.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new ft(Mt.comparator);return h.filters.forEach(y=>{y.getFlattenedFilters().forEach(v=>{v.isInequality()&&(m=m.add(v.field))})}),m})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.ce.push(new Eu(u,s))}),t.has(Mt.keyField().canonicalString())||e.ce.push(new Eu(Mt.keyField(),s))}return e.ce}function Hn(i){const e=Ne(i);return e.le||(e.le=ew(e,ya(i))),e.le}function ew(i,e){if(i.limitType==="F")return Lm(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(a=>{const u=a.dir==="desc"?"asc":"desc";return new Eu(a.field,u)});const t=i.endAt?new vu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new vu(i.startAt.position,i.startAt.inclusive):null;return Lm(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function Kh(i,e){const t=i.filters.concat([e]);return new Na(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function Gh(i,e,t){return new Na(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function xu(i,e){return _d(Hn(i),Hn(e))&&i.limitType===e.limitType}function iy(i){return`${yd(Hn(i))}|lt:${i.limitType}`}function js(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(a=>ey(a)).join(", ")}]`),Vu(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(a=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(a)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(a=>no(a)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(a=>no(a)).join(",")),`Target(${s})`}(Hn(i))}; limitType=${i.limitType})`}function Mu(i,e){return e.isFoundDocument()&&function(s,a){const u=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):he.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(i,e)&&function(s,a){for(const u of ya(s))if(!u.field.isKeyField()&&a.data.field(u.field)===null)return!1;return!0}(i,e)&&function(s,a){for(const u of s.filters)if(!u.matches(a))return!1;return!0}(i,e)&&function(s,a){return!(s.startAt&&!function(h,m,y){const v=Om(h,m,y);return h.inclusive?v<=0:v<0}(s.startAt,ya(s),a)||s.endAt&&!function(h,m,y){const v=Om(h,m,y);return h.inclusive?v>=0:v>0}(s.endAt,ya(s),a))}(i,e)}function tw(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function sy(i){return(e,t)=>{let s=!1;for(const a of ya(i)){const u=nw(a,e,t);if(u!==0)return u;s=s||a.field.isKeyField()}return 0}}function nw(i,e,t){const s=i.field.isKeyField()?he.comparator(e.key,t.key):function(u,h,m){const y=h.data.field(u),v=m.data.field(u);return y!==null&&v!==null?to(y,v):me()}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return me()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,u]of s)if(this.equalsFn(a,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<a.length;u++)if(this.equalsFn(a[u][0],e))return void(a[u]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){co(this.inner,(t,s)=>{for(const[a,u]of s)e(a,u)})}isEmpty(){return Gg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw=new rt(he.comparator);function li(){return rw}const oy=new rt(he.comparator);function pa(...i){let e=oy;for(const t of i)e=e.insert(t.key,t);return e}function iw(i){let e=oy;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function bi(){return _a()}function ay(){return _a()}function _a(){return new Wi(i=>i.toString(),(i,e)=>i.isEqual(e))}const sw=new ft(he.comparator);function Oe(...i){let e=sw;for(const t of i)e=e.add(t);return e}const ow=new ft(ke);function aw(){return ow}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_u(e)?"-0":e}}function ly(i){return{integerValue:""+i}}function lw(i,e){return ME(e)?ly(e):vd(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(){this._=void 0}}function uw(i,e,t){return i instanceof Qh?function(a,u){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return u&&md(u)&&(u=Lu(u)),u&&(h.fields.__previous_value__=u),{mapValue:h}}(t,e):i instanceof wu?uy(i,e):i instanceof Tu?cy(i,e):function(a,u){const h=hw(a,u),m=Mm(h)+Mm(a.Pe);return qh(h)&&qh(a.Pe)?ly(m):vd(a.serializer,m)}(i,e)}function cw(i,e,t){return i instanceof wu?uy(i,e):i instanceof Tu?cy(i,e):t}function hw(i,e){return i instanceof Yh?function(s){return qh(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Qh extends Fu{}class wu extends Fu{constructor(e){super(),this.elements=e}}function uy(i,e){const t=hy(e);for(const s of i.elements)t.some(a=>Gn(a,s))||t.push(s);return{arrayValue:{values:t}}}class Tu extends Fu{constructor(e){super(),this.elements=e}}function cy(i,e){let t=hy(e);for(const s of i.elements)t=t.filter(a=>!Gn(a,s));return{arrayValue:{values:t}}}class Yh extends Fu{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Mm(i){return nt(i.integerValue||i.doubleValue)}function hy(i){return gd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function dw(i,e){return i.field.isEqual(e.field)&&function(s,a){return s instanceof wu&&a instanceof wu||s instanceof Tu&&a instanceof Tu?eo(s.elements,a.elements,Gn):s instanceof Yh&&a instanceof Yh?Gn(s.Pe,a.Pe):s instanceof Qh&&a instanceof Qh}(i.transform,e.transform)}class Bi{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Bi}static exists(e){return new Bi(void 0,e)}static updateTime(e){return new Bi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function lu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Ed{}function dy(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new pw(i.key,Bi.none()):new wd(i.key,i.data,Bi.none());{const t=i.data,s=qn.empty();let a=new ft(Mt.comparator);for(let u of e.fields)if(!a.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),a=a.add(u)}return new Uu(i.key,s,new Jr(a.toArray()),Bi.none())}}function fw(i,e,t){i instanceof wd?function(a,u,h){const m=a.value.clone(),y=Um(a.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(i,e,t):i instanceof Uu?function(a,u,h){if(!lu(a.precondition,u))return void u.convertToUnknownDocument(h.version);const m=Um(a.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(fy(a)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()}(i,e,t):function(a,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function va(i,e,t,s){return i instanceof wd?function(u,h,m,y){if(!lu(u.precondition,h))return m;const v=u.value.clone(),w=bm(u.fieldTransforms,y,h);return v.setAll(w),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null}(i,e,t,s):i instanceof Uu?function(u,h,m,y){if(!lu(u.precondition,h))return m;const v=bm(u.fieldTransforms,y,h),w=h.data;return w.setAll(fy(u)),w.setAll(v),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(D=>D.field))}(i,e,t,s):function(u,h,m){return lu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m}(i,e,t)}function Fm(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&eo(s,a,(u,h)=>dw(u,h))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class wd extends Ed{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Uu extends Ed{constructor(e,t,s,a,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function fy(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function Um(i,e,t){const s=new Map;Xe(i.length===t.length);for(let a=0;a<t.length;a++){const u=i[a],h=u.transform,m=e.data.field(u.field);s.set(u.field,cw(h,m,t[a]))}return s}function bm(i,e,t){const s=new Map;for(const a of i){const u=a.transform,h=t.data.field(a.field);s.set(a.field,uw(u,h,e))}return s}class pw extends Ed{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const u=this.mutations[a];u.key.isEqual(e.key)&&fw(u,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=va(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=va(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=ay();return this.mutations.forEach(a=>{const u=e.get(a.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(a.key)?null:m;const y=dy(h,m);y!==null&&s.set(a.key,y),h.isValidDocument()||h.convertToNoDocument(pe.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Oe())}isEqual(e){return this.batchId===e.batchId&&eo(this.mutations,e.mutations,(t,s)=>Fm(t,s))&&eo(this.baseMutations,e.baseMutations,(t,s)=>Fm(t,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot,Pe;function py(i){if(i===void 0)return _r("GRPC error has no .code"),G.UNKNOWN;switch(i){case ot.OK:return G.OK;case ot.CANCELLED:return G.CANCELLED;case ot.UNKNOWN:return G.UNKNOWN;case ot.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case ot.INTERNAL:return G.INTERNAL;case ot.UNAVAILABLE:return G.UNAVAILABLE;case ot.UNAUTHENTICATED:return G.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case ot.NOT_FOUND:return G.NOT_FOUND;case ot.ALREADY_EXISTS:return G.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return G.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case ot.ABORTED:return G.ABORTED;case ot.OUT_OF_RANGE:return G.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return G.UNIMPLEMENTED;case ot.DATA_LOSS:return G.DATA_LOSS;default:return me()}}(Pe=ot||(ot={}))[Pe.OK=0]="OK",Pe[Pe.CANCELLED=1]="CANCELLED",Pe[Pe.UNKNOWN=2]="UNKNOWN",Pe[Pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Pe[Pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Pe[Pe.NOT_FOUND=5]="NOT_FOUND",Pe[Pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Pe[Pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Pe[Pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Pe[Pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Pe[Pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Pe[Pe.ABORTED=10]="ABORTED",Pe[Pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Pe[Pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Pe[Pe.INTERNAL=13]="INTERNAL",Pe[Pe.UNAVAILABLE=14]="UNAVAILABLE",Pe[Pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw=new zi([4294967295,4294967295],0);function zm(i){const e=_w().encode(i),t=new jg;return t.update(e),new Uint8Array(t.digest())}function jm(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new zi([t,s],0),new zi([a,u],0)]}class Td{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new ma(`Invalid padding: ${t}`);if(s<0)throw new ma(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ma(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new ma(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=zi.fromNumber(this.Te)}Ee(e,t,s){let a=e.add(t.multiply(zi.fromNumber(s)));return a.compare(vw)===1&&(a=new zi([a.getBits(0),a.getBits(1)],0)),a.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=zm(e),[s,a]=jm(t);for(let u=0;u<this.hashCount;u++){const h=this.Ee(s,a,u);if(!this.de(h))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new Td(u,a,t);return s.forEach(m=>h.insert(m)),h}insert(e){if(this.Te===0)return;const t=zm(e),[s,a]=jm(t);for(let u=0;u<this.hashCount;u++){const h=this.Ee(s,a,u);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class ma extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,t,s,a,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,Da.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new bu(pe.min(),a,new rt(ke),li(),Oe())}}class Da{constructor(e,t,s,a,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Da(s,t,Oe(),Oe(),Oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,t,s,a){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=a}}class my{constructor(e,t){this.targetId=e,this.me=t}}class gy{constructor(e,t,s=Rt.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class Bm{constructor(){this.fe=0,this.ge=$m(),this.pe=Rt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Oe(),t=Oe(),s=Oe();return this.ge.forEach((a,u)=>{switch(u){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:me()}}),new Da(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=$m()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Xe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Ew{constructor(e){this.Le=e,this.Be=new Map,this.ke=li(),this.qe=nu(),this.Qe=nu(),this.Ke=new rt(ke)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const s=this.ze(t);switch(e.state){case 0:this.je(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.je(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),s.De(e.resumeToken));break;default:me()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((s,a)=>{this.je(a)&&t(a)})}Je(e){const t=e.targetId,s=e.me.count,a=this.Ye(t);if(a){const u=a.target;if(Wh(u))if(s===0){const h=new he(u.path);this.We(t,h,xt.newNoDocument(h,pe.min()))}else Xe(s===1);else{const h=this.Ze(t);if(h!==s){const m=this.Xe(e),y=m?this.et(m,e,h):1;if(y!==0){this.He(t);const v=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,v)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:u=0}=t;let h,m;try{h=oi(s).toUint8Array()}catch(y){if(y instanceof Qg)return Zs("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new Td(h,a,u)}catch(y){return Zs(y instanceof ma?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.Te===0?null:m}et(e,t,s){return t.me.count===s-this.rt(e,t.targetId)?0:2}rt(e,t){const s=this.Le.getRemoteKeysForTarget(t);let a=0;return s.forEach(u=>{const h=this.Le.nt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.We(t,u,null),a++)}),a}it(e){const t=new Map;this.Be.forEach((u,h)=>{const m=this.Ye(h);if(m){if(u.current&&Wh(m.target)){const y=new he(m.target.path);this.st(y).has(h)||this.ot(h,y)||this.We(h,y,xt.newNoDocument(y,e))}u.be&&(t.set(h,u.ve()),u.Ce())}});let s=Oe();this.Qe.forEach((u,h)=>{let m=!0;h.forEachWhile(y=>{const v=this.Ye(y);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.ke.forEach((u,h)=>h.setReadTime(e));const a=new bu(e,t,this.Ke,this.ke,s);return this.ke=li(),this.qe=nu(),this.Qe=nu(),this.Ke=new rt(ke),a}Ue(e,t){if(!this.je(e))return;const s=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,s){if(!this.je(e))return;const a=this.ze(e);this.ot(e,t)?a.Fe(t,1):a.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new Bm,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new ft(ke),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ft(ke),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||te("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Bm),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function nu(){return new rt(he.comparator)}function $m(){return new rt(he.comparator)}const ww={asc:"ASCENDING",desc:"DESCENDING"},Tw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Iw={and:"AND",or:"OR"};class Sw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Xh(i,e){return i.useProto3Json||Vu(e)?e:{value:e}}function Jh(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yy(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function Ws(i){return Xe(!!i),pe.fromTimestamp(function(t){const s=si(t);return new Et(s.seconds,s.nanos)}(i))}function _y(i,e){return Zh(i,e).canonicalString()}function Zh(i,e){const t=function(a){return new Ye(["projects",a.projectId,"databases",a.database])}(i).child("documents");return e===void 0?t:t.child(e)}function vy(i){const e=Ye.fromString(i);return Xe(Sy(e)),e}function Dh(i,e){const t=vy(e);if(t.get(1)!==i.databaseId.projectId)throw new oe(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new oe(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new he(wy(t))}function Ey(i,e){return _y(i.databaseId,e)}function Aw(i){const e=vy(i);return e.length===4?Ye.emptyPath():wy(e)}function qm(i){return new Ye(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function wy(i){return Xe(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function Rw(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:me()}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],u=function(v,w){return v.useProto3Json?(Xe(w===void 0||typeof w=="string"),Rt.fromBase64String(w||"")):(Xe(w===void 0||w instanceof Buffer||w instanceof Uint8Array),Rt.fromUint8Array(w||new Uint8Array))}(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&function(v){const w=v.code===void 0?G.UNKNOWN:py(v.code);return new oe(w,v.message||"")}(h);t=new gy(s,a,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=Dh(i,s.document.name),u=Ws(s.document.updateTime),h=s.document.createTime?Ws(s.document.createTime):pe.min(),m=new qn({mapValue:{fields:s.document.fields}}),y=xt.newFoundDocument(a,u,h,m),v=s.targetIds||[],w=s.removedTargetIds||[];t=new uu(v,w,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=Dh(i,s.document),u=s.readTime?Ws(s.readTime):pe.min(),h=xt.newNoDocument(a,u),m=s.removedTargetIds||[];t=new uu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=Dh(i,s.document),u=s.removedTargetIds||[];t=new uu([],u,a,null)}else{if(!("filter"in e))return me();{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:u}=s,h=new yw(a,u),m=s.targetId;t=new my(m,h)}}return t}function Cw(i,e){return{documents:[Ey(i,e.path)]}}function Pw(i,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Ey(i,a);const u=function(v){if(v.length!==0)return Iy(Dn.create(v,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(v){if(v.length!==0)return v.map(w=>function(U){return{field:Bs(U.field),direction:Dw(U.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Xh(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(v){return{before:v.inclusive,values:v.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(v){return{before:!v.inclusive,values:v.position}}(e.endAt)),{ct:t,parent:a}}function kw(i){let e=Aw(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){Xe(s===1);const w=t.from[0];w.allDescendants?a=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=function(D){const U=Ty(D);return U instanceof Dn&&Jg(U)?U.getFilters():[U]}(t.where));let h=[];t.orderBy&&(h=function(D){return D.map(U=>function(X){return new Eu($s(X.field),function(K){switch(K){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(X.direction))}(U))}(t.orderBy));let m=null;t.limit&&(m=function(D){let U;return U=typeof D=="object"?D.value:D,Vu(U)?null:U}(t.limit));let y=null;t.startAt&&(y=function(D){const U=!!D.before,q=D.values||[];return new vu(q,U)}(t.startAt));let v=null;return t.endAt&&(v=function(D){const U=!D.before,q=D.values||[];return new vu(q,U)}(t.endAt)),ZE(e,a,h,u,m,"F",y,v)}function Nw(i,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ty(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=$s(t.unaryFilter.field);return at.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=$s(t.unaryFilter.field);return at.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=$s(t.unaryFilter.field);return at.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=$s(t.unaryFilter.field);return at.create(h,"!=",{nullValue:"NULL_VALUE"});default:return me()}}(i):i.fieldFilter!==void 0?function(t){return at.create($s(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return me()}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return Dn.create(t.compositeFilter.filters.map(s=>Ty(s)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return me()}}(t.compositeFilter.op))}(i):me()}function Dw(i){return ww[i]}function Ow(i){return Tw[i]}function Vw(i){return Iw[i]}function Bs(i){return{fieldPath:i.canonicalString()}}function $s(i){return Mt.fromServerFormat(i.fieldPath)}function Iy(i){return i instanceof at?function(t){if(t.op==="=="){if(Dm(t.value))return{unaryFilter:{field:Bs(t.field),op:"IS_NAN"}};if(Nm(t.value))return{unaryFilter:{field:Bs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Dm(t.value))return{unaryFilter:{field:Bs(t.field),op:"IS_NOT_NAN"}};if(Nm(t.value))return{unaryFilter:{field:Bs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bs(t.field),op:Ow(t.op),value:t.value}}}(i):i instanceof Dn?function(t){const s=t.getFilters().map(a=>Iy(a));return s.length===1?s[0]:{compositeFilter:{op:Vw(t.op),filters:s}}}(i):me()}function Sy(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,t,s,a,u=pe.min(),h=pe.min(),m=Rt.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new Zr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e){this.ht=e}}function xw(i){const e=kw({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Gh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(){this.ln=new Fw}addToCollectionParentIndex(e,t){return this.ln.add(t),j.resolve()}getCollectionParents(e,t){return j.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return j.resolve()}deleteFieldIndex(e,t){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,t){return j.resolve()}getDocumentsMatchingTarget(e,t){return j.resolve(null)}getIndexType(e,t){return j.resolve(0)}getFieldIndexes(e,t){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,t){return j.resolve(ii.min())}getMinOffsetFromCollectionGroup(e,t){return j.resolve(ii.min())}updateCollectionGroup(e,t,s){return j.resolve()}updateIndexEntries(e,t){return j.resolve()}}class Fw{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new ft(Ye.comparator),u=!a.has(s);return this.index[t]=a.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new ft(Ye.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Yt{static withCacheSize(e){return new Yt(e,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt.DEFAULT_COLLECTION_PERCENTILE=10,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Yt.DEFAULT=new Yt(41943040,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Yt.DISABLED=new Yt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new ro(0)}static Qn(){return new ro(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm([i,e],[t,s]){const a=ke(i,t);return a===0?ke(e,s):a}class Uw{constructor(e){this.Gn=e,this.buffer=new ft(Wm),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Wm(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class bw{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){te("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){uo(t)?te("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Du(t)}await this.Yn(3e5)})}}class zw{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return j.resolve(Ou.oe);const s=new Uw(t);return this.Zn.forEachTarget(e,a=>s.Hn(a.sequenceNumber)).next(()=>this.Zn.er(e,a=>s.Hn(a))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Zn.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(Hm)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Hm):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let s,a,u,h,m,y,v;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(D=>(D>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${D}`),a=this.params.maximumSequenceNumbersToCollect):a=D,h=Date.now(),this.nthSequenceNumber(e,a))).next(D=>(s=D,m=Date.now(),this.removeTargets(e,s,t))).next(D=>(u=D,y=Date.now(),this.removeOrphanedDocuments(e,s))).next(D=>(v=Date.now(),zs()<=Ie.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${a} in `+(m-h)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${D} documents in `+(v-y)+`ms
Total Duration: ${v-w}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:u,documentsRemoved:D})))}}function jw(i,e){return new zw(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(){this.changes=new Wi(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,xt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?j.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(s=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(s!==null&&va(s.mutation,a,Jr.empty(),Et.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Oe()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Oe()){const a=bi();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,s).next(u=>{let h=pa();return u.forEach((m,y)=>{h=h.insert(m,y.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=bi();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Oe()))}populateOverlays(e,t,s){const a=[];return s.forEach(u=>{t.has(u)||a.push(u)}),this.documentOverlayCache.getOverlays(e,a).next(u=>{u.forEach((h,m)=>{t.set(h,m)})})}computeViews(e,t,s,a){let u=li();const h=_a(),m=function(){return _a()}();return t.forEach((y,v)=>{const w=s.get(v.key);a.has(v.key)&&(w===void 0||w.mutation instanceof Uu)?u=u.insert(v.key,v):w!==void 0?(h.set(v.key,w.mutation.getFieldMask()),va(w.mutation,v,w.mutation.getFieldMask(),Et.now())):h.set(v.key,Jr.empty())}),this.recalculateAndSaveOverlays(e,u).next(y=>(y.forEach((v,w)=>h.set(v,w)),t.forEach((v,w)=>{var D;return m.set(v,new $w(w,(D=h.get(v))!==null&&D!==void 0?D:null))}),m))}recalculateAndSaveOverlays(e,t){const s=_a();let a=new rt((h,m)=>h-m),u=Oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const m of h)m.keys().forEach(y=>{const v=t.get(y);if(v===null)return;let w=s.get(y)||Jr.empty();w=m.applyToLocalView(v,w),s.set(y,w);const D=(a.get(m.batchId)||Oe()).add(y);a=a.insert(m.batchId,D)})}).next(()=>{const h=[],m=a.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),v=y.key,w=y.value,D=ay();w.forEach(U=>{if(!u.has(U)){const q=dy(t.get(U),s.get(U));q!==null&&D.set(U,q),u=u.add(U)}}),h.push(this.documentOverlayCache.saveOverlays(e,v,D))}return j.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,a){return function(h){return he.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ry(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next(u=>{const h=a-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-u.size):j.resolve(bi());let m=-1,y=u;return h.next(v=>j.forEach(v,(w,D)=>(m<D.largestBatchId&&(m=D.largestBatchId),u.get(w)?j.resolve():this.remoteDocumentCache.getEntry(e,w).next(U=>{y=y.insert(w,U)}))).next(()=>this.populateOverlays(e,v,u)).next(()=>this.computeViews(e,y,v,Oe())).next(w=>({batchId:m,changes:iw(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new he(t)).next(s=>{let a=pa();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const u=t.collectionGroup;let h=pa();return this.indexManager.getCollectionParents(e,u).next(m=>j.forEach(m,y=>{const v=function(D,U){return new Na(U,null,D.explicitOrderBy.slice(),D.filters.slice(),D.limit,D.limitType,D.startAt,D.endAt)}(t,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,a).next(w=>{w.forEach((D,U)=>{h=h.insert(D,U)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,a){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,a))).next(h=>{u.forEach((y,v)=>{const w=v.getKey();h.get(w)===null&&(h=h.insert(w,xt.newInvalidDocument(w)))});let m=pa();return h.forEach((y,v)=>{const w=u.get(y);w!==void 0&&va(w.mutation,v,Jr.empty(),Et.now()),Mu(t,v)&&(m=m.insert(y,v))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return j.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Ws(a.createTime)}}(t)),j.resolve()}getNamedQuery(e,t){return j.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(a){return{name:a.name,query:xw(a.bundledQuery),readTime:Ws(a.readTime)}}(t)),j.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(){this.overlays=new rt(he.comparator),this.Er=new Map}getOverlay(e,t){return j.resolve(this.overlays.get(t))}getOverlays(e,t){const s=bi();return j.forEach(t,a=>this.getOverlay(e,a).next(u=>{u!==null&&s.set(a,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((a,u)=>{this.Tt(e,t,u)}),j.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.Er.get(s);return a!==void 0&&(a.forEach(u=>this.overlays=this.overlays.remove(u)),this.Er.delete(s)),j.resolve()}getOverlaysForCollection(e,t,s){const a=bi(),u=t.length+1,h=new he(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,v=y.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&y.largestBatchId>s&&a.set(y.getKey(),y)}return j.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let u=new rt((v,w)=>v-w);const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let w=u.get(v.largestBatchId);w===null&&(w=bi(),u=u.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const m=bi(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach((v,w)=>m.set(v,w)),!(m.size()>=a)););return j.resolve(m)}Tt(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const h=this.Er.get(a.largestBatchId).delete(s.key);this.Er.set(a.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new gw(t,s));let u=this.Er.get(t);u===void 0&&(u=Oe(),this.Er.set(t,u)),this.Er.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(){this.sessionToken=Rt.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(){this.dr=new ft(vt.Ar),this.Rr=new ft(vt.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const s=new vt(e,t);this.dr=this.dr.add(s),this.Rr=this.Rr.add(s)}mr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.gr(new vt(e,t))}pr(e,t){e.forEach(s=>this.removeReference(s,t))}yr(e){const t=new he(new Ye([])),s=new vt(t,e),a=new vt(t,e+1),u=[];return this.Rr.forEachInRange([s,a],h=>{this.gr(h),u.push(h.key)}),u}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new he(new Ye([])),s=new vt(t,e),a=new vt(t,e+1);let u=Oe();return this.Rr.forEachInRange([s,a],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new vt(e,0),s=this.dr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class vt{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return he.comparator(e.key,t.key)||ke(e.br,t.br)}static Vr(e,t){return ke(e.br,t.br)||he.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new ft(vt.Ar)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const u=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new mw(u,t,s,a);this.mutationQueue.push(h);for(const m of a)this.vr=this.vr.add(new vt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return j.resolve(h)}lookupMutationBatch(e,t){return j.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.Fr(s),u=a<0?0:a;return j.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new vt(t,0),a=new vt(t,Number.POSITIVE_INFINITY),u=[];return this.vr.forEachInRange([s,a],h=>{const m=this.Cr(h.br);u.push(m)}),j.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new ft(ke);return t.forEach(a=>{const u=new vt(a,0),h=new vt(a,Number.POSITIVE_INFINITY);this.vr.forEachInRange([u,h],m=>{s=s.add(m.br)})}),j.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let u=s;he.isDocumentKey(u)||(u=u.child(""));const h=new vt(new he(u),0);let m=new ft(ke);return this.vr.forEachWhile(y=>{const v=y.key.path;return!!s.isPrefixOf(v)&&(v.length===a&&(m=m.add(y.br)),!0)},h),j.resolve(this.Mr(m))}Mr(e){const t=[];return e.forEach(s=>{const a=this.Cr(s);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){Xe(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return j.forEach(t.mutations,a=>{const u=new vt(a.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.vr=s})}Ln(e){}containsKey(e,t){const s=new vt(t,0),a=this.vr.firstAfterOrEqual(s);return j.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e){this.Nr=e,this.docs=function(){return new rt(he.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),u=a?a.size:0,h=this.Nr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return j.resolve(s?s.document.mutableCopy():xt.newInvalidDocument(t))}getEntries(e,t){let s=li();return t.forEach(a=>{const u=this.docs.get(a);s=s.insert(a,u?u.document.mutableCopy():xt.newInvalidDocument(a))}),j.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let u=li();const h=t.path,m=new he(h.child("")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:v,value:{document:w}}=y.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||OE(DE(w),s)<=0||(a.has(w.key)||Mu(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return j.resolve(u)}getAllFromCollectionGroup(e,t,s,a){me()}Lr(e,t){return j.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new Yw(this)}getSize(e){return j.resolve(this.size)}}class Yw extends Bw{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((s,a)=>{a.isValidDocument()?t.push(this.hr.addEntry(e,a)):this.hr.removeEntry(s)}),j.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e){this.persistence=e,this.Br=new Wi(t=>yd(t),_d),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.kr=0,this.qr=new Id,this.targetCount=0,this.Qr=ro.qn()}forEachTarget(e,t){return this.Br.forEach((s,a)=>t(a)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.kr&&(this.kr=t),j.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new ro(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,j.resolve()}updateTargetData(e,t){return this.Un(t),j.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,t,s){let a=0;const u=[];return this.Br.forEach((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.Br.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),a++)}),j.waitFor(u).next(()=>a)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,t){const s=this.Br.get(t)||null;return j.resolve(s)}addMatchingKeys(e,t,s){return this.qr.mr(t,s),j.resolve()}removeMatchingKeys(e,t,s){this.qr.pr(t,s);const a=this.persistence.referenceDelegate,u=[];return a&&t.forEach(h=>{u.push(a.markPotentiallyOrphaned(e,h))}),j.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),j.resolve()}getMatchingKeysForTargetId(e,t){const s=this.qr.Sr(t);return j.resolve(s)}containsKey(e,t){return j.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Ou(0),this.Ur=!1,this.Ur=!0,this.Wr=new Kw,this.referenceDelegate=e(this),this.Gr=new Xw(this),this.indexManager=new Mw,this.remoteDocumentCache=function(a){return new Qw(a)}(s=>this.referenceDelegate.zr(s)),this.serializer=new Lw(t),this.jr=new Hw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ww,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Kr[e.toKey()];return s||(s=new Gw(t,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,s){te("MemoryPersistence","Starting transaction:",e);const a=new Jw(this.$r.next());return this.referenceDelegate.Hr(),s(a).next(u=>this.referenceDelegate.Jr(a).next(()=>u)).toPromise().then(u=>(a.raiseOnCommittedEvent(),u))}Yr(e,t){return j.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,t)))}}class Jw extends LE{constructor(e){super(),this.currentSequenceNumber=e}}class Sd{constructor(e){this.persistence=e,this.Zr=new Id,this.Xr=null}static ei(e){return new Sd(e)}get ti(){if(this.Xr)return this.Xr;throw me()}addReference(e,t,s){return this.Zr.addReference(s,t),this.ti.delete(s.toString()),j.resolve()}removeReference(e,t,s){return this.Zr.removeReference(s,t),this.ti.add(s.toString()),j.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),j.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(a=>this.ti.add(a.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(u=>this.ti.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.ti,s=>{const a=he.fromPath(s);return this.ni(e,a).next(u=>{u||t.removeEntry(a,pe.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(s=>{s?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return j.or([()=>j.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Iu{constructor(e,t){this.persistence=e,this.ri=new Wi(s=>FE(s.path),(s,a)=>s.isEqual(a)),this.garbageCollector=jw(this,t)}static ei(e,t){return new Iu(e,t)}Hr(){}Jr(e){return j.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(a=>s+a))}nr(e){let t=0;return this.er(e,s=>{t++}).next(()=>t)}er(e,t){return j.forEach(this.ri,(s,a)=>this.ir(e,s,a).next(u=>u?j.resolve():t(a)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),u=a.newChangeBuffer();return a.Lr(e,h=>this.ir(e,h,t).next(m=>{m||(s++,u.removeEntry(h,pe.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),j.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),j.resolve()}removeReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),j.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=au(e.data.value)),t}ir(e,t,s){return j.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.ri.get(t);return j.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Wi=s,this.Gi=a}static zi(e,t){let s=Oe(),a=Oe();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:a=a.add(u.doc.key)}return new Ad(e,t.fromCache,s,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return r0()?8:xE(Ft())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,s,a){const u={result:null};return this.Xi(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.es(e,t,a,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new Zw;return this.ts(e,t,h).next(m=>{if(u.result=m,this.Hi)return this.ns(e,t,h,m.size)})}).next(()=>u.result)}ns(e,t,s,a){return s.documentReadCount<this.Ji?(zs()<=Ie.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",js(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),j.resolve()):(zs()<=Ie.DEBUG&&te("QueryEngine","Query:",js(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.Yi*a?(zs()<=Ie.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",js(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Hn(t))):j.resolve())}Xi(e,t){if(xm(t))return j.resolve(null);let s=Hn(t);return this.indexManager.getIndexType(e,s).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=Gh(t,null,"F"),s=Hn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Oe(...u);return this.Zi.getDocuments(e,h).next(m=>this.indexManager.getMinOffset(e,s).next(y=>{const v=this.rs(t,m);return this.ss(t,v,h,y.readTime)?this.Xi(e,Gh(t,null,"F")):this.os(e,v,t,y)}))})))}es(e,t,s,a){return xm(t)||a.isEqual(pe.min())?j.resolve(null):this.Zi.getDocuments(e,s).next(u=>{const h=this.rs(t,u);return this.ss(t,h,s,a)?j.resolve(null):(zs()<=Ie.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),js(t)),this.os(e,h,t,NE(a,-1)).next(m=>m))})}rs(e,t){let s=new ft(sy(e));return t.forEach((a,u)=>{Mu(e,u)&&(s=s.add(u))}),s}ss(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(a)>0)}ts(e,t,s){return zs()<=Ie.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",js(t)),this.Zi.getDocumentsMatchingQuery(e,t,ii.min(),s)}os(e,t,s,a){return this.Zi.getDocumentsMatchingQuery(e,s,a).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e,t,s,a){this.persistence=e,this._s=t,this.serializer=a,this.us=new rt(ke),this.cs=new Wi(u=>yd(u),_d),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qw(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function nT(i,e,t,s){return new tT(i,e,t,s)}async function Ry(i,e){const t=Ne(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next(u=>(a=u,t.Ps(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],m=[];let y=Oe();for(const v of a){h.push(v.batchId);for(const w of v.mutations)y=y.add(w.key)}for(const v of u){m.push(v.batchId);for(const w of v.mutations)y=y.add(w.key)}return t.localDocuments.getDocuments(s,y).next(v=>({Ts:v,removedBatchIds:h,addedBatchIds:m}))})})}function Cy(i){const e=Ne(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function rT(i,e){const t=Ne(i),s=e.snapshotVersion;let a=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.hs.newChangeBuffer({trackRemovals:!0});a=t.us;const m=[];e.targetChanges.forEach((w,D)=>{const U=a.get(D);if(!U)return;m.push(t.Gr.removeMatchingKeys(u,w.removedDocuments,D).next(()=>t.Gr.addMatchingKeys(u,w.addedDocuments,D)));let q=U.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(D)!==null?q=q.withResumeToken(Rt.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):w.resumeToken.approximateByteSize()>0&&(q=q.withResumeToken(w.resumeToken,s)),a=a.insert(D,q),function(J,K,Ae){return J.resumeToken.approximateByteSize()===0||K.snapshotVersion.toMicroseconds()-J.snapshotVersion.toMicroseconds()>=3e8?!0:Ae.addedDocuments.size+Ae.modifiedDocuments.size+Ae.removedDocuments.size>0}(U,q,w)&&m.push(t.Gr.updateTargetData(u,q))});let y=li(),v=Oe();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))}),m.push(iT(u,h,e.documentUpdates).next(w=>{y=w.Is,v=w.Es})),!s.isEqual(pe.min())){const w=t.Gr.getLastRemoteSnapshotVersion(u).next(D=>t.Gr.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(w)}return j.waitFor(m).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,y,v)).next(()=>y)}).then(u=>(t.us=a,u))}function iT(i,e,t){let s=Oe(),a=Oe();return t.forEach(u=>s=s.add(u)),e.getEntries(i,s).next(u=>{let h=li();return t.forEach((m,y)=>{const v=u.get(m);y.isFoundDocument()!==v.isFoundDocument()&&(a=a.add(m)),y.isNoDocument()&&y.version.isEqual(pe.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!v.isValidDocument()||y.version.compareTo(v.version)>0||y.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):te("LocalStore","Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",y.version)}),{Is:h,Es:a}})}function sT(i,e){const t=Ne(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let a;return t.Gr.getTargetData(s,e).next(u=>u?(a=u,j.resolve(a)):t.Gr.allocateTargetId(s).next(h=>(a=new Zr(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Gr.addTargetData(s,a).next(()=>a))))}).then(s=>{const a=t.us.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.us=t.us.insert(s.targetId,s),t.cs.set(e,s.targetId)),s})}async function ed(i,e,t){const s=Ne(i),a=s.us.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,a))}catch(h){if(!uo(h))throw h;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}s.us=s.us.remove(e),s.cs.delete(a.target)}function Km(i,e,t){const s=Ne(i);let a=pe.min(),u=Oe();return s.persistence.runTransaction("Execute query","readwrite",h=>function(y,v,w){const D=Ne(y),U=D.cs.get(w);return U!==void 0?j.resolve(D.us.get(U)):D.Gr.getTargetData(v,w)}(s,h,Hn(e)).next(m=>{if(m)return a=m.lastLimboFreeSnapshotVersion,s.Gr.getMatchingKeysForTargetId(h,m.targetId).next(y=>{u=y})}).next(()=>s._s.getDocumentsMatchingQuery(h,e,t?a:pe.min(),t?u:Oe())).next(m=>(oT(s,tw(e),m),{documents:m,ds:u})))}function oT(i,e,t){let s=i.ls.get(e)||pe.min();t.forEach((a,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),i.ls.set(e,s)}class Gm{constructor(){this.activeTargetIds=aw()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class aT{constructor(){this._o=new Gm,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,s){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Gm,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ru=null;function Oh(){return ru===null?ru=function(){return 268435456+Math.round(2147483648*Math.random())}():ru++,"0x"+ru.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt="WebChannelConnection";class hT extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),u=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+t.host,this.Mo=`projects/${a}/databases/${u}`,this.xo=this.databaseId.database==="(default)"?`project_id=${a}`:`project_id=${a}&database_id=${u}`}Oo(t,s,a,u,h){const m=Oh(),y=this.No(t,s.toUriEncodedString());te("RestConnection",`Sending RPC '${t}' ${m}:`,y,a);const v={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(v,u,h),this.Bo(t,y,v,a).then(w=>(te("RestConnection",`Received RPC '${t}' ${m}: `,w),w),w=>{throw Zs("RestConnection",`RPC '${t}' ${m} failed with error: `,w,"url: ",y,"request:",a),w})}ko(t,s,a,u,h,m){return this.Oo(t,s,a,u,h)}Lo(t,s,a){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+lo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((u,h)=>t[h]=u),a&&a.headers.forEach((u,h)=>t[h]=u)}No(t,s){const a=uT[t];return`${this.Fo}/v1/${s}:${a}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,s,a){const u=Oh();return new Promise((h,m)=>{const y=new Bg;y.setWithCredentials(!0),y.listenOnce($g.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case ou.NO_ERROR:const w=y.getResponseJson();te(Vt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(w)),h(w);break;case ou.TIMEOUT:te(Vt,`RPC '${e}' ${u} timed out`),m(new oe(G.DEADLINE_EXCEEDED,"Request time out"));break;case ou.HTTP_ERROR:const D=y.getStatus();if(te(Vt,`RPC '${e}' ${u} failed with status:`,D,"response text:",y.getResponseText()),D>0){let U=y.getResponseJson();Array.isArray(U)&&(U=U[0]);const q=U==null?void 0:U.error;if(q&&q.status&&q.message){const X=function(K){const Ae=K.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(Ae)>=0?Ae:G.UNKNOWN}(q.status);m(new oe(X,q.message))}else m(new oe(G.UNKNOWN,"Server responded with status "+y.getStatus()))}else m(new oe(G.UNAVAILABLE,"Connection failed."));break;default:me()}}finally{te(Vt,`RPC '${e}' ${u} completed.`)}});const v=JSON.stringify(a);te(Vt,`RPC '${e}' ${u} sending request:`,a),y.send(t,"POST",v,s,15)})}qo(e,t,s){const a=Oh(),u=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Wg(),m=Hg(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(y.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(y.useFetchStreams=!0),this.Lo(y.initMessageHeaders,t,s),y.encodeInitMessageHeaders=!0;const w=u.join("");te(Vt,`Creating RPC '${e}' stream ${a}: ${w}`,y);const D=h.createWebChannel(w,y);let U=!1,q=!1;const X=new cT({Eo:K=>{q?te(Vt,`Not sending because RPC '${e}' stream ${a} is closed:`,K):(U||(te(Vt,`Opening RPC '${e}' stream ${a} transport.`),D.open(),U=!0),te(Vt,`RPC '${e}' stream ${a} sending:`,K),D.send(K))},Ao:()=>D.close()}),J=(K,Ae,Te)=>{K.listen(Ae,ge=>{try{Te(ge)}catch(_e){setTimeout(()=>{throw _e},0)}})};return J(D,fa.EventType.OPEN,()=>{q||(te(Vt,`RPC '${e}' stream ${a} transport opened.`),X.So())}),J(D,fa.EventType.CLOSE,()=>{q||(q=!0,te(Vt,`RPC '${e}' stream ${a} transport closed`),X.Do())}),J(D,fa.EventType.ERROR,K=>{q||(q=!0,Zs(Vt,`RPC '${e}' stream ${a} transport errored:`,K),X.Do(new oe(G.UNAVAILABLE,"The operation could not be completed")))}),J(D,fa.EventType.MESSAGE,K=>{var Ae;if(!q){const Te=K.data[0];Xe(!!Te);const ge=Te,_e=(ge==null?void 0:ge.error)||((Ae=ge[0])===null||Ae===void 0?void 0:Ae.error);if(_e){te(Vt,`RPC '${e}' stream ${a} received error:`,_e);const He=_e.status;let we=function(A){const C=ot[A];if(C!==void 0)return py(C)}(He),k=_e.message;we===void 0&&(we=G.INTERNAL,k="Unknown error status: "+He+" with message "+_e.message),q=!0,X.Do(new oe(we,k)),D.close()}else te(Vt,`RPC '${e}' stream ${a} received:`,Te),X.vo(Te)}}),J(m,qg.STAT_EVENT,K=>{K.stat===Bh.PROXY?te(Vt,`RPC '${e}' stream ${a} detected buffering proxy`):K.stat===Bh.NOPROXY&&te(Vt,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{X.bo()},0),X}}function Vh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(i){return new Sw(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e,t,s=1e3,a=1.5,u=6e4){this.li=e,this.timerId=t,this.Qo=s,this.Ko=a,this.$o=u,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),a=Math.max(0,t-s);a>0&&te("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,a,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e,t,s,a,u,h,m,y){this.li=e,this.Yo=s,this.Zo=a,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Py(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===G.RESOURCE_EXHAUSTED?(_r(t.toString()),_r("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,a])=>{this.Xo===t&&this.I_(s,a)},s=>{e(()=>{const a=new oe(G.UNKNOWN,"Fetching auth token failed: "+s.message);return this.E_(a)})})}I_(e,t){const s=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(a=>{s(()=>this.E_(a))}),this.stream.onMessage(a=>{s(()=>++this.n_==1?this.A_(a):this.onNext(a))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fT extends dT{constructor(e,t,s,a,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,h),this.serializer=u}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=Rw(this.serializer,e),s=function(u){if(!("targetChange"in u))return pe.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?pe.min():h.readTime?Ws(h.readTime):pe.min()}(e);return this.listener.R_(t,s)}V_(e){const t={};t.database=qm(this.serializer),t.addTarget=function(u,h){let m;const y=h.target;if(m=Wh(y)?{documents:Cw(u,y)}:{query:Pw(u,y).ct},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=yy(u,h.resumeToken);const v=Xh(u,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(pe.min())>0){m.readTime=Jh(u,h.snapshotVersion.toTimestamp());const v=Xh(u,h.expectedCount);v!==null&&(m.expectedCount=v)}return m}(this.serializer,e);const s=Nw(this.serializer,e);s&&(t.labels=s),this.c_(t)}m_(e){const t={};t.database=qm(this.serializer),t.removeTarget=e,this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT extends class{}{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.S_=!1}b_(){if(this.S_)throw new oe(G.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,s,a){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Oo(e,Zh(t,s),a,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new oe(G.UNKNOWN,u.toString())})}ko(e,t,s,a,u){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,m])=>this.connection.ko(e,Zh(t,s),a,h,m,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new oe(G.UNKNOWN,h.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class mT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(_r(t),this.C_=!1):te("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e,t,s,a,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=u,this.Q_.uo(h=>{s.enqueueAndForget(async()=>{Va(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(y){const v=Ne(y);v.k_.add(4),await Oa(v),v.K_.set("Unknown"),v.k_.delete(4),await ju(v)}(this))})}),this.K_=new mT(s,a)}}async function ju(i){if(Va(i))for(const e of i.q_)await e(!0)}async function Oa(i){for(const e of i.q_)await e(!1)}function ky(i,e){const t=Ne(i);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),kd(t)?Pd(t):ho(t).s_()&&Cd(t,e))}function Rd(i,e){const t=Ne(i),s=ho(t);t.B_.delete(e),s.s_()&&Ny(t,e),t.B_.size===0&&(s.s_()?s.a_():Va(t)&&t.K_.set("Unknown"))}function Cd(i,e){if(i.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ho(i).V_(e)}function Ny(i,e){i.U_.xe(e),ho(i).m_(e)}function Pd(i){i.U_=new Ew({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>i.B_.get(e)||null,nt:()=>i.datastore.serializer.databaseId}),ho(i).start(),i.K_.F_()}function kd(i){return Va(i)&&!ho(i).i_()&&i.B_.size>0}function Va(i){return Ne(i).k_.size===0}function Dy(i){i.U_=void 0}async function yT(i){i.K_.set("Online")}async function _T(i){i.B_.forEach((e,t)=>{Cd(i,e)})}async function vT(i,e){Dy(i),kd(i)?(i.K_.O_(e),Pd(i)):i.K_.set("Unknown")}async function ET(i,e,t){if(i.K_.set("Online"),e instanceof gy&&e.state===2&&e.cause)try{await async function(a,u){const h=u.cause;for(const m of u.targetIds)a.B_.has(m)&&(await a.remoteSyncer.rejectListen(m,h),a.B_.delete(m),a.U_.removeTarget(m))}(i,e)}catch(s){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ym(i,s)}else if(e instanceof uu?i.U_.$e(e):e instanceof my?i.U_.Je(e):i.U_.Ge(e),!t.isEqual(pe.min()))try{const s=await Cy(i.localStore);t.compareTo(s)>=0&&await function(u,h){const m=u.U_.it(h);return m.targetChanges.forEach((y,v)=>{if(y.resumeToken.approximateByteSize()>0){const w=u.B_.get(v);w&&u.B_.set(v,w.withResumeToken(y.resumeToken,h))}}),m.targetMismatches.forEach((y,v)=>{const w=u.B_.get(y);if(!w)return;u.B_.set(y,w.withResumeToken(Rt.EMPTY_BYTE_STRING,w.snapshotVersion)),Ny(u,y);const D=new Zr(w.target,y,v,w.sequenceNumber);Cd(u,D)}),u.remoteSyncer.applyRemoteEvent(m)}(i,t)}catch(s){te("RemoteStore","Failed to raise snapshot:",s),await Ym(i,s)}}async function Ym(i,e,t){if(!uo(e))throw e;i.k_.add(1),await Oa(i),i.K_.set("Offline"),t||(t=()=>Cy(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await t(),i.k_.delete(1),await ju(i)})}async function Xm(i,e){const t=Ne(i);t.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const s=Va(t);t.k_.add(3),await Oa(t),s&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await ju(t)}async function wT(i,e){const t=Ne(i);e?(t.k_.delete(2),await ju(t)):e||(t.k_.add(2),await Oa(t),t.K_.set("Unknown"))}function ho(i){return i.W_||(i.W_=function(t,s,a){const u=Ne(t);return u.b_(),new fT(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,a)}(i.datastore,i.asyncQueue,{Ro:yT.bind(null,i),mo:_T.bind(null,i),po:vT.bind(null,i),R_:ET.bind(null,i)}),i.q_.push(async e=>{e?(i.W_.__(),kd(i)?Pd(i):i.K_.set("Unknown")):(await i.W_.stop(),Dy(i))})),i.W_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,t,s,a,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=u,this.deferred=new ji,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,u){const h=Date.now()+s,m=new Nd(e,t,h,a,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Oy(i,e){if(_r("AsyncQueue",`${e}: ${i}`),uo(i))return new oe(G.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{static emptySet(e){return new Ks(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||he.comparator(t.key,s.key):(t,s)=>he.comparator(t.key,s.key),this.keyedMap=pa(),this.sortedSet=new rt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ks)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,u=s.getNext().key;if(!a.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Ks;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(){this.z_=new rt(he.comparator)}track(e){const t=e.doc.key,s=this.z_.get(t);s?e.type!==0&&s.type===3?this.z_=this.z_.insert(t,e):e.type===3&&s.type!==1?this.z_=this.z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.z_=this.z_.remove(t):e.type===1&&s.type===2?this.z_=this.z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):me():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class io{constructor(e,t,s,a,u,h,m,y,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,a,u){const h=[];return t.forEach(m=>{h.push({type:0,doc:m})}),new io(e,t,Ks.emptySet(t),h,s,a,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class IT{constructor(){this.queries=Zm(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,s){const a=Ne(t),u=a.queries;a.queries=Zm(),u.forEach((h,m)=>{for(const y of m.J_)y.onError(s)})})(this,new oe(G.ABORTED,"Firestore shutting down"))}}function Zm(){return new Wi(i=>iy(i),xu)}async function ST(i,e){const t=Ne(i);let s=3;const a=e.query;let u=t.queries.get(a);u?!u.Y_()&&e.Z_()&&(s=2):(u=new TT,s=e.Z_()?0:1);try{switch(s){case 0:u.H_=await t.onListen(a,!0);break;case 1:u.H_=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(h){const m=Oy(h,`Initialization of query '${js(e.query)}' failed`);return void e.onError(m)}t.queries.set(a,u),u.J_.push(e),e.ea(t.onlineState),u.H_&&e.ta(u.H_)&&Dd(t)}async function AT(i,e){const t=Ne(i),s=e.query;let a=3;const u=t.queries.get(s);if(u){const h=u.J_.indexOf(e);h>=0&&(u.J_.splice(h,1),u.J_.length===0?a=e.Z_()?0:1:!u.Y_()&&e.Z_()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function RT(i,e){const t=Ne(i);let s=!1;for(const a of e){const u=a.query,h=t.queries.get(u);if(h){for(const m of h.J_)m.ta(a)&&(s=!0);h.H_=a}}s&&Dd(t)}function CT(i,e,t){const s=Ne(i),a=s.queries.get(e);if(a)for(const u of a.J_)u.onError(t);s.queries.delete(e)}function Dd(i){i.X_.forEach(e=>{e.next()})}var td,eg;(eg=td||(td={})).na="default",eg.Cache="cache";class PT{constructor(e,t,s){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=s||{}}ta(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new io(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const s=t!=="Offline";return(!this.options.ua||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=io.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==td.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e){this.key=e}}class Ly{constructor(e){this.key=e}}class kT{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Oe(),this.mutatedKeys=Oe(),this.Va=sy(e),this.ma=new Ks(this.Va)}get fa(){return this.da}ga(e,t){const s=t?t.pa:new Jm,a=t?t.ma:this.ma;let u=t?t.mutatedKeys:this.mutatedKeys,h=a,m=!1;const y=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,v=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((w,D)=>{const U=a.get(w),q=Mu(this.query,D)?D:null,X=!!U&&this.mutatedKeys.has(U.key),J=!!q&&(q.hasLocalMutations||this.mutatedKeys.has(q.key)&&q.hasCommittedMutations);let K=!1;U&&q?U.data.isEqual(q.data)?X!==J&&(s.track({type:3,doc:q}),K=!0):this.ya(U,q)||(s.track({type:2,doc:q}),K=!0,(y&&this.Va(q,y)>0||v&&this.Va(q,v)<0)&&(m=!0)):!U&&q?(s.track({type:0,doc:q}),K=!0):U&&!q&&(s.track({type:1,doc:U}),K=!0,(y||v)&&(m=!0)),K&&(q?(h=h.add(q),u=J?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{ma:h,pa:s,ss:m,mutatedKeys:u}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const u=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const h=e.pa.j_();h.sort((w,D)=>function(q,X){const J=K=>{switch(K){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me()}};return J(q)-J(X)}(w.type,D.type)||this.Va(w.doc,D.doc)),this.wa(s),a=a!=null&&a;const m=t&&!a?this.Sa():[],y=this.Ra.size===0&&this.current&&!a?1:0,v=y!==this.Aa;return this.Aa=y,h.length!==0||v?{snapshot:new io(this.query,e.ma,u,h,e.mutatedKeys,y===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),ba:m}:{ba:m}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Jm,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Oe(),this.ma.forEach(s=>{this.Da(s.key)&&(this.Ra=this.Ra.add(s.key))});const t=[];return e.forEach(s=>{this.Ra.has(s)||t.push(new Ly(s))}),this.Ra.forEach(s=>{e.has(s)||t.push(new Vy(s))}),t}va(e){this.da=e.ds,this.Ra=Oe();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return io.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class NT{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class DT{constructor(e){this.key=e,this.Fa=!1}}class OT{constructor(e,t,s,a,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Ma={},this.xa=new Wi(m=>iy(m),xu),this.Oa=new Map,this.Na=new Set,this.La=new rt(he.comparator),this.Ba=new Map,this.ka=new Id,this.qa={},this.Qa=new Map,this.Ka=ro.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function VT(i,e,t=!0){const s=by(i);let a;const u=s.xa.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),a=u.view.Ca()):a=await xy(s,e,t,!0),a}async function LT(i,e){const t=by(i);await xy(t,e,!0,!1)}async function xy(i,e,t,s){const a=await sT(i.localStore,Hn(e)),u=a.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await xT(i,e,u,h==="current",a.resumeToken)),i.isPrimaryClient&&t&&ky(i.remoteStore,a),m}async function xT(i,e,t,s,a){i.Ua=(D,U,q)=>async function(J,K,Ae,Te){let ge=K.view.ga(Ae);ge.ss&&(ge=await Km(J.localStore,K.query,!1).then(({documents:k})=>K.view.ga(k,ge)));const _e=Te&&Te.targetChanges.get(K.targetId),He=Te&&Te.targetMismatches.get(K.targetId)!=null,we=K.view.applyChanges(ge,J.isPrimaryClient,_e,He);return ng(J,K.targetId,we.ba),we.snapshot}(i,D,U,q);const u=await Km(i.localStore,e,!0),h=new kT(e,u.ds),m=h.ga(u.documents),y=Da.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",a),v=h.applyChanges(m,i.isPrimaryClient,y);ng(i,t,v.ba);const w=new NT(e,t,h);return i.xa.set(e,w),i.Oa.has(t)?i.Oa.get(t).push(e):i.Oa.set(t,[e]),v.snapshot}async function MT(i,e,t){const s=Ne(i),a=s.xa.get(e),u=s.Oa.get(a.targetId);if(u.length>1)return s.Oa.set(a.targetId,u.filter(h=>!xu(h,e))),void s.xa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await ed(s.localStore,a.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(a.targetId),t&&Rd(s.remoteStore,a.targetId),nd(s,a.targetId)}).catch(Du)):(nd(s,a.targetId),await ed(s.localStore,a.targetId,!0))}async function FT(i,e){const t=Ne(i),s=t.xa.get(e),a=t.Oa.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Rd(t.remoteStore,s.targetId))}async function My(i,e){const t=Ne(i);try{const s=await rT(t.localStore,e);e.targetChanges.forEach((a,u)=>{const h=t.Ba.get(u);h&&(Xe(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1),a.addedDocuments.size>0?h.Fa=!0:a.modifiedDocuments.size>0?Xe(h.Fa):a.removedDocuments.size>0&&(Xe(h.Fa),h.Fa=!1))}),await Uy(t,s,e)}catch(s){await Du(s)}}function tg(i,e,t){const s=Ne(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.xa.forEach((u,h)=>{const m=h.view.ea(e);m.snapshot&&a.push(m.snapshot)}),function(h,m){const y=Ne(h);y.onlineState=m;let v=!1;y.queries.forEach((w,D)=>{for(const U of D.J_)U.ea(m)&&(v=!0)}),v&&Dd(y)}(s.eventManager,e),a.length&&s.Ma.R_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function UT(i,e,t){const s=Ne(i);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Ba.get(e),u=a&&a.key;if(u){let h=new rt(he.comparator);h=h.insert(u,xt.newNoDocument(u,pe.min()));const m=Oe().add(u),y=new bu(pe.min(),new Map,new rt(ke),h,m);await My(s,y),s.La=s.La.remove(u),s.Ba.delete(e),Od(s)}else await ed(s.localStore,e,!1).then(()=>nd(s,e,t)).catch(Du)}function nd(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Oa.get(e))i.xa.delete(s),t&&i.Ma.Wa(s,t);i.Oa.delete(e),i.isPrimaryClient&&i.ka.yr(e).forEach(s=>{i.ka.containsKey(s)||Fy(i,s)})}function Fy(i,e){i.Na.delete(e.path.canonicalString());const t=i.La.get(e);t!==null&&(Rd(i.remoteStore,t),i.La=i.La.remove(e),i.Ba.delete(t),Od(i))}function ng(i,e,t){for(const s of t)s instanceof Vy?(i.ka.addReference(s.key,e),bT(i,s)):s instanceof Ly?(te("SyncEngine","Document no longer in limbo: "+s.key),i.ka.removeReference(s.key,e),i.ka.containsKey(s.key)||Fy(i,s.key)):me()}function bT(i,e){const t=e.key,s=t.path.canonicalString();i.La.get(t)||i.Na.has(s)||(te("SyncEngine","New document in limbo: "+t),i.Na.add(s),Od(i))}function Od(i){for(;i.Na.size>0&&i.La.size<i.maxConcurrentLimboResolutions;){const e=i.Na.values().next().value;i.Na.delete(e);const t=new he(Ye.fromString(e)),s=i.Ka.next();i.Ba.set(s,new DT(t)),i.La=i.La.insert(t,s),ky(i.remoteStore,new Zr(Hn(ny(t.path)),s,"TargetPurposeLimboResolution",Ou.oe))}}async function Uy(i,e,t){const s=Ne(i),a=[],u=[],h=[];s.xa.isEmpty()||(s.xa.forEach((m,y)=>{h.push(s.Ua(y,e,t).then(v=>{var w;if((v||t)&&s.isPrimaryClient){const D=v?!v.fromCache:(w=t==null?void 0:t.targetChanges.get(y.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(y.targetId,D?"current":"not-current")}if(v){a.push(v);const D=Ad.zi(y.targetId,v);u.push(D)}}))}),await Promise.all(h),s.Ma.R_(a),await async function(y,v){const w=Ne(y);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",D=>j.forEach(v,U=>j.forEach(U.Wi,q=>w.persistence.referenceDelegate.addReference(D,U.targetId,q)).next(()=>j.forEach(U.Gi,q=>w.persistence.referenceDelegate.removeReference(D,U.targetId,q)))))}catch(D){if(!uo(D))throw D;te("LocalStore","Failed to update sequence numbers: "+D)}for(const D of v){const U=D.targetId;if(!D.fromCache){const q=w.us.get(U),X=q.snapshotVersion,J=q.withLastLimboFreeSnapshotVersion(X);w.us=w.us.insert(U,J)}}}(s.localStore,u))}async function zT(i,e){const t=Ne(i);if(!t.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const s=await Ry(t.localStore,e);t.currentUser=e,function(u,h){u.Qa.forEach(m=>{m.forEach(y=>{y.reject(new oe(G.CANCELLED,h))})}),u.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Uy(t,s.Ts)}}function jT(i,e){const t=Ne(i),s=t.Ba.get(e);if(s&&s.Fa)return Oe().add(s.key);{let a=Oe();const u=t.Oa.get(e);if(!u)return a;for(const h of u){const m=t.xa.get(h);a=a.unionWith(m.view.fa)}return a}}function by(i){const e=Ne(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=My.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=UT.bind(null,e),e.Ma.R_=RT.bind(null,e.eventManager),e.Ma.Wa=CT.bind(null,e.eventManager),e}class Su{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zu(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return nT(this.persistence,new eT,e.initialUser,this.serializer)}ja(e){return new Ay(Sd.ei,this.serializer)}za(e){return new aT}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Su.provider={build:()=>new Su};class BT extends Su{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Xe(this.persistence.referenceDelegate instanceof Iu);const s=this.persistence.referenceDelegate.garbageCollector;return new bw(s,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Yt.withCacheSize(this.cacheSizeBytes):Yt.DEFAULT;return new Ay(s=>Iu.ei(s,t),this.serializer)}}class rd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>tg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=zT.bind(null,this.syncEngine),await wT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new IT}()}createDatastore(e){const t=zu(e.databaseInfo.databaseId),s=function(u){return new hT(u)}(e.databaseInfo);return function(u,h,m,y){return new pT(u,h,m,y)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,a,u,h,m){return new gT(s,a,u,h,m)}(this.localStore,this.datastore,e.asyncQueue,t=>tg(this.syncEngine,t,0),function(){return Qm.p()?new Qm:new lT}())}createSyncEngine(e,t){return function(a,u,h,m,y,v,w){const D=new OT(a,u,h,m,y,v);return w&&(D.$a=!0),D}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const u=Ne(a);te("RemoteStore","RemoteStore shutting down."),u.k_.add(5),await Oa(u),u.Q_.shutdown(),u.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}rd.provider={build:()=>new rd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):_r("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e,t,s,a,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=Lt.UNAUTHENTICATED,this.clientId=PE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{te("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(te("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ji;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Oy(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Lh(i,e){i.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async a=>{s.isEqual(a)||(await Ry(e.localStore,a),s=a)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function rg(i,e){i.asyncQueue.verifyOperationInProgress();const t=await HT(i);te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>Xm(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,a)=>Xm(e.remoteStore,a)),i._onlineComponents=e}async function HT(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await Lh(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===G.FAILED_PRECONDITION||a.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;Zs("Error using user provided cache. Falling back to memory cache: "+t),await Lh(i,new Su)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await Lh(i,new BT(void 0));return i._offlineComponents}async function WT(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await rg(i,i._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await rg(i,new rd))),i._onlineComponents}async function KT(i){const e=await WT(i),t=e.eventManager;return t.onListen=VT.bind(null,e.syncEngine),t.onUnlisten=MT.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=LT.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=FT.bind(null,e.syncEngine),t}function GT(i,e,t={}){const s=new ji;return i.asyncQueue.enqueueAndForget(async()=>function(u,h,m,y,v){const w=new $T({next:U=>{w.eu(),h.enqueueAndForget(()=>AT(u,D)),U.fromCache&&y.source==="server"?v.reject(new oe(G.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(U)},error:U=>v.reject(U)}),D=new PT(m,w,{includeMetadataChanges:!0,ua:!0});return ST(u,D)}(await KT(i),i.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=new Map;function QT(i,e,t,s){if(e===!0&&s===!0)throw new oe(G.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function sg(i){if(he.isDocumentKey(i))throw new oe(G.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Bu(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":me()}function id(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new oe(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Bu(i);throw new oe(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new oe(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new oe(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}QT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zy((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new oe(G.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new oe(G.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new oe(G.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,a){return s.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Vd{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new og({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new oe(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new oe(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new og(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new EE;switch(s.type){case"firstParty":return new SE(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new oe(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=ig.get(t);s&&(te("ComponentProvider","Removing Datastore"),ig.delete(t),s.terminate())}(this),Promise.resolve()}}function YT(i,e,t,s={}){var a;const u=(i=id(i,Vd))._getSettings(),h=`${e}:${t}`;if(u.host!=="firestore.googleapis.com"&&u.host!==h&&Zs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},u),{host:h,ssl:!1})),s.mockUserToken){let m,y;if(typeof s.mockUserToken=="string")m=s.mockUserToken,y=Lt.MOCK_USER;else{m=Yv(s.mockUserToken,(a=i._app)===null||a===void 0?void 0:a.options.projectId);const v=s.mockUserToken.sub||s.mockUserToken.user_id;if(!v)throw new oe(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new Lt(v)}i._authCredentials=new wE(new Kg(m,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new fo(this.firestore,e,this._query)}}class wr{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wr(this.firestore,e,this._key)}}class Gs extends fo{constructor(e,t,s){super(e,t,ny(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wr(this.firestore,null,new he(e))}withConverter(e){return new Gs(this.firestore,e,this._path)}}function XT(i,e,...t){if(i=Nn(i),i instanceof Vd){const s=Ye.fromString(e,...t);return sg(s),new Gs(i,null,s)}{if(!(i instanceof wr||i instanceof Gs))throw new oe(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ye.fromString(e,...t));return sg(s),new Gs(i.firestore,null,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Py(this,"async_queue_retry"),this.fu=()=>{const s=Vh();s&&te("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const t=Vh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=Vh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new ji;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!uo(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const a=function(h){let m=h.message||"";return h.stack&&(m=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),m}(s);throw _r("INTERNAL UNHANDLED ERROR: ",a),s}).then(s=>(this.Ru=!1,s))));return this.gu=t,t}enqueueAfterDelay(e,t,s){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const a=Nd.createAndSchedule(this,e,t,s,u=>this.Su(u));return this.du.push(a),a}pu(){this.Au&&me()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}class jy extends Vd{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new ag,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ag(e),this._firestoreClient=void 0,await e}}}function JT(i,e){const t=typeof i=="object"?i:Ug(),s=typeof i=="string"?i:"(default)",a=dd(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const u=Gv("firestore");u&&YT(a,...u)}return a}function ZT(i){if(i._terminated)throw new oe(G.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||eI(i),i._firestoreClient}function eI(i){var e,t,s;const a=i._freezeSettings(),u=function(m,y,v,w){return new zE(m,y,v,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,zy(w.experimentalLongPollingOptions),w.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,a);i._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=a.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),i._firestoreClient=new qT(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&function(m){const y=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(y),_online:y}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this._byteString=e}static fromBase64String(e){try{return new so(Rt.fromBase64String(e))}catch(t){throw new oe(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new so(Rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new oe(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new oe(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new oe(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,a){if(s.length!==a.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==a[u])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI=/^__.*__$/;function qy(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me()}}class Md{constructor(e,t,s,a,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,u===void 0&&this.Fu(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Md(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.xu({path:s,Nu:!1});return a.Lu(e),a}Bu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.xu({path:s,Nu:!1});return a.Fu(),a}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return sd(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(qy(this.Mu)&&tI.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class nI{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||zu(e)}$u(e,t,s,a=!1){return new Md({Mu:e,methodName:t,Ku:s,path:Mt.emptyPath(),Nu:!1,Qu:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rI(i){const e=i._freezeSettings(),t=zu(i._databaseId);return new nI(i._databaseId,!!e.ignoreUndefinedProperties,t)}function iI(i,e,t,s=!1){return Fd(t,i.$u(s?4:3,e))}function Fd(i,e){if(Hy(i=Nn(i)))return oI("Unsupported field value:",e,i),sI(i,e);if(i instanceof $y)return function(s,a){if(!qy(a.Mu))throw a.qu(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.qu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(a);u&&a.fieldTransforms.push(u)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(s,a){const u=[];let h=0;for(const m of s){let y=Fd(m,a.ku(h));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),h++}return{arrayValue:{values:u}}}(i,e)}return function(s,a){if((s=Nn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return lw(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Et.fromDate(s);return{timestampValue:Jh(a.serializer,u)}}if(s instanceof Et){const u=new Et(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Jh(a.serializer,u)}}if(s instanceof Ld)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof so)return{bytesValue:yy(a.serializer,s._byteString)};if(s instanceof wr){const u=a.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw a.qu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:_y(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof xd)return function(h,m){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(y=>{if(typeof y!="number")throw m.qu("VectorValues must only contain numeric values.");return vd(m.serializer,y)})}}}}}}(s,a);throw a.qu(`Unsupported field value: ${Bu(s)}`)}(i,e)}function sI(i,e){const t={};return Gg(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):co(i,(s,a)=>{const u=Fd(a,e.Ou(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function Hy(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Et||i instanceof Ld||i instanceof so||i instanceof wr||i instanceof $y||i instanceof xd)}function oI(i,e,t){if(!Hy(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const s=Bu(t);throw s==="an object"?e.qu(i+" a custom object"):e.qu(i+" "+s)}}const aI=new RegExp("[~\\*/\\[\\]]");function lI(i,e,t){if(e.search(aI)>=0)throw sd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new By(...e.split("."))._internalPath}catch{throw sd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function sd(i,e,t,s,a){const u=s&&!s.isEmpty(),h=a!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||h)&&(y+=" (found",u&&(y+=` in field ${s}`),h&&(y+=` in document ${a}`),y+=")"),new oe(G.INVALID_ARGUMENT,m+i+y)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e,t,s,a,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new wr(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ud("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class uI extends Wy{data(){return super.data()}}function Ud(i,e){return typeof e=="string"?lI(i,e):e instanceof By?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new oe(G.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bd{}class hI extends bd{}function dI(i,e,...t){let s=[];e instanceof bd&&s.push(e),s=s.concat(t),function(u){const h=u.filter(y=>y instanceof zd).length,m=u.filter(y=>y instanceof $u).length;if(h>1||h>0&&m>0)throw new oe(G.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const a of s)i=a._apply(i);return i}class $u extends hI{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new $u(e,t,s)}_apply(e){const t=this._parse(e);return Ky(e._query,t),new fo(e.firestore,e.converter,Kh(e._query,t))}_parse(e){const t=rI(e.firestore);return function(u,h,m,y,v,w,D){let U;if(v.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new oe(G.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){ug(D,w);const q=[];for(const X of D)q.push(lg(y,u,X));U={arrayValue:{values:q}}}else U=lg(y,u,D)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||ug(D,w),U=iI(m,h,D,w==="in"||w==="not-in");return at.create(v,w,U)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function fI(i,e,t){const s=e,a=Ud("where",i);return $u._create(a,s,t)}class zd extends bd{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new zd(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:Dn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(a,u){let h=a;const m=u.getFlattenedFilters();for(const y of m)Ky(h,y),h=Kh(h,y)}(e._query,t),new fo(e.firestore,e.converter,Kh(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function lg(i,e,t){if(typeof(t=Nn(t))=="string"){if(t==="")throw new oe(G.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ry(e)&&t.indexOf("/")!==-1)throw new oe(G.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Ye.fromString(t));if(!he.isDocumentKey(s))throw new oe(G.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return km(i,new he(s))}if(t instanceof wr)return km(i,t._key);throw new oe(G.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Bu(t)}.`)}function ug(i,e){if(!Array.isArray(i)||i.length===0)throw new oe(G.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ky(i,e){const t=function(a,u){for(const h of a)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null}(i.filters,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new oe(G.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new oe(G.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class pI{convertValue(e,t="none"){switch(ai(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(oi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw me()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return co(e,(a,u)=>{s[a]=this.convertValue(u,t)}),s}convertVectorValue(e){var t,s,a;const u=(a=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||a===void 0?void 0:a.map(h=>nt(h.doubleValue));return new xd(u)}convertGeoPoint(e){return new Ld(nt(e.latitude),nt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Lu(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ia(e));default:return null}}convertTimestamp(e){const t=si(e);return new Et(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ye.fromString(e);Xe(Sy(s));const a=new Sa(s.get(1),s.get(3)),u=new he(s.popFirst(5));return a.isEqual(t)||_r(`Document ${u} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mI extends Wy{constructor(e,t,s,a,u,h){super(e,t,s,a,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new cu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Ud("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class cu extends mI{data(e={}){return super.data(e)}}class gI{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new iu(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new cu(this._firestore,this._userDataWriter,s.key,s,new iu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new oe(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(a,u){if(a._snapshot.oldDocs.isEmpty()){let h=0;return a._snapshot.docChanges.map(m=>{const y=new cu(a._firestore,a._userDataWriter,m.doc.key,m.doc,new iu(a._snapshot.mutatedKeys.has(m.doc.key),a._snapshot.fromCache),a.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}})}{let h=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const y=new cu(a._firestore,a._userDataWriter,m.doc.key,m.doc,new iu(a._snapshot.mutatedKeys.has(m.doc.key),a._snapshot.fromCache),a.query.converter);let v=-1,w=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:yI(m.type),doc:y,oldIndex:v,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function yI(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me()}}class _I extends pI{constructor(e){super(),this.firestore=e}convertBytes(e){return new so(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new wr(this.firestore,null,t)}}function vI(i){i=id(i,fo);const e=id(i.firestore,jy),t=ZT(e),s=new _I(e);return cI(i._query),GT(t,i._query).then(a=>new gI(e,s,i,a))}(function(e,t=!0){(function(a){lo=a})(ao),Js(new $i("firestore",(s,{instanceIdentifier:a,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new jy(new TE(s.getProvider("auth-internal")),new RE(s.getProvider("app-check-internal")),function(v,w){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new oe(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Sa(v.options.projectId,w)}(h,a),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),ni(Im,"4.7.5",e),ni(Im,"4.7.5","esm2017")})();var EI="firebase",wI="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ni(EI,wI,"app");const Gy={apiKey:"AIzaSyC7nvs7dMx9wmKFZ3x9Yp5LfRGpi_gdjG4",authDomain:"harjoitustyo-fc459.firebaseapp.com",projectId:"harjoitustyo-fc459",storageBucket:"harjoitustyo-fc459.firebasestorage.app",messagingSenderId:"994470831257",appId:"1:994470831257:web:8edf4f8c93256f312c8408"},TI=fd(Gy),II=JT(TI);async function SI(i){const e=XT(II,"books"),t=dI(e,fI("genre","==",i));try{const a=(await vI(t)).docs.map(h=>({id:h.id,...h.data()}));if(a.length===0)throw new Error("No books found for this genre.");return a[Math.floor(Math.random()*a.length)]}catch(s){throw console.error("Error fetching books:",s),s}}function AI(){const[i,e]=Hs.useState(null),[t,s]=Hs.useState(null),a=async h=>{e(null),s(null);try{const m=await SI(h);e(m)}catch(m){s(m.message)}},u=["fantasy","science fiction","romance"];return Me.jsxs("div",{children:[Me.jsx("h1",{children:"Book Recommender"}),Me.jsx("div",{children:u.map(h=>Me.jsx("button",{onClick:()=>a(h),children:h},h))}),i&&Me.jsxs("div",{children:[Me.jsx("h2",{children:"Recommended Book:"}),Me.jsxs("p",{children:[Me.jsx("strong",{children:"Title:"})," ",i.title]}),Me.jsxs("p",{children:[Me.jsx("strong",{children:"Genre:"})," ",i.genre]})]}),t&&Me.jsx("p",{style:{color:"red"},children:t})]})}function jd(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(i);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(i,s[a])&&(t[s[a]]=i[s[a]]);return t}function Qy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RI=Qy,Yy=new Pa("auth","Firebase",Qy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au=new cd("@firebase/auth");function CI(i,...e){Au.logLevel<=Ie.WARN&&Au.warn(`Auth (${ao}): ${i}`,...e)}function hu(i,...e){Au.logLevel<=Ie.ERROR&&Au.error(`Auth (${ao}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(i,...e){throw Bd(i,...e)}function Wn(i,...e){return Bd(i,...e)}function Xy(i,e,t){const s=Object.assign(Object.assign({},RI()),{[e]:t});return new Pa("auth","Firebase",s).create(e,{appName:i.name})}function ri(i){return Xy(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Bd(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return Yy.create(i,...e)}function de(i,e,...t){if(!i)throw Bd(e,...t)}function pr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw hu(e),new Error(e)}function vr(i,e){i||pr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function PI(){return cg()==="http:"||cg()==="https:"}function cg(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(PI()||e0()||"connection"in navigator)?navigator.onLine:!0}function NI(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,t){this.shortDelay=e,this.longDelay=t,vr(t>e,"Short delay should be less than long delay!"),this.isMobile=Xv()||t0()}get(){return kI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(i,e){vr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI=new La(3e4,6e4);function Ki(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function ui(i,e,t,s,a={}){return Zy(i,a,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=ka(Object.assign({key:i.config.apiKey},h)).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const v=Object.assign({method:e,headers:y},u);return Zv()||(v.referrerPolicy="no-referrer"),Jy.fetch()(e_(i,i.config.apiHost,t,m),v)})}async function Zy(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},DI),e);try{const a=new LI(i),u=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw su(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[y,v]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw su(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw su(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw su(i,"user-disabled",h);const w=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw Xy(i,w,v);On(i,w)}}catch(a){if(a instanceof Er)throw a;On(i,"network-request-failed",{message:String(a)})}}async function qu(i,e,t,s,a={}){const u=await ui(i,e,t,s,a);return"mfaPendingCredential"in u&&On(i,"multi-factor-auth-required",{_serverResponse:u}),u}function e_(i,e,t,s){const a=`${e}${t}?${s}`;return i.config.emulator?$d(i.config,a):`${i.config.apiScheme}://${a}`}function VI(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class LI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Wn(this.auth,"network-request-failed")),OI.get())})}}function su(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=Wn(i,e,s);return a.customData._tokenResponse=t,a}function hg(i){return i!==void 0&&i.enterprise!==void 0}class xI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return VI(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function MI(i,e){return ui(i,"GET","/v2/recaptchaConfig",Ki(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FI(i,e){return ui(i,"POST","/v1/accounts:delete",e)}async function t_(i,e){return ui(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function UI(i,e=!1){const t=Nn(i),s=await t.getIdToken(e),a=qd(s);de(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const u=typeof a.firebase=="object"?a.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:a,token:s,authTime:Ea(xh(a.auth_time)),issuedAtTime:Ea(xh(a.iat)),expirationTime:Ea(xh(a.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function xh(i){return Number(i)*1e3}function qd(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return hu("JWT malformed, contained fewer than 3 sections"),null;try{const a=Og(t);return a?JSON.parse(a):(hu("Failed to decode base64 JWT payload"),null)}catch(a){return hu("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function dg(i){const e=qd(i);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ra(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Er&&bI(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function bI({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ea(this.lastLoginAt),this.creationTime=Ea(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ru(i){var e;const t=i.auth,s=await i.getIdToken(),a=await Ra(i,t_(t,{idToken:s}));de(a==null?void 0:a.users.length,t,"internal-error");const u=a.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?n_(u.providerUserInfo):[],m=BI(i.providerData,h),y=i.isAnonymous,v=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),w=y?v:!1,D={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new ad(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(i,D)}async function jI(i){const e=Nn(i);await Ru(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BI(i,e){return[...i.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function n_(i){return i.map(e=>{var{providerId:t}=e,s=jd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $I(i,e){const t=await Zy(i,{},async()=>{const s=ka({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:u}=i.config,h=e_(i,a,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",Jy.fetch()(h,{method:"POST",headers:m,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function qI(i,e){return ui(i,"POST","/v2/accounts:revokeToken",Ki(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){de(e.length!==0,"internal-error");const t=dg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:u}=await $I(e,t);this.updateTokensAndExpiration(s,a,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:u}=t,h=new Qs;return s&&(de(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),a&&(de(typeof a=="string","internal-error",{appName:e}),h.accessToken=a),u&&(de(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qs,this.toJSON())}_performRefresh(){return pr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(i,e){de(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class mr{constructor(e){var{uid:t,auth:s,stsTokenManager:a}=e,u=jd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new ad(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Ra(this,this.stsTokenManager.getToken(this.auth,e));return de(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return UI(this,e)}reload(){return jI(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new mr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Ru(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fr(this.auth.app))return Promise.reject(ri(this.auth));const e=await this.getIdToken();return await Ra(this,FI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,a,u,h,m,y,v,w;const D=(s=t.displayName)!==null&&s!==void 0?s:void 0,U=(a=t.email)!==null&&a!==void 0?a:void 0,q=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,X=(h=t.photoURL)!==null&&h!==void 0?h:void 0,J=(m=t.tenantId)!==null&&m!==void 0?m:void 0,K=(y=t._redirectEventId)!==null&&y!==void 0?y:void 0,Ae=(v=t.createdAt)!==null&&v!==void 0?v:void 0,Te=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:ge,emailVerified:_e,isAnonymous:He,providerData:we,stsTokenManager:k}=t;de(ge&&k,e,"internal-error");const I=Qs.fromJSON(this.name,k);de(typeof ge=="string",e,"internal-error"),Kr(D,e.name),Kr(U,e.name),de(typeof _e=="boolean",e,"internal-error"),de(typeof He=="boolean",e,"internal-error"),Kr(q,e.name),Kr(X,e.name),Kr(J,e.name),Kr(K,e.name),Kr(Ae,e.name),Kr(Te,e.name);const A=new mr({uid:ge,auth:e,email:U,emailVerified:_e,displayName:D,isAnonymous:He,photoURL:X,phoneNumber:q,tenantId:J,stsTokenManager:I,createdAt:Ae,lastLoginAt:Te});return we&&Array.isArray(we)&&(A.providerData=we.map(C=>Object.assign({},C))),K&&(A._redirectEventId=K),A}static async _fromIdTokenResponse(e,t,s=!1){const a=new Qs;a.updateFromServerResponse(t);const u=new mr({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await Ru(u),u}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];de(a.localId!==void 0,"internal-error");const u=a.providerUserInfo!==void 0?n_(a.providerUserInfo):[],h=!(a.email&&a.passwordHash)&&!(u!=null&&u.length),m=new Qs;m.updateFromIdToken(s);const y=new mr({uid:a.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:u,metadata:new ad(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,v),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg=new Map;function gr(i){vr(i instanceof Function,"Expected a class definition");let e=fg.get(i);return e?(vr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,fg.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}r_.type="NONE";const pg=r_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(i,e,t){return`firebase:${i}:${e}:${t}`}class Ys{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:u}=this.auth;this.fullUserKey=du(this.userKey,a.apiKey,u),this.fullPersistenceKey=du("persistence",a.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Ys(gr(pg),e,s);const a=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=a[0]||gr(pg);const h=du(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const w=await v._get(h);if(w){const D=mr._fromJSON(e,w);v!==u&&(m=D),u=v;break}}catch{}const y=a.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new Ys(u,e,s):(u=y[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new Ys(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(a_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(i_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(u_(e))return"Blackberry";if(c_(e))return"Webos";if(s_(e))return"Safari";if((e.includes("chrome/")||o_(e))&&!e.includes("edge/"))return"Chrome";if(l_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function i_(i=Ft()){return/firefox\//i.test(i)}function s_(i=Ft()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function o_(i=Ft()){return/crios\//i.test(i)}function a_(i=Ft()){return/iemobile/i.test(i)}function l_(i=Ft()){return/android/i.test(i)}function u_(i=Ft()){return/blackberry/i.test(i)}function c_(i=Ft()){return/webos/i.test(i)}function Hd(i=Ft()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function HI(i=Ft()){var e;return Hd(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function WI(){return n0()&&document.documentMode===10}function h_(i=Ft()){return Hd(i)||l_(i)||c_(i)||u_(i)||/windows phone/i.test(i)||a_(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(i,e=[]){let t;switch(i){case"Browser":t=mg(Ft());break;case"Worker":t=`${mg(Ft())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ao}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const y=e(u);h(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GI(i,e={}){return ui(i,"GET","/v2/passwordPolicy",Ki(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=6;class YI{constructor(e){var t,s,a,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:QI,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,a,u,h,m;const y={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,y),this.validatePasswordCharacterOptions(e,y),y.isValid&&(y.isValid=(t=y.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),y.isValid&&(y.isValid=(s=y.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),y.isValid&&(y.isValid=(a=y.containsLowercaseLetter)!==null&&a!==void 0?a:!0),y.isValid&&(y.isValid=(u=y.containsUppercaseLetter)!==null&&u!==void 0?u:!0),y.isValid&&(y.isValid=(h=y.containsNumericCharacter)!==null&&h!==void 0?h:!0),y.isValid&&(y.isValid=(m=y.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),y}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gg(this),this.idTokenSubscription=new gg(this),this.beforeStateQueue=new KI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=gr(t)),this._initializationPromise=this.queue(async()=>{var s,a;if(!this._deleted&&(this.persistenceManager=await Ys.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await t_(this,{idToken:e}),s=await mr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(fr(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=a==null?void 0:a._redirectEventId,y=await this.tryRedirectSignIn(e);(!h||h===m)&&(y!=null&&y.user)&&(a=y.user,u=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(a)}catch(h){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ru(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=NI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fr(this.app))return Promise.reject(ri(this));const t=e?Nn(e):null;return t&&de(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fr(this.app)?Promise.reject(ri(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fr(this.app)?Promise.reject(ri(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await GI(this),t=new YI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pa("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await qI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&gr(e)||this._popupRedirectResolver;de(t,this,"argument-error"),this.redirectPersistenceManager=await Ys.create(this,[gr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,a);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=d_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&CI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function po(i){return Nn(i)}class gg{constructor(e){this.auth=e,this.observer=null,this.addObserver=c0(t=>this.observer=t)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function JI(i){Hu=i}function f_(i){return Hu.loadJS(i)}function ZI(){return Hu.recaptchaEnterpriseScript}function e1(){return Hu.gapiScript}function t1(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class n1{constructor(){this.enterprise=new r1}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class r1{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const i1="recaptcha-enterprise",p_="NO_RECAPTCHA";class s1{constructor(e){this.type=i1,this.auth=po(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{MI(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(y=>{if(y.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const v=new xI(y);return u.tenantId==null?u._agentRecaptchaConfig=v:u._tenantRecaptchaConfigs[u.tenantId]=v,h(v.siteKey)}}).catch(y=>{m(y)})})}function a(u,h,m){const y=window.grecaptcha;hg(y)?y.enterprise.ready(()=>{y.enterprise.execute(u,{action:e}).then(v=>{h(v)}).catch(()=>{h(p_)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new n1().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(m=>{if(!t&&hg(window.grecaptcha))a(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let y=ZI();y.length!==0&&(y+=m),f_(y).then(()=>{a(m,u,h)}).catch(v=>{h(v)})}}).catch(m=>{h(m)})})}}async function yg(i,e,t,s=!1,a=!1){const u=new s1(i);let h;if(a)h=p_;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const m=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const y=m.phoneEnrollmentInfo.phoneNumber,v=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:y,recaptchaToken:v,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const y=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function _g(i,e,t,s,a){var u;if(!((u=i._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await yg(i,e,t,t==="getOobCode");return s(i,h)}else return s(i,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await yg(i,e,t,t==="getOobCode");return s(i,m)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(i,e){const t=dd(i,"auth");if(t.isInitialized()){const a=t.getImmediate(),u=t.getOptions();if(gu(u,e??{}))return a;On(a,"already-initialized")}return t.initialize({options:e})}function a1(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(gr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function l1(i,e,t){const s=po(i);de(s._canInitEmulator,s,"emulator-config-failed"),de(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,u=m_(e),{host:h,port:m}=u1(e),y=m===null?"":`:${m}`;s.config.emulator={url:`${u}//${h}${y}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:a})}),c1()}function m_(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function u1(i){const e=m_(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const u=a[1];return{host:u,port:vg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:vg(h)}}}function vg(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function c1(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return pr("not implemented")}_getIdTokenResponse(e){return pr("not implemented")}_linkToIdToken(e,t){return pr("not implemented")}_getReauthenticationResolver(e){return pr("not implemented")}}async function h1(i,e){return ui(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d1(i,e){return qu(i,"POST","/v1/accounts:signInWithPassword",Ki(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f1(i,e){return qu(i,"POST","/v1/accounts:signInWithEmailLink",Ki(i,e))}async function p1(i,e){return qu(i,"POST","/v1/accounts:signInWithEmailLink",Ki(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca extends Wd{constructor(e,t,s,a=null){super("password",s),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new Ca(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ca(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _g(e,t,"signInWithPassword",d1);case"emailLink":return f1(e,{email:this._email,oobCode:this._password});default:On(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _g(e,s,"signUpPassword",h1);case"emailLink":return p1(e,{idToken:t,email:this._email,oobCode:this._password});default:On(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xs(i,e){return qu(i,"POST","/v1/accounts:signInWithIdp",Ki(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1="http://localhost";class Hi extends Wd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Hi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):On("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a}=t,u=jd(t,["providerId","signInMethod"]);if(!s||!a)return null;const h=new Hi(s,a);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Xs(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Xs(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xs(e,t)}buildRequest(){const e={requestUri:m1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ka(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g1(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function y1(i){const e=ha(da(i)).link,t=e?ha(da(e)).deep_link_id:null,s=ha(da(i)).deep_link_id;return(s?ha(da(s)).link:null)||s||t||e||i}class Kd{constructor(e){var t,s,a,u,h,m;const y=ha(da(e)),v=(t=y.apiKey)!==null&&t!==void 0?t:null,w=(s=y.oobCode)!==null&&s!==void 0?s:null,D=g1((a=y.mode)!==null&&a!==void 0?a:null);de(v&&w&&D,"argument-error"),this.apiKey=v,this.operation=D,this.code=w,this.continueUrl=(u=y.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=y.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(m=y.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const t=y1(e);try{return new Kd(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(){this.providerId=mo.PROVIDER_ID}static credential(e,t){return Ca._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Kd.parseLink(t);return de(s,"argument-error"),Ca._fromEmailAndCode(e,s.code,s.tenantId)}}mo.PROVIDER_ID="password";mo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";mo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa extends g_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends xa{constructor(){super("facebook.com")}static credential(e){return Hi._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gr.credentialFromTaggedObject(e)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gr.credential(e.oauthAccessToken)}catch{return null}}}Gr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends xa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Hi._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Qr.credential(t,s)}catch{return null}}}Qr.GOOGLE_SIGN_IN_METHOD="google.com";Qr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends xa{constructor(){super("github.com")}static credential(e){return Hi._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yr.credential(e.oauthAccessToken)}catch{return null}}}Yr.GITHUB_SIGN_IN_METHOD="github.com";Yr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends xa{constructor(){super("twitter.com")}static credential(e,t){return Hi._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Xr.credential(t,s)}catch{return null}}}Xr.TWITTER_SIGN_IN_METHOD="twitter.com";Xr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const u=await mr._fromIdTokenResponse(e,s,a),h=Eg(s);return new oo({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=Eg(s);return new oo({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function Eg(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu extends Er{constructor(e,t,s,a){var u;super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,Cu.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new Cu(e,t,s,a)}}function y_(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Cu._fromErrorAndOperation(i,u,e,s):u})}async function _1(i,e,t=!1){const s=await Ra(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return oo._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v1(i,e,t=!1){const{auth:s}=i;if(fr(s.app))return Promise.reject(ri(s));const a="reauthenticate";try{const u=await Ra(i,y_(s,a,e,i),t);de(u.idToken,s,"internal-error");const h=qd(u.idToken);de(h,s,"internal-error");const{sub:m}=h;return de(i.uid===m,s,"user-mismatch"),oo._forOperation(i,a,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&On(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function __(i,e,t=!1){if(fr(i.app))return Promise.reject(ri(i));const s="signIn",a=await y_(i,s,e),u=await oo._fromIdTokenResponse(i,s,a);return t||await i._updateCurrentUser(u.user),u}async function E1(i,e){return __(po(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w1(i){const e=po(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function T1(i,e,t){return fr(i.app)?Promise.reject(ri(i)):E1(Nn(i),mo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&w1(i),s})}function I1(i,e,t,s){return Nn(i).onIdTokenChanged(e,t,s)}function S1(i,e,t){return Nn(i).beforeAuthStateChanged(e,t)}const Pu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Pu,"1"),this.storage.removeItem(Pu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1=1e3,R1=10;class E_ extends v_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=h_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);WI()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,R1):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},A1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}E_.type="LOCAL";const C1=E_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_ extends v_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}w_.type="SESSION";const T_=w_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P1(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new Wu(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:u}=t.data,h=this.handlersMap[a];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const m=Array.from(h).map(async v=>v(t.origin,u)),y=await P1(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let u,h;return new Promise((m,y)=>{const v=Gd("",20);a.port1.start();const w=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:a,onMessage(D){const U=D;if(U.data.eventId===v)switch(U.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(U.data.response);break;default:clearTimeout(w),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(h),a.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[a.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(){return window}function N1(i){Kn().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(){return typeof Kn().WorkerGlobalScope<"u"&&typeof Kn().importScripts=="function"}async function D1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function O1(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function V1(){return I_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_="firebaseLocalStorageDb",L1=1,ku="firebaseLocalStorage",A_="fbase_key";class Ma{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ku(i,e){return i.transaction([ku],e?"readwrite":"readonly").objectStore(ku)}function x1(){const i=indexedDB.deleteDatabase(S_);return new Ma(i).toPromise()}function ld(){const i=indexedDB.open(S_,L1);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(ku,{keyPath:A_})}catch(a){t(a)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(ku)?e(s):(s.close(),await x1(),e(await ld()))})})}async function wg(i,e,t){const s=Ku(i,!0).put({[A_]:e,value:t});return new Ma(s).toPromise()}async function M1(i,e){const t=Ku(i,!1).get(e),s=await new Ma(t).toPromise();return s===void 0?null:s.value}function Tg(i,e){const t=Ku(i,!0).delete(e);return new Ma(t).toPromise()}const F1=800,U1=3;class R_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ld(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>U1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return I_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wu._getInstance(V1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await D1(),!this.activeServiceWorker)return;this.sender=new k1(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||O1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ld();return await wg(e,Pu,"1"),await Tg(e,Pu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>wg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>M1(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Tg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const u=Ku(a,!1).getAll();return new Ma(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:u}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(u)&&(this.notifyListeners(a,u),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),F1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}R_.type="LOCAL";const b1=R_;new La(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z1(i,e){return e?gr(e):(de(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd extends Wd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xs(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Xs(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Xs(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function j1(i){return __(i.auth,new Qd(i),i.bypassAuthState)}function B1(i){const{auth:e,user:t}=i;return de(t,e,"internal-error"),v1(t,new Qd(i),i.bypassAuthState)}async function $1(i){const{auth:e,user:t}=i;return de(t,e,"internal-error"),_1(t,new Qd(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,t,s,a,u=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return j1;case"linkViaPopup":case"linkViaRedirect":return $1;case"reauthViaPopup":case"reauthViaRedirect":return B1;default:On(this.auth,"internal-error")}}resolve(e){vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1=new La(2e3,1e4);class qs extends C_{constructor(e,t,s,a,u){super(e,t,a,u),this.provider=s,this.authWindow=null,this.pollId=null,qs.currentPopupAction&&qs.currentPopupAction.cancel(),qs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){vr(this.filter.length===1,"Popup operations only handle one event");const e=Gd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,q1.get())};e()}}qs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1="pendingRedirect",fu=new Map;class W1 extends C_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=fu.get(this.auth._key());if(!e){try{const s=await K1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}fu.set(this.auth._key(),e)}return this.bypassAuthState||fu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function K1(i,e){const t=Y1(e),s=Q1(i);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function G1(i,e){fu.set(i._key(),e)}function Q1(i){return gr(i._redirectPersistence)}function Y1(i){return du(H1,i.config.apiKey,i.name)}async function X1(i,e,t=!1){if(fr(i.app))return Promise.reject(ri(i));const s=po(i),a=z1(s,e),h=await new W1(s,a,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1=10*60*1e3;class Z1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!eS(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!P_(e)){const a=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Wn(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=J1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ig(e))}saveEventToCache(e){this.cachedEventUids.add(Ig(e)),this.lastProcessedEventTime=Date.now()}}function Ig(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function P_({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function eS(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return P_(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tS(i,e={}){return ui(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rS=/^https?/;async function iS(i){if(i.config.emulator)return;const{authorizedDomains:e}=await tS(i);for(const t of e)try{if(sS(t))return}catch{}On(i,"unauthorized-domain")}function sS(i){const e=od(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!rS.test(t))return!1;if(nS.test(i))return s===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS=new La(3e4,6e4);function Sg(){const i=Kn().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function aS(i){return new Promise((e,t)=>{var s,a,u;function h(){Sg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sg(),t(Wn(i,"network-request-failed"))},timeout:oS.get()})}if(!((a=(s=Kn().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((u=Kn().gapi)===null||u===void 0)&&u.load)h();else{const m=t1("iframefcb");return Kn()[m]=()=>{gapi.load?h():t(Wn(i,"network-request-failed"))},f_(`${e1()}?onload=${m}`).catch(y=>t(y))}}).catch(e=>{throw pu=null,e})}let pu=null;function lS(i){return pu=pu||aS(i),pu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS=new La(5e3,15e3),cS="__/auth/iframe",hS="emulator/auth/iframe",dS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pS(i){const e=i.config;de(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?$d(e,hS):`https://${i.config.authDomain}/${cS}`,s={apiKey:e.apiKey,appName:i.name,v:ao},a=fS.get(i.config.apiHost);a&&(s.eid=a);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${ka(s).slice(1)}`}async function mS(i){const e=await lS(i),t=Kn().gapi;return de(t,i,"internal-error"),e.open({where:document.body,url:pS(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dS,dontclear:!0},s=>new Promise(async(a,u)=>{await s.restyle({setHideOnLeave:!1});const h=Wn(i,"network-request-failed"),m=Kn().setTimeout(()=>{u(h)},uS.get());function y(){Kn().clearTimeout(m),a(s)}s.ping(y).then(y,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yS=500,_S=600,vS="_blank",ES="http://localhost";class Ag{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wS(i,e,t,s=yS,a=_S){const u=Math.max((window.screen.availHeight-a)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y=Object.assign(Object.assign({},gS),{width:s.toString(),height:a.toString(),top:u,left:h}),v=Ft().toLowerCase();t&&(m=o_(v)?vS:t),i_(v)&&(e=e||ES,y.scrollbars="yes");const w=Object.entries(y).reduce((U,[q,X])=>`${U}${q}=${X},`,"");if(HI(v)&&m!=="_self")return TS(e||"",m),new Ag(null);const D=window.open(e||"",m,w);de(D,i,"popup-blocked");try{D.focus()}catch{}return new Ag(D)}function TS(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS="__/auth/handler",SS="emulator/auth/handler",AS=encodeURIComponent("fac");async function Rg(i,e,t,s,a,u){de(i.config.authDomain,i,"auth-domain-config-required"),de(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:ao,eventId:a};if(e instanceof g_){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",u0(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,D]of Object.entries({}))h[w]=D}if(e instanceof xa){const w=e.getScopes().filter(D=>D!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const y=await i._getAppCheckToken(),v=y?`#${AS}=${encodeURIComponent(y)}`:"";return`${RS(i)}?${ka(m).slice(1)}${v}`}function RS({config:i}){return i.emulator?$d(i,SS):`https://${i.authDomain}/${IS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh="webStorageSupport";class CS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=T_,this._completeRedirectFn=X1,this._overrideRedirectResult=G1}async _openPopup(e,t,s,a){var u;vr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await Rg(e,t,s,od(),a);return wS(e,h,Gd())}async _openRedirect(e,t,s,a){await this._originValidation(e);const u=await Rg(e,t,s,od(),a);return N1(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:u}=this.eventManagers[t];return a?Promise.resolve(a):(vr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await mS(e),s=new Z1(e);return t.register("authEvent",a=>(de(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Mh,{type:Mh},a=>{var u;const h=(u=a==null?void 0:a[0])===null||u===void 0?void 0:u[Mh];h!==void 0&&t(!!h),On(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=iS(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return h_()||s_()||Hd()}}const PS=CS;var Cg="@firebase/auth",Pg="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function DS(i){Js(new $i("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;de(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:d_(i)},v=new XI(s,a,u,y);return a1(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Js(new $i("auth-internal",e=>{const t=po(e.getProvider("auth").getImmediate());return(s=>new kS(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ni(Cg,Pg,NS(i)),ni(Cg,Pg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS=5*60,VS=xg("authIdTokenMaxAge")||OS;let kg=null;const LS=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>VS)return;const a=t==null?void 0:t.token;kg!==a&&(kg=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function xS(i=Ug()){const e=dd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=o1(i,{popupRedirectResolver:PS,persistence:[b1,C1,T_]}),s=xg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=LS(u.toString());S1(t,h,()=>h(t.currentUser)),I1(t,m=>h(m))}}const a=Vg("auth");return a&&l1(t,`http://${a}`),t}function MS(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}JI({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=a=>{const u=Wn("internal-error");u.customData=a,t(u)},s.type="text/javascript",s.charset="UTF-8",MS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});DS("Browser");function FS(){const i=fd(Gy),e=xS(i),[t,s]=Hs.useState(""),[a,u]=Hs.useState(""),[h,m]=Hs.useState(null),y=async v=>{v.preventDefault(),m(null);try{const D=(await T1(e,t,a)).user;m(`Welcome, ${D.email}.`)}catch{m("Log in failed.")}};return Me.jsxs("div",{children:[Me.jsxs("form",{onSubmit:y,children:[Me.jsxs("div",{children:[Me.jsx("label",{htmlFor:"email",children:"Email:"}),Me.jsx("input",{type:"email",id:"email",value:t,onChange:v=>s(v.target.value),required:!0})]}),Me.jsxs("div",{children:[Me.jsx("label",{htmlFor:"password",children:"Password:"}),Me.jsx("input",{type:"password",id:"password",value:a,onChange:v=>u(v.target.value),required:!0})]}),Me.jsx("button",{type:"submit",children:"Log In"})]}),h&&Me.jsx("p",{children:h})]})}function US(){return Me.jsxs(Me.Fragment,{children:[Me.jsx("div",{children:Me.jsx("h1",{children:"The Book Recommender"})}),Me.jsx("div",{children:Me.jsx(FS,{})}),Me.jsx("div",{children:Me.jsx(AI,{})})]})}zv.createRoot(document.getElementById("root")).render(Me.jsx(Hs.StrictMode,{children:Me.jsx(US,{})}));
