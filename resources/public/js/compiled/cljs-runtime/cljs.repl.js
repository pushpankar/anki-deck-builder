goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__41358){
var map__41359 = p__41358;
var map__41359__$1 = cljs.core.__destructure_map(map__41359);
var m = map__41359__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41359__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41359__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41365_41581 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41366_41582 = null;
var count__41367_41583 = (0);
var i__41368_41584 = (0);
while(true){
if((i__41368_41584 < count__41367_41583)){
var f_41585 = chunk__41366_41582.cljs$core$IIndexed$_nth$arity$2(null, i__41368_41584);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_41585], 0));


var G__41586 = seq__41365_41581;
var G__41587 = chunk__41366_41582;
var G__41588 = count__41367_41583;
var G__41589 = (i__41368_41584 + (1));
seq__41365_41581 = G__41586;
chunk__41366_41582 = G__41587;
count__41367_41583 = G__41588;
i__41368_41584 = G__41589;
continue;
} else {
var temp__5804__auto___41591 = cljs.core.seq(seq__41365_41581);
if(temp__5804__auto___41591){
var seq__41365_41593__$1 = temp__5804__auto___41591;
if(cljs.core.chunked_seq_QMARK_(seq__41365_41593__$1)){
var c__5525__auto___41594 = cljs.core.chunk_first(seq__41365_41593__$1);
var G__41596 = cljs.core.chunk_rest(seq__41365_41593__$1);
var G__41597 = c__5525__auto___41594;
var G__41598 = cljs.core.count(c__5525__auto___41594);
var G__41599 = (0);
seq__41365_41581 = G__41596;
chunk__41366_41582 = G__41597;
count__41367_41583 = G__41598;
i__41368_41584 = G__41599;
continue;
} else {
var f_41600 = cljs.core.first(seq__41365_41593__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_41600], 0));


var G__41601 = cljs.core.next(seq__41365_41593__$1);
var G__41602 = null;
var G__41603 = (0);
var G__41604 = (0);
seq__41365_41581 = G__41601;
chunk__41366_41582 = G__41602;
count__41367_41583 = G__41603;
i__41368_41584 = G__41604;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41605 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_41605], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_41605)))?cljs.core.second(arglists_41605):arglists_41605)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41372_41609 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41373_41610 = null;
var count__41374_41611 = (0);
var i__41375_41612 = (0);
while(true){
if((i__41375_41612 < count__41374_41611)){
var vec__41384_41613 = chunk__41373_41610.cljs$core$IIndexed$_nth$arity$2(null, i__41375_41612);
var name_41614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41384_41613,(0),null);
var map__41387_41615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41384_41613,(1),null);
var map__41387_41616__$1 = cljs.core.__destructure_map(map__41387_41615);
var doc_41617 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41387_41616__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41387_41616__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_41614], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_41618], 0));

if(cljs.core.truth_(doc_41617)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_41617], 0));
} else {
}


var G__41620 = seq__41372_41609;
var G__41621 = chunk__41373_41610;
var G__41622 = count__41374_41611;
var G__41623 = (i__41375_41612 + (1));
seq__41372_41609 = G__41620;
chunk__41373_41610 = G__41621;
count__41374_41611 = G__41622;
i__41375_41612 = G__41623;
continue;
} else {
var temp__5804__auto___41624 = cljs.core.seq(seq__41372_41609);
if(temp__5804__auto___41624){
var seq__41372_41625__$1 = temp__5804__auto___41624;
if(cljs.core.chunked_seq_QMARK_(seq__41372_41625__$1)){
var c__5525__auto___41626 = cljs.core.chunk_first(seq__41372_41625__$1);
var G__41627 = cljs.core.chunk_rest(seq__41372_41625__$1);
var G__41628 = c__5525__auto___41626;
var G__41629 = cljs.core.count(c__5525__auto___41626);
var G__41630 = (0);
seq__41372_41609 = G__41627;
chunk__41373_41610 = G__41628;
count__41374_41611 = G__41629;
i__41375_41612 = G__41630;
continue;
} else {
var vec__41391_41631 = cljs.core.first(seq__41372_41625__$1);
var name_41632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41391_41631,(0),null);
var map__41394_41633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41391_41631,(1),null);
var map__41394_41634__$1 = cljs.core.__destructure_map(map__41394_41633);
var doc_41635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41394_41634__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41636 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41394_41634__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_41632], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_41636], 0));

if(cljs.core.truth_(doc_41635)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_41635], 0));
} else {
}


var G__41638 = cljs.core.next(seq__41372_41625__$1);
var G__41639 = null;
var G__41640 = (0);
var G__41641 = (0);
seq__41372_41609 = G__41638;
chunk__41373_41610 = G__41639;
count__41374_41611 = G__41640;
i__41375_41612 = G__41641;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__41397 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__41398 = null;
var count__41399 = (0);
var i__41400 = (0);
while(true){
if((i__41400 < count__41399)){
var role = chunk__41398.cljs$core$IIndexed$_nth$arity$2(null, i__41400);
var temp__5804__auto___41642__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___41642__$1)){
var spec_41644 = temp__5804__auto___41642__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_41644)], 0));
} else {
}


