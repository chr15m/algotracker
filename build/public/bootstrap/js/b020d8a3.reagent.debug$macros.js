goog.provide('reagent.debug$macros');
var ret__5824__auto___30925 = (function (){
/**
 * Print with console.log, if it exists.
 */
reagent.debug$macros.log = (function reagent$debug$macros$log(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30926 = arguments.length;
var i__5770__auto___30927 = (0);
while(true){
if((i__5770__auto___30927 < len__5769__auto___30926)){
args__5775__auto__.push((arguments[i__5770__auto___30927]));

var G__30928 = (i__5770__auto___30927 + (1));
i__5770__auto___30927 = G__30928;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return reagent.debug$macros.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(reagent.debug$macros.log.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"reagent.debug.has-console","reagent.debug.has-console",-1792886083,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".log",".log",565247729,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","console","js/console",-1426368245,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([forms], 0)))),null,(1),null))], 0))));
}));

(reagent.debug$macros.log.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.debug$macros.log.cljs$lang$applyTo = (function (seq30758){
var G__30759 = cljs.core.first(seq30758);
var seq30758__$1 = cljs.core.next(seq30758);
var G__30760 = cljs.core.first(seq30758__$1);
var seq30758__$2 = cljs.core.next(seq30758__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30759,G__30760,seq30758__$2);
}));

return null;
})()
;
(reagent.debug$macros.log.cljs$lang$macro = true);

var ret__5824__auto___30931 = (function (){
/**
 * Print with console.warn.
 */
reagent.debug$macros.warn = (function reagent$debug$macros$warn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30932 = arguments.length;
var i__5770__auto___30933 = (0);
while(true){
if((i__5770__auto___30933 < len__5769__auto___30932)){
args__5775__auto__.push((arguments[i__5770__auto___30933]));

var G__30934 = (i__5770__auto___30933 + (1));
i__5770__auto___30933 = G__30934;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return reagent.debug$macros.warn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(reagent.debug$macros.warn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"reagent.debug.has-console","reagent.debug.has-console",-1792886083,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".warn",".warn",-2099751158,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"reagent.debug.tracking","reagent.debug.tracking",478501764,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"reagent.debug.track-console","reagent.debug.track-console",-179485171,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","console","js/console",-1426368245,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Warning: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([forms], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return null;
}
}));

(reagent.debug$macros.warn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.debug$macros.warn.cljs$lang$applyTo = (function (seq30769){
var G__30770 = cljs.core.first(seq30769);
var seq30769__$1 = cljs.core.next(seq30769);
var G__30771 = cljs.core.first(seq30769__$1);
var seq30769__$2 = cljs.core.next(seq30769__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30770,G__30771,seq30769__$2);
}));

return null;
})()
;
(reagent.debug$macros.warn.cljs$lang$macro = true);

var ret__5824__auto___30938 = (function (){
reagent.debug$macros.warn_unless = (function reagent$debug$macros$warn_unless(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30939 = arguments.length;
var i__5770__auto___30940 = (0);
while(true){
if((i__5770__auto___30940 < len__5769__auto___30939)){
args__5775__auto__.push((arguments[i__5770__auto___30940]));

var G__30941 = (i__5770__auto___30940 + (1));
i__5770__auto___30940 = G__30941;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return reagent.debug$macros.warn_unless.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(reagent.debug$macros.warn_unless.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,cond,forms){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cond,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("reagent.debug","warn","reagent.debug/warn",-503321706,null),null,(1),null)),forms))),null,(1),null))], 0))));
} else {
return null;
}
}));

(reagent.debug$macros.warn_unless.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(reagent.debug$macros.warn_unless.cljs$lang$applyTo = (function (seq30784){
var G__30785 = cljs.core.first(seq30784);
var seq30784__$1 = cljs.core.next(seq30784);
var G__30786 = cljs.core.first(seq30784__$1);
var seq30784__$2 = cljs.core.next(seq30784__$1);
var G__30787 = cljs.core.first(seq30784__$2);
var seq30784__$3 = cljs.core.next(seq30784__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30785,G__30786,G__30787,seq30784__$3);
}));

return null;
})()
;
(reagent.debug$macros.warn_unless.cljs$lang$macro = true);

