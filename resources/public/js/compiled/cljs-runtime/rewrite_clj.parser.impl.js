goog.provide('rewrite_clj.parser.impl');
/**
 * INTERNAL. Flush buffer and add string to the given vector.
 */
rewrite_clj.parser.impl.flush_into = (function rewrite_clj$parser$impl$flush_into(lines,buf){
var s = buf.toString();
buf.clear();

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lines,s);
});
/**
 * INTERNAL.
 */
rewrite_clj.parser.impl.read_string_data = (function rewrite_clj$parser$impl$read_string_data(reader){
rewrite_clj.reader.ignore(reader);

var buf = (new goog.string.StringBuffer());
var escape_QMARK_ = false;
var lines = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5802__auto__ = rewrite_clj.reader.next(reader);
if(cljs.core.truth_(temp__5802__auto__)){
var c = temp__5802__auto__;
if(((cljs.core.not(escape_QMARK_)) && ((c === "\"")))){
return rewrite_clj.parser.impl.flush_into(lines,buf);
} else {
if((c === "\n")){
var G__22923 = escape_QMARK_;
var G__22924 = rewrite_clj.parser.impl.flush_into(lines,buf);
escape_QMARK_ = G__22923;
lines = G__22924;
continue;
} else {
buf.append(c);

var G__22925 = ((cljs.core.not(escape_QMARK_)) && ((c === "\\")));
var G__22926 = lines;
escape_QMARK_ = G__22925;
lines = G__22926;
continue;

}
}
} else {
return rewrite_clj.reader.throw_reader(reader,"Unexpected EOF while reading string.");
}
break;
}
});

//# sourceMappingURL=rewrite_clj.parser.impl.js.map