var G__41645 = seq__41397;
var G__41646 = chunk__41398;
var G__41647 = count__41399;
var G__41648 = (i__41400 + (1));
seq__41397 = G__41645;
chunk__41398 = G__41646;
count__41399 = G__41647;
i__41400 = G__41648;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__41397);
if(temp__5804__auto____$1){
var seq__41397__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__41397__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__41397__$1);
var G__41649 = cljs.core.chunk_rest(seq__41397__$1);
var G__41650 = c__5525__auto__;
var G__41651 = cljs.core.count(c__5525__auto__);
var G__41652 = (0);
seq__41397 = G__41649;
chunk__41398 = G__41650;
count__41399 = G__41651;
i__41400 = G__41652;
continue;
} else {
var role = cljs.core.first(seq__41397__$1);
var temp__5804__auto___41653__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___41653__$2)){
var spec_41655 = temp__5804__auto___41653__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_41655)], 0));
} else {
}


var G__41657 = cljs.core.next(seq__41397__$1);
var G__41658 = null;
var G__41659 = (0);
var G__41660 = (0);
seq__41397 = G__41657;
chunk__41398 = G__41658;
count__41399 = G__41659;
i__41400 = G__41660;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__41418 = datafied_throwable;
var map__41418__$1 = cljs.core.__destructure_map(map__41418);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41418__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41418__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41418__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__41419 = cljs.core.last(via);
var map__41419__$1 = cljs.core.__destructure_map(map__41419);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41419__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41419__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41419__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__41420 = data;
var map__41420__$1 = cljs.core.__destructure_map(map__41420);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41420__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41420__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41420__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__41421 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__41421__$1 = cljs.core.__destructure_map(map__41421);
var top_data = map__41421__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41421__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__41422 = phase;
var G__41422__$1 = (((G__41422 instanceof cljs.core.Keyword))?G__41422.fqn:null);
switch (G__41422__$1) {
case "read-source":
var map__41423 = data;
var map__41423__$1 = cljs.core.__destructure_map(map__41423);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41423__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41423__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__41424 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__41424__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41424,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__41424);
var G__41424__$2 = (cljs.core.truth_((function (){var fexpr__41425 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41425.cljs$core$IFn$_invoke$arity$1 ? fexpr__41425.cljs$core$IFn$_invoke$arity$1(source) : fexpr__41425.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__41424__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__41424__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41424__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__41424__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__41437 = top_data;
var G__41437__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41437,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__41437);
var G__41437__$2 = (cljs.core.truth_((function (){var fexpr__41438 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41438.cljs$core$IFn$_invoke$arity$1 ? fexpr__41438.cljs$core$IFn$_invoke$arity$1(source) : fexpr__41438.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__41437__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__41437__$1);
var G__41437__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41437__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__41437__$2);
var G__41437__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41437__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__41437__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41437__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__41437__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__41442 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41442,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41442,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41442,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41442,(3),null);
var G__41445 = top_data;
var G__41445__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41445,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__41445);
var G__41445__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41445__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__41445__$1);
var G__41445__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41445__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__41445__$2);
var G__41445__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41445__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__41445__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41445__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__41445__$4;
}

break;
case "execution":
var vec__41446 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41446,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41446,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41446,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41446,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__41414_SHARP_){
var or__5002__auto__ = (p1__41414_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__41449 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41449.cljs$core$IFn$_invoke$arity$1 ? fexpr__41449.cljs$core$IFn$_invoke$arity$1(p1__41414_SHARP_) : fexpr__41449.call(null, p1__41414_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__41450 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__41450__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41450,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__41450);
var G__41450__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41450__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__41450__$1);
var G__41450__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41450__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__41450__$2);
var G__41450__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41450__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__41450__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41450__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__41450__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41422__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__41453){
var map__41454 = p__41453;
var map__41454__$1 = cljs.core.__destructure_map(map__41454);
var triage_data = map__41454__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41454__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41454__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41454__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41454__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41454__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41454__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41454__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41454__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__41475 = phase;
var G__41475__$1 = (((G__41475 instanceof cljs.core.Keyword))?G__41475.fqn:null);
switch (G__41475__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__41481 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__41482 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41483 = loc;
var G__41484 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41498_41704 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41499_41705 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41500_41706 = true;
var _STAR_print_fn_STAR__temp_val__41501_41707 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41500_41706);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41501_41707);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41451_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__41451_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41499_41705);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41498_41704);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__41481,G__41482,G__41483,G__41484) : format.call(null, G__41481,G__41482,G__41483,G__41484));

break;
case "macroexpansion":
var G__41538 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__41539 = cause_type;
var G__41540 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41541 = loc;
var G__41542 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41538,G__41539,G__41540,G__41541,G__41542) : format.call(null, G__41538,G__41539,G__41540,G__41541,G__41542));

break;
case "compile-syntax-check":
var G__41543 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__41544 = cause_type;
var G__41545 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41546 = loc;
var G__41547 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41543,G__41544,G__41545,G__41546,G__41547) : format.call(null, G__41543,G__41544,G__41545,G__41546,G__41547));

break;
case "compilation":
var G__41548 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__41549 = cause_type;
var G__41550 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41551 = loc;
var G__41552 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41548,G__41549,G__41550,G__41551,G__41552) : format.call(null, G__41548,G__41549,G__41550,G__41551,G__41552));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__41553 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__41554 = symbol;
var G__41555 = loc;
var G__41556 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41558_41720 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41559_41721 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41560_41722 = true;
var _STAR_print_fn_STAR__temp_val__41561_41723 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41560_41722);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41561_41723);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41452_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__41452_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41559_41721);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41558_41720);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__41553,G__41554,G__41555,G__41556) : format.call(null, G__41553,G__41554,G__41555,G__41556));
} else {
var G__41563 = "Execution error%s at %s(%s).\n%s\n";
var G__41564 = cause_type;
var G__41565 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41566 = loc;
var G__41567 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41563,G__41564,G__41565,G__41566,G__41567) : format.call(null, G__41563,G__41564,G__41565,G__41566,G__41567));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41475__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
