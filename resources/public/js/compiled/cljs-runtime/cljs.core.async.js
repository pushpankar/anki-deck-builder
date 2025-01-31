goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40219 = (function (f,blockable,meta40220){
this.f = f;
this.blockable = blockable;
this.meta40220 = meta40220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40221,meta40220__$1){
var self__ = this;
var _40221__$1 = this;
return (new cljs.core.async.t_cljs$core$async40219(self__.f,self__.blockable,meta40220__$1));
}));

(cljs.core.async.t_cljs$core$async40219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40221){
var self__ = this;
var _40221__$1 = this;
return self__.meta40220;
}));

(cljs.core.async.t_cljs$core$async40219.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40219.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40219.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async40219.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async40219.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta40220","meta40220",-501661079,null)], null);
}));

(cljs.core.async.t_cljs$core$async40219.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40219.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40219");

(cljs.core.async.t_cljs$core$async40219.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async40219");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40219.
 */
cljs.core.async.__GT_t_cljs$core$async40219 = (function cljs$core$async$__GT_t_cljs$core$async40219(f,blockable,meta40220){
return (new cljs.core.async.t_cljs$core$async40219(f,blockable,meta40220));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__40218 = arguments.length;
switch (G__40218) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async40219(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__40228 = arguments.length;
switch (G__40228) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__40231 = arguments.length;
switch (G__40231) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__40235 = arguments.length;
switch (G__40235) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_42909 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_42909) : fn1.call(null, val_42909));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_42909) : fn1.call(null, val_42909));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__40260 = arguments.length;
switch (G__40260) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___42911 = n;
var x_42912 = (0);
while(true){
if((x_42912 < n__5593__auto___42911)){
(a[x_42912] = x_42912);

var G__42913 = (x_42912 + (1));
x_42912 = G__42913;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40261 = (function (flag,meta40262){
this.flag = flag;
this.meta40262 = meta40262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40263,meta40262__$1){
var self__ = this;
var _40263__$1 = this;
return (new cljs.core.async.t_cljs$core$async40261(self__.flag,meta40262__$1));
}));

(cljs.core.async.t_cljs$core$async40261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40263){
var self__ = this;
var _40263__$1 = this;
return self__.meta40262;
}));

(cljs.core.async.t_cljs$core$async40261.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40261.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async40261.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40261.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async40261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta40262","meta40262",1625978318,null)], null);
}));

(cljs.core.async.t_cljs$core$async40261.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40261");

(cljs.core.async.t_cljs$core$async40261.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async40261");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40261.
 */
cljs.core.async.__GT_t_cljs$core$async40261 = (function cljs$core$async$__GT_t_cljs$core$async40261(flag,meta40262){
return (new cljs.core.async.t_cljs$core$async40261(flag,meta40262));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async40261(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40267 = (function (flag,cb,meta40268){
this.flag = flag;
this.cb = cb;
this.meta40268 = meta40268;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40269,meta40268__$1){
var self__ = this;
var _40269__$1 = this;
return (new cljs.core.async.t_cljs$core$async40267(self__.flag,self__.cb,meta40268__$1));
}));

(cljs.core.async.t_cljs$core$async40267.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40269){
var self__ = this;
var _40269__$1 = this;
return self__.meta40268;
}));

(cljs.core.async.t_cljs$core$async40267.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40267.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async40267.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40267.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async40267.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta40268","meta40268",682760148,null)], null);
}));

