goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__21843 = e.target.readyState;
var fexpr__21842 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__21842.cljs$core$IFn$_invoke$arity$1 ? fexpr__21842.cljs$core$IFn$_invoke$arity$1(G__21843) : fexpr__21842.call(null, G__21843));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
ajax.xml_http_request.goog$module$goog$object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__21851,handler){
var map__21852 = p__21851;
var map__21852__$1 = cljs.core.__destructure_map(map__21852);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21852__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21852__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21852__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21852__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21852__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21852__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21852__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__21847_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__21847_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null, this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5804__auto___21928 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___21928)){
var response_type_21931 = temp__5804__auto___21928;
(this$__$1.responseType = cljs.core.name(response_type_21931));
} else {
}

var seq__21857_21932 = cljs.core.seq(headers);
var chunk__21858_21933 = null;
var count__21859_21934 = (0);
var i__21860_21935 = (0);
while(true){
if((i__21860_21935 < count__21859_21934)){
var vec__21873_21936 = chunk__21858_21933.cljs$core$IIndexed$_nth$arity$2(null, i__21860_21935);
var k_21937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21873_21936,(0),null);
var v_21938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21873_21936,(1),null);
this$__$1.setRequestHeader(k_21937,v_21938);


var G__21942 = seq__21857_21932;
var G__21943 = chunk__21858_21933;
var G__21944 = count__21859_21934;
var G__21945 = (i__21860_21935 + (1));
seq__21857_21932 = G__21942;
chunk__21858_21933 = G__21943;
count__21859_21934 = G__21944;
i__21860_21935 = G__21945;
continue;
} else {
var temp__5804__auto___21948 = cljs.core.seq(seq__21857_21932);
if(temp__5804__auto___21948){
var seq__21857_21949__$1 = temp__5804__auto___21948;
if(cljs.core.chunked_seq_QMARK_(seq__21857_21949__$1)){
var c__5525__auto___21950 = cljs.core.chunk_first(seq__21857_21949__$1);
var G__21951 = cljs.core.chunk_rest(seq__21857_21949__$1);
var G__21952 = c__5525__auto___21950;
var G__21953 = cljs.core.count(c__5525__auto___21950);
var G__21954 = (0);
seq__21857_21932 = G__21951;
chunk__21858_21933 = G__21952;
count__21859_21934 = G__21953;
i__21860_21935 = G__21954;
continue;
} else {
var vec__21879_21955 = cljs.core.first(seq__21857_21949__$1);
var k_21956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21879_21955,(0),null);
var v_21957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21879_21955,(1),null);
this$__$1.setRequestHeader(k_21956,v_21957);


var G__21958 = cljs.core.next(seq__21857_21949__$1);
var G__21959 = null;
var G__21960 = (0);
var G__21961 = (0);
seq__21857_21932 = G__21958;
chunk__21858_21933 = G__21959;
count__21859_21934 = G__21960;
i__21860_21935 = G__21961;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5002__auto__ = body;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
