(this["webpackJsonpbuildspace-solana"]=this["webpackJsonpbuildspace-solana"]||[]).push([[0],{111:function(e){e.exports=JSON.parse('{"_keypair":{"publicKey":{"0":215,"1":52,"2":228,"3":58,"4":4,"5":91,"6":6,"7":168,"8":79,"9":146,"10":29,"11":143,"12":167,"13":68,"14":209,"15":208,"16":121,"17":155,"18":33,"19":252,"20":62,"21":167,"22":156,"23":92,"24":34,"25":89,"26":235,"27":197,"28":61,"29":59,"30":8,"31":26},"secretKey":{"0":238,"1":218,"2":223,"3":212,"4":241,"5":179,"6":108,"7":100,"8":111,"9":235,"10":30,"11":174,"12":129,"13":167,"14":108,"15":231,"16":144,"17":146,"18":1,"19":46,"20":78,"21":224,"22":248,"23":160,"24":98,"25":43,"26":50,"27":98,"28":227,"29":86,"30":239,"31":44,"32":215,"33":52,"34":228,"35":58,"36":4,"37":91,"38":6,"39":168,"40":79,"41":146,"42":29,"43":143,"44":167,"45":68,"46":209,"47":208,"48":121,"49":155,"50":33,"51":252,"52":62,"53":167,"54":156,"55":92,"56":34,"57":89,"58":235,"59":197,"60":61,"61":59,"62":8,"63":26}}}')},124:function(e,t,n){},126:function(e,t,n){},127:function(e,t){},130:function(e,t){},154:function(e,t){},155:function(e,t){},180:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(34),s=n.n(c),i=(n(123),n(124),n(3)),o=n(5),u=n(9),l=n(1),d=n.n(l),p=n.p+"static/media/twitter-logo.d89d9a86.svg",b=(n(126),n(182)),f=n(63),m=n(12),j=n(38),x=n(111),h=n(16),v=j.d.SystemProgram,g=j.d.Keypair,O=Object.values(x._keypair.secretKey),w=new Uint8Array(O),y=g.fromSecretKey(w),k=new m.PublicKey(f.metadata.address),N=Object(m.clusterApiUrl)("devnet"),S="processed",K="HenshawSamuel",W="https://twitter.com/".concat(K),A=function(){var e=Object(a.useState)({isWallet:!1,address:null}),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),s=Object(u.a)(c,2),l=s[0],x=s[1],g=Object(a.useState)(""),O=Object(u.a)(g,2),w=O[0],A=O[1],I=Object(a.useState)([]),P=Object(u.a)(I,2),G=P[0],L=P[1],F=function(){var e=new m.Connection(N,S);return new j.b(e,window.solana,S)},M=function(){var e=Object(o.a)(d.a.mark((function e(){var t,n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=F(),n=new j.a(f,k,t),e.next=5,n.account.baseAccount.fetch(y.publicKey);case 5:a=e.sent,L(a.gifList),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),L(null);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(o.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=F(),n=new j.a(f,k,t),e.next=5,n.rpc.initialize({accounts:{baseAccount:y.publicKey,user:t.wallet.publicKey,systemProgram:v.programId},signers:[y]});case 5:return e.next=7,M();case 7:e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(o.a)(d.a.mark((function e(){var t,a,c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=window,a=t.solana){e.next=5;break}return r(Object(i.a)(Object(i.a)({},n),{},{isWallet:!1})),e.abrupt("return",b.a.error({message:"",description:"Solana object not found! Get a Phantom Wallet \ud83d\udc7b"}));case 5:if(!a.isPhantom){e.next=11;break}return e.next=8,a.connect({onlyIfTrusted:!0});case 8:c=e.sent,s=c.publicKey,r({isWallet:!0,address:s.toString()});case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),r(Object(i.a)(Object(i.a)({},n),{},{isWallet:!1})),b.a.error({message:"",description:"App could not connect to wallet"});case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(o.a)(d.a.mark((function e(){var t,n,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window,n=t.solana,e.prev=1,x(!0),!n){e.next=9;break}return e.next=6,n.connect();case 6:a=e.sent,c=a.publicKey,r({address:c.toString(),isWallet:!0});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),b.a.error({message:"",description:"could not connect to wallet"});case 14:return e.prev=14,x(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(o.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),x(!0),0!==w.length){e.next=5;break}return b.a.error({message:"",description:"No gif link given"}),e.abrupt("return");case 5:return A(""),e.prev=6,n=F(),a=new j.a(f,k,n),e.next=11,a.rpc.addGif(w,{accounts:{baseAccount:y.publicKey,user:n.wallet.publicKey}});case 11:return e.next=13,M();case 13:b.a.success({message:"",description:"GIF successfully sent to program"}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(6),b.a.error({message:"",description:"GIF successfully sent to program"});case 19:return e.prev=19,x(!1),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[6,16,19,22]])})));return function(t){return e.apply(this,arguments)}}(),D=function(e){A(e.target.value)};return Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return window.addEventListener("load",e),function(){window.removeEventListener("load",e)}}),[]),Object(a.useEffect)((function(){n.address&&M()}),[n.address]),Object(h.jsx)("div",{className:"App py-5",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"header-container",children:[Object(h.jsx)("p",{className:" ".concat(n.isWallet?"text-success":"text-danger"),children:n.isWallet?"\ud83d\ude07 Connected to Wallet ":"\ud83d\ude1f No Wallet Detected"}),Object(h.jsx)("p",{className:"header",children:"\ud83d\uddbc Henshaw GIF Portal"}),Object(h.jsx)("p",{className:"sub-text",children:"View your GIF collection in the metaverse \u2728"}),!n.address&&Object(h.jsx)("button",{className:"cta-button connect-wallet-button",onClick:z,disabled:l,children:l?Object(h.jsxs)("span",{children:[" ",Object(h.jsx)("i",{className:"spinner-border spinner-border-sm"})," connecting to wallet..."]}):"Connect to Wallet"}),n.address&&(null==G?Object(h.jsx)("div",{className:"connected-container",children:Object(h.jsx)("button",{className:"cta-button submit-gif-button",onClick:C,children:"Do One-Time Initialization For GIF Program Account"})}):Object(h.jsxs)("div",{className:"connected-container",children:[Object(h.jsxs)("form",{onSubmit:B,children:[Object(h.jsx)("input",{type:"text",placeholder:"Enter gif link!",onChange:D,value:w}),Object(h.jsxs)("button",{disabled:l,type:"submit",className:"cta-button submit-gif-button",children:[l&&Object(h.jsx)("i",{className:"spinner-border spinner-border-sm",children:" "})," Submit"]})]}),Object(h.jsx)("div",{className:"gif-grid",children:G.map((function(e,t){return Object(h.jsx)("div",{className:"gif-item",children:Object(h.jsx)("img",{src:e.gifLink,alt:e})},t)}))})]}))]}),Object(h.jsxs)("div",{className:"footer-container",children:[Object(h.jsx)("img",{alt:"Twitter Logo",className:"twitter-logo",src:p}),Object(h.jsx)("a",{className:"footer-text",href:W,target:"_blank",rel:"noreferrer",children:"built on @".concat(K)})]})]})})};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(A,{})}),document.getElementById("root"))},63:function(e){e.exports=JSON.parse('{"version":"0.1.0","name":"gifapi","instructions":[{"name":"initialize","accounts":[{"name":"baseAccount","isMut":true,"isSigner":true},{"name":"user","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[]},{"name":"addGif","accounts":[{"name":"baseAccount","isMut":true,"isSigner":false},{"name":"user","isMut":false,"isSigner":true}],"args":[{"name":"gifLink","type":"string"}]}],"accounts":[{"name":"BaseAccount","type":{"kind":"struct","fields":[{"name":"totalGifs","type":"u64"},{"name":"gifList","type":{"vec":{"defined":"ItemStruct"}}}]}}],"types":[{"name":"ItemStruct","type":{"kind":"struct","fields":[{"name":"gifLink","type":"string"},{"name":"userAddress","type":"publicKey"}]}}],"metadata":{"address":"8NPueMrdBnXnWuBAmrTfzZDxmapctd1FWqP15sfNWijy"}}')}},[[180,1,2]]]);
//# sourceMappingURL=main.5cbc1496.chunk.js.map