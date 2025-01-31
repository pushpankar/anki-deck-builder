goog.provide('taoensso.sente');
/**
 * Useful for identifying client/server mismatch
 */
taoensso.sente.sente_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(20),(0)], null);
taoensso.sente.node_target_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs");
/**
 * Sets Timbre's minimum log level for internal Sente namespaces.
 *   Possible levels: #{:trace :debug :info :warn :error :fatal :report}.
 *   Default level: `:warn`.
 */
taoensso.sente.set_min_log_level_BANG_ = (function taoensso$sente$set_min_log_level_BANG_(level){
taoensso.timbre.swap_config_BANG_((function (config__26453__auto__){
return taoensso.timbre.set_ns_min_level(config__26453__auto__,"taoensso.sente.*",level);
}));

taoensso.timbre.swap_config_BANG_((function (config__26453__auto__){
return taoensso.timbre.set_ns_min_level(config__26453__auto__,"taoensso.sente",level);
}));

return null;
});
if((typeof taoensso !== 'undefined') && (typeof taoensso.sente !== 'undefined') && (typeof taoensso.sente.__set_default_log_level !== 'undefined')){
} else {
taoensso.sente.__set_default_log_level = taoensso.sente.set_min_log_level_BANG_(new cljs.core.Keyword(null,"warn","warn",-436710552));
}
taoensso.sente.strim = (function taoensso$sente$strim(max_len,s){
if((cljs.core.count(s) > max_len)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.substr(s,(0),max_len));
} else {
return s;
}
});
/**
 * Log id
 */
taoensso.sente.lid = (function taoensso$sente$lid(var_args){
var G__31058 = arguments.length;
switch (G__31058) {
case 1:
return taoensso.sente.lid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.sente.lid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.sente.lid.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.sente.lid.cljs$core$IFn$_invoke$arity$1 = (function (uid){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(uid,new cljs.core.Keyword("sente","nil-uid","sente/nil-uid",1458555084))){
return "u_nil";
} else {
return ["u_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.strim((6),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid)))].join('');
}
}));

(taoensso.sente.lid.cljs$core$IFn$_invoke$arity$2 = (function (uid,client_id){
return [taoensso.sente.lid.cljs$core$IFn$_invoke$arity$1(uid),"/c_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.strim((6),cljs.core.str.cljs$core$IFn$_invoke$arity$1(client_id)))].join('');
}));

(taoensso.sente.lid.cljs$core$IFn$_invoke$arity$3 = (function (uid,client_id,conn_id){
return [taoensso.sente.lid.cljs$core$IFn$_invoke$arity$2(uid,client_id),"/n_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.strim((6),conn_id))].join('');
}));

(taoensso.sente.lid.cljs$lang$maxFixedArity = 3);

taoensso.sente.expected = (function taoensso$sente$expected(expected,x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expected","expected",1583670997),expected,new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x),new cljs.core.Keyword(null,"value","value",305978217),x], null)], null);
});
/**
 * Returns nil if given argument is a valid [ev-id ?ev-data] form. Otherwise
 *   returns a map of validation errors like `{:wrong-type {:expected _ :actual _}}`.
 */
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if((!(cljs.core.vector_QMARK_(x)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915),taoensso.sente.expected(new cljs.core.Keyword(null,"vector","vector",1902966158),x)], null);
} else {
if(cljs.core.not((function (){var G__31060 = cljs.core.count(x);
var fexpr__31059 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null);
return (fexpr__31059.cljs$core$IFn$_invoke$arity$1 ? fexpr__31059.cljs$core$IFn$_invoke$arity$1(G__31060) : fexpr__31059.call(null, G__31060));
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281),taoensso.sente.expected(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),x)], null);
} else {
var vec__31061 = x;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31061,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31061,(1),null);
if((!((ev_id instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689),taoensso.sente.expected(new cljs.core.Keyword(null,"keyword","keyword",811389747),ev_id)], null);
} else {
if(cljs.core.not(cljs.core.namespace(ev_id))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772),taoensso.sente.expected(new cljs.core.Keyword(null,"namespaced-keyword","namespaced-keyword",131372895),ev_id)], null);
} else {
return null;

}
}

}
}
});
/**
 * Returns given argument if it is a valid [ev-id ?ev-data] form. Otherwise
 *   throws a validation exception.
 */
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__5804__auto__ = taoensso.sente.validate_event(x);
if(cljs.core.truth_(temp__5804__auto__)){
var errs = temp__5804__auto__;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"errors","errors",-908790718),errs], null));
} else {
return null;
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event(x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
var temp__5802__auto__ = taoensso.sente.validate_event(x);
if(cljs.core.truth_(temp__5802__auto__)){
var errs = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
} else {
return x;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
var and__5000__auto__ = cljs.core.map_QMARK_(x);
if(and__5000__auto__){
var and__5000__auto____$1 = taoensso.encore.ks_GT__EQ_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(cljs.core.truth_(and__5000__auto____$1)){
var map__31064 = x;
var map__31064__$1 = cljs.core.__destructure_map(map__31064);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31064__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31064__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31064__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31064__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__5000__auto____$2 = taoensso.encore.chan_QMARK_(ch_recv);
if(cljs.core.truth_(and__5000__auto____$2)){
return ((cljs.core.ifn_QMARK_(send_fn)) && (((taoensso.encore.atom_QMARK_(state)) && (taoensso.sente.event_QMARK_(event)))));
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__5000__auto__ = cljs.core.map_QMARK_(x);
if(and__5000__auto__){
var and__5000__auto____$1 = taoensso.encore.ks_GT__EQ_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"send-buffers","send-buffers",-1788003787),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(cljs.core.truth_(and__5000__auto____$1)){
var map__31065 = x;
var map__31065__$1 = cljs.core.__destructure_map(map__31065);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31065__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31065__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31065__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var send_buffers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31065__$1,new cljs.core.Keyword(null,"send-buffers","send-buffers",-1788003787));
var ring_req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31065__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31065__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31065__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31065__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var and__5000__auto____$2 = taoensso.encore.chan_QMARK_(ch_recv);
if(cljs.core.truth_(and__5000__auto____$2)){
var and__5000__auto____$3 = cljs.core.ifn_QMARK_(send_fn);
if(and__5000__auto____$3){
var and__5000__auto____$4 = taoensso.encore.atom_QMARK_(connected_uids);
if(and__5000__auto____$4){
var and__5000__auto____$5 = taoensso.encore.atom_QMARK_(send_buffers);
if(and__5000__auto____$5){
var and__5000__auto____$6 = cljs.core.map_QMARK_(ring_req);
if(and__5000__auto____$6){
var and__5000__auto____$7 = taoensso.encore.nblank_str_QMARK_(client_id);
if(cljs.core.truth_(and__5000__auto____$7)){
return ((taoensso.sente.event_QMARK_(event)) && ((((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_(_QMARK_reply_fn)))));
} else {
return and__5000__auto____$7;
}
} else {
return and__5000__auto____$6;
}
} else {
return and__5000__auto____$5;
}
} else {
return and__5000__auto____$4;
}
} else {
return and__5000__auto____$3;
}
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__31066){
var map__31067 = p__31066;
var map__31067__$1 = cljs.core.__destructure_map(map__31067);
var ev_msg = map__31067__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31067__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31067__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__31068 = taoensso.sente.as_event(event);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31068,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31068,(1),null);
var valid_event = vec__31068;
var ev_msg_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null)], 0));
if(cljs.core.truth_(taoensso.sente.server_event_msg_QMARK_(ev_msg_STAR_))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch_recv,ev_msg_STAR_);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",198,7,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad `event-msg` from server: %s",ev_msg], null);
}),null)),null,(59),null,null,null);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
var fexpr__31071 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null);
return (fexpr__31071.cljs$core$IFn$_invoke$arity$1 ? fexpr__31071.cljs$core$IFn$_invoke$arity$1(cb_reply_clj) : fexpr__31071.call(null, cb_reply_clj));
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not(taoensso.sente.cb_error_QMARK_(cb_reply_clj));
});
/**
 * Returns [<packed> <?format>]. Used to support some minimal backwards
 *   compatibility between v2 `pack` and v1 `unpack`.
 */
taoensso.sente.parse_packed = (function taoensso$sente$parse_packed(packed){
if(typeof packed === 'string'){
if(cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_(packed,"+"))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(packed,(1)),new cljs.core.Keyword("v1","wrapped","v1/wrapped",1775176340)], null);
} else {
if(cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_(packed,"-"))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(packed,(1)),new cljs.core.Keyword("v1","unwrapped","v1/unwrapped",-1881590983)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [packed,new cljs.core.Keyword("v2","unwrapped","v2/unwrapped",-1881590982)], null);

}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [packed,new cljs.core.Keyword("v2","unwrapped","v2/unwrapped",-1881590982)], null);
}
});
/**
 * packed->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,packed){
var vec__31072 = taoensso.sente.parse_packed(packed);
var packed__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31072,(0),null);
var _QMARK_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31072,(1),null);
var unpacked = (function (){try{return taoensso.sente.interfaces.unpack(packer,packed__$1);
}catch (e31078){var t = e31078;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",230,13,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,"Failed to unpack: %s",packed__$1], null);
}),null)),null,(60),null,null,null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),packed__$1], null),null], null);
}})();
var vec__31075 = (function (){var G__31079 = _QMARK_format;
var G__31079__$1 = (((G__31079 instanceof cljs.core.Keyword))?G__31079.fqn:null);
switch (G__31079__$1) {
case "v1/wrapped":
return unpacked;

break;
case "v1/unwrapped":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [unpacked,null], null);

break;
case "v2/unwrapped":
return unpacked;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31079__$1)].join('')));

}
})();
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31075,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31075,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null);
});
/**
 * Advanced option, most users can ignore this var. Only necessary
 *   for those that want to use Sente < v1.18 with a non-standard
 *   IPacker that deals with non-string payloads.
 * 
 *   Details:
 *  Sente uses a private message format as an implementation detail
 *  for client<->server comms.
 * 
 *  As part of [#398], this format is being updated to support
 *  non-string (e.g. binary) payloads.
 * 
 *  Unfortunately updating the format is non-trivial because:
 *    1. Both the client & server need to support the same format.
 *    2. Clients are often served as cached cl/js.
 * 
 *  To help ease migration, the new pack format is being rolled out
 *  in stages:
 * 
 *    Sente <= v1.16: reads  v1 format only
 *                    writes v1 format only
 * 
 *    Sente    v1.17: reads  v1 and v2 formats
 *                    writes v1 and v2 formats (v1 default)
 * 
 *    Sente    v1.18: reads  v1 and v2 formats
 *                    writes v1 and v2 formats (v2 default)  <- Currently here
 * 
 *    Sente >= v1.19: reads  v2 format only
 *                    writes v2 format only
 * 
 *  This var controls which format to use for writing.
 *  Override default with `alter-var-root` or `binding`.
 */
taoensso.sente._STAR_write_legacy_pack_format_QMARK__STAR_ = false;
/**
 * [clj ?cb-uuid]->packed
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var G__31081 = arguments.length;
switch (G__31081) {
case 2:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2 = (function (packer,clj){
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer,clj,null);
}));

(taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var packed = taoensso.sente.interfaces.pack(packer,(function (){var temp__5806__auto__ = _QMARK_cb_uuid__$1;
if((temp__5806__auto__ == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null);
} else {
var cb_uuid = temp__5806__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,cb_uuid], null);
}
})());
if(cljs.core.truth_(taoensso.sente._STAR_write_legacy_pack_format_QMARK__STAR_)){
return ["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((typeof packed === 'string')?packed:taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),290,17,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol(null,"packed","packed",93735008,null),packed,null,null)))].join('');
} else {
return packed;
}
}));

(taoensso.sente.pack.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {taoensso.sente.interfaces.IPacker}
*/
taoensso.sente.EdnPacker = (function (){
});
(taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return taoensso.encore.pr_edn(x);
}));

(taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1(s);
}));

(taoensso.sente.EdnPacker.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(taoensso.sente.EdnPacker.cljs$lang$type = true);

(taoensso.sente.EdnPacker.cljs$lang$ctorStr = "taoensso.sente/EdnPacker");

(taoensso.sente.EdnPacker.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.sente/EdnPacker");
}));

/**
 * Positional factory function for taoensso.sente/EdnPacker.
 */
taoensso.sente.__GT_EdnPacker = (function taoensso$sente$__GT_EdnPacker(){
return (new taoensso.sente.EdnPacker());
});

taoensso.sente.default_edn_packer = (new taoensso.sente.EdnPacker());
taoensso.sente.coerce_packer = (function taoensso$sente$coerce_packer(x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"edn","edn",1317840885))){
return taoensso.sente.default_edn_packer;
} else {
var e = (function (){try{if((function (p1__31082_SHARP_){
if((!((p1__31082_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__31082_SHARP_.taoensso$sente$interfaces$IPacker$)))){
return true;
} else {
if((!p1__31082_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__31082_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__31082_SHARP_);
}
})(x)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e31083){if((e31083 instanceof Error)){
var e = e31083;
return e;
} else {
throw e31083;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),308,5,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__31082#","p1__31082#",-1383580702,null)], null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol("interfaces","IPacker","interfaces/IPacker",1863769936,null),new cljs.core.Symbol(null,"p1__31082#","p1__31082#",-1383580702,null))),null,new cljs.core.Symbol(null,"x","x",-555367584,null),x,e,null);
}
}
});
taoensso.sente.next_idx_BANG_ = taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0();

/**
 * Alpha, subject to change.
 *   Returns true iff given Ring request is allowed by `allowed-origins`.
 *   `allowed-origins` may be `:all` or #{<origin> ...}.
 */
taoensso.sente.allow_origin_QMARK_ = (function taoensso$sente$allow_origin_QMARK_(allowed_origins,ring_req){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(allowed_origins,new cljs.core.Keyword(null,"all","all",892129742))){
return true;
} else {
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.Keyword(null,"headers","headers",-835030129));
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$3(headers,"origin",new cljs.core.Keyword(null,"nx","nx",-1996436366));
var have_origin_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(origin,new cljs.core.Keyword(null,"nx","nx",-1996436366));
if(((have_origin_QMARK_) && (cljs.core.contains_QMARK_(cljs.core.set(allowed_origins),origin)))){
return true;
} else {
var referer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(headers,"referer","");
if(cljs.core.truth_((function (){var and__5000__auto__ = (!(have_origin_QMARK_));
if(and__5000__auto__){
return taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2((function (p1__31085_SHARP_){
return clojure.string.starts_with_QMARK_(referer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31085_SHARP_),"/"].join(''));
}),allowed_origins);
} else {
return and__5000__auto__;
}
})())){
return true;
} else {
return false;
}
}
}
});
/**
 * Takes a web server adapter[1] and returns a map with keys:
 * 
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *  :send-fn                     ; (fn [user-id ev] for server>user push.
 *  :ajax-post-fn                ; Ring handler for CSRF-POST + chsk URL.
 *  :ajax-get-or-ws-handshake-fn ; Ring handler for Ring GET  + chsk URL.
 *  :connected-uids ; Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 * 
 *   Security options:
 * 
 *  :allowed-origins   ; e.g. #{"http://site.com" ...}, defaults to :all. ; Alpha
 * 
 *  :csrf-token-fn     ; ?(fn [ring-req]) -> CSRF-token for Ajax POSTs and WS handshake.
 *                     ; nil => CSRF check will be DISABLED (can pose a *CSRF SECURITY RISK*
 *                     ; for website use cases, so please ONLY disable this check if you're
 *                     ; very sure you understand the implications!).
 * 
 *  :authorized?-fn    ; ?(fn [ring-req]) -> When non-nil, (authorized?-fn <ring-req>)
 *                     ; must return truthy, otherwise connection requests will be
 *                     ; rejected with (unauthorized-fn <ring-req>) response.
 *                     ;
 *                     ; May check Authroization HTTP header, etc.
 * 
 *  :?unauthorized-fn  ; An alternative API to `authorized?-fn`+`unauthorized-fn` pair.
 *                     ; ?(fn [ring-req)) -> <?rejection-resp>. I.e. when return value
 *                     ; is non-nil, connection requests will be rejected with that
 *                     ; non-nil value.
 * 
 *   Other common options:
 * 
 *  :user-id-fn         ; (fn [ring-req]) -> unique user-id for server>user push.
 *  :handshake-data-fn  ; (fn [ring-req]) -> arb user data to append to handshake evs.
 *  :ws-kalive-ms       ; Ping to keep a WebSocket conn alive if no activity
 *                      ; w/in given msecs. Should be different to client's :ws-kalive-ms.
 *  :lp-timeout-ms      ; Timeout (repoll) long-polling Ajax conns after given msecs.
 *  :send-buf-ms-ajax   ; [2]
 *  :send-buf-ms-ws     ; [2]
 *  :packer             ; :edn (default), or an IPacker implementation.
 * 
 *  :ws-ping-timeout-ms ; When pinging to test WebSocket connections, msecs to
 *                      ; await reply before regarding the connection as broken
 * 
 *  ;; When a connection is closed, Sente waits a little for possible reconnection before
 *  ;; actually marking the connection as closed. This facilitates Ajax long-polling,
 *  ;; server->client buffering, and helps to reduce event noise from spotty connections.
 *  :ms-allow-reconnect-before-close-ws   ; Msecs to wait for WebSocket conns (default: 2500)
 *  :ms-allow-reconnect-before-close-ajax ; Msecs to wait for Ajax      conns (default: 5000)
 * 
 *   [1] e.g. `(taoensso.sente.server-adapters.http-kit/get-sch-adapter)` or
 *         `(taoensso.sente.server-adapters.immutant/get-sch-adapter)`.
 *    You must have the necessary web-server dependency in your project.clj and
 *    the necessary entry in your namespace's `ns` form.
 * 
 *   [2] Optimization to allow transparent batching of rapidly-triggered
 *    server>user pushes. This is esp. important for Ajax clients which use a
 *    (slow) reconnecting poller. Actual event dispatch may occur <= given ms
 *    after send call (larger values => larger batch windows).
 */
taoensso.sente.make_channel_socket_server_BANG_ = (function taoensso$sente$make_channel_socket_server_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___31926 = arguments.length;
var i__5727__auto___31927 = (0);
while(true){
if((i__5727__auto___31927 < len__5726__auto___31926)){
args__5732__auto__.push((arguments[i__5727__auto___31927]));

var G__31929 = (i__5727__auto___31927 + (1));
i__5727__auto___31927 = G__31929;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__31089){
var vec__31090 = p__31089;
var map__31093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31090,(0),null);
var map__31093__$1 = cljs.core.__destructure_map(map__31093);
var ws_ping_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31093__$1,new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968),null);
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31093__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"secs","secs",1532330091),(25)));
var _QMARK_unauthorized_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31093__$1,new cljs.core.Keyword(null,"?unauthorized-fn","?unauthorized-fn",-1883475616));
var send_buf_ms_ws = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31093__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var allowed_origins = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31093__$1,new cljs.core.Keyword(null,"allowed-origins","allowed-origins",1477851683),new cljs.core.Keyword(null,"all","all",892129742));
var lp_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31093__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var ms_allow_reconnect_before_close_ws = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31093__$1,new cljs.core.Keyword(null,"ms-allow-reconnect-before-close-ws","ms-allow-reconnect-before-close-ws",-1327905884),(2500));
var csrf_token_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31093__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),(function (ring_req){
var or__5002__auto__ = new cljs.core.Keyword(null,"anti-forgery-token","anti-forgery-token",806990841).cljs$core$IFn$_invoke$arity$1(ring_req);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
}
}));
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31093__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var ms_allow_reconnect_before_close_ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31093__$1,new cljs.core.Keyword(null,"ms-allow-reconnect-before-close-ajax","ms-allow-reconnect-before-close-ajax",-447786167),(5000));
var unauthorized_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31093__$1,new cljs.core.Keyword(null,"unauthorized-fn","unauthorized-fn",-2032603957),(function (_ring_req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(401),new cljs.core.Keyword(null,"body","body",-2049205669),"Unauthorized request"], null);
}));
var send_buf_ms_ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31093__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var bad_origin_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31093__$1,new cljs.core.Keyword(null,"bad-origin-fn","bad-origin-fn",1385595727),(function (_ring_req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(403),new cljs.core.Keyword(null,"body","body",-2049205669),"Unauthorized origin"], null);
}));
var handshake_data_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31093__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),(function (ring_req){
return null;
}));
var user_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31093__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),(function (ring_req){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
}));
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31093__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer((1000)));
var authorized_QMARK__fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31093__$1,new cljs.core.Keyword(null,"authorized?-fn","authorized?-fn",-1334669261));
var bad_csrf_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31093__$1,new cljs.core.Keyword(null,"bad-csrf-fn","bad-csrf-fn",16619032),(function (_ring_req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(403),new cljs.core.Keyword(null,"body","body",-2049205669),"Bad CSRF token"], null);
}));
var e_31935 = (function (){try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_(send_buf_ms_ajax))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e31094){if((e31094 instanceof Error)){
var e_31935 = e31094;
return e_31935;
} else {
throw e31094;

}
}})();
if((e_31935 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),486,3,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.Symbol("enc","pos-int?","enc/pos-int?",-1205796829,null),new cljs.core.Symbol("taoensso.encore","pos-int?","taoensso.encore/pos-int?",186070635,null),new cljs.core.Symbol(null,"send-buf-ms-ajax","send-buf-ms-ajax",-1108306732,null),send_buf_ms_ajax,e_31935,null);
}

var e_31936 = (function (){try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_(send_buf_ms_ws))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e31095){if((e31095 instanceof Error)){
var e_31936 = e31095;
return e_31936;
} else {
throw e31095;

}
}})();
if((e_31936 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),486,3,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.Symbol("enc","pos-int?","enc/pos-int?",-1205796829,null),new cljs.core.Symbol("taoensso.encore","pos-int?","taoensso.encore/pos-int?",186070635,null),new cljs.core.Symbol(null,"send-buf-ms-ws","send-buf-ms-ws",490945289,null),send_buf_ms_ws,e_31936,null);
}


