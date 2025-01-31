goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.kinds.call(null, day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v3v0.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__17067 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__17068 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__17068);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___17289 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___17289)){
var new_db_17291 = temp__5804__auto___17289;
var fexpr__17070_17292 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__17070_17292.cljs$core$IFn$_invoke$arity$1 ? fexpr__17070_17292.cljs$core$IFn$_invoke$arity$1(new_db_17291) : fexpr__17070_17292.call(null, new_db_17291));
} else {
}

var seq__17072 = cljs.core.seq(effects_without_db);
var chunk__17074 = null;
var count__17075 = (0);
var i__17076 = (0);
while(true){
if((i__17076 < count__17075)){
var vec__17090 = chunk__17074.cljs$core$IIndexed$_nth$arity$2(null, i__17076);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17090,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17090,(1),null);
var temp__5802__auto___17296 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___17296)){
var effect_fn_17297 = temp__5802__auto___17296;
(effect_fn_17297.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17297.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17297.call(null, effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17298 = seq__17072;
var G__17299 = chunk__17074;
var G__17300 = count__17075;
var G__17301 = (i__17076 + (1));
seq__17072 = G__17298;
chunk__17074 = G__17299;
count__17075 = G__17300;
i__17076 = G__17301;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17072);
if(temp__5804__auto__){
var seq__17072__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17072__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17072__$1);
var G__17302 = cljs.core.chunk_rest(seq__17072__$1);
var G__17303 = c__5525__auto__;
var G__17304 = cljs.core.count(c__5525__auto__);
var G__17305 = (0);
seq__17072 = G__17302;
chunk__17074 = G__17303;
count__17075 = G__17304;
i__17076 = G__17305;
continue;
} else {
var vec__17101 = cljs.core.first(seq__17072__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17101,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17101,(1),null);
var temp__5802__auto___17306 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___17306)){
var effect_fn_17307 = temp__5802__auto___17306;
(effect_fn_17307.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17307.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17307.call(null, effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17308 = cljs.core.next(seq__17072__$1);
var G__17309 = null;
var G__17310 = (0);
var G__17311 = (0);
seq__17072 = G__17308;
chunk__17074 = G__17309;
count__17075 = G__17310;
i__17076 = G__17311;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__15763__auto___17312 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.interop.now();
var duration__15764__auto___17313 = (end__15763__auto___17312 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__15764__auto___17313,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.run_tracing_callbacks_BANG_(end__15763__auto___17312);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__17067);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___17315 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___17315)){
var new_db_17316 = temp__5804__auto___17315;
var fexpr__17109_17317 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__17109_17317.cljs$core$IFn$_invoke$arity$1 ? fexpr__17109_17317.cljs$core$IFn$_invoke$arity$1(new_db_17316) : fexpr__17109_17317.call(null, new_db_17316));
} else {
}

