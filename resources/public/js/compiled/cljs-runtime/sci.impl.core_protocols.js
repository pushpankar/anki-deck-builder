goog.provide('sci.impl.core_protocols');
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._deref !== 'undefined')){
} else {
sci.impl.core_protocols._deref = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__29055 = cljs.core.get_global_hierarchy;
return (fexpr__29055.cljs$core$IFn$_invoke$arity$0 ? fexpr__29055.cljs$core$IFn$_invoke$arity$0() : fexpr__29055.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-deref"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__29059 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-deref","-deref",-283116853,null));
return (fexpr__29059.cljs$core$IFn$_invoke$arity$1 ? fexpr__29059.cljs$core$IFn$_invoke$arity$1(ref) : fexpr__29059.call(null, ref));
}));
sci.impl.core_protocols.ideref_default = sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref){
return cljs.core.deref(ref);
}));
sci.impl.core_protocols.deref_STAR_ = (function sci$impl$core_protocols$deref_STAR_(x){
return sci.impl.core_protocols._deref.cljs$core$IFn$_invoke$arity$1(x);
});
sci.impl.core_protocols.cljs_core_ns = sci.lang.__GT_Namespace(new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null);
sci.impl.core_protocols.deref_protocol = sci.impl.utils.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IDeref","cljs.core.IDeref",-783543206,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IDeref,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._deref]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._swap_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._swap_BANG_ = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__29070 = cljs.core.get_global_hierarchy;
return (fexpr__29070.cljs$core$IFn$_invoke$arity$0 ? fexpr__29070.cljs$core$IFn$_invoke$arity$0() : fexpr__29070.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-swap!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._reset_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._reset_BANG_ = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__29084 = cljs.core.get_global_hierarchy;
return (fexpr__29084.cljs$core$IFn$_invoke$arity$0 ? fexpr__29084.cljs$core$IFn$_invoke$arity$0() : fexpr__29084.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-reset!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function() {
var G__29193 = null;
var G__29193__2 = (function (ref,f){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__29097 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__29097.cljs$core$IFn$_invoke$arity$2 ? fexpr__29097.cljs$core$IFn$_invoke$arity$2(ref,f) : fexpr__29097.call(null, ref,f));
});
var G__29193__3 = (function (ref,f,a1){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__29102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__29102.cljs$core$IFn$_invoke$arity$3 ? fexpr__29102.cljs$core$IFn$_invoke$arity$3(ref,f,a1) : fexpr__29102.call(null, ref,f,a1));
});
var G__29193__4 = (function (ref,f,a1,a2){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__29104 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__29104.cljs$core$IFn$_invoke$arity$4 ? fexpr__29104.cljs$core$IFn$_invoke$arity$4(ref,f,a1,a2) : fexpr__29104.call(null, ref,f,a1,a2));
});
var G__29193__5 = (function() { 
var G__29198__delegate = function (ref,f,a1,a2,args){
var methods$ = sci.impl.types.getMethods(ref);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null)),ref,f,a1,a2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
};
var G__29198 = function (ref,f,a1,a2,var_args){
var args = null;
if (arguments.length > 4) {
var G__29200__i = 0, G__29200__a = new Array(arguments.length -  4);
while (G__29200__i < G__29200__a.length) {G__29200__a[G__29200__i] = arguments[G__29200__i + 4]; ++G__29200__i;}
  args = new cljs.core.IndexedSeq(G__29200__a,0,null);
} 
return G__29198__delegate.call(this,ref,f,a1,a2,args);};
G__29198.cljs$lang$maxFixedArity = 4;
G__29198.cljs$lang$applyTo = (function (arglist__29208){
var ref = cljs.core.first(arglist__29208);
arglist__29208 = cljs.core.next(arglist__29208);
var f = cljs.core.first(arglist__29208);
arglist__29208 = cljs.core.next(arglist__29208);
var a1 = cljs.core.first(arglist__29208);
arglist__29208 = cljs.core.next(arglist__29208);
var a2 = cljs.core.first(arglist__29208);
var args = cljs.core.rest(arglist__29208);
return G__29198__delegate(ref,f,a1,a2,args);
});
G__29198.cljs$core$IFn$_invoke$arity$variadic = G__29198__delegate;
return G__29198;
})()
;
G__29193 = function(ref,f,a1,a2,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return G__29193__2.call(this,ref,f);
case 3:
return G__29193__3.call(this,ref,f,a1);
case 4:
return G__29193__4.call(this,ref,f,a1,a2);
default:
var G__29213 = null;
if (arguments.length > 4) {
var G__29214__i = 0, G__29214__a = new Array(arguments.length -  4);
while (G__29214__i < G__29214__a.length) {G__29214__a[G__29214__i] = arguments[G__29214__i + 4]; ++G__29214__i;}
G__29213 = new cljs.core.IndexedSeq(G__29214__a,0,null);
}
return G__29193__5.cljs$core$IFn$_invoke$arity$variadic(ref,f,a1,a2, G__29213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29193.cljs$lang$maxFixedArity = 4;
G__29193.cljs$lang$applyTo = G__29193__5.cljs$lang$applyTo;
G__29193.cljs$core$IFn$_invoke$arity$2 = G__29193__2;
G__29193.cljs$core$IFn$_invoke$arity$3 = G__29193__3;
G__29193.cljs$core$IFn$_invoke$arity$4 = G__29193__4;
G__29193.cljs$core$IFn$_invoke$arity$variadic = G__29193__5.cljs$core$IFn$_invoke$arity$variadic;
return G__29193;
})()
);
sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref,v){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__29109 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-reset!","-reset!",1965723739,null));
return (fexpr__29109.cljs$core$IFn$_invoke$arity$2 ? fexpr__29109.cljs$core$IFn$_invoke$arity$2(ref,v) : fexpr__29109.call(null, ref,v));
}));
sci.impl.core_protocols.iatom_defaults = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__29215__delegate = function (ref,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,ref,f,args);
};
var G__29215 = function (ref,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__29216__i = 0, G__29216__a = new Array(arguments.length -  2);
while (G__29216__i < G__29216__a.length) {G__29216__a[G__29216__i] = arguments[G__29216__i + 2]; ++G__29216__i;}
  args = new cljs.core.IndexedSeq(G__29216__a,0,null);
} 
return G__29215__delegate.call(this,ref,f,args);};
G__29215.cljs$lang$maxFixedArity = 2;
G__29215.cljs$lang$applyTo = (function (arglist__29217){
var ref = cljs.core.first(arglist__29217);
arglist__29217 = cljs.core.next(arglist__29217);
var f = cljs.core.first(arglist__29217);
var args = cljs.core.rest(arglist__29217);
return G__29215__delegate(ref,f,args);
});
G__29215.cljs$core$IFn$_invoke$arity$variadic = G__29215__delegate;
return G__29215;
})()
),sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref,v){
return cljs.core.reset_BANG_(ref,v);
}))], null);
sci.impl.core_protocols.swap_BANG__STAR_ = (function sci$impl$core_protocols$swap_BANG__STAR_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29224 = arguments.length;
var i__5727__auto___29225 = (0);
while(true){
if((i__5727__auto___29225 < len__5726__auto___29224)){
args__5732__auto__.push((arguments[i__5727__auto___29225]));

var G__29227 = (i__5727__auto___29225 + (1));
i__5727__auto___29225 = G__29227;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,f,args){
if(cljs.core.truth_(args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.core_protocols._swap_BANG_,ref,f,args);
} else {
return sci.impl.core_protocols._swap_BANG_.cljs$core$IFn$_invoke$arity$2(ref,f);
}
}));

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$applyTo = (function (seq29128){
var G__29129 = cljs.core.first(seq29128);
var seq29128__$1 = cljs.core.next(seq29128);
var G__29130 = cljs.core.first(seq29128__$1);
var seq29128__$2 = cljs.core.next(seq29128__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29129,G__29130,seq29128__$2);
}));

sci.impl.core_protocols.reset_BANG__STAR_ = (function sci$impl$core_protocols$reset_BANG__STAR_(ref,v){
return sci.impl.core_protocols._reset_BANG_.cljs$core$IFn$_invoke$arity$2(ref,v);
});
sci.impl.core_protocols.swap_protocol = sci.impl.utils.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.ISwap","cljs.core.ISwap",2045511362,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.ISwap,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._swap_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.reset_protocol = sci.impl.utils.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IReset","cljs.core.IReset",348905844,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IReset,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._reset_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.defaults = cljs.core.set(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sci.impl.core_protocols.iatom_defaults,sci.impl.core_protocols.ideref_default));

//# sourceMappingURL=sci.impl.core_protocols.js.map