var e_31939 = (function (){try{if((function (p1__31086_SHARP_){
if((!((p1__31086_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__31086_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)))){
return true;
} else {
if((!p1__31086_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__31086_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__31086_SHARP_);
}
})(web_server_ch_adapter)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e31096){if((e31096 instanceof Error)){
var e_31939 = e31096;
return e_31939;
} else {
throw e31096;

}
}})();
if((e_31939 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),487,3,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__31086#","p1__31086#",343330698,null)], null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol("interfaces","IServerChanAdapter","interfaces/IServerChanAdapter",-455981296,null),new cljs.core.Symbol(null,"p1__31086#","p1__31086#",343330698,null))),null,new cljs.core.Symbol(null,"web-server-ch-adapter","web-server-ch-adapter",340117672,null),web_server_ch_adapter,e_31939,null);
}

var max_ms_31940 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_31940)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([":lp-timeout-ms must be < ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_ms_31940)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),lp_timeout_ms,new cljs.core.Keyword(null,"default-client-side-ajax-timeout-ms","default-client-side-ajax-timeout-ms",1149929762),max_ms_31940], null));
} else {
}

var allowed_origins__$1 = (cljs.core.truth_((function (x){
var or__5002__auto__ = cljs.core.set_QMARK_(x);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__31098 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all","all",892129742),null], null), null);
return (fexpr__31098.cljs$core$IFn$_invoke$arity$1 ? fexpr__31098.cljs$core$IFn$_invoke$arity$1(x) : fexpr__31098.call(null, x));
}
})(allowed_origins))?allowed_origins:taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),496,25,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"set?","set?",1636014792,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all","all",892129742),"null"], null), null)], null),null,new cljs.core.Symbol(null,"allowed-origins","allowed-origins",-1176584086,null),allowed_origins,null,null));
var packer__$1 = taoensso.sente.coerce_packer(packer);
var ch_recv = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(recv_buf_or_n);
var user_id_fn__$1 = (function (ring_req,client_id){
var or__5002__auto__ = (function (){var G__31099 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);
return (user_id_fn.cljs$core$IFn$_invoke$arity$1 ? user_id_fn.cljs$core$IFn$_invoke$arity$1(G__31099) : user_id_fn.call(null, G__31099));
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword("sente","nil-uid","sente/nil-uid",1458555084);
}
});
var conns_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var connect_uid_BANG__QMARK_ = (function (conn_type,uid){
if(cljs.core.truth_((((!((uid == null))))?true:taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),511,36,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.Keyword("taoensso.truss.impl","some?","taoensso.truss.impl/some?",1536228403),new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),new cljs.core.Symbol(null,"uid","uid",192762127,null),uid,null,null)))){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,(function (p__31100){
var map__31101 = p__31100;
var map__31101__$1 = cljs.core.__destructure_map(map__31101);
var old_m = map__31101__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31101__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31101__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31101__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__31102 = conn_type;
var G__31102__$1 = (((G__31102 instanceof cljs.core.Keyword))?G__31102.fqn:null);
switch (G__31102__$1) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax__$1,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax__$1,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31102__$1)].join('')));

}
})();
return taoensso.encore.swapped(new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((((!(cljs.core.contains_QMARK_(old_any,uid)))) && (cljs.core.contains_QMARK_(new_any,uid)))){
return new cljs.core.Keyword(null,"newly-connected","newly-connected",-2029862681);
} else {
return null;
}
})());
}));
return newly_connected_QMARK_;
});
var maybe_disconnect_uid_BANG__QMARK_ = (function (uid){
if(cljs.core.truth_((((!((uid == null))))?true:taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),528,26,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.Keyword("taoensso.truss.impl","some?","taoensso.truss.impl/some?",1536228403),new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),new cljs.core.Symbol(null,"uid","uid",192762127,null),uid,null,null)))){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,(function (p__31103){
var map__31104 = p__31103;
var map__31104__$1 = cljs.core.__destructure_map(map__31104);
var old_m = map__31104__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31104__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31104__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31104__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var conns_SINGLEQUOTE_ = cljs.core.deref(conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"ajax","ajax",814345549).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = ((any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_));
var new_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),((any_ws_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ws,uid)),new cljs.core.Keyword(null,"ajax","ajax",814345549),((any_ajax_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax__$1,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ajax__$1,uid)),new cljs.core.Keyword(null,"any","any",1705907423),((any_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(any,uid))], null);
return taoensso.encore.swapped(new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if(((cljs.core.contains_QMARK_(old_any,uid)) && ((!(cljs.core.contains_QMARK_(new_any,uid)))))){
return new cljs.core.Keyword(null,"newly-disconnected","newly-disconnected",-1586164962);
} else {
return null;
}
})());
}));
return newly_disconnected_QMARK_;
});
var send_fn = (function() { 
var G__31954__delegate = function (user_id,ev,p__31105){
var vec__31106 = p__31105;
var map__31109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31106,(0),null);
var map__31109__$1 = cljs.core.__destructure_map(map__31109);
var opts = map__31109__$1;
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31109__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_31959 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("sente","nil-uid","sente/nil-uid",1458555084):user_id);
var __31960 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",554,21,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Server asked to send event to %s: %s",taoensso.sente.lid.cljs$core$IFn$_invoke$arity$1(uid_31959),ev], null);
}),null)),null,(61),null,null,null);
var __31961__$1 = (cljs.core.truth_(uid_31959)?null:(function(){throw (new Error(["Assert failed: ",["Support for sending to `nil` user-ids has been REMOVED. ","Please send to `:sente/all-users-without-uid` instead."].join(''),"\n","uid"].join('')))})());
var __31962__$2 = taoensso.sente.assert_event(ev);
var ev_uuid_31963 = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var flush_buffer_BANG__31964 = (function (conn_type){
var temp__5804__auto__ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),(function (m){
var vec__31110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_31959);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31110,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31110,(1),null);
if(cljs.core.contains_QMARK_(ev_uuids,ev_uuid_31963)){
return taoensso.encore.swapped(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,uid_31959),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_31959));
} else {
return taoensso.encore.swapped(m,null);
}
}));
if(cljs.core.truth_(temp__5804__auto__)){
var pulled = temp__5804__auto__;
var vec__31113 = pulled;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31113,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31113,(1),null);
if(cljs.core.vector_QMARK_(buffered_evs)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),582,23,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"buffered-evs","buffered-evs",42083054,null),buffered_evs,null,null);
}

if(cljs.core.set_QMARK_(ev_uuids)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),583,23,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.Symbol(null,"set?","set?",1636014792,null),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Symbol(null,"ev-uuids","ev-uuids",1824628525,null),ev_uuids,null,null);
}

var buffered_evs_ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,buffered_evs);
var G__31116 = conn_type;
var G__31117 = conns_;
var G__31118 = uid_31959;
var G__31119 = buffered_evs_ppstr;
var G__31120 = cljs.core.count(buffered_evs);
return (taoensso.sente.send_buffered_server_evs_GT_clients_BANG_.cljs$core$IFn$_invoke$arity$5 ? taoensso.sente.send_buffered_server_evs_GT_clients_BANG_.cljs$core$IFn$_invoke$arity$5(G__31116,G__31117,G__31118,G__31119,G__31120) : taoensso.sente.send_buffered_server_evs_GT_clients_BANG_.call(null, G__31116,G__31117,G__31118,G__31119,G__31120));
} else {
return null;
}
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",591,17,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Server asked to close chsk for %s",taoensso.sente.lid.cljs$core$IFn$_invoke$arity$1(uid_31959)], null);
}),null)),null,(62),null,null,null);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__31964(new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__31964(new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
}

var seq__31121_31967 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_31959], null))));
var chunk__31122_31968 = null;
var count__31123_31969 = (0);
var i__31124_31970 = (0);
while(true){
if((i__31124_31970 < count__31123_31969)){
var vec__31131_31972 = chunk__31122_31968.cljs$core$IIndexed$_nth$arity$2(null, i__31124_31970);
var _QMARK_sch_31973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31131_31972,(0),null);
var _udt_31975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31131_31972,(1),null);
var temp__5804__auto___31976 = _QMARK_sch_31973;
if(cljs.core.truth_(temp__5804__auto___31976)){
var sch_31977 = temp__5804__auto___31976;
taoensso.sente.interfaces.sch_close_BANG_(sch_31977);
} else {
}


var G__31978 = seq__31121_31967;
var G__31979 = chunk__31122_31968;
var G__31980 = count__31123_31969;
var G__31981 = (i__31124_31970 + (1));
seq__31121_31967 = G__31978;
chunk__31122_31968 = G__31979;
count__31123_31969 = G__31980;
i__31124_31970 = G__31981;
continue;
} else {
var temp__5804__auto___31982 = cljs.core.seq(seq__31121_31967);
if(temp__5804__auto___31982){
var seq__31121_31983__$1 = temp__5804__auto___31982;
if(cljs.core.chunked_seq_QMARK_(seq__31121_31983__$1)){
var c__5525__auto___31984 = cljs.core.chunk_first(seq__31121_31983__$1);
var G__31985 = cljs.core.chunk_rest(seq__31121_31983__$1);
var G__31986 = c__5525__auto___31984;
var G__31987 = cljs.core.count(c__5525__auto___31984);
var G__31988 = (0);
seq__31121_31967 = G__31985;
chunk__31122_31968 = G__31986;
count__31123_31969 = G__31987;
i__31124_31970 = G__31988;
continue;
} else {
var vec__31134_31989 = cljs.core.first(seq__31121_31983__$1);
var _QMARK_sch_31990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31134_31989,(0),null);
var _udt_31991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31134_31989,(1),null);
var temp__5804__auto___31992__$1 = _QMARK_sch_31990;
if(cljs.core.truth_(temp__5804__auto___31992__$1)){
var sch_31993 = temp__5804__auto___31992__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_31993);
} else {
}


var G__31994 = cljs.core.next(seq__31121_31983__$1);
var G__31995 = null;
var G__31996 = (0);
var G__31997 = (0);
seq__31121_31967 = G__31994;
chunk__31122_31968 = G__31995;
count__31123_31969 = G__31996;
i__31124_31970 = G__31997;
continue;
}
} else {
}
}
break;
}

var seq__31137_31998 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_31959], null))));
var chunk__31138_31999 = null;
var count__31139_32000 = (0);
var i__31140_32001 = (0);
while(true){
if((i__31140_32001 < count__31139_32000)){
var vec__31147_32002 = chunk__31138_31999.cljs$core$IIndexed$_nth$arity$2(null, i__31140_32001);
var _QMARK_sch_32003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31147_32002,(0),null);
var _udt_32004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31147_32002,(1),null);
var temp__5804__auto___32005 = _QMARK_sch_32003;
if(cljs.core.truth_(temp__5804__auto___32005)){
var sch_32006 = temp__5804__auto___32005;
taoensso.sente.interfaces.sch_close_BANG_(sch_32006);
} else {
}


var G__32007 = seq__31137_31998;
var G__32008 = chunk__31138_31999;
var G__32009 = count__31139_32000;
var G__32010 = (i__31140_32001 + (1));
seq__31137_31998 = G__32007;
chunk__31138_31999 = G__32008;
count__31139_32000 = G__32009;
i__31140_32001 = G__32010;
continue;
} else {
var temp__5804__auto___32011 = cljs.core.seq(seq__31137_31998);
if(temp__5804__auto___32011){
var seq__31137_32012__$1 = temp__5804__auto___32011;
if(cljs.core.chunked_seq_QMARK_(seq__31137_32012__$1)){
var c__5525__auto___32013 = cljs.core.chunk_first(seq__31137_32012__$1);
var G__32014 = cljs.core.chunk_rest(seq__31137_32012__$1);
var G__32015 = c__5525__auto___32013;
var G__32016 = cljs.core.count(c__5525__auto___32013);
var G__32017 = (0);
seq__31137_31998 = G__32014;
chunk__31138_31999 = G__32015;
count__31139_32000 = G__32016;
i__31140_32001 = G__32017;
continue;
} else {
var vec__31150_32018 = cljs.core.first(seq__31137_32012__$1);
var _QMARK_sch_32019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31150_32018,(0),null);
var _udt_32020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31150_32018,(1),null);
var temp__5804__auto___32022__$1 = _QMARK_sch_32019;
if(cljs.core.truth_(temp__5804__auto___32022__$1)){
var sch_32023 = temp__5804__auto___32022__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_32023);
} else {
}


var G__32024 = cljs.core.next(seq__31137_32012__$1);
var G__32025 = null;
var G__32026 = (0);
var G__32027 = (0);
seq__31137_31998 = G__32024;
chunk__31138_31999 = G__32025;
count__31139_32000 = G__32026;
i__31140_32001 = G__32027;
continue;
}
} else {
}
}
break;
}
} else {
var seq__31153_32031 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__31154_32032 = null;
var count__31155_32033 = (0);
var i__31156_32034 = (0);
while(true){
if((i__31156_32034 < count__31155_32033)){
var conn_type_32035 = chunk__31154_32032.cljs$core$IIndexed$_nth$arity$2(null, i__31156_32034);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_32035,uid_31959], null),((function (seq__31153_32031,chunk__31154_32032,count__31155_32033,i__31156_32034,conn_type_32035,uid_31959,__31960,__31961__$1,__31962__$2,ev_uuid_31963,flush_buffer_BANG__31964,vec__31106,map__31109,map__31109__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,connect_uid_BANG__QMARK_,maybe_disconnect_uid_BANG__QMARK_,vec__31090,map__31093,map__31093__$1,ws_ping_timeout_ms,ws_kalive_ms,_QMARK_unauthorized_fn,send_buf_ms_ws,allowed_origins,lp_timeout_ms,ms_allow_reconnect_before_close_ws,csrf_token_fn,packer,ms_allow_reconnect_before_close_ajax,unauthorized_fn,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,authorized_QMARK__fn,bad_csrf_fn){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_31963])], null);
} else {
var vec__31163 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31163,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31163,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_31963)], null);
}
});})(seq__31153_32031,chunk__31154_32032,count__31155_32033,i__31156_32034,conn_type_32035,uid_31959,__31960,__31961__$1,__31962__$2,ev_uuid_31963,flush_buffer_BANG__31964,vec__31106,map__31109,map__31109__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,connect_uid_BANG__QMARK_,maybe_disconnect_uid_BANG__QMARK_,vec__31090,map__31093,map__31093__$1,ws_ping_timeout_ms,ws_kalive_ms,_QMARK_unauthorized_fn,send_buf_ms_ws,allowed_origins,lp_timeout_ms,ms_allow_reconnect_before_close_ws,csrf_token_fn,packer,ms_allow_reconnect_before_close_ajax,unauthorized_fn,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,authorized_QMARK__fn,bad_csrf_fn))
);


var G__32036 = seq__31153_32031;
var G__32037 = chunk__31154_32032;
var G__32038 = count__31155_32033;
var G__32039 = (i__31156_32034 + (1));
seq__31153_32031 = G__32036;
chunk__31154_32032 = G__32037;
count__31155_32033 = G__32038;
i__31156_32034 = G__32039;
continue;
} else {
var temp__5804__auto___32040 = cljs.core.seq(seq__31153_32031);
if(temp__5804__auto___32040){
var seq__31153_32041__$1 = temp__5804__auto___32040;
if(cljs.core.chunked_seq_QMARK_(seq__31153_32041__$1)){
var c__5525__auto___32042 = cljs.core.chunk_first(seq__31153_32041__$1);
var G__32043 = cljs.core.chunk_rest(seq__31153_32041__$1);
var G__32044 = c__5525__auto___32042;
var G__32045 = cljs.core.count(c__5525__auto___32042);
var G__32046 = (0);
seq__31153_32031 = G__32043;
chunk__31154_32032 = G__32044;
count__31155_32033 = G__32045;
i__31156_32034 = G__32046;
continue;
} else {
var conn_type_32047 = cljs.core.first(seq__31153_32041__$1);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_32047,uid_31959], null),((function (seq__31153_32031,chunk__31154_32032,count__31155_32033,i__31156_32034,conn_type_32047,seq__31153_32041__$1,temp__5804__auto___32040,uid_31959,__31960,__31961__$1,__31962__$2,ev_uuid_31963,flush_buffer_BANG__31964,vec__31106,map__31109,map__31109__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,connect_uid_BANG__QMARK_,maybe_disconnect_uid_BANG__QMARK_,vec__31090,map__31093,map__31093__$1,ws_ping_timeout_ms,ws_kalive_ms,_QMARK_unauthorized_fn,send_buf_ms_ws,allowed_origins,lp_timeout_ms,ms_allow_reconnect_before_close_ws,csrf_token_fn,packer,ms_allow_reconnect_before_close_ajax,unauthorized_fn,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,authorized_QMARK__fn,bad_csrf_fn){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_31963])], null);
} else {
var vec__31166 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31166,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31166,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_31963)], null);
}
});})(seq__31153_32031,chunk__31154_32032,count__31155_32033,i__31156_32034,conn_type_32047,seq__31153_32041__$1,temp__5804__auto___32040,uid_31959,__31960,__31961__$1,__31962__$2,ev_uuid_31963,flush_buffer_BANG__31964,vec__31106,map__31109,map__31109__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,connect_uid_BANG__QMARK_,maybe_disconnect_uid_BANG__QMARK_,vec__31090,map__31093,map__31093__$1,ws_ping_timeout_ms,ws_kalive_ms,_QMARK_unauthorized_fn,send_buf_ms_ws,allowed_origins,lp_timeout_ms,ms_allow_reconnect_before_close_ws,csrf_token_fn,packer,ms_allow_reconnect_before_close_ajax,unauthorized_fn,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,authorized_QMARK__fn,bad_csrf_fn))
);


var G__32048 = cljs.core.next(seq__31153_32041__$1);
var G__32049 = null;
var G__32050 = (0);
var G__32051 = (0);
seq__31153_32031 = G__32048;
chunk__31154_32032 = G__32049;
count__31155_32033 = G__32050;
i__31156_32034 = G__32051;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__31964(new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__31964(new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
var ws_timeout_32056 = cljs.core.async.timeout(send_buf_ms_ws);
var ajax_timeout_32057 = cljs.core.async.timeout(send_buf_ms_ajax);
var c__21734__auto___32058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21735__auto__ = (function (){var switch__21664__auto__ = (function (state_31173){
var state_val_31174 = (state_31173[(1)]);
if((state_val_31174 === (1))){
var state_31173__$1 = state_31173;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31173__$1,(2),ws_timeout_32056);
} else {
if((state_val_31174 === (2))){
var inst_31170 = (state_31173[(2)]);
var inst_31171 = flush_buffer_BANG__31964(new cljs.core.Keyword(null,"ws","ws",86841443));
var state_31173__$1 = (function (){var statearr_31175 = state_31173;
(statearr_31175[(7)] = inst_31170);

return statearr_31175;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31173__$1,inst_31171);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$state_machine__21665__auto__ = null;
var taoensso$sente$state_machine__21665__auto____0 = (function (){
var statearr_31176 = [null,null,null,null,null,null,null,null];
(statearr_31176[(0)] = taoensso$sente$state_machine__21665__auto__);

(statearr_31176[(1)] = (1));

return statearr_31176;
});
var taoensso$sente$state_machine__21665__auto____1 = (function (state_31173){
while(true){
var ret_value__21666__auto__ = (function (){try{while(true){
var result__21667__auto__ = switch__21664__auto__(state_31173);
if(cljs.core.keyword_identical_QMARK_(result__21667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21667__auto__;
}
break;
}
}catch (e31177){var ex__21668__auto__ = e31177;
var statearr_31178_32059 = state_31173;
(statearr_31178_32059[(2)] = ex__21668__auto__);


if(cljs.core.seq((state_31173[(4)]))){
var statearr_31179_32060 = state_31173;
(statearr_31179_32060[(1)] = cljs.core.first((state_31173[(4)])));

} else {
throw ex__21668__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32061 = state_31173;
state_31173 = G__32061;
continue;
} else {
return ret_value__21666__auto__;
}
break;
}
});
taoensso$sente$state_machine__21665__auto__ = function(state_31173){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__21665__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__21665__auto____1.call(this,state_31173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__21665__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__21665__auto____0;
taoensso$sente$state_machine__21665__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__21665__auto____1;
return taoensso$sente$state_machine__21665__auto__;
})()
})();
var state__21736__auto__ = (function (){var statearr_31180 = f__21735__auto__();
(statearr_31180[(6)] = c__21734__auto___32058);

return statearr_31180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21736__auto__);
}));


var c__21734__auto___32062 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21735__auto__ = (function (){var switch__21664__auto__ = (function (state_31185){
var state_val_31186 = (state_31185[(1)]);
if((state_val_31186 === (1))){
var state_31185__$1 = state_31185;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31185__$1,(2),ajax_timeout_32057);
} else {
if((state_val_31186 === (2))){
var inst_31182 = (state_31185[(2)]);
var inst_31183 = flush_buffer_BANG__31964(new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_31185__$1 = (function (){var statearr_31187 = state_31185;
(statearr_31187[(7)] = inst_31182);

return statearr_31187;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31185__$1,inst_31183);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$state_machine__21665__auto__ = null;
var taoensso$sente$state_machine__21665__auto____0 = (function (){
var statearr_31188 = [null,null,null,null,null,null,null,null];
(statearr_31188[(0)] = taoensso$sente$state_machine__21665__auto__);

(statearr_31188[(1)] = (1));

return statearr_31188;
});
var taoensso$sente$state_machine__21665__auto____1 = (function (state_31185){
while(true){
var ret_value__21666__auto__ = (function (){try{while(true){
var result__21667__auto__ = switch__21664__auto__(state_31185);
if(cljs.core.keyword_identical_QMARK_(result__21667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21667__auto__;
}
break;
}
}catch (e31189){var ex__21668__auto__ = e31189;
var statearr_31190_32063 = state_31185;
(statearr_31190_32063[(2)] = ex__21668__auto__);


if(cljs.core.seq((state_31185[(4)]))){
var statearr_31191_32064 = state_31185;
(statearr_31191_32064[(1)] = cljs.core.first((state_31185[(4)])));

} else {
throw ex__21668__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32065 = state_31185;
state_31185 = G__32065;
continue;
} else {
return ret_value__21666__auto__;
}
break;
}
});
taoensso$sente$state_machine__21665__auto__ = function(state_31185){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__21665__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__21665__auto____1.call(this,state_31185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__21665__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__21665__auto____0;
taoensso$sente$state_machine__21665__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__21665__auto____1;
return taoensso$sente$state_machine__21665__auto__;
})()
})();
var state__21736__auto__ = (function (){var statearr_31192 = f__21735__auto__();
(statearr_31192[(6)] = c__21734__auto___32062);

return statearr_31192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21736__auto__);
}));

}
}

return null;
};
var G__31954 = function (user_id,ev,var_args){
var p__31105 = null;
if (arguments.length > 2) {
var G__32067__i = 0, G__32067__a = new Array(arguments.length -  2);
while (G__32067__i < G__32067__a.length) {G__32067__a[G__32067__i] = arguments[G__32067__i + 2]; ++G__32067__i;}
  p__31105 = new cljs.core.IndexedSeq(G__32067__a,0,null);
} 
return G__31954__delegate.call(this,user_id,ev,p__31105);};
G__31954.cljs$lang$maxFixedArity = 2;
G__31954.cljs$lang$applyTo = (function (arglist__32068){
var user_id = cljs.core.first(arglist__32068);
arglist__32068 = cljs.core.next(arglist__32068);
var ev = cljs.core.first(arglist__32068);
var p__31105 = cljs.core.rest(arglist__32068);
return G__31954__delegate(user_id,ev,p__31105);
});
G__31954.cljs$core$IFn$_invoke$arity$variadic = G__31954__delegate;
return G__31954;
})()
;
var bad_csrf_QMARK_ = (function (ring_req){
if((csrf_token_fn == null)){
return false;
} else {
var temp__5802__auto__ = (csrf_token_fn.cljs$core$IFn$_invoke$arity$1 ? csrf_token_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : csrf_token_fn.call(null, ring_req));
if(cljs.core.truth_(temp__5802__auto__)){
var reference_csrf_token = temp__5802__auto__;
var csrf_token_from_client = (function (){var or__5002__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"x-csrf-token"], null));
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"x-xsrf-token"], null));
}
}
})();
return cljs.core.not(taoensso.encore.const_str_EQ_(reference_csrf_token,csrf_token_from_client));
} else {
return true;
}
}
});
var unauthorized_QMARK_ = (function (ring_req){
if((authorized_QMARK__fn == null)){
return false;
} else {
return cljs.core.not((authorized_QMARK__fn.cljs$core$IFn$_invoke$arity$1 ? authorized_QMARK__fn.cljs$core$IFn$_invoke$arity$1(ring_req) : authorized_QMARK__fn.call(null, ring_req)));
}
});
var possible_rejection_resp = (function (ring_req){
if(bad_csrf_QMARK_(ring_req)){
return (bad_csrf_fn.cljs$core$IFn$_invoke$arity$1 ? bad_csrf_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : bad_csrf_fn.call(null, ring_req));
} else {
if(taoensso.sente.allow_origin_QMARK_(allowed_origins__$1,ring_req)){
if(unauthorized_QMARK_(ring_req)){
return (unauthorized_fn.cljs$core$IFn$_invoke$arity$1 ? unauthorized_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : unauthorized_fn.call(null, ring_req));
} else {
var b2__22168__auto__ = (function (){var temp__5804__auto__ = _QMARK_unauthorized_fn;
if(cljs.core.truth_(temp__5804__auto__)){
var uf = temp__5804__auto__;
return (uf.cljs$core$IFn$_invoke$arity$1 ? uf.cljs$core$IFn$_invoke$arity$1(ring_req) : uf.call(null, ring_req));
} else {
return null;
}
})();
if((b2__22168__auto__ == null)){
return null;
} else {
var unauthorized_resp = b2__22168__auto__;
return unauthorized_resp;
}
}
} else {
return (bad_origin_fn.cljs$core$IFn$_invoke$arity$1 ? bad_origin_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : bad_origin_fn.call(null, ring_req));
}
}
});
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"send-buffers","send-buffers",-1788003787),send_buffers_], null);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids_","connected-uids_",344311359),connected_uids_,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"conns_","conns_",726827576),conns_,new cljs.core.Keyword(null,"send-buffers_","send-buffers_",1447919847),send_buffers_], null),new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),(function() {
var taoensso$sente$ring_handler = null;
var taoensso$sente$ring_handler__1 = (function (ring_req){
return taoensso$sente$ring_handler.cljs$core$IFn$_invoke$arity$3(ring_req,null,null);
});
var taoensso$sente$ring_handler__3 = (function (ring_req,_QMARK_ring_async_resp_fn,_QMARK_ring_async_raise_fn){
var b2__22159__auto__ = possible_rejection_resp(ring_req);
if(cljs.core.truth_(b2__22159__auto__)){
var resp = b2__22159__auto__;
return resp;
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ring-async-resp-fn","ring-async-resp-fn",-689911654),_QMARK_ring_async_resp_fn,new cljs.core.Keyword(null,"ring-async-raise-fn","ring-async-raise-fn",744112799),_QMARK_ring_async_raise_fn,new cljs.core.Keyword(null,"on-open","on-open",-1391088163),(function (server_ch,websocket_QMARK_){
if(cljs.core.not(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__31193 = taoensso.sente.unpack(packer__$1,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31193,(0),null);
var has_cb_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31193,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (resp_clj){
if(cljs.core.compare_and_set_BANG_(replied_QMARK__,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",716,28,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[ajax/on-open] Server will reply to message from %s: %s",taoensso.sente.lid.cljs$core$IFn$_invoke$arity$2(user_id_fn__$1(ring_req,client_id),client_id),resp_clj], null);
}),null)),null,(63),null,null,null);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,resp_clj));
} else {
return null;
}
});
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1(ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)], 0)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__5804__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__5804__auto__)){
var ms = temp__5804__auto__;
var c__21734__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21735__auto__ = (function (){var switch__21664__auto__ = (function (state_31201){
var state_val_31202 = (state_31201[(1)]);
if((state_val_31202 === (1))){
var inst_31196 = cljs.core.async.timeout(ms);
var state_31201__$1 = state_31201;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31201__$1,(2),inst_31196);
} else {
if((state_val_31202 === (2))){
var inst_31198 = (state_31201[(2)]);
var inst_31199 = reply_fn(new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_31201__$1 = (function (){var statearr_31203 = state_31201;
(statearr_31203[(7)] = inst_31198);

return statearr_31203;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31201__$1,inst_31199);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$ring_handler_$_state_machine__21665__auto__ = null;
var taoensso$sente$ring_handler_$_state_machine__21665__auto____0 = (function (){
var statearr_31204 = [null,null,null,null,null,null,null,null];
(statearr_31204[(0)] = taoensso$sente$ring_handler_$_state_machine__21665__auto__);

(statearr_31204[(1)] = (1));

return statearr_31204;
});
var taoensso$sente$ring_handler_$_state_machine__21665__auto____1 = (function (state_31201){
while(true){
var ret_value__21666__auto__ = (function (){try{while(true){
var result__21667__auto__ = switch__21664__auto__(state_31201);
if(cljs.core.keyword_identical_QMARK_(result__21667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21667__auto__;
}
break;
}
}catch (e31205){var ex__21668__auto__ = e31205;
var statearr_31206_32070 = state_31201;
(statearr_31206_32070[(2)] = ex__21668__auto__);


if(cljs.core.seq((state_31201[(4)]))){
var statearr_31207_32071 = state_31201;
(statearr_31207_32071[(1)] = cljs.core.first((state_31201[(4)])));

} else {
throw ex__21668__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32072 = state_31201;
state_31201 = G__32072;
continue;
} else {
return ret_value__21666__auto__;
}
break;
}
});
taoensso$sente$ring_handler_$_state_machine__21665__auto__ = function(state_31201){
switch(arguments.length){
case 0:
return taoensso$sente$ring_handler_$_state_machine__21665__auto____0.call(this);
case 1:
return taoensso$sente$ring_handler_$_state_machine__21665__auto____1.call(this,state_31201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$ring_handler_$_state_machine__21665__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$ring_handler_$_state_machine__21665__auto____0;
taoensso$sente$ring_handler_$_state_machine__21665__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$ring_handler_$_state_machine__21665__auto____1;
return taoensso$sente$ring_handler_$_state_machine__21665__auto__;
})()
})();
var state__21736__auto__ = (function (){var statearr_31208 = f__21735__auto__();
(statearr_31208[(6)] = c__21734__auto__);

return statearr_31208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21736__auto__);
}));

return c__21734__auto__;
} else {
return null;
}
} else {
return reply_fn(new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337));
}
})], null));
}
});
taoensso$sente$ring_handler = function(ring_req,_QMARK_ring_async_resp_fn,_QMARK_ring_async_raise_fn){
switch(arguments.length){
case 1:
return taoensso$sente$ring_handler__1.call(this,ring_req);
case 3:
return taoensso$sente$ring_handler__3.call(this,ring_req,_QMARK_ring_async_resp_fn,_QMARK_ring_async_raise_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$ring_handler.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$ring_handler__1;
taoensso$sente$ring_handler.cljs$core$IFn$_invoke$arity$3 = taoensso$sente$ring_handler__3;
return taoensso$sente$ring_handler;
})()
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),(function() {
var taoensso$sente$ring_handler = null;
var taoensso$sente$ring_handler__1 = (function (ring_req){
return taoensso$sente$ring_handler.cljs$core$IFn$_invoke$arity$3(ring_req,null,null);
});
var taoensso$sente$ring_handler__3 = (function (ring_req,_QMARK_ring_async_resp_fn,_QMARK_ring_async_raise_fn){
var conn_id = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var uid = user_id_fn__$1(ring_req,client_id);
var lid_STAR_ = taoensso.sente.lid.cljs$core$IFn$_invoke$arity$3(uid,client_id,conn_id);
if(clojure.string.blank_QMARK_(client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",756,15,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[err_msg,": ",lid_STAR_].join('')], null);
}),null)),null,(64),null,null,null);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"lid","lid",1029596625),lid_STAR_], null));
} else {
var b2__22159__auto__ = possible_rejection_resp(ring_req);
if(cljs.core.truth_(b2__22159__auto__)){
var resp = b2__22159__auto__;
return resp;
} else {
var receive_event_msg_BANG_ = (function() {
var taoensso$sente$ring_handler_$_self = null;
var taoensso$sente$ring_handler_$_self__1 = (function (event){
return taoensso$sente$ring_handler_$_self.cljs$core$IFn$_invoke$arity$2(event,null);
});
var taoensso$sente$ring_handler_$_self__2 = (function (event,_QMARK_reply_fn){
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)], 0)));
});
taoensso$sente$ring_handler_$_self = function(event,_QMARK_reply_fn){
switch(arguments.length){
case 1:
return taoensso$sente$ring_handler_$_self__1.call(this,event);
case 2:
return taoensso$sente$ring_handler_$_self__2.call(this,event,_QMARK_reply_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$ring_handler_$_self.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$ring_handler_$_self__1;
taoensso$sente$ring_handler_$_self.cljs$core$IFn$_invoke$arity$2 = taoensso$sente$ring_handler_$_self__2;
return taoensso$sente$ring_handler_$_self;
})()
;
var send_handshake_BANG__QMARK_ = (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",776,21,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Server will send %s handshake to %s",(cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549)),lid_STAR_], null);
}),null)),null,(65),null,null,null);

