goog.provide('promesa.core$macros');
/**
 * Return a resolved promise with provided value.
 */
promesa.core$macros.resolved = (function promesa$core$macros$resolved(v){
return promesa.impl.resolved(v);
});
/**
 * Return a rejected promise with provided reason.
 */
promesa.core$macros.rejected = (function promesa$core$macros$rejected(v){
return promesa.impl.rejected(v);
});
/**
 * Creates an empty promise instance.
 */
promesa.core$macros.deferred = (function promesa$core$macros$deferred(){
return promesa.impl.deferred();
});
/**
 * The coerce based promise constructor. Creates a appropriate promise
 *   instance depending on the provided value.
 * 
 *   If an executor is provided, it will be used to resolve this
 *   promise.
 */
promesa.core$macros.promise = (function promesa$core$macros$promise(var_args){
var G__14858 = arguments.length;
switch (G__14858) {
case 1:
return promesa.core$macros.promise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core$macros.promise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core$macros.promise.cljs$core$IFn$_invoke$arity$1 = (function (v){
return promesa.protocols._promise(v);
}));

(promesa.core$macros.promise.cljs$core$IFn$_invoke$arity$2 = (function (v,executor){
return promesa.protocols._map(v,cljs.core.identity,executor);
}));

(promesa.core$macros.promise.cljs$lang$maxFixedArity = 2);

/**
 * Create a promise instance from a factory function. If an executor is
 *   provided, the factory will be executed in the provided executor.
 * 
 *   A factory function looks like `(fn [resolve reject] (resolve 1))`.
 */
promesa.core$macros.create = (function promesa$core$macros$create(var_args){
var G__14868 = arguments.length;
switch (G__14868) {
case 1:
return promesa.core$macros.create.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core$macros.create.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core$macros.create.cljs$core$IFn$_invoke$arity$1 = (function (f){
var d = promesa.impl.deferred();
try{var G__14870_15230 = (function (p1__14861_SHARP_){
return promesa.protocols._resolve_BANG_(d,p1__14861_SHARP_);
});
var G__14871_15231 = (function (p1__14862_SHARP_){
return promesa.protocols._reject_BANG_(d,p1__14862_SHARP_);
});
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14870_15230,G__14871_15231) : f.call(null,G__14870_15230,G__14871_15231));
}catch (e14869){var e_15232 = e14869;
promesa.protocols._reject_BANG_(d,e_15232);
}
return d;
}));

(promesa.core$macros.create.cljs$core$IFn$_invoke$arity$2 = (function (f,executor){
var d = promesa.impl.deferred();
promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2(executor,(function (){
try{var G__14914 = (function (p1__14864_SHARP_){
return promesa.protocols._resolve_BANG_(d,p1__14864_SHARP_);
});
var G__14915 = (function (p1__14865_SHARP_){
return promesa.protocols._reject_BANG_(d,p1__14865_SHARP_);
});
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14914,G__14915) : f.call(null,G__14914,G__14915));
}catch (e14913){var e = e14913;
return promesa.protocols._reject_BANG_(d,e);
}}));

return d;
}));

(promesa.core$macros.create.cljs$lang$maxFixedArity = 2);

/**
 * Return true if `v` is a promise instance.
 */
promesa.core$macros.promise_QMARK_ = (function promesa$core$macros$promise_QMARK_(v){
return (v instanceof promesa.impl._STAR_default_promise_STAR_);
});
/**
 * Return true if `v` is a promise instance (alias to `promise?`.
 */
promesa.core$macros.deferred_QMARK_ = (function promesa$core$macros$deferred_QMARK_(v){
return (v instanceof promesa.impl._STAR_default_promise_STAR_);
});
/**
 * Returns true if `v` is a promise like object.
 */
promesa.core$macros.thenable_QMARK_ = (function promesa$core$macros$thenable_QMARK_(v){
return ((cljs.core.object_QMARK_(v)) && (cljs.core.fn_QMARK_((v["then"]))));
});
/**
 * Returns true if promise `p` is already fulfilled.
 */
promesa.core$macros.resolved_QMARK_ = (function promesa$core$macros$resolved_QMARK_(p){
return promesa.protocols._resolved_QMARK_(p);
});
/**
 * Returns true if promise `p` is already rejected.
 */
promesa.core$macros.rejected_QMARK_ = (function promesa$core$macros$rejected_QMARK_(p){
return promesa.protocols._rejected_QMARK_(p);
});
/**
 * Returns true if promise `p` is stil pending.
 */
promesa.core$macros.pending_QMARK_ = (function promesa$core$macros$pending_QMARK_(p){
return promesa.protocols._pending_QMARK_(p);
});
/**
 * Returns the current promise value.
 */
promesa.core$macros.extract = (function promesa$core$macros$extract(p){
return promesa.protocols._extract(p);
});
/**
 * Returns true if promise `p` is already done.
 */
promesa.core$macros.done_QMARK_ = cljs.core.complement(promesa.core$macros.pending_QMARK_);
promesa.core$macros.wrap = (function promesa$core$macros$wrap(v){
if(promesa.core$macros.promise_QMARK_(v)){
return v;
} else {
return promesa.protocols._promise(v);
}
});
/**
 * Chains a computation `f` (function) to be executed when the promise
 *   `p` is successfully resolved.
 * 
 *   The computation will be executed in the calling thread by default;
 *   you also can provide a custom executor.
 * 
 *   If the function `f` returns a promise instance, it will be
 *   automatically unwrapped.
 */
