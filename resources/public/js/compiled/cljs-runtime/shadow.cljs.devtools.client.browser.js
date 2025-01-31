goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___45797 = arguments.length;
var i__5727__auto___45798 = (0);
while(true){
if((i__5727__auto___45798 < len__5726__auto___45797)){
args__5732__auto__.push((arguments[i__5727__auto___45798]));

var G__45799 = (i__5727__auto___45798 + (1));
i__5727__auto___45798 = G__45799;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq45499){
var G__45500 = cljs.core.first(seq45499);
var seq45499__$1 = cljs.core.next(seq45499);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45500,seq45499__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__45507 = cljs.core.seq(sources);
var chunk__45508 = null;
var count__45509 = (0);
var i__45510 = (0);
while(true){
if((i__45510 < count__45509)){
var map__45526 = chunk__45508.cljs$core$IIndexed$_nth$arity$2(null, i__45510);
var map__45526__$1 = cljs.core.__destructure_map(map__45526);
var src = map__45526__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45526__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45526__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45526__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45526__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e45528){var e_45800 = e45528;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45800);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45800.message)].join('')));
}

var G__45801 = seq__45507;
var G__45802 = chunk__45508;
var G__45803 = count__45509;
var G__45804 = (i__45510 + (1));
seq__45507 = G__45801;
chunk__45508 = G__45802;
count__45509 = G__45803;
i__45510 = G__45804;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__45507);
if(temp__5804__auto__){
var seq__45507__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45507__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__45507__$1);
var G__45805 = cljs.core.chunk_rest(seq__45507__$1);
var G__45806 = c__5525__auto__;
var G__45807 = cljs.core.count(c__5525__auto__);
var G__45808 = (0);
seq__45507 = G__45805;
chunk__45508 = G__45806;
count__45509 = G__45807;
i__45510 = G__45808;
continue;
} else {
var map__45529 = cljs.core.first(seq__45507__$1);
var map__45529__$1 = cljs.core.__destructure_map(map__45529);
var src = map__45529__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45529__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45529__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45529__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45529__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e45530){var e_45809 = e45530;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45809);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45809.message)].join('')));
}

var G__45810 = cljs.core.next(seq__45507__$1);
var G__45811 = null;
var G__45812 = (0);
var G__45813 = (0);
seq__45507 = G__45810;
chunk__45508 = G__45811;
count__45509 = G__45812;
i__45510 = G__45813;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__45532 = cljs.core.seq(js_requires);
var chunk__45533 = null;
var count__45534 = (0);
var i__45535 = (0);
while(true){
if((i__45535 < count__45534)){
var js_ns = chunk__45533.cljs$core$IIndexed$_nth$arity$2(null, i__45535);
var require_str_45814 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45814);


var G__45815 = seq__45532;
var G__45816 = chunk__45533;
var G__45817 = count__45534;
var G__45818 = (i__45535 + (1));
seq__45532 = G__45815;
chunk__45533 = G__45816;
count__45534 = G__45817;
i__45535 = G__45818;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__45532);
if(temp__5804__auto__){
var seq__45532__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45532__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__45532__$1);
var G__45819 = cljs.core.chunk_rest(seq__45532__$1);
var G__45820 = c__5525__auto__;
var G__45821 = cljs.core.count(c__5525__auto__);
var G__45822 = (0);
seq__45532 = G__45819;
chunk__45533 = G__45820;
count__45534 = G__45821;
i__45535 = G__45822;
continue;
} else {
var js_ns = cljs.core.first(seq__45532__$1);
var require_str_45823 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45823);


