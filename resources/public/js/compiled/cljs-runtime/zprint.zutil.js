goog.provide('zprint.zutil');
zprint.zutil.whitespace_QMARK_ = (function zprint$zutil$whitespace_QMARK_(zloc){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(zloc),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(zloc),new cljs.core.Keyword(null,"newline","newline",1790071323))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(zloc),new cljs.core.Keyword(null,"comma","comma",1699024745))))));
});
zprint.zutil.skip_whitespace = (function zprint$zutil$skip_whitespace(var_args){
var G__28916 = arguments.length;
switch (G__28916) {
case 1:
return zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.right,zloc);
}));

(zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$2 = (function (f,zloc){
return rewrite_clj.zip.skip(f,zprint.zutil.whitespace_QMARK_,zloc);
}));

(zprint.zutil.skip_whitespace.cljs$lang$maxFixedArity = 2);

zprint.zutil.whitespace_not_newline_QMARK_ = (function zprint$zutil$whitespace_not_newline_QMARK_(zloc){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(zloc),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(zloc),new cljs.core.Keyword(null,"comma","comma",1699024745))));
});
zprint.zutil.zremove = rewrite_clj.zip.remove;
zprint.zutil.zreplace = rewrite_clj.zip.replace;
/**
 * Is the zipper zloc equivalent to the path floc.  In this
 *   case, floc isn't a zipper, but was turned into a path early on.
 */
zprint.zutil.zfocus = (function zprint$zutil$zfocus(zloc,floc){
var vec__28934 = (zprint.zutil.find_root_and_path.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.find_root_and_path.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.find_root_and_path.call(null, zloc));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28934,(0),null);
var zpath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28934,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zpath,floc);
});
/**
 * Take the various inputs and come up with a style.
 */
zprint.zutil.zfocus_style = (function zprint$zutil$zfocus_style(style,zloc,floc){
var style__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style,new cljs.core.Keyword(null,"f","f",-1597136552)))?style:((zprint.zutil.zfocus(zloc,floc))?new cljs.core.Keyword(null,"f","f",-1597136552):new cljs.core.Keyword(null,"b","b",1482224470)));
return style__$1;
});
/**
 * Is the zloc a collection?
 */
zprint.zutil.z_coll_QMARK_ = (function zprint$zutil$z_coll_QMARK_(zloc){
return rewrite_clj.zip.seq_QMARK_(zloc);
});
/**
 * Is this a #_(...)
 */
zprint.zutil.zuneval_QMARK_ = (function zprint$zutil$zuneval_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(zloc),new cljs.core.Keyword(null,"uneval","uneval",1932037707));
});
/**
 * Is this a ^{...}
 */
zprint.zutil.zmeta_QMARK_ = (function zprint$zutil$zmeta_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(zloc),new cljs.core.Keyword(null,"meta","meta",1499536964));
});
/**
 * Is this a '(...) or '[ ... ] or some other quote?
 */
zprint.zutil.zquote_QMARK_ = (function zprint$zutil$zquote_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(zloc),new cljs.core.Keyword(null,"quote","quote",-262615245));
});
/**
 * Is this a #...
 */
zprint.zutil.zreader_macro_QMARK_ = (function zprint$zutil$zreader_macro_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(zloc),new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422));
});
/**
 * Return the tag for this zloc
 */
zprint.zutil.ztag = (function zprint$zutil$ztag(zloc){
return rewrite_clj.zip.tag(zloc);
});
/**
 * Is this a namespaced map?
 */
zprint.zutil.znamespacedmap_QMARK_ = (function zprint$zutil$znamespacedmap_QMARK_(zloc){
var or__5002__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(zloc),new cljs.core.Keyword(null,"namespaced-map","namespaced-map",1235665380));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return cljs.core.re_find(/^#:/,rewrite_clj.zip.string(zloc));
}
});
/**
 * Returns true if this is a comment.
 */
zprint.zutil.zcomment_QMARK_ = (function zprint$zutil$zcomment_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(zloc),new cljs.core.Keyword(null,"comment","comment",532206069));
} else {
return null;
}
});
/**
 * Returns true if this is a newline.
 */
zprint.zutil.znewline_QMARK_ = (function zprint$zutil$znewline_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(zloc),new cljs.core.Keyword(null,"newline","newline",1790071323));
} else {
return null;
}
});
/**
 * Does z/string, but takes an additional argument for hex conversion.
 *   Hex conversion is not implemented for zippers, though, because at present
 *   it is only used for byte-arrays, which don't really show up here.
 */
zprint.zutil.znumstr = (function zprint$zutil$znumstr(zloc,_,___$1){
return rewrite_clj.zip.string(zloc);
});
/**
 * Find the zloc inside of this zloc.
 */
zprint.zutil.zstart = (function zprint$zutil$zstart(zloc){
return rewrite_clj.zip.down_STAR_(zloc);
});
/**
 * Find the first non-whitespace zloc inside of this zloc, or
 *   the first whitespace zloc that is the focus.
 */
