goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__40432){
var map__40433 = p__40432;
var map__40433__$1 = cljs.core.__destructure_map(map__40433);
var runtime = map__40433__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40433__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_40808 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_40808)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__40438 = runtime;
var G__40439 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_40808);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__40438,G__40439) : shadow.remote.runtime.shared.process.call(null, G__40438,G__40439));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__40451,res){
var map__40452 = p__40451;
var map__40452__$1 = cljs.core.__destructure_map(map__40452);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40452__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40452__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__40453 = res;
var G__40453__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40453,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__40453);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40453__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__40453__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__40469 = arguments.length;
switch (G__40469) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__40479,msg,handlers,timeout_after_ms){
var map__40480 = p__40479;
var map__40480__$1 = cljs.core.__destructure_map(map__40480);
var runtime = map__40480__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40480__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___40828 = arguments.length;
var i__5727__auto___40829 = (0);
while(true){
if((i__5727__auto___40829 < len__5726__auto___40828)){
args__5732__auto__.push((arguments[i__5727__auto___40829]));

var G__40830 = (i__5727__auto___40829 + (1));
i__5727__auto___40829 = G__40830;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__40501,ev,args){
var map__40503 = p__40501;
var map__40503__$1 = cljs.core.__destructure_map(map__40503);
var runtime = map__40503__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40503__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__40504 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__40508 = null;
var count__40509 = (0);
var i__40510 = (0);
while(true){
if((i__40510 < count__40509)){
var ext = chunk__40508.cljs$core$IIndexed$_nth$arity$2(null, i__40510);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__40832 = seq__40504;
var G__40833 = chunk__40508;
var G__40834 = count__40509;
var G__40835 = (i__40510 + (1));
seq__40504 = G__40832;
chunk__40508 = G__40833;
count__40509 = G__40834;
i__40510 = G__40835;
continue;
} else {
var G__40837 = seq__40504;
var G__40838 = chunk__40508;
var G__40839 = count__40509;
var G__40840 = (i__40510 + (1));
seq__40504 = G__40837;
chunk__40508 = G__40838;
count__40509 = G__40839;
i__40510 = G__40840;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40504);
if(temp__5804__auto__){
var seq__40504__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40504__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__40504__$1);
var G__40842 = cljs.core.chunk_rest(seq__40504__$1);
var G__40843 = c__5525__auto__;
var G__40844 = cljs.core.count(c__5525__auto__);
var G__40845 = (0);
seq__40504 = G__40842;
chunk__40508 = G__40843;
count__40509 = G__40844;
i__40510 = G__40845;
continue;
} else {
var ext = cljs.core.first(seq__40504__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__40846 = cljs.core.next(seq__40504__$1);
var G__40847 = null;
var G__40848 = (0);
var G__40849 = (0);
seq__40504 = G__40846;
chunk__40508 = G__40847;
count__40509 = G__40848;
i__40510 = G__40849;
continue;
} else {
var G__40850 = cljs.core.next(seq__40504__$1);
var G__40851 = null;
var G__40852 = (0);
var G__40853 = (0);
seq__40504 = G__40850;
chunk__40508 = G__40851;
count__40509 = G__40852;
i__40510 = G__40853;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq40496){
var G__40497 = cljs.core.first(seq40496);
var seq40496__$1 = cljs.core.next(seq40496);
var G__40498 = cljs.core.first(seq40496__$1);
var seq40496__$2 = cljs.core.next(seq40496__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40497,G__40498,seq40496__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__40545,p__40546){
var map__40548 = p__40545;
var map__40548__$1 = cljs.core.__destructure_map(map__40548);
var runtime = map__40548__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40548__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__40549 = p__40546;
var map__40549__$1 = cljs.core.__destructure_map(map__40549);
var msg = map__40549__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40549__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__40552 = cljs.core.deref(state_ref);
var map__40552__$1 = cljs.core.__destructure_map(map__40552);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40552__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40552__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__40558,msg){
var map__40559 = p__40558;
var map__40559__$1 = cljs.core.__destructure_map(map__40559);
var runtime = map__40559__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40559__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__40584,key,p__40585){
var map__40586 = p__40584;
var map__40586__$1 = cljs.core.__destructure_map(map__40586);
var state = map__40586__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40586__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__40587 = p__40585;
var map__40587__$1 = cljs.core.__destructure_map(map__40587);
var spec = map__40587__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40587__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40587__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__40592,key,spec){
var map__40594 = p__40592;
var map__40594__$1 = cljs.core.__destructure_map(map__40594);
var runtime = map__40594__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40594__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___40859 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___40859 == null)){
} else {
var on_welcome_40860 = temp__5808__auto___40859;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_40860.cljs$core$IFn$_invoke$arity$0 ? on_welcome_40860.cljs$core$IFn$_invoke$arity$0() : on_welcome_40860.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__40598_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__40598_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__40599_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__40599_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__40600_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__40600_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__40601_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__40601_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__40602_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__40602_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__40635,key){
var map__40637 = p__40635;
var map__40637__$1 = cljs.core.__destructure_map(map__40637);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40637__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__40647,msg){
var map__40653 = p__40647;
var map__40653__$1 = cljs.core.__destructure_map(map__40653);
var runtime = map__40653__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40653__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__40685,p__40686){
var map__40687 = p__40685;
var map__40687__$1 = cljs.core.__destructure_map(map__40687);
var runtime = map__40687__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40687__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__40688 = p__40686;
var map__40688__$1 = cljs.core.__destructure_map(map__40688);
var msg = map__40688__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40688__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40688__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__40725 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__40727 = null;
var count__40728 = (0);
var i__40729 = (0);
while(true){
if((i__40729 < count__40728)){
var map__40768 = chunk__40727.cljs$core$IIndexed$_nth$arity$2(null, i__40729);
var map__40768__$1 = cljs.core.__destructure_map(map__40768);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40768__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__40884 = seq__40725;
var G__40885 = chunk__40727;
var G__40886 = count__40728;
var G__40887 = (i__40729 + (1));
seq__40725 = G__40884;
chunk__40727 = G__40885;
count__40728 = G__40886;
i__40729 = G__40887;
continue;
} else {
var G__40892 = seq__40725;
var G__40893 = chunk__40727;
var G__40894 = count__40728;
var G__40895 = (i__40729 + (1));
seq__40725 = G__40892;
chunk__40727 = G__40893;
count__40728 = G__40894;
i__40729 = G__40895;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40725);
if(temp__5804__auto__){
var seq__40725__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40725__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__40725__$1);
var G__40901 = cljs.core.chunk_rest(seq__40725__$1);
var G__40902 = c__5525__auto__;
var G__40903 = cljs.core.count(c__5525__auto__);
var G__40904 = (0);
seq__40725 = G__40901;
chunk__40727 = G__40902;
count__40728 = G__40903;
i__40729 = G__40904;
continue;
} else {
var map__40796 = cljs.core.first(seq__40725__$1);
var map__40796__$1 = cljs.core.__destructure_map(map__40796);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40796__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__40905 = cljs.core.next(seq__40725__$1);
var G__40906 = null;
var G__40907 = (0);
var G__40908 = (0);
seq__40725 = G__40905;
chunk__40727 = G__40906;
count__40728 = G__40907;
i__40729 = G__40908;
continue;
} else {
var G__40909 = cljs.core.next(seq__40725__$1);
var G__40910 = null;
var G__40911 = (0);
var G__40912 = (0);
seq__40725 = G__40909;
chunk__40727 = G__40910;
count__40728 = G__40911;
i__40729 = G__40912;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
