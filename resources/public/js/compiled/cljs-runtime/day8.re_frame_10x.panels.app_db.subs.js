goog.provide('day8.re_frame_10x.panels.app_db.subs');
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__30593,_){
var map__30594 = p__30593;
var map__30594__$1 = cljs.core.__destructure_map(map__30594);
var app_db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30594__$1,new cljs.core.Keyword(null,"app-db","app-db",865606302));
return app_db;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","current-epoch-app-db-after","day8.re-frame-10x.panels.app-db.subs/current-epoch-app-db-after",718633528),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","selected-event-trace","day8.re-frame-10x.navigation.epochs.subs/selected-event-trace",-430284654)], null),(function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964)], null));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","current-epoch-app-db-before","day8.re-frame-10x.panels.app-db.subs/current-epoch-app-db-before",1079113245),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","selected-event-trace","day8.re-frame-10x.navigation.epochs.subs/selected-event-trace",-430284654)], null),(function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645)], null));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","paths","day8.re-frame-10x.panels.app-db.subs/paths",564942769),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952)], null),(function (p__30615,_){
var map__30616 = p__30615;
var map__30616__$1 = cljs.core.__destructure_map(map__30616);
var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30616__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));
return cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30601_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.val(p1__30601_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(p1__30601_SHARP_));
}),paths));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","path-data","day8.re-frame-10x.panels.app-db.subs/path-data",554728844),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","current-epoch-app-db-after","day8.re-frame-10x.panels.app-db.subs/current-epoch-app-db-after",718633528)], null),(function (p__30629,p__30630){
var vec__30637 = p__30629;
var map__30640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30637,(0),null);
var map__30640__$1 = cljs.core.__destructure_map(map__30640);
var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30640__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));
var db_after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30637,(1),null);
var vec__30641 = p__30630;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30641,(0),null);
var map__30644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30641,(1),null);
var map__30644__$1 = cljs.core.__destructure_map(map__30644);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30644__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return day8.re_frame_10x.tools.coll.get_in_with_lists_and_sets(db_after,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,id)));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","small-data?","day8.re-frame-10x.panels.app-db.subs/small-data?",1741117145),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__30656,_){
var vec__30657 = p__30656;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30657,(0),null);
var map__30660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30657,(1),null);
var map__30660__$1 = cljs.core.__destructure_map(map__30660);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30660__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","path-data","day8.re-frame-10x.panels.app-db.subs/path-data",554728844),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","expansion-limit","day8.re-frame-10x.panels.settings.subs/expansion-limit",740463148)], null))], null);
}),(function (p__30671,_){
var vec__30672 = p__30671;
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30672,(0),null);
var limit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30672,(1),null);
return day8.re_frame_10x.tools.coll.nodes_fewer_than_QMARK_(data,limit);
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","search-string","day8.re-frame-10x.panels.app-db.subs/search-string",-1224926557),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952)], null),(function (p__30675,_){
var map__30676 = p__30675;
var map__30676__$1 = cljs.core.__destructure_map(map__30676);
var search_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30676__$1,new cljs.core.Keyword(null,"search-string","search-string",68818394));
return search_string;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","expansions","day8.re-frame-10x.panels.app-db.subs/expansions",349759264),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952)], null),(function (p__30688,_){
var map__30689 = p__30688;
var map__30689__$1 = cljs.core.__destructure_map(map__30689);
var json_ml_expansions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30689__$1,new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261));
return json_ml_expansions;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","node-expanded?","day8.re-frame-10x.panels.app-db.subs/node-expanded?",1165164653),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","expansions","day8.re-frame-10x.panels.app-db.subs/expansions",349759264)], null),(function (expansions,p__30690){
var vec__30703 = p__30690;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30703,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30703,(1),null);
return cljs.core.contains_QMARK_(expansions,path);
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","reagent-id","day8.re-frame-10x.panels.app-db.subs/reagent-id",-1515896944),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952)], null),(function (p__30706,_){
var map__30707 = p__30706;
var map__30707__$1 = cljs.core.__destructure_map(map__30707);
var reagent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30707__$1,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415));
return reagent_id;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","data-path-annotations?","day8.re-frame-10x.panels.app-db.subs/data-path-annotations?",73119881),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952)], null),(function (p__30710,_){
var map__30724 = p__30710;
var map__30724__$1 = cljs.core.__destructure_map(map__30724);
var data_path_annotations_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30724__$1,new cljs.core.Keyword(null,"data-path-annotations?","data-path-annotations?",-381525058));
return data_path_annotations_QMARK_;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","expand-all?","day8.re-frame-10x.panels.app-db.subs/expand-all?",1843725491),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952)], null),(function (p__30727,p__30728){
var map__30729 = p__30727;
var map__30729__$1 = cljs.core.__destructure_map(map__30729);
var expand_all_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30729__$1,new cljs.core.Keyword(null,"expand-all?","expand-all?",2129393886));
var vec__30730 = p__30728;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30730,(0),null);
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30730,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(expand_all_QMARK_,path_id);
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","popup-menu","day8.re-frame-10x.panels.app-db.subs/popup-menu",-100095659),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"->","->",514830339),new cljs.core.Keyword(null,"popup-menu","popup-menu",355955876)], 0));

//# sourceMappingURL=day8.re_frame_10x.panels.app_db.subs.js.map
