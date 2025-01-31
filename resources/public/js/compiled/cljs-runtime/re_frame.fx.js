goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null, re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__21609 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__21610 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__21610);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___21985 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___21985)){
var new_db_21986 = temp__5804__auto___21985;
var fexpr__21622_21987 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__21622_21987.cljs$core$IFn$_invoke$arity$1 ? fexpr__21622_21987.cljs$core$IFn$_invoke$arity$1(new_db_21986) : fexpr__21622_21987.call(null, new_db_21986));
} else {
}

var seq__21624 = cljs.core.seq(effects_without_db);
var chunk__21625 = null;
var count__21626 = (0);
var i__21627 = (0);
while(true){
if((i__21627 < count__21626)){
var vec__21659 = chunk__21625.cljs$core$IIndexed$_nth$arity$2(null, i__21627);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21659,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21659,(1),null);
var temp__5802__auto___21990 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___21990)){
var effect_fn_21991 = temp__5802__auto___21990;
(effect_fn_21991.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21991.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21991.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__21992 = seq__21624;
var G__21993 = chunk__21625;
var G__21994 = count__21626;
var G__21995 = (i__21627 + (1));
seq__21624 = G__21992;
chunk__21625 = G__21993;
count__21626 = G__21994;
i__21627 = G__21995;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21624);
if(temp__5804__auto__){
var seq__21624__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21624__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21624__$1);
var G__22008 = cljs.core.chunk_rest(seq__21624__$1);
var G__22009 = c__5525__auto__;
var G__22010 = cljs.core.count(c__5525__auto__);
var G__22011 = (0);
seq__21624 = G__22008;
chunk__21625 = G__22009;
count__21626 = G__22010;
i__21627 = G__22011;
continue;
} else {
var vec__21665 = cljs.core.first(seq__21624__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21665,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21665,(1),null);
var temp__5802__auto___22014 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___22014)){
var effect_fn_22021 = temp__5802__auto___22014;
(effect_fn_22021.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22021.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22021.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__22024 = cljs.core.next(seq__21624__$1);
var G__22025 = null;
var G__22026 = (0);
var G__22027 = (0);
seq__21624 = G__22024;
chunk__21625 = G__22025;
count__21626 = G__22026;
i__21627 = G__22027;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__20431__auto___22028 = re_frame.interop.now();
var duration__20432__auto___22029 = (end__20431__auto___22028 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__20432__auto___22029,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__20431__auto___22028);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__21609);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___22035 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___22035)){
var new_db_22036 = temp__5804__auto___22035;
var fexpr__21679_22037 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__21679_22037.cljs$core$IFn$_invoke$arity$1 ? fexpr__21679_22037.cljs$core$IFn$_invoke$arity$1(new_db_22036) : fexpr__21679_22037.call(null, new_db_22036));
} else {
}

