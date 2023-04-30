goog.provide('reagent.core$macros');
var ret__5824__auto___31140 = (function (){
/**
 * Bind variables as with let, except that when used in a component
 *   the bindings are only evaluated once. Also takes an optional finally
 *   clause at the end, that is executed when the component is
 *   destroyed.
 */
reagent.core$macros.with_let = (function reagent$core$macros$with_let(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31141 = arguments.length;
var i__5770__auto___31142 = (0);
while(true){
if((i__5770__auto___31142 < len__5769__auto___31141)){
args__5775__auto__.push((arguments[i__5770__auto___31142]));

var G__31143 = (i__5770__auto___31142 + (1));
i__5770__auto___31142 = G__31143;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return reagent.core$macros.with_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(reagent.core$macros.with_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("ra","with-let","ra/with-let",-1310105773,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(reagent.core$macros.with_let.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(reagent.core$macros.with_let.cljs$lang$applyTo = (function (seq31112){
var G__31113 = cljs.core.first(seq31112);
var seq31112__$1 = cljs.core.next(seq31112);
var G__31114 = cljs.core.first(seq31112__$1);
var seq31112__$2 = cljs.core.next(seq31112__$1);
var G__31115 = cljs.core.first(seq31112__$2);
var seq31112__$3 = cljs.core.next(seq31112__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31113,G__31114,G__31115,seq31112__$3);
}));

return null;
})()
;
(reagent.core$macros.with_let.cljs$lang$macro = true);

