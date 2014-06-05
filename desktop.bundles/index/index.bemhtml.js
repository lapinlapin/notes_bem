(function(g) {
  var __bem_xjst = (function(exports) {
     var __$ref={};function apply(ctx){try{return applyc(ctx||this,__$ref)}catch(e){(ctx||this).xjstContext=e;throw e}}exports.apply=apply;function applyc(__$ctx,__$ref){var __$t=__$ctx._mode;if(__$t==="tag"){var __$r=__$g0(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="js"){var __$r=__$g1(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="attrs"){var __$r=__$g2(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="mix"){if(__$ctx.block==="menu-tools"&&__$ctx.elem==="item"){__$ctx.__$a=0;return[{mods:{action:__$ctx.ctx.action}}]}__$ctx.__$a=0;return undefined}else if(__$t==="content"){var __$t=__$ctx.block;if(__$t==="menu-tools"){if(!__$ctx.elem){__$ctx.__$a=0;var __$r=__$ctx.ctx.controls.map(function(elem){return{elem:"item",action:elem}});if(__$r!==__$ref)return __$r}}else if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="head"){if(__$ctx.__$a!==2){__$ctx.__$a=0;return[__$ctx.ctx["x-ua-compatible"]===false?false:{tag:"meta",attrs:{"http-equiv":"X-UA-Compatible",content:__$ctx.ctx["x-ua-compatible"]||"IE=edge"}},function(){var __$r__$12;__$ctx.__$a=2;__$r__$12=applyc(__$ctx,__$ref);return __$r__$12}()]}}else if(__$t==="body"){if(__$ctx.__$a!==4){__$ctx.__$a=0;return[function(){var __$r__$14;__$ctx.__$a=4;__$r__$14=applyc(__$ctx,__$ref);return __$r__$14}(),__$ctx.ctx.scripts]}}}else if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return["(function(e,c){",'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");','})(document.documentElement,"className");']}}__$ctx.__$a=0;return __$ctx.ctx.content}else if(__$t==="bem"){var __$t=__$ctx.block;if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="js"){__$ctx.__$a=0;return false}else if(__$t==="css"){__$ctx.__$a=0;return false}else if(__$t==="head"){__$ctx.__$a=0;return false}else if(__$t==="favicon"){__$ctx.__$a=0;return false}else if(__$t==="link"){__$ctx.__$a=0;return false}else if(__$t==="meta"){__$ctx.__$a=0;return false}}else if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return false}}__$ctx.__$a=0;return undefined}else if(__$t==="default"){var __$t=__$ctx.block;if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="css"){var __$t=!__$ctx.ctx._ieCommented;if(__$t){var __$t=__$ctx.ctx.hasOwnProperty("ie");if(__$t){if(__$ctx.ctx.ie===true&&__$ctx.__$a!==1){__$ctx.__$a=0;var __$r=__$b68(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;var __$r=__$b69(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}}else if(__$t==="body"){if(__$ctx.__$a!==3){__$ctx.__$a=0;var __$r=__$b70(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}if(!__$ctx.elem&&__$ctx.__$a!==5){__$ctx.__$a=0;var __$r=__$b71(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}__$ctx.__$a=0;var __$r=__$b72(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="cls"){__$ctx.__$a=0;return undefined}else if(__$t===""){if(__$ctx.ctx&&__$ctx.ctx._vow&&__$ctx.__$a!==6){__$ctx.__$a=0;var __$r=__$b74(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx._.isSimple(__$ctx.ctx)){__$ctx.__$a=0;var __$r=__$b75(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(!__$ctx.ctx){__$ctx.__$a=0;var __$r=__$b76(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx._.isArray(__$ctx.ctx)){__$ctx.__$a=0;var __$r=__$b77(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;var __$r=__$b78(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0}[function(exports,context){var BEM_={},toString=Object.prototype.toString,isArray=Array.isArray||function(obj){return toString.call(obj)==="[object Array]"},SHORT_TAGS={area:1,base:1,br:1,col:1,command:1,embed:1,hr:1,img:1,input:1,keygen:1,link:1,meta:1,param:1,source:1,wbr:1};!function(BEM,undefined){var MOD_DELIM="_",ELEM_DELIM="__",NAME_PATTERN="[a-zA-Z0-9-]+";function buildModPostfix(modName,modVal){var res=MOD_DELIM+modName;if(modVal!==true)res+=MOD_DELIM+modVal;return res}function buildBlockClass(name,modName,modVal){var res=name;if(modVal)res+=buildModPostfix(modName,modVal);return res}function buildElemClass(block,name,modName,modVal){var res=buildBlockClass(block)+ELEM_DELIM+name;if(modVal)res+=buildModPostfix(modName,modVal);return res}BEM.INTERNAL={NAME_PATTERN:NAME_PATTERN,MOD_DELIM:MOD_DELIM,ELEM_DELIM:ELEM_DELIM,buildModPostfix:buildModPostfix,buildClass:function(block,elem,modName,modVal){var typeOfModName=typeof modName;if(typeOfModName==="string"||typeOfModName==="boolean"){var typeOfModVal=typeof modVal;if(typeOfModVal!=="string"&&typeOfModVal!=="boolean"){modVal=modName;modName=elem;elem=undefined}}else if(typeOfModName!=="undefined"){modName=undefined}else if(elem&&typeof elem!=="string"){elem=undefined}if(!(elem||modName)){return block}if(elem)return buildElemClass(block,elem,modName,modVal);else return buildBlockClass(block,modName,modVal)},buildModsClasses:function(block,elem,mods){var res="";if(mods){var modName;for(modName in mods){if(!mods.hasOwnProperty(modName))continue;var modVal=mods[modName];if(!modVal&&modVal!==0)continue;typeof modVal!=="boolean"&&(modVal+="");res+=" "+(elem?buildElemClass(block,elem,modName,modVal):buildBlockClass(block,modName,modVal))}}return res},buildClasses:function(block,elem,mods){var res="";if(elem)res+=buildElemClass(block,elem);else res+=buildBlockClass(block);res+=this.buildModsClasses(block,elem,mods);return res}}}(BEM_);var ts={'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;"},f=function(t){return ts[t]||t};var buildEscape=function(r){r=new RegExp(r,"g");return function(s){return(""+s).replace(r,f)}};function BEMContext(context,apply_){this.ctx=typeof context===null?"":context;this.apply=apply_;this._str="";var self=this;this._buf={push:function(){var chunks=Array.prototype.slice.call(arguments).join("");self._str+=chunks},join:function(){return this._str}};this._=this;this._start=true;this._mode="";this._listLength=0;this._notNewList=false;this.position=0;this.block=undefined;this.elem=undefined;this.mods=undefined;this.elemMods=undefined}context.BEMContext=BEMContext;BEMContext.prototype.isArray=isArray;BEMContext.prototype.isSimple=function isSimple(obj){if(!obj||obj===true)return true;var t=typeof obj;return t==="string"||t==="number"};BEMContext.prototype.isShortTag=function isShortTag(t){return SHORT_TAGS.hasOwnProperty(t)};BEMContext.prototype.extend=function extend(o1,o2){if(!o1||!o2)return o1||o2;var res={},n;for(n in o1)o1.hasOwnProperty(n)&&(res[n]=o1[n]);for(n in o2)o2.hasOwnProperty(n)&&(res[n]=o2[n]);return res};var cnt=0,id=+new Date,expando="__"+id,get=function(){return"uniq"+id+ ++cnt};BEMContext.prototype.identify=function(obj,onlyGet){if(!obj)return get();if(onlyGet||obj[expando]){return obj[expando]}else{return obj[expando]=get()}};BEMContext.prototype.xmlEscape=buildEscape("[&<>]");BEMContext.prototype.attrEscape=buildEscape('["&<>]');BEMContext.prototype.BEM=BEM_;BEMContext.prototype.isFirst=function isFirst(){return this.position===1};BEMContext.prototype.isLast=function isLast(){return this.position===this._listLength};BEMContext.prototype.generateId=function generateId(){return this.identify(this.ctx)};var oldApply=exports.apply;exports.apply=BEMContext.apply=function _apply(context){var ctx=new BEMContext(context||this,oldApply);ctx.apply();return ctx._str};BEMContext.prototype.reapply=BEMContext.apply}].forEach(function(fn){fn(exports,this)},{recordExtensions:function(ctx){ctx._mode=undefined;ctx.ctx=undefined;ctx.__$a=0;ctx._ieCommented=undefined;ctx._str=undefined;ctx.block=undefined;ctx.elem=undefined;ctx._notNewList=undefined;ctx.position=undefined;ctx._listLength=undefined;ctx._currBlock=undefined;ctx.mods=undefined;ctx.elemMods=undefined}});function __$b68(__$ctx,__$ref){__$ctx.__$a=0;var url__$0=__$ctx.ctx.url;var __$r__$1;var __$l0__$2=__$ctx._mode;__$ctx._mode="";var __$l1__$3=__$ctx.ctx;__$ctx.ctx=[6,7,8,9].map(function(v){return{elem:"css",url:url__$0+".ie"+v+".css",ie:"IE "+v}});var __$r__$4;__$ctx.__$a=1;__$r__$4=applyc(__$ctx,__$ref);__$r__$1=__$r__$4;__$ctx._mode=__$l0__$2;__$ctx.ctx=__$l1__$3;return}function __$b69(__$ctx,__$ref){__$ctx.__$a=0;var ie__$5=__$ctx.ctx.ie,hideRule__$6=!ie__$5?["gt IE 9","<!-->","<!--"]:ie__$5==="!IE"?[ie__$5,"<!-->","<!--"]:[ie__$5,"",""];var __$r__$7;var __$l0__$8=__$ctx._mode;__$ctx._mode="";var __$l3__$9=__$ctx.ctx;var __$l1__$10=__$l3__$9._ieCommented;__$l3__$9._ieCommented=true;var __$l2__$11=__$ctx.ctx;__$ctx.ctx=["<!--[if "+hideRule__$6[0]+"]>"+hideRule__$6[1],__$ctx.ctx,hideRule__$6[2]+"<![endif]-->"];__$r__$7=applyc(__$ctx,__$ref);__$ctx._mode=__$l0__$8;__$l3__$9._ieCommented=__$l1__$10;__$ctx.ctx=__$l2__$11;return}function __$b70(__$ctx,__$ref){__$ctx.__$a=0;__$ctx.ctx.elem=null;var __$r__$13;__$ctx.__$a=3;__$r__$13=applyc(__$ctx,__$ref);return}function __$b71(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$15=__$ctx.ctx;var __$r__$16;var __$l0__$17=__$ctx._mode;__$ctx._mode="";var __$l1__$18=__$ctx.ctx;__$ctx.ctx=[ctx__$15.doctype||"<!DOCTYPE html>",{tag:"html",cls:"ua_js_no",content:[{elem:"head",content:[{tag:"meta",attrs:{charset:"utf-8"}},{tag:"title",content:ctx__$15.title},{block:"ua"},ctx__$15.head,ctx__$15.styles,ctx__$15.favicon?{elem:"favicon",url:ctx__$15.favicon}:""]},__$ctx.extend(ctx__$15,{elem:"body"})]}];var __$r__$19;__$ctx.__$a=5;__$r__$19=applyc(__$ctx,__$ref);__$r__$16=__$r__$19;__$ctx._mode=__$l0__$17;__$ctx.ctx=__$l1__$18;return}function __$b72(__$ctx,__$ref){__$ctx.__$a=0;var _this__$20=__$ctx,BEM___$21=_this__$20.BEM,v__$22=__$ctx.ctx,isBEM__$23,tag__$24,result__$25;var __$r__$26;var __$l0__$27=__$ctx._str;__$ctx._str="";var __$r__$28;var __$l1__$29=__$ctx._mode;__$ctx._mode="tag";__$r__$28=applyc(__$ctx,__$ref);__$ctx._mode=__$l1__$29;tag__$24=__$r__$28;typeof tag__$24!=="undefined"||(tag__$24=v__$22.tag);typeof tag__$24!=="undefined"||(tag__$24="div");if(tag__$24){var jsParams__$30,js__$31;if(__$ctx.block&&v__$22.js!==false){var __$r__$32;var __$l2__$33=__$ctx._mode;__$ctx._mode="js";__$r__$32=applyc(__$ctx,__$ref);__$ctx._mode=__$l2__$33;js__$31=__$r__$32;js__$31=js__$31?__$ctx._.extend(v__$22.js,js__$31===true?{}:js__$31):v__$22.js===true?{}:v__$22.js;js__$31&&((jsParams__$30={})[BEM___$21.INTERNAL.buildClass(__$ctx.block,v__$22.elem)]=js__$31)}__$ctx._str+="<"+tag__$24;var __$r__$34;var __$l3__$35=__$ctx._mode;__$ctx._mode="bem";__$r__$34=applyc(__$ctx,__$ref);__$ctx._mode=__$l3__$35;isBEM__$23=__$r__$34;typeof isBEM__$23!=="undefined"||(isBEM__$23=typeof v__$22.bem!=="undefined"?v__$22.bem:v__$22.block||v__$22.elem);var __$r__$37;var __$l4__$38=__$ctx._mode;__$ctx._mode="cls";__$r__$37=applyc(__$ctx,__$ref);__$ctx._mode=__$l4__$38;var cls__$36=__$r__$37;cls__$36||(cls__$36=v__$22.cls);var addJSInitClass__$39=v__$22.block&&jsParams__$30;if(isBEM__$23||cls__$36){__$ctx._str+=' class="';if(isBEM__$23){__$ctx._str+=BEM___$21.INTERNAL.buildClasses(__$ctx.block,v__$22.elem,v__$22.elemMods||v__$22.mods);var __$r__$41;var __$l5__$42=__$ctx._mode;__$ctx._mode="mix";__$r__$41=applyc(__$ctx,__$ref);__$ctx._mode=__$l5__$42;var mix__$40=__$r__$41;v__$22.mix&&(mix__$40=mix__$40?mix__$40.concat(v__$22.mix):v__$22.mix);if(mix__$40){var visited__$43={},visitedKey__$44=function(block,elem){return(block||"")+"__"+(elem||"")};visited__$43[visitedKey__$44(__$ctx.block,__$ctx.elem)]=true;if(!__$ctx._.isArray(mix__$40))mix__$40=[mix__$40];for(var i__$45=0;i__$45<mix__$40.length;i__$45++){var mixItem__$46=mix__$40[i__$45],hasItem__$47=mixItem__$46.block||mixItem__$46.elem,block__$48=mixItem__$46.block||mixItem__$46._block||_this__$20.block,elem__$49=mixItem__$46.elem||mixItem__$46._elem||_this__$20.elem;if(hasItem__$47)__$ctx._str+=" ";__$ctx._str+=BEM___$21.INTERNAL[hasItem__$47?"buildClasses":"buildModsClasses"](block__$48,mixItem__$46.elem||mixItem__$46._elem||(mixItem__$46.block?undefined:_this__$20.elem),mixItem__$46.elemMods||mixItem__$46.mods);if(mixItem__$46.js){(jsParams__$30||(jsParams__$30={}))[BEM___$21.INTERNAL.buildClass(block__$48,mixItem__$46.elem)]=mixItem__$46.js===true?{}:mixItem__$46.js;addJSInitClass__$39||(addJSInitClass__$39=block__$48&&!mixItem__$46.elem)}if(hasItem__$47&&!visited__$43[visitedKey__$44(block__$48,elem__$49)]){visited__$43[visitedKey__$44(block__$48,elem__$49)]=true;var __$r__$51;var __$l6__$52=__$ctx._mode;__$ctx._mode="mix";var __$l7__$53=__$ctx.block;__$ctx.block=block__$48;var __$l8__$54=__$ctx.elem;__$ctx.elem=elem__$49;__$r__$51=applyc(__$ctx,__$ref);__$ctx._mode=__$l6__$52;__$ctx.block=__$l7__$53;__$ctx.elem=__$l8__$54;var nestedMix__$50=__$r__$51;if(nestedMix__$50){for(var j__$55=0;j__$55<nestedMix__$50.length;j__$55++){var nestedItem__$56=nestedMix__$50[j__$55];if(!nestedItem__$56.block&&!nestedItem__$56.elem||!visited__$43[visitedKey__$44(nestedItem__$56.block,nestedItem__$56.elem)]){nestedItem__$56._block=block__$48;nestedItem__$56._elem=elem__$49;mix__$40.splice(i__$45+1,0,nestedItem__$56)}}}}}}}if(cls__$36)__$ctx._str+=isBEM__$23?" "+cls__$36:cls__$36;if(addJSInitClass__$39)__$ctx._str+=' i-bem"';else __$ctx._str+='"'}if(isBEM__$23&&jsParams__$30){__$ctx._str+=' data-bem="'+__$ctx._.attrEscape(JSON.stringify(jsParams__$30))+'"'}var __$r__$58;var __$l9__$59=__$ctx._mode;__$ctx._mode="attrs";__$r__$58=applyc(__$ctx,__$ref);__$ctx._mode=__$l9__$59;var attrs__$57=__$r__$58;attrs__$57=__$ctx._.extend(attrs__$57,v__$22.attrs);if(attrs__$57){var name__$60,attr__$61;for(name__$60 in attrs__$57){attr__$61=attrs__$57[name__$60];if(attr__$61===undefined)continue;__$ctx._str+=" "+name__$60+'="'+__$ctx._.attrEscape(__$ctx._.isSimple(attr__$61)?attr__$61:__$ctx.reapply(attr__$61))+'"'}}}if(__$ctx._.isShortTag(tag__$24)){__$ctx._str+="/>"}else{if(tag__$24)__$ctx._str+=">";var __$r__$63;var __$l10__$64=__$ctx._mode;__$ctx._mode="content";__$r__$63=applyc(__$ctx,__$ref);__$ctx._mode=__$l10__$64;var content__$62=__$r__$63;if(content__$62||content__$62===0){isBEM__$23=__$ctx.block||__$ctx.elem;var __$r__$65;var __$l11__$66=__$ctx._mode;__$ctx._mode="";var __$l12__$67=__$ctx._notNewList;__$ctx._notNewList=false;var __$l13__$68=__$ctx.position;__$ctx.position=isBEM__$23?1:__$ctx.position;var __$l14__$69=__$ctx._listLength;__$ctx._listLength=isBEM__$23?1:__$ctx._listLength;var __$l15__$70=__$ctx.ctx;__$ctx.ctx=content__$62;__$r__$65=applyc(__$ctx,__$ref);__$ctx._mode=__$l11__$66;__$ctx._notNewList=__$l12__$67;__$ctx.position=__$l13__$68;__$ctx._listLength=__$l14__$69;__$ctx.ctx=__$l15__$70}if(tag__$24)__$ctx._str+="</"+tag__$24+">"}result__$25=__$ctx._str;__$r__$26=undefined;__$ctx._str=__$l0__$27;__$ctx._buf.push(result__$25);return}function __$b74(__$ctx,__$ref){__$ctx.__$a=0;var __$r__$71;var __$l0__$72=__$ctx._mode;__$ctx._mode="";var __$l1__$73=__$ctx.ctx;__$ctx.ctx=__$ctx.ctx._value;var __$r__$74;__$ctx.__$a=6;__$r__$74=applyc(__$ctx,__$ref);__$r__$71=__$r__$74;__$ctx._mode=__$l0__$72;__$ctx.ctx=__$l1__$73;return}function __$b75(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._listLength--;var ctx__$75=__$ctx.ctx;if(ctx__$75&&ctx__$75!==true||ctx__$75===0){__$ctx._buf.push(ctx__$75+"")}return}function __$b76(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._listLength--;return}function __$b77(__$ctx,__$ref){__$ctx.__$a=0;var v__$76=__$ctx.ctx,l__$77=v__$76.length,i__$78=0,prevPos__$79=__$ctx.position,prevNotNewList__$80=__$ctx._notNewList;if(prevNotNewList__$80){__$ctx._listLength+=l__$77-1}else{__$ctx.position=0;__$ctx._listLength=l__$77}__$ctx._notNewList=true;while(i__$78<l__$77)!function(){var __$r__$81;var __$l0__$82=__$ctx.ctx;__$ctx.ctx=v__$76[i__$78++];__$r__$81=applyc(__$ctx,__$ref);__$ctx.ctx=__$l0__$82;return __$r__$81}();prevNotNewList__$80||(__$ctx.position=prevPos__$79);return}function __$b78(__$ctx,__$ref){__$ctx.__$a=0;var vBlock__$83=__$ctx.ctx.block,vElem__$84=__$ctx.ctx.elem,block__$85=__$ctx._currBlock||__$ctx.block;__$ctx.ctx||(__$ctx.ctx={});var __$r__$86;var __$l0__$87=__$ctx._mode;__$ctx._mode="default";var __$l1__$88=__$ctx.block;__$ctx.block=vBlock__$83||(vElem__$84?block__$85:undefined);var __$l2__$89=__$ctx._currBlock;__$ctx._currBlock=vBlock__$83||vElem__$84?undefined:block__$85;var __$l3__$90=__$ctx.elem;__$ctx.elem=__$ctx.ctx.elem;var __$l4__$91=__$ctx.mods;__$ctx.mods=vBlock__$83?__$ctx.ctx.mods||(__$ctx.ctx.mods={}):__$ctx.mods;var __$l5__$92=__$ctx.elemMods;__$ctx.elemMods=__$ctx.ctx.elemMods||{};__$ctx.block||__$ctx.elem?__$ctx.position=(__$ctx.position||0)+1:__$ctx._listLength--;applyc(__$ctx,__$ref);__$r__$86=undefined;__$ctx._mode=__$l0__$87;__$ctx.block=__$l1__$88;__$ctx._currBlock=__$l2__$89;__$ctx.elem=__$l3__$90;__$ctx.mods=__$l4__$91;__$ctx.elemMods=__$l5__$92;return}function __$g0(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="info"){if(__$ctx.elem==="categories"){__$ctx.__$a=0;return"li"}if(!__$ctx.elem){__$ctx.__$a=0;return"ul"}}else if(__$t==="find-notes"){if(!__$ctx.elem){__$ctx.__$a=0;return"input"}}else if(__$t==="menu-tools"){if(__$ctx.elem==="item"){__$ctx.__$a=0;return"a"}}else if(__$t==="header-note"){var __$t=__$ctx.elem;if(__$t==="edit-note"){__$ctx.__$a=0;return"img"}else if(__$t==="tools-note"){__$ctx.__$a=0;return"img"}else if(__$t==="title-note"){__$ctx.__$a=0;return"h4"}}else if(__$t==="new-note-form"){var __$t=__$ctx.elem;if(__$t==="name-note"){__$ctx.__$a=0;return"input"}else if(__$t==="type-note"){__$ctx.__$a=0;return"input"}else if(__$t==="text-note"){__$ctx.__$a=0;return"textarea"}else if(__$t==="button-cancel"){__$ctx.__$a=0;return"a"}else if(__$t==="button-save"){__$ctx.__$a=0;return"a"}else if(__$t==="button-add"){__$ctx.__$a=0;return"a"}}else if(__$t==="field-data"){var __$t=__$ctx.elem;if(__$t==="button-cancel"){__$ctx.__$a=0;return"a"}else if(__$t==="button-add"){__$ctx.__$a=0;return"a"}else if(__$t==="input-data"){__$ctx.__$a=0;return"input"}}else if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="js"){__$ctx.__$a=0;return"script"}else if(__$t==="css"){if(__$ctx.ctx.url){__$ctx.__$a=0;return"link"}__$ctx.__$a=0;return"style"}else if(__$t==="head"){__$ctx.__$a=0;return"head"}else if(__$t==="favicon"){__$ctx.__$a=0;return"link"}else if(__$t==="link"){__$ctx.__$a=0;return"link"}else if(__$t==="meta"){__$ctx.__$a=0;return"meta"}else if(__$t==="body"){__$ctx.__$a=0;return"body"}}else if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return"script"}}__$ctx.__$a=0;return undefined;return __$ref}function __$g1(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="info"){if(!__$ctx.elem){__$ctx.__$a=0;return true}}else if(__$t==="find-notes"){if(!__$ctx.elem){__$ctx.__$a=0;return true}}else if(__$t==="menu-tools"){if(!__$ctx.elem){__$ctx.__$a=0;return true}}else if(__$t==="header-note"){var __$t=__$ctx.elem;if(__$t==="edit-note"){__$ctx.__$a=0;return true}else if(__$t==="tools-note"){__$ctx.__$a=0;return true}if(!__$ctx.elem){__$ctx.__$a=0;return true}}else if(__$t==="new-note-form"){if(!__$ctx.elem){__$ctx.__$a=0;return true}}else if(__$t==="field-data"){if(!__$ctx.elem){__$ctx.__$a=0;return true}}else if(__$t==="main"){if(!__$ctx.elem){__$ctx.__$a=0;return true}}__$ctx.__$a=0;return undefined;return __$ref}function __$g2(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="find-notes"){if(!__$ctx.elem){__$ctx.__$a=0;return{value:"",placeholder:"Поиск записи"}}}else if(__$t==="menu-tools"){if(__$ctx.elem==="item"){__$ctx.__$a=0;return{href:"#"}}}else if(__$t==="header-note"){var __$t=__$ctx.elem;if(__$t==="edit-note"){__$ctx.__$a=0;return{src:"../../desktop.blocks/header-note/edit.png",alt:"edit"}}else if(__$t==="tools-note"){__$ctx.__$a=0;return{src:"../../desktop.blocks/header-note/remove.png",alt:"tool"}}}else if(__$t==="new-note-form"){var __$t=__$ctx.elem;if(__$t==="name-note"){__$ctx.__$a=0;return{placeholder:"Название заметки"}}else if(__$t==="type-note"){__$ctx.__$a=0;return{disabled:"disabled",placeholder:"Выберите страницу для заметки"}}else if(__$t==="button-cancel"){__$ctx.__$a=0;return{href:"#"}}else if(__$t==="button-save"){__$ctx.__$a=0;return{href:"#"}}else if(__$t==="button-add"){__$ctx.__$a=0;return{href:"#"}}}else if(__$t==="field-data"){var __$t=__$ctx.elem;if(__$t==="button-cancel"){__$ctx.__$a=0;return{href:"#"}}else if(__$t==="button-add"){__$ctx.__$a=0;return{href:"#"}}else if(__$t==="input-data"){__$ctx.__$a=0;return{placeholder:"Новая страница"}}}else if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="js"){if(__$ctx.ctx.url){__$ctx.__$a=0;return{src:__$ctx.ctx.url}}}else if(__$t==="css"){if(__$ctx.ctx.url){__$ctx.__$a=0;return{rel:"stylesheet",href:__$ctx.ctx.url}}}else if(__$t==="favicon"){__$ctx.__$a=0;return{rel:"shortcut icon",href:__$ctx.ctx.url}}}__$ctx.__$a=0;return undefined;return __$ref};
     return exports;
  })({});
  var defineAsGlobal = true;
  if(typeof exports === "object") {
    exports["BEMHTML"] = __bem_xjst;
    defineAsGlobal = false;
  }
  if(typeof modules === "object") {
    modules.define("BEMHTML",
                   function(provide) { provide(__bem_xjst) });
    defineAsGlobal = false;
  }
  defineAsGlobal && (g["BEMHTML"] = __bem_xjst);
})(this);