promesa.core$macros.then = (function promesa$core$macros$then(var_args){
var G__14933 = arguments.length;
switch (G__14933) {
case 2:
return promesa.core$macros.then.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core$macros.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core$macros.then.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._then(p,f);
}));

(promesa.core$macros.then.cljs$core$IFn$_invoke$arity$3 = (function (p,f,executor){
return promesa.protocols._then(p,f,executor);
}));

(promesa.core$macros.then.cljs$lang$maxFixedArity = 3);

/**
 * A convenient alias for `then`.
 */
promesa.core$macros.bind = (function promesa$core$macros$bind(var_args){
var G__14940 = arguments.length;
switch (G__14940) {
case 2:
return promesa.core$macros.bind.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core$macros.bind.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core$macros.bind.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._then(p,f);
}));

(promesa.core$macros.bind.cljs$core$IFn$_invoke$arity$3 = (function (p,f,executor){
return promesa.protocols._then(p,f,executor);
}));

(promesa.core$macros.bind.cljs$lang$maxFixedArity = 3);

/**
 * Chains a computation `f` (function) to be executed when the promise
 *   `p` is successfully resolved.
 * 
 *   The computation will be executed in the calling thread by default;
 *   you also can provide a custom executor.
 * 
 *   Don't perform flatten on the result.
 */
promesa.core$macros.then_SINGLEQUOTE_ = (function promesa$core$macros$then_SINGLEQUOTE_(var_args){
var G__14943 = arguments.length;
switch (G__14943) {
case 2:
return promesa.core$macros.then_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core$macros.then_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core$macros.then_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._map(p,f);
}));

(promesa.core$macros.then_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$3 = (function (p,f,executor){
return promesa.protocols._map(p,f,executor);
}));

(promesa.core$macros.then_SINGLEQUOTE_.cljs$lang$maxFixedArity = 3);

/**
 * Chains a computation `f` (function) to be executed when the promise
 *   `p` is successfully resolved.
 * 
 *   Unlike `then` this does not performs automatic promise flattening.
 *   This is designed to be used with `->>`.
 */
promesa.core$macros.map = (function promesa$core$macros$map(var_args){
var G__14950 = arguments.length;
switch (G__14950) {
case 2:
return promesa.core$macros.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core$macros.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core$macros.map.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.protocols._map(p,f);
}));

(promesa.core$macros.map.cljs$core$IFn$_invoke$arity$3 = (function (executor,f,p){
return promesa.protocols._map(p,f,executor);
}));

(promesa.core$macros.map.cljs$lang$maxFixedArity = 3);

/**
 * Chains a computation `f` (function) to be executed when the promise
 *   `p` is successfully resolved. always expecting that `f` returns a
 *   promise that will be automatically unwrapped.
 * 
 *   This is just a stricter version of `then` with reversed arguments in
 *   the same way as `map`.
 * 
 *   This is designed to be used with `->>`.
 */
promesa.core$macros.mapcat = (function promesa$core$macros$mapcat(var_args){
var G__14954 = arguments.length;
switch (G__14954) {
case 2:
return promesa.core$macros.mapcat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core$macros.mapcat.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core$macros.mapcat.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.protocols._bind(p,f);
}));

(promesa.core$macros.mapcat.cljs$core$IFn$_invoke$arity$3 = (function (executor,f,p){
return promesa.protocols._bind(p,f,executor);
}));

(promesa.core$macros.mapcat.cljs$lang$maxFixedArity = 3);

/**
 * Chain variable number of computations to be executed
 *   serially. Analogous to `then` that accepts variable number of
 *   functions.
 */
promesa.core$macros.chain = (function promesa$core$macros$chain(var_args){
var G__14965 = arguments.length;
switch (G__14965) {
case 2:
return promesa.core$macros.chain.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___15239 = arguments.length;
var i__5770__auto___15240 = (0);
while(true){
if((i__5770__auto___15240 < len__5769__auto___15239)){
args_arr__5794__auto__.push((arguments[i__5770__auto___15240]));

var G__15241 = (i__5770__auto___15240 + (1));
i__5770__auto___15240 = G__15241;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return promesa.core$macros.chain.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(promesa.core$macros.chain.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.core$macros.then.cljs$core$IFn$_invoke$arity$2(p,f);
}));

(promesa.core$macros.chain.cljs$core$IFn$_invoke$arity$variadic = (function (p,f,fs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__14958_SHARP_,p2__14959_SHARP_){
return promesa.core$macros.then.cljs$core$IFn$_invoke$arity$2(p1__14958_SHARP_,p2__14959_SHARP_);
}),p,cljs.core.cons(f,fs));
}));

/** @this {Function} */
(promesa.core$macros.chain.cljs$lang$applyTo = (function (seq14961){
var G__14962 = cljs.core.first(seq14961);
var seq14961__$1 = cljs.core.next(seq14961);
var G__14963 = cljs.core.first(seq14961__$1);
var seq14961__$2 = cljs.core.next(seq14961__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14962,G__14963,seq14961__$2);
}));

(promesa.core$macros.chain.cljs$lang$maxFixedArity = (2));