var seq__17110 = cljs.core.seq(effects_without_db);
var chunk__17111 = null;
var count__17112 = (0);
var i__17113 = (0);
while(true){
if((i__17113 < count__17112)){
var vec__17132 = chunk__17111.cljs$core$IIndexed$_nth$arity$2(null, i__17113);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17132,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17132,(1),null);
var temp__5802__auto___17325 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___17325)){
var effect_fn_17326 = temp__5802__auto___17325;
(effect_fn_17326.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17326.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17326.call(null, effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17328 = seq__17110;
var G__17329 = chunk__17111;
var G__17330 = count__17112;
var G__17331 = (i__17113 + (1));
seq__17110 = G__17328;
chunk__17111 = G__17329;
count__17112 = G__17330;
i__17113 = G__17331;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17110);
if(temp__5804__auto__){
var seq__17110__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17110__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17110__$1);
var G__17335 = cljs.core.chunk_rest(seq__17110__$1);
var G__17336 = c__5525__auto__;
var G__17337 = cljs.core.count(c__5525__auto__);
var G__17338 = (0);
seq__17110 = G__17335;
chunk__17111 = G__17336;
count__17112 = G__17337;
i__17113 = G__17338;
continue;
} else {
var vec__17148 = cljs.core.first(seq__17110__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17148,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17148,(1),null);
var temp__5802__auto___17345 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___17345)){
var effect_fn_17348 = temp__5802__auto___17345;
(effect_fn_17348.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17348.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17348.call(null, effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17351 = cljs.core.next(seq__17110__$1);
var G__17352 = null;
var G__17353 = (0);
var G__17354 = (0);
seq__17110 = G__17351;
chunk__17111 = G__17352;
count__17112 = G__17353;
i__17113 = G__17354;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$fx$dispatch_later(p__17155){
var map__17157 = p__17155;
var map__17157__$1 = cljs.core.__destructure_map(map__17157);
var effect = map__17157__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17157__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17157__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.dispatch_later(value);
} else {
var seq__17165 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__17166 = null;
var count__17167 = (0);
var i__17168 = (0);
while(true){
if((i__17168 < count__17167)){
var effect = chunk__17166.cljs$core$IIndexed$_nth$arity$2(null, i__17168);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.dispatch_later(effect);


var G__17367 = seq__17165;
var G__17368 = chunk__17166;
var G__17369 = count__17167;
var G__17370 = (i__17168 + (1));
seq__17165 = G__17367;
chunk__17166 = G__17368;
count__17167 = G__17369;
i__17168 = G__17370;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17165);
if(temp__5804__auto__){
var seq__17165__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17165__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17165__$1);
var G__17372 = cljs.core.chunk_rest(seq__17165__$1);
var G__17373 = c__5525__auto__;
var G__17374 = cljs.core.count(c__5525__auto__);
var G__17375 = (0);
seq__17165 = G__17372;
chunk__17166 = G__17373;
count__17167 = G__17374;
i__17168 = G__17375;
continue;
} else {
var effect = cljs.core.first(seq__17165__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.dispatch_later(effect);


var G__17378 = cljs.core.next(seq__17165__$1);
var G__17379 = null;
var G__17380 = (0);
var G__17381 = (0);
seq__17165 = G__17378;
chunk__17166 = G__17379;
count__17167 = G__17380;
i__17168 = G__17381;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__17184 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__17185 = null;
var count__17186 = (0);
var i__17187 = (0);
while(true){
if((i__17187 < count__17186)){
var vec__17211 = chunk__17185.cljs$core$IIndexed$_nth$arity$2(null, i__17187);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17211,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17211,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___17388 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___17388)){
var effect_fn_17389 = temp__5802__auto___17388;
(effect_fn_17389.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17389.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17389.call(null, effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__17391 = seq__17184;
var G__17392 = chunk__17185;
var G__17393 = count__17186;
var G__17394 = (i__17187 + (1));
seq__17184 = G__17391;
chunk__17185 = G__17392;
count__17186 = G__17393;
i__17187 = G__17394;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17184);
if(temp__5804__auto__){
var seq__17184__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17184__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17184__$1);
var G__17398 = cljs.core.chunk_rest(seq__17184__$1);
var G__17399 = c__5525__auto__;
var G__17400 = cljs.core.count(c__5525__auto__);
var G__17401 = (0);
seq__17184 = G__17398;
chunk__17185 = G__17399;
count__17186 = G__17400;
i__17187 = G__17401;
continue;
} else {
var vec__17221 = cljs.core.first(seq__17184__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17221,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17221,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___17403 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___17403)){
var effect_fn_17404 = temp__5802__auto___17403;
(effect_fn_17404.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17404.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17404.call(null, effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__17407 = cljs.core.next(seq__17184__$1);
var G__17408 = null;
var G__17409 = (0);
var G__17410 = (0);
seq__17184 = G__17407;
chunk__17185 = G__17408;
count__17186 = G__17409;
i__17187 = G__17410;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__17235 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__17236 = null;
var count__17237 = (0);
var i__17238 = (0);
while(true){
if((i__17238 < count__17237)){
var event = chunk__17236.cljs$core$IIndexed$_nth$arity$2(null, i__17238);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.router.dispatch(event);


var G__17420 = seq__17235;
var G__17421 = chunk__17236;
var G__17422 = count__17237;
var G__17423 = (i__17238 + (1));
seq__17235 = G__17420;
chunk__17236 = G__17421;
count__17237 = G__17422;
i__17238 = G__17423;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17235);
if(temp__5804__auto__){
var seq__17235__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17235__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17235__$1);
var G__17424 = cljs.core.chunk_rest(seq__17235__$1);
var G__17425 = c__5525__auto__;
var G__17426 = cljs.core.count(c__5525__auto__);
var G__17427 = (0);
seq__17235 = G__17424;
chunk__17236 = G__17425;
count__17237 = G__17426;
i__17238 = G__17427;
continue;
} else {
var event = cljs.core.first(seq__17235__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.router.dispatch(event);


var G__17428 = cljs.core.next(seq__17235__$1);
var G__17429 = null;
var G__17430 = (0);
var G__17431 = (0);
seq__17235 = G__17428;
chunk__17236 = G__17429;
count__17237 = G__17430;
i__17238 = G__17431;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__17257 = cljs.core.seq(value);
var chunk__17258 = null;
var count__17259 = (0);
var i__17260 = (0);
while(true){
if((i__17260 < count__17259)){
var event = chunk__17258.cljs$core$IIndexed$_nth$arity$2(null, i__17260);
clear_event(event);


var G__17436 = seq__17257;
var G__17437 = chunk__17258;
var G__17438 = count__17259;
var G__17439 = (i__17260 + (1));
seq__17257 = G__17436;
chunk__17258 = G__17437;
count__17259 = G__17438;
i__17260 = G__17439;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17257);
if(temp__5804__auto__){
var seq__17257__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17257__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17257__$1);
var G__17441 = cljs.core.chunk_rest(seq__17257__$1);
var G__17442 = c__5525__auto__;
var G__17443 = cljs.core.count(c__5525__auto__);
var G__17444 = (0);
seq__17257 = G__17441;
chunk__17258 = G__17442;
count__17259 = G__17443;
i__17260 = G__17444;
continue;
} else {
var event = cljs.core.first(seq__17257__$1);
clear_event(event);


var G__17449 = cljs.core.next(seq__17257__$1);
var G__17450 = null;
var G__17451 = (0);
var G__17452 = (0);
seq__17257 = G__17449;
chunk__17258 = G__17450;
count__17259 = G__17451;
i__17260 = G__17452;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.js.map
