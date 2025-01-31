goog.provide('day8.re_frame_10x.preload.react_17');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var react_major_version_45537 = cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(module$node_modules$react$index.version,/\./));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("17",react_major_version_45537)){
} else {
console.warn("Re-frame-10x expects React 17, but React",react_major_version_45537,"is loaded. This causes deprecation warnings.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("18",react_major_version_45537))?"To fix this, try declaring `day8.re-frame-10x.preload.react-18` in your shadow-cljs.edn (instead of `day8.re-frame-10x.preload`). See https://github.com/day8/re-frame-10x/#compatibility-matrix":null));
}
day8.re_frame_10x.patch_BANG_();
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.events","init","day8.re-frame-10x.events/init",146637392),day8.re_frame_10x.project_config], null));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.clear_subscription_cache_BANG_();
day8.re_frame_10x.preload.react_17.shadow_root = day8.re_frame_10x.create_shadow_root();
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.create_style_container(day8.re_frame_10x.preload.react_17.shadow_root),day8.re_frame_10x.preload.react_17.shadow_root);

//# sourceMappingURL=day8.re_frame_10x.preload.react_17.js.map
