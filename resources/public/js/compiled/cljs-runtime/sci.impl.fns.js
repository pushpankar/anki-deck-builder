goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__30546 = arguments.length;
switch (G__30546) {
case 5:
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 11:
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5 = (function (ctx,enclosed_array,fn_body,fn_name,macro_QMARK_){
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11(ctx,enclosed_array,fn_body,fn_name,macro_QMARK_,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"copy-enclosed->invocation","copy-enclosed->invocation",-1322388729).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"invoc-size","invoc-size",2053298058).cljs$core$IFn$_invoke$arity$1(fn_body),sci.impl.utils.current_ns_name(),new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228).cljs$core$IFn$_invoke$arity$1(fn_body));
}));

(sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11 = (function (ctx,enclosed_array,fn_body,fn_name,macro_QMARK_,fixed_arity,enclosed__GT_invocation,body,invoc_size,nsm,vararg_idx){
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__30553 = fixed_arity;
switch (G__30553) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__30559){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__30559);

while(true){
var ret__29290__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29290__auto__)){
continue;
} else {
return ret__29290__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__30559 = null;
if (arguments.length > 0) {
var G__31452__i = 0, G__31452__a = new Array(arguments.length -  0);
while (G__31452__i < G__31452__a.length) {G__31452__a[G__31452__i] = arguments[G__31452__i + 0]; ++G__31452__i;}
  G__30559 = new cljs.core.IndexedSeq(G__31452__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__30559);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__31453){
var G__30559 = cljs.core.seq(arglist__31453);
return sci$impl$fns$arity_0__delegate(G__30559);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__30565,G__30566){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30565);

(invoc_array[vararg_idx] = G__30566);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__30565,var_args){
var G__30566 = null;
if (arguments.length > 1) {
var G__31455__i = 0, G__31455__a = new Array(arguments.length -  1);
while (G__31455__i < G__31455__a.length) {G__31455__a[G__31455__i] = arguments[G__31455__i + 1]; ++G__31455__i;}
  G__30566 = new cljs.core.IndexedSeq(G__31455__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__30565,G__30566);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__31456){
var G__30565 = cljs.core.first(arglist__31456);
var G__30566 = cljs.core.rest(arglist__31456);
return sci$impl$fns$arity_1__delegate(G__30565,G__30566);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__30574,G__30575,G__30576){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30574);

(invoc_array[(1)] = G__30575);

(invoc_array[vararg_idx] = G__30576);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__30574,G__30575,var_args){
var G__30576 = null;
if (arguments.length > 2) {
var G__31464__i = 0, G__31464__a = new Array(arguments.length -  2);
while (G__31464__i < G__31464__a.length) {G__31464__a[G__31464__i] = arguments[G__31464__i + 2]; ++G__31464__i;}
  G__30576 = new cljs.core.IndexedSeq(G__31464__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__30574,G__30575,G__30576);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__31465){
var G__30574 = cljs.core.first(arglist__31465);
arglist__31465 = cljs.core.next(arglist__31465);
var G__30575 = cljs.core.first(arglist__31465);
var G__30576 = cljs.core.rest(arglist__31465);
return sci$impl$fns$arity_2__delegate(G__30574,G__30575,G__30576);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__30577,G__30578,G__30579,G__30580){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30577);

(invoc_array[(1)] = G__30578);

(invoc_array[(2)] = G__30579);

(invoc_array[vararg_idx] = G__30580);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__30577,G__30578,G__30579,var_args){
var G__30580 = null;
if (arguments.length > 3) {
var G__31466__i = 0, G__31466__a = new Array(arguments.length -  3);
while (G__31466__i < G__31466__a.length) {G__31466__a[G__31466__i] = arguments[G__31466__i + 3]; ++G__31466__i;}
  G__30580 = new cljs.core.IndexedSeq(G__31466__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__30577,G__30578,G__30579,G__30580);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__31467){
var G__30577 = cljs.core.first(arglist__31467);
arglist__31467 = cljs.core.next(arglist__31467);
var G__30578 = cljs.core.first(arglist__31467);
arglist__31467 = cljs.core.next(arglist__31467);
var G__30579 = cljs.core.first(arglist__31467);
var G__30580 = cljs.core.rest(arglist__31467);
return sci$impl$fns$arity_3__delegate(G__30577,G__30578,G__30579,G__30580);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__30588,G__30589,G__30590,G__30591,G__30592){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30588);

(invoc_array[(1)] = G__30589);

(invoc_array[(2)] = G__30590);

(invoc_array[(3)] = G__30591);

(invoc_array[vararg_idx] = G__30592);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__30588,G__30589,G__30590,G__30591,var_args){
var G__30592 = null;
if (arguments.length > 4) {
var G__31468__i = 0, G__31468__a = new Array(arguments.length -  4);
while (G__31468__i < G__31468__a.length) {G__31468__a[G__31468__i] = arguments[G__31468__i + 4]; ++G__31468__i;}
  G__30592 = new cljs.core.IndexedSeq(G__31468__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__30588,G__30589,G__30590,G__30591,G__30592);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__31469){
var G__30588 = cljs.core.first(arglist__31469);
arglist__31469 = cljs.core.next(arglist__31469);
var G__30589 = cljs.core.first(arglist__31469);
arglist__31469 = cljs.core.next(arglist__31469);
var G__30590 = cljs.core.first(arglist__31469);
arglist__31469 = cljs.core.next(arglist__31469);
var G__30591 = cljs.core.first(arglist__31469);
var G__30592 = cljs.core.rest(arglist__31469);
return sci$impl$fns$arity_4__delegate(G__30588,G__30589,G__30590,G__30591,G__30592);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__30595,G__30596,G__30597,G__30598,G__30599,G__30600){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30595);

(invoc_array[(1)] = G__30596);

(invoc_array[(2)] = G__30597);

(invoc_array[(3)] = G__30598);

(invoc_array[(4)] = G__30599);

(invoc_array[vararg_idx] = G__30600);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__30595,G__30596,G__30597,G__30598,G__30599,var_args){
var G__30600 = null;
if (arguments.length > 5) {
var G__31470__i = 0, G__31470__a = new Array(arguments.length -  5);
while (G__31470__i < G__31470__a.length) {G__31470__a[G__31470__i] = arguments[G__31470__i + 5]; ++G__31470__i;}
  G__30600 = new cljs.core.IndexedSeq(G__31470__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__30595,G__30596,G__30597,G__30598,G__30599,G__30600);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__31472){
var G__30595 = cljs.core.first(arglist__31472);
arglist__31472 = cljs.core.next(arglist__31472);
var G__30596 = cljs.core.first(arglist__31472);
arglist__31472 = cljs.core.next(arglist__31472);
var G__30597 = cljs.core.first(arglist__31472);
arglist__31472 = cljs.core.next(arglist__31472);
var G__30598 = cljs.core.first(arglist__31472);
arglist__31472 = cljs.core.next(arglist__31472);
var G__30599 = cljs.core.first(arglist__31472);
var G__30600 = cljs.core.rest(arglist__31472);
return sci$impl$fns$arity_5__delegate(G__30595,G__30596,G__30597,G__30598,G__30599,G__30600);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__30607,G__30608,G__30609,G__30610,G__30611,G__30612,G__30613){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30607);

(invoc_array[(1)] = G__30608);

(invoc_array[(2)] = G__30609);

(invoc_array[(3)] = G__30610);

(invoc_array[(4)] = G__30611);

(invoc_array[(5)] = G__30612);

(invoc_array[vararg_idx] = G__30613);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__30607,G__30608,G__30609,G__30610,G__30611,G__30612,var_args){
var G__30613 = null;
if (arguments.length > 6) {
var G__31477__i = 0, G__31477__a = new Array(arguments.length -  6);
while (G__31477__i < G__31477__a.length) {G__31477__a[G__31477__i] = arguments[G__31477__i + 6]; ++G__31477__i;}
  G__30613 = new cljs.core.IndexedSeq(G__31477__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__30607,G__30608,G__30609,G__30610,G__30611,G__30612,G__30613);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__31478){
var G__30607 = cljs.core.first(arglist__31478);
arglist__31478 = cljs.core.next(arglist__31478);
var G__30608 = cljs.core.first(arglist__31478);
arglist__31478 = cljs.core.next(arglist__31478);
var G__30609 = cljs.core.first(arglist__31478);
arglist__31478 = cljs.core.next(arglist__31478);
var G__30610 = cljs.core.first(arglist__31478);
arglist__31478 = cljs.core.next(arglist__31478);
var G__30611 = cljs.core.first(arglist__31478);
arglist__31478 = cljs.core.next(arglist__31478);
var G__30612 = cljs.core.first(arglist__31478);
var G__30613 = cljs.core.rest(arglist__31478);
return sci$impl$fns$arity_6__delegate(G__30607,G__30608,G__30609,G__30610,G__30611,G__30612,G__30613);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__30620,G__30621,G__30622,G__30623,G__30624,G__30625,G__30626,G__30627){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30620);

(invoc_array[(1)] = G__30621);

(invoc_array[(2)] = G__30622);

(invoc_array[(3)] = G__30623);

(invoc_array[(4)] = G__30624);

(invoc_array[(5)] = G__30625);

(invoc_array[(6)] = G__30626);

(invoc_array[vararg_idx] = G__30627);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__30620,G__30621,G__30622,G__30623,G__30624,G__30625,G__30626,var_args){
var G__30627 = null;
if (arguments.length > 7) {
var G__31484__i = 0, G__31484__a = new Array(arguments.length -  7);
while (G__31484__i < G__31484__a.length) {G__31484__a[G__31484__i] = arguments[G__31484__i + 7]; ++G__31484__i;}
  G__30627 = new cljs.core.IndexedSeq(G__31484__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__30620,G__30621,G__30622,G__30623,G__30624,G__30625,G__30626,G__30627);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__31485){
var G__30620 = cljs.core.first(arglist__31485);
arglist__31485 = cljs.core.next(arglist__31485);
var G__30621 = cljs.core.first(arglist__31485);
arglist__31485 = cljs.core.next(arglist__31485);
var G__30622 = cljs.core.first(arglist__31485);
arglist__31485 = cljs.core.next(arglist__31485);
var G__30623 = cljs.core.first(arglist__31485);
arglist__31485 = cljs.core.next(arglist__31485);
var G__30624 = cljs.core.first(arglist__31485);
arglist__31485 = cljs.core.next(arglist__31485);
var G__30625 = cljs.core.first(arglist__31485);
arglist__31485 = cljs.core.next(arglist__31485);
var G__30626 = cljs.core.first(arglist__31485);
var G__30627 = cljs.core.rest(arglist__31485);
return sci$impl$fns$arity_7__delegate(G__30620,G__30621,G__30622,G__30623,G__30624,G__30625,G__30626,G__30627);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__30645,G__30646,G__30647,G__30648,G__30649,G__30650,G__30651,G__30652,G__30653){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30645);

(invoc_array[(1)] = G__30646);

(invoc_array[(2)] = G__30647);

(invoc_array[(3)] = G__30648);

(invoc_array[(4)] = G__30649);

(invoc_array[(5)] = G__30650);

(invoc_array[(6)] = G__30651);

(invoc_array[(7)] = G__30652);

(invoc_array[vararg_idx] = G__30653);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__30645,G__30646,G__30647,G__30648,G__30649,G__30650,G__30651,G__30652,var_args){
var G__30653 = null;
if (arguments.length > 8) {
var G__31488__i = 0, G__31488__a = new Array(arguments.length -  8);
while (G__31488__i < G__31488__a.length) {G__31488__a[G__31488__i] = arguments[G__31488__i + 8]; ++G__31488__i;}
  G__30653 = new cljs.core.IndexedSeq(G__31488__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__30645,G__30646,G__30647,G__30648,G__30649,G__30650,G__30651,G__30652,G__30653);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__31489){
var G__30645 = cljs.core.first(arglist__31489);
arglist__31489 = cljs.core.next(arglist__31489);
var G__30646 = cljs.core.first(arglist__31489);
arglist__31489 = cljs.core.next(arglist__31489);
var G__30647 = cljs.core.first(arglist__31489);
arglist__31489 = cljs.core.next(arglist__31489);
var G__30648 = cljs.core.first(arglist__31489);
arglist__31489 = cljs.core.next(arglist__31489);
var G__30649 = cljs.core.first(arglist__31489);
arglist__31489 = cljs.core.next(arglist__31489);
var G__30650 = cljs.core.first(arglist__31489);
arglist__31489 = cljs.core.next(arglist__31489);
var G__30651 = cljs.core.first(arglist__31489);
arglist__31489 = cljs.core.next(arglist__31489);
var G__30652 = cljs.core.first(arglist__31489);
var G__30653 = cljs.core.rest(arglist__31489);
return sci$impl$fns$arity_8__delegate(G__30645,G__30646,G__30647,G__30648,G__30649,G__30650,G__30651,G__30652,G__30653);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__30661,G__30662,G__30663,G__30664,G__30665,G__30666,G__30667,G__30668,G__30669,G__30670){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30661);

(invoc_array[(1)] = G__30662);

(invoc_array[(2)] = G__30663);

(invoc_array[(3)] = G__30664);

(invoc_array[(4)] = G__30665);

(invoc_array[(5)] = G__30666);

(invoc_array[(6)] = G__30667);

(invoc_array[(7)] = G__30668);

(invoc_array[(8)] = G__30669);

(invoc_array[vararg_idx] = G__30670);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__30661,G__30662,G__30663,G__30664,G__30665,G__30666,G__30667,G__30668,G__30669,var_args){
var G__30670 = null;
if (arguments.length > 9) {
var G__31493__i = 0, G__31493__a = new Array(arguments.length -  9);
while (G__31493__i < G__31493__a.length) {G__31493__a[G__31493__i] = arguments[G__31493__i + 9]; ++G__31493__i;}
  G__30670 = new cljs.core.IndexedSeq(G__31493__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__30661,G__30662,G__30663,G__30664,G__30665,G__30666,G__30667,G__30668,G__30669,G__30670);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__31498){
var G__30661 = cljs.core.first(arglist__31498);
arglist__31498 = cljs.core.next(arglist__31498);
var G__30662 = cljs.core.first(arglist__31498);
arglist__31498 = cljs.core.next(arglist__31498);
var G__30663 = cljs.core.first(arglist__31498);
arglist__31498 = cljs.core.next(arglist__31498);
var G__30664 = cljs.core.first(arglist__31498);
arglist__31498 = cljs.core.next(arglist__31498);
var G__30665 = cljs.core.first(arglist__31498);
arglist__31498 = cljs.core.next(arglist__31498);
var G__30666 = cljs.core.first(arglist__31498);
arglist__31498 = cljs.core.next(arglist__31498);
var G__30667 = cljs.core.first(arglist__31498);
arglist__31498 = cljs.core.next(arglist__31498);
var G__30668 = cljs.core.first(arglist__31498);
arglist__31498 = cljs.core.next(arglist__31498);
var G__30669 = cljs.core.first(arglist__31498);
var G__30670 = cljs.core.rest(arglist__31498);
return sci$impl$fns$arity_9__delegate(G__30661,G__30662,G__30663,G__30664,G__30665,G__30666,G__30667,G__30668,G__30669,G__30670);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__30677,G__30678,G__30679,G__30680,G__30681,G__30682,G__30683,G__30684,G__30685,G__30686,G__30687){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30677);

(invoc_array[(1)] = G__30678);

(invoc_array[(2)] = G__30679);

(invoc_array[(3)] = G__30680);

(invoc_array[(4)] = G__30681);

(invoc_array[(5)] = G__30682);

(invoc_array[(6)] = G__30683);

(invoc_array[(7)] = G__30684);

(invoc_array[(8)] = G__30685);

(invoc_array[(9)] = G__30686);

(invoc_array[vararg_idx] = G__30687);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__30677,G__30678,G__30679,G__30680,G__30681,G__30682,G__30683,G__30684,G__30685,G__30686,var_args){
var G__30687 = null;
if (arguments.length > 10) {
var G__31500__i = 0, G__31500__a = new Array(arguments.length -  10);
while (G__31500__i < G__31500__a.length) {G__31500__a[G__31500__i] = arguments[G__31500__i + 10]; ++G__31500__i;}
  G__30687 = new cljs.core.IndexedSeq(G__31500__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__30677,G__30678,G__30679,G__30680,G__30681,G__30682,G__30683,G__30684,G__30685,G__30686,G__30687);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__31504){
var G__30677 = cljs.core.first(arglist__31504);
arglist__31504 = cljs.core.next(arglist__31504);
var G__30678 = cljs.core.first(arglist__31504);
arglist__31504 = cljs.core.next(arglist__31504);
var G__30679 = cljs.core.first(arglist__31504);
arglist__31504 = cljs.core.next(arglist__31504);
var G__30680 = cljs.core.first(arglist__31504);
arglist__31504 = cljs.core.next(arglist__31504);
var G__30681 = cljs.core.first(arglist__31504);
arglist__31504 = cljs.core.next(arglist__31504);
var G__30682 = cljs.core.first(arglist__31504);
arglist__31504 = cljs.core.next(arglist__31504);
var G__30683 = cljs.core.first(arglist__31504);
arglist__31504 = cljs.core.next(arglist__31504);
var G__30684 = cljs.core.first(arglist__31504);
arglist__31504 = cljs.core.next(arglist__31504);
var G__30685 = cljs.core.first(arglist__31504);
arglist__31504 = cljs.core.next(arglist__31504);
var G__30686 = cljs.core.first(arglist__31504);
var G__30687 = cljs.core.rest(arglist__31504);
return sci$impl$fns$arity_10__delegate(G__30677,G__30678,G__30679,G__30680,G__30681,G__30682,G__30683,G__30684,G__30685,G__30686,G__30687);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__30691,G__30692,G__30693,G__30694,G__30695,G__30696,G__30697,G__30698,G__30699,G__30700,G__30701,G__30702){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30691);

(invoc_array[(1)] = G__30692);

(invoc_array[(2)] = G__30693);

(invoc_array[(3)] = G__30694);

(invoc_array[(4)] = G__30695);

(invoc_array[(5)] = G__30696);

(invoc_array[(6)] = G__30697);

(invoc_array[(7)] = G__30698);

(invoc_array[(8)] = G__30699);

(invoc_array[(9)] = G__30700);

(invoc_array[(10)] = G__30701);

(invoc_array[vararg_idx] = G__30702);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__30691,G__30692,G__30693,G__30694,G__30695,G__30696,G__30697,G__30698,G__30699,G__30700,G__30701,var_args){
var G__30702 = null;
if (arguments.length > 11) {
var G__31509__i = 0, G__31509__a = new Array(arguments.length -  11);
while (G__31509__i < G__31509__a.length) {G__31509__a[G__31509__i] = arguments[G__31509__i + 11]; ++G__31509__i;}
  G__30702 = new cljs.core.IndexedSeq(G__31509__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__30691,G__30692,G__30693,G__30694,G__30695,G__30696,G__30697,G__30698,G__30699,G__30700,G__30701,G__30702);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__31510){
var G__30691 = cljs.core.first(arglist__31510);
arglist__31510 = cljs.core.next(arglist__31510);
var G__30692 = cljs.core.first(arglist__31510);
arglist__31510 = cljs.core.next(arglist__31510);
var G__30693 = cljs.core.first(arglist__31510);
arglist__31510 = cljs.core.next(arglist__31510);
var G__30694 = cljs.core.first(arglist__31510);
arglist__31510 = cljs.core.next(arglist__31510);
var G__30695 = cljs.core.first(arglist__31510);
arglist__31510 = cljs.core.next(arglist__31510);
var G__30696 = cljs.core.first(arglist__31510);
arglist__31510 = cljs.core.next(arglist__31510);
var G__30697 = cljs.core.first(arglist__31510);
arglist__31510 = cljs.core.next(arglist__31510);
var G__30698 = cljs.core.first(arglist__31510);
arglist__31510 = cljs.core.next(arglist__31510);
var G__30699 = cljs.core.first(arglist__31510);
arglist__31510 = cljs.core.next(arglist__31510);
var G__30700 = cljs.core.first(arglist__31510);
arglist__31510 = cljs.core.next(arglist__31510);
var G__30701 = cljs.core.first(arglist__31510);
var G__30702 = cljs.core.rest(arglist__31510);
return sci$impl$fns$arity_11__delegate(G__30691,G__30692,G__30693,G__30694,G__30695,G__30696,G__30697,G__30698,G__30699,G__30700,G__30701,G__30702);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__30711,G__30712,G__30713,G__30714,G__30715,G__30716,G__30717,G__30718,G__30719,G__30720,G__30721,G__30722,G__30723){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30711);

(invoc_array[(1)] = G__30712);

(invoc_array[(2)] = G__30713);

(invoc_array[(3)] = G__30714);

(invoc_array[(4)] = G__30715);

(invoc_array[(5)] = G__30716);

(invoc_array[(6)] = G__30717);

(invoc_array[(7)] = G__30718);

(invoc_array[(8)] = G__30719);

(invoc_array[(9)] = G__30720);

(invoc_array[(10)] = G__30721);

(invoc_array[(11)] = G__30722);

(invoc_array[vararg_idx] = G__30723);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__30711,G__30712,G__30713,G__30714,G__30715,G__30716,G__30717,G__30718,G__30719,G__30720,G__30721,G__30722,var_args){
var G__30723 = null;
if (arguments.length > 12) {
var G__31511__i = 0, G__31511__a = new Array(arguments.length -  12);
while (G__31511__i < G__31511__a.length) {G__31511__a[G__31511__i] = arguments[G__31511__i + 12]; ++G__31511__i;}
  G__30723 = new cljs.core.IndexedSeq(G__31511__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__30711,G__30712,G__30713,G__30714,G__30715,G__30716,G__30717,G__30718,G__30719,G__30720,G__30721,G__30722,G__30723);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__31512){
var G__30711 = cljs.core.first(arglist__31512);
arglist__31512 = cljs.core.next(arglist__31512);
var G__30712 = cljs.core.first(arglist__31512);
arglist__31512 = cljs.core.next(arglist__31512);
var G__30713 = cljs.core.first(arglist__31512);
arglist__31512 = cljs.core.next(arglist__31512);
var G__30714 = cljs.core.first(arglist__31512);
arglist__31512 = cljs.core.next(arglist__31512);
var G__30715 = cljs.core.first(arglist__31512);
arglist__31512 = cljs.core.next(arglist__31512);
var G__30716 = cljs.core.first(arglist__31512);
arglist__31512 = cljs.core.next(arglist__31512);
var G__30717 = cljs.core.first(arglist__31512);
arglist__31512 = cljs.core.next(arglist__31512);
var G__30718 = cljs.core.first(arglist__31512);
arglist__31512 = cljs.core.next(arglist__31512);
var G__30719 = cljs.core.first(arglist__31512);
arglist__31512 = cljs.core.next(arglist__31512);
var G__30720 = cljs.core.first(arglist__31512);
arglist__31512 = cljs.core.next(arglist__31512);
var G__30721 = cljs.core.first(arglist__31512);
arglist__31512 = cljs.core.next(arglist__31512);
var G__30722 = cljs.core.first(arglist__31512);
var G__30723 = cljs.core.rest(arglist__31512);
return sci$impl$fns$arity_12__delegate(G__30711,G__30712,G__30713,G__30714,G__30715,G__30716,G__30717,G__30718,G__30719,G__30720,G__30721,G__30722,G__30723);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__30733,G__30734,G__30735,G__30736,G__30737,G__30738,G__30739,G__30740,G__30741,G__30742,G__30743,G__30744,G__30745,G__30746){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30733);

(invoc_array[(1)] = G__30734);

(invoc_array[(2)] = G__30735);

(invoc_array[(3)] = G__30736);

(invoc_array[(4)] = G__30737);

(invoc_array[(5)] = G__30738);

(invoc_array[(6)] = G__30739);

(invoc_array[(7)] = G__30740);

(invoc_array[(8)] = G__30741);

(invoc_array[(9)] = G__30742);

(invoc_array[(10)] = G__30743);

(invoc_array[(11)] = G__30744);

(invoc_array[(12)] = G__30745);

(invoc_array[vararg_idx] = G__30746);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__30733,G__30734,G__30735,G__30736,G__30737,G__30738,G__30739,G__30740,G__30741,G__30742,G__30743,G__30744,G__30745,var_args){
var G__30746 = null;
if (arguments.length > 13) {
var G__31513__i = 0, G__31513__a = new Array(arguments.length -  13);
while (G__31513__i < G__31513__a.length) {G__31513__a[G__31513__i] = arguments[G__31513__i + 13]; ++G__31513__i;}
  G__30746 = new cljs.core.IndexedSeq(G__31513__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__30733,G__30734,G__30735,G__30736,G__30737,G__30738,G__30739,G__30740,G__30741,G__30742,G__30743,G__30744,G__30745,G__30746);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__31514){
var G__30733 = cljs.core.first(arglist__31514);
arglist__31514 = cljs.core.next(arglist__31514);
var G__30734 = cljs.core.first(arglist__31514);
arglist__31514 = cljs.core.next(arglist__31514);
var G__30735 = cljs.core.first(arglist__31514);
arglist__31514 = cljs.core.next(arglist__31514);
var G__30736 = cljs.core.first(arglist__31514);
arglist__31514 = cljs.core.next(arglist__31514);
var G__30737 = cljs.core.first(arglist__31514);
arglist__31514 = cljs.core.next(arglist__31514);
var G__30738 = cljs.core.first(arglist__31514);
arglist__31514 = cljs.core.next(arglist__31514);
var G__30739 = cljs.core.first(arglist__31514);
arglist__31514 = cljs.core.next(arglist__31514);
var G__30740 = cljs.core.first(arglist__31514);
arglist__31514 = cljs.core.next(arglist__31514);
var G__30741 = cljs.core.first(arglist__31514);
arglist__31514 = cljs.core.next(arglist__31514);
var G__30742 = cljs.core.first(arglist__31514);
arglist__31514 = cljs.core.next(arglist__31514);
var G__30743 = cljs.core.first(arglist__31514);
arglist__31514 = cljs.core.next(arglist__31514);
var G__30744 = cljs.core.first(arglist__31514);
arglist__31514 = cljs.core.next(arglist__31514);
var G__30745 = cljs.core.first(arglist__31514);
var G__30746 = cljs.core.rest(arglist__31514);
return sci$impl$fns$arity_13__delegate(G__30733,G__30734,G__30735,G__30736,G__30737,G__30738,G__30739,G__30740,G__30741,G__30742,G__30743,G__30744,G__30745,G__30746);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__30747,G__30748,G__30749,G__30750,G__30751,G__30752,G__30753,G__30754,G__30755,G__30756,G__30757,G__30758,G__30759,G__30760,G__30761){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30747);

(invoc_array[(1)] = G__30748);

(invoc_array[(2)] = G__30749);

(invoc_array[(3)] = G__30750);

(invoc_array[(4)] = G__30751);

(invoc_array[(5)] = G__30752);

(invoc_array[(6)] = G__30753);

(invoc_array[(7)] = G__30754);

(invoc_array[(8)] = G__30755);

(invoc_array[(9)] = G__30756);

(invoc_array[(10)] = G__30757);

(invoc_array[(11)] = G__30758);

(invoc_array[(12)] = G__30759);

(invoc_array[(13)] = G__30760);

(invoc_array[vararg_idx] = G__30761);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__30747,G__30748,G__30749,G__30750,G__30751,G__30752,G__30753,G__30754,G__30755,G__30756,G__30757,G__30758,G__30759,G__30760,var_args){
var G__30761 = null;
if (arguments.length > 14) {
var G__31521__i = 0, G__31521__a = new Array(arguments.length -  14);
while (G__31521__i < G__31521__a.length) {G__31521__a[G__31521__i] = arguments[G__31521__i + 14]; ++G__31521__i;}
  G__30761 = new cljs.core.IndexedSeq(G__31521__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__30747,G__30748,G__30749,G__30750,G__30751,G__30752,G__30753,G__30754,G__30755,G__30756,G__30757,G__30758,G__30759,G__30760,G__30761);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__31522){
var G__30747 = cljs.core.first(arglist__31522);
arglist__31522 = cljs.core.next(arglist__31522);
var G__30748 = cljs.core.first(arglist__31522);
arglist__31522 = cljs.core.next(arglist__31522);
var G__30749 = cljs.core.first(arglist__31522);
arglist__31522 = cljs.core.next(arglist__31522);
var G__30750 = cljs.core.first(arglist__31522);
arglist__31522 = cljs.core.next(arglist__31522);
var G__30751 = cljs.core.first(arglist__31522);
arglist__31522 = cljs.core.next(arglist__31522);
var G__30752 = cljs.core.first(arglist__31522);
arglist__31522 = cljs.core.next(arglist__31522);
var G__30753 = cljs.core.first(arglist__31522);
arglist__31522 = cljs.core.next(arglist__31522);
var G__30754 = cljs.core.first(arglist__31522);
arglist__31522 = cljs.core.next(arglist__31522);
var G__30755 = cljs.core.first(arglist__31522);
arglist__31522 = cljs.core.next(arglist__31522);
var G__30756 = cljs.core.first(arglist__31522);
arglist__31522 = cljs.core.next(arglist__31522);
var G__30757 = cljs.core.first(arglist__31522);
arglist__31522 = cljs.core.next(arglist__31522);
var G__30758 = cljs.core.first(arglist__31522);
arglist__31522 = cljs.core.next(arglist__31522);
var G__30759 = cljs.core.first(arglist__31522);
arglist__31522 = cljs.core.next(arglist__31522);
var G__30760 = cljs.core.first(arglist__31522);
var G__30761 = cljs.core.rest(arglist__31522);
return sci$impl$fns$arity_14__delegate(G__30747,G__30748,G__30749,G__30750,G__30751,G__30752,G__30753,G__30754,G__30755,G__30756,G__30757,G__30758,G__30759,G__30760,G__30761);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__30762,G__30763,G__30764,G__30765,G__30766,G__30767,G__30768,G__30769,G__30770,G__30771,G__30772,G__30773,G__30774,G__30775,G__30776,G__30777){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30762);

(invoc_array[(1)] = G__30763);

(invoc_array[(2)] = G__30764);

(invoc_array[(3)] = G__30765);

(invoc_array[(4)] = G__30766);

(invoc_array[(5)] = G__30767);

(invoc_array[(6)] = G__30768);

(invoc_array[(7)] = G__30769);

(invoc_array[(8)] = G__30770);

(invoc_array[(9)] = G__30771);

(invoc_array[(10)] = G__30772);

(invoc_array[(11)] = G__30773);

(invoc_array[(12)] = G__30774);

(invoc_array[(13)] = G__30775);

(invoc_array[(14)] = G__30776);

(invoc_array[vararg_idx] = G__30777);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__30762,G__30763,G__30764,G__30765,G__30766,G__30767,G__30768,G__30769,G__30770,G__30771,G__30772,G__30773,G__30774,G__30775,G__30776,var_args){
var G__30777 = null;
if (arguments.length > 15) {
var G__31523__i = 0, G__31523__a = new Array(arguments.length -  15);
while (G__31523__i < G__31523__a.length) {G__31523__a[G__31523__i] = arguments[G__31523__i + 15]; ++G__31523__i;}
  G__30777 = new cljs.core.IndexedSeq(G__31523__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__30762,G__30763,G__30764,G__30765,G__30766,G__30767,G__30768,G__30769,G__30770,G__30771,G__30772,G__30773,G__30774,G__30775,G__30776,G__30777);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__31524){
var G__30762 = cljs.core.first(arglist__31524);
arglist__31524 = cljs.core.next(arglist__31524);
var G__30763 = cljs.core.first(arglist__31524);
arglist__31524 = cljs.core.next(arglist__31524);
var G__30764 = cljs.core.first(arglist__31524);
arglist__31524 = cljs.core.next(arglist__31524);
var G__30765 = cljs.core.first(arglist__31524);
arglist__31524 = cljs.core.next(arglist__31524);
var G__30766 = cljs.core.first(arglist__31524);
arglist__31524 = cljs.core.next(arglist__31524);
var G__30767 = cljs.core.first(arglist__31524);
arglist__31524 = cljs.core.next(arglist__31524);
var G__30768 = cljs.core.first(arglist__31524);
arglist__31524 = cljs.core.next(arglist__31524);
var G__30769 = cljs.core.first(arglist__31524);
arglist__31524 = cljs.core.next(arglist__31524);
var G__30770 = cljs.core.first(arglist__31524);
arglist__31524 = cljs.core.next(arglist__31524);
var G__30771 = cljs.core.first(arglist__31524);
arglist__31524 = cljs.core.next(arglist__31524);
var G__30772 = cljs.core.first(arglist__31524);
arglist__31524 = cljs.core.next(arglist__31524);
var G__30773 = cljs.core.first(arglist__31524);
arglist__31524 = cljs.core.next(arglist__31524);
var G__30774 = cljs.core.first(arglist__31524);
arglist__31524 = cljs.core.next(arglist__31524);
var G__30775 = cljs.core.first(arglist__31524);
arglist__31524 = cljs.core.next(arglist__31524);
var G__30776 = cljs.core.first(arglist__31524);
var G__30777 = cljs.core.rest(arglist__31524);
return sci$impl$fns$arity_15__delegate(G__30762,G__30763,G__30764,G__30765,G__30766,G__30767,G__30768,G__30769,G__30770,G__30771,G__30772,G__30773,G__30774,G__30775,G__30776,G__30777);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__30784,G__30785,G__30786,G__30787,G__30788,G__30789,G__30790,G__30791,G__30792,G__30793,G__30794,G__30795,G__30796,G__30797,G__30798,G__30799,G__30800){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30784);

(invoc_array[(1)] = G__30785);

(invoc_array[(2)] = G__30786);

(invoc_array[(3)] = G__30787);

(invoc_array[(4)] = G__30788);

(invoc_array[(5)] = G__30789);

(invoc_array[(6)] = G__30790);

(invoc_array[(7)] = G__30791);

(invoc_array[(8)] = G__30792);

(invoc_array[(9)] = G__30793);

(invoc_array[(10)] = G__30794);

(invoc_array[(11)] = G__30795);

(invoc_array[(12)] = G__30796);

(invoc_array[(13)] = G__30797);

(invoc_array[(14)] = G__30798);

(invoc_array[(15)] = G__30799);

(invoc_array[vararg_idx] = G__30800);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__30784,G__30785,G__30786,G__30787,G__30788,G__30789,G__30790,G__30791,G__30792,G__30793,G__30794,G__30795,G__30796,G__30797,G__30798,G__30799,var_args){
var G__30800 = null;
if (arguments.length > 16) {
var G__31533__i = 0, G__31533__a = new Array(arguments.length -  16);
while (G__31533__i < G__31533__a.length) {G__31533__a[G__31533__i] = arguments[G__31533__i + 16]; ++G__31533__i;}
  G__30800 = new cljs.core.IndexedSeq(G__31533__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__30784,G__30785,G__30786,G__30787,G__30788,G__30789,G__30790,G__30791,G__30792,G__30793,G__30794,G__30795,G__30796,G__30797,G__30798,G__30799,G__30800);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__31534){
var G__30784 = cljs.core.first(arglist__31534);
arglist__31534 = cljs.core.next(arglist__31534);
var G__30785 = cljs.core.first(arglist__31534);
arglist__31534 = cljs.core.next(arglist__31534);
var G__30786 = cljs.core.first(arglist__31534);
arglist__31534 = cljs.core.next(arglist__31534);
var G__30787 = cljs.core.first(arglist__31534);
arglist__31534 = cljs.core.next(arglist__31534);
var G__30788 = cljs.core.first(arglist__31534);
arglist__31534 = cljs.core.next(arglist__31534);
var G__30789 = cljs.core.first(arglist__31534);
arglist__31534 = cljs.core.next(arglist__31534);
var G__30790 = cljs.core.first(arglist__31534);
arglist__31534 = cljs.core.next(arglist__31534);
var G__30791 = cljs.core.first(arglist__31534);
arglist__31534 = cljs.core.next(arglist__31534);
var G__30792 = cljs.core.first(arglist__31534);
arglist__31534 = cljs.core.next(arglist__31534);
var G__30793 = cljs.core.first(arglist__31534);
arglist__31534 = cljs.core.next(arglist__31534);
var G__30794 = cljs.core.first(arglist__31534);
arglist__31534 = cljs.core.next(arglist__31534);
var G__30795 = cljs.core.first(arglist__31534);
arglist__31534 = cljs.core.next(arglist__31534);
var G__30796 = cljs.core.first(arglist__31534);
arglist__31534 = cljs.core.next(arglist__31534);
var G__30797 = cljs.core.first(arglist__31534);
arglist__31534 = cljs.core.next(arglist__31534);
var G__30798 = cljs.core.first(arglist__31534);
arglist__31534 = cljs.core.next(arglist__31534);
var G__30799 = cljs.core.first(arglist__31534);
var G__30800 = cljs.core.rest(arglist__31534);
return sci$impl$fns$arity_16__delegate(G__30784,G__30785,G__30786,G__30787,G__30788,G__30789,G__30790,G__30791,G__30792,G__30793,G__30794,G__30795,G__30796,G__30797,G__30798,G__30799,G__30800);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__30806,G__30807,G__30808,G__30809,G__30810,G__30811,G__30812,G__30813,G__30814,G__30815,G__30816,G__30817,G__30818,G__30819,G__30820,G__30821,G__30822,G__30823){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30806);

(invoc_array[(1)] = G__30807);

(invoc_array[(2)] = G__30808);

(invoc_array[(3)] = G__30809);

(invoc_array[(4)] = G__30810);

(invoc_array[(5)] = G__30811);

(invoc_array[(6)] = G__30812);

(invoc_array[(7)] = G__30813);

(invoc_array[(8)] = G__30814);

(invoc_array[(9)] = G__30815);

(invoc_array[(10)] = G__30816);

(invoc_array[(11)] = G__30817);

(invoc_array[(12)] = G__30818);

(invoc_array[(13)] = G__30819);

(invoc_array[(14)] = G__30820);

(invoc_array[(15)] = G__30821);

(invoc_array[(16)] = G__30822);

(invoc_array[vararg_idx] = G__30823);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__30806,G__30807,G__30808,G__30809,G__30810,G__30811,G__30812,G__30813,G__30814,G__30815,G__30816,G__30817,G__30818,G__30819,G__30820,G__30821,G__30822,var_args){
var G__30823 = null;
if (arguments.length > 17) {
var G__31537__i = 0, G__31537__a = new Array(arguments.length -  17);
while (G__31537__i < G__31537__a.length) {G__31537__a[G__31537__i] = arguments[G__31537__i + 17]; ++G__31537__i;}
  G__30823 = new cljs.core.IndexedSeq(G__31537__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__30806,G__30807,G__30808,G__30809,G__30810,G__30811,G__30812,G__30813,G__30814,G__30815,G__30816,G__30817,G__30818,G__30819,G__30820,G__30821,G__30822,G__30823);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__31538){
var G__30806 = cljs.core.first(arglist__31538);
arglist__31538 = cljs.core.next(arglist__31538);
var G__30807 = cljs.core.first(arglist__31538);
arglist__31538 = cljs.core.next(arglist__31538);
var G__30808 = cljs.core.first(arglist__31538);
arglist__31538 = cljs.core.next(arglist__31538);
var G__30809 = cljs.core.first(arglist__31538);
arglist__31538 = cljs.core.next(arglist__31538);
var G__30810 = cljs.core.first(arglist__31538);
arglist__31538 = cljs.core.next(arglist__31538);
var G__30811 = cljs.core.first(arglist__31538);
arglist__31538 = cljs.core.next(arglist__31538);
var G__30812 = cljs.core.first(arglist__31538);
arglist__31538 = cljs.core.next(arglist__31538);
var G__30813 = cljs.core.first(arglist__31538);
arglist__31538 = cljs.core.next(arglist__31538);
var G__30814 = cljs.core.first(arglist__31538);
arglist__31538 = cljs.core.next(arglist__31538);
var G__30815 = cljs.core.first(arglist__31538);
arglist__31538 = cljs.core.next(arglist__31538);
var G__30816 = cljs.core.first(arglist__31538);
arglist__31538 = cljs.core.next(arglist__31538);
var G__30817 = cljs.core.first(arglist__31538);
arglist__31538 = cljs.core.next(arglist__31538);
var G__30818 = cljs.core.first(arglist__31538);
arglist__31538 = cljs.core.next(arglist__31538);
var G__30819 = cljs.core.first(arglist__31538);
arglist__31538 = cljs.core.next(arglist__31538);
var G__30820 = cljs.core.first(arglist__31538);
arglist__31538 = cljs.core.next(arglist__31538);
var G__30821 = cljs.core.first(arglist__31538);
arglist__31538 = cljs.core.next(arglist__31538);
var G__30822 = cljs.core.first(arglist__31538);
var G__30823 = cljs.core.rest(arglist__31538);
return sci$impl$fns$arity_17__delegate(G__30806,G__30807,G__30808,G__30809,G__30810,G__30811,G__30812,G__30813,G__30814,G__30815,G__30816,G__30817,G__30818,G__30819,G__30820,G__30821,G__30822,G__30823);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__30832,G__30833,G__30834,G__30835,G__30836,G__30837,G__30838,G__30839,G__30840,G__30841,G__30842,G__30843,G__30844,G__30845,G__30846,G__30847,G__30848,G__30849,G__30850){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30832);

(invoc_array[(1)] = G__30833);

(invoc_array[(2)] = G__30834);

(invoc_array[(3)] = G__30835);

(invoc_array[(4)] = G__30836);

(invoc_array[(5)] = G__30837);

(invoc_array[(6)] = G__30838);

(invoc_array[(7)] = G__30839);

(invoc_array[(8)] = G__30840);

(invoc_array[(9)] = G__30841);

(invoc_array[(10)] = G__30842);

(invoc_array[(11)] = G__30843);

(invoc_array[(12)] = G__30844);

(invoc_array[(13)] = G__30845);

(invoc_array[(14)] = G__30846);

(invoc_array[(15)] = G__30847);

(invoc_array[(16)] = G__30848);

(invoc_array[(17)] = G__30849);

(invoc_array[vararg_idx] = G__30850);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__30832,G__30833,G__30834,G__30835,G__30836,G__30837,G__30838,G__30839,G__30840,G__30841,G__30842,G__30843,G__30844,G__30845,G__30846,G__30847,G__30848,G__30849,var_args){
var G__30850 = null;
if (arguments.length > 18) {
var G__31546__i = 0, G__31546__a = new Array(arguments.length -  18);
while (G__31546__i < G__31546__a.length) {G__31546__a[G__31546__i] = arguments[G__31546__i + 18]; ++G__31546__i;}
  G__30850 = new cljs.core.IndexedSeq(G__31546__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__30832,G__30833,G__30834,G__30835,G__30836,G__30837,G__30838,G__30839,G__30840,G__30841,G__30842,G__30843,G__30844,G__30845,G__30846,G__30847,G__30848,G__30849,G__30850);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__31547){
var G__30832 = cljs.core.first(arglist__31547);
arglist__31547 = cljs.core.next(arglist__31547);
var G__30833 = cljs.core.first(arglist__31547);
arglist__31547 = cljs.core.next(arglist__31547);
var G__30834 = cljs.core.first(arglist__31547);
arglist__31547 = cljs.core.next(arglist__31547);
var G__30835 = cljs.core.first(arglist__31547);
arglist__31547 = cljs.core.next(arglist__31547);
var G__30836 = cljs.core.first(arglist__31547);
arglist__31547 = cljs.core.next(arglist__31547);
var G__30837 = cljs.core.first(arglist__31547);
arglist__31547 = cljs.core.next(arglist__31547);
var G__30838 = cljs.core.first(arglist__31547);
arglist__31547 = cljs.core.next(arglist__31547);
var G__30839 = cljs.core.first(arglist__31547);
arglist__31547 = cljs.core.next(arglist__31547);
var G__30840 = cljs.core.first(arglist__31547);
arglist__31547 = cljs.core.next(arglist__31547);
var G__30841 = cljs.core.first(arglist__31547);
arglist__31547 = cljs.core.next(arglist__31547);
var G__30842 = cljs.core.first(arglist__31547);
arglist__31547 = cljs.core.next(arglist__31547);
var G__30843 = cljs.core.first(arglist__31547);
arglist__31547 = cljs.core.next(arglist__31547);
var G__30844 = cljs.core.first(arglist__31547);
arglist__31547 = cljs.core.next(arglist__31547);
var G__30845 = cljs.core.first(arglist__31547);
arglist__31547 = cljs.core.next(arglist__31547);
var G__30846 = cljs.core.first(arglist__31547);
arglist__31547 = cljs.core.next(arglist__31547);
var G__30847 = cljs.core.first(arglist__31547);
arglist__31547 = cljs.core.next(arglist__31547);
var G__30848 = cljs.core.first(arglist__31547);
arglist__31547 = cljs.core.next(arglist__31547);
var G__30849 = cljs.core.first(arglist__31547);
var G__30850 = cljs.core.rest(arglist__31547);
return sci$impl$fns$arity_18__delegate(G__30832,G__30833,G__30834,G__30835,G__30836,G__30837,G__30838,G__30839,G__30840,G__30841,G__30842,G__30843,G__30844,G__30845,G__30846,G__30847,G__30848,G__30849,G__30850);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__30855,G__30856,G__30857,G__30858,G__30859,G__30860,G__30861,G__30862,G__30863,G__30864,G__30865,G__30866,G__30867,G__30868,G__30869,G__30870,G__30871,G__30872,G__30873,G__30874){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30855);

(invoc_array[(1)] = G__30856);

(invoc_array[(2)] = G__30857);

(invoc_array[(3)] = G__30858);

(invoc_array[(4)] = G__30859);

(invoc_array[(5)] = G__30860);

(invoc_array[(6)] = G__30861);

(invoc_array[(7)] = G__30862);

(invoc_array[(8)] = G__30863);

(invoc_array[(9)] = G__30864);

(invoc_array[(10)] = G__30865);

(invoc_array[(11)] = G__30866);

(invoc_array[(12)] = G__30867);

(invoc_array[(13)] = G__30868);

(invoc_array[(14)] = G__30869);

(invoc_array[(15)] = G__30870);

(invoc_array[(16)] = G__30871);

(invoc_array[(17)] = G__30872);

(invoc_array[(18)] = G__30873);

(invoc_array[vararg_idx] = G__30874);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__30855,G__30856,G__30857,G__30858,G__30859,G__30860,G__30861,G__30862,G__30863,G__30864,G__30865,G__30866,G__30867,G__30868,G__30869,G__30870,G__30871,G__30872,G__30873,var_args){
var G__30874 = null;
if (arguments.length > 19) {
var G__31549__i = 0, G__31549__a = new Array(arguments.length -  19);
while (G__31549__i < G__31549__a.length) {G__31549__a[G__31549__i] = arguments[G__31549__i + 19]; ++G__31549__i;}
  G__30874 = new cljs.core.IndexedSeq(G__31549__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__30855,G__30856,G__30857,G__30858,G__30859,G__30860,G__30861,G__30862,G__30863,G__30864,G__30865,G__30866,G__30867,G__30868,G__30869,G__30870,G__30871,G__30872,G__30873,G__30874);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__31550){
var G__30855 = cljs.core.first(arglist__31550);
arglist__31550 = cljs.core.next(arglist__31550);
var G__30856 = cljs.core.first(arglist__31550);
arglist__31550 = cljs.core.next(arglist__31550);
var G__30857 = cljs.core.first(arglist__31550);
arglist__31550 = cljs.core.next(arglist__31550);
var G__30858 = cljs.core.first(arglist__31550);
arglist__31550 = cljs.core.next(arglist__31550);
var G__30859 = cljs.core.first(arglist__31550);
arglist__31550 = cljs.core.next(arglist__31550);
var G__30860 = cljs.core.first(arglist__31550);
arglist__31550 = cljs.core.next(arglist__31550);
var G__30861 = cljs.core.first(arglist__31550);
arglist__31550 = cljs.core.next(arglist__31550);
var G__30862 = cljs.core.first(arglist__31550);
arglist__31550 = cljs.core.next(arglist__31550);
var G__30863 = cljs.core.first(arglist__31550);
arglist__31550 = cljs.core.next(arglist__31550);
var G__30864 = cljs.core.first(arglist__31550);
arglist__31550 = cljs.core.next(arglist__31550);
var G__30865 = cljs.core.first(arglist__31550);
arglist__31550 = cljs.core.next(arglist__31550);
var G__30866 = cljs.core.first(arglist__31550);
arglist__31550 = cljs.core.next(arglist__31550);
var G__30867 = cljs.core.first(arglist__31550);
arglist__31550 = cljs.core.next(arglist__31550);
var G__30868 = cljs.core.first(arglist__31550);
arglist__31550 = cljs.core.next(arglist__31550);
var G__30869 = cljs.core.first(arglist__31550);
arglist__31550 = cljs.core.next(arglist__31550);
var G__30870 = cljs.core.first(arglist__31550);
arglist__31550 = cljs.core.next(arglist__31550);
var G__30871 = cljs.core.first(arglist__31550);
arglist__31550 = cljs.core.next(arglist__31550);
var G__30872 = cljs.core.first(arglist__31550);
arglist__31550 = cljs.core.next(arglist__31550);
var G__30873 = cljs.core.first(arglist__31550);
var G__30874 = cljs.core.rest(arglist__31550);
return sci$impl$fns$arity_19__delegate(G__30855,G__30856,G__30857,G__30858,G__30859,G__30860,G__30861,G__30862,G__30863,G__30864,G__30865,G__30866,G__30867,G__30868,G__30869,G__30870,G__30871,G__30872,G__30873,G__30874);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__30992,G__30993,G__30994,G__30995,G__30996,G__31000,G__31001,G__31002,G__31003,G__31005,G__31006,G__31007,G__31008,G__31009,G__31011,G__31014,G__31016,G__31017,G__31018,G__31019,G__31020){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__30992);

(invoc_array[(1)] = G__30993);

(invoc_array[(2)] = G__30994);

(invoc_array[(3)] = G__30995);

(invoc_array[(4)] = G__30996);

(invoc_array[(5)] = G__31000);

(invoc_array[(6)] = G__31001);

(invoc_array[(7)] = G__31002);

(invoc_array[(8)] = G__31003);

(invoc_array[(9)] = G__31005);

(invoc_array[(10)] = G__31006);

(invoc_array[(11)] = G__31007);

(invoc_array[(12)] = G__31008);

(invoc_array[(13)] = G__31009);

(invoc_array[(14)] = G__31011);

(invoc_array[(15)] = G__31014);

(invoc_array[(16)] = G__31016);

(invoc_array[(17)] = G__31017);

(invoc_array[(18)] = G__31018);

(invoc_array[(19)] = G__31019);

(invoc_array[vararg_idx] = G__31020);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__30992,G__30993,G__30994,G__30995,G__30996,G__31000,G__31001,G__31002,G__31003,G__31005,G__31006,G__31007,G__31008,G__31009,G__31011,G__31014,G__31016,G__31017,G__31018,G__31019,var_args){
var G__31020 = null;
if (arguments.length > 20) {
var G__31555__i = 0, G__31555__a = new Array(arguments.length -  20);
while (G__31555__i < G__31555__a.length) {G__31555__a[G__31555__i] = arguments[G__31555__i + 20]; ++G__31555__i;}
  G__31020 = new cljs.core.IndexedSeq(G__31555__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__30992,G__30993,G__30994,G__30995,G__30996,G__31000,G__31001,G__31002,G__31003,G__31005,G__31006,G__31007,G__31008,G__31009,G__31011,G__31014,G__31016,G__31017,G__31018,G__31019,G__31020);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__31558){
var G__30992 = cljs.core.first(arglist__31558);
arglist__31558 = cljs.core.next(arglist__31558);
var G__30993 = cljs.core.first(arglist__31558);
arglist__31558 = cljs.core.next(arglist__31558);
var G__30994 = cljs.core.first(arglist__31558);
arglist__31558 = cljs.core.next(arglist__31558);
var G__30995 = cljs.core.first(arglist__31558);
arglist__31558 = cljs.core.next(arglist__31558);
var G__30996 = cljs.core.first(arglist__31558);
arglist__31558 = cljs.core.next(arglist__31558);
var G__31000 = cljs.core.first(arglist__31558);
arglist__31558 = cljs.core.next(arglist__31558);
var G__31001 = cljs.core.first(arglist__31558);
arglist__31558 = cljs.core.next(arglist__31558);
var G__31002 = cljs.core.first(arglist__31558);
arglist__31558 = cljs.core.next(arglist__31558);
var G__31003 = cljs.core.first(arglist__31558);
arglist__31558 = cljs.core.next(arglist__31558);
var G__31005 = cljs.core.first(arglist__31558);
arglist__31558 = cljs.core.next(arglist__31558);
var G__31006 = cljs.core.first(arglist__31558);
arglist__31558 = cljs.core.next(arglist__31558);
var G__31007 = cljs.core.first(arglist__31558);
arglist__31558 = cljs.core.next(arglist__31558);
var G__31008 = cljs.core.first(arglist__31558);
arglist__31558 = cljs.core.next(arglist__31558);
var G__31009 = cljs.core.first(arglist__31558);
arglist__31558 = cljs.core.next(arglist__31558);
var G__31011 = cljs.core.first(arglist__31558);
arglist__31558 = cljs.core.next(arglist__31558);
var G__31014 = cljs.core.first(arglist__31558);
arglist__31558 = cljs.core.next(arglist__31558);
var G__31016 = cljs.core.first(arglist__31558);
arglist__31558 = cljs.core.next(arglist__31558);
var G__31017 = cljs.core.first(arglist__31558);
arglist__31558 = cljs.core.next(arglist__31558);
var G__31018 = cljs.core.first(arglist__31558);
arglist__31558 = cljs.core.next(arglist__31558);
var G__31019 = cljs.core.first(arglist__31558);
var G__31020 = cljs.core.rest(arglist__31558);
return sci$impl$fns$arity_20__delegate(G__30992,G__30993,G__30994,G__30995,G__30996,G__31000,G__31001,G__31002,G__31003,G__31005,G__31006,G__31007,G__31008,G__31009,G__31011,G__31014,G__31016,G__31017,G__31018,G__31019,G__31020);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30553)].join('')));

}
})():(function (){var G__31060 = fixed_arity;
switch (G__31060) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

while(true){
var ret__29290__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29290__auto__)){
continue;
} else {
return ret__29290__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__31065){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__31065);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__31070,G__31071){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__31070);

