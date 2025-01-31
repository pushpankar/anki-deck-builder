goog.provide('com.lucidcode.ide.ui.anki');
com.lucidcode.ide.ui.anki.component_seq = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),new cljs.core.Keyword(null,"select-word","select-word",-35610859),new cljs.core.Keyword(null,"adding-words","adding-words",1601069694)], null);
com.lucidcode.ide.ui.anki.next_in_seq = (function com$lucidcode$ide$ui$anki$next_in_seq(coll,current){
if(cljs.core.sequential_QMARK_(coll)){
} else {
throw (new Error("Assert failed: (sequential? coll)"));
}

var idx = coll.indexOf(current);
if((((idx < (0))) || ((idx >= (cljs.core.count(coll) - (1)))))){
return null;
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,(idx + (1)));
}
});
com.lucidcode.ide.ui.anki.default_db = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-component","current-component",-809737350),new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"file","file",-1269645878),null], null)], null);
com.lucidcode.ide.ui.anki.status_msg_QMARK_ = (function com$lucidcode$ide$ui$anki$status_msg_QMARK_(msg){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",-889844188),null,new cljs.core.Keyword(null,"login-required","login-required",136894711),null], null), null),msg);
});
com.lucidcode.ide.ui.anki.connect_websocket = (function com$lucidcode$ide$ui$anki$connect_websocket(){
var ws = (new WebSocket("ws://localhost:8080/ws"));
(ws.onopen = (function (){
console.log("WebSocket connected");

return ws.send("pong");
}));

(ws.onmessage = (function (event){
var data = event.data;
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ws","message-received","ws/message-received",287223475),data], null));
}));

(ws.onclose = (function (){
return console.log("WebSocket closed");
}));

(ws.onerror = (function (){
return console.error("WebSocket error");
}));

return ws;
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("ws","message-received","ws/message-received",287223475),(function (db,p__25549){
var vec__25550 = p__25549;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25550,(0),null);
var msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25550,(1),null);
var msg__$1 = cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$1(msg);
if(com.lucidcode.ide.ui.anki.status_msg_QMARK_(msg__$1)){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413)], null),msg__$1);
} else {
return db;
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword("ws","send-message","ws/send-message",185035111),(function (p__25553){
var vec__25554 = p__25553;
var conn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25554,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25554,(1),null);
if(cljs.core.truth_(conn)){
return conn.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([message], 0)));
} else {
return null;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.lucidcode.ide.ui.anki","initialize-db","com.lucidcode.ide.ui.anki/initialize-db",-1900790488),(function (_,___$1){
var ws = com.lucidcode.ide.ui.anki.connect_websocket();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(com.lucidcode.ide.ui.anki.default_db,new cljs.core.Keyword(null,"ws","ws",86841443),ws);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.lucidcode.ide.ui.anki","http-error","com.lucidcode.ide.ui.anki/http-error",1541119479),(function (db,resp){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resp], 0));

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("upload","set-file","upload/set-file",2115322931),(function (db,p__25557){
var vec__25558 = p__25557;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25558,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25558,(1),null);
if(cljs.core.truth_(file.name.endsWith(".epub"))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),new cljs.core.Keyword(null,"file","file",-1269645878)], null),file),new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),cljs.core.dissoc,new cljs.core.Keyword(null,"error","error",-978969032));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),new cljs.core.Keyword(null,"error","error",-978969032)], null),"Only .epub files are allowed."),new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),cljs.core.dissoc,new cljs.core.Keyword(null,"file","file",-1269645878));
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("upload","parse-book","upload/parse-book",129003016),(function (p__25561,_){
var map__25562 = p__25561;
var map__25562__$1 = cljs.core.__destructure_map(map__25562);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25562__$1,new cljs.core.Keyword(null,"db","db",993250759));
var body = (function (){var G__25563 = (new FormData());
G__25563.append("file",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),new cljs.core.Keyword(null,"file","file",-1269645878)], null)));