zprint.zutil.zfirst = (function zprint$zutil$zfirst(zloc){
var nloc = rewrite_clj.zip.down_STAR_(zloc);
if(cljs.core.truth_(nloc)){
return rewrite_clj.zip.skip(rewrite_clj.zip.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
});
/**
 * Find the first sexpr-able? zloc inside of this zloc.
 */
zprint.zutil.zfirst_sexpr = (function zprint$zutil$zfirst_sexpr(zloc){
var nloc = rewrite_clj.zip.down_STAR_(zloc);
if(cljs.core.truth_(nloc)){
return rewrite_clj.zip.skip(rewrite_clj.zip.right_STAR_,(function (p1__28950_SHARP_){
return cljs.core.not((zprint.zutil.zsexpr_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.zsexpr_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__28950_SHARP_) : zprint.zutil.zsexpr_QMARK_.call(null, p1__28950_SHARP_)));
}),nloc);
} else {
return null;
}
});
/**
 * Find the second non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zsecond = (function zprint$zutil$zsecond(zloc){
var temp__5802__auto__ = zprint.zutil.zfirst(zloc);
if(cljs.core.truth_(temp__5802__auto__)){
var first_loc = temp__5802__auto__;
var temp__5802__auto____$1 = rewrite_clj.zip.right_STAR_(first_loc);
if(cljs.core.truth_(temp__5802__auto____$1)){
var nloc = temp__5802__auto____$1;
return rewrite_clj.zip.skip(rewrite_clj.zip.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the third non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zthird = (function zprint$zutil$zthird(zloc){
var G__28964 = zprint.zutil.zfirst(zloc);
var G__28964__$1 = (((G__28964 == null))?null:rewrite_clj.zip.right_STAR_(G__28964));
var G__28964__$2 = (((G__28964__$1 == null))?null:rewrite_clj.zip.skip(rewrite_clj.zip.right_STAR_,zprint.zutil.whitespace_QMARK_,G__28964__$1));
var G__28964__$3 = (((G__28964__$2 == null))?null:rewrite_clj.zip.right_STAR_(G__28964__$2));
if((G__28964__$3 == null)){
return null;
} else {
return rewrite_clj.zip.skip(rewrite_clj.zip.right_STAR_,zprint.zutil.whitespace_QMARK_,G__28964__$3);
}
});
/**
 * Find the fourth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zfourth = (function zprint$zutil$zfourth(zloc){
var G__28968 = zprint.zutil.zfirst(zloc);
var G__28968__$1 = (((G__28968 == null))?null:rewrite_clj.zip.right_STAR_(G__28968));
var G__28968__$2 = (((G__28968__$1 == null))?null:rewrite_clj.zip.skip(rewrite_clj.zip.right_STAR_,zprint.zutil.whitespace_QMARK_,G__28968__$1));
var G__28968__$3 = (((G__28968__$2 == null))?null:rewrite_clj.zip.right_STAR_(G__28968__$2));
var G__28968__$4 = (((G__28968__$3 == null))?null:rewrite_clj.zip.skip(rewrite_clj.zip.right_STAR_,zprint.zutil.whitespace_QMARK_,G__28968__$3));
var G__28968__$5 = (((G__28968__$4 == null))?null:rewrite_clj.zip.right_STAR_(G__28968__$4));
if((G__28968__$5 == null)){
return null;
} else {
return rewrite_clj.zip.skip(rewrite_clj.zip.right_STAR_,zprint.zutil.whitespace_QMARK_,G__28968__$5);
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc. Returns nil
 *   if nothing left.
 */
zprint.zutil.zrightnws = (function zprint$zutil$zrightnws(zloc){
if(cljs.core.truth_(zloc)){
var temp__5802__auto__ = rewrite_clj.zip.right_STAR_(zloc);
if(cljs.core.truth_(temp__5802__auto__)){
var nloc = temp__5802__auto__;
return rewrite_clj.zip.skip(rewrite_clj.zip.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc considering 
 *   newlines to not be whitespace. Returns nil if nothing left. Which is
 *   why this is nextnws and not rightnws, since it is exposed in zfns.
 */
zprint.zutil.znextnws_w_nl = (function zprint$zutil$znextnws_w_nl(zloc){
if(cljs.core.truth_(zloc)){
var temp__5802__auto__ = rewrite_clj.zip.right_STAR_(zloc);
if(cljs.core.truth_(temp__5802__auto__)){
var nloc = temp__5802__auto__;
return rewrite_clj.zip.skip(rewrite_clj.zip.right_STAR_,zprint.zutil.whitespace_not_newline_QMARK_,nloc);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the rightmost non-whitespace zloc at this level
 */
zprint.zutil.zrightmost = (function zprint$zutil$zrightmost(zloc){
var nloc = zprint.zutil.zrightnws(zloc);
var ploc = zloc;
while(true){
if(cljs.core.not(nloc)){
return ploc;
} else {
var G__29693 = zprint.zutil.zrightnws(nloc);
var G__29694 = nloc;
nloc = G__29693;
ploc = G__29694;
continue;
}
break;
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zleftnws = (function zprint$zutil$zleftnws(zloc){
if(cljs.core.truth_(zloc)){
var temp__5802__auto__ = rewrite_clj.zip.left_STAR_(zloc);
if(cljs.core.truth_(temp__5802__auto__)){
var nloc = temp__5802__auto__;
return rewrite_clj.zip.skip(rewrite_clj.zip.left_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the leftmost non-whitespace zloc at this level
 */
zprint.zutil.zleftmost = (function zprint$zutil$zleftmost(zloc){
var nloc = zprint.zutil.zleftnws(zloc);
var ploc = zloc;
while(true){
if(cljs.core.not(nloc)){
return ploc;
} else {
var G__29697 = zprint.zutil.zleftnws(nloc);
var G__29698 = nloc;
nloc = G__29697;
ploc = G__29698;
continue;
}
break;
}
});
/**
 * Find the next non-whitespace zloc.
 */
zprint.zutil.zprevnws = (function zprint$zutil$zprevnws(zloc){
var temp__5802__auto__ = rewrite_clj.zip.prev_STAR_(zloc);
if(cljs.core.truth_(temp__5802__auto__)){
var ploc = temp__5802__auto__;
return rewrite_clj.zip.skip(rewrite_clj.zip.prev_STAR_,zprint.zutil.whitespace_QMARK_,ploc);
} else {
return null;
}
});
/**
 * Find the nth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.znthnext = (function zprint$zutil$znthnext(zloc,n){
var nloc = zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1(rewrite_clj.zip.down_STAR_(zloc));
var i = n;
while(true){
if((((nloc == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0))))){
return nloc;
} else {
var G__29700 = zprint.zutil.zrightnws(nloc);
var G__29701 = (i - (1));
nloc = G__29700;
i = G__29701;
continue;
}
break;
}
});
/**
 * Find the locations (counting from zero, and only counting non-whitespace
 *   elements) of the first zthing?.  Return its index if it is found, nil if not.
 */
zprint.zutil.zfind = (function zprint$zutil$zfind(zthing_QMARK_,zloc){
var nloc = zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1(rewrite_clj.zip.down_STAR_(zloc));
var i = (0);
while(true){
if((!((nloc == null)))){
if(cljs.core.truth_((zthing_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zthing_QMARK_.cljs$core$IFn$_invoke$arity$1(nloc) : zthing_QMARK_.call(null, nloc)))){
return i;
} else {
var G__29715 = zprint.zutil.zrightnws(nloc);
var G__29716 = (i + (1));
nloc = G__29715;
i = G__29716;
continue;
}
} else {
return null;
}
break;
}
});
zprint.zutil.znl = (function zprint$zutil$znl(){

return rewrite_clj.zip.of_node_STAR_.cljs$core$IFn$_invoke$arity$1(rewrite_clj.parser.parse_string("\n"));
});
/**
 * Return a sequence of zloc newlines.
 */
zprint.zutil.multi_nl = (function zprint$zutil$multi_nl(n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,zprint.zutil.znl()));
});
/**
 * Given a zloc which is a comment, replace it with a zloc which is the
 *   same comment with no newline, and a newline that follows it.  This is
 *   done in the zipper so that later navigation in this area remains
 *   continues to work.
 */
zprint.zutil.split_newline_from_comment = (function zprint$zutil$split_newline_from_comment(zloc){
var comment_no_nl = rewrite_clj.parser.parse_string(clojure.string.replace_first(rewrite_clj.zip.string(zloc),"\n",""));
var new_comment = rewrite_clj.zip.replace_STAR_(zloc,comment_no_nl);
var new_comment__$1 = rewrite_clj.zip.insert_right_STAR_(new_comment,rewrite_clj.parser.parse_string("\n"));
return new_comment__$1;
});
/**
 * Return a vector containing the return of applying a function to
 *   every non-whitespace zloc inside of zloc, including two newlines
 *   for every blank line encountered.  Note that a truly blank line
 *   will show up as one zloc with two newlines in it.  It will have
 *   (= (z/tag nloc) :newline), but it will have both newlines.  To
 *   ease handling of these multi-line newlines, this routine will
 *   split them up into multiple individual newlines.
 */
zprint.zutil.zmap_w_bl = (function zprint$zutil$zmap_w_bl(zfn,zloc){
var nloc = rewrite_clj.zip.down_STAR_(zloc);
var blank_QMARK_ = false;
var previous_was_nl_QMARK_ = false;
var previous_comment_QMARK_ = null;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var ws_QMARK_ = zprint.zutil.whitespace_QMARK_(nloc);
var nl_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(nloc),new cljs.core.Keyword(null,"newline","newline",1790071323));
var nl_len = ((nl_QMARK_)?rewrite_clj.zip.length(nloc):null);
var multi_nl_QMARK_ = ((nl_QMARK_)?(rewrite_clj.zip.length(nloc) > (1)):null);
var emit_nl_QMARK_ = (function (){var or__5002__auto__ = ((blank_QMARK_) && (nl_QMARK_));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return multi_nl_QMARK_;
}
})();
var nl_to_emit = (cljs.core.truth_(emit_nl_QMARK_)?(cljs.core.truth_(multi_nl_QMARK_)?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zfn,zprint.zutil.multi_nl((((function (){var or__5002__auto__ = previous_was_nl_QMARK_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (!(blank_QMARK_));
}
})())?nl_len:(nl_len + (1))))):(cljs.core.truth_(previous_was_nl_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null, nloc))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null, nloc)),(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null, nloc))], null)
)):null);
var comment_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(nloc),new cljs.core.Keyword(null,"comment","comment",532206069));
var nloc__$1 = ((comment_QMARK_)?zprint.zutil.split_newline_from_comment(nloc):nloc);
var result = (cljs.core.truth_((function (){var or__5002__auto__ = (!(ws_QMARK_));
if(or__5002__auto__){
return or__5002__auto__;
} else {
var and__5000__auto__ = nl_QMARK_;
if(and__5000__auto__){
return previous_comment_QMARK_;
} else {
return and__5000__auto__;
}
}
})())?(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc__$1) : zfn.call(null, nloc__$1)):null);
var G__29740 = rewrite_clj.zip.right_STAR_(nloc__$1);
var G__29741 = ((blank_QMARK_)?((ws_QMARK_) || (nl_QMARK_)):nl_QMARK_);
var G__29742 = (cljs.core.truth_((function (){var or__5002__auto__ = result;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return nl_to_emit;
}
})())?(function (){var or__5002__auto__ = (function (){var and__5000__auto__ = nl_QMARK_;
if(and__5000__auto__){
return previous_comment_QMARK_;
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return emit_nl_QMARK_;
}
})():previous_was_nl_QMARK_);
var G__29743 = comment_QMARK_;
var G__29744 = (cljs.core.truth_(result)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,result):(cljs.core.truth_(nl_to_emit)?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,out,nl_to_emit):out
));
nloc = G__29740;
blank_QMARK_ = G__29741;
previous_was_nl_QMARK_ = G__29742;
previous_comment_QMARK_ = G__29743;
out = G__29744;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to
 *   every non-whitespace zloc inside of zloc, including newlines.
 *   This will also split newlines into separate zlocs if they were
 *   multiple, and split the newline off the end of a comment. The
 *   comment split actually changes the zipper for the rest of the
 *   sequence, where the newline splits do not.
 */
zprint.zutil.zmap_w_nl = (function zprint$zutil$zmap_w_nl(zfn,zloc){
var nloc = rewrite_clj.zip.down_STAR_(zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var nl_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(nloc),new cljs.core.Keyword(null,"newline","newline",1790071323));
var comment_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(nloc),new cljs.core.Keyword(null,"comment","comment",532206069));
var nloc__$1 = ((comment_QMARK_)?zprint.zutil.split_newline_from_comment(nloc):nloc);
var result = (((!(zprint.zutil.whitespace_QMARK_(nloc__$1))))?(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc__$1) : zfn.call(null, nloc__$1)):null);
var nl_len = ((nl_QMARK_)?rewrite_clj.zip.length(nloc__$1):null);
var multi_nl_QMARK_ = ((nl_QMARK_)?(rewrite_clj.zip.length(nloc__$1) > (1)):null);
var nl_to_emit = ((nl_QMARK_)?(cljs.core.truth_(multi_nl_QMARK_)?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zfn,zprint.zutil.multi_nl(nl_len)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc__$1) : zfn.call(null, nloc__$1))], null)):null);
var G__29767 = rewrite_clj.zip.right_STAR_(nloc__$1);
var G__29768 = (cljs.core.truth_(result)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,result):(cljs.core.truth_(nl_to_emit)?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,out,nl_to_emit):out
));
nloc = G__29767;
out = G__29768;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to
 *   every non-whitespace zloc inside of zloc, including newlines and commas.
 *   This will also split newlines into separate zlocs if they were
 *   multiple, and split the newline off the end of a comment.
 */
