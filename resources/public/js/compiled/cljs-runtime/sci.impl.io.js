goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__31804 = arguments.length;
switch (G__31804) {
case 1:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(name,null);
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true], null));
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$3 = (function (name,init_val,extra_meta){
return sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(extra_meta,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true], 0)));
}));

(sci.impl.io.core_dynamic_var.cljs$lang$maxFixedArity = 3);

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__31817 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__31818 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__31818);

try{var G__31820 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__31820);

return G__31820;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__31817);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__31821 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__31822 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__31822);

try{var G__31823 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__31823);

return G__31823;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__31821);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__31824 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__31825 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__31825);

try{var G__31826 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__31826);

return G__31826;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__31824);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__31837 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__31838 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__31838);

try{var G__31844 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__31844);

return G__31844;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__31837);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__31848 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__31849 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__31849);

try{var G__31852 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__31852);

return G__31852;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__31848);
}})();
sci.impl.io.print_meta = (new sci.lang.Var(cljs.core._STAR_print_meta_STAR_,new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"If set to logical true, when printing an object, its metadata will also\n  be printed in a form that can be read back by the reader.\n\n  Defaults to false.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_length = (new sci.lang.Var(cljs.core._STAR_print_length_STAR_,new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-length* controls how many items of each collection the\n  printer will print. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  number of items of each collection to print. If a collection contains\n  more items, the printer will print items up to the limit followed by\n  '...' to represent the remaining items. The root binding is nil\n  indicating no limit.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_level = (new sci.lang.Var(cljs.core._STAR_print_level_STAR_,new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-level* controls how many levels deep the printer will\n  print nested objects. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  level to print. Each argument to print is at level 0; if an argument is a\n  collection, its items are at level 1; and so on. If an object is a\n  collection and is at a level greater than or equal to the value bound to\n  *print-level*, the printer prints '#' to represent it. The root binding\n  is nil indicating no limit.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_namespace_maps = (new sci.lang.Var(true,new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-namespace-maps* controls whether the printer will print\n  namespace map literal syntax.\n\n  Defaults to false, but the REPL binds it to true.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.flush_on_newline = (new sci.lang.Var(cljs.core._STAR_flush_on_newline_STAR_,new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to true, output will be flushed whenever a newline is printed.\n\n  Defaults to true.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_readably = (new sci.lang.Var(cljs.core._STAR_print_readably_STAR_,new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical false, strings and characters will be printed with\n  non-alphanumeric characters converted to the appropriate escape sequences.\n\n  Defaults to true",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_dup_var = (new sci.lang.Var(cljs.core._STAR_print_dup_STAR_,new cljs.core.Symbol(null,"*print-dup*","*print-dup*",103854877,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-dup*","*print-dup*",103854877,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical true, objects will be printed in a way that preserves\n  their type when read in later.\n\n  Defaults to false.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_newline = (new sci.lang.Var(cljs.core._STAR_print_newline_STAR_,new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical false will drop newlines from printing calls.\n  This is to work around the implicit newlines emitted by standard JavaScript\n  console objects.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.string_print = (function sci$impl$io$string_print(x){
var _STAR_print_fn_STAR__orig_val__31878 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__31879 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31879);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31878);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5732__auto__ = [];
var len__5726__auto___32185 = arguments.length;
var i__5727__auto___32186 = (0);
while(true){
if((i__5727__auto___32186 < len__5726__auto___32185)){
args__5732__auto__.push((arguments[i__5727__auto___32186]));

var G__32187 = (i__5727__auto___32186 + (1));
i__5727__auto___32186 = G__32187;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__31896 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__31897 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__31898 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__31899 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__31900 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__31901 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__31902 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__31903 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__31904 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__31905 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__31906 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__31907 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__31908 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__31909 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__31910 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__31911 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31904);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__31905);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__31906);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__31907);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__31908);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__31909);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31910);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__31911);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__31903);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31902);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__31901);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__31900);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__31899);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__31898);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__31897);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31896);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq31888){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31888));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__31940 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__31941 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31941);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31940);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5732__auto__ = [];
var len__5726__auto___32193 = arguments.length;
var i__5727__auto___32194 = (0);
while(true){
if((i__5727__auto___32194 < len__5726__auto___32193)){
args__5732__auto__.push((arguments[i__5727__auto___32194]));

var G__32195 = (i__5727__auto___32194 + (1));
i__5727__auto___32194 = G__32195;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__31953 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__31954 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__31955 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__31956 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__31957 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__31958 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__31959 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__31960 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__31961 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__31962 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__31963 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__31964 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__31965 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__31966 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__31960);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__31961);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__31962);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__31963);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__31964);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31965);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__31966);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__31959);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31958);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__31957);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__31956);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__31955);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__31954);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__31953);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq31948){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31948));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5732__auto__ = [];
var len__5726__auto___32200 = arguments.length;
var i__5727__auto___32201 = (0);
while(true){
if((i__5727__auto___32201 < len__5726__auto___32200)){
args__5732__auto__.push((arguments[i__5727__auto___32201]));

var G__32202 = (i__5727__auto___32201 + (1));
i__5727__auto___32201 = G__32202;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__31995 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__31996 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__31997 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__31998 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__31999 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__32000 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__32001 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__32002 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__32003 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__32004 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__32005 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__32006 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__32007 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__32008 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__32009 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__32010 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32003);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__32004);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__32005);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__32006);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__32007);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__32008);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32009);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__32010);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__32002);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32001);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__32000);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__31999);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__31998);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__31997);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__31996);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31995);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq31980){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31980));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5732__auto__ = [];
var len__5726__auto___32206 = arguments.length;
var i__5727__auto___32207 = (0);
while(true){
if((i__5727__auto___32207 < len__5726__auto___32206)){
args__5732__auto__.push((arguments[i__5727__auto___32207]));

var G__32208 = (i__5727__auto___32207 + (1));
i__5727__auto___32207 = G__32208;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__32030 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__32031 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__32032 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__32033 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__32034 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__32035 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__32036 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__32037 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__32038 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__32039 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__32040 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__32041 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__32042 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__32043 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__32037);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__32038);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__32039);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__32040);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__32041);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32042);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__32043);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__32036);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32035);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__32034);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__32033);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__32032);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__32031);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__32030);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq32022){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32022));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5732__auto__ = [];
var len__5726__auto___32210 = arguments.length;
var i__5727__auto___32211 = (0);
while(true){
if((i__5727__auto___32211 < len__5726__auto___32210)){
args__5732__auto__.push((arguments[i__5727__auto___32211]));

var G__32212 = (i__5727__auto___32211 + (1));
i__5727__auto___32211 = G__32212;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__32056 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__32057 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__32058 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__32059 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__32060 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__32061 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__32062 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__32063 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__32064 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__32065 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__32066 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__32067 = null;
var _STAR_print_newline_STAR__temp_val__32068 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__32069 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32063);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__32064);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__32065);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__32066);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__32067);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32068);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__32069);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__32062);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32061);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__32060);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__32059);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__32058);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__32057);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32056);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq32050){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32050));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5732__auto__ = [];
var len__5726__auto___32214 = arguments.length;
var i__5727__auto___32215 = (0);
while(true){
if((i__5727__auto___32215 < len__5726__auto___32214)){
args__5732__auto__.push((arguments[i__5727__auto___32215]));

var G__32216 = (i__5727__auto___32215 + (1));
i__5727__auto___32215 = G__32216;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__32083 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__32084 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__32085 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__32086 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__32087 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__32088 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__32089 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__32090 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__32091 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__32092 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__32093 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__32094 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__32095 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__32096 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__32090);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__32091);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__32092);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__32093);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__32094);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32095);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__32096);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__32089);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32088);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__32087);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__32086);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__32085);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__32084);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__32083);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq32080){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32080));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5732__auto__ = [];
var len__5726__auto___32218 = arguments.length;
var i__5727__auto___32220 = (0);
while(true){
if((i__5727__auto___32220 < len__5726__auto___32218)){
args__5732__auto__.push((arguments[i__5727__auto___32220]));

var G__32221 = (i__5727__auto___32220 + (1));
i__5727__auto___32220 = G__32221;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__32106 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__32107 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__32108 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__32109 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__32110 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__32111 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__32112 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__32113 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__32114 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__32115 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__32116 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__32117 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__32118 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__32119 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__32120 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__32121 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32114);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__32115);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__32116);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__32117);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__32118);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__32119);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32120);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__32121);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__32113);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32112);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__32111);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__32110);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__32109);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__32108);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__32107);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32106);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq32100){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32100));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5732__auto__ = [];
var len__5726__auto___32226 = arguments.length;
var i__5727__auto___32227 = (0);
while(true){
if((i__5727__auto___32227 < len__5726__auto___32226)){
args__5732__auto__.push((arguments[i__5727__auto___32227]));

var G__32228 = (i__5727__auto___32227 + (1));
i__5727__auto___32227 = G__32228;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__32131__auto__","s__32131__auto__",701216547,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__32132__auto__","x__32132__auto__",-1814317892,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__32131__auto__","s__32131__auto__",701216547,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__32132__auto__","x__32132__auto__",-1814317892,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__32131__auto__","s__32131__auto__",701216547,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq32136){
var G__32138 = cljs.core.first(seq32136);
var seq32136__$1 = cljs.core.next(seq32136);
var G__32139 = cljs.core.first(seq32136__$1);
var seq32136__$2 = cljs.core.next(seq32136__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32138,G__32139,seq32136__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