var G__45824 = cljs.core.next(seq__45532__$1);
var G__45825 = null;
var G__45826 = (0);
var G__45827 = (0);
seq__45532 = G__45824;
chunk__45533 = G__45825;
count__45534 = G__45826;
i__45535 = G__45827;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__45538){
var map__45539 = p__45538;
var map__45539__$1 = cljs.core.__destructure_map(map__45539);
var msg = map__45539__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45539__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45539__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45540(s__45541){
return (new cljs.core.LazySeq(null,(function (){
var s__45541__$1 = s__45541;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__45541__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__45546 = cljs.core.first(xs__6360__auto__);
var map__45546__$1 = cljs.core.__destructure_map(map__45546);
var src = map__45546__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45546__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45546__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__45541__$1,map__45546,map__45546__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__45539,map__45539__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45540_$_iter__45542(s__45543){
return (new cljs.core.LazySeq(null,((function (s__45541__$1,map__45546,map__45546__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__45539,map__45539__$1,msg,info,reload_info){
return (function (){
var s__45543__$1 = s__45543;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__45543__$1);
if(temp__5804__auto____$1){
var s__45543__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45543__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__45543__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__45545 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__45544 = (0);
while(true){
if((i__45544 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__45544);
cljs.core.chunk_append(b__45545,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__45828 = (i__45544 + (1));
i__45544 = G__45828;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45545),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45540_$_iter__45542(cljs.core.chunk_rest(s__45543__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45545),null);
}
} else {
var warning = cljs.core.first(s__45543__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45540_$_iter__45542(cljs.core.rest(s__45543__$2)));
}
} else {
return null;
}
break;
}
});})(s__45541__$1,map__45546,map__45546__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__45539,map__45539__$1,msg,info,reload_info))
,null,null));
});})(s__45541__$1,map__45546,map__45546__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__45539,map__45539__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45540(cljs.core.rest(s__45541__$1)));
} else {
var G__45829 = cljs.core.rest(s__45541__$1);
s__45541__$1 = G__45829;
continue;
}
} else {
var G__45830 = cljs.core.rest(s__45541__$1);
s__45541__$1 = G__45830;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__45547_45831 = cljs.core.seq(warnings);
var chunk__45548_45832 = null;
var count__45549_45833 = (0);
var i__45550_45834 = (0);
while(true){
if((i__45550_45834 < count__45549_45833)){
var map__45553_45835 = chunk__45548_45832.cljs$core$IIndexed$_nth$arity$2(null, i__45550_45834);
var map__45553_45836__$1 = cljs.core.__destructure_map(map__45553_45835);
var w_45837 = map__45553_45836__$1;
var msg_45838__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45553_45836__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45553_45836__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45553_45836__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45841 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45553_45836__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45841)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45839),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45840),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45838__$1)].join(''));


var G__45842 = seq__45547_45831;
var G__45843 = chunk__45548_45832;
var G__45844 = count__45549_45833;
var G__45845 = (i__45550_45834 + (1));
seq__45547_45831 = G__45842;
chunk__45548_45832 = G__45843;
count__45549_45833 = G__45844;
i__45550_45834 = G__45845;
continue;
} else {
var temp__5804__auto___45846 = cljs.core.seq(seq__45547_45831);
if(temp__5804__auto___45846){
var seq__45547_45847__$1 = temp__5804__auto___45846;
if(cljs.core.chunked_seq_QMARK_(seq__45547_45847__$1)){
var c__5525__auto___45848 = cljs.core.chunk_first(seq__45547_45847__$1);
var G__45849 = cljs.core.chunk_rest(seq__45547_45847__$1);
var G__45850 = c__5525__auto___45848;
var G__45851 = cljs.core.count(c__5525__auto___45848);
var G__45852 = (0);
seq__45547_45831 = G__45849;
chunk__45548_45832 = G__45850;
count__45549_45833 = G__45851;
i__45550_45834 = G__45852;
continue;
} else {
var map__45554_45853 = cljs.core.first(seq__45547_45847__$1);
var map__45554_45854__$1 = cljs.core.__destructure_map(map__45554_45853);
var w_45855 = map__45554_45854__$1;
var msg_45856__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45554_45854__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45554_45854__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45554_45854__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45554_45854__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45859)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45857),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45858),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45856__$1)].join(''));


