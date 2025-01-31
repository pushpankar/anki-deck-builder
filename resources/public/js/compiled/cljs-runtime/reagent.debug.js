goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__18464__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__18464 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18466__i = 0, G__18466__a = new Array(arguments.length -  0);
while (G__18466__i < G__18466__a.length) {G__18466__a[G__18466__i] = arguments[G__18466__i + 0]; ++G__18466__i;}
  args = new cljs.core.IndexedSeq(G__18466__a,0,null);
} 
return G__18464__delegate.call(this,args);};
G__18464.cljs$lang$maxFixedArity = 0;
G__18464.cljs$lang$applyTo = (function (arglist__18467){
var args = cljs.core.seq(arglist__18467);
return G__18464__delegate(args);
});
G__18464.cljs$core$IFn$_invoke$arity$variadic = G__18464__delegate;
return G__18464;
})()
);

(o.error = (function() { 
var G__18468__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__18468 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18469__i = 0, G__18469__a = new Array(arguments.length -  0);
while (G__18469__i < G__18469__a.length) {G__18469__a[G__18469__i] = arguments[G__18469__i + 0]; ++G__18469__i;}
  args = new cljs.core.IndexedSeq(G__18469__a,0,null);
} 
return G__18468__delegate.call(this,args);};
G__18468.cljs$lang$maxFixedArity = 0;
G__18468.cljs$lang$applyTo = (function (arglist__18470){
var args = cljs.core.seq(arglist__18470);
return G__18468__delegate(args);
});
G__18468.cljs$core$IFn$_invoke$arity$variadic = G__18468__delegate;
return G__18468;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