var _QMARK_handshake_data = (handshake_data_fn.cljs$core$IFn$_invoke$arity$1 ? handshake_data_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : handshake_data_fn.call(null, ring_req));
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,null], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,null,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,handshake_ev));
});
var on_error = (function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",788,21,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s Server sch error for %s: %s",(cljs.core.truth_(websocket_QMARK_)?"[ws/on-error]":"[ajax/on-error]"),lid_STAR_,error], null);
}),null)),null,(66),null,null,null);
});
var on_msg = (function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id], null),(function (p__31209){
var vec__31210 = p__31209;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31210,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31210,(1),null);
var conn_id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31210,(2),null);
if(cljs.core.truth_(conn_id__$1)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,taoensso.encore.now_udt(),conn_id__$1], null);
} else {
return null;
}
}));

var vec__31213 = taoensso.sente.unpack(packer__$1,req_ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31213,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31213,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-pong","chsk/ws-pong",-86402347)], null))){
return receive_event_msg_BANG_(clj,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null))){
var temp__5804__auto___32073 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5804__auto___32073)){
var cb_uuid_32074 = temp__5804__auto___32073;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",807,29,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[ws/on-msg] Server will auto-reply to ping from %s",lid_STAR_], null);
}),null)),null,(67),null,null,null);

taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer__$1,"pong",cb_uuid_32074));
} else {
}

return receive_event_msg_BANG_(clj,null);
} else {
return receive_event_msg_BANG_(clj,(cljs.core.truth_(_QMARK_cb_uuid)?(function taoensso$sente$ring_handler_$_reply_fn(resp_clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",817,31,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[ws/on-msg] Server will reply to message from %s: %s",lid_STAR_,resp_clj], null);
}),null)),null,(68),null,null,null);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer__$1,resp_clj,_QMARK_cb_uuid));
}):null));

}
}
});
var on_close = (function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549));
var log_prefix = (cljs.core.truth_(websocket_QMARK_)?"[ws/on-close]":"[ajax/on-close]");
var active_conn_closed_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),(function (p__31216){
var vec__31217 = p__31216;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31217,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31217,(1),null);
var conn_id_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31217,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(conn_id,conn_id_STAR_)){
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,taoensso.encore.now_udt(),conn_id], null),true);
} else {
return taoensso.encore.swapped(new cljs.core.Keyword("swap","abort","swap/abort",508048993),false);
}
}));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",839,23,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s %s server sch closed for %s",log_prefix,(cljs.core.truth_(active_conn_closed_QMARK_)?"Active":"Inactive"),lid_STAR_], null);
}),null)),null,(69),null,null,null);

if(cljs.core.truth_(active_conn_closed_QMARK_)){
var c__21734__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21735__auto__ = (function (){var switch__21664__auto__ = (function (state_31271){
var state_val_31272 = (state_31271[(1)]);
if((state_val_31272 === (7))){
var state_31271__$1 = state_31271;
if(cljs.core.truth_(websocket_QMARK_)){
var statearr_31273_32078 = state_31271__$1;
(statearr_31273_32078[(1)] = (9));

} else {
var statearr_31274_32079 = state_31271__$1;
(statearr_31274_32079[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (1))){
var state_31271__$1 = state_31271;
if(cljs.core.truth_(websocket_QMARK_)){
var statearr_31275_32080 = state_31271__$1;
(statearr_31275_32080[(1)] = (2));

} else {
var statearr_31276_32081 = state_31271__$1;
(statearr_31276_32081[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (4))){
var inst_31223 = (state_31271[(2)]);
var inst_31224 = cljs.core.async.timeout(inst_31223);
var state_31271__$1 = state_31271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31271__$1,(5),inst_31224);
} else {
if((state_val_31272 === (15))){
var inst_31236 = (state_31271[(7)]);
var inst_31235 = (state_31271[(8)]);
var inst_31237 = (state_31271[(9)]);
var inst_31257 = (function (){var vec__31227 = inst_31235;
var active_conn_disconnected_QMARK_ = inst_31236;
var _QMARK_conn_entry = inst_31237;
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s uid port close for %s",log_prefix,lid_STAR_], null);
});
})();
var inst_31258 = (new cljs.core.Delay(inst_31257,null));
var inst_31259 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",877,33,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_31258,null,(71),null,null,null);
var inst_31260 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31261 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678),uid];
var inst_31262 = (new cljs.core.PersistentVector(null,2,(5),inst_31260,inst_31261,null));
var inst_31263 = receive_event_msg_BANG_(inst_31262);
var state_31271__$1 = (function (){var statearr_31277 = state_31271;
(statearr_31277[(10)] = inst_31259);

return statearr_31277;
})();
var statearr_31278_32082 = state_31271__$1;
(statearr_31278_32082[(2)] = inst_31263);

(statearr_31278_32082[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (13))){
var state_31271__$1 = state_31271;
var statearr_31279_32083 = state_31271__$1;
(statearr_31279_32083[(2)] = null);

(statearr_31279_32083[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (6))){
var state_31271__$1 = state_31271;
var statearr_31280_32084 = state_31271__$1;
(statearr_31280_32084[(2)] = new cljs.core.Keyword(null,"info","info",-317069002));

(statearr_31280_32084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (17))){
var inst_31266 = (state_31271[(2)]);
var state_31271__$1 = state_31271;
var statearr_31281_32085 = state_31271__$1;
(statearr_31281_32085[(2)] = inst_31266);

(statearr_31281_32085[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (3))){
var state_31271__$1 = state_31271;
var statearr_31282_32086 = state_31271__$1;
(statearr_31282_32086[(2)] = ms_allow_reconnect_before_close_ajax);

(statearr_31282_32086[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (12))){
var inst_31236 = (state_31271[(7)]);
var inst_31235 = (state_31271[(8)]);
var inst_31237 = (state_31271[(9)]);
var inst_31250 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31251 = [conn_type,uid];
var inst_31252 = (new cljs.core.PersistentVector(null,2,(5),inst_31250,inst_31251,null));
var inst_31253 = (function (){var vec__31227 = inst_31235;
var active_conn_disconnected_QMARK_ = inst_31236;
var _QMARK_conn_entry = inst_31237;
return (function (m_clients){
if(cljs.core.empty_QMARK_(m_clients)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return new cljs.core.Keyword("swap","abort","swap/abort",508048993);
}
});
})();
var inst_31254 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_31252,inst_31253);
var inst_31255 = maybe_disconnect_uid_BANG__QMARK_(uid);
var state_31271__$1 = (function (){var statearr_31283 = state_31271;
(statearr_31283[(11)] = inst_31254);

return statearr_31283;
})();
if(cljs.core.truth_(inst_31255)){
var statearr_31284_32087 = state_31271__$1;
(statearr_31284_32087[(1)] = (15));

} else {
var statearr_31285_32088 = state_31271__$1;
(statearr_31285_32088[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (2))){
var state_31271__$1 = state_31271;
var statearr_31286_32089 = state_31271__$1;
(statearr_31286_32089[(2)] = ms_allow_reconnect_before_close_ws);

(statearr_31286_32089[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (11))){
var inst_31243 = (state_31271[(2)]);
var state_31271__$1 = state_31271;
var statearr_31287_32090 = state_31271__$1;
(statearr_31287_32090[(2)] = inst_31243);

(statearr_31287_32090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (9))){
var state_31271__$1 = state_31271;
var statearr_31288_32091 = state_31271__$1;
(statearr_31288_32091[(2)] = new cljs.core.Keyword(null,"debug","debug",-1608172596));

(statearr_31288_32091[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (5))){
var inst_31236 = (state_31271[(7)]);
var inst_31235 = (state_31271[(8)]);
var inst_31226 = (state_31271[(2)]);
var inst_31230 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31231 = [conn_type,uid,client_id];
var inst_31232 = (new cljs.core.PersistentVector(null,3,(5),inst_31230,inst_31231,null));
var inst_31234 = (function (){return (function (p__31233){
var vec__31289 = p__31233;
var __QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31289,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31289,(1),null);
var conn_id_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31289,(2),null);
var _QMARK_conn_entry = vec__31289;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(conn_id,conn_id_STAR_)){
return taoensso.encore.swapped(new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,_QMARK_conn_entry], null));
} else {
return taoensso.encore.swapped(new cljs.core.Keyword("swap","abort","swap/abort",508048993),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,_QMARK_conn_entry], null));
}
});
})();
var inst_31235__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_31232,inst_31234);
var inst_31236__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31235__$1,(0),null);
var inst_31237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31235__$1,(1),null);
var state_31271__$1 = (function (){var statearr_31292 = state_31271;
(statearr_31292[(7)] = inst_31236__$1);

(statearr_31292[(8)] = inst_31235__$1);

(statearr_31292[(12)] = inst_31226);

(statearr_31292[(9)] = inst_31237);

return statearr_31292;
})();
if(cljs.core.truth_(inst_31236__$1)){
var statearr_31293_32092 = state_31271__$1;
(statearr_31293_32092[(1)] = (6));

} else {
var statearr_31294_32093 = state_31271__$1;
(statearr_31294_32093[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (14))){
var inst_31269 = (state_31271[(2)]);
var state_31271__$1 = state_31271;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31271__$1,inst_31269);
} else {
if((state_val_31272 === (16))){
var state_31271__$1 = state_31271;
var statearr_31295_32094 = state_31271__$1;
(statearr_31295_32094[(2)] = null);

(statearr_31295_32094[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (10))){
var state_31271__$1 = state_31271;
var statearr_31296_32095 = state_31271__$1;
(statearr_31296_32095[(2)] = new cljs.core.Keyword(null,"trace","trace",-1082747415));

(statearr_31296_32095[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (8))){
var inst_31236 = (state_31271[(7)]);
var inst_31235 = (state_31271[(8)]);
var inst_31237 = (state_31271[(9)]);
var inst_31245 = (state_31271[(2)]);
var inst_31246 = (function (){var vec__31227 = inst_31235;
var active_conn_disconnected_QMARK_ = inst_31236;
var _QMARK_conn_entry = inst_31237;
var level = inst_31245;
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s Server sch on-close timeout for %s: %s",log_prefix,lid_STAR_,(cljs.core.truth_(active_conn_disconnected_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disconnected?","disconnected?",-1423051714),true], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disconnected?","disconnected?",-1423051714),false,new cljs.core.Keyword(null,"?conn-entry","?conn-entry",-1522399252),_QMARK_conn_entry], null))], null);
});
})();
var inst_31247 = (new cljs.core.Delay(inst_31246,null));
var inst_31248 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,inst_31245,"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",861,31,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_31247,null,(70),null,null,null);
var state_31271__$1 = (function (){var statearr_31297 = state_31271;
(statearr_31297[(13)] = inst_31248);

return statearr_31297;
})();
if(cljs.core.truth_(inst_31236)){
var statearr_31298_32096 = state_31271__$1;
(statearr_31298_32096[(1)] = (12));

} else {
var statearr_31299_32097 = state_31271__$1;
(statearr_31299_32097[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$ring_handler_$_state_machine__21665__auto__ = null;
var taoensso$sente$ring_handler_$_state_machine__21665__auto____0 = (function (){
var statearr_31300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31300[(0)] = taoensso$sente$ring_handler_$_state_machine__21665__auto__);

(statearr_31300[(1)] = (1));

return statearr_31300;
});
var taoensso$sente$ring_handler_$_state_machine__21665__auto____1 = (function (state_31271){
while(true){
var ret_value__21666__auto__ = (function (){try{while(true){
var result__21667__auto__ = switch__21664__auto__(state_31271);
if(cljs.core.keyword_identical_QMARK_(result__21667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21667__auto__;
}
break;
}
}catch (e31301){var ex__21668__auto__ = e31301;
var statearr_31302_32098 = state_31271;
(statearr_31302_32098[(2)] = ex__21668__auto__);


if(cljs.core.seq((state_31271[(4)]))){
var statearr_31303_32099 = state_31271;
(statearr_31303_32099[(1)] = cljs.core.first((state_31271[(4)])));

} else {
throw ex__21668__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32100 = state_31271;
state_31271 = G__32100;
continue;
} else {
return ret_value__21666__auto__;
}
break;
}
});
taoensso$sente$ring_handler_$_state_machine__21665__auto__ = function(state_31271){
switch(arguments.length){
case 0:
return taoensso$sente$ring_handler_$_state_machine__21665__auto____0.call(this);
case 1:
return taoensso$sente$ring_handler_$_state_machine__21665__auto____1.call(this,state_31271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$ring_handler_$_state_machine__21665__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$ring_handler_$_state_machine__21665__auto____0;
taoensso$sente$ring_handler_$_state_machine__21665__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$ring_handler_$_state_machine__21665__auto____1;
return taoensso$sente$ring_handler_$_state_machine__21665__auto__;
})()
})();
var state__21736__auto__ = (function (){var statearr_31304 = f__21735__auto__();
(statearr_31304[(6)] = c__21734__auto__);

return statearr_31304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21736__auto__);
}));

return c__21734__auto__;
} else {
return null;
}
});
var on_open = (function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",886,25,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[ws/on-open] New server WebSocket sch for %s",lid_STAR_], null);
}),null)),null,(72),null,null,null);

