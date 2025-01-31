goog.provide('day8.re_frame_10x.tools.string');
/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
day8.re_frame_10x.tools.string.pluralize = (function day8$re_frame_10x$tools$string$pluralize(var_args){
var args__5732__auto__ = [];
var len__5726__auto___33138 = arguments.length;
var i__5727__auto___33139 = (0);
while(true){
if((i__5727__auto___33139 < len__5726__auto___33138)){
args__5732__auto__.push((arguments[i__5727__auto___33139]));

var G__33140 = (i__5727__auto___33139 + (1));
i__5727__auto___33139 = G__33140;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__33120){
var vec__33121 = p__33120;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33121,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num))?singular:(function (){var or__5002__auto__ = plural;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
}));

(day8.re_frame_10x.tools.string.pluralize.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize.cljs$lang$applyTo = (function (seq33110){
var G__33111 = cljs.core.first(seq33110);
var seq33110__$1 = cljs.core.next(seq33110);
var G__33112 = cljs.core.first(seq33110__$1);
var seq33110__$2 = cljs.core.next(seq33110__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33111,G__33112,seq33110__$2);
}));

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame_10x.tools.string.pluralize_ = (function day8$re_frame_10x$tools$string$pluralize_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___33146 = arguments.length;
var i__5727__auto___33147 = (0);
while(true){
if((i__5727__auto___33147 < len__5726__auto___33146)){
args__5732__auto__.push((arguments[i__5727__auto___33147]));

var G__33148 = (i__5727__auto___33147 + (1));
i__5727__auto___33147 = G__33148;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__33132){
var vec__33133 = p__33132;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33133,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num)){
return singular;
} else {
var or__5002__auto__ = plural;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
}
}));

(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$applyTo = (function (seq33129){
var G__33130 = cljs.core.first(seq33129);
var seq33129__$1 = cljs.core.next(seq33129);
var G__33131 = cljs.core.first(seq33129__$1);
var seq33129__$2 = cljs.core.next(seq33129__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33130,G__33131,seq33129__$2);
}));


//# sourceMappingURL=day8.re_frame_10x.tools.string.js.map