/**
 * Chain variable number of computations to be executed serially. Unlike
 *   `chain` does not flattens the return value of each step (probably
 *   this is more performant than `chain`).
 */
promesa.core$macros.chain_SINGLEQUOTE_ = (function promesa$core$macros$chain_SINGLEQUOTE_(var_args){
var G__14978 = arguments.length;
switch (G__14978) {
case 2:
return promesa.core$macros.chain_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___15243 = arguments.length;
var i__5770__auto___15245 = (0);
while(true){
if((i__5770__auto___15245 < len__5769__auto___15243)){
args_arr__5794__auto__.push((arguments[i__5770__auto___15245]));

var G__15246 = (i__5770__auto___15245 + (1));
i__5770__auto___15245 = G__15246;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return promesa.core$macros.chain_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(promesa.core$macros.chain_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.core$macros.then_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(p,f);
}));

(promesa.core$macros.chain_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic = (function (p,f,fs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(promesa.protocols._map,p,cljs.core.cons(f,fs));
}));

/** @this {Function} */
(promesa.core$macros.chain_SINGLEQUOTE_.cljs$lang$applyTo = (function (seq14975){
var G__14976 = cljs.core.first(seq14975);
var seq14975__$1 = cljs.core.next(seq14975);
var G__14977 = cljs.core.first(seq14975__$1);
var seq14975__$2 = cljs.core.next(seq14975__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14976,G__14977,seq14975__$2);
}));

(promesa.core$macros.chain_SINGLEQUOTE_.cljs$lang$maxFixedArity = (2));

/**
 * Executes `f` when the promise `p` is resolved or is rejected. Returns
 *   a promise resolved with the return value of `f` function.
 */
promesa.core$macros.handle = (function promesa$core$macros$handle(var_args){
var G__14980 = arguments.length;
switch (G__14980) {
case 2:
return promesa.core$macros.handle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core$macros.handle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core$macros.handle.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._handle(p,f);
}));

(promesa.core$macros.handle.cljs$core$IFn$_invoke$arity$3 = (function (p,f,executor){
return promesa.protocols._handle(p,f,executor);
}));

(promesa.core$macros.handle.cljs$lang$maxFixedArity = 3);

/**
 * Attach a potentially side-effectful handler to promise that will be
 *   executed independently if promise is resolved or rejected.
 * 
 *   Returns the original promise and the return value of `f` function is
 *   ignored.
 */
promesa.core$macros.finally$ = (function promesa$core$macros$finally(var_args){
var G__14985 = arguments.length;
switch (G__14985) {
case 2:
return promesa.core$macros.finally$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core$macros.finally$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core$macros.finally$.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._finally(p,f);
}));

(promesa.core$macros.finally$.cljs$core$IFn$_invoke$arity$3 = (function (p,f,executor){
return promesa.protocols._finally(p,f,executor);
}));

(promesa.core$macros.finally$.cljs$lang$maxFixedArity = 3);

/**
 * Executes `f` when the promise `p` is rejected. Returns a promise
 *   resolved with the return value of `f` function handler.
 */
promesa.core$macros.catch$ = (function promesa$core$macros$catch(var_args){
var G__14997 = arguments.length;
switch (G__14997) {
case 2:
return promesa.core$macros.catch$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core$macros.catch$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core$macros.catch$.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._thenErr(p,f);
}));

(promesa.core$macros.catch$.cljs$core$IFn$_invoke$arity$3 = (function (p,pred_or_type,f){
var accept_QMARK_ = ((cljs.core.ifn_QMARK_(pred_or_type))?pred_or_type:(function (p1__14994_SHARP_){
return (p1__14994_SHARP_ instanceof pred_or_type);
}));
return promesa.protocols._thenErr(p,(function (e){
if(cljs.core.truth_((accept_QMARK_.cljs$core$IFn$_invoke$arity$1 ? accept_QMARK_.cljs$core$IFn$_invoke$arity$1(e) : accept_QMARK_.call(null,e)))){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));
} else {
return promesa.impl.rejected(e);
}
}));
}));

(promesa.core$macros.catch$.cljs$lang$maxFixedArity = 3);

/**
 * Executes `f` when the promise `p` is rejected. Returns a promise
 *   resolved with the return value of `f` function handler.
 */
promesa.core$macros.catch_SINGLEQUOTE_ = (function promesa$core$macros$catch_SINGLEQUOTE_(var_args){
var G__15001 = arguments.length;
switch (G__15001) {
case 2:
return promesa.core$macros.catch_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core$macros.catch_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core$macros.catch_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._mapErr(p,f);
}));

(promesa.core$macros.catch_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$3 = (function (p,pred_or_type,f){
var accept_QMARK_ = ((cljs.core.ifn_QMARK_(pred_or_type))?pred_or_type:(function (p1__14999_SHARP_){
return (p1__14999_SHARP_ instanceof pred_or_type);
}));
return promesa.protocols._mapErr(p,(function (e){
if(cljs.core.truth_((accept_QMARK_.cljs$core$IFn$_invoke$arity$1 ? accept_QMARK_.cljs$core$IFn$_invoke$arity$1(e) : accept_QMARK_.call(null,e)))){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));
} else {
throw e;
}
}));
}));

(promesa.core$macros.catch_SINGLEQUOTE_.cljs$lang$maxFixedArity = 3);