var seq__21681 = cljs.core.seq(effects_without_db);
var chunk__21682 = null;
var count__21683 = (0);
var i__21684 = (0);
while(true){
if((i__21684 < count__21683)){
var vec__21708 = chunk__21682.cljs$core$IIndexed$_nth$arity$2(null, i__21684);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21708,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21708,(1),null);
var temp__5802__auto___22042 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___22042)){
var effect_fn_22044 = temp__5802__auto___22042;
(effect_fn_22044.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22044.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22044.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__22047 = seq__21681;
var G__22048 = chunk__21682;
var G__22049 = count__21683;
var G__22050 = (i__21684 + (1));
seq__21681 = G__22047;
chunk__21682 = G__22048;
count__21683 = G__22049;
i__21684 = G__22050;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21681);
if(temp__5804__auto__){
var seq__21681__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21681__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21681__$1);
var G__22052 = cljs.core.chunk_rest(seq__21681__$1);
var G__22053 = c__5525__auto__;
var G__22054 = cljs.core.count(c__5525__auto__);
var G__22055 = (0);
seq__21681 = G__22052;
chunk__21682 = G__22053;
count__21683 = G__22054;
i__21684 = G__22055;
continue;
} else {
var vec__21717 = cljs.core.first(seq__21681__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21717,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21717,(1),null);
var temp__5802__auto___22064 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___22064)){
var effect_fn_22066 = temp__5802__auto___22064;
(effect_fn_22066.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22066.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22066.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__22069 = cljs.core.next(seq__21681__$1);
var G__22070 = null;
var G__22071 = (0);
var G__22072 = (0);
seq__21681 = G__22069;
chunk__21682 = G__22070;
count__21683 = G__22071;
i__21684 = G__22072;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__21733){
var map__21734 = p__21733;
var map__21734__$1 = cljs.core.__destructure_map(map__21734);
var effect = map__21734__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21734__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21734__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__21746 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__21747 = null;
var count__21748 = (0);
var i__21749 = (0);
while(true){
if((i__21749 < count__21748)){
var effect = chunk__21747.cljs$core$IIndexed$_nth$arity$2(null, i__21749);
re_frame.fx.dispatch_later(effect);


var G__22086 = seq__21746;
var G__22087 = chunk__21747;
var G__22088 = count__21748;
var G__22089 = (i__21749 + (1));
seq__21746 = G__22086;
chunk__21747 = G__22087;
count__21748 = G__22088;
i__21749 = G__22089;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21746);
if(temp__5804__auto__){
var seq__21746__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21746__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21746__$1);
var G__22093 = cljs.core.chunk_rest(seq__21746__$1);
var G__22094 = c__5525__auto__;
var G__22095 = cljs.core.count(c__5525__auto__);
var G__22096 = (0);
seq__21746 = G__22093;
chunk__21747 = G__22094;
count__21748 = G__22095;
i__21749 = G__22096;
continue;
} else {
var effect = cljs.core.first(seq__21746__$1);
re_frame.fx.dispatch_later(effect);


var G__22098 = cljs.core.next(seq__21746__$1);
var G__22099 = null;
var G__22100 = (0);
var G__22101 = (0);
seq__21746 = G__22098;
chunk__21747 = G__22099;
count__21748 = G__22100;
i__21749 = G__22101;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__21768 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__21769 = null;
var count__21770 = (0);
var i__21771 = (0);
while(true){
if((i__21771 < count__21770)){
var vec__21823 = chunk__21769.cljs$core$IIndexed$_nth$arity$2(null, i__21771);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21823,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21823,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___22129 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___22129)){
var effect_fn_22132 = temp__5802__auto___22129;
(effect_fn_22132.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22132.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22132.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__22135 = seq__21768;
var G__22136 = chunk__21769;
var G__22137 = count__21770;
var G__22138 = (i__21771 + (1));
seq__21768 = G__22135;
chunk__21769 = G__22136;
count__21770 = G__22137;
i__21771 = G__22138;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21768);
if(temp__5804__auto__){
var seq__21768__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21768__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21768__$1);
var G__22152 = cljs.core.chunk_rest(seq__21768__$1);
var G__22153 = c__5525__auto__;
var G__22154 = cljs.core.count(c__5525__auto__);
var G__22155 = (0);
seq__21768 = G__22152;
chunk__21769 = G__22153;
count__21770 = G__22154;
i__21771 = G__22155;
continue;
} else {
var vec__21851 = cljs.core.first(seq__21768__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21851,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21851,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___22160 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___22160)){
var effect_fn_22161 = temp__5802__auto___22160;
(effect_fn_22161.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22161.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22161.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__22164 = cljs.core.next(seq__21768__$1);
var G__22165 = null;
var G__22166 = (0);
var G__22167 = (0);
seq__21768 = G__22164;
chunk__21769 = G__22165;
count__21770 = G__22166;
i__21771 = G__22167;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__21879 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__21880 = null;
var count__21881 = (0);
var i__21882 = (0);
while(true){
if((i__21882 < count__21881)){
var event = chunk__21880.cljs$core$IIndexed$_nth$arity$2(null, i__21882);
re_frame.router.dispatch(event);


var G__22177 = seq__21879;
var G__22178 = chunk__21880;
var G__22179 = count__21881;
var G__22180 = (i__21882 + (1));
seq__21879 = G__22177;
chunk__21880 = G__22178;
count__21881 = G__22179;
i__21882 = G__22180;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21879);
if(temp__5804__auto__){
var seq__21879__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21879__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21879__$1);
var G__22183 = cljs.core.chunk_rest(seq__21879__$1);
var G__22184 = c__5525__auto__;
var G__22185 = cljs.core.count(c__5525__auto__);
var G__22186 = (0);
seq__21879 = G__22183;
chunk__21880 = G__22184;
count__21881 = G__22185;
i__21882 = G__22186;
continue;
} else {
var event = cljs.core.first(seq__21879__$1);
re_frame.router.dispatch(event);


var G__22189 = cljs.core.next(seq__21879__$1);
var G__22190 = null;
var G__22191 = (0);
var G__22192 = (0);
seq__21879 = G__22189;
chunk__21880 = G__22190;
count__21881 = G__22191;
i__21882 = G__22192;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__21910 = cljs.core.seq(value);
var chunk__21911 = null;
var count__21912 = (0);
var i__21913 = (0);
while(true){
if((i__21913 < count__21912)){
var event = chunk__21911.cljs$core$IIndexed$_nth$arity$2(null, i__21913);
clear_event(event);


var G__22202 = seq__21910;
var G__22203 = chunk__21911;
var G__22204 = count__21912;
var G__22205 = (i__21913 + (1));
seq__21910 = G__22202;
chunk__21911 = G__22203;
count__21912 = G__22204;
i__21913 = G__22205;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21910);
if(temp__5804__auto__){
var seq__21910__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21910__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21910__$1);
var G__22210 = cljs.core.chunk_rest(seq__21910__$1);
var G__22211 = c__5525__auto__;
var G__22212 = cljs.core.count(c__5525__auto__);
var G__22213 = (0);
seq__21910 = G__22210;
chunk__21911 = G__22211;
count__21912 = G__22212;
i__21913 = G__22213;
continue;
} else {
var event = cljs.core.first(seq__21910__$1);
clear_event(event);


var G__22219 = cljs.core.next(seq__21910__$1);
var G__22220 = null;
var G__22221 = (0);
var G__22222 = (0);
seq__21910 = G__22219;
chunk__21911 = G__22220;
count__21912 = G__22221;
i__21913 = G__22222;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__21950 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__21951 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__21951);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__20431__auto___22231 = re_frame.interop.now();
var duration__20432__auto___22232 = (end__20431__auto___22231 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__20432__auto___22232,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__20431__auto___22231);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__21950);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
