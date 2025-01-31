goog.provide('taoensso.encore');
goog.scope(function(){
  taoensso.encore.goog$module$goog$object = goog.module.get('goog.object');
  taoensso.encore.goog$module$goog$array = goog.module.get('goog.array');
});
taoensso.encore.encore_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(133),(0)], null);
/**
 * Private, don't use.
 *   Returns true if given a list or Cons (=> possible call form).
 */
taoensso.encore.list_form_QMARK_ = (function taoensso$encore$list_form_QMARK_(x){
return ((cljs.core.list_QMARK_(x)) || ((x instanceof cljs.core.Cons)));
});
/**
 * Given a symbol and args, returns [<name-with-attrs-meta> <args> <attrs>]
 *   with support for `defn` style `?docstring` and `?attrs-map`.
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(var_args){
var G__25088 = arguments.length;
switch (G__25088) {
case 2:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2 = (function (sym,args){
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3(sym,args,null);
}));

(taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3 = (function (sym,args,attrs_merge){
var vec__25089 = ((((typeof cljs.core.first(args) === 'string') && (cljs.core.next(args))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),cljs.core.next(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,args], null));
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25089,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25089,(1),null);
var vec__25092 = ((((cljs.core.map_QMARK_(cljs.core.first(args__$1))) && (cljs.core.next(args__$1))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args__$1),cljs.core.next(args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__$1], null));
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25092,(0),null);
var args__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25092,(1),null);
var vec__25095 = ((((typeof cljs.core.first(args__$2) === 'string') && (cljs.core.next(args__$2))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args__$2),cljs.core.next(args__$2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_docstring,args__$2], null));
var _QMARK_docstring__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25095,(0),null);
var args__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25095,(1),null);
var attrs__$1 = (cljs.core.truth_(_QMARK_docstring__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"doc","doc",1913296891),_QMARK_docstring__$1):attrs);
var attrs__$2 = (function (){var b2__22159__auto__ = cljs.core.meta(sym);
if(cljs.core.truth_(b2__22159__auto__)){
var m = b2__22159__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,attrs__$1);
} else {
return attrs__$1;
}
})();
var attrs__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attrs__$2,attrs_merge);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(sym,attrs__$3),args__$3,attrs__$3], null);
}));

(taoensso.encore.name_with_attrs.cljs$lang$maxFixedArity = 3);

/**
 * Same as `core/some?` (added in Clojure v1.6).
 */
taoensso.encore.some_QMARK_ = (function taoensso$encore$some_QMARK_(x){
if((x == null)){
return false;
} else {
return true;
}
});
/**
 * Throws runtime `ExceptionInfo` to indicate an unexpected argument.
 *   Takes optional kvs for merging into exception's data map.
 * 
 *  (let [mode :unexpected]
 *    (case mode
 *      :read  (do <...>)
 *      :write (do <...>)
 *      (unexpected-arg! mode
 *        {:context  `my-function
 *         :param    'mode
 *         :expected #{:read :write}}))) =>
 * 
 *  Unexpected argument: :unexpected
 *  {:arg {:value :unexpected, :type clojure.lang.Keyword},
 *   :context 'taoensso.encore/my-function
 *   :param 'mode
 *   :expected #{:read :write}}
 * 
 *   See also `bad-arg!`.
 */
taoensso.encore.unexpected_arg_BANG_ = (function taoensso$encore$unexpected_arg_BANG_(var_args){
var G__25100 = arguments.length;
switch (G__25100) {
case 1:
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 7:
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 9:
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (arg){
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(arg,null);
}));

(taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (arg,opts){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((function (){var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"msg","msg",-1386103444));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return ["Unexpected argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg == null))?"<nil>":arg))].join('');
}
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arg","arg",-1747261837),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),arg,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(arg)], null)], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"msg","msg",-1386103444))));
}));

(taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (arg,k1,v1){
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(arg,cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1]));
}));

(taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (arg,k1,v1,k2,v2){
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(arg,cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1,k2,v2]));
}));

(taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$7 = (function (arg,k1,v1,k2,v2,k3,v3){
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(arg,cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1,k2,v2,k3,v3]));
}));

(taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$9 = (function (arg,k1,v1,k2,v2,k3,v3,k4,v4){
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(arg,cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1,k2,v2,k3,v3,k4,v4]));
}));

(taoensso.encore.unexpected_arg_BANG_.cljs$lang$maxFixedArity = 9);

taoensso.encore.core_merge = cljs.core.merge;
taoensso.encore.core_update_in = cljs.core.update_in;
taoensso.encore.core_subvec = cljs.core.subvec;

/**
 * Returns current value of dynamic assertion data.
 */
taoensso.encore.get_truss_data = taoensso.truss.get_data;
taoensso.encore.subfn = (function taoensso$encore$subfn(context,by_idx_fn){
return (function() {
var taoensso$encore$subfn_$_subfn_STAR_ = null;
var taoensso$encore$subfn_$_subfn_STAR___2 = (function (c,start_idx){
if(cljs.core.truth_(c)){
var max_idx = cljs.core.count(c);
var start_idx__$1 = cljs.core.long$(start_idx);
if((start_idx__$1 < max_idx)){
var G__25101 = c;
var G__25102 = (function (){var x__5087__auto__ = start_idx__$1;
var y__5088__auto__ = (0);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var G__25103 = max_idx;
return (by_idx_fn.cljs$core$IFn$_invoke$arity$3 ? by_idx_fn.cljs$core$IFn$_invoke$arity$3(G__25101,G__25102,G__25103) : by_idx_fn.call(null, G__25101,G__25102,G__25103));
} else {
return null;
}
} else {
return null;
}
});
var taoensso$encore$subfn_$_subfn_STAR___3 = (function (c,start_idx,end_idx){
if(cljs.core.truth_(c)){
var start_idx__$1 = (function (){var x__5087__auto__ = cljs.core.long$(start_idx);
var y__5088__auto__ = (0);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var end_idx__$1 = (function (){var x__5090__auto__ = cljs.core.long$(end_idx);
var y__5091__auto__ = cljs.core.count(c);
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
if((start_idx__$1 < end_idx__$1)){
return (by_idx_fn.cljs$core$IFn$_invoke$arity$3 ? by_idx_fn.cljs$core$IFn$_invoke$arity$3(c,start_idx__$1,end_idx__$1) : by_idx_fn.call(null, c,start_idx__$1,end_idx__$1));
} else {
return null;
}
} else {
return null;
}
});
var taoensso$encore$subfn_$_subfn_STAR___4 = (function (c,kind,start,end){
if(cljs.core.truth_(c)){
var max_end = cljs.core.count(c);
var end__$1 = ((cljs.core.keyword_identical_QMARK_(end,new cljs.core.Keyword(null,"max","max",61366548)))?max_end:end);
var G__25104 = kind;
var G__25104__$1 = (((G__25104 instanceof cljs.core.Keyword))?G__25104.fqn:null);
switch (G__25104__$1) {
case "by-idx":
return taoensso$encore$subfn_$_subfn_STAR_.cljs$core$IFn$_invoke$arity$3(c,start,end__$1);

break;
case "by-len":
var len = cljs.core.long$(end__$1);
if((len <= (0))){
return null;
} else {
var start_idx = cljs.core.long$(start);
if((start_idx < (0))){
var start_idx__$1 = (function (){var x__5087__auto__ = (start_idx + max_end);
var y__5088__auto__ = (0);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var end_idx = (function (){var x__5090__auto__ = (start_idx__$1 + len);
var y__5091__auto__ = max_end;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
if((start_idx__$1 < end_idx)){
return (by_idx_fn.cljs$core$IFn$_invoke$arity$3 ? by_idx_fn.cljs$core$IFn$_invoke$arity$3(c,start_idx__$1,end_idx) : by_idx_fn.call(null, c,start_idx__$1,end_idx));
} else {
return null;
}
} else {
var end_idx = (function (){var x__5090__auto__ = (start_idx + len);
var y__5091__auto__ = max_end;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
if((start_idx < end_idx)){
return (by_idx_fn.cljs$core$IFn$_invoke$arity$3 ? by_idx_fn.cljs$core$IFn$_invoke$arity$3(c,start_idx,end_idx) : by_idx_fn.call(null, c,start_idx,end_idx));
} else {
return null;
}
}
}

break;
default:
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"param","param",2013631823),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Keyword(null,"context","context",-830191113),context,new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"by-idx","by-idx",-1997587605),null,new cljs.core.Keyword(null,"by-len","by-len",587837753),null], null), null)], null));

}
} else {
return null;
}
});
taoensso$encore$subfn_$_subfn_STAR_ = function(c,kind,start,end){
switch(arguments.length){
case 2:
return taoensso$encore$subfn_$_subfn_STAR___2.call(this,c,kind);
case 3:
return taoensso$encore$subfn_$_subfn_STAR___3.call(this,c,kind,start);
case 4:
return taoensso$encore$subfn_$_subfn_STAR___4.call(this,c,kind,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$subfn_$_subfn_STAR_.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$subfn_$_subfn_STAR___2;
taoensso$encore$subfn_$_subfn_STAR_.cljs$core$IFn$_invoke$arity$3 = taoensso$encore$subfn_$_subfn_STAR___3;
taoensso$encore$subfn_$_subfn_STAR_.cljs$core$IFn$_invoke$arity$4 = taoensso$encore$subfn_$_subfn_STAR___4;
return taoensso$encore$subfn_$_subfn_STAR_;
})()
});
/**
 * Returns a non-empty sub-vector, or nil.
 *   Like `core/subvec` but:
 *  - Doesn't throw when out-of-bounds (clips to bounds).
 *  - Returns nil rather than an empty vector.
 *  - When given `:by-len` kind (4-arity case):
 *    - `start` may be -ive (=> index from right of vector).
 *    - `end`   is desired vector length, or `:max`.
 */
taoensso.encore.subvec = taoensso.encore.subfn(new cljs.core.Symbol("taoensso.encore","subvec","taoensso.encore/subvec",-995330198,null),taoensso.encore.core_subvec);
/**
 * Returns a non-empty sub-string, or nil.
 *   Like `subs` but:
 *  - Doesn't throw when out-of-bounds (clips to bounds).
 *  - Returns nil rather than an empty string.
 *  - When given `:by-len` kind (4-arity case):
 *    - `start` may be -ive (=> index from right of string).
 *    - `end`   is desired string length, or `:max`.
 */
taoensso.encore.substr = taoensso.encore.subfn(new cljs.core.Symbol("taoensso.encore","substr","taoensso.encore/substr",852382831,null),(function (s,n1,n2){
return s.substring(n1,n2);
}));

/**
 * Returns true iff given platform error (`Throwable` or `js/Error`).
 */
taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});
/**
 * Same as `core/ex-message` (added in Clojure v1.10).
 */
taoensso.encore.ex_message = (function taoensso$encore$ex_message(x){
if((x instanceof Error)){
return x.message;
} else {
return null;
}
});
/**
 * Same as `core/ex-data` (added in Clojure v1.4).
 */
taoensso.encore.ex_data = (function taoensso$encore$ex_data(x){
if((x instanceof cljs.core.ExceptionInfo)){
return x.data;
} else {
return null;
}
});
/**
 * Same as `core/ex-cause` (added in Clojure v1.10).
 */
taoensso.encore.ex_cause = (function taoensso$encore$ex_cause(x){
if((x instanceof cljs.core.ExceptionInfo)){
return x.cause;
} else {
return null;
}
});
/**
 * Returns root cause of given platform error.
 */
taoensso.encore.ex_root = (function taoensso$encore$ex_root(x){
if(cljs.core.truth_(taoensso.encore.error_QMARK_(x))){
var error = x;
while(true){
var b2__22159__auto__ = taoensso.encore.ex_cause(error);
if(cljs.core.truth_(b2__22159__auto__)){
var cause = b2__22159__auto__;
var G__25975 = cause;
error = G__25975;
continue;
} else {
return error;
}
break;
}
} else {
return null;
}
});
/**
 * Private, don't use.
 * Returns class symbol of given platform error.
 */
taoensso.encore.ex_type = (function taoensso$encore$ex_type(x){
if((x instanceof cljs.core.ExceptionInfo)){
return new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null);
} else {
if((x instanceof Error)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",x.name);
} else {
return null;
}
}
});
/**
 * Private, don't use.
 * Returns ?{:keys [type msg data]} for given platform error.
 */
taoensso.encore.ex_map_STAR_ = (function taoensso$encore$ex_map_STAR_(x){
var b2__22159__auto__ = taoensso.encore.ex_message(x);
if(cljs.core.truth_(b2__22159__auto__)){
var msg = b2__22159__auto__;
var b2__22159__auto____$1 = cljs.core.not_empty(taoensso.encore.ex_data(x));
if(cljs.core.truth_(b2__22159__auto____$1)){
var data = b2__22159__auto____$1;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),taoensso.encore.ex_type(x),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),taoensso.encore.ex_type(x),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null);
}
} else {
return null;
}
});
/**
 * Private, don't use.
 *   Returns vector cause chain of given platform error.
 */
taoensso.encore.ex_chain = (function taoensso$encore$ex_chain(var_args){
var G__25106 = arguments.length;
switch (G__25106) {
case 1:
return taoensso.encore.ex_chain.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.ex_chain.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.ex_chain.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.ex_chain.cljs$core$IFn$_invoke$arity$2(false,x);
}));

(taoensso.encore.ex_chain.cljs$core$IFn$_invoke$arity$2 = (function (as_maps_QMARK_,x){
if(cljs.core.truth_(taoensso.encore.error_QMARK_(x))){
var xf = (cljs.core.truth_(as_maps_QMARK_)?taoensso.encore.ex_map_STAR_:cljs.core.identity);
var acc = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xf.cljs$core$IFn$_invoke$arity$1 ? xf.cljs$core$IFn$_invoke$arity$1(x) : xf.call(null, x))], null);
var error = x;
while(true){
var b2__22159__auto__ = taoensso.encore.ex_cause(error);
if(cljs.core.truth_(b2__22159__auto__)){
var cause = b2__22159__auto__;
var G__25984 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,(xf.cljs$core$IFn$_invoke$arity$1 ? xf.cljs$core$IFn$_invoke$arity$1(cause) : xf.call(null, cause)));
var G__25985 = cause;
acc = G__25984;
error = G__25985;
continue;
} else {
return acc;
}
break;
}
} else {
return null;
}
}));

(taoensso.encore.ex_chain.cljs$lang$maxFixedArity = 2);


/**
 * Private, don't use.
 *   Returns ?{:keys [type msg data chain trace]} for given platform error.
 */
taoensso.encore.ex_map = (function taoensso$encore$ex_map(x){
var b2__22159__auto__ = taoensso.encore.ex_chain.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(b2__22159__auto__)){
var chain = b2__22159__auto__;
var maps = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.ex_map_STAR_,chain);
var root = cljs.core.peek(chain);
var root_map = cljs.core.peek(maps);
var G__25107 = root_map;
var G__25108 = new cljs.core.Keyword(null,"chain","chain",15631029);
var G__25109 = maps;
var G__25110 = new cljs.core.Keyword(null,"trace","trace",-1082747415);
var G__25111 = (function (){var G__25112 = root.stack;
return (taoensso.encore.as__QMARK_nempty_str.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.as__QMARK_nempty_str.cljs$core$IFn$_invoke$arity$1(G__25112) : taoensso.encore.as__QMARK_nempty_str.call(null, G__25112));
})();
return (taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$5 ? taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$5(G__25107,G__25108,G__25109,G__25110,G__25111) : taoensso.encore.assoc_some.call(null, G__25107,G__25108,G__25109,G__25110,G__25111));
} else {
return null;
}
});


/**
 * Given a platform error and criteria, returns the error if it matches
 *   all criteria. Otherwise returns nil.
 * 
 *   `kind` may be:
 *  - A predicate function, (fn match? [x]) -> bool
 *  - A class (e.g. `ArithmeticException`, `AssertionError`, etc.)
 *  - `:all`     => any    platform error (Throwable or js/Error, etc.)
 *  - `:common`  => common platform error (Exception or js/Error)
 *  - `:ex-info` => an `IExceptionInfo` as created by `ex-info`
 *  - A set of `kind`s as above, at least one of which must match
 * 
 *   `pattern` may be:
 *  - A string or Regex against which `ex-message` must match
 *  - A map             against which `ex-data`    must match using `submap?`
 *  - A set of `pattern`s as above, at least one of which must match
 * 
 *   When an error with (nested) causes doesn't match, a match will be attempted
 *   against its (nested) causes.
 * 
 *   Low-level util, see also `throws`, `throws?`.
 */
taoensso.encore.matching_error = (function taoensso$encore$matching_error(var_args){
var G__25116 = arguments.length;
switch (G__25116) {
case 1:
return taoensso.encore.matching_error.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.matching_error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.matching_error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.matching_error.cljs$core$IFn$_invoke$arity$1 = (function (err){
return err;
}));

(taoensso.encore.matching_error.cljs$core$IFn$_invoke$arity$2 = (function (kind,err){
var b2__22159__auto__ = (cljs.core.truth_(taoensso.encore.error_QMARK_(kind))?cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,err):((cljs.core.fn_QMARK_(kind))?(kind.cljs$core$IFn$_invoke$arity$1 ? kind.cljs$core$IFn$_invoke$arity$1(err) : kind.call(null, err)):((cljs.core.set_QMARK_(kind))?(function (){var G__25117 = (function (p1__25113_SHARP_){
return taoensso.encore.matching_error.cljs$core$IFn$_invoke$arity$2(p1__25113_SHARP_,err);
});
var G__25118 = kind;
return (taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2(G__25117,G__25118) : taoensso.encore.rsome.call(null, G__25117,G__25118));
})():(function (){var G__25119 = kind;
var G__25119__$1 = (((G__25119 instanceof cljs.core.Keyword))?G__25119.fqn:null);
switch (G__25119__$1) {
case "common":
case "default":
return (err instanceof Error);

break;
case "all":
case "any":
return taoensso.encore.some_QMARK_(err);

break;
case "all-but-critical":
return taoensso.encore.some_QMARK_(err);

break;
case "ex-info":
return (err instanceof cljs.core.ExceptionInfo);

break;
default:
return (err instanceof kind);

}
})())));
if(cljs.core.truth_(b2__22159__auto__)){
var match_QMARK_ = b2__22159__auto__;
return err;
} else {
return null;
}
}));

(taoensso.encore.matching_error.cljs$core$IFn$_invoke$arity$3 = (function (kind,pattern,err){
var b2__22159__auto__ = (function (){var and__5000__auto__ = taoensso.encore.matching_error.cljs$core$IFn$_invoke$arity$2(kind,err);
if(cljs.core.truth_(and__5000__auto__)){
if((pattern == null)){
return true;
} else {
if(cljs.core.set_QMARK_(pattern)){
var G__25120 = (function (p1__25114_SHARP_){
return taoensso.encore.matching_error.cljs$core$IFn$_invoke$arity$3(kind,p1__25114_SHARP_,err);
});
var G__25121 = pattern;
return (taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2(G__25120,G__25121) : taoensso.encore.rsome.call(null, G__25120,G__25121));
} else {
if(typeof pattern === 'string'){
var G__25122 = taoensso.encore.ex_message(err);
var G__25123 = pattern;
return (taoensso.encore.str_contains_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.str_contains_QMARK_.cljs$core$IFn$_invoke$arity$2(G__25122,G__25123) : taoensso.encore.str_contains_QMARK_.call(null, G__25122,G__25123));
} else {
if(cljs.core.truth_((taoensso.encore.re_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.re_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(pattern) : taoensso.encore.re_pattern_QMARK_.call(null, pattern)))){
return cljs.core.re_find(pattern,taoensso.encore.ex_message(err));
} else {
if(cljs.core.map_QMARK_(pattern)){
var b2__22159__auto__ = taoensso.encore.ex_data(err);
if(cljs.core.truth_(b2__22159__auto__)){
var data = b2__22159__auto__;
return (taoensso.encore.submap_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.submap_QMARK_.cljs$core$IFn$_invoke$arity$2(data,pattern) : taoensso.encore.submap_QMARK_.call(null, data,pattern));
} else {
return null;
}
} else {
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(pattern,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Symbol("taoensso.encore","matching-error","taoensso.encore/matching-error",585936391,null),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [null,"null",new cljs.core.Symbol(null,"set","set",1945134081,null),"null",new cljs.core.Symbol(null,"map","map",-1282745308,null),"null",new cljs.core.Symbol(null,"re-pattern","re-pattern",1047705161,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null)], null));
}
}
}
}
}
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(b2__22159__auto__)){
var match_QMARK_ = b2__22159__auto__;
return err;
} else {
var b2__22159__auto____$1 = taoensso.encore.ex_cause(err);
if(cljs.core.truth_(b2__22159__auto____$1)){
var cause = b2__22159__auto____$1;
return taoensso.encore.matching_error.cljs$core$IFn$_invoke$arity$3(kind,pattern,cause);
} else {
return null;
}
}
}));

(taoensso.encore.matching_error.cljs$lang$maxFixedArity = 3);

var get_default_error_fn_26002 = (function (base_data){
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$3(base_data,new cljs.core.Keyword("error","msg","error/msg",-1549923468),"Error thrown during reduction");
var base_data__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(base_data,new cljs.core.Keyword("error","msg","error/msg",-1549923468));
return (function taoensso$encore$default_error_fn(data,cause){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(msg,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(base_data__$1,data),cause);
});
});
/**
 * Returns wrapper around given reducing function `rf` so that if `rf`
 *  throws, (error-fn <thrown-error> <contextual-data>) will be called.
 * 
 *  The default `error-fn` will rethrow the original error, wrapped in
 *  extra contextual information to aid debugging.
 * 
 *  See also `catching-xform`.
 */
taoensso.encore.catching_rf = (function taoensso$encore$catching_rf(var_args){
var G__25125 = arguments.length;
switch (G__25125) {
case 1:
return taoensso.encore.catching_rf.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.catching_rf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.catching_rf.cljs$core$IFn$_invoke$arity$1 = (function (rf){
return taoensso.encore.catching_rf.cljs$core$IFn$_invoke$arity$2(get_default_error_fn_26002(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rf","rf",2002878243),rf], null)),rf);
}));

(taoensso.encore.catching_rf.cljs$core$IFn$_invoke$arity$2 = (function (error_fn,rf){
var error_fn__$1 = ((cljs.core.map_QMARK_(error_fn))?get_default_error_fn_26002(error_fn):error_fn);
return (function() {
var taoensso$encore$catching_rf = null;
var taoensso$encore$catching_rf__0 = (function (){
try{return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null, ));
}catch (e25126){var t = e25126;
var G__25127 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rf","rf",2002878243),rf,new cljs.core.Keyword(null,"call","call",-519999866),cljs.core.list(new cljs.core.Symbol(null,"rf","rf",-651557526,null))], null);
var G__25128 = t;
return (error_fn__$1.cljs$core$IFn$_invoke$arity$2 ? error_fn__$1.cljs$core$IFn$_invoke$arity$2(G__25127,G__25128) : error_fn__$1.call(null, G__25127,G__25128));
}});
var taoensso$encore$catching_rf__1 = (function (acc){
try{return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null, acc));
}catch (e25129){var t = e25129;
var G__25130 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rf","rf",2002878243),rf,new cljs.core.Keyword(null,"call","call",-519999866),cljs.core.list(new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"acc","acc",-1815869457,null)),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),acc,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(acc)], null)], null)], null);
var G__25131 = t;
return (error_fn__$1.cljs$core$IFn$_invoke$arity$2 ? error_fn__$1.cljs$core$IFn$_invoke$arity$2(G__25130,G__25131) : error_fn__$1.call(null, G__25130,G__25131));
}});
var taoensso$encore$catching_rf__2 = (function (acc,in$){
try{return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,in$) : rf.call(null, acc,in$));
}catch (e25132){var t = e25132;
var G__25133 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rf","rf",2002878243),rf,new cljs.core.Keyword(null,"call","call",-519999866),cljs.core.list(new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"acc","acc",-1815869457,null),new cljs.core.Symbol(null,"in","in",109346662,null)),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),acc,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(acc)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),in$,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(in$)], null)], null)], null);
var G__25134 = t;
return (error_fn__$1.cljs$core$IFn$_invoke$arity$2 ? error_fn__$1.cljs$core$IFn$_invoke$arity$2(G__25133,G__25134) : error_fn__$1.call(null, G__25133,G__25134));
}});
var taoensso$encore$catching_rf__3 = (function (acc,k,v){
try{return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(acc,k,v) : rf.call(null, acc,k,v));
}catch (e25135){var t = e25135;
var G__25136 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rf","rf",2002878243),rf,new cljs.core.Keyword(null,"call","call",-519999866),cljs.core.list(new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"acc","acc",-1815869457,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),acc,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(acc)], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),k,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(k)], null),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(v)], null)], null)], null);
var G__25137 = t;
return (error_fn__$1.cljs$core$IFn$_invoke$arity$2 ? error_fn__$1.cljs$core$IFn$_invoke$arity$2(G__25136,G__25137) : error_fn__$1.call(null, G__25136,G__25137));
}});
taoensso$encore$catching_rf = function(acc,k,v){
switch(arguments.length){
case 0:
return taoensso$encore$catching_rf__0.call(this);
case 1:
return taoensso$encore$catching_rf__1.call(this,acc);
case 2:
return taoensso$encore$catching_rf__2.call(this,acc,k);
case 3:
return taoensso$encore$catching_rf__3.call(this,acc,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$catching_rf.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$catching_rf__0;
taoensso$encore$catching_rf.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$catching_rf__1;
taoensso$encore$catching_rf.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$catching_rf__2;
taoensso$encore$catching_rf.cljs$core$IFn$_invoke$arity$3 = taoensso$encore$catching_rf__3;
return taoensso$encore$catching_rf;
})()
}));

(taoensso.encore.catching_rf.cljs$lang$maxFixedArity = 2);

/**
 * Like `catching-rf`, but applies to a transducer (`xform`).
 * 
 *   Makes debugging transductions much easier by greatly improving
 *   the information provided in any errors thrown by `xform` or the
 *   reducing fn:
 * 
 *  (transduce
 *    (catching-xform (comp (filter even?) (map inc))) ; Modified xform
 *    <reducing-fn>
 *    <...>)
 */
taoensso.encore.catching_xform = (function taoensso$encore$catching_xform(var_args){
var G__25139 = arguments.length;
switch (G__25139) {
case 2:
return taoensso.encore.catching_xform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return taoensso.encore.catching_xform.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.catching_xform.cljs$core$IFn$_invoke$arity$2 = (function (error_fn,xform){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (rf){
return taoensso.encore.catching_rf.cljs$core$IFn$_invoke$arity$2(error_fn,rf);
}),xform);
}));

(taoensso.encore.catching_xform.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.catching_rf,xform);
}));

(taoensso.encore.catching_xform.cljs$lang$maxFixedArity = 2);

/**
 * Given a {:before ?(fn []) :after ?(fn [])} map, returns cross-platform
 *   test fixtures for use by both `clojure.test` and `cljs.test`:
 * 
 *  (let [f (test-fixtures {:before (fn [] (test-setup))})]
 *    (clojure.test/use-fixtures :once f)
 *       (cljs.test/use-fixtures :once f))
 */
taoensso.encore.test_fixtures = (function taoensso$encore$test_fixtures(fixtures_map){
var e_26013 = (function (){try{if(cljs.core.map_QMARK_(fixtures_map)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e25141){if((e25141 instanceof Error)){
var e_26013 = e25141;
return e_26013;
} else {
throw e25141;

}
}})();
if((e_26013 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),1319,3,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/encore/3.133.0/encore-3.133.0.jar!/taoensso/encore.cljc",new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"fixtures-map","fixtures-map",732147048,null),fixtures_map,e_26013,null);
}

return fixtures_map;
});
taoensso.encore.nempty_str_QMARK_ = (function taoensso$encore$nempty_str_QMARK_(x){
return ((typeof x === 'string') && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"")))));
});

taoensso.encore.boolean_QMARK_ = (function taoensso$encore$boolean_QMARK_(x){
return ((x === true) || (x === false));
});

taoensso.encore.indexed_QMARK_ = (function taoensso$encore$indexed_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (16))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IIndexed$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.named_QMARK_ = (function taoensso$encore$named_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$INamed$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.editable_QMARK_ = (function taoensso$encore$editable_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IEditableCollection$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.derefable_QMARK_ = (function taoensso$encore$derefable_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});

taoensso.encore.transient_QMARK_ = (function taoensso$encore$transient_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (8))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ITransientCollection$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.lazy_seq_QMARK_ = (function taoensso$encore$lazy_seq_QMARK_(x){
return (x instanceof cljs.core.LazySeq);
});

taoensso.encore.re_pattern_QMARK_ = (function taoensso$encore$re_pattern_QMARK_(x){
return (x instanceof RegExp);
});

taoensso.encore.can_meta_QMARK_ = (function taoensso$encore$can_meta_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IWithMeta$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || (typeof x === 'string'));
});

taoensso.encore.ident_QMARK_ = (function taoensso$encore$ident_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)));
});

taoensso.encore.nameable_QMARK_ = (function taoensso$encore$nameable_QMARK_(x){
return ((taoensso.encore.named_QMARK_(x)) || (typeof x === 'string'));
});

taoensso.encore.simple_ident_QMARK_ = (function taoensso$encore$simple_ident_QMARK_(x){
var and__5000__auto__ = taoensso.encore.ident_QMARK_(x);
if(cljs.core.truth_(and__5000__auto__)){
return (cljs.core.namespace(x) == null);
} else {
return and__5000__auto__;
}
});

taoensso.encore.qualified_ident_QMARK_ = (function taoensso$encore$qualified_ident_QMARK_(x){
var and__5000__auto__ = taoensso.encore.ident_QMARK_(x);
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__5000__auto____$1)){
return true;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});

taoensso.encore.simple_symbol_QMARK_ = (function taoensso$encore$simple_symbol_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && ((cljs.core.namespace(x) == null)));
});

taoensso.encore.qualified_symbol_QMARK_ = (function taoensso$encore$qualified_symbol_QMARK_(x){
var and__5000__auto__ = (x instanceof cljs.core.Symbol);
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__5000__auto____$1)){
return true;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});

taoensso.encore.simple_keyword_QMARK_ = (function taoensso$encore$simple_keyword_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) && ((cljs.core.namespace(x) == null)));
});

taoensso.encore.qualified_keyword_QMARK_ = (function taoensso$encore$qualified_keyword_QMARK_(x){
var and__5000__auto__ = (x instanceof cljs.core.Keyword);
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__5000__auto____$1)){
return true;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});

taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return ((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(2))));
});

taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return ((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(3))));
});

taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return ((typeof x === 'string') && ((!(clojure.string.blank_QMARK_(x)))));
});

taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return (!(clojure.string.blank_QMARK_(x)));
});
/**
 * Is `clojure.core.async` present (not necessarily loaded)?
 */
taoensso.encore.have_core_async_QMARK_ = true;
/**
 * Returns true iff given a `clojure.core.async` channel.
 */
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
/**
 * Returns true iff given a number (of standard type) that is:
 *   finite (excl. NaN and infinities).
 */
taoensso.encore.finite_num_QMARK_ = (function taoensso$encore$finite_num_QMARK_(x){
return Number.isFinite(x);
});
/**
 * Returns true iff given a number (of standard type) that is:
 *   a fixed-precision integer.
 */
taoensso.encore.int_QMARK_ = (function taoensso$encore$int_QMARK_(x){
var and__5000__auto__ = taoensso.encore.finite_num_QMARK_(x);
if(cljs.core.truth_(and__5000__auto__)){
return (parseFloat(x) === parseInt(x,(10)));
} else {
return and__5000__auto__;
}
});
/**
 * Returns true iff given a number (of standard type) that is:
 *   a fixed-precision floating-point (incl. NaN and infinities).
 */
taoensso.encore.float_QMARK_ = (function taoensso$encore$float_QMARK_(x){
return ((typeof x === 'number') && ((!((parseFloat(x) === parseInt(x,(10)))))));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return (!((x < (0))));
});

taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return ((typeof x === 'number') && ((x === (0))));
});

taoensso.encore.nzero_num_QMARK_ = (function taoensso$encore$nzero_num_QMARK_(x){
return ((typeof x === 'number') && ((!((x === (0))))));
});

taoensso.encore.nat_num_QMARK_ = (function taoensso$encore$nat_num_QMARK_(x){
return ((typeof x === 'number') && ((!((x < (0))))));
});

taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return ((typeof x === 'number') && ((x > (0))));
});

taoensso.encore.neg_num_QMARK_ = (function taoensso$encore$neg_num_QMARK_(x){
return ((typeof x === 'number') && ((x < (0))));
});

taoensso.encore.nat_int_QMARK_ = (function taoensso$encore$nat_int_QMARK_(x){
var and__5000__auto__ = taoensso.encore.int_QMARK_(x);
if(cljs.core.truth_(and__5000__auto__)){
return (!((x < (0))));
} else {
return and__5000__auto__;
}
});

taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
var and__5000__auto__ = taoensso.encore.int_QMARK_(x);
if(cljs.core.truth_(and__5000__auto__)){
return (x > (0));
} else {
return and__5000__auto__;
}
});

taoensso.encore.neg_int_QMARK_ = (function taoensso$encore$neg_int_QMARK_(x){
var and__5000__auto__ = taoensso.encore.int_QMARK_(x);
if(cljs.core.truth_(and__5000__auto__)){
return (x < (0));
} else {
return and__5000__auto__;
}
});

taoensso.encore.nat_float_QMARK_ = (function taoensso$encore$nat_float_QMARK_(x){
var and__5000__auto__ = taoensso.encore.float_QMARK_(x);
if(cljs.core.truth_(and__5000__auto__)){
return (!((x < (0))));
} else {
return and__5000__auto__;
}
});

taoensso.encore.pos_float_QMARK_ = (function taoensso$encore$pos_float_QMARK_(x){
var and__5000__auto__ = taoensso.encore.float_QMARK_(x);
if(cljs.core.truth_(and__5000__auto__)){
return (x > (0));
} else {
return and__5000__auto__;
}
});

taoensso.encore.neg_float_QMARK_ = (function taoensso$encore$neg_float_QMARK_(x){
var and__5000__auto__ = taoensso.encore.float_QMARK_(x);
if(cljs.core.truth_(and__5000__auto__)){
return (x < (0));
} else {
return and__5000__auto__;
}
});
/**
 * Returns true iff given number in unsigned unit proportion interval ∈ℝ[0,1].
 */
taoensso.encore.pnum_QMARK_ = (function taoensso$encore$pnum_QMARK_(x){
var and__5000__auto__ = typeof x === 'number';
if(and__5000__auto__){
var n = x;
return (((n >= 0.0)) && ((n <= 1.0)));
} else {
return and__5000__auto__;
}
});
/**
 * Returns true iff given number in signed unit proportion interval ∈ℝ[-1,1].
 */
taoensso.encore.rnum_QMARK_ = (function taoensso$encore$rnum_QMARK_(x){
var and__5000__auto__ = typeof x === 'number';
if(and__5000__auto__){
var n = x;
return (((n >= -1.0)) && ((n <= 1.0)));
} else {
return and__5000__auto__;
}
});
taoensso.encore.max_long = Number.MAX_SAFE_INTEGER;
taoensso.encore.min_long = Number.MIN_SAFE_INTEGER;
taoensso.encore.int_str_QMARK_ = (function taoensso$encore$int_str_QMARK_(s){
return cljs.core.re_matches(/[+-]?\d+/,s);
});
taoensso.encore.parse_js_float = (function taoensso$encore$parse_js_float(s){
var x = parseFloat(s);
if(cljs.core.truth_(isNaN(x))){
return null;
} else {
return x;
}
});
taoensso.encore.parse_js_int = (function taoensso$encore$parse_js_int(s){
if(cljs.core.truth_(taoensso.encore.int_str_QMARK_(s))){
var x = parseInt(s,(10));
if(((cljs.core.not(isNaN(x))) && ((((x <= taoensso.encore.max_long)) && ((x >= taoensso.encore.min_long)))))){
return x;
} else {
return null;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_nzero = (function taoensso$encore$as__QMARK_nzero(x){
if(typeof x === 'number'){
if((x === (0))){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(clojure.string.blank_QMARK_(x)){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x);
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if(taoensso.encore.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_qname = (function taoensso$encore$as__QMARK_qname(x){
if(taoensso.encore.named_QMARK_(x)){
var n = cljs.core.name(x);
var b2__22159__auto__ = cljs.core.namespace(x);
if(cljs.core.truth_(b2__22159__auto__)){
var ns = b2__22159__auto__;
return [ns,"/",n].join('');
} else {
return n;
}
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_nempty_str = (function taoensso$encore$as__QMARK_nempty_str(x){
if(typeof x === 'string'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"")){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nblank_trim = (function taoensso$encore$as__QMARK_nblank_trim(x){
if(typeof x === 'string'){
var s = clojure.string.trim(x);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,"")){
return null;
} else {
return s;
}
} else {
return null;
}
});


taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if(typeof x === 'number'){
return cljs.core.long$(x);
} else {
if(typeof x === 'string'){
return taoensso.encore.parse_js_int(x);
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
return taoensso.encore.parse_js_float(x);
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_nat_int = (function taoensso$encore$as__QMARK_nat_int(x){
var b2__22159__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__22159__auto__)){
var n = b2__22159__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_int = (function taoensso$encore$as__QMARK_pos_int(x){
var b2__22159__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__22159__auto__)){
var n = b2__22159__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_float = (function taoensso$encore$as__QMARK_nat_float(x){
var b2__22159__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__22159__auto__)){
var n = b2__22159__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_float = (function taoensso$encore$as__QMARK_pos_float(x){
var b2__22159__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__22159__auto__)){
var n = b2__22159__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pnum = (function taoensso$encore$as__QMARK_pnum(x){
var b2__22159__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__22159__auto__)){
var f = b2__22159__auto__;
if((f > 1.0)){
return 1.0;
} else {
if((f < 0.0)){
return 0.0;
} else {
return f;
}
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_rnum = (function taoensso$encore$as__QMARK_rnum(x){
var b2__22159__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__22159__auto__)){
var f = b2__22159__auto__;
if((f > 1.0)){
return 1.0;
} else {
if((f < -1.0)){
return -0.0;
} else {
return f;
}
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if(((x === true) || (((x === false) || ((x == null)))))){
return x;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"false")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"FALSE")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"0")))))))){
return false;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(1))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"true")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"TRUE")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"1")))))))){
return true;
} else {
return null;
}
}
}
});

var regex_26041 = /^[^\s@]+@[^\s@]+\.\S*[^\.]$/;
taoensso.encore.as__QMARK_email = (function taoensso$encore$as__QMARK_email(var_args){
var G__25155 = arguments.length;
switch (G__25155) {
case 1:
return taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_s){
return taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$2((320),_QMARK_s);
}));

(taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$2 = (function (max_len,_QMARK_s){
var b2__22159__auto__ = (function (){var and__5000__auto__ = _QMARK_s;
if(cljs.core.truth_(and__5000__auto__)){
return clojure.string.trim(_QMARK_s);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(b2__22159__auto__)){
var s = b2__22159__auto__;
if((cljs.core.count(s) <= max_len)){
return cljs.core.re_find(regex_26041,s);
} else {
return null;
}
} else {
return null;
}
}));

(taoensso.encore.as__QMARK_email.cljs$lang$maxFixedArity = 2);


taoensso.encore.as__QMARK_nemail = (function taoensso$encore$as__QMARK_nemail(var_args){
var G__25157 = arguments.length;
switch (G__25157) {
case 1:
return taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_s){
var b2__22159__auto__ = taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$1(_QMARK_s);
if(cljs.core.truth_(b2__22159__auto__)){
var email = b2__22159__auto__;
return clojure.string.lower_case(email);
} else {
return null;
}
}));

(taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$2 = (function (max_len,_QMARK_s){
var b2__22159__auto__ = taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$2(max_len,_QMARK_s);
if(cljs.core.truth_(b2__22159__auto__)){
var email = b2__22159__auto__;
return clojure.string.lower_case(email);
} else {
return null;
}
}));

(taoensso.encore.as__QMARK_nemail.cljs$lang$maxFixedArity = 2);


taoensso.encore._as_throw = (function taoensso$encore$_as_throw(kind,x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["[encore/as-",cljs.core.name(kind),"] failed against arg: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred-kind","pred-kind",138885083),kind,new cljs.core.Keyword(null,"arg","arg",-1747261837),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x)], null)], null));
});
var _as_throw_26060 = taoensso.encore._as_throw;
taoensso.encore.as_nblank = (function taoensso$encore$as_nblank(x){
var or__5002__auto__ = taoensso.encore.as__QMARK_nblank(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (_as_throw_26060.cljs$core$IFn$_invoke$arity$2 ? _as_throw_26060.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nblank","nblank",626815585),x) : _as_throw_26060.call(null, new cljs.core.Keyword(null,"nblank","nblank",626815585),x));
}
});

taoensso.encore.as_nblank_trim = (function taoensso$encore$as_nblank_trim(x){
var or__5002__auto__ = taoensso.encore.as__QMARK_nblank_trim(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (_as_throw_26060.cljs$core$IFn$_invoke$arity$2 ? _as_throw_26060.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nblank-trim","nblank-trim",-1443525862),x) : _as_throw_26060.call(null, new cljs.core.Keyword(null,"nblank-trim","nblank-trim",-1443525862),x));
}
});

taoensso.encore.as_nempty_str = (function taoensso$encore$as_nempty_str(x){
var or__5002__auto__ = taoensso.encore.as__QMARK_nempty_str(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (_as_throw_26060.cljs$core$IFn$_invoke$arity$2 ? _as_throw_26060.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nempty-str","nempty-str",-215700100),x) : _as_throw_26060.call(null, new cljs.core.Keyword(null,"nempty-str","nempty-str",-215700100),x));
}
});

taoensso.encore.as_name = (function taoensso$encore$as_name(x){
var or__5002__auto__ = taoensso.encore.as__QMARK_name(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (_as_throw_26060.cljs$core$IFn$_invoke$arity$2 ? _as_throw_26060.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),x) : _as_throw_26060.call(null, new cljs.core.Keyword(null,"name","name",1843675177),x));
}
});

taoensso.encore.as_qname = (function taoensso$encore$as_qname(x){
var or__5002__auto__ = taoensso.encore.as__QMARK_qname(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (_as_throw_26060.cljs$core$IFn$_invoke$arity$2 ? _as_throw_26060.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qname","qname",-1983612179),x) : _as_throw_26060.call(null, new cljs.core.Keyword(null,"qname","qname",-1983612179),x));
}
});

taoensso.encore.as_nzero = (function taoensso$encore$as_nzero(x){
var or__5002__auto__ = taoensso.encore.as__QMARK_nzero(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (_as_throw_26060.cljs$core$IFn$_invoke$arity$2 ? _as_throw_26060.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nzero","nzero",2053173656),x) : _as_throw_26060.call(null, new cljs.core.Keyword(null,"nzero","nzero",2053173656),x));
}
});

taoensso.encore.as_kw = (function taoensso$encore$as_kw(x){
var or__5002__auto__ = taoensso.encore.as__QMARK_kw(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (_as_throw_26060.cljs$core$IFn$_invoke$arity$2 ? _as_throw_26060.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kw","kw",1158308175),x) : _as_throw_26060.call(null, new cljs.core.Keyword(null,"kw","kw",1158308175),x));
}
});

taoensso.encore.as_email = (function taoensso$encore$as_email(var_args){
var G__25159 = arguments.length;
switch (G__25159) {
case 1:
return taoensso.encore.as_email.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.as_email.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.as_email.cljs$core$IFn$_invoke$arity$1 = (function (x){
var or__5002__auto__ = taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (_as_throw_26060.cljs$core$IFn$_invoke$arity$2 ? _as_throw_26060.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"email","email",1415816706),x) : _as_throw_26060.call(null, new cljs.core.Keyword(null,"email","email",1415816706),x));
}
}));

(taoensso.encore.as_email.cljs$core$IFn$_invoke$arity$2 = (function (n,x){
var or__5002__auto__ = taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$2(n,x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (_as_throw_26060.cljs$core$IFn$_invoke$arity$2 ? _as_throw_26060.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"email","email",1415816706),x) : _as_throw_26060.call(null, new cljs.core.Keyword(null,"email","email",1415816706),x));
}
}));

(taoensso.encore.as_email.cljs$lang$maxFixedArity = 2);


taoensso.encore.as_nemail = (function taoensso$encore$as_nemail(var_args){
var G__25161 = arguments.length;
switch (G__25161) {
case 1:
return taoensso.encore.as_nemail.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.as_nemail.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.as_nemail.cljs$core$IFn$_invoke$arity$1 = (function (x){
var or__5002__auto__ = taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (_as_throw_26060.cljs$core$IFn$_invoke$arity$2 ? _as_throw_26060.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nemail","nemail",318708381),x) : _as_throw_26060.call(null, new cljs.core.Keyword(null,"nemail","nemail",318708381),x));
}
}));

(taoensso.encore.as_nemail.cljs$core$IFn$_invoke$arity$2 = (function (n,x){
var or__5002__auto__ = taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$2(n,x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (_as_throw_26060.cljs$core$IFn$_invoke$arity$2 ? _as_throw_26060.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nemail","nemail",318708381),x) : _as_throw_26060.call(null, new cljs.core.Keyword(null,"nemail","nemail",318708381),x));
}
}));

(taoensso.encore.as_nemail.cljs$lang$maxFixedArity = 2);


taoensso.encore.as_int = (function taoensso$encore$as_int(x){
var or__5002__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (_as_throw_26060.cljs$core$IFn$_invoke$arity$2 ? _as_throw_26060.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"int","int",-1741416922),x) : _as_throw_26060.call(null, new cljs.core.Keyword(null,"int","int",-1741416922),x));
}
});

taoensso.encore.as_nat_int = (function taoensso$encore$as_nat_int(x){
var or__5002__auto__ = taoensso.encore.as__QMARK_nat_int(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (_as_throw_26060.cljs$core$IFn$_invoke$arity$2 ? _as_throw_26060.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nat-int","nat-int",313429715),x) : _as_throw_26060.call(null, new cljs.core.Keyword(null,"nat-int","nat-int",313429715),x));
}
});

taoensso.encore.as_pos_int = (function taoensso$encore$as_pos_int(x){
var or__5002__auto__ = taoensso.encore.as__QMARK_pos_int(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (_as_throw_26060.cljs$core$IFn$_invoke$arity$2 ? _as_throw_26060.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos-int","pos-int",15030207),x) : _as_throw_26060.call(null, new cljs.core.Keyword(null,"pos-int","pos-int",15030207),x));
}
});

taoensso.encore.as_float = (function taoensso$encore$as_float(x){
var or__5002__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (_as_throw_26060.cljs$core$IFn$_invoke$arity$2 ? _as_throw_26060.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"float","float",-1732389368),x) : _as_throw_26060.call(null, new cljs.core.Keyword(null,"float","float",-1732389368),x));
}
});

taoensso.encore.as_nat_float = (function taoensso$encore$as_nat_float(x){
var or__5002__auto__ = taoensso.encore.as__QMARK_nat_float(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (_as_throw_26060.cljs$core$IFn$_invoke$arity$2 ? _as_throw_26060.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nat-float","nat-float",-371030973),x) : _as_throw_26060.call(null, new cljs.core.Keyword(null,"nat-float","nat-float",-371030973),x));
}
});

taoensso.encore.as_pos_float = (function taoensso$encore$as_pos_float(x){
var or__5002__auto__ = taoensso.encore.as__QMARK_pos_float(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (_as_throw_26060.cljs$core$IFn$_invoke$arity$2 ? _as_throw_26060.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos-float","pos-float",-715200084),x) : _as_throw_26060.call(null, new cljs.core.Keyword(null,"pos-float","pos-float",-715200084),x));
}
});

taoensso.encore.as_pnum = (function taoensso$encore$as_pnum(x){
var or__5002__auto__ = taoensso.encore.as__QMARK_pnum(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (_as_throw_26060.cljs$core$IFn$_invoke$arity$2 ? _as_throw_26060.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pnum","pnum",-602522434),x) : _as_throw_26060.call(null, new cljs.core.Keyword(null,"pnum","pnum",-602522434),x));
}
});

taoensso.encore.as_rnum = (function taoensso$encore$as_rnum(x){
var or__5002__auto__ = taoensso.encore.as__QMARK_rnum(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (_as_throw_26060.cljs$core$IFn$_invoke$arity$2 ? _as_throw_26060.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rnum","rnum",-783850724),x) : _as_throw_26060.call(null, new cljs.core.Keyword(null,"rnum","rnum",-783850724),x));
}
});

taoensso.encore.as_pnum_BANG_ = (function taoensso$encore$as_pnum_BANG_(x){
if(cljs.core.truth_(taoensso.encore.pnum_QMARK_(x))){
return x;
} else {
return (_as_throw_26060.cljs$core$IFn$_invoke$arity$2 ? _as_throw_26060.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pnum!","pnum!",837651383),x) : _as_throw_26060.call(null, new cljs.core.Keyword(null,"pnum!","pnum!",837651383),x));
}
});

taoensso.encore.as_rnum_BANG_ = (function taoensso$encore$as_rnum_BANG_(x){
if(cljs.core.truth_(taoensso.encore.rnum_QMARK_(x))){
return x;
} else {
return (_as_throw_26060.cljs$core$IFn$_invoke$arity$2 ? _as_throw_26060.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rnum!","rnum!",-567516079),x) : _as_throw_26060.call(null, new cljs.core.Keyword(null,"rnum!","rnum!",-567516079),x));
}
});

taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
var _QMARK_b = taoensso.encore.as__QMARK_bool(x);
if((_QMARK_b == null)){
return (_as_throw_26060.cljs$core$IFn$_invoke$arity$2 ? _as_throw_26060.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bool","bool",1444635321),x) : _as_throw_26060.call(null, new cljs.core.Keyword(null,"bool","bool",1444635321),x));
} else {
return _QMARK_b;
}
});
/**
 * Lightweight `have!` that provides less diagnostic info.
 */
taoensso.encore.is_BANG_ = (function taoensso$encore$is_BANG_(var_args){
var G__25163 = arguments.length;
switch (G__25163) {
case 1:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3(taoensso.encore.some_QMARK_,x,null);
}));

(taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3(pred,x,null);
}));

(taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,data){
if(cljs.core.truth_((function (){try{return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null, x));
}catch (e25164){var _ = e25164;
return null;
}})())){
return x;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["[encore/is!] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pred)," failed against arg: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0))].join(''),(function (){var G__25165 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),pred,new cljs.core.Keyword(null,"arg","arg",-1747261837),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x)], null)], null);
var G__25166 = new cljs.core.Keyword(null,"data","data",-232669377);
var G__25167 = data;
return (taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3 ? taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(G__25165,G__25166,G__25167) : taoensso.encore.assoc_some.call(null, G__25165,G__25166,G__25167));
})());
}
}));

(taoensso.encore.is_BANG_.cljs$lang$maxFixedArity = 3);

taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as_qname(k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var G__25174 = arguments.length;
switch (G__25174) {
case 1:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1 = (function (ks){
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2(ks,false);
}));

(taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2 = (function (ks,omit_slash_QMARK_){
if(cljs.core.seq(ks)){
var parts = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if((in$ == null)){
return acc;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,acc,taoensso.encore.explode_keyword(in$));
}
}),cljs.core.PersistentVector.EMPTY,ks);
if(cljs.core.seq(parts)){
if(cljs.core.truth_(omit_slash_QMARK_)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",parts));
} else {
var ppop = cljs.core.pop(parts);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq(ppop))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ppop):null),cljs.core.peek(parts));
}
} else {
return null;
}
} else {
return null;
}
}));

(taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = 2);

taoensso.encore.convey_reduced = (function taoensso$encore$convey_reduced(x){
if(cljs.core.reduced_QMARK_(x)){
return cljs.core.reduced(x);
} else {
return x;
}
});
/**
 * Public version of `core/preserving-reduced`.
 */
taoensso.encore.preserve_reduced = (function taoensso$encore$preserve_reduced(rf){
return (function (acc,in$){
var result = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,in$) : rf.call(null, acc,in$));
if(cljs.core.reduced_QMARK_(result)){
return cljs.core.reduced(result);
} else {
return result;
}
});
});
/**
 * Like `reduce-kv` but takes a flat sequence of kv pairs.
 */
taoensso.encore.reduce_kvs = (function taoensso$encore$reduce_kvs(rf,init,kvs){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1((2)),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (acc,p__25177){
var vec__25178 = p__25177;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25178,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25178,(1),null);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(acc,k,v) : rf.call(null, acc,k,v));
})),init,kvs);
});
/**
 * No longer useful with Clojure 1.7+, just use (reduce f init (range ...)).
 */
taoensso.encore.reduce_n = (function taoensso$encore$reduce_n(var_args){
var G__25182 = arguments.length;
switch (G__25182) {
case 3:
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3 = (function (rf,init,end){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,init,cljs.core.range.cljs$core$IFn$_invoke$arity$1(end));
}));

(taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$4 = (function (rf,init,start,end){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,init,cljs.core.range.cljs$core$IFn$_invoke$arity$2(start,end));
}));

(taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$5 = (function (rf,init,start,end,step){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,init,cljs.core.range.cljs$core$IFn$_invoke$arity$3(start,end,step));
}));

(taoensso.encore.reduce_n.cljs$lang$maxFixedArity = 5);

/**
 * Like `reduce` but takes (rf [acc idx in]) with idx as in `map-indexed`.
 *  As `reduce-kv` against vector coll, but works on any seqable coll type.
 */
taoensso.encore.reduce_indexed = (function taoensso$encore$reduce_indexed(rf,init,coll){
var c = (taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.counter.call(null, ));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
var G__25183 = acc;
var G__25184 = (c.cljs$core$IFn$_invoke$arity$0 ? c.cljs$core$IFn$_invoke$arity$0() : c.call(null, ));
var G__25185 = in$;
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__25183,G__25184,G__25185) : rf.call(null, G__25183,G__25184,G__25185));
}),init,coll);
});
/**
 * Like `reduce-kv` but for JavaScript objects.
 */
taoensso.encore.reduce_obj = (function taoensso$encore$reduce_obj(f,init,o){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
var G__25186 = acc;
var G__25187 = k;
var G__25188 = taoensso.encore.goog$module$goog$object.get(o,k,null);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__25186,G__25187,G__25188) : f.call(null, G__25186,G__25187,G__25188));
}),init,cljs.core.js_keys(o));
});
taoensso.encore.run_BANG_ = (function taoensso$encore$run_BANG_(proc,coll){
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__25190_SHARP_,p2__25189_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$1 ? proc.cljs$core$IFn$_invoke$arity$1(p2__25189_SHARP_) : proc.call(null, p2__25189_SHARP_));
}),null,coll);

return null;
});

taoensso.encore.run_kv_BANG_ = (function taoensso$encore$run_kv_BANG_(proc,m){
cljs.core.reduce_kv((function (p1__25193_SHARP_,p2__25191_SHARP_,p3__25192_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__25191_SHARP_,p3__25192_SHARP_) : proc.call(null, p2__25191_SHARP_,p3__25192_SHARP_));
}),null,m);

return null;
});

taoensso.encore.run_kvs_BANG_ = (function taoensso$encore$run_kvs_BANG_(proc,kvs){
taoensso.encore.reduce_kvs((function (p1__25196_SHARP_,p2__25194_SHARP_,p3__25195_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__25194_SHARP_,p3__25195_SHARP_) : proc.call(null, p2__25194_SHARP_,p3__25195_SHARP_));
}),null,kvs);

return null;
});

taoensso.encore.run_obj_BANG_ = (function taoensso$encore$run_obj_BANG_(proc,obj){
taoensso.encore.reduce_obj((function (p1__25199_SHARP_,p2__25197_SHARP_,p3__25198_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__25197_SHARP_,p3__25198_SHARP_) : proc.call(null, p2__25197_SHARP_,p3__25198_SHARP_));
}),null,obj);

return null;
});
var rf_26111 = (function (pred){
return (function (_acc,in$){
var b2__22159__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null, in$));
if(cljs.core.truth_(b2__22159__auto__)){
var p = b2__22159__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
});
});
taoensso.encore.rsome = (function taoensso$encore$rsome(var_args){
var G__25201 = arguments.length;
switch (G__25201) {
case 2:
return taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf_26111(pred),null,coll);
}));

(taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$3 = (function (xform,pred,coll){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.completing.cljs$core$IFn$_invoke$arity$1(rf_26111(pred)),null,coll);
}));

(taoensso.encore.rsome.cljs$lang$maxFixedArity = 3);


var rf_26114 = (function (pred){
return (function (_acc,k,v){
var b2__22159__auto__ = (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null, k,v));
if(cljs.core.truth_(b2__22159__auto__)){
var p = b2__22159__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
});
});
var tf_26115 = (function (pred){
return (function (_acc,p__25202){
var vec__25203 = p__25202;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25203,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25203,(1),null);
var b2__22159__auto__ = (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null, k,v));
if(cljs.core.truth_(b2__22159__auto__)){
var p = b2__22159__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
});
});
taoensso.encore.rsome_kv = (function taoensso$encore$rsome_kv(pred,coll){
return cljs.core.reduce_kv(rf_26114(pred),null,coll);
});

var rf_26117 = (function (pred){
return (function (_acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null, in$)))){
return cljs.core.reduced(in$);
} else {
return null;
}
});
});
taoensso.encore.rfirst = (function taoensso$encore$rfirst(var_args){
var G__25207 = arguments.length;
switch (G__25207) {
case 2:
return taoensso.encore.rfirst.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.rfirst.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.rfirst.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf_26117(pred),null,coll);
}));

(taoensso.encore.rfirst.cljs$core$IFn$_invoke$arity$3 = (function (xform,pred,coll){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.completing.cljs$core$IFn$_invoke$arity$1(rf_26117(pred)),null,coll);
}));

(taoensso.encore.rfirst.cljs$lang$maxFixedArity = 3);


var rf_26121 = (function (pred){
return (function (_acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null, k,v)))){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
} else {
return null;
}
});
});
var tf_26122 = (function (pred){
return (function (_acc,p__25208){
var vec__25209 = p__25208;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25209,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25209,(1),null);
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null, k,v)))){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
} else {
return null;
}
});
});
taoensso.encore.rfirst_kv = (function taoensso$encore$rfirst_kv(pred,coll){
return cljs.core.reduce_kv(rf_26121(pred),null,coll);
});

var rf_26127 = (function (pred){
return (function (_acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null, in$)))){
return true;
} else {
return cljs.core.reduced(false);
}
});
});
taoensso.encore.revery_QMARK_ = (function taoensso$encore$revery_QMARK_(var_args){
var G__25213 = arguments.length;
switch (G__25213) {
case 2:
return taoensso.encore.revery_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.revery_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.revery_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf_26127(pred),true,coll);
}));

(taoensso.encore.revery_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (xform,pred,coll){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.completing.cljs$core$IFn$_invoke$arity$1(rf_26127(pred)),true,coll);
}));

(taoensso.encore.revery_QMARK_.cljs$lang$maxFixedArity = 3);


var rf_26130 = (function (pred){
return (function (_acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null, k,v)))){
return true;
} else {
return cljs.core.reduced(false);
}
});
});
var tf_26131 = (function (pred){
return (function (_acc,p__25214){
var vec__25215 = p__25214;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25215,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25215,(1),null);
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null, k,v)))){
return true;
} else {
return cljs.core.reduced(false);
}
});
});
taoensso.encore.revery_kv_QMARK_ = (function taoensso$encore$revery_kv_QMARK_(pred,coll){
return cljs.core.reduce_kv(rf_26130(pred),true,coll);
});
/**
 * Reduces given sequential xs and ys as pairs (e.g. key-val pairs).
 *   Calls (rf acc x y) for each sequential pair.
 * 
 *   Useful, among other things, as a more flexible version of `zipmap`.
 */
taoensso.encore.reduce_zip = (function taoensso$encore$reduce_zip(var_args){
var G__25221 = arguments.length;
switch (G__25221) {
case 4:
return taoensso.encore.reduce_zip.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.reduce_zip.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reduce_zip.cljs$core$IFn$_invoke$arity$4 = (function (rf,init,xs,ys){
return taoensso.encore.reduce_zip.cljs$core$IFn$_invoke$arity$5(rf,init,xs,ys,new cljs.core.Keyword("taoensso.encore","skip","taoensso.encore/skip",-726061459));
}));

(taoensso.encore.reduce_zip.cljs$core$IFn$_invoke$arity$5 = (function (rf,init,xs,ys,not_found){
if(((cljs.core.vector_QMARK_(xs)) && (cljs.core.vector_QMARK_(ys)))){
var n = ((cljs.core.keyword_identical_QMARK_(not_found,new cljs.core.Keyword("taoensso.encore","skip","taoensso.encore/skip",-726061459)))?(function (){var x__5090__auto__ = cljs.core.count(xs);
var y__5091__auto__ = cljs.core.count(ys);
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})():(function (){var x__5087__auto__ = cljs.core.count(xs);
var y__5088__auto__ = cljs.core.count(ys);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})());
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3((function (acc,idx){
var G__25222 = acc;
var G__25223 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(xs,idx,not_found);
var G__25224 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ys,idx,not_found);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__25222,G__25223,G__25224) : rf.call(null, G__25222,G__25223,G__25224));
}),init,n);
} else {
var not_found_QMARK_ = (!(cljs.core.keyword_identical_QMARK_(not_found,new cljs.core.Keyword("taoensso.encore","skip","taoensso.encore/skip",-726061459))));
var acc = init;
var xs__$1 = cljs.core.seq(xs);
var ys__$1 = cljs.core.seq(ys);
while(true){
if(((not_found_QMARK_)?((xs__$1) || (ys__$1)):((xs__$1) && (ys__$1)))){
var result = (function (){var G__25225 = acc;
var G__25226 = cljs.core.first((function (){var or__5002__auto__ = xs__$1;
if(or__5002__auto__){
return or__5002__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [not_found], null);
}
})());
var G__25227 = cljs.core.first((function (){var or__5002__auto__ = ys__$1;
if(or__5002__auto__){
return or__5002__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [not_found], null);
}
})());
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__25225,G__25226,G__25227) : rf.call(null, G__25225,G__25226,G__25227));
})();
if(cljs.core.reduced_QMARK_(result)){
return cljs.core.deref(result);
} else {
var G__26143 = result;
var G__26144 = cljs.core.next(xs__$1);
var G__26145 = cljs.core.next(ys__$1);
acc = G__26143;
xs__$1 = G__26144;
ys__$1 = G__26145;
continue;
}
} else {
return acc;
}
break;
}
}
}));

(taoensso.encore.reduce_zip.cljs$lang$maxFixedArity = 5);


/**
* @constructor
*/
taoensso.encore.Tup2 = (function (x,y){
this.x = x;
this.y = y;
});

(taoensso.encore.Tup2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(taoensso.encore.Tup2.cljs$lang$type = true);

(taoensso.encore.Tup2.cljs$lang$ctorStr = "taoensso.encore/Tup2");

(taoensso.encore.Tup2.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.encore/Tup2");
}));

/**
 * Positional factory function for taoensso.encore/Tup2.
 */
taoensso.encore.__GT_Tup2 = (function taoensso$encore$__GT_Tup2(x,y){
return (new taoensso.encore.Tup2(x,y));
});



/**
* @constructor
*/
taoensso.encore.Tup3 = (function (x,y,z){
this.x = x;
this.y = y;
this.z = z;
});

(taoensso.encore.Tup3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"z","z",851004344,null)], null);
}));

(taoensso.encore.Tup3.cljs$lang$type = true);

(taoensso.encore.Tup3.cljs$lang$ctorStr = "taoensso.encore/Tup3");

(taoensso.encore.Tup3.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.encore/Tup3");
}));

/**
 * Positional factory function for taoensso.encore/Tup3.
 */
taoensso.encore.__GT_Tup3 = (function taoensso$encore$__GT_Tup3(x,y,z){
return (new taoensso.encore.Tup3(x,y,z));
});

/**
 * Like `reduce` but supports separate simultaneous accumulators
 *   as a micro-optimization when reducing a large collection multiple
 *   times.
 */
taoensso.encore.reduce_multi = (function taoensso$encore$reduce_multi(var_args){
var G__25229 = arguments.length;
switch (G__25229) {
case 3:
return taoensso.encore.reduce_multi.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return taoensso.encore.reduce_multi.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 7:
return taoensso.encore.reduce_multi.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reduce_multi.cljs$core$IFn$_invoke$arity$3 = (function (rf,init,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,init,coll);
}));

(taoensso.encore.reduce_multi.cljs$core$IFn$_invoke$arity$5 = (function (rf1,init1,rf2,init2,coll){
var tuple = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (tuple,in$){
var x = tuple.x;
var y = tuple.y;
var rx_QMARK_ = cljs.core.reduced_QMARK_(x);
var ry_QMARK_ = cljs.core.reduced_QMARK_(y);
if(((rx_QMARK_) && (ry_QMARK_))){
return cljs.core.reduced(tuple);
} else {
var x__$1 = ((rx_QMARK_)?x:(rf1.cljs$core$IFn$_invoke$arity$2 ? rf1.cljs$core$IFn$_invoke$arity$2(x,in$) : rf1.call(null, x,in$)));
var y__$1 = ((ry_QMARK_)?y:(rf2.cljs$core$IFn$_invoke$arity$2 ? rf2.cljs$core$IFn$_invoke$arity$2(y,in$) : rf2.call(null, y,in$)));
return (new taoensso.encore.Tup2(x__$1,y__$1));
}
}),(new taoensso.encore.Tup2(init1,init2)),coll);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.unreduced(tuple.x),cljs.core.unreduced(tuple.y)], null);
}));

(taoensso.encore.reduce_multi.cljs$core$IFn$_invoke$arity$7 = (function (rf1,init1,rf2,init2,rf3,init3,coll){
var tuple = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (tuple,in$){
var x = tuple.x;
var y = tuple.y;
var z = tuple.z;
var rx_QMARK_ = cljs.core.reduced_QMARK_(x);
var ry_QMARK_ = cljs.core.reduced_QMARK_(y);
var rz_QMARK_ = cljs.core.reduced_QMARK_(z);
if(((rx_QMARK_) && (((ry_QMARK_) && (rz_QMARK_))))){
return cljs.core.reduced(tuple);
} else {
var x__$1 = ((rx_QMARK_)?x:(rf1.cljs$core$IFn$_invoke$arity$2 ? rf1.cljs$core$IFn$_invoke$arity$2(x,in$) : rf1.call(null, x,in$)));
var y__$1 = ((ry_QMARK_)?y:(rf2.cljs$core$IFn$_invoke$arity$2 ? rf2.cljs$core$IFn$_invoke$arity$2(y,in$) : rf2.call(null, y,in$)));
var z__$1 = ((rz_QMARK_)?z:(rf3.cljs$core$IFn$_invoke$arity$2 ? rf3.cljs$core$IFn$_invoke$arity$2(z,in$) : rf3.call(null, z,in$)));
return (new taoensso.encore.Tup3(x__$1,y__$1,z__$1));
}
}),(new taoensso.encore.Tup3(init1,init2,init3)),coll);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.unreduced(tuple.x),cljs.core.unreduced(tuple.y),cljs.core.unreduced(tuple.z)], null);
}));

(taoensso.encore.reduce_multi.cljs$lang$maxFixedArity = 7);

/**
 * Reduces sequence of elements interleaved from given `colls`.
 *   (reduce-interleave-all conj [] [[:a :b] [1 2 3]]) => [:a 1 :b 2 3]
 */
taoensso.encore.reduce_interleave_all = (function taoensso$encore$reduce_interleave_all(rf,init,colls){
if(cljs.core.empty_QMARK_(colls)){
return init;
} else {
var acc = init;
var colls__$1 = colls;
while(true){
var tuple = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (acc,colls__$1){
return (function (tuple,in$){
if(cljs.core.empty_QMARK_(in$)){
return tuple;
} else {
var vec__25230 = in$;
var seq__25231 = cljs.core.seq(vec__25230);
var first__25232 = cljs.core.first(seq__25231);
var seq__25231__$1 = cljs.core.next(seq__25231);
var in1 = first__25232;
var next_in = seq__25231__$1;
var acc__$1 = tuple.x;
var ncs = tuple.y;
var res = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc__$1,in1) : rf.call(null, acc__$1,in1));
if(cljs.core.reduced_QMARK_(res)){
return cljs.core.reduced((new taoensso.encore.Tup2(cljs.core.deref(res),null)));
} else {
return (new taoensso.encore.Tup2(res,((next_in)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__5002__auto__ = ncs;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),next_in):ncs)));
}
}
});})(acc,colls__$1))
,(new taoensso.encore.Tup2(acc,null)),colls__$1);
var acc__$1 = tuple.x;
var next_colls = tuple.y;
if(cljs.core.truth_(next_colls)){
var G__26154 = acc__$1;
var G__26155 = next_colls;
acc = G__26154;
colls__$1 = G__26155;
continue;
} else {
return acc__$1;
}
break;
}
}
});
var map_like_QMARK__26156 = (function (p1__25233_SHARP_){
return ((cljs.core.map_QMARK_(p1__25233_SHARP_)) || (cljs.core.record_QMARK_(p1__25233_SHARP_)));
});
/**
 * Private, don't use.
 *  Simpler, faster `clojure.walk/postwalk`.
 */
taoensso.encore.postwalk = (function taoensso$encore$postwalk(var_args){
var G__25237 = arguments.length;
switch (G__25237) {
case 2:
return taoensso.encore.postwalk.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.postwalk.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.postwalk.cljs$core$IFn$_invoke$arity$2 = (function (x,f){
return taoensso.encore.postwalk.cljs$core$IFn$_invoke$arity$3(false,x,f);
}));

(taoensso.encore.postwalk.cljs$core$IFn$_invoke$arity$3 = (function (preserve_seqs_QMARK_,x,f){
var ps = (cljs.core.truth_(preserve_seqs_QMARK_)?cljs.core.seq:cljs.core.identity);
var pw = (function (p1__25234_SHARP_,p2__25235_SHARP_){
return taoensso.encore.postwalk.cljs$core$IFn$_invoke$arity$3(preserve_seqs_QMARK_,p1__25234_SHARP_,p2__25235_SHARP_);
});
if(map_like_QMARK__26156(x)){
var G__25238 = cljs.core.reduce_kv((function (acc,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,pw(k,f),pw(v,f));
}),cljs.core.PersistentArrayMap.EMPTY,x);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25238) : f.call(null, G__25238));
} else {
if(cljs.core.seq_QMARK_(x)){
var G__25239 = (function (){var G__25240 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,pw(in$,f));
}),cljs.core.PersistentVector.EMPTY,x);
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(G__25240) : ps.call(null, G__25240));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25239) : f.call(null, G__25239));
} else {
if(cljs.core.coll_QMARK_(x)){
var G__25241 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,pw(in$,f));
}),cljs.core.empty(x),x);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25241) : f.call(null, G__25241));
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null, x));
}
}
}
}));

(taoensso.encore.postwalk.cljs$lang$maxFixedArity = 3);

taoensso.encore.approx_EQ__EQ_ = (function taoensso$encore$approx_EQ__EQ_(var_args){
var G__25244 = arguments.length;
switch (G__25244) {
case 2:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (Math.abs((x - y)) < 0.001);
}));

(taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (signf,x,y){
return (Math.abs((x - y)) < signf);
}));

(taoensso.encore.approx_EQ__EQ_.cljs$lang$maxFixedArity = 3);

taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.clamp_int = (function taoensso$encore$clamp_int(nmin,nmax,n){
var nmin__$1 = cljs.core.long$(nmin);
var nmax__$1 = cljs.core.long$(nmax);
var n__$1 = cljs.core.long$(n);
if((n__$1 < nmin__$1)){
return nmin__$1;
} else {
if((n__$1 > nmax__$1)){
return nmax__$1;
} else {
return n__$1;
}
}
});
taoensso.encore.clamp_float = (function taoensso$encore$clamp_float(nmin,nmax,n){
var nmin__$1 = nmin;
var nmax__$1 = nmax;
var n__$1 = n;
if((n__$1 < nmin__$1)){
return nmin__$1;
} else {
if((n__$1 > nmax__$1)){
return nmax__$1;
} else {
return n__$1;
}
}
});
taoensso.encore.pnum_complement = (function taoensso$encore$pnum_complement(pnum){
return (1.0 - pnum);
});
taoensso.encore.as_pnum_complement = (function taoensso$encore$as_pnum_complement(x){
return (1.0 - taoensso.encore.as_pnum(x));
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
/**
 * General purpose rounding util.
 *   Returns given number `n` rounded according to given options:
 *  - `kind`      - ∈ #{:round :floor :ceil :trunc}     (default `:round`)
 *  - `precision` - Number of decimal places to include (default `nil` => none)
 */
taoensso.encore.round = (function taoensso$encore$round(var_args){
var G__25257 = arguments.length;
switch (G__25257) {
case 1:
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.round.cljs$core$IFn$_invoke$arity$1 = (function (n){
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"round","round",2009433328),null,n);
}));

(taoensso.encore.round.cljs$core$IFn$_invoke$arity$2 = (function (a1,a2){
if((a2 instanceof cljs.core.Keyword)){
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$3(a2,null,a1);
} else {
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$3(a1,null,a2);
}
}));

(taoensso.encore.round.cljs$core$IFn$_invoke$arity$3 = (function (a1,a2,a3){
if((a2 instanceof cljs.core.Keyword)){
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$3(a2,a3,a1);
} else {
var n = a3;
var modifier = (cljs.core.truth_(a2)?Math.pow(10.0,a2):null);
var n_STAR_ = (cljs.core.truth_(modifier)?(n * modifier):n);
var rounded = (function (){var kind = a1;
var G__25258 = kind;
var G__25258__$1 = (((G__25258 instanceof cljs.core.Keyword))?G__25258.fqn:null);
switch (G__25258__$1) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$(n_STAR_);

break;
default:
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"param","param",2013631823),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Symbol("taoensso.encore","round","taoensso.encore/round",716371329,null),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ceil","ceil",-1824929952),null,new cljs.core.Keyword(null,"trunc","trunc",-256146097),null,new cljs.core.Keyword(null,"round","round",2009433328),null,new cljs.core.Keyword(null,"floor","floor",1882041021),null], null), null)], null));

}
})();
if(cljs.core.truth_(modifier)){
return (rounded / modifier);
} else {
return cljs.core.long$(rounded);
}
}
}));

(taoensso.encore.round.cljs$lang$maxFixedArity = 3);

taoensso.encore.round0 = (function taoensso$encore$round0(n){
return Math.round(n);
});

taoensso.encore.round1 = (function taoensso$encore$round1(n){
return (Math.round((n * 10.0)) / 10.0);
});

taoensso.encore.round2 = (function taoensso$encore$round2(n){
return (Math.round((n * 100.0)) / 100.0);
});

taoensso.encore.roundn = (function taoensso$encore$roundn(precision,n){
var p = Math.pow(10.0,cljs.core.long$(precision));
return (Math.round((n * p)) / p);
});

taoensso.encore.perc = (function taoensso$encore$perc(n,divisor){
return Math.round(((n / divisor) * 100.0));
});
/**
 * Returns binary exponential backoff value for n<=36.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var G__25260 = arguments.length;
switch (G__25260) {
case 1:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1 = (function (n_attempt){
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2(n_attempt,null);
}));

(taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2 = (function (n_attempt,p__25261){
var map__25262 = p__25261;
var map__25262__$1 = cljs.core.__destructure_map(map__25262);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25262__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25262__$1,new cljs.core.Keyword(null,"max","max",61366548));
var factor = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25262__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));
var n = (((n_attempt > (36)))?(36):n_attempt);
var b = Math.pow((2),n);
var t = cljs.core.long$((((b + cljs.core.rand.cljs$core$IFn$_invoke$arity$1(b)) * 0.5) * factor));
var t__$1 = cljs.core.long$((cljs.core.truth_(min)?(((t < min))?min:t):t));
var t__$2 = cljs.core.long$((cljs.core.truth_(max)?(((t__$1 > max))?max:t__$1):t__$1));
return t__$2;
}));

(taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = 2);

/**
 * Returns true with given probability ∈ ℝ[0,1].
 */
taoensso.encore.chance = (function taoensso$encore$chance(prob){
return (Math.random() < prob);
});
taoensso.encore.node_target_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs");
taoensso.encore.react_native_target_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"react-native");
taoensso.encore.js__QMARK_window = (((((!(taoensso.encore.react_native_target_QMARK_))) && ((typeof window !== 'undefined'))))?window:null);
taoensso.encore.js__QMARK_process = (((typeof process !== 'undefined'))?process:null);
taoensso.encore.js__QMARK_crypto = ((taoensso.encore.react_native_target_QMARK_)?null:(function (){var or__5002__auto__ = (((typeof crypto !== 'undefined'))?crypto:null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if((typeof window !== 'undefined')){
return taoensso.encore.goog$module$goog$object.get(window,"crypto");
} else {
return null;
}
}
})());
/**
 * Like `force` for refs.
 */
taoensso.encore.force_ref = (function taoensso$encore$force_ref(x){
if(taoensso.encore.derefable_QMARK_(x)){
return cljs.core.deref(x);
} else {
return x;
}
});
/**
 * Like `force` for vars.
 */
taoensso.encore.force_var = (function taoensso$encore$force_var(x){
if(cljs.core.var_QMARK_(x)){
return cljs.core.deref(x);
} else {
return x;
}
});
taoensso.encore.merge_meta = (function taoensso$encore$merge_meta(x,m){
return cljs.core.with_meta(x,(function (){var G__25263 = cljs.core.meta(x);
var G__25264 = m;
return (taoensso.encore.merge.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.merge.cljs$core$IFn$_invoke$arity$2(G__25263,G__25264) : taoensso.encore.merge.call(null, G__25263,G__25264));
})());
});
taoensso.encore.without_meta = (function taoensso$encore$without_meta(x){
if(cljs.core.truth_(cljs.core.meta(x))){
return cljs.core.with_meta(x,null);
} else {
return x;
}
});
taoensso.encore.some_EQ_ = (function taoensso$encore$some_EQ_(var_args){
var G__25270 = arguments.length;
switch (G__25270) {
case 2:
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___26203 = arguments.length;
var i__5727__auto___26204 = (0);
while(true){
if((i__5727__auto___26204 < len__5726__auto___26203)){
args_arr__5751__auto__.push((arguments[i__5727__auto___26204]));

var G__26205 = (i__5727__auto___26204 + (1));
i__5727__auto___26204 = G__26205;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return ((taoensso.encore.some_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)));
}));

(taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__5000__auto__ = taoensso.encore.some_QMARK_(x);
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
if(and__5000__auto____$1){
return taoensso.encore.revery_QMARK_.cljs$core$IFn$_invoke$arity$2((function (p1__25265_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__25265_SHARP_,x);
}),more);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}));

/** @this {Function} */
(taoensso.encore.some_EQ_.cljs$lang$applyTo = (function (seq25267){
var G__25268 = cljs.core.first(seq25267);
var seq25267__$1 = cljs.core.next(seq25267);
var G__25269 = cljs.core.first(seq25267__$1);
var seq25267__$2 = cljs.core.next(seq25267__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25268,G__25269,seq25267__$2);
}));

(taoensso.encore.some_EQ_.cljs$lang$maxFixedArity = (2));

/**
 * Returns first non-nil arg, or nil.
 */
taoensso.encore.nnil = (function taoensso$encore$nnil(var_args){
var G__25276 = arguments.length;
switch (G__25276) {
case 0:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___26209 = arguments.length;
var i__5727__auto___26210 = (0);
while(true){
if((i__5727__auto___26210 < len__5726__auto___26209)){
args_arr__5751__auto__.push((arguments[i__5727__auto___26210]));

var G__26211 = (i__5727__auto___26210 + (1));
i__5727__auto___26210 = G__26211;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((3) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((3)),(0),null)):null);
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5752__auto__);

}
});

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if((x == null)){
return y;
} else {
return x;
}
}));

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
if((x == null)){
if((y == null)){
return z;
} else {
return y;
}
} else {
return x;
}
}));

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,z,more){
if((x == null)){
if((y == null)){
if((z == null)){
return taoensso.encore.rfirst.cljs$core$IFn$_invoke$arity$2(taoensso.encore.some_QMARK_,more);
} else {
return z;
}
} else {
return y;
}
} else {
return x;
}
}));

/** @this {Function} */
(taoensso.encore.nnil.cljs$lang$applyTo = (function (seq25272){
var G__25273 = cljs.core.first(seq25272);
var seq25272__$1 = cljs.core.next(seq25272);
var G__25274 = cljs.core.first(seq25272__$1);
var seq25272__$2 = cljs.core.next(seq25272__$1);
var G__25275 = cljs.core.first(seq25272__$2);
var seq25272__$3 = cljs.core.next(seq25272__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25273,G__25274,G__25275,seq25272__$3);
}));

(taoensso.encore.nnil.cljs$lang$maxFixedArity = (3));

taoensso.encore.parse_version = (function taoensso$encore$parse_version(x){
var vec__25277 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),/-/,(2));
var s_version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25277,(0),null);
var _QMARK_s_qualifier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25277,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"version","version",425292698),(function (){var b2__22159__auto__ = cljs.core.re_seq(/\d+/,s_version);
if(cljs.core.truth_(b2__22159__auto__)){
var s = b2__22159__auto__;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_int,s);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"qualifier","qualifier",125841738),(function (){var b2__22159__auto__ = _QMARK_s_qualifier;
if(cljs.core.truth_(b2__22159__auto__)){
var s = b2__22159__auto__;
return clojure.string.lower_case(s);
} else {
return null;
}
})()], null);
});
/**
 * Returns a `MapEntry` with given key and value.
 */
taoensso.encore.map_entry = (function taoensso$encore$map_entry(k,v){
return (new cljs.core.MapEntry(k,v,null));
});
/**
 * Returns true iff given a `PersistentQueue`.
 */
taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a new `PersistentQueue`.
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var G__25282 = arguments.length;
switch (G__25282) {
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0(),coll);
}));

(taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
}));

(taoensso.encore.queue.cljs$lang$maxFixedArity = 1);

/**
 * Returns a new `PersistentQueue` given items.
 */
taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26223 = arguments.length;
var i__5727__auto___26224 = (0);
while(true){
if((i__5727__auto___26224 < len__5726__auto___26223)){
args__5732__auto__.push((arguments[i__5727__auto___26224]));

var G__26225 = (i__5727__auto___26224 + (1));
i__5727__auto___26224 = G__26225;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1(items);
}));

(taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq25283){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25283));
}));

taoensso.encore.ensure_vec = (function taoensso$encore$ensure_vec(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
return cljs.core.vec(x);
}
});
taoensso.encore.ensure_set = (function taoensso$encore$ensure_set(x){
if(cljs.core.set_QMARK_(x)){
return x;
} else {
return cljs.core.set(x);
}
});
/**
 * Like `assoc` for JS objects.
 */
taoensso.encore.oset = (function taoensso$encore$oset(o,k,v){
return taoensso.encore.goog$module$goog$object.set((((o == null))?({}):o),cljs.core.name(k),v);
});
var sentinel_26230 = ({});
/**
 * Experimental, subject to change without notice.
 *     Like `assoc-in` for JS objects.
 */
taoensso.encore.oset_in = (function taoensso$encore$oset_in(o,ks,v){
var o__$1 = (((o == null))?({}):o);
var b2__22159__auto__ = cljs.core.seq(ks);
if(b2__22159__auto__){
var ks__$1 = b2__22159__auto__;
var o_next = o__$1;
var ks_next = ks__$1;
while(true){
var k1 = cljs.core.name(cljs.core.first(ks_next));
var o_next__$1 = (function (){var o_next_STAR_ = taoensso.encore.goog$module$goog$object.get(o_next,k1,sentinel_26230);
if((o_next_STAR_ === sentinel_26230)){
var new_obj = ({});
taoensso.encore.goog$module$goog$object.set(o_next,k1,new_obj);

return new_obj;
} else {
return o_next_STAR_;
}
})();
var b2__22159__auto____$1 = cljs.core.next(ks_next);
if(b2__22159__auto____$1){
var ks_next__$1 = b2__22159__auto____$1;
var G__26232 = o_next__$1;
var G__26233 = ks_next__$1;
o_next = G__26232;
ks_next = G__26233;
continue;
} else {
taoensso.encore.goog$module$goog$object.set(o_next__$1,k1,v);

return o__$1;
}
break;
}
} else {
return o__$1;
}
});
/**
 * Like `get` for JS objects.
 */
taoensso.encore.oget = (function taoensso$encore$oget(var_args){
var G__25295 = arguments.length;
switch (G__25295) {
case 1:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.oget.cljs$core$IFn$_invoke$arity$1 = (function (k){
var b2__22159__auto__ = taoensso.encore.js__QMARK_window;
if(cljs.core.truth_(b2__22159__auto__)){
var o = b2__22159__auto__;
return taoensso.encore.goog$module$goog$object.get(o,cljs.core.name(k));
} else {
return null;
}
}));

(taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
if(cljs.core.truth_(o)){
return taoensso.encore.goog$module$goog$object.get(o,cljs.core.name(k),null);
} else {
return null;
}
}));

(taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k,not_found){
if(cljs.core.truth_(o)){
return taoensso.encore.goog$module$goog$object.get(o,cljs.core.name(k),not_found);
} else {
return not_found;
}
}));

(taoensso.encore.oget.cljs$lang$maxFixedArity = 3);

var sentinel_26236 = ({});
/**
 * Like `get-in` for JS objects.
 */
taoensso.encore.oget_in = (function taoensso$encore$oget_in(var_args){
var G__25299 = arguments.length;
switch (G__25299) {
case 1:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$1 = (function (ks){
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3(taoensso.encore.js__QMARK_window,ks,null);
}));

(taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2 = (function (o,ks){
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3(o,ks,null);
}));

(taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3 = (function (o,ks,not_found){
if(cljs.core.truth_(o)){
var o__$1 = o;
var ks__$1 = cljs.core.seq(ks);
while(true){
if(ks__$1){
var o__$2 = taoensso.encore.goog$module$goog$object.get(o__$1,cljs.core.name(cljs.core.first(ks__$1)),sentinel_26236);
if((o__$2 === sentinel_26236)){
return not_found;
} else {
var G__26240 = o__$2;
var G__26241 = cljs.core.next(ks__$1);
o__$1 = G__26240;
ks__$1 = G__26241;
continue;
}
} else {
return o__$1;
}
break;
}
} else {
return not_found;
}
}));

(taoensso.encore.oget_in.cljs$lang$maxFixedArity = 3);

/**
 * Like `get` but returns val for first key that exists in map.
 *   Useful for key aliases or fallbacks. See also `get*`.
 */
taoensso.encore.get1 = (function taoensso$encore$get1(var_args){
var G__25301 = arguments.length;
switch (G__25301) {
case 2:
return taoensso.encore.get1.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get1.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.get1.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.get1.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get1.cljs$core$IFn$_invoke$arity$2 = (function (m,k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
}));

(taoensso.encore.get1.cljs$core$IFn$_invoke$arity$3 = (function (m,k,not_found){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k,not_found);
}));

(taoensso.encore.get1.cljs$core$IFn$_invoke$arity$4 = (function (m,k1,k2,not_found){
var b2__22159__auto__ = (function (){var and__5000__auto__ = m;
if(cljs.core.truth_(and__5000__auto__)){
var or__5002__auto__ = cljs.core.find(m,k1);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.find(m,k2);
}
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(b2__22159__auto__)){
var e = b2__22159__auto__;
return cljs.core.val(e);
} else {
return not_found;
}
}));

(taoensso.encore.get1.cljs$core$IFn$_invoke$arity$5 = (function (m,k1,k2,k3,not_found){
var b2__22159__auto__ = (function (){var and__5000__auto__ = m;
if(cljs.core.truth_(and__5000__auto__)){
var or__5002__auto__ = cljs.core.find(m,k1);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = cljs.core.find(m,k2);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return cljs.core.find(m,k3);
}
}
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(b2__22159__auto__)){
var e = b2__22159__auto__;
return cljs.core.val(e);
} else {
return not_found;
}
}));

(taoensso.encore.get1.cljs$lang$maxFixedArity = 5);

/**
 * Conjoins each non-nil value.
 */
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var G__25311 = arguments.length;
switch (G__25311) {
case 0:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___26248 = arguments.length;
var i__5727__auto___26249 = (0);
while(true){
if((i__5727__auto___26249 < len__5726__auto___26248)){
args_arr__5751__auto__.push((arguments[i__5727__auto___26249]));

var G__26251 = (i__5727__auto___26249 + (1));
i__5727__auto___26249 = G__26251;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
}));

(taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if((x == null)){
return coll;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
}
}));

(taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.conj_some,taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2(coll,x),more);
}));

/** @this {Function} */
(taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq25308){
var G__25309 = cljs.core.first(seq25308);
var seq25308__$1 = cljs.core.next(seq25308);
var G__25310 = cljs.core.first(seq25308__$1);
var seq25308__$2 = cljs.core.next(seq25308__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25309,G__25310,seq25308__$2);
}));

(taoensso.encore.conj_some.cljs$lang$maxFixedArity = (2));


/**
 * Conjoins each truthy value.
 */
taoensso.encore.conj_when = (function taoensso$encore$conj_when(var_args){
var G__25316 = arguments.length;
switch (G__25316) {
case 0:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___26254 = arguments.length;
var i__5727__auto___26255 = (0);
while(true){
if((i__5727__auto___26255 < len__5726__auto___26254)){
args_arr__5751__auto__.push((arguments[i__5727__auto___26255]));

var G__26256 = (i__5727__auto___26255 + (1));
i__5727__auto___26255 = G__26256;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
}));

(taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
} else {
return coll;
}
}));

(taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.conj_when,taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2(coll,x),more);
}));

/** @this {Function} */
(taoensso.encore.conj_when.cljs$lang$applyTo = (function (seq25313){
var G__25314 = cljs.core.first(seq25313);
var seq25313__$1 = cljs.core.next(seq25313);
var G__25315 = cljs.core.first(seq25313__$1);
var seq25313__$2 = cljs.core.next(seq25313__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25314,G__25315,seq25313__$2);
}));

(taoensso.encore.conj_when.cljs$lang$maxFixedArity = (2));

/**
 * Assocs each kv to given ?map iff its value is not nil.
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var G__25322 = arguments.length;
switch (G__25322) {
case 3:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___26263 = arguments.length;
var i__5727__auto___26264 = (0);
while(true){
if((i__5727__auto___26264 < len__5726__auto___26263)){
args_arr__5751__auto__.push((arguments[i__5727__auto___26264]));

var G__26268 = (i__5727__auto___26264 + (1));
i__5727__auto___26264 = G__26268;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((3) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((3)),(0),null)):null);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5752__auto__);

}
});

(taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}));

(taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2 = (function (m,m_kvs){
return cljs.core.reduce_kv(taoensso.encore.assoc_some,m,m_kvs);
}));

(taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs(taoensso.encore.assoc_some,taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
}));

/** @this {Function} */
(taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq25318){
var G__25319 = cljs.core.first(seq25318);
var seq25318__$1 = cljs.core.next(seq25318);
var G__25320 = cljs.core.first(seq25318__$1);
var seq25318__$2 = cljs.core.next(seq25318__$1);
var G__25321 = cljs.core.first(seq25318__$2);
var seq25318__$3 = cljs.core.next(seq25318__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25319,G__25320,G__25321,seq25318__$3);
}));

(taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (3));

/**
 * Assocs each kv to given ?map iff its val is truthy.
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var G__25328 = arguments.length;
switch (G__25328) {
case 3:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___26274 = arguments.length;
var i__5727__auto___26275 = (0);
while(true){
if((i__5727__auto___26275 < len__5726__auto___26274)){
args_arr__5751__auto__.push((arguments[i__5727__auto___26275]));

var G__26276 = (i__5727__auto___26275 + (1));
i__5727__auto___26275 = G__26276;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((3) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((3)),(0),null)):null);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5752__auto__);

}
});

(taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return m;
}
}));

(taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2 = (function (m,m_kvs){
return cljs.core.reduce_kv(taoensso.encore.assoc_when,m,m_kvs);
}));

(taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs(taoensso.encore.assoc_when,taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
}));

/** @this {Function} */
(taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq25324){
var G__25325 = cljs.core.first(seq25324);
var seq25324__$1 = cljs.core.next(seq25324);
var G__25326 = cljs.core.first(seq25324__$1);
var seq25324__$2 = cljs.core.next(seq25324__$1);
var G__25327 = cljs.core.first(seq25324__$2);
var seq25324__$3 = cljs.core.next(seq25324__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25325,G__25326,G__25327,seq25324__$3);
}));

(taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (3));

/**
 * Assocs each kv to given ?map iff its key doesn't already exist.
 */
taoensso.encore.assoc_nx = (function taoensso$encore$assoc_nx(var_args){
var G__25334 = arguments.length;
switch (G__25334) {
case 3:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___26280 = arguments.length;
var i__5727__auto___26282 = (0);
while(true){
if((i__5727__auto___26282 < len__5726__auto___26280)){
args_arr__5751__auto__.push((arguments[i__5727__auto___26282]));

var G__26283 = (i__5727__auto___26282 + (1));
i__5727__auto___26282 = G__26283;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((3) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((3)),(0),null)):null);
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5752__auto__);

}
});

(taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.contains_QMARK_(m,k)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}));

(taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2 = (function (m,m_kvs){
return cljs.core.reduce_kv(taoensso.encore.assoc_nx,m,m_kvs);
}));

(taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs(taoensso.encore.assoc_nx,taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
}));

/** @this {Function} */
(taoensso.encore.assoc_nx.cljs$lang$applyTo = (function (seq25330){
var G__25331 = cljs.core.first(seq25330);
var seq25330__$1 = cljs.core.next(seq25330);
var G__25332 = cljs.core.first(seq25330__$1);
var seq25330__$2 = cljs.core.next(seq25330__$1);
var G__25333 = cljs.core.first(seq25330__$2);
var seq25330__$3 = cljs.core.next(seq25330__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25331,G__25332,G__25333,seq25330__$3);
}));

(taoensso.encore.assoc_nx.cljs$lang$maxFixedArity = (3));

/**
 * Assocs each kv to given ?map if its value is nil, otherwise dissocs it.
 */
taoensso.encore.reassoc_some = (function taoensso$encore$reassoc_some(var_args){
var G__25340 = arguments.length;
switch (G__25340) {
case 3:
return taoensso.encore.reassoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.reassoc_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___26289 = arguments.length;
var i__5727__auto___26290 = (0);
while(true){
if((i__5727__auto___26290 < len__5726__auto___26289)){
args_arr__5751__auto__.push((arguments[i__5727__auto___26290]));

var G__26291 = (i__5727__auto___26290 + (1));
i__5727__auto___26290 = G__26291;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((3) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((3)),(0),null)):null);
return taoensso.encore.reassoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5752__auto__);

}
});

(taoensso.encore.reassoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}));

(taoensso.encore.reassoc_some.cljs$core$IFn$_invoke$arity$2 = (function (m,m_kvs){
return cljs.core.reduce_kv(taoensso.encore.reassoc_some,m,m_kvs);
}));

(taoensso.encore.reassoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs(taoensso.encore.reassoc_some,taoensso.encore.reassoc_some.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
}));

/** @this {Function} */
(taoensso.encore.reassoc_some.cljs$lang$applyTo = (function (seq25336){
var G__25337 = cljs.core.first(seq25336);
var seq25336__$1 = cljs.core.next(seq25336);
var G__25338 = cljs.core.first(seq25336__$1);
var seq25336__$2 = cljs.core.next(seq25336__$1);
var G__25339 = cljs.core.first(seq25336__$2);
var seq25336__$3 = cljs.core.next(seq25336__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25337,G__25338,G__25339,seq25336__$3);
}));

(taoensso.encore.reassoc_some.cljs$lang$maxFixedArity = (3));

taoensso.encore.vnext = (function taoensso$encore$vnext(v){
if((cljs.core.count(v) > (1))){
return (taoensso.encore.core_subvec.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.core_subvec.cljs$core$IFn$_invoke$arity$2(v,(1)) : taoensso.encore.core_subvec.call(null, v,(1)));
} else {
return null;
}
});
taoensso.encore.vrest = (function taoensso$encore$vrest(v){
if((cljs.core.count(v) > (1))){
return (taoensso.encore.core_subvec.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.core_subvec.cljs$core$IFn$_invoke$arity$2(v,(1)) : taoensso.encore.core_subvec.call(null, v,(1)));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
taoensso.encore.vsplit_last = (function taoensso$encore$vsplit_last(v){
var c = cljs.core.count(v);
if((c > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((c > (1)))?cljs.core.pop(v):null),cljs.core.peek(v)], null);
} else {
return null;
}
});
taoensso.encore.vsplit_first = (function taoensso$encore$vsplit_first(v){
var c = cljs.core.count(v);
if((c > (0))){
var vec__25341 = v;
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25341,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?(taoensso.encore.core_subvec.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.core_subvec.cljs$core$IFn$_invoke$arity$2(v,(1)) : taoensso.encore.core_subvec.call(null, v,(1))):null)], null);
} else {
return null;
}
});
taoensso.encore.not_empty_coll = (function taoensso$encore$not_empty_coll(x){
if(cljs.core.truth_(x)){
if(cljs.core.coll_QMARK_(x)){
return cljs.core.not_empty(x);
} else {
return x;
}
} else {
return null;
}
});
/**
 * Faster (f (vec (butlast xs)) (last x)).
 */
taoensso.encore.fsplit_last = (function taoensso$encore$fsplit_last(xs,f){
if(cljs.core.vector_QMARK_(xs)){
var vec__25344 = taoensso.encore.vsplit_last(xs);
var vn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25344,(0),null);
var vl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25344,(1),null);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(vn,vl) : f.call(null, vn,vl));
} else {
var butlast = cljs.core.PersistentVector.EMPTY;
var xs__$1 = xs;
while(true){
var vec__25350 = xs__$1;
var seq__25351 = cljs.core.seq(vec__25350);
var first__25352 = cljs.core.first(seq__25351);
var seq__25351__$1 = cljs.core.next(seq__25351);
var x1 = first__25352;
var xn = seq__25351__$1;
if(xn){
var G__26303 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(butlast,x1);
var G__26304 = xn;
butlast = G__26303;
xs__$1 = G__26304;
continue;
} else {
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(butlast,x1) : f.call(null, butlast,x1));
}
break;
}
}
});
taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_(coll)){
var or__5002__auto__ = taoensso.encore.subvec(coll,new cljs.core.Keyword(null,"by-len","by-len",587837753),(0),n);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$1(n),coll);
}
});
taoensso.encore.distinct_elements_QMARK_ = (function taoensso$encore$distinct_elements_QMARK_(x){
return ((cljs.core.set_QMARK_(x)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(taoensso.encore.ensure_set(x)))));
});
/**
 * (seq-kvs {:a :A}) => (:a :A).
 */
taoensso.encore.seq_kvs = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but calls `seq-kvs` on final arg.
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26306 = arguments.length;
var i__5727__auto___26307 = (0);
while(true){
if((i__5727__auto___26307 < len__5726__auto___26306)){
args__5732__auto__.push((arguments[i__5727__auto___26307]));

var G__26308 = (i__5727__auto___26307 + (1));
i__5727__auto___26307 = G__26308;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,taoensso.encore.fsplit_last(args,(function (xs,lx){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(xs,taoensso.encore.seq_kvs(lx));
})));
}));

(taoensso.encore.mapply.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.mapply.cljs$lang$applyTo = (function (seq25353){
var G__25354 = cljs.core.first(seq25353);
var seq25353__$1 = cljs.core.next(seq25353);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25354,seq25353__$1);
}));

/**
 * Like `into` but supports multiple "from"s.
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var G__25359 = arguments.length;
switch (G__25359) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___26310 = arguments.length;
var i__5727__auto___26311 = (0);
while(true){
if((i__5727__auto___26311 < len__5726__auto___26310)){
args_arr__5751__auto__.push((arguments[i__5727__auto___26311]));

var G__26314 = (i__5727__auto___26311 + (1));
i__5727__auto___26311 = G__26314;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(to,from);
}));

(taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,acc,in$);
}),cljs.core.transient$(to),cljs.core.cons(from,more)));
}));

/** @this {Function} */
(taoensso.encore.into_all.cljs$lang$applyTo = (function (seq25356){
var G__25357 = cljs.core.first(seq25356);
var seq25356__$1 = cljs.core.next(seq25356);
var G__25358 = cljs.core.first(seq25356__$1);
var seq25356__$2 = cljs.core.next(seq25356__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25357,G__25358,seq25356__$2);
}));

(taoensso.encore.into_all.cljs$lang$maxFixedArity = (2));

taoensso.encore.min_transient_card = (11);
/**
 * Like `repeatedly` but faster and `conj`s items into given collection.
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if((((n >= (11)))?taoensso.encore.editable_QMARK_(coll):false)){
return cljs.core.persistent_BANG_(taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3((function (acc,_){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, )));
}),cljs.core.transient$(coll),n));
} else {
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3((function (acc,_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, )));
}),coll,n);
}
});
taoensso.encore.update_BANG_ = (function taoensso$encore$update_BANG_(m,k,f){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__25360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25360) : f.call(null, G__25360));
})());
});
/**
 * Like `into` but assumes `to!` is a transient, and doesn't call
 *   `persist!` when done. Useful as a performance optimization in some cases.
 */
taoensso.encore.into_BANG_ = (function taoensso$encore$into_BANG_(var_args){
var G__25362 = arguments.length;
switch (G__25362) {
case 1:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (to_BANG_){
return to_BANG_;
}));

(taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (to_BANG_,from){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,to_BANG_,from);
}));

(taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (to_BANG_,xform,from){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj_BANG_,to_BANG_,from);
}));

(taoensso.encore.into_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Returns a stateful transducer like (core/distinct) that supports an optional
 *   key function. Retains only items with distinct (keyfn <item>).
 */
taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
var G__25364 = arguments.length;
switch (G__25364) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$0();
}));

(taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.volatile_BANG_(cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY));
return (function() {
var G__26328 = null;
var G__26328__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null, ));
});
var G__26328__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null, acc));
});
var G__26328__2 = (function (acc,in$){
var k = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(in$) : keyfn.call(null, in$));
if(cljs.core.contains_QMARK_(cljs.core.deref(seen_),k)){
return acc;
} else {
seen_.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(seen_.cljs$core$IDeref$_deref$arity$1(null, ),k));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,in$) : rf.call(null, acc,in$));
}
});
G__26328 = function(acc,in$){
switch(arguments.length){
case 0:
return G__26328__0.call(this);
case 1:
return G__26328__1.call(this,acc);
case 2:
return G__26328__2.call(this,acc,in$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26328.cljs$core$IFn$_invoke$arity$0 = G__26328__0;
G__26328.cljs$core$IFn$_invoke$arity$1 = G__26328__1;
G__26328.cljs$core$IFn$_invoke$arity$2 = G__26328__2;
return G__26328;
})()
});
}));

(taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 1);

/**
 * Returns given ?map with keys and vals inverted, dropping non-unique vals!
 */
taoensso.encore.invert_map = (function taoensso$encore$invert_map(m){
if(cljs.core.truth_(m)){
if((cljs.core.count(m) > (11))){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,v,k);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,v,k);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
} else {
return null;
}
});
/**
 * Like `invert-map` but throws on non-unique vals.
 */
taoensso.encore.invert_map_BANG_ = (function taoensso$encore$invert_map_BANG_(m){
var b2__22159__auto__ = taoensso.encore.invert_map(m);
if(cljs.core.truth_(b2__22159__auto__)){
var im = b2__22159__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(im),cljs.core.count(m))){
return im;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("[encore/invert-map!] Non-unique map vals",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"given","given",716253602),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),m,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(m)], null)], null));
}
} else {
return null;
}
});
/**
 * Returns given ?map with (key-fn <key>) keys.
 */
taoensso.encore.map_keys = (function taoensso$encore$map_keys(key_fn,m){
if(cljs.core.truth_(m)){
if((cljs.core.count(m) > (11))){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(k) : key_fn.call(null, k)),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(k) : key_fn.call(null, k)),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
} else {
return null;
}
});
/**
 * Returns given ?map with (val-fn <val>) vals.
 */
taoensso.encore.map_vals = (function taoensso$encore$map_vals(val_fn,m){
if(cljs.core.truth_(m)){
if(((taoensso.encore.editable_QMARK_(m))?(cljs.core.count(m) >= (11)):false)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,k,(val_fn.cljs$core$IFn$_invoke$arity$1 ? val_fn.cljs$core$IFn$_invoke$arity$1(v) : val_fn.call(null, v)));
}),cljs.core.transient$(m),m));
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,(val_fn.cljs$core$IFn$_invoke$arity$1 ? val_fn.cljs$core$IFn$_invoke$arity$1(v) : val_fn.call(null, v)));
}),m,m);
}
} else {
return null;
}
});
/**
 * Returns given ?map, retaining only keys for which (key-pred <key>) is truthy.
 */
taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(key_pred,m){
if(cljs.core.truth_(m)){
if(((taoensso.encore.editable_QMARK_(m))?(cljs.core.count(m) >= (11)):false)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m__$1,k,_){
if(cljs.core.truth_((key_pred.cljs$core$IFn$_invoke$arity$1 ? key_pred.cljs$core$IFn$_invoke$arity$1(k) : key_pred.call(null, k)))){
return m__$1;
} else {
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),cljs.core.transient$(m),m));
} else {
return cljs.core.reduce_kv((function (m__$1,k,_){
if(cljs.core.truth_((key_pred.cljs$core$IFn$_invoke$arity$1 ? key_pred.cljs$core$IFn$_invoke$arity$1(k) : key_pred.call(null, k)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
} else {
return null;
}
});
/**
 * Returns given ?map, retaining only keys for which (val-pred <val>) is truthy.
 */
taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(val_pred,m){
if(cljs.core.truth_(m)){
if(((taoensso.encore.editable_QMARK_(m))?(cljs.core.count(m) >= (11)):false)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((val_pred.cljs$core$IFn$_invoke$arity$1 ? val_pred.cljs$core$IFn$_invoke$arity$1(v) : val_pred.call(null, v)))){
return m__$1;
} else {
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),cljs.core.transient$(m),m));
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((val_pred.cljs$core$IFn$_invoke$arity$1 ? val_pred.cljs$core$IFn$_invoke$arity$1(v) : val_pred.call(null, v)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
} else {
return null;
}
});
/**
 * Returns given ?map, removing keys for which (key-pred <key>) is truthy.
 */
taoensso.encore.remove_keys = (function taoensso$encore$remove_keys(key_pred,m){
return taoensso.encore.filter_keys(cljs.core.complement(key_pred),m);
});
/**
 * Returns given ?map, removing keys for which (val-pred <val>) is truthy.
 */
taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(val_pred,m){
return taoensso.encore.filter_vals(cljs.core.complement(val_pred),m);
});
/**
 * Returns a map like the one given, replacing keys using
 *   given {<old-new> <new-key>} replacements. O(min(n_replacements, n_m)).
 */
taoensso.encore.rename_keys = (function taoensso$encore$rename_keys(replacements,m){
if(cljs.core.empty_QMARK_(m)){
return m;
} else {
if(cljs.core.empty_QMARK_(replacements)){
return m;
} else {
if((cljs.core.count(m) > cljs.core.count(replacements))){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,old_k,new_k){
var b2__22159__auto__ = cljs.core.find(m,old_k);
if(cljs.core.truth_(b2__22159__auto__)){
var e = b2__22159__auto__;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,old_k),new_k,cljs.core.val(e));
} else {
return acc;
}
}),cljs.core.transient$(m),replacements));
} else {
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,old_k,v){
var b2__22159__auto__ = cljs.core.find(replacements,old_k);
if(cljs.core.truth_(b2__22159__auto__)){
var e = b2__22159__auto__;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,old_k),cljs.core.val(e),v);
} else {
return acc;
}
}),cljs.core.transient$(m),m));
}
}
}
});
/**
 * Returns {(f x) x} ?map for xs in `coll`.
 */
taoensso.encore.keys_by = (function taoensso$encore$keys_by(f,coll){
if(cljs.core.empty_QMARK_(coll)){
return null;
} else {
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null, x)),x);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
}
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(m)),taoensso.encore.ensure_set(ks));
});

taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_(cljs.core.set(cljs.core.keys(m)),taoensso.encore.ensure_set(ks));
});

taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_(cljs.core.set(cljs.core.keys(m)),taoensso.encore.ensure_set(ks));
});

taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return taoensso.encore.revery_QMARK_.cljs$core$IFn$_invoke$arity$2((function (p1__25365_SHARP_){
return taoensso.encore.some_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,p1__25365_SHARP_));
}),ks);
});
/**
 * Like `core/update-in` but:.
 *  - Empty ks will return (f m), not act like [nil] ks.
 *  - Adds support for `not-found`.
 *  - Adds support for special return vals: `:update/dissoc`, `:update/abort`.
 */
taoensso.encore.update_in = (function taoensso$encore$update_in(var_args){
var G__25367 = arguments.length;
switch (G__25367) {
case 3:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,f){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,f);
}));

(taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4 = (function (m,ks,not_found,f){
if(cljs.core.empty_QMARK_(ks)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(m) : f.call(null, m));
} else {
var old = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m,ks,not_found);
var new$ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old) : f.call(null, old));
var G__25368 = new$;
var G__25368__$1 = (((G__25368 instanceof cljs.core.Keyword))?G__25368.fqn:null);
switch (G__25368__$1) {
case "update/abort":
case "swap/abort":
return m;

break;
case "update/dissoc":
case "swap/dissoc":
return taoensso.encore.fsplit_last(ks,(function (ks__$1,lk){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks__$1,null,(function (v){
if(cljs.core.truth_(v)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(v,lk);
} else {
return new cljs.core.Keyword("update","abort","update/abort",-250474569);
}
}));
}));

break;
default:
return cljs.core.assoc_in(m,ks,new$);

}
}
}));

(taoensso.encore.update_in.cljs$lang$maxFixedArity = 4);

taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(var_args){
var G__25370 = arguments.length;
switch (G__25370) {
case 3:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (coll,ks,k){
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(coll,ks),k);
}));

(taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (coll,ks){
if(cljs.core.empty_QMARK_(ks)){
return false;
} else {
return taoensso.encore.fsplit_last(ks,(function (ks__$1,lk){
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3(coll,ks__$1,lk);
}));
}
}));

(taoensso.encore.contains_in_QMARK_.cljs$lang$maxFixedArity = 3);

taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var G__25376 = arguments.length;
switch (G__25376) {
case 3:
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___26372 = arguments.length;
var i__5727__auto___26373 = (0);
while(true){
if((i__5727__auto___26373 < len__5726__auto___26372)){
args_arr__5751__auto__.push((arguments[i__5727__auto___26373]));

var G__26374 = (i__5727__auto___26373 + (1));
i__5727__auto___26373 = G__26374;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((3) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((3)),(0),null)):null);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5752__auto__);

}
});

(taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,dissoc_k){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,(function (m__$1){
if(cljs.core.truth_(m__$1)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,dissoc_k);
} else {
return new cljs.core.Keyword("update","abort","update/abort",-250474569);
}
}));
}));

(taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_k,more){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,(function (m__$1){
if(cljs.core.truth_(m__$1)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,dissoc_k),more);
} else {
return new cljs.core.Keyword("update","abort","update/abort",-250474569);
}
}));
}));

/** @this {Function} */
(taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq25372){
var G__25373 = cljs.core.first(seq25372);
var seq25372__$1 = cljs.core.next(seq25372);
var G__25374 = cljs.core.first(seq25372__$1);
var seq25372__$2 = cljs.core.next(seq25372__$1);
var G__25375 = cljs.core.first(seq25372__$2);
var seq25372__$3 = cljs.core.next(seq25372__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25373,G__25374,G__25375,seq25372__$3);
}));

(taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$2 = (function (m,ks){
if(cljs.core.empty_QMARK_(m)){
return m;
} else {
return taoensso.encore.fsplit_last(ks,(function (ks__$1,lk){
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3(m,ks__$1,lk);
}));
}
}));

(taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (3));

taoensso.encore.node_paths = (function taoensso$encore$node_paths(var_args){
var G__25378 = arguments.length;
switch (G__25378) {
case 1:
return taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$1 = (function (m){
return taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$3(cljs.core.associative_QMARK_,m,null);
}));

(taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$2 = (function (node_pred,m){
return taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$3(node_pred,m,null);
}));

(taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$3 = (function (node_pred,m,basis){
var basis__$1 = (function (){var or__5002__auto__ = basis;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((node_pred.cljs$core$IFn$_invoke$arity$1 ? node_pred.cljs$core$IFn$_invoke$arity$1(v) : node_pred.call(null, v)))){
var paths_from_basis = taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$3(node_pred,v,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(basis__$1,k));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,in$){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,in$);
}),acc,paths_from_basis);
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(basis__$1,k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)));
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),m));
}));

(taoensso.encore.node_paths.cljs$lang$maxFixedArity = 3);

/**
 * Like `interleave` but includes all items (i.e. stops when the longest
 *   rather than shortest coll has been consumed).
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var G__25383 = arguments.length;
switch (G__25383) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___26389 = arguments.length;
var i__5727__auto___26391 = (0);
while(true){
if((i__5727__auto___26391 < len__5726__auto___26389)){
args_arr__5751__auto__.push((arguments[i__5727__auto___26391]));

var G__26392 = (i__5727__auto___26391 + (1));
i__5727__auto___26391 = G__26392;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
}));

(taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
}));

(taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if(((s1) && (s2))){
return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
}));

(taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c1], 0))));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(taoensso.encore.interleave_all,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
}),null,null));
}));

/** @this {Function} */
(taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq25380){
var G__25381 = cljs.core.first(seq25380);
var seq25380__$1 = cljs.core.next(seq25380);
var G__25382 = cljs.core.first(seq25380__$1);
var seq25380__$2 = cljs.core.next(seq25380__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25381,G__25382,seq25380__$2);
}));

(taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2));

/**
 * Like `interleave`, but:
 *  - Returns a vector rather than lazy seq (=> greedy).
 *  - Includes all items (i.e. stops when the longest rather than
 *    shortest coll has been consumed).
 * 
 *   Single-arity version takes a coll of colls.
 */
taoensso.encore.vinterleave_all = (function taoensso$encore$vinterleave_all(var_args){
var G__25389 = arguments.length;
switch (G__25389) {
case 1:
return taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___26395 = arguments.length;
var i__5727__auto___26396 = (0);
while(true){
if((i__5727__auto___26396 < len__5726__auto___26395)){
args_arr__5751__auto__.push((arguments[i__5727__auto___26396]));

var G__26397 = (i__5727__auto___26396 + (1));
i__5727__auto___26396 = G__26397;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((3) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((3)),(0),null)):null);
return taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5752__auto__);

}
});

(taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$1 = (function (colls){
if(cljs.core.empty_QMARK_(colls)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.persistent_BANG_(taoensso.encore.reduce_interleave_all(cljs.core.conj_BANG_,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),colls));
}
}));

(taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
var v = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
while(true){
if(((s1) && (s2))){
var G__26404 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.first(s1)),cljs.core.first(s2));
var G__26405 = cljs.core.next(s1);
var G__26406 = cljs.core.next(s2);
v = G__26404;
s1 = G__26405;
s2 = G__26406;
continue;
} else {
if(s1){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,s1));
} else {
if(s2){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,s2));
} else {
return cljs.core.persistent_BANG_(v);
}
}
}
break;
}
}));

(taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$3 = (function (c1,c2,c3){
return taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
}));

(taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,c3,colls){
return taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null),colls));
}));

/** @this {Function} */
(taoensso.encore.vinterleave_all.cljs$lang$applyTo = (function (seq25385){
var G__25386 = cljs.core.first(seq25385);
var seq25385__$1 = cljs.core.next(seq25385);
var G__25387 = cljs.core.first(seq25385__$1);
var seq25385__$2 = cljs.core.next(seq25385__$1);
var G__25388 = cljs.core.first(seq25385__$2);
var seq25385__$3 = cljs.core.next(seq25385__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25386,G__25387,G__25388,seq25385__$3);
}));

(taoensso.encore.vinterleave_all.cljs$lang$maxFixedArity = (3));

taoensso.encore.p_BANG_ = (function taoensso$encore$p_BANG_(m){
if(taoensso.encore.transient_QMARK_(m)){
return cljs.core.persistent_BANG_(m);
} else {
return m;
}
});
var nx_26407 = ({});
var min_transient_card_26408 = (64);
var dissoc_QMARK__26409 = (function (v){
var G__25392 = v;
var G__25392__$1 = (((G__25392 instanceof cljs.core.Keyword))?G__25392.fqn:null);
switch (G__25392__$1) {
case "merge/dissoc":
case "swap/dissoc":
return true;

break;
default:
return false;

}
});
var dissoc_STAR__26410 = (function (m,k){
if(taoensso.encore.transient_QMARK_(m)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
/**
 * Private, don't use. Flexible low-level merge util.
 *  Optimized for reasonable worst-case performance.
 */
taoensso.encore.merge_with_STAR_ = (function taoensso$encore$merge_with_STAR_(var_args){
var G__25394 = arguments.length;
switch (G__25394) {
case 3:
return taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (nest_QMARK_,f,maps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(taoensso.encore.merge_with_STAR_,nest_QMARK_,f),null,maps);
}));

(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (nest_QMARK_,f,m1,m2){
var n2 = cljs.core.count(m2);
if((n2 === (0))){
var or__5002__auto__ = m1;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(taoensso.encore.can_meta_QMARK_(m2)){
return cljs.core.with_meta(m2,null);
} else {
return null;
}
}
} else {
var b2__22159__auto__ = cljs.core.find(m2,new cljs.core.Keyword("merge","replace?","merge/replace?",-914523787));
if(cljs.core.truth_(b2__22159__auto__)){
var e = b2__22159__auto__;
var m2__$1 = dissoc_STAR__26410(m2,new cljs.core.Keyword("merge","replace?","merge/replace?",-914523787));
if(cljs.core.truth_(cljs.core.val(e))){
return m2__$1;
} else {
return taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(nest_QMARK_,f,m1,m2__$1);
}
} else {
var n1 = cljs.core.count(m1);
if((n1 >= n2)){
var m1_STAR_ = ((taoensso.encore.transient_QMARK_(m1))?m1:(((n1 >= min_transient_card_26408))?cljs.core.transient$(m1):m1));
var assoc_STAR_ = ((taoensso.encore.transient_QMARK_(m1_STAR_))?cljs.core.assoc_BANG_:cljs.core.assoc);
return cljs.core.reduce_kv((function (m1_STAR___$1,k2,v2){
var v1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m1,k2,nx_26407);
if(cljs.core.truth_((function (){var and__5000__auto__ = nest_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return ((cljs.core.map_QMARK_(v1)) && (cljs.core.map_QMARK_(v2)));
} else {
return and__5000__auto__;
}
})())){
var G__25395 = m1_STAR___$1;
var G__25396 = k2;
var G__25397 = taoensso.encore.p_BANG_(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(true,f,v1,v2));
return (assoc_STAR_.cljs$core$IFn$_invoke$arity$3 ? assoc_STAR_.cljs$core$IFn$_invoke$arity$3(G__25395,G__25396,G__25397) : assoc_STAR_.call(null, G__25395,G__25396,G__25397));
} else {
if((v1 === nx_26407)){
return (assoc_STAR_.cljs$core$IFn$_invoke$arity$3 ? assoc_STAR_.cljs$core$IFn$_invoke$arity$3(m1_STAR___$1,k2,v2) : assoc_STAR_.call(null, m1_STAR___$1,k2,v2));
} else {
if(cljs.core.truth_(dissoc_QMARK__26409(v2))){
return dissoc_STAR__26410(m1_STAR___$1,k2);
} else {
if(cljs.core.truth_(f)){
var v3 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v1,v2) : f.call(null, v1,v2));
if(cljs.core.truth_(dissoc_QMARK__26409(v3))){
return dissoc_STAR__26410(m1_STAR___$1,k2);
} else {
return (assoc_STAR_.cljs$core$IFn$_invoke$arity$3 ? assoc_STAR_.cljs$core$IFn$_invoke$arity$3(m1_STAR___$1,k2,v3) : assoc_STAR_.call(null, m1_STAR___$1,k2,v3));
}
} else {
return (assoc_STAR_.cljs$core$IFn$_invoke$arity$3 ? assoc_STAR_.cljs$core$IFn$_invoke$arity$3(m1_STAR___$1,k2,v2) : assoc_STAR_.call(null, m1_STAR___$1,k2,v2));
}
}
}
}
}),m1_STAR_,taoensso.encore.p_BANG_(m2));
} else {
var m2_STAR_ = ((taoensso.encore.transient_QMARK_(m2))?m2:(function (){var m2__$1 = cljs.core.with_meta(m2,cljs.core.meta(m1));
if((n2 >= min_transient_card_26408)){
return cljs.core.transient$(m2__$1);
} else {
return m2__$1;
}
})());
var assoc_STAR_ = ((taoensso.encore.transient_QMARK_(m2_STAR_))?cljs.core.assoc_BANG_:cljs.core.assoc);
return cljs.core.reduce_kv((function (m2_STAR___$1,k1,v1){
var v2 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m2,k1,nx_26407);
if(cljs.core.truth_((function (){var and__5000__auto__ = nest_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return ((cljs.core.map_QMARK_(v1)) && (cljs.core.map_QMARK_(v2)));
} else {
return and__5000__auto__;
}
})())){
var G__25398 = m2_STAR___$1;
var G__25399 = k1;
var G__25400 = taoensso.encore.p_BANG_(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(true,f,v1,v2));
return (assoc_STAR_.cljs$core$IFn$_invoke$arity$3 ? assoc_STAR_.cljs$core$IFn$_invoke$arity$3(G__25398,G__25399,G__25400) : assoc_STAR_.call(null, G__25398,G__25399,G__25400));
} else {
if((v2 === nx_26407)){
return (assoc_STAR_.cljs$core$IFn$_invoke$arity$3 ? assoc_STAR_.cljs$core$IFn$_invoke$arity$3(m2_STAR___$1,k1,v1) : assoc_STAR_.call(null, m2_STAR___$1,k1,v1));
} else {
if(cljs.core.truth_(dissoc_QMARK__26409(v2))){
return dissoc_STAR__26410(m2_STAR___$1,k1);
} else {
if(cljs.core.truth_(f)){
var v3 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v1,v2) : f.call(null, v1,v2));
if(cljs.core.truth_(dissoc_QMARK__26409(v3))){
return dissoc_STAR__26410(m2_STAR___$1,k1);
} else {
return (assoc_STAR_.cljs$core$IFn$_invoke$arity$3 ? assoc_STAR_.cljs$core$IFn$_invoke$arity$3(m2_STAR___$1,k1,v3) : assoc_STAR_.call(null, m2_STAR___$1,k1,v3));
}
} else {
return m2_STAR___$1;
}
}
}
}
}),m2_STAR_,taoensso.encore.p_BANG_(m1));
}
}
}
}));

(taoensso.encore.merge_with_STAR_.cljs$lang$maxFixedArity = 4);

/**
 * Like `core/merge` but:
 *  - Supports `:merge/dissoc` vals.
 *  - Often faster, with much better worst-case performance.
 */
taoensso.encore.merge = (function taoensso$encore$merge(var_args){
var G__25406 = arguments.length;
switch (G__25406) {
case 0:
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___26428 = arguments.length;
var i__5727__auto___26429 = (0);
while(true){
if((i__5727__auto___26429 < len__5726__auto___26428)){
args_arr__5751__auto__.push((arguments[i__5727__auto___26429]));

var G__26430 = (i__5727__auto___26429 + (1));
i__5727__auto___26429 = G__26430;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((3) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((3)),(0),null)):null);
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5752__auto__);

}
});

(taoensso.encore.merge.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(taoensso.encore.merge.cljs$core$IFn$_invoke$arity$1 = (function (m1){
return taoensso.encore.p_BANG_(m1);
}));

(taoensso.encore.merge.cljs$core$IFn$_invoke$arity$2 = (function (m1,m2){
return taoensso.encore.p_BANG_(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(false,null,m1,m2));
}));

(taoensso.encore.merge.cljs$core$IFn$_invoke$arity$3 = (function (m1,m2,m3){
return taoensso.encore.p_BANG_(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(false,null,taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(false,null,m1,m2),m3));
}));

(taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic = (function (m1,m2,m3,more){
return taoensso.encore.p_BANG_(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$3(false,null,cljs.core.cons(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(false,null,taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(false,null,m1,m2),m3),more)));
}));

/** @this {Function} */
(taoensso.encore.merge.cljs$lang$applyTo = (function (seq25402){
var G__25403 = cljs.core.first(seq25402);
var seq25402__$1 = cljs.core.next(seq25402);
var G__25404 = cljs.core.first(seq25402__$1);
var seq25402__$2 = cljs.core.next(seq25402__$1);
var G__25405 = cljs.core.first(seq25402__$2);
var seq25402__$3 = cljs.core.next(seq25402__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25403,G__25404,G__25405,seq25402__$3);
}));

(taoensso.encore.merge.cljs$lang$maxFixedArity = (3));

/**
 * Like `core/merge` but:
 *  - Recursively merges nested maps.
 *  - Supports `:merge/dissoc` vals.
 *  - Often faster, with much better worst-case performance.
 */
taoensso.encore.nested_merge = (function taoensso$encore$nested_merge(var_args){
var G__25412 = arguments.length;
switch (G__25412) {
case 0:
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___26440 = arguments.length;
var i__5727__auto___26441 = (0);
while(true){
if((i__5727__auto___26441 < len__5726__auto___26440)){
args_arr__5751__auto__.push((arguments[i__5727__auto___26441]));

var G__26442 = (i__5727__auto___26441 + (1));
i__5727__auto___26441 = G__26442;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((3) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((3)),(0),null)):null);
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5752__auto__);

}
});

(taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$1 = (function (m1){
return taoensso.encore.p_BANG_(m1);
}));

(taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$2 = (function (m1,m2){
return taoensso.encore.p_BANG_(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(true,null,m1,m2));
}));

(taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$3 = (function (m1,m2,m3){
return taoensso.encore.p_BANG_(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(true,null,taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(true,null,m1,m2),m3));
}));

(taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic = (function (m1,m2,m3,more){
return taoensso.encore.p_BANG_(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$3(true,null,cljs.core.cons(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(true,null,taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(true,null,m1,m2),m3),more)));
}));

/** @this {Function} */
(taoensso.encore.nested_merge.cljs$lang$applyTo = (function (seq25408){
var G__25409 = cljs.core.first(seq25408);
var seq25408__$1 = cljs.core.next(seq25408);
var G__25410 = cljs.core.first(seq25408__$1);
var seq25408__$2 = cljs.core.next(seq25408__$1);
var G__25411 = cljs.core.first(seq25408__$2);
var seq25408__$3 = cljs.core.next(seq25408__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25409,G__25410,G__25411,seq25408__$3);
}));

(taoensso.encore.nested_merge.cljs$lang$maxFixedArity = (3));

/**
 * Like `core/merge-with` but:
 *  - Supports `:merge/dissoc` vals.
 *  - Often faster, with much better worst-case performance.
 */
taoensso.encore.merge_with = (function taoensso$encore$merge_with(var_args){
var G__25419 = arguments.length;
switch (G__25419) {
case 1:
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___26454 = arguments.length;
var i__5727__auto___26455 = (0);
while(true){
if((i__5727__auto___26455 < len__5726__auto___26454)){
args_arr__5751__auto__.push((arguments[i__5727__auto___26455]));

var G__26456 = (i__5727__auto___26455 + (1));
i__5727__auto___26455 = G__26456;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((4) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((4)),(0),null)):null);
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5752__auto__);

}
});

(taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$1 = (function (f){
return null;
}));

(taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$2 = (function (f,m1){
return taoensso.encore.p_BANG_(m1);
}));

(taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$3 = (function (f,m1,m2){
return taoensso.encore.p_BANG_(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(false,f,m1,m2));
}));

(taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$4 = (function (f,m1,m2,m3){
return taoensso.encore.p_BANG_(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(false,f,taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(false,f,m1,m2),m3));
}));

(taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,m1,m2,m3,more){
return taoensso.encore.p_BANG_(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$3(false,f,cljs.core.cons(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(false,f,taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(false,f,m1,m2),m3),more)));
}));

/** @this {Function} */
(taoensso.encore.merge_with.cljs$lang$applyTo = (function (seq25414){
var G__25415 = cljs.core.first(seq25414);
var seq25414__$1 = cljs.core.next(seq25414);
var G__25416 = cljs.core.first(seq25414__$1);
var seq25414__$2 = cljs.core.next(seq25414__$1);
var G__25417 = cljs.core.first(seq25414__$2);
var seq25414__$3 = cljs.core.next(seq25414__$2);
var G__25418 = cljs.core.first(seq25414__$3);
var seq25414__$4 = cljs.core.next(seq25414__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25415,G__25416,G__25417,G__25418,seq25414__$4);
}));

(taoensso.encore.merge_with.cljs$lang$maxFixedArity = (4));

/**
 * Like `core/merge-with` but:
 *  - Recursively merges nested maps.
 *  - Supports `:merge/dissoc` vals.
 *  - Often faster, with much better worst-case performance.
 */
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var G__25426 = arguments.length;
switch (G__25426) {
case 1:
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___26464 = arguments.length;
var i__5727__auto___26465 = (0);
while(true){
if((i__5727__auto___26465 < len__5726__auto___26464)){
args_arr__5751__auto__.push((arguments[i__5727__auto___26465]));

var G__26468 = (i__5727__auto___26465 + (1));
i__5727__auto___26465 = G__26468;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((4) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((4)),(0),null)):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5752__auto__);

}
});

(taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$1 = (function (f){
return null;
}));

(taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$2 = (function (f,m1){
return taoensso.encore.p_BANG_(m1);
}));

(taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$3 = (function (f,m1,m2){
return taoensso.encore.p_BANG_(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(true,f,m1,m2));
}));

(taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$4 = (function (f,m1,m2,m3){
return taoensso.encore.p_BANG_(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(true,f,taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(true,f,m1,m2),m3));
}));

(taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,m1,m2,m3,more){
return taoensso.encore.p_BANG_(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$3(true,f,cljs.core.cons(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(true,f,taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(true,f,m1,m2),m3),more)));
}));

/** @this {Function} */
(taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq25421){
var G__25422 = cljs.core.first(seq25421);
var seq25421__$1 = cljs.core.next(seq25421);
var G__25423 = cljs.core.first(seq25421__$1);
var seq25421__$2 = cljs.core.next(seq25421__$1);
var G__25424 = cljs.core.first(seq25421__$2);
var seq25421__$3 = cljs.core.next(seq25421__$2);
var G__25425 = cljs.core.first(seq25421__$3);
var seq25421__$4 = cljs.core.next(seq25421__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25422,G__25423,G__25424,G__25425,seq25421__$4);
}));

(taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (4));

var mf_26476 = (function (x,y){
return x;
});
/**
 * Like `core/merge` but:
 *    - Preserves existing values, e.g. (merge-nx <user-opts> <defaults>).
 *    - Supports `:merge/dissoc` vals.
 *    - Often faster, with much better worst-case performance.
 */
taoensso.encore.merge_nx = (function taoensso$encore$merge_nx(var_args){
var G__25432 = arguments.length;
switch (G__25432) {
case 0:
return taoensso.encore.merge_nx.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.merge_nx.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.merge_nx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.merge_nx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___26483 = arguments.length;
var i__5727__auto___26484 = (0);
while(true){
if((i__5727__auto___26484 < len__5726__auto___26483)){
args_arr__5751__auto__.push((arguments[i__5727__auto___26484]));

var G__26485 = (i__5727__auto___26484 + (1));
i__5727__auto___26484 = G__26485;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((3) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((3)),(0),null)):null);
return taoensso.encore.merge_nx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5752__auto__);

}
});

(taoensso.encore.merge_nx.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(taoensso.encore.merge_nx.cljs$core$IFn$_invoke$arity$1 = (function (m1){
return taoensso.encore.p_BANG_(m1);
}));

(taoensso.encore.merge_nx.cljs$core$IFn$_invoke$arity$2 = (function (m1,m2){
return taoensso.encore.p_BANG_(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(false,mf_26476,m1,m2));
}));

(taoensso.encore.merge_nx.cljs$core$IFn$_invoke$arity$3 = (function (m1,m2,m3){
return taoensso.encore.p_BANG_(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(false,mf_26476,taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(false,mf_26476,m1,m2),m3));
}));

(taoensso.encore.merge_nx.cljs$core$IFn$_invoke$arity$variadic = (function (m1,m2,m3,more){
return taoensso.encore.p_BANG_(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$3(false,mf_26476,cljs.core.cons(taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(false,mf_26476,taoensso.encore.merge_with_STAR_.cljs$core$IFn$_invoke$arity$4(false,mf_26476,m1,m2),m3),more)));
}));

/** @this {Function} */
(taoensso.encore.merge_nx.cljs$lang$applyTo = (function (seq25428){
var G__25429 = cljs.core.first(seq25428);
var seq25428__$1 = cljs.core.next(seq25428);
var G__25430 = cljs.core.first(seq25428__$1);
var seq25428__$2 = cljs.core.next(seq25428__$1);
var G__25431 = cljs.core.first(seq25428__$2);
var seq25428__$3 = cljs.core.next(seq25428__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25429,G__25430,G__25431,seq25428__$3);
}));

(taoensso.encore.merge_nx.cljs$lang$maxFixedArity = (3));


/**
* @constructor
*/
taoensso.encore.Pred = (function (pred_fn){
this.pred_fn = pred_fn;
});

(taoensso.encore.Pred.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred-fn","pred-fn",335458754,null)], null);
}));

(taoensso.encore.Pred.cljs$lang$type = true);

(taoensso.encore.Pred.cljs$lang$ctorStr = "taoensso.encore/Pred");

(taoensso.encore.Pred.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.encore/Pred");
}));

/**
 * Positional factory function for taoensso.encore/Pred.
 */
taoensso.encore.__GT_Pred = (function taoensso$encore$__GT_Pred(pred_fn){
return (new taoensso.encore.Pred(pred_fn));
});

/**
 * Experimental, subject to change without notice.
 *   Wraps given predicate fn to return `Pred` for use with `submap?`, etc.
 *   Arity of predicate fn depends on context in which it'll be used.
 *   See also `pred-fn`.
 */
taoensso.encore.pred = (function taoensso$encore$pred(pred_fn){
return (new taoensso.encore.Pred(pred_fn));
});
/**
 * Experimental, subject to change without notice.
 *   Returns unwrapped predicate fn when given `Pred`, otherwise returns nil.
 *   See also `pred`.
 */
taoensso.encore.pred_fn = (function taoensso$encore$pred_fn(pred){
if((pred instanceof taoensso.encore.Pred)){
return pred.pred_fn;
} else {
return null;
}
});
/**
 * Returns true iff `sub` is a (possibly nested) submap of `m`,
 *   i.e. iff every (nested) value in `sub` has the same (nested) value in `m`.
 *   Uses stack recursion so supports only limited nesting.
 */
taoensso.encore.submap_QMARK_ = (function taoensso$encore$submap_QMARK_(m,sub){
return cljs.core.reduce_kv((function (_,k,v){
if(cljs.core.map_QMARK_(v)){
var sub_STAR_ = v;
var m_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var b2__22159__auto__ = (function (){var and__5000__auto__ = cljs.core.map_QMARK_(m_STAR_);
if(and__5000__auto__){
return (taoensso.encore.submap_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.submap_QMARK_.cljs$core$IFn$_invoke$arity$2(m_STAR_,sub_STAR_) : taoensso.encore.submap_QMARK_.call(null, m_STAR_,sub_STAR_));
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(b2__22159__auto__)){
var match_QMARK_ = b2__22159__auto__;
return true;
} else {
return cljs.core.reduced(false);
}
} else {
var sval = v;
var mval = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k,new cljs.core.Keyword("taoensso.encore","nx","taoensso.encore/nx",1544906500));
var b2__22159__auto__ = (function (){var b2__22159__auto__ = taoensso.encore.pred_fn(sval);
if(cljs.core.truth_(b2__22159__auto__)){
var pf = b2__22159__auto__;
return (pf.cljs$core$IFn$_invoke$arity$1 ? pf.cljs$core$IFn$_invoke$arity$1(mval) : pf.call(null, mval));
} else {
var G__25433 = sval;
var G__25433__$1 = (((G__25433 instanceof cljs.core.Keyword))?G__25433.fqn:null);
switch (G__25433__$1) {
case "submap/nx":
return cljs.core.keyword_identical_QMARK_(mval,new cljs.core.Keyword("taoensso.encore","nx","taoensso.encore/nx",1544906500));

break;
case "submap/ex":
return (!(cljs.core.keyword_identical_QMARK_(mval,new cljs.core.Keyword("taoensso.encore","nx","taoensso.encore/nx",1544906500))));

break;
case "submap/some":
return taoensso.encore.some_QMARK_(mval);

break;
default:
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sval,mval);

}
}
})();
if(cljs.core.truth_(b2__22159__auto__)){
var match_QMARK_ = b2__22159__auto__;
return true;
} else {
return cljs.core.reduced(false);
}
}
}),true,sub);
});
/**
 * Experimental, subject to change without notice.
 *   Returns true iff `sub_i` is a (possibly nested) submap of `m_i`.
 *   Uses `submap?`.
 */
taoensso.encore.submaps_QMARK_ = (function taoensso$encore$submaps_QMARK_(maps,subs){
if((cljs.core.count(subs) > cljs.core.count(maps))){
return false;
} else {
return taoensso.encore.reduce_zip.cljs$core$IFn$_invoke$arity$5((function (acc,m,sub){
var or__5002__auto__ = taoensso.encore.submap_QMARK_(m,sub);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.reduced(false);
}
}),true,maps,subs,null);
}
});
/**
 * Like `select-keys` but supports nested key spec:
 * 
 *  (select-nested-keys
 *    {:a :A :b :B :c {:c1 :C1 :c2 :C2} :d :D} ; `src-map`
 *    [:a {:c [:c1], :d [:d1 :d2]}]) ; `key-spec`
 * 
 *    => {:a :A, :c {:c1 :C1}, :d :D}
 * 
 *   Note that as with the `{:d [:d1 :d2]}` spec in the example above,
 *   if spec expects a nested map but the actual value is not a map,
 *   the actual value will be included in output as-is.
 * 
 *   Has the same behaviour as `select-keys` when `key-spec` is a
 *   simple vector of keys.
 */
taoensso.encore.select_nested_keys = (function taoensso$encore$select_nested_keys(src_map,key_spec){
if(((cljs.core.empty_QMARK_(src_map)) || (cljs.core.empty_QMARK_(key_spec)))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function taoensso$encore$select_nested_keys_$_rf(acc,spec_in){
if(cljs.core.map_QMARK_(spec_in)){
return cljs.core.reduce_kv((function (acc__$1,k,nested_spec_in){
if(cljs.core.contains_QMARK_(src_map,k)){
var src_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(src_map,k);
if(cljs.core.map_QMARK_(src_val)){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc__$1,k,(taoensso.encore.select_nested_keys.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.select_nested_keys.cljs$core$IFn$_invoke$arity$2(src_val,nested_spec_in) : taoensso.encore.select_nested_keys.call(null, src_val,nested_spec_in)));
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc__$1,k,src_val);
}
} else {
return acc__$1;
}
}),acc,spec_in);
} else {
var k = spec_in;
if(cljs.core.contains_QMARK_(src_map,k)){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(src_map,k));
} else {
return acc;
}
}
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),key_spec));
}
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.LightAtom = (function (state){
this.state = state;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 98304;
});
(taoensso.encore.LightAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
}));

(taoensso.encore.LightAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (_,new$){
var self__ = this;
var ___$1 = this;
(self__.state = new$);

return new$;
}));

(taoensso.encore.LightAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (t,swap_fn){
var self__ = this;
var t__$1 = this;
return (t__$1.cljs$core$IFn$_invoke$arity$1 ? t__$1.cljs$core$IFn$_invoke$arity$1(swap_fn) : t__$1.call(null, swap_fn));
}));

(taoensso.encore.LightAtom.prototype.call = (function (unused__10318__auto__){
var self__ = this;
var self__ = this;
var G__25435 = (arguments.length - (1));
switch (G__25435) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(taoensso.encore.LightAtom.prototype.apply = (function (self__,args25434){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args25434)));
}));

(taoensso.encore.LightAtom.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return self__.state;
}));

(taoensso.encore.LightAtom.prototype.cljs$core$IFn$_invoke$arity$1 = (function (swap_fn){
var self__ = this;
var _ = this;
var new$ = (swap_fn.cljs$core$IFn$_invoke$arity$1 ? swap_fn.cljs$core$IFn$_invoke$arity$1(self__.state) : swap_fn.call(null, self__.state));
(self__.state = new$);

return new$;
}));

(taoensso.encore.LightAtom.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,swap_fn){
var self__ = this;
var _ = this;
var old_map = self__.state;
var new_val = (function (){var G__25436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_map,k);
return (swap_fn.cljs$core$IFn$_invoke$arity$1 ? swap_fn.cljs$core$IFn$_invoke$arity$1(G__25436) : swap_fn.call(null, G__25436));
})();
var new_map = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_map,k,new_val);
(self__.state = new_map);

return new_val;
}));

(taoensso.encore.LightAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(taoensso.encore.LightAtom.cljs$lang$type = true);

(taoensso.encore.LightAtom.cljs$lang$ctorStr = "taoensso.encore/LightAtom");

(taoensso.encore.LightAtom.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.encore/LightAtom");
}));

/**
 * Positional factory function for taoensso.encore/LightAtom.
 */
taoensso.encore.__GT_LightAtom = (function taoensso$encore$__GT_LightAtom(state){
return (new taoensso.encore.LightAtom(state));
});

/**
 * Private, don't use. Micro-optimized lightweight `atom`.
 *   Up to 30% faster than standard atoms, with the same atomicity guarantees.
 */
taoensso.encore.latom = (function taoensso$encore$latom(init_state){
return (new taoensso.encore.LightAtom(init_state));
});
/**
 * Impln. for 0-key resets
 */
taoensso.encore._reset_k0_BANG_ = (function taoensso$encore$_reset_k0_BANG_(return$,atom_,m1){
while(true){
var m0 = cljs.core.deref(atom_);
if(cljs.core.compare_and_set_BANG_(atom_,m0,m1)){
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(m0,m0,m1,m1) : return$.call(null, m0,m0,m1,m1));
} else {
continue;
}
break;
}
});
/**
 * Impln. for 1-key resets
 */
taoensso.encore._reset_k1_BANG_ = (function taoensso$encore$_reset_k1_BANG_(return$,atom_,k,not_found,v1){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1);
if(cljs.core.compare_and_set_BANG_(atom_,m0,m1)){
var G__25437 = m0;
var G__25438 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var G__25439 = m1;
var G__25440 = v1;
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(G__25437,G__25438,G__25439,G__25440) : return$.call(null, G__25437,G__25438,G__25439,G__25440));
} else {
continue;
}
break;
}
});
/**
 * Impln. for n-key resets
 */
taoensso.encore._reset_kn_BANG_ = (function taoensso$encore$_reset_kn_BANG_(return$,atom_,ks,not_found,v1){
var b2__22159__auto__ = cljs.core.seq(ks);
if(b2__22159__auto__){
var ks_seq = b2__22159__auto__;
if(cljs.core.next(ks_seq)){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = cljs.core.assoc_in(m0,ks,v1);
if(cljs.core.compare_and_set_BANG_(atom_,m0,m1)){
var G__25441 = m0;
var G__25442 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var G__25443 = m1;
var G__25444 = v1;
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(G__25441,G__25442,G__25443,G__25444) : return$.call(null, G__25441,G__25442,G__25443,G__25444));
} else {
continue;
}
break;
}
} else {
return taoensso.encore._reset_k1_BANG_(return$,atom_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0)),not_found,v1);
}
} else {
return taoensso.encore._reset_k0_BANG_(return$,atom_,v1);
}
});
var return_26508 = (function (m0,v0,m1,v1){
return v0;
});
/**
 * Like `reset!` but supports `update-in` semantics, returns <old-key-val>.
 */
taoensso.encore.reset_in_BANG_ = (function taoensso$encore$reset_in_BANG_(var_args){
var G__25446 = arguments.length;
switch (G__25446) {
case 2:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,val){
return taoensso.encore._reset_k0_BANG_(return_26508,atom_,val);
}));

(taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,val){
return taoensso.encore._reset_kn_BANG_(return_26508,atom_,ks,null,val);
}));

(taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,ks,not_found,val){
return taoensso.encore._reset_kn_BANG_(return_26508,atom_,ks,not_found,val);
}));

(taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = 4);


/**
 * Like `reset-in!` but optimized for single-key case.
 */
taoensso.encore.reset_val_BANG_ = (function taoensso$encore$reset_val_BANG_(var_args){
var G__25448 = arguments.length;
switch (G__25448) {
case 3:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,val){
return taoensso.encore._reset_k1_BANG_(return_26508,atom_,k,null,val);
}));

(taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,k,not_found,val){
return taoensso.encore._reset_k1_BANG_(return_26508,atom_,k,not_found,val);
}));

(taoensso.encore.reset_val_BANG_.cljs$lang$maxFixedArity = 4);

var sentinel_26516 = ({});
var return_26517 = (function (m0,v0,m1,v1){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v0,v1);
});
/**
 * Like `reset-in!` but returns true iff the atom's value changed.
 */
taoensso.encore.reset_in_BANG__QMARK_ = (function taoensso$encore$reset_in_BANG__QMARK_(var_args){
var G__25452 = arguments.length;
switch (G__25452) {
case 2:
return taoensso.encore.reset_in_BANG__QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.reset_in_BANG__QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_in_BANG__QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reset_in_BANG__QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,val){
return taoensso.encore._reset_k0_BANG_(return_26517,atom_,val);
}));

(taoensso.encore.reset_in_BANG__QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,val){
return taoensso.encore._reset_kn_BANG_(return_26517,atom_,ks,sentinel_26516,val);
}));

(taoensso.encore.reset_in_BANG__QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,ks,not_found,val){
return taoensso.encore._reset_kn_BANG_(return_26517,atom_,ks,not_found,val);
}));

(taoensso.encore.reset_in_BANG__QMARK_.cljs$lang$maxFixedArity = 4);


/**
 * Like `reset-in!?` but optimized for single-key case.
 */
taoensso.encore.reset_val_BANG__QMARK_ = (function taoensso$encore$reset_val_BANG__QMARK_(atom_,k,new_val){
var v0 = taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4(atom_,k,sentinel_26516,new_val);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v0,new_val);
});
/**
 * Atomically swaps value of `atom_` to `val` and returns
 *   true iff the atom's value changed. See also `reset-in!?`.
 */
taoensso.encore.reset_BANG__QMARK_ = (function taoensso$encore$reset_BANG__QMARK_(atom_,val){
while(true){
var old = cljs.core.deref(atom_);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,val)){
return false;
} else {
if(cljs.core.compare_and_set_BANG_(atom_,old,val)){
return true;
} else {
continue;
}
}
break;
}
});

/**
* @constructor
*/
taoensso.encore.Swapped = (function (newv,returnv){
this.newv = newv;
this.returnv = returnv;
});

(taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newv","newv",-238403387,null),new cljs.core.Symbol(null,"returnv","returnv",-1488668972,null)], null);
}));

(taoensso.encore.Swapped.cljs$lang$type = true);

(taoensso.encore.Swapped.cljs$lang$ctorStr = "taoensso.encore/Swapped");

(taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.encore/Swapped");
}));

/**
 * Positional factory function for taoensso.encore/Swapped.
 */
taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(newv,returnv){
return (new taoensso.encore.Swapped(newv,returnv));
});


/**
 * For use within the swap functions of `swap-in!` and `swap-val!`.
 * 
 *  Allows the easy decoupling of new and returned values. Compare:
 *    (let [a (atom 0)] [(core/swap! a (fn [old]          (inc old)     )) @a]) [1 1] ; new=1, return=1
 *    (let [a (atom 0)] [(swap-in!   a (fn [old] (swapped (inc old) old))) @a]) [0 1] ; new=1, return=0
 * 
 *  Faster and much more flexible than `core/swap-vals!`, etc.
 *  Especially useful when combined with the `update-in` semantics of `swap-in!`, etc.
 */
taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val));
});

/**
 * Private, don't use.
 */
taoensso.encore.swapped_vec = (function taoensso$encore$swapped_vec(x){
if((x instanceof taoensso.encore.Swapped)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x.newv,x.returnv], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});

/**
 * Returns true iff given `Swapped` argument.
 */
taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});

taoensso.encore.return_swapped = (function taoensso$encore$return_swapped(sw,m0,m1){
var rv = sw.returnv;
var G__25453 = rv;
var G__25453__$1 = (((G__25453 instanceof cljs.core.Keyword))?G__25453.fqn:null);
switch (G__25453__$1) {
case "swap/changed?":
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(m1,m0);

break;
case "swap/new":
return m1;

break;
case "swap/old":
return m0;

break;
default:
return rv;

}
});
/**
 * Impln. for 0-key swaps
 */
taoensso.encore._swap_k0_BANG_ = (function taoensso$encore$_swap_k0_BANG_(return$,atom_,f){
while(true){
var m0 = cljs.core.deref(atom_);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(m0) : f.call(null, m0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var m1 = ((sw_QMARK_)?s1.newv:s1);
if(cljs.core.keyword_identical_QMARK_(m1,new cljs.core.Keyword("swap","abort","swap/abort",508048993))){
if(sw_QMARK_){
return taoensso.encore.return_swapped(s1,m0,m1);
} else {
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(m0,m0,m0,m0) : return$.call(null, m0,m0,m0,m0));
}
} else {
if(cljs.core.compare_and_set_BANG_(atom_,m0,m1)){
if(sw_QMARK_){
return taoensso.encore.return_swapped(s1,m0,m1);
} else {
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(m0,m0,m1,m1) : return$.call(null, m0,m0,m1,m1));
}
} else {
continue;
}
}
break;
}
});
/**
 * Impln. for 1-key swaps
 */
taoensso.encore._swap_k1_BANG_ = (function taoensso$encore$_swap_k1_BANG_(return$,atom_,k,not_found,f){
if(cljs.core.keyword_identical_QMARK_(f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782))){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m0,k);
if(cljs.core.compare_and_set_BANG_(atom_,m0,m1)){
var G__25454 = m0;
var G__25455 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var G__25456 = m1;
var G__25457 = new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(G__25454,G__25455,G__25456,G__25457) : return$.call(null, G__25454,G__25455,G__25456,G__25457));
} else {
continue;
}
break;
}
} else {
while(true){
var m0 = cljs.core.deref(atom_);
var v0 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null, v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
if(cljs.core.keyword_identical_QMARK_(v1,new cljs.core.Keyword("swap","abort","swap/abort",508048993))){
if(sw_QMARK_){
return taoensso.encore.return_swapped(s1,m0,m0);
} else {
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(m0,v0,m0,v0) : return$.call(null, m0,v0,m0,v0));
}
} else {
var m1 = ((cljs.core.keyword_identical_QMARK_(v1,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m0,k):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1));
if(cljs.core.compare_and_set_BANG_(atom_,m0,m1)){
if(sw_QMARK_){
return taoensso.encore.return_swapped(s1,m0,m1);
} else {
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(m0,v0,m1,v1) : return$.call(null, m0,v0,m1,v1));
}
} else {
continue;
}
}
break;
}
}
});
/**
 * Impln. for n-key swaps
 */
taoensso.encore._swap_kn_BANG_ = (function taoensso$encore$_swap_kn_BANG_(return$,atom_,ks,not_found,f){
var b2__22159__auto__ = cljs.core.seq(ks);
if(b2__22159__auto__){
var ks_seq = b2__22159__auto__;
if(cljs.core.next(ks_seq)){
if(cljs.core.keyword_identical_QMARK_(f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782))){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$2(m0,ks);
if(cljs.core.compare_and_set_BANG_(atom_,m0,m1)){
var G__25458 = m0;
var G__25459 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var G__25460 = m1;
var G__25461 = new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(G__25458,G__25459,G__25460,G__25461) : return$.call(null, G__25458,G__25459,G__25460,G__25461));
} else {
continue;
}
break;
}
} else {
while(true){
var m0 = cljs.core.deref(atom_);
var v0 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null, v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
if(cljs.core.keyword_identical_QMARK_(v1,new cljs.core.Keyword("swap","abort","swap/abort",508048993))){
if(sw_QMARK_){
return taoensso.encore.return_swapped(s1,m0,m0);
} else {
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(m0,v0,m0,v0) : return$.call(null, m0,v0,m0,v0));
}
} else {
var m1 = ((cljs.core.keyword_identical_QMARK_(v1,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$2(m0,ks):cljs.core.assoc_in(m0,ks,v1));
if(cljs.core.compare_and_set_BANG_(atom_,m0,m1)){
if(sw_QMARK_){
return taoensso.encore.return_swapped(s1,m0,m1);
} else {
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(m0,v0,m1,v1) : return$.call(null, m0,v0,m1,v1));
}
} else {
continue;
}
}
break;
}
}
} else {
return taoensso.encore._swap_k1_BANG_(return$,atom_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0)),not_found,f);
}
} else {
return taoensso.encore._swap_k0_BANG_(return$,atom_,f);
}
});
var return_26542 = (function (m0,v0,m1,v1){
return v1;
});
/**
 * Like `swap!` but supports `update-in` semantics and `swapped`.
 *  Returns <new-key-val> or <swapped-return-val>:
 *    (swap-in! (atom {:k1 {:k2 5}}) [:k1 :k2] inc) => 6
 *    (swap-in! (atom {:k1 {:k2 5}}) [:k1 :k2]
 *      (fn [old] (swapped (inc old) old))) => 5
 */
taoensso.encore.swap_in_BANG_ = (function taoensso$encore$swap_in_BANG_(var_args){
var G__25463 = arguments.length;
switch (G__25463) {
case 2:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,f){
return taoensso.encore._swap_k0_BANG_(return_26542,atom_,f);
}));

(taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_(return_26542,atom_,ks,null,f);
}));

(taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_(return_26542,atom_,ks,not_found,f);
}));

(taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = 4);


/**
 * Like `swap-in!` but optimized for single-key case:
 *    (swap-val! (atom {:k 5}) :k inc) => 6
 *    (swap-val! (atom {:k 5}) :k
 *      (fn [old] (swapped (inc old) old))) => 5
 */
taoensso.encore.swap_val_BANG_ = (function taoensso$encore$swap_val_BANG_(var_args){
var G__25465 = arguments.length;
switch (G__25465) {
case 3:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_(return_26542,atom_,k,null,f);
}));

(taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_(return_26542,atom_,k,not_found,f);
}));

(taoensso.encore.swap_val_BANG_.cljs$lang$maxFixedArity = 4);

/**
 * Removes and returns value mapped to key:
 *  (let [a (atom {:k :v})]
 *    [(pull-val! a :k) @a]) => [:v {}]
 */
taoensso.encore.pull_val_BANG_ = (function taoensso$encore$pull_val_BANG_(var_args){
var G__25467 = arguments.length;
switch (G__25467) {
case 2:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,k){
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3(atom_,k,null);
}));

(taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,not_found){
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4(atom_,k,not_found,(function (v0){
return taoensso.encore.swapped(new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),v0);
}));
}));

(taoensso.encore.pull_val_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Returns true iff given platform instant (`java.time.Instant` or `js/Date`).
 */
taoensso.encore.inst_QMARK_ = (function taoensso$encore$inst_QMARK_(x){
return (x instanceof Date);
});
/**
 * Returns current system instant as `js/Date`.
 */
taoensso.encore.now_inst = (function taoensso$encore$now_inst(){
return (new Date());
});

/**
 * Returns current system instant as `js/Date`.
 */
taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});

/**
 * Returns current system insant as milliseconds since Unix epoch.
 */
taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return Date.now();
});

/**
 * Returns current value of best-resolution time source as nanoseconds.
 */
taoensso.encore.now_nano = (function (){var b2__22159__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(taoensso.encore.js__QMARK_window,"performance");
if(cljs.core.truth_(b2__22159__auto__)){
var perf = b2__22159__auto__;
var b2__22159__auto____$1 = (function (){var or__5002__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"now");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"mozNow");
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"webkitNow");
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
var or__5002__auto____$3 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"msNow");
if(cljs.core.truth_(or__5002__auto____$3)){
return or__5002__auto____$3;
} else {
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"oNow");
}
}
}
}
})();
if(cljs.core.truth_(b2__22159__auto____$1)){
var pf = b2__22159__auto____$1;
return (function (){
return Math.floor((1000000.0 * pf.call(perf)));
});
} else {
return (function (){
return (1000000.0 * Date.now());
});
}
} else {
return (function (){
return (1000000.0 * Date.now());
});
}
})();

/**
 * Returns given `js/Date` as milliseconds since Unix epoch.
 */
taoensso.encore.inst__GT_udt = (function taoensso$encore$inst__GT_udt(inst){
return inst.getTime();
});

/**
 * Returns given milliseconds since Unix epoch as `js/Date`.
 */
taoensso.encore.udt__GT_inst = (function taoensso$encore$udt__GT_inst(msecs_since_epoch){
return (new Date(msecs_since_epoch));
});
taoensso.encore.udt_QMARK_ = (function taoensso$encore$udt_QMARK_(x){
return taoensso.encore.int_QMARK_(x);
});
/**
 * Returns given ?arg as platform instant (`java.time.Instant` or `js/Date`), or nil.
 */
taoensso.encore.as__QMARK_inst = (function taoensso$encore$as__QMARK_inst(x){
if((x instanceof Date)){
return x;
} else {
if(typeof x === 'number'){
return (new Date(x));
} else {
if(typeof x === 'string'){
var x__$1 = (new Date(x));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
}
});
/**
 * Returns given ?arg as (pos/neg) milliseconds since Unix epoch, or nil.
 */
taoensso.encore.as__QMARK_udt = (function taoensso$encore$as__QMARK_udt(x){
if((x instanceof Date)){
return x.getTime();
} else {
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var or__5002__auto__ = taoensso.encore.parse_js_int(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var x__$1 = Date.parse(x);
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
}
} else {
return null;
}
}
}
});
taoensso.encore.as_inst = (function taoensso$encore$as_inst(x){
var or__5002__auto__ = taoensso.encore.as__QMARK_inst(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"inst","inst",645962501),x);
}
});
taoensso.encore.as_udt = (function taoensso$encore$as_udt(x){
var or__5002__auto__ = taoensso.encore.as__QMARK_udt(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"udt","udt",2011712751),x);
}
});
/**
 * Experimental, subject to change without notice.
 * 
 *   Returns a (fn format [instant]) that:
 *  - Takes a platform instant (`java.time.Instant` or `js/Date`).
 *  - Returns a formatted human-readable instant string.
 * 
 *   Options:
 *  `:formatter`
 *    Clj:  `java.time.format.DateTimeFormatter`
 *    Cljs: `goog.i18n.DateTimeFormat`
 * 
 *    Defaults to `ISO8601` formatter (`YYYY-MM-DDTHH:mm:ss.sssZ`),
 *    e.g.: "2011-12-03T10:15:130Z".
 * 
 *  `:zone` (Clj only) `java.time.ZoneOffset` (defaults to UTC).
 *   Note that zone may be ignored by some `DateTimeFormatter`s,
 *   including the default (`DateTimeFormatter/ISO_INSTANT`)!
 */
taoensso.encore.format_inst_fn = (function taoensso$encore$format_inst_fn(var_args){
var G__25469 = arguments.length;
switch (G__25469) {
case 0:
return taoensso.encore.format_inst_fn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.format_inst_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.format_inst_fn.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.encore.format_inst_fn.cljs$core$IFn$_invoke$arity$1(null);
}));

(taoensso.encore.format_inst_fn.cljs$core$IFn$_invoke$arity$1 = (function (p__25470){
var map__25471 = p__25470;
var map__25471__$1 = cljs.core.__destructure_map(map__25471);
var formatter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25471__$1,new cljs.core.Keyword(null,"formatter","formatter",-483008823));
if(cljs.core.truth_(formatter)){
return (function taoensso$encore$format_instant(instant){
return formatter.format(instant);
});
} else {
return (function taoensso$encore$format_instant(instant){
return instant.toISOString();
});
}
}));

(taoensso.encore.format_inst_fn.cljs$lang$maxFixedArity = 1);

var default_fn_26571 = taoensso.encore.format_inst_fn.cljs$core$IFn$_invoke$arity$0();
/**
 * Takes a platform instant (`java.time.Instant` or `js/Date`) and
 *  returns a formatted human-readable string in `ISO8601` format
 *  (`YYYY-MM-DDTHH:mm:ss.sssZ`), e.g. "2011-12-03T10:15:130Z".
 */
taoensso.encore.format_inst = (function taoensso$encore$format_inst(inst){
return (default_fn_26571.cljs$core$IFn$_invoke$arity$1 ? default_fn_26571.cljs$core$IFn$_invoke$arity$1(inst) : default_fn_26571.call(null, inst));
});
/**
 * Like `core/memoize` but only caches the given fn's latest input.
 *   Speeds repeated fn calls with the same arguments.
 *   Great for ReactJS render fn caching, etc.
 */
taoensso.encore.memoize_last = (function taoensso$encore$memoize_last(f){
var sentinel = ({});
var call = (function (){var in_ = cljs.core.volatile_BANG_(({}));
var out_ = cljs.core.volatile_BANG_(null);
return (function (in_STAR_,f0){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_STAR_,cljs.core.deref(in_))){
return cljs.core.deref(out_);
} else {
var out = (f0.cljs$core$IFn$_invoke$arity$0 ? f0.cljs$core$IFn$_invoke$arity$0() : f0.call(null, ));
cljs.core.vreset_BANG_(in_,in_STAR_);

cljs.core.vreset_BANG_(out_,out);

return out;
}
break;
}
});
})();
return (function() {
var taoensso$encore$memoize_last_$_memoized_fn = null;
var taoensso$encore$memoize_last_$_memoized_fn__0 = (function (){
return call(sentinel,(function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));
}));
});
var taoensso$encore$memoize_last_$_memoized_fn__1 = (function (x){
return call(x,(function (){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null, x));
}));
});
var taoensso$encore$memoize_last_$_memoized_fn__2 = (function (x,y){
return call(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sentinel,x,y], null),(function (){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(x,y) : f.call(null, x,y));
}));
});
var taoensso$encore$memoize_last_$_memoized_fn__3 = (function (x,y,z){
return call(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sentinel,x,y,z], null),(function (){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(x,y,z) : f.call(null, x,y,z));
}));
});
var taoensso$encore$memoize_last_$_memoized_fn__4 = (function() { 
var G__26579__delegate = function (x,y,z,more){
return call(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sentinel,x,y,z,more], null),(function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,more);
}));
};
var G__26579 = function (x,y,z,var_args){
var more = null;
if (arguments.length > 3) {
var G__26580__i = 0, G__26580__a = new Array(arguments.length -  3);
while (G__26580__i < G__26580__a.length) {G__26580__a[G__26580__i] = arguments[G__26580__i + 3]; ++G__26580__i;}
  more = new cljs.core.IndexedSeq(G__26580__a,0,null);
} 
return G__26579__delegate.call(this,x,y,z,more);};
G__26579.cljs$lang$maxFixedArity = 3;
G__26579.cljs$lang$applyTo = (function (arglist__26583){
var x = cljs.core.first(arglist__26583);
arglist__26583 = cljs.core.next(arglist__26583);
var y = cljs.core.first(arglist__26583);
arglist__26583 = cljs.core.next(arglist__26583);
var z = cljs.core.first(arglist__26583);
var more = cljs.core.rest(arglist__26583);
return G__26579__delegate(x,y,z,more);
});
G__26579.cljs$core$IFn$_invoke$arity$variadic = G__26579__delegate;
return G__26579;
})()
;
taoensso$encore$memoize_last_$_memoized_fn = function(x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return taoensso$encore$memoize_last_$_memoized_fn__0.call(this);
case 1:
return taoensso$encore$memoize_last_$_memoized_fn__1.call(this,x);
case 2:
return taoensso$encore$memoize_last_$_memoized_fn__2.call(this,x,y);
case 3:
return taoensso$encore$memoize_last_$_memoized_fn__3.call(this,x,y,z);
default:
var G__26590 = null;
if (arguments.length > 3) {
var G__26591__i = 0, G__26591__a = new Array(arguments.length -  3);
while (G__26591__i < G__26591__a.length) {G__26591__a[G__26591__i] = arguments[G__26591__i + 3]; ++G__26591__i;}
G__26590 = new cljs.core.IndexedSeq(G__26591__a,0,null);
}
return taoensso$encore$memoize_last_$_memoized_fn__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, G__26590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$memoize_last_$_memoized_fn.cljs$lang$maxFixedArity = 3;
taoensso$encore$memoize_last_$_memoized_fn.cljs$lang$applyTo = taoensso$encore$memoize_last_$_memoized_fn__4.cljs$lang$applyTo;
taoensso$encore$memoize_last_$_memoized_fn.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$memoize_last_$_memoized_fn__0;
taoensso$encore$memoize_last_$_memoized_fn.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$memoize_last_$_memoized_fn__1;
taoensso$encore$memoize_last_$_memoized_fn.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$memoize_last_$_memoized_fn__2;
taoensso$encore$memoize_last_$_memoized_fn.cljs$core$IFn$_invoke$arity$3 = taoensso$encore$memoize_last_$_memoized_fn__3;
taoensso$encore$memoize_last_$_memoized_fn.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$memoize_last_$_memoized_fn__4.cljs$core$IFn$_invoke$arity$variadic;
return taoensso$encore$memoize_last_$_memoized_fn;
})()
});
/**
 * For Clj: fastest possible memoize. Non-racey, 0-7 arity only.
 *   For Cljs: same as `core/memoize`.
 */
taoensso.encore.fmemoize = (function taoensso$encore$fmemoize(f){
return cljs.core.memoize(f);
});
taoensso.encore.gc_now_QMARK_ = (function taoensso$encore$gc_now_QMARK_(rate){
return (Math.random() <= rate);
});

/**
* @constructor
*/
taoensso.encore.SimpleCacheEntry = (function (delay,udt){
this.delay = delay;
this.udt = udt;
});

(taoensso.encore.SimpleCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"delay","delay",1066306308,null),cljs.core.with_meta(new cljs.core.Symbol(null,"udt","udt",-642723018,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.encore.SimpleCacheEntry.cljs$lang$type = true);

(taoensso.encore.SimpleCacheEntry.cljs$lang$ctorStr = "taoensso.encore/SimpleCacheEntry");

(taoensso.encore.SimpleCacheEntry.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.encore/SimpleCacheEntry");
}));

/**
 * Positional factory function for taoensso.encore/SimpleCacheEntry.
 */
taoensso.encore.__GT_SimpleCacheEntry = (function taoensso$encore$__GT_SimpleCacheEntry(delay,udt){
return (new taoensso.encore.SimpleCacheEntry(delay,udt));
});


/**
* @constructor
*/
taoensso.encore.TickedCacheEntry = (function (delay,udt,tick_lru,tick_lfu){
this.delay = delay;
this.udt = udt;
this.tick_lru = tick_lru;
this.tick_lfu = tick_lfu;
});

(taoensso.encore.TickedCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"delay","delay",1066306308,null),cljs.core.with_meta(new cljs.core.Symbol(null,"udt","udt",-642723018,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tick-lru","tick-lru",1625824877,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tick-lfu","tick-lfu",-1976905322,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.encore.TickedCacheEntry.cljs$lang$type = true);

(taoensso.encore.TickedCacheEntry.cljs$lang$ctorStr = "taoensso.encore/TickedCacheEntry");

(taoensso.encore.TickedCacheEntry.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.encore/TickedCacheEntry");
}));

/**
 * Positional factory function for taoensso.encore/TickedCacheEntry.
 */
taoensso.encore.__GT_TickedCacheEntry = (function taoensso$encore$__GT_TickedCacheEntry(delay,udt,tick_lru,tick_lfu){
return (new taoensso.encore.TickedCacheEntry(delay,udt,tick_lru,tick_lfu));
});

/**
 * Returns a cached version of given referentially transparent function `f`.
 * 
 *   Like `core/memoize` but:
 *  - Often faster, depending on options.
 *  - Prevents race conditions on writes.
 *  - Supports cache invalidation by prepending args with:
 *    - `:cache/del`   ; Delete cached item for subsequent args, returns nil.
 *    - `:cache/fresh` ; Renew  cached item for subsequent args, returns new val.
 * 
 *  - Supports options:
 *    - `ttl-ms` ; Expire cached items after <this> many msecs.
 *    - `size`   ; Restrict cache size to <this> many items at the next garbage
 *               ; collection (GC).
 * 
 *    - `gc-every` ; Run garbage collection (GC) approximately once every
 *                 ; <this> many calls to cached fn. If unspecified, GC rate
 *                 ; will be determined automatically based on `size`.
 * 
 *   See also `defn-cached`, `fmemoize`, `memoize-last`.
 */
taoensso.encore.cache = (function taoensso$encore$cache(var_args){
var G__25479 = arguments.length;
switch (G__25479) {
case 1:
return taoensso.encore.cache.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.cache.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.cache.cljs$core$IFn$_invoke$arity$1 = (function (f){
var cache_ = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var get_sentinel = ({});
return (function() { 
var taoensso$encore$cached__delegate = function (xs){
var x1 = cljs.core.first(xs);
var G__25482 = x1;
var G__25482__$1 = (((G__25482 instanceof cljs.core.Keyword))?G__25482.fqn:null);
switch (G__25482__$1) {
case "cache/del":
case "mem/del":
var xn = cljs.core.next(xs);
var x2 = cljs.core.first(xn);
if(cljs.core.keyword_identical_QMARK_(x2,new cljs.core.Keyword("mem","all","mem/all",892075139))){
cljs.core.vreset_BANG_(cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cache_.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cache_.cljs$core$IDeref$_deref$arity$1(null, ),xn));
}

return null;

break;
case "cache/fresh":
case "mem/fresh":
var xn = cljs.core.next(xs);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xn);
cache_.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache_.cljs$core$IDeref$_deref$arity$1(null, ),xn,v));

return v;

break;
default:
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(cache_),xs,get_sentinel);
if((v === get_sentinel)){
var v__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xs);
cache_.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache_.cljs$core$IDeref$_deref$arity$1(null, ),xs,v__$1));

return v__$1;
} else {
return v;
}

}
};
var taoensso$encore$cached = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__26615__i = 0, G__26615__a = new Array(arguments.length -  0);
while (G__26615__i < G__26615__a.length) {G__26615__a[G__26615__i] = arguments[G__26615__i + 0]; ++G__26615__i;}
  xs = new cljs.core.IndexedSeq(G__26615__a,0,null);
} 
return taoensso$encore$cached__delegate.call(this,xs);};
taoensso$encore$cached.cljs$lang$maxFixedArity = 0;
taoensso$encore$cached.cljs$lang$applyTo = (function (arglist__26616){
var xs = cljs.core.seq(arglist__26616);
return taoensso$encore$cached__delegate(xs);
});
taoensso$encore$cached.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$cached__delegate;
return taoensso$encore$cached;
})()
;
}));

(taoensso.encore.cache.cljs$core$IFn$_invoke$arity$2 = (function (p__25483,f){
var map__25484 = p__25483;
var map__25484__$1 = cljs.core.__destructure_map(map__25484);
var opts = map__25484__$1;
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25484__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var ttl_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25484__$1,new cljs.core.Keyword(null,"ttl-ms","ttl-ms",1305262875));
var gc_every = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25484__$1,new cljs.core.Keyword(null,"gc-every","gc-every",-1661544691));
var e_26617 = (function (){try{if((function (x){
return taoensso.truss.impl.ks_LT__EQ_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gc-every","gc-every",-1661544691),null,new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"ttl-ms","ttl-ms",1305262875),null], null), null),x);
})(opts)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e25485){if((e25485 instanceof Error)){
var e_26617 = e25485;
return e_26617;
} else {
throw e25485;

}
}})();
if((e_26617 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),3747,4,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/encore/3.133.0/encore-3.133.0.jar!/taoensso/encore.cljc",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ks<=","ks<=",1664853833),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gc-every","gc-every",-1661544691),"null",new cljs.core.Keyword(null,"size","size",1098693007),"null",new cljs.core.Keyword(null,"ttl-ms","ttl-ms",1305262875),"null"], null), null)], null),null,new cljs.core.Symbol(null,"opts","opts",1795607228,null),opts,e_26617,null);
}

if(cljs.core.truth_((function (x){
var or__5002__auto__ = (x == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return taoensso.truss.impl.safe_pred(taoensso.encore.pos_num_QMARK_)(x);
}
})(size))){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),3748,4,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/encore/3.133.0/encore-3.133.0.jar!/taoensso/encore.cljc",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"pos-num?","pos-num?",976533390,null)], null),null,new cljs.core.Symbol(null,"size","size",-1555742762,null),size,null,null);
}

if(cljs.core.truth_((function (x){
var or__5002__auto__ = (x == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return taoensso.truss.impl.safe_pred(taoensso.encore.pos_num_QMARK_)(x);
}
})(ttl_ms))){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),3748,4,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/encore/3.133.0/encore-3.133.0.jar!/taoensso/encore.cljc",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"pos-num?","pos-num?",976533390,null)], null),null,new cljs.core.Symbol(null,"ttl-ms","ttl-ms",-1349172894,null),ttl_ms,null,null);
}

if(cljs.core.truth_((function (x){
var or__5002__auto__ = (x == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return taoensso.truss.impl.safe_pred(taoensso.encore.pos_num_QMARK_)(x);
}
})(gc_every))){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),3748,4,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/encore/3.133.0/encore-3.133.0.jar!/taoensso/encore.cljc",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"pos-num?","pos-num?",976533390,null)], null),null,new cljs.core.Symbol(null,"gc-every","gc-every",-21013164,null),gc_every,null,null);
}


if(cljs.core.truth_(size)){
var gc_now_QMARK_ = taoensso.encore.gc_now_QMARK_;
var ticker = (taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.counter.call(null, ));
var cache_ = taoensso.encore.latom(null);
var latch_ = taoensso.encore.latom(null);
var ttl_ms__$1 = cljs.core.long$((function (){var or__5002__auto__ = ttl_ms;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})());
var ttl_QMARK_ = (!((ttl_ms__$1 === (0))));
var size__$1 = cljs.core.long$(size);
var gc_every__$1 = cljs.core.long$((function (){var or__5002__auto__ = gc_every;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return taoensso.encore.clamp_int((1000),(16000),size__$1);
}
})());
return (function() { 
var taoensso$encore$cached__delegate = function (args){
var a1 = cljs.core.first(args);
var G__25486 = a1;
var G__25486__$1 = (((G__25486 instanceof cljs.core.Keyword))?G__25486.fqn:null);
switch (G__25486__$1) {
case "cache/del":
case "mem/del":
var argn = cljs.core.next(args);
var a2 = cljs.core.first(argn);
if(cljs.core.truth_((function (){var G__25487 = a2;
var G__25487__$1 = (((G__25487 instanceof cljs.core.Keyword))?G__25487.fqn:null);
switch (G__25487__$1) {
case "cache/all":
case "mem/all":
return true;

break;
default:
return false;

}
})())){
cljs.core.reset_BANG_(cache_,null);
} else {
var G__25488_26637 = (function (p1__25476_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__25476_SHARP_,argn);
});
(cache_.cljs$core$IFn$_invoke$arity$1 ? cache_.cljs$core$IFn$_invoke$arity$1(G__25488_26637) : cache_.call(null, G__25488_26637));
}

return null;

break;
default:
var tick = (ticker.cljs$core$IFn$_invoke$arity$0 ? ticker.cljs$core$IFn$_invoke$arity$0() : ticker.call(null, ));
var instant = ((ttl_QMARK_)?taoensso.encore.now_udt():(0));
if((((cljs.core.rem(tick,gc_every__$1) === (0))) && ((cljs.core.count((cache_.cljs$core$IFn$_invoke$arity$0 ? cache_.cljs$core$IFn$_invoke$arity$0() : cache_.call(null, ))) >= (1.1 * size__$1))))){
var latch_26640 = null;
if(cljs.core.compare_and_set_BANG_(latch_,null,latch_26640)){
if(ttl_QMARK_){
var G__25489_26643 = (function taoensso$encore$cached_$_swap_fn(m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
}),cljs.core.transient$((function (){var or__5002__auto__ = m;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
});
(cache_.cljs$core$IFn$_invoke$arity$1 ? cache_.cljs$core$IFn$_invoke$arity$1(G__25489_26643) : cache_.call(null, G__25489_26643));
} else {
}

var snapshot_26644 = (cache_.cljs$core$IFn$_invoke$arity$0 ? cache_.cljs$core$IFn$_invoke$arity$0() : cache_.call(null, ));
var n_to_gc_26645 = (cljs.core.count(snapshot_26644) - size__$1);
if((n_to_gc_26645 >= (0.1 * size__$1))){
var ks_to_gc_26647 = (function (){var G__25490 = n_to_gc_26645;
var G__25491 = (function (k){
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(snapshot_26644,k);
return (e.tick_lru + e.tick_lfu);
});
var G__25492 = cljs.core.keys(snapshot_26644);
return (taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 ? taoensso.encore.top.cljs$core$IFn$_invoke$arity$3(G__25490,G__25491,G__25492) : taoensso.encore.top.call(null, G__25490,G__25491,G__25492));
})();
var G__25493_26650 = (function taoensso$encore$cached_$_swap_fn(m){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,in$);
}),cljs.core.transient$((function (){var or__5002__auto__ = m;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),ks_to_gc_26647));
});
(cache_.cljs$core$IFn$_invoke$arity$1 ? cache_.cljs$core$IFn$_invoke$arity$1(G__25493_26650) : cache_.call(null, G__25493_26650));
} else {
}

} else {
}
} else {
}

var fresh_QMARK_ = (function (){var G__25494 = a1;
var G__25494__$1 = (((G__25494 instanceof cljs.core.Keyword))?G__25494.fqn:null);
switch (G__25494__$1) {
case "cache/fresh":
case "mem/fresh":
return true;

break;
default:
return false;

}
})();
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next(args):args);
var _ = null;
var e = (function (){var G__25495 = args__$1;
var G__25496 = (function taoensso$encore$cached_$_swap_fn(_QMARK_e){
if(cljs.core.truth_((function (){var or__5002__auto__ = (_QMARK_e == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.TickedCacheEntry((new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
}),null)),instant,tick,(1)));
} else {
var e = _QMARK_e;
return (new taoensso.encore.TickedCacheEntry(e.delay,e.udt,tick,(e.tick_lfu + (1))));
}
});
return (cache_.cljs$core$IFn$_invoke$arity$2 ? cache_.cljs$core$IFn$_invoke$arity$2(G__25495,G__25496) : cache_.call(null, G__25495,G__25496));
})();
return cljs.core.deref(e.delay);

}
};
var taoensso$encore$cached = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26659__i = 0, G__26659__a = new Array(arguments.length -  0);
while (G__26659__i < G__26659__a.length) {G__26659__a[G__26659__i] = arguments[G__26659__i + 0]; ++G__26659__i;}
  args = new cljs.core.IndexedSeq(G__26659__a,0,null);
} 
return taoensso$encore$cached__delegate.call(this,args);};
taoensso$encore$cached.cljs$lang$maxFixedArity = 0;
taoensso$encore$cached.cljs$lang$applyTo = (function (arglist__26660){
var args = cljs.core.seq(arglist__26660);
return taoensso$encore$cached__delegate(args);
});
taoensso$encore$cached.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$cached__delegate;
return taoensso$encore$cached;
})()
;
} else {
if(cljs.core.truth_(ttl_ms)){
var gc_now_QMARK_ = taoensso.encore.gc_now_QMARK_;
var cache_ = taoensso.encore.latom(null);
var latch_ = taoensso.encore.latom(null);
var ttl_ms__$1 = cljs.core.long$(ttl_ms);
var gc_rate = (function (){var gce = (function (){var or__5002__auto__ = gc_every;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return 8000.0;
}
})();
return (1.0 / cljs.core.long$(gce));
})();
return (function() { 
var taoensso$encore$cached__delegate = function (args){
var a1 = cljs.core.first(args);
var G__25497 = a1;
var G__25497__$1 = (((G__25497 instanceof cljs.core.Keyword))?G__25497.fqn:null);
switch (G__25497__$1) {
case "cache/del":
case "mem/del":
var argn = cljs.core.next(args);
var a2 = cljs.core.first(argn);
if(cljs.core.truth_((function (){var G__25498 = a2;
var G__25498__$1 = (((G__25498 instanceof cljs.core.Keyword))?G__25498.fqn:null);
switch (G__25498__$1) {
case "cache/all":
case "mem/all":
return true;

break;
default:
return false;

}
})())){
cljs.core.reset_BANG_(cache_,null);
} else {
var G__25499_26668 = (function (p1__25477_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__25477_SHARP_,argn);
});
(cache_.cljs$core$IFn$_invoke$arity$1 ? cache_.cljs$core$IFn$_invoke$arity$1(G__25499_26668) : cache_.call(null, G__25499_26668));
}

return null;

break;
default:
var instant = taoensso.encore.now_udt();
if(cljs.core.truth_((gc_now_QMARK_.cljs$core$IFn$_invoke$arity$1 ? gc_now_QMARK_.cljs$core$IFn$_invoke$arity$1(gc_rate) : gc_now_QMARK_.call(null, gc_rate)))){
var latch_26670 = null;
if(cljs.core.compare_and_set_BANG_(latch_,null,latch_26670)){
var G__25500_26671 = (function taoensso$encore$cached_$_swap_fn(m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
}),cljs.core.transient$((function (){var or__5002__auto__ = m;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
});
(cache_.cljs$core$IFn$_invoke$arity$1 ? cache_.cljs$core$IFn$_invoke$arity$1(G__25500_26671) : cache_.call(null, G__25500_26671));

} else {
}
} else {
}

var fresh_QMARK_ = (function (){var G__25501 = a1;
var G__25501__$1 = (((G__25501 instanceof cljs.core.Keyword))?G__25501.fqn:null);
switch (G__25501__$1) {
case "cache/fresh":
case "mem/fresh":
return true;

break;
default:
return false;

}
})();
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next(args):args);
var _ = null;
var e = (function (){var G__25502 = args__$1;
var G__25503 = (function taoensso$encore$cached_$_swap_fn(_QMARK_e){
if(cljs.core.truth_((function (){var or__5002__auto__ = (_QMARK_e == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.SimpleCacheEntry((new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
}),null)),instant));
} else {
return _QMARK_e;
}
});
return (cache_.cljs$core$IFn$_invoke$arity$2 ? cache_.cljs$core$IFn$_invoke$arity$2(G__25502,G__25503) : cache_.call(null, G__25502,G__25503));
})();
return cljs.core.deref(e.delay);

}
};
var taoensso$encore$cached = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26678__i = 0, G__26678__a = new Array(arguments.length -  0);
while (G__26678__i < G__26678__a.length) {G__26678__a[G__26678__i] = arguments[G__26678__i + 0]; ++G__26678__i;}
  args = new cljs.core.IndexedSeq(G__26678__a,0,null);
} 
return taoensso$encore$cached__delegate.call(this,args);};
taoensso$encore$cached.cljs$lang$maxFixedArity = 0;
taoensso$encore$cached.cljs$lang$applyTo = (function (arglist__26681){
var args = cljs.core.seq(arglist__26681);
return taoensso$encore$cached__delegate(args);
});
taoensso$encore$cached.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$cached__delegate;
return taoensso$encore$cached;
})()
;
} else {
return taoensso.encore.cache.cljs$core$IFn$_invoke$arity$1(f);
}
}
}));

(taoensso.encore.cache.cljs$lang$maxFixedArity = 2);

/**
 * Alternative way to call `cache`, provided mostly for back compatibility.
 *   See `cache` docstring for details.
 */
taoensso.encore.memoize = (function taoensso$encore$memoize(var_args){
var G__25505 = arguments.length;
switch (G__25505) {
case 1:
return taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$1 = (function (f){
return taoensso.encore.cache.cljs$core$IFn$_invoke$arity$1(f);
}));

(taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
return taoensso.encore.cache.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ttl-ms","ttl-ms",1305262875),ttl_ms], null),f);
}));

(taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$3 = (function (size,ttl_ms,f){
return taoensso.encore.cache.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"ttl-ms","ttl-ms",1305262875),ttl_ms], null),f);
}));

(taoensso.encore.memoize.cljs$lang$maxFixedArity = 3);

/**
 * Private, don't use.
 *   Returns a basic rate limiter (fn []) that will return falsey (allow) at most once
 *   every given number of milliseconds.
 * 
 *   Similar to (rate-limiter [1 <msecs>]) but significantly faster to construct and run.
 *   Doesn't support request ids!
 */
taoensso.encore.rate_limiter_once_per = (function taoensso$encore$rate_limiter_once_per(msecs){
var last_ = cljs.core.volatile_BANG_((0));
var msecs__$1 = cljs.core.long$(msecs);
return (function() {
var taoensso$encore$rate_limiter_once_per_$_a_rate_limiter_once_per = null;
var taoensso$encore$rate_limiter_once_per_$_a_rate_limiter_once_per__0 = (function (){
var t1 = Date.now();
if(((t1 - cljs.core.deref(last_)) > msecs__$1)){
cljs.core.vreset_BANG_(last_,t1);

return null;
} else {
return true;
}
});
var taoensso$encore$rate_limiter_once_per_$_a_rate_limiter_once_per__1 = (function (req_id){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("[encore/rate-limiter] Basic rate limiters don't support request ids",cljs.core.PersistentArrayMap.EMPTY);
});
taoensso$encore$rate_limiter_once_per_$_a_rate_limiter_once_per = function(req_id){
switch(arguments.length){
case 0:
return taoensso$encore$rate_limiter_once_per_$_a_rate_limiter_once_per__0.call(this);
case 1:
return taoensso$encore$rate_limiter_once_per_$_a_rate_limiter_once_per__1.call(this,req_id);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$rate_limiter_once_per_$_a_rate_limiter_once_per.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$rate_limiter_once_per_$_a_rate_limiter_once_per__0;
taoensso$encore$rate_limiter_once_per_$_a_rate_limiter_once_per.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$rate_limiter_once_per_$_a_rate_limiter_once_per__1;
return taoensso$encore$rate_limiter_once_per_$_a_rate_limiter_once_per;
})()
});

/**
* @constructor
*/
taoensso.encore.LimitSpec = (function (n,ms){
this.n = n;
this.ms = ms;
});

(taoensso.encore.LimitSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"ms","ms",487821794,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.encore.LimitSpec.cljs$lang$type = true);

(taoensso.encore.LimitSpec.cljs$lang$ctorStr = "taoensso.encore/LimitSpec");

(taoensso.encore.LimitSpec.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.encore/LimitSpec");
}));

/**
 * Positional factory function for taoensso.encore/LimitSpec.
 */
taoensso.encore.__GT_LimitSpec = (function taoensso$encore$__GT_LimitSpec(n,ms){
return (new taoensso.encore.LimitSpec(n,ms));
});


/**
* @constructor
*/
taoensso.encore.LimitEntry = (function (n,udt0){
this.n = n;
this.udt0 = udt0;
});

(taoensso.encore.LimitEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"udt0","udt0",-969222777,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.encore.LimitEntry.cljs$lang$type = true);

(taoensso.encore.LimitEntry.cljs$lang$ctorStr = "taoensso.encore/LimitEntry");

(taoensso.encore.LimitEntry.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.encore/LimitEntry");
}));

/**
 * Positional factory function for taoensso.encore/LimitEntry.
 */
taoensso.encore.__GT_LimitEntry = (function taoensso$encore$__GT_LimitEntry(n,udt0){
return (new taoensso.encore.LimitEntry(n,udt0));
});


/**
* @constructor
*/
taoensso.encore.LimitHits = (function (m,worst_lid,worst_ms){
this.m = m;
this.worst_lid = worst_lid;
this.worst_ms = worst_ms;
});

(taoensso.encore.LimitHits.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"worst-lid","worst-lid",-2058001927,null),cljs.core.with_meta(new cljs.core.Symbol(null,"worst-ms","worst-ms",1541498579,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.encore.LimitHits.cljs$lang$type = true);

(taoensso.encore.LimitHits.cljs$lang$ctorStr = "taoensso.encore/LimitHits");

(taoensso.encore.LimitHits.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.encore/LimitHits");
}));

/**
 * Positional factory function for taoensso.encore/LimitHits.
 */
taoensso.encore.__GT_LimitHits = (function taoensso$encore$__GT_LimitHits(m,worst_lid,worst_ms){
return (new taoensso.encore.LimitHits(m,worst_lid,worst_ms));
});

var limit_spec_26700 = (function (n,ms){
var e_26701 = (function (){try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_(n))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e25506){if((e25506 instanceof Error)){
var e_26701 = e25506;
return e_26701;
} else {
throw e25506;

}
}})();
if((e_26701 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),3981,29,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/encore/3.133.0/encore-3.133.0.jar!/taoensso/encore.cljc",new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null),new cljs.core.Symbol("taoensso.encore","pos-int?","taoensso.encore/pos-int?",186070635,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),n,e_26701,null);
}

var e_26705 = (function (){try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_(ms))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e25507){if((e25507 instanceof Error)){
var e_26705 = e25507;
return e_26705;
} else {
throw e25507;

}
}})();
if((e_26705 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),3981,29,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/encore/3.133.0/encore-3.133.0.jar!/taoensso/encore.cljc",new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null),new cljs.core.Symbol("taoensso.encore","pos-int?","taoensso.encore/pos-int?",186070635,null),new cljs.core.Symbol(null,"ms","ms",487821794,null),ms,e_26705,null);
}


return (new taoensso.encore.LimitSpec(n,ms));
});
taoensso.encore.coerce_limit_spec = (function taoensso$encore$coerce_limit_spec(x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv((function (acc,lid,p__25508){
var vec__25509 = p__25508;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25509,(0),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25509,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,lid,limit_spec_26700(n,ms));
}),cljs.core.PersistentArrayMap.EMPTY,x);
} else {
if(cljs.core.vector_QMARK_(x)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__25512){
var vec__25513 = p__25512;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25513,(0),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25513,(1),null);
var _QMARK_lid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25513,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,(function (){var or__5002__auto__ = _QMARK_lid;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,ms], null);
}
})(),limit_spec_26700(n,ms));
}),cljs.core.PersistentArrayMap.EMPTY,x);
} else {
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Symbol("taoensso.encore","rate-limiter","taoensso.encore/rate-limiter",1705152470,null),new cljs.core.Keyword(null,"param","param",2013631823),new cljs.core.Symbol(null,"rate-limiter-spec","rate-limiter-spec",1678589253,null),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"map","map",-1282745308,null),"null",new cljs.core.Symbol(null,"vector","vector",-751469611,null),"null"], null), null)], null));
}
}
});
/**
 * Takes a spec of form
 *  [           [<n-max-reqs> <msecs-window>] ...] or ; Unnamed limits
 *  {<limit-id> [<n-max-reqs> <msecs-window>]}        ;   Named limits
 *   and returns stateful (fn a-rate-limiter [] [req-id] [command req-id]).
 * 
 *   Call the returned limiter fn with a request id (any Clojure value!) to
 *   enforce limits independently for each id.
 * 
 *   For example, (limiter-fn <ip-address-string>) will return:
 *  - Falsey when    allowed (all limits pass for given IP), or
 *  - Truthy when disallowed (any limits fail for given IP):
 *    [<worst-limit-id> <worst-backoff-msecs> {<limit-id> <backoff-msecs>}]
 * 
 *   Or call the returned limiter fn with an extra command argument:
 *  (limiter-fn :rl/peek  <req-id) - Check limits WITHOUT incrementing count
 *  (limiter-fn :rl/reset <req-id) - Reset all limits for given req-id
 */
taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(var_args){
var G__25518 = arguments.length;
switch (G__25518) {
case 1:
return taoensso.encore.rate_limiter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.rate_limiter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.rate_limiter.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return taoensso.encore.rate_limiter.cljs$core$IFn$_invoke$arity$2(null,spec);
}));

(taoensso.encore.rate_limiter.cljs$core$IFn$_invoke$arity$2 = (function (opts,spec){
var map__25519 = opts;
var map__25519__$1 = cljs.core.__destructure_map(map__25519);
var with_state_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25519__$1,new cljs.core.Keyword(null,"with-state?","with-state?",1044523183));
if(cljs.core.empty_QMARK_(spec)){
if(cljs.core.truth_(with_state_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.constantly(null)], null);
} else {
return cljs.core.constantly(null);
}
} else {
var spec__$1 = taoensso.encore.coerce_limit_spec(spec);
var b2__22159__auto__ = (function (){var and__5000__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"allow-basic?","allow-basic?",-810481502));
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(spec__$1),(1));
if(and__5000__auto____$1){
var s = cljs.core.val(cljs.core.first(spec__$1));
if((s.n === (1))){
return s.ms;
} else {
return null;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(b2__22159__auto__)){
var once_per_msecs = b2__22159__auto__;
if(cljs.core.truth_(with_state_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,taoensso.encore.rate_limiter_once_per(once_per_msecs)], null);
} else {
return taoensso.encore.rate_limiter_once_per(once_per_msecs);
}
} else {
var latch_ = taoensso.encore.latom(null);
var reqs_ = taoensso.encore.latom(null);
var map__25520 = opts;
var map__25520__$1 = cljs.core.__destructure_map(map__25520);
var gc_every = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25520__$1,new cljs.core.Keyword(null,"gc-every","gc-every",-1661544691),16000.0);
var gc_now_QMARK_ = taoensso.encore.gc_now_QMARK_;
var gc_rate = (function (){var gce = cljs.core.long$(gc_every);
return (1.0 / gce);
})();
var f1 = (function (rid,peek_QMARK_){
var instant = taoensso.encore.now_udt();
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.not(peek_QMARK_);
if(and__5000__auto__){
return (gc_now_QMARK_.cljs$core$IFn$_invoke$arity$1 ? gc_now_QMARK_.cljs$core$IFn$_invoke$arity$1(gc_rate) : gc_now_QMARK_.call(null, gc_rate));
} else {
return and__5000__auto__;
}
})())){
var latch_26729 = null;
if(cljs.core.compare_and_set_BANG_(latch_,null,latch_26729)){
var G__25521_26730 = (function taoensso$encore$swap_fn(reqs){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,rid__$1,entries){
var new_entries = cljs.core.reduce_kv((function (acc__$1,lid,e){
var b2__22159__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec__$1,lid);
if(cljs.core.truth_(b2__22159__auto____$1)){
var s = b2__22159__auto____$1;
if((instant >= (e.udt0 + s.ms))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,lid);
} else {
return acc__$1;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,lid);
}
}),entries,entries);
if(cljs.core.empty_QMARK_(new_entries)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,rid__$1);
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,rid__$1,new_entries);
}
}),cljs.core.transient$((function (){var or__5002__auto__ = reqs;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),reqs));
});
(reqs_.cljs$core$IFn$_invoke$arity$1 ? reqs_.cljs$core$IFn$_invoke$arity$1(G__25521_26730) : reqs_.call(null, G__25521_26730));

} else {
}
} else {
}

while(true){
var reqs = (reqs_.cljs$core$IFn$_invoke$arity$0 ? reqs_.cljs$core$IFn$_invoke$arity$0() : reqs_.call(null, ));
var entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reqs,rid);
var _QMARK_hits = (cljs.core.truth_(entries)?cljs.core.reduce_kv(((function (reqs,entries,instant,latch_,reqs_,map__25520,map__25520__$1,gc_every,gc_now_QMARK_,gc_rate,b2__22159__auto__,spec__$1,map__25519,map__25519__$1,with_state_QMARK_){
return (function (acc,lid,e){
var b2__22159__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec__$1,lid);
if(cljs.core.truth_(b2__22159__auto____$1)){
var s = b2__22159__auto____$1;
if((e.n < s.n)){
return acc;
} else {
var tdelta = ((e.udt0 + s.ms) - instant);
if((tdelta <= (0))){
return acc;
} else {
if((acc == null)){
return (new taoensso.encore.LimitHits(cljs.core.PersistentArrayMap.createAsIfByAssoc([lid,tdelta]),lid,tdelta));
} else {
if((tdelta > acc.worst_ms)){
return (new taoensso.encore.LimitHits(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc.m,lid,tdelta),lid,tdelta));
} else {
return (new taoensso.encore.LimitHits(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc.m,lid,tdelta),acc.worst_lid,acc.worst_ms));
}
}
}
}
} else {
return acc;
}
});})(reqs,entries,instant,latch_,reqs_,map__25520,map__25520__$1,gc_every,gc_now_QMARK_,gc_rate,b2__22159__auto__,spec__$1,map__25519,map__25519__$1,with_state_QMARK_))
,null,entries):null);
if(cljs.core.truth_((function (){var or__5002__auto__ = peek_QMARK_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return _QMARK_hits;
}
})())){
var b2__22159__auto____$1 = _QMARK_hits;
if(cljs.core.truth_(b2__22159__auto____$1)){
var h = b2__22159__auto____$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h.worst_lid,h.worst_ms,h.m], null);
} else {
return null;
}
} else {
var b2__22159__auto____$1 = (latch_.cljs$core$IFn$_invoke$arity$0 ? latch_.cljs$core$IFn$_invoke$arity$0() : latch_.call(null, ));
if(cljs.core.truth_(b2__22159__auto____$1)){
var l = b2__22159__auto____$1;
return null;
} else {
var new_entries = cljs.core.reduce_kv(((function (b2__22159__auto____$1,reqs,entries,_QMARK_hits,instant,latch_,reqs_,map__25520,map__25520__$1,gc_every,gc_now_QMARK_,gc_rate,b2__22159__auto__,spec__$1,map__25519,map__25519__$1,with_state_QMARK_){
return (function (acc,lid,s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,lid,(function (){var b2__22159__auto____$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entries,lid);
if(cljs.core.truth_(b2__22159__auto____$2)){
var e = b2__22159__auto____$2;
var udt0 = e.udt0;
if((instant >= (udt0 + s.ms))){
return (new taoensso.encore.LimitEntry((1),instant));
} else {
return (new taoensso.encore.LimitEntry((e.n + (1)),udt0));
}
} else {
return (new taoensso.encore.LimitEntry((1),instant));
}
})());
});})(b2__22159__auto____$1,reqs,entries,_QMARK_hits,instant,latch_,reqs_,map__25520,map__25520__$1,gc_every,gc_now_QMARK_,gc_rate,b2__22159__auto__,spec__$1,map__25519,map__25519__$1,with_state_QMARK_))
,entries,spec__$1);
if(cljs.core.compare_and_set_BANG_(reqs_,reqs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reqs,rid,new_entries))){
return null;
} else {
continue;
}
}
}
break;
}
});
var limiter_fn = (function() {
var taoensso$encore$a_rate_limiter = null;
var taoensso$encore$a_rate_limiter__0 = (function (){
return f1(null,false);
});
var taoensso$encore$a_rate_limiter__1 = (function (req_id){
return f1(req_id,false);
});
var taoensso$encore$a_rate_limiter__2 = (function (cmd,req_id){
var G__25522 = cmd;
var G__25522__$1 = (((G__25522 instanceof cljs.core.Keyword))?G__25522.fqn:null);
switch (G__25522__$1) {
case "rl/reset":
case "limiter/reset":
if(cljs.core.truth_((function (){var G__25523 = req_id;
var G__25523__$1 = (((G__25523 instanceof cljs.core.Keyword))?G__25523.fqn:null);
switch (G__25523__$1) {
case "rl/all":
case "limiter/all":
return true;

break;
default:
return false;

}
})())){
cljs.core.reset_BANG_(reqs_,null);
} else {
var G__25524_26752 = (function (p1__25516_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__25516_SHARP_,req_id);
});
(reqs_.cljs$core$IFn$_invoke$arity$1 ? reqs_.cljs$core$IFn$_invoke$arity$1(G__25524_26752) : reqs_.call(null, G__25524_26752));
}

return null;

break;
case "rl/peek":
case "limiter/peek":
return f1(req_id,true);

break;
default:
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(cmd,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Symbol("taoensso.encore","rate-limiter","taoensso.encore/rate-limiter",1705152470,null),new cljs.core.Keyword(null,"param","param",2013631823),new cljs.core.Symbol(null,"rate-limiter-command","rate-limiter-command",1767414198,null),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rl","reset","rl/reset",-800926172),null,new cljs.core.Keyword("rl","peek","rl/peek",-291391771),null], null), null),new cljs.core.Keyword(null,"req-id","req-id",-471642231),req_id], null));

}
});
taoensso$encore$a_rate_limiter = function(cmd,req_id){
switch(arguments.length){
case 0:
return taoensso$encore$a_rate_limiter__0.call(this);
case 1:
return taoensso$encore$a_rate_limiter__1.call(this,cmd);
case 2:
return taoensso$encore$a_rate_limiter__2.call(this,cmd,req_id);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$a_rate_limiter.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$a_rate_limiter__0;
taoensso$encore$a_rate_limiter.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$a_rate_limiter__1;
taoensso$encore$a_rate_limiter.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$a_rate_limiter__2;
return taoensso$encore$a_rate_limiter;
})()
;
if(cljs.core.truth_(with_state_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reqs_,limiter_fn], null);
} else {
return limiter_fn;
}
}
}
}));

(taoensso.encore.rate_limiter.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.Counter = (function (c){
this.c = c;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(taoensso.encore.Counter.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.c;
}));

(taoensso.encore.Counter.prototype.call = (function (unused__10318__auto__){
var self__ = this;
var self__ = this;
var G__25526 = (arguments.length - (1));
switch (G__25526) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(taoensso.encore.Counter.prototype.apply = (function (self__,args25525){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args25525)));
}));

(taoensso.encore.Counter.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
var o = self__.c;
(self__.c = (self__.c + (1)));

return o;
}));

(taoensso.encore.Counter.prototype.cljs$core$IFn$_invoke$arity$1 = (function (add){
var self__ = this;
var _ = this;
var o = self__.c;
(self__.c = (self__.c + add));

return o;
}));

(taoensso.encore.Counter.prototype.cljs$core$IFn$_invoke$arity$2 = (function (action,n){
var self__ = this;
var _ = this;
var G__25527 = action;
var G__25527__$1 = (((G__25527 instanceof cljs.core.Keyword))?G__25527.fqn:null);
switch (G__25527__$1) {
case "add":
(self__.c = (self__.c + n));

return null;

break;
case "set":
(self__.c = n);

return null;

break;
case "set=":
case "set-get":
(self__.c = n);

return n;

break;
case "=set":
case "get-set":
var o = self__.c;
(self__.c = n);

return o;

break;
case "=+":
case "get-add":
var o = self__.c;
(self__.c = (self__.c + n));

return o;

break;
case "+=":
case "add-get":
(self__.c = (self__.c + n));

return self__.c;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25527__$1)].join('')));

}
}));

(taoensso.encore.Counter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(taoensso.encore.Counter.cljs$lang$type = true);

(taoensso.encore.Counter.cljs$lang$ctorStr = "taoensso.encore/Counter");

(taoensso.encore.Counter.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.encore/Counter");
}));

/**
 * Positional factory function for taoensso.encore/Counter.
 */
taoensso.encore.__GT_Counter = (function taoensso$encore$__GT_Counter(c){
return (new taoensso.encore.Counter(c));
});

/**
 * Returns a fast atomic `Counter` with `init` initial integer value with:
 *  - @counter           => Return current val
 *  - (counter)          => Add 1 and return old val
 *  - (counter n)        => Add n and return old val
 *  - (counter action n) => Experimental, action ∈
 *      {:add :set :set-get :get-set :get-add :add-get}.
 */
taoensso.encore.counter = (function taoensso$encore$counter(var_args){
var G__25529 = arguments.length;
switch (G__25529) {
case 0:
return taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.counter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.encore.counter.cljs$core$IFn$_invoke$arity$1((0));
}));

(taoensso.encore.counter.cljs$core$IFn$_invoke$arity$1 = (function (init){
return (new taoensso.encore.Counter(cljs.core.long$(init)));
}));

(taoensso.encore.counter.cljs$lang$maxFixedArity = 1);

taoensso.encore.rc_deref = (function taoensso$encore$rc_deref(msecs,ts_,n_skip_,gc_fn){
var t1 = taoensso.encore.now_udt();
var n_skip0 = (n_skip_.cljs$core$IFn$_invoke$arity$0 ? n_skip_.cljs$core$IFn$_invoke$arity$0() : n_skip_.call(null, ));
var ts = (ts_.cljs$core$IFn$_invoke$arity$0 ? ts_.cljs$core$IFn$_invoke$arity$0() : ts_.call(null, ));
var n_total = cljs.core.count(ts);
var n_window = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (n,t0){
if(((t1 - t0) <= msecs)){
return (n + (1));
} else {
return n;
}
}),(0),(taoensso.encore.core_subvec.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.core_subvec.cljs$core$IFn$_invoke$arity$2(ts,n_skip0) : taoensso.encore.core_subvec.call(null, ts,n_skip0)));
var n_skip1 = (n_total - n_window);
if((n_skip0 < n_skip1)){
if(cljs.core.compare_and_set_BANG_(n_skip_,n_skip0,n_skip1)){
if((n_skip1 > (10000))){
(gc_fn.cljs$core$IFn$_invoke$arity$1 ? gc_fn.cljs$core$IFn$_invoke$arity$1(n_skip1) : gc_fn.call(null, n_skip1));
} else {
}
} else {
}
} else {
}

return n_window;
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.RollingCounter = (function (msecs,ts_,n_skip_){
this.msecs = msecs;
this.ts_ = ts_;
this.n_skip_ = n_skip_;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(taoensso.encore.RollingCounter.prototype.call = (function (unused__10318__auto__){
var self__ = this;
var self__ = this;
var G__25535 = (arguments.length - (1));
switch (G__25535) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(taoensso.encore.RollingCounter.prototype.apply = (function (self__,args25534){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args25534)));
}));

(taoensso.encore.RollingCounter.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
var t1_26779 = taoensso.encore.now_udt();
var G__25536_26780 = (function (p1__25532_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__25532_SHARP_,t1_26779);
});
(self__.ts_.cljs$core$IFn$_invoke$arity$1 ? self__.ts_.cljs$core$IFn$_invoke$arity$1(G__25536_26780) : self__.ts_.call(null, G__25536_26780));

return this$;
}));

(taoensso.encore.RollingCounter.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.encore.rc_deref(self__.msecs,self__.ts_,self__.n_skip_,(function taoensso$encore$gc(n_skip1){
var G__25537_26785 = (function (p1__25533_SHARP_){
return (taoensso.encore.core_subvec.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.core_subvec.cljs$core$IFn$_invoke$arity$2(p1__25533_SHARP_,n_skip1) : taoensso.encore.core_subvec.call(null, p1__25533_SHARP_,n_skip1));
});
(self__.ts_.cljs$core$IFn$_invoke$arity$1 ? self__.ts_.cljs$core$IFn$_invoke$arity$1(G__25537_26785) : self__.ts_.call(null, G__25537_26785));

return cljs.core.reset_BANG_(self__.n_skip_,(0));
}));
}));

(taoensso.encore.RollingCounter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"msecs","msecs",-942455216,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),new cljs.core.Symbol(null,"ts_","ts_",775102722,null),new cljs.core.Symbol(null,"n-skip_","n-skip_",-1562682054,null)], null);
}));

(taoensso.encore.RollingCounter.cljs$lang$type = true);

(taoensso.encore.RollingCounter.cljs$lang$ctorStr = "taoensso.encore/RollingCounter");

(taoensso.encore.RollingCounter.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.encore/RollingCounter");
}));

/**
 * Positional factory function for taoensso.encore/RollingCounter.
 */
taoensso.encore.__GT_RollingCounter = (function taoensso$encore$__GT_RollingCounter(msecs,ts_,n_skip_){
return (new taoensso.encore.RollingCounter(msecs,ts_,n_skip_));
});

/**
 * Experimental, subject to change without notice.
 *   Returns a RollingCounter that you can:
 *  - Invoke to increment count in last `msecs` window and return RollingCounter.
 *  - Deref  to return    count in last `msecs` window.
 */
taoensso.encore.rolling_counter = (function taoensso$encore$rolling_counter(msecs){
return (new taoensso.encore.RollingCounter(cljs.core.long$((function (){var e = (function (){try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_(msecs))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e25538){if((e25538 instanceof Error)){
var e = e25538;
return e;
} else {
throw e25538;

}
}})();
if((e == null)){
return msecs;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),4294,11,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/encore/3.133.0/encore-3.133.0.jar!/taoensso/encore.cljc",new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null),new cljs.core.Symbol("taoensso.encore","pos-int?","taoensso.encore/pos-int?",186070635,null),new cljs.core.Symbol(null,"msecs","msecs",-942455216,null),msecs,e,null);
}
})()),taoensso.encore.latom(cljs.core.PersistentVector.EMPTY),taoensso.encore.latom((0))));
});
/**
 * Returns a stateful fn of 2 arities:
 *  [ ] => Returns current sub/vector in O(1).
 *  [x] => Adds `x` to right of sub/vector, maintaining length <= `nmax`.
 *         Returns current sub/vector.
 * 
 *   Useful for maintaining limited-length histories, etc.
 *   See also `rolling-list` (Clj only).
 */
taoensso.encore.rolling_vector = (function taoensso$encore$rolling_vector(var_args){
var G__25540 = arguments.length;
switch (G__25540) {
case 1:
return taoensso.encore.rolling_vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.rolling_vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.rolling_vector.cljs$core$IFn$_invoke$arity$1 = (function (nmax){
return taoensso.encore.rolling_vector.cljs$core$IFn$_invoke$arity$2(nmax,null);
}));

(taoensso.encore.rolling_vector.cljs$core$IFn$_invoke$arity$2 = (function (nmax,p__25541){
var map__25542 = p__25541;
var map__25542__$1 = cljs.core.__destructure_map(map__25542);
var gc_every = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25542__$1,new cljs.core.Keyword(null,"gc-every","gc-every",-1661544691),16000.0);
var init_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25542__$1,new cljs.core.Keyword(null,"init-val","init-val",-70272968));
var nmax__$1 = cljs.core.long$(nmax);
var acc_ = taoensso.encore.latom(cljs.core.vec(init_val));
var gc_every__$1 = (cljs.core.truth_(gc_every)?cljs.core.long$(gc_every):null);
var ticker = (cljs.core.truth_(gc_every__$1)?taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0():null);
var latch_ = (cljs.core.truth_(gc_every__$1)?taoensso.encore.latom(null):null);
return (function() {
var taoensso$encore$rolling_vec_fn = null;
var taoensso$encore$rolling_vec_fn__0 = (function (){
return (acc_.cljs$core$IFn$_invoke$arity$0 ? acc_.cljs$core$IFn$_invoke$arity$0() : acc_.call(null, ));
});
var taoensso$encore$rolling_vec_fn__1 = (function (x){
if(cljs.core.truth_(gc_every__$1)){
var tick_26799 = (ticker.cljs$core$IFn$_invoke$arity$0 ? ticker.cljs$core$IFn$_invoke$arity$0() : ticker.call(null, ));
var b2__22159__auto___26800 = (cljs.core.rem(tick_26799,gc_every__$1) === (0));
if(b2__22159__auto___26800){
var gc_now_QMARK__26801 = b2__22159__auto___26800;
var G__25543_26802 = (function taoensso$encore$rolling_vec_fn_$_swap_fn(sv){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,sv);
});
(acc_.cljs$core$IFn$_invoke$arity$1 ? acc_.cljs$core$IFn$_invoke$arity$1(G__25543_26802) : acc_.call(null, G__25543_26802));
} else {
}
} else {
}

var G__25544 = (function taoensso$encore$rolling_vec_fn_$_swap_fn(acc){
var new$ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x);
if((cljs.core.count(new$) > nmax__$1)){
return (taoensso.encore.core_subvec.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.core_subvec.cljs$core$IFn$_invoke$arity$2(new$,(1)) : taoensso.encore.core_subvec.call(null, new$,(1)));
} else {
return new$;
}
});
return (acc_.cljs$core$IFn$_invoke$arity$1 ? acc_.cljs$core$IFn$_invoke$arity$1(G__25544) : acc_.call(null, G__25544));
});
taoensso$encore$rolling_vec_fn = function(x){
switch(arguments.length){
case 0:
return taoensso$encore$rolling_vec_fn__0.call(this);
case 1:
return taoensso$encore$rolling_vec_fn__1.call(this,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$rolling_vec_fn.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$rolling_vec_fn__0;
taoensso$encore$rolling_vec_fn.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$rolling_vec_fn__1;
return taoensso$encore$rolling_vec_fn;
})()
}));

(taoensso.encore.rolling_vector.cljs$lang$maxFixedArity = 2);

/**
 * Example UTF-8 string for tests, etc.
 */
taoensso.encore.a_utf8_str = "Hi \u0CAC\u0CBE \u0C87\u0CB2\u0CCD\u0CB2\u0CBF \u0CB8\u0C82\u0CAD\u0CB5\u0CBF\u0CB8 10";
taoensso.encore.str_builder_QMARK_ = (function taoensso$encore$str_builder_QMARK_(x){
return (x instanceof goog.string.StringBuffer);
});
/**
 * Returns a new stateful string builder:
 *  - `java.lang.StringBuilder`  for Clj
 *  - `goog.string.StringBuffer` for Cljs
 * 
 *   See also `sb-append`.
 */
taoensso.encore.str_builder = (function taoensso$encore$str_builder(var_args){
var G__25546 = arguments.length;
switch (G__25546) {
case 0:
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new goog.string.StringBuffer());
}));

(taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1 = (function (init){
if((init instanceof goog.string.StringBuffer)){
return init;
} else {
return (new goog.string.StringBuffer(cljs.core.str.cljs$core$IFn$_invoke$arity$1(init)));
}
}));

(taoensso.encore.str_builder.cljs$lang$maxFixedArity = 1);

/**
 * Returns given string builder's current length (character count).
 */
taoensso.encore.sb_length = (function taoensso$encore$sb_length(sb){
return sb.getLength();
});
/**
 * Appends given string/s to given string builder. See also `str-builder.`
 */
taoensso.encore.sb_append = (function taoensso$encore$sb_append(var_args){
var G__25551 = arguments.length;
switch (G__25551) {
case 2:
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___26809 = arguments.length;
var i__5727__auto___26810 = (0);
while(true){
if((i__5727__auto___26810 < len__5726__auto___26809)){
args_arr__5751__auto__.push((arguments[i__5727__auto___26810]));

var G__26811 = (i__5727__auto___26810 + (1));
i__5727__auto___26810 = G__26811;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2 = (function (str_builder,x){
if((x == null)){
return str_builder;
} else {
return str_builder.append(x.toString());
}
}));

(taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic = (function (str_builder,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$);
}),taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(str_builder,x),more);
}));

/** @this {Function} */
(taoensso.encore.sb_append.cljs$lang$applyTo = (function (seq25548){
var G__25549 = cljs.core.first(seq25548);
var seq25548__$1 = cljs.core.next(seq25548);
var G__25550 = cljs.core.first(seq25548__$1);
var seq25548__$2 = cljs.core.next(seq25548__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25549,G__25550,seq25548__$2);
}));

(taoensso.encore.sb_append.cljs$lang$maxFixedArity = (2));

/**
 * Private, don't use.
 *   Returns a stateful string-building (fn [x & more]) that:
 *  - Appends non-nil xs to a string builder, starting with a separator IFF
 *    string building has started and at least one x is non-nil.
 *  - Returns the underlying string builder.
 */
taoensso.encore.sb_appender = (function taoensso$encore$sb_appender(var_args){
var G__25553 = arguments.length;
switch (G__25553) {
case 0:
return taoensso.encore.sb_appender.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.sb_appender.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.sb_appender.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.sb_appender.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.encore.sb_appender.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0()," ");
}));

(taoensso.encore.sb_appender.cljs$core$IFn$_invoke$arity$1 = (function (separator){
return taoensso.encore.sb_appender.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),separator);
}));

(taoensso.encore.sb_appender.cljs$core$IFn$_invoke$arity$2 = (function (sb,separator){
var sep_BANG_ = (function (){var sep = cljs.core.str.cljs$core$IFn$_invoke$arity$1(separator);
var started_QMARK__ = cljs.core.volatile_BANG_(false);
return (function (){
if(cljs.core.truth_(cljs.core.deref(started_QMARK__))){
sb.append(sep);

return true;
} else {
cljs.core.vreset_BANG_(started_QMARK__,true);

return false;
}
});
})();
return (function() {
var taoensso$encore$a_sb_appender = null;
var taoensso$encore$a_sb_appender__0 = (function (){
return sb;
});
var taoensso$encore$a_sb_appender__1 = (function (x){
if((x == null)){
return sb;
} else {
sep_BANG_();

return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,x);
}
});
var taoensso$encore$a_sb_appender__2 = (function() { 
var G__26825__delegate = function (x,more){
if(cljs.core.truth_((function (){var and__5000__auto__ = (x == null);
if(and__5000__auto__){
return taoensso.encore.revery_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,more);
} else {
return and__5000__auto__;
}
})())){
return null;
} else {
sep_BANG_();

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$);
}),taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,x),more);
}
};
var G__26825 = function (x,var_args){
var more = null;
if (arguments.length > 1) {
var G__26827__i = 0, G__26827__a = new Array(arguments.length -  1);
while (G__26827__i < G__26827__a.length) {G__26827__a[G__26827__i] = arguments[G__26827__i + 1]; ++G__26827__i;}
  more = new cljs.core.IndexedSeq(G__26827__a,0,null);
} 
return G__26825__delegate.call(this,x,more);};
G__26825.cljs$lang$maxFixedArity = 1;
G__26825.cljs$lang$applyTo = (function (arglist__26828){
var x = cljs.core.first(arglist__26828);
var more = cljs.core.rest(arglist__26828);
return G__26825__delegate(x,more);
});
G__26825.cljs$core$IFn$_invoke$arity$variadic = G__26825__delegate;
return G__26825;
})()
;
taoensso$encore$a_sb_appender = function(x,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return taoensso$encore$a_sb_appender__0.call(this);
case 1:
return taoensso$encore$a_sb_appender__1.call(this,x);
default:
var G__26829 = null;
if (arguments.length > 1) {
var G__26830__i = 0, G__26830__a = new Array(arguments.length -  1);
while (G__26830__i < G__26830__a.length) {G__26830__a[G__26830__i] = arguments[G__26830__i + 1]; ++G__26830__i;}
G__26829 = new cljs.core.IndexedSeq(G__26830__a,0,null);
}
return taoensso$encore$a_sb_appender__2.cljs$core$IFn$_invoke$arity$variadic(x, G__26829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$a_sb_appender.cljs$lang$maxFixedArity = 1;
taoensso$encore$a_sb_appender.cljs$lang$applyTo = taoensso$encore$a_sb_appender__2.cljs$lang$applyTo;
taoensso$encore$a_sb_appender.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$a_sb_appender__0;
taoensso$encore$a_sb_appender.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$a_sb_appender__1;
taoensso$encore$a_sb_appender.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$a_sb_appender__2.cljs$core$IFn$_invoke$arity$variadic;
return taoensso$encore$a_sb_appender;
})()
}));

(taoensso.encore.sb_appender.cljs$lang$maxFixedArity = 2);

/**
 * String builder reducing fn.
 */
taoensso.encore.str_rf = (function taoensso$encore$str_rf(var_args){
var G__25555 = arguments.length;
switch (G__25555) {
case 0:
return taoensso.encore.str_rf.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.str_rf.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.str_rf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.str_rf.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();
}));

(taoensso.encore.str_rf.cljs$core$IFn$_invoke$arity$1 = (function (acc){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc);
}));

(taoensso.encore.str_rf.cljs$core$IFn$_invoke$arity$2 = (function (acc,in$){
if((in$ == null)){
return acc;
} else {
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1(acc).append(in$.toString());
}
}));

(taoensso.encore.str_rf.cljs$lang$maxFixedArity = 2);

/**
 * Like `str-rf` but presumes string builder init value.
 */
taoensso.encore.sb_rf = (function taoensso$encore$sb_rf(var_args){
var G__25557 = arguments.length;
switch (G__25557) {
case 0:
return taoensso.encore.sb_rf.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.sb_rf.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.sb_rf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.sb_rf.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();
}));

(taoensso.encore.sb_rf.cljs$core$IFn$_invoke$arity$1 = (function (sb){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
}));

(taoensso.encore.sb_rf.cljs$core$IFn$_invoke$arity$2 = (function (sb,in$){
if((in$ == null)){
return sb;
} else {
return sb.append(in$.toString());
}
}));

(taoensso.encore.sb_rf.cljs$lang$maxFixedArity = 2);

/**
 * Faster generalization of `clojure.string/join` with transducer support.
 */
taoensso.encore.str_join = (function taoensso$encore$str_join(var_args){
var G__25559 = arguments.length;
switch (G__25559) {
case 1:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(null,null,xs);
}));

(taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2 = (function (separator,xs){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(separator,null,xs);
}));

(taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3 = (function (separator,xform,xs){
if(cljs.core.truth_((function (){var and__5000__auto__ = separator;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(separator,"");
} else {
return and__5000__auto__;
}
})())){
var separator__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(separator);
if(cljs.core.truth_(xform)){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,cljs.core.interpose.cljs$core$IFn$_invoke$arity$1(separator__$1)),taoensso.encore.sb_rf,taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),xs);
} else {
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.interpose.cljs$core$IFn$_invoke$arity$1(separator__$1),taoensso.encore.sb_rf,taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),xs);
}
} else {
if(cljs.core.truth_(xform)){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,taoensso.encore.sb_rf,taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),xs);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.sb_rf,taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),xs));
}
}
}));

(taoensso.encore.str_join.cljs$lang$maxFixedArity = 3);

taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
/**
 * Returns (first/last) ?index of substring if it exists within given string.
 */
taoensso.encore.str__QMARK_index = (function taoensso$encore$str__QMARK_index(var_args){
var G__25561 = arguments.length;
switch (G__25561) {
case 2:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2 = (function (s,substr){
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4(s,substr,(0),false);
}));

(taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3 = (function (s,substr,start_idx){
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4(s,substr,start_idx,false);
}));

(taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4 = (function (s,substr,start_idx,last_QMARK_){
var result = (cljs.core.truth_(last_QMARK_)?s.lastIndexOf(substr,start_idx):s.indexOf(substr,start_idx));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(result,(-1))){
return result;
} else {
return null;
}
}));

(taoensso.encore.str__QMARK_index.cljs$lang$maxFixedArity = 4);

/**
 * Returns true iff given strings are equal, ignoring case.
 */
taoensso.encore.case_insensitive_str_EQ_ = (function taoensso$encore$case_insensitive_str_EQ_(s1,s2){
var or__5002__auto__ = (s1 === s2);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var l1 = s1.length;
var l2 = s2.length;
var and__5000__auto__ = (l1 === l2);
if(and__5000__auto__){
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$4((function (acc,idx){
var c1 = s1.charAt(idx).toLowerCase();
var c2 = s2.charAt(idx).toLowerCase();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c1,c2)){
return true;
} else {
return cljs.core.reduced(false);
}
}),true,(0),l1);
} else {
return and__5000__auto__;
}
}
});
/**
 * Like `str/replace` but provides consistent Clj/s behaviour.
 * 
 *   Workaround for <http://dev.clojure.org/jira/browse/CLJS-794>,
 *               <http://dev.clojure.org/jira/browse/CLJS-911>.
 * 
 *   Note that ClojureScript 1.7.145 introduced a partial fix for CLJS-911.
 *   A full fix could unfortunately not be introduced w/o breaking compatibility
 *   with the previously incorrect behaviour. CLJS-794 also remains unresolved.
 */
taoensso.encore.str_replace = (function taoensso$encore$str_replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
var flags = ["g",(cljs.core.truth_(match.ignoreCase)?"i":null),(cljs.core.truth_(match.multiline)?"m":null)].join('');
var replacement__$1 = ((typeof replacement === 'string')?replacement:(function() { 
var G__26849__delegate = function (args){
var G__25562 = cljs.core.vec(args);
return (replacement.cljs$core$IFn$_invoke$arity$1 ? replacement.cljs$core$IFn$_invoke$arity$1(G__25562) : replacement.call(null, G__25562));
};
var G__26849 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26851__i = 0, G__26851__a = new Array(arguments.length -  0);
while (G__26851__i < G__26851__a.length) {G__26851__a[G__26851__i] = arguments[G__26851__i + 0]; ++G__26851__i;}
  args = new cljs.core.IndexedSeq(G__26851__a,0,null);
} 
return G__26849__delegate.call(this,args);};
G__26849.cljs$lang$maxFixedArity = 0;
G__26849.cljs$lang$applyTo = (function (arglist__26852){
var args = cljs.core.seq(arglist__26852);
return G__26849__delegate(args);
});
G__26849.cljs$core$IFn$_invoke$arity$variadic = G__26849__delegate;
return G__26849;
})()
);
return s.replace((new RegExp(match.source,flags)),replacement__$1);
} else {
throw ["Invalid match arg: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join('');
}
}
});
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if((x == null)){
return "nil";
} else {
return x;
}
});

taoensso.encore.format_STAR_ = (function taoensso$encore$format_STAR_(var_args){
var G__25564 = arguments.length;
switch (G__25564) {
case 2:
return taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (fmt,args){
return taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$3(taoensso.encore.nil__GT_str,fmt,args);
}));

(taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (xform,fmt,args){
if((fmt == null)){
return "";
} else {
var args__$1 = (cljs.core.truth_(xform)?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(xform,args):args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args__$1);
}
}));

(taoensso.encore.format_STAR_.cljs$lang$maxFixedArity = 3);


/**
 * Like `core/format` but:
 *    * Returns "" when fmt is nil rather than throwing an NPE.
 *    * Formats nil as "nil" rather than "null".
 *    * Provides ClojureScript support via goog.string.format (this has fewer
 *      formatting options than Clojure's `format`!).
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26858 = arguments.length;
var i__5727__auto___26859 = (0);
while(true){
if((i__5727__auto___26859 < len__5726__auto___26858)){
args__5732__auto__.push((arguments[i__5727__auto___26859]));

var G__26860 = (i__5727__auto___26859 + (1));
i__5727__auto___26859 = G__26860;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$2(fmt,args);
}));

(taoensso.encore.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.format.cljs$lang$applyTo = (function (seq25565){
var G__25566 = cljs.core.first(seq25565);
var seq25565__$1 = cljs.core.next(seq25565);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25566,seq25565__$1);
}));

/**
 * Like `string/join` but skips nils and duplicate separators.
 */
taoensso.encore.str_join_once = (function taoensso$encore$str_join_once(separator,coll){
var sep = separator;
if(clojure.string.blank_QMARK_(sep)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.str_rf,"",coll));
} else {
var acc_ends_with_sep_QMARK__ = cljs.core.volatile_BANG_(false);
var acc_empty_QMARK__ = cljs.core.volatile_BANG_(true);
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
var in$__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$);
var in_empty_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in$__$1,"");
var in_starts_with_sep_QMARK_ = taoensso.encore.str_starts_with_QMARK_(in$__$1,sep);
var in_ends_with_sep_QMARK_ = taoensso.encore.str_ends_with_QMARK_(in$__$1,sep);
var acc_ends_with_sep_QMARK_ = cljs.core.deref(acc_ends_with_sep_QMARK__);
var acc_empty_QMARK_ = cljs.core.deref(acc_empty_QMARK__);
cljs.core.vreset_BANG_(acc_ends_with_sep_QMARK__,in_ends_with_sep_QMARK_);

if(cljs.core.truth_(acc_empty_QMARK_)){
cljs.core.vreset_BANG_(acc_empty_QMARK__,in_empty_QMARK_);
} else {
}

if(cljs.core.truth_(acc_ends_with_sep_QMARK_)){
if(cljs.core.truth_(in_starts_with_sep_QMARK_)){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1.substring((1)));
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
}
} else {
if(cljs.core.truth_(in_starts_with_sep_QMARK_)){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = acc_empty_QMARK_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return in_empty_QMARK_;
}
})())){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
} else {
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,sep);

return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
}
}
}
}),taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),coll));
}
});
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26866 = arguments.length;
var i__5727__auto___26867 = (0);
while(true){
if((i__5727__auto___26867 < len__5726__auto___26866)){
args__5732__auto__.push((arguments[i__5727__auto___26867]));

var G__26868 = (i__5727__auto___26867 + (1));
i__5727__auto___26867 = G__26868;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return taoensso.encore.str_join_once("/",parts);
}));

(taoensso.encore.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.path.cljs$lang$applyTo = (function (seq25567){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25567));
}));

/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space.
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(clojure.string.blank_QMARK_(s)){
return (0);
} else {
return cljs.core.count(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\s+/));
}
});
/**
 * For Clj: returns a random `java.util.UUID`.
 *   For Cljs: returns a random UUID string.
 * 
 *   Uses strong randomness when possible.
 *   See also `uuid-str`, `nanoid`, `rand-id-fn`.
 */
taoensso.encore.uuid = (function taoensso$encore$uuid(){
var b2__22159__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(taoensso.encore.js__QMARK_crypto,"randomUUID");
if(cljs.core.truth_(b2__22159__auto__)){
var f = b2__22159__auto__;
return f.call(taoensso.encore.js__QMARK_crypto);
} else {
var quad_hex = (function (){
var unpadded_hex = cljs.core.rand_int((65536)).toString((16));
var G__25568 = ((unpadded_hex).length);
switch (G__25568) {
case (1):
return ["000",unpadded_hex].join('');

break;
case (2):
return ["00",unpadded_hex].join('');

break;
case (3):
return ["0",unpadded_hex].join('');

break;
default:
return unpadded_hex;

}
});
var ver_trip_hex = ((16384) | ((4095) & cljs.core.rand_int((65536)))).toString((16));
var res_trip_hex = ((32768) | ((16383) & cljs.core.rand_int((65536)))).toString((16));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(quad_hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(quad_hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(quad_hex()),"-",ver_trip_hex,"-",res_trip_hex,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(quad_hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(quad_hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(quad_hex())].join('');
}
});
/**
 * Returns a random UUID string of given length (max 36).
 *   Uses strong randomness when possible. See also `uuid`, `nanoid`, `rand-id-fn`.
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var G__25570 = arguments.length;
switch (G__25570) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_len){
var or__5002__auto__ = taoensso.encore.substr(taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"by-len","by-len",587837753),(0),max_len);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
}));

(taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.encore.uuid();
}));

(taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1);

/**
 * Simple Hiccup-like string templating to complement Tempura.
 */
taoensso.encore.into_str = (function taoensso$encore$into_str(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26884 = arguments.length;
var i__5727__auto___26885 = (0);
while(true){
if((i__5727__auto___26885 < len__5726__auto___26884)){
args__5732__auto__.push((arguments[i__5727__auto___26885]));

var G__26886 = (i__5727__auto___26885 + (1));
i__5727__auto___26885 = G__26886;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function taoensso$encore$rf(acc,in$){
if(cljs.core.sequential_QMARK_(in$)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso$encore$rf,acc,in$);
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$));
}
}),taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),xs));
}));

(taoensso.encore.into_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.into_str.cljs$lang$applyTo = (function (seq25571){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25571));
}));

/**
 * Constant-time string equality checker.
 *   Useful to prevent timing attacks, etc.
 */
taoensso.encore.const_str_EQ_ = (function taoensso$encore$const_str_EQ_(s1,s2){
if(cljs.core.truth_((function (){var and__5000__auto__ = s1;
if(cljs.core.truth_(and__5000__auto__)){
return s2;
} else {
return and__5000__auto__;
}
})())){
var vx = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0","1"], null);
var v1 = cljs.core.vec(s1);
var v2 = cljs.core.vec(s2);
var n1 = cljs.core.count(v1);
var n2 = cljs.core.count(v2);
var nmax = (function (){var x__5087__auto__ = n1;
var y__5088__auto__ = n2;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var nmin = (function (){var x__5090__auto__ = n1;
var y__5091__auto__ = n2;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3((function (acc,idx){
if((idx >= nmin)){
var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(vx,(0)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vx,(1)));
if(and__5000__auto__){
return acc;
} else {
return and__5000__auto__;
}
} else {
var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(v1,idx),cljs.core.get.cljs$core$IFn$_invoke$arity$2(v2,idx));
if(and__5000__auto__){
return acc;
} else {
return and__5000__auto__;
}
}
}),true,nmax);
} else {
return null;
}
});
/**
 * Give any nameable type (string, keyword, symbol), returns the same
 *   type with at most `n-full` (default 1) unabbreviated namespace parts.
 * 
 *   Example:
 *  (abbreviate-ns 0  :foo.bar/baz)   => :f.b/baz
 *  (abbreviate-ns 1  'foo.bar/baz)   => 'f.bar/baz
 *  (abbreviate-ns 2 "foo.bar/baz") => "foo.bar/baz"
 */
taoensso.encore.abbreviate_ns = (function taoensso$encore$abbreviate_ns(var_args){
var G__25573 = arguments.length;
switch (G__25573) {
case 1:
return taoensso.encore.abbreviate_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.abbreviate_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.abbreviate_ns.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.abbreviate_ns.cljs$core$IFn$_invoke$arity$2((1),x);
}));

(taoensso.encore.abbreviate_ns.cljs$core$IFn$_invoke$arity$2 = (function (n_full,x){
var n_full__$1 = cljs.core.long$((function (){var e = (function (){try{if(cljs.core.truth_(taoensso.encore.nat_int_QMARK_(n_full))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e25577){if((e25577 instanceof Error)){
var e = e25577;
return e;
} else {
throw e25577;

}
}})();
if((e == null)){
return n_full;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),4811,23,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/encore/3.133.0/encore-3.133.0.jar!/taoensso/encore.cljc",new cljs.core.Symbol(null,"nat-int?","nat-int?",-1879663400,null),new cljs.core.Symbol("taoensso.encore","nat-int?","taoensso.encore/nat-int?",2095181418,null),new cljs.core.Symbol(null,"n-full","n-full",797009712,null),n_full,e,null);
}
})());
var vec__25574 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as_qname(x),/\//);
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25574,(0),null);
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25574,(1),null);
if(cljs.core.truth_(p2)){
var name_part = p2;
var ns_parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1,/\./);
var n_to_abbr = (cljs.core.count(ns_parts) - n_full__$1);
var sb = taoensso.encore.reduce_indexed((function (sb,idx,in$){
if((idx === (0))){
} else {
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,".");
}

if((idx < n_to_abbr)){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,in$.substring((0),(1)));
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,in$);
}
}),taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),ns_parts);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"/");

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,name_part);

var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
if((x instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s);
} else {
if((x instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(s);
} else {
return s;
}
}
} else {
return x;
}
}));

(taoensso.encore.abbreviate_ns.cljs$lang$maxFixedArity = 2);

/**
 * Single system newline
 */
taoensso.encore.newline = "\n";
/**
 * Double system newline
 */
taoensso.encore.newlines = ["\n","\n"].join('');
/**
 * Private, don't use.
 */
taoensso.encore.x__GT_str = (function taoensso$encore$x__GT_str(allow_readably_QMARK_,allow_dup_QMARK_,add_newline_QMARK_,x){
if(cljs.core.truth_(allow_readably_QMARK_)){
if(cljs.core.truth_(add_newline_QMARK_)){
return cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
}
} else {
if(cljs.core.truth_(add_newline_QMARK_)){
return cljs.core.println_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
return cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
}
}
});
/**
 * Private, don't use.
 */
taoensso.encore.xs__GT_str = (function taoensso$encore$xs__GT_str(allow_readably_QMARK_,allow_dup_QMARK_,add_newline_QMARK_,xs){
if(cljs.core.truth_(allow_readably_QMARK_)){
if(cljs.core.truth_(add_newline_QMARK_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,xs);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,xs);
}
} else {
if(cljs.core.truth_(add_newline_QMARK_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println_str,xs);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,xs);
}
}
});
/**
 * Identical to `core/pr`.
 */
taoensso.encore.pr = cljs.core.pr;

/**
 * Identical to `core/prn`.
 */
taoensso.encore.prn = cljs.core.prn;

/**
 * Identical to `core/print`.
 */
taoensso.encore.print = cljs.core.print;

/**
 * Identical to `core/println`.
 */
taoensso.encore.println = cljs.core.println;
/**
 * Prints given arg to an edn string readable with `read-edn`.
 */
taoensso.encore.pr_edn = (function taoensso$encore$pr_edn(x){
if(cljs.core.truth_((function (){var and__5000__auto__ = (cljs.core._STAR_print_level_STAR_ == null);
if(and__5000__auto__){
var and__5000__auto____$1 = (cljs.core._STAR_print_length_STAR_ == null);
if(and__5000__auto____$1){
return cljs.core._STAR_print_readably_STAR_;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
return taoensso.encore.x__GT_str(true,false,false,x);
} else {
var _STAR_print_level_STAR__orig_val__25578 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR__orig_val__25579 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_readably_STAR__orig_val__25580 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_level_STAR__temp_val__25581 = null;
var _STAR_print_length_STAR__temp_val__25582 = null;
var _STAR_print_readably_STAR__temp_val__25583 = true;
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__25581);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__25582);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__25583);

try{return taoensso.encore.x__GT_str(true,false,false,x);
}finally {(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__25580);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__25579);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__25578);
}}
});
/**
 * Private, don't use.
 */
taoensso.encore.pr_edn_STAR_ = (function taoensso$encore$pr_edn_STAR_(x){
return taoensso.encore.x__GT_str(true,false,false,x);
});
/**
 * Reads given edn string to return a Clj/s value.
 */
taoensso.encore.read_edn = (function taoensso$encore$read_edn(var_args){
var G__25585 = arguments.length;
switch (G__25585) {
case 1:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2(null,s);
}));

(taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if((((s == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,"")))){
return null;
} else {
if(typeof s === 'string'){
var readers = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var readers__$1 = ((cljs.core.keyword_identical_QMARK_(readers,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399)))?cljs.core.deref(cljs.reader._STAR_tag_table_STAR_):readers);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var default$__$1 = ((cljs.core.keyword_identical_QMARK_(default$,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399)))?cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_):default$);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),readers__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"default","default",-1987822328),default$__$1], 0));
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(opts__$1,s);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("[encore/read-edn] Unexpected arg type (expected string or nil)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arg","arg",-1747261837),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),s,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(s)], null)], null));
}
}
}));

(taoensso.encore.read_edn.cljs$lang$maxFixedArity = 2);

/**
 * Private, don't use.
 */
taoensso.encore.str_impl = (function taoensso$encore$str_impl(var_args){
var G__25587 = arguments.length;
switch (G__25587) {
case 2:
return taoensso.encore.str_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.str_impl.cljs$core$IFn$_invoke$arity$2 = (function (x,class_name){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name);
}));

(taoensso.encore.str_impl.cljs$core$IFn$_invoke$arity$3 = (function (x,class_name,data){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data),"]"].join('');
}));

(taoensso.encore.str_impl.cljs$lang$maxFixedArity = 3);

/**
 * Returns a random byte array of given size.
 */
taoensso.encore.rand_bytes = (function taoensso$encore$rand_bytes(prefer_secure_QMARK_,size){
var ba = (new Uint8Array(size));
var b2__22159__auto___26918 = (function (){var and__5000__auto__ = prefer_secure_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return taoensso.encore.js__QMARK_crypto;
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(b2__22159__auto___26918)){
var crypto_26919 = b2__22159__auto___26918;
crypto_26919.getRandomValues(ba);
} else {
var n__5593__auto___26920 = size;
var i_26921 = (0);
while(true){
if((i_26921 < n__5593__auto___26920)){
(ba[i_26921] = Math.floor(((256) * Math.random())));

var G__26922 = (i_26921 + (1));
i_26921 = G__26922;
continue;
} else {
}
break;
}
}

return ba;
});
/**
 * Returns a (fn rand-id []) that returns random id strings.
 *   Options include:
 *  `:chars`         - ∈ #{<string> :nanoid :alphanumeric :no-look-alikes ...}
 *  `:len`           - Length of id strings to generate
 *  `:rand-bytes-fn` - Optional (fn [size]) to return random byte array of given size
 * 
 *   See also `uuid-str`, `nano-id`.
 */
taoensso.encore.rand_id_fn = (function taoensso$encore$rand_id_fn(p__25588){
var map__25589 = p__25588;
var map__25589__$1 = cljs.core.__destructure_map(map__25589);
var chars = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25589__$1,new cljs.core.Keyword(null,"chars","chars",-1094630317),new cljs.core.Keyword(null,"nanoid","nanoid",-90964628));
var len = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25589__$1,new cljs.core.Keyword(null,"len","len",1423657078),(21));
var rand_bytes_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25589__$1,new cljs.core.Keyword(null,"rand-bytes-fn","rand-bytes-fn",501267911),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.encore.rand_bytes,true));
var chars__$1 = (function (){var G__25590 = chars;
var G__25590__$1 = (((G__25590 instanceof cljs.core.Keyword))?G__25590.fqn:null);
switch (G__25590__$1) {
case "alphanumeric":
return "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

break;
case "nanoid":
return "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";

break;
case "nanoid-readable":
return "346789ABCDEFGHJKLMNPQRTUVWXYabcdefghijkmnpqrtwxyz";

break;
case "numbers":
return "0123456789";

break;
case "alpha-lowercase":
return "abcdefghijklmnopqrstuvwxyz";

break;
case "alpha-uppercase":
return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

break;
case "hex-lowercase":
return "0123456789abcdef";

break;
case "hex-uppercase":
return "0123456789ABCDEF";

break;
default:
if(typeof chars === 'string'){
return chars;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),5182,11,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/encore/3.133.0/encore-3.133.0.jar!/taoensso/encore.cljc",new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol(null,"chars","chars",545901210,null),chars,null,null);
}

}
})();
var nchars = cljs.core.count(chars__$1);
var max_char_idx = (nchars - (1));
var chars__$2 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(chars__$1);
var mask = ((-1) & (((2) << (Math.floor((Math.log((nchars - (1))) / Math.log((2)))) | (0))) - (1)));
var exp_bytes = ((mask * len) / nchars);
var stepn = ((function (){var x__5087__auto__ = (2);
var y__5088__auto__ = Math.ceil((0.2 * exp_bytes));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})() | (0));
var step1 = (((((cljs.core.mod((256),nchars) | (0)) === (0)))?len:Math.ceil((1.2 * exp_bytes))) | (0));
return (function taoensso$encore$rand_id_fn_$_rand_id(){
var sb = taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();
var idx = (0);
var max_idx = (step1 - (1));
var rand_bytes = (rand_bytes_fn.cljs$core$IFn$_invoke$arity$1 ? rand_bytes_fn.cljs$core$IFn$_invoke$arity$1(step1) : rand_bytes_fn.call(null, step1));
while(true){
var possible_ch_idx_26932 = ((rand_bytes[idx]) & mask);
if((possible_ch_idx_26932 <= max_char_idx)){
sb.append((chars__$2[possible_ch_idx_26932]));
} else {
}

if((sb.length() === len)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
if((idx === max_idx)){
var G__26933 = (0);
var G__26934 = (stepn - (1));
var G__26935 = (rand_bytes_fn.cljs$core$IFn$_invoke$arity$1 ? rand_bytes_fn.cljs$core$IFn$_invoke$arity$1(stepn) : rand_bytes_fn.call(null, stepn));
idx = G__26933;
max_idx = G__26934;
rand_bytes = G__26935;
continue;
} else {
var G__26936 = (idx + (1));
var G__26937 = max_idx;
var G__26938 = rand_bytes;
idx = G__26936;
max_idx = G__26937;
rand_bytes = G__26938;
continue;
}
}
break;
}
});
});
var chars_26939 = (function (){var s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";
return cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(s);
})();
/**
 * Returns a random "Nano ID" of given length, Ref. <https://github.com/ai/nanoid>.
 *  Faster, variable-length version of (rand-id-fn {:chars :nanoid}).
 *  126 bits of entropy with default length (21).
 *  See also `uuid-str`, `rand-id-fn`.
 */
taoensso.encore.nanoid = (function taoensso$encore$nanoid(var_args){
var G__25592 = arguments.length;
switch (G__25592) {
case 0:
return taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$2(true,(21));
}));

(taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$1 = (function (len){
return taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$2(true,len);
}));

(taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$2 = (function (prefer_secure_QMARK_,len){
var sb = taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();
var ba = taoensso.encore.rand_bytes(prefer_secure_QMARK_,len);
var max_idx = (len - (1));
var idx_26944 = (0);
while(true){
sb.append((chars_26939[((ba[idx_26944]) & (63))]));

if((idx_26944 < max_idx)){
var G__26947 = (idx_26944 + (1));
idx_26944 = G__26947;
continue;
} else {
}
break;
}

return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
}));

(taoensso.encore.nanoid.cljs$lang$maxFixedArity = 2);

/**
 * Reverse comparator.
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare(y,x);
});
/**
 * Like `core/sort` but:
 *  - Returns a vector.
 *  - `comparator` can be `:asc`, `:desc`, or an arbitrary comparator.
 *  - An optional `keyfn` may be provided, as in `core/sort-by`.
 */
taoensso.encore.sortv = (function taoensso$encore$sortv(var_args){
var G__25594 = arguments.length;
switch (G__25594) {
case 1:
return taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$3(null,new cljs.core.Keyword(null,"asc","asc",356854569),coll);
}));

(taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$2 = (function (comparator,coll){
return taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$3(null,comparator,coll);
}));

(taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_keyfn,comparator,coll){
if(cljs.core.seq(coll)){
var comparator__$1 = (function (){var G__25595 = comparator;
var G__25595__$1 = (((G__25595 instanceof cljs.core.Keyword))?G__25595.fqn:null);
switch (G__25595__$1) {
case "asc":
return cljs.core.compare;

break;
case "dsc":
case "desc":
return (function (x,y){
return cljs.core.compare(y,x);
});

break;
default:
return comparator;

}
})();
var comparator__$2 = (function (){var b2__22159__auto__ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_keyfn,cljs.core.identity))?_QMARK_keyfn:null);
if(cljs.core.truth_(b2__22159__auto__)){
var kfn = b2__22159__auto__;
return (function (x,y){
var G__25596 = (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(x) : kfn.call(null, x));
var G__25597 = (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(y) : kfn.call(null, y));
return (comparator__$1.cljs$core$IFn$_invoke$arity$2 ? comparator__$1.cljs$core$IFn$_invoke$arity$2(G__25596,G__25597) : comparator__$1.call(null, G__25596,G__25597));
});
} else {
return comparator__$1;
}
})();
var a = cljs.core.to_array(coll);
taoensso.encore.goog$module$goog$array.stableSort(a,cljs.core.fn__GT_comparator(comparator__$2));

return cljs.core.with_meta(cljs.core.vec(a),cljs.core.meta(coll));
} else {
return cljs.core.PersistentVector.EMPTY;
}
}));

(taoensso.encore.sortv.cljs$lang$maxFixedArity = 3);

var sentinel_26951 = ({});
var nil__GT_sentinel_26952 = (function (x){
if((x == null)){
return sentinel_26951;
} else {
return x;
}
});
var sentinel__GT_nil_26953 = (function (x){
if((x === sentinel_26951)){
return null;
} else {
return x;
}
});
/**
 * Reduces the top `n` items from `coll` of N items.
 *  Clj impln is O(N.logn) vs O(N.logN) for (take n (sort-by ...)).
 */
taoensso.encore.reduce_top = (function taoensso$encore$reduce_top(var_args){
var G__25602 = arguments.length;
switch (G__25602) {
case 4:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4 = (function (n,rf,init,coll){
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,cljs.core.identity,cljs.core.compare,rf,init,coll);
}));

(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5 = (function (n,keyfn,rf,init,coll){
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cljs.core.compare,rf,init,coll);
}));

(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6 = (function (n,keyfn,cmp,rf,init,coll){
var coll_size = cljs.core.count(coll);
var n__$1 = cljs.core.long$((function (){var x__5090__auto__ = coll_size;
var y__5091__auto__ = cljs.core.long$(n);
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})());
if((n__$1 > (0))){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.take.cljs$core$IFn$_invoke$arity$1(n__$1),cljs.core.completing.cljs$core$IFn$_invoke$arity$1(rf),init,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(keyfn,cmp,coll));
} else {
return init;
}
}));

(taoensso.encore.reduce_top.cljs$lang$maxFixedArity = 6);

/**
 * Conjoins the top `n` items from `coll` into `to` using `reduce-top`.
 */
taoensso.encore.top_into = (function taoensso$encore$top_into(var_args){
var G__25604 = arguments.length;
switch (G__25604) {
case 3:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3 = (function (to,n,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(to,n,cljs.core.identity,cljs.core.compare,coll);
}));

(taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4 = (function (to,n,keyfn,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(to,n,keyfn,cljs.core.compare,coll);
}));

(taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5 = (function (to,n,keyfn,cmp,coll){
if((((n >= (11)))?taoensso.encore.editable_QMARK_(to):false)){
return cljs.core.persistent_BANG_(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cmp,cljs.core.conj_BANG_,cljs.core.transient$(to),coll));
} else {
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cmp,cljs.core.conj,to,coll);
}
}));

(taoensso.encore.top_into.cljs$lang$maxFixedArity = 5);

/**
 * Returns a sorted vector of the top `n` items from `coll` using `reduce-top`.
 */
taoensso.encore.top = (function taoensso$encore$top(var_args){
var G__25606 = arguments.length;
switch (G__25606) {
case 2:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.top.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,cljs.core.identity,cljs.core.compare,coll);
}));

(taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 = (function (n,keyfn,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,keyfn,cljs.core.compare,coll);
}));

(taoensso.encore.top.cljs$core$IFn$_invoke$arity$4 = (function (n,keyfn,cmp,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,keyfn,cmp,coll);
}));

(taoensso.encore.top.cljs$lang$maxFixedArity = 4);

taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (cljs.core.long$(secs) * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot(cljs.core.long$(ms),(1000));
});
/**
 * Returns ~number of milliseconds in period defined by given args.
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var G__25625 = arguments.length;
switch (G__25625) {
case 1:
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___26960 = arguments.length;
var i__5727__auto___26961 = (0);
while(true){
if((i__5727__auto___26961 < len__5726__auto___26960)){
args_arr__5751__auto__.push((arguments[i__5727__auto___26961]));

var G__26962 = (i__5727__auto___26961 + (1));
i__5727__auto___26961 = G__26962;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((4) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((4)),(0),null)):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5752__auto__);

}
});

(taoensso.encore.ms.cljs$core$IFn$_invoke$arity$1 = (function (p__25626){
var map__25627 = p__25626;
var map__25627__$1 = cljs.core.__destructure_map(map__25627);
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25627__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25627__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var msecs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25627__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25627__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var secs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25627__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));
var mins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25627__$1,new cljs.core.Keyword(null,"mins","mins",467369676));
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25627__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25627__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25627__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
return taoensso.encore.round0((((((((((cljs.core.truth_(years)?(years * (31536000000)):0.0) + (cljs.core.truth_(months)?(months * 2.551392E9):0.0)) + (cljs.core.truth_(weeks)?(weeks * (604800000)):0.0)) + (cljs.core.truth_(days)?(days * (86400000)):0.0)) + (cljs.core.truth_(hours)?(hours * (3600000)):0.0)) + (cljs.core.truth_(mins)?(mins * (60000)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
}));

(taoensso.encore.ms.cljs$core$IFn$_invoke$arity$2 = (function (k1,v1){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1]));
}));

(taoensso.encore.ms.cljs$core$IFn$_invoke$arity$4 = (function (k1,v1,k2,v2){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1,k2,v2]));
}));

(taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (k1,v1,k2,v2,more){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$1(taoensso.encore.reduce_kvs(cljs.core.assoc,cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1,k2,v2]),more));
}));

/** @this {Function} */
(taoensso.encore.ms.cljs$lang$applyTo = (function (seq25620){
var G__25621 = cljs.core.first(seq25620);
var seq25620__$1 = cljs.core.next(seq25620);
var G__25622 = cljs.core.first(seq25620__$1);
var seq25620__$2 = cljs.core.next(seq25620__$1);
var G__25623 = cljs.core.first(seq25620__$2);
var seq25620__$3 = cljs.core.next(seq25620__$2);
var G__25624 = cljs.core.first(seq25620__$3);
var seq25620__$4 = cljs.core.next(seq25620__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25621,G__25622,G__25623,G__25624,seq25620__$4);
}));

(taoensso.encore.ms.cljs$lang$maxFixedArity = (4));

/**
 * Returns ~number of seconds in period defined by given args.
 */
taoensso.encore.secs = (function taoensso$encore$secs(var_args){
var G__25634 = arguments.length;
switch (G__25634) {
case 1:
return taoensso.encore.secs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.secs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.encore.secs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___26966 = arguments.length;
var i__5727__auto___26967 = (0);
while(true){
if((i__5727__auto___26967 < len__5726__auto___26966)){
args_arr__5751__auto__.push((arguments[i__5727__auto___26967]));

var G__26968 = (i__5727__auto___26967 + (1));
i__5727__auto___26967 = G__26968;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((4) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((4)),(0),null)):null);
return taoensso.encore.secs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5752__auto__);

}
});

(taoensso.encore.secs.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return taoensso.encore.ms__GT_secs(taoensso.encore.ms.cljs$core$IFn$_invoke$arity$1(opts));
}));

(taoensso.encore.secs.cljs$core$IFn$_invoke$arity$2 = (function (k1,v1){
return taoensso.encore.ms__GT_secs(taoensso.encore.ms.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1])));
}));

(taoensso.encore.secs.cljs$core$IFn$_invoke$arity$4 = (function (k1,v1,k2,v2){
return taoensso.encore.ms__GT_secs(taoensso.encore.ms.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1,k2,v2])));
}));

(taoensso.encore.secs.cljs$core$IFn$_invoke$arity$variadic = (function (k1,v1,k2,v2,more){
return taoensso.encore.ms__GT_secs(taoensso.encore.ms.cljs$core$IFn$_invoke$arity$1(taoensso.encore.reduce_kvs(cljs.core.assoc,cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1,k2,v2]),more)));
}));

/** @this {Function} */
(taoensso.encore.secs.cljs$lang$applyTo = (function (seq25629){
var G__25630 = cljs.core.first(seq25629);
var seq25629__$1 = cljs.core.next(seq25629);
var G__25631 = cljs.core.first(seq25629__$1);
var seq25629__$2 = cljs.core.next(seq25629__$1);
var G__25632 = cljs.core.first(seq25629__$2);
var seq25629__$3 = cljs.core.next(seq25629__$2);
var G__25633 = cljs.core.first(seq25629__$3);
var seq25629__$4 = cljs.core.next(seq25629__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25630,G__25631,G__25632,G__25633,seq25629__$4);
}));

(taoensso.encore.secs.cljs$lang$maxFixedArity = (4));

/**
 * Private, don't use.
 *   For Clj:  same as `Thread/sleep`.
 *   For Cljs: hot loops until given number of msecs have elapsed.
 * 
 *   Useful for certain synchronous unit tests, etc.
 */
taoensso.encore.hot_sleep = (function taoensso$encore$hot_sleep(msecs){
var t0 = Date.now();
while(true){
if(((Date.now() - t0) < msecs)){
continue;
} else {
return null;
}
break;
}
});
/**
 * Private, don't use.
 */
taoensso.encore.format_num_fn = (function taoensso$encore$format_num_fn(n_min_fd,n_max_fd){
var nf = (new Intl.NumberFormat("en-US",({"minimumFractionDigits": n_min_fd, "maximumFractionDigits": n_max_fd, "useGrouping": true})));
return (function (n){
return nf.format(n);
});
});
var fmt0_26969 = taoensso.encore.format_num_fn((0),(0));
var fmt2_26970 = taoensso.encore.format_num_fn((2),(2));
/**
 * Returns given nanoseconds (long) as formatted human-readable string.
 *  Example outputs: "1.00m", "4.20s", "340ms", "822μs", etc.
 */
taoensso.encore.format_nsecs = (function taoensso$encore$format_nsecs(nanosecs){
var ns = nanosecs;
if((ns >= 6.0E10)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt2_26970((ns / 6.0E10))),"m"].join('');
} else {
if((ns >= 1.0E9)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt2_26970((ns / 1.0E9))),"s"].join('');
} else {
if((ns >= 1000000.0)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt0_26969((ns / 1000000.0))),"ms"].join('');
} else {
if((ns >= 1000.0)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt0_26969((ns / 1000.0))),"\u03BCs"].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt0_26969(ns)),"ns"].join('');
}
}
}
}
});
taoensso.encore.console_log = (((typeof console !== 'undefined'))?(function() { 
var G__26971__delegate = function (xs){
var b2__22159__auto__ = console.log;
if(cljs.core.truth_(b2__22159__auto__)){
var f = b2__22159__auto__;
return f.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(xs));
} else {
return null;
}
};
var G__26971 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__26972__i = 0, G__26972__a = new Array(arguments.length -  0);
while (G__26972__i < G__26972__a.length) {G__26972__a[G__26972__i] = arguments[G__26972__i + 0]; ++G__26972__i;}
  xs = new cljs.core.IndexedSeq(G__26972__a,0,null);
} 
return G__26971__delegate.call(this,xs);};
G__26971.cljs$lang$maxFixedArity = 0;
G__26971.cljs$lang$applyTo = (function (arglist__26973){
var xs = cljs.core.seq(arglist__26973);
return G__26971__delegate(xs);
});
G__26971.cljs$core$IFn$_invoke$arity$variadic = G__26971__delegate;
return G__26971;
})()
:(function() { 
var G__26974__delegate = function (xs){
return null;
};
var G__26974 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__26975__i = 0, G__26975__a = new Array(arguments.length -  0);
while (G__26975__i < G__26975__a.length) {G__26975__a[G__26975__i] = arguments[G__26975__i + 0]; ++G__26975__i;}
  xs = new cljs.core.IndexedSeq(G__26975__a,0,null);
} 
return G__26974__delegate.call(this,xs);};
G__26974.cljs$lang$maxFixedArity = 0;
G__26974.cljs$lang$applyTo = (function (arglist__26976){
var xs = cljs.core.seq(arglist__26976);
return G__26974__delegate(xs);
});
G__26974.cljs$core$IFn$_invoke$arity$variadic = G__26974__delegate;
return G__26974;
})()
);

taoensso.encore.log = taoensso.encore.console_log;

taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26978 = arguments.length;
var i__5727__auto___26979 = (0);
while(true){
if((i__5727__auto___26979 < len__5726__auto___26978)){
args__5732__auto__.push((arguments[i__5727__auto___26979]));

var G__26980 = (i__5727__auto___26979 + (1));
i__5727__auto___26979 = G__26980;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log(taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(taoensso.encore.nil__GT_str),xs));
}));

(taoensso.encore.logp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.logp.cljs$lang$applyTo = (function (seq25647){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25647));
}));


taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26981 = arguments.length;
var i__5727__auto___26982 = (0);
while(true){
if((i__5727__auto___26982 < len__5726__auto___26981)){
args__5732__auto__.push((arguments[i__5727__auto___26982]));

var G__26983 = (i__5727__auto___26982 + (1));
i__5727__auto___26982 = G__26983;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return alert(taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(taoensso.encore.nil__GT_str),xs));
}));

(taoensso.encore.sayp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.sayp.cljs$lang$applyTo = (function (seq25648){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25648));
}));


taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26985 = arguments.length;
var i__5727__auto___26986 = (0);
while(true){
if((i__5727__auto___26986 < len__5726__auto___26985)){
args__5732__auto__.push((arguments[i__5727__auto___26986]));

var G__26990 = (i__5727__auto___26986 + (1));
i__5727__auto___26986 = G__26990;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return taoensso.encore.console_log(taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$2(fmt,xs));
}));

(taoensso.encore.logf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.logf.cljs$lang$applyTo = (function (seq25649){
var G__25650 = cljs.core.first(seq25649);
var seq25649__$1 = cljs.core.next(seq25649);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25650,seq25649__$1);
}));


taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26991 = arguments.length;
var i__5727__auto___26992 = (0);
while(true){
if((i__5727__auto___26992 < len__5726__auto___26991)){
args__5732__auto__.push((arguments[i__5727__auto___26992]));

var G__26993 = (i__5727__auto___26992 + (1));
i__5727__auto___26992 = G__26993;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return alert(taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$2(fmt,xs));
}));

(taoensso.encore.sayf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.sayf.cljs$lang$applyTo = (function (seq25651){
var G__25652 = cljs.core.first(seq25651);
var seq25651__$1 = cljs.core.next(seq25651);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25652,seq25651__$1);
}));

/**
 * Returns current window location as
 *   {:keys [href protocol hostname host pathname search hash]}.
 */
taoensso.encore.get_win_loc = (function taoensso$encore$get_win_loc(){
var b2__22159__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(taoensso.encore.js__QMARK_window,"location");
if(cljs.core.truth_(b2__22159__auto__)){
var loc = b2__22159__auto__;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"href","href",-793805698),loc.href,new cljs.core.Keyword(null,"protocol","protocol",652470118),loc.protocol,new cljs.core.Keyword(null,"hostname","hostname",2105669933),loc.hostname,new cljs.core.Keyword(null,"host","host",-1558485167),loc.host,new cljs.core.Keyword(null,"pathname","pathname",-1420497528),loc.pathname,new cljs.core.Keyword(null,"search","search",1564939822),loc.search,new cljs.core.Keyword(null,"hash","hash",-13781596),loc.hash], null);
} else {
return null;
}
});
taoensso.encore.default_xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));

taoensso.encore.js_form_data_QMARK_ = (((typeof FormData !== 'undefined'))?(function (x){
return (x instanceof FormData);
}):(function (x){
return null;
}));

taoensso.encore.js_file_QMARK_ = (((typeof File !== 'undefined'))?(function (x){
return (x instanceof File);
}):(function (x){
return null;
}));

/**
 * Returns [<uri> <?data>]
 */
taoensso.encore.coerce_xhr_params = (function (){var url_encode = (function() {
var taoensso$encore$url_encode = null;
var taoensso$encore$url_encode__1 = (function (params){
if(cljs.core.seq(params)){
return goog.Uri.QueryData.createFromMap(cljs.core.clj__GT_js(params)).toString();
} else {
return null;
}
});
var taoensso$encore$url_encode__2 = (function (uri,params){
var qstr = taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$1(params);
var uri_with_query = ((clojure.string.blank_QMARK_(qstr))?uri:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qstr)].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri_with_query,null], null);
});
taoensso$encore$url_encode = function(uri,params){
switch(arguments.length){
case 1:
return taoensso$encore$url_encode__1.call(this,uri);
case 2:
return taoensso$encore$url_encode__2.call(this,uri,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$url_encode__1;
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$url_encode__2;
return taoensso$encore$url_encode;
})()
;
var adaptive_encode = (function (uri,params){
if(cljs.core.truth_(taoensso.encore.js_form_data_QMARK_(params))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,params], null);
} else {
var e_26996 = (function (){try{if(cljs.core.map_QMARK_(params)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e25653){if((e25653 instanceof Error)){
var e_26996 = e25653;
return e_26996;
} else {
throw e25653;

}
}})();
if((e_26996 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),6701,22,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/encore/3.133.0/encore-3.133.0.jar!/taoensso/encore.cljc",new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),params,e_26996,null);
}

if(cljs.core.truth_((function (){var and__5000__auto__ = (typeof FormData !== 'undefined');
if(and__5000__auto__){
return taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2(taoensso.encore.js_file_QMARK_,cljs.core.vals(params));
} else {
return and__5000__auto__;
}
})())){
var form_data = (new FormData());
var seq__25654_26997 = cljs.core.seq(params);
var chunk__25655_26998 = null;
var count__25656_26999 = (0);
var i__25657_27000 = (0);
while(true){
if((i__25657_27000 < count__25656_26999)){
var vec__25664_27001 = chunk__25655_26998.cljs$core$IIndexed$_nth$arity$2(null, i__25657_27000);
var k_27002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25664_27001,(0),null);
var v_27003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25664_27001,(1),null);
form_data.append(cljs.core.name(k_27002),v_27003);


var G__27004 = seq__25654_26997;
var G__27005 = chunk__25655_26998;
var G__27006 = count__25656_26999;
var G__27007 = (i__25657_27000 + (1));
seq__25654_26997 = G__27004;
chunk__25655_26998 = G__27005;
count__25656_26999 = G__27006;
i__25657_27000 = G__27007;
continue;
} else {
var temp__5804__auto___27009 = cljs.core.seq(seq__25654_26997);
if(temp__5804__auto___27009){
var seq__25654_27010__$1 = temp__5804__auto___27009;
if(cljs.core.chunked_seq_QMARK_(seq__25654_27010__$1)){
var c__5525__auto___27011 = cljs.core.chunk_first(seq__25654_27010__$1);
var G__27012 = cljs.core.chunk_rest(seq__25654_27010__$1);
var G__27013 = c__5525__auto___27011;
var G__27014 = cljs.core.count(c__5525__auto___27011);
var G__27015 = (0);
seq__25654_26997 = G__27012;
chunk__25655_26998 = G__27013;
count__25656_26999 = G__27014;
i__25657_27000 = G__27015;
continue;
} else {
var vec__25667_27017 = cljs.core.first(seq__25654_27010__$1);
var k_27018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25667_27017,(0),null);
var v_27019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25667_27017,(1),null);
form_data.append(cljs.core.name(k_27018),v_27019);


var G__27020 = cljs.core.next(seq__25654_27010__$1);
var G__27021 = null;
var G__27022 = (0);
var G__27023 = (0);
seq__25654_26997 = G__27020;
chunk__25655_26998 = G__27021;
count__25656_26999 = G__27022;
i__25657_27000 = G__27023;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,form_data], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,url_encode(params)], null);
}
}
});
return (function (uri,method,params){
if(cljs.core.truth_((function (x){
var or__5002__auto__ = (x == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = taoensso.truss.impl.safe_pred(cljs.core.map_QMARK_)(x);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return taoensso.truss.impl.safe_pred(taoensso.encore.js_form_data_QMARK_)(x);
}
}
})(params))){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),6713,12,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/encore/3.133.0/encore-3.133.0.jar!/taoensso/encore.cljc",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"js-form-data?","js-form-data?",-1807235094,null)], null),null,new cljs.core.Symbol(null,"params","params",-1943919534,null),params,null,null);
}

var G__25670 = method;
var G__25670__$1 = (((G__25670 instanceof cljs.core.Keyword))?G__25670.fqn:null);
switch (G__25670__$1) {
case "get":
return url_encode(uri,params);

break;
case "post":
return adaptive_encode(uri,params);

break;
case "put":
return adaptive_encode(uri,params);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25670__$1)].join('')));

}
});
})();
/**
 * Queues a lightweight Ajax call with Google Closure's `goog.net.XhrIo` and
 *   returns nil, or the resulting `goog.net.XhrIo` instance if one was
 *   immediately available from the XHR pool:
 * 
 *     (ajax-call
 *       "http://localhost:8080/my-post-route" ; Endpoint URL
 * 
 *       {:method     :post ; ∈ #{:get :post :put}
 *        :resp-type  :text ; ∈ #{:auto :edn :json :xml :text}
 * 
 *        :params     {:username "Rich Hickey" :type "Awesome"} ; Request params
 *        :headers    {"Content-Type" "text/plain"} ; Request headers
 * 
 *        :timeout-ms 7000
 *        :with-credentials? false ; Enable if using CORS (requires xhr v2+)
 * 
 *        :xhr-pool       my-xhr-pool ; Optional `goog.net.XhrIoPool` instance or delay
 *        :xhr-cb-fn      (fn [xhr])  ; Optional fn to call with `XhrIo` from pool when available
 *        :xhr-timeout-ms 2500        ; Optional max msecs to wait on pool for `XhrIo`
 *       }
 * 
 *       (fn ajax-callback-fn [resp-map]
 *         (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *           ;; ?status ; ∈ #{nil 200 404 ...}, non-nil iff server responded
 *           ;; ?error  ; ∈ #{nil <http-error-status-code> <exception> :timeout
 *                            :abort :http-error :exception :xhr-pool-depleted}
 *           (js/alert (str "Ajax response: " resp-map)))))
 */
taoensso.encore.ajax_call = (function taoensso$encore$ajax_call(url,p__25672,callback_fn){
var map__25673 = p__25672;
var map__25673__$1 = cljs.core.__destructure_map(map__25673);
var opts = map__25673__$1;
var resp_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25673__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
var xhr_pool = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25673__$1,new cljs.core.Keyword(null,"xhr-pool","xhr-pool",1499305499),taoensso.encore.default_xhr_pool_);
var timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25673__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var xhr_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25673__$1,new cljs.core.Keyword(null,"xhr-timeout-ms","xhr-timeout-ms",89157982),(2500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25673__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var xhr_cb_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25673__$1,new cljs.core.Keyword(null,"xhr-cb-fn","xhr-cb-fn",1569050954));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25673__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25673__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25673__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
if(cljs.core.truth_((function (x){
var or__5002__auto__ = (x == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return taoensso.truss.impl.safe_pred(taoensso.encore.nat_int_QMARK_)(x);
}
})(timeout_ms))){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),6762,6,"jar:file:/home/pushpankar/.m2/repository/com/taoensso/encore/3.133.0/encore-3.133.0.jar!/taoensso/encore.cljc",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nat-int?","nat-int?",-1879663400,null)], null),null,new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null),timeout_ms,null,null);
}

var xhr_pool__$1 = cljs.core.force(xhr_pool);
var with_xhr = (function (xhr){
try{var timeout_ms__$1 = (function (){var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return timeout_ms;
}
})();
var xhr_method = (function (){var G__25679 = method;
var G__25679__$1 = (((G__25679 instanceof cljs.core.Keyword))?G__25679.fqn:null);
switch (G__25679__$1) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
default:
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(method,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Symbol("taoensso.encore","ajax-call","taoensso.encore/ajax-call",-11651487,null),new cljs.core.Keyword(null,"param","param",2013631823),new cljs.core.Symbol(null,"method","method",1696235119,null),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null)], null));

}
})();
var vec__25676 = taoensso.encore.coerce_xhr_params(url,method,params);
var xhr_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25676,(0),null);
var xhr__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25676,(1),null);
var xhr_headers = (function (){var headers__$1 = taoensso.encore.map_keys((function (p1__25671_SHARP_){
return clojure.string.lower_case(cljs.core.name(p1__25671_SHARP_));
}),headers);
var headers__$2 = taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(headers__$1,"x-requested-with",cljs.core.get.cljs$core$IFn$_invoke$arity$3(headers__$1,"x-requested-with","XMLHTTPRequest"));
return cljs.core.clj__GT_js(headers__$2);
})();
var _QMARK_progress_listener = (function (){var b2__22159__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855));
if(cljs.core.truth_(b2__22159__auto__)){
var pf = b2__22159__auto__;
xhr.setProgressEventsEnabled(true);

return goog.events.listen(xhr,goog.net.EventType.PROGRESS,(function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__5000__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(total,(0));
} else {
return and__5000__auto__;
}
})())?(loaded / total):null);
var G__25680 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"length-computable?","length-computable?",1915473276),length_computable_QMARK_,new cljs.core.Keyword(null,"?ratio","?ratio",-1275760831),_QMARK_ratio,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),loaded,new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"ev","ev",-406827324),ev], null);
return (pf.cljs$core$IFn$_invoke$arity$1 ? pf.cljs$core$IFn$_invoke$arity$1(G__25680) : pf.call(null, G__25680));
}));
} else {
return null;
}
})();
var G__25681_27031 = xhr;
goog.events.listenOnce(G__25681_27031,goog.net.EventType.READY,(function (_){
return xhr_pool__$1.releaseObject(xhr);
}));

goog.events.listenOnce(G__25681_27031,goog.net.EventType.COMPLETE,(function taoensso$encore$ajax_call_$_wrapped_callback_fn(resp){
var success_QMARK_ = xhr.isSuccess();
var _status = xhr.getStatus();
var vec__25682 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(_status,(-1)))?(function (){var _QMARK_content_type = xhr.getResponseHeader("content-type");
var _QMARK_content = (function (){var resp_type__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492)))?resp_type:(((_QMARK_content_type == null))?new cljs.core.Keyword(null,"text","text",-1790561697):(function (){var cts = clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_content_type));
var match_QMARK_ = (function (s){
return taoensso.encore.str_contains_QMARK_(cts,s);
});
if(cljs.core.truth_(match_QMARK_("/edn"))){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(cljs.core.truth_(match_QMARK_("/json"))){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(cljs.core.truth_(match_QMARK_("/xml"))){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
})()));
try{var G__25686 = resp_type__$1;
var G__25686__$1 = (((G__25686 instanceof cljs.core.Keyword))?G__25686.fqn:null);
switch (G__25686__$1) {
case "edn":
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1(xhr.getResponseText());

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "text":
return xhr.getResponseText();

break;
default:
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(resp_type__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Symbol("taoensso.encore","ajax-call","taoensso.encore/ajax-call",-11651487,null),new cljs.core.Keyword(null,"param","param",2013631823),new cljs.core.Symbol(null,"resp-type","resp-type",-1603759807,null),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"edn","edn",1317840885),null,new cljs.core.Keyword(null,"json","json",1279968570),null,new cljs.core.Keyword(null,"xml","xml",-1170142052),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null)], null));

}
}catch (e25685){var _ = e25685;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ajax","bad-response-type","ajax/bad-response-type",789441015),resp_type__$1,new cljs.core.Keyword("ajax","resp-as-text","ajax/resp-as-text",141416819),xhr.getResponseText()], null);
}})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_status,_QMARK_content_type,_QMARK_content], null);
})():null);
var _QMARK_status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25682,(0),null);
var _QMARK_content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25682,(1),null);
var _QMARK_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25682,(2),null);
if(cljs.core.truth_(_QMARK_progress_listener)){
goog.events.unlistenByKey(_QMARK_progress_listener);
} else {
}

var G__25687 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"success?","success?",-122854052),success_QMARK_,new cljs.core.Keyword(null,"?status","?status",938730360),_QMARK_status,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049),_QMARK_content_type,new cljs.core.Keyword(null,"?content","?content",1697782054),_QMARK_content,new cljs.core.Keyword(null,"?error","?error",1070752222),(cljs.core.truth_(success_QMARK_)?null:(cljs.core.truth_(_QMARK_status)?_QMARK_status:cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.net.ErrorCode.NO_ERROR,null,goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",-335277064),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",521193198),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",-318625318)]),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",-935977881))))], null);
return (callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__25687) : callback_fn.call(null, G__25687));
}));


xhr.setTimeoutInterval((function (){var or__5002__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})());

if(cljs.core.truth_(with_credentials_QMARK_)){
xhr.setWithCredentials(true);
} else {
}

xhr.send(xhr_url,xhr_method,xhr__QMARK_data,xhr_headers);

var b2__22159__auto___27034 = xhr_cb_fn;
if(cljs.core.truth_(b2__22159__auto___27034)){
var cb_27038 = b2__22159__auto___27034;
try{(cb_27038.cljs$core$IFn$_invoke$arity$1 ? cb_27038.cljs$core$IFn$_invoke$arity$1(xhr) : cb_27038.call(null, xhr));
}catch (e25688){var __27039 = e25688;
}} else {
}

return xhr;
}catch (e25674){var e = e25674;
xhr_pool__$1.releaseObject(xhr);

var G__25675_27040 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),e], null);
(callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__25675_27040) : callback_fn.call(null, G__25675_27040));

return null;
}});
var b2__22159__auto__ = xhr_pool__$1.getObject();
if(cljs.core.truth_(b2__22159__auto__)){
var xhr = b2__22159__auto__;
return with_xhr(xhr);
} else {
if((((xhr_timeout_ms == null)) || ((xhr_timeout_ms === (0))))){
var G__25689_27041 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),new cljs.core.Keyword(null,"xhr-pool-depleted","xhr-pool-depleted",-1812092376)], null);
(callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__25689_27041) : callback_fn.call(null, G__25689_27041));

return null;
} else {
var done_QMARK__ = taoensso.encore.latom(false);
setTimeout((function taoensso$encore$ajax_call_$_xhr_timeout(){
if(cljs.core.compare_and_set_BANG_(done_QMARK__,false,true)){
var G__25690 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),new cljs.core.Keyword(null,"xhr-pool-timeout","xhr-pool-timeout",-70669609)], null);
return (callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__25690) : callback_fn.call(null, G__25690));
} else {
return null;
}
}),xhr_timeout_ms);

xhr_pool__$1.getObject((function taoensso$encore$ajax_call_$_xhr_cb(xhr){
if(cljs.core.compare_and_set_BANG_(done_QMARK__,false,true)){
return with_xhr(xhr);
} else {
return xhr_pool__$1.releaseObject(xhr);
}
}));

return null;
}
}
});
/**
 * Based on <https://goo.gl/fBqy6e>.
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),s),"*","%2A");
} else {
return null;
}
});
/**
 * Stolen from <http://goo.gl/99NSR1>.
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
var args__5732__auto__ = [];
var len__5726__auto___27048 = arguments.length;
var i__5727__auto___27049 = (0);
while(true){
if((i__5727__auto___27049 < len__5726__auto___27048)){
args__5732__auto__.push((arguments[i__5727__auto___27049]));

var G__27050 = (i__5727__auto___27049 + (1));
i__5727__auto___27049 = G__27050;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__25693){
var vec__25694 = p__25693;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25694,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
} else {
return null;
}
}));

(taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq25691){
var G__25692 = cljs.core.first(seq25691);
var seq25691__$1 = cljs.core.next(seq25691);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25692,seq25691__$1);
}));

taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [taoensso.encore.url_encode(taoensso.encore.as_qname(k)),"=",taoensso.encore.url_encode((function (){var or__5002__auto__ = taoensso.encore.as__QMARK_qname(v);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
}
})())].join('');
});
var join = (function (strs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",strs);
});
if(cljs.core.empty_QMARK_(m)){
return "";
} else {
return join((function (){var iter__5480__auto__ = (function taoensso$encore$format_query_string_$_iter__25697(s__25698){
return (new cljs.core.LazySeq(null,(function (){
var s__25698__$1 = s__25698;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__25698__$1);
if(temp__5804__auto__){
var s__25698__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25698__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__25698__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__25700 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__25699 = (0);
while(true){
if((i__25699 < size__5479__auto__)){
var vec__25701 = cljs.core._nth(c__5478__auto__,i__25699);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25701,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25701,(1),null);
if(taoensso.encore.some_QMARK_(v)){
cljs.core.chunk_append(b__25700,((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__5002__auto__ = cljs.core.seq(v);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)));

var G__27053 = (i__25699 + (1));
i__25699 = G__27053;
continue;
} else {
var G__27054 = (i__25699 + (1));
i__25699 = G__27054;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25700),taoensso$encore$format_query_string_$_iter__25697(cljs.core.chunk_rest(s__25698__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25700),null);
}
} else {
var vec__25704 = cljs.core.first(s__25698__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25704,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25704,(1),null);
if(taoensso.encore.some_QMARK_(v)){
return cljs.core.cons(((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__5002__auto__ = cljs.core.seq(v);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)),taoensso$encore$format_query_string_$_iter__25697(cljs.core.rest(s__25698__$2)));
} else {
var G__27055 = cljs.core.rest(s__25698__$2);
s__25698__$1 = G__27055;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var b2__22159__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(b2__22159__auto__)){
var cur = b2__22159__auto__;
if(cljs.core.vector_QMARK_(cur)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`.
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(var_args){
var args__5732__auto__ = [];
var len__5726__auto___27056 = arguments.length;
var i__5727__auto___27057 = (0);
while(true){
if((i__5727__auto___27057 < len__5726__auto___27056)){
args__5732__auto__.push((arguments[i__5727__auto___27057]));

var G__27058 = (i__5727__auto___27057 + (1));
i__5727__auto___27057 = G__27058;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__25709){
var vec__25710 = p__25709;
var keywordize_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25710,(0),null);
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25710,(1),null);
if(((clojure.string.blank_QMARK_(s)) || (cljs.core.not(taoensso.encore.str_contains_QMARK_(s,"="))))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var s__$1 = (cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_(s,"?"))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)):s);
var m = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,param){
var b2__22159__auto__ = clojure.string.split.cljs$core$IFn$_invoke$arity$3(param,/=/,(2));
if(cljs.core.truth_(b2__22159__auto__)){
var vec__25713 = b2__22159__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25713,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25713,(1),null);
return taoensso.encore.assoc_conj(m,taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([encoding], 0)),taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([encoding], 0)));
} else {
return m;
}
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2(s__$1,/&/));
if(cljs.core.truth_(keywordize_QMARK_)){
return taoensso.encore.map_keys(cljs.core.keyword,m);
} else {
return m;
}
}
}));

(taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq25707){
var G__25708 = cljs.core.first(seq25707);
var seq25707__$1 = cljs.core.next(seq25707);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25708,seq25707__$1);
}));

taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__25716 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),/\?/,(2));
var url__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25716,(0),null);
var _QMARK_qstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25716,(1),null);
var qmap = taoensso.encore.merge.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(_QMARK_qstr)?taoensso.encore.map_keys(cljs.core.keyword,taoensso.encore.parse_query_params(_QMARK_qstr)):null),taoensso.encore.map_keys(cljs.core.keyword,m));
var _QMARK_qstr__$1 = taoensso.encore.as__QMARK_nblank(taoensso.encore.format_query_string(qmap));
var b2__22159__auto__ = _QMARK_qstr__$1;
if(cljs.core.truth_(b2__22159__auto__)){
var qstr = b2__22159__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(url__$1),"?",qstr].join('');
} else {
return url__$1;
}
});
/**
 * Returns given Cljs argument as JSON string.
 */
taoensso.encore.pr_json = (function taoensso$encore$pr_json(x){
return JSON.stringify(cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keyword-fn","keyword-fn",-64566675),taoensso.encore.as_qname], 0)));
});
/**
 * Reads given JSON string to return a Cljs value.
 */
taoensso.encore.read_json = (function taoensso$encore$read_json(var_args){
var G__25720 = arguments.length;
switch (G__25720) {
case 1:
return taoensso.encore.read_json.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_json.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.read_json.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.encore.read_json.cljs$core$IFn$_invoke$arity$2(false,s);
}));

(taoensso.encore.read_json.cljs$core$IFn$_invoke$arity$2 = (function (kw_keys_QMARK_,s){
if((((s == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,"")))){
return null;
} else {
if(typeof s === 'string'){
if(cljs.core.truth_(kw_keys_QMARK_)){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(s),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(s));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("[encore/read-json] Unexpected arg type (expected string or nil)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arg","arg",-1747261837),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),s,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(s)], null)], null));
}
}
}));

(taoensso.encore.read_json.cljs$lang$maxFixedArity = 2);

/**
 * Returns a single (composite) unary fn that applies all given unary fns
 *   sequentially (left->right!: f1, f2, ...). If any given fn returns nil, the
 *   returned composite fn immediately returns nil:
 * 
 *  ((comp-middleware inc #(* % 2) inc) 1) => 5 ; (inc (* (inc 1) 2))
 *  ((comp-middleware inc (fn [_] nil) (fn [_] (throw (Exception. "Never thrown!")))) 1) => nil
 * 
 *   Useful for composing Ring-style middleware fns.
 */
taoensso.encore.comp_middleware = (function taoensso$encore$comp_middleware(var_args){
var G__25726 = arguments.length;
switch (G__25726) {
case 1:
return taoensso.encore.comp_middleware.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.comp_middleware.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.comp_middleware.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___27070 = arguments.length;
var i__5727__auto___27071 = (0);
while(true){
if((i__5727__auto___27071 < len__5726__auto___27070)){
args_arr__5751__auto__.push((arguments[i__5727__auto___27071]));

var G__27072 = (i__5727__auto___27071 + (1));
i__5727__auto___27071 = G__27072;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((3) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((3)),(0),null)):null);
return taoensso.encore.comp_middleware.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5752__auto__);

}
});

(taoensso.encore.comp_middleware.cljs$core$IFn$_invoke$arity$1 = (function (fs){
return (function (x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (x__$1,f){
if(cljs.core.truth_(f)){
var or__5002__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x__$1) : f.call(null, x__$1));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.reduced(null);
}
} else {
return x__$1;
}
}),x,fs);
});
}));

(taoensso.encore.comp_middleware.cljs$core$IFn$_invoke$arity$2 = (function (f1,f2){
return (function (x){
if(cljs.core.truth_(f1)){
if(cljs.core.truth_(f2)){
var b2__22159__auto__ = (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(x) : f1.call(null, x));
if(cljs.core.truth_(b2__22159__auto__)){
var x__$1 = b2__22159__auto__;
return (f2.cljs$core$IFn$_invoke$arity$1 ? f2.cljs$core$IFn$_invoke$arity$1(x__$1) : f2.call(null, x__$1));
} else {
return null;
}
} else {
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(x) : f1.call(null, x));
}
} else {
if(cljs.core.truth_(f2)){
return (f2.cljs$core$IFn$_invoke$arity$1 ? f2.cljs$core$IFn$_invoke$arity$1(x) : f2.call(null, x));
} else {
return x;
}
}
});
}));

(taoensso.encore.comp_middleware.cljs$core$IFn$_invoke$arity$3 = (function (f1,f2,f3){
return (function (x){
var b2__22159__auto__ = (cljs.core.truth_(f1)?(f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(x) : f1.call(null, x)):x);
if(cljs.core.truth_(b2__22159__auto__)){
var x__$1 = b2__22159__auto__;
var b2__22159__auto____$1 = (cljs.core.truth_(f2)?(f2.cljs$core$IFn$_invoke$arity$1 ? f2.cljs$core$IFn$_invoke$arity$1(x__$1) : f2.call(null, x__$1)):x__$1);
if(cljs.core.truth_(b2__22159__auto____$1)){
var x__$2 = b2__22159__auto____$1;
if(cljs.core.truth_(f3)){
return (f3.cljs$core$IFn$_invoke$arity$1 ? f3.cljs$core$IFn$_invoke$arity$1(x__$2) : f3.call(null, x__$2));
} else {
return x__$2;
}
} else {
return null;
}
} else {
return null;
}
});
}));

(taoensso.encore.comp_middleware.cljs$core$IFn$_invoke$arity$variadic = (function (f1,f2,f3,fs){
return (function (x){
var b2__22159__auto__ = (cljs.core.truth_(f1)?(f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(x) : f1.call(null, x)):x);
if(cljs.core.truth_(b2__22159__auto__)){
var x__$1 = b2__22159__auto__;
var b2__22159__auto____$1 = (cljs.core.truth_(f2)?(f2.cljs$core$IFn$_invoke$arity$1 ? f2.cljs$core$IFn$_invoke$arity$1(x__$1) : f2.call(null, x__$1)):x__$1);
if(cljs.core.truth_(b2__22159__auto____$1)){
var x__$2 = b2__22159__auto____$1;
var b2__22159__auto____$2 = (cljs.core.truth_(f3)?(f3.cljs$core$IFn$_invoke$arity$1 ? f3.cljs$core$IFn$_invoke$arity$1(x__$2) : f3.call(null, x__$2)):x__$2);
if(cljs.core.truth_(b2__22159__auto____$2)){
var x__$3 = b2__22159__auto____$2;
return taoensso.encore.comp_middleware.cljs$core$IFn$_invoke$arity$1(fs)(x__$3);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
}));

/** @this {Function} */
(taoensso.encore.comp_middleware.cljs$lang$applyTo = (function (seq25722){
var G__25723 = cljs.core.first(seq25722);
var seq25722__$1 = cljs.core.next(seq25722);
var G__25724 = cljs.core.first(seq25722__$1);
var seq25722__$2 = cljs.core.next(seq25722__$1);
var G__25725 = cljs.core.first(seq25722__$2);
var seq25722__$3 = cljs.core.next(seq25722__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25723,G__25724,G__25725,seq25722__$3);
}));

(taoensso.encore.comp_middleware.cljs$lang$maxFixedArity = (3));

taoensso.encore._valid_unstub_impl = (function taoensso$encore$_valid_unstub_impl(x){
if(cljs.core.fn_QMARK_(x)){
return x;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("[encore/stubfn] Unexpected unstub implementation ",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x)], null),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"fn","fn",465265323,null)], null));
}
});
var as__QMARK_qname_27075 = taoensso.encore.as__QMARK_qname;
var always_27076 = (function taoensso$encore$always(_in){
return true;
});
var never_27077 = (function taoensso$encore$never(_in){
return false;
});
var ns_QMARK__27078 = (function (x){
return (x instanceof cljs.core.Namespace);
});
var input_str_BANG__27079 = (function (x){
var or__5002__auto__ = (as__QMARK_qname_27075.cljs$core$IFn$_invoke$arity$1 ? as__QMARK_qname_27075.cljs$core$IFn$_invoke$arity$1(x) : as__QMARK_qname_27075.call(null, x));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if((x == null)){
return "";
} else {
if(ns_QMARK__27078(x)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
} else {
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Symbol("taoensso.encore","name-filter","taoensso.encore/name-filter",-2070485905,null),new cljs.core.Keyword(null,"param","param",2013631823),new cljs.core.Symbol(null,"filter-input-arg","filter-input-arg",1147690060,null),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [null,"null",new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),"null",new cljs.core.Symbol(null,"symbol","symbol",601958831,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"keyword","keyword",-1843046022,null),"null"], null), null)], null));
}
}
}
});
var wild_str__GT__QMARK_re_pattern_27080 = (function (s){
if(cljs.core.truth_(taoensso.encore.str_contains_QMARK_(s,"*"))){
return cljs.core.re_pattern(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join(''),"(.*)","__OR_CHILDREN__"),".","\\."),"*",".*"),"__OR_CHILDREN__","(\\..*)?"));
} else {
return null;
}
});
var compile__GT_match_fn_27081 = (function taoensso$encore$compile__GT_match_fn(spec,cache_QMARK_){
while(true){
if(cljs.core.truth_((function (){var fexpr__25738 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["*",null,new cljs.core.Keyword(null,"any","any",1705907423),null], null), null);
return (fexpr__25738.cljs$core$IFn$_invoke$arity$1 ? fexpr__25738.cljs$core$IFn$_invoke$arity$1(spec) : fexpr__25738.call(null, spec));
})())){
return always_27076;
} else {
if(cljs.core.truth_((function (){var fexpr__25739 = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"none","none",1333468478)]);
return (fexpr__25739.cljs$core$IFn$_invoke$arity$1 ? fexpr__25739.cljs$core$IFn$_invoke$arity$1(spec) : fexpr__25739.call(null, spec));
})())){
return never_27077;
} else {
if(taoensso.encore.re_pattern_QMARK_(spec)){
return ((function (spec,cache_QMARK_,as__QMARK_qname_27075,always_27076,never_27077,ns_QMARK__27078,input_str_BANG__27079,wild_str__GT__QMARK_re_pattern_27080){
return (function taoensso$encore$compile__GT_match_fn_$_match_QMARK_(in$){
return cljs.core.re_find(spec,input_str_BANG__27079(in$));
});
;})(spec,cache_QMARK_,as__QMARK_qname_27075,always_27076,never_27077,ns_QMARK__27078,input_str_BANG__27079,wild_str__GT__QMARK_re_pattern_27080))
} else {
if(ns_QMARK__27078(spec)){
var G__27084 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var G__27085 = cache_QMARK_;
spec = G__27084;
cache_QMARK_ = G__27085;
continue;
} else {
var b2__22159__auto__ = (as__QMARK_qname_27075.cljs$core$IFn$_invoke$arity$1 ? as__QMARK_qname_27075.cljs$core$IFn$_invoke$arity$1(spec) : as__QMARK_qname_27075.call(null, spec));
if(cljs.core.truth_(b2__22159__auto__)){
var str_spec = b2__22159__auto__;
var b2__22159__auto____$1 = wild_str__GT__QMARK_re_pattern_27080(str_spec);
if(cljs.core.truth_(b2__22159__auto____$1)){
var re_pattern = b2__22159__auto____$1;
var G__27086 = re_pattern;
var G__27087 = cache_QMARK_;
spec = G__27086;
cache_QMARK_ = G__27087;
continue;
} else {
return ((function (spec,cache_QMARK_,b2__22159__auto____$1,str_spec,b2__22159__auto__,as__QMARK_qname_27075,always_27076,never_27077,ns_QMARK__27078,input_str_BANG__27079,wild_str__GT__QMARK_re_pattern_27080){
return (function taoensso$encore$compile__GT_match_fn_$_match_QMARK_(in$){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(str_spec,input_str_BANG__27079(in$));
});
;})(spec,cache_QMARK_,b2__22159__auto____$1,str_spec,b2__22159__auto__,as__QMARK_qname_27075,always_27076,never_27077,ns_QMARK__27078,input_str_BANG__27079,wild_str__GT__QMARK_re_pattern_27080))
}
} else {
if(((cljs.core.vector_QMARK_(spec)) || (cljs.core.set_QMARK_(spec)))){
if(cljs.core.truth_((function (){var fexpr__25740 = cljs.core.set(spec);
return (fexpr__25740.cljs$core$IFn$_invoke$arity$1 ? fexpr__25740.cljs$core$IFn$_invoke$arity$1("*") : fexpr__25740.call(null, "*"));
})())){
return always_27076;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(spec),(1))){
var G__27088 = cljs.core.first(spec);
var G__27089 = cache_QMARK_;
spec = G__27088;
cache_QMARK_ = G__27089;
continue;
} else {
var vec__25741 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (spec,cache_QMARK_,b2__22159__auto__,as__QMARK_qname_27075,always_27076,never_27077,ns_QMARK__27078,input_str_BANG__27079,wild_str__GT__QMARK_re_pattern_27080){
return (function (p__25744,spec__$1){
var vec__25745 = p__25744;
var fixed_strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25745,(0),null);
var re_patterns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25745,(1),null);
var spec__$2 = ((ns_QMARK__27078(spec__$1))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1):taoensso.encore.as_qname(spec__$1));
var b2__22159__auto____$1 = ((taoensso.encore.re_pattern_QMARK_(spec__$2))?spec__$2:wild_str__GT__QMARK_re_pattern_27080(spec__$2));
if(cljs.core.truth_(b2__22159__auto____$1)){
var re_pattern = b2__22159__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fixed_strs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(re_patterns,re_pattern)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fixed_strs,spec__$2),re_patterns], null);
}
});})(spec,cache_QMARK_,b2__22159__auto__,as__QMARK_qname_27075,always_27076,never_27077,ns_QMARK__27078,input_str_BANG__27079,wild_str__GT__QMARK_re_pattern_27080))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentVector.EMPTY], null),spec);
var fixed_strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25741,(0),null);
var re_patterns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25741,(1),null);
var fx_match = cljs.core.not_empty(fixed_strs);
var re_match = (function (){var b2__22159__auto____$1 = cljs.core.not_empty(re_patterns);
if(cljs.core.truth_(b2__22159__auto____$1)){
var re_patterns__$1 = b2__22159__auto____$1;
var f = ((function (spec,cache_QMARK_,re_patterns__$1,b2__22159__auto____$1,vec__25741,fixed_strs,re_patterns,fx_match,b2__22159__auto__,as__QMARK_qname_27075,always_27076,never_27077,ns_QMARK__27078,input_str_BANG__27079,wild_str__GT__QMARK_re_pattern_27080){
return (function taoensso$encore$compile__GT_match_fn_$_match_QMARK_(in_str){
return taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2(((function (spec,cache_QMARK_,re_patterns__$1,b2__22159__auto____$1,vec__25741,fixed_strs,re_patterns,fx_match,b2__22159__auto__,as__QMARK_qname_27075,always_27076,never_27077,ns_QMARK__27078,input_str_BANG__27079,wild_str__GT__QMARK_re_pattern_27080){
return (function (p1__25737_SHARP_){
return cljs.core.re_find(p1__25737_SHARP_,in_str);
});})(spec,cache_QMARK_,re_patterns__$1,b2__22159__auto____$1,vec__25741,fixed_strs,re_patterns,fx_match,b2__22159__auto__,as__QMARK_qname_27075,always_27076,never_27077,ns_QMARK__27078,input_str_BANG__27079,wild_str__GT__QMARK_re_pattern_27080))
,re_patterns__$1);
});})(spec,cache_QMARK_,re_patterns__$1,b2__22159__auto____$1,vec__25741,fixed_strs,re_patterns,fx_match,b2__22159__auto__,as__QMARK_qname_27075,always_27076,never_27077,ns_QMARK__27078,input_str_BANG__27079,wild_str__GT__QMARK_re_pattern_27080))
;
if(cljs.core.truth_(cache_QMARK_)){
return taoensso.encore.fmemoize(f);
} else {
return f;
}
} else {
return null;
}
})();
if(cljs.core.truth_((function (){var and__5000__auto__ = fx_match;
if(cljs.core.truth_(and__5000__auto__)){
return re_match;
} else {
return and__5000__auto__;
}
})())){
return ((function (spec,cache_QMARK_,vec__25741,fixed_strs,re_patterns,fx_match,re_match,b2__22159__auto__,as__QMARK_qname_27075,always_27076,never_27077,ns_QMARK__27078,input_str_BANG__27079,wild_str__GT__QMARK_re_pattern_27080){
return (function taoensso$encore$compile__GT_match_fn_$_match_QMARK_(in$){
var in_str = input_str_BANG__27079(in$);
var or__5002__auto__ = (fx_match.cljs$core$IFn$_invoke$arity$1 ? fx_match.cljs$core$IFn$_invoke$arity$1(in_str) : fx_match.call(null, in_str));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (re_match.cljs$core$IFn$_invoke$arity$1 ? re_match.cljs$core$IFn$_invoke$arity$1(in_str) : re_match.call(null, in_str));
}
});
;})(spec,cache_QMARK_,vec__25741,fixed_strs,re_patterns,fx_match,re_match,b2__22159__auto__,as__QMARK_qname_27075,always_27076,never_27077,ns_QMARK__27078,input_str_BANG__27079,wild_str__GT__QMARK_re_pattern_27080))
} else {
if(cljs.core.truth_(fx_match)){
return ((function (spec,cache_QMARK_,vec__25741,fixed_strs,re_patterns,fx_match,re_match,b2__22159__auto__,as__QMARK_qname_27075,always_27076,never_27077,ns_QMARK__27078,input_str_BANG__27079,wild_str__GT__QMARK_re_pattern_27080){
return (function taoensso$encore$compile__GT_match_fn_$_match_QMARK_(in$){
var G__25748 = input_str_BANG__27079(in$);
return (fx_match.cljs$core$IFn$_invoke$arity$1 ? fx_match.cljs$core$IFn$_invoke$arity$1(G__25748) : fx_match.call(null, G__25748));
});
;})(spec,cache_QMARK_,vec__25741,fixed_strs,re_patterns,fx_match,re_match,b2__22159__auto__,as__QMARK_qname_27075,always_27076,never_27077,ns_QMARK__27078,input_str_BANG__27079,wild_str__GT__QMARK_re_pattern_27080))
} else {
if(cljs.core.truth_(re_match)){
return ((function (spec,cache_QMARK_,vec__25741,fixed_strs,re_patterns,fx_match,re_match,b2__22159__auto__,as__QMARK_qname_27075,always_27076,never_27077,ns_QMARK__27078,input_str_BANG__27079,wild_str__GT__QMARK_re_pattern_27080){
return (function taoensso$encore$compile__GT_match_fn_$_match_QMARK_(in$){
return re_match(input_str_BANG__27079(in$));
});
;})(spec,cache_QMARK_,vec__25741,fixed_strs,re_patterns,fx_match,re_match,b2__22159__auto__,as__QMARK_qname_27075,always_27076,never_27077,ns_QMARK__27078,input_str_BANG__27079,wild_str__GT__QMARK_re_pattern_27080))
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("[encore/cond!] No matching clause",cljs.core.PersistentArrayMap.EMPTY);
}
}
}
}
}
} else {
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Symbol("taoensso.encore","name-filter","taoensso.encore/name-filter",-2070485905,null),new cljs.core.Keyword(null,"param","param",2013631823),new cljs.core.Symbol(null,"filter-spec","filter-spec",539212879,null),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"set","set",1945134081,null),"null",new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),"null",new cljs.core.Symbol(null,"symbol","symbol",601958831,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"keyword","keyword",-1843046022,null),"null",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Symbol(null,"<spec>","<spec>",1165019597,null),new cljs.core.Keyword(null,"disallow","disallow",-861898595),new cljs.core.Symbol(null,"<spec>","<spec>",1165019597,null)], null),"null",new cljs.core.Symbol(null,"regex","regex",-1714946913,null),"null"], null), null)], null));
}
}
}
}
}
}
break;
}
});
/**
 * Given filter `spec`, returns a compiled (fn match? [x]) that:
 *    - Takes a string, keyword, symbol, or namespace.
 *    - Returns true iff input matches spec.
 * 
 *  Useful for efficiently filtering namespaces, class names, id kws, etc.
 * 
 *  Spec may be:
 *    - A namespace     to match exactly
 *    - A regex pattern to match
 *    - A str/kw/sym    to match, with "*" and "(.*)" as wildcards:
 *      "foo.*"   will match "foo.bar"
 *      "foo(.*)" will match "foo.bar" and "foo"
 *      If you need literal "*"s, use #"\*" regex instead.
 * 
 *    - A set/vector of the above to match any
 *    - A map, {:allow <spec> :disallow <spec>} with specs as the above:
 *      If present,    `:allow` spec MUST     match, AND
 *      If present, `:disallow` spec MUST NOT match.
 * 
 *  Spec examples:
 *    *ns*, #{}, "*", "foo.bar", "foo.bar.*", "foo.bar(.*)",
 *    #{"foo" "bar.*"}, #"(foo1|foo2)\.bar",
 *    {:allow #{"foo" "bar.*"} :disallow #{"foo.*.bar.*"}}.
 */
taoensso.encore.name_filter = (function taoensso$encore$name_filter(spec){
while(true){
if(cljs.core.map_QMARK_(spec)){
var cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"cache?","cache?",-1601953949));
var allow_spec = (function (){var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"whitelist","whitelist",-979294437));
}
})();
var disallow_spec = (function (){var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"disallow","disallow",-861898595));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"blacklist","blacklist",1248093170));
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"deny","deny",1589338523));
}
}
})();
var allow = (function (){var b2__22159__auto__ = allow_spec;
if(cljs.core.truth_(b2__22159__auto__)){
var as = b2__22159__auto__;
return compile__GT_match_fn_27081(as,cache_QMARK_);
} else {
return null;
}
})();
var disallow = (function (){var b2__22159__auto__ = disallow_spec;
if(cljs.core.truth_(b2__22159__auto__)){
var ds = b2__22159__auto__;
return compile__GT_match_fn_27081(ds,cache_QMARK_);
} else {
return null;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(disallow,always_27076)){
return never_27077;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(allow,never_27077)){
return never_27077;
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = allow;
if(cljs.core.truth_(and__5000__auto__)){
return disallow;
} else {
return and__5000__auto__;
}
})())){
return ((function (spec,cache_QMARK_,allow_spec,disallow_spec,allow,disallow,as__QMARK_qname_27075,always_27076,never_27077,ns_QMARK__27078,input_str_BANG__27079,wild_str__GT__QMARK_re_pattern_27080,compile__GT_match_fn_27081){
return (function taoensso$encore$name_filter_$_match_QMARK_(in$){
if((allow.cljs$core$IFn$_invoke$arity$1 ? allow.cljs$core$IFn$_invoke$arity$1(in$) : allow.call(null, in$))){
if((disallow.cljs$core$IFn$_invoke$arity$1 ? disallow.cljs$core$IFn$_invoke$arity$1(in$) : disallow.call(null, in$))){
return false;
} else {
return true;
}
} else {
return false;
}
});
;})(spec,cache_QMARK_,allow_spec,disallow_spec,allow,disallow,as__QMARK_qname_27075,always_27076,never_27077,ns_QMARK__27078,input_str_BANG__27079,wild_str__GT__QMARK_re_pattern_27080,compile__GT_match_fn_27081))
} else {
if(cljs.core.truth_(allow)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(allow,always_27076)){
return always_27076;
} else {
return ((function (spec,cache_QMARK_,allow_spec,disallow_spec,allow,disallow,as__QMARK_qname_27075,always_27076,never_27077,ns_QMARK__27078,input_str_BANG__27079,wild_str__GT__QMARK_re_pattern_27080,compile__GT_match_fn_27081){
return (function taoensso$encore$name_filter_$_match_QMARK_(in$){
if(allow(in$)){
return true;
} else {
return false;
}
});
;})(spec,cache_QMARK_,allow_spec,disallow_spec,allow,disallow,as__QMARK_qname_27075,always_27076,never_27077,ns_QMARK__27078,input_str_BANG__27079,wild_str__GT__QMARK_re_pattern_27080,compile__GT_match_fn_27081))
}
} else {
if(cljs.core.truth_(disallow)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(disallow,never_27077)){
return always_27076;
} else {
return ((function (spec,cache_QMARK_,allow_spec,disallow_spec,allow,disallow,as__QMARK_qname_27075,always_27076,never_27077,ns_QMARK__27078,input_str_BANG__27079,wild_str__GT__QMARK_re_pattern_27080,compile__GT_match_fn_27081){
return (function taoensso$encore$name_filter_$_match_QMARK_(in$){
if(disallow(in$)){
return false;
} else {
return true;
}
});
;})(spec,cache_QMARK_,allow_spec,disallow_spec,allow,disallow,as__QMARK_qname_27075,always_27076,never_27077,ns_QMARK__27078,input_str_BANG__27079,wild_str__GT__QMARK_re_pattern_27080,compile__GT_match_fn_27081))
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("[encore/name-filter] `allow-spec` and `disallow-spec` cannot both be nil",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"allow-spec","allow-spec",448749872),allow_spec,new cljs.core.Keyword(null,"disallow-spec","disallow-spec",-16464308),disallow_spec], null));
}
}
}
}
}
} else {
var G__27094 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"allow","allow",-1857325745),spec,new cljs.core.Keyword(null,"disallow","disallow",-861898595),null], null);
spec = G__27094;
continue;
}
break;
}
});

/**
 * @interface
 */
taoensso.encore.ITimeoutImpl = function(){};

var taoensso$encore$ITimeoutImpl$_schedule_timeout$dyn_27095 = (function (_,msecs,f){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (taoensso.encore._schedule_timeout[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(_,msecs,f) : m__5351__auto__.call(null, _,msecs,f));
} else {
var m__5349__auto__ = (taoensso.encore._schedule_timeout["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(_,msecs,f) : m__5349__auto__.call(null, _,msecs,f));
} else {
throw cljs.core.missing_protocol("ITimeoutImpl.-schedule-timeout",_);
}
}
});
taoensso.encore._schedule_timeout = (function taoensso$encore$_schedule_timeout(_,msecs,f){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 == null)))))){
return _.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3(_,msecs,f);
} else {
return taoensso$encore$ITimeoutImpl$_schedule_timeout$dyn_27095(_,msecs,f);
}
});



/**
* @constructor
 * @implements {taoensso.encore.ITimeoutImpl}
*/
taoensso.encore.DefaultTimeoutImpl = (function (){
});
(taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 = (function (_,msecs,f){
var self__ = this;
var ___$1 = this;
return setTimeout(f,msecs);
}));

(taoensso.encore.DefaultTimeoutImpl.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(taoensso.encore.DefaultTimeoutImpl.cljs$lang$type = true);

(taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorStr = "taoensso.encore/DefaultTimeoutImpl");

(taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.encore/DefaultTimeoutImpl");
}));

/**
 * Positional factory function for taoensso.encore/DefaultTimeoutImpl.
 */
taoensso.encore.__GT_DefaultTimeoutImpl = (function taoensso$encore$__GT_DefaultTimeoutImpl(){
return (new taoensso.encore.DefaultTimeoutImpl());
});


if((typeof taoensso !== 'undefined') && (typeof taoensso.encore !== 'undefined') && (typeof taoensso.encore.default_timeout_impl_ !== 'undefined')){
} else {
/**
 * Simple one-timeout timeout implementation provided by platform timer.
 *  O(logn) add, O(1) cancel, O(1) tick. Fns must be non-blocking or cheap.
 *  Similar efficiency to core.async timers (binary heap vs DelayQueue).
 */
taoensso.encore.default_timeout_impl_ = (new cljs.core.Delay((function (){
return (new taoensso.encore.DefaultTimeoutImpl());
}),null));
}

/**
 * @interface
 */
taoensso.encore.ITimeoutFuture = function(){};

var taoensso$encore$ITimeoutFuture$tf_state$dyn_27096 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (taoensso.encore.tf_state[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (taoensso.encore.tf_state["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-state",_);
}
}
});
/**
 * Returns a map of timeout's public state.
 */
taoensso.encore.tf_state = (function taoensso$encore$tf_state(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_state$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_state$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_state$dyn_27096(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_poll$dyn_27097 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (taoensso.encore.tf_poll[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (taoensso.encore.tf_poll["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-poll",_);
}
}
});
/**
 * Returns :timeout/pending, :timeout/cancelled, or the timeout's completed result.
 */
taoensso.encore.tf_poll = (function taoensso$encore$tf_poll(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_poll$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_poll$dyn_27097(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_done_QMARK_$dyn_27098 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (taoensso.encore.tf_done_QMARK_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (taoensso.encore.tf_done_QMARK_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-done?",_);
}
}
});
/**
 * Returns true iff the timeout is not pending (i.e. has a completed result or is cancelled).
 */
taoensso.encore.tf_done_QMARK_ = (function taoensso$encore$tf_done_QMARK_(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_done_QMARK_$dyn_27098(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$dyn_27099 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (taoensso.encore.tf_pending_QMARK_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (taoensso.encore.tf_pending_QMARK_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-pending?",_);
}
}
});
/**
 * Returns true iff the timeout is pending.
 */
taoensso.encore.tf_pending_QMARK_ = (function taoensso$encore$tf_pending_QMARK_(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$dyn_27099(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$dyn_27102 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (taoensso.encore.tf_cancelled_QMARK_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (taoensso.encore.tf_cancelled_QMARK_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-cancelled?",_);
}
}
});
/**
 * Returns true iff the timeout is cancelled.
 */
taoensso.encore.tf_cancelled_QMARK_ = (function taoensso$encore$tf_cancelled_QMARK_(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$dyn_27102(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$dyn_27104 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (taoensso.encore.tf_cancel_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (taoensso.encore.tf_cancel_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-cancel!",_);
}
}
});
/**
 * Returns true iff the timeout was successfully cancelled (i.e. was previously pending).
 */
taoensso.encore.tf_cancel_BANG_ = (function taoensso$encore$tf_cancel_BANG_(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$dyn_27104(_);
}
});


/**
* @constructor
 * @implements {taoensso.encore.ITimeoutFuture}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.TimeoutFuture = (function (f,result__,udt){
this.f = f;
this.result__ = result__;
this.udt = udt;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
});
(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.f,new cljs.core.Keyword(null,"udt","udt",2011712751),self__.udt], null);
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.result__);
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (!(cljs.core.keyword_identical_QMARK_(cljs.core.deref(self__.result__),new cljs.core.Keyword("timeout","pending","timeout/pending",-1523854352))));
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.keyword_identical_QMARK_(cljs.core.deref(self__.result__),new cljs.core.Keyword("timeout","pending","timeout/pending",-1523854352));
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.keyword_identical_QMARK_(cljs.core.deref(self__.result__),new cljs.core.Keyword("timeout","cancelled","timeout/cancelled",1188007279));
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.compare_and_set_BANG_(self__.result__,new cljs.core.Keyword("timeout","pending","timeout/pending",-1523854352),new cljs.core.Keyword("timeout","cancelled","timeout/cancelled",1188007279));
}));

(taoensso.encore.TimeoutFuture.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return t__$1.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1(null, );
}));

(taoensso.encore.TimeoutFuture.prototype.cljs$core$IDeref$_deref$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return t__$1.taoensso$encore$ITimeoutFuture$tf_poll$arity$1(null, );
}));

(taoensso.encore.TimeoutFuture.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"result__","result__",1529131748,null),new cljs.core.Symbol(null,"udt","udt",-642723018,null)], null);
}));

(taoensso.encore.TimeoutFuture.cljs$lang$type = true);

(taoensso.encore.TimeoutFuture.cljs$lang$ctorStr = "taoensso.encore/TimeoutFuture");

(taoensso.encore.TimeoutFuture.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.encore/TimeoutFuture");
}));

/**
 * Positional factory function for taoensso.encore/TimeoutFuture.
 */
taoensso.encore.__GT_TimeoutFuture = (function taoensso$encore$__GT_TimeoutFuture(f,result__,udt){
return (new taoensso.encore.TimeoutFuture(f,result__,udt));
});

taoensso.encore.timeout_future_QMARK_ = (function taoensso$encore$timeout_future_QMARK_(x){
return (x instanceof taoensso.encore.TimeoutFuture);
});
/**
 * Alpha, subject to change.
 *   Returns a TimeoutFuture that will execute `f` after given msecs.
 * 
 *   Does NOT do any automatic binding conveyance.
 * 
 *   Performance depends on the provided timer implementation (`impl_`).
 *   The default implementation offers O(logn) add, O(1) cancel, O(1) tick.
 * 
 *   See `ITimeoutImpl` for extending to arbitrary timer implementations.
 */
taoensso.encore.call_after_timeout = (function taoensso$encore$call_after_timeout(var_args){
var G__25750 = arguments.length;
switch (G__25750) {
case 2:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2 = (function (msecs,f){
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3(taoensso.encore.default_timeout_impl_,msecs,f);
}));

(taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3 = (function (impl_,msecs,f){
var msecs__$1 = cljs.core.long$(msecs);
var udt = (taoensso.encore.now_udt() + msecs__$1);
var result__ = taoensso.encore.latom(new cljs.core.Keyword("timeout","pending","timeout/pending",-1523854352));
var cas_f = (function (){
var result_ = (new cljs.core.Delay((function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));
}),null));
if(cljs.core.compare_and_set_BANG_(result__,new cljs.core.Keyword("timeout","pending","timeout/pending",-1523854352),result_)){
return cljs.core.deref(result_);
} else {
return null;
}
});
var impl_27106 = cljs.core.force(impl_);
taoensso.encore._schedule_timeout(impl_27106,msecs__$1,cas_f);

return (new taoensso.encore.TimeoutFuture(f,result__,udt));
}));

(taoensso.encore.call_after_timeout.cljs$lang$maxFixedArity = 3);

taoensso.encore.js__QMARK_win = taoensso.encore.js__QMARK_window;
/**
 * Prefer `latom`.
 */
taoensso.encore._swap_val_BANG_ = (function taoensso$encore$_swap_val_BANG_(atom_,k,f){
while(true){
var m0 = cljs.core.deref(atom_);
var v1 = (function (){var G__25757 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m0,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25757) : f.call(null, G__25757));
})();
var m1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1);
if(cljs.core.compare_and_set_BANG_(atom_,m0,m1)){
return v1;
} else {
continue;
}
break;
}
});

taoensso.encore.regular_num_QMARK_ = taoensso.encore.finite_num_QMARK_;

taoensso.encore.get_window_location = taoensso.encore.get_win_loc;

taoensso.encore.backport_run_BANG_ = taoensso.encore.run_BANG_;

taoensso.encore.fq_name = taoensso.encore.as_qname;

taoensso.encore.qname = taoensso.encore.as_qname;

taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;

taoensso.encore.merge_deep = taoensso.encore.nested_merge;

taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;

taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;

taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;

taoensso.encore.swapped_STAR_ = taoensso.encore.swapped;

taoensso.encore.memoize_a0_ = taoensso.encore.memoize;

taoensso.encore.memoize_a1_ = taoensso.encore.memoize;

taoensso.encore.a0_memoize_ = taoensso.encore.memoize;

taoensso.encore.a1_memoize_ = taoensso.encore.memoize;

taoensso.encore.memoize_1 = taoensso.encore.memoize_last;

taoensso.encore.memoize1 = taoensso.encore.memoize_last;

taoensso.encore.memoize_STAR_ = taoensso.encore.memoize;

taoensso.encore.memoize_ = taoensso.encore.memoize;

taoensso.encore.nnil_QMARK_ = taoensso.encore.some_QMARK_;

taoensso.encore.nneg_num_QMARK_ = taoensso.encore.nat_num_QMARK_;

taoensso.encore.nneg_int_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.nneg_float_QMARK_ = taoensso.encore.nat_float_QMARK_;

taoensso.encore.uint_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.pint_QMARK_ = taoensso.encore.pos_int_QMARK_;

taoensso.encore.nnil_EQ_ = taoensso.encore.some_EQ_;

taoensso.encore.as__QMARK_uint = taoensso.encore.as__QMARK_nat_int;

taoensso.encore.as__QMARK_pint = taoensso.encore.as__QMARK_pos_int;

taoensso.encore.as__QMARK_ufloat = taoensso.encore.as__QMARK_nat_float;

taoensso.encore.as__QMARK_pfloat = taoensso.encore.as__QMARK_pos_float;

taoensso.encore.as_uint = taoensso.encore.as_nat_int;

taoensso.encore.as_pint = taoensso.encore.as_pos_int;

taoensso.encore.as_ufloat = taoensso.encore.as_nat_float;

taoensso.encore.as_pfloat = taoensso.encore.as_pos_float;

taoensso.encore.run_BANG__STAR_ = taoensso.encore.run_BANG_;

taoensso.encore.nano_time = taoensso.encore.now_nano;

taoensso.encore._swap_cache_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore._unswapped = taoensso.encore.swapped_vec;

taoensso.encore._vswapped = taoensso.encore.swapped_vec;

taoensso.encore._swap_k_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore.update_in_STAR_ = taoensso.encore.update_in;

taoensso.encore.idx_fn = taoensso.encore.counter;

taoensso.encore.vec_STAR_ = taoensso.encore.ensure_vec;

taoensso.encore.set_STAR_ = taoensso.encore.ensure_set;

taoensso.encore.have_transducers_QMARK_ = true;

taoensso.encore.pval_QMARK_ = taoensso.encore.pnum_QMARK_;

taoensso.encore.as__QMARK_pval = taoensso.encore.as__QMARK_pnum;

taoensso.encore.as_pval = taoensso.encore.as_pnum;

var nolist_QMARK__27114 = (function (p1__25751_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY]),p1__25751_SHARP_);
});
taoensso.encore.compile_ns_filter = (function taoensso$encore$compile_ns_filter(var_args){
var G__25759 = arguments.length;
switch (G__25759) {
case 1:
return taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$1 = (function (ns_pattern){
return taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$2(ns_pattern,null);
}));

(taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$2 = (function (whitelist,blacklist){
if(((nolist_QMARK__27114(whitelist)) && (nolist_QMARK__27114(blacklist)))){
return (function (_){
return true;
});
} else {
return taoensso.encore.name_filter(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"allow","allow",-1857325745),whitelist,new cljs.core.Keyword(null,"disallow","disallow",-861898595),blacklist], null));
}
}));

(taoensso.encore.compile_ns_filter.cljs$lang$maxFixedArity = 2);


taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});

taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.nil__GT_str,xs));
});

taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.undefined__GT_nil,xs));
});

taoensso.encore.approx_EQ_ = (function taoensso$encore$approx_EQ_(var_args){
var G__25761 = arguments.length;
switch (G__25761) {
case 2:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
}));

(taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,signf){
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3(signf,x,y);
}));

(taoensso.encore.approx_EQ_.cljs$lang$maxFixedArity = 3);


taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__5732__auto__ = [];
var len__5726__auto___27120 = arguments.length;
var i__5727__auto___27121 = (0);
while(true){
if((i__5727__auto___27121 < len__5726__auto___27120)){
args__5732__auto__.push((arguments[i__5727__auto___27121]));

var G__27122 = (i__5727__auto___27121 + (1));
i__5727__auto___27121 = G__27122;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (sep,coll){
return taoensso.encore.str_join_once(sep,coll);
}));

(taoensso.encore.join_once.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.join_once.cljs$lang$applyTo = (function (seq25762){
var G__25763 = cljs.core.first(seq25762);
var seq25762__$1 = cljs.core.next(seq25762);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25763,seq25762__$1);
}));


taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(taoensso.encore.ensure_set(x),null);
});

taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_(ks,m);
});

taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_(ks,m);
});

taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_(ks,m);
});

taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_(ks,m);
});

taoensso.encore.logging_level = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"debug","debug",-1608172596));

taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___27123 = arguments.length;
var i__5727__auto___27124 = (0);
while(true){
if((i__5727__auto___27124 < len__5726__auto___27123)){
args__5732__auto__.push((arguments[i__5727__auto___27124]));

var G__27125 = (i__5727__auto___27124 + (1));
i__5727__auto___27124 = G__27125;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__25766){
var vec__25767 = p__25766;
var nattempt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25767,(0),null);
return setTimeout(nullary_f,taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = nattempt;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})()));
}));

(taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq25764){
var G__25765 = cljs.core.first(seq25764);
var seq25764__$1 = cljs.core.next(seq25764);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25765,seq25764__$1);
}));


if((typeof taoensso !== 'undefined') && (typeof taoensso.encore !== 'undefined') && (typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined')){
} else {
taoensso.encore._STAR_log_level_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596);
}

taoensso.encore.log_QMARK_ = (function (){var __GT_n = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"trace","trace",-1082747415),(1),new cljs.core.Keyword(null,"debug","debug",-1608172596),(2),new cljs.core.Keyword(null,"info","info",-317069002),(3),new cljs.core.Keyword(null,"warn","warn",-436710552),(4),new cljs.core.Keyword(null,"error","error",-978969032),(5),new cljs.core.Keyword(null,"fatal","fatal",1874419888),(6),new cljs.core.Keyword(null,"report","report",1394055010),(7)], null);
return (function (level){
return ((__GT_n.cljs$core$IFn$_invoke$arity$1 ? __GT_n.cljs$core$IFn$_invoke$arity$1(level) : __GT_n.call(null, level)) >= (__GT_n.cljs$core$IFn$_invoke$arity$1 ? __GT_n.cljs$core$IFn$_invoke$arity$1(taoensso.encore._STAR_log_level_STAR_) : __GT_n.call(null, taoensso.encore._STAR_log_level_STAR_)));
});
})();

taoensso.encore.tracef = (function taoensso$encore$tracef(var_args){
var args__5732__auto__ = [];
var len__5726__auto___27127 = arguments.length;
var i__5727__auto___27128 = (0);
while(true){
if((i__5727__auto___27128 < len__5726__auto___27127)){
args__5732__auto__.push((arguments[i__5727__auto___27128]));

var G__27129 = (i__5727__auto___27128 + (1));
i__5727__auto___27128 = G__27129;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_(new cljs.core.Keyword(null,"trace","trace",-1082747415)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
}));

(taoensso.encore.tracef.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.tracef.cljs$lang$applyTo = (function (seq25770){
var G__25771 = cljs.core.first(seq25770);
var seq25770__$1 = cljs.core.next(seq25770);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25771,seq25770__$1);
}));


taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__5732__auto__ = [];
var len__5726__auto___27130 = arguments.length;
var i__5727__auto___27131 = (0);
while(true){
if((i__5727__auto___27131 < len__5726__auto___27130)){
args__5732__auto__.push((arguments[i__5727__auto___27131]));

var G__27132 = (i__5727__auto___27131 + (1));
i__5727__auto___27131 = G__27132;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_(new cljs.core.Keyword(null,"debug","debug",-1608172596)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
}));

(taoensso.encore.debugf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.debugf.cljs$lang$applyTo = (function (seq25772){
var G__25773 = cljs.core.first(seq25772);
var seq25772__$1 = cljs.core.next(seq25772);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25773,seq25772__$1);
}));


taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__5732__auto__ = [];
var len__5726__auto___27133 = arguments.length;
var i__5727__auto___27134 = (0);
while(true){
if((i__5727__auto___27134 < len__5726__auto___27133)){
args__5732__auto__.push((arguments[i__5727__auto___27134]));

var G__27135 = (i__5727__auto___27134 + (1));
i__5727__auto___27134 = G__27135;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_(new cljs.core.Keyword(null,"info","info",-317069002)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
}));

(taoensso.encore.infof.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.infof.cljs$lang$applyTo = (function (seq25774){
var G__25775 = cljs.core.first(seq25774);
var seq25774__$1 = cljs.core.next(seq25774);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25775,seq25774__$1);
}));


taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__5732__auto__ = [];
var len__5726__auto___27137 = arguments.length;
var i__5727__auto___27138 = (0);
while(true){
if((i__5727__auto___27138 < len__5726__auto___27137)){
args__5732__auto__.push((arguments[i__5727__auto___27138]));

var G__27139 = (i__5727__auto___27138 + (1));
i__5727__auto___27138 = G__27139;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_(new cljs.core.Keyword(null,"warn","warn",-436710552)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,["WARN: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
}));

(taoensso.encore.warnf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.warnf.cljs$lang$applyTo = (function (seq25776){
var G__25777 = cljs.core.first(seq25776);
var seq25776__$1 = cljs.core.next(seq25776);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25777,seq25776__$1);
}));


taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__5732__auto__ = [];
var len__5726__auto___27140 = arguments.length;
var i__5727__auto___27141 = (0);
while(true){
if((i__5727__auto___27141 < len__5726__auto___27140)){
args__5732__auto__.push((arguments[i__5727__auto___27141]));

var G__27142 = (i__5727__auto___27141 + (1));
i__5727__auto___27141 = G__27142;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_(new cljs.core.Keyword(null,"error","error",-978969032)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,["ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
}));

(taoensso.encore.errorf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.errorf.cljs$lang$applyTo = (function (seq25778){
var G__25779 = cljs.core.first(seq25778);
var seq25778__$1 = cljs.core.next(seq25778);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25779,seq25778__$1);
}));


taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__5732__auto__ = [];
var len__5726__auto___27143 = arguments.length;
var i__5727__auto___27144 = (0);
while(true){
if((i__5727__auto___27144 < len__5726__auto___27143)){
args__5732__auto__.push((arguments[i__5727__auto___27144]));

var G__27145 = (i__5727__auto___27144 + (1));
i__5727__auto___27144 = G__27145;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_(new cljs.core.Keyword(null,"fatal","fatal",1874419888)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,["FATAL: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
}));

(taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq25780){
var G__25781 = cljs.core.first(seq25780);
var seq25780__$1 = cljs.core.next(seq25780);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25781,seq25780__$1);
}));


taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__5732__auto__ = [];
var len__5726__auto___27147 = arguments.length;
var i__5727__auto___27148 = (0);
while(true){
if((i__5727__auto___27148 < len__5726__auto___27147)){
args__5732__auto__.push((arguments[i__5727__auto___27148]));

var G__27149 = (i__5727__auto___27148 + (1));
i__5727__auto___27148 = G__27149;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_(new cljs.core.Keyword(null,"report","report",1394055010)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
}));

(taoensso.encore.reportf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.reportf.cljs$lang$applyTo = (function (seq25782){
var G__25783 = cljs.core.first(seq25782);
var seq25782__$1 = cljs.core.next(seq25782);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25783,seq25782__$1);
}));


taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__5732__auto__ = [];
var len__5726__auto___27151 = arguments.length;
var i__5727__auto___27152 = (0);
while(true){
if((i__5727__auto___27152 < len__5726__auto___27151)){
args__5732__auto__.push((arguments[i__5727__auto___27152]));

var G__27153 = (i__5727__auto___27152 + (1));
i__5727__auto___27152 = G__27153;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__25786){
var vec__25787 = p__25786;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25787,(0),null);
var comparator = (function (){var or__5002__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__25753_SHARP_,p2__25754_SHARP_){
if((cljs.core.long$((comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(p1__25753_SHARP_,p2__25754_SHARP_) : comparator.call(null, p1__25753_SHARP_,p2__25754_SHARP_))) > (0))){
return p2__25754_SHARP_;
} else {
return p1__25753_SHARP_;
}
}),coll);
}));

(taoensso.encore.greatest.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.greatest.cljs$lang$applyTo = (function (seq25784){
var G__25785 = cljs.core.first(seq25784);
var seq25784__$1 = cljs.core.next(seq25784);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25785,seq25784__$1);
}));


taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__5732__auto__ = [];
var len__5726__auto___27154 = arguments.length;
var i__5727__auto___27155 = (0);
while(true){
if((i__5727__auto___27155 < len__5726__auto___27154)){
args__5732__auto__.push((arguments[i__5727__auto___27155]));

var G__27156 = (i__5727__auto___27155 + (1));
i__5727__auto___27155 = G__27156;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__25792){
var vec__25793 = p__25792;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25793,(0),null);
var comparator = (function (){var or__5002__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__25755_SHARP_,p2__25756_SHARP_){
if((cljs.core.long$((comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(p1__25755_SHARP_,p2__25756_SHARP_) : comparator.call(null, p1__25755_SHARP_,p2__25756_SHARP_))) < (0))){
return p2__25756_SHARP_;
} else {
return p1__25755_SHARP_;
}
}),coll);
}));

(taoensso.encore.least.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.least.cljs$lang$applyTo = (function (seq25790){
var G__25791 = cljs.core.first(seq25790);
var seq25790__$1 = cljs.core.next(seq25790);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25791,seq25790__$1);
}));


/**
 * Ref. <http://goo.gl/0GzRuz>
 */
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__5002__auto__ = x;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Prefer `xdistinct`.
 */
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__25796,seen__$1){
while(true){
var vec__25797 = p__25796;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25797,(0),null);
var xs__$1 = vec__25797;
var b2__22159__auto__ = cljs.core.seq(xs__$1);
if(b2__22159__auto__){
var s = b2__22159__auto__;
var v_STAR_ = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(v) : keyfn.call(null, v));
if(cljs.core.contains_QMARK_(seen__$1,v_STAR_)){
var G__27161 = cljs.core.rest(s);
var G__27162 = seen__$1;
p__25796 = G__27161;
seen__$1 = G__27162;
continue;
} else {
return cljs.core.cons(v,taoensso$encore$distinct_by_$_step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
})(xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});

/**
 * Prefer `xdistinct`.
 */
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var G__25801 = arguments.length;
switch (G__25801) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,coll);
}));

(taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
var tr = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__25802,in$){
var vec__25803 = p__25802;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25803,(0),null);
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25803,(1),null);
var in_STAR_ = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(in$) : keyfn.call(null, in$));
if(cljs.core.contains_QMARK_(seen,in_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,in$),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,in_STAR_)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll);
return cljs.core.persistent_BANG_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tr,(0)));
}));

(taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2);


taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){

if(cljs.core.truth_(m)){
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf);
var kf__$1 = (((kf == null))?(function (k,_){
return k;
}):((cljs.core.keyword_identical_QMARK_(kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?(function (k,_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
}):kf));
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,(kf__$1.cljs$core$IFn$_invoke$arity$2 ? kf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : kf__$1.call(null, k,v)),(vf__$1.cljs$core$IFn$_invoke$arity$2 ? vf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : vf__$1.call(null, k,v)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__5732__auto__ = [];
var len__5726__auto___27164 = arguments.length;
var i__5727__auto___27165 = (0);
while(true){
if((i__5727__auto___27165 < len__5726__auto___27164)){
args__5732__auto__.push((arguments[i__5727__auto___27165]));

var G__27166 = (i__5727__auto___27165 + (1));
i__5727__auto___27165 = G__27166;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__25808){
var vec__25809 = p__25808;
var kf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25809,(0),null);
var vf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25809,(1),null);

if(cljs.core.empty_QMARK_(kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf);
var kf__$1 = (((kf == null))?(function (k,_){
return k;
}):((cljs.core.keyword_identical_QMARK_(kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?(function (k,_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
}):kf));
return cljs.core.persistent_BANG_(taoensso.encore.reduce_kvs((function (m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,(kf__$1.cljs$core$IFn$_invoke$arity$2 ? kf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : kf__$1.call(null, k,v)),(vf__$1.cljs$core$IFn$_invoke$arity$2 ? vf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : vf__$1.call(null, k,v)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),kvs));
}
}));

(taoensso.encore.as_map.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.as_map.cljs$lang$applyTo = (function (seq25806){
var G__25807 = cljs.core.first(seq25806);
var seq25806__$1 = cljs.core.next(seq25806);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25807,seq25806__$1);
}));


taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
return taoensso.encore.map_keys(cljs.core.keyword,m);
});

taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv(cljs.core.complement(pred),coll);
});

taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return ((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),n)));
});

taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__5732__auto__ = [];
var len__5726__auto___27169 = arguments.length;
var i__5727__auto___27170 = (0);
while(true){
if((i__5727__auto___27170 < len__5726__auto___27169)){
args__5732__auto__.push((arguments[i__5727__auto___27170]));

var G__27171 = (i__5727__auto___27170 + (1));
i__5727__auto___27170 = G__27171;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.truth_(cache)){
return cljs.core.deref(taoensso.encore._swap_val_BANG_(cache,args,(function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}),null));
}
})));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}
}));

(taoensso.encore.memoized.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.memoized.cljs$lang$applyTo = (function (seq25812){
var G__25813 = cljs.core.first(seq25812);
var seq25812__$1 = cljs.core.next(seq25812);
var G__25814 = cljs.core.first(seq25812__$1);
var seq25812__$2 = cljs.core.next(seq25812__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25813,G__25814,seq25812__$2);
}));


taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__5090__auto__ = signed_idx;
var y__5091__auto__ = max_idx;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
} else {
var x__5087__auto__ = (0);
var y__5088__auto__ = (signed_idx + max_idx);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
}
});


taoensso.encore.sentinel = ({});

taoensso.encore.sentinel_QMARK_ = (function taoensso$encore$sentinel_QMARK_(x){
return (x === taoensso.encore.sentinel);
});

taoensso.encore.nil__GT_sentinel = (function taoensso$encore$nil__GT_sentinel(x){
if((x == null)){
return taoensso.encore.sentinel;
} else {
return x;
}
});

taoensso.encore.sentinel__GT_nil = (function taoensso$encore$sentinel__GT_nil(x){
if(taoensso.encore.sentinel_QMARK_(x)){
return null;
} else {
return x;
}
});

taoensso.encore.singleton_QMARK_ = (function taoensso$encore$singleton_QMARK_(coll){
if(cljs.core.counted_QMARK_(coll)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll),(1));
} else {
return cljs.core.not(cljs.core.next(coll));
}
});

taoensso.encore.__GT__QMARK_singleton = (function taoensso$encore$__GT__QMARK_singleton(coll){
if(taoensso.encore.singleton_QMARK_(coll)){
var vec__25817 = coll;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25817,(0),null);
return c1;
} else {
return null;
}
});

taoensso.encore.__GT_vec = (function taoensso$encore$__GT_vec(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.vec(x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
}
});

taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq(ks);
var vs__$1 = cljs.core.seq(vs);
while(true){
if(((ks__$1) && (vs__$1))){
var G__27175 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,cljs.core.first(ks__$1),cljs.core.first(vs__$1));
var G__27176 = cljs.core.next(ks__$1);
var G__27177 = cljs.core.next(vs__$1);
m = G__27175;
ks__$1 = G__27176;
vs__$1 = G__27177;
continue;
} else {
return cljs.core.persistent_BANG_(m);
}
break;
}
});

taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null, k,v)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
});

taoensso.encore.remove_kvs = (function taoensso$encore$remove_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null, k,v)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});

taoensso.encore.revery = (function taoensso$encore$revery(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null, in$)))){
return coll;
} else {
return cljs.core.reduced(null);
}
}),coll,coll);
});

taoensso.encore.revery_kv = (function taoensso$encore$revery_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null, k,v)))){
return coll;
} else {
return cljs.core.reduced(null);
}
}),coll,coll);
});

taoensso.encore.every = taoensso.encore.revery;

taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__5732__auto__ = [];
var len__5726__auto___27180 = arguments.length;
var i__5727__auto___27181 = (0);
while(true){
if((i__5727__auto___27181 < len__5726__auto___27180)){
args__5732__auto__.push((arguments[i__5727__auto___27181]));

var G__27182 = (i__5727__auto___27181 + (1));
i__5727__auto___27181 = G__27182;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,_QMARK_op){
if(cljs.core.truth_(_QMARK_op)){
var vec__25822 = _QMARK_op;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25822,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25822,(1),null);
var valf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25822,(2),null);
var f = ((cljs.core.keyword_identical_QMARK_(type,new cljs.core.Keyword(null,"reset","reset",-800929946)))?(function (_){
return valf;
}):valf);
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m__$1,ks,null,f);
} else {
return m__$1;
}
}),m,ops);
}));

(taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq25820){
var G__25821 = cljs.core.first(seq25820);
var seq25820__$1 = cljs.core.next(seq25820);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25821,seq25820__$1);
}));


var return_27184 = (function (m0,v0,m1,v1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Prefer `swap-in!` with `swapped` return value.
 */
taoensso.encore.swap_in_BANG__STAR_ = (function taoensso$encore$swap_in_BANG__STAR_(var_args){
var G__25826 = arguments.length;
switch (G__25826) {
case 2:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,f){
return taoensso.encore._swap_k0_BANG_(return_27184,atom_,f);
}));

(taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_(return_27184,atom_,ks,null,f);
}));

(taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_(return_27184,atom_,ks,not_found,f);
}));

(taoensso.encore.swap_in_BANG__STAR_.cljs$lang$maxFixedArity = 4);


/**
 * Prefer `swap-val!` with `swapped` return value.
 */
taoensso.encore.swap_val_BANG__STAR_ = (function taoensso$encore$swap_val_BANG__STAR_(var_args){
var G__25828 = arguments.length;
switch (G__25828) {
case 3:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_(return_27184,atom_,k,null,f);
}));

(taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_(return_27184,atom_,k,not_found,f);
}));

(taoensso.encore.swap_val_BANG__STAR_.cljs$lang$maxFixedArity = 4);


taoensso.encore.dswap_BANG_ = taoensso.encore.swap_in_BANG__STAR_;

taoensso.encore.swap_BANG__STAR_ = taoensso.encore.swap_in_BANG__STAR_;

/**
 * Renamed to `name-filter`.
 */
taoensso.encore.compile_str_filter = taoensso.encore.name_filter;

/**
 * Prefer `identical-kw?` macro.
 */
taoensso.encore.kw_identical_QMARK_ = (function taoensso$encore$kw_identical_QMARK_(x,y){
return cljs.core.keyword_identical_QMARK_(x,y);
});

/**
 * Prefer `newline`.
 */
taoensso.encore.system_newline = "\n";

/**
 * Prefer `unexpected-arg!`
 */
taoensso.encore._unexpected_arg_BANG_ = (function taoensso$encore$_unexpected_arg_BANG_(var_args){
var G__25830 = arguments.length;
switch (G__25830) {
case 1:
return taoensso.encore._unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore._unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore._unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (arg){
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(arg,null);
}));

(taoensso.encore._unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (arg,details){
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(arg,details);
}));

(taoensso.encore._unexpected_arg_BANG_.cljs$lang$maxFixedArity = 2);


/**
 * Prefer `is`.
 */
taoensso.encore.when_QMARK_ = (function taoensso$encore$when_QMARK_(pred,x){
if(cljs.core.truth_((function (){try{return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null, x));
}catch (e25831){var _ = e25831;
return null;
}})())){
return x;
} else {
return null;
}
});

/**
 * Prefer `matching-error`.
 */
taoensso.encore._matching_error = taoensso.encore.matching_error;

/**
 * Prefer `rate-limiter`.
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(var_args){
var G__25833 = arguments.length;
switch (G__25833) {
case 1:
return taoensso.encore.rate_limiter_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.rate_limiter_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.rate_limiter_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return taoensso.encore.rate_limiter.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-state?","with-state?",1044523183),true], null),spec);
}));

(taoensso.encore.rate_limiter_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (opts,spec){
return taoensso.encore.rate_limiter.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"with-state?","with-state?",1044523183),true),spec);
}));

(taoensso.encore.rate_limiter_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Prefer `rate-limiter*`.
 */
taoensso.encore.limiter_STAR_ = taoensso.encore.rate_limiter_STAR_;

/**
 * Prefer `rate-limiter`.
 */
taoensso.encore.limiter = taoensso.encore.rate_limiter;

/**
 * Prefer `reassoc-some`.
 */
taoensso.encore.dis_assoc_some = taoensso.encore.reassoc_some;

/**
 * Prefer `println`.
 */
taoensso.encore.println_atomic = taoensso.encore.println;

/**
 * Prefer `merge-with*`.
 */
taoensso.encore._merge_with = taoensso.encore.merge_with_STAR_;

/**
 * Prefer `merge`.
 */
taoensso.encore.fast_merge = taoensso.encore.merge;

/**
 * Prefer `rand-bytes`.
 */
taoensso.encore.secure_rand_bytes = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.encore.rand_bytes,true);

/**
 * Prefer `round`.
 */
taoensso.encore.round_STAR_ = taoensso.encore.round;

/**
 * Prefer `ajax-call`.
 */
taoensso.encore.ajax_lite = taoensso.encore.ajax_call;

/**
 * Prefer `list-form`.
 */
taoensso.encore.call_form_QMARK_ = (function taoensso$encore$call_form_QMARK_(x){
return taoensso.encore.list_form_QMARK_(x);
});
/**
 * Prefer `ex-map`.
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var b2__22159__auto__ = (function (){var and__5000__auto__ = x;
if(cljs.core.truth_(and__5000__auto__)){
var or__5002__auto__ = taoensso.encore.ex_data(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(b2__22159__auto__)){
var data_map = b2__22159__auto__;
var base_map = (function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"err-type","err-type",-116717722),cljs.core.type(err),new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684),err.message,new cljs.core.Keyword(null,"err-cause","err-cause",897008749),err.cause], null);
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(base_map,data_map);
} else {
return null;
}
});
/**
 * Prefer `subvec`.
 */
taoensso.encore.get_subvec = (function taoensso$encore$get_subvec(var_args){
var G__25836 = arguments.length;
switch (G__25836) {
case 2:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var or__5002__auto__ = taoensso.encore.subvec(v,start);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
}));

(taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3 = (function (v,start,end){
var or__5002__auto__ = taoensso.encore.subvec(v,start,end);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
}));

(taoensso.encore.get_subvec.cljs$lang$maxFixedArity = 3);


/**
 * Prefer `subvec`.
 */
taoensso.encore.get_subvector = (function taoensso$encore$get_subvector(var_args){
var G__25838 = arguments.length;
switch (G__25838) {
case 2:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var or__5002__auto__ = taoensso.encore.subvec(v,new cljs.core.Keyword(null,"by-len","by-len",587837753),start,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
}));

(taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3 = (function (v,start,len){
var or__5002__auto__ = taoensso.encore.subvec(v,new cljs.core.Keyword(null,"by-len","by-len",587837753),start,len);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
}));

(taoensso.encore.get_subvector.cljs$lang$maxFixedArity = 3);


/**
 * Prefer `substr`.
 */
taoensso.encore.get_substr_by_idx = (function taoensso$encore$get_substr_by_idx(var_args){
var G__25840 = arguments.length;
switch (G__25840) {
case 2:
return taoensso.encore.get_substr_by_idx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substr_by_idx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get_substr_by_idx.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return taoensso.encore.get_substr_by_idx.cljs$core$IFn$_invoke$arity$3(s,start,null);
}));

(taoensso.encore.get_substr_by_idx.cljs$core$IFn$_invoke$arity$3 = (function (s,start,end){
var len = cljs.core.count(s);
var start__$1 = cljs.core.long$((function (){var or__5002__auto__ = start;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})());
var end__$1 = cljs.core.long$((function (){var or__5002__auto__ = end;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return len;
}
})());
var start__$2 = (((start__$1 < (0)))?(start__$1 + len):start__$1);
var end__$2 = (((end__$1 < (0)))?(end__$1 + len):end__$1);
return taoensso.encore.substr(s,new cljs.core.Keyword(null,"by-idx","by-idx",-1997587605),start__$2,end__$2);
}));

(taoensso.encore.get_substr_by_idx.cljs$lang$maxFixedArity = 3);


/**
 * Prefer `substr`.
 */
taoensso.encore.get_substr_by_len = (function taoensso$encore$get_substr_by_len(var_args){
var G__25842 = arguments.length;
switch (G__25842) {
case 2:
return taoensso.encore.get_substr_by_len.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substr_by_len.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get_substr_by_len.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return taoensso.encore.substr(s,new cljs.core.Keyword(null,"by-len","by-len",587837753),(function (){var or__5002__auto__ = start;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"max","max",61366548));
}));

(taoensso.encore.get_substr_by_len.cljs$core$IFn$_invoke$arity$3 = (function (s,start,len){
return taoensso.encore.substr(s,new cljs.core.Keyword(null,"by-len","by-len",587837753),(function (){var or__5002__auto__ = start;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})(),(function (){var or__5002__auto__ = len;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"max","max",61366548);
}
})());
}));

(taoensso.encore.get_substr_by_len.cljs$lang$maxFixedArity = 3);


/**
 * Prefer `substr`.
 */
taoensso.encore.get_substr = (function taoensso$encore$get_substr(var_args){
var G__25844 = arguments.length;
switch (G__25844) {
case 2:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
var or__5002__auto__ = taoensso.encore.substr(s,start);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
}));

(taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3 = (function (s,start,end){
var or__5002__auto__ = taoensso.encore.substr(s,start,end);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
}));

(taoensso.encore.get_substr.cljs$lang$maxFixedArity = 3);


/**
 * Prefer `substr`.
 */
taoensso.encore.get_substring = (function taoensso$encore$get_substring(var_args){
var G__25846 = arguments.length;
switch (G__25846) {
case 2:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return taoensso.encore.substr(s,new cljs.core.Keyword(null,"by-len","by-len",587837753),start,new cljs.core.Keyword(null,"max","max",61366548));
}));

(taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3 = (function (s,start,len){
return taoensso.encore.substr(s,new cljs.core.Keyword(null,"by-len","by-len",587837753),start,len);
}));

(taoensso.encore.get_substring.cljs$lang$maxFixedArity = 3);


/**
 * Prefer `subvec`.
 */
taoensso.encore._QMARK_subvec_LT_idx = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,taoensso.encore.get_subvec);

/**
 * Prefer `subvec`.
 */
taoensso.encore._QMARK_subvec_LT_len = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,taoensso.encore.get_subvector);

/**
 * Prefer `subvec`.
 */
taoensso.encore.subvec_STAR_ = taoensso.encore.get_subvector;

/**
 * Prefer `substr`.
 */
taoensso.encore._QMARK_substr_LT_idx = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substr);

/**
 * Prefer `substr`.
 */
taoensso.encore._QMARK_substr_LT_len = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substring);

//# sourceMappingURL=taoensso.encore.js.map
