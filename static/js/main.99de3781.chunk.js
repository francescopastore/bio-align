(this["webpackJsonpbio-align"]=this["webpackJsonpbio-align"]||[]).push([[0],{126:function(t,e,n){},132:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i=n(26),c=n.n(i),s=(n(126),n(187)),l=n(190),o=n(193),u=n(95),h=n.n(u),g=n(192),d=n(173),f=n(191),b=n(1);function j(t){return x.paper.backgroundColor=t.backgroundColor,Object(b.jsx)(f.a,{sx:x.paper,children:t.children})}var x={paper:{p:1,width:50,height:50,mr:2,mb:2,alignItems:"center",display:"flex",justifyContent:"center"}};function v(t){return Object(b.jsx)(j,{backgroundColor:d.a.A100,children:Object(b.jsx)(g.a,{sx:{fontWeight:"bold"},children:t.letter})})}var p=n(22),m=n(79),O=n.n(m),S=n(93),W=n.n(S),w=n(91),y=n(175),k=w.a.A100,C=y.a.A200;function M(t){var e=t.cell,n=function(t){var e=Math.abs(t);if(e>=100)return 14;if(e>=10)return 16;return 20}(e.value),r=e.isPath?C:k;return Object(b.jsx)(j,{backgroundColor:r,children:Object(b.jsxs)(l.a,{sx:F.boxNumber,children:[Object(b.jsx)(O.a,{sx:Object(p.a)(Object(p.a)({transform:"rotate(-45deg)"},F.arrow),{},{visibility:A(e.diag)})}),Object(b.jsx)(O.a,{sx:Object(p.a)(Object(p.a)({},F.arrow),{},{visibility:A(e.top)})}),Object(b.jsx)(W.a,{sx:Object(p.a)(Object(p.a)({},F.arrow),{},{visibility:A(e.left)})}),Object(b.jsx)(g.a,{sx:Object(p.a)({fontSize:n},F.number),children:e.value})]})})}function A(t){return t?"visible":"hidden"}var F={boxNumber:{display:"flex",justifyContent:"space-around",flexWrap:"wrap"},number:{fontWeight:"bold"},arrow:{fontSize:24}},I=n(68);var P={initialize:function(t,e,n,r){t[0]=[{value:0}];for(var a=1;a<n;a++){var i=t[0][a-1].value+r;t[0].push({value:i,left:!0})}for(var c=1;c<e;c++){t[c]=[];var s=t[c-1][0].value+r;t[c].push({value:s,top:!0})}return t},initializeWithZero:function(t,e,n){t[0]=[{value:0}];for(var r=1;r<n;r++)t[0].push({value:0});for(var a=1;a<e;a++)t[a]=[],t[a].push({value:0});return t},traceback:function(t){for(var e=t.length-1,n=t[0].length-1;0!==e||0!==n;)t[e][n].isPath=!0,t[e][n].diag?(e--,n--):t[e][n].left?n--:e--;return t[e][n].isPath=!0,t},tracebackToZero:function(t,e,n){for(;0!==t[e][n].value&&0!==e&&0!==n;)t[e][n].isPath=!0,t[e][n].diag?(e--,n--):t[e][n].left?n--:e--;return t},findMaxIndex:function(t,e){for(var n=0,r=0,a=1;a<t.length;a++){for(var i=1;i<t[0].length;i++)if(t[a][i].value===e){n=a,r=i;break}if(0!==n)break}return{row:n,col:r}},generatePrintableTable:function(t){var e="";if(0===t.length)return"No data";for(var n=0;n<t.length;n++){for(var r=0;r<t[0].length;r++)e+=t[n][r].value+" ";e+="\n"}return e}};var T={stringsMatch:function(t,e){for(var n,r,a="-"+t.firstString,i="-"+t.secondString,c=1;c<a.length;c++)for(var s=1;s<i.length;s++)e[c][s].isPath&&(n=c,r=s);for(var l={firstString:"",secondString:"",score:e[n][r].value};n>0&&r>0&&e[n][r].isPath;){var o=e[n][r];o.diag||0===n&&0===r||!o.left&&!o.top?(l.firstString=a[n]+l.firstString,l.secondString=i[r]+l.secondString,n--,r--):o.left?(l.firstString="-"+l.firstString,l.secondString=i[r]+l.secondString,r--):(l.firstString=a[n]+l.firstString,l.secondString="-"+l.secondString,n--)}for(;n>0&&e[n][r].isPath;)l.firstString=a[n]+l.firstString,l.secondString="-"+l.secondString,n--;for(;r>0&&e[n][r].isPath;)l.firstString="-"+l.firstString,l.secondString=i[r]+l.secondString,r--;return l},algorithms:[{label:"Levenshtein distance",calculate:function(t){var e=[],n="-"+t.firstString,r="-"+t.secondString;return(e=P.initialize(e,n.length,r.length,1))[0][0].isPath=!0,e=function(t,e,n,r){for(var a=1;a<e.length;a++)for(var i=1;i<n.length;i++){var c=t[a][i-1].value+1,s=t[a-1][i].value+1,l=0,o=c;s<o&&(o=s),(l=e[a]===n[i]?t[a-1][i-1].value:t[a-1][i-1].value+1)<o&&(o=l),t[a].push({value:o,left:c===o,top:s===o,diag:l===o})}return t}(e,n,r),e=P.traceback(e,n,r)},defaultForm:{disableWeights:!0,matchWeight:0,mismatchWeight:1,gapWeight:1}},{label:"Needleman-Wunsch",calculate:function(t){var e=[],n="-"+t.firstString,r="-"+t.secondString;return(e=P.initialize(e,n.length,r.length,t.gapWeight))[0][0].isPath=!0,e=function(t,e,n,r){for(var a=1;a<e.length;a++)for(var i=1;i<n.length;i++){var c=r.gapWeight+t[a][i-1].value,s=r.gapWeight+t[a-1][i].value,l=0,o=c;s>o&&(o=s),(l=e[a]===n[i]?r.matchWeight+t[a-1][i-1].value:r.mismatchWeight+t[a-1][i-1].value)>o&&(o=l),t[a].push({value:o,left:o===c,top:o===s,diag:o===l})}return t}(e,n,r,t),e=P.traceback(e,n,r)},defaultForm:{disableWeights:!1,matchWeight:1,mismatchWeight:-1,gapWeight:-1}},{label:"Longest Common Subsequence",calculate:function(t){var e=[],n="-"+t.firstString,r="-"+t.secondString,a=function(t,e,n){for(var r=0,a=1;a<e.length;a++)for(var i=1;i<n.length;i++){var c=t[a][i-1].value,s=t[a-1][i].value,l=0,o=c;s>o&&(o=s),(l=e[a]===n[i]?t[a-1][i-1].value+1:t[a-1][i-1].value)>o&&(o=l),o>r&&(r=o),t[a].push({value:o,left:0!==o&&o===c,top:0!==o&&o===s,diag:0!==o&&o===l})}return{table:t,tableMax:r}}(e=P.initializeWithZero(e,n.length,r.length),n,r);return e=function(t,e,n,r){var a=P.findMaxIndex(t,e,n,r),i=a.row,c=a.col;return P.tracebackToZero(t,i,c),t}(e=a.table,a.tableMax),e},defaultForm:{disableWeights:!0,matchWeight:0,mismatchWeight:0,gapWeight:0}},{label:"Smith-Waterman",calculate:function(t){var e=[],n="-"+t.firstString,r="-"+t.secondString,a=function(t,e,n,r){for(var a=0,i=1;i<e.length;i++)for(var c=1;c<n.length;c++){var s=r.gapWeight+t[i][c-1].value,l=r.gapWeight+t[i-1][c].value,o=0,u=s;l>u&&(u=l),(o=e[i]===n[c]?r.matchWeight+t[i-1][c-1].value:r.mismatchWeight+t[i-1][c-1].value)>u&&(u=o),u<0&&(u=0),u>a&&(a=u),t[i].push({value:u,left:s===u&&0!==s,top:l===u&&0!==l,diag:o===u&&0!==o})}return{table:t,tableMax:a}}(e=P.initializeWithZero(e,n.length,r.length),n,r,t);return e=function(t,e,n,r){var a=P.findMaxIndex(t,e,n,r),i=a.row,c=a.col;return P.tracebackToZero(t,i,c),t}(e=a.table,a.tableMax),e},defaultForm:{disableWeights:!1,matchWeight:1,mismatchWeight:-1,gapWeight:-1}}]},z=T,N=z.algorithms[0],Z=Object(p.a)({algorithm:0,firstString:"ATTACTC",secondString:"ATATGTC"},N.defaultForm),G=N.calculate(Z),L={form:Z,solution:G,stringsMatch:z.stringsMatch(Z,G)},B=Object(I.b)({name:"counter",initialState:L,reducers:{setAlgorithm:function(t,e){t.form.algorithm=e.payload;var n=z.algorithms[t.form.algorithm];t.form=Object.assign(t.form,n.defaultForm),t=_(t)},setFirstString:function(t,e){t.form.firstString=e.payload,t=_(t)},setSecondString:function(t,e){t.form.secondString=e.payload,t=_(t)},setMatchWeight:function(t,e){t.form.matchWeight=e.payload,t=_(t)},setMismatchWeight:function(t,e){t.form.mismatchWeight=e.payload,t=_(t)},setGapWeight:function(t,e){t.form.gapWeight=e.payload,t=_(t)}}});function _(t){var e=z.algorithms[t.form.algorithm];return t.solution=e.calculate(t.form),t.stringsMatch=z.stringsMatch(t.form,t.solution),t}var E=B.actions,R=E.setAlgorithm,J=E.setFirstString,U=E.setSecondString,q=E.setMatchWeight,D=E.setMismatchWeight,H=E.setGapWeight,K=B.reducer,Q=n(25),V=n(177);function X(){var t=Object(Q.b)(),e=Object(Q.c)((function(t){return t.app.form})),n=Object(Q.c)((function(t){return t.app.solution}));return Object(b.jsxs)(l.a,{sx:et.container,children:[$(e,t),Y(e,n)]})}function Y(t,e){for(var n=[],r="-"+t.firstString,a=0;a<r.length;a++){var i=[];i.push(tt(r[a],"left"+a,!1));for(var c=0;c<e[a].length;c++)i.push(Object(b.jsx)(l.a,{children:Object(b.jsx)(M,{cell:e[a][c]})},c));n.push(Object(b.jsx)(l.a,{sx:et.row,children:i},a))}return n}function $(t,e){var n=[];n.push(function(t,e){return Object(b.jsx)(l.a,{children:Object(b.jsx)(j,{backgroundColor:V.a.A200,children:Object(b.jsx)(o.a,{"data-testid":"shuffle-button",onClick:function(){var n=t.firstString;e(J(t.secondString)),e(U(n))},size:"large",children:Object(b.jsx)(h.a,{})})})},"switchButton")}(t,e)),n.push(tt("-","top empty",!1));for(var r=0;r<t.secondString.length;r++)n.push(tt(t.secondString[r],"top"+r,!1));return Object(b.jsx)(l.a,{sx:et.row,children:n},"top")}function tt(t,e,n){var r={};return n&&(r.visibility="hidden"),Object(b.jsx)(l.a,{sx:r,children:Object(b.jsx)(v,{letter:t})},e)}var et={container:{overflow:"auto"},row:{display:"flex",width:"fit-content",margin:"auto"}},nt=n(4),rt=n(194),at=n(181),it=n(97),ct=n.n(it),st=n(96),lt=n.n(st),ot=Object(b.jsx)(rt.a,{underline:"none",target:"_blank",href:"https://mui.com",children:"MUI"}),ut=Object(b.jsx)(rt.a,{underline:"none",target:"_blank",href:"https://reactjs.org/",children:"React.js"}),ht=Object(b.jsx)(rt.a,{underline:"none",display:"inline",color:"red",children:"\u2665"});function gt(){return Object(b.jsx)(f.a,{elevation:4,children:Object(b.jsxs)(s.a,{container:!0,sx:jt.container,children:[Object(b.jsx)(s.a,{item:!0,lg:4,xs:0}),Object(b.jsx)(s.a,{item:!0,lg:4,xs:12,sx:jt.center,children:Object(b.jsxs)(g.a,{sx:jt.text,children:["Made with ",ht," using ",ut," and ",ot]})}),Object(b.jsxs)(s.a,{item:!0,lg:4,xs:12,sx:bt,children:[Object(b.jsx)(at.a,{title:"Report a bug",children:Object(b.jsx)(o.a,{onClick:dt,children:Object(b.jsx)(lt.a,{})})}),Object(b.jsx)(at.a,{title:"Source code",children:Object(b.jsx)(o.a,{onClick:ft,children:Object(b.jsx)(ct.a,{})})})]})]})})}function dt(t){window.open("https://github.com/francescopastore/bio-align/issues/new","_blank")}function ft(t){window.open("https://github.com/francescopastore/bio-align","_blank")}var bt=function(t){var e;return e={},Object(nt.a)(e,t.breakpoints.down("lg"),{textAlign:"center",mt:3}),Object(nt.a)(e,t.breakpoints.up("lg"),{textAlign:"right"}),e},jt={container:{p:4,alignItems:"center"},icon:{cursor:"pointer",height:"100%",ml:2},center:{textAlign:"center"}};function xt(){return Object(b.jsx)(l.a,{sx:vt.container,children:Object(b.jsx)("img",{src:"/bio-align/header.png",alt:"header"})})}var vt={container:{textAlign:"center",mb:1}},pt=n(12),mt=n(185),Ot=n(184),St=n(195),Wt=n(182),wt=n(196),yt=n(98),kt=n.n(yt);function Ct(t){var e=r.useState(t.default),n=Object(pt.a)(e,2),a=n[0],i=n[1],c=t.options.map((function(t,e){return Object(b.jsx)(Ot.a,{value:e,children:t.label},e)}));return Object(b.jsxs)(St.a,{fullWidth:!0,margin:"normal",children:[Object(b.jsx)(mt.a,{id:"algorithm-label",children:"Algorithm"}),Object(b.jsx)(Wt.a,{labelId:"algorithm-label",id:"algorithm",label:"Algorithm",value:a,onChange:function(e){var n=e.target.value;i(n),t.handle(n)},"data-testid":"value-input",startAdornment:Object(b.jsx)(wt.a,{position:"start",children:Object(b.jsx)(kt.a,{})}),children:c})]})}var Mt=n(186),At=n(99),Ft=n.n(At),It=n(100),Pt=n.n(It);function Tt(t){var e=r.useState(t.default),n=Object(pt.a)(e,2),a=n[0],i=n[1];r.useEffect((function(){i(t.default)}),[t.default]);var c=function(e){i(e),s(e)||t.handle(e)},s=function(t){return t.length>8};return Object(b.jsx)(St.a,{fullWidth:!0,margin:"normal",children:Object(b.jsx)(Mt.a,{onChange:function(t){var e=t.target.value.toUpperCase();c(e)},label:t.label,value:a,variant:"outlined",error:s(a),helperText:s(a)?"Max 8 alphabetic characters":"","data-testid":"value-input",InputProps:{startAdornment:Object(b.jsx)(wt.a,{position:"start",children:Object(b.jsx)(Ft.a,{})}),endAdornment:Object(b.jsx)(wt.a,{position:"end",children:Object(b.jsx)(o.a,{"data-testid":"shuffle-button",onClick:function(){var t=function(t,e){for(var n="",r=t+Math.round(Math.random()*(e-t)),a=0;a<r;a++){switch(Math.round(3*Math.random())){default:n+="A";break;case 1:n+="C";break;case 2:n+="G";break;case 3:n+="T"}}return n}(4,8);c(t)},children:Object(b.jsx)(Pt.a,{})})})}})})}var zt=n(101),Nt=n.n(zt);function Zt(t){var e=r.useState(t.default),n=Object(pt.a)(e,2),a=n[0],i=n[1];r.useEffect((function(){i(t.default)}),[t.default]);var c=function(t){return isNaN(parseInt(t))&&"-"!==t||t<-10||t>10};return Object(b.jsx)(St.a,{margin:"normal",sx:t.style,children:Object(b.jsx)(Mt.a,{disabled:t.disabled,onChange:function(e){var n=e.target.value;i(n),c(n)||isNaN(n)||t.handle(parseInt(n))},label:t.label,value:a,error:c(a),helperText:(c(a),""),variant:"outlined","data-testid":"value-input",InputProps:{startAdornment:Object(b.jsx)(wt.a,{position:"start",children:Object(b.jsx)(Nt.a,{})})}})})}function Gt(){var t=Object(Q.b)(),e=Object(Q.c)((function(t){return t.app.form}));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Ct,{options:z.algorithms,default:0,handle:function(e){return t(R(e))}}),Object(b.jsx)(Tt,{label:"First string",default:e.firstString,handle:function(e){return t(J(e))}}),Object(b.jsx)(Tt,{label:"Second string",default:e.secondString,handle:function(e){return t(U(e))}}),Object(b.jsxs)(l.a,{sx:{display:"flex",justifyContent:"space-around"},children:[Object(b.jsx)(Zt,{label:"Match",default:e.matchWeight,handle:function(e){return t(q(e))},disabled:e.disableWeights,style:{mr:2}}),Object(b.jsx)(Zt,{label:"Mismatch",default:e.mismatchWeight,handle:function(e){return t(D(e))},disabled:e.disableWeights,style:{mr:2}}),Object(b.jsx)(Zt,{label:"Gap",default:e.gapWeight,handle:function(e){return t(H(e))},disabled:e.disableWeights})]}),Object(b.jsx)(g.a,{variant:"caption",children:"Only weights between -10 and 10 are allowed"})]})}var Lt=n(42),Bt=n(43),_t=Lt.a.A700,Et=Bt.a.A700,Rt=V.a.A700;function Jt(){var t=Object(Q.c)((function(t){return t.app.stringsMatch})),e=function(t){for(var e=[],n=[],r=0;r<t.firstString.length;r++)if(t.firstString[r]===t.secondString[r]){var a=Ut(t.firstString[r],Et,r);e.push(a),n.push(a)}else if("-"===t.firstString[r]){var i=Ut(t.secondString[r],Rt,r),c=Ut("-",Rt,r);e.push(c),n.push(i)}else if("-"===t.secondString[r]){var s=Ut(t.firstString[r],Rt,r),l=Ut("-",Rt,r);e.push(s),n.push(l)}else e.push(Ut(t.firstString[r],_t,r)),n.push(Ut(t.secondString[r],_t,r));return{firstString:e,secondString:n}}(t),n=e.firstString,r=e.secondString;return Object(b.jsxs)(s.a,{container:!0,spacing:0,sx:qt.container,children:[Object(b.jsxs)(s.a,{container:!0,item:!0,spacing:0,xs:10,children:[Object(b.jsx)(s.a,{container:!0,item:!0,spacing:0,sx:qt.centered,children:n}),Object(b.jsx)(s.a,{container:!0,item:!0,spacing:0,sx:qt.centered,children:r})]}),Object(b.jsx)(s.a,{item:!0,sx:qt.centered,xs:2,children:Object(b.jsx)(g.a,{sx:qt.score,children:t.score})})]})}function Ut(t,e,n){return Object(b.jsx)(s.a,{item:!0,children:Object(b.jsx)(g.a,{color:e,sx:qt.letter,children:t})},n)}var qt={container:{p:3,mt:3},letter:{fontSize:"1.5em",letterSpacing:"0.5em",fontFamily:"Courier New"},score:{fontSize:"1.5em",fontFamily:"Courier New"},centered:{display:"flex",alignItems:"center",justifyContent:"center"}};function Dt(){return Object(b.jsxs)(f.a,{sx:Ht.container,elevation:4,children:[Object(b.jsx)(xt,{}),Object(b.jsx)(Gt,{}),Object(b.jsx)(Jt,{})]})}var Ht={container:{minWidth:"400px",maxWidth:"500px",margin:"auto",p:3}};function Kt(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(s.a,{container:!0,spacing:2,sx:Qt.container,children:[Object(b.jsx)(s.a,{item:!0,xs:12,lg:5,sx:Qt.form,children:Object(b.jsx)(Dt,{})}),Object(b.jsx)(s.a,{item:!0,xs:12,lg:7,sx:Qt.table,children:Object(b.jsx)(X,{})})]}),Object(b.jsx)(l.a,{sx:Qt.footer,children:Object(b.jsx)(gt,{})})]})}var Qt={container:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",py:3},footer:{paddingBottom:"3vh",paddingLeft:"2vw",paddingRight:"2vw"}},Vt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,199)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),r(t),a(t),i(t),c(t)}))},Xt=Object(I.a)({reducer:{app:K}}),Yt=n(102),$t=n(188),te=Object(Yt.a)({});c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)($t.a,{theme:te,children:Object(b.jsx)(Q.a,{store:Xt,children:Object(b.jsx)(Kt,{})})})}),document.getElementById("root")),Vt()}},[[132,1,2]]]);
//# sourceMappingURL=main.99de3781.chunk.js.map