var ret__5824__auto___30958 = (function (){
/**
 * Print with console.error.
 */
reagent.debug$macros.error = (function reagent$debug$macros$error(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30964 = arguments.length;
var i__5770__auto___30966 = (0);
while(true){
if((i__5770__auto___30966 < len__5769__auto___30964)){
args__5775__auto__.push((arguments[i__5770__auto___30966]));

var G__30967 = (i__5770__auto___30966 + (1));
i__5770__auto___30966 = G__30967;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return reagent.debug$macros.error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(reagent.debug$macros.error.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"reagent.debug.has-console","reagent.debug.has-console",-1792886083,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".error",".error",1756007195,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"reagent.debug.tracking","reagent.debug.tracking",478501764,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"reagent.debug.track-console","reagent.debug.track-console",-179485171,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","console","js/console",-1426368245,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),forms))),null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return null;
}
}));

(reagent.debug$macros.error.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.debug$macros.error.cljs$lang$applyTo = (function (seq30802){
var G__30803 = cljs.core.first(seq30802);
var seq30802__$1 = cljs.core.next(seq30802);
var G__30804 = cljs.core.first(seq30802__$1);
var seq30802__$2 = cljs.core.next(seq30802__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30803,G__30804,seq30802__$2);
}));

return null;
})()
;
(reagent.debug$macros.error.cljs$lang$macro = true);

var ret__5824__auto___30975 = (function (){
/**
 * Print string with console.log
 */
reagent.debug$macros.println = (function reagent$debug$macros$println(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30976 = arguments.length;
var i__5770__auto___30977 = (0);
while(true){
if((i__5770__auto___30977 < len__5769__auto___30976)){
args__5775__auto__.push((arguments[i__5770__auto___30977]));

var G__30978 = (i__5770__auto___30977 + (1));
i__5770__auto___30977 = G__30978;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return reagent.debug$macros.println.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(reagent.debug$macros.println.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("reagent.debug","log","reagent.debug/log",-528007284,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),forms))),null,(1),null)))));
}));

(reagent.debug$macros.println.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.debug$macros.println.cljs$lang$applyTo = (function (seq30829){
var G__30830 = cljs.core.first(seq30829);
var seq30829__$1 = cljs.core.next(seq30829);
var G__30831 = cljs.core.first(seq30829__$1);
var seq30829__$2 = cljs.core.next(seq30829__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30830,G__30831,seq30829__$2);
}));

return null;
})()
;
(reagent.debug$macros.println.cljs$lang$macro = true);

var ret__5824__auto___30983 = (function (){
/**
 * Like standard prn, but prints using console.log (so that we get
 * nice clickable links to source in modern browsers).
 */
reagent.debug$macros.prn = (function reagent$debug$macros$prn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30985 = arguments.length;
var i__5770__auto___30986 = (0);
while(true){
if((i__5770__auto___30986 < len__5769__auto___30985)){
args__5775__auto__.push((arguments[i__5770__auto___30986]));

var G__30987 = (i__5770__auto___30986 + (1));
i__5770__auto___30986 = G__30987;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return reagent.debug$macros.prn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(reagent.debug$macros.prn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("reagent.debug","log","reagent.debug/log",-528007284,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),forms))),null,(1),null)))));
}));

(reagent.debug$macros.prn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.debug$macros.prn.cljs$lang$applyTo = (function (seq30839){
var G__30840 = cljs.core.first(seq30839);
var seq30839__$1 = cljs.core.next(seq30839);
var G__30841 = cljs.core.first(seq30839__$1);
var seq30839__$2 = cljs.core.next(seq30839__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30840,G__30841,seq30839__$2);
}));

return null;
})()
;
(reagent.debug$macros.prn.cljs$lang$macro = true);

var ret__5824__auto___30993 = /**
 * Useful debugging macro that prints the source and value of x,
 * as well as package name and line number. Returns x.
 */
reagent.debug$macros.dbg = (function reagent$debug$macros$dbg(_AMPERSAND_form,_AMPERSAND_env,x){
var ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"x__30845__auto__","x__30845__auto__",1433336361,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"dbg ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,ns,null,(1),null)),(new cljs.core.List(null,":",null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(_AMPERSAND_form)),null,(1),null)),(new cljs.core.List(null,": ",null,(1),null)),(new cljs.core.List(null,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)),null,(1),null)),(new cljs.core.List(null,": ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__30845__auto__","x__30845__auto__",1433336361,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__30845__auto__","x__30845__auto__",1433336361,null),null,(1),null))], 0))));
});
(reagent.debug$macros.dbg.cljs$lang$macro = true);