zprint.zutil.zmap_w_nl_comma = (function zprint$zutil$zmap_w_nl_comma(zfn,zloc){
var nloc = rewrite_clj.zip.down_STAR_(zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var nl_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(nloc),new cljs.core.Keyword(null,"newline","newline",1790071323));
var comma_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(nloc),new cljs.core.Keyword(null,"comma","comma",1699024745))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(nloc),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))) && (clojure.string.includes_QMARK_(rewrite_clj.zip.string(nloc),",")))));
var comment_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(nloc),new cljs.core.Keyword(null,"comment","comment",532206069));
var nloc__$1 = ((comment_QMARK_)?zprint.zutil.split_newline_from_comment(nloc):nloc);
var result = (((((!(zprint.zutil.whitespace_QMARK_(nloc__$1)))) || (comma_QMARK_)))?(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc__$1) : zfn.call(null, nloc__$1)):null);
var nl_len = ((nl_QMARK_)?rewrite_clj.zip.length(nloc__$1):null);
var multi_nl_QMARK_ = ((nl_QMARK_)?(rewrite_clj.zip.length(nloc__$1) > (1)):null);
var nl_to_emit = ((nl_QMARK_)?(cljs.core.truth_(multi_nl_QMARK_)?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zfn,zprint.zutil.multi_nl(nl_len)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc__$1) : zfn.call(null, nloc__$1))], null)):null);
var G__29773 = rewrite_clj.zip.right_STAR_(nloc__$1);
var G__29774 = (cljs.core.truth_(result)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,result):(cljs.core.truth_(nl_to_emit)?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,out,nl_to_emit):out
));
nloc = G__29773;
out = G__29774;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc. The newline that shows
 *   up in every comment is also split out into a separate zloc.
 */
zprint.zutil.zmap = (function zprint$zutil$zmap(zfn,zloc){
var nloc = rewrite_clj.zip.down_STAR_(zloc);
var previous_comment_QMARK_ = null;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var comment_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(nloc),new cljs.core.Keyword(null,"comment","comment",532206069));
var nl_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(nloc),new cljs.core.Keyword(null,"newline","newline",1790071323));
var nloc__$1 = ((comment_QMARK_)?zprint.zutil.split_newline_from_comment(nloc):nloc);
var result = (cljs.core.truth_((function (){var or__5002__auto__ = (!(zprint.zutil.whitespace_QMARK_(nloc__$1)));
if(or__5002__auto__){
return or__5002__auto__;
} else {
var and__5000__auto__ = nl_QMARK_;
if(and__5000__auto__){
return previous_comment_QMARK_;
} else {
return and__5000__auto__;
}
}
})())?(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc__$1) : zfn.call(null, nloc__$1)):null);
var G__29778 = rewrite_clj.zip.right_STAR_(nloc__$1);
var G__29779 = comment_QMARK_;
var G__29780 = (cljs.core.truth_(result)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,result):out);
nloc = G__29778;
previous_comment_QMARK_ = G__29779;
out = G__29780;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc. Comments are considered
 *   whitespace for this routine, and left out.
 */
zprint.zutil.zmap_no_comment = (function zprint$zutil$zmap_no_comment(zfn,zloc){
var nloc = rewrite_clj.zip.down_STAR_(zloc);
var previous_comment_QMARK_ = null;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var comment_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(nloc),new cljs.core.Keyword(null,"comment","comment",532206069));
var nl_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(nloc),new cljs.core.Keyword(null,"newline","newline",1790071323));
var result = (((!(((zprint.zutil.whitespace_QMARK_(nloc)) || (((comment_QMARK_) || (nl_QMARK_)))))))?(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null, nloc)):null);
var G__29797 = rewrite_clj.zip.right_STAR_(nloc);
var G__29798 = comment_QMARK_;
var G__29799 = (cljs.core.truth_(result)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,result):out);
nloc = G__29797;
previous_comment_QMARK_ = G__29798;
out = G__29799;
continue;
}
break;
}
});
/**
 * Return the count of non-whitespace elements in zloc.  Comments are
 *   counted as one thing, commas are ignored as whitespace.
 */
zprint.zutil.zcount = (function zprint$zutil$zcount(zloc){
if((zloc == null)){
return (0);
} else {
var nloc = rewrite_clj.zip.down_STAR_(zloc);
var i = (0);
while(true){
if(cljs.core.not(nloc)){
return i;
} else {
var G__29802 = rewrite_clj.zip.right_STAR_(nloc);
var G__29803 = (((!(zprint.zutil.whitespace_QMARK_(nloc))))?(i + (1)):i);
nloc = G__29802;
i = G__29803;
continue;
}
break;
}
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every zloc inside of zloc.
 */
zprint.zutil.zmap_all = (function zprint$zutil$zmap_all(zfn,zloc){
var nloc = rewrite_clj.zip.down_STAR_(zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var G__29809 = rewrite_clj.zip.right_STAR_(nloc);
var G__29810 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null, nloc)));
nloc = G__29809;
out = G__29810;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every zloc inside of zloc. The newline that shows
 *   up in every comment is also split out into a separate zloc.
 */
zprint.zutil.zmap_all_nl_comment = (function zprint$zutil$zmap_all_nl_comment(zfn,zloc){
var nloc = rewrite_clj.zip.down_STAR_(zloc);
var previous_comment_QMARK_ = null;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var comment_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(nloc),new cljs.core.Keyword(null,"comment","comment",532206069));
var nl_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(nloc),new cljs.core.Keyword(null,"newline","newline",1790071323));
var nloc__$1 = ((comment_QMARK_)?zprint.zutil.split_newline_from_comment(nloc):nloc);
var result = (zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc__$1) : zfn.call(null, nloc__$1));
var G__29817 = rewrite_clj.zip.right_STAR_(nloc__$1);
var G__29818 = comment_QMARK_;
var G__29819 = (cljs.core.truth_(result)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,result):out);
nloc = G__29817;
previous_comment_QMARK_ = G__29818;
out = G__29819;
continue;
}
break;
}
});
/**
 * Return a seq of all of the non-whitespace children of zloc.
 */
zprint.zutil.zseqnws = (function zprint$zutil$zseqnws(zloc){
return zprint.zutil.zmap(cljs.core.identity,zloc);
});
/**
 * Return a seq of all of the non-whitespace children of zloc, including
 *   newlines.
 */
zprint.zutil.zseqnws_w_nl = (function zprint$zutil$zseqnws_w_nl(zloc){
return zprint.zutil.zmap_w_nl(cljs.core.identity,zloc);
});
/**
 * Return a seq of all of the non-whitespace children of zloc, including
 *   only newlines that start and end blank lines.
 */