/**
 * Same as `catch` but with parameters inverted.
 */
promesa.core$macros.error = (function promesa$core$macros$error(var_args){
var G__15005 = arguments.length;
switch (G__15005) {
case 2:
return promesa.core$macros.error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core$macros.error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core$macros.error.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.core$macros.catch$.cljs$core$IFn$_invoke$arity$2(p,f);
}));

(promesa.core$macros.error.cljs$core$IFn$_invoke$arity$3 = (function (f,type,p){
return promesa.core$macros.catch$.cljs$core$IFn$_invoke$arity$3(p,type,f);
}));

(promesa.core$macros.error.cljs$lang$maxFixedArity = 3);

/**
 * A short alias for `error` function.
 */
promesa.core$macros.err = promesa.core$macros.error;
/**
 * Given an array of promises, return a promise
 *   that is fulfilled  when all the items in the
 *   array are fulfilled.
 * 
 *   Example:
 * 
 *   (-> (all [(promise :first-promise)
 *          (promise :second-promise)]
 *    (then (fn [[first-result second-result]]))
 *     (println (str first-result ", " second-result)
 * 
 *   Will print out
 *   :first-promise, :second-promise.
 * 
 *   If at least one of the promises is rejected, the resulting promise will be
 *   rejected.
 */
promesa.core$macros.all = (function promesa$core$macros$all(promises){
return promesa.core$macros.then_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(promesa.impl._STAR_default_promise_STAR_.all(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(promises)),cljs.core.vec);
});
promesa.core$macros.race = (function promesa$core$macros$race(promises){
return promesa.impl._STAR_default_promise_STAR_.race(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(promesa.protocols._promise,promises)));
});
/**
 * Given an array of promises, return a promise that is fulfilled when
 *   first one item in the array is fulfilled.
 */
promesa.core$macros.any = (function promesa$core$macros$any(var_args){
var G__15010 = arguments.length;
switch (G__15010) {
case 1:
return promesa.core$macros.any.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core$macros.any.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core$macros.any.cljs$core$IFn$_invoke$arity$1 = (function (promises){
return promesa.core$macros.any.cljs$core$IFn$_invoke$arity$2(promises,new cljs.core.Keyword("promesa.core","default","promesa.core/default",1773193826));
}));

(promesa.core$macros.any.cljs$core$IFn$_invoke$arity$2 = (function (promises,default$){
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"resolved","resolved",968763567),false,new cljs.core.Keyword(null,"counter","counter",804008177),cljs.core.count(promises),new cljs.core.Keyword(null,"rejections","rejections",-1620899911),cljs.core.PersistentVector.EMPTY], null));
return promesa.core$macros.create.cljs$core$IFn$_invoke$arity$1((function (resolve,reject){
var seq__15015 = cljs.core.seq(promises);
var chunk__15016 = null;
var count__15017 = (0);
var i__15018 = (0);
while(true){
if((i__15018 < count__15017)){
var p = chunk__15016.cljs$core$IIndexed$_nth$arity$2(null,i__15018);
promesa.core$macros.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core$macros.then.cljs$core$IFn$_invoke$arity$2(promesa.core$macros.promise.cljs$core$IFn$_invoke$arity$1(p),((function (seq__15015,chunk__15016,count__15017,i__15018,p,state){
return (function (v){
if(cljs.core.truth_(new cljs.core.Keyword(null,"resolved","resolved",968763567).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (seq__15015,chunk__15016,count__15017,i__15018,p,state){
return (function (state__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"resolved","resolved",968763567),true),new cljs.core.Keyword(null,"counter","counter",804008177),cljs.core.dec);
});})(seq__15015,chunk__15016,count__15017,i__15018,p,state))
);

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(v) : resolve.call(null,v));
}
});})(seq__15015,chunk__15016,count__15017,i__15018,p,state))
),((function (seq__15015,chunk__15016,count__15017,i__15018,p,state){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (seq__15015,chunk__15016,count__15017,i__15018,p,state){
return (function (state__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"counter","counter",804008177),cljs.core.dec),new cljs.core.Keyword(null,"rejections","rejections",-1620899911),cljs.core.conj,e);
});})(seq__15015,chunk__15016,count__15017,i__15018,p,state))
);

var map__15042 = cljs.core.deref(state);
var map__15042__$1 = cljs.core.__destructure_map(map__15042);
var resolved = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15042__$1,new cljs.core.Keyword(null,"resolved","resolved",968763567));
var counter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15042__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
var rejections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15042__$1,new cljs.core.Keyword(null,"rejections","rejections",-1620899911));
if(((cljs.core.not(resolved)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(counter,(0))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("promesa.core","default","promesa.core/default",1773193826))){
var G__15043 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No promises resolved",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rejections","rejections",-1620899911),rejections], null));
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__15043) : reject.call(null,G__15043));
} else {
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(default$) : resolve.call(null,default$));
}
} else {
return null;
}
});})(seq__15015,chunk__15016,count__15017,i__15018,p,state))
);


