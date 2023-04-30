goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__27836__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__27836 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27837__i = 0, G__27837__a = new Array(arguments.length -  0);
while (G__27837__i < G__27837__a.length) {G__27837__a[G__27837__i] = arguments[G__27837__i + 0]; ++G__27837__i;}
  args = new cljs.core.IndexedSeq(G__27837__a,0,null);
} 
return G__27836__delegate.call(this,args);};
G__27836.cljs$lang$maxFixedArity = 0;
G__27836.cljs$lang$applyTo = (function (arglist__27838){
var args = cljs.core.seq(arglist__27838);
return G__27836__delegate(args);
});
G__27836.cljs$core$IFn$_invoke$arity$variadic = G__27836__delegate;
return G__27836;
})()
);

(o.error = (function() { 
var G__27840__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__27840 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27842__i = 0, G__27842__a = new Array(arguments.length -  0);
while (G__27842__i < G__27842__a.length) {G__27842__a[G__27842__i] = arguments[G__27842__i + 0]; ++G__27842__i;}
  args = new cljs.core.IndexedSeq(G__27842__a,0,null);
} 
return G__27840__delegate.call(this,args);};
G__27840.cljs$lang$maxFixedArity = 0;
G__27840.cljs$lang$applyTo = (function (arglist__27843){
var args = cljs.core.seq(arglist__27843);
return G__27840__delegate(args);
});
G__27840.cljs$core$IFn$_invoke$arity$variadic = G__27840__delegate;
return G__27840;
})()
);

return o;
})();
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