var G__45860 = cljs.core.next(seq__45547_45847__$1);
var G__45861 = null;
var G__45862 = (0);
var G__45863 = (0);
seq__45547_45831 = G__45860;
chunk__45548_45832 = G__45861;
count__45549_45833 = G__45862;
i__45550_45834 = G__45863;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__45536_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__45536_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__45555){
var map__45556 = p__45555;
var map__45556__$1 = cljs.core.__destructure_map(map__45556);
var msg = map__45556__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45556__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45556__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__45557 = cljs.core.seq(updates);
var chunk__45559 = null;
var count__45560 = (0);
var i__45561 = (0);
while(true){
if((i__45561 < count__45560)){
var path = chunk__45559.cljs$core$IIndexed$_nth$arity$2(null, i__45561);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__45671_45864 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__45675_45865 = null;
var count__45676_45866 = (0);
var i__45677_45867 = (0);
while(true){
if((i__45677_45867 < count__45676_45866)){
var node_45868 = chunk__45675_45865.cljs$core$IIndexed$_nth$arity$2(null, i__45677_45867);
if(cljs.core.not(node_45868.shadow$old)){
var path_match_45869 = shadow.cljs.devtools.client.browser.match_paths(node_45868.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45869)){
var new_link_45870 = (function (){var G__45703 = node_45868.cloneNode(true);
G__45703.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45869),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45703;
})();
(node_45868.shadow$old = true);

(new_link_45870.onload = ((function (seq__45671_45864,chunk__45675_45865,count__45676_45866,i__45677_45867,seq__45557,chunk__45559,count__45560,i__45561,new_link_45870,path_match_45869,node_45868,path,map__45556,map__45556__$1,msg,updates,reload_info){
return (function (e){
var seq__45704_45871 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__45706_45872 = null;
var count__45707_45873 = (0);
var i__45708_45874 = (0);
while(true){
if((i__45708_45874 < count__45707_45873)){
var map__45712_45875 = chunk__45706_45872.cljs$core$IIndexed$_nth$arity$2(null, i__45708_45874);
var map__45712_45876__$1 = cljs.core.__destructure_map(map__45712_45875);
var task_45877 = map__45712_45876__$1;
var fn_str_45878 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45712_45876__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45712_45876__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45880 = goog.getObjectByName(fn_str_45878,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45879)].join(''));

(fn_obj_45880.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45880.cljs$core$IFn$_invoke$arity$2(path,new_link_45870) : fn_obj_45880.call(null, path,new_link_45870));


var G__45881 = seq__45704_45871;
var G__45882 = chunk__45706_45872;
var G__45883 = count__45707_45873;
var G__45884 = (i__45708_45874 + (1));
seq__45704_45871 = G__45881;
chunk__45706_45872 = G__45882;
count__45707_45873 = G__45883;
i__45708_45874 = G__45884;
continue;
} else {
var temp__5804__auto___45885 = cljs.core.seq(seq__45704_45871);
if(temp__5804__auto___45885){
var seq__45704_45886__$1 = temp__5804__auto___45885;
if(cljs.core.chunked_seq_QMARK_(seq__45704_45886__$1)){
var c__5525__auto___45887 = cljs.core.chunk_first(seq__45704_45886__$1);
var G__45888 = cljs.core.chunk_rest(seq__45704_45886__$1);
var G__45889 = c__5525__auto___45887;
var G__45890 = cljs.core.count(c__5525__auto___45887);
var G__45891 = (0);
seq__45704_45871 = G__45888;
chunk__45706_45872 = G__45889;
count__45707_45873 = G__45890;
i__45708_45874 = G__45891;
continue;
} else {
var map__45713_45892 = cljs.core.first(seq__45704_45886__$1);
var map__45713_45893__$1 = cljs.core.__destructure_map(map__45713_45892);
var task_45894 = map__45713_45893__$1;
var fn_str_45895 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45713_45893__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45713_45893__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45897 = goog.getObjectByName(fn_str_45895,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45896)].join(''));

(fn_obj_45897.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45897.cljs$core$IFn$_invoke$arity$2(path,new_link_45870) : fn_obj_45897.call(null, path,new_link_45870));


var G__45898 = cljs.core.next(seq__45704_45886__$1);
var G__45899 = null;
var G__45900 = (0);
var G__45901 = (0);
seq__45704_45871 = G__45898;
chunk__45706_45872 = G__45899;
count__45707_45873 = G__45900;
i__45708_45874 = G__45901;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_45868);
});})(seq__45671_45864,chunk__45675_45865,count__45676_45866,i__45677_45867,seq__45557,chunk__45559,count__45560,i__45561,new_link_45870,path_match_45869,node_45868,path,map__45556,map__45556__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45869], 0));

goog.dom.insertSiblingAfter(new_link_45870,node_45868);


var G__45902 = seq__45671_45864;
var G__45903 = chunk__45675_45865;
var G__45904 = count__45676_45866;
var G__45905 = (i__45677_45867 + (1));
seq__45671_45864 = G__45902;
chunk__45675_45865 = G__45903;
count__45676_45866 = G__45904;
i__45677_45867 = G__45905;
continue;
} else {
var G__45906 = seq__45671_45864;
var G__45907 = chunk__45675_45865;
var G__45908 = count__45676_45866;
var G__45909 = (i__45677_45867 + (1));
seq__45671_45864 = G__45906;
chunk__45675_45865 = G__45907;
count__45676_45866 = G__45908;
i__45677_45867 = G__45909;
continue;
}
} else {
var G__45910 = seq__45671_45864;
var G__45911 = chunk__45675_45865;
var G__45912 = count__45676_45866;
var G__45913 = (i__45677_45867 + (1));
seq__45671_45864 = G__45910;
chunk__45675_45865 = G__45911;
count__45676_45866 = G__45912;
i__45677_45867 = G__45913;
continue;
}
} else {
var temp__5804__auto___45914 = cljs.core.seq(seq__45671_45864);
if(temp__5804__auto___45914){
var seq__45671_45915__$1 = temp__5804__auto___45914;
if(cljs.core.chunked_seq_QMARK_(seq__45671_45915__$1)){
var c__5525__auto___45916 = cljs.core.chunk_first(seq__45671_45915__$1);
var G__45917 = cljs.core.chunk_rest(seq__45671_45915__$1);
var G__45918 = c__5525__auto___45916;
var G__45919 = cljs.core.count(c__5525__auto___45916);
var G__45920 = (0);
seq__45671_45864 = G__45917;
chunk__45675_45865 = G__45918;
count__45676_45866 = G__45919;
i__45677_45867 = G__45920;
continue;
} else {
var node_45921 = cljs.core.first(seq__45671_45915__$1);
if(cljs.core.not(node_45921.shadow$old)){
var path_match_45922 = shadow.cljs.devtools.client.browser.match_paths(node_45921.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45922)){
var new_link_45923 = (function (){var G__45714 = node_45921.cloneNode(true);
G__45714.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45922),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45714;
})();
(node_45921.shadow$old = true);

(new_link_45923.onload = ((function (seq__45671_45864,chunk__45675_45865,count__45676_45866,i__45677_45867,seq__45557,chunk__45559,count__45560,i__45561,new_link_45923,path_match_45922,node_45921,seq__45671_45915__$1,temp__5804__auto___45914,path,map__45556,map__45556__$1,msg,updates,reload_info){
return (function (e){
var seq__45715_45924 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__45717_45925 = null;
var count__45718_45926 = (0);
var i__45719_45927 = (0);
while(true){
if((i__45719_45927 < count__45718_45926)){
var map__45723_45928 = chunk__45717_45925.cljs$core$IIndexed$_nth$arity$2(null, i__45719_45927);
var map__45723_45929__$1 = cljs.core.__destructure_map(map__45723_45928);
var task_45930 = map__45723_45929__$1;
var fn_str_45931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45723_45929__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45723_45929__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45933 = goog.getObjectByName(fn_str_45931,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45932)].join(''));

(fn_obj_45933.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45933.cljs$core$IFn$_invoke$arity$2(path,new_link_45923) : fn_obj_45933.call(null, path,new_link_45923));


var G__45934 = seq__45715_45924;
var G__45935 = chunk__45717_45925;
var G__45936 = count__45718_45926;
var G__45937 = (i__45719_45927 + (1));
seq__45715_45924 = G__45934;
chunk__45717_45925 = G__45935;
count__45718_45926 = G__45936;
i__45719_45927 = G__45937;
continue;
} else {
var temp__5804__auto___45938__$1 = cljs.core.seq(seq__45715_45924);
if(temp__5804__auto___45938__$1){
var seq__45715_45939__$1 = temp__5804__auto___45938__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45715_45939__$1)){
var c__5525__auto___45940 = cljs.core.chunk_first(seq__45715_45939__$1);
var G__45941 = cljs.core.chunk_rest(seq__45715_45939__$1);
var G__45942 = c__5525__auto___45940;
var G__45943 = cljs.core.count(c__5525__auto___45940);
var G__45944 = (0);
seq__45715_45924 = G__45941;
chunk__45717_45925 = G__45942;
count__45718_45926 = G__45943;
i__45719_45927 = G__45944;
continue;
} else {
var map__45724_45945 = cljs.core.first(seq__45715_45939__$1);
var map__45724_45946__$1 = cljs.core.__destructure_map(map__45724_45945);
var task_45947 = map__45724_45946__$1;
var fn_str_45948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45724_45946__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45724_45946__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45950 = goog.getObjectByName(fn_str_45948,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45949)].join(''));

(fn_obj_45950.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45950.cljs$core$IFn$_invoke$arity$2(path,new_link_45923) : fn_obj_45950.call(null, path,new_link_45923));


var G__45951 = cljs.core.next(seq__45715_45939__$1);
var G__45952 = null;
var G__45953 = (0);
var G__45954 = (0);
seq__45715_45924 = G__45951;
chunk__45717_45925 = G__45952;
count__45718_45926 = G__45953;
i__45719_45927 = G__45954;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_45921);
});})(seq__45671_45864,chunk__45675_45865,count__45676_45866,i__45677_45867,seq__45557,chunk__45559,count__45560,i__45561,new_link_45923,path_match_45922,node_45921,seq__45671_45915__$1,temp__5804__auto___45914,path,map__45556,map__45556__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45922], 0));

goog.dom.insertSiblingAfter(new_link_45923,node_45921);


var G__45955 = cljs.core.next(seq__45671_45915__$1);
var G__45956 = null;
var G__45957 = (0);
var G__45958 = (0);
seq__45671_45864 = G__45955;
chunk__45675_45865 = G__45956;
count__45676_45866 = G__45957;
i__45677_45867 = G__45958;
continue;
} else {
var G__45959 = cljs.core.next(seq__45671_45915__$1);
var G__45960 = null;
var G__45961 = (0);
var G__45962 = (0);
seq__45671_45864 = G__45959;
chunk__45675_45865 = G__45960;
count__45676_45866 = G__45961;
i__45677_45867 = G__45962;
continue;
}
} else {
var G__45963 = cljs.core.next(seq__45671_45915__$1);
var G__45964 = null;
var G__45965 = (0);
var G__45966 = (0);
seq__45671_45864 = G__45963;
chunk__45675_45865 = G__45964;
count__45676_45866 = G__45965;
i__45677_45867 = G__45966;
continue;
}
}
} else {
}
}
break;
}