var ret__5824__auto___30998 = /**
 * True if assertions are enabled.
 */
reagent.debug$macros.dev_QMARK_ = (function reagent$debug$macros$dev_QMARK_(_AMPERSAND_form,_AMPERSAND_env){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return true;
} else {
return false;
}
});
(reagent.debug$macros.dev_QMARK_.cljs$lang$macro = true);

var ret__5824__auto___30999 = (function (){
reagent.debug$macros.time = (function reagent$debug$macros$time(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31000 = arguments.length;
var i__5770__auto___31001 = (0);
while(true){
if((i__5770__auto___31001 < len__5769__auto___31000)){
args__5775__auto__.push((arguments[i__5770__auto___31001]));

var G__31002 = (i__5770__auto___31001 + (1));
i__5770__auto___31001 = G__31002;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return reagent.debug$macros.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(reagent.debug$macros.time.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
var ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_);
var label = [ns,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(_AMPERSAND_form)))].join('');
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"label__30859__auto__","label__30859__auto__",-329943514,null),null,(1),null)),(new cljs.core.List(null,label,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"res__30860__auto__","res__30860__auto__",-2017836347,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("js","console.time","js/console.time",891683584,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"label__30859__auto__","label__30859__auto__",-329943514,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([forms], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("js","console.timeEnd","js/console.timeEnd",274714029,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"label__30859__auto__","label__30859__auto__",-329943514,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"res__30860__auto__","res__30860__auto__",-2017836347,null),null,(1),null))], 0))));
}));

(reagent.debug$macros.time.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.debug$macros.time.cljs$lang$applyTo = (function (seq30872){
var G__30873 = cljs.core.first(seq30872);
var seq30872__$1 = cljs.core.next(seq30872);
var G__30875 = cljs.core.first(seq30872__$1);
var seq30872__$2 = cljs.core.next(seq30872__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30873,G__30875,seq30872__$2);
}));

return null;
})()
;
(reagent.debug$macros.time.cljs$lang$macro = true);

var ret__5824__auto___31008 = reagent.debug$macros.assert_some = (function reagent$debug$macros$assert_some(_AMPERSAND_form,_AMPERSAND_env,value,tag){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,value,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,tag,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null," must not be nil",null,(1),null))], 0)))),null,(1),null))], 0))));
});
(reagent.debug$macros.assert_some.cljs$lang$macro = true);

var ret__5824__auto___31011 = reagent.debug$macros.assert_component = (function reagent$debug$macros$assert_component(_AMPERSAND_form,_AMPERSAND_env,value){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("comp","reagent-component?","comp/reagent-component?",1494246810,null),null,(1),null)),(new cljs.core.List(null,value,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected a reagent component, not ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,value,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(reagent.debug$macros.assert_component.cljs$lang$macro = true);

var ret__5824__auto___31016 = reagent.debug$macros.assert_js_object = (function reagent$debug$macros$assert_js_object(_AMPERSAND_form,_AMPERSAND_env,value){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,(1),null)),(new cljs.core.List(null,value,null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected a JS object, not ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,value,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(reagent.debug$macros.assert_js_object.cljs$lang$macro = true);

var ret__5824__auto___31017 = reagent.debug$macros.assert_new_state = (function reagent$debug$macros$assert_new_state(_AMPERSAND_form,_AMPERSAND_env,value){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,value,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,(1),null)),(new cljs.core.List(null,value,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected a valid new state, not ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,value,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(reagent.debug$macros.assert_new_state.cljs$lang$macro = true);

var ret__5824__auto___31019 = reagent.debug$macros.assert_callable = (function reagent$debug$macros$assert_callable(_AMPERSAND_form,_AMPERSAND_env,value){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null),null,(1),null)),(new cljs.core.List(null,value,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected something callable, not ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,value,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(reagent.debug$macros.assert_callable.cljs$lang$macro = true);

