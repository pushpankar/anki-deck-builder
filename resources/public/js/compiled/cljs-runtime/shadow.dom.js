goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_37895 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_37895(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_37900 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_37900(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__37306 = coll;
var G__37307 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__37306,G__37307) : shadow.dom.lazy_native_coll_seq.call(null, G__37306,G__37307));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__37316 = arguments.length;
switch (G__37316) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__37319 = arguments.length;
switch (G__37319) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__37325 = arguments.length;
switch (G__37325) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__37327 = arguments.length;
switch (G__37327) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__37329 = arguments.length;
switch (G__37329) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__37333 = arguments.length;
switch (G__37333) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e37336){if((e37336 instanceof Object)){
var e = e37336;
return console.log("didnt support attachEvent",el,e);
} else {
throw e37336;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__37337 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__37338 = null;
var count__37339 = (0);
var i__37340 = (0);
while(true){
if((i__37340 < count__37339)){
var el = chunk__37338.cljs$core$IIndexed$_nth$arity$2(null, i__37340);
var handler_37982__$1 = ((function (seq__37337,chunk__37338,count__37339,i__37340,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__37337,chunk__37338,count__37339,i__37340,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37982__$1);


var G__37983 = seq__37337;
var G__37984 = chunk__37338;
var G__37985 = count__37339;
var G__37986 = (i__37340 + (1));
seq__37337 = G__37983;
chunk__37338 = G__37984;
count__37339 = G__37985;
i__37340 = G__37986;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37337);
if(temp__5804__auto__){
var seq__37337__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37337__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37337__$1);
var G__37990 = cljs.core.chunk_rest(seq__37337__$1);
var G__37991 = c__5525__auto__;
var G__37992 = cljs.core.count(c__5525__auto__);
var G__37993 = (0);
seq__37337 = G__37990;
chunk__37338 = G__37991;
count__37339 = G__37992;
i__37340 = G__37993;
continue;
} else {
var el = cljs.core.first(seq__37337__$1);
var handler_37994__$1 = ((function (seq__37337,chunk__37338,count__37339,i__37340,el,seq__37337__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__37337,chunk__37338,count__37339,i__37340,el,seq__37337__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37994__$1);


var G__37995 = cljs.core.next(seq__37337__$1);
var G__37996 = null;
var G__37997 = (0);
var G__37998 = (0);
seq__37337 = G__37995;
chunk__37338 = G__37996;
count__37339 = G__37997;
i__37340 = G__37998;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__37345 = arguments.length;
switch (G__37345) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__37348 = cljs.core.seq(events);
var chunk__37349 = null;
var count__37350 = (0);
var i__37351 = (0);
while(true){
if((i__37351 < count__37350)){
var vec__37362 = chunk__37349.cljs$core$IIndexed$_nth$arity$2(null, i__37351);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37362,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37362,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38007 = seq__37348;
var G__38008 = chunk__37349;
var G__38009 = count__37350;
var G__38010 = (i__37351 + (1));
seq__37348 = G__38007;
chunk__37349 = G__38008;
count__37350 = G__38009;
i__37351 = G__38010;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37348);
if(temp__5804__auto__){
var seq__37348__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37348__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37348__$1);
var G__38013 = cljs.core.chunk_rest(seq__37348__$1);
var G__38014 = c__5525__auto__;
var G__38015 = cljs.core.count(c__5525__auto__);
var G__38016 = (0);
seq__37348 = G__38013;
chunk__37349 = G__38014;
count__37350 = G__38015;
i__37351 = G__38016;
continue;
} else {
var vec__37366 = cljs.core.first(seq__37348__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37366,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37366,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38019 = cljs.core.next(seq__37348__$1);
var G__38020 = null;
var G__38021 = (0);
var G__38022 = (0);
seq__37348 = G__38019;
chunk__37349 = G__38020;
count__37350 = G__38021;
i__37351 = G__38022;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__37375 = cljs.core.seq(styles);
var chunk__37376 = null;
var count__37377 = (0);
var i__37378 = (0);
while(true){
if((i__37378 < count__37377)){
var vec__37388 = chunk__37376.cljs$core$IIndexed$_nth$arity$2(null, i__37378);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37388,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37388,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38024 = seq__37375;
var G__38025 = chunk__37376;
var G__38026 = count__37377;
var G__38027 = (i__37378 + (1));
seq__37375 = G__38024;
chunk__37376 = G__38025;
count__37377 = G__38026;
i__37378 = G__38027;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37375);
if(temp__5804__auto__){
var seq__37375__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37375__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37375__$1);
var G__38029 = cljs.core.chunk_rest(seq__37375__$1);
var G__38030 = c__5525__auto__;
var G__38031 = cljs.core.count(c__5525__auto__);
var G__38032 = (0);
seq__37375 = G__38029;
chunk__37376 = G__38030;
count__37377 = G__38031;
i__37378 = G__38032;
continue;
} else {
var vec__37393 = cljs.core.first(seq__37375__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37393,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37393,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38034 = cljs.core.next(seq__37375__$1);
var G__38035 = null;
var G__38036 = (0);
var G__38037 = (0);
seq__37375 = G__38034;
chunk__37376 = G__38035;
count__37377 = G__38036;
i__37378 = G__38037;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__37399_38059 = key;
var G__37399_38060__$1 = (((G__37399_38059 instanceof cljs.core.Keyword))?G__37399_38059.fqn:null);
switch (G__37399_38060__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_38064 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_38064,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_38064,"aria-");
}
})())){
el.setAttribute(ks_38064,value);
} else {
(el[ks_38064] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__37400){
var map__37401 = p__37400;
var map__37401__$1 = cljs.core.__destructure_map(map__37401);
var props = map__37401__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37401__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__37405 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37405,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37405,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37405,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__37408 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__37408,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__37408;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__37410 = arguments.length;
switch (G__37410) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__37413){
var vec__37414 = p__37413;
var seq__37415 = cljs.core.seq(vec__37414);
var first__37416 = cljs.core.first(seq__37415);
var seq__37415__$1 = cljs.core.next(seq__37415);
var nn = first__37416;
var first__37416__$1 = cljs.core.first(seq__37415__$1);
var seq__37415__$2 = cljs.core.next(seq__37415__$1);
var np = first__37416__$1;
var nc = seq__37415__$2;
var node = vec__37414;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37420 = nn;
var G__37421 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37420,G__37421) : create_fn.call(null, G__37420,G__37421));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37422 = nn;
var G__37423 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37422,G__37423) : create_fn.call(null, G__37422,G__37423));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__37424 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37424,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37424,(1),null);
var seq__37427_38096 = cljs.core.seq(node_children);
var chunk__37428_38097 = null;
var count__37429_38098 = (0);
var i__37430_38099 = (0);
while(true){
if((i__37430_38099 < count__37429_38098)){
var child_struct_38101 = chunk__37428_38097.cljs$core$IIndexed$_nth$arity$2(null, i__37430_38099);
var children_38106 = shadow.dom.dom_node(child_struct_38101);
if(cljs.core.seq_QMARK_(children_38106)){
var seq__37447_38108 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38106));
var chunk__37449_38109 = null;
var count__37450_38110 = (0);
var i__37451_38111 = (0);
while(true){
if((i__37451_38111 < count__37450_38110)){
var child_38113 = chunk__37449_38109.cljs$core$IIndexed$_nth$arity$2(null, i__37451_38111);
if(cljs.core.truth_(child_38113)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38113);


var G__38115 = seq__37447_38108;
var G__38116 = chunk__37449_38109;
var G__38117 = count__37450_38110;
var G__38118 = (i__37451_38111 + (1));
seq__37447_38108 = G__38115;
chunk__37449_38109 = G__38116;
count__37450_38110 = G__38117;
i__37451_38111 = G__38118;
continue;
} else {
var G__38119 = seq__37447_38108;
var G__38120 = chunk__37449_38109;
var G__38121 = count__37450_38110;
var G__38122 = (i__37451_38111 + (1));
seq__37447_38108 = G__38119;
chunk__37449_38109 = G__38120;
count__37450_38110 = G__38121;
i__37451_38111 = G__38122;
continue;
}
} else {
var temp__5804__auto___38124 = cljs.core.seq(seq__37447_38108);
if(temp__5804__auto___38124){
var seq__37447_38128__$1 = temp__5804__auto___38124;
if(cljs.core.chunked_seq_QMARK_(seq__37447_38128__$1)){
var c__5525__auto___38129 = cljs.core.chunk_first(seq__37447_38128__$1);
var G__38130 = cljs.core.chunk_rest(seq__37447_38128__$1);
var G__38131 = c__5525__auto___38129;
var G__38132 = cljs.core.count(c__5525__auto___38129);
var G__38133 = (0);
seq__37447_38108 = G__38130;
chunk__37449_38109 = G__38131;
count__37450_38110 = G__38132;
i__37451_38111 = G__38133;
continue;
} else {
var child_38136 = cljs.core.first(seq__37447_38128__$1);
if(cljs.core.truth_(child_38136)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38136);


var G__38137 = cljs.core.next(seq__37447_38128__$1);
var G__38138 = null;
var G__38139 = (0);
var G__38140 = (0);
seq__37447_38108 = G__38137;
chunk__37449_38109 = G__38138;
count__37450_38110 = G__38139;
i__37451_38111 = G__38140;
continue;
} else {
var G__38141 = cljs.core.next(seq__37447_38128__$1);
var G__38142 = null;
var G__38143 = (0);
var G__38144 = (0);
seq__37447_38108 = G__38141;
chunk__37449_38109 = G__38142;
count__37450_38110 = G__38143;
i__37451_38111 = G__38144;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38106);
}


var G__38147 = seq__37427_38096;
var G__38148 = chunk__37428_38097;
var G__38149 = count__37429_38098;
var G__38150 = (i__37430_38099 + (1));
seq__37427_38096 = G__38147;
chunk__37428_38097 = G__38148;
count__37429_38098 = G__38149;
i__37430_38099 = G__38150;
continue;
} else {
var temp__5804__auto___38151 = cljs.core.seq(seq__37427_38096);
if(temp__5804__auto___38151){
var seq__37427_38154__$1 = temp__5804__auto___38151;
if(cljs.core.chunked_seq_QMARK_(seq__37427_38154__$1)){
var c__5525__auto___38155 = cljs.core.chunk_first(seq__37427_38154__$1);
var G__38157 = cljs.core.chunk_rest(seq__37427_38154__$1);
var G__38158 = c__5525__auto___38155;
var G__38159 = cljs.core.count(c__5525__auto___38155);
var G__38160 = (0);
seq__37427_38096 = G__38157;
chunk__37428_38097 = G__38158;
count__37429_38098 = G__38159;
i__37430_38099 = G__38160;
continue;
} else {
var child_struct_38161 = cljs.core.first(seq__37427_38154__$1);
var children_38163 = shadow.dom.dom_node(child_struct_38161);
if(cljs.core.seq_QMARK_(children_38163)){
var seq__37453_38164 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38163));
var chunk__37455_38165 = null;
var count__37456_38166 = (0);
var i__37457_38167 = (0);
while(true){
if((i__37457_38167 < count__37456_38166)){
var child_38171 = chunk__37455_38165.cljs$core$IIndexed$_nth$arity$2(null, i__37457_38167);
if(cljs.core.truth_(child_38171)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38171);


var G__38175 = seq__37453_38164;
var G__38176 = chunk__37455_38165;
var G__38177 = count__37456_38166;
var G__38178 = (i__37457_38167 + (1));
seq__37453_38164 = G__38175;
chunk__37455_38165 = G__38176;
count__37456_38166 = G__38177;
i__37457_38167 = G__38178;
continue;
} else {
var G__38179 = seq__37453_38164;
var G__38180 = chunk__37455_38165;
var G__38181 = count__37456_38166;
var G__38182 = (i__37457_38167 + (1));
seq__37453_38164 = G__38179;
chunk__37455_38165 = G__38180;
count__37456_38166 = G__38181;
i__37457_38167 = G__38182;
continue;
}
} else {
var temp__5804__auto___38183__$1 = cljs.core.seq(seq__37453_38164);
if(temp__5804__auto___38183__$1){
var seq__37453_38185__$1 = temp__5804__auto___38183__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37453_38185__$1)){
var c__5525__auto___38187 = cljs.core.chunk_first(seq__37453_38185__$1);
var G__38188 = cljs.core.chunk_rest(seq__37453_38185__$1);
var G__38189 = c__5525__auto___38187;
var G__38190 = cljs.core.count(c__5525__auto___38187);
var G__38191 = (0);
seq__37453_38164 = G__38188;
chunk__37455_38165 = G__38189;
count__37456_38166 = G__38190;
i__37457_38167 = G__38191;
continue;
} else {
var child_38194 = cljs.core.first(seq__37453_38185__$1);
if(cljs.core.truth_(child_38194)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38194);


var G__38196 = cljs.core.next(seq__37453_38185__$1);
var G__38197 = null;
var G__38198 = (0);
var G__38199 = (0);
seq__37453_38164 = G__38196;
chunk__37455_38165 = G__38197;
count__37456_38166 = G__38198;
i__37457_38167 = G__38199;
continue;
} else {
var G__38200 = cljs.core.next(seq__37453_38185__$1);
var G__38201 = null;
var G__38202 = (0);
var G__38203 = (0);
seq__37453_38164 = G__38200;
chunk__37455_38165 = G__38201;
count__37456_38166 = G__38202;
i__37457_38167 = G__38203;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38163);
}


var G__38205 = cljs.core.next(seq__37427_38154__$1);
var G__38206 = null;
var G__38207 = (0);
var G__38208 = (0);
seq__37427_38096 = G__38205;
chunk__37428_38097 = G__38206;
count__37429_38098 = G__38207;
i__37430_38099 = G__38208;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__37468 = cljs.core.seq(node);
var chunk__37469 = null;
var count__37470 = (0);
var i__37471 = (0);
while(true){
if((i__37471 < count__37470)){
var n = chunk__37469.cljs$core$IIndexed$_nth$arity$2(null, i__37471);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__38217 = seq__37468;
var G__38218 = chunk__37469;
var G__38219 = count__37470;
var G__38220 = (i__37471 + (1));
seq__37468 = G__38217;
chunk__37469 = G__38218;
count__37470 = G__38219;
i__37471 = G__38220;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37468);
if(temp__5804__auto__){
var seq__37468__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37468__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37468__$1);
var G__38221 = cljs.core.chunk_rest(seq__37468__$1);
var G__38222 = c__5525__auto__;
var G__38223 = cljs.core.count(c__5525__auto__);
var G__38224 = (0);
seq__37468 = G__38221;
chunk__37469 = G__38222;
count__37470 = G__38223;
i__37471 = G__38224;
continue;
} else {
var n = cljs.core.first(seq__37468__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__38227 = cljs.core.next(seq__37468__$1);
var G__38228 = null;
var G__38229 = (0);
var G__38230 = (0);
seq__37468 = G__38227;
chunk__37469 = G__38228;
count__37470 = G__38229;
i__37471 = G__38230;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__37476 = arguments.length;
switch (G__37476) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__37479 = arguments.length;
switch (G__37479) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__37485 = arguments.length;
switch (G__37485) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___38258 = arguments.length;
var i__5727__auto___38259 = (0);
while(true){
if((i__5727__auto___38259 < len__5726__auto___38258)){
args__5732__auto__.push((arguments[i__5727__auto___38259]));

var G__38263 = (i__5727__auto___38259 + (1));
i__5727__auto___38259 = G__38263;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__37496_38267 = cljs.core.seq(nodes);
var chunk__37497_38268 = null;
var count__37498_38269 = (0);
var i__37499_38270 = (0);
while(true){
if((i__37499_38270 < count__37498_38269)){
var node_38271 = chunk__37497_38268.cljs$core$IIndexed$_nth$arity$2(null, i__37499_38270);
fragment.appendChild(shadow.dom._to_dom(node_38271));


var G__38272 = seq__37496_38267;
var G__38273 = chunk__37497_38268;
var G__38274 = count__37498_38269;
var G__38275 = (i__37499_38270 + (1));
seq__37496_38267 = G__38272;
chunk__37497_38268 = G__38273;
count__37498_38269 = G__38274;
i__37499_38270 = G__38275;
continue;
} else {
var temp__5804__auto___38276 = cljs.core.seq(seq__37496_38267);
if(temp__5804__auto___38276){
var seq__37496_38277__$1 = temp__5804__auto___38276;
if(cljs.core.chunked_seq_QMARK_(seq__37496_38277__$1)){
var c__5525__auto___38278 = cljs.core.chunk_first(seq__37496_38277__$1);
var G__38279 = cljs.core.chunk_rest(seq__37496_38277__$1);
var G__38280 = c__5525__auto___38278;
var G__38281 = cljs.core.count(c__5525__auto___38278);
var G__38282 = (0);
seq__37496_38267 = G__38279;
chunk__37497_38268 = G__38280;
count__37498_38269 = G__38281;
i__37499_38270 = G__38282;
continue;
} else {
var node_38283 = cljs.core.first(seq__37496_38277__$1);
fragment.appendChild(shadow.dom._to_dom(node_38283));


var G__38284 = cljs.core.next(seq__37496_38277__$1);
var G__38285 = null;
var G__38286 = (0);
var G__38287 = (0);
seq__37496_38267 = G__38284;
chunk__37497_38268 = G__38285;
count__37498_38269 = G__38286;
i__37499_38270 = G__38287;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq37491){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37491));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__37522_38290 = cljs.core.seq(scripts);
var chunk__37523_38291 = null;
var count__37524_38292 = (0);
var i__37525_38293 = (0);
while(true){
if((i__37525_38293 < count__37524_38292)){
var vec__37533_38296 = chunk__37523_38291.cljs$core$IIndexed$_nth$arity$2(null, i__37525_38293);
var script_tag_38297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37533_38296,(0),null);
var script_body_38298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37533_38296,(1),null);
eval(script_body_38298);


var G__38299 = seq__37522_38290;
var G__38300 = chunk__37523_38291;
var G__38301 = count__37524_38292;
var G__38302 = (i__37525_38293 + (1));
seq__37522_38290 = G__38299;
chunk__37523_38291 = G__38300;
count__37524_38292 = G__38301;
i__37525_38293 = G__38302;
continue;
} else {
var temp__5804__auto___38304 = cljs.core.seq(seq__37522_38290);
if(temp__5804__auto___38304){
var seq__37522_38307__$1 = temp__5804__auto___38304;
if(cljs.core.chunked_seq_QMARK_(seq__37522_38307__$1)){
var c__5525__auto___38310 = cljs.core.chunk_first(seq__37522_38307__$1);
var G__38311 = cljs.core.chunk_rest(seq__37522_38307__$1);
var G__38312 = c__5525__auto___38310;
var G__38313 = cljs.core.count(c__5525__auto___38310);
var G__38314 = (0);
seq__37522_38290 = G__38311;
chunk__37523_38291 = G__38312;
count__37524_38292 = G__38313;
i__37525_38293 = G__38314;
continue;
} else {
var vec__37536_38319 = cljs.core.first(seq__37522_38307__$1);
var script_tag_38320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37536_38319,(0),null);
var script_body_38321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37536_38319,(1),null);
eval(script_body_38321);


var G__38324 = cljs.core.next(seq__37522_38307__$1);
var G__38325 = null;
var G__38326 = (0);
var G__38327 = (0);
seq__37522_38290 = G__38324;
chunk__37523_38291 = G__38325;
count__37524_38292 = G__38326;
i__37525_38293 = G__38327;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__37542){
var vec__37543 = p__37542;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37543,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37543,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__37547 = arguments.length;
switch (G__37547) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__37555 = cljs.core.seq(style_keys);
var chunk__37556 = null;
var count__37557 = (0);
var i__37558 = (0);
while(true){
if((i__37558 < count__37557)){
var it = chunk__37556.cljs$core$IIndexed$_nth$arity$2(null, i__37558);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38343 = seq__37555;
var G__38344 = chunk__37556;
var G__38345 = count__37557;
var G__38346 = (i__37558 + (1));
seq__37555 = G__38343;
chunk__37556 = G__38344;
count__37557 = G__38345;
i__37558 = G__38346;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37555);
if(temp__5804__auto__){
var seq__37555__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37555__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37555__$1);
var G__38351 = cljs.core.chunk_rest(seq__37555__$1);
var G__38352 = c__5525__auto__;
var G__38353 = cljs.core.count(c__5525__auto__);
var G__38354 = (0);
seq__37555 = G__38351;
chunk__37556 = G__38352;
count__37557 = G__38353;
i__37558 = G__38354;
continue;
} else {
var it = cljs.core.first(seq__37555__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38356 = cljs.core.next(seq__37555__$1);
var G__38357 = null;
var G__38358 = (0);
var G__38359 = (0);
seq__37555 = G__38356;
chunk__37556 = G__38357;
count__37557 = G__38358;
i__37558 = G__38359;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k37562,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__37569 = k37562;
var G__37569__$1 = (((G__37569 instanceof cljs.core.Keyword))?G__37569.fqn:null);
switch (G__37569__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37562,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__37574){
var vec__37575 = p__37574;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37575,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37575,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37561){
var self__ = this;
var G__37561__$1 = this;
return (new cljs.core.RecordIter((0),G__37561__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37563,other37564){
var self__ = this;
var this37563__$1 = this;
return (((!((other37564 == null)))) && ((((this37563__$1.constructor === other37564.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37563__$1.x,other37564.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37563__$1.y,other37564.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37563__$1.__extmap,other37564.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k37562){
var self__ = this;
var this__5307__auto____$1 = this;
var G__37582 = k37562;
var G__37582__$1 = (((G__37582 instanceof cljs.core.Keyword))?G__37582.fqn:null);
switch (G__37582__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37562);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__37561){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__37583 = cljs.core.keyword_identical_QMARK_;
var expr__37584 = k__5309__auto__;
if(cljs.core.truth_((pred__37583.cljs$core$IFn$_invoke$arity$2 ? pred__37583.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__37584) : pred__37583.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__37584)))){
return (new shadow.dom.Coordinate(G__37561,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37583.cljs$core$IFn$_invoke$arity$2 ? pred__37583.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__37584) : pred__37583.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__37584)))){
return (new shadow.dom.Coordinate(self__.x,G__37561,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__37561),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__37561){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__37561,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__37568){
var extmap__5342__auto__ = (function (){var G__37589 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37568,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__37568)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37589);
} else {
return G__37589;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__37568),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__37568),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k37605,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__37610 = k37605;
var G__37610__$1 = (((G__37610 instanceof cljs.core.Keyword))?G__37610.fqn:null);
switch (G__37610__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37605,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__37613){
var vec__37614 = p__37613;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37614,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37614,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37604){
var self__ = this;
var G__37604__$1 = this;
return (new cljs.core.RecordIter((0),G__37604__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37606,other37607){
var self__ = this;
var this37606__$1 = this;
return (((!((other37607 == null)))) && ((((this37606__$1.constructor === other37607.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37606__$1.w,other37607.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37606__$1.h,other37607.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37606__$1.__extmap,other37607.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k37605){
var self__ = this;
var this__5307__auto____$1 = this;
var G__37645 = k37605;
var G__37645__$1 = (((G__37645 instanceof cljs.core.Keyword))?G__37645.fqn:null);
switch (G__37645__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37605);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__37604){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__37648 = cljs.core.keyword_identical_QMARK_;
var expr__37649 = k__5309__auto__;
if(cljs.core.truth_((pred__37648.cljs$core$IFn$_invoke$arity$2 ? pred__37648.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__37649) : pred__37648.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__37649)))){
return (new shadow.dom.Size(G__37604,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37648.cljs$core$IFn$_invoke$arity$2 ? pred__37648.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__37649) : pred__37648.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__37649)))){
return (new shadow.dom.Size(self__.w,G__37604,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__37604),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__37604){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__37604,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__37608){
var extmap__5342__auto__ = (function (){var G__37654 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37608,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__37608)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37654);
} else {
return G__37654;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__37608),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__37608),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__38432 = (i + (1));
var G__38433 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__38432;
ret = G__38433;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37687){
var vec__37688 = p__37687;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37688,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37688,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__37710 = arguments.length;
switch (G__37710) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__38444 = ps;
var G__38445 = (i + (1));
el__$1 = G__38444;
i = G__38445;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__37722 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37722,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37722,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37722,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__37725_38449 = cljs.core.seq(props);
var chunk__37726_38450 = null;
var count__37727_38451 = (0);
var i__37728_38452 = (0);
while(true){
if((i__37728_38452 < count__37727_38451)){
var vec__37740_38453 = chunk__37726_38450.cljs$core$IIndexed$_nth$arity$2(null, i__37728_38452);
var k_38454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37740_38453,(0),null);
var v_38455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37740_38453,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_38454);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38454),v_38455);


var G__38458 = seq__37725_38449;
var G__38459 = chunk__37726_38450;
var G__38460 = count__37727_38451;
var G__38461 = (i__37728_38452 + (1));
seq__37725_38449 = G__38458;
chunk__37726_38450 = G__38459;
count__37727_38451 = G__38460;
i__37728_38452 = G__38461;
continue;
} else {
var temp__5804__auto___38463 = cljs.core.seq(seq__37725_38449);
if(temp__5804__auto___38463){
var seq__37725_38464__$1 = temp__5804__auto___38463;
if(cljs.core.chunked_seq_QMARK_(seq__37725_38464__$1)){
var c__5525__auto___38466 = cljs.core.chunk_first(seq__37725_38464__$1);
var G__38467 = cljs.core.chunk_rest(seq__37725_38464__$1);
var G__38468 = c__5525__auto___38466;
var G__38469 = cljs.core.count(c__5525__auto___38466);
var G__38470 = (0);
seq__37725_38449 = G__38467;
chunk__37726_38450 = G__38468;
count__37727_38451 = G__38469;
i__37728_38452 = G__38470;
continue;
} else {
var vec__37744_38472 = cljs.core.first(seq__37725_38464__$1);
var k_38473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37744_38472,(0),null);
var v_38474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37744_38472,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_38473);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38473),v_38474);


var G__38476 = cljs.core.next(seq__37725_38464__$1);
var G__38477 = null;
var G__38478 = (0);
var G__38479 = (0);
seq__37725_38449 = G__38476;
chunk__37726_38450 = G__38477;
count__37727_38451 = G__38478;
i__37728_38452 = G__38479;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__37756 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37756,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37756,(1),null);
var seq__37759_38480 = cljs.core.seq(node_children);
var chunk__37761_38481 = null;
var count__37762_38482 = (0);
var i__37763_38483 = (0);
while(true){
if((i__37763_38483 < count__37762_38482)){
var child_struct_38485 = chunk__37761_38481.cljs$core$IIndexed$_nth$arity$2(null, i__37763_38483);
if((!((child_struct_38485 == null)))){
if(typeof child_struct_38485 === 'string'){
var text_38486 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38486),child_struct_38485].join(''));
} else {
var children_38489 = shadow.dom.svg_node(child_struct_38485);
if(cljs.core.seq_QMARK_(children_38489)){
var seq__37797_38492 = cljs.core.seq(children_38489);
var chunk__37799_38493 = null;
var count__37800_38494 = (0);
var i__37801_38495 = (0);
while(true){
if((i__37801_38495 < count__37800_38494)){
var child_38496 = chunk__37799_38493.cljs$core$IIndexed$_nth$arity$2(null, i__37801_38495);
if(cljs.core.truth_(child_38496)){
node.appendChild(child_38496);


var G__38497 = seq__37797_38492;
var G__38498 = chunk__37799_38493;
var G__38499 = count__37800_38494;
var G__38500 = (i__37801_38495 + (1));
seq__37797_38492 = G__38497;
chunk__37799_38493 = G__38498;
count__37800_38494 = G__38499;
i__37801_38495 = G__38500;
continue;
} else {
var G__38505 = seq__37797_38492;
var G__38506 = chunk__37799_38493;
var G__38507 = count__37800_38494;
var G__38508 = (i__37801_38495 + (1));
seq__37797_38492 = G__38505;
chunk__37799_38493 = G__38506;
count__37800_38494 = G__38507;
i__37801_38495 = G__38508;
continue;
}
} else {
var temp__5804__auto___38510 = cljs.core.seq(seq__37797_38492);
if(temp__5804__auto___38510){
var seq__37797_38511__$1 = temp__5804__auto___38510;
if(cljs.core.chunked_seq_QMARK_(seq__37797_38511__$1)){
var c__5525__auto___38512 = cljs.core.chunk_first(seq__37797_38511__$1);
var G__38513 = cljs.core.chunk_rest(seq__37797_38511__$1);
var G__38514 = c__5525__auto___38512;
var G__38515 = cljs.core.count(c__5525__auto___38512);
var G__38516 = (0);
seq__37797_38492 = G__38513;
chunk__37799_38493 = G__38514;
count__37800_38494 = G__38515;
i__37801_38495 = G__38516;
continue;
} else {
var child_38517 = cljs.core.first(seq__37797_38511__$1);
if(cljs.core.truth_(child_38517)){
node.appendChild(child_38517);


var G__38518 = cljs.core.next(seq__37797_38511__$1);
var G__38519 = null;
var G__38520 = (0);
var G__38521 = (0);
seq__37797_38492 = G__38518;
chunk__37799_38493 = G__38519;
count__37800_38494 = G__38520;
i__37801_38495 = G__38521;
continue;
} else {
var G__38522 = cljs.core.next(seq__37797_38511__$1);
var G__38523 = null;
var G__38524 = (0);
var G__38525 = (0);
seq__37797_38492 = G__38522;
chunk__37799_38493 = G__38523;
count__37800_38494 = G__38524;
i__37801_38495 = G__38525;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38489);
}
}


var G__38528 = seq__37759_38480;
var G__38529 = chunk__37761_38481;
var G__38530 = count__37762_38482;
var G__38531 = (i__37763_38483 + (1));
seq__37759_38480 = G__38528;
chunk__37761_38481 = G__38529;
count__37762_38482 = G__38530;
i__37763_38483 = G__38531;
continue;
} else {
var G__38532 = seq__37759_38480;
var G__38533 = chunk__37761_38481;
var G__38534 = count__37762_38482;
var G__38535 = (i__37763_38483 + (1));
seq__37759_38480 = G__38532;
chunk__37761_38481 = G__38533;
count__37762_38482 = G__38534;
i__37763_38483 = G__38535;
continue;
}
} else {
var temp__5804__auto___38540 = cljs.core.seq(seq__37759_38480);
if(temp__5804__auto___38540){
var seq__37759_38541__$1 = temp__5804__auto___38540;
if(cljs.core.chunked_seq_QMARK_(seq__37759_38541__$1)){
var c__5525__auto___38542 = cljs.core.chunk_first(seq__37759_38541__$1);
var G__38543 = cljs.core.chunk_rest(seq__37759_38541__$1);
var G__38544 = c__5525__auto___38542;
var G__38545 = cljs.core.count(c__5525__auto___38542);
var G__38546 = (0);
seq__37759_38480 = G__38543;
chunk__37761_38481 = G__38544;
count__37762_38482 = G__38545;
i__37763_38483 = G__38546;
continue;
} else {
var child_struct_38547 = cljs.core.first(seq__37759_38541__$1);
if((!((child_struct_38547 == null)))){
if(typeof child_struct_38547 === 'string'){
var text_38548 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38548),child_struct_38547].join(''));
} else {
var children_38549 = shadow.dom.svg_node(child_struct_38547);
if(cljs.core.seq_QMARK_(children_38549)){
var seq__37814_38550 = cljs.core.seq(children_38549);
var chunk__37816_38551 = null;
var count__37817_38552 = (0);
var i__37818_38553 = (0);
while(true){
if((i__37818_38553 < count__37817_38552)){
var child_38555 = chunk__37816_38551.cljs$core$IIndexed$_nth$arity$2(null, i__37818_38553);
if(cljs.core.truth_(child_38555)){
node.appendChild(child_38555);


var G__38556 = seq__37814_38550;
var G__38557 = chunk__37816_38551;
var G__38558 = count__37817_38552;
var G__38559 = (i__37818_38553 + (1));
seq__37814_38550 = G__38556;
chunk__37816_38551 = G__38557;
count__37817_38552 = G__38558;
i__37818_38553 = G__38559;
continue;
} else {
var G__38560 = seq__37814_38550;
var G__38561 = chunk__37816_38551;
var G__38562 = count__37817_38552;
var G__38563 = (i__37818_38553 + (1));
seq__37814_38550 = G__38560;
chunk__37816_38551 = G__38561;
count__37817_38552 = G__38562;
i__37818_38553 = G__38563;
continue;
}
} else {
var temp__5804__auto___38564__$1 = cljs.core.seq(seq__37814_38550);
if(temp__5804__auto___38564__$1){
var seq__37814_38565__$1 = temp__5804__auto___38564__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37814_38565__$1)){
var c__5525__auto___38567 = cljs.core.chunk_first(seq__37814_38565__$1);
var G__38568 = cljs.core.chunk_rest(seq__37814_38565__$1);
var G__38569 = c__5525__auto___38567;
var G__38570 = cljs.core.count(c__5525__auto___38567);
var G__38571 = (0);
seq__37814_38550 = G__38568;
chunk__37816_38551 = G__38569;
count__37817_38552 = G__38570;
i__37818_38553 = G__38571;
continue;
} else {
var child_38572 = cljs.core.first(seq__37814_38565__$1);
if(cljs.core.truth_(child_38572)){
node.appendChild(child_38572);


var G__38573 = cljs.core.next(seq__37814_38565__$1);
var G__38574 = null;
var G__38575 = (0);
var G__38576 = (0);
seq__37814_38550 = G__38573;
chunk__37816_38551 = G__38574;
count__37817_38552 = G__38575;
i__37818_38553 = G__38576;
continue;
} else {
var G__38577 = cljs.core.next(seq__37814_38565__$1);
var G__38578 = null;
var G__38579 = (0);
var G__38580 = (0);
seq__37814_38550 = G__38577;
chunk__37816_38551 = G__38578;
count__37817_38552 = G__38579;
i__37818_38553 = G__38580;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38549);
}
}


var G__38582 = cljs.core.next(seq__37759_38541__$1);
var G__38583 = null;
var G__38584 = (0);
var G__38585 = (0);
seq__37759_38480 = G__38582;
chunk__37761_38481 = G__38583;
count__37762_38482 = G__38584;
i__37763_38483 = G__38585;
continue;
} else {
var G__38586 = cljs.core.next(seq__37759_38541__$1);
var G__38587 = null;
var G__38588 = (0);
var G__38589 = (0);
seq__37759_38480 = G__38586;
chunk__37761_38481 = G__38587;
count__37762_38482 = G__38588;
i__37763_38483 = G__38589;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___38592 = arguments.length;
var i__5727__auto___38593 = (0);
while(true){
if((i__5727__auto___38593 < len__5726__auto___38592)){
args__5732__auto__.push((arguments[i__5727__auto___38593]));

var G__38594 = (i__5727__auto___38593 + (1));
i__5727__auto___38593 = G__38594;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq37837){
var G__37838 = cljs.core.first(seq37837);
var seq37837__$1 = cljs.core.next(seq37837);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37838,seq37837__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