zprint.zutil.zseqnws_w_bl = (function zprint$zutil$zseqnws_w_bl(zloc){
return zprint.zutil.zmap_w_bl(cljs.core.identity,zloc);
});
/**
 * Remove everything to the right of the current zloc. In other words,
 *   make the current zloc the rightmost.
 */
zprint.zutil.zremove_right = (function zprint$zutil$zremove_right(zloc){
var nloc = zloc;
while(true){
if(rewrite_clj.zip.rightmost_QMARK_(nloc)){
return nloc;
} else {
var G__29836 = (function (){var G__29042 = rewrite_clj.zip.right_STAR_(nloc);
return (zprint.zutil.zremove.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.zremove.cljs$core$IFn$_invoke$arity$1(G__29042) : zprint.zutil.zremove.call(null, G__29042));
})();
nloc = G__29836;
continue;
}
break;
}
});
/**
 * Considering the current zloc a collection, move down into it and
 *   take n non-whitespace elements, dropping the rest.  Then append the
 *   given element to the end, coercing it into a node/zloc.  Note, this 
 *   is not quite implemented that way, as it uses replace.
 */
zprint.zutil.ztake_append = (function zprint$zutil$ztake_append(n,zloc,end_struct){
var nloc = rewrite_clj.zip.down_STAR_(zloc);
var index = (0);
while(true){
if((index >= n)){
return rewrite_clj.zip.up_STAR_(zprint.zutil.zremove_right((zprint.zutil.zreplace.cljs$core$IFn$_invoke$arity$2 ? zprint.zutil.zreplace.cljs$core$IFn$_invoke$arity$2(nloc,end_struct) : zprint.zutil.zreplace.call(null, nloc,end_struct))));
} else {
var xloc = rewrite_clj.zip.right_STAR_(nloc);
var G__29841 = xloc;
var G__29842 = ((zprint.zutil.whitespace_QMARK_(xloc))?index:(index + (1)));
nloc = G__29841;
index = G__29842;
continue;
}
break;
}
});
/**
 * How many non-whitespace non-comment children are in zloc-seq? Note
 *   that this is fundamentally different from zcount, in that it doesn't
 *   take a zloc, but rather a zloc-seq (i.e., a seq of elements, each of
 *   which is a zloc).
 */
zprint.zutil.zcount_zloc_seq_nc_nws = (function zprint$zutil$zcount_zloc_seq_nc_nws(zloc_seq){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__29054_SHARP_,p2__29053_SHARP_){
if(cljs.core.truth_(rewrite_clj.zip.whitespace_or_comment_QMARK_(p2__29053_SHARP_))){
return p1__29054_SHARP_;
} else {
return (p1__29054_SHARP_ + (1));
}
}),(0),zloc_seq);
});
/**
 * Create a vector with the root as well as another vector
 *   which contains the number of right moves after each down
 *   down to find a particular zloc.  The right moves include
 *   both whitespace and comments.
 */
zprint.zutil.find_root_and_path = (function zprint$zutil$find_root_and_path(zloc){
if(cljs.core.truth_(zloc)){
var nloc = zloc;
var left = (0);
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not(rewrite_clj.zip.left_STAR_(nloc))){
if(cljs.core.not(rewrite_clj.zip.up_STAR_(nloc))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nloc,out], null);
} else {
var G__29848 = rewrite_clj.zip.up_STAR_(nloc);
var G__29849 = (0);
var G__29850 = cljs.core.cons(left,out);
nloc = G__29848;
left = G__29849;
out = G__29850;
continue;
}
} else {
var G__29851 = rewrite_clj.zip.left_STAR_(nloc);
var G__29852 = (left + (1));
var G__29853 = out;
nloc = G__29851;
left = G__29852;
out = G__29853;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Create a vector with the root as well as another vector
 *   which contains the number of right moves after each down
 *   down to find a particular zloc.  The right moves are
 *   non-whitespace, but include comments.
 */
zprint.zutil.find_root_and_path_nw = (function zprint$zutil$find_root_and_path_nw(zloc){
if(cljs.core.truth_(zloc)){
var nloc = zloc;
var left = (0);
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not(rewrite_clj.zip.left_STAR_(nloc))){
if(cljs.core.not(rewrite_clj.zip.up_STAR_(nloc))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nloc,out], null);
} else {
var G__29861 = rewrite_clj.zip.up_STAR_(nloc);
var G__29862 = (0);
var G__29863 = cljs.core.cons(left,out);
nloc = G__29861;
left = G__29862;
out = G__29863;
continue;
}
} else {
var G__29881 = rewrite_clj.zip.left_STAR_(nloc);
var G__29882 = ((zprint.zutil.whitespace_QMARK_(nloc))?left:(left + (1)));
var G__29883 = out;
nloc = G__29881;
left = G__29882;
out = G__29883;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Find the root from a zloc by doing lots of ups.
 */
zprint.zutil.find_root = (function zprint$zutil$find_root(zloc){
var nloc = zloc;
while(true){
if(cljs.core.not(rewrite_clj.zip.up(nloc))){
return nloc;
} else {
var G__29889 = rewrite_clj.zip.up(nloc);
nloc = G__29889;
continue;
}
break;
}
});
/**
 * Move one down and then right a certain number of steps.
 */
zprint.zutil.move_down_and_right = (function zprint$zutil$move_down_and_right(zloc,right_count){
var nloc = rewrite_clj.zip.down_STAR_(zloc);
var remaining_right = right_count;
while(true){
if((remaining_right === (0))){
return nloc;
} else {
var G__29891 = rewrite_clj.zip.right_STAR_(nloc);
var G__29892 = (remaining_right - (1));
nloc = G__29891;
remaining_right = G__29892;
continue;
}
break;
}
});
/**
 * Follow the path vector from the root and return the zloc
 *   at this location.
 */
zprint.zutil.follow_path = (function zprint$zutil$follow_path(path_vec,zloc){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(zprint.zutil.move_down_and_right,zloc,path_vec);
});
/**
 * Is this an anonymous fn?
 */
zprint.zutil.zanonfn_QMARK_ = (function zprint$zutil$zanonfn_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(zloc),new cljs.core.Keyword(null,"fn","fn",-1175266204));
});
/**
 * Return the last non-whitespace (but possibly comment) element inside
 *   of this zloc.
 */
zprint.zutil.zlast = (function zprint$zutil$zlast(zloc){
var nloc = rewrite_clj.zip.down_STAR_(zloc);
if(cljs.core.truth_(nloc)){
return zprint.zutil.zrightmost(nloc);
} else {
return null;
}
});
/**
 * Returns true if this can be converted to an sexpr. Works around a bug
 *   where n/printable-only? returns false for n/tag :fn, but z/sexpr fails
 *   on something with n/tag :fn
 */
zprint.zutil.zsexpr_QMARK_ = (function zprint$zutil$zsexpr_QMARK_(zloc){
var and__5000__auto__ = zloc;
if(cljs.core.truth_(and__5000__auto__)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),rewrite_clj.zip.tag(zloc))) && (cljs.core.not(rewrite_clj.node.printable_only_QMARK_(rewrite_clj.zip.node(zloc)))));
} else {
return and__5000__auto__;
}
});
/**
 * Returns true if this is a keyword.
 */
zprint.zutil.zkeyword_QMARK_ = (function zprint$zutil$zkeyword_QMARK_(zloc){
var and__5000__auto__ = zloc;
if(cljs.core.truth_(and__5000__auto__)){
return clojure.string.starts_with_QMARK_(rewrite_clj.zip.string(zloc),":");
} else {
return and__5000__auto__;
}
});
/**
 * Returns true if this is a symbol.
 */
