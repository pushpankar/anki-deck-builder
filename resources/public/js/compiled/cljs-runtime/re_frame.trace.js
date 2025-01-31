goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__20466){
var map__20467 = p__20466;
var map__20467__$1 = cljs.core.__destructure_map(map__20467);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20467__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20467__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20467__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20467__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5002__auto__ = child_of;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__20472_20513 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__20474_20514 = null;
var count__20475_20515 = (0);
var i__20476_20516 = (0);
while(true){
if((i__20476_20516 < count__20475_20515)){
var vec__20488_20517 = chunk__20474_20514.cljs$core$IIndexed$_nth$arity$2(null, i__20476_20516);
var k_20518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20488_20517,(0),null);
var cb_20519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20488_20517,(1),null);
try{var G__20493_20520 = cljs.core.deref(re_frame.trace.traces);
(cb_20519.cljs$core$IFn$_invoke$arity$1 ? cb_20519.cljs$core$IFn$_invoke$arity$1(G__20493_20520) : cb_20519.call(null, G__20493_20520));
}catch (e20491){var e_20521 = e20491;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_20518,"while storing",cljs.core.deref(re_frame.trace.traces),e_20521], 0));
}

var G__20522 = seq__20472_20513;
var G__20523 = chunk__20474_20514;
var G__20524 = count__20475_20515;
var G__20525 = (i__20476_20516 + (1));
seq__20472_20513 = G__20522;
chunk__20474_20514 = G__20523;
count__20475_20515 = G__20524;
i__20476_20516 = G__20525;
continue;
} else {
var temp__5804__auto___20526 = cljs.core.seq(seq__20472_20513);
if(temp__5804__auto___20526){
var seq__20472_20527__$1 = temp__5804__auto___20526;
if(cljs.core.chunked_seq_QMARK_(seq__20472_20527__$1)){
var c__5525__auto___20528 = cljs.core.chunk_first(seq__20472_20527__$1);
var G__20529 = cljs.core.chunk_rest(seq__20472_20527__$1);
var G__20530 = c__5525__auto___20528;
var G__20531 = cljs.core.count(c__5525__auto___20528);
var G__20532 = (0);
seq__20472_20513 = G__20529;
chunk__20474_20514 = G__20530;
count__20475_20515 = G__20531;
i__20476_20516 = G__20532;
continue;
} else {
var vec__20494_20533 = cljs.core.first(seq__20472_20527__$1);
var k_20534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20494_20533,(0),null);
var cb_20535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20494_20533,(1),null);
try{var G__20498_20536 = cljs.core.deref(re_frame.trace.traces);
(cb_20535.cljs$core$IFn$_invoke$arity$1 ? cb_20535.cljs$core$IFn$_invoke$arity$1(G__20498_20536) : cb_20535.call(null, G__20498_20536));
}catch (e20497){var e_20537 = e20497;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_20534,"while storing",cljs.core.deref(re_frame.trace.traces),e_20537], 0));
}

var G__20539 = cljs.core.next(seq__20472_20527__$1);
var G__20540 = null;
var G__20541 = (0);
var G__20542 = (0);
seq__20472_20513 = G__20539;
chunk__20474_20514 = G__20540;
count__20475_20515 = G__20541;
i__20476_20516 = G__20542;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null, ));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
