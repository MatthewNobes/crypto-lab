import{S as ne,i as le,s as ie,k as l,x as Z,e as o,t as C,K as oe,d as s,m as i,y as ee,c,a as u,h as k,b as h,g as b,z as te,J as t,L as ce,n as pe,r as ae,p as re,C as se}from"../chunks/index-c0a9829e.js";import{H as fe,N as me}from"../chunks/Header-9aa5962e.js";const ue=(I,p)=>{let n="";return[...p].forEach(v=>{let f=v.charCodeAt(0)-97+I;console.log(f),f>25&&(f=f-26),n+=String.fromCharCode(f+97)}),console.log(n),n};function he(I){let p,n,v,_,f,P,y,q,a,g,N,R,$,V,A,H,L,d,O,T,U,X,S,z,B,E,D,x,J,w,K,j;return n=new fe({}),y=new me({}),{c(){p=l(),Z(n.$$.fragment),v=l(),_=o("h1"),f=C("Caesar Cipher"),P=l(),Z(y.$$.fragment),q=l(),a=o("div"),g=o("p"),N=C("Enter your text to encrypt here:"),R=l(),$=o("textarea"),V=l(),A=o("p"),H=C("Please select a key to shift by:"),L=l(),d=o("input"),O=l(),T=o("p"),U=C("Please note, shifting by a key greater than 25 will act as a shift from 0."),X=l(),S=o("p"),z=C("Result"),B=l(),E=o("textarea"),D=l(),x=o("button"),J=C("Encrypt"),this.h()},l(e){oe('[data-svelte="svelte-121m9qq"]',document.head).forEach(s),p=i(e),ee(n.$$.fragment,e),v=i(e),_=c(e,"H1",{});var F=u(_);f=k(F,"Caesar Cipher"),F.forEach(s),P=i(e),ee(y.$$.fragment,e),q=i(e),a=c(e,"DIV",{});var r=u(a);g=c(r,"P",{});var G=u(g);N=k(G,"Enter your text to encrypt here:"),G.forEach(s),R=i(r),$=c(r,"TEXTAREA",{id:!0,name:!0}),u($).forEach(s),V=i(r),A=c(r,"P",{});var M=u(A);H=k(M,"Please select a key to shift by:"),M.forEach(s),L=i(r),d=c(r,"INPUT",{type:!0,id:!0,name:!0,min:!0,max:!0}),O=i(r),T=c(r,"P",{});var Q=u(T);U=k(Q,"Please note, shifting by a key greater than 25 will act as a shift from 0."),Q.forEach(s),X=i(r),S=c(r,"P",{});var W=u(S);z=k(W,"Result"),W.forEach(s),B=i(r),E=c(r,"TEXTAREA",{id:!0,name:!0}),u(E).forEach(s),D=i(r),x=c(r,"BUTTON",{});var Y=u(x);J=k(Y,"Encrypt"),Y.forEach(s),r.forEach(s),this.h()},h(){document.title="Caesar Cipher",h($,"id","message"),h($,"name","message"),h(d,"type","number"),h(d,"id","key"),h(d,"name","key"),h(d,"min","0"),h(d,"max","25"),E.readOnly=!0,h(E,"id","ciphertext"),h(E,"name","ciphertext")},m(e,m){b(e,p,m),te(n,e,m),b(e,v,m),b(e,_,m),t(_,f),b(e,P,m),te(y,e,m),b(e,q,m),b(e,a,m),t(a,g),t(g,N),t(a,R),t(a,$),t(a,V),t(a,A),t(A,H),t(a,L),t(a,d),t(a,O),t(a,T),t(T,U),t(a,X),t(a,S),t(S,z),t(a,B),t(a,E),t(a,D),t(a,x),t(x,J),w=!0,K||(j=ce(x,"click",I[0]),K=!0)},p:pe,i(e){w||(ae(n.$$.fragment,e),ae(y.$$.fragment,e),w=!0)},o(e){re(n.$$.fragment,e),re(y.$$.fragment,e),w=!1},d(e){e&&s(p),se(n,e),e&&s(v),e&&s(_),e&&s(P),se(y,e),e&&s(q),e&&s(a),K=!1,j()}}}function de(I){return[()=>ciphertext.value=ue(parseInt(key.value),message.value)]}class Ee extends ne{constructor(p){super(),le(this,p,de,he,ie,{})}}export{Ee as default};