zprint.zutil.zsymbol_QMARK_ = (function zprint$zutil$zsymbol_QMARK_(zloc){
var and__5000__auto__ = zloc;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(zloc),new cljs.core.Keyword(null,"token","token",-1211463215));
if(and__5000__auto____$1){
var and__5000__auto____$2 = zprint.zutil.zsexpr_QMARK_(zloc);
if(cljs.core.truth_(and__5000__auto____$2)){
return (rewrite_clj.zip.sexpr(zloc) instanceof cljs.core.Symbol);
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
 * Returns true if this is nil.
 */
zprint.zutil.znil_QMARK_ = (function zprint$zutil$znil_QMARK_(zloc){
var and__5000__auto__ = zloc;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(zloc),new cljs.core.Keyword(null,"token","token",-1211463215));
if(and__5000__auto____$1){
var and__5000__auto____$2 = zprint.zutil.zsexpr_QMARK_(zloc);
if(cljs.core.truth_(and__5000__auto____$2)){
return (rewrite_clj.zip.sexpr(zloc) == null);
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
 * Returns true if this is a reader-conditional with a symbol in 
 *   the first position (could be :clj or :cljs, whatever).
 */
zprint.zutil.zreader_cond_w_symbol_QMARK_ = (function zprint$zutil$zreader_cond_w_symbol_QMARK_(zloc){
var result = ((zprint.zutil.zreader_macro_QMARK_(zloc))?(function (){var element = rewrite_clj.zip.down(zloc);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.string(element),"?")){
var element__$1 = rewrite_clj.zip.down(rewrite_clj.zip.right(element));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.string(element__$1),":clj")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.string(element__$1),":cljs")))){
return zprint.zutil.zsymbol_QMARK_(rewrite_clj.zip.right(element__$1));
} else {
return null;
}
} else {
return null;
}
})():null);
return result;
});
/**
 * Returns true if this is a reader-conditional with a collection in 
 *   the first position (could be :clj or :cljs, whatever).
 */
zprint.zutil.zreader_cond_w_coll_QMARK_ = (function zprint$zutil$zreader_cond_w_coll_QMARK_(zloc){
var result = ((zprint.zutil.zreader_macro_QMARK_(zloc))?(function (){var element = rewrite_clj.zip.down(zloc);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.string(element),"?")){
var element__$1 = rewrite_clj.zip.down(rewrite_clj.zip.right(element));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.string(element__$1),":clj")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.string(element__$1),":cljs")))){
return zprint.zutil.z_coll_QMARK_(rewrite_clj.zip.right(element__$1));
} else {
return null;
}
} else {
return null;
}
})():null);
return result;
});
/**
 * Return a zloc that will turn into a string of three dots.
 */
zprint.zutil.zdotdotdot = (function zprint$zutil$zdotdotdot(){
return rewrite_clj.zip.of_node_STAR_.cljs$core$IFn$_invoke$arity$1(rewrite_clj.parser.parse_string("..."));
});
/**
 * Returns true if this is a keyword, string, or number, in other words,
 *   a constant.
 */
zprint.zutil.zconstant_QMARK_ = (function zprint$zutil$zconstant_QMARK_(zloc){
var ztag = rewrite_clj.zip.tag(zloc);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ztag,new cljs.core.Keyword(null,"unquote","unquote",1649741032))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ztag,new cljs.core.Keyword(null,"quote","quote",-262615245))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ztag,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847))))))){
var G__29154 = zprint.zutil.zfirst(zloc);
return (zprint.zutil.zconstant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.zconstant_QMARK_.cljs$core$IFn$_invoke$arity$1(G__29154) : zprint.zutil.zconstant_QMARK_.call(null, G__29154));
} else {
var and__5000__auto__ = (!(zprint.zutil.z_coll_QMARK_(zloc)));
if(and__5000__auto__){
var or__5002__auto__ = zprint.zutil.zkeyword_QMARK_(zloc);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.truth_((function (){var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(zloc),new cljs.core.Keyword(null,"token","token",-1211463215));
if(and__5000__auto____$1){
return zprint.zutil.zsexpr_QMARK_(zloc);
} else {
return and__5000__auto____$1;
}
})())){
var sexpr = rewrite_clj.zip.sexpr(zloc);
return ((typeof sexpr === 'string') || (((typeof sexpr === 'number') || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexpr))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("false",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexpr))))))));
} else {
return null;
}
}
} else {
return and__5000__auto__;
}
}
});
/**
 * Given a zloc zipper of a map, find the :doc element.
 */
zprint.zutil.find_doc_in_map = (function zprint$zutil$find_doc_in_map(zloc){
var nloc = rewrite_clj.zip.down(zloc);
while(true){
if(cljs.core.truth_(nloc)){
if(cljs.core.truth_((function (){var and__5000__auto__ = zprint.zutil.zkeyword_QMARK_(nloc);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.string(nloc),":doc");
} else {
return and__5000__auto__;
}
})())){
if(typeof rewrite_clj.zip.sexpr(rewrite_clj.zip.right(nloc)) === 'string'){
return rewrite_clj.zip.right(nloc);
} else {
return null;
}
} else {
var G__29982 = rewrite_clj.zip.right(rewrite_clj.zip.right(nloc));
nloc = G__29982;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Find a docstring in a zipper of a function.
 */
zprint.zutil.find_docstring = (function zprint$zutil$find_docstring(zloc){
var fn_name = rewrite_clj.zip.string(rewrite_clj.zip.down(zloc));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_name,"defn")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_name,"defmacro")))){
var docloc = rewrite_clj.zip.right(rewrite_clj.zip.right(rewrite_clj.zip.down(zloc)));
if(typeof rewrite_clj.zip.sexpr(docloc) === 'string'){
return docloc;
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_name,"def")){
var maploc = rewrite_clj.zip.down(rewrite_clj.zip.right(rewrite_clj.zip.down(zloc)));
if(rewrite_clj.zip.map_QMARK_(maploc)){
return zprint.zutil.find_doc_in_map(maploc);
} else {
return null;
}
} else {
return null;

}
}
});
/**
 * Given a zipper of a function definition, add the spec info to
 *   the docstring. Works for docstring with (def ...) functions, but
 *   the left-indent isn't optimal.  But to fix that, we'd have to do
 *   the zprinting here, where we know the indent of the existing
 *   docstring.
 */
zprint.zutil.add_spec_to_docstring = (function zprint$zutil$add_spec_to_docstring(zloc,spec_str){
var temp__5802__auto__ = zprint.zutil.find_docstring(zloc);
if(cljs.core.truth_(temp__5802__auto__)){
var doc_zloc = temp__5802__auto__;
var new_doc_zloc = rewrite_clj.zip.replace_STAR_(doc_zloc,rewrite_clj.zip.node(rewrite_clj.zip.of_node_STAR_.cljs$core$IFn$_invoke$arity$1(rewrite_clj.parser.parse_string(["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.zip.sexpr(doc_zloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_str),"\""].join('')))));
return rewrite_clj.zip.of_node_STAR_.cljs$core$IFn$_invoke$arity$1(rewrite_clj.zip.root(new_doc_zloc));
} else {
return zloc;
}
});
/**
 * Given a zloc, turn it into a keyword if it starts with a :, but remove
 *   the : first.
 */
zprint.zutil.zloc_to_keyword = (function zprint$zutil$zloc_to_keyword(zloc){
var s = rewrite_clj.zip.string(zloc);
if(clojure.string.starts_with_QMARK_(s,":")){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)));
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(s);
}
});
/**
 * Perform a lift-ns on a pair-seq that is returned from
 *   partition-2-all-nc, which is a seq of pairs of zlocs that may or
 *   may not have been sorted and which may or may not have had things
 *   removed from it and may or may not actually be pairs.  Could be
 *   single things, could be multiple things.  If contains multiple
 *   things, the first thing is the key, but if it is just a single
 *   thing, the first thing is *not* a key. So we only need to work
 *   on the first of each seq which has more than one element in it,
 *   and possibly replace it. This will only lift out a ns if all keys
 *   in seqs with more than one element have the same namespace. Returns
 *   the [namespace pair-seq] or nil.
 */