var G__15267 = seq__15015;
var G__15268 = chunk__15016;
var G__15269 = count__15017;
var G__15270 = (i__15018 + (1));
seq__15015 = G__15267;
chunk__15016 = G__15268;
count__15017 = G__15269;
i__15018 = G__15270;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15015);
if(temp__5804__auto__){
var seq__15015__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15015__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__15015__$1);
var G__15272 = cljs.core.chunk_rest(seq__15015__$1);
var G__15273 = c__5568__auto__;
var G__15274 = cljs.core.count(c__5568__auto__);
var G__15275 = (0);
seq__15015 = G__15272;
chunk__15016 = G__15273;
count__15017 = G__15274;
i__15018 = G__15275;
continue;
} else {
var p = cljs.core.first(seq__15015__$1);
promesa.core$macros.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core$macros.then.cljs$core$IFn$_invoke$arity$2(promesa.core$macros.promise.cljs$core$IFn$_invoke$arity$1(p),((function (seq__15015,chunk__15016,count__15017,i__15018,p,seq__15015__$1,temp__5804__auto__,state){
return (function (v){
if(cljs.core.truth_(new cljs.core.Keyword(null,"resolved","resolved",968763567).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (seq__15015,chunk__15016,count__15017,i__15018,p,seq__15015__$1,temp__5804__auto__,state){
return (function (state__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"resolved","resolved",968763567),true),new cljs.core.Keyword(null,"counter","counter",804008177),cljs.core.dec);
});})(seq__15015,chunk__15016,count__15017,i__15018,p,seq__15015__$1,temp__5804__auto__,state))
);

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(v) : resolve.call(null,v));
}
});})(seq__15015,chunk__15016,count__15017,i__15018,p,seq__15015__$1,temp__5804__auto__,state))
),((function (seq__15015,chunk__15016,count__15017,i__15018,p,seq__15015__$1,temp__5804__auto__,state){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (seq__15015,chunk__15016,count__15017,i__15018,p,seq__15015__$1,temp__5804__auto__,state){
return (function (state__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"counter","counter",804008177),cljs.core.dec),new cljs.core.Keyword(null,"rejections","rejections",-1620899911),cljs.core.conj,e);
});})(seq__15015,chunk__15016,count__15017,i__15018,p,seq__15015__$1,temp__5804__auto__,state))
);

var map__15047 = cljs.core.deref(state);
var map__15047__$1 = cljs.core.__destructure_map(map__15047);
var resolved = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15047__$1,new cljs.core.Keyword(null,"resolved","resolved",968763567));
var counter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15047__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
var rejections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15047__$1,new cljs.core.Keyword(null,"rejections","rejections",-1620899911));
if(((cljs.core.not(resolved)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(counter,(0))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("promesa.core","default","promesa.core/default",1773193826))){
var G__15050 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No promises resolved",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rejections","rejections",-1620899911),rejections], null));
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__15050) : reject.call(null,G__15050));
} else {
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(default$) : resolve.call(null,default$));
}
} else {
return null;
}
});})(seq__15015,chunk__15016,count__15017,i__15018,p,seq__15015__$1,temp__5804__auto__,state))
);


var G__15277 = cljs.core.next(seq__15015__$1);
var G__15278 = null;
var G__15279 = (0);
var G__15280 = (0);
seq__15015 = G__15277;
chunk__15016 = G__15278;
count__15017 = G__15279;
i__15018 = G__15280;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));

(promesa.core$macros.any.cljs$lang$maxFixedArity = 2);

/**
 * A promise aware run! function.
 */
promesa.core$macros.run_BANG_ = (function promesa$core$macros$run_BANG_(var_args){
var G__15061 = arguments.length;
switch (G__15061) {
case 2:
return promesa.core$macros.run_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core$macros.run_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core$macros.run_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return promesa.core$macros.run_BANG_.cljs$core$IFn$_invoke$arity$3(f,coll,promesa.exec.current_thread_executor);
}));

(promesa.core$macros.run_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (f,coll,executor){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__15058_SHARP_,p2__15059_SHARP_){
return promesa.core$macros.then.cljs$core$IFn$_invoke$arity$2(p1__15058_SHARP_,(function (_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p2__15059_SHARP_) : f.call(null,p2__15059_SHARP_));
}));
}),promesa.core$macros.promise.cljs$core$IFn$_invoke$arity$2(null,executor),coll);
}));