(invoc_array[(1)] = G__31071);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__31075,G__31076,G__31077){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__31075);

(invoc_array[(1)] = G__31076);

(invoc_array[(2)] = G__31077);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__31079,G__31080,G__31081,G__31082){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__31079);

(invoc_array[(1)] = G__31080);

(invoc_array[(2)] = G__31081);

(invoc_array[(3)] = G__31082);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__31087,G__31088,G__31089,G__31090,G__31091){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__31087);

(invoc_array[(1)] = G__31088);

(invoc_array[(2)] = G__31089);

(invoc_array[(3)] = G__31090);

(invoc_array[(4)] = G__31091);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__31092,G__31093,G__31094,G__31095,G__31096,G__31097){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__31092);

(invoc_array[(1)] = G__31093);

(invoc_array[(2)] = G__31094);

(invoc_array[(3)] = G__31095);

(invoc_array[(4)] = G__31096);

(invoc_array[(5)] = G__31097);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__31099,G__31100,G__31101,G__31102,G__31103,G__31104,G__31105){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__31099);

(invoc_array[(1)] = G__31100);

(invoc_array[(2)] = G__31101);

(invoc_array[(3)] = G__31102);

(invoc_array[(4)] = G__31103);

(invoc_array[(5)] = G__31104);

(invoc_array[(6)] = G__31105);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__31110,G__31111,G__31112,G__31113,G__31114,G__31115,G__31116,G__31117){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__31110);