(cljs.core.async.t_cljs$core$async40267.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40267.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40267");

(cljs.core.async.t_cljs$core$async40267.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async40267");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40267.
 */
cljs.core.async.__GT_t_cljs$core$async40267 = (function cljs$core$async$__GT_t_cljs$core$async40267(flag,cb,meta40268){
return (new cljs.core.async.t_cljs$core$async40267(flag,cb,meta40268));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async40267(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40275_SHARP_){
var G__40289 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40275_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__40289) : fret.call(null, G__40289));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40276_SHARP_){
var G__40290 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40276_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__40290) : fret.call(null, G__40290));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__42925 = (i + (1));
i = G__42925;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___42930 = arguments.length;
var i__5727__auto___42931 = (0);
while(true){
if((i__5727__auto___42931 < len__5726__auto___42930)){
args__5732__auto__.push((arguments[i__5727__auto___42931]));

var G__42932 = (i__5727__auto___42931 + (1));
i__5727__auto___42931 = G__42932;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__40308){
var map__40309 = p__40308;
var map__40309__$1 = cljs.core.__destructure_map(map__40309);
var opts = map__40309__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq40300){
var G__40301 = cljs.core.first(seq40300);
var seq40300__$1 = cljs.core.next(seq40300);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40301,seq40300__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__40321 = arguments.length;
switch (G__40321) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__40132__auto___42935 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40133__auto__ = (function (){var switch__40010__auto__ = (function (state_40367){
var state_val_40371 = (state_40367[(1)]);
if((state_val_40371 === (7))){
var inst_40357 = (state_40367[(2)]);
var state_40367__$1 = state_40367;
var statearr_40383_42936 = state_40367__$1;
(statearr_40383_42936[(2)] = inst_40357);

(statearr_40383_42936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40371 === (1))){
var state_40367__$1 = state_40367;
var statearr_40385_42937 = state_40367__$1;
(statearr_40385_42937[(2)] = null);

(statearr_40385_42937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40371 === (4))){
var inst_40337 = (state_40367[(7)]);
var inst_40337__$1 = (state_40367[(2)]);
var inst_40338 = (inst_40337__$1 == null);
var state_40367__$1 = (function (){var statearr_40386 = state_40367;
(statearr_40386[(7)] = inst_40337__$1);

return statearr_40386;
})();
if(cljs.core.truth_(inst_40338)){
var statearr_40387_42938 = state_40367__$1;
(statearr_40387_42938[(1)] = (5));

} else {
var statearr_40388_42939 = state_40367__$1;
(statearr_40388_42939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40371 === (13))){
var state_40367__$1 = state_40367;
var statearr_40389_42940 = state_40367__$1;
(statearr_40389_42940[(2)] = null);

(statearr_40389_42940[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40371 === (6))){
var inst_40337 = (state_40367[(7)]);
var state_40367__$1 = state_40367;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40367__$1,(11),to,inst_40337);
} else {
if((state_val_40371 === (3))){
var inst_40362 = (state_40367[(2)]);
var state_40367__$1 = state_40367;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40367__$1,inst_40362);
} else {
if((state_val_40371 === (12))){
var state_40367__$1 = state_40367;
var statearr_40396_42942 = state_40367__$1;
(statearr_40396_42942[(2)] = null);

(statearr_40396_42942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40371 === (2))){
var state_40367__$1 = state_40367;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40367__$1,(4),from);
} else {
if((state_val_40371 === (11))){
var inst_40350 = (state_40367[(2)]);
var state_40367__$1 = state_40367;
if(cljs.core.truth_(inst_40350)){
var statearr_40401_42944 = state_40367__$1;
(statearr_40401_42944[(1)] = (12));

} else {
var statearr_40402_42945 = state_40367__$1;
(statearr_40402_42945[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40371 === (9))){
var state_40367__$1 = state_40367;
var statearr_40407_42946 = state_40367__$1;
(statearr_40407_42946[(2)] = null);

(statearr_40407_42946[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40371 === (5))){
var state_40367__$1 = state_40367;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40411_42947 = state_40367__$1;
(statearr_40411_42947[(1)] = (8));

} else {
var statearr_40412_42948 = state_40367__$1;
(statearr_40412_42948[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40371 === (14))){
var inst_40355 = (state_40367[(2)]);
var state_40367__$1 = state_40367;
var statearr_40413_42949 = state_40367__$1;
(statearr_40413_42949[(2)] = inst_40355);

(statearr_40413_42949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40371 === (10))){
var inst_40347 = (state_40367[(2)]);
var state_40367__$1 = state_40367;
var statearr_40414_42951 = state_40367__$1;
(statearr_40414_42951[(2)] = inst_40347);

(statearr_40414_42951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40371 === (8))){
var inst_40344 = cljs.core.async.close_BANG_(to);
var state_40367__$1 = state_40367;
var statearr_40418_42953 = state_40367__$1;
(statearr_40418_42953[(2)] = inst_40344);

(statearr_40418_42953[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__40011__auto__ = null;
var cljs$core$async$state_machine__40011__auto____0 = (function (){
var statearr_40422 = [null,null,null,null,null,null,null,null];
(statearr_40422[(0)] = cljs$core$async$state_machine__40011__auto__);

(statearr_40422[(1)] = (1));

return statearr_40422;
});
var cljs$core$async$state_machine__40011__auto____1 = (function (state_40367){
while(true){
var ret_value__40012__auto__ = (function (){try{while(true){
var result__40013__auto__ = switch__40010__auto__(state_40367);
if(cljs.core.keyword_identical_QMARK_(result__40013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40013__auto__;
}
break;
}
}catch (e40423){var ex__40014__auto__ = e40423;
var statearr_40424_42957 = state_40367;
(statearr_40424_42957[(2)] = ex__40014__auto__);


if(cljs.core.seq((state_40367[(4)]))){
var statearr_40425_42959 = state_40367;
(statearr_40425_42959[(1)] = cljs.core.first((state_40367[(4)])));

} else {
throw ex__40014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42960 = state_40367;
state_40367 = G__42960;
continue;
} else {
return ret_value__40012__auto__;
}
break;
}
});
cljs$core$async$state_machine__40011__auto__ = function(state_40367){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40011__auto____1.call(this,state_40367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40011__auto____0;
cljs$core$async$state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40011__auto____1;
return cljs$core$async$state_machine__40011__auto__;
})()
})();
var state__40134__auto__ = (function (){var statearr_40429 = f__40133__auto__();
(statearr_40429[(6)] = c__40132__auto___42935);

return statearr_40429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40134__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__40434){
var vec__40435 = p__40434;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40435,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40435,(1),null);
var job = vec__40435;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__40132__auto___42963 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40133__auto__ = (function (){var switch__40010__auto__ = (function (state_40447){
var state_val_40448 = (state_40447[(1)]);
if((state_val_40448 === (1))){
var state_40447__$1 = state_40447;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40447__$1,(2),res,v);
} else {
if((state_val_40448 === (2))){
var inst_40442 = (state_40447[(2)]);
var inst_40444 = cljs.core.async.close_BANG_(res);
var state_40447__$1 = (function (){var statearr_40454 = state_40447;
(statearr_40454[(7)] = inst_40442);

return statearr_40454;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40447__$1,inst_40444);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40011__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40011__auto____0 = (function (){
var statearr_40455 = [null,null,null,null,null,null,null,null];
(statearr_40455[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40011__auto__);

(statearr_40455[(1)] = (1));

return statearr_40455;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40011__auto____1 = (function (state_40447){
while(true){
var ret_value__40012__auto__ = (function (){try{while(true){
var result__40013__auto__ = switch__40010__auto__(state_40447);
if(cljs.core.keyword_identical_QMARK_(result__40013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40013__auto__;
}
break;
}
}catch (e40465){var ex__40014__auto__ = e40465;
var statearr_40466_42967 = state_40447;
(statearr_40466_42967[(2)] = ex__40014__auto__);


if(cljs.core.seq((state_40447[(4)]))){
var statearr_40467_42970 = state_40447;
(statearr_40467_42970[(1)] = cljs.core.first((state_40447[(4)])));

} else {
throw ex__40014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42971 = state_40447;
state_40447 = G__42971;
continue;
} else {
return ret_value__40012__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40011__auto__ = function(state_40447){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40011__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40011__auto____1.call(this,state_40447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40011__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40011__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40011__auto__;
})()
})();
var state__40134__auto__ = (function (){var statearr_40471 = f__40133__auto__();
(statearr_40471[(6)] = c__40132__auto___42963);

return statearr_40471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40134__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__40475){
var vec__40476 = p__40475;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40476,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40476,(1),null);
var job = vec__40476;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___42974 = n;
var __42975 = (0);
while(true){
if((__42975 < n__5593__auto___42974)){
var G__40481_42976 = type;
var G__40481_42977__$1 = (((G__40481_42976 instanceof cljs.core.Keyword))?G__40481_42976.fqn:null);
switch (G__40481_42977__$1) {
case "compute":
var c__40132__auto___42979 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__42975,c__40132__auto___42979,G__40481_42976,G__40481_42977__$1,n__5593__auto___42974,jobs,results,process__$1,async){
return (function (){
var f__40133__auto__ = (function (){var switch__40010__auto__ = ((function (__42975,c__40132__auto___42979,G__40481_42976,G__40481_42977__$1,n__5593__auto___42974,jobs,results,process__$1,async){
return (function (state_40494){
var state_val_40495 = (state_40494[(1)]);
if((state_val_40495 === (1))){
var state_40494__$1 = state_40494;
var statearr_40499_42984 = state_40494__$1;
(statearr_40499_42984[(2)] = null);

(statearr_40499_42984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40495 === (2))){
var state_40494__$1 = state_40494;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40494__$1,(4),jobs);
} else {
if((state_val_40495 === (3))){
var inst_40492 = (state_40494[(2)]);
var state_40494__$1 = state_40494;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40494__$1,inst_40492);
} else {
if((state_val_40495 === (4))){
var inst_40484 = (state_40494[(2)]);
var inst_40485 = process__$1(inst_40484);
var state_40494__$1 = state_40494;
if(cljs.core.truth_(inst_40485)){
var statearr_40500_42987 = state_40494__$1;
(statearr_40500_42987[(1)] = (5));

} else {
var statearr_40502_42988 = state_40494__$1;
(statearr_40502_42988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40495 === (5))){
var state_40494__$1 = state_40494;
var statearr_40507_42989 = state_40494__$1;
(statearr_40507_42989[(2)] = null);

(statearr_40507_42989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40495 === (6))){
var state_40494__$1 = state_40494;
var statearr_40513_42990 = state_40494__$1;
(statearr_40513_42990[(2)] = null);

(statearr_40513_42990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40495 === (7))){
var inst_40490 = (state_40494[(2)]);
var state_40494__$1 = state_40494;
var statearr_40514_42993 = state_40494__$1;
(statearr_40514_42993[(2)] = inst_40490);

(statearr_40514_42993[(1)] = (3));


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
});})(__42975,c__40132__auto___42979,G__40481_42976,G__40481_42977__$1,n__5593__auto___42974,jobs,results,process__$1,async))
;
return ((function (__42975,switch__40010__auto__,c__40132__auto___42979,G__40481_42976,G__40481_42977__$1,n__5593__auto___42974,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40011__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40011__auto____0 = (function (){
var statearr_40515 = [null,null,null,null,null,null,null];
(statearr_40515[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40011__auto__);

(statearr_40515[(1)] = (1));

return statearr_40515;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40011__auto____1 = (function (state_40494){
while(true){
var ret_value__40012__auto__ = (function (){try{while(true){
var result__40013__auto__ = switch__40010__auto__(state_40494);
if(cljs.core.keyword_identical_QMARK_(result__40013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40013__auto__;
}
break;
}
}catch (e40516){var ex__40014__auto__ = e40516;
var statearr_40517_42994 = state_40494;
(statearr_40517_42994[(2)] = ex__40014__auto__);


if(cljs.core.seq((state_40494[(4)]))){
var statearr_40518_42995 = state_40494;
(statearr_40518_42995[(1)] = cljs.core.first((state_40494[(4)])));

} else {
throw ex__40014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42997 = state_40494;
state_40494 = G__42997;
continue;
} else {
return ret_value__40012__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40011__auto__ = function(state_40494){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40011__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40011__auto____1.call(this,state_40494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40011__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40011__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40011__auto__;
})()
;})(__42975,switch__40010__auto__,c__40132__auto___42979,G__40481_42976,G__40481_42977__$1,n__5593__auto___42974,jobs,results,process__$1,async))
})();
var state__40134__auto__ = (function (){var statearr_40525 = f__40133__auto__();
(statearr_40525[(6)] = c__40132__auto___42979);

return statearr_40525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40134__auto__);
});})(__42975,c__40132__auto___42979,G__40481_42976,G__40481_42977__$1,n__5593__auto___42974,jobs,results,process__$1,async))
);


break;
case "async":
var c__40132__auto___43016 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__42975,c__40132__auto___43016,G__40481_42976,G__40481_42977__$1,n__5593__auto___42974,jobs,results,process__$1,async){
return (function (){
var f__40133__auto__ = (function (){var switch__40010__auto__ = ((function (__42975,c__40132__auto___43016,G__40481_42976,G__40481_42977__$1,n__5593__auto___42974,jobs,results,process__$1,async){
return (function (state_40539){
var state_val_40540 = (state_40539[(1)]);
if((state_val_40540 === (1))){
var state_40539__$1 = state_40539;
var statearr_40544_43018 = state_40539__$1;
(statearr_40544_43018[(2)] = null);

(statearr_40544_43018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40540 === (2))){
var state_40539__$1 = state_40539;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40539__$1,(4),jobs);
} else {
if((state_val_40540 === (3))){
var inst_40537 = (state_40539[(2)]);
var state_40539__$1 = state_40539;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40539__$1,inst_40537);
} else {
if((state_val_40540 === (4))){
var inst_40528 = (state_40539[(2)]);
var inst_40529 = async(inst_40528);
var state_40539__$1 = state_40539;
if(cljs.core.truth_(inst_40529)){
var statearr_40547_43019 = state_40539__$1;
(statearr_40547_43019[(1)] = (5));

} else {
var statearr_40550_43020 = state_40539__$1;
(statearr_40550_43020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40540 === (5))){
var state_40539__$1 = state_40539;
var statearr_40551_43021 = state_40539__$1;
(statearr_40551_43021[(2)] = null);

(statearr_40551_43021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40540 === (6))){
var state_40539__$1 = state_40539;
var statearr_40553_43025 = state_40539__$1;
(statearr_40553_43025[(2)] = null);

(statearr_40553_43025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40540 === (7))){
var inst_40535 = (state_40539[(2)]);
var state_40539__$1 = state_40539;
var statearr_40554_43026 = state_40539__$1;
(statearr_40554_43026[(2)] = inst_40535);

(statearr_40554_43026[(1)] = (3));


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
});})(__42975,c__40132__auto___43016,G__40481_42976,G__40481_42977__$1,n__5593__auto___42974,jobs,results,process__$1,async))
;
return ((function (__42975,switch__40010__auto__,c__40132__auto___43016,G__40481_42976,G__40481_42977__$1,n__5593__auto___42974,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40011__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40011__auto____0 = (function (){
var statearr_40555 = [null,null,null,null,null,null,null];
(statearr_40555[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40011__auto__);

(statearr_40555[(1)] = (1));

return statearr_40555;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40011__auto____1 = (function (state_40539){
while(true){
var ret_value__40012__auto__ = (function (){try{while(true){
var result__40013__auto__ = switch__40010__auto__(state_40539);
if(cljs.core.keyword_identical_QMARK_(result__40013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40013__auto__;
}
break;
}
}catch (e40556){var ex__40014__auto__ = e40556;
var statearr_40557_43027 = state_40539;
(statearr_40557_43027[(2)] = ex__40014__auto__);


if(cljs.core.seq((state_40539[(4)]))){
var statearr_40560_43028 = state_40539;
(statearr_40560_43028[(1)] = cljs.core.first((state_40539[(4)])));

} else {
throw ex__40014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43029 = state_40539;
state_40539 = G__43029;
continue;
} else {
return ret_value__40012__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40011__auto__ = function(state_40539){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40011__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40011__auto____1.call(this,state_40539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40011__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40011__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40011__auto__;
})()
;})(__42975,switch__40010__auto__,c__40132__auto___43016,G__40481_42976,G__40481_42977__$1,n__5593__auto___42974,jobs,results,process__$1,async))
})();
var state__40134__auto__ = (function (){var statearr_40561 = f__40133__auto__();
(statearr_40561[(6)] = c__40132__auto___43016);

return statearr_40561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40134__auto__);
});})(__42975,c__40132__auto___43016,G__40481_42976,G__40481_42977__$1,n__5593__auto___42974,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40481_42977__$1)].join('')));

}

var G__43030 = (__42975 + (1));
__42975 = G__43030;
continue;
} else {
}
break;
}

var c__40132__auto___43031 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40133__auto__ = (function (){var switch__40010__auto__ = (function (state_40588){
var state_val_40589 = (state_40588[(1)]);
if((state_val_40589 === (7))){
var inst_40580 = (state_40588[(2)]);
var state_40588__$1 = state_40588;
var statearr_40590_43036 = state_40588__$1;
(statearr_40590_43036[(2)] = inst_40580);

(statearr_40590_43036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40589 === (1))){
var state_40588__$1 = state_40588;
var statearr_40591_43039 = state_40588__$1;
(statearr_40591_43039[(2)] = null);

(statearr_40591_43039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40589 === (4))){
var inst_40565 = (state_40588[(7)]);
var inst_40565__$1 = (state_40588[(2)]);
var inst_40566 = (inst_40565__$1 == null);
var state_40588__$1 = (function (){var statearr_40595 = state_40588;
(statearr_40595[(7)] = inst_40565__$1);

return statearr_40595;
})();
if(cljs.core.truth_(inst_40566)){
var statearr_40596_43041 = state_40588__$1;
(statearr_40596_43041[(1)] = (5));

} else {
var statearr_40597_43042 = state_40588__$1;
(statearr_40597_43042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40589 === (6))){
var inst_40570 = (state_40588[(8)]);
var inst_40565 = (state_40588[(7)]);
var inst_40570__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_40571 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40572 = [inst_40565,inst_40570__$1];
var inst_40573 = (new cljs.core.PersistentVector(null,2,(5),inst_40571,inst_40572,null));
var state_40588__$1 = (function (){var statearr_40603 = state_40588;
(statearr_40603[(8)] = inst_40570__$1);

return statearr_40603;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40588__$1,(8),jobs,inst_40573);
} else {
if((state_val_40589 === (3))){
var inst_40582 = (state_40588[(2)]);
var state_40588__$1 = state_40588;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40588__$1,inst_40582);
} else {
if((state_val_40589 === (2))){
var state_40588__$1 = state_40588;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40588__$1,(4),from);
} else {
if((state_val_40589 === (9))){
var inst_40577 = (state_40588[(2)]);
var state_40588__$1 = (function (){var statearr_40607 = state_40588;
(statearr_40607[(9)] = inst_40577);

return statearr_40607;
})();
var statearr_40608_43045 = state_40588__$1;
(statearr_40608_43045[(2)] = null);

(statearr_40608_43045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40589 === (5))){
var inst_40568 = cljs.core.async.close_BANG_(jobs);
var state_40588__$1 = state_40588;
var statearr_40613_43046 = state_40588__$1;
(statearr_40613_43046[(2)] = inst_40568);

(statearr_40613_43046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40589 === (8))){
var inst_40570 = (state_40588[(8)]);
var inst_40575 = (state_40588[(2)]);
var state_40588__$1 = (function (){var statearr_40620 = state_40588;
(statearr_40620[(10)] = inst_40575);

return statearr_40620;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40588__$1,(9),results,inst_40570);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40011__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40011__auto____0 = (function (){
var statearr_40634 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40634[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40011__auto__);

(statearr_40634[(1)] = (1));

return statearr_40634;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40011__auto____1 = (function (state_40588){
while(true){
var ret_value__40012__auto__ = (function (){try{while(true){
var result__40013__auto__ = switch__40010__auto__(state_40588);
if(cljs.core.keyword_identical_QMARK_(result__40013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40013__auto__;
}
break;
}
}catch (e40636){var ex__40014__auto__ = e40636;
var statearr_40638_43051 = state_40588;
(statearr_40638_43051[(2)] = ex__40014__auto__);


if(cljs.core.seq((state_40588[(4)]))){
var statearr_40639_43052 = state_40588;
(statearr_40639_43052[(1)] = cljs.core.first((state_40588[(4)])));

} else {
throw ex__40014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43053 = state_40588;
state_40588 = G__43053;
continue;
} else {
return ret_value__40012__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40011__auto__ = function(state_40588){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40011__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40011__auto____1.call(this,state_40588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40011__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40011__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40011__auto__;
})()
})();
var state__40134__auto__ = (function (){var statearr_40640 = f__40133__auto__();
(statearr_40640[(6)] = c__40132__auto___43031);

return statearr_40640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40134__auto__);
}));


var c__40132__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40133__auto__ = (function (){var switch__40010__auto__ = (function (state_40683){
var state_val_40684 = (state_40683[(1)]);
if((state_val_40684 === (7))){
var inst_40679 = (state_40683[(2)]);
var state_40683__$1 = state_40683;
var statearr_40689_43056 = state_40683__$1;
(statearr_40689_43056[(2)] = inst_40679);

(statearr_40689_43056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40684 === (20))){
var state_40683__$1 = state_40683;
var statearr_40690_43057 = state_40683__$1;
(statearr_40690_43057[(2)] = null);

(statearr_40690_43057[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40684 === (1))){
var state_40683__$1 = state_40683;
var statearr_40699_43058 = state_40683__$1;
(statearr_40699_43058[(2)] = null);

(statearr_40699_43058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40684 === (4))){
var inst_40644 = (state_40683[(7)]);
var inst_40644__$1 = (state_40683[(2)]);
var inst_40645 = (inst_40644__$1 == null);
var state_40683__$1 = (function (){var statearr_40718 = state_40683;
(statearr_40718[(7)] = inst_40644__$1);

return statearr_40718;
})();
if(cljs.core.truth_(inst_40645)){
var statearr_40723_43059 = state_40683__$1;
(statearr_40723_43059[(1)] = (5));

} else {
var statearr_40724_43060 = state_40683__$1;
(statearr_40724_43060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40684 === (15))){
var inst_40659 = (state_40683[(8)]);
var state_40683__$1 = state_40683;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40683__$1,(18),to,inst_40659);
} else {
if((state_val_40684 === (21))){
var inst_40674 = (state_40683[(2)]);
var state_40683__$1 = state_40683;
var statearr_40731_43065 = state_40683__$1;
(statearr_40731_43065[(2)] = inst_40674);

(statearr_40731_43065[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40684 === (13))){
var inst_40676 = (state_40683[(2)]);
var state_40683__$1 = (function (){var statearr_40737 = state_40683;
(statearr_40737[(9)] = inst_40676);

return statearr_40737;
})();
var statearr_40739_43068 = state_40683__$1;
(statearr_40739_43068[(2)] = null);

(statearr_40739_43068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40684 === (6))){
var inst_40644 = (state_40683[(7)]);
var state_40683__$1 = state_40683;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40683__$1,(11),inst_40644);
} else {
if((state_val_40684 === (17))){
var inst_40669 = (state_40683[(2)]);
var state_40683__$1 = state_40683;
if(cljs.core.truth_(inst_40669)){
var statearr_40757_43069 = state_40683__$1;
(statearr_40757_43069[(1)] = (19));

} else {
var statearr_40758_43071 = state_40683__$1;
(statearr_40758_43071[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40684 === (3))){
var inst_40681 = (state_40683[(2)]);
var state_40683__$1 = state_40683;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40683__$1,inst_40681);
} else {
if((state_val_40684 === (12))){
var inst_40656 = (state_40683[(10)]);
var state_40683__$1 = state_40683;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40683__$1,(14),inst_40656);
} else {
if((state_val_40684 === (2))){
var state_40683__$1 = state_40683;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40683__$1,(4),results);
} else {
if((state_val_40684 === (19))){
var state_40683__$1 = state_40683;
var statearr_40781_43072 = state_40683__$1;
(statearr_40781_43072[(2)] = null);

(statearr_40781_43072[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40684 === (11))){
var inst_40656 = (state_40683[(2)]);
var state_40683__$1 = (function (){var statearr_40794 = state_40683;
(statearr_40794[(10)] = inst_40656);

return statearr_40794;
})();
var statearr_40795_43073 = state_40683__$1;
(statearr_40795_43073[(2)] = null);

(statearr_40795_43073[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40684 === (9))){
var state_40683__$1 = state_40683;
var statearr_40797_43074 = state_40683__$1;
(statearr_40797_43074[(2)] = null);

(statearr_40797_43074[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40684 === (5))){
var state_40683__$1 = state_40683;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40798_43075 = state_40683__$1;
(statearr_40798_43075[(1)] = (8));

} else {
var statearr_40799_43076 = state_40683__$1;
(statearr_40799_43076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40684 === (14))){
var inst_40661 = (state_40683[(11)]);
var inst_40659 = (state_40683[(8)]);
var inst_40659__$1 = (state_40683[(2)]);
var inst_40660 = (inst_40659__$1 == null);
var inst_40661__$1 = cljs.core.not(inst_40660);
var state_40683__$1 = (function (){var statearr_40800 = state_40683;
(statearr_40800[(11)] = inst_40661__$1);

(statearr_40800[(8)] = inst_40659__$1);

return statearr_40800;
})();
if(inst_40661__$1){
var statearr_40802_43077 = state_40683__$1;
(statearr_40802_43077[(1)] = (15));

} else {
var statearr_40804_43078 = state_40683__$1;
(statearr_40804_43078[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40684 === (16))){
var inst_40661 = (state_40683[(11)]);
var state_40683__$1 = state_40683;
var statearr_40805_43079 = state_40683__$1;
(statearr_40805_43079[(2)] = inst_40661);

(statearr_40805_43079[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40684 === (10))){
var inst_40652 = (state_40683[(2)]);
var state_40683__$1 = state_40683;
var statearr_40806_43080 = state_40683__$1;
(statearr_40806_43080[(2)] = inst_40652);

(statearr_40806_43080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40684 === (18))){
var inst_40666 = (state_40683[(2)]);
var state_40683__$1 = state_40683;
var statearr_40807_43084 = state_40683__$1;
(statearr_40807_43084[(2)] = inst_40666);

(statearr_40807_43084[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40684 === (8))){
var inst_40649 = cljs.core.async.close_BANG_(to);
var state_40683__$1 = state_40683;
var statearr_40809_43085 = state_40683__$1;
(statearr_40809_43085[(2)] = inst_40649);

(statearr_40809_43085[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40011__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40011__auto____0 = (function (){
var statearr_40810 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40810[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40011__auto__);

(statearr_40810[(1)] = (1));

return statearr_40810;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40011__auto____1 = (function (state_40683){
while(true){
var ret_value__40012__auto__ = (function (){try{while(true){
var result__40013__auto__ = switch__40010__auto__(state_40683);
if(cljs.core.keyword_identical_QMARK_(result__40013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40013__auto__;
}
break;
}
}catch (e40816){var ex__40014__auto__ = e40816;
var statearr_40821_43086 = state_40683;
(statearr_40821_43086[(2)] = ex__40014__auto__);


if(cljs.core.seq((state_40683[(4)]))){
var statearr_40822_43087 = state_40683;
(statearr_40822_43087[(1)] = cljs.core.first((state_40683[(4)])));

} else {
throw ex__40014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43088 = state_40683;
state_40683 = G__43088;
continue;
} else {
return ret_value__40012__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40011__auto__ = function(state_40683){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40011__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40011__auto____1.call(this,state_40683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40011__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40011__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40011__auto__;
})()
})();
var state__40134__auto__ = (function (){var statearr_40827 = f__40133__auto__();
(statearr_40827[(6)] = c__40132__auto__);

return statearr_40827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40134__auto__);
}));

return c__40132__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__40836 = arguments.length;
switch (G__40836) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__40858 = arguments.length;
switch (G__40858) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__40862 = arguments.length;
switch (G__40862) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__40132__auto___43102 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40133__auto__ = (function (){var switch__40010__auto__ = (function (state_40896){
var state_val_40897 = (state_40896[(1)]);
if((state_val_40897 === (7))){
var inst_40888 = (state_40896[(2)]);
var state_40896__$1 = state_40896;
var statearr_40913_43103 = state_40896__$1;
(statearr_40913_43103[(2)] = inst_40888);

(statearr_40913_43103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40897 === (1))){
var state_40896__$1 = state_40896;
var statearr_40914_43104 = state_40896__$1;
(statearr_40914_43104[(2)] = null);

(statearr_40914_43104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40897 === (4))){
var inst_40865 = (state_40896[(7)]);
var inst_40865__$1 = (state_40896[(2)]);
var inst_40866 = (inst_40865__$1 == null);
var state_40896__$1 = (function (){var statearr_40915 = state_40896;
(statearr_40915[(7)] = inst_40865__$1);

return statearr_40915;
})();
if(cljs.core.truth_(inst_40866)){
var statearr_40916_43106 = state_40896__$1;
(statearr_40916_43106[(1)] = (5));

} else {
var statearr_40917_43107 = state_40896__$1;
(statearr_40917_43107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40897 === (13))){
var state_40896__$1 = state_40896;
var statearr_40918_43108 = state_40896__$1;
(statearr_40918_43108[(2)] = null);

(statearr_40918_43108[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40897 === (6))){
var inst_40865 = (state_40896[(7)]);
var inst_40871 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_40865) : p.call(null, inst_40865));
var state_40896__$1 = state_40896;
if(cljs.core.truth_(inst_40871)){
var statearr_40919_43110 = state_40896__$1;
(statearr_40919_43110[(1)] = (9));

} else {
var statearr_40920_43111 = state_40896__$1;
(statearr_40920_43111[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40897 === (3))){
var inst_40890 = (state_40896[(2)]);
var state_40896__$1 = state_40896;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40896__$1,inst_40890);
} else {
if((state_val_40897 === (12))){
var state_40896__$1 = state_40896;
var statearr_40921_43112 = state_40896__$1;
(statearr_40921_43112[(2)] = null);

(statearr_40921_43112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40897 === (2))){
var state_40896__$1 = state_40896;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40896__$1,(4),ch);
} else {
if((state_val_40897 === (11))){
var inst_40865 = (state_40896[(7)]);
var inst_40875 = (state_40896[(2)]);
var state_40896__$1 = state_40896;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40896__$1,(8),inst_40875,inst_40865);
} else {
if((state_val_40897 === (9))){
var state_40896__$1 = state_40896;
var statearr_40922_43117 = state_40896__$1;
(statearr_40922_43117[(2)] = tc);

(statearr_40922_43117[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40897 === (5))){
var inst_40868 = cljs.core.async.close_BANG_(tc);
var inst_40869 = cljs.core.async.close_BANG_(fc);
var state_40896__$1 = (function (){var statearr_40923 = state_40896;
(statearr_40923[(8)] = inst_40868);

return statearr_40923;
})();
var statearr_40924_43118 = state_40896__$1;
(statearr_40924_43118[(2)] = inst_40869);

(statearr_40924_43118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40897 === (14))){
var inst_40882 = (state_40896[(2)]);
var state_40896__$1 = state_40896;
var statearr_40925_43119 = state_40896__$1;
(statearr_40925_43119[(2)] = inst_40882);

(statearr_40925_43119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40897 === (10))){
var state_40896__$1 = state_40896;
var statearr_40926_43120 = state_40896__$1;
(statearr_40926_43120[(2)] = fc);

(statearr_40926_43120[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40897 === (8))){
var inst_40877 = (state_40896[(2)]);
var state_40896__$1 = state_40896;
if(cljs.core.truth_(inst_40877)){
var statearr_40927_43122 = state_40896__$1;
(statearr_40927_43122[(1)] = (12));

} else {
var statearr_40928_43123 = state_40896__$1;
(statearr_40928_43123[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__40011__auto__ = null;
var cljs$core$async$state_machine__40011__auto____0 = (function (){
var statearr_40929 = [null,null,null,null,null,null,null,null,null];
(statearr_40929[(0)] = cljs$core$async$state_machine__40011__auto__);

(statearr_40929[(1)] = (1));

return statearr_40929;
});
var cljs$core$async$state_machine__40011__auto____1 = (function (state_40896){
while(true){
var ret_value__40012__auto__ = (function (){try{while(true){
var result__40013__auto__ = switch__40010__auto__(state_40896);
if(cljs.core.keyword_identical_QMARK_(result__40013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40013__auto__;
}
break;
}
}catch (e40933){var ex__40014__auto__ = e40933;
var statearr_40934_43124 = state_40896;
(statearr_40934_43124[(2)] = ex__40014__auto__);


if(cljs.core.seq((state_40896[(4)]))){
var statearr_40935_43125 = state_40896;
(statearr_40935_43125[(1)] = cljs.core.first((state_40896[(4)])));

} else {
throw ex__40014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43126 = state_40896;
state_40896 = G__43126;
continue;
} else {
return ret_value__40012__auto__;
}
break;
}
});
cljs$core$async$state_machine__40011__auto__ = function(state_40896){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40011__auto____1.call(this,state_40896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40011__auto____0;
cljs$core$async$state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40011__auto____1;
return cljs$core$async$state_machine__40011__auto__;
})()
})();
var state__40134__auto__ = (function (){var statearr_40936 = f__40133__auto__();
(statearr_40936[(6)] = c__40132__auto___43102);

return statearr_40936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40134__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__40132__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40133__auto__ = (function (){var switch__40010__auto__ = (function (state_40961){
var state_val_40962 = (state_40961[(1)]);
if((state_val_40962 === (7))){
var inst_40957 = (state_40961[(2)]);
var state_40961__$1 = state_40961;
var statearr_40963_43130 = state_40961__$1;
(statearr_40963_43130[(2)] = inst_40957);

(statearr_40963_43130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40962 === (1))){
var inst_40940 = init;
var inst_40941 = inst_40940;
var state_40961__$1 = (function (){var statearr_40964 = state_40961;
(statearr_40964[(7)] = inst_40941);

return statearr_40964;
})();
var statearr_40965_43131 = state_40961__$1;
(statearr_40965_43131[(2)] = null);

(statearr_40965_43131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40962 === (4))){
var inst_40944 = (state_40961[(8)]);
var inst_40944__$1 = (state_40961[(2)]);
var inst_40945 = (inst_40944__$1 == null);
var state_40961__$1 = (function (){var statearr_40966 = state_40961;
(statearr_40966[(8)] = inst_40944__$1);

return statearr_40966;
})();
if(cljs.core.truth_(inst_40945)){
var statearr_40967_43133 = state_40961__$1;
(statearr_40967_43133[(1)] = (5));

} else {
var statearr_40968_43134 = state_40961__$1;
(statearr_40968_43134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40962 === (6))){
var inst_40944 = (state_40961[(8)]);
var inst_40941 = (state_40961[(7)]);
var inst_40948 = (state_40961[(9)]);
var inst_40948__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_40941,inst_40944) : f.call(null, inst_40941,inst_40944));
var inst_40949 = cljs.core.reduced_QMARK_(inst_40948__$1);
var state_40961__$1 = (function (){var statearr_40972 = state_40961;
(statearr_40972[(9)] = inst_40948__$1);

return statearr_40972;
})();
if(inst_40949){
var statearr_40973_43135 = state_40961__$1;
(statearr_40973_43135[(1)] = (8));

} else {
var statearr_40974_43136 = state_40961__$1;
(statearr_40974_43136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40962 === (3))){
var inst_40959 = (state_40961[(2)]);
var state_40961__$1 = state_40961;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40961__$1,inst_40959);
} else {
if((state_val_40962 === (2))){
var state_40961__$1 = state_40961;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40961__$1,(4),ch);
} else {
if((state_val_40962 === (9))){
var inst_40948 = (state_40961[(9)]);
var inst_40941 = inst_40948;
var state_40961__$1 = (function (){var statearr_40975 = state_40961;
(statearr_40975[(7)] = inst_40941);

return statearr_40975;
})();
var statearr_40976_43137 = state_40961__$1;
(statearr_40976_43137[(2)] = null);

(statearr_40976_43137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40962 === (5))){
var inst_40941 = (state_40961[(7)]);
var state_40961__$1 = state_40961;
var statearr_40977_43141 = state_40961__$1;
(statearr_40977_43141[(2)] = inst_40941);

(statearr_40977_43141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40962 === (10))){
var inst_40955 = (state_40961[(2)]);
var state_40961__$1 = state_40961;
var statearr_40978_43147 = state_40961__$1;
(statearr_40978_43147[(2)] = inst_40955);

(statearr_40978_43147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40962 === (8))){
var inst_40948 = (state_40961[(9)]);
var inst_40951 = cljs.core.deref(inst_40948);
var state_40961__$1 = state_40961;
var statearr_40979_43149 = state_40961__$1;
(statearr_40979_43149[(2)] = inst_40951);

(statearr_40979_43149[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__40011__auto__ = null;
var cljs$core$async$reduce_$_state_machine__40011__auto____0 = (function (){
var statearr_40980 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40980[(0)] = cljs$core$async$reduce_$_state_machine__40011__auto__);

(statearr_40980[(1)] = (1));

return statearr_40980;
});
var cljs$core$async$reduce_$_state_machine__40011__auto____1 = (function (state_40961){
while(true){
var ret_value__40012__auto__ = (function (){try{while(true){
var result__40013__auto__ = switch__40010__auto__(state_40961);
if(cljs.core.keyword_identical_QMARK_(result__40013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40013__auto__;
}
break;
}
}catch (e40981){var ex__40014__auto__ = e40981;
var statearr_40982_43150 = state_40961;
(statearr_40982_43150[(2)] = ex__40014__auto__);


if(cljs.core.seq((state_40961[(4)]))){
var statearr_40983_43153 = state_40961;
(statearr_40983_43153[(1)] = cljs.core.first((state_40961[(4)])));

} else {
throw ex__40014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43154 = state_40961;
state_40961 = G__43154;
continue;
} else {
return ret_value__40012__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__40011__auto__ = function(state_40961){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__40011__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__40011__auto____1.call(this,state_40961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__40011__auto____0;
cljs$core$async$reduce_$_state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__40011__auto____1;
return cljs$core$async$reduce_$_state_machine__40011__auto__;
})()
})();
var state__40134__auto__ = (function (){var statearr_40984 = f__40133__auto__();
(statearr_40984[(6)] = c__40132__auto__);

return statearr_40984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40134__auto__);
}));

return c__40132__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__40132__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40133__auto__ = (function (){var switch__40010__auto__ = (function (state_40990){
var state_val_40991 = (state_40990[(1)]);
if((state_val_40991 === (1))){
var inst_40985 = cljs.core.async.reduce(f__$1,init,ch);
var state_40990__$1 = state_40990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40990__$1,(2),inst_40985);
} else {
if((state_val_40991 === (2))){
var inst_40987 = (state_40990[(2)]);
var inst_40988 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_40987) : f__$1.call(null, inst_40987));
var state_40990__$1 = state_40990;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40990__$1,inst_40988);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__40011__auto__ = null;
var cljs$core$async$transduce_$_state_machine__40011__auto____0 = (function (){
var statearr_40992 = [null,null,null,null,null,null,null];
(statearr_40992[(0)] = cljs$core$async$transduce_$_state_machine__40011__auto__);

(statearr_40992[(1)] = (1));

return statearr_40992;
});
var cljs$core$async$transduce_$_state_machine__40011__auto____1 = (function (state_40990){
while(true){
var ret_value__40012__auto__ = (function (){try{while(true){
var result__40013__auto__ = switch__40010__auto__(state_40990);
if(cljs.core.keyword_identical_QMARK_(result__40013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40013__auto__;
}
break;
}
}catch (e40993){var ex__40014__auto__ = e40993;
var statearr_40994_43163 = state_40990;
(statearr_40994_43163[(2)] = ex__40014__auto__);


if(cljs.core.seq((state_40990[(4)]))){
var statearr_40995_43164 = state_40990;
(statearr_40995_43164[(1)] = cljs.core.first((state_40990[(4)])));

} else {
throw ex__40014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43167 = state_40990;
state_40990 = G__43167;
continue;
} else {
return ret_value__40012__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__40011__auto__ = function(state_40990){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__40011__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__40011__auto____1.call(this,state_40990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__40011__auto____0;
cljs$core$async$transduce_$_state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__40011__auto____1;
return cljs$core$async$transduce_$_state_machine__40011__auto__;
})()
})();
var state__40134__auto__ = (function (){var statearr_40996 = f__40133__auto__();
(statearr_40996[(6)] = c__40132__auto__);

return statearr_40996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40134__auto__);
}));

return c__40132__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__40998 = arguments.length;
switch (G__40998) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__40132__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40133__auto__ = (function (){var switch__40010__auto__ = (function (state_41023){
var state_val_41024 = (state_41023[(1)]);
if((state_val_41024 === (7))){
var inst_41005 = (state_41023[(2)]);
var state_41023__$1 = state_41023;
var statearr_41028_43176 = state_41023__$1;
(statearr_41028_43176[(2)] = inst_41005);

(statearr_41028_43176[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41024 === (1))){
var inst_40999 = cljs.core.seq(coll);
var inst_41000 = inst_40999;
var state_41023__$1 = (function (){var statearr_41029 = state_41023;
(statearr_41029[(7)] = inst_41000);

return statearr_41029;
})();
var statearr_41031_43177 = state_41023__$1;
(statearr_41031_43177[(2)] = null);

(statearr_41031_43177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41024 === (4))){
var inst_41000 = (state_41023[(7)]);
var inst_41003 = cljs.core.first(inst_41000);
var state_41023__$1 = state_41023;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41023__$1,(7),ch,inst_41003);
} else {
if((state_val_41024 === (13))){
var inst_41017 = (state_41023[(2)]);
var state_41023__$1 = state_41023;
var statearr_41036_43193 = state_41023__$1;
(statearr_41036_43193[(2)] = inst_41017);

(statearr_41036_43193[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41024 === (6))){
var inst_41008 = (state_41023[(2)]);
var state_41023__$1 = state_41023;
if(cljs.core.truth_(inst_41008)){
var statearr_41037_43198 = state_41023__$1;
(statearr_41037_43198[(1)] = (8));

} else {
var statearr_41038_43199 = state_41023__$1;
(statearr_41038_43199[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41024 === (3))){
var inst_41021 = (state_41023[(2)]);
var state_41023__$1 = state_41023;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41023__$1,inst_41021);
} else {
if((state_val_41024 === (12))){
var state_41023__$1 = state_41023;
var statearr_41042_43204 = state_41023__$1;
(statearr_41042_43204[(2)] = null);

(statearr_41042_43204[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41024 === (2))){
var inst_41000 = (state_41023[(7)]);
var state_41023__$1 = state_41023;
if(cljs.core.truth_(inst_41000)){
var statearr_41044_43206 = state_41023__$1;
(statearr_41044_43206[(1)] = (4));

} else {
var statearr_41045_43209 = state_41023__$1;
(statearr_41045_43209[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41024 === (11))){
var inst_41014 = cljs.core.async.close_BANG_(ch);
var state_41023__$1 = state_41023;
var statearr_41049_43211 = state_41023__$1;
(statearr_41049_43211[(2)] = inst_41014);

(statearr_41049_43211[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41024 === (9))){
var state_41023__$1 = state_41023;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41050_43212 = state_41023__$1;
(statearr_41050_43212[(1)] = (11));

} else {
var statearr_41051_43214 = state_41023__$1;
(statearr_41051_43214[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41024 === (5))){
var inst_41000 = (state_41023[(7)]);
var state_41023__$1 = state_41023;
var statearr_41055_43216 = state_41023__$1;
(statearr_41055_43216[(2)] = inst_41000);

(statearr_41055_43216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41024 === (10))){
var inst_41019 = (state_41023[(2)]);
var state_41023__$1 = state_41023;
var statearr_41056_43217 = state_41023__$1;
(statearr_41056_43217[(2)] = inst_41019);

(statearr_41056_43217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41024 === (8))){
var inst_41000 = (state_41023[(7)]);
var inst_41010 = cljs.core.next(inst_41000);
var inst_41000__$1 = inst_41010;
var state_41023__$1 = (function (){var statearr_41057 = state_41023;
(statearr_41057[(7)] = inst_41000__$1);

return statearr_41057;
})();
var statearr_41058_43221 = state_41023__$1;
(statearr_41058_43221[(2)] = null);

(statearr_41058_43221[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__40011__auto__ = null;
var cljs$core$async$state_machine__40011__auto____0 = (function (){
var statearr_41062 = [null,null,null,null,null,null,null,null];
(statearr_41062[(0)] = cljs$core$async$state_machine__40011__auto__);

(statearr_41062[(1)] = (1));

return statearr_41062;
});
var cljs$core$async$state_machine__40011__auto____1 = (function (state_41023){
while(true){
var ret_value__40012__auto__ = (function (){try{while(true){
var result__40013__auto__ = switch__40010__auto__(state_41023);
if(cljs.core.keyword_identical_QMARK_(result__40013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40013__auto__;
}
break;
}
}catch (e41063){var ex__40014__auto__ = e41063;
var statearr_41064_43228 = state_41023;
(statearr_41064_43228[(2)] = ex__40014__auto__);


if(cljs.core.seq((state_41023[(4)]))){
var statearr_41065_43230 = state_41023;
(statearr_41065_43230[(1)] = cljs.core.first((state_41023[(4)])));

} else {
throw ex__40014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43234 = state_41023;
state_41023 = G__43234;
continue;
} else {
return ret_value__40012__auto__;
}
break;
}
});
cljs$core$async$state_machine__40011__auto__ = function(state_41023){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40011__auto____1.call(this,state_41023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40011__auto____0;
cljs$core$async$state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40011__auto____1;
return cljs$core$async$state_machine__40011__auto__;
})()
})();
var state__40134__auto__ = (function (){var statearr_41069 = f__40133__auto__();
(statearr_41069[(6)] = c__40132__auto__);

return statearr_41069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40134__auto__);
}));

return c__40132__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__41080 = arguments.length;
switch (G__41080) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_43247 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_43247(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_43256 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_43256(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_43265 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_43265(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_43275 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_43275(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41089 = (function (ch,cs,meta41090){
this.ch = ch;
this.cs = cs;
this.meta41090 = meta41090;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41091,meta41090__$1){
var self__ = this;
var _41091__$1 = this;
return (new cljs.core.async.t_cljs$core$async41089(self__.ch,self__.cs,meta41090__$1));
}));

(cljs.core.async.t_cljs$core$async41089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41091){
var self__ = this;
var _41091__$1 = this;
return self__.meta41090;
}));

(cljs.core.async.t_cljs$core$async41089.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41089.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async41089.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41089.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async41089.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async41089.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async41089.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta41090","meta41090",1926251962,null)], null);
}));

(cljs.core.async.t_cljs$core$async41089.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41089.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41089");

(cljs.core.async.t_cljs$core$async41089.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async41089");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41089.
 */
cljs.core.async.__GT_t_cljs$core$async41089 = (function cljs$core$async$__GT_t_cljs$core$async41089(ch,cs,meta41090){
return (new cljs.core.async.t_cljs$core$async41089(ch,cs,meta41090));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async41089(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__40132__auto___43291 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40133__auto__ = (function (){var switch__40010__auto__ = (function (state_41234){
var state_val_41235 = (state_41234[(1)]);
if((state_val_41235 === (7))){
var inst_41230 = (state_41234[(2)]);
var state_41234__$1 = state_41234;
var statearr_41239_43292 = state_41234__$1;
(statearr_41239_43292[(2)] = inst_41230);

(statearr_41239_43292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (20))){
var inst_41129 = (state_41234[(7)]);
var inst_41141 = cljs.core.first(inst_41129);
var inst_41142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41141,(0),null);
var inst_41143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41141,(1),null);
var state_41234__$1 = (function (){var statearr_41240 = state_41234;
(statearr_41240[(8)] = inst_41142);

return statearr_41240;
})();
if(cljs.core.truth_(inst_41143)){
var statearr_41241_43294 = state_41234__$1;
(statearr_41241_43294[(1)] = (22));

} else {
var statearr_41242_43295 = state_41234__$1;
(statearr_41242_43295[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (27))){
var inst_41176 = (state_41234[(9)]);
var inst_41181 = (state_41234[(10)]);
var inst_41098 = (state_41234[(11)]);
var inst_41174 = (state_41234[(12)]);
var inst_41181__$1 = cljs.core._nth(inst_41174,inst_41176);
var inst_41182 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41181__$1,inst_41098,done);
var state_41234__$1 = (function (){var statearr_41243 = state_41234;
(statearr_41243[(10)] = inst_41181__$1);

return statearr_41243;
})();
if(cljs.core.truth_(inst_41182)){
var statearr_41244_43308 = state_41234__$1;
(statearr_41244_43308[(1)] = (30));

} else {
var statearr_41245_43309 = state_41234__$1;
(statearr_41245_43309[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (1))){
var state_41234__$1 = state_41234;
var statearr_41247_43310 = state_41234__$1;
(statearr_41247_43310[(2)] = null);

(statearr_41247_43310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (24))){
var inst_41129 = (state_41234[(7)]);
var inst_41151 = (state_41234[(2)]);
var inst_41152 = cljs.core.next(inst_41129);
var inst_41107 = inst_41152;
var inst_41108 = null;
var inst_41109 = (0);
var inst_41110 = (0);
var state_41234__$1 = (function (){var statearr_41251 = state_41234;
(statearr_41251[(13)] = inst_41109);

(statearr_41251[(14)] = inst_41110);

(statearr_41251[(15)] = inst_41151);

(statearr_41251[(16)] = inst_41107);

(statearr_41251[(17)] = inst_41108);

return statearr_41251;
})();
var statearr_41252_43312 = state_41234__$1;
(statearr_41252_43312[(2)] = null);

(statearr_41252_43312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (39))){
var state_41234__$1 = state_41234;
var statearr_41258_43322 = state_41234__$1;
(statearr_41258_43322[(2)] = null);

(statearr_41258_43322[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (4))){
var inst_41098 = (state_41234[(11)]);
var inst_41098__$1 = (state_41234[(2)]);
var inst_41099 = (inst_41098__$1 == null);
var state_41234__$1 = (function (){var statearr_41262 = state_41234;
(statearr_41262[(11)] = inst_41098__$1);

return statearr_41262;
})();
if(cljs.core.truth_(inst_41099)){
var statearr_41263_43323 = state_41234__$1;
(statearr_41263_43323[(1)] = (5));

} else {
var statearr_41264_43324 = state_41234__$1;
(statearr_41264_43324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (15))){
var inst_41109 = (state_41234[(13)]);
var inst_41110 = (state_41234[(14)]);
var inst_41107 = (state_41234[(16)]);
var inst_41108 = (state_41234[(17)]);
var inst_41125 = (state_41234[(2)]);
var inst_41126 = (inst_41110 + (1));
var tmp41255 = inst_41109;
var tmp41256 = inst_41107;
var tmp41257 = inst_41108;
var inst_41107__$1 = tmp41256;
var inst_41108__$1 = tmp41257;
var inst_41109__$1 = tmp41255;
var inst_41110__$1 = inst_41126;
var state_41234__$1 = (function (){var statearr_41265 = state_41234;
(statearr_41265[(13)] = inst_41109__$1);

(statearr_41265[(14)] = inst_41110__$1);

(statearr_41265[(16)] = inst_41107__$1);

(statearr_41265[(18)] = inst_41125);

(statearr_41265[(17)] = inst_41108__$1);

return statearr_41265;
})();
var statearr_41269_43333 = state_41234__$1;
(statearr_41269_43333[(2)] = null);

(statearr_41269_43333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (21))){
var inst_41155 = (state_41234[(2)]);
var state_41234__$1 = state_41234;
var statearr_41273_43337 = state_41234__$1;
(statearr_41273_43337[(2)] = inst_41155);

(statearr_41273_43337[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (31))){
var inst_41181 = (state_41234[(10)]);
var inst_41185 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_41181);
var state_41234__$1 = state_41234;
var statearr_41277_43338 = state_41234__$1;
(statearr_41277_43338[(2)] = inst_41185);

(statearr_41277_43338[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (32))){
var inst_41175 = (state_41234[(19)]);
var inst_41176 = (state_41234[(9)]);
var inst_41173 = (state_41234[(20)]);
var inst_41174 = (state_41234[(12)]);
var inst_41187 = (state_41234[(2)]);
var inst_41188 = (inst_41176 + (1));
var tmp41270 = inst_41175;
var tmp41271 = inst_41173;
var tmp41272 = inst_41174;
var inst_41173__$1 = tmp41271;
var inst_41174__$1 = tmp41272;
var inst_41175__$1 = tmp41270;
var inst_41176__$1 = inst_41188;
var state_41234__$1 = (function (){var statearr_41284 = state_41234;
(statearr_41284[(19)] = inst_41175__$1);

(statearr_41284[(9)] = inst_41176__$1);

(statearr_41284[(20)] = inst_41173__$1);

(statearr_41284[(21)] = inst_41187);

(statearr_41284[(12)] = inst_41174__$1);

return statearr_41284;
})();
var statearr_41286_43346 = state_41234__$1;
(statearr_41286_43346[(2)] = null);

(statearr_41286_43346[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (40))){
var inst_41203 = (state_41234[(22)]);
var inst_41207 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_41203);
var state_41234__$1 = state_41234;
var statearr_41288_43347 = state_41234__$1;
(statearr_41288_43347[(2)] = inst_41207);

(statearr_41288_43347[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (33))){
var inst_41191 = (state_41234[(23)]);
var inst_41196 = cljs.core.chunked_seq_QMARK_(inst_41191);
var state_41234__$1 = state_41234;
if(inst_41196){
var statearr_41291_43349 = state_41234__$1;
(statearr_41291_43349[(1)] = (36));

} else {
var statearr_41292_43350 = state_41234__$1;
(statearr_41292_43350[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (13))){
var inst_41119 = (state_41234[(24)]);
var inst_41122 = cljs.core.async.close_BANG_(inst_41119);
var state_41234__$1 = state_41234;
var statearr_41293_43355 = state_41234__$1;
(statearr_41293_43355[(2)] = inst_41122);

(statearr_41293_43355[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (22))){
var inst_41142 = (state_41234[(8)]);
var inst_41148 = cljs.core.async.close_BANG_(inst_41142);
var state_41234__$1 = state_41234;
var statearr_41297_43356 = state_41234__$1;
(statearr_41297_43356[(2)] = inst_41148);

(statearr_41297_43356[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (36))){
var inst_41191 = (state_41234[(23)]);
var inst_41198 = cljs.core.chunk_first(inst_41191);
var inst_41199 = cljs.core.chunk_rest(inst_41191);
var inst_41200 = cljs.core.count(inst_41198);
var inst_41173 = inst_41199;
var inst_41174 = inst_41198;
var inst_41175 = inst_41200;
var inst_41176 = (0);
var state_41234__$1 = (function (){var statearr_41298 = state_41234;
(statearr_41298[(19)] = inst_41175);

(statearr_41298[(9)] = inst_41176);

(statearr_41298[(20)] = inst_41173);

(statearr_41298[(12)] = inst_41174);

return statearr_41298;
})();
var statearr_41299_43364 = state_41234__$1;
(statearr_41299_43364[(2)] = null);

(statearr_41299_43364[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (41))){
var inst_41191 = (state_41234[(23)]);
var inst_41209 = (state_41234[(2)]);
var inst_41210 = cljs.core.next(inst_41191);
var inst_41173 = inst_41210;
var inst_41174 = null;
var inst_41175 = (0);
var inst_41176 = (0);
var state_41234__$1 = (function (){var statearr_41300 = state_41234;
(statearr_41300[(19)] = inst_41175);

(statearr_41300[(9)] = inst_41176);

(statearr_41300[(25)] = inst_41209);

(statearr_41300[(20)] = inst_41173);

(statearr_41300[(12)] = inst_41174);

return statearr_41300;
})();
var statearr_41301_43370 = state_41234__$1;
(statearr_41301_43370[(2)] = null);

(statearr_41301_43370[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (43))){
var state_41234__$1 = state_41234;
var statearr_41302_43372 = state_41234__$1;
(statearr_41302_43372[(2)] = null);

(statearr_41302_43372[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (29))){
var inst_41218 = (state_41234[(2)]);
var state_41234__$1 = state_41234;
var statearr_41303_43373 = state_41234__$1;
(statearr_41303_43373[(2)] = inst_41218);

(statearr_41303_43373[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (44))){
var inst_41227 = (state_41234[(2)]);
var state_41234__$1 = (function (){var statearr_41304 = state_41234;
(statearr_41304[(26)] = inst_41227);

return statearr_41304;
})();
var statearr_41305_43376 = state_41234__$1;
(statearr_41305_43376[(2)] = null);

(statearr_41305_43376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (6))){
var inst_41165 = (state_41234[(27)]);
var inst_41164 = cljs.core.deref(cs);
var inst_41165__$1 = cljs.core.keys(inst_41164);
var inst_41166 = cljs.core.count(inst_41165__$1);
var inst_41167 = cljs.core.reset_BANG_(dctr,inst_41166);
var inst_41172 = cljs.core.seq(inst_41165__$1);
var inst_41173 = inst_41172;
var inst_41174 = null;
var inst_41175 = (0);
var inst_41176 = (0);
var state_41234__$1 = (function (){var statearr_41306 = state_41234;
(statearr_41306[(19)] = inst_41175);

(statearr_41306[(9)] = inst_41176);

(statearr_41306[(20)] = inst_41173);

(statearr_41306[(27)] = inst_41165__$1);

(statearr_41306[(12)] = inst_41174);

(statearr_41306[(28)] = inst_41167);

return statearr_41306;
})();
var statearr_41307_43382 = state_41234__$1;
(statearr_41307_43382[(2)] = null);

(statearr_41307_43382[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (28))){
var inst_41173 = (state_41234[(20)]);
var inst_41191 = (state_41234[(23)]);
var inst_41191__$1 = cljs.core.seq(inst_41173);
var state_41234__$1 = (function (){var statearr_41308 = state_41234;
(statearr_41308[(23)] = inst_41191__$1);

return statearr_41308;
})();
if(inst_41191__$1){
var statearr_41309_43383 = state_41234__$1;
(statearr_41309_43383[(1)] = (33));

} else {
var statearr_41310_43384 = state_41234__$1;
(statearr_41310_43384[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (25))){
var inst_41175 = (state_41234[(19)]);
var inst_41176 = (state_41234[(9)]);
var inst_41178 = (inst_41176 < inst_41175);
var inst_41179 = inst_41178;
var state_41234__$1 = state_41234;
if(cljs.core.truth_(inst_41179)){
var statearr_41311_43385 = state_41234__$1;
(statearr_41311_43385[(1)] = (27));

} else {
var statearr_41312_43387 = state_41234__$1;
(statearr_41312_43387[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (34))){
var state_41234__$1 = state_41234;
var statearr_41313_43389 = state_41234__$1;
(statearr_41313_43389[(2)] = null);

(statearr_41313_43389[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (17))){
var state_41234__$1 = state_41234;
var statearr_41314_43396 = state_41234__$1;
(statearr_41314_43396[(2)] = null);

(statearr_41314_43396[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (3))){
var inst_41232 = (state_41234[(2)]);
var state_41234__$1 = state_41234;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41234__$1,inst_41232);
} else {
if((state_val_41235 === (12))){
var inst_41160 = (state_41234[(2)]);
var state_41234__$1 = state_41234;
var statearr_41315_43397 = state_41234__$1;
(statearr_41315_43397[(2)] = inst_41160);

(statearr_41315_43397[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (2))){
var state_41234__$1 = state_41234;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41234__$1,(4),ch);
} else {
if((state_val_41235 === (23))){
var state_41234__$1 = state_41234;
var statearr_41316_43398 = state_41234__$1;
(statearr_41316_43398[(2)] = null);

(statearr_41316_43398[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (35))){
var inst_41216 = (state_41234[(2)]);
var state_41234__$1 = state_41234;
var statearr_41317_43401 = state_41234__$1;
(statearr_41317_43401[(2)] = inst_41216);

(statearr_41317_43401[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (19))){
var inst_41129 = (state_41234[(7)]);
var inst_41133 = cljs.core.chunk_first(inst_41129);
var inst_41134 = cljs.core.chunk_rest(inst_41129);
var inst_41135 = cljs.core.count(inst_41133);
var inst_41107 = inst_41134;
var inst_41108 = inst_41133;
var inst_41109 = inst_41135;
var inst_41110 = (0);
var state_41234__$1 = (function (){var statearr_41318 = state_41234;
(statearr_41318[(13)] = inst_41109);

(statearr_41318[(14)] = inst_41110);

(statearr_41318[(16)] = inst_41107);

(statearr_41318[(17)] = inst_41108);

return statearr_41318;
})();
var statearr_41319_43402 = state_41234__$1;
(statearr_41319_43402[(2)] = null);

(statearr_41319_43402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (11))){
var inst_41129 = (state_41234[(7)]);
var inst_41107 = (state_41234[(16)]);
var inst_41129__$1 = cljs.core.seq(inst_41107);
var state_41234__$1 = (function (){var statearr_41323 = state_41234;
(statearr_41323[(7)] = inst_41129__$1);

return statearr_41323;
})();
if(inst_41129__$1){
var statearr_41324_43406 = state_41234__$1;
(statearr_41324_43406[(1)] = (16));

} else {
var statearr_41325_43407 = state_41234__$1;
(statearr_41325_43407[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (9))){
var inst_41162 = (state_41234[(2)]);
var state_41234__$1 = state_41234;
var statearr_41326_43408 = state_41234__$1;
(statearr_41326_43408[(2)] = inst_41162);

(statearr_41326_43408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (5))){
var inst_41105 = cljs.core.deref(cs);
var inst_41106 = cljs.core.seq(inst_41105);
var inst_41107 = inst_41106;
var inst_41108 = null;
var inst_41109 = (0);
var inst_41110 = (0);
var state_41234__$1 = (function (){var statearr_41327 = state_41234;
(statearr_41327[(13)] = inst_41109);

(statearr_41327[(14)] = inst_41110);

(statearr_41327[(16)] = inst_41107);

(statearr_41327[(17)] = inst_41108);

return statearr_41327;
})();
var statearr_41328_43423 = state_41234__$1;
(statearr_41328_43423[(2)] = null);

(statearr_41328_43423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (14))){
var state_41234__$1 = state_41234;
var statearr_41329_43428 = state_41234__$1;
(statearr_41329_43428[(2)] = null);

(statearr_41329_43428[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (45))){
var inst_41224 = (state_41234[(2)]);
var state_41234__$1 = state_41234;
var statearr_41330_43429 = state_41234__$1;
(statearr_41330_43429[(2)] = inst_41224);

(statearr_41330_43429[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (26))){
var inst_41165 = (state_41234[(27)]);
var inst_41220 = (state_41234[(2)]);
var inst_41221 = cljs.core.seq(inst_41165);
var state_41234__$1 = (function (){var statearr_41331 = state_41234;
(statearr_41331[(29)] = inst_41220);

return statearr_41331;
})();
if(inst_41221){
var statearr_41332_43431 = state_41234__$1;
(statearr_41332_43431[(1)] = (42));

} else {
var statearr_41333_43433 = state_41234__$1;
(statearr_41333_43433[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (16))){
var inst_41129 = (state_41234[(7)]);
var inst_41131 = cljs.core.chunked_seq_QMARK_(inst_41129);
var state_41234__$1 = state_41234;
if(inst_41131){
var statearr_41337_43435 = state_41234__$1;
(statearr_41337_43435[(1)] = (19));

} else {
var statearr_41338_43436 = state_41234__$1;
(statearr_41338_43436[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (38))){
var inst_41213 = (state_41234[(2)]);
var state_41234__$1 = state_41234;
var statearr_41339_43438 = state_41234__$1;
(statearr_41339_43438[(2)] = inst_41213);

(statearr_41339_43438[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (30))){
var state_41234__$1 = state_41234;
var statearr_41340_43442 = state_41234__$1;
(statearr_41340_43442[(2)] = null);

(statearr_41340_43442[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (10))){
var inst_41110 = (state_41234[(14)]);
var inst_41108 = (state_41234[(17)]);
var inst_41118 = cljs.core._nth(inst_41108,inst_41110);
var inst_41119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41118,(0),null);
var inst_41120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41118,(1),null);
var state_41234__$1 = (function (){var statearr_41341 = state_41234;
(statearr_41341[(24)] = inst_41119);

return statearr_41341;
})();
if(cljs.core.truth_(inst_41120)){
var statearr_41342_43446 = state_41234__$1;
(statearr_41342_43446[(1)] = (13));

} else {
var statearr_41343_43448 = state_41234__$1;
(statearr_41343_43448[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (18))){
var inst_41158 = (state_41234[(2)]);
var state_41234__$1 = state_41234;
var statearr_41344_43450 = state_41234__$1;
(statearr_41344_43450[(2)] = inst_41158);

(statearr_41344_43450[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (42))){
var state_41234__$1 = state_41234;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41234__$1,(45),dchan);
} else {
if((state_val_41235 === (37))){
var inst_41098 = (state_41234[(11)]);
var inst_41203 = (state_41234[(22)]);
var inst_41191 = (state_41234[(23)]);
var inst_41203__$1 = cljs.core.first(inst_41191);
var inst_41204 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41203__$1,inst_41098,done);
var state_41234__$1 = (function (){var statearr_41345 = state_41234;
(statearr_41345[(22)] = inst_41203__$1);

return statearr_41345;
})();
if(cljs.core.truth_(inst_41204)){
var statearr_41346_43454 = state_41234__$1;
(statearr_41346_43454[(1)] = (39));

} else {
var statearr_41347_43455 = state_41234__$1;
(statearr_41347_43455[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41235 === (8))){
var inst_41109 = (state_41234[(13)]);
var inst_41110 = (state_41234[(14)]);
var inst_41112 = (inst_41110 < inst_41109);
var inst_41113 = inst_41112;
var state_41234__$1 = state_41234;
if(cljs.core.truth_(inst_41113)){
var statearr_41348_43457 = state_41234__$1;
(statearr_41348_43457[(1)] = (10));

} else {
var statearr_41349_43458 = state_41234__$1;
(statearr_41349_43458[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__40011__auto__ = null;
var cljs$core$async$mult_$_state_machine__40011__auto____0 = (function (){
var statearr_41350 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41350[(0)] = cljs$core$async$mult_$_state_machine__40011__auto__);

(statearr_41350[(1)] = (1));

return statearr_41350;
});
var cljs$core$async$mult_$_state_machine__40011__auto____1 = (function (state_41234){
while(true){
var ret_value__40012__auto__ = (function (){try{while(true){
var result__40013__auto__ = switch__40010__auto__(state_41234);
if(cljs.core.keyword_identical_QMARK_(result__40013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40013__auto__;
}
break;
}
}catch (e41351){var ex__40014__auto__ = e41351;
var statearr_41352_43466 = state_41234;
(statearr_41352_43466[(2)] = ex__40014__auto__);


if(cljs.core.seq((state_41234[(4)]))){
var statearr_41353_43467 = state_41234;
(statearr_41353_43467[(1)] = cljs.core.first((state_41234[(4)])));

} else {
throw ex__40014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43471 = state_41234;
state_41234 = G__43471;
continue;
} else {
return ret_value__40012__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__40011__auto__ = function(state_41234){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__40011__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__40011__auto____1.call(this,state_41234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__40011__auto____0;
cljs$core$async$mult_$_state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__40011__auto____1;
return cljs$core$async$mult_$_state_machine__40011__auto__;
})()
})();
var state__40134__auto__ = (function (){var statearr_41357 = f__40133__auto__();
(statearr_41357[(6)] = c__40132__auto___43291);

return statearr_41357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40134__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__41361 = arguments.length;
switch (G__41361) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_43482 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_43482(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_43483 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_43483(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_43501 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_43501(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_43503 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_43503(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_43504 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_43504(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___43508 = arguments.length;
var i__5727__auto___43509 = (0);
while(true){
if((i__5727__auto___43509 < len__5726__auto___43508)){
args__5732__auto__.push((arguments[i__5727__auto___43509]));

var G__43511 = (i__5727__auto___43509 + (1));
i__5727__auto___43509 = G__43511;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__41408){
var map__41409 = p__41408;
var map__41409__$1 = cljs.core.__destructure_map(map__41409);
var opts = map__41409__$1;
var statearr_41410_43512 = state;
(statearr_41410_43512[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_41411_43513 = state;
(statearr_41411_43513[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_41412_43514 = state;
(statearr_41412_43514[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq41404){
var G__41405 = cljs.core.first(seq41404);
var seq41404__$1 = cljs.core.next(seq41404);
var G__41406 = cljs.core.first(seq41404__$1);
var seq41404__$2 = cljs.core.next(seq41404__$1);
var G__41407 = cljs.core.first(seq41404__$2);
var seq41404__$3 = cljs.core.next(seq41404__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41405,G__41406,G__41407,seq41404__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41439 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta41440){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta41440 = meta41440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41441,meta41440__$1){
var self__ = this;
var _41441__$1 = this;
return (new cljs.core.async.t_cljs$core$async41439(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta41440__$1));
}));

(cljs.core.async.t_cljs$core$async41439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41441){
var self__ = this;
var _41441__$1 = this;
return self__.meta41440;
}));

(cljs.core.async.t_cljs$core$async41439.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41439.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async41439.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41439.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async41439.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async41439.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async41439.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async41439.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async41439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta41440","meta41440",-1945547634,null)], null);
}));

(cljs.core.async.t_cljs$core$async41439.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41439");

(cljs.core.async.t_cljs$core$async41439.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async41439");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41439.
 */
cljs.core.async.__GT_t_cljs$core$async41439 = (function cljs$core$async$__GT_t_cljs$core$async41439(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta41440){
return (new cljs.core.async.t_cljs$core$async41439(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta41440));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async41439(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__40132__auto___43530 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40133__auto__ = (function (){var switch__40010__auto__ = (function (state_41536){
var state_val_41537 = (state_41536[(1)]);
if((state_val_41537 === (7))){
var inst_41487 = (state_41536[(2)]);
var state_41536__$1 = state_41536;
if(cljs.core.truth_(inst_41487)){
var statearr_41557_43531 = state_41536__$1;
(statearr_41557_43531[(1)] = (8));

} else {
var statearr_41562_43532 = state_41536__$1;
(statearr_41562_43532[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41537 === (20))){
var inst_41476 = (state_41536[(7)]);
var state_41536__$1 = state_41536;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41536__$1,(23),out,inst_41476);
} else {
if((state_val_41537 === (1))){
var inst_41458 = calc_state();
var inst_41459 = cljs.core.__destructure_map(inst_41458);
var inst_41460 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41459,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41461 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41459,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41462 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41459,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_41463 = inst_41458;
var state_41536__$1 = (function (){var statearr_41568 = state_41536;
(statearr_41568[(8)] = inst_41463);

(statearr_41568[(9)] = inst_41461);

(statearr_41568[(10)] = inst_41462);

(statearr_41568[(11)] = inst_41460);

return statearr_41568;
})();
var statearr_41569_43533 = state_41536__$1;
(statearr_41569_43533[(2)] = null);

(statearr_41569_43533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41537 === (24))){
var inst_41466 = (state_41536[(12)]);
var inst_41463 = inst_41466;
var state_41536__$1 = (function (){var statearr_41570 = state_41536;
(statearr_41570[(8)] = inst_41463);

return statearr_41570;
})();
var statearr_41571_43534 = state_41536__$1;
(statearr_41571_43534[(2)] = null);

(statearr_41571_43534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41537 === (4))){
var inst_41476 = (state_41536[(7)]);
var inst_41478 = (state_41536[(13)]);
var inst_41474 = (state_41536[(2)]);
var inst_41476__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41474,(0),null);
var inst_41477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41474,(1),null);
var inst_41478__$1 = (inst_41476__$1 == null);
var state_41536__$1 = (function (){var statearr_41572 = state_41536;
(statearr_41572[(7)] = inst_41476__$1);

(statearr_41572[(13)] = inst_41478__$1);

(statearr_41572[(14)] = inst_41477);

return statearr_41572;
})();
if(cljs.core.truth_(inst_41478__$1)){
var statearr_41573_43541 = state_41536__$1;
(statearr_41573_43541[(1)] = (5));

} else {
var statearr_41574_43542 = state_41536__$1;
(statearr_41574_43542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41537 === (15))){
var inst_41467 = (state_41536[(15)]);
var inst_41505 = (state_41536[(16)]);
var inst_41505__$1 = cljs.core.empty_QMARK_(inst_41467);
var state_41536__$1 = (function (){var statearr_41575 = state_41536;
(statearr_41575[(16)] = inst_41505__$1);

return statearr_41575;
})();
if(inst_41505__$1){
var statearr_41577_43543 = state_41536__$1;
(statearr_41577_43543[(1)] = (17));

} else {
var statearr_41578_43544 = state_41536__$1;
(statearr_41578_43544[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41537 === (21))){
var inst_41466 = (state_41536[(12)]);
var inst_41463 = inst_41466;
var state_41536__$1 = (function (){var statearr_41579 = state_41536;
(statearr_41579[(8)] = inst_41463);

return statearr_41579;
})();
var statearr_41580_43549 = state_41536__$1;
(statearr_41580_43549[(2)] = null);

(statearr_41580_43549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41537 === (13))){
var inst_41494 = (state_41536[(2)]);
var inst_41495 = calc_state();
var inst_41463 = inst_41495;
var state_41536__$1 = (function (){var statearr_41590 = state_41536;
(statearr_41590[(8)] = inst_41463);

(statearr_41590[(17)] = inst_41494);

return statearr_41590;
})();
var statearr_41595_43550 = state_41536__$1;
(statearr_41595_43550[(2)] = null);

(statearr_41595_43550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41537 === (22))){
var inst_41525 = (state_41536[(2)]);
var state_41536__$1 = state_41536;
var statearr_41606_43555 = state_41536__$1;
(statearr_41606_43555[(2)] = inst_41525);

(statearr_41606_43555[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41537 === (6))){
var inst_41477 = (state_41536[(14)]);
var inst_41485 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41477,change);
var state_41536__$1 = state_41536;
var statearr_41607_43557 = state_41536__$1;
(statearr_41607_43557[(2)] = inst_41485);

(statearr_41607_43557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41537 === (25))){
var state_41536__$1 = state_41536;
var statearr_41608_43560 = state_41536__$1;
(statearr_41608_43560[(2)] = null);

(statearr_41608_43560[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41537 === (17))){
var inst_41468 = (state_41536[(18)]);
var inst_41477 = (state_41536[(14)]);
var inst_41507 = (inst_41468.cljs$core$IFn$_invoke$arity$1 ? inst_41468.cljs$core$IFn$_invoke$arity$1(inst_41477) : inst_41468.call(null, inst_41477));
var inst_41508 = cljs.core.not(inst_41507);
var state_41536__$1 = state_41536;
var statearr_41619_43564 = state_41536__$1;
(statearr_41619_43564[(2)] = inst_41508);

(statearr_41619_43564[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41537 === (3))){
var inst_41534 = (state_41536[(2)]);
var state_41536__$1 = state_41536;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41536__$1,inst_41534);
} else {
if((state_val_41537 === (12))){
var state_41536__$1 = state_41536;
var statearr_41637_43567 = state_41536__$1;
(statearr_41637_43567[(2)] = null);

(statearr_41637_43567[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41537 === (2))){
var inst_41466 = (state_41536[(12)]);
var inst_41463 = (state_41536[(8)]);
var inst_41466__$1 = cljs.core.__destructure_map(inst_41463);
var inst_41467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41466__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41466__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41466__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_41536__$1 = (function (){var statearr_41643 = state_41536;
(statearr_41643[(12)] = inst_41466__$1);

(statearr_41643[(18)] = inst_41468);

(statearr_41643[(15)] = inst_41467);

return statearr_41643;
})();
return cljs.core.async.ioc_alts_BANG_(state_41536__$1,(4),inst_41469);
} else {
if((state_val_41537 === (23))){
var inst_41516 = (state_41536[(2)]);
var state_41536__$1 = state_41536;
if(cljs.core.truth_(inst_41516)){
var statearr_41654_43576 = state_41536__$1;
(statearr_41654_43576[(1)] = (24));

} else {
var statearr_41656_43578 = state_41536__$1;
(statearr_41656_43578[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41537 === (19))){
var inst_41511 = (state_41536[(2)]);
var state_41536__$1 = state_41536;
var statearr_41661_43580 = state_41536__$1;
(statearr_41661_43580[(2)] = inst_41511);

(statearr_41661_43580[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41537 === (11))){
var inst_41477 = (state_41536[(14)]);
var inst_41491 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_41477);
var state_41536__$1 = state_41536;
var statearr_41662_43581 = state_41536__$1;
(statearr_41662_43581[(2)] = inst_41491);

(statearr_41662_43581[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41537 === (9))){
var inst_41502 = (state_41536[(19)]);
var inst_41467 = (state_41536[(15)]);
var inst_41477 = (state_41536[(14)]);
var inst_41502__$1 = (inst_41467.cljs$core$IFn$_invoke$arity$1 ? inst_41467.cljs$core$IFn$_invoke$arity$1(inst_41477) : inst_41467.call(null, inst_41477));
var state_41536__$1 = (function (){var statearr_41670 = state_41536;
(statearr_41670[(19)] = inst_41502__$1);

return statearr_41670;
})();
if(cljs.core.truth_(inst_41502__$1)){
var statearr_41671_43583 = state_41536__$1;
(statearr_41671_43583[(1)] = (14));

} else {
var statearr_41676_43584 = state_41536__$1;
(statearr_41676_43584[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41537 === (5))){
var inst_41478 = (state_41536[(13)]);
var state_41536__$1 = state_41536;
var statearr_41677_43587 = state_41536__$1;
(statearr_41677_43587[(2)] = inst_41478);

(statearr_41677_43587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41537 === (14))){
var inst_41502 = (state_41536[(19)]);
var state_41536__$1 = state_41536;
var statearr_41679_43589 = state_41536__$1;
(statearr_41679_43589[(2)] = inst_41502);

(statearr_41679_43589[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41537 === (26))){
var inst_41521 = (state_41536[(2)]);
var state_41536__$1 = state_41536;
var statearr_41680_43591 = state_41536__$1;
(statearr_41680_43591[(2)] = inst_41521);

(statearr_41680_43591[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41537 === (16))){
var inst_41513 = (state_41536[(2)]);
var state_41536__$1 = state_41536;
if(cljs.core.truth_(inst_41513)){
var statearr_41687_43594 = state_41536__$1;
(statearr_41687_43594[(1)] = (20));

} else {
var statearr_41688_43595 = state_41536__$1;
(statearr_41688_43595[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41537 === (10))){
var inst_41527 = (state_41536[(2)]);
var state_41536__$1 = state_41536;
var statearr_41689_43597 = state_41536__$1;
(statearr_41689_43597[(2)] = inst_41527);

(statearr_41689_43597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41537 === (18))){
var inst_41505 = (state_41536[(16)]);
var state_41536__$1 = state_41536;
var statearr_41691_43599 = state_41536__$1;
(statearr_41691_43599[(2)] = inst_41505);

(statearr_41691_43599[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41537 === (8))){
var inst_41476 = (state_41536[(7)]);
var inst_41489 = (inst_41476 == null);
var state_41536__$1 = state_41536;
if(cljs.core.truth_(inst_41489)){
var statearr_41692_43604 = state_41536__$1;
(statearr_41692_43604[(1)] = (11));

} else {
var statearr_41693_43605 = state_41536__$1;
(statearr_41693_43605[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__40011__auto__ = null;
var cljs$core$async$mix_$_state_machine__40011__auto____0 = (function (){
var statearr_41698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41698[(0)] = cljs$core$async$mix_$_state_machine__40011__auto__);

(statearr_41698[(1)] = (1));

return statearr_41698;
});
var cljs$core$async$mix_$_state_machine__40011__auto____1 = (function (state_41536){
while(true){
var ret_value__40012__auto__ = (function (){try{while(true){
var result__40013__auto__ = switch__40010__auto__(state_41536);
if(cljs.core.keyword_identical_QMARK_(result__40013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40013__auto__;
}
break;
}
}catch (e41699){var ex__40014__auto__ = e41699;
var statearr_41700_43615 = state_41536;
(statearr_41700_43615[(2)] = ex__40014__auto__);


if(cljs.core.seq((state_41536[(4)]))){
var statearr_41701_43616 = state_41536;
(statearr_41701_43616[(1)] = cljs.core.first((state_41536[(4)])));

} else {
throw ex__40014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43619 = state_41536;
state_41536 = G__43619;
continue;
} else {
return ret_value__40012__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__40011__auto__ = function(state_41536){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__40011__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__40011__auto____1.call(this,state_41536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__40011__auto____0;
cljs$core$async$mix_$_state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__40011__auto____1;
return cljs$core$async$mix_$_state_machine__40011__auto__;
})()
})();
var state__40134__auto__ = (function (){var statearr_41703 = f__40133__auto__();
(statearr_41703[(6)] = c__40132__auto___43530);

return statearr_41703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40134__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_43622 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_43622(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_43624 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_43624(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_43627 = (function() {
var G__43628 = null;
var G__43628__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__43628__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__43628 = function(p,v){
switch(arguments.length){
case 1:
return G__43628__1.call(this,p);
case 2:
return G__43628__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43628.cljs$core$IFn$_invoke$arity$1 = G__43628__1;
G__43628.cljs$core$IFn$_invoke$arity$2 = G__43628__2;
return G__43628;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__41734 = arguments.length;
switch (G__41734) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_43627(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_43627(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41753 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta41754){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta41754 = meta41754;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41755,meta41754__$1){
var self__ = this;
var _41755__$1 = this;
return (new cljs.core.async.t_cljs$core$async41753(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta41754__$1));
}));

(cljs.core.async.t_cljs$core$async41753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41755){
var self__ = this;
var _41755__$1 = this;
return self__.meta41754;
}));

(cljs.core.async.t_cljs$core$async41753.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41753.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async41753.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41753.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async41753.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async41753.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async41753.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async41753.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta41754","meta41754",-1743088420,null)], null);
}));

(cljs.core.async.t_cljs$core$async41753.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41753.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41753");

(cljs.core.async.t_cljs$core$async41753.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async41753");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41753.
 */
cljs.core.async.__GT_t_cljs$core$async41753 = (function cljs$core$async$__GT_t_cljs$core$async41753(ch,topic_fn,buf_fn,mults,ensure_mult,meta41754){
return (new cljs.core.async.t_cljs$core$async41753(ch,topic_fn,buf_fn,mults,ensure_mult,meta41754));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__41746 = arguments.length;
switch (G__41746) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__41741_SHARP_){
if(cljs.core.truth_((p1__41741_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__41741_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__41741_SHARP_.call(null, topic)))){
return p1__41741_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__41741_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async41753(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__40132__auto___43651 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40133__auto__ = (function (){var switch__40010__auto__ = (function (state_41867){
var state_val_41868 = (state_41867[(1)]);
if((state_val_41868 === (7))){
var inst_41863 = (state_41867[(2)]);
var state_41867__$1 = state_41867;
var statearr_41876_43654 = state_41867__$1;
(statearr_41876_43654[(2)] = inst_41863);

(statearr_41876_43654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41868 === (20))){
var state_41867__$1 = state_41867;
var statearr_41879_43656 = state_41867__$1;
(statearr_41879_43656[(2)] = null);

(statearr_41879_43656[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41868 === (1))){
var state_41867__$1 = state_41867;
var statearr_41884_43657 = state_41867__$1;
(statearr_41884_43657[(2)] = null);

(statearr_41884_43657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41868 === (24))){
var inst_41841 = (state_41867[(7)]);
var inst_41852 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_41841);
var state_41867__$1 = state_41867;
var statearr_41885_43658 = state_41867__$1;
(statearr_41885_43658[(2)] = inst_41852);

(statearr_41885_43658[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41868 === (4))){
var inst_41784 = (state_41867[(8)]);
var inst_41784__$1 = (state_41867[(2)]);
var inst_41785 = (inst_41784__$1 == null);
var state_41867__$1 = (function (){var statearr_41889 = state_41867;
(statearr_41889[(8)] = inst_41784__$1);

return statearr_41889;
})();
if(cljs.core.truth_(inst_41785)){
var statearr_41892_43661 = state_41867__$1;
(statearr_41892_43661[(1)] = (5));

} else {
var statearr_41893_43662 = state_41867__$1;
(statearr_41893_43662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41868 === (15))){
var inst_41835 = (state_41867[(2)]);
var state_41867__$1 = state_41867;
var statearr_41894_43663 = state_41867__$1;
(statearr_41894_43663[(2)] = inst_41835);

(statearr_41894_43663[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41868 === (21))){
var inst_41857 = (state_41867[(2)]);
var state_41867__$1 = (function (){var statearr_41895 = state_41867;
(statearr_41895[(9)] = inst_41857);

return statearr_41895;
})();
var statearr_41903_43667 = state_41867__$1;
(statearr_41903_43667[(2)] = null);

(statearr_41903_43667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41868 === (13))){
var inst_41813 = (state_41867[(10)]);
var inst_41815 = cljs.core.chunked_seq_QMARK_(inst_41813);
var state_41867__$1 = state_41867;
if(inst_41815){
var statearr_41905_43668 = state_41867__$1;
(statearr_41905_43668[(1)] = (16));

} else {
var statearr_41906_43669 = state_41867__$1;
(statearr_41906_43669[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41868 === (22))){
var inst_41848 = (state_41867[(2)]);
var state_41867__$1 = state_41867;
if(cljs.core.truth_(inst_41848)){
var statearr_41909_43671 = state_41867__$1;
(statearr_41909_43671[(1)] = (23));

} else {
var statearr_41910_43673 = state_41867__$1;
(statearr_41910_43673[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41868 === (6))){
var inst_41841 = (state_41867[(7)]);
var inst_41784 = (state_41867[(8)]);
var inst_41843 = (state_41867[(11)]);
var inst_41841__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_41784) : topic_fn.call(null, inst_41784));
var inst_41842 = cljs.core.deref(mults);
var inst_41843__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41842,inst_41841__$1);
var state_41867__$1 = (function (){var statearr_41916 = state_41867;
(statearr_41916[(7)] = inst_41841__$1);

(statearr_41916[(11)] = inst_41843__$1);

return statearr_41916;
})();
if(cljs.core.truth_(inst_41843__$1)){
var statearr_41917_43676 = state_41867__$1;
(statearr_41917_43676[(1)] = (19));

} else {
var statearr_41918_43677 = state_41867__$1;
(statearr_41918_43677[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41868 === (25))){
var inst_41854 = (state_41867[(2)]);
var state_41867__$1 = state_41867;
var statearr_41921_43678 = state_41867__$1;
(statearr_41921_43678[(2)] = inst_41854);

(statearr_41921_43678[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41868 === (17))){
var inst_41813 = (state_41867[(10)]);
var inst_41826 = cljs.core.first(inst_41813);
var inst_41827 = cljs.core.async.muxch_STAR_(inst_41826);
var inst_41828 = cljs.core.async.close_BANG_(inst_41827);
var inst_41829 = cljs.core.next(inst_41813);
var inst_41797 = inst_41829;
var inst_41798 = null;
var inst_41799 = (0);
var inst_41800 = (0);
var state_41867__$1 = (function (){var statearr_41922 = state_41867;
(statearr_41922[(12)] = inst_41828);

(statearr_41922[(13)] = inst_41800);

(statearr_41922[(14)] = inst_41797);

(statearr_41922[(15)] = inst_41798);

(statearr_41922[(16)] = inst_41799);

return statearr_41922;
})();
var statearr_41923_43685 = state_41867__$1;
(statearr_41923_43685[(2)] = null);

(statearr_41923_43685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41868 === (3))){
var inst_41865 = (state_41867[(2)]);
var state_41867__$1 = state_41867;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41867__$1,inst_41865);
} else {
if((state_val_41868 === (12))){
var inst_41837 = (state_41867[(2)]);
var state_41867__$1 = state_41867;
var statearr_41927_43687 = state_41867__$1;
(statearr_41927_43687[(2)] = inst_41837);

(statearr_41927_43687[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41868 === (2))){
var state_41867__$1 = state_41867;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41867__$1,(4),ch);
} else {
if((state_val_41868 === (23))){
var state_41867__$1 = state_41867;
var statearr_41928_43688 = state_41867__$1;
(statearr_41928_43688[(2)] = null);

(statearr_41928_43688[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41868 === (19))){
var inst_41784 = (state_41867[(8)]);
var inst_41843 = (state_41867[(11)]);
var inst_41846 = cljs.core.async.muxch_STAR_(inst_41843);
var state_41867__$1 = state_41867;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41867__$1,(22),inst_41846,inst_41784);
} else {
if((state_val_41868 === (11))){
var inst_41813 = (state_41867[(10)]);
var inst_41797 = (state_41867[(14)]);
var inst_41813__$1 = cljs.core.seq(inst_41797);
var state_41867__$1 = (function (){var statearr_41929 = state_41867;
(statearr_41929[(10)] = inst_41813__$1);

return statearr_41929;
})();
if(inst_41813__$1){
var statearr_41930_43689 = state_41867__$1;
(statearr_41930_43689[(1)] = (13));

} else {
var statearr_41931_43690 = state_41867__$1;
(statearr_41931_43690[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41868 === (9))){
var inst_41839 = (state_41867[(2)]);
var state_41867__$1 = state_41867;
var statearr_41932_43691 = state_41867__$1;
(statearr_41932_43691[(2)] = inst_41839);

(statearr_41932_43691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41868 === (5))){
var inst_41791 = cljs.core.deref(mults);
var inst_41792 = cljs.core.vals(inst_41791);
var inst_41793 = cljs.core.seq(inst_41792);
var inst_41797 = inst_41793;
var inst_41798 = null;
var inst_41799 = (0);
var inst_41800 = (0);
var state_41867__$1 = (function (){var statearr_41936 = state_41867;
(statearr_41936[(13)] = inst_41800);

(statearr_41936[(14)] = inst_41797);

(statearr_41936[(15)] = inst_41798);

(statearr_41936[(16)] = inst_41799);

return statearr_41936;
})();
var statearr_41937_43692 = state_41867__$1;
(statearr_41937_43692[(2)] = null);

(statearr_41937_43692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41868 === (14))){
var state_41867__$1 = state_41867;
var statearr_41943_43693 = state_41867__$1;
(statearr_41943_43693[(2)] = null);

(statearr_41943_43693[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41868 === (16))){
var inst_41813 = (state_41867[(10)]);
var inst_41819 = cljs.core.chunk_first(inst_41813);
var inst_41822 = cljs.core.chunk_rest(inst_41813);
var inst_41823 = cljs.core.count(inst_41819);
var inst_41797 = inst_41822;
var inst_41798 = inst_41819;
var inst_41799 = inst_41823;
var inst_41800 = (0);
var state_41867__$1 = (function (){var statearr_41944 = state_41867;
(statearr_41944[(13)] = inst_41800);

(statearr_41944[(14)] = inst_41797);

(statearr_41944[(15)] = inst_41798);

(statearr_41944[(16)] = inst_41799);

return statearr_41944;
})();
var statearr_41946_43698 = state_41867__$1;
(statearr_41946_43698[(2)] = null);

(statearr_41946_43698[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41868 === (10))){
var inst_41800 = (state_41867[(13)]);
var inst_41797 = (state_41867[(14)]);
var inst_41798 = (state_41867[(15)]);
var inst_41799 = (state_41867[(16)]);
var inst_41805 = cljs.core._nth(inst_41798,inst_41800);
var inst_41806 = cljs.core.async.muxch_STAR_(inst_41805);
var inst_41807 = cljs.core.async.close_BANG_(inst_41806);
var inst_41808 = (inst_41800 + (1));
var tmp41939 = inst_41797;
var tmp41940 = inst_41798;
var tmp41941 = inst_41799;
var inst_41797__$1 = tmp41939;
var inst_41798__$1 = tmp41940;
var inst_41799__$1 = tmp41941;
var inst_41800__$1 = inst_41808;
var state_41867__$1 = (function (){var statearr_41950 = state_41867;
(statearr_41950[(17)] = inst_41807);

(statearr_41950[(13)] = inst_41800__$1);

(statearr_41950[(14)] = inst_41797__$1);

(statearr_41950[(15)] = inst_41798__$1);

(statearr_41950[(16)] = inst_41799__$1);

return statearr_41950;
})();
var statearr_41952_43700 = state_41867__$1;
(statearr_41952_43700[(2)] = null);

(statearr_41952_43700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41868 === (18))){
var inst_41832 = (state_41867[(2)]);
var state_41867__$1 = state_41867;
var statearr_41953_43701 = state_41867__$1;
(statearr_41953_43701[(2)] = inst_41832);

(statearr_41953_43701[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41868 === (8))){
var inst_41800 = (state_41867[(13)]);
var inst_41799 = (state_41867[(16)]);
var inst_41802 = (inst_41800 < inst_41799);
var inst_41803 = inst_41802;
var state_41867__$1 = state_41867;
if(cljs.core.truth_(inst_41803)){
var statearr_41954_43702 = state_41867__$1;
(statearr_41954_43702[(1)] = (10));

} else {
var statearr_41958_43703 = state_41867__$1;
(statearr_41958_43703[(1)] = (11));

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
var cljs$core$async$state_machine__40011__auto__ = null;
var cljs$core$async$state_machine__40011__auto____0 = (function (){
var statearr_41962 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41962[(0)] = cljs$core$async$state_machine__40011__auto__);

(statearr_41962[(1)] = (1));

return statearr_41962;
});
var cljs$core$async$state_machine__40011__auto____1 = (function (state_41867){
while(true){
var ret_value__40012__auto__ = (function (){try{while(true){
var result__40013__auto__ = switch__40010__auto__(state_41867);
if(cljs.core.keyword_identical_QMARK_(result__40013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40013__auto__;
}
break;
}
}catch (e41963){var ex__40014__auto__ = e41963;
var statearr_41964_43709 = state_41867;
(statearr_41964_43709[(2)] = ex__40014__auto__);


if(cljs.core.seq((state_41867[(4)]))){
var statearr_41965_43711 = state_41867;
(statearr_41965_43711[(1)] = cljs.core.first((state_41867[(4)])));

} else {
throw ex__40014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43712 = state_41867;
state_41867 = G__43712;
continue;
} else {
return ret_value__40012__auto__;
}
break;
}
});
cljs$core$async$state_machine__40011__auto__ = function(state_41867){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40011__auto____1.call(this,state_41867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40011__auto____0;
cljs$core$async$state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40011__auto____1;
return cljs$core$async$state_machine__40011__auto__;
})()
})();
var state__40134__auto__ = (function (){var statearr_41969 = f__40133__auto__();
(statearr_41969[(6)] = c__40132__auto___43651);

return statearr_41969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40134__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__41977 = arguments.length;
switch (G__41977) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__41983 = arguments.length;
switch (G__41983) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__41986 = arguments.length;
switch (G__41986) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__40132__auto___43726 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40133__auto__ = (function (){var switch__40010__auto__ = (function (state_42045){
var state_val_42046 = (state_42045[(1)]);
if((state_val_42046 === (7))){
var state_42045__$1 = state_42045;
var statearr_42058_43727 = state_42045__$1;
(statearr_42058_43727[(2)] = null);

(statearr_42058_43727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (1))){
var state_42045__$1 = state_42045;
var statearr_42059_43731 = state_42045__$1;
(statearr_42059_43731[(2)] = null);

(statearr_42059_43731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (4))){
var inst_42000 = (state_42045[(7)]);
var inst_41999 = (state_42045[(8)]);
var inst_42002 = (inst_42000 < inst_41999);
var state_42045__$1 = state_42045;
if(cljs.core.truth_(inst_42002)){
var statearr_42064_43736 = state_42045__$1;
(statearr_42064_43736[(1)] = (6));

} else {
var statearr_42073_43737 = state_42045__$1;
(statearr_42073_43737[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (15))){
var inst_42031 = (state_42045[(9)]);
var inst_42036 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_42031);
var state_42045__$1 = state_42045;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42045__$1,(17),out,inst_42036);
} else {
if((state_val_42046 === (13))){
var inst_42031 = (state_42045[(9)]);
var inst_42031__$1 = (state_42045[(2)]);
var inst_42032 = cljs.core.some(cljs.core.nil_QMARK_,inst_42031__$1);
var state_42045__$1 = (function (){var statearr_42074 = state_42045;
(statearr_42074[(9)] = inst_42031__$1);

return statearr_42074;
})();
if(cljs.core.truth_(inst_42032)){
var statearr_42077_43738 = state_42045__$1;
(statearr_42077_43738[(1)] = (14));

} else {
var statearr_42078_43739 = state_42045__$1;
(statearr_42078_43739[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (6))){
var state_42045__$1 = state_42045;
var statearr_42079_43740 = state_42045__$1;
(statearr_42079_43740[(2)] = null);

(statearr_42079_43740[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (17))){
var inst_42038 = (state_42045[(2)]);
var state_42045__$1 = (function (){var statearr_42085 = state_42045;
(statearr_42085[(10)] = inst_42038);

return statearr_42085;
})();
var statearr_42086_43741 = state_42045__$1;
(statearr_42086_43741[(2)] = null);

(statearr_42086_43741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (3))){
var inst_42043 = (state_42045[(2)]);
var state_42045__$1 = state_42045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42045__$1,inst_42043);
} else {
if((state_val_42046 === (12))){
var _ = (function (){var statearr_42089 = state_42045;
(statearr_42089[(4)] = cljs.core.rest((state_42045[(4)])));

return statearr_42089;
})();
var state_42045__$1 = state_42045;
var ex42082 = (state_42045__$1[(2)]);
var statearr_42090_43742 = state_42045__$1;
(statearr_42090_43742[(5)] = ex42082);


if((ex42082 instanceof Object)){
var statearr_42092_43743 = state_42045__$1;
(statearr_42092_43743[(1)] = (11));

(statearr_42092_43743[(5)] = null);

} else {
throw ex42082;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (2))){
var inst_41998 = cljs.core.reset_BANG_(dctr,cnt);
var inst_41999 = cnt;
var inst_42000 = (0);
var state_42045__$1 = (function (){var statearr_42094 = state_42045;
(statearr_42094[(7)] = inst_42000);

(statearr_42094[(8)] = inst_41999);

(statearr_42094[(11)] = inst_41998);

return statearr_42094;
})();
var statearr_42099_43744 = state_42045__$1;
(statearr_42099_43744[(2)] = null);

(statearr_42099_43744[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (11))){
var inst_42009 = (state_42045[(2)]);
var inst_42011 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_42045__$1 = (function (){var statearr_42100 = state_42045;
(statearr_42100[(12)] = inst_42009);

return statearr_42100;
})();
var statearr_42102_43745 = state_42045__$1;
(statearr_42102_43745[(2)] = inst_42011);

(statearr_42102_43745[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (9))){
var inst_42000 = (state_42045[(7)]);
var _ = (function (){var statearr_42106 = state_42045;
(statearr_42106[(4)] = cljs.core.cons((12),(state_42045[(4)])));

return statearr_42106;
})();
var inst_42017 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_42000) : chs__$1.call(null, inst_42000));
var inst_42018 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_42000) : done.call(null, inst_42000));
var inst_42019 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_42017,inst_42018);
var ___$1 = (function (){var statearr_42107 = state_42045;
(statearr_42107[(4)] = cljs.core.rest((state_42045[(4)])));

return statearr_42107;
})();
var state_42045__$1 = state_42045;
var statearr_42109_43746 = state_42045__$1;
(statearr_42109_43746[(2)] = inst_42019);

(statearr_42109_43746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (5))){
var inst_42029 = (state_42045[(2)]);
var state_42045__$1 = (function (){var statearr_42112 = state_42045;
(statearr_42112[(13)] = inst_42029);

return statearr_42112;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42045__$1,(13),dchan);
} else {
if((state_val_42046 === (14))){
var inst_42034 = cljs.core.async.close_BANG_(out);
var state_42045__$1 = state_42045;
var statearr_42115_43747 = state_42045__$1;
(statearr_42115_43747[(2)] = inst_42034);

(statearr_42115_43747[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (16))){
var inst_42041 = (state_42045[(2)]);
var state_42045__$1 = state_42045;
var statearr_42117_43748 = state_42045__$1;
(statearr_42117_43748[(2)] = inst_42041);

(statearr_42117_43748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (10))){
var inst_42000 = (state_42045[(7)]);
var inst_42022 = (state_42045[(2)]);
var inst_42023 = (inst_42000 + (1));
var inst_42000__$1 = inst_42023;
var state_42045__$1 = (function (){var statearr_42118 = state_42045;
(statearr_42118[(14)] = inst_42022);

(statearr_42118[(7)] = inst_42000__$1);

return statearr_42118;
})();
var statearr_42119_43751 = state_42045__$1;
(statearr_42119_43751[(2)] = null);

(statearr_42119_43751[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (8))){
var inst_42027 = (state_42045[(2)]);
var state_42045__$1 = state_42045;
var statearr_42121_43754 = state_42045__$1;
(statearr_42121_43754[(2)] = inst_42027);

(statearr_42121_43754[(1)] = (5));


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
var cljs$core$async$state_machine__40011__auto__ = null;
var cljs$core$async$state_machine__40011__auto____0 = (function (){
var statearr_42123 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42123[(0)] = cljs$core$async$state_machine__40011__auto__);

(statearr_42123[(1)] = (1));

return statearr_42123;
});
var cljs$core$async$state_machine__40011__auto____1 = (function (state_42045){
while(true){
var ret_value__40012__auto__ = (function (){try{while(true){
var result__40013__auto__ = switch__40010__auto__(state_42045);
if(cljs.core.keyword_identical_QMARK_(result__40013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40013__auto__;
}
break;
}
}catch (e42126){var ex__40014__auto__ = e42126;
var statearr_42127_43755 = state_42045;
(statearr_42127_43755[(2)] = ex__40014__auto__);


if(cljs.core.seq((state_42045[(4)]))){
var statearr_42131_43756 = state_42045;
(statearr_42131_43756[(1)] = cljs.core.first((state_42045[(4)])));

} else {
throw ex__40014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43757 = state_42045;
state_42045 = G__43757;
continue;
} else {
return ret_value__40012__auto__;
}
break;
}
});
cljs$core$async$state_machine__40011__auto__ = function(state_42045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40011__auto____1.call(this,state_42045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40011__auto____0;
cljs$core$async$state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40011__auto____1;
return cljs$core$async$state_machine__40011__auto__;
})()
})();
var state__40134__auto__ = (function (){var statearr_42132 = f__40133__auto__();
(statearr_42132[(6)] = c__40132__auto___43726);

return statearr_42132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40134__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__42135 = arguments.length;
switch (G__42135) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__40132__auto___43759 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40133__auto__ = (function (){var switch__40010__auto__ = (function (state_42171){
var state_val_42172 = (state_42171[(1)]);
if((state_val_42172 === (7))){
var inst_42149 = (state_42171[(7)]);
var inst_42151 = (state_42171[(8)]);
var inst_42149__$1 = (state_42171[(2)]);
var inst_42151__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42149__$1,(0),null);
var inst_42152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42149__$1,(1),null);
var inst_42153 = (inst_42151__$1 == null);
var state_42171__$1 = (function (){var statearr_42180 = state_42171;
(statearr_42180[(9)] = inst_42152);

(statearr_42180[(7)] = inst_42149__$1);

(statearr_42180[(8)] = inst_42151__$1);

return statearr_42180;
})();
if(cljs.core.truth_(inst_42153)){
var statearr_42181_43762 = state_42171__$1;
(statearr_42181_43762[(1)] = (8));

} else {
var statearr_42182_43763 = state_42171__$1;
(statearr_42182_43763[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42172 === (1))){
var inst_42138 = cljs.core.vec(chs);
var inst_42140 = inst_42138;
var state_42171__$1 = (function (){var statearr_42189 = state_42171;
(statearr_42189[(10)] = inst_42140);

return statearr_42189;
})();
var statearr_42190_43764 = state_42171__$1;
(statearr_42190_43764[(2)] = null);

(statearr_42190_43764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42172 === (4))){
var inst_42140 = (state_42171[(10)]);
var state_42171__$1 = state_42171;
return cljs.core.async.ioc_alts_BANG_(state_42171__$1,(7),inst_42140);
} else {
if((state_val_42172 === (6))){
var inst_42167 = (state_42171[(2)]);
var state_42171__$1 = state_42171;
var statearr_42192_43766 = state_42171__$1;
(statearr_42192_43766[(2)] = inst_42167);

(statearr_42192_43766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42172 === (3))){
var inst_42169 = (state_42171[(2)]);
var state_42171__$1 = state_42171;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42171__$1,inst_42169);
} else {
if((state_val_42172 === (2))){
var inst_42140 = (state_42171[(10)]);
var inst_42142 = cljs.core.count(inst_42140);
var inst_42143 = (inst_42142 > (0));
var state_42171__$1 = state_42171;
if(cljs.core.truth_(inst_42143)){
var statearr_42194_43768 = state_42171__$1;
(statearr_42194_43768[(1)] = (4));

} else {
var statearr_42195_43769 = state_42171__$1;
(statearr_42195_43769[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42172 === (11))){
var inst_42140 = (state_42171[(10)]);
var inst_42160 = (state_42171[(2)]);
var tmp42193 = inst_42140;
var inst_42140__$1 = tmp42193;
var state_42171__$1 = (function (){var statearr_42196 = state_42171;
(statearr_42196[(10)] = inst_42140__$1);

(statearr_42196[(11)] = inst_42160);

return statearr_42196;
})();
var statearr_42197_43774 = state_42171__$1;
(statearr_42197_43774[(2)] = null);

(statearr_42197_43774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42172 === (9))){
var inst_42151 = (state_42171[(8)]);
var state_42171__$1 = state_42171;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42171__$1,(11),out,inst_42151);
} else {
if((state_val_42172 === (5))){
var inst_42165 = cljs.core.async.close_BANG_(out);
var state_42171__$1 = state_42171;
var statearr_42204_43775 = state_42171__$1;
(statearr_42204_43775[(2)] = inst_42165);

(statearr_42204_43775[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42172 === (10))){
var inst_42163 = (state_42171[(2)]);
var state_42171__$1 = state_42171;
var statearr_42205_43780 = state_42171__$1;
(statearr_42205_43780[(2)] = inst_42163);

(statearr_42205_43780[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42172 === (8))){
var inst_42140 = (state_42171[(10)]);
var inst_42152 = (state_42171[(9)]);
var inst_42149 = (state_42171[(7)]);
var inst_42151 = (state_42171[(8)]);
var inst_42155 = (function (){var cs = inst_42140;
var vec__42145 = inst_42149;
var v = inst_42151;
var c = inst_42152;
return (function (p1__42133_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__42133_SHARP_);
});
})();
var inst_42156 = cljs.core.filterv(inst_42155,inst_42140);
var inst_42140__$1 = inst_42156;
var state_42171__$1 = (function (){var statearr_42206 = state_42171;
(statearr_42206[(10)] = inst_42140__$1);

return statearr_42206;
})();
var statearr_42209_43782 = state_42171__$1;
(statearr_42209_43782[(2)] = null);

(statearr_42209_43782[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__40011__auto__ = null;
var cljs$core$async$state_machine__40011__auto____0 = (function (){
var statearr_42212 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42212[(0)] = cljs$core$async$state_machine__40011__auto__);

(statearr_42212[(1)] = (1));

return statearr_42212;
});
var cljs$core$async$state_machine__40011__auto____1 = (function (state_42171){
while(true){
var ret_value__40012__auto__ = (function (){try{while(true){
var result__40013__auto__ = switch__40010__auto__(state_42171);
if(cljs.core.keyword_identical_QMARK_(result__40013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40013__auto__;
}
break;
}
}catch (e42213){var ex__40014__auto__ = e42213;
var statearr_42214_43783 = state_42171;
(statearr_42214_43783[(2)] = ex__40014__auto__);


if(cljs.core.seq((state_42171[(4)]))){
var statearr_42219_43785 = state_42171;
(statearr_42219_43785[(1)] = cljs.core.first((state_42171[(4)])));

} else {
throw ex__40014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43787 = state_42171;
state_42171 = G__43787;
continue;
} else {
return ret_value__40012__auto__;
}
break;
}
});
cljs$core$async$state_machine__40011__auto__ = function(state_42171){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40011__auto____1.call(this,state_42171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40011__auto____0;
cljs$core$async$state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40011__auto____1;
return cljs$core$async$state_machine__40011__auto__;
})()
})();
var state__40134__auto__ = (function (){var statearr_42221 = f__40133__auto__();
(statearr_42221[(6)] = c__40132__auto___43759);

return statearr_42221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40134__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__42230 = arguments.length;
switch (G__42230) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__40132__auto___43793 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40133__auto__ = (function (){var switch__40010__auto__ = (function (state_42264){
var state_val_42265 = (state_42264[(1)]);
if((state_val_42265 === (7))){
var inst_42243 = (state_42264[(7)]);
var inst_42243__$1 = (state_42264[(2)]);
var inst_42247 = (inst_42243__$1 == null);
var inst_42248 = cljs.core.not(inst_42247);
var state_42264__$1 = (function (){var statearr_42269 = state_42264;
(statearr_42269[(7)] = inst_42243__$1);

return statearr_42269;
})();
if(inst_42248){
var statearr_42273_43795 = state_42264__$1;
(statearr_42273_43795[(1)] = (8));

} else {
var statearr_42274_43796 = state_42264__$1;
(statearr_42274_43796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42265 === (1))){
var inst_42238 = (0);
var state_42264__$1 = (function (){var statearr_42275 = state_42264;
(statearr_42275[(8)] = inst_42238);

return statearr_42275;
})();
var statearr_42276_43798 = state_42264__$1;
(statearr_42276_43798[(2)] = null);

(statearr_42276_43798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42265 === (4))){
var state_42264__$1 = state_42264;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42264__$1,(7),ch);
} else {
if((state_val_42265 === (6))){
var inst_42259 = (state_42264[(2)]);
var state_42264__$1 = state_42264;
var statearr_42277_43803 = state_42264__$1;
(statearr_42277_43803[(2)] = inst_42259);

(statearr_42277_43803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42265 === (3))){
var inst_42261 = (state_42264[(2)]);
var inst_42262 = cljs.core.async.close_BANG_(out);
var state_42264__$1 = (function (){var statearr_42278 = state_42264;
(statearr_42278[(9)] = inst_42261);

return statearr_42278;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42264__$1,inst_42262);
} else {
if((state_val_42265 === (2))){
var inst_42238 = (state_42264[(8)]);
var inst_42240 = (inst_42238 < n);
var state_42264__$1 = state_42264;
if(cljs.core.truth_(inst_42240)){
var statearr_42281_43804 = state_42264__$1;
(statearr_42281_43804[(1)] = (4));

} else {
var statearr_42282_43805 = state_42264__$1;
(statearr_42282_43805[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42265 === (11))){
var inst_42238 = (state_42264[(8)]);
var inst_42251 = (state_42264[(2)]);
var inst_42252 = (inst_42238 + (1));
var inst_42238__$1 = inst_42252;
var state_42264__$1 = (function (){var statearr_42285 = state_42264;
(statearr_42285[(10)] = inst_42251);

(statearr_42285[(8)] = inst_42238__$1);

return statearr_42285;
})();
var statearr_42286_43806 = state_42264__$1;
(statearr_42286_43806[(2)] = null);

(statearr_42286_43806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42265 === (9))){
var state_42264__$1 = state_42264;
var statearr_42287_43809 = state_42264__$1;
(statearr_42287_43809[(2)] = null);

(statearr_42287_43809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42265 === (5))){
var state_42264__$1 = state_42264;
var statearr_42288_43810 = state_42264__$1;
(statearr_42288_43810[(2)] = null);

(statearr_42288_43810[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42265 === (10))){
var inst_42256 = (state_42264[(2)]);
var state_42264__$1 = state_42264;
var statearr_42289_43811 = state_42264__$1;
(statearr_42289_43811[(2)] = inst_42256);

(statearr_42289_43811[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42265 === (8))){
var inst_42243 = (state_42264[(7)]);
var state_42264__$1 = state_42264;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42264__$1,(11),out,inst_42243);
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
});
return (function() {
var cljs$core$async$state_machine__40011__auto__ = null;
var cljs$core$async$state_machine__40011__auto____0 = (function (){
var statearr_42290 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42290[(0)] = cljs$core$async$state_machine__40011__auto__);

(statearr_42290[(1)] = (1));

return statearr_42290;
});
var cljs$core$async$state_machine__40011__auto____1 = (function (state_42264){
while(true){
var ret_value__40012__auto__ = (function (){try{while(true){
var result__40013__auto__ = switch__40010__auto__(state_42264);
if(cljs.core.keyword_identical_QMARK_(result__40013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40013__auto__;
}
break;
}
}catch (e42291){var ex__40014__auto__ = e42291;
var statearr_42292_43814 = state_42264;
(statearr_42292_43814[(2)] = ex__40014__auto__);


if(cljs.core.seq((state_42264[(4)]))){
var statearr_42293_43815 = state_42264;
(statearr_42293_43815[(1)] = cljs.core.first((state_42264[(4)])));

} else {
throw ex__40014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43816 = state_42264;
state_42264 = G__43816;
continue;
} else {
return ret_value__40012__auto__;
}
break;
}
});
cljs$core$async$state_machine__40011__auto__ = function(state_42264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40011__auto____1.call(this,state_42264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40011__auto____0;
cljs$core$async$state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40011__auto____1;
return cljs$core$async$state_machine__40011__auto__;
})()
})();
var state__40134__auto__ = (function (){var statearr_42294 = f__40133__auto__();
(statearr_42294[(6)] = c__40132__auto___43793);

return statearr_42294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40134__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42312 = (function (f,ch,meta42310,_,fn1,meta42313){
this.f = f;
this.ch = ch;
this.meta42310 = meta42310;
this._ = _;
this.fn1 = fn1;
this.meta42313 = meta42313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42314,meta42313__$1){
var self__ = this;
var _42314__$1 = this;
return (new cljs.core.async.t_cljs$core$async42312(self__.f,self__.ch,self__.meta42310,self__._,self__.fn1,meta42313__$1));
}));

(cljs.core.async.t_cljs$core$async42312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42314){
var self__ = this;
var _42314__$1 = this;
return self__.meta42313;
}));

(cljs.core.async.t_cljs$core$async42312.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42312.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async42312.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42312.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__42304_SHARP_){
var G__42315 = (((p1__42304_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__42304_SHARP_) : self__.f.call(null, p1__42304_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__42315) : f1.call(null, G__42315));
});
}));

(cljs.core.async.t_cljs$core$async42312.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42310","meta42310",44135116,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async42309","cljs.core.async/t_cljs$core$async42309",853355511,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta42313","meta42313",-1405040911,null)], null);
}));

(cljs.core.async.t_cljs$core$async42312.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42312.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42312");

(cljs.core.async.t_cljs$core$async42312.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async42312");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42312.
 */
cljs.core.async.__GT_t_cljs$core$async42312 = (function cljs$core$async$__GT_t_cljs$core$async42312(f,ch,meta42310,_,fn1,meta42313){
return (new cljs.core.async.t_cljs$core$async42312(f,ch,meta42310,_,fn1,meta42313));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42309 = (function (f,ch,meta42310){
this.f = f;
this.ch = ch;
this.meta42310 = meta42310;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42311,meta42310__$1){
var self__ = this;
var _42311__$1 = this;
return (new cljs.core.async.t_cljs$core$async42309(self__.f,self__.ch,meta42310__$1));
}));

(cljs.core.async.t_cljs$core$async42309.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42311){
var self__ = this;
var _42311__$1 = this;
return self__.meta42310;
}));

(cljs.core.async.t_cljs$core$async42309.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42309.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42309.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42309.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42309.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async42312(self__.f,self__.ch,self__.meta42310,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__42316 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__42316) : self__.f.call(null, G__42316));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async42309.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42309.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async42309.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42310","meta42310",44135116,null)], null);
}));

(cljs.core.async.t_cljs$core$async42309.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42309.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42309");

(cljs.core.async.t_cljs$core$async42309.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async42309");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42309.
 */
cljs.core.async.__GT_t_cljs$core$async42309 = (function cljs$core$async$__GT_t_cljs$core$async42309(f,ch,meta42310){
return (new cljs.core.async.t_cljs$core$async42309(f,ch,meta42310));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async42309(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42319 = (function (f,ch,meta42320){
this.f = f;
this.ch = ch;
this.meta42320 = meta42320;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42321,meta42320__$1){
var self__ = this;
var _42321__$1 = this;
return (new cljs.core.async.t_cljs$core$async42319(self__.f,self__.ch,meta42320__$1));
}));

(cljs.core.async.t_cljs$core$async42319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42321){
var self__ = this;
var _42321__$1 = this;
return self__.meta42320;
}));

(cljs.core.async.t_cljs$core$async42319.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42319.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42319.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42319.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async42319.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42319.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async42319.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42320","meta42320",1021864394,null)], null);
}));

(cljs.core.async.t_cljs$core$async42319.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42319.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42319");

(cljs.core.async.t_cljs$core$async42319.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async42319");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42319.
 */
cljs.core.async.__GT_t_cljs$core$async42319 = (function cljs$core$async$__GT_t_cljs$core$async42319(f,ch,meta42320){
return (new cljs.core.async.t_cljs$core$async42319(f,ch,meta42320));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async42319(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42329 = (function (p,ch,meta42330){
this.p = p;
this.ch = ch;
this.meta42330 = meta42330;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42331,meta42330__$1){
var self__ = this;
var _42331__$1 = this;
return (new cljs.core.async.t_cljs$core$async42329(self__.p,self__.ch,meta42330__$1));
}));

(cljs.core.async.t_cljs$core$async42329.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42331){
var self__ = this;
var _42331__$1 = this;
return self__.meta42330;
}));

(cljs.core.async.t_cljs$core$async42329.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42329.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42329.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42329.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42329.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async42329.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42329.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async42329.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42330","meta42330",490539027,null)], null);
}));

(cljs.core.async.t_cljs$core$async42329.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42329.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42329");

(cljs.core.async.t_cljs$core$async42329.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async42329");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42329.
 */
cljs.core.async.__GT_t_cljs$core$async42329 = (function cljs$core$async$__GT_t_cljs$core$async42329(p,ch,meta42330){
return (new cljs.core.async.t_cljs$core$async42329(p,ch,meta42330));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async42329(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__42338 = arguments.length;
switch (G__42338) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__40132__auto___43836 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40133__auto__ = (function (){var switch__40010__auto__ = (function (state_42363){
var state_val_42364 = (state_42363[(1)]);
if((state_val_42364 === (7))){
var inst_42357 = (state_42363[(2)]);
var state_42363__$1 = state_42363;
var statearr_42369_43838 = state_42363__$1;
(statearr_42369_43838[(2)] = inst_42357);

(statearr_42369_43838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42364 === (1))){
var state_42363__$1 = state_42363;
var statearr_42374_43839 = state_42363__$1;
(statearr_42374_43839[(2)] = null);

(statearr_42374_43839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42364 === (4))){
var inst_42341 = (state_42363[(7)]);
var inst_42341__$1 = (state_42363[(2)]);
var inst_42342 = (inst_42341__$1 == null);
var state_42363__$1 = (function (){var statearr_42376 = state_42363;
(statearr_42376[(7)] = inst_42341__$1);

return statearr_42376;
})();
if(cljs.core.truth_(inst_42342)){
var statearr_42377_43840 = state_42363__$1;
(statearr_42377_43840[(1)] = (5));

} else {
var statearr_42379_43841 = state_42363__$1;
(statearr_42379_43841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42364 === (6))){
var inst_42341 = (state_42363[(7)]);
var inst_42346 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_42341) : p.call(null, inst_42341));
var state_42363__$1 = state_42363;
if(cljs.core.truth_(inst_42346)){
var statearr_42381_43842 = state_42363__$1;
(statearr_42381_43842[(1)] = (8));

} else {
var statearr_42382_43843 = state_42363__$1;
(statearr_42382_43843[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42364 === (3))){
var inst_42360 = (state_42363[(2)]);
var state_42363__$1 = state_42363;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42363__$1,inst_42360);
} else {
if((state_val_42364 === (2))){
var state_42363__$1 = state_42363;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42363__$1,(4),ch);
} else {
if((state_val_42364 === (11))){
var inst_42351 = (state_42363[(2)]);
var state_42363__$1 = state_42363;
var statearr_42383_43845 = state_42363__$1;
(statearr_42383_43845[(2)] = inst_42351);

(statearr_42383_43845[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42364 === (9))){
var state_42363__$1 = state_42363;
var statearr_42384_43846 = state_42363__$1;
(statearr_42384_43846[(2)] = null);

(statearr_42384_43846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42364 === (5))){
var inst_42344 = cljs.core.async.close_BANG_(out);
var state_42363__$1 = state_42363;
var statearr_42389_43847 = state_42363__$1;
(statearr_42389_43847[(2)] = inst_42344);

(statearr_42389_43847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42364 === (10))){
var inst_42354 = (state_42363[(2)]);
var state_42363__$1 = (function (){var statearr_42391 = state_42363;
(statearr_42391[(8)] = inst_42354);

return statearr_42391;
})();
var statearr_42392_43848 = state_42363__$1;
(statearr_42392_43848[(2)] = null);

(statearr_42392_43848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42364 === (8))){
var inst_42341 = (state_42363[(7)]);
var state_42363__$1 = state_42363;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42363__$1,(11),out,inst_42341);
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
});
return (function() {
var cljs$core$async$state_machine__40011__auto__ = null;
var cljs$core$async$state_machine__40011__auto____0 = (function (){
var statearr_42396 = [null,null,null,null,null,null,null,null,null];
(statearr_42396[(0)] = cljs$core$async$state_machine__40011__auto__);

(statearr_42396[(1)] = (1));

return statearr_42396;
});
var cljs$core$async$state_machine__40011__auto____1 = (function (state_42363){
while(true){
var ret_value__40012__auto__ = (function (){try{while(true){
var result__40013__auto__ = switch__40010__auto__(state_42363);
if(cljs.core.keyword_identical_QMARK_(result__40013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40013__auto__;
}
break;
}
}catch (e42397){var ex__40014__auto__ = e42397;
var statearr_42398_43853 = state_42363;
(statearr_42398_43853[(2)] = ex__40014__auto__);


if(cljs.core.seq((state_42363[(4)]))){
var statearr_42399_43858 = state_42363;
(statearr_42399_43858[(1)] = cljs.core.first((state_42363[(4)])));

} else {
throw ex__40014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43863 = state_42363;
state_42363 = G__43863;
continue;
} else {
return ret_value__40012__auto__;
}
break;
}
});
cljs$core$async$state_machine__40011__auto__ = function(state_42363){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40011__auto____1.call(this,state_42363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40011__auto____0;
cljs$core$async$state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40011__auto____1;
return cljs$core$async$state_machine__40011__auto__;
})()
})();
var state__40134__auto__ = (function (){var statearr_42402 = f__40133__auto__();
(statearr_42402[(6)] = c__40132__auto___43836);

return statearr_42402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40134__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__42404 = arguments.length;
switch (G__42404) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__40132__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40133__auto__ = (function (){var switch__40010__auto__ = (function (state_42469){
var state_val_42470 = (state_42469[(1)]);
if((state_val_42470 === (7))){
var inst_42465 = (state_42469[(2)]);
var state_42469__$1 = state_42469;
var statearr_42471_43868 = state_42469__$1;
(statearr_42471_43868[(2)] = inst_42465);

(statearr_42471_43868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42470 === (20))){
var inst_42433 = (state_42469[(7)]);
var inst_42446 = (state_42469[(2)]);
var inst_42447 = cljs.core.next(inst_42433);
var inst_42419 = inst_42447;
var inst_42420 = null;
var inst_42421 = (0);
var inst_42422 = (0);
var state_42469__$1 = (function (){var statearr_42472 = state_42469;
(statearr_42472[(8)] = inst_42419);

(statearr_42472[(9)] = inst_42422);

(statearr_42472[(10)] = inst_42421);

(statearr_42472[(11)] = inst_42420);

(statearr_42472[(12)] = inst_42446);

return statearr_42472;
})();
var statearr_42473_43872 = state_42469__$1;
(statearr_42473_43872[(2)] = null);

(statearr_42473_43872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42470 === (1))){
var state_42469__$1 = state_42469;
var statearr_42474_43873 = state_42469__$1;
(statearr_42474_43873[(2)] = null);

(statearr_42474_43873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42470 === (4))){
var inst_42408 = (state_42469[(13)]);
var inst_42408__$1 = (state_42469[(2)]);
var inst_42409 = (inst_42408__$1 == null);
var state_42469__$1 = (function (){var statearr_42475 = state_42469;
(statearr_42475[(13)] = inst_42408__$1);

return statearr_42475;
})();
if(cljs.core.truth_(inst_42409)){
var statearr_42476_43874 = state_42469__$1;
(statearr_42476_43874[(1)] = (5));

} else {
var statearr_42477_43875 = state_42469__$1;
(statearr_42477_43875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42470 === (15))){
var state_42469__$1 = state_42469;
var statearr_42482_43876 = state_42469__$1;
(statearr_42482_43876[(2)] = null);

(statearr_42482_43876[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42470 === (21))){
var state_42469__$1 = state_42469;
var statearr_42484_43877 = state_42469__$1;
(statearr_42484_43877[(2)] = null);

(statearr_42484_43877[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42470 === (13))){
var inst_42419 = (state_42469[(8)]);
var inst_42422 = (state_42469[(9)]);
var inst_42421 = (state_42469[(10)]);
var inst_42420 = (state_42469[(11)]);
var inst_42429 = (state_42469[(2)]);
var inst_42430 = (inst_42422 + (1));
var tmp42478 = inst_42419;
var tmp42479 = inst_42421;
var tmp42480 = inst_42420;
var inst_42419__$1 = tmp42478;
var inst_42420__$1 = tmp42480;
var inst_42421__$1 = tmp42479;
var inst_42422__$1 = inst_42430;
var state_42469__$1 = (function (){var statearr_42485 = state_42469;
(statearr_42485[(8)] = inst_42419__$1);

(statearr_42485[(9)] = inst_42422__$1);

(statearr_42485[(10)] = inst_42421__$1);

(statearr_42485[(11)] = inst_42420__$1);

(statearr_42485[(14)] = inst_42429);

return statearr_42485;
})();
var statearr_42486_43884 = state_42469__$1;
(statearr_42486_43884[(2)] = null);

(statearr_42486_43884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42470 === (22))){
var state_42469__$1 = state_42469;
var statearr_42487_43885 = state_42469__$1;
(statearr_42487_43885[(2)] = null);

(statearr_42487_43885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42470 === (6))){
var inst_42408 = (state_42469[(13)]);
var inst_42417 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_42408) : f.call(null, inst_42408));
var inst_42418 = cljs.core.seq(inst_42417);
var inst_42419 = inst_42418;
var inst_42420 = null;
var inst_42421 = (0);
var inst_42422 = (0);
var state_42469__$1 = (function (){var statearr_42488 = state_42469;
(statearr_42488[(8)] = inst_42419);

(statearr_42488[(9)] = inst_42422);

(statearr_42488[(10)] = inst_42421);

(statearr_42488[(11)] = inst_42420);

return statearr_42488;
})();
var statearr_42489_43886 = state_42469__$1;
(statearr_42489_43886[(2)] = null);

(statearr_42489_43886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42470 === (17))){
var inst_42433 = (state_42469[(7)]);
var inst_42438 = cljs.core.chunk_first(inst_42433);
var inst_42439 = cljs.core.chunk_rest(inst_42433);
var inst_42440 = cljs.core.count(inst_42438);
var inst_42419 = inst_42439;
var inst_42420 = inst_42438;
var inst_42421 = inst_42440;
var inst_42422 = (0);
var state_42469__$1 = (function (){var statearr_42490 = state_42469;
(statearr_42490[(8)] = inst_42419);

(statearr_42490[(9)] = inst_42422);

(statearr_42490[(10)] = inst_42421);

(statearr_42490[(11)] = inst_42420);

return statearr_42490;
})();
var statearr_42491_43890 = state_42469__$1;
(statearr_42491_43890[(2)] = null);

(statearr_42491_43890[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42470 === (3))){
var inst_42467 = (state_42469[(2)]);
var state_42469__$1 = state_42469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42469__$1,inst_42467);
} else {
if((state_val_42470 === (12))){
var inst_42455 = (state_42469[(2)]);
var state_42469__$1 = state_42469;
var statearr_42495_43896 = state_42469__$1;
(statearr_42495_43896[(2)] = inst_42455);

(statearr_42495_43896[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42470 === (2))){
var state_42469__$1 = state_42469;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42469__$1,(4),in$);
} else {
if((state_val_42470 === (23))){
var inst_42463 = (state_42469[(2)]);
var state_42469__$1 = state_42469;
var statearr_42496_43897 = state_42469__$1;
(statearr_42496_43897[(2)] = inst_42463);

(statearr_42496_43897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42470 === (19))){
var inst_42450 = (state_42469[(2)]);
var state_42469__$1 = state_42469;
var statearr_42497_43898 = state_42469__$1;
(statearr_42497_43898[(2)] = inst_42450);

(statearr_42497_43898[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42470 === (11))){
var inst_42419 = (state_42469[(8)]);
var inst_42433 = (state_42469[(7)]);
var inst_42433__$1 = cljs.core.seq(inst_42419);
var state_42469__$1 = (function (){var statearr_42502 = state_42469;
(statearr_42502[(7)] = inst_42433__$1);

return statearr_42502;
})();
if(inst_42433__$1){
var statearr_42503_43900 = state_42469__$1;
(statearr_42503_43900[(1)] = (14));

} else {
var statearr_42507_43901 = state_42469__$1;
(statearr_42507_43901[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42470 === (9))){
var inst_42457 = (state_42469[(2)]);
var inst_42458 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_42469__$1 = (function (){var statearr_42508 = state_42469;
(statearr_42508[(15)] = inst_42457);

return statearr_42508;
})();
if(cljs.core.truth_(inst_42458)){
var statearr_42509_43903 = state_42469__$1;
(statearr_42509_43903[(1)] = (21));

} else {
var statearr_42510_43904 = state_42469__$1;
(statearr_42510_43904[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42470 === (5))){
var inst_42411 = cljs.core.async.close_BANG_(out);
var state_42469__$1 = state_42469;
var statearr_42512_43905 = state_42469__$1;
(statearr_42512_43905[(2)] = inst_42411);

(statearr_42512_43905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42470 === (14))){
var inst_42433 = (state_42469[(7)]);
var inst_42435 = cljs.core.chunked_seq_QMARK_(inst_42433);
var state_42469__$1 = state_42469;
if(inst_42435){
var statearr_42519_43906 = state_42469__$1;
(statearr_42519_43906[(1)] = (17));

} else {
var statearr_42520_43908 = state_42469__$1;
(statearr_42520_43908[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42470 === (16))){
var inst_42453 = (state_42469[(2)]);
var state_42469__$1 = state_42469;
var statearr_42521_43909 = state_42469__$1;
(statearr_42521_43909[(2)] = inst_42453);

(statearr_42521_43909[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42470 === (10))){
var inst_42422 = (state_42469[(9)]);
var inst_42420 = (state_42469[(11)]);
var inst_42427 = cljs.core._nth(inst_42420,inst_42422);
var state_42469__$1 = state_42469;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42469__$1,(13),out,inst_42427);
} else {
if((state_val_42470 === (18))){
var inst_42433 = (state_42469[(7)]);
var inst_42444 = cljs.core.first(inst_42433);
var state_42469__$1 = state_42469;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42469__$1,(20),out,inst_42444);
} else {
if((state_val_42470 === (8))){
var inst_42422 = (state_42469[(9)]);
var inst_42421 = (state_42469[(10)]);
var inst_42424 = (inst_42422 < inst_42421);
var inst_42425 = inst_42424;
var state_42469__$1 = state_42469;
if(cljs.core.truth_(inst_42425)){
var statearr_42522_43913 = state_42469__$1;
(statearr_42522_43913[(1)] = (10));

} else {
var statearr_42526_43915 = state_42469__$1;
(statearr_42526_43915[(1)] = (11));

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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__40011__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__40011__auto____0 = (function (){
var statearr_42533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42533[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__40011__auto__);

(statearr_42533[(1)] = (1));

return statearr_42533;
});
var cljs$core$async$mapcat_STAR__$_state_machine__40011__auto____1 = (function (state_42469){
while(true){
var ret_value__40012__auto__ = (function (){try{while(true){
var result__40013__auto__ = switch__40010__auto__(state_42469);
if(cljs.core.keyword_identical_QMARK_(result__40013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40013__auto__;
}
break;
}
}catch (e42534){var ex__40014__auto__ = e42534;
var statearr_42535_43918 = state_42469;
(statearr_42535_43918[(2)] = ex__40014__auto__);


if(cljs.core.seq((state_42469[(4)]))){
var statearr_42536_43919 = state_42469;
(statearr_42536_43919[(1)] = cljs.core.first((state_42469[(4)])));

} else {
throw ex__40014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43920 = state_42469;
state_42469 = G__43920;
continue;
} else {
return ret_value__40012__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__40011__auto__ = function(state_42469){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__40011__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__40011__auto____1.call(this,state_42469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__40011__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__40011__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__40011__auto__;
})()
})();
var state__40134__auto__ = (function (){var statearr_42537 = f__40133__auto__();
(statearr_42537[(6)] = c__40132__auto__);

return statearr_42537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40134__auto__);
}));

return c__40132__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__42539 = arguments.length;
switch (G__42539) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__42549 = arguments.length;
switch (G__42549) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__42554 = arguments.length;
switch (G__42554) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__40132__auto___43927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40133__auto__ = (function (){var switch__40010__auto__ = (function (state_42579){
var state_val_42580 = (state_42579[(1)]);
if((state_val_42580 === (7))){
var inst_42574 = (state_42579[(2)]);
var state_42579__$1 = state_42579;
var statearr_42581_43928 = state_42579__$1;
(statearr_42581_43928[(2)] = inst_42574);

(statearr_42581_43928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42580 === (1))){
var inst_42556 = null;
var state_42579__$1 = (function (){var statearr_42582 = state_42579;
(statearr_42582[(7)] = inst_42556);

return statearr_42582;
})();
var statearr_42583_43930 = state_42579__$1;
(statearr_42583_43930[(2)] = null);

(statearr_42583_43930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42580 === (4))){
var inst_42559 = (state_42579[(8)]);
var inst_42559__$1 = (state_42579[(2)]);
var inst_42560 = (inst_42559__$1 == null);
var inst_42561 = cljs.core.not(inst_42560);
var state_42579__$1 = (function (){var statearr_42587 = state_42579;
(statearr_42587[(8)] = inst_42559__$1);

return statearr_42587;
})();
if(inst_42561){
var statearr_42588_43931 = state_42579__$1;
(statearr_42588_43931[(1)] = (5));

} else {
var statearr_42589_43932 = state_42579__$1;
(statearr_42589_43932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42580 === (6))){
var state_42579__$1 = state_42579;
var statearr_42591_43938 = state_42579__$1;
(statearr_42591_43938[(2)] = null);

(statearr_42591_43938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42580 === (3))){
var inst_42576 = (state_42579[(2)]);
var inst_42577 = cljs.core.async.close_BANG_(out);
var state_42579__$1 = (function (){var statearr_42596 = state_42579;
(statearr_42596[(9)] = inst_42576);

return statearr_42596;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42579__$1,inst_42577);
} else {
if((state_val_42580 === (2))){
var state_42579__$1 = state_42579;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42579__$1,(4),ch);
} else {
if((state_val_42580 === (11))){
var inst_42559 = (state_42579[(8)]);
var inst_42568 = (state_42579[(2)]);
var inst_42556 = inst_42559;
var state_42579__$1 = (function (){var statearr_42600 = state_42579;
(statearr_42600[(10)] = inst_42568);

(statearr_42600[(7)] = inst_42556);

return statearr_42600;
})();
var statearr_42601_43940 = state_42579__$1;
(statearr_42601_43940[(2)] = null);

(statearr_42601_43940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42580 === (9))){
var inst_42559 = (state_42579[(8)]);
var state_42579__$1 = state_42579;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42579__$1,(11),out,inst_42559);
} else {
if((state_val_42580 === (5))){
var inst_42556 = (state_42579[(7)]);
var inst_42559 = (state_42579[(8)]);
var inst_42563 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42559,inst_42556);
var state_42579__$1 = state_42579;
if(inst_42563){
var statearr_42603_43945 = state_42579__$1;
(statearr_42603_43945[(1)] = (8));

} else {
var statearr_42604_43946 = state_42579__$1;
(statearr_42604_43946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42580 === (10))){
var inst_42571 = (state_42579[(2)]);
var state_42579__$1 = state_42579;
var statearr_42605_43947 = state_42579__$1;
(statearr_42605_43947[(2)] = inst_42571);

(statearr_42605_43947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42580 === (8))){
var inst_42556 = (state_42579[(7)]);
var tmp42602 = inst_42556;
var inst_42556__$1 = tmp42602;
var state_42579__$1 = (function (){var statearr_42606 = state_42579;
(statearr_42606[(7)] = inst_42556__$1);

return statearr_42606;
})();
var statearr_42607_43949 = state_42579__$1;
(statearr_42607_43949[(2)] = null);

(statearr_42607_43949[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__40011__auto__ = null;
var cljs$core$async$state_machine__40011__auto____0 = (function (){
var statearr_42608 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42608[(0)] = cljs$core$async$state_machine__40011__auto__);

(statearr_42608[(1)] = (1));

return statearr_42608;
});
var cljs$core$async$state_machine__40011__auto____1 = (function (state_42579){
while(true){
var ret_value__40012__auto__ = (function (){try{while(true){
var result__40013__auto__ = switch__40010__auto__(state_42579);
if(cljs.core.keyword_identical_QMARK_(result__40013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40013__auto__;
}
break;
}
}catch (e42609){var ex__40014__auto__ = e42609;
var statearr_42610_43957 = state_42579;
(statearr_42610_43957[(2)] = ex__40014__auto__);


if(cljs.core.seq((state_42579[(4)]))){
var statearr_42611_43958 = state_42579;
(statearr_42611_43958[(1)] = cljs.core.first((state_42579[(4)])));

} else {
throw ex__40014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43959 = state_42579;
state_42579 = G__43959;
continue;
} else {
return ret_value__40012__auto__;
}
break;
}
});
cljs$core$async$state_machine__40011__auto__ = function(state_42579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40011__auto____1.call(this,state_42579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40011__auto____0;
cljs$core$async$state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40011__auto____1;
return cljs$core$async$state_machine__40011__auto__;
})()
})();
var state__40134__auto__ = (function (){var statearr_42612 = f__40133__auto__();
(statearr_42612[(6)] = c__40132__auto___43927);

return statearr_42612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40134__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__42614 = arguments.length;
switch (G__42614) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__40132__auto___43961 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40133__auto__ = (function (){var switch__40010__auto__ = (function (state_42659){
var state_val_42660 = (state_42659[(1)]);
if((state_val_42660 === (7))){
var inst_42655 = (state_42659[(2)]);
var state_42659__$1 = state_42659;
var statearr_42661_43962 = state_42659__$1;
(statearr_42661_43962[(2)] = inst_42655);

(statearr_42661_43962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42660 === (1))){
var inst_42618 = (new Array(n));
var inst_42619 = inst_42618;
var inst_42620 = (0);
var state_42659__$1 = (function (){var statearr_42666 = state_42659;
(statearr_42666[(7)] = inst_42620);

(statearr_42666[(8)] = inst_42619);

return statearr_42666;
})();
var statearr_42667_43963 = state_42659__$1;
(statearr_42667_43963[(2)] = null);

(statearr_42667_43963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42660 === (4))){
var inst_42623 = (state_42659[(9)]);
var inst_42623__$1 = (state_42659[(2)]);
var inst_42624 = (inst_42623__$1 == null);
var inst_42625 = cljs.core.not(inst_42624);
var state_42659__$1 = (function (){var statearr_42668 = state_42659;
(statearr_42668[(9)] = inst_42623__$1);

return statearr_42668;
})();
if(inst_42625){
var statearr_42669_43964 = state_42659__$1;
(statearr_42669_43964[(1)] = (5));

} else {
var statearr_42670_43965 = state_42659__$1;
(statearr_42670_43965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42660 === (15))){
var inst_42649 = (state_42659[(2)]);
var state_42659__$1 = state_42659;
var statearr_42671_43966 = state_42659__$1;
(statearr_42671_43966[(2)] = inst_42649);

(statearr_42671_43966[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42660 === (13))){
var state_42659__$1 = state_42659;
var statearr_42672_43967 = state_42659__$1;
(statearr_42672_43967[(2)] = null);

(statearr_42672_43967[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42660 === (6))){
var inst_42620 = (state_42659[(7)]);
var inst_42645 = (inst_42620 > (0));
var state_42659__$1 = state_42659;
if(cljs.core.truth_(inst_42645)){
var statearr_42673_43971 = state_42659__$1;
(statearr_42673_43971[(1)] = (12));

} else {
var statearr_42674_43973 = state_42659__$1;
(statearr_42674_43973[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42660 === (3))){
var inst_42657 = (state_42659[(2)]);
var state_42659__$1 = state_42659;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42659__$1,inst_42657);
} else {
if((state_val_42660 === (12))){
var inst_42619 = (state_42659[(8)]);
var inst_42647 = cljs.core.vec(inst_42619);
var state_42659__$1 = state_42659;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42659__$1,(15),out,inst_42647);
} else {
if((state_val_42660 === (2))){
var state_42659__$1 = state_42659;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42659__$1,(4),ch);
} else {
if((state_val_42660 === (11))){
var inst_42639 = (state_42659[(2)]);
var inst_42640 = (new Array(n));
var inst_42619 = inst_42640;
var inst_42620 = (0);
var state_42659__$1 = (function (){var statearr_42677 = state_42659;
(statearr_42677[(10)] = inst_42639);

(statearr_42677[(7)] = inst_42620);

(statearr_42677[(8)] = inst_42619);

return statearr_42677;
})();
var statearr_42678_43974 = state_42659__$1;
(statearr_42678_43974[(2)] = null);

(statearr_42678_43974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42660 === (9))){
var inst_42619 = (state_42659[(8)]);
var inst_42637 = cljs.core.vec(inst_42619);
var state_42659__$1 = state_42659;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42659__$1,(11),out,inst_42637);
} else {
if((state_val_42660 === (5))){
var inst_42623 = (state_42659[(9)]);
var inst_42620 = (state_42659[(7)]);
var inst_42629 = (state_42659[(11)]);
var inst_42619 = (state_42659[(8)]);
var inst_42627 = (inst_42619[inst_42620] = inst_42623);
var inst_42629__$1 = (inst_42620 + (1));
var inst_42630 = (inst_42629__$1 < n);
var state_42659__$1 = (function (){var statearr_42679 = state_42659;
(statearr_42679[(11)] = inst_42629__$1);

(statearr_42679[(12)] = inst_42627);

return statearr_42679;
})();
if(cljs.core.truth_(inst_42630)){
var statearr_42682_43976 = state_42659__$1;
(statearr_42682_43976[(1)] = (8));

} else {
var statearr_42683_43979 = state_42659__$1;
(statearr_42683_43979[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42660 === (14))){
var inst_42652 = (state_42659[(2)]);
var inst_42653 = cljs.core.async.close_BANG_(out);
var state_42659__$1 = (function (){var statearr_42690 = state_42659;
(statearr_42690[(13)] = inst_42652);

return statearr_42690;
})();
var statearr_42693_43982 = state_42659__$1;
(statearr_42693_43982[(2)] = inst_42653);

(statearr_42693_43982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42660 === (10))){
var inst_42643 = (state_42659[(2)]);
var state_42659__$1 = state_42659;
var statearr_42694_43983 = state_42659__$1;
(statearr_42694_43983[(2)] = inst_42643);

(statearr_42694_43983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42660 === (8))){
var inst_42629 = (state_42659[(11)]);
var inst_42619 = (state_42659[(8)]);
var tmp42684 = inst_42619;
var inst_42619__$1 = tmp42684;
var inst_42620 = inst_42629;
var state_42659__$1 = (function (){var statearr_42696 = state_42659;
(statearr_42696[(7)] = inst_42620);

(statearr_42696[(8)] = inst_42619__$1);

return statearr_42696;
})();
var statearr_42699_43984 = state_42659__$1;
(statearr_42699_43984[(2)] = null);

(statearr_42699_43984[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__40011__auto__ = null;
var cljs$core$async$state_machine__40011__auto____0 = (function (){
var statearr_42704 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42704[(0)] = cljs$core$async$state_machine__40011__auto__);

(statearr_42704[(1)] = (1));

return statearr_42704;
});
var cljs$core$async$state_machine__40011__auto____1 = (function (state_42659){
while(true){
var ret_value__40012__auto__ = (function (){try{while(true){
var result__40013__auto__ = switch__40010__auto__(state_42659);
if(cljs.core.keyword_identical_QMARK_(result__40013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40013__auto__;
}
break;
}
}catch (e42706){var ex__40014__auto__ = e42706;
var statearr_42707_43989 = state_42659;
(statearr_42707_43989[(2)] = ex__40014__auto__);


if(cljs.core.seq((state_42659[(4)]))){
var statearr_42708_43991 = state_42659;
(statearr_42708_43991[(1)] = cljs.core.first((state_42659[(4)])));

} else {
throw ex__40014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43992 = state_42659;
state_42659 = G__43992;
continue;
} else {
return ret_value__40012__auto__;
}
break;
}
});
cljs$core$async$state_machine__40011__auto__ = function(state_42659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40011__auto____1.call(this,state_42659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40011__auto____0;
cljs$core$async$state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40011__auto____1;
return cljs$core$async$state_machine__40011__auto__;
})()
})();
var state__40134__auto__ = (function (){var statearr_42715 = f__40133__auto__();
(statearr_42715[(6)] = c__40132__auto___43961);

return statearr_42715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40134__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__42725 = arguments.length;
switch (G__42725) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__40132__auto___44007 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40133__auto__ = (function (){var switch__40010__auto__ = (function (state_42776){
var state_val_42777 = (state_42776[(1)]);
if((state_val_42777 === (7))){
var inst_42771 = (state_42776[(2)]);
var state_42776__$1 = state_42776;
var statearr_42780_44009 = state_42776__$1;
(statearr_42780_44009[(2)] = inst_42771);

(statearr_42780_44009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42777 === (1))){
var inst_42730 = [];
var inst_42731 = inst_42730;
var inst_42732 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_42776__$1 = (function (){var statearr_42781 = state_42776;
(statearr_42781[(7)] = inst_42732);

(statearr_42781[(8)] = inst_42731);

return statearr_42781;
})();
var statearr_42782_44021 = state_42776__$1;
(statearr_42782_44021[(2)] = null);

(statearr_42782_44021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42777 === (4))){
var inst_42735 = (state_42776[(9)]);
var inst_42735__$1 = (state_42776[(2)]);
var inst_42736 = (inst_42735__$1 == null);
var inst_42737 = cljs.core.not(inst_42736);
var state_42776__$1 = (function (){var statearr_42789 = state_42776;
(statearr_42789[(9)] = inst_42735__$1);

return statearr_42789;
})();
if(inst_42737){
var statearr_42791_44022 = state_42776__$1;
(statearr_42791_44022[(1)] = (5));

} else {
var statearr_42792_44023 = state_42776__$1;
(statearr_42792_44023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42777 === (15))){
var inst_42731 = (state_42776[(8)]);
var inst_42762 = cljs.core.vec(inst_42731);
var state_42776__$1 = state_42776;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42776__$1,(18),out,inst_42762);
} else {
if((state_val_42777 === (13))){
var inst_42757 = (state_42776[(2)]);
var state_42776__$1 = state_42776;
var statearr_42793_44032 = state_42776__$1;
(statearr_42793_44032[(2)] = inst_42757);

(statearr_42793_44032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42777 === (6))){
var inst_42731 = (state_42776[(8)]);
var inst_42759 = inst_42731.length;
var inst_42760 = (inst_42759 > (0));
var state_42776__$1 = state_42776;
if(cljs.core.truth_(inst_42760)){
var statearr_42794_44034 = state_42776__$1;
(statearr_42794_44034[(1)] = (15));

} else {
var statearr_42796_44035 = state_42776__$1;
(statearr_42796_44035[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42777 === (17))){
var inst_42768 = (state_42776[(2)]);
var inst_42769 = cljs.core.async.close_BANG_(out);
var state_42776__$1 = (function (){var statearr_42799 = state_42776;
(statearr_42799[(10)] = inst_42768);

return statearr_42799;
})();
var statearr_42801_44040 = state_42776__$1;
(statearr_42801_44040[(2)] = inst_42769);

(statearr_42801_44040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42777 === (3))){
var inst_42773 = (state_42776[(2)]);
var state_42776__$1 = state_42776;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42776__$1,inst_42773);
} else {
if((state_val_42777 === (12))){
var inst_42731 = (state_42776[(8)]);
var inst_42750 = cljs.core.vec(inst_42731);
var state_42776__$1 = state_42776;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42776__$1,(14),out,inst_42750);
} else {
if((state_val_42777 === (2))){
var state_42776__$1 = state_42776;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42776__$1,(4),ch);
} else {
if((state_val_42777 === (11))){
var inst_42735 = (state_42776[(9)]);
var inst_42739 = (state_42776[(11)]);
var inst_42731 = (state_42776[(8)]);
var inst_42747 = inst_42731.push(inst_42735);
var tmp42802 = inst_42731;
var inst_42731__$1 = tmp42802;
var inst_42732 = inst_42739;
var state_42776__$1 = (function (){var statearr_42805 = state_42776;
(statearr_42805[(12)] = inst_42747);

(statearr_42805[(7)] = inst_42732);

(statearr_42805[(8)] = inst_42731__$1);

return statearr_42805;
})();
var statearr_42806_44047 = state_42776__$1;
(statearr_42806_44047[(2)] = null);

(statearr_42806_44047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42777 === (9))){
var inst_42732 = (state_42776[(7)]);
var inst_42743 = cljs.core.keyword_identical_QMARK_(inst_42732,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_42776__$1 = state_42776;
var statearr_42807_44048 = state_42776__$1;
(statearr_42807_44048[(2)] = inst_42743);

(statearr_42807_44048[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42777 === (5))){
var inst_42735 = (state_42776[(9)]);
var inst_42739 = (state_42776[(11)]);
var inst_42740 = (state_42776[(13)]);
var inst_42732 = (state_42776[(7)]);
var inst_42739__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_42735) : f.call(null, inst_42735));
var inst_42740__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42739__$1,inst_42732);
var state_42776__$1 = (function (){var statearr_42808 = state_42776;
(statearr_42808[(11)] = inst_42739__$1);

(statearr_42808[(13)] = inst_42740__$1);

return statearr_42808;
})();
if(inst_42740__$1){
var statearr_42811_44055 = state_42776__$1;
(statearr_42811_44055[(1)] = (8));

} else {
var statearr_42812_44056 = state_42776__$1;
(statearr_42812_44056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42777 === (14))){
var inst_42735 = (state_42776[(9)]);
var inst_42739 = (state_42776[(11)]);
var inst_42752 = (state_42776[(2)]);
var inst_42753 = [];
var inst_42754 = inst_42753.push(inst_42735);
var inst_42731 = inst_42753;
var inst_42732 = inst_42739;
var state_42776__$1 = (function (){var statearr_42813 = state_42776;
(statearr_42813[(14)] = inst_42752);

(statearr_42813[(15)] = inst_42754);

(statearr_42813[(7)] = inst_42732);

(statearr_42813[(8)] = inst_42731);

return statearr_42813;
})();
var statearr_42818_44058 = state_42776__$1;
(statearr_42818_44058[(2)] = null);

(statearr_42818_44058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42777 === (16))){
var state_42776__$1 = state_42776;
var statearr_42819_44064 = state_42776__$1;
(statearr_42819_44064[(2)] = null);

(statearr_42819_44064[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42777 === (10))){
var inst_42745 = (state_42776[(2)]);
var state_42776__$1 = state_42776;
if(cljs.core.truth_(inst_42745)){
var statearr_42821_44068 = state_42776__$1;
(statearr_42821_44068[(1)] = (11));

} else {
var statearr_42822_44070 = state_42776__$1;
(statearr_42822_44070[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42777 === (18))){
var inst_42765 = (state_42776[(2)]);
var state_42776__$1 = state_42776;
var statearr_42823_44071 = state_42776__$1;
(statearr_42823_44071[(2)] = inst_42765);

(statearr_42823_44071[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42777 === (8))){
var inst_42740 = (state_42776[(13)]);
var state_42776__$1 = state_42776;
var statearr_42824_44076 = state_42776__$1;
(statearr_42824_44076[(2)] = inst_42740);

(statearr_42824_44076[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__40011__auto__ = null;
var cljs$core$async$state_machine__40011__auto____0 = (function (){
var statearr_42830 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42830[(0)] = cljs$core$async$state_machine__40011__auto__);

(statearr_42830[(1)] = (1));

return statearr_42830;
});
var cljs$core$async$state_machine__40011__auto____1 = (function (state_42776){
while(true){
var ret_value__40012__auto__ = (function (){try{while(true){
var result__40013__auto__ = switch__40010__auto__(state_42776);
if(cljs.core.keyword_identical_QMARK_(result__40013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40013__auto__;
}
break;
}
}catch (e42831){var ex__40014__auto__ = e42831;
var statearr_42833_44082 = state_42776;
(statearr_42833_44082[(2)] = ex__40014__auto__);


if(cljs.core.seq((state_42776[(4)]))){
var statearr_42834_44087 = state_42776;
(statearr_42834_44087[(1)] = cljs.core.first((state_42776[(4)])));

} else {
throw ex__40014__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44088 = state_42776;
state_42776 = G__44088;
continue;
} else {
return ret_value__40012__auto__;
}
break;
}
});
cljs$core$async$state_machine__40011__auto__ = function(state_42776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40011__auto____1.call(this,state_42776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40011__auto____0;
cljs$core$async$state_machine__40011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40011__auto____1;
return cljs$core$async$state_machine__40011__auto__;
})()
})();
var state__40134__auto__ = (function (){var statearr_42835 = f__40133__auto__();
(statearr_42835[(6)] = c__40132__auto___44007);

return statearr_42835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40134__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