(promesa.core$macros.run_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Cancel the promise.
 */
promesa.core$macros.cancel_BANG_ = (function promesa$core$macros$cancel_BANG_(p){
promesa.protocols._cancel_BANG_(p);

return p;
});
/**
 * Return true if `v` is a cancelled promise.
 */
promesa.core$macros.cancelled_QMARK_ = (function promesa$core$macros$cancelled_QMARK_(v){
return promesa.protocols._cancelled_QMARK_(v);
});
/**
 * Resolve a completable promise with a value.
 */
promesa.core$macros.resolve_BANG_ = (function promesa$core$macros$resolve_BANG_(var_args){
var G__15078 = arguments.length;
switch (G__15078) {
case 1:
return promesa.core$macros.resolve_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core$macros.resolve_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core$macros.resolve_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (o){
return promesa.protocols._resolve_BANG_(o,null);
}));

(promesa.core$macros.resolve_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (o,v){
return promesa.protocols._resolve_BANG_(o,v);
}));

(promesa.core$macros.resolve_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Reject a completable promise with an error.
 */
promesa.core$macros.reject_BANG_ = (function promesa$core$macros$reject_BANG_(p,e){
return promesa.protocols._reject_BANG_(p,e);
});
/**
 * Given a function that accepts a callback as the last argument return other
 *   function that returns a promise. Callback is expected to take single
 *   parameter (result of a computation).
 */
promesa.core$macros.promisify = (function promesa$core$macros$promisify(callable){
return (function() { 
var G__15285__delegate = function (args){
return promesa.core$macros.create.cljs$core$IFn$_invoke$arity$1((function (resolve,reject){
var args__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(args),resolve);
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callable,args__$1);
}catch (e15084){if((e15084 instanceof Error)){
var e = e15084;
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(e) : reject.call(null,e));
} else {
throw e15084;

}
}}));
};
var G__15285 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15287__i = 0, G__15287__a = new Array(arguments.length -  0);
while (G__15287__i < G__15287__a.length) {G__15287__a[G__15287__i] = arguments[G__15287__i + 0]; ++G__15287__i;}
  args = new cljs.core.IndexedSeq(G__15287__a,0,null);
} 
return G__15285__delegate.call(this,args);};
G__15285.cljs$lang$maxFixedArity = 0;
G__15285.cljs$lang$applyTo = (function (arglist__15288){
var args = cljs.core.seq(arglist__15288);
return G__15285__delegate(args);
});
G__15285.cljs$core$IFn$_invoke$arity$variadic = G__15285__delegate;
return G__15285;
})()
;
});
/**
 * @constructor
 */
promesa.core$macros.TimeoutException = (function promesa$core$macros$TimeoutException(message){
var it = this;
Error.call(it,message,cljs.core.PersistentArrayMap.EMPTY,null);

return it;
});
goog.inherits(promesa.core$macros.TimeoutException,Error);
/**
 * Returns a cancellable promise that will be fulfilled with this
 *   promise's fulfillment value or rejection reason.  However, if this
 *   promise is not fulfilled or rejected within `ms` milliseconds, the
 *   returned promise is cancelled with a TimeoutError
 */
promesa.core$macros.timeout = (function promesa$core$macros$timeout(var_args){
var G__15097 = arguments.length;
switch (G__15097) {
case 2:
return promesa.core$macros.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core$macros.timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return promesa.core$macros.timeout.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core$macros.timeout.cljs$core$IFn$_invoke$arity$2 = (function (p,t){
return promesa.core$macros.timeout.cljs$core$IFn$_invoke$arity$4(p,t,new cljs.core.Keyword("promesa.core","default","promesa.core/default",1773193826),promesa.exec.default_scheduler);
}));

(promesa.core$macros.timeout.cljs$core$IFn$_invoke$arity$3 = (function (p,t,v){
return promesa.core$macros.timeout.cljs$core$IFn$_invoke$arity$4(p,t,v,promesa.exec.default_scheduler);
}));

(promesa.core$macros.timeout.cljs$core$IFn$_invoke$arity$4 = (function (p,t,v,scheduler){
var timeout = promesa.core$macros.deferred();
var tid = promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$3(scheduler,t,(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.Keyword("promesa.core","default","promesa.core/default",1773193826))){
return promesa.core$macros.reject_BANG_(timeout,(new promesa.core$macros.TimeoutException("Operation timed out.")));
} else {
return promesa.core$macros.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(timeout,v);
}
}));
return promesa.core$macros.race(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [promesa.core$macros.finally$.cljs$core$IFn$_invoke$arity$2(p,(function (_,___$1){
return promesa.protocols._cancel_BANG_(tid);
})),timeout], null));
}));

(promesa.core$macros.timeout.cljs$lang$maxFixedArity = 4);

/**
 * Given a timeout in miliseconds and optional value, returns a promise
 *   that will fulfilled with provided value (or nil) after the time is
 *   reached.
 */