if(cljs.core.truth_(send_handshake_BANG__QMARK_(server_ch,websocket_QMARK_))){
var vec__31305 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id], null),(function (_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [server_ch,taoensso.encore.now_udt(),conn_id], null);
}));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31305,(0),null);
var udt_open = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31305,(1),null);
if(cljs.core.truth_(ws_kalive_ms)){
var c__21734__auto___32101 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21735__auto__ = (function (){var switch__21664__auto__ = (function (state_31421){
var state_val_31422 = (state_31421[(1)]);
if((state_val_31422 === (7))){
var inst_31397 = (state_31421[(7)]);
var inst_31396 = (state_31421[(8)]);
var inst_31395 = (state_31421[(2)]);
var inst_31396__$1 = cljs.core.__destructure_map(inst_31395);
var inst_31397__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31396__$1,new cljs.core.Keyword(null,"recur?","recur?",774198931));
var inst_31398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31396__$1,new cljs.core.Keyword(null,"udt","udt",2011712751));
var inst_31399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31396__$1,new cljs.core.Keyword(null,"ms-timeout","ms-timeout",738937116));
var inst_31400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31396__$1,new cljs.core.Keyword(null,"expecting-pong?","expecting-pong?",-1330866481));
var inst_31401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31396__$1,new cljs.core.Keyword(null,"force-close?","force-close?",-1108906453));
var state_31421__$1 = (function (){var statearr_31423 = state_31421;
(statearr_31423[(9)] = inst_31399);

(statearr_31423[(7)] = inst_31397__$1);

(statearr_31423[(8)] = inst_31396__$1);

(statearr_31423[(10)] = inst_31398);

(statearr_31423[(11)] = inst_31400);

(statearr_31423[(12)] = inst_31401);

return statearr_31423;
})();
if(cljs.core.truth_(inst_31397__$1)){
var statearr_31424_32102 = state_31421__$1;
(statearr_31424_32102[(1)] = (29));

} else {
var statearr_31425_32103 = state_31421__$1;
(statearr_31425_32103[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (20))){
var inst_31362 = taoensso.sente.interfaces.sch_close_BANG_(server_ch);
var inst_31363 = [new cljs.core.Keyword(null,"recur?","recur?",774198931)];
var inst_31364 = [false];
var inst_31365 = cljs.core.PersistentHashMap.fromArrays(inst_31363,inst_31364);
var state_31421__$1 = (function (){var statearr_31426 = state_31421;
(statearr_31426[(13)] = inst_31362);

return statearr_31426;
})();
var statearr_31427_32104 = state_31421__$1;
(statearr_31427_32104[(2)] = inst_31365);

(statearr_31427_32104[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (27))){
var inst_31327 = (state_31421[(14)]);
var inst_31375 = [new cljs.core.Keyword(null,"recur?","recur?",774198931),new cljs.core.Keyword(null,"udt","udt",2011712751),new cljs.core.Keyword(null,"ms-timeout","ms-timeout",738937116),new cljs.core.Keyword(null,"expecting-pong?","expecting-pong?",-1330866481)];
var inst_31376 = [true,inst_31327,ws_kalive_ms,false];
var inst_31377 = cljs.core.PersistentHashMap.fromArrays(inst_31375,inst_31376);
var state_31421__$1 = state_31421;
var statearr_31428_32105 = state_31421__$1;
(statearr_31428_32105[(2)] = inst_31377);

(statearr_31428_32105[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (1))){
var inst_31308 = udt_open;
var inst_31309 = ws_kalive_ms;
var inst_31310 = inst_31308;
var inst_31311 = inst_31309;
var inst_31312 = false;
var state_31421__$1 = (function (){var statearr_31429 = state_31421;
(statearr_31429[(15)] = inst_31310);

(statearr_31429[(16)] = inst_31312);

(statearr_31429[(17)] = inst_31311);

return statearr_31429;
})();
var statearr_31430_32106 = state_31421__$1;
(statearr_31430_32106[(2)] = null);

(statearr_31430_32106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (24))){
var inst_31381 = [new cljs.core.Keyword(null,"recur?","recur?",774198931),new cljs.core.Keyword(null,"force-close?","force-close?",-1108906453)];
var inst_31382 = [false,true];
var inst_31383 = cljs.core.PersistentHashMap.fromArrays(inst_31381,inst_31382);
var state_31421__$1 = state_31421;
var statearr_31431_32107 = state_31421__$1;
(statearr_31431_32107[(2)] = inst_31383);

(statearr_31431_32107[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (4))){
var inst_31325 = (state_31421[(18)]);
var inst_31316 = (state_31421[(2)]);
var inst_31321 = cljs.core.deref(conns_);
var inst_31322 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31323 = [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id];
var inst_31324 = (new cljs.core.PersistentVector(null,3,(5),inst_31322,inst_31323,null));
var inst_31325__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_31321,inst_31324);
var inst_31326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31325__$1,(0),null);
var inst_31327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31325__$1,(1),null);
var inst_31328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31325__$1,(2),null);
var inst_31329 = (inst_31325__$1 == null);
var state_31421__$1 = (function (){var statearr_31432 = state_31421;
(statearr_31432[(19)] = inst_31316);

(statearr_31432[(20)] = inst_31328);

(statearr_31432[(21)] = inst_31326);

(statearr_31432[(18)] = inst_31325__$1);

(statearr_31432[(14)] = inst_31327);

return statearr_31432;
})();
if(cljs.core.truth_(inst_31329)){
var statearr_31433_32108 = state_31421__$1;
(statearr_31433_32108[(1)] = (5));

} else {
var statearr_31434_32109 = state_31421__$1;
(statearr_31434_32109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (15))){
var inst_31310 = (state_31421[(15)]);
var inst_31327 = (state_31421[(14)]);
var inst_31352 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_31310,inst_31327);
var state_31421__$1 = state_31421;
if(inst_31352){
var statearr_31435_32110 = state_31421__$1;
(statearr_31435_32110[(1)] = (17));

} else {
var statearr_31436_32111 = state_31421__$1;
(statearr_31436_32111[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (21))){
var inst_31367 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304));
var inst_31368 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_31367);
var state_31421__$1 = state_31421;
if(cljs.core.truth_(inst_31368)){
var statearr_31437_32112 = state_31421__$1;
(statearr_31437_32112[(1)] = (23));

} else {
var statearr_31438_32113 = state_31421__$1;
(statearr_31438_32113[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (31))){
var inst_31417 = (state_31421[(2)]);
var state_31421__$1 = state_31421;
var statearr_31439_32114 = state_31421__$1;
(statearr_31439_32114[(2)] = inst_31417);

(statearr_31439_32114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (32))){
var inst_31399 = (state_31421[(9)]);
var inst_31328 = (state_31421[(20)]);
var inst_31397 = (state_31421[(7)]);
var inst_31396 = (state_31421[(8)]);
var inst_31398 = (state_31421[(10)]);
var inst_31326 = (state_31421[(21)]);
var inst_31310 = (state_31421[(15)]);
var inst_31325 = (state_31421[(18)]);
var inst_31327 = (state_31421[(14)]);
var inst_31400 = (state_31421[(11)]);
var inst_31401 = (state_31421[(12)]);
var inst_31409 = (function (){var map__31320 = inst_31396;
var ms_timeout = inst_31399;
var _QMARK_sch = inst_31326;
var force_close_QMARK_ = inst_31401;
var udt_t1 = inst_31327;
var _QMARK_conn_entry = inst_31325;
var conn_id_STAR_ = inst_31328;
var expecting_pong_QMARK_ = inst_31400;
var udt = inst_31398;
var recur_QMARK_ = inst_31397;
var vec__31317 = inst_31325;
var udt_t0 = inst_31310;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[ws/on-open] Force close connection for %s",lid_STAR_], null);
});
})();
var inst_31410 = (new cljs.core.Delay(inst_31409,null));
var inst_31411 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",942,41,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_31410,null,(75),null,null,null);
var inst_31412 = on_close(server_ch,websocket_QMARK_,null);
var state_31421__$1 = (function (){var statearr_31440 = state_31421;
(statearr_31440[(22)] = inst_31411);

return statearr_31440;
})();
var statearr_31441_32115 = state_31421__$1;
(statearr_31441_32115[(2)] = inst_31412);

(statearr_31441_32115[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (33))){
var state_31421__$1 = state_31421;
var statearr_31442_32116 = state_31421__$1;
(statearr_31442_32116[(2)] = null);

(statearr_31442_32116[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (13))){
var inst_31346 = (state_31421[(2)]);
var state_31421__$1 = state_31421;
if(cljs.core.truth_(inst_31346)){
var statearr_31443_32117 = state_31421__$1;
(statearr_31443_32117[(1)] = (14));

} else {
var statearr_31444_32118 = state_31421__$1;
(statearr_31444_32118[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (22))){
var inst_31387 = (state_31421[(2)]);
var state_31421__$1 = state_31421;
var statearr_31445_32119 = state_31421__$1;
(statearr_31445_32119[(2)] = inst_31387);

(statearr_31445_32119[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (29))){
var inst_31399 = (state_31421[(9)]);
var inst_31398 = (state_31421[(10)]);
var inst_31400 = (state_31421[(11)]);
var inst_31310 = inst_31398;
var inst_31311 = inst_31399;
var inst_31312 = inst_31400;
var state_31421__$1 = (function (){var statearr_31446 = state_31421;
(statearr_31446[(15)] = inst_31310);

(statearr_31446[(16)] = inst_31312);

(statearr_31446[(17)] = inst_31311);

return statearr_31446;
})();
var statearr_31447_32120 = state_31421__$1;
(statearr_31447_32120[(2)] = null);

(statearr_31447_32120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (6))){
var inst_31328 = (state_31421[(20)]);
var inst_31335 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(conn_id,inst_31328);
var state_31421__$1 = state_31421;
if(inst_31335){
var statearr_31448_32121 = state_31421__$1;
(statearr_31448_32121[(1)] = (8));

} else {
var statearr_31449_32122 = state_31421__$1;
(statearr_31449_32122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (28))){
var inst_31379 = (state_31421[(2)]);
var state_31421__$1 = state_31421;
var statearr_31450_32123 = state_31421__$1;
(statearr_31450_32123[(2)] = inst_31379);

(statearr_31450_32123[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (25))){
var inst_31385 = (state_31421[(2)]);
var state_31421__$1 = state_31421;
var statearr_31451_32124 = state_31421__$1;
(statearr_31451_32124[(2)] = inst_31385);

(statearr_31451_32124[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (34))){
var inst_31415 = (state_31421[(2)]);
var state_31421__$1 = state_31421;
var statearr_31452_32125 = state_31421__$1;
(statearr_31452_32125[(2)] = inst_31415);

(statearr_31452_32125[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (17))){
var inst_31327 = (state_31421[(14)]);
var inst_31354 = [new cljs.core.Keyword(null,"recur?","recur?",774198931),new cljs.core.Keyword(null,"udt","udt",2011712751),new cljs.core.Keyword(null,"ms-timeout","ms-timeout",738937116),new cljs.core.Keyword(null,"expecting-pong?","expecting-pong?",-1330866481)];
var inst_31355 = [true,inst_31327,ws_kalive_ms,false];
var inst_31356 = cljs.core.PersistentHashMap.fromArrays(inst_31354,inst_31355);
var state_31421__$1 = state_31421;
var statearr_31453_32126 = state_31421__$1;
(statearr_31453_32126[(2)] = inst_31356);

(statearr_31453_32126[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (3))){
var inst_31419 = (state_31421[(2)]);
var state_31421__$1 = state_31421;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31421__$1,inst_31419);
} else {
if((state_val_31422 === (12))){
var state_31421__$1 = state_31421;
var statearr_31454_32127 = state_31421__$1;
(statearr_31454_32127[(2)] = null);

(statearr_31454_32127[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (2))){
var inst_31311 = (state_31421[(17)]);
var inst_31314 = cljs.core.async.timeout(inst_31311);
var state_31421__$1 = state_31421;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31421__$1,(4),inst_31314);
} else {
if((state_val_31422 === (23))){
var state_31421__$1 = state_31421;
if(cljs.core.truth_(ws_ping_timeout_ms)){
var statearr_31455_32128 = state_31421__$1;
(statearr_31455_32128[(1)] = (26));

} else {
var statearr_31456_32129 = state_31421__$1;
(statearr_31456_32129[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (19))){
var inst_31389 = (state_31421[(2)]);
var state_31421__$1 = state_31421;
var statearr_31457_32130 = state_31421__$1;
(statearr_31457_32130[(2)] = inst_31389);

(statearr_31457_32130[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (11))){
var inst_31326 = (state_31421[(21)]);
var inst_31342 = taoensso.sente.interfaces.sch_open_QMARK_(inst_31326);
var inst_31343 = cljs.core.not(inst_31342);
var state_31421__$1 = state_31421;
var statearr_31458_32131 = state_31421__$1;
(statearr_31458_32131[(2)] = inst_31343);

(statearr_31458_32131[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (9))){
var inst_31326 = (state_31421[(21)]);
var state_31421__$1 = state_31421;
if(cljs.core.truth_(inst_31326)){
var statearr_31459_32132 = state_31421__$1;
(statearr_31459_32132[(1)] = (11));

} else {
var statearr_31460_32133 = state_31421__$1;
(statearr_31460_32133[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (5))){
var inst_31331 = [new cljs.core.Keyword(null,"recur?","recur?",774198931)];
var inst_31332 = [false];
var inst_31333 = cljs.core.PersistentHashMap.fromArrays(inst_31331,inst_31332);
var state_31421__$1 = state_31421;
var statearr_31461_32134 = state_31421__$1;
(statearr_31461_32134[(2)] = inst_31333);

(statearr_31461_32134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (14))){
var inst_31348 = [new cljs.core.Keyword(null,"recur?","recur?",774198931),new cljs.core.Keyword(null,"force-close?","force-close?",-1108906453)];
var inst_31349 = [false,true];
var inst_31350 = cljs.core.PersistentHashMap.fromArrays(inst_31348,inst_31349);
var state_31421__$1 = state_31421;
var statearr_31462_32135 = state_31421__$1;
(statearr_31462_32135[(2)] = inst_31350);

(statearr_31462_32135[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (26))){
var inst_31327 = (state_31421[(14)]);
var inst_31371 = [new cljs.core.Keyword(null,"recur?","recur?",774198931),new cljs.core.Keyword(null,"udt","udt",2011712751),new cljs.core.Keyword(null,"ms-timeout","ms-timeout",738937116),new cljs.core.Keyword(null,"expecting-pong?","expecting-pong?",-1330866481)];
var inst_31372 = [true,inst_31327,ws_ping_timeout_ms,true];
var inst_31373 = cljs.core.PersistentHashMap.fromArrays(inst_31371,inst_31372);
var state_31421__$1 = state_31421;
var statearr_31463_32136 = state_31421__$1;
(statearr_31463_32136[(2)] = inst_31373);

(statearr_31463_32136[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (16))){
var inst_31391 = (state_31421[(2)]);
var state_31421__$1 = state_31421;
var statearr_31464_32137 = state_31421__$1;
(statearr_31464_32137[(2)] = inst_31391);

(statearr_31464_32137[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (30))){
var inst_31399 = (state_31421[(9)]);
var inst_31328 = (state_31421[(20)]);
var inst_31397 = (state_31421[(7)]);
var inst_31396 = (state_31421[(8)]);
var inst_31398 = (state_31421[(10)]);
var inst_31326 = (state_31421[(21)]);
var inst_31310 = (state_31421[(15)]);
var inst_31325 = (state_31421[(18)]);
var inst_31327 = (state_31421[(14)]);
var inst_31400 = (state_31421[(11)]);
var inst_31401 = (state_31421[(12)]);
var inst_31405 = (function (){var map__31320 = inst_31396;
var ms_timeout = inst_31399;
var _QMARK_sch = inst_31326;
var force_close_QMARK_ = inst_31401;
var udt_t1 = inst_31327;
var _QMARK_conn_entry = inst_31325;
var conn_id_STAR_ = inst_31328;
var expecting_pong_QMARK_ = inst_31400;
var udt = inst_31398;
var recur_QMARK_ = inst_31397;
var vec__31317 = inst_31325;
var udt_t0 = inst_31310;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[ws/on-open] Ending kalive loop for %s",lid_STAR_], null);
});
})();
var inst_31406 = (new cljs.core.Delay(inst_31405,null));
var inst_31407 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",938,39,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_31406,null,(74),null,null,null);
var state_31421__$1 = (function (){var statearr_31465 = state_31421;
(statearr_31465[(23)] = inst_31407);

return statearr_31465;
})();
if(cljs.core.truth_(inst_31401)){
var statearr_31466_32138 = state_31421__$1;
(statearr_31466_32138[(1)] = (32));

} else {
var statearr_31467_32139 = state_31421__$1;
(statearr_31467_32139[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (10))){
var inst_31393 = (state_31421[(2)]);
var state_31421__$1 = state_31421;
var statearr_31468_32140 = state_31421__$1;
(statearr_31468_32140[(2)] = inst_31393);

(statearr_31468_32140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (18))){
var inst_31328 = (state_31421[(20)]);
var inst_31326 = (state_31421[(21)]);
var inst_31310 = (state_31421[(15)]);
var inst_31312 = (state_31421[(16)]);
var inst_31325 = (state_31421[(18)]);
var inst_31327 = (state_31421[(14)]);
var inst_31311 = (state_31421[(17)]);
var inst_31358 = (function (){var udt_t0 = inst_31310;
var ms_timeout = inst_31311;
var expecting_pong_QMARK_ = inst_31312;
var _QMARK_conn_entry = inst_31325;
var vec__31317 = inst_31325;
var _QMARK_sch = inst_31326;
var udt_t1 = inst_31327;
var conn_id_STAR_ = inst_31328;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[ws/on-open] kalive loop inactivity for %s",lid_STAR_], null);
});
})();
var inst_31359 = (new cljs.core.Delay(inst_31358,null));
var inst_31360 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",912,45,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_31359,null,(73),null,null,null);
var state_31421__$1 = (function (){var statearr_31469 = state_31421;
(statearr_31469[(24)] = inst_31360);

return statearr_31469;
})();
if(cljs.core.truth_(inst_31312)){
var statearr_31470_32141 = state_31421__$1;
(statearr_31470_32141[(1)] = (20));

} else {
var statearr_31471_32142 = state_31421__$1;
(statearr_31471_32142[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (8))){
var inst_31337 = [new cljs.core.Keyword(null,"recur?","recur?",774198931)];
var inst_31338 = [false];
var inst_31339 = cljs.core.PersistentHashMap.fromArrays(inst_31337,inst_31338);
var state_31421__$1 = state_31421;
var statearr_31472_32143 = state_31421__$1;
(statearr_31472_32143[(2)] = inst_31339);

(statearr_31472_32143[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$ring_handler_$_state_machine__21665__auto__ = null;
var taoensso$sente$ring_handler_$_state_machine__21665__auto____0 = (function (){
var statearr_31473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31473[(0)] = taoensso$sente$ring_handler_$_state_machine__21665__auto__);

(statearr_31473[(1)] = (1));

return statearr_31473;
});
var taoensso$sente$ring_handler_$_state_machine__21665__auto____1 = (function (state_31421){
while(true){
var ret_value__21666__auto__ = (function (){try{while(true){
var result__21667__auto__ = switch__21664__auto__(state_31421);
if(cljs.core.keyword_identical_QMARK_(result__21667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21667__auto__;
}
break;
}
}catch (e31474){var ex__21668__auto__ = e31474;
var statearr_31475_32144 = state_31421;
(statearr_31475_32144[(2)] = ex__21668__auto__);


if(cljs.core.seq((state_31421[(4)]))){
var statearr_31476_32145 = state_31421;
(statearr_31476_32145[(1)] = cljs.core.first((state_31421[(4)])));

} else {
throw ex__21668__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32146 = state_31421;
state_31421 = G__32146;
continue;
} else {
return ret_value__21666__auto__;
}
break;
}
});
taoensso$sente$ring_handler_$_state_machine__21665__auto__ = function(state_31421){
switch(arguments.length){
case 0:
return taoensso$sente$ring_handler_$_state_machine__21665__auto____0.call(this);
case 1:
return taoensso$sente$ring_handler_$_state_machine__21665__auto____1.call(this,state_31421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$ring_handler_$_state_machine__21665__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$ring_handler_$_state_machine__21665__auto____0;
taoensso$sente$ring_handler_$_state_machine__21665__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$ring_handler_$_state_machine__21665__auto____1;
return taoensso$sente$ring_handler_$_state_machine__21665__auto__;
})()
})();
var state__21736__auto__ = (function (){var statearr_31477 = f__21735__auto__();
(statearr_31477[(6)] = c__21734__auto___32101);

return statearr_31477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21736__auto__);
}));

} else {
}

if(cljs.core.truth_(connect_uid_BANG__QMARK_(new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",946,31,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[ws/on-open] uid port open for %s",lid_STAR_], null);
}),null)),null,(76),null,null,null);

return receive_event_msg_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
return null;
}
} else {
return null;
}
} else {
var send_handshake_QMARK_ = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"handshake?","handshake?",-423743093).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id], null)) == null);
}
})();
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,(cljs.core.truth_(send_handshake_QMARK_)?new cljs.core.Keyword(null,"info","info",-317069002):new cljs.core.Keyword(null,"trace","trace",-1082747415)),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",955,25,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[ajax/on-open] New server Ajax sch (poll/handshake) for %s: %s",lid_STAR_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"send-handshake?","send-handshake?",-1890012461),send_handshake_QMARK_], null)], null);
}),null)),null,(77),null,null,null);

if(cljs.core.truth_(send_handshake_QMARK_)){
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id], null),(function (_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,taoensso.encore.now_udt(),conn_id], null);
}));

return send_handshake_BANG__QMARK_(server_ch,websocket_QMARK_);
} else {
var vec__31478 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id], null),(function (_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [server_ch,taoensso.encore.now_udt(),conn_id], null);
}));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31478,(0),null);
var udt_open = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31478,(1),null);
var temp__5804__auto___32147 = lp_timeout_ms;
if(cljs.core.truth_(temp__5804__auto___32147)){
var ms_32148 = temp__5804__auto___32147;
var c__21734__auto___32149 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21735__auto__ = (function (){var switch__21664__auto__ = (function (state_31510){
var state_val_31511 = (state_31510[(1)]);
if((state_val_31511 === (1))){
var inst_31481 = cljs.core.async.timeout(ms_32148);
var state_31510__$1 = state_31510;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31510__$1,(2),inst_31481);
} else {
if((state_val_31511 === (2))){
var inst_31488 = (state_31510[(7)]);
var inst_31483 = (state_31510[(2)]);
var inst_31484 = cljs.core.deref(conns_);
var inst_31485 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31486 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id];
var inst_31487 = (new cljs.core.PersistentVector(null,3,(5),inst_31485,inst_31486,null));
var inst_31488__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_31484,inst_31487);
var state_31510__$1 = (function (){var statearr_31512 = state_31510;
(statearr_31512[(8)] = inst_31483);

(statearr_31512[(7)] = inst_31488__$1);

return statearr_31512;
})();
if(cljs.core.truth_(inst_31488__$1)){
var statearr_31513_32150 = state_31510__$1;
(statearr_31513_32150[(1)] = (3));

} else {
var statearr_31514_32151 = state_31510__$1;
(statearr_31514_32151[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31511 === (3))){
var inst_31495 = (state_31510[(9)]);
var inst_31488 = (state_31510[(7)]);
var inst_31493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31488,(0),null);
var inst_31494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31488,(1),null);
var inst_31495__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31488,(2),null);
var inst_31496 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(conn_id,inst_31495__$1);
var state_31510__$1 = (function (){var statearr_31515 = state_31510;
(statearr_31515[(10)] = inst_31494);

(statearr_31515[(9)] = inst_31495__$1);

(statearr_31515[(11)] = inst_31493);

return statearr_31515;
})();
if(inst_31496){
var statearr_31516_32152 = state_31510__$1;
(statearr_31516_32152[(1)] = (6));

} else {
var statearr_31517_32153 = state_31510__$1;
(statearr_31517_32153[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31511 === (4))){
var state_31510__$1 = state_31510;
var statearr_31518_32154 = state_31510__$1;
(statearr_31518_32154[(2)] = null);

(statearr_31518_32154[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31511 === (5))){
var inst_31508 = (state_31510[(2)]);
var state_31510__$1 = state_31510;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31510__$1,inst_31508);
} else {
if((state_val_31511 === (6))){
var inst_31494 = (state_31510[(10)]);
var inst_31495 = (state_31510[(9)]);
var inst_31488 = (state_31510[(7)]);
var inst_31493 = (state_31510[(11)]);
var inst_31498 = (function (){var temp__5804__auto____$1 = inst_31488;
var vec__31490 = inst_31488;
var __QMARK_sch = inst_31493;
var _udt = inst_31494;
var conn_id_STAR_ = inst_31495;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[ajax/on-open] Polling timeout for %s",lid_STAR_], null);
});
})();
var inst_31499 = (new cljs.core.Delay(inst_31498,null));
var inst_31500 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",975,37,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_31499,null,(78),null,null,null);
var inst_31501 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var inst_31502 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_31501);
var state_31510__$1 = (function (){var statearr_31519 = state_31510;
(statearr_31519[(12)] = inst_31500);

return statearr_31519;
})();
var statearr_31520_32155 = state_31510__$1;
(statearr_31520_32155[(2)] = inst_31502);

(statearr_31520_32155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31511 === (7))){
var state_31510__$1 = state_31510;
var statearr_31521_32156 = state_31510__$1;
(statearr_31521_32156[(2)] = null);

(statearr_31521_32156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31511 === (8))){
var inst_31505 = (state_31510[(2)]);
var state_31510__$1 = state_31510;
var statearr_31522_32157 = state_31510__$1;
(statearr_31522_32157[(2)] = inst_31505);

(statearr_31522_32157[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$ring_handler_$_state_machine__21665__auto__ = null;
var taoensso$sente$ring_handler_$_state_machine__21665__auto____0 = (function (){
var statearr_31523 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31523[(0)] = taoensso$sente$ring_handler_$_state_machine__21665__auto__);

(statearr_31523[(1)] = (1));

return statearr_31523;
});
var taoensso$sente$ring_handler_$_state_machine__21665__auto____1 = (function (state_31510){
while(true){
var ret_value__21666__auto__ = (function (){try{while(true){
var result__21667__auto__ = switch__21664__auto__(state_31510);
if(cljs.core.keyword_identical_QMARK_(result__21667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21667__auto__;
}
break;
}
}catch (e31524){var ex__21668__auto__ = e31524;
var statearr_31525_32158 = state_31510;
(statearr_31525_32158[(2)] = ex__21668__auto__);


if(cljs.core.seq((state_31510[(4)]))){
var statearr_31526_32159 = state_31510;
(statearr_31526_32159[(1)] = cljs.core.first((state_31510[(4)])));

} else {
throw ex__21668__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32160 = state_31510;
state_31510 = G__32160;
continue;
} else {
return ret_value__21666__auto__;
}
break;
}
});
taoensso$sente$ring_handler_$_state_machine__21665__auto__ = function(state_31510){
switch(arguments.length){
case 0:
return taoensso$sente$ring_handler_$_state_machine__21665__auto____0.call(this);
case 1:
return taoensso$sente$ring_handler_$_state_machine__21665__auto____1.call(this,state_31510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$ring_handler_$_state_machine__21665__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$ring_handler_$_state_machine__21665__auto____0;
taoensso$sente$ring_handler_$_state_machine__21665__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$ring_handler_$_state_machine__21665__auto____1;
return taoensso$sente$ring_handler_$_state_machine__21665__auto__;
})()
})();
var state__21736__auto__ = (function (){var statearr_31527 = f__21735__auto__();
(statearr_31527[(6)] = c__21734__auto___32149);

return statearr_31527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21736__auto__);
}));

} else {
}

if(cljs.core.truth_(connect_uid_BANG__QMARK_(new cljs.core.Keyword(null,"ajax","ajax",814345549),uid))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",980,31,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[ajax/on-open] uid port open for %s",lid_STAR_], null);
}),null)),null,(79),null,null,null);

return receive_event_msg_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
return null;
}
}
}
});
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ring-async-resp-fn","ring-async-resp-fn",-689911654),_QMARK_ring_async_resp_fn,new cljs.core.Keyword(null,"ring-async-raise-fn","ring-async-raise-fn",744112799),_QMARK_ring_async_raise_fn,new cljs.core.Keyword(null,"on-open","on-open",-1391088163),on_open,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),on_msg,new cljs.core.Keyword(null,"on-close","on-close",-761178394),on_close,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error], null));
}
}
});
taoensso$sente$ring_handler = function(ring_req,_QMARK_ring_async_resp_fn,_QMARK_ring_async_raise_fn){
switch(arguments.length){
case 1:
return taoensso$sente$ring_handler__1.call(this,ring_req);
case 3:
return taoensso$sente$ring_handler__3.call(this,ring_req,_QMARK_ring_async_resp_fn,_QMARK_ring_async_raise_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$ring_handler.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$ring_handler__1;
taoensso$sente$ring_handler.cljs$core$IFn$_invoke$arity$3 = taoensso$sente$ring_handler__3;
return taoensso$sente$ring_handler;
})()
], null);
}));

(taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq31087){
var G__31088 = cljs.core.first(seq31087);
var seq31087__$1 = cljs.core.next(seq31087);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31088,seq31087__$1);
}));

/**
 * Debugging tool. Proportion ∈ℝ[0,1] of connection activities to sabotage.
 */
taoensso.sente._STAR_simulated_bad_conn_rate_STAR_ = null;
taoensso.sente.simulated_bad_conn_QMARK_ = (function taoensso$sente$simulated_bad_conn_QMARK_(){
var temp__5804__auto__ = taoensso.sente._STAR_simulated_bad_conn_rate_STAR_;
if(cljs.core.truth_(temp__5804__auto__)){
var sbcr = temp__5804__auto__;
return taoensso.encore.chance(sbcr);
} else {
return null;
}
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's conns.
 *   Allows some time for possible reconnects.
 */
taoensso.sente.send_buffered_server_evs_GT_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_clients_BANG_(conn_type,conns_,uid,buffered_evs_pstr,n_buffered_evs){
var e_32161 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_(taoensso.truss.impl.ensure_set(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null)),x);
})(conn_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e31528){if((e31528 instanceof Error)){
var e_32161 = e31528;
return e_32161;
} else {
throw e31528;

}
}})();
if((e_32161 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1005,3,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),"null",new cljs.core.Keyword(null,"ajax","ajax",814345549),"null"], null), null)], null),null,new cljs.core.Symbol(null,"conn-type","conn-type",1610962884,null),conn_type,e_32161,null);
}

