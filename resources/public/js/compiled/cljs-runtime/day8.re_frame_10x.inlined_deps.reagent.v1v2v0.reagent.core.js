goog.provide('day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.is_client = day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util.is_client;
/**
 * Create a native React element, by calling React.createElement directly.
 * 
 *   That means the second argument must be a javascript object (or nil), and
 *   that any Reagent hiccup forms must be processed with as-element. For example
 *   like this:
 * 
 *   ```cljs
 *   (r/create-element "div" #js{:className "foo"}
 *  "Hi " (r/as-element [:strong "world!"])
 *   ```
 * 
 *   which is equivalent to
 * 
 *   ```cljs
 *   [:div.foo "Hi" [:strong "world!"]]
 *   ```
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_element = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$create_element(var_args){
var G__14405 = arguments.length;
switch (G__14405) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___14610 = arguments.length;
var i__5727__auto___14611 = (0);
while(true){
if((i__5727__auto___14611 < len__5726__auto___14610)){
args_arr__5751__auto__.push((arguments[i__5727__auto___14611]));

var G__14612 = (i__5727__auto___14611 + (1));
i__5727__auto___14611 = G__14612;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((3) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((3)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5752__auto__);

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (type){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$2(type,null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,props){
if((!(cljs.core.map_QMARK_(props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0))].join(''),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return module$node_modules$react$index.createElement(type,props);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,props,child){
if((!(cljs.core.map_QMARK_(props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0))].join(''),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return module$node_modules$react$index.createElement(type,props,child);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,child,children){
if((!(cljs.core.map_QMARK_(props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0))].join(''),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(module$node_modules$react$index.createElement,type,props,child,children);
}));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_element.cljs$lang$applyTo = (function (seq14401){
var G__14402 = cljs.core.first(seq14401);
var seq14401__$1 = cljs.core.next(seq14401);
var G__14403 = cljs.core.first(seq14401__$1);
var seq14401__$2 = cljs.core.next(seq14401__$1);
var G__14404 = cljs.core.first(seq14401__$2);
var seq14401__$3 = cljs.core.next(seq14401__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14402,G__14403,G__14404,seq14401__$3);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_element.cljs$lang$maxFixedArity = (3));

/**
 * Turns a vector of Hiccup syntax into a React element. Returns form
 *   unchanged if it is not a vector.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.as_element = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$as_element(var_args){
var G__14432 = arguments.length;
switch (G__14432) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.as_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.as_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.as_element.cljs$core$IFn$_invoke$arity$1 = (function (form){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.protocols.as_element(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.template._STAR_current_default_compiler_STAR_,form);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.as_element.cljs$core$IFn$_invoke$arity$2 = (function (form,compiler){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.protocols.as_element(compiler,form);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.as_element.cljs$lang$maxFixedArity = 2);

/**
 * Returns an adapter for a native React class, that may be used
 *   just like a Reagent component function or class in Hiccup forms.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.adapt_react_class = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$adapt_react_class(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error(["Assert failed: ",["Component"," must not be nil"].join(''),"\n","c"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.template.adapt_react_class(c);
});
/**
 * Returns an adapter for a Reagent component, that may be used from
 *   React, for example in JSX. A single argument, props, is passed to
 *   the component, converted to a map.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.reactify_component = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$reactify_component(var_args){
var G__14442 = arguments.length;
switch (G__14442) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$1 = (function (c){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$2(c,day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$2 = (function (c,compiler){
if(cljs.core.truth_(c)){
} else {
throw (new Error(["Assert failed: ",["Component"," must not be nil"].join(''),"\n","c"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.reactify_component(c,compiler);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.reactify_component.cljs$lang$maxFixedArity = 2);

/**
 * Creates JS class based on provided Clojure map, for example:
 * 
 *   ```cljs
 *   {;; Constructor
 * :constructor (fn [this props])
 * :get-initial-state (fn [this])
 * ;; Static methods
 * :get-derived-state-from-props (fn [props state] partial-state)
 * :get-derived-state-from-error (fn [error] partial-state)
 * ;; Methods
 * :get-snapshot-before-update (fn [this old-argv new-argv] snapshot)
 * :should-component-update (fn [this old-argv new-argv])
 * :component-did-mount (fn [this])
 * :component-did-update (fn [this old-argv old-state snapshot])
 * :component-will-unmount (fn [this])
 * :component-did-catch (fn [this error info])
 * :reagent-render (fn [args....])
 * ;; Or alternatively:
 * :render (fn [this])
 * ;; Deprecated methods:
 * :UNSAFE_component-will-receive-props (fn [this new-argv])
 * :UNSAFE_component-will-update (fn [this new-argv new-state])
 * :UNSAFE_component-will-mount (fn [this])}
 *   ```
 * 
 *   Everything is optional, except either :reagent-render or :render.
 * 
 *   Map keys should use `React.Component` method names (https://reactjs.org/docs/react-component.html),
 *   and can be provided in snake-case or camelCase.
 * 
 *   State can be initialized using constructor, which matches React.Component class,
 *   or using getInitialState which matches old React createClass function and is
 *   now implemented by Reagent for compatibility.
 * 
 *   State can usually be anything, e.g. Cljs object. But if using getDerivedState
 *   methods, the state has to be plain JS object as React implementation uses
 *   Object.assign to merge partial state into the current state.
 * 
 *   React built-in static methods or properties are automatically defined as statics.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_class = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$create_class(var_args){
var G__14450 = arguments.length;
switch (G__14450) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_class.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.create_class(spec,day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_class.cljs$core$IFn$_invoke$arity$2 = (function (spec,compiler){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.create_class(spec,compiler);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_class.cljs$lang$maxFixedArity = 2);

/**
 * Returns the current React component (a.k.a `this`) in a component
 *   function.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.current_component = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$current_component(){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component._STAR_current_component_STAR_;
});
/**
 * Returns an atom containing a components state.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.state_atom = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$state_atom(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.state_atom(this$);
});
/**
 * Returns the state of a component, as set with replace-state or set-state.
 *   Equivalent to `(deref (r/state-atom this))`
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.state = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$state(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.state_atom(this$));
});
/**
 * Set state of a component.
 *   Equivalent to `(reset! (state-atom this) new-state)`
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.replace_state = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$replace_state(this$,new_state){
if(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

if((((new_state == null)) || (cljs.core.map_QMARK_(new_state)))){
} else {
throw (new Error(["Assert failed: ",["Expected a valid new state, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_state], 0))].join(''),"\n","(clojure.core/or (clojure.core/nil? new-state) (clojure.core/map? new-state))"].join('')));
}

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.state_atom(this$),new_state);
});
/**
 * Merge component state with new-state.
 *   Equivalent to `(swap! (state-atom this) merge new-state)`
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.set_state = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$set_state(this$,new_state){
if(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

if((((new_state == null)) || (cljs.core.map_QMARK_(new_state)))){
} else {
throw (new Error(["Assert failed: ",["Expected a valid new state, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_state], 0))].join(''),"\n","(clojure.core/or (clojure.core/nil? new-state) (clojure.core/map? new-state))"].join('')));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.state_atom(this$),cljs.core.merge,new_state);
});
/**
 * Force a component to re-render immediately.
 * 
 *   If the second argument is true, child components will also be
 *   re-rendered, even is their arguments have not changed.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.force_update = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$force_update(var_args){
var G__14486 = arguments.length;
switch (G__14486) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$2(this$,false);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$2 = (function (this$,deep){
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.ratom.flush_BANG_();

day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util.force_update(this$,deep);

return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.batching.flush_after_render();
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.force_update.cljs$lang$maxFixedArity = 2);

/**
 * Returns the props passed to a component.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.props = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$props(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.get_props(this$);
});
/**
 * Returns the children passed to a component.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.children = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$children(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.get_children(this$);
});
/**
 * Returns the entire Hiccup form passed to the component.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.argv = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$argv(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.get_argv(this$);
});
/**
 * Function which normalizes and combines class values to a string
 * 
 *   Reagent allows classes to be defined as:
 *   - Strings
 *   - Named objects (Symbols or Keywords)
 *   - Collections of previous types
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.class_names = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$class_names(var_args){
var G__14502 = arguments.length;
switch (G__14502) {
case 0:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___14667 = arguments.length;
var i__5727__auto___14668 = (0);
while(true){
if((i__5727__auto___14668 < len__5726__auto___14667)){
args_arr__5751__auto__.push((arguments[i__5727__auto___14668]));

var G__14672 = (i__5727__auto___14668 + (1));
i__5727__auto___14668 = G__14672;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1(class$);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$2 = (function (class1,class2){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$2(class1,class2);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$variadic = (function (class1,class2,others){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util.class_names,class1,class2,others);
}));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.class_names.cljs$lang$applyTo = (function (seq14499){
var G__14500 = cljs.core.first(seq14499);
var seq14499__$1 = cljs.core.next(seq14499);
var G__14501 = cljs.core.first(seq14499__$1);
var seq14499__$2 = cljs.core.next(seq14499__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14500,G__14501,seq14499__$2);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.class_names.cljs$lang$maxFixedArity = (2));

/**
 * Utility function that merges some maps, handling `:class` and `:style`.
 * 
 *   The :class value is always normalized (using `class-names`) even if no
 *   merging is done.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.merge_props = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$merge_props(var_args){
var G__14519 = arguments.length;
switch (G__14519) {
case 0:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___14677 = arguments.length;
var i__5727__auto___14678 = (0);
while(true){
if((i__5727__auto___14678 < len__5726__auto___14677)){
args_arr__5751__auto__.push((arguments[i__5727__auto___14678]));

var G__14679 = (i__5727__auto___14678 + (1));
i__5727__auto___14678 = G__14679;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$0 = (function (){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$0();
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$1 = (function (defaults){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$1(defaults);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2 = (function (defaults,props){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$2(defaults,props);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$variadic = (function (defaults,props,others){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util.merge_props,defaults,props,others);
}));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.merge_props.cljs$lang$applyTo = (function (seq14516){
var G__14517 = cljs.core.first(seq14516);
var seq14516__$1 = cljs.core.next(seq14516);
var G__14518 = cljs.core.first(seq14516__$1);
var seq14516__$2 = cljs.core.next(seq14516__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14517,G__14518,seq14516__$2);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.merge_props.cljs$lang$maxFixedArity = (2));

/**
 * Render dirty components immediately.
 * 
 *   Note that this may not work in event handlers, since React.js does
 *   batching of updates there.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.flush = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$flush(){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.batching.flush();
});
/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 *   Reagent components that derefs one of these are automatically
 *   re-rendered.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.atom = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$atom(var_args){
var G__14536 = arguments.length;
switch (G__14536) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___14681 = arguments.length;
var i__5727__auto___14682 = (0);
while(true){
if((i__5727__auto___14682 < len__5726__auto___14681)){
args_arr__5751__auto__.push((arguments[i__5727__auto___14682]));

var G__14683 = (i__5727__auto___14682 + (1));
i__5727__auto___14682 = G__14683;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((1) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5752__auto__);

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(x);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.ratom.atom,x,rest);
}));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.atom.cljs$lang$applyTo = (function (seq14534){
var G__14535 = cljs.core.first(seq14534);
var seq14534__$1 = cljs.core.next(seq14534);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14535,seq14534__$1);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.atom.cljs$lang$maxFixedArity = (1));

/**
 * Takes a function and optional arguments, and returns a derefable
 *   containing the output of that function. If the function derefs
 *   Reagent atoms (or track, etc), the value will be updated whenever
 *   the atom changes.
 * 
 *   In other words, `@(track foo bar)` will produce the same result
 *   as `(foo bar)`, but foo will only be called again when the atoms it
 *   depends on changes, and will only trigger updates of components when
 *   its result changes.
 * 
 *   track is lazy, i.e the function is only evaluated on deref.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.track = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$track(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14684 = arguments.length;
var i__5727__auto___14685 = (0);
while(true){
if((i__5727__auto___14685 < len__5726__auto___14684)){
args__5732__auto__.push((arguments[i__5727__auto___14685]));

var G__14686 = (i__5727__auto___14685 + (1));
i__5727__auto___14685 = G__14686;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.ratom.make_track(f,args);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.track.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.track.cljs$lang$applyTo = (function (seq14540){
var G__14541 = cljs.core.first(seq14540);
var seq14540__$1 = cljs.core.next(seq14540);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14541,seq14540__$1);
}));

/**
 * An eager version of track. The function passed is called
 *   immediately, and continues to be called when needed, until stopped
 *   with dispose!.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.track_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$track_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14688 = arguments.length;
var i__5727__auto___14689 = (0);
while(true){
if((i__5727__auto___14689 < len__5726__auto___14688)){
args__5732__auto__.push((arguments[i__5727__auto___14689]));

var G__14690 = (i__5727__auto___14689 + (1));
i__5727__auto___14689 = G__14690;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.ratom.make_track_BANG_(f,args);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.track_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.track_BANG_.cljs$lang$applyTo = (function (seq14546){
var G__14547 = cljs.core.first(seq14546);
var seq14546__$1 = cljs.core.next(seq14546);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14547,seq14546__$1);
}));

/**
 * Stop the result of track! from updating.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.dispose_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$dispose_BANG_(x){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.ratom.dispose_BANG_(x);
});
/**
 * Provide a combination of value and callback, that looks like an atom.
 * 
 *   The first argument can be any value, that will be returned when the
 *   result is deref'ed.
 * 
 *   The second argument should be a function, that is called with the
 *   optional extra arguments provided to wrap, and the new value of the
 *   resulting 'atom'.
 * 
 *   Use for example like this:
 * 
 *   ```cljs
 *   (wrap (:foo @state)
 *      swap! state assoc :foo)
 *   ```
 * 
 *   Probably useful only for passing to child components.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.wrap = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$wrap(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14697 = arguments.length;
var i__5727__auto___14698 = (0);
while(true){
if((i__5727__auto___14698 < len__5726__auto___14697)){
args__5732__auto__.push((arguments[i__5727__auto___14698]));

var G__14699 = (i__5727__auto___14698 + (1));
i__5727__auto___14698 = G__14699;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic = (function (value,reset_fn,args){
if(cljs.core.ifn_QMARK_(reset_fn)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reset_fn], 0))].join(''),"\n","(clojure.core/ifn? reset-fn)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.ratom.make_wrapper(value,reset_fn,args);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.wrap.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.wrap.cljs$lang$applyTo = (function (seq14553){
var G__14554 = cljs.core.first(seq14553);
var seq14553__$1 = cljs.core.next(seq14553);
var G__14555 = cljs.core.first(seq14553__$1);
var seq14553__$2 = cljs.core.next(seq14553__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14554,G__14555,seq14553__$2);
}));

/**
 * Provide a cursor into a Reagent atom.
 * 
 *   Behaves like a Reagent atom but focuses updates and derefs to
 *   the specified path within the wrapped Reagent atom. e.g.,
 * 
 *   ```cljs
 *   (let [c (cursor ra [:nested :content])]
 *  ... @c ;; equivalent to (get-in @ra [:nested :content])
 *  ... (reset! c 42) ;; equivalent to (swap! ra assoc-in [:nested :content] 42)
 *  ... (swap! c inc) ;; equivalence to (swap! ra update-in [:nested :content] inc)
 *  )
 *   ```
 * 
 *   The first parameter can also be a function, that should look
 *   something like this:
 * 
 *   ```cljs
 *   (defn set-get
 *  ([k] (get-in @state k))
 *  ([k v] (swap! state assoc-in k v)))
 *   ```
 * 
 *   The function will be called with one argument – the path passed to
 *   cursor – when the cursor is deref'ed, and two arguments (path and
 *   new value) when the cursor is modified.
 * 
 *   Given that set-get function, (and that state is a Reagent atom, or
 *   another cursor) these cursors are equivalent:
 *   `(cursor state [:foo])` and `(cursor set-get [:foo])`.
 * 
 *   Note that a cursor is lazy: its value will not change until it is
 *   used. This may be noticed with add-watch.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.cursor = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$cursor(src,path){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.ratom.cursor(src,path);
});
/**
 * Swaps the value of a to be `(apply f current-value-of-atom args)`.
 * 
 *   rswap! works like swap!, except that recursive calls to rswap! on
 *   the same atom are allowed – and it always returns nil.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.rswap_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$rswap_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14701 = arguments.length;
var i__5727__auto___14702 = (0);
while(true){
if((i__5727__auto___14702 < len__5726__auto___14701)){
args__5732__auto__.push((arguments[i__5727__auto___14702]));

var G__14703 = (i__5727__auto___14702 + (1));
i__5727__auto___14702 = G__14703;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
if((((!((a == null))))?(((((a.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IAtom$))))?true:(((!a.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,a):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,a))){
} else {
throw (new Error("Assert failed: (satisfies? IAtom a)"));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(cljs.core.truth_(a.rswapping)){
(function (){var or__5002__auto__ = a.rswapfs;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (a.rswapfs = []);
}
})().push((function (p1__14564_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__14564_SHARP_,args);
}));
} else {
(a.rswapping = true);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (state){
var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,state,args);
while(true){
var temp__5806__auto__ = (function (){var G__14584 = a;
var G__14584__$1 = (((G__14584 == null))?null:G__14584.rswapfs);
if((G__14584__$1 == null)){
return null;
} else {
return G__14584__$1.shift();
}
})();
if((temp__5806__auto__ == null)){
return s;
} else {
var sf = temp__5806__auto__;
var G__14713 = (sf.cljs$core$IFn$_invoke$arity$1 ? sf.cljs$core$IFn$_invoke$arity$1(s) : sf.call(null, s));
s = G__14713;
continue;
}
break;
}
}));
}finally {(a.rswapping = false);
}}

return null;
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.rswap_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.rswap_BANG_.cljs$lang$applyTo = (function (seq14565){
var G__14566 = cljs.core.first(seq14565);
var seq14565__$1 = cljs.core.next(seq14565);
var G__14567 = cljs.core.first(seq14565__$1);
var seq14565__$2 = cljs.core.next(seq14565__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14566,G__14567,seq14565__$2);
}));

/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just before components are rendered.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.next_tick = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$next_tick(f){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.batching.do_before_flush(f);
});
/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just after any queued renders in the next animation
 *   frame (and even if no renders actually occur).
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.after_render = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$after_render(f){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.batching.do_after_render(f);
});
/**
 * Works just like clojure.core/partial, but the result can be compared with =
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.partial = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$partial(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14714 = arguments.length;
var i__5727__auto___14715 = (0);
while(true){
if((i__5727__auto___14715 < len__5726__auto___14714)){
args__5732__auto__.push((arguments[i__5727__auto___14715]));

var G__14716 = (i__5727__auto___14715 + (1));
i__5727__auto___14715 = G__14716;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util.make_partial_fn(f,args);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.partial.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.partial.cljs$lang$applyTo = (function (seq14585){
var G__14586 = cljs.core.first(seq14585);
var seq14585__$1 = cljs.core.next(seq14585);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14586,seq14585__$1);
}));

/**
 * Creates Compiler object with given `opts`,
 *   this can be passed to `render`, `as-element` and other functions to control
 *   how they turn the Reagent-style Hiccup into React components and elements.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_compiler = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$create_compiler(opts){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.template.create_compiler(opts);
});
/**
 * Globally sets the Compiler object used by `render`, `as-element` and other
 *   calls by default, when no `compiler` parameter is provided.
 * 
 *   Use `nil` value to restore the original default compiler.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.set_default_compiler_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$set_default_compiler_BANG_(compiler){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.template.set_default_compiler_BANG_((((compiler == null))?day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.template.class_compiler:compiler));
});
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.render = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$render(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14717 = arguments.length;
var i__5727__auto___14718 = (0);
while(true){
if((i__5727__auto___14718 < len__5726__auto___14717)){
args__5732__auto__.push((arguments[i__5727__auto___14718]));

var G__14719 = (i__5727__auto___14718 + (1));
i__5727__auto___14718 = G__14719;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.render.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.render.cljs$core$IFn$_invoke$arity$variadic = (function (_){
throw (new Error("Reagent.core/render function was moved to day8.re-frame-10x.inlined-deps.reagent.v1v2v0.reagent.dom namespace in Reagent v1.0."));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.render.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.render.cljs$lang$applyTo = (function (seq14598){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14598));
}));


//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.js.map