(invoc_array[(1)] = G__31111);

(invoc_array[(2)] = G__31112);

(invoc_array[(3)] = G__31113);

(invoc_array[(4)] = G__31114);

(invoc_array[(5)] = G__31115);

(invoc_array[(6)] = G__31116);

(invoc_array[(7)] = G__31117);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__31118,G__31119,G__31120,G__31121,G__31122,G__31123,G__31124,G__31125,G__31126){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__31118);

(invoc_array[(1)] = G__31119);

(invoc_array[(2)] = G__31120);

(invoc_array[(3)] = G__31121);

(invoc_array[(4)] = G__31122);

(invoc_array[(5)] = G__31123);

(invoc_array[(6)] = G__31124);

(invoc_array[(7)] = G__31125);

(invoc_array[(8)] = G__31126);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__31135,G__31136,G__31137,G__31138,G__31139,G__31140,G__31141,G__31142,G__31143,G__31144){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__31135);

(invoc_array[(1)] = G__31136);

(invoc_array[(2)] = G__31137);

(invoc_array[(3)] = G__31138);

(invoc_array[(4)] = G__31139);

(invoc_array[(5)] = G__31140);

(invoc_array[(6)] = G__31141);

(invoc_array[(7)] = G__31142);

(invoc_array[(8)] = G__31143);