var ms_backoffs = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(720),(720)], null);
var websocket_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(conn_type,new cljs.core.Keyword(null,"ws","ws",86841443));
var udt_t0 = taoensso.encore.now_udt();
var temp__5804__auto__ = cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid], null)));
if(cljs.core.truth_(temp__5804__auto__)){
var client_ids = temp__5804__auto__;
var c__21734__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21735__auto__ = (function (){var switch__21664__auto__ = (function (state_31562){
var state_val_31563 = (state_31562[(1)]);
if((state_val_31563 === (7))){
var inst_31540 = (state_31562[(7)]);
var inst_31531 = (state_31562[(8)]);
var inst_31534 = (state_31562[(9)]);
var inst_31542 = cljs.core.count(client_ids);
var inst_31543 = cljs.core.count(inst_31534);
var inst_31544 = (inst_31542 - inst_31543);
var inst_31545 = (function (){var pending = inst_31534;
var idx = inst_31531;
var temp__5802__auto__ = inst_31540;
var done_QMARK_ = inst_31540;
var n_desired = inst_31542;
var n_success = inst_31544;
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sent %s buffered evs to %s/%s %s clients for %s in %s attempt/s (%s msecs)",n_buffered_evs,n_success,n_desired,conn_type,taoensso.sente.lid.cljs$core$IFn$_invoke$arity$1(uid),(idx + (1)),(taoensso.encore.now_udt() - udt_t0)], null);
});
})();
var inst_31546 = (new cljs.core.Delay(inst_31545,null));
var inst_31547 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1042,15,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_31546,null,(80),null,null,null);
var state_31562__$1 = state_31562;
var statearr_31564_32162 = state_31562__$1;
(statearr_31564_32162[(2)] = inst_31547);

(statearr_31564_32162[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31563 === (1))){
var inst_31529 = cljs.core.set(client_ids);
var inst_31530 = inst_31529;
var inst_31531 = (0);
var state_31562__$1 = (function (){var statearr_31565 = state_31562;
(statearr_31565[(10)] = inst_31530);

(statearr_31565[(8)] = inst_31531);

return statearr_31565;
})();
var statearr_31566_32163 = state_31562__$1;
(statearr_31566_32163[(2)] = null);

(statearr_31566_32163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31563 === (4))){
var inst_31535 = (state_31562[(11)]);
var state_31562__$1 = state_31562;
var statearr_31567_32164 = state_31562__$1;
(statearr_31567_32164[(2)] = inst_31535);

(statearr_31567_32164[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31563 === (6))){
var inst_31540 = (state_31562[(7)]);
var inst_31540__$1 = (state_31562[(2)]);
var state_31562__$1 = (function (){var statearr_31568 = state_31562;
(statearr_31568[(7)] = inst_31540__$1);

return statearr_31568;
})();
if(cljs.core.truth_(inst_31540__$1)){
var statearr_31569_32165 = state_31562__$1;
(statearr_31569_32165[(1)] = (7));

} else {
var statearr_31570_32166 = state_31562__$1;
(statearr_31570_32166[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31563 === (3))){
var inst_31560 = (state_31562[(2)]);
var state_31562__$1 = state_31562;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31562__$1,inst_31560);
} else {
if((state_val_31563 === (2))){
var inst_31535 = (state_31562[(11)]);
var inst_31530 = (state_31562[(10)]);
var inst_31531 = (state_31562[(8)]);
var inst_31534 = (state_31562[(9)]);
var inst_31533 = (function (){var pending = inst_31530;
var idx = inst_31531;
return (function (pending__$1,client_id){
var temp__5802__auto__ = (function (){var temp__5804__auto____$1 = (function (){var temp__5804__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null));
if(cljs.core.truth_(temp__5804__auto____$1)){
var vec__31571 = temp__5804__auto____$1;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31571,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31571,(1),null);
var conn_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31571,(2),null);
var temp__5804__auto____$2 = _QMARK_sch;
if(cljs.core.truth_(temp__5804__auto____$2)){
var sch = temp__5804__auto____$2;
if(cljs.core.truth_(taoensso.sente.simulated_bad_conn_QMARK_())){
return null;
} else {
if(cljs.core.truth_(taoensso.sente.interfaces.sch_send_BANG_(sch,websocket_QMARK_,buffered_evs_pstr))){
return conn_id;
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5804__auto____$1)){
var conn_id = temp__5804__auto____$1;
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),(function (p__31574){
var vec__31575 = p__31574;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31575,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31575,(1),null);
var conn_id_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31575,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(conn_id,conn_id_STAR_)){
if(websocket_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,taoensso.encore.now_udt(),conn_id], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt,conn_id], null);
}
} else {
return new cljs.core.Keyword("swap","abort","swap/abort",508048993);
}
}));

return true;
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var sent_QMARK_ = temp__5802__auto__;
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(pending__$1,client_id);
} else {
return pending__$1;
}
});
})();
var inst_31534__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(inst_31533,inst_31530,inst_31530);
var inst_31535__$1 = cljs.core.empty_QMARK_(inst_31534__$1);
var state_31562__$1 = (function (){var statearr_31578 = state_31562;
(statearr_31578[(11)] = inst_31535__$1);

(statearr_31578[(9)] = inst_31534__$1);

return statearr_31578;
})();
if(inst_31535__$1){
var statearr_31579_32167 = state_31562__$1;
(statearr_31579_32167[(1)] = (4));

} else {
var statearr_31580_32168 = state_31562__$1;
(statearr_31580_32168[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31563 === (9))){
var inst_31558 = (state_31562[(2)]);
var state_31562__$1 = state_31562;
var statearr_31581_32169 = state_31562__$1;
(statearr_31581_32169[(2)] = inst_31558);

(statearr_31581_32169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31563 === (5))){
var inst_31531 = (state_31562[(8)]);
var inst_31538 = (inst_31531 > (4));
var state_31562__$1 = state_31562;
var statearr_31582_32170 = state_31562__$1;
(statearr_31582_32170[(2)] = inst_31538);

(statearr_31582_32170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31563 === (10))){
var inst_31531 = (state_31562[(8)]);
var inst_31534 = (state_31562[(9)]);
var inst_31554 = (state_31562[(2)]);
var inst_31555 = (inst_31531 + (1));
var inst_31530 = inst_31534;
var inst_31531__$1 = inst_31555;
var state_31562__$1 = (function (){var statearr_31583 = state_31562;
(statearr_31583[(12)] = inst_31554);

(statearr_31583[(10)] = inst_31530);

(statearr_31583[(8)] = inst_31531__$1);

return statearr_31583;
})();
var statearr_31584_32171 = state_31562__$1;
(statearr_31584_32171[(2)] = null);

(statearr_31584_32171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31563 === (8))){
var inst_31531 = (state_31562[(8)]);
var inst_31549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ms_backoffs,inst_31531);
var inst_31550 = cljs.core.rand_int(inst_31549);
var inst_31551 = (inst_31549 + inst_31550);
var inst_31552 = cljs.core.async.timeout(inst_31551);
var state_31562__$1 = state_31562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31562__$1,(10),inst_31552);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_clients_BANG__$_state_machine__21665__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_clients_BANG__$_state_machine__21665__auto____0 = (function (){
var statearr_31585 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31585[(0)] = taoensso$sente$send_buffered_server_evs_GT_clients_BANG__$_state_machine__21665__auto__);

(statearr_31585[(1)] = (1));

return statearr_31585;
});
var taoensso$sente$send_buffered_server_evs_GT_clients_BANG__$_state_machine__21665__auto____1 = (function (state_31562){
while(true){
var ret_value__21666__auto__ = (function (){try{while(true){
var result__21667__auto__ = switch__21664__auto__(state_31562);
if(cljs.core.keyword_identical_QMARK_(result__21667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21667__auto__;
}
break;
}
}catch (e31586){var ex__21668__auto__ = e31586;
var statearr_31587_32172 = state_31562;
(statearr_31587_32172[(2)] = ex__21668__auto__);


if(cljs.core.seq((state_31562[(4)]))){
var statearr_31588_32173 = state_31562;
(statearr_31588_32173[(1)] = cljs.core.first((state_31562[(4)])));

} else {
throw ex__21668__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32174 = state_31562;
state_31562 = G__32174;
continue;
} else {
return ret_value__21666__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_clients_BANG__$_state_machine__21665__auto__ = function(state_31562){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_clients_BANG__$_state_machine__21665__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_clients_BANG__$_state_machine__21665__auto____1.call(this,state_31562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_clients_BANG__$_state_machine__21665__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_clients_BANG__$_state_machine__21665__auto____0;
taoensso$sente$send_buffered_server_evs_GT_clients_BANG__$_state_machine__21665__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_clients_BANG__$_state_machine__21665__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_clients_BANG__$_state_machine__21665__auto__;
})()
})();
var state__21736__auto__ = (function (){var statearr_31589 = f__21735__auto__();
(statearr_31589[(6)] = c__21734__auto__);

return statearr_31589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21736__auto__);
}));

return c__21734__auto__;
} else {
return null;
}
});
/**
 * Alias of `taoensso.encore/ajax-call`
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_call;

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

var taoensso$sente$IChSocket$_chsk_connect_BANG_$dyn_32175 = (function (chsk){
var x__5350__auto__ = (((chsk == null))?null:chsk);
var m__5351__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__5351__auto__.call(null, chsk));
} else {
var m__5349__auto__ = (taoensso.sente._chsk_connect_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__5349__auto__.call(null, chsk));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-connect!",chsk);
}
}
});
taoensso.sente._chsk_connect_BANG_ = (function taoensso$sente$_chsk_connect_BANG_(chsk){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(chsk);
} else {
return taoensso$sente$IChSocket$_chsk_connect_BANG_$dyn_32175(chsk);
}
});

var taoensso$sente$IChSocket$_chsk_disconnect_BANG_$dyn_32176 = (function (chsk,reason){
var x__5350__auto__ = (((chsk == null))?null:chsk);
var m__5351__auto__ = (taoensso.sente._chsk_disconnect_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__5351__auto__.call(null, chsk,reason));
} else {
var m__5349__auto__ = (taoensso.sente._chsk_disconnect_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__5349__auto__.call(null, chsk,reason));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-disconnect!",chsk);
}
}
});
taoensso.sente._chsk_disconnect_BANG_ = (function taoensso$sente$_chsk_disconnect_BANG_(chsk,reason){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(chsk,reason);
} else {
return taoensso$sente$IChSocket$_chsk_disconnect_BANG_$dyn_32176(chsk,reason);
}
});

var taoensso$sente$IChSocket$_chsk_reconnect_BANG_$dyn_32177 = (function (chsk,reason){
var x__5350__auto__ = (((chsk == null))?null:chsk);
var m__5351__auto__ = (taoensso.sente._chsk_reconnect_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__5351__auto__.call(null, chsk,reason));
} else {
var m__5349__auto__ = (taoensso.sente._chsk_reconnect_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__5349__auto__.call(null, chsk,reason));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-reconnect!",chsk);
}
}
});
taoensso.sente._chsk_reconnect_BANG_ = (function taoensso$sente$_chsk_reconnect_BANG_(chsk,reason){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$2 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$2(chsk,reason);
} else {
return taoensso$sente$IChSocket$_chsk_reconnect_BANG_$dyn_32177(chsk,reason);
}
});

var taoensso$sente$IChSocket$_chsk_break_connection_BANG_$dyn_32178 = (function (chsk,opts){
var x__5350__auto__ = (((chsk == null))?null:chsk);
var m__5351__auto__ = (taoensso.sente._chsk_break_connection_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(chsk,opts) : m__5351__auto__.call(null, chsk,opts));
} else {
var m__5349__auto__ = (taoensso.sente._chsk_break_connection_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(chsk,opts) : m__5349__auto__.call(null, chsk,opts));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-break-connection!",chsk);
}
}
});
taoensso.sente._chsk_break_connection_BANG_ = (function taoensso$sente$_chsk_break_connection_BANG_(chsk,opts){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_break_connection_BANG_$arity$2 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_break_connection_BANG_$arity$2(chsk,opts);
} else {
return taoensso$sente$IChSocket$_chsk_break_connection_BANG_$dyn_32178(chsk,opts);
}
});

var taoensso$sente$IChSocket$_chsk_send_BANG_$dyn_32179 = (function (chsk,ev,opts){
var x__5350__auto__ = (((chsk == null))?null:chsk);
var m__5351__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(chsk,ev,opts) : m__5351__auto__.call(null, chsk,ev,opts));
} else {
var m__5349__auto__ = (taoensso.sente._chsk_send_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(chsk,ev,opts) : m__5349__auto__.call(null, chsk,ev,opts));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-send!",chsk);
}
}
});
taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
return taoensso$sente$IChSocket$_chsk_send_BANG_$dyn_32179(chsk,ev,opts);
}
});

taoensso.sente.chsk_connect_BANG_ = (function taoensso$sente$chsk_connect_BANG_(chsk){
return taoensso.sente._chsk_connect_BANG_(chsk);
});
taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
return taoensso.sente._chsk_disconnect_BANG_(chsk,new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641));
});
/**
 * Cycles connection, useful for reauthenticating after login/logout, etc.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
return taoensso.sente._chsk_reconnect_BANG_(chsk,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));
});
/**
 * Breaks channel socket's underlying connection without doing a clean
 *   disconnect as in `chsk-disconnect!`. Useful for simulating broken
 *   connections in testing, etc.
 * 
 *   Options:
 * 
 *     `:close-ws?` - (Default: true)
 *       Allow WebSocket's `on-close` event to fire?
 *       Set to falsey to ~simulate a broken socket that doesn't realise
 *       it's broken.
 */
taoensso.sente.chsk_break_connection_BANG_ = (function taoensso$sente$chsk_break_connection_BANG_(var_args){
var G__31591 = arguments.length;
switch (G__31591) {
case 1:
return taoensso.sente.chsk_break_connection_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.sente.chsk_break_connection_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.sente.chsk_break_connection_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (chsk){
return taoensso.sente._chsk_break_connection_BANG_(chsk,null);
}));

(taoensso.sente.chsk_break_connection_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,p__31592){
var map__31593 = p__31592;
var map__31593__$1 = cljs.core.__destructure_map(map__31593);
var opts = map__31593__$1;
var close_ws_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31593__$1,new cljs.core.Keyword(null,"close-ws?","close-ws?",-1488665553),true);
return taoensso.sente._chsk_break_connection_BANG_(chsk,opts);
}));

(taoensso.sente.chsk_break_connection_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var G__31595 = arguments.length;
switch (G__31595) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
}));

(taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
}));

(taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1093,7,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client chsk send: %s",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$(new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),new cljs.core.Keyword(null,"ev","ev",-406827324),ev], null)], null);
}),null)),null,(81),null,null,null);

return taoensso.sente._chsk_send_BANG_(chsk,ev,opts);
}));

(taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4);

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1097,6,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client chsk send against closed chsk: %s",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cb?","cb?",1370758422),cljs.core.boolean$(_QMARK_cb_fn)], null)], null);
}),null)),null,(82),null,null,null);

if(cljs.core.truth_(_QMARK_cb_fn)){
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264)) : _QMARK_cb_fn.call(null, new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264)));
} else {
}

return false;
});
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event(x);

if(cljs.core.truth_((function (){var or__5002__auto__ = (((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null)));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return taoensso.encore.nat_int_QMARK_(_QMARK_timeout_ms);
}
})())){
} else {
throw (new Error(["Assert failed: ",["cb requires a timeout; timeout-ms should be a +ive integer: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_timeout_ms)].join(''),"\n","(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nat-int? ?timeout-ms)))"].join('')));
}

if(cljs.core.truth_((function (){var or__5002__auto__ = (_QMARK_cb == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = cljs.core.ifn_QMARK_(_QMARK_cb);
if(or__5002__auto____$1){
return or__5002__auto____$1;
} else {
return taoensso.encore.chan_QMARK_(_QMARK_cb);
}
}
})())){
return null;
} else {
throw (new Error(["Assert failed: ",["cb should be nil, an ifn, or a channel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(_QMARK_cb))].join(''),"\n","(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))"].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__5804__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5804__auto__)){
var cb_uuid = temp__5804__auto__;
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),(function (_QMARK_f){
return taoensso.encore.swapped(new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
}));
} else {
return null;
}
});
/**
 * Atomically swaps the value of chk's :state_ atom.
 */
taoensso.sente.swap_chsk_state_BANG_ = (function taoensso$sente$swap_chsk_state_BANG_(chsk,f){
var vec__31596 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_state) : f.call(null, old_state));
return taoensso.encore.swapped(new_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null));
}));
var old_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31596,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31596,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state)){
var old_open_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(old_state));
var new_open_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state));
var open_changed_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_open_QMARK_,old_open_QMARK_);
var opened_QMARK_ = ((new_open_QMARK_) && ((!(old_open_QMARK_))));
var closed_QMARK_ = (((!(new_open_QMARK_))) && (old_open_QMARK_));
var first_open_QMARK_ = ((opened_QMARK_) && (cljs.core.not(new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732).cljs$core$IFn$_invoke$arity$1(old_state))));
var new_state__$1 = (((!(open_changed_QMARK_)))?new_state:taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(new_state,new cljs.core.Keyword(null,"open-changed?","open-changed?",-3609790),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"opened?","opened?",1096959669),opened_QMARK_,new cljs.core.Keyword(null,"closed?","closed?",-1408769040),closed_QMARK_,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),first_open_QMARK_], 0)));
if(opened_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1142,22,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client chsk now open"], null);
}),null)),null,(83),null,null,null);
} else {
if(closed_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1143,22,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client chsk now closed, reason: %s",cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(new_state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-close","last-close",-2054255782),new cljs.core.Keyword(null,"reason","reason",-2070751759)], null),"unknown")], null);
}),null)),null,(84),null,null,null);
} else {
}
}

var output = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$1,open_changed_QMARK_], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),output], null));

return open_changed_QMARK_;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_32182 = (function (){try{if(cljs.core.map_QMARK_(state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e31599){if((e31599 instanceof Error)){
var e_32182 = e31599;
return e_32182;
} else {
throw e31599;

}
}})();
if((e_32182 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1151,6,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"state","state",-348086572,null),state,e_32182,null);
}

var e_32183 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_(taoensso.truss.impl.ensure_set(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641),null,new cljs.core.Keyword(null,"ws-error","ws-error",263286885),null,new cljs.core.Keyword(null,"ws-ping-timeout","ws-ping-timeout",788047274),null,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720),null,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707),null,new cljs.core.Keyword(null,"clean","clean",41534079),null], null), null)),x);
})(reason)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e31600){if((e31600 instanceof Error)){
var e_32183 = e31600;
return e_32183;
} else {
throw e31600;

}
}})();
if((e_32183 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1152,6,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641),"null",new cljs.core.Keyword(null,"ws-error","ws-error",263286885),"null",new cljs.core.Keyword(null,"ws-ping-timeout","ws-ping-timeout",788047274),"null",new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720),"null",new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),"null",new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707),"null",new cljs.core.Keyword(null,"clean","clean",41534079),"null"], null), null)], null),null,new cljs.core.Symbol(null,"reason","reason",-430220232,null),reason,e_32183,null);
}

var closing_QMARK_ = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state);
var m = state;
var m__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733));
var m__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.Keyword(null,"open?","open?",1238443125),false);
if(cljs.core.truth_(closing_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$2,new cljs.core.Keyword(null,"last-close","last-close",-2054255782),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null));
} else {
return m__$2;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if((((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_(_QMARK_cb)))){
return _QMARK_cb;
} else {
var e_32184 = (function (){try{if(cljs.core.truth_(taoensso.encore.chan_QMARK_(_QMARK_cb))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e31601){if((e31601 instanceof Error)){
var e_32184 = e31601;
return e_32184;
} else {
throw e31601;

}
}})();
if((e_32184 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1177,10,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.Symbol("enc","chan?","enc/chan?",1377166,null),new cljs.core.Symbol("taoensso.encore","chan?","taoensso.encore/chan?",-249096746,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null),_QMARK_cb,e_32184,null);
}

taoensso.sente.assert_event(ev);

var vec__31602 = ev;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31602,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31602,(1),null);
var cb_ch = _QMARK_cb;
return (function (reply){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.as_qname(ev_id)),".cb"].join('')),reply], null));
});
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
var buffered_evs = ((cljs.core.vector_QMARK_(clj))?clj:taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1187,25,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"clj","clj",980036099,null),clj,null,null));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1189,8,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client received %s buffered evs from server: %s",cljs.core.count(buffered_evs),clj], null);
}),null)),null,(85),null,null,null);

var seq__31605 = cljs.core.seq(buffered_evs);
var chunk__31606 = null;
var count__31607 = (0);
var i__31608 = (0);
while(true){
if((i__31608 < count__31607)){
var ev = chunk__31606.cljs$core$IIndexed$_nth$arity$2(null, i__31608);
taoensso.sente.assert_event(ev);

var vec__31615_32185 = ev;
var id_32186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31615_32185,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_32186),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__32187 = seq__31605;
var G__32188 = chunk__31606;
var G__32189 = count__31607;
var G__32190 = (i__31608 + (1));
seq__31605 = G__32187;
chunk__31606 = G__32188;
count__31607 = G__32189;
i__31608 = G__32190;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31605);
if(temp__5804__auto__){
var seq__31605__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31605__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__31605__$1);
var G__32191 = cljs.core.chunk_rest(seq__31605__$1);
var G__32192 = c__5525__auto__;
var G__32193 = cljs.core.count(c__5525__auto__);
var G__32194 = (0);
seq__31605 = G__32191;
chunk__31606 = G__32192;
count__31607 = G__32193;
i__31608 = G__32194;
continue;
} else {
var ev = cljs.core.first(seq__31605__$1);
taoensso.sente.assert_event(ev);

var vec__31618_32195 = ev;
var id_32196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31618_32195,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_32196),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__32197 = cljs.core.next(seq__31605__$1);
var G__32198 = null;
var G__32199 = (0);
var G__32200 = (0);
seq__31605 = G__32197;
chunk__31606 = G__32198;
count__31607 = G__32199;
i__31608 = G__32200;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handshake_QMARK_ = (function taoensso$sente$handshake_QMARK_(x){
var and__5000__auto__ = cljs.core.vector_QMARK_(x);
if(and__5000__auto__){
var vec__31621 = x;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31621,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x1,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686));
} else {
return and__5000__auto__;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_32201 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_(taoensso.truss.impl.ensure_set(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null)),x);
})(chsk_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e31624){if((e31624 instanceof Error)){
var e_32201 = e31624;
return e_32201;
} else {
throw e31624;

}
}})();
if((e_32201 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1204,6,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),"null",new cljs.core.Keyword(null,"ajax","ajax",814345549),"null"], null), null)], null),null,new cljs.core.Symbol(null,"chsk-type","chsk-type",40874615,null),chsk_type,e_32201,null);
}

var e_32202 = (function (){try{if(taoensso.sente.handshake_QMARK_(clj)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e31625){if((e31625 instanceof Error)){
var e_32202 = e31625;
return e_32202;
} else {
throw e31625;

}
}})();
if((e_32202 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1205,6,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.Symbol(null,"handshake?","handshake?",1216788434,null),new cljs.core.Symbol("taoensso.sente","handshake?","taoensso.sente/handshake?",389425041,null),new cljs.core.Symbol(null,"clj","clj",980036099,null),clj,e_32202,null);
}

var vec__31626 = clj;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31626,(0),null);
var vec__31629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31626,(1),null);
var _QMARK_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31629,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31629,(1),null);
var _QMARK_handshake_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31629,(2),null);
var map__31632 = chsk;
var map__31632__$1 = cljs.core.__destructure_map(map__31632);
var chs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31632__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var ever_opened_QMARK__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31632__$1,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913));
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_(ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),chsk_type,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"handshake-data","handshake-data",-278378864),_QMARK_handshake_data], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,null,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1226,8,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client received %s %s handshake from server: %s",((first_handshake_QMARK_)?"first":"new"),chsk_type,clj], null);
}),null)),null,(86),null,null,null);

taoensso.sente.assert_event(handshake_ev);