var G__45967 = seq__45557;
var G__45968 = chunk__45559;
var G__45969 = count__45560;
var G__45970 = (i__45561 + (1));
seq__45557 = G__45967;
chunk__45559 = G__45968;
count__45560 = G__45969;
i__45561 = G__45970;
continue;
} else {
var G__45971 = seq__45557;
var G__45972 = chunk__45559;
var G__45973 = count__45560;
var G__45974 = (i__45561 + (1));
seq__45557 = G__45971;
chunk__45559 = G__45972;
count__45560 = G__45973;
i__45561 = G__45974;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__45557);
if(temp__5804__auto__){
var seq__45557__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45557__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__45557__$1);
var G__45975 = cljs.core.chunk_rest(seq__45557__$1);
var G__45976 = c__5525__auto__;
var G__45977 = cljs.core.count(c__5525__auto__);
var G__45978 = (0);
seq__45557 = G__45975;
chunk__45559 = G__45976;
count__45560 = G__45977;
i__45561 = G__45978;
continue;
} else {
var path = cljs.core.first(seq__45557__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__45725_45979 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__45729_45980 = null;
var count__45730_45981 = (0);
var i__45731_45982 = (0);
while(true){
if((i__45731_45982 < count__45730_45981)){
var node_45983 = chunk__45729_45980.cljs$core$IIndexed$_nth$arity$2(null, i__45731_45982);
if(cljs.core.not(node_45983.shadow$old)){
var path_match_45984 = shadow.cljs.devtools.client.browser.match_paths(node_45983.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45984)){
var new_link_45985 = (function (){var G__45757 = node_45983.cloneNode(true);
G__45757.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45984),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45757;
})();
(node_45983.shadow$old = true);

(new_link_45985.onload = ((function (seq__45725_45979,chunk__45729_45980,count__45730_45981,i__45731_45982,seq__45557,chunk__45559,count__45560,i__45561,new_link_45985,path_match_45984,node_45983,path,seq__45557__$1,temp__5804__auto__,map__45556,map__45556__$1,msg,updates,reload_info){
return (function (e){
var seq__45758_45986 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__45760_45987 = null;
var count__45761_45988 = (0);
var i__45762_45989 = (0);
while(true){
if((i__45762_45989 < count__45761_45988)){
var map__45766_45990 = chunk__45760_45987.cljs$core$IIndexed$_nth$arity$2(null, i__45762_45989);
var map__45766_45991__$1 = cljs.core.__destructure_map(map__45766_45990);
var task_45992 = map__45766_45991__$1;
var fn_str_45993 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45766_45991__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45994 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45766_45991__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45995 = goog.getObjectByName(fn_str_45993,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45994)].join(''));

(fn_obj_45995.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45995.cljs$core$IFn$_invoke$arity$2(path,new_link_45985) : fn_obj_45995.call(null, path,new_link_45985));


var G__45996 = seq__45758_45986;
var G__45997 = chunk__45760_45987;
var G__45998 = count__45761_45988;
var G__45999 = (i__45762_45989 + (1));
seq__45758_45986 = G__45996;
chunk__45760_45987 = G__45997;
count__45761_45988 = G__45998;
i__45762_45989 = G__45999;
continue;
} else {
var temp__5804__auto___46000__$1 = cljs.core.seq(seq__45758_45986);
if(temp__5804__auto___46000__$1){
var seq__45758_46001__$1 = temp__5804__auto___46000__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45758_46001__$1)){
var c__5525__auto___46002 = cljs.core.chunk_first(seq__45758_46001__$1);
var G__46003 = cljs.core.chunk_rest(seq__45758_46001__$1);
var G__46004 = c__5525__auto___46002;
var G__46005 = cljs.core.count(c__5525__auto___46002);
var G__46006 = (0);
seq__45758_45986 = G__46003;
chunk__45760_45987 = G__46004;
count__45761_45988 = G__46005;
i__45762_45989 = G__46006;
continue;
} else {
var map__45767_46007 = cljs.core.first(seq__45758_46001__$1);
var map__45767_46008__$1 = cljs.core.__destructure_map(map__45767_46007);
var task_46009 = map__45767_46008__$1;
var fn_str_46010 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45767_46008__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_46011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45767_46008__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_46012 = goog.getObjectByName(fn_str_46010,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_46011)].join(''));

(fn_obj_46012.cljs$core$IFn$_invoke$arity$2 ? fn_obj_46012.cljs$core$IFn$_invoke$arity$2(path,new_link_45985) : fn_obj_46012.call(null, path,new_link_45985));


var G__46013 = cljs.core.next(seq__45758_46001__$1);
var G__46014 = null;
var G__46015 = (0);
var G__46016 = (0);
seq__45758_45986 = G__46013;
chunk__45760_45987 = G__46014;
count__45761_45988 = G__46015;
i__45762_45989 = G__46016;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_45983);
});})(seq__45725_45979,chunk__45729_45980,count__45730_45981,i__45731_45982,seq__45557,chunk__45559,count__45560,i__45561,new_link_45985,path_match_45984,node_45983,path,seq__45557__$1,temp__5804__auto__,map__45556,map__45556__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45984], 0));

goog.dom.insertSiblingAfter(new_link_45985,node_45983);


var G__46017 = seq__45725_45979;
var G__46018 = chunk__45729_45980;
var G__46019 = count__45730_45981;
var G__46020 = (i__45731_45982 + (1));
seq__45725_45979 = G__46017;
chunk__45729_45980 = G__46018;
count__45730_45981 = G__46019;
i__45731_45982 = G__46020;
continue;
} else {
var G__46021 = seq__45725_45979;
var G__46022 = chunk__45729_45980;
var G__46023 = count__45730_45981;
var G__46024 = (i__45731_45982 + (1));
seq__45725_45979 = G__46021;
chunk__45729_45980 = G__46022;
count__45730_45981 = G__46023;
i__45731_45982 = G__46024;
continue;
}
} else {
var G__46025 = seq__45725_45979;
var G__46026 = chunk__45729_45980;
var G__46027 = count__45730_45981;
var G__46028 = (i__45731_45982 + (1));
seq__45725_45979 = G__46025;
chunk__45729_45980 = G__46026;
count__45730_45981 = G__46027;
i__45731_45982 = G__46028;
continue;
}
} else {
var temp__5804__auto___46029__$1 = cljs.core.seq(seq__45725_45979);
if(temp__5804__auto___46029__$1){
var seq__45725_46030__$1 = temp__5804__auto___46029__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45725_46030__$1)){
var c__5525__auto___46031 = cljs.core.chunk_first(seq__45725_46030__$1);
var G__46032 = cljs.core.chunk_rest(seq__45725_46030__$1);
var G__46033 = c__5525__auto___46031;
var G__46034 = cljs.core.count(c__5525__auto___46031);
var G__46035 = (0);
seq__45725_45979 = G__46032;
chunk__45729_45980 = G__46033;
count__45730_45981 = G__46034;
i__45731_45982 = G__46035;
continue;
} else {
var node_46036 = cljs.core.first(seq__45725_46030__$1);
if(cljs.core.not(node_46036.shadow$old)){
var path_match_46037 = shadow.cljs.devtools.client.browser.match_paths(node_46036.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46037)){
var new_link_46038 = (function (){var G__45768 = node_46036.cloneNode(true);
G__45768.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46037),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45768;
})();
(node_46036.shadow$old = true);

(new_link_46038.onload = ((function (seq__45725_45979,chunk__45729_45980,count__45730_45981,i__45731_45982,seq__45557,chunk__45559,count__45560,i__45561,new_link_46038,path_match_46037,node_46036,seq__45725_46030__$1,temp__5804__auto___46029__$1,path,seq__45557__$1,temp__5804__auto__,map__45556,map__45556__$1,msg,updates,reload_info){
return (function (e){
var seq__45769_46039 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__45771_46040 = null;
var count__45772_46041 = (0);
var i__45773_46042 = (0);
while(true){
if((i__45773_46042 < count__45772_46041)){
var map__45777_46043 = chunk__45771_46040.cljs$core$IIndexed$_nth$arity$2(null, i__45773_46042);
var map__45777_46044__$1 = cljs.core.__destructure_map(map__45777_46043);
var task_46045 = map__45777_46044__$1;
var fn_str_46046 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45777_46044__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_46047 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45777_46044__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_46048 = goog.getObjectByName(fn_str_46046,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_46047)].join(''));

(fn_obj_46048.cljs$core$IFn$_invoke$arity$2 ? fn_obj_46048.cljs$core$IFn$_invoke$arity$2(path,new_link_46038) : fn_obj_46048.call(null, path,new_link_46038));


var G__46049 = seq__45769_46039;
var G__46050 = chunk__45771_46040;
var G__46051 = count__45772_46041;
var G__46052 = (i__45773_46042 + (1));
seq__45769_46039 = G__46049;
chunk__45771_46040 = G__46050;
count__45772_46041 = G__46051;
i__45773_46042 = G__46052;
continue;
} else {
var temp__5804__auto___46053__$2 = cljs.core.seq(seq__45769_46039);
if(temp__5804__auto___46053__$2){
var seq__45769_46054__$1 = temp__5804__auto___46053__$2;
if(cljs.core.chunked_seq_QMARK_(seq__45769_46054__$1)){
var c__5525__auto___46055 = cljs.core.chunk_first(seq__45769_46054__$1);
var G__46056 = cljs.core.chunk_rest(seq__45769_46054__$1);
var G__46057 = c__5525__auto___46055;
var G__46058 = cljs.core.count(c__5525__auto___46055);
var G__46059 = (0);
seq__45769_46039 = G__46056;
chunk__45771_46040 = G__46057;
count__45772_46041 = G__46058;
i__45773_46042 = G__46059;
continue;
} else {
var map__45778_46060 = cljs.core.first(seq__45769_46054__$1);
var map__45778_46061__$1 = cljs.core.__destructure_map(map__45778_46060);
var task_46062 = map__45778_46061__$1;
var fn_str_46063 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45778_46061__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_46064 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45778_46061__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_46065 = goog.getObjectByName(fn_str_46063,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_46064)].join(''));

(fn_obj_46065.cljs$core$IFn$_invoke$arity$2 ? fn_obj_46065.cljs$core$IFn$_invoke$arity$2(path,new_link_46038) : fn_obj_46065.call(null, path,new_link_46038));


var G__46066 = cljs.core.next(seq__45769_46054__$1);
var G__46067 = null;
var G__46068 = (0);
var G__46069 = (0);
seq__45769_46039 = G__46066;
chunk__45771_46040 = G__46067;
count__45772_46041 = G__46068;
i__45773_46042 = G__46069;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_46036);
});})(seq__45725_45979,chunk__45729_45980,count__45730_45981,i__45731_45982,seq__45557,chunk__45559,count__45560,i__45561,new_link_46038,path_match_46037,node_46036,seq__45725_46030__$1,temp__5804__auto___46029__$1,path,seq__45557__$1,temp__5804__auto__,map__45556,map__45556__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46037], 0));