(invoc_array[(9)] = G__31144);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__31150,G__31151,G__31152,G__31153,G__31154,G__31155,G__31156,G__31157,G__31158,G__31159,G__31160){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__31150);

(invoc_array[(1)] = G__31151);

(invoc_array[(2)] = G__31152);

(invoc_array[(3)] = G__31153);

(invoc_array[(4)] = G__31154);

(invoc_array[(5)] = G__31155);

(invoc_array[(6)] = G__31156);

(invoc_array[(7)] = G__31157);

(invoc_array[(8)] = G__31158);

(invoc_array[(9)] = G__31159);

(invoc_array[(10)] = G__31160);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__31164,G__31165,G__31166,G__31167,G__31168,G__31169,G__31170,G__31171,G__31172,G__31173,G__31174,G__31175){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__31164);

(invoc_array[(1)] = G__31165);

(invoc_array[(2)] = G__31166);

(invoc_array[(3)] = G__31167);

(invoc_array[(4)] = G__31168);

(invoc_array[(5)] = G__31169);

(invoc_array[(6)] = G__31170);

(invoc_array[(7)] = G__31171);

(invoc_array[(8)] = G__31172);

(invoc_array[(9)] = G__31173);

(invoc_array[(10)] = G__31174);

(invoc_array[(11)] = G__31175);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__31180,G__31181,G__31182,G__31183,G__31184,G__31185,G__31186,G__31187,G__31188,G__31189,G__31190,G__31191,G__31192){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__31180);