taoensso.sente.swap_chsk_state_BANG_(chsk,(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)),new_state], 0));
}));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
});
/**
 * nnil iff the websocket npm library[1] is available.
 *   Easiest way to install:
 *     1. Add the lein-npm[2] plugin to your `project.clj`,
 *     2. Add: `:npm {:dependencies [[websocket "1.0.23"]]}`
 * 
 *   [1] Ref. https://www.npmjs.com/package/websocket
 *   [2] Ref. https://github.com/RyanMcG/lein-npm
 */
taoensso.sente._QMARK_node_npm_websocket_ = (function (){var make_package_name = (function (prefix){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"socket"].join('');
});
var require_fn = (((typeof require !== 'undefined'))?require:cljs.core.constantly(new cljs.core.Keyword(null,"no-op","no-op",-93046065)));
return (new cljs.core.Delay((function (){
if(((taoensso.sente.node_target_QMARK_) && ((typeof require !== 'undefined')))){
try{var G__31634 = make_package_name("web");
return (require_fn.cljs$core$IFn$_invoke$arity$1 ? require_fn.cljs$core$IFn$_invoke$arity$1(G__31634) : require_fn.call(null, G__31634));
}catch (e31633){var e = e31633;
return null;
}} else {
return null;
}
}),null));
})();
taoensso.sente.make_client_ws_js = (function taoensso$sente$make_client_ws_js(p__31635){
var map__31636 = p__31635;
var map__31636__$1 = cljs.core.__destructure_map(map__31636);
var opts = map__31636__$1;
var uri_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31636__$1,new cljs.core.Keyword(null,"uri-str","uri-str",304128675));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31636__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31636__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var on_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31636__$1,new cljs.core.Keyword(null,"on-message","on-message",1662987808));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31636__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var binary_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31636__$1,new cljs.core.Keyword(null,"binary-type","binary-type",1096940609));
var temp__5804__auto__ = (function (){var or__5002__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(goog.global,"WebSocket");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(goog.global,"MozWebSocket");
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(taoensso.sente._QMARK_node_npm_websocket_),"w3cwebsocket");
}
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var WebSocket = temp__5804__auto__;
return (new cljs.core.Delay((function (){
var socket = (new WebSocket(uri_str));
var G__31637_32203 = socket;
(G__31637_32203["onerror"] = on_error);

(G__31637_32203["onmessage"] = on_message);

(G__31637_32203["onclose"] = on_close);


var temp__5804__auto___32204__$1 = binary_type;
if(cljs.core.truth_(temp__5804__auto___32204__$1)){
var bt_32205 = temp__5804__auto___32204__$1;
(socket["binaryType"] = bt_32205);
} else {
}

return socket;
}),null));
} else {
return null;
}
});
/**
 * Returns nil if WebSocket client cannot be created, or a delay
 *   that can be derefed to get a connected client.
 */
taoensso.sente.default_client_ws_constructor = (function taoensso$sente$default_client_ws_constructor(p__31638){
var map__31639 = p__31638;
var map__31639__$1 = cljs.core.__destructure_map(map__31639);
var opts = map__31639__$1;
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31639__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var on_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31639__$1,new cljs.core.Keyword(null,"on-message","on-message",1662987808));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31639__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var uri_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31639__$1,new cljs.core.Keyword(null,"uri-str","uri-str",304128675));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31639__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
return taoensso.sente.make_client_ws_js(opts);
});
/**
 * Returns non-blank client CSRF token ?string from given token string
 *   or (fn [])->?string.
 */
taoensso.sente.get_client_csrf_token_str = (function taoensso$sente$get_client_csrf_token_str(warn_QMARK_,token_or_fn){
if(cljs.core.truth_(token_or_fn)){
var dynamic_QMARK_ = cljs.core.fn_QMARK_(token_or_fn);
var temp__5802__auto__ = taoensso.encore.as__QMARK_nblank(((dynamic_QMARK_)?(token_or_fn.cljs$core$IFn$_invoke$arity$0 ? token_or_fn.cljs$core$IFn$_invoke$arity$0() : token_or_fn.call(null, )):token_or_fn));
if(cljs.core.truth_(temp__5802__auto__)){
var token = temp__5802__auto__;
return token;
} else {
var temp__5804__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(warn_QMARK_,new cljs.core.Keyword(null,"dynamic","dynamic",704819571)))?dynamic_QMARK_:warn_QMARK_);
if(cljs.core.truth_(temp__5804__auto__)){
var warn_QMARK___$1 = temp__5804__auto__;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1346,11,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WARNING: no client CSRF token provided. Connections will FAIL if server-side CSRF check is enabled (as it is by default)."], null);
}),null)),null,(87),null,null,null);

return null;
} else {
return null;
}
}
} else {
return null;
}
});
taoensso.sente.client_unloading_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
try{goog.global.addEventListener("beforeunload",(function (event){
cljs.core.reset_BANG_(taoensso.sente.client_unloading_QMARK__,true);

return null;
}));
}catch (e31640){var __32206 = e31640;
}taoensso.sente.retry_connect_chsk_BANG_ = (function taoensso$sente$retry_connect_chsk_BANG_(chsk,backoff_ms_fn,connect_fn,retry_count){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(retry_count,(1))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1361,7,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client will try reconnect chsk now"], null);
}),null)),null,(88),null,null,null);

return (connect_fn.cljs$core$IFn$_invoke$arity$0 ? connect_fn.cljs$core$IFn$_invoke$arity$0() : connect_fn.call(null, ));
} else {
var backoff_ms = (backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count) : backoff_ms_fn.call(null, retry_count));
var udt_next_reconnect = (taoensso.encore.now_udt() + backoff_ms);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1367,7,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client will try reconnect chsk (attempt %s) after %s msecs",retry_count,backoff_ms], null);
}),null)),null,(89),null,null,null);

goog.global.setTimeout(connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk,(function (p1__31641_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31641_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
}));
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
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,chs,params,headers,packer,url,state_,conn_id_,retry_count_,ever_opened_QMARK__,ws_kalive_ms,ws_ping_timeout_ms,ws_opts,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,ws_constructor,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.headers = headers;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.conn_id_ = conn_id_;
this.retry_count_ = retry_count_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.ws_kalive_ms = ws_kalive_ms;
this.ws_ping_timeout_ms = ws_ping_timeout_ms;
this.ws_opts = ws_opts;
this.backoff_ms_fn = backoff_ms_fn;
this.cbs_waiting_ = cbs_waiting_;
this.socket_ = socket_;
this.udt_last_comms_ = udt_last_comms_;
this.ws_constructor = ws_constructor;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k31647,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__31651 = k31647;
var G__31651__$1 = (((G__31651 instanceof cljs.core.Keyword))?G__31651.fqn:null);
switch (G__31651__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "headers":
return self__.headers;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "state_":
return self__.state_;

break;
case "conn-id_":
return self__.conn_id_;

break;
case "retry-count_":
return self__.retry_count_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "ws-kalive-ms":
return self__.ws_kalive_ms;

break;
case "ws-ping-timeout-ms":
return self__.ws_ping_timeout_ms;

break;
case "ws-opts":
return self__.ws_opts;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "socket_":
return self__.socket_;

break;
case "udt-last-comms_":
return self__.udt_last_comms_;

break;
case "ws-constructor":
return self__.ws_constructor;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k31647,else__5303__auto__);

}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__31652){
var vec__31653 = p__31652;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31653,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31653,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),self__.conn_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968),self__.ws_ping_timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643),self__.ws_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-constructor","ws-constructor",1384015617),self__.ws_constructor],null))], null),self__.__extmap));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31646){
var self__ = this;
var G__31646__$1 = this;
return (new cljs.core.RecordIter((0),G__31646__$1,18,new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968),new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),new cljs.core.Keyword(null,"ws-constructor","ws-constructor",1384015617)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (18 + cljs.core.count(self__.__extmap));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (1998688700 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31648,other31649){
var self__ = this;
var this31648__$1 = this;
return (((!((other31649 == null)))) && ((((this31648__$1.constructor === other31649.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31648__$1.client_id,other31649.client_id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31648__$1.chs,other31649.chs)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31648__$1.params,other31649.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31648__$1.headers,other31649.headers)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31648__$1.packer,other31649.packer)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31648__$1.url,other31649.url)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31648__$1.state_,other31649.state_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31648__$1.conn_id_,other31649.conn_id_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31648__$1.retry_count_,other31649.retry_count_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31648__$1.ever_opened_QMARK__,other31649.ever_opened_QMARK__)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31648__$1.ws_kalive_ms,other31649.ws_kalive_ms)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31648__$1.ws_ping_timeout_ms,other31649.ws_ping_timeout_ms)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31648__$1.ws_opts,other31649.ws_opts)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31648__$1.backoff_ms_fn,other31649.backoff_ms_fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31648__$1.cbs_waiting_,other31649.cbs_waiting_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31648__$1.socket_,other31649.socket_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31648__$1.udt_last_comms_,other31649.udt_last_comms_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31648__$1.ws_constructor,other31649.ws_constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31648__$1.__extmap,other31649.__extmap)))))))))))))))))))))))))))))))))))))))));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 18, [new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968),null,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),null,new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"ws-constructor","ws-constructor",1384015617),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),null,new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"headers","headers",-835030129),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k31647){
var self__ = this;
var this__5307__auto____$1 = this;
var G__31656 = k31647;
var G__31656__$1 = (((G__31656 instanceof cljs.core.Keyword))?G__31656.fqn:null);
switch (G__31656__$1) {
case "client-id":
case "chs":
case "params":
case "headers":
case "packer":
case "url":
case "state_":
case "conn-id_":
case "retry-count_":
case "ever-opened?_":
case "ws-kalive-ms":
case "ws-ping-timeout-ms":
case "ws-opts":
case "backoff-ms-fn":
case "cbs-waiting_":
case "socket_":
case "udt-last-comms_":
case "ws-constructor":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k31647);

}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__31646){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__31657 = cljs.core.keyword_identical_QMARK_;
var expr__31658 = k__5309__auto__;
if(cljs.core.truth_((pred__31657.cljs$core$IFn$_invoke$arity$2 ? pred__31657.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__31658) : pred__31657.call(null, new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__31658)))){
return (new taoensso.sente.ChWebSocket(G__31646,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31657.cljs$core$IFn$_invoke$arity$2 ? pred__31657.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"chs","chs",376886120),expr__31658) : pred__31657.call(null, new cljs.core.Keyword(null,"chs","chs",376886120),expr__31658)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__31646,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31657.cljs$core$IFn$_invoke$arity$2 ? pred__31657.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__31658) : pred__31657.call(null, new cljs.core.Keyword(null,"params","params",710516235),expr__31658)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__31646,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31657.cljs$core$IFn$_invoke$arity$2 ? pred__31657.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"headers","headers",-835030129),expr__31658) : pred__31657.call(null, new cljs.core.Keyword(null,"headers","headers",-835030129),expr__31658)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__31646,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31657.cljs$core$IFn$_invoke$arity$2 ? pred__31657.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"packer","packer",66077544),expr__31658) : pred__31657.call(null, new cljs.core.Keyword(null,"packer","packer",66077544),expr__31658)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,G__31646,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31657.cljs$core$IFn$_invoke$arity$2 ? pred__31657.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046),expr__31658) : pred__31657.call(null, new cljs.core.Keyword(null,"url","url",276297046),expr__31658)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,G__31646,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31657.cljs$core$IFn$_invoke$arity$2 ? pred__31657.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102),expr__31658) : pred__31657.call(null, new cljs.core.Keyword(null,"state_","state_",957667102),expr__31658)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,G__31646,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31657.cljs$core$IFn$_invoke$arity$2 ? pred__31657.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),expr__31658) : pred__31657.call(null, new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),expr__31658)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,G__31646,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31657.cljs$core$IFn$_invoke$arity$2 ? pred__31657.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__31658) : pred__31657.call(null, new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__31658)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,G__31646,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31657.cljs$core$IFn$_invoke$arity$2 ? pred__31657.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__31658) : pred__31657.call(null, new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__31658)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,G__31646,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31657.cljs$core$IFn$_invoke$arity$2 ? pred__31657.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__31658) : pred__31657.call(null, new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__31658)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,G__31646,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31657.cljs$core$IFn$_invoke$arity$2 ? pred__31657.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968),expr__31658) : pred__31657.call(null, new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968),expr__31658)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,G__31646,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31657.cljs$core$IFn$_invoke$arity$2 ? pred__31657.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643),expr__31658) : pred__31657.call(null, new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643),expr__31658)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,G__31646,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31657.cljs$core$IFn$_invoke$arity$2 ? pred__31657.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__31658) : pred__31657.call(null, new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__31658)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,G__31646,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31657.cljs$core$IFn$_invoke$arity$2 ? pred__31657.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__31658) : pred__31657.call(null, new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__31658)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,G__31646,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31657.cljs$core$IFn$_invoke$arity$2 ? pred__31657.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__31658) : pred__31657.call(null, new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__31658)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,G__31646,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31657.cljs$core$IFn$_invoke$arity$2 ? pred__31657.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__31658) : pred__31657.call(null, new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__31658)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__31646,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31657.cljs$core$IFn$_invoke$arity$2 ? pred__31657.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-constructor","ws-constructor",1384015617),expr__31658) : pred__31657.call(null, new cljs.core.Keyword(null,"ws-constructor","ws-constructor",1384015617),expr__31658)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__31646,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__31646),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"url","url",276297046),self__.url,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),self__.conn_id_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968),self__.ws_ping_timeout_ms,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643),self__.ws_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ws-constructor","ws-constructor",1384015617),self__.ws_constructor,null))], null),self__.__extmap));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__31646){
var self__ = this;
var this__5299__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,G__31646,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_(self__.conn_id_,null);

var closed_QMARK_ = taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__31642_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__31642_SHARP_,reason);
}));
var temp__5804__auto___32209 = cljs.core.deref(self__.socket_);
if(cljs.core.truth_(temp__5804__auto___32209)){
var vec__31660_32210 = temp__5804__auto___32209;
var s_32211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31660_32210,(0),null);
var _sid_32212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31660_32210,(1),null);
s_32211.close((1000),"CLOSE_NORMAL");
} else {
}

return closed_QMARK_;
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null, reason);

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null, );
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_break_connection_BANG_$arity$2 = (function (chsk,opts){
var self__ = this;
var chsk__$1 = this;
var map__31663 = opts;
var map__31663__$1 = cljs.core.__destructure_map(map__31663);
var close_ws_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31663__$1,new cljs.core.Keyword(null,"close-ws?","close-ws?",-1488665553));
var ws_code = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31663__$1,new cljs.core.Keyword(null,"ws-code","ws-code",1136081606),(3000));
var temp__5804__auto___32213 = ((cljs.core.not(close_ws_QMARK_))?taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2(self__.socket_,null):cljs.core.deref(self__.socket_));
if(cljs.core.truth_(temp__5804__auto___32213)){
var vec__31664_32214 = temp__5804__auto___32213;
var s_32215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31664_32214,(0),null);
var _sid_32216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31664_32214,(1),null);
s_32215.close(ws_code,"CLOSE_ABNORMAL");
} else {
}

return null;
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__31667 = opts;
var map__31667__$1 = cljs.core.__destructure_map(map__31667);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31667__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31667__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31667__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6)):null);
var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(self__.packer,ev,_QMARK_cb_uuid);
var temp__5804__auto___32217 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5804__auto___32217)){
var cb_uuid_32218 = temp__5804__auto___32217;
taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_32218], null),(((!((_QMARK_cb_fn == null))))?_QMARK_cb_fn:taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1433,47,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.Keyword("taoensso.truss.impl","some?","taoensso.truss.impl/some?",1536228403),new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),new cljs.core.Symbol(null,"?cb-fn","?cb-fn",-1734331361,null),_QMARK_cb_fn,null,null)));

var temp__5804__auto___32219__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__5804__auto___32219__$1)){
var timeout_ms_32220 = temp__5804__auto___32219__$1;
var c__21734__auto___32221 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21735__auto__ = (function (){var switch__21664__auto__ = (function (state_31678){
var state_val_31679 = (state_31678[(1)]);
if((state_val_31679 === (1))){
var inst_31668 = cljs.core.async.timeout(timeout_ms_32220);
var state_31678__$1 = state_31678;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31678__$1,(2),inst_31668);
} else {
if((state_val_31679 === (2))){
var inst_31671 = (state_31678[(7)]);
var inst_31670 = (state_31678[(2)]);
var inst_31671__$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,_QMARK_cb_uuid);
var state_31678__$1 = (function (){var statearr_31680 = state_31678;
(statearr_31680[(8)] = inst_31670);

(statearr_31680[(7)] = inst_31671__$1);

return statearr_31680;
})();
if(cljs.core.truth_(inst_31671__$1)){
var statearr_31681_32222 = state_31678__$1;
(statearr_31681_32222[(1)] = (3));

} else {
var statearr_31682_32223 = state_31678__$1;
(statearr_31682_32223[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (3))){
var inst_31671 = (state_31678[(7)]);
var inst_31673 = (inst_31671.cljs$core$IFn$_invoke$arity$1 ? inst_31671.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)) : inst_31671.call(null, new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)));
var state_31678__$1 = state_31678;
var statearr_31683_32224 = state_31678__$1;
(statearr_31683_32224[(2)] = inst_31673);

(statearr_31683_32224[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (4))){
var state_31678__$1 = state_31678;
var statearr_31684_32225 = state_31678__$1;
(statearr_31684_32225[(2)] = null);

(statearr_31684_32225[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (5))){
var inst_31676 = (state_31678[(2)]);
var state_31678__$1 = state_31678;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31678__$1,inst_31676);
} else {
return null;
}
}
}
}
}
});
return (function() {
var taoensso$sente$state_machine__21665__auto__ = null;
var taoensso$sente$state_machine__21665__auto____0 = (function (){
var statearr_31685 = [null,null,null,null,null,null,null,null,null];
(statearr_31685[(0)] = taoensso$sente$state_machine__21665__auto__);

(statearr_31685[(1)] = (1));

return statearr_31685;
});
var taoensso$sente$state_machine__21665__auto____1 = (function (state_31678){
while(true){
var ret_value__21666__auto__ = (function (){try{while(true){
var result__21667__auto__ = switch__21664__auto__(state_31678);
if(cljs.core.keyword_identical_QMARK_(result__21667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21667__auto__;
}
break;
}
}catch (e31686){var ex__21668__auto__ = e31686;
var statearr_31687_32226 = state_31678;
(statearr_31687_32226[(2)] = ex__21668__auto__);


if(cljs.core.seq((state_31678[(4)]))){
var statearr_31688_32227 = state_31678;
(statearr_31688_32227[(1)] = cljs.core.first((state_31678[(4)])));

} else {
throw ex__21668__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32228 = state_31678;
state_31678 = G__32228;
continue;
} else {
return ret_value__21666__auto__;
}
break;
}
});
taoensso$sente$state_machine__21665__auto__ = function(state_31678){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__21665__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__21665__auto____1.call(this,state_31678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__21665__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__21665__auto____0;
taoensso$sente$state_machine__21665__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__21665__auto____1;
return taoensso$sente$state_machine__21665__auto__;
})()
})();
var state__21736__auto__ = (function (){var statearr_31689 = f__21735__auto__();
(statearr_31689[(6)] = c__21734__auto___32221);

return statearr_31689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21736__auto__);
}));

} else {
}
} else {
}

var or__5002__auto__ = (function (){var temp__5804__auto__ = cljs.core.deref(self__.socket_);
if(cljs.core.truth_(temp__5804__auto__)){
var vec__31690 = temp__5804__auto__;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31690,(0),null);
var _sid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31690,(1),null);
try{s.send(ppstr);

cljs.core.reset_BANG_(self__.udt_last_comms_,taoensso.encore.now_udt());

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e31693){var t = e31693;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1449,19,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,"Client chsk send error"], null);
}),null)),null,(90),null,null,null);

return null;
}} else {
return null;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var temp__5804__auto___32229 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5804__auto___32229)){
var cb_uuid_32230 = temp__5804__auto___32229;
var cb_fn_STAR__32231 = (function (){var or__5002__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid_32230);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
if((!((_QMARK_cb_fn == null)))){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1455,34,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.Keyword("taoensso.truss.impl","some?","taoensso.truss.impl/some?",1536228403),new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),new cljs.core.Symbol(null,"?cb-fn","?cb-fn",-1734331361,null),_QMARK_cb_fn,null,null);
}
}
})();
(cb_fn_STAR__32231.cljs$core$IFn$_invoke$arity$1 ? cb_fn_STAR__32231.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","error","chsk/error",-984175439)) : cb_fn_STAR__32231.call(null, new cljs.core.Keyword("chsk","error","chsk/error",-984175439)));
} else {
}

chsk__$1.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$2(null, new cljs.core.Keyword(null,"ws-error","ws-error",263286885));

return false;
}
}
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var this_conn_id = cljs.core.reset_BANG_(self__.conn_id_,taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0());
var own_conn_QMARK_ = (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.conn_id_),this_conn_id);
});
var connect_fn = (function taoensso$sente$connect_fn(){
if(own_conn_QMARK_()){
var this_socket_id = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var own_socket_QMARK_ = (function (){
var temp__5804__auto__ = cljs.core.deref(self__.socket_);
if(cljs.core.truth_(temp__5804__auto__)){
var vec__31694 = temp__5804__auto__;
var _s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31694,(0),null);
var sid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31694,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sid,this_socket_id);
} else {
return null;
}
});
var retry_fn = (function (){
if(((own_conn_QMARK_()) && (cljs.core.not(cljs.core.deref(taoensso.sente.client_unloading_QMARK__))))){
return taoensso.sente.retry_connect_chsk_BANG_(chsk__$1,self__.backoff_ms_fn,taoensso$sente$connect_fn,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.retry_count_,cljs.core.inc));
} else {
return null;
}
});
var on_error = (function (ws_ev){
if(cljs.core.truth_(own_socket_QMARK_())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1487,28,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(ws_ev);
}catch (e31697){var _ = e31697;
return ws_ev;
}})()], null);
}),null)),null,(91),null,null,null);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__31643_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31643_SHARP_,new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev], null));
}));
} else {
return null;
}
});
var on_message = (function (ws_ev){
var ppstr = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"data");
var vec__31698 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31698,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31698,(1),null);
cljs.core.reset_BANG_(self__.udt_last_comms_,taoensso.encore.now_udt());

var or__5002__auto__ = (cljs.core.truth_((function (){var and__5000__auto__ = own_socket_QMARK_();
if(cljs.core.truth_(and__5000__auto__)){
return taoensso.sente.handshake_QMARK_(clj);
} else {
return and__5000__auto__;
}
})())?(function (){
taoensso.sente.receive_handshake_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443),chsk__$1,clj);

cljs.core.reset_BANG_(self__.retry_count_,(0));

return new cljs.core.Keyword("done","did-handshake","done/did-handshake",-204235862);
})()
:null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)))?(function (){
chsk__$1.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(null, new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-pong","chsk/ws-pong",-86402347)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flush?","flush?",-108887231),true], null));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(self__.chs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));

return new cljs.core.Keyword("done","sent-pong","done/sent-pong",-723256459);
})()
:null);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var temp__5802__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5802__auto__)){
var cb_uuid = temp__5802__auto__;
var temp__5802__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__5802__auto____$1)){
var cb_fn = temp__5802__auto____$1;
return (cb_fn.cljs$core$IFn$_invoke$arity$1 ? cb_fn.cljs$core$IFn$_invoke$arity$1(clj) : cb_fn.call(null, clj));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1534,31,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client :ws cb reply w/o local cb-fn: %s",clj], null);
}),null)),null,(92),null,null,null);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
});
var on_close = (function (ws_ev){
if(cljs.core.truth_(own_socket_QMARK_())){
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"code","code",1586293142),taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"code"),new cljs.core.Keyword(null,"reason","reason",-2070751759),taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"reason"),new cljs.core.Keyword(null,"clean?","clean?",-1675631009),cljs.core.boolean$(taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"wasClean")),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev], null);
var reason_STAR_ = (cljs.core.truth_(new cljs.core.Keyword(null,"clean?","clean?",-1675631009).cljs$core$IFn$_invoke$arity$1(last_ws_close))?new cljs.core.Keyword(null,"clean","clean",41534079):new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__31645_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(taoensso.sente.chsk_state__GT_closed(p1__31645_SHARP_,reason_STAR_),new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
}));

return retry_fn();
} else {
return null;
}
});
var _QMARK_new_socket_ = (function (){try{var G__31702 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ws_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error,new cljs.core.Keyword(null,"on-message","on-message",1662987808),on_message,new cljs.core.Keyword(null,"on-close","on-close",-761178394),on_close,new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers,new cljs.core.Keyword(null,"uri-str","uri-str",304128675),taoensso.encore.merge_url_with_query_string(self__.url,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),taoensso.sente.get_client_csrf_token_str(new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))], null)], 0)))], null)], 0));
return (self__.ws_constructor.cljs$core$IFn$_invoke$arity$1 ? self__.ws_constructor.cljs$core$IFn$_invoke$arity$1(G__31702) : self__.ws_constructor.call(null, G__31702));
}catch (e31701){var t = e31701;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1581,25,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,"Error creating WebSocket client"], null);
}),null)),null,(93),null,null,null);

