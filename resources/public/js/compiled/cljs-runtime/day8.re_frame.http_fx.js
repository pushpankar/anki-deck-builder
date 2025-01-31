goog.provide('day8.re_frame.http_fx');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__22177){
var vec__22178 = p__22177;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22178,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22178,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null, response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null, details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__22183){
var map__22184 = p__22183;
var map__22184__$1 = cljs.core.__destructure_map(map__22184);
var request = map__22184__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22184__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22184__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,new cljs.core.Keyword(null,"api","api",-899839580),api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__22181_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__22181_SHARP_));
}),(function (p1__22182_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__22182_SHARP_));
}),api)], 0)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.Keyword(null,"on-request","on-request",972531605)], 0));
});
day8.re_frame.http_fx.dispatch_on_request = (function day8$re_frame$http_fx$dispatch_on_request(request,xhrio){
var temp__5802__auto__ = new cljs.core.Keyword(null,"on-request","on-request",972531605).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto__)){
var on_request = temp__5802__auto__;
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_request,xhrio));
} else {
return null;
}
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__22194 = cljs.core.seq(seq_request_maps);
var chunk__22195 = null;
var count__22196 = (0);
var i__22197 = (0);
while(true){
if((i__22197 < count__22196)){
var request__$1 = chunk__22195.cljs$core$IIndexed$_nth$arity$2(null, i__22197);
var xhrio_22202 = ajax.simple.ajax_request(day8.re_frame.http_fx.request__GT_xhrio_options(request__$1));
day8.re_frame.http_fx.dispatch_on_request(request__$1,xhrio_22202);


var G__22203 = seq__22194;
var G__22204 = chunk__22195;
var G__22205 = count__22196;
var G__22206 = (i__22197 + (1));
seq__22194 = G__22203;
chunk__22195 = G__22204;
count__22196 = G__22205;
i__22197 = G__22206;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22194);
if(temp__5804__auto__){
var seq__22194__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22194__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22194__$1);
var G__22207 = cljs.core.chunk_rest(seq__22194__$1);
var G__22208 = c__5525__auto__;
var G__22209 = cljs.core.count(c__5525__auto__);
var G__22210 = (0);
seq__22194 = G__22207;
chunk__22195 = G__22208;
count__22196 = G__22209;
i__22197 = G__22210;
continue;
} else {
var request__$1 = cljs.core.first(seq__22194__$1);
var xhrio_22211 = ajax.simple.ajax_request(day8.re_frame.http_fx.request__GT_xhrio_options(request__$1));
day8.re_frame.http_fx.dispatch_on_request(request__$1,xhrio_22211);


var G__22212 = cljs.core.next(seq__22194__$1);
var G__22213 = null;
var G__22214 = (0);
var G__22215 = (0);
seq__22194 = G__22212;
chunk__22195 = G__22213;
count__22196 = G__22214;
i__22197 = G__22215;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect);

//# sourceMappingURL=day8.re_frame.http_fx.js.map
