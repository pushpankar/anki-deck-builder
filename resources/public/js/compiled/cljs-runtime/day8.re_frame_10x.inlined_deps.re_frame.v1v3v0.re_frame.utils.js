goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.utils');
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 *   The key thing is that 'm' remains identical? to itself if the path was never present
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.utils.dissoc_in = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$utils$dissoc_in(m,p__13370){
var vec__13371 = p__13370;
var seq__13372 = cljs.core.seq(vec__13371);
var first__13373 = cljs.core.first(seq__13372);
var seq__13372__$1 = cljs.core.next(seq__13372);
var k = first__13373;
var ks = seq__13372__$1;
var keys = vec__13371;
if(ks){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__5802__auto__)){
var nextmap = temp__5802__auto__;
var newmap = (day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.utils.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.utils.dissoc_in.cljs$core$IFn$_invoke$arity$2(nextmap,ks) : day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.utils.dissoc_in.call(null, nextmap,ks));
if(cljs.core.seq(newmap)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newmap);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.utils.first_in_vector = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_(v)){
return cljs.core.first(v);
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: expected a vector, but got:",v], 0));
}
});
/**
 * Like apply, but f takes keyword arguments and the last argument is
 *   not a seq but a map with the arguments for f
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.utils.apply_kw = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$utils$apply_kw(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13401 = arguments.length;
var i__5727__auto___13402 = (0);
while(true){
if((i__5727__auto___13402 < len__5726__auto___13401)){
args__5732__auto__.push((arguments[i__5727__auto___13402]));

var G__13403 = (i__5727__auto___13402 + (1));
i__5727__auto___13402 = G__13403;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.utils.apply_kw.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.utils.apply_kw.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.map_QMARK_(cljs.core.last(args))){
} else {
throw (new Error("Assert failed: (map? (last args))"));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,cljs.core.butlast(args),cljs.core.last(args)));
}));

(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.utils.apply_kw.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.utils.apply_kw.cljs$lang$applyTo = (function (seq13385){
var G__13386 = cljs.core.first(seq13385);
var seq13385__$1 = cljs.core.next(seq13385);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13386,seq13385__$1);
}));


//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.utils.js.map