(invoc_array[(1)] = G__31181);

(invoc_array[(2)] = G__31182);

(invoc_array[(3)] = G__31183);

(invoc_array[(4)] = G__31184);

(invoc_array[(5)] = G__31185);

(invoc_array[(6)] = G__31186);

(invoc_array[(7)] = G__31187);

(invoc_array[(8)] = G__31188);

(invoc_array[(9)] = G__31189);

(invoc_array[(10)] = G__31190);

(invoc_array[(11)] = G__31191);

(invoc_array[(12)] = G__31192);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__31196,G__31197,G__31198,G__31199,G__31200,G__31201,G__31202,G__31203,G__31204,G__31205,G__31206,G__31207,G__31208,G__31209){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__31196);

(invoc_array[(1)] = G__31197);

(invoc_array[(2)] = G__31198);

(invoc_array[(3)] = G__31199);

(invoc_array[(4)] = G__31200);

(invoc_array[(5)] = G__31201);

(invoc_array[(6)] = G__31202);

(invoc_array[(7)] = G__31203);

(invoc_array[(8)] = G__31204);

(invoc_array[(9)] = G__31205);

(invoc_array[(10)] = G__31206);

(invoc_array[(11)] = G__31207);

(invoc_array[(12)] = G__31208);

(invoc_array[(13)] = G__31209);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__31210,G__31211,G__31212,G__31213,G__31214,G__31215,G__31216,G__31217,G__31218,G__31219,G__31220,G__31221,G__31222,G__31223,G__31224){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__31210);