promesa.core$macros.delay = (function promesa$core$macros$delay(var_args){
var G__15109 = arguments.length;
switch (G__15109) {
case 1:
return promesa.core$macros.delay.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core$macros.delay.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core$macros.delay.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core$macros.delay.cljs$core$IFn$_invoke$arity$1 = (function (t){
return promesa.core$macros.delay.cljs$core$IFn$_invoke$arity$3(t,null,promesa.exec.default_scheduler);
}));

(promesa.core$macros.delay.cljs$core$IFn$_invoke$arity$2 = (function (t,v){
return promesa.core$macros.delay.cljs$core$IFn$_invoke$arity$3(t,v,promesa.exec.default_scheduler);
}));

(promesa.core$macros.delay.cljs$core$IFn$_invoke$arity$3 = (function (t,v,scheduler){
var d = promesa.core$macros.deferred();
promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$3(scheduler,t,(function (){
return promesa.core$macros.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(d,v);
}));

return d;
}));

(promesa.core$macros.delay.cljs$lang$maxFixedArity = 3);

var ret__5824__auto___15293 = (function (){
/**
 * Execute potentially side effectful code and return a promise resolved
 *   to the last expression. Always awaiting the result of each
 *   expression.
 */
promesa.core$macros.do_BANG_ = (function promesa$core$macros$do_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15294 = arguments.length;
var i__5770__auto___15295 = (0);
while(true){
if((i__5770__auto___15295 < len__5769__auto___15294)){
args__5775__auto__.push((arguments[i__5770__auto___15295]));

var G__15296 = (i__5770__auto___15295 + (1));
i__5770__auto___15295 = G__15296;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return promesa.core$macros.do_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(promesa.core$macros.do_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,exprs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-bind","promesa.protocols/-bind",1690962013,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"___15114__auto__","___15114__auto__",-441921363,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(function (){var pred__15127 = cljs.core._EQ_;
var expr__15128 = cljs.core.count(exprs);
if(cljs.core.truth_((pred__15127.cljs$core$IFn$_invoke$arity$2 ? pred__15127.cljs$core$IFn$_invoke$arity$2((0),expr__15128) : pred__15127.call(null,(0),expr__15128)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
} else {
if(cljs.core.truth_((pred__15127.cljs$core$IFn$_invoke$arity$2 ? pred__15127.cljs$core$IFn$_invoke$arity$2((1),expr__15128) : pred__15127.call(null,(1),expr__15128)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(exprs),null,(1),null)))));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,e){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-bind","promesa.protocols/-bind",1690962013,null),null,(1),null)),(new cljs.core.List(null,e,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"___15113__auto__","___15113__auto__",1397320197,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,acc,null,(1),null))], 0)))),null,(1),null))], 0))));
}),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,cljs.core.last(exprs),null,(1),null))))),cljs.core.reverse(cljs.core.butlast(exprs)));
}
}
})(),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(promesa.core$macros.do_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(promesa.core$macros.do_BANG_.cljs$lang$applyTo = (function (seq15118){
var G__15119 = cljs.core.first(seq15118);
var seq15118__$1 = cljs.core.next(seq15118);
var G__15120 = cljs.core.first(seq15118__$1);
var seq15118__$2 = cljs.core.next(seq15118__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15119,G__15120,seq15118__$2);
}));

return null;
})()
;
(promesa.core$macros.do_BANG_.cljs$lang$macro = true);

var ret__5824__auto___15299 = (function (){
/**
 * A `let` alternative that always returns promise and waits for all the
 *   promises on the bindings.
 */
promesa.core$macros.let$ = (function promesa$core$macros$let(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15300 = arguments.length;
var i__5770__auto___15301 = (0);
while(true){
if((i__5770__auto___15301 < len__5769__auto___15300)){
args__5775__auto__.push((arguments[i__5770__auto___15301]));

var G__15302 = (i__5770__auto___15301 + (1));
i__5770__auto___15301 = G__15302;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return promesa.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(promesa.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-bind","promesa.protocols/-bind",1690962013,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"___15149__auto__","___15149__auto__",788809546,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__15160){
var vec__15161 = p__15160;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15161,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15161,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-bind","promesa.protocols/-bind",1690962013,null),null,(1),null)),(new cljs.core.List(null,r,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,l,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,acc,null,(1),null))], 0)))),null,(1),null))], 0))));
}),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","do!","promesa.core/do!",12645930,null),null,(1),null)),body))),cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(promesa.core$macros.let$.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(promesa.core$macros.let$.cljs$lang$applyTo = (function (seq15151){
var G__15152 = cljs.core.first(seq15151);
var seq15151__$1 = cljs.core.next(seq15151);
var G__15153 = cljs.core.first(seq15151__$1);
var seq15151__$2 = cljs.core.next(seq15151__$1);
var G__15154 = cljs.core.first(seq15151__$2);
var seq15151__$3 = cljs.core.next(seq15151__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15152,G__15153,G__15154,seq15151__$3);
}));

return null;
})()
;
(promesa.core$macros.let$.cljs$lang$macro = true);

var ret__5824__auto___15304 = (function (){
/**
 * A parallel let; executes all the bindings in parallel and when all
 *   bindings are resolved, executes the body.
 */
promesa.core$macros.plet = (function promesa$core$macros$plet(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15305 = arguments.length;
var i__5770__auto___15306 = (0);
while(true){
if((i__5770__auto___15306 < len__5769__auto___15305)){
args__5775__auto__.push((arguments[i__5770__auto___15306]));

var G__15307 = (i__5770__auto___15306 + (1));
i__5770__auto___15306 = G__15307;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return promesa.core$macros.plet.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(promesa.core$macros.plet.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-bind","promesa.protocols/-bind",1690962013,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"___15167__auto__","___15167__auto__",-200752724,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(function (){var bindings__$1 = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","all","promesa.core/all",-152914545,null),null,(1),null)),(new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,bindings__$1),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","then","promesa.core/then",487138967,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,bindings__$1))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","do!","promesa.core/do!",12645930,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0))));
})(),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(promesa.core$macros.plet.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(promesa.core$macros.plet.cljs$lang$applyTo = (function (seq15168){
var G__15169 = cljs.core.first(seq15168);
var seq15168__$1 = cljs.core.next(seq15168);
var G__15170 = cljs.core.first(seq15168__$1);
var seq15168__$2 = cljs.core.next(seq15168__$1);
var G__15171 = cljs.core.first(seq15168__$2);
var seq15168__$3 = cljs.core.next(seq15168__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15169,G__15170,G__15171,seq15168__$3);
}));

return null;
})()
;
(promesa.core$macros.plet.cljs$lang$macro = true);