goog.dom.insertSiblingAfter(new_link_46038,node_46036);


var G__46070 = cljs.core.next(seq__45725_46030__$1);
var G__46071 = null;
var G__46072 = (0);
var G__46073 = (0);
seq__45725_45979 = G__46070;
chunk__45729_45980 = G__46071;
count__45730_45981 = G__46072;
i__45731_45982 = G__46073;
continue;
} else {
var G__46074 = cljs.core.next(seq__45725_46030__$1);
var G__46075 = null;
var G__46076 = (0);
var G__46077 = (0);
seq__45725_45979 = G__46074;
chunk__45729_45980 = G__46075;
count__45730_45981 = G__46076;
i__45731_45982 = G__46077;
continue;
}
} else {
var G__46078 = cljs.core.next(seq__45725_46030__$1);
var G__46079 = null;
var G__46080 = (0);
var G__46081 = (0);
seq__45725_45979 = G__46078;
chunk__45729_45980 = G__46079;
count__45730_45981 = G__46080;
i__45731_45982 = G__46081;
continue;
}
}
} else {
}
}
break;
}


var G__46082 = cljs.core.next(seq__45557__$1);
var G__46083 = null;
var G__46084 = (0);
var G__46085 = (0);
seq__45557 = G__46082;
chunk__45559 = G__46083;
count__45560 = G__46084;
i__45561 = G__46085;
continue;
} else {
var G__46086 = cljs.core.next(seq__45557__$1);
var G__46087 = null;
var G__46088 = (0);
var G__46089 = (0);
seq__45557 = G__46086;
chunk__45559 = G__46087;
count__45560 = G__46088;
i__45561 = G__46089;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__45779){
var map__45780 = p__45779;
var map__45780__$1 = cljs.core.__destructure_map(map__45780);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45780__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__45781,done,error){
var map__45782 = p__45781;
var map__45782__$1 = cljs.core.__destructure_map(map__45782);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45782__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__45783,done,error){
var map__45784 = p__45783;
var map__45784__$1 = cljs.core.__destructure_map(map__45784);
var msg = map__45784__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45784__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45784__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45784__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__45785){
var map__45786 = p__45785;
var map__45786__$1 = cljs.core.__destructure_map(map__45786);
var src = map__45786__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45786__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__45787 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__45787) : done.call(null, G__45787));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__45788){
var map__45789 = p__45788;
var map__45789__$1 = cljs.core.__destructure_map(map__45789);
var msg__$1 = map__45789__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45789__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e45790){var ex = e45790;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__45791){
var map__45792 = p__45791;
var map__45792__$1 = cljs.core.__destructure_map(map__45792);
var env = map__45792__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45792__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__45793){
var map__45794 = p__45793;
var map__45794__$1 = cljs.core.__destructure_map(map__45794);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45794__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45794__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__45795){
var map__45796 = p__45795;
var map__45796__$1 = cljs.core.__destructure_map(map__45796);
var svc = map__45796__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45796__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