(invoc_array[(1)] = G__31211);

(invoc_array[(2)] = G__31212);

(invoc_array[(3)] = G__31213);

(invoc_array[(4)] = G__31214);

(invoc_array[(5)] = G__31215);

(invoc_array[(6)] = G__31216);

(invoc_array[(7)] = G__31217);

(invoc_array[(8)] = G__31218);

(invoc_array[(9)] = G__31219);

(invoc_array[(10)] = G__31220);

(invoc_array[(11)] = G__31221);

(invoc_array[(12)] = G__31222);

(invoc_array[(13)] = G__31223);

(invoc_array[(14)] = G__31224);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__31237,G__31238,G__31239,G__31240,G__31241,G__31242,G__31243,G__31244,G__31245,G__31246,G__31247,G__31248,G__31249,G__31250,G__31251,G__31252){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__31237);

(invoc_array[(1)] = G__31238);

(invoc_array[(2)] = G__31239);

(invoc_array[(3)] = G__31240);

(invoc_array[(4)] = G__31241);

(invoc_array[(5)] = G__31242);

(invoc_array[(6)] = G__31243);

(invoc_array[(7)] = G__31244);

(invoc_array[(8)] = G__31245);

(invoc_array[(9)] = G__31246);

(invoc_array[(10)] = G__31247);