return null;
}})();
var temp__5804__auto__ = _QMARK_new_socket_;
if(cljs.core.truth_(temp__5804__auto__)){
var new_socket_ = temp__5804__auto__;
var temp__5802__auto__ = (function (){try{return cljs.core.force(new_socket_);
}catch (e31703){var t = e31703;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1589,32,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,"Error realizing WebSocket client"], null);
}),null)),null,(94),null,null,null);

return null;
}})();
if(cljs.core.truth_(temp__5802__auto__)){
var new_socket = temp__5802__auto__;
var temp__5804__auto___32232__$1 = taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2(self__.socket_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_socket,this_socket_id], null));
if(cljs.core.truth_(temp__5804__auto___32232__$1)){
var vec__31704_32233 = temp__5804__auto___32232__$1;
var old_s_32234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31704_32233,(0),null);
var _old_sid_32235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31704_32233,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1594,25,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Old client WebSocket will be closed"], null);
}),null)),null,(95),null,null,null);

old_s_32234.close((1000),"CLOSE_NORMAL");
} else {
}

return new_socket;
} else {
return retry_fn();
}
} else {
return null;
}
} else {
return null;
}
});
cljs.core.reset_BANG_(self__.retry_count_,(0));

if(cljs.core.truth_(connect_fn())){
var temp__5804__auto___32236 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__5804__auto___32236)){
var ms_32237 = temp__5804__auto___32236;
var c__21734__auto___32238 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21735__auto__ = (function (){var switch__21664__auto__ = (function (state_31738){
var state_val_31739 = (state_31738[(1)]);
if((state_val_31739 === (7))){
var inst_31734 = (state_31738[(2)]);
var state_31738__$1 = state_31738;
var statearr_31740_32239 = state_31738__$1;
(statearr_31740_32239[(2)] = inst_31734);

(statearr_31740_32239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31739 === (1))){
var state_31738__$1 = state_31738;
var statearr_31741_32240 = state_31738__$1;
(statearr_31741_32240[(2)] = null);

(statearr_31741_32240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31739 === (4))){
var inst_31711 = (state_31738[(2)]);
var inst_31712 = own_conn_QMARK_();
var state_31738__$1 = (function (){var statearr_31742 = state_31738;
(statearr_31742[(7)] = inst_31711);

return statearr_31742;
})();
if(inst_31712){
var statearr_31743_32241 = state_31738__$1;
(statearr_31743_32241[(1)] = (5));

} else {
var statearr_31744_32242 = state_31738__$1;
(statearr_31744_32242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31739 === (6))){
var state_31738__$1 = state_31738;
var statearr_31745_32243 = state_31738__$1;
(statearr_31745_32243[(2)] = null);

(statearr_31745_32243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31739 === (3))){
var inst_31736 = (state_31738[(2)]);
var state_31738__$1 = state_31738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31738__$1,inst_31736);
} else {
if((state_val_31739 === (2))){
var inst_31708 = cljs.core.deref(self__.udt_last_comms_);
var inst_31709 = cljs.core.async.timeout(ms_32237);
var state_31738__$1 = (function (){var statearr_31746 = state_31738;
(statearr_31746[(8)] = inst_31708);

return statearr_31746;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31738__$1,(4),inst_31709);
} else {
if((state_val_31739 === (9))){
var state_31738__$1 = state_31738;
var statearr_31747_32244 = state_31738__$1;
(statearr_31747_32244[(2)] = null);

(statearr_31747_32244[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31739 === (5))){
var inst_31714 = (state_31738[(9)]);
var inst_31708 = (state_31738[(8)]);
var inst_31715 = (state_31738[(10)]);
var inst_31714__$1 = cljs.core.deref(self__.udt_last_comms_);
var inst_31715__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31708,inst_31714__$1);
var state_31738__$1 = (function (){var statearr_31748 = state_31738;
(statearr_31748[(9)] = inst_31714__$1);

(statearr_31748[(10)] = inst_31715__$1);

return statearr_31748;
})();
if(inst_31715__$1){
var statearr_31749_32245 = state_31738__$1;
(statearr_31749_32245[(1)] = (8));

} else {
var statearr_31750_32246 = state_31738__$1;
(statearr_31750_32246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31739 === (10))){
var inst_31730 = (state_31738[(2)]);
var state_31738__$1 = (function (){var statearr_31751 = state_31738;
(statearr_31751[(11)] = inst_31730);

return statearr_31751;
})();
var statearr_31752_32247 = state_31738__$1;
(statearr_31752_32247[(2)] = null);

(statearr_31752_32247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31739 === (8))){
var inst_31714 = (state_31738[(9)]);
var inst_31708 = (state_31738[(8)]);
var inst_31715 = (state_31738[(10)]);
var inst_31717 = (function (){var udt_t0 = inst_31708;
var udt_t1 = inst_31714;
var temp__5804__auto____$1 = inst_31715;
var no_activity_QMARK_ = inst_31715;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client will send ws-ping to server: %s",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms-since-last-activity","ms-since-last-activity",-1991165547),(taoensso.encore.now_udt() - udt_t1),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.ws_ping_timeout_ms], null)], null);
});
})();
var inst_31718 = (new cljs.core.Delay(inst_31717,null));
var inst_31719 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1614,21,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_31718,null,(96),null,null,null);
var inst_31720 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31721 = [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)];
var inst_31722 = (new cljs.core.PersistentVector(null,1,(5),inst_31720,inst_31721,null));
var inst_31723 = [new cljs.core.Keyword(null,"flush?","flush?",-108887231),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"cb","cb",589947841)];
var inst_31724 = (function (){var udt_t0 = inst_31708;
var udt_t1 = inst_31714;
var temp__5804__auto____$1 = inst_31715;
var no_activity_QMARK_ = inst_31715;
return (function (reply){
if(((own_conn_QMARK_()) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(reply,"pong")))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1624,28,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client ws-ping to server timed-out, will cycle WebSocket now"], null);
}),null)),null,(97),null,null,null);

return chsk__$1.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$2(null, new cljs.core.Keyword(null,"ws-ping-timeout","ws-ping-timeout",788047274));
} else {
return null;
}
});
})();
var inst_31725 = [true,self__.ws_ping_timeout_ms,inst_31724];
var inst_31726 = cljs.core.PersistentHashMap.fromArrays(inst_31723,inst_31725);
var inst_31727 = chsk__$1.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(null, inst_31722,inst_31726);
var state_31738__$1 = (function (){var statearr_31753 = state_31738;
(statearr_31753[(12)] = inst_31719);

return statearr_31753;
})();
var statearr_31754_32248 = state_31738__$1;
(statearr_31754_32248[(2)] = inst_31727);

(statearr_31754_32248[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$state_machine__21665__auto__ = null;
var taoensso$sente$state_machine__21665__auto____0 = (function (){
var statearr_31755 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31755[(0)] = taoensso$sente$state_machine__21665__auto__);

(statearr_31755[(1)] = (1));

return statearr_31755;
});
var taoensso$sente$state_machine__21665__auto____1 = (function (state_31738){
while(true){
var ret_value__21666__auto__ = (function (){try{while(true){
var result__21667__auto__ = switch__21664__auto__(state_31738);
if(cljs.core.keyword_identical_QMARK_(result__21667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21667__auto__;
}
break;
}
}catch (e31756){var ex__21668__auto__ = e31756;
var statearr_31757_32249 = state_31738;
(statearr_31757_32249[(2)] = ex__21668__auto__);


if(cljs.core.seq((state_31738[(4)]))){
var statearr_31758_32250 = state_31738;
(statearr_31758_32250[(1)] = cljs.core.first((state_31738[(4)])));

} else {
throw ex__21668__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32251 = state_31738;
state_31738 = G__32251;
continue;
} else {
return ret_value__21666__auto__;
}
break;
}
});
taoensso$sente$state_machine__21665__auto__ = function(state_31738){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__21665__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__21665__auto____1.call(this,state_31738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__21665__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__21665__auto____0;
taoensso$sente$state_machine__21665__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__21665__auto____1;
return taoensso$sente$state_machine__21665__auto__;
})()
})();
var state__21736__auto__ = (function (){var statearr_31759 = f__21735__auto__();
(statearr_31759[(6)] = c__21734__auto___32238);

return statearr_31759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21736__auto__);
}));

} else {
}

return chsk__$1;
} else {
return null;
}
}));

(taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"headers","headers",805501398,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"conn-id_","conn-id_",-599629337,null),new cljs.core.Symbol(null,"retry-count_","retry-count_",1660769620,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"ws-kalive-ms","ws-kalive-ms",-1212255801,null),new cljs.core.Symbol(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",-1983111801,null),new cljs.core.Symbol(null,"ws-opts","ws-opts",-1166634126,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"udt-last-comms_","udt-last-comms_",1494731888,null),new cljs.core.Symbol(null,"ws-constructor","ws-constructor",-1270420152,null)], null);
}));

(taoensso.sente.ChWebSocket.cljs$lang$type = true);

(taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChWebSocket",null,(1),null));
}));

(taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"taoensso.sente/ChWebSocket");
}));

/**
 * Positional factory function for taoensso.sente/ChWebSocket.
 */
taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,headers,packer,url,state_,conn_id_,retry_count_,ever_opened_QMARK__,ws_kalive_ms,ws_ping_timeout_ms,ws_opts,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,ws_constructor){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,headers,packer,url,state_,conn_id_,retry_count_,ever_opened_QMARK__,ws_kalive_ms,ws_ping_timeout_ms,ws_opts,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,ws_constructor,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChWebSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__31650){
var extmap__5342__auto__ = (function (){var G__31760 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__31650,new cljs.core.Keyword(null,"client-id","client-id",-464622140),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968),new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),new cljs.core.Keyword(null,"ws-constructor","ws-constructor",1384015617)], 0));
if(cljs.core.record_QMARK_(G__31650)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__31760);
} else {
return G__31760;
}
})();
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__31650),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__31650),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__31650),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(G__31650),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__31650),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__31650),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__31650),new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432).cljs$core$IFn$_invoke$arity$1(G__31650),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__31650),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__31650),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968).cljs$core$IFn$_invoke$arity$1(G__31650),new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968).cljs$core$IFn$_invoke$arity$1(G__31650),new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643).cljs$core$IFn$_invoke$arity$1(G__31650),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__31650),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__31650),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__31650),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639).cljs$core$IFn$_invoke$arity$1(G__31650),new cljs.core.Keyword(null,"ws-constructor","ws-constructor",1384015617).cljs$core$IFn$_invoke$arity$1(G__31650),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

taoensso.sente.new_ChWebSocket = (function taoensso$sente$new_ChWebSocket(opts,csrf_token){
return taoensso.sente.map__GT_ChWebSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null)),new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"socket_","socket_",-361048908),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});
/**
 * We must set *some* client-side timeout otherwise an unpredictable (and
 *   probably too short) browser default will be used. Must be > server's
 *   :lp-timeout-ms.
 */
taoensso.sente.default_client_side_ajax_timeout_ms = taoensso.encore.ms.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"secs","secs",1532330091),(60));

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
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,chs,params,packer,url,state_,conn_id_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.conn_id_ = conn_id_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k31767,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__31771 = k31767;
var G__31771__$1 = (((G__31771 instanceof cljs.core.Keyword))?G__31771.fqn:null);
switch (G__31771__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "state_":
return self__.state_;

break;
case "conn-id_":
return self__.conn_id_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "curr-xhr_":
return self__.curr_xhr_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k31767,else__5303__auto__);

}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__31772){
var vec__31773 = p__31772;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31773,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31773,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),self__.conn_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31766){
var self__ = this;
var G__31766__$1 = this;
return (new cljs.core.RecordIter((0),G__31766__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (11 + cljs.core.count(self__.__extmap));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-266770752 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31768,other31769){
var self__ = this;
var this31768__$1 = this;
return (((!((other31769 == null)))) && ((((this31768__$1.constructor === other31769.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31768__$1.client_id,other31769.client_id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31768__$1.chs,other31769.chs)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31768__$1.params,other31769.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31768__$1.packer,other31769.packer)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31768__$1.url,other31769.url)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31768__$1.state_,other31769.state_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31768__$1.conn_id_,other31769.conn_id_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31768__$1.ever_opened_QMARK__,other31769.ever_opened_QMARK__)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31768__$1.backoff_ms_fn,other31769.backoff_ms_fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31768__$1.ajax_opts,other31769.ajax_opts)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31768__$1.curr_xhr_,other31769.curr_xhr_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31768__$1.__extmap,other31769.__extmap)))))))))))))))))))))))))));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k31767){
var self__ = this;
var this__5307__auto____$1 = this;
var G__31776 = k31767;
var G__31776__$1 = (((G__31776 instanceof cljs.core.Keyword))?G__31776.fqn:null);
switch (G__31776__$1) {
case "client-id":
case "chs":
case "params":
case "packer":
case "url":
case "state_":
case "conn-id_":
case "ever-opened?_":
case "backoff-ms-fn":
case "ajax-opts":
case "curr-xhr_":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k31767);

}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__31766){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__31777 = cljs.core.keyword_identical_QMARK_;
var expr__31778 = k__5309__auto__;
if(cljs.core.truth_((pred__31777.cljs$core$IFn$_invoke$arity$2 ? pred__31777.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__31778) : pred__31777.call(null, new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__31778)))){
return (new taoensso.sente.ChAjaxSocket(G__31766,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31777.cljs$core$IFn$_invoke$arity$2 ? pred__31777.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"chs","chs",376886120),expr__31778) : pred__31777.call(null, new cljs.core.Keyword(null,"chs","chs",376886120),expr__31778)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__31766,self__.params,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31777.cljs$core$IFn$_invoke$arity$2 ? pred__31777.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__31778) : pred__31777.call(null, new cljs.core.Keyword(null,"params","params",710516235),expr__31778)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__31766,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31777.cljs$core$IFn$_invoke$arity$2 ? pred__31777.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"packer","packer",66077544),expr__31778) : pred__31777.call(null, new cljs.core.Keyword(null,"packer","packer",66077544),expr__31778)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__31766,self__.url,self__.state_,self__.conn_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31777.cljs$core$IFn$_invoke$arity$2 ? pred__31777.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046),expr__31778) : pred__31777.call(null, new cljs.core.Keyword(null,"url","url",276297046),expr__31778)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__31766,self__.state_,self__.conn_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31777.cljs$core$IFn$_invoke$arity$2 ? pred__31777.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102),expr__31778) : pred__31777.call(null, new cljs.core.Keyword(null,"state_","state_",957667102),expr__31778)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__31766,self__.conn_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31777.cljs$core$IFn$_invoke$arity$2 ? pred__31777.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),expr__31778) : pred__31777.call(null, new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),expr__31778)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__31766,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31777.cljs$core$IFn$_invoke$arity$2 ? pred__31777.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__31778) : pred__31777.call(null, new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__31778)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.conn_id_,G__31766,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31777.cljs$core$IFn$_invoke$arity$2 ? pred__31777.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__31778) : pred__31777.call(null, new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__31778)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.ever_opened_QMARK__,G__31766,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31777.cljs$core$IFn$_invoke$arity$2 ? pred__31777.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__31778) : pred__31777.call(null, new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__31778)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__31766,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31777.cljs$core$IFn$_invoke$arity$2 ? pred__31777.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__31778) : pred__31777.call(null, new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__31778)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__31766,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__31766),null));
}
}
}
}
}
}
}
}
}
}
}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"url","url",276297046),self__.url,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),self__.conn_id_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_,null))], null),self__.__extmap));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__31766){
var self__ = this;
var this__5299__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__31766,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_(self__.conn_id_,null);

var closed_QMARK_ = taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__31761_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__31761_SHARP_,reason);
}));
var temp__5804__auto___32254 = cljs.core.deref(self__.curr_xhr_);
if(cljs.core.truth_(temp__5804__auto___32254)){
var x_32255 = temp__5804__auto___32254;
x_32255.abort();
} else {
}

return closed_QMARK_;
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null, reason);

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null, );
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_break_connection_BANG_$arity$2 = (function (chsk,_opts){
var self__ = this;
var chsk__$1 = this;
var temp__5804__auto___32256 = cljs.core.deref(self__.curr_xhr_);
if(cljs.core.truth_(temp__5804__auto___32256)){
var x_32257 = temp__5804__auto___32256;
x_32257.abort();
} else {
}

return null;
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__31780 = opts;
var map__31780__$1 = cljs.core.__destructure_map(map__31780);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31780__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31780__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31780__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var csrf_token_str = taoensso.sente.get_client_csrf_token_str(new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)));
var G__31781_32258 = self__.url;
var G__31782_32259 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__5002__auto__ = _QMARK_timeout_ms;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token_str], null)], 0)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(self__.packer,ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token_str,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null)], 0));
})()], null)], 0));
var G__31783_32260 = (function taoensso$sente$ajax_cb(p__31784){
var map__31785 = p__31784;
var map__31785__$1 = cljs.core.__destructure_map(map__31785);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31785__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31785__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)) : _QMARK_cb_fn.call(null, new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__31762_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__31762_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}));

if(cljs.core.truth_(_QMARK_cb_fn)){
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","error","chsk/error",-984175439)) : _QMARK_cb_fn.call(null, new cljs.core.Keyword("chsk","error","chsk/error",-984175439)));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__31786 = taoensso.sente.unpack(self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31786,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31786,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(resp_clj) : _QMARK_cb_fn.call(null, resp_clj));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1722,26,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client :ajax cb reply w/o local cb-fn: %s",resp_clj], null);
}),null)),null,(98),null,null,null);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__31763_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31763_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
}));
}
});
(taoensso.sente.ajax_call.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_call.cljs$core$IFn$_invoke$arity$3(G__31781_32258,G__31782_32259,G__31783_32260) : taoensso.sente.ajax_call.call(null, G__31781_32258,G__31782_32259,G__31783_32260));

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var this_conn_id = cljs.core.reset_BANG_(self__.conn_id_,taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0());
var own_conn_QMARK_ = (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.conn_id_),this_conn_id);
});
var poll_fn = (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1733,16,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client :ajax async-poll-for-update!"], null);
}),null)),null,(99),null,null,null);

if(own_conn_QMARK_()){
var retry_fn = (function (){
if(((own_conn_QMARK_()) && (cljs.core.not(cljs.core.deref(taoensso.sente.client_unloading_QMARK__))))){
var retry_count_STAR_ = (retry_count + (1));
return taoensso.sente.retry_connect_chsk_BANG_(chsk__$1,self__.backoff_ms_fn,(function taoensso$sente$poll_fn_$_connect_fn(){
return taoensso$sente$poll_fn(retry_count_STAR_);
}),retry_count_STAR_);
} else {
return null;
}
});
return cljs.core.reset_BANG_(self__.curr_xhr_,(function (){var G__31789 = self__.url;
var G__31790 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"xhr-cb-fn","xhr-cb-fn",1569050954),(function (xhr){
return cljs.core.reset_BANG_(self__.curr_xhr_,xhr);
}),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null))], 0)),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),taoensso.sente.get_client_csrf_token_str(new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))], null)], 0))], null)], 0));
var G__31791 = (function taoensso$sente$poll_fn_$_ajax_cb(p__31792){
var map__31793 = p__31792;
var map__31793__$1 = cljs.core.__destructure_map(map__31793);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31793__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31793__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn((0));
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__31764_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__31764_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}));

return retry_fn();

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__31794 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31794,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_(clj);
if(handshake_QMARK_){
taoensso.sente.receive_handshake_BANG_(new cljs.core.Keyword(null,"ajax","ajax",814345549),chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__31765_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31765_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
}));

taoensso$sente$poll_fn((0));

if(handshake_QMARK_){
return null;
} else {
var or__5002__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)))?new cljs.core.Keyword(null,"noop","noop",-673731258):null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
});
return (taoensso.sente.ajax_call.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_call.cljs$core$IFn$_invoke$arity$3(G__31789,G__31790,G__31791) : taoensso.sente.ajax_call.call(null, G__31789,G__31790,G__31791));
})());
} else {
return null;
}
});
poll_fn((0));

return chsk__$1;
}));

(taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"conn-id_","conn-id_",-599629337,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null)], null);
}));

(taoensso.sente.ChAjaxSocket.cljs$lang$type = true);

(taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChAjaxSocket",null,(1),null));
}));

(taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"taoensso.sente/ChAjaxSocket");
}));

/**
 * Positional factory function for taoensso.sente/ChAjaxSocket.
 */
taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,conn_id_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,conn_id_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChAjaxSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__31770){
var extmap__5342__auto__ = (function (){var G__31797 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__31770,new cljs.core.Keyword(null,"client-id","client-id",-464622140),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], 0));
if(cljs.core.record_QMARK_(G__31770)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__31797);
} else {
return G__31797;
}
})();
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__31770),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__31770),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__31770),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__31770),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__31770),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__31770),new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432).cljs$core$IFn$_invoke$arity$1(G__31770),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__31770),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__31770),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__31770),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__31770),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

taoensso.sente.new_ChAjaxSocket = (function taoensso$sente$new_ChAjaxSocket(opts,csrf_token){
return taoensso.sente.map__GT_ChAjaxSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null)),new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
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
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAutoSocket = (function (ws_chsk_opts,ajax_chsk_opts,state_,impl_,__meta,__extmap,__hash){
this.ws_chsk_opts = ws_chsk_opts;
this.ajax_chsk_opts = ajax_chsk_opts;
this.state_ = state_;
this.impl_ = impl_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k31799,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__31803 = k31799;
var G__31803__$1 = (((G__31803 instanceof cljs.core.Keyword))?G__31803.fqn:null);
switch (G__31803__$1) {
case "ws-chsk-opts":
return self__.ws_chsk_opts;

break;
case "ajax-chsk-opts":
return self__.ajax_chsk_opts;

break;
case "state_":
return self__.state_;

break;
case "impl_":
return self__.impl_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k31799,else__5303__auto__);

}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__31804){
var vec__31805 = p__31804;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31805,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31805,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#taoensso.sente.ChAutoSocket{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31798){
var self__ = this;
var G__31798__$1 = this;
return (new cljs.core.RecordIter((0),G__31798__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1193508708 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31800,other31801){
var self__ = this;
var this31800__$1 = this;
return (((!((other31801 == null)))) && ((((this31800__$1.constructor === other31801.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31800__$1.ws_chsk_opts,other31801.ws_chsk_opts)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31800__$1.ajax_chsk_opts,other31801.ajax_chsk_opts)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31800__$1.state_,other31801.state_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31800__$1.impl_,other31801.impl_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31800__$1.__extmap,other31801.__extmap)))))))))))));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl_","impl_",1218818179),null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),null,new cljs.core.Keyword(null,"state_","state_",957667102),null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k31799){
var self__ = this;
var this__5307__auto____$1 = this;
var G__31808 = k31799;
var G__31808__$1 = (((G__31808 instanceof cljs.core.Keyword))?G__31808.fqn:null);
switch (G__31808__$1) {
case "ws-chsk-opts":
case "ajax-chsk-opts":
case "state_":
case "impl_":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k31799);

}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__31798){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__31809 = cljs.core.keyword_identical_QMARK_;
var expr__31810 = k__5309__auto__;
if(cljs.core.truth_((pred__31809.cljs$core$IFn$_invoke$arity$2 ? pred__31809.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__31810) : pred__31809.call(null, new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__31810)))){
return (new taoensso.sente.ChAutoSocket(G__31798,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31809.cljs$core$IFn$_invoke$arity$2 ? pred__31809.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__31810) : pred__31809.call(null, new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__31810)))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__31798,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31809.cljs$core$IFn$_invoke$arity$2 ? pred__31809.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102),expr__31810) : pred__31809.call(null, new cljs.core.Keyword(null,"state_","state_",957667102),expr__31810)))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__31798,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31809.cljs$core$IFn$_invoke$arity$2 ? pred__31809.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__31810) : pred__31809.call(null, new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__31810)))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__31798,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__31798),null));
}
}
}
}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_,null))], null),self__.__extmap));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__31798){
var self__ = this;
var this__5299__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__31798,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_break_connection_BANG_$arity$2 = (function (chsk,opts){
var self__ = this;
var chsk__$1 = this;
var temp__5804__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5804__auto__)){
var impl = temp__5804__auto__;
return taoensso.sente._chsk_break_connection_BANG_(impl,opts);
} else {
return null;
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
var temp__5804__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5804__auto__)){
var impl = temp__5804__auto__;
return taoensso.sente._chsk_disconnect_BANG_(impl,reason);
} else {
return null;
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null, reason);

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null, );
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var temp__5802__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5802__auto__)){
var impl = temp__5802__auto__;
return taoensso.sente._chsk_send_BANG_(impl,ev,opts);
} else {
var map__31812 = opts;
var map__31812__$1 = cljs.core.__destructure_map(map__31812);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31812__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var ajax_chsk_opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ajax_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ws_chsk_opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ws_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ajax_chsk_BANG_ = (function (){
var ajax_chsk = taoensso.sente.new_ChAjaxSocket(ajax_chsk_opts__$1,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)));
cljs.core.remove_watch(self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080));