zprint.zutil.zlift_ns = (function zprint$zutil$zlift_ns(p__29199,pair_seq,ns){
var map__29201 = p__29199;
var map__29201__$1 = cljs.core.__destructure_map(map__29201);
var map_options = map__29201__$1;
var in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29201__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
var lift_ns_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29201__$1,new cljs.core.Keyword(null,"lift-ns?","lift-ns?",2021372853));
var lift_ns_in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29201__$1,new cljs.core.Keyword(null,"lift-ns-in-code?","lift-ns-in-code?",1444279377));
var unlift_ns_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29201__$1,new cljs.core.Keyword(null,"unlift-ns?","unlift-ns?",1065087867));
if(cljs.core.truth_((function (){var and__5000__auto__ = lift_ns_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
if(cljs.core.truth_(in_code_QMARK_)){
return lift_ns_in_code_QMARK_;
} else {
return true;
}
} else {
return and__5000__auto__;
}
})())){
if(cljs.core.truth_(ns)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,pair_seq], null);
} else {
var strip_ns = (function (named){
if((named instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(named));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(named));
}
});
var ns__$1 = null;
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__29236 = cljs.core.first(pair_seq__$1);
var seq__29237 = cljs.core.seq(vec__29236);
var first__29238 = cljs.core.first(seq__29237);
var seq__29237__$1 = cljs.core.next(seq__29237);
var k = first__29238;
var rest_of_pair = seq__29237__$1;
var pair = vec__29236;
var current_ns = (cljs.core.truth_((function (){var and__5000__auto__ = rest_of_pair;
if(and__5000__auto__){
var and__5000__auto____$1 = (!(clojure.string.starts_with_QMARK_(rewrite_clj.zip.string(k),"::")));
if(and__5000__auto____$1){
var or__5002__auto__ = zprint.zutil.zkeyword_QMARK_(k);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return zprint.zutil.zsymbol_QMARK_(k);
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())?cljs.core.namespace(zprint.zutil.zloc_to_keyword(k)):null);
if(cljs.core.not(k)){
if(cljs.core.truth_(ns__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns__$1)].join(''),out], null);
} else {
return null;
}
} else {
if(cljs.core.truth_(current_ns)){
if(cljs.core.truth_(ns__$1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns__$1,current_ns)){
var G__30048 = ns__$1;
var G__30049 = cljs.core.next(pair_seq__$1);
var G__30050 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons(rewrite_clj.zip.of_node_STAR_.cljs$core$IFn$_invoke$arity$1(rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1(strip_ns(rewrite_clj.zip.sexpr(k)))),rest_of_pair));
ns__$1 = G__30048;
pair_seq__$1 = G__30049;
out = G__30050;
continue;
} else {
return null;
}
} else {
var G__30051 = current_ns;
var G__30052 = cljs.core.next(pair_seq__$1);
var G__30053 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons(rewrite_clj.zip.of_node_STAR_.cljs$core$IFn$_invoke$arity$1(rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1(strip_ns(rewrite_clj.zip.sexpr(k)))),rest_of_pair));
ns__$1 = G__30051;
pair_seq__$1 = G__30052;
out = G__30053;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pair),(1))){
var G__30057 = ns__$1;
var G__30058 = cljs.core.next(pair_seq__$1);
var G__30059 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,pair);
ns__$1 = G__30057;
pair_seq__$1 = G__30058;
out = G__30059;
continue;
} else {
return null;
}
}
}
break;
}
}
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = ns;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = unlift_ns_QMARK_;
if(cljs.core.truth_(and__5000__auto____$1)){
return cljs.core.not(lift_ns_QMARK_);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__29286 = cljs.core.first(pair_seq__$1);
var seq__29287 = cljs.core.seq(vec__29286);
var first__29288 = cljs.core.first(seq__29287);
var seq__29287__$1 = cljs.core.next(seq__29287);
var k = first__29288;
var rest_of_pair = seq__29287__$1;
var pair = vec__29286;
var current_ns = (cljs.core.truth_((function (){var and__5000__auto__ = rest_of_pair;
if(and__5000__auto__){
var and__5000__auto____$1 = (!(clojure.string.starts_with_QMARK_(rewrite_clj.zip.string(k),"::")));
if(and__5000__auto____$1){
var or__5002__auto__ = zprint.zutil.zkeyword_QMARK_(k);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return zprint.zutil.zsymbol_QMARK_(k);
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())?cljs.core.namespace(zprint.zutil.zloc_to_keyword(k)):null);
if(cljs.core.not(k)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,out], null);
} else {
if(cljs.core.truth_(current_ns)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,pair_seq__$1], null);
} else {
if(cljs.core.not(zprint.zutil.zkeyword_QMARK_(k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,pair_seq__$1], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pair),(1))){
var G__30087 = cljs.core.next(pair_seq__$1);
var G__30088 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,pair);
pair_seq__$1 = G__30087;
out = G__30088;
continue;
} else {
var G__30089 = cljs.core.next(pair_seq__$1);
var G__30090 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons(rewrite_clj.zip.of_node_STAR_.cljs$core$IFn$_invoke$arity$1(rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.name(rewrite_clj.zip.sexpr(k))].join('')))),rest_of_pair));
pair_seq__$1 = G__30089;
out = G__30090;
continue;

}
}
}
}
break;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,pair_seq], null);

}
}
});
/**
 * Redefine all of the traversal functions for zippers, then
 *   call the function of no arguments passed in.
 */