(invoc_array[(11)] = G__31248);

(invoc_array[(12)] = G__31249);

(invoc_array[(13)] = G__31250);

(invoc_array[(14)] = G__31251);

(invoc_array[(15)] = G__31252);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__31261,G__31262,G__31263,G__31264,G__31265,G__31266,G__31267,G__31268,G__31269,G__31270,G__31271,G__31272,G__31273,G__31274,G__31275,G__31276,G__31277){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__31261);

(invoc_array[(1)] = G__31262);

(invoc_array[(2)] = G__31263);

(invoc_array[(3)] = G__31264);

(invoc_array[(4)] = G__31265);

(invoc_array[(5)] = G__31266);

(invoc_array[(6)] = G__31267);

(invoc_array[(7)] = G__31268);

(invoc_array[(8)] = G__31269);

(invoc_array[(9)] = G__31270);

(invoc_array[(10)] = G__31271);

(invoc_array[(11)] = G__31272);

(invoc_array[(12)] = G__31273);

(invoc_array[(13)] = G__31274);

(invoc_array[(14)] = G__31275);

(invoc_array[(15)] = G__31276);

(invoc_array[(16)] = G__31277);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__31296,G__31297,G__31298,G__31299,G__31300,G__31301,G__31302,G__31303,G__31304,G__31305,G__31306,G__31307,G__31308,G__31309,G__31310,G__31311,G__31312,G__31313){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__31296);

(invoc_array[(1)] = G__31297);

(invoc_array[(2)] = G__31298);

(invoc_array[(3)] = G__31299);

(invoc_array[(4)] = G__31300);

(invoc_array[(5)] = G__31301);

(invoc_array[(6)] = G__31302);

(invoc_array[(7)] = G__31303);

(invoc_array[(8)] = G__31304);

(invoc_array[(9)] = G__31305);

(invoc_array[(10)] = G__31306);

(invoc_array[(11)] = G__31307);

(invoc_array[(12)] = G__31308);

(invoc_array[(13)] = G__31309);

(invoc_array[(14)] = G__31310);

(invoc_array[(15)] = G__31311);

(invoc_array[(16)] = G__31312);

(invoc_array[(17)] = G__31313);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__31325,G__31326,G__31327,G__31328,G__31329,G__31330,G__31331,G__31332,G__31333,G__31334,G__31335,G__31336,G__31337,G__31338,G__31339,G__31340,G__31341,G__31342,G__31343){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__31325);

(invoc_array[(1)] = G__31326);

(invoc_array[(2)] = G__31327);

(invoc_array[(3)] = G__31328);

(invoc_array[(4)] = G__31329);

(invoc_array[(5)] = G__31330);

(invoc_array[(6)] = G__31331);

(invoc_array[(7)] = G__31332);

(invoc_array[(8)] = G__31333);

(invoc_array[(9)] = G__31334);

(invoc_array[(10)] = G__31335);

(invoc_array[(11)] = G__31336);

(invoc_array[(12)] = G__31337);

(invoc_array[(13)] = G__31338);

(invoc_array[(14)] = G__31339);

(invoc_array[(15)] = G__31340);

(invoc_array[(16)] = G__31341);

(invoc_array[(17)] = G__31342);

(invoc_array[(18)] = G__31343);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__31347,G__31348,G__31349,G__31350,G__31351,G__31352,G__31353,G__31354,G__31355,G__31356,G__31357,G__31358,G__31359,G__31360,G__31361,G__31362,G__31363,G__31364,G__31365,G__31366){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__31347);

(invoc_array[(1)] = G__31348);

(invoc_array[(2)] = G__31349);

(invoc_array[(3)] = G__31350);

(invoc_array[(4)] = G__31351);

(invoc_array[(5)] = G__31352);

(invoc_array[(6)] = G__31353);