return ajax_chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null, );
});
var ws_chsk_BANG_ = (function (){
var ws_chsk = taoensso.sente.new_ChWebSocket(ws_chsk_opts__$1,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)));
var downgraded_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
cljs.core.add_watch(self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080),(function (_,___$1,old_state,new_state){
var b2__22159__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state);
if(b2__22159__auto__){
var state_changed_QMARK_ = b2__22159__auto__;
var b2__22159__auto____$1 = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(b2__22159__auto____$1)){
var impl = b2__22159__auto____$1;
var b2__22159__auto____$2 = new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(impl);
if(cljs.core.truth_(b2__22159__auto____$2)){
var ever_opened_QMARK__ = b2__22159__auto____$2;
var b2__22159__auto____$3 = cljs.core.not(cljs.core.deref(ever_opened_QMARK__));
if(b2__22159__auto____$3){
var never_opened_QMARK_ = b2__22159__auto____$3;
var b2__22159__auto____$4 = new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502).cljs$core$IFn$_invoke$arity$1(new_state);
if(cljs.core.truth_(b2__22159__auto____$4)){
var ws_error = b2__22159__auto____$4;
if(cljs.core.compare_and_set_BANG_(downgraded_QMARK__,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1864,26,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client permanently downgrading chsk mode: :auto -> :ajax"], null);
}),null)),null,(100),null,null,null);

taoensso.sente._chsk_disconnect_BANG_(impl,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720));

return cljs.core.reset_BANG_(self__.impl_,ajax_chsk_BANG_());
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}));

return ws_chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null, );
});
cljs.core.reset_BANG_(self__.impl_,(function (){var or__5002__auto__ = ws_chsk_BANG_();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return ajax_chsk_BANG_();
}
})());

return chsk__$1;
}));

(taoensso.sente.ChAutoSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ws-chsk-opts","ws-chsk-opts",-349638577,null),new cljs.core.Symbol(null,"ajax-chsk-opts","ajax-chsk-opts",-1051844442,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"impl_","impl_",-1435617590,null)], null);
}));

(taoensso.sente.ChAutoSocket.cljs$lang$type = true);

(taoensso.sente.ChAutoSocket.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChAutoSocket",null,(1),null));
}));

(taoensso.sente.ChAutoSocket.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"taoensso.sente/ChAutoSocket");
}));

/**
 * Positional factory function for taoensso.sente/ChAutoSocket.
 */
taoensso.sente.__GT_ChAutoSocket = (function taoensso$sente$__GT_ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_){
return (new taoensso.sente.ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChAutoSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__31802){
var extmap__5342__auto__ = (function (){var G__31813 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__31802,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], 0));
if(cljs.core.record_QMARK_(G__31802)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__31813);
} else {
return G__31813;
}
})();
return (new taoensso.sente.ChAutoSocket(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104).cljs$core$IFn$_invoke$arity$1(G__31802),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327).cljs$core$IFn$_invoke$arity$1(G__31802),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__31802),new cljs.core.Keyword(null,"impl_","impl_",1218818179).cljs$core$IFn$_invoke$arity$1(G__31802),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts,csrf_token){
return taoensso.sente.map__GT_ChAutoSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null)),new cljs.core.Keyword(null,"impl_","impl_",1218818179),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__31814 = protocol;
var G__31814__$1 = (((G__31814 instanceof cljs.core.Keyword))?G__31814.fqn:null);
switch (G__31814__$1) {
case "http":
return "http:";

break;
case "https":
return "https:";

break;
default:
return protocol;

}
})();
var protocol__$2 = (function (){var e = (function (){try{if((function (x){
return cljs.core.contains_QMARK_(taoensso.truss.impl.ensure_set(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null)),x);
})(protocol__$1)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e31815){if((e31815 instanceof Error)){
var e = e31815;
return e;
} else {
throw e31815;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1883,21,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:","null","http:","null"], null), null)], null),null,new cljs.core.Symbol(null,"protocol","protocol",-2001965651,null),protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__31816 = type;
var G__31816__$1 = (((G__31816 instanceof cljs.core.Keyword))?G__31816.fqn:null);
switch (G__31816__$1) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__31817 = protocol__$2;
switch (G__31817) {
case "https:":
return "wss:";

break;
case "http:":
return "ws:";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31817)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31816__$1)].join('')));

}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$3),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([host,path], 0)))].join('');
});
/**
 * Returns nil on failure, or a map with keys:
 *     :ch-recv ; core.async channel to receive `event-msg`s (internal or from
 *              ; clients). May `put!` (inject) arbitrary `event`s to this channel.
 *     :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *     :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *     :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Required arguments:
 *     path              ; Channel socket server route/path (typically `/chsk`)
 *     ?csrf-token-or-fn ; CSRF string or (fn [])->string to match token expected by server.
 *                       ; nil => server not expecting any CSRF token.
 * 
 *   Common options:
 *     :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto).
 *     :protocol       ; Server protocol, e/o #{:http :https}.
 *     :host           ; Server host (defaults to current page's host).
 *     :port           ; Server port (defaults to current page's port).
 *     :params         ; Map of any params to incl. in chsk Ring requests (handy
 *                     ; for application-level auth, etc.).
 *     :headers        ; Map of additional headers to include in the initiating request
 *                     ; (currently only for Java clients).
 *     :packer         ; :edn (default), or an IPacker implementation.
 *     :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-call`, see
 *                     ; relevant docstring for more info.
 *     :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 *                     ; Default false for Sente >= v1.18, true otherwise.
 * 
 *     :ws-kalive-ms       ; Ping to keep a WebSocket conn alive if no activity
 *                         ; w/in given msecs. Should be different to server's :ws-kalive-ms.
 *     :ws-ping-timeout-ms ; When pinging to test WebSocket connections, msecs to
 *                         ; await reply before regarding the connection as broken
 * 
 *     :ws-constructor ; Advanced, (fn [{:keys [uri-str headers on-message on-error on-close]}]
 *                     ; => nil, or delay that can be dereffed to get a connected WebSocket.
 *                     ; See `default-client-ws-constructor` code for details.
 */
taoensso.sente.make_channel_socket_client_BANG_ = (function taoensso$sente$make_channel_socket_client_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___32266 = arguments.length;
var i__5727__auto___32267 = (0);
while(true){
if((i__5727__auto___32267 < len__5726__auto___32266)){
args__5732__auto__.push((arguments[i__5727__auto___32267]));

var G__32268 = (i__5727__auto___32267 + (1));
i__5727__auto___32267 = G__32268;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,_QMARK_csrf_token_or_fn,p__31821){
var vec__31822 = p__31821;
var map__31825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31822,(0),null);
var map__31825__$1 = cljs.core.__destructure_map(map__31825);
var opts = map__31825__$1;
var ajax_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31825__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_ping_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31825__$1,new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968),(5000));
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31825__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),(20000));
var ws_constructor = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31825__$1,new cljs.core.Keyword(null,"ws-constructor","ws-constructor",1384015617),taoensso.sente.default_client_ws_constructor);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31825__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
}
})());
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31825__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31825__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31825__$1,new cljs.core.Keyword(null,"params","params",710516235));
var ws_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31825__$1,new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31825__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31825__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31825__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31825__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31825__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer((2048)));
var backoff_ms_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31825__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31825__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),false);
var _deprecated_more_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31822,(1),null);
var e_32269 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_(taoensso.truss.impl.ensure_set(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),x);
})(type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e31826){if((e31826 instanceof Error)){
var e_32269 = e31826;
return e_32269;
} else {
throw e31826;

}
}})();
if((e_32269 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1946,6,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),"null",new cljs.core.Keyword(null,"ajax","ajax",814345549),"null",new cljs.core.Keyword(null,"auto","auto",-566279492),"null"], null), null)], null),null,new cljs.core.Symbol(null,"type","type",-1480165421,null),type,e_32269,null);
}

var e_32270 = (function (){try{if(cljs.core.truth_(taoensso.encore.nblank_str_QMARK_(client_id))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e31827){if((e31827 instanceof Error)){
var e_32270 = e31827;
return e_32270;
} else {
throw e31827;

}
}})();
if((e_32270 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1947,6,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.Symbol("enc","nblank-str?","enc/nblank-str?",19952870,null),new cljs.core.Symbol("taoensso.encore","nblank-str?","taoensso.encore/nblank-str?",-1104962258,null),new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),client_id,e_32270,null);
}

if((!((_deprecated_more_opts == null)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1949,47,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
}),null)),null,(101),null,null,null);
} else {
}

if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1950,47,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
}),null)),null,(102),null,null,null);
} else {
}

taoensso.sente.get_client_csrf_token_str(true,_QMARK_csrf_token_or_fn);

var packer__$1 = taoensso.sente.coerce_packer(packer);
var vec__31828 = (function (){var win_loc = taoensso.encore.get_win_loc();
var path__$1 = (function (){var z = (function (){try{var or__5002__auto__ = path;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_loc);
}
}catch (e31831){if((e31831 instanceof Error)){
var e = e31831;
return (new taoensso.truss.impl.WrappedError(e));
} else {
throw e31831;

}
}})();
var e = (((z instanceof taoensso.truss.impl.WrappedError))?z:(((!((z == null))))?null:taoensso.truss.impl._dummy_error));
if((e == null)){
return z;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1961,27,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.Keyword("taoensso.truss.impl","some?","taoensso.truss.impl/some?",1536228403),new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"path","path",1452340359,null),cljs.core.list(new cljs.core.Keyword(null,"pathname","pathname",-1420497528),new cljs.core.Symbol(null,"win-loc","win-loc",-1022715728,null))),z,e,null);
}
})();
var temp__5802__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5802__auto__)){
var f = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443)) : f.call(null, path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443))),(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549)) : f.call(null, path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549)))], null);
} else {
var protocol__$1 = (function (){var or__5002__auto__ = protocol;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_loc);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return new cljs.core.Keyword(null,"http","http",382524695);
}
}
})();
var host__$1 = (cljs.core.truth_(host)?(cljs.core.truth_(port)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join(''):host):(cljs.core.truth_(port)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hostname","hostname",2105669933).cljs$core$IFn$_invoke$arity$1(win_loc)),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join(''):new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_loc)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.sente.get_chsk_url(protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443)),taoensso.sente.get_chsk_url(protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
}
})();
var ws_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31828,(0),null);
var ajax_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31828,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((128))),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),(function (){var buf = cljs.core.async.sliding_buffer((512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
})));
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf);
}
})()], null);
var ws_ping_timeout_ms__$1 = ((cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968)):((cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"ws-kalive-ping-timeout-ms","ws-kalive-ping-timeout-ms",255808958)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"ws-kalive-ping-timeout-ms","ws-kalive-ping-timeout-ms",255808958)):ws_ping_timeout_ms
));
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"headers","headers",-835030129),headers,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),ws_kalive_ms,new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968),ws_ping_timeout_ms__$1,new cljs.core.Keyword(null,"ws-constructor","ws-constructor",1384015617),taoensso.sente.default_client_ws_constructor], null);
var ws_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ws_url,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn,new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643),ws_opts], null)], 0));
var ajax_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ajax_url,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),ajax_opts,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null)], 0));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),ws_chsk_opts,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_((function (){var G__31832 = type;
var G__31832__$1 = (((G__31832 instanceof cljs.core.Keyword))?G__31832.fqn:null);
switch (G__31832__$1) {
case "ws":
return taoensso.sente.new_ChWebSocket(ws_chsk_opts,_QMARK_csrf_token_or_fn);

break;
case "ajax":
return taoensso.sente.new_ChAjaxSocket(ajax_chsk_opts,_QMARK_csrf_token_or_fn);

break;
case "auto":
return taoensso.sente.new_ChAutoSocket(auto_chsk_opts,_QMARK_csrf_token_or_fn);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31832__$1)].join('')));

}
})());
var temp__5802__auto__ = _QMARK_chsk;
if(cljs.core.truth_(temp__5802__auto__)){
var chsk = temp__5802__auto__;
var chsk_state_ = new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk);
var internal_ch = new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs);
var send_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.sente.chsk_send_BANG_,chsk);
var ev_ch = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs)], null),recv_buf_or_n);
var ev_msg_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (ev){
var vec__31833 = taoensso.sente.as_event(ev);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31833,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31833,(1),null);
var ev__$1 = vec__31833;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),internal_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),chsk_state_,new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
})));
cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2(ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_msg_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",2069,12,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client failed to create channel socket"], null);
}),null)),null,(103),null,null,null);

return null;
}
}));

(taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq31818){
var G__31819 = cljs.core.first(seq31818);
var seq31818__$1 = cljs.core.next(seq31818);
var G__31820 = cljs.core.first(seq31818__$1);
var seq31818__$2 = cljs.core.next(seq31818__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31819,G__31820,seq31818__$2);
}));

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__31836 = opts;
var map__31836__$1 = cljs.core.__destructure_map(map__31836);
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31836__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31836__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31836__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
var ch_ctrl = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var execute1 = (function (f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));
});
var c__21734__auto___32272 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21735__auto__ = (function (){var switch__21664__auto__ = (function (state_31867){
var state_val_31868 = (state_31867[(1)]);
if((state_val_31868 === (7))){
var inst_31853 = (state_31867[(7)]);
var inst_31853__$1 = (state_31867[(2)]);
var state_31867__$1 = (function (){var statearr_31869 = state_31867;
(statearr_31869[(7)] = inst_31853__$1);

return statearr_31869;
})();
if(cljs.core.truth_(inst_31853__$1)){
var statearr_31870_32273 = state_31867__$1;
(statearr_31870_32273[(1)] = (8));

} else {
var statearr_31871_32274 = state_31867__$1;
(statearr_31871_32274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31868 === (1))){
var state_31867__$1 = state_31867;
var statearr_31872_32275 = state_31867__$1;
(statearr_31872_32275[(2)] = null);

(statearr_31872_32275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31868 === (4))){
var inst_31845 = (state_31867[(8)]);
var inst_31847 = (state_31867[(9)]);
var inst_31848 = (state_31867[(10)]);
var inst_31845__$1 = (state_31867[(2)]);
var inst_31846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31845__$1,(0),null);
var inst_31847__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31845__$1,(1),null);
var inst_31848__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31847__$1,ch_ctrl);
var state_31867__$1 = (function (){var statearr_31873 = state_31867;
(statearr_31873[(11)] = inst_31846);

(statearr_31873[(8)] = inst_31845__$1);

(statearr_31873[(9)] = inst_31847__$1);

(statearr_31873[(10)] = inst_31848__$1);

return statearr_31873;
})();
if(inst_31848__$1){
var statearr_31874_32276 = state_31867__$1;
(statearr_31874_32276[(1)] = (5));

} else {
var statearr_31875_32277 = state_31867__$1;
(statearr_31875_32277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31868 === (6))){
var inst_31846 = (state_31867[(11)]);
var inst_31851 = (inst_31846 == null);
var state_31867__$1 = state_31867;
var statearr_31876_32278 = state_31867__$1;
(statearr_31876_32278[(2)] = inst_31851);

(statearr_31876_32278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31868 === (3))){
var inst_31865 = (state_31867[(2)]);
var state_31867__$1 = state_31867;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31867__$1,inst_31865);
} else {
if((state_val_31868 === (2))){
var inst_31841 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31842 = [ch_recv,ch_ctrl];
var inst_31843 = (new cljs.core.PersistentVector(null,2,(5),inst_31841,inst_31842,null));
var state_31867__$1 = state_31867;
return cljs.core.async.ioc_alts_BANG_(state_31867__$1,(4),inst_31843);
} else {
if((state_val_31868 === (9))){
var inst_31846 = (state_31867[(11)]);
var inst_31845 = (state_31867[(8)]);
var inst_31853 = (state_31867[(7)]);
var inst_31847 = (state_31867[(9)]);
var inst_31857 = cljs.core.__destructure_map(inst_31846);
var inst_31858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31857,new cljs.core.Keyword(null,"event","event",301435442));
var inst_31859 = (function (){var vec__31838 = inst_31845;
var v = inst_31846;
var p = inst_31847;
var stop_QMARK_ = inst_31853;
var map__31856 = inst_31857;
var event_msg = inst_31857;
var event = inst_31858;
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",2096,36,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk router pre-handler event: %s",event], null);
}),null)),null,(106),null,null,null);
} else {
}

var G__31879 = (cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.server_event_msg_QMARK_(event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e31880){if((e31880 instanceof Error)){
var e = e31880;
return e;
} else {
throw e31880;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),2099,23,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.Symbol(null,"server-event-msg?","server-event-msg?",-1249957951,null),new cljs.core.Symbol("taoensso.sente","server-event-msg?","taoensso.sente/server-event-msg?",-340879612,null),new cljs.core.Symbol(null,"event-msg","event-msg",-509558413,null),event_msg,e,null);
}
})():(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.client_event_msg_QMARK_(event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e31881){if((e31881 instanceof Error)){
var e = e31881;
return e;
} else {
throw e31881;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),2100,23,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.Symbol(null,"client-event-msg?","client-event-msg?",-1506206275,null),new cljs.core.Symbol("taoensso.sente","client-event-msg?","taoensso.sente/client-event-msg?",1349037434,null),new cljs.core.Symbol(null,"event-msg","event-msg",-509558413,null),event_msg,e,null);
}
})());
return (event_msg_handler.cljs$core$IFn$_invoke$arity$1 ? event_msg_handler.cljs$core$IFn$_invoke$arity$1(G__31879) : event_msg_handler.call(null, G__31879));
}catch (e31877){var t1 = e31877;
try{var temp__5802__auto__ = error_handler;
if(cljs.core.truth_(temp__5802__auto__)){
var eh = temp__5802__auto__;
return (error_handler.cljs$core$IFn$_invoke$arity$2 ? error_handler.cljs$core$IFn$_invoke$arity$2(t1,event_msg) : error_handler.call(null, t1,event_msg));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",2106,25,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t1,"Chsk router `event-msg-handler` error: %s",event], null);
}),null)),null,(105),null,null,null);
}
}catch (e31878){var t2 = e31878;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","jar:file:/home/pushpankar/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",2108,25,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t2,"Chsk router `error-handler` error: %s",event], null);
}),null)),null,(104),null,null,null);
}}});
})();
var inst_31860 = execute1(inst_31859);
var state_31867__$1 = (function (){var statearr_31882 = state_31867;
(statearr_31882[(12)] = inst_31860);

return statearr_31882;
})();
var statearr_31883_32279 = state_31867__$1;
(statearr_31883_32279[(2)] = null);

(statearr_31883_32279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31868 === (5))){
var inst_31848 = (state_31867[(10)]);
var state_31867__$1 = state_31867;
var statearr_31884_32280 = state_31867__$1;
(statearr_31884_32280[(2)] = inst_31848);

(statearr_31884_32280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31868 === (10))){
var inst_31863 = (state_31867[(2)]);
var state_31867__$1 = state_31867;
var statearr_31885_32281 = state_31867__$1;
(statearr_31885_32281[(2)] = inst_31863);

(statearr_31885_32281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31868 === (8))){
var state_31867__$1 = state_31867;
var statearr_31886_32282 = state_31867__$1;
(statearr_31886_32282[(2)] = null);

(statearr_31886_32282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__21665__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__21665__auto____0 = (function (){
var statearr_31887 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31887[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__21665__auto__);

(statearr_31887[(1)] = (1));

return statearr_31887;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__21665__auto____1 = (function (state_31867){
while(true){
var ret_value__21666__auto__ = (function (){try{while(true){
var result__21667__auto__ = switch__21664__auto__(state_31867);
if(cljs.core.keyword_identical_QMARK_(result__21667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21667__auto__;
}
break;
}
}catch (e31888){var ex__21668__auto__ = e31888;
var statearr_31889_32283 = state_31867;
(statearr_31889_32283[(2)] = ex__21668__auto__);


if(cljs.core.seq((state_31867[(4)]))){
var statearr_31890_32284 = state_31867;
(statearr_31890_32284[(1)] = cljs.core.first((state_31867[(4)])));

} else {
throw ex__21668__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32285 = state_31867;
state_31867 = G__32285;
continue;
} else {
return ret_value__21666__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__21665__auto__ = function(state_31867){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__21665__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__21665__auto____1.call(this,state_31867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__21665__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__21665__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__21665__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__21665__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__21665__auto__;
})()
})();
var state__21736__auto__ = (function (){var statearr_31891 = f__21735__auto__();
(statearr_31891[(6)] = c__21734__auto___32272);

return statearr_31891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21736__auto__);
}));


return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_(ch_ctrl);
});
});
/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 * 
 *   Or for simple automatic future-based threading of every request, enable
 *   the `:simple-auto-threading?` opt (disabled by default).
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___32286 = arguments.length;
var i__5727__auto___32287 = (0);
while(true){
if((i__5727__auto___32287 < len__5726__auto___32286)){
args__5732__auto__.push((arguments[i__5727__auto___32287]));

var G__32288 = (i__5727__auto___32287 + (1));
i__5727__auto___32287 = G__32288;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__31895){
var vec__31896 = p__31895;
var map__31899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31896,(0),null);
var map__31899__$1 = cljs.core.__destructure_map(map__31899);
var opts = map__31899__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31899__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31899__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31899__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
return taoensso.sente._start_chsk_router_BANG_(new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
}));

(taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq31892){
var G__31893 = cljs.core.first(seq31892);
var seq31892__$1 = cljs.core.next(seq31892);
var G__31894 = cljs.core.first(seq31892__$1);
var seq31892__$2 = cljs.core.next(seq31892__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31893,G__31894,seq31892__$2);
}));

/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___32289 = arguments.length;
var i__5727__auto___32290 = (0);
while(true){
if((i__5727__auto___32290 < len__5726__auto___32289)){
args__5732__auto__.push((arguments[i__5727__auto___32290]));

var G__32291 = (i__5727__auto___32290 + (1));
i__5727__auto___32290 = G__32291;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__31903){
var vec__31904 = p__31903;
var map__31907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31904,(0),null);
var map__31907__$1 = cljs.core.__destructure_map(map__31907);
var opts = map__31907__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31907__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31907__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_(cljs.core.not(new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
}));

(taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq31900){
var G__31901 = cljs.core.first(seq31900);
var seq31900__$1 = cljs.core.next(seq31900);
var G__31902 = cljs.core.first(seq31900__$1);
var seq31900__$2 = cljs.core.next(seq31900__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31901,G__31902,seq31900__$2);
}));

taoensso.sente.event_msg_QMARK_ = taoensso.sente.client_event_msg_QMARK_;
/**
 * Platform-specific alias for `make-channel-socket-server!` or
 *   `make-channel-socket-client!`. Please see the appropriate aliased fn
 * docstring for details.
 */
taoensso.sente.make_channel_socket_BANG_ = taoensso.sente.make_channel_socket_client_BANG_;
/**
 * Platform-specific alias for `start-server-chsk-router!` or
 *   `start-client-chsk-router!`. Please see the appropriate aliased fn
 *   docstring for details.
 */
taoensso.sente.start_chsk_router_BANG_ = taoensso.sente.start_client_chsk_router_BANG_;
/**
 * DEPRECATED: Please use `start-chsk-router!` instead
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_client_chsk_router_BANG_(ch_recv,(function (ev_msg){
var G__31908 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg);
var G__31909 = new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg);
return (event_handler.cljs$core$IFn$_invoke$arity$2 ? event_handler.cljs$core$IFn$_invoke$arity$2(G__31908,G__31909) : event_handler.call(null, G__31908,G__31909));
}));
});

/**
 * DEPRECATED. Please use `timbre/set-level!` instead
 */
taoensso.sente.set_logging_level_BANG_ = taoensso.timbre.set_level_BANG_;

/**
 * DEPRECATED: Please use `ajax-call` instead
 */
taoensso.sente.ajax_lite = taoensso.encore.ajax_call;

taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__31910,websocket_QMARK_){
var map__31911 = p__31910;
var map__31911__$1 = cljs.core.__destructure_map(map__31911);
var location__$1 = map__31911__$1;
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31911__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31911__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31911__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$1),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = path;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=taoensso.sente.js.map