zprint.zutil.zredef_call = (function zprint$zutil$zredef_call(body_fn){
var zstring_orig_val__29324 = zprint.zfns.zstring;
var znumstr_orig_val__29325 = zprint.zfns.znumstr;
var zbyte_array_QMARK__orig_val__29326 = zprint.zfns.zbyte_array_QMARK_;
var zcomment_QMARK__orig_val__29327 = zprint.zfns.zcomment_QMARK_;
var zsexpr_orig_val__29328 = zprint.zfns.zsexpr;
var zsexpr_QMARK__orig_val__29329 = zprint.zfns.zsexpr_QMARK_;
var zseqnws_orig_val__29330 = zprint.zfns.zseqnws;
var zseqnws_w_nl_orig_val__29331 = zprint.zfns.zseqnws_w_nl;
var zseqnws_w_bl_orig_val__29332 = zprint.zfns.zseqnws_w_bl;
var zfocus_style_orig_val__29333 = zprint.zfns.zfocus_style;
var zstart_orig_val__29334 = zprint.zfns.zstart;
var zfirst_orig_val__29335 = zprint.zfns.zfirst;
var zfirst_sexpr_orig_val__29337 = zprint.zfns.zfirst_sexpr;
var zsecond_orig_val__29338 = zprint.zfns.zsecond;
var zthird_orig_val__29339 = zprint.zfns.zthird;
var zfourth_orig_val__29340 = zprint.zfns.zfourth;
var znextnws_orig_val__29341 = zprint.zfns.znextnws;
var znextnws_w_nl_orig_val__29342 = zprint.zfns.znextnws_w_nl;
var znthnext_orig_val__29343 = zprint.zfns.znthnext;
var zcount_orig_val__29344 = zprint.zfns.zcount;
var zcount_zloc_seq_nc_nws_orig_val__29345 = zprint.zfns.zcount_zloc_seq_nc_nws;
var zmap_orig_val__29346 = zprint.zfns.zmap;
var zmap_w_nl_orig_val__29347 = zprint.zfns.zmap_w_nl;
var zmap_w_bl_orig_val__29348 = zprint.zfns.zmap_w_bl;
var zmap_w_nl_comma_orig_val__29349 = zprint.zfns.zmap_w_nl_comma;
var zmap_no_comment_orig_val__29350 = zprint.zfns.zmap_no_comment;
var zanonfn_QMARK__orig_val__29351 = zprint.zfns.zanonfn_QMARK_;
var zfn_obj_QMARK__orig_val__29352 = zprint.zfns.zfn_obj_QMARK_;
var zfocus_orig_val__29353 = zprint.zfns.zfocus;
var zfind_path_orig_val__29354 = zprint.zfns.zfind_path;
var zwhitespace_QMARK__orig_val__29355 = zprint.zfns.zwhitespace_QMARK_;
var zlist_QMARK__orig_val__29356 = zprint.zfns.zlist_QMARK_;
var zvector_QMARK__orig_val__29357 = zprint.zfns.zvector_QMARK_;
var zmap_QMARK__orig_val__29358 = zprint.zfns.zmap_QMARK_;
var znamespacedmap_QMARK__orig_val__29359 = zprint.zfns.znamespacedmap_QMARK_;
var zset_QMARK__orig_val__29360 = zprint.zfns.zset_QMARK_;
var zcoll_QMARK__orig_val__29361 = zprint.zfns.zcoll_QMARK_;
var zuneval_QMARK__orig_val__29362 = zprint.zfns.zuneval_QMARK_;
var zmeta_QMARK__orig_val__29363 = zprint.zfns.zmeta_QMARK_;
var ztag_orig_val__29364 = zprint.zfns.ztag;
var zlast_orig_val__29365 = zprint.zfns.zlast;
var zarray_QMARK__orig_val__29366 = zprint.zfns.zarray_QMARK_;
var zatom_QMARK__orig_val__29367 = zprint.zfns.zatom_QMARK_;
var zderef_orig_val__29368 = zprint.zfns.zderef;
var zrecord_QMARK__orig_val__29369 = zprint.zfns.zrecord_QMARK_;
var zns_QMARK__orig_val__29370 = zprint.zfns.zns_QMARK_;
var zobj_to_vec_orig_val__29371 = zprint.zfns.zobj_to_vec;
var zexpandarray_orig_val__29372 = zprint.zfns.zexpandarray;
var znewline_QMARK__orig_val__29373 = zprint.zfns.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__orig_val__29374 = zprint.zfns.zwhitespaceorcomment_QMARK_;
var zmap_all_orig_val__29375 = zprint.zfns.zmap_all;
var zmap_all_nl_comment_orig_val__29376 = zprint.zfns.zmap_all_nl_comment;
var zpromise_QMARK__orig_val__29377 = zprint.zfns.zpromise_QMARK_;
var zfuture_QMARK__orig_val__29378 = zprint.zfns.zfuture_QMARK_;
var zdelay_QMARK__orig_val__29379 = zprint.zfns.zdelay_QMARK_;
var zkeyword_QMARK__orig_val__29380 = zprint.zfns.zkeyword_QMARK_;
var zconstant_QMARK__orig_val__29381 = zprint.zfns.zconstant_QMARK_;
var zagent_QMARK__orig_val__29382 = zprint.zfns.zagent_QMARK_;
var zreader_macro_QMARK__orig_val__29383 = zprint.zfns.zreader_macro_QMARK_;
var zarray_to_shift_seq_orig_val__29384 = zprint.zfns.zarray_to_shift_seq;
var zdotdotdot_orig_val__29385 = zprint.zfns.zdotdotdot;
var zsymbol_QMARK__orig_val__29386 = zprint.zfns.zsymbol_QMARK_;
var znil_QMARK__orig_val__29387 = zprint.zfns.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__orig_val__29388 = zprint.zfns.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__orig_val__29389 = zprint.zfns.zreader_cond_w_coll_QMARK_;
var zlift_ns_orig_val__29390 = zprint.zfns.zlift_ns;
var zfind_orig_val__29391 = zprint.zfns.zfind;
var ztake_append_orig_val__29392 = zprint.zfns.ztake_append;
var zstring_temp_val__29393 = rewrite_clj.zip.string;
var znumstr_temp_val__29394 = zprint.zutil.znumstr;
var zbyte_array_QMARK__temp_val__29395 = cljs.core.constantly(false);
var zcomment_QMARK__temp_val__29396 = zprint.zutil.zcomment_QMARK_;
var zsexpr_temp_val__29397 = rewrite_clj.zip.sexpr;
var zsexpr_QMARK__temp_val__29398 = zprint.zutil.zsexpr_QMARK_;
var zseqnws_temp_val__29399 = zprint.zutil.zseqnws;
var zseqnws_w_nl_temp_val__29400 = zprint.zutil.zseqnws_w_nl;
var zseqnws_w_bl_temp_val__29401 = zprint.zutil.zseqnws_w_bl;
var zfocus_style_temp_val__29402 = zprint.zutil.zfocus_style;
var zstart_temp_val__29403 = zprint.zutil.zstart;
var zfirst_temp_val__29404 = zprint.zutil.zfirst;
var zfirst_sexpr_temp_val__29405 = zprint.zutil.zfirst_sexpr;
var zsecond_temp_val__29406 = zprint.zutil.zsecond;
var zthird_temp_val__29407 = zprint.zutil.zthird;
var zfourth_temp_val__29408 = zprint.zutil.zfourth;
var znextnws_temp_val__29409 = zprint.zutil.zrightnws;
var znextnws_w_nl_temp_val__29410 = zprint.zutil.znextnws_w_nl;
var znthnext_temp_val__29411 = zprint.zutil.znthnext;
var zcount_temp_val__29412 = zprint.zutil.zcount;
var zcount_zloc_seq_nc_nws_temp_val__29413 = zprint.zutil.zcount_zloc_seq_nc_nws;
var zmap_temp_val__29414 = zprint.zutil.zmap;
var zmap_w_nl_temp_val__29415 = zprint.zutil.zmap_w_nl;
var zmap_w_bl_temp_val__29416 = zprint.zutil.zmap_w_bl;
var zmap_w_nl_comma_temp_val__29417 = zprint.zutil.zmap_w_nl_comma;
var zmap_no_comment_temp_val__29418 = zprint.zutil.zmap_no_comment;
var zanonfn_QMARK__temp_val__29419 = zprint.zutil.zanonfn_QMARK_;
var zfn_obj_QMARK__temp_val__29420 = cljs.core.constantly(false);
var zfocus_temp_val__29421 = zprint.zutil.zfocus;
var zfind_path_temp_val__29422 = zprint.zutil.find_root_and_path_nw;
var zwhitespace_QMARK__temp_val__29423 = zprint.zutil.whitespace_QMARK_;
var zlist_QMARK__temp_val__29424 = rewrite_clj.zip.list_QMARK_;
var zvector_QMARK__temp_val__29425 = rewrite_clj.zip.vector_QMARK_;
var zmap_QMARK__temp_val__29426 = rewrite_clj.zip.map_QMARK_;
var znamespacedmap_QMARK__temp_val__29427 = zprint.zutil.znamespacedmap_QMARK_;
var zset_QMARK__temp_val__29428 = rewrite_clj.zip.set_QMARK_;
var zcoll_QMARK__temp_val__29429 = zprint.zutil.z_coll_QMARK_;
var zuneval_QMARK__temp_val__29430 = zprint.zutil.zuneval_QMARK_;
var zmeta_QMARK__temp_val__29431 = zprint.zutil.zmeta_QMARK_;
var ztag_temp_val__29432 = zprint.zutil.ztag;
var zlast_temp_val__29433 = zprint.zutil.zlast;
var zarray_QMARK__temp_val__29434 = cljs.core.constantly(false);
var zatom_QMARK__temp_val__29435 = cljs.core.constantly(false);
var zderef_temp_val__29436 = cljs.core.constantly(false);
var zrecord_QMARK__temp_val__29437 = cljs.core.constantly(false);
var zns_QMARK__temp_val__29438 = cljs.core.constantly(false);
var zobj_to_vec_temp_val__29439 = cljs.core.constantly(null);
var zexpandarray_temp_val__29440 = cljs.core.constantly(null);
var znewline_QMARK__temp_val__29441 = zprint.zutil.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__temp_val__29442 = rewrite_clj.zip.whitespace_or_comment_QMARK_;
var zmap_all_temp_val__29443 = zprint.zutil.zmap_all;
var zmap_all_nl_comment_temp_val__29444 = zprint.zutil.zmap_all_nl_comment;
var zpromise_QMARK__temp_val__29445 = cljs.core.constantly(false);
var zfuture_QMARK__temp_val__29446 = cljs.core.constantly(false);
var zdelay_QMARK__temp_val__29447 = cljs.core.constantly(false);
var zkeyword_QMARK__temp_val__29448 = zprint.zutil.zkeyword_QMARK_;
var zconstant_QMARK__temp_val__29449 = zprint.zutil.zconstant_QMARK_;
var zagent_QMARK__temp_val__29450 = cljs.core.constantly(false);
var zreader_macro_QMARK__temp_val__29451 = zprint.zutil.zreader_macro_QMARK_;
var zarray_to_shift_seq_temp_val__29452 = cljs.core.constantly(null);
var zdotdotdot_temp_val__29453 = zprint.zutil.zdotdotdot;
var zsymbol_QMARK__temp_val__29454 = zprint.zutil.zsymbol_QMARK_;
var znil_QMARK__temp_val__29455 = zprint.zutil.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__temp_val__29456 = zprint.zutil.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__temp_val__29457 = zprint.zutil.zreader_cond_w_coll_QMARK_;
var zlift_ns_temp_val__29458 = zprint.zutil.zlift_ns;
var zfind_temp_val__29459 = zprint.zutil.zfind;
var ztake_append_temp_val__29460 = zprint.zutil.ztake_append;
(zprint.zfns.zstring = zstring_temp_val__29393);

(zprint.zfns.znumstr = znumstr_temp_val__29394);

(zprint.zfns.zbyte_array_QMARK_ = zbyte_array_QMARK__temp_val__29395);

(zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__temp_val__29396);

(zprint.zfns.zsexpr = zsexpr_temp_val__29397);

(zprint.zfns.zsexpr_QMARK_ = zsexpr_QMARK__temp_val__29398);

(zprint.zfns.zseqnws = zseqnws_temp_val__29399);

(zprint.zfns.zseqnws_w_nl = zseqnws_w_nl_temp_val__29400);

(zprint.zfns.zseqnws_w_bl = zseqnws_w_bl_temp_val__29401);

(zprint.zfns.zfocus_style = zfocus_style_temp_val__29402);

(zprint.zfns.zstart = zstart_temp_val__29403);

(zprint.zfns.zfirst = zfirst_temp_val__29404);

(zprint.zfns.zfirst_sexpr = zfirst_sexpr_temp_val__29405);

(zprint.zfns.zsecond = zsecond_temp_val__29406);

(zprint.zfns.zthird = zthird_temp_val__29407);

(zprint.zfns.zfourth = zfourth_temp_val__29408);

(zprint.zfns.znextnws = znextnws_temp_val__29409);

(zprint.zfns.znextnws_w_nl = znextnws_w_nl_temp_val__29410);

(zprint.zfns.znthnext = znthnext_temp_val__29411);

(zprint.zfns.zcount = zcount_temp_val__29412);

(zprint.zfns.zcount_zloc_seq_nc_nws = zcount_zloc_seq_nc_nws_temp_val__29413);

(zprint.zfns.zmap = zmap_temp_val__29414);

(zprint.zfns.zmap_w_nl = zmap_w_nl_temp_val__29415);

(zprint.zfns.zmap_w_bl = zmap_w_bl_temp_val__29416);

(zprint.zfns.zmap_w_nl_comma = zmap_w_nl_comma_temp_val__29417);

(zprint.zfns.zmap_no_comment = zmap_no_comment_temp_val__29418);

(zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__temp_val__29419);

(zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__temp_val__29420);

(zprint.zfns.zfocus = zfocus_temp_val__29421);

(zprint.zfns.zfind_path = zfind_path_temp_val__29422);

(zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__temp_val__29423);

(zprint.zfns.zlist_QMARK_ = zlist_QMARK__temp_val__29424);

(zprint.zfns.zvector_QMARK_ = zvector_QMARK__temp_val__29425);

(zprint.zfns.zmap_QMARK_ = zmap_QMARK__temp_val__29426);

(zprint.zfns.znamespacedmap_QMARK_ = znamespacedmap_QMARK__temp_val__29427);

(zprint.zfns.zset_QMARK_ = zset_QMARK__temp_val__29428);

(zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__temp_val__29429);

(zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__temp_val__29430);

(zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__temp_val__29431);

(zprint.zfns.ztag = ztag_temp_val__29432);

(zprint.zfns.zlast = zlast_temp_val__29433);

(zprint.zfns.zarray_QMARK_ = zarray_QMARK__temp_val__29434);

(zprint.zfns.zatom_QMARK_ = zatom_QMARK__temp_val__29435);

(zprint.zfns.zderef = zderef_temp_val__29436);

(zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__temp_val__29437);

(zprint.zfns.zns_QMARK_ = zns_QMARK__temp_val__29438);

(zprint.zfns.zobj_to_vec = zobj_to_vec_temp_val__29439);

(zprint.zfns.zexpandarray = zexpandarray_temp_val__29440);

(zprint.zfns.znewline_QMARK_ = znewline_QMARK__temp_val__29441);

(zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__temp_val__29442);

(zprint.zfns.zmap_all = zmap_all_temp_val__29443);

(zprint.zfns.zmap_all_nl_comment = zmap_all_nl_comment_temp_val__29444);

(zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__temp_val__29445);

(zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__temp_val__29446);

(zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__temp_val__29447);

(zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__temp_val__29448);

(zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__temp_val__29449);

(zprint.zfns.zagent_QMARK_ = zagent_QMARK__temp_val__29450);

(zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__temp_val__29451);

(zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_temp_val__29452);

(zprint.zfns.zdotdotdot = zdotdotdot_temp_val__29453);

(zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__temp_val__29454);

(zprint.zfns.znil_QMARK_ = znil_QMARK__temp_val__29455);

(zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__temp_val__29456);

(zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__temp_val__29457);

(zprint.zfns.zlift_ns = zlift_ns_temp_val__29458);

(zprint.zfns.zfind = zfind_temp_val__29459);

(zprint.zfns.ztake_append = ztake_append_temp_val__29460);

try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null, ));
}finally {(zprint.zfns.ztake_append = ztake_append_orig_val__29392);

(zprint.zfns.zfind = zfind_orig_val__29391);

(zprint.zfns.zlift_ns = zlift_ns_orig_val__29390);

(zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__orig_val__29389);

(zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__orig_val__29388);

(zprint.zfns.znil_QMARK_ = znil_QMARK__orig_val__29387);

(zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__orig_val__29386);

(zprint.zfns.zdotdotdot = zdotdotdot_orig_val__29385);

(zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_orig_val__29384);

(zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__orig_val__29383);

(zprint.zfns.zagent_QMARK_ = zagent_QMARK__orig_val__29382);

(zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__orig_val__29381);

(zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__orig_val__29380);

(zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__orig_val__29379);

(zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__orig_val__29378);

(zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__orig_val__29377);

(zprint.zfns.zmap_all_nl_comment = zmap_all_nl_comment_orig_val__29376);

(zprint.zfns.zmap_all = zmap_all_orig_val__29375);

(zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__orig_val__29374);

(zprint.zfns.znewline_QMARK_ = znewline_QMARK__orig_val__29373);

(zprint.zfns.zexpandarray = zexpandarray_orig_val__29372);

(zprint.zfns.zobj_to_vec = zobj_to_vec_orig_val__29371);

(zprint.zfns.zns_QMARK_ = zns_QMARK__orig_val__29370);

(zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__orig_val__29369);

(zprint.zfns.zderef = zderef_orig_val__29368);

(zprint.zfns.zatom_QMARK_ = zatom_QMARK__orig_val__29367);

(zprint.zfns.zarray_QMARK_ = zarray_QMARK__orig_val__29366);

(zprint.zfns.zlast = zlast_orig_val__29365);

(zprint.zfns.ztag = ztag_orig_val__29364);

(zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__orig_val__29363);

(zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__orig_val__29362);

(zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__orig_val__29361);

(zprint.zfns.zset_QMARK_ = zset_QMARK__orig_val__29360);

(zprint.zfns.znamespacedmap_QMARK_ = znamespacedmap_QMARK__orig_val__29359);

(zprint.zfns.zmap_QMARK_ = zmap_QMARK__orig_val__29358);

(zprint.zfns.zvector_QMARK_ = zvector_QMARK__orig_val__29357);

(zprint.zfns.zlist_QMARK_ = zlist_QMARK__orig_val__29356);

(zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__orig_val__29355);

(zprint.zfns.zfind_path = zfind_path_orig_val__29354);

(zprint.zfns.zfocus = zfocus_orig_val__29353);

(zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__orig_val__29352);

(zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__orig_val__29351);

(zprint.zfns.zmap_no_comment = zmap_no_comment_orig_val__29350);

(zprint.zfns.zmap_w_nl_comma = zmap_w_nl_comma_orig_val__29349);

(zprint.zfns.zmap_w_bl = zmap_w_bl_orig_val__29348);

(zprint.zfns.zmap_w_nl = zmap_w_nl_orig_val__29347);

(zprint.zfns.zmap = zmap_orig_val__29346);

(zprint.zfns.zcount_zloc_seq_nc_nws = zcount_zloc_seq_nc_nws_orig_val__29345);

(zprint.zfns.zcount = zcount_orig_val__29344);

(zprint.zfns.znthnext = znthnext_orig_val__29343);

(zprint.zfns.znextnws_w_nl = znextnws_w_nl_orig_val__29342);

(zprint.zfns.znextnws = znextnws_orig_val__29341);

(zprint.zfns.zfourth = zfourth_orig_val__29340);

(zprint.zfns.zthird = zthird_orig_val__29339);

(zprint.zfns.zsecond = zsecond_orig_val__29338);

(zprint.zfns.zfirst_sexpr = zfirst_sexpr_orig_val__29337);

(zprint.zfns.zfirst = zfirst_orig_val__29335);

(zprint.zfns.zstart = zstart_orig_val__29334);

(zprint.zfns.zfocus_style = zfocus_style_orig_val__29333);

(zprint.zfns.zseqnws_w_bl = zseqnws_w_bl_orig_val__29332);

(zprint.zfns.zseqnws_w_nl = zseqnws_w_nl_orig_val__29331);

(zprint.zfns.zseqnws = zseqnws_orig_val__29330);

(zprint.zfns.zsexpr_QMARK_ = zsexpr_QMARK__orig_val__29329);

(zprint.zfns.zsexpr = zsexpr_orig_val__29328);

(zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__orig_val__29327);

(zprint.zfns.zbyte_array_QMARK_ = zbyte_array_QMARK__orig_val__29326);

(zprint.zfns.znumstr = znumstr_orig_val__29325);

(zprint.zfns.zstring = zstring_orig_val__29324);
}});

//# sourceMappingURL=zprint.zutil.js.map