return G__25563;
})();
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"/parse-book",new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.lucidcode.ide.ui.anki","on-parse-book","com.lucidcode.ide.ui.anki/on-parse-book",470306066)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.lucidcode.ide.ui.anki","http-error","com.lucidcode.ide.ui.anki/http-error",1541119479)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("upload","set-deck-name","upload/set-deck-name",1325099013),(function (db,p__25564){
var vec__25565 = p__25564;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25565,(0),null);
var deck_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25565,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),new cljs.core.Keyword(null,"deck-name","deck-name",-108991250)], null),deck_name);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.lucidcode.ide.ui.anki","on-parse-book","com.lucidcode.ide.ui.anki/on-parse-book",470306066),(function (db,p__25568){
var vec__25569 = p__25568;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25569,(0),null);
var map__25572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25569,(1),null);
var map__25572__$1 = cljs.core.__destructure_map(map__25572);
var word_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25572__$1,new cljs.core.Keyword(null,"word-list","word-list",-230183462));
var ask_for_email_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25572__$1,new cljs.core.Keyword(null,"ask-for-email?","ask-for-email?",1444195351));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"word-list","word-list",-230183462),word_list),new cljs.core.Keyword(null,"ask-for-email?","ask-for-email?",1444195351),ask_for_email_QMARK_);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.lucidcode.ide.ui.anki","next-component","com.lucidcode.ide.ui.anki/next-component",643666482),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-component","current-component",-809737350),(function (p1__25573_SHARP_){
return com.lucidcode.ide.ui.anki.next_in_seq(com.lucidcode.ide.ui.anki.component_seq,p1__25573_SHARP_);
}));
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
com.lucidcode.ide.ui.anki.step_annotator = (function com$lucidcode$ide$ui$anki$step_annotator(i,n){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full.py-4.px-6","div.w-full.py-4.px-6",-1877636446),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.max-w-4xl.mx-auto.text-center","div.max-w-4xl.mx-auto.text-center",-591197280),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm.font-medium.text-gray-600","p.text-sm.font-medium.text-gray-600",-1012256270),["Step: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null)], null)], null);
});
com.lucidcode.ide.ui.anki.next_button = (function com$lucidcode$ide$ui$anki$next_button(enabled_QMARK_,on_click){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-end.mt-4","div.flex.justify-end.mt-4",2002316223),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.py-2.px-8.rounded-md.text-white.font-medium","button.py-2.px-8.rounded-md.text-white.font-medium",1034877257),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(enabled_QMARK_)?"bg-blue-600 hover:bg-blue-700":"bg-gray-300 cursor-not-allowed"),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(enabled_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(enabled_QMARK_)){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.lucidcode.ide.ui.anki","next-component","com.lucidcode.ide.ui.anki/next-component",643666482)], null));

return (on_click.cljs$core$IFn$_invoke$arity$0 ? on_click.cljs$core$IFn$_invoke$arity$0() : on_click.call(null, ));
} else {
return null;
}
})], null),"Next"], null)], null);
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.lucidcode.ide.ui.anki","deck-name","com.lucidcode.ide.ui.anki/deck-name",-1955565466),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),new cljs.core.Keyword(null,"deck-name","deck-name",-108991250)], null));
})], 0));
com.lucidcode.ide.ui.anki.file_upload_component = (function com$lucidcode$ide$ui$anki$file_upload_component(){
var file_upload = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130)], null));
var deck_name = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.lucidcode.ide.ui.anki","deck-name","com.lucidcode.ide.ui.anki/deck-name",-1955565466)], null));
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pt-16.pb-24.mx-auto","div.pt-16.pb-24.mx-auto",2113869406),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rounded-lg.p-8.w-full.min-w-md.max-w-lg.border.bg-white.shadow-sm","div.rounded-lg.p-8.w-full.min-w-md.max-w-lg.border.bg-white.shadow-sm",-812842271),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-center.mb-8","div.text-center.mb-8",-952425437),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-xl.font-semibold.text-gray-700.mb-2","h2.text-xl.font-semibold.text-gray-700.mb-2",439370907),"Select EPUB File"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.space-y-6","div.space-y-6",-1218954066),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.space-x-8","div.flex.space-x-8",-677542910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-sm.font-medium.text-gray-700.inline-flex.items-center","label.block.text-sm.font-medium.text-gray-700.inline-flex.items-center",65400633),"Deck Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.block.text-sm.text-gray-500.mt-1.px-4.py-2.border.rounded-md.shadow-sm","input.block.text-sm.text-gray-500.mt-1.px-4.py-2.border.rounded-md.shadow-sm",-357033844),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter deck name",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__25574_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("upload","set-deck-name","upload/set-deck-name",1325099013),p1__25574_SHARP_.target.value], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative","div.relative",430334058),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.block.w-full.text-sm.text-gray-500.file:mr-4.file:py-2.file:px-4.file:rounded-md.file:border-1","input.block.w-full.text-sm.text-gray-500.file:mr-4.file:py-2.file:px-4.file:rounded-md.file:border-1",-1893059735),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"accept","accept",1874130431),".epub",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__25575_SHARP_){
var file = (p1__25575_SHARP_.target.files[(0)]);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("upload","set-file","upload/set-file",2115322931),file], null));
})], null)], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(file_upload)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm.text-red-500.mt-2.max-w-lg","p.text-sm.text-red-500.mt-2.max-w-lg",1061582985),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(file_upload))], null):null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.lucidcode.ide.ui.anki.next_button,(function (){var and__5000__auto__ = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(file_upload));
if(cljs.core.truth_(and__5000__auto__)){
return (!(clojure.string.blank_QMARK_(cljs.core.deref(deck_name))));
} else {
return and__5000__auto__;
}
})(),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("upload","parse-book","upload/parse-book",129003016)], null));
})], null)], null);
});
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"word-list","word-list",-230183462),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"word-list","word-list",-230183462).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-word","toggle-word",-1869620175),(function (db,p__25576){
var vec__25577 = p__25576;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25577,(0),null);
var word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25577,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-list","word-list",-230183462)], null),(function (words){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25580){
var vec__25581 = p__25580;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25581,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25581,(1),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25581,(2),null);
var sel_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25581,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(w,word)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,f,s,cljs.core.not(sel_QMARK_)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,f,s,sel_QMARK_], null);
}
}),words);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"select-all-words","select-all-words",1595863638),(function (db,p__25584){
var vec__25585 = p__25584;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25585,(0),null);
var select_all_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25585,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"word-list","word-list",-230183462),(function (word_list){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__25588){
var vec__25589 = p__25588;
var word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25589,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25589,(1),null);
var usage = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25589,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25589,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [word,freq,usage,select_all_QMARK_], null);
}),word_list);
}));
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"all-selected?","all-selected?",998306472),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return ((cljs.core.seq(new cljs.core.Keyword(null,"word-list","word-list",-230183462).cljs$core$IFn$_invoke$arity$1(db))) && (cljs.core.every_QMARK_((function (p1__25592_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__25592_SHARP_,(3));
}),new cljs.core.Keyword(null,"word-list","word-list",-230183462).cljs$core$IFn$_invoke$arity$1(db))));
})], 0));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.lucidcode.ide.ui.anki","add-words-to-anki","com.lucidcode.ide.ui.anki/add-words-to-anki",-1052535715),(function (p__25594,_){
var map__25595 = p__25594;
var map__25595__$1 = cljs.core.__destructure_map(map__25595);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25595__$1,new cljs.core.Keyword(null,"db","db",993250759));
var words = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__25593_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__25593_SHARP_,(3));
}),new cljs.core.Keyword(null,"word-list","word-list",-230183462).cljs$core$IFn$_invoke$arity$1(db));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"/add-words-to-anki",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deck-name","deck-name",-108991250),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),new cljs.core.Keyword(null,"deck-name","deck-name",-108991250)], null)),new cljs.core.Keyword(null,"words","words",1924933001),words], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.lucidcode.ide.ui.anki","on-start-adding-to-anki","com.lucidcode.ide.ui.anki/on-start-adding-to-anki",-360359563)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.lucidcode.ide.ui.anki","http-error","com.lucidcode.ide.ui.anki/http-error",1541119479)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.lucidcode.ide.ui.anki","on-start-adding-to-anki","com.lucidcode.ide.ui.anki/on-start-adding-to-anki",-360359563),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"adding","adding",-192537306));
}));
com.lucidcode.ide.ui.anki.word_item = (function com$lucidcode$ide$ui$anki$word_item(p__25596){
var vec__25597 = p__25596;
var word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25597,(0),null);
var frequency = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25597,(1),null);
var sentence = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25597,(2),null);
var selected_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25597,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.py-3.px-4.hover:bg-gray-50.transition-colors","div.flex.flex-col.py-3.px-4.hover:bg-gray-50.transition-colors",1306613980),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-word","toggle-word",-1869620175),word], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-between.cursor-pointer","div.flex.items-center.justify-between.cursor-pointer",1266390256),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.space-x-3","div.flex.items-center.space-x-3",-322490863),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-5.h-5.border.rounded","div.w-5.h-5.border.rounded",199468684),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(selected_QMARK_)?"bg-blue-600 border-blue-600":"border-gray-300")], null),(cljs.core.truth_(selected_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.w-4.h-4.text-white.mx-auto.mt-0.5","svg.w-4.h-4.text-white.mx-auto.mt-0.5",-2018771754),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 20 20",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",new cljs.core.Keyword(null,"clip-rule","clip-rule",335492201),"evenodd"], null)], null)], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-700.font-medium","span.text-gray-700.font-medium",-1029232953),clojure.string.capitalize(word)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-500.text-sm","span.text-gray-500.text-sm",921719094),["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frequency),")"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-2.pl-8","div.mt-2.pl-8",907387590),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm.text-gray-600.italic","p.text-sm.text-gray-600.italic",1702856689),sentence], null)], null)], null);
});
com.lucidcode.ide.ui.anki.word_frequency_component = (function com$lucidcode$ide$ui$anki$word_frequency_component(){
var words = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-list","word-list",-230183462)], null)));
var all_selected_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-selected?","all-selected?",998306472)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full.max-w-2xl.px-4.py-6.mx-auto","div.w-full.max-w-2xl.px-4.py-6.mx-auto",1726421654),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full.bg-white.rounded-lg.border.border-gray-200","div.w-full.bg-white.rounded-lg.border.border-gray-200",816653987),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-4.py-5.border-b.border-gray-200.flex.justify-between.space-x-4","div.px-4.py-5.border-b.border-gray-200.flex.justify-between.space-x-4",-1810893064),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-lg.font-medium.text-gray-700","h2.text-lg.font-medium.text-gray-700",-355754064),"Select words"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mt-1.text-sm.text-gray-500","p.mt-1.text-sm.text-gray-500",-922946320),"Each word has an example and its first occurence."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-4.flex.justify-end","div.mt-4.flex.justify-end",178721122),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.bg-blue-500.text-white.rounded-md.px-3.py-1.shadow.hover:bg-blue-600","button.bg-blue-500.text-white.rounded-md.px-3.py-1.shadow.hover:bg-blue-600",709756742),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-all-words","select-all-words",1595863638),cljs.core.not(cljs.core.deref(all_selected_QMARK_))], null));
})], null),(cljs.core.truth_(cljs.core.deref(all_selected_QMARK_))?"Deselect All":"Select All")], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.divide-y.divide-gray-200","div.divide-y.divide-gray-200",390569165),(function (){var iter__5480__auto__ = (function com$lucidcode$ide$ui$anki$word_frequency_component_$_iter__25600(s__25601){
return (new cljs.core.LazySeq(null,(function (){
var s__25601__$1 = s__25601;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__25601__$1);
if(temp__5804__auto__){
var s__25601__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25601__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__25601__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__25603 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__25602 = (0);
while(true){
if((i__25602 < size__5479__auto__)){
var word_data = cljs.core._nth(c__5478__auto__,i__25602);
cljs.core.chunk_append(b__25603,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.lucidcode.ide.ui.anki.word_item,word_data], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first(word_data)], null)));

var G__25614 = (i__25602 + (1));
i__25602 = G__25614;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25603),com$lucidcode$ide$ui$anki$word_frequency_component_$_iter__25600(cljs.core.chunk_rest(s__25601__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25603),null);
}
} else {
var word_data = cljs.core.first(s__25601__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.lucidcode.ide.ui.anki.word_item,word_data], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first(word_data)], null)),com$lucidcode$ide$ui$anki$word_frequency_component_$_iter__25600(cljs.core.rest(s__25601__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(words);
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.lucidcode.ide.ui.anki.next_button,true,(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.lucidcode.ide.ui.anki","add-words-to-anki","com.lucidcode.ide.ui.anki/add-words-to-anki",-1052535715)], null));
})], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.lucidcode.ide.ui.anki","continue-flow","com.lucidcode.ide.ui.anki/continue-flow",887301594),(function (p__25604,_){
var map__25605 = p__25604;
var map__25605__$1 = cljs.core.__destructure_map(map__25605);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25605__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"adding","adding",-192537306)),new cljs.core.Keyword("ws","send-message","ws/send-message",185035111),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"flow","flow",590489032),new cljs.core.Keyword(null,"msg","msg",-1386103444),new cljs.core.Keyword(null,"continue","continue",-207346553)], null)], null)], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.lucidcode.ide.ui.anki","status","com.lucidcode.ide.ui.anki/status",316244331),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413)], null));
})], 0));
com.lucidcode.ide.ui.anki.adding = (function com$lucidcode$ide$ui$anki$adding(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.animate-spin.h-6.w-6.text-blue-500","svg.animate-spin.h-6.w-6.text-blue-500",-1121792270),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),"12",new cljs.core.Keyword(null,"cy","cy",755331060),"12",new cljs.core.Keyword(null,"r","r",-471384190),"10",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"4",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"d","d",1972142424),"M4 12a8 8 0 0116 0H4z"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml-2.text-blue-500","span.ml-2.text-blue-500",1996645621),"Adding..."], null)], null);
});
com.lucidcode.ide.ui.anki.status_component = (function com$lucidcode$ide$ui$anki$status_component(){
var status = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.lucidcode.ide.ui.anki","status","com.lucidcode.ide.ui.anki/status",316244331)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full.max-w-2xl.px-4.py-6.mx-auto","div.w-full.max-w-2xl.px-4.py-6.mx-auto",1726421654),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full.bg-white.rounded-lg.border.border-gray-200","div.w-full.bg-white.rounded-lg.border.border-gray-200",816653987),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-center.my-4.p-8","div.flex.items-center.justify-center.my-4.p-8",562437504),(function (){var G__25606 = status;
var G__25606__$1 = (((G__25606 instanceof cljs.core.Keyword))?G__25606.fqn:null);
switch (G__25606__$1) {
case "adding":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.lucidcode.ide.ui.anki.adding], null);

break;
case "login-required":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.items-center.gap-4","div.flex.flex-col.items-center.gap-4",-1571384212),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-gray-600","div.text-gray-600",-1933789982),"Please login in anki. Then click continue"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-4.py-2.bg-blue-500.text-white.rounded-md.hover:bg-blue-600.transition-colors.mt-8","button.px-4.py-2.bg-blue-500.text-white.rounded-md.hover:bg-blue-600.transition-colors.mt-8",-285717482),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.lucidcode.ide.ui.anki","continue-flow","com.lucidcode.ide.ui.anki/continue-flow",887301594)], null));
})], null),"Continue"], null)], null);