var ret__5824__auto___15309 = (function (){
/**
 * Analogous to `clojure.core/future` that returns a promise instance
 *   instead of the `Future`. Usefull for execute synchronous code in a
 *   separate thread (also works in cljs).
 */
promesa.core$macros.future = (function promesa$core$macros$future(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15310 = arguments.length;
var i__5770__auto___15311 = (0);
while(true){
if((i__5770__auto___15311 < len__5769__auto___15310)){
args__5775__auto__.push((arguments[i__5770__auto___15311]));

var G__15312 = (i__5770__auto___15311 + (1));
i__5770__auto___15311 = G__15312;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return promesa.core$macros.future.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(promesa.core$macros.future.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.exec","submit!","promesa.exec/submit!",1325930091,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"f__15174__auto__","f__15174__auto__",100946925,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"f__15174__auto__","f__15174__auto__",100946925,null),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-bind","promesa.protocols/-bind",1690962013,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identity","cljs.core/identity",725118887,null),null,(1),null))))),null,(1),null))], 0))));
}));

(promesa.core$macros.future.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(promesa.core$macros.future.cljs$lang$applyTo = (function (seq15175){
var G__15176 = cljs.core.first(seq15175);
var seq15175__$1 = cljs.core.next(seq15175);
var G__15177 = cljs.core.first(seq15175__$1);
var seq15175__$2 = cljs.core.next(seq15175__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15176,G__15177,seq15175__$2);
}));

return null;
})()
;
(promesa.core$macros.future.cljs$lang$macro = true);

promesa.core$macros._STAR_loop_run_fn_STAR_ = promesa.exec.run_BANG_;
var ret__5824__auto___15318 = (function (){
promesa.core$macros.loop = (function promesa$core$macros$loop(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15319 = arguments.length;
var i__5770__auto___15320 = (0);
while(true){
if((i__5770__auto___15320 < len__5769__auto___15319)){
args__5775__auto__.push((arguments[i__5770__auto___15320]));

var G__15321 = (i__5770__auto___15320 + (1));
i__5770__auto___15320 = G__15321;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return promesa.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(promesa.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var bindings__$1 = cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(2),bindings);
var names = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,bindings__$1);
var fvals = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,bindings__$1);
var tsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("loop");
var dsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("deferred");
var rsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("run");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,rsym,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","*loop-run-fn*","promesa.core/*loop-run-fn*",448089407,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,dsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","deferred","promesa.core/deferred",-880308979,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,tsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,tsym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"params__15190__auto__","params__15190__auto__",724617697,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","all","promesa.core/all",-152914545,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"params__15190__auto__","params__15190__auto__",724617697,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","then","promesa.core/then",487138967,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(names)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","do!","promesa.core/do!",12645930,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","handle","promesa.core/handle",-1644778541,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"res__15191__auto__","res__15191__auto__",1894900801,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__15192__auto__","err__15192__auto__",54189709,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__15192__auto__","err__15192__auto__",54189709,null),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","reject!","promesa.core/reject!",-314773537,null),null,(1),null)),(new cljs.core.List(null,dsym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"err__15192__auto__","err__15192__auto__",54189709,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"res__15191__auto__","res__15191__auto__",1894900801,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"res__15191__auto__","res__15191__auto__",1894900801,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("promesa.core","recur","promesa.core/recur",100580374),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,rsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,tsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"args","args",1315556576),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"res__15191__auto__","res__15191__auto__",1894900801,null),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","resolve!","promesa.core/resolve!",1603668640,null),null,(1),null)),(new cljs.core.List(null,dsym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"res__15191__auto__","res__15191__auto__",1894900801,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,rsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,tsym,null,(1),null)),(new cljs.core.List(null,fvals,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,dsym,null,(1),null))], 0))));
}));

(promesa.core$macros.loop.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(promesa.core$macros.loop.cljs$lang$applyTo = (function (seq15193){
var G__15194 = cljs.core.first(seq15193);
var seq15193__$1 = cljs.core.next(seq15193);
var G__15195 = cljs.core.first(seq15193__$1);
var seq15193__$2 = cljs.core.next(seq15193__$1);
var G__15196 = cljs.core.first(seq15193__$2);
var seq15193__$3 = cljs.core.next(seq15193__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15194,G__15195,G__15196,seq15193__$3);
}));

return null;
})()
;
(promesa.core$macros.loop.cljs$lang$macro = true);

var ret__5824__auto___15332 = (function (){
promesa.core$macros.recur = (function promesa$core$macros$recur(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15333 = arguments.length;
var i__5770__auto___15334 = (0);
while(true){
if((i__5770__auto___15334 < len__5769__auto___15333)){
args__5775__auto__.push((arguments[i__5770__auto___15334]));

var G__15335 = (i__5770__auto___15334 + (1));
i__5770__auto___15334 = G__15335;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return promesa.core$macros.recur.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(promesa.core$macros.recur.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array-map","cljs.core/array-map",-1519210683,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("promesa.core","recur","promesa.core/recur",100580374),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"args","args",1315556576),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(args)))),null,(1),null))], 0))));
}));

(promesa.core$macros.recur.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(promesa.core$macros.recur.cljs$lang$applyTo = (function (seq15219){
var G__15220 = cljs.core.first(seq15219);
var seq15219__$1 = cljs.core.next(seq15219);
var G__15221 = cljs.core.first(seq15219__$1);
var seq15219__$2 = cljs.core.next(seq15219__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15220,G__15221,seq15219__$2);
}));

return null;
})()
;
(promesa.core$macros.recur.cljs$lang$macro = true);