(invoc_array[(7)] = G__31354);

(invoc_array[(8)] = G__31355);

(invoc_array[(9)] = G__31356);

(invoc_array[(10)] = G__31357);

(invoc_array[(11)] = G__31358);

(invoc_array[(12)] = G__31359);

(invoc_array[(13)] = G__31360);

(invoc_array[(14)] = G__31361);

(invoc_array[(15)] = G__31362);

(invoc_array[(16)] = G__31363);

(invoc_array[(17)] = G__31364);

(invoc_array[(18)] = G__31365);

(invoc_array[(19)] = G__31366);

while(true){
var ret__29293__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__29293__auto__)){
continue;
} else {
return ret__29293__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31060)].join('')));

}
})());
return f;
}));

(sci.impl.fns.fun.cljs$lang$maxFixedArity = 11);

sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,enclosed_array,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5(ctx,enclosed_array,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});
sci.impl.fns.maybe_destructured = (function sci$impl$fns$maybe_destructured(params,body){
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,params)){
return cljs.core.cons(params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first(params__$1) instanceof cljs.core.Symbol)){
var G__31595 = cljs.core.next(params__$1);
var G__31596 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__31597 = lets;
params__$1 = G__31595;
new_params = G__31596;
lets = G__31597;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__31598 = cljs.core.next(params__$1);
var G__31599 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__31600 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__31598;
new_params = G__31599;
lets = G__31600;
continue;
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new_params,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,lets,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)))));
}
break;
}
}
});
sci.impl.fns.fn_STAR__STAR_ = (function sci$impl$fns$fn_STAR__STAR_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___31601 = arguments.length;
var i__5727__auto___31602 = (0);
while(true){
if((i__5727__auto___31602 < len__5726__auto___31601)){
args__5732__auto__.push((arguments[i__5727__auto___31602]));

var G__31603 = (i__5727__auto___31602 + (1));
i__5727__auto___31602 = G__31603;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return sci.impl.fns.fn_STAR__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(sci.impl.fns.fn_STAR__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (form,_,sigs){
var name = (((cljs.core.first(sigs) instanceof cljs.core.Symbol))?cljs.core.first(sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next(sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_(cljs.core.first(sigs__$1)))?(new cljs.core.List(null,sigs__$1,null,(1),null)):((cljs.core.seq_QMARK_(cljs.core.first(sigs__$1)))?sigs__$1:sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq(sigs__$1))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(sigs__$1))," should be a vector"].join(''):"Parameter declaration missing"),form)));
var psig = (function (sig){
if((!(cljs.core.seq_QMARK_(sig)))){
throw sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join(''),form);
} else {
}

var vec__31390 = sig;
var seq__31391 = cljs.core.seq(vec__31390);
var first__31392 = cljs.core.first(seq__31391);
var seq__31391__$1 = cljs.core.next(seq__31391);
var params = first__31392;
var body = seq__31391__$1;
var ___$1 = (((!(cljs.core.vector_QMARK_(params))))?sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq_QMARK_(cljs.core.first(sigs__$2)))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(params)," should be a vector"].join(''):["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join('')),form):null);
var conds = ((((cljs.core.next(body)) && (cljs.core.map_QMARK_(cljs.core.first(body)))))?cljs.core.first(body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next(body):body);
var conds__$1 = (function (){var or__5002__auto__ = conds;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.meta(params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)),(new cljs.core.List(null,((((1) < cljs.core.count(body__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body__$1))):cljs.core.first(body__$1)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),post),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))], 0)))),null,(1),null))))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),pre),body__$2):body__$2);
return sci.impl.fns.maybe_destructured(params,body__$3);
});
var new_sigs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(psig,sigs__$2);
var expr = cljs.core.with_meta((cljs.core.truth_(name)?cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta(form));
return expr;
}));

(sci.impl.fns.fn_STAR__STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq31381){
var G__31382 = cljs.core.first(seq31381);
var seq31381__$1 = cljs.core.next(seq31381);
var G__31383 = cljs.core.first(seq31381__$1);
var seq31381__$2 = cljs.core.next(seq31381__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31382,G__31383,seq31381__$2);
}));

sci.impl.fns.sigs = (function sci$impl$fns$sigs(fdecl){
var asig = (function (fdecl__$1){
var arglist = cljs.core.first(fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.first(arglist)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(arglist,(2),cljs.core.count(arglist)):arglist);
var body = cljs.core.next(fdecl__$1);
if(cljs.core.map_QMARK_(cljs.core.first(body))){
if(cljs.core.next(body)){
return cljs.core.with_meta(arglist__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(arglist__$1))?cljs.core.meta(arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first(body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_(cljs.core.first(fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__31605 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__31606 = cljs.core.next(fdecls);
ret = G__31605;
fdecls = G__31606;
continue;
} else {
return cljs.core.seq(ret);
}
break;
}
} else {
return (new cljs.core.List(null,cljs.core.identity(asig(fdecl)),null,(1),null));
}
});
sci.impl.fns.defn_STAR_ = (function sci$impl$fns$defn_STAR_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___31607 = arguments.length;
var i__5727__auto___31608 = (0);
while(true){
if((i__5727__auto___31608 < len__5726__auto___31607)){
args__5732__auto__.push((arguments[i__5727__auto___31608]));

var G__31609 = (i__5727__auto___31608 + (1));
i__5727__auto___31608 = G__31609;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return sci.impl.fns.defn_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(sci.impl.fns.defn_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (form,_,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("First argument to defn must be a symbol",form);
}

var m = ((typeof cljs.core.first(fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.first(fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first(fdecl) === 'string')?cljs.core.next(fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,cljs.core.first(fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.next(fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl__$2)))?(new cljs.core.List(null,fdecl__$2,null,(1),null)):fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.last(fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.butlast(fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,sci.impl.fns.sigs(fdecl__$4),null,(1),null)),(2),null))], null),m__$2);
var name_m = cljs.core.meta(name);
var m__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(name_m)?name_m:cljs.core.PersistentArrayMap.EMPTY),m__$3);
var macro_QMARK_ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(name_m);
var expr = cljs.core.cons(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),fdecl__$4);
var expr__$1 = (new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),(new cljs.core.List(null,cljs.core.with_meta(name,m__$4),(new cljs.core.List(null,(cljs.core.truth_((function (){var or__5002__auto__ = macro_QMARK_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return name;
}
})())?cljs.core.with_meta(expr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","fn","sci.impl/fn",1695180073),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"macro","macro",-867863404),macro_QMARK_,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),name], null)], null)):expr),null,(1),null)),(2),null)),(3),null));
return expr__$1;
}));

(sci.impl.fns.defn_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq31404){
var G__31405 = cljs.core.first(seq31404);
var seq31404__$1 = cljs.core.next(seq31404);
var G__31406 = cljs.core.first(seq31404__$1);
var seq31404__$2 = cljs.core.next(seq31404__$1);
var G__31407 = cljs.core.first(seq31404__$2);
var seq31404__$3 = cljs.core.next(seq31404__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31405,G__31406,G__31407,seq31404__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___31615 = arguments.length;
var i__5727__auto___31616 = (0);
while(true){
if((i__5727__auto___31616 < len__5726__auto___31615)){
args__5732__auto__.push((arguments[i__5727__auto___31616]));

var G__31617 = (i__5727__auto___31616 + (1));
i__5727__auto___31616 = G__31617;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return sci.impl.fns.defmacro_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(sci.impl.fns.defmacro_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (__AMPERSAND_form,__AMPERSAND_env,name,args){
var name__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
var prefix = (function (){var p = (new cljs.core.List(null,name__$1,null,(1),null));
var args__$1 = args;
while(true){
var f = cljs.core.first(args__$1);
if(typeof f === 'string'){
var G__31619 = cljs.core.cons(f,p);
var G__31620 = cljs.core.next(args__$1);
p = G__31619;
args__$1 = G__31620;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__31621 = cljs.core.cons(f,p);
var G__31622 = cljs.core.next(args__$1);
p = G__31621;
args__$1 = G__31622;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first(fd) === 'string'){
var G__31623 = cljs.core.next(fd);
fd = G__31623;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__31624 = cljs.core.next(fd);
fd = G__31624;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl)))?(new cljs.core.List(null,fdecl,null,(1),null)):fdecl);
var add_implicit_args = (function (fd){
var args__$1 = cljs.core.first(fd);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.cons(new cljs.core.Symbol(null,"&env","&env",-919163083,null),args__$1))),cljs.core.next(fd));
});
var add_args = (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first(ds);
if(cljs.core.map_QMARK_(d)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,d);
} else {
var G__31626 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__31627 = cljs.core.next(ds);
acc = G__31626;
ds = G__31627;
continue;
}
}
break;
}
});
var fdecl__$2 = cljs.core.seq(add_args(cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__31629 = cljs.core.next(p);
var G__31630 = cljs.core.cons(cljs.core.first(p),d);
p = G__31629;
d = G__31630;
continue;
} else {
return d;
}
break;
}
})();
return (new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),decl),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,name__$1,null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null));
}));

(sci.impl.fns.defmacro_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq31411){
var G__31412 = cljs.core.first(seq31411);
var seq31411__$1 = cljs.core.next(seq31411);
var G__31413 = cljs.core.first(seq31411__$1);
var seq31411__$2 = cljs.core.next(seq31411__$1);
var G__31414 = cljs.core.first(seq31411__$2);
var seq31411__$3 = cljs.core.next(seq31411__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31412,G__31413,G__31414,seq31411__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