break;
case "done":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.h-6.w-6.text-green-500","svg.h-6.w-6.text-green-500",-1626648409),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 20 20",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M16.707 5.293a1 1 0 00-1.414 0L7 13.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l9-9a1 1 0 000-1.414z",new cljs.core.Keyword(null,"clip-rule","clip-rule",335492201),"evenodd"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml-2.text-green-500","span.ml-2.text-green-500",-2134125662),"Added"], null)], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.lucidcode.ide.ui.anki.adding], null);

}
})()], null)], null)], null);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.lucidcode.ide.ui.anki","skip-email","com.lucidcode.ide.ui.anki/skip-email",1468197867),(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"ask-for-email?","ask-for-email?",1444195351));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.lucidcode.ide.ui.anki","save-user-email","com.lucidcode.ide.ui.anki/save-user-email",-398077846),(function (p__25607,p__25608){
var map__25609 = p__25607;
var map__25609__$1 = cljs.core.__destructure_map(map__25609);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25609__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__25610 = p__25608;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25610,(0),null);
var email = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25610,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"/save-user-email",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"email","email",1415816706),email], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.lucidcode.ide.ui.anki","on-save-user-email","com.lucidcode.ide.ui.anki/on-save-user-email",-2024343454)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.lucidcode.ide.ui.anki","http-error","com.lucidcode.ide.ui.anki/http-error",1541119479)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"ask-for-email?","ask-for-email?",1444195351))], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.lucidcode.ide.ui.anki","on-save-user-email","com.lucidcode.ide.ui.anki/on-save-user-email",-2024343454),(function (db,_){
return db;
}));
com.lucidcode.ide.ui.anki.ask_for_email = (function com$lucidcode$ide$ui$anki$ask_for_email(){
var user_email = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pt-16.pb-24.mx-auto","div.pt-16.pb-24.mx-auto",2113869406),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rounded-lg.p-8.w-full.min-w-md.max-w-lg.border.bg-white.shadow-sm","div.rounded-lg.p-8.w-full.min-w-md.max-w-lg.border.bg-white.shadow-sm",-812842271),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-8","div.mb-8",255255619),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-lg.font-semibold.text-gray-700.mb-4.text-center","h3.text-lg.font-semibold.text-gray-700.mb-4.text-center",-956264164),"Please enter your email"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm.text-left.text-gray-700","p.text-sm.text-left.text-gray-700",-1555838642),"We will update you when a new version of the app is availble with new features, bug fixes etc."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.space-y-6","div.space-y-6",-1218954066),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.space-x-4.items-center","div.flex.space-x-4.items-center",2045973558),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-sm.font-medium.text-gray-700","label.block.text-sm.font-medium.text-gray-700",-558470411),"Email"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.block.text-sm.text-gray-500.mt-1.px-4.py-2.border.rounded-md.shadow-sm.w-full","input.block.text-sm.text-gray-500.mt-1.px-4.py-2.border.rounded-md.shadow-sm.w-full",645482119),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"email",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(user_email),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter your email",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__25613_SHARP_){
return cljs.core.reset_BANG_(user_email,p1__25613_SHARP_.target.value);
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-between.space-x-4.mt-8","div.flex.justify-between.space-x-4.mt-8",1270293234),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-4.py-2.text-gray-500.text-sm.font-medium.underline.cursor-pointer","button.px-4.py-2.text-gray-500.text-sm.font-medium.underline.cursor-pointer",785862852),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.lucidcode.ide.ui.anki","skip-email","com.lucidcode.ide.ui.anki/skip-email",1468197867)], null));
})], null),"Skip"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-4.py-2.bg-blue-600.text-white.rounded-md.shadow-sm.cursor-pointer.hover:bg-blue-700","button.px-4.py-2.bg-blue-600.text-white.rounded-md.shadow-sm.cursor-pointer.hover:bg-blue-700",1615423260),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.lucidcode.ide.ui.anki","save-user-email","com.lucidcode.ide.ui.anki/save-user-email",-398077846),cljs.core.deref(user_email)], null));
})], null),"Next"], null)], null)], null)], null);
});
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.lucidcode.ide.ui.anki","curr-component-id","com.lucidcode.ide.ui.anki/curr-component-id",-1717195970),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-component","current-component",-809737350)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.lucidcode.ide.ui.anki","ask-for-email?","com.lucidcode.ide.ui.anki/ask-for-email?",-1075106945),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ask-for-email?","ask-for-email?",1444195351)], null));
})], 0));
com.lucidcode.ide.ui.anki.app = (function com$lucidcode$ide$ui$anki$app(){
var curr_step = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.lucidcode.ide.ui.anki","curr-component-id","com.lucidcode.ide.ui.anki/curr-component-id",-1717195970)], null));
var ask_for_email_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.lucidcode.ide.ui.anki","ask-for-email?","com.lucidcode.ide.ui.anki/ask-for-email?",-1075106945)], null));
return (function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(curr_step),com.lucidcode.ide.ui.anki.component_seq.indexOf(cljs.core.deref(curr_step))], null)], 0));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.min-h-screen.flex.flex-col","div.min-h-screen.flex.flex-col",-2084300682),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.lucidcode.ide.ui.anki.step_annotator,(com.lucidcode.ide.ui.anki.component_seq.indexOf(cljs.core.deref(curr_step)) + (1)),cljs.core.count(com.lucidcode.ide.ui.anki.component_seq)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(curr_step),new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.lucidcode.ide.ui.anki.file_upload_component], null):(cljs.core.truth_(cljs.core.deref(ask_for_email_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.lucidcode.ide.ui.anki.ask_for_email], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(curr_step),new cljs.core.Keyword(null,"select-word","select-word",-35610859)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.lucidcode.ide.ui.anki.word_frequency_component], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(curr_step),new cljs.core.Keyword(null,"adding-words","adding-words",1601069694)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.lucidcode.ide.ui.anki.status_component], null):null))))], null);
});
});
com.lucidcode.ide.ui.anki.start = (function com$lucidcode$ide$ui$anki$start(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.lucidcode.ide.ui.anki.app], null),document.getElementById("app"));
});
com.lucidcode.ide.ui.anki.init_BANG_ = (function com$lucidcode$ide$ui$anki$init_BANG_(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.lucidcode.ide.ui.anki","initialize-db","com.lucidcode.ide.ui.anki/initialize-db",-1900790488)], null));

return com.lucidcode.ide.ui.anki.start();
});

//# sourceMappingURL=com.lucidcode.ide.ui.anki.js.map
