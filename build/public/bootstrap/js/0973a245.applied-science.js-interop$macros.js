goog.provide('applied_science.js_interop$macros');
applied_science.js_interop$macros.reflect_property = new cljs.core.Symbol("js","goog.reflect.objectProperty","js/goog.reflect.objectProperty",-1769769352,null);
applied_science.js_interop$macros.lookup_sentinel = new cljs.core.Symbol("applied-science.js-interop.impl","lookup-sentinel","applied-science.js-interop.impl/lookup-sentinel",-2020182184,null);
applied_science.js_interop$macros.wrap_key_STAR_ = new cljs.core.Symbol("applied-science.js-interop.impl","wrap-key","applied-science.js-interop.impl/wrap-key",-1752937003,null);
applied_science.js_interop$macros.empty_obj = cljs.core.list(new cljs.core.Symbol("cljs.core","js-obj","cljs.core/js-obj",1009370607,null));
applied_science.js_interop$macros._STAR_let = new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null);
applied_science.js_interop$macros.dot_sym_QMARK_ = (function applied_science$js_interop$macros$dot_sym_QMARK_(k){
return (((k instanceof cljs.core.Symbol)) && (clojure.string.starts_with_QMARK_(cljs.core.name(k),".")));
});
applied_science.js_interop$macros.dot_name = (function applied_science$js_interop$macros$dot_name(sym){
return clojure.string.replace(cljs.core.name(sym),/^\.\-?/,"");
});
applied_science.js_interop$macros.dot_get = (function applied_science$js_interop$macros$dot_get(sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([".-",applied_science.js_interop$macros.dot_name(sym)].join(''));
});
applied_science.js_interop$macros.dot_call = (function applied_science$js_interop$macros$dot_call(sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([".",applied_science.js_interop$macros.dot_name(sym)].join(''));
});
applied_science.js_interop$macros.as_string = (function applied_science$js_interop$macros$as_string(x){
return cljs.core.with_meta(x,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"string","string",-349010059,null)], null));
});
/**
 * Convert key to string at compile time when possible.
 */
applied_science.js_interop$macros.wrap_key = (function applied_science$js_interop$macros$wrap_key(env,obj,k){
if(((typeof k === 'string') || (typeof k === 'number'))){
return k;
} else {
if((k instanceof cljs.core.Keyword)){
return cljs.core.name(k);
} else {
if((((k instanceof cljs.core.Symbol)) || (cljs.core.seq_QMARK_(k)))){
if(applied_science.js_interop$macros.dot_sym_QMARK_(k)){
return applied_science.js_interop$macros.as_string(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros.reflect_property,null,(1),null)),(new cljs.core.List(null,cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(applied_science.js_interop$macros.dot_name(k)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,obj,null,(1),null))], 0)))));
} else {
var tags = applied_science.js_interop.inference.infer_tags(env,k);
if(applied_science.js_interop.inference.within_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null),tags)){
return k;
} else {
if(applied_science.js_interop.inference.within_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"keyword","keyword",-1843046022,null),"null"], null), null),tags)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","name","cljs.core/name",-260873443,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null)))));
} else {
return applied_science.js_interop$macros.as_string(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,applied_science.js_interop$macros.wrap_key_STAR_,null,(1),null)),(new cljs.core.List(null,k,null,(1),null))))));

}
}
}
} else {
return applied_science.js_interop$macros.as_string(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,applied_science.js_interop$macros.wrap_key_STAR_,null,(1),null)),(new cljs.core.List(null,k,null,(1),null))))));

}
}
}
});
/**
 * Fallback to wrapping keys at runtime
 */
applied_science.js_interop$macros.wrap_keys = (function applied_science$js_interop$macros$wrap_keys(ks){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","mapv","cljs.core/mapv",433728488,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key_STAR_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,ks,null,(1),null))], 0))));
});
var ret__5824__auto___15244 = applied_science.js_interop$macros.in_QMARK_ = (function applied_science$js_interop$macros$in_QMARK_(_AMPERSAND_form,_AMPERSAND_env,k,obj){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop.impl","in?*","applied-science.js-interop.impl/in?*",-1012411264,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,obj,null,(1),null))], 0))));
});
(applied_science.js_interop$macros.in_QMARK_.cljs$lang$macro = true);

var ret__5824__auto___15247 = (function (){
applied_science.js_interop$macros.unchecked_get = (function applied_science$js_interop$macros$unchecked_get(var_args){
var G__14860 = arguments.length;
switch (G__14860) {
case 4:
return applied_science.js_interop$macros.unchecked_get.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return applied_science.js_interop$macros.unchecked_get.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(applied_science.js_interop$macros.unchecked_get.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,obj,k){
if(applied_science.js_interop$macros.dot_sym_QMARK_(k)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,applied_science.js_interop$macros.dot_get(k),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unchecked-get","cljs.core/unchecked-get",-1271763170,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key(_AMPERSAND_env,null,k),null,(1),null))], 0))));
}
}));

(applied_science.js_interop$macros.unchecked_get.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,obj,k,not_found){
var o = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
var k_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("k");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k_sym,null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key(_AMPERSAND_env,o,k),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","in?","applied-science.js-interop/in?",399021412,null),null,(1),null)),(new cljs.core.List(null,k_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,o,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","unchecked-get","applied-science.js-interop/unchecked-get",-1144758314,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k_sym,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,not_found,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(applied_science.js_interop$macros.unchecked_get.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(applied_science.js_interop$macros.unchecked_get.cljs$lang$macro = true);

var ret__5824__auto___15252 = (function (){
applied_science.js_interop$macros._BANG_get = (function applied_science$js_interop$macros$_BANG_get(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15253 = arguments.length;
var i__5770__auto___15254 = (0);
while(true){
if((i__5770__auto___15254 < len__5769__auto___15253)){
args__5775__auto__.push((arguments[i__5770__auto___15254]));

var G__15255 = (i__5770__auto___15254 + (1));
i__5770__auto___15254 = G__15255;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop$macros._BANG_get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(applied_science.js_interop$macros._BANG_get.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","unchecked-get","applied-science.js-interop/unchecked-get",-1144758314,null),null,(1),null)),args)));
}));

(applied_science.js_interop$macros._BANG_get.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop$macros._BANG_get.cljs$lang$applyTo = (function (seq14888){
var G__14889 = cljs.core.first(seq14888);
var seq14888__$1 = cljs.core.next(seq14888);
var G__14890 = cljs.core.first(seq14888__$1);
var seq14888__$2 = cljs.core.next(seq14888__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14889,G__14890,seq14888__$2);
}));

return null;
})()
;
(applied_science.js_interop$macros._BANG_get.cljs$lang$macro = true);

var ret__5824__auto___15257 = (function (){
applied_science.js_interop$macros.unchecked_set = (function applied_science$js_interop$macros$unchecked_set(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15258 = arguments.length;
var i__5770__auto___15259 = (0);
while(true){
if((i__5770__auto___15259 < len__5769__auto___15258)){
args__5775__auto__.push((arguments[i__5770__auto___15259]));

var G__15260 = (i__5770__auto___15259 + (1));
i__5770__auto___15259 = G__15260;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop$macros.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(applied_science.js_interop$macros.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,obj,keyvals){
var o = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__5523__auto__ = (function applied_science$js_interop$macros$iter__14902(s__14903){
return (new cljs.core.LazySeq(null,(function (){
var s__14903__$1 = s__14903;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14903__$1);
if(temp__5804__auto__){
var s__14903__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14903__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__14903__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__14905 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__14904 = (0);
while(true){
if((i__14904 < size__5522__auto__)){
var vec__14908 = cljs.core._nth(c__5521__auto__,i__14904);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14908,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14908,(1),null);
cljs.core.chunk_append(b__14905,((applied_science.js_interop$macros.dot_sym_QMARK_(k))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,applied_science.js_interop$macros.dot_get(k),null,(1),null)),(new cljs.core.List(null,o,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unchecked-set","cljs.core/unchecked-set",763360576,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key(_AMPERSAND_env,null,k),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))], 0))))));

var G__15263 = (i__14904 + (1));
i__14904 = G__15263;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14905),applied_science$js_interop$macros$iter__14902(cljs.core.chunk_rest(s__14903__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14905),null);
}
} else {
var vec__14916 = cljs.core.first(s__14903__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14916,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14916,(1),null);
return cljs.core.cons(((applied_science.js_interop$macros.dot_sym_QMARK_(k))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,applied_science.js_interop$macros.dot_get(k),null,(1),null)),(new cljs.core.List(null,o,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unchecked-set","cljs.core/unchecked-set",763360576,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key(_AMPERSAND_env,null,k),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))], 0))))),applied_science$js_interop$macros$iter__14902(cljs.core.rest(s__14903__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
})(),(new cljs.core.List(null,o,null,(1),null))], 0))));
}));

(applied_science.js_interop$macros.unchecked_set.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop$macros.unchecked_set.cljs$lang$applyTo = (function (seq14894){
var G__14895 = cljs.core.first(seq14894);
var seq14894__$1 = cljs.core.next(seq14894);
var G__14896 = cljs.core.first(seq14894__$1);
var seq14894__$2 = cljs.core.next(seq14894__$1);
var G__14897 = cljs.core.first(seq14894__$2);
var seq14894__$3 = cljs.core.next(seq14894__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14895,G__14896,G__14897,seq14894__$3);
}));

return null;
})()
;
(applied_science.js_interop$macros.unchecked_set.cljs$lang$macro = true);

var ret__5824__auto___15264 = (function (){
applied_science.js_interop$macros._BANG_set = (function applied_science$js_interop$macros$_BANG_set(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15265 = arguments.length;
var i__5770__auto___15266 = (0);
while(true){
if((i__5770__auto___15266 < len__5769__auto___15265)){
args__5775__auto__.push((arguments[i__5770__auto___15266]));

var G__15271 = (i__5770__auto___15266 + (1));
i__5770__auto___15266 = G__15271;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop$macros._BANG_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(applied_science.js_interop$macros._BANG_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,obj,keyvals){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","unchecked-set","applied-science.js-interop/unchecked-set",612468376,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keyvals], 0))));
}));

(applied_science.js_interop$macros._BANG_set.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop$macros._BANG_set.cljs$lang$applyTo = (function (seq14928){
var G__14929 = cljs.core.first(seq14928);
var seq14928__$1 = cljs.core.next(seq14928);
var G__14930 = cljs.core.first(seq14928__$1);
var seq14928__$2 = cljs.core.next(seq14928__$1);
var G__14931 = cljs.core.first(seq14928__$2);
var seq14928__$3 = cljs.core.next(seq14928__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14929,G__14930,G__14931,seq14928__$3);
}));

return null;
})()
;
(applied_science.js_interop$macros._BANG_set.cljs$lang$macro = true);

var ret__5824__auto___15276 = applied_science.js_interop$macros.contains_QMARK_ = (function applied_science$js_interop$macros$contains_QMARK_(_AMPERSAND_form,_AMPERSAND_env,obj,k){
var o = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","in?","applied-science.js-interop/in?",399021412,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key(_AMPERSAND_env,o,k),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,o,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(applied_science.js_interop$macros.contains_QMARK_.cljs$lang$macro = true);

applied_science.js_interop$macros.get_STAR_ = (function applied_science$js_interop$macros$get_STAR_(var_args){
var G__14946 = arguments.length;
switch (G__14946) {
case 3:
return applied_science.js_interop$macros.get_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return applied_science.js_interop$macros.get_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop$macros.get_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (env,obj,k){
return applied_science.js_interop$macros.get_STAR_.cljs$core$IFn$_invoke$arity$4(env,obj,k,new cljs.core.Symbol("js","undefined","js/undefined",-329966622,null));
}));

(applied_science.js_interop$macros.get_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (env,obj,k,not_found){
var o = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
var k_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("k");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k_sym,null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key(env,o,k),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","contains?","applied-science.js-interop/contains?",-1276734795,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k_sym,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unchecked-get","cljs.core/unchecked-get",-1271763170,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k_sym,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,not_found,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(applied_science.js_interop$macros.get_STAR_.cljs$lang$maxFixedArity = 4);

var ret__5824__auto___15284 = (function (){
applied_science.js_interop$macros.get = (function applied_science$js_interop$macros$get(var_args){
var G__14957 = arguments.length;
switch (G__14957) {
case 4:
return applied_science.js_interop$macros.get.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return applied_science.js_interop$macros.get.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(applied_science.js_interop$macros.get.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,obj,k){
return applied_science.js_interop$macros.get_STAR_.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_env,obj,k);
}));

(applied_science.js_interop$macros.get.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,obj,k,not_found){
return applied_science.js_interop$macros.get_STAR_.cljs$core$IFn$_invoke$arity$4(_AMPERSAND_env,obj,k,not_found);
}));

(applied_science.js_interop$macros.get.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(applied_science.js_interop$macros.get.cljs$lang$macro = true);

var ret__5824__auto___15289 = (function (){
applied_science.js_interop$macros.get_in = (function applied_science$js_interop$macros$get_in(var_args){
var G__14971 = arguments.length;
switch (G__14971) {
case 4:
return applied_science.js_interop$macros.get_in.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return applied_science.js_interop$macros.get_in.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(applied_science.js_interop$macros.get_in.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,obj,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop$macros.get_STAR_,_AMPERSAND_env),obj,ks);
}));

(applied_science.js_interop$macros.get_in.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,obj,ks,not_found){
if(cljs.core.vector_QMARK_(ks)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"out__14967__auto__","out__14967__auto__",-34963045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out,k){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"out__14966__auto__","out__14966__auto__",-128698720,null),null,(1),null)),(new cljs.core.List(null,out,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",608476750,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"out__14966__auto__","out__14966__auto__",-128698720,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.lookup_sentinel,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.lookup_sentinel,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","get","applied-science.js-interop/get",-462418119,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"out__14966__auto__","out__14966__auto__",-128698720,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.lookup_sentinel,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),obj,ks),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",608476750,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.lookup_sentinel,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"out__14967__auto__","out__14967__auto__",-34963045,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,not_found,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"out__14967__auto__","out__14967__auto__",-34963045,null),null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop.impl","get-in*","applied-science.js-interop.impl/get-in*",400975371,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_keys(ks),null,(1),null)),(new cljs.core.List(null,not_found,null,(1),null))], 0))));
}
}));

(applied_science.js_interop$macros.get_in.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(applied_science.js_interop$macros.get_in.cljs$lang$macro = true);

var ret__5824__auto___15297 = applied_science.js_interop$macros._BANG_get_in = (function applied_science$js_interop$macros$_BANG_get_in(_AMPERSAND_form,_AMPERSAND_env,obj,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out,k){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,out,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null))], 0))));
}),obj,ks);
});
(applied_science.js_interop$macros._BANG_get_in.cljs$lang$macro = true);

var ret__5824__auto___15298 = applied_science.js_interop$macros.select_keys = (function applied_science$js_interop$macros$select_keys(_AMPERSAND_form,_AMPERSAND_env,obj,ks){
if(cljs.core.vector_QMARK_(ks)){
var o = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
var out = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("out");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,out,null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__5523__auto__ = (function applied_science$js_interop$macros$select_keys_$_iter__14990(s__14991){
return (new cljs.core.LazySeq(null,(function (){
var s__14991__$1 = s__14991;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14991__$1);
if(temp__5804__auto__){
var s__14991__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14991__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__14991__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__14993 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__14992 = (0);
while(true){
if((i__14992 < size__5522__auto__)){
var k = cljs.core._nth(c__5521__auto__,i__14992);
cljs.core.chunk_append(b__14993,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"k__14983__auto__","k__14983__auto__",-702217662,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key(_AMPERSAND_env,o,k),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","in?","applied-science.js-interop/in?",399021412,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__14983__auto__","k__14983__auto__",-702217662,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,o,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,out,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"k__14983__auto__","k__14983__auto__",-702217662,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"k__14983__auto__","k__14983__auto__",-702217662,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))));

var G__15303 = (i__14992 + (1));
i__14992 = G__15303;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14993),applied_science$js_interop$macros$select_keys_$_iter__14990(cljs.core.chunk_rest(s__14991__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14993),null);
}
} else {
var k = cljs.core.first(s__14991__$2);
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"k__14983__auto__","k__14983__auto__",-702217662,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key(_AMPERSAND_env,o,k),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","in?","applied-science.js-interop/in?",399021412,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__14983__auto__","k__14983__auto__",-702217662,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,o,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,out,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"k__14983__auto__","k__14983__auto__",-702217662,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"k__14983__auto__","k__14983__auto__",-702217662,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),applied_science$js_interop$macros$select_keys_$_iter__14990(cljs.core.rest(s__14991__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(ks);
})(),(new cljs.core.List(null,out,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop.impl","select-keys*","applied-science.js-interop.impl/select-keys*",-241542668,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_keys(ks),null,(1),null))], 0))));
}
});
(applied_science.js_interop$macros.select_keys.cljs$lang$macro = true);

var ret__5824__auto___15308 = /**
 * Like `or` but switches on `some?` instead of truthiness.
 */
applied_science.js_interop$macros.some_or = (function applied_science$js_interop$macros$some_or(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))], 0))));
});
(applied_science.js_interop$macros.some_or.cljs$lang$macro = true);

/**
 * Returns `k` of `o`. If nil, sets and returns a new empty child object.
 */
applied_science.js_interop$macros.get_PLUS__BANG_ = (function applied_science$js_interop$macros$get_PLUS__BANG_(o,k){
var child = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("child");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,child,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","some-or","applied-science.js-interop/some-or",-391248189,null),null,(1),null)),(new cljs.core.List(null,child,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new-child__15008__auto__","new-child__15008__auto__",520266691,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"new-child__15008__auto__","new-child__15008__auto__",520266691,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"new-child__15008__auto__","new-child__15008__auto__",520266691,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
applied_science.js_interop$macros.get_in_PLUS__BANG_ = (function applied_science$js_interop$macros$get_in_PLUS__BANG_(o,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(applied_science.js_interop$macros.get_PLUS__BANG_,o,ks);
});
var ret__5824__auto___15313 = (function (){
applied_science.js_interop$macros.assoc_BANG_ = (function applied_science$js_interop$macros$assoc_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15314 = arguments.length;
var i__5770__auto___15315 = (0);
while(true){
if((i__5770__auto___15315 < len__5769__auto___15314)){
args__5775__auto__.push((arguments[i__5770__auto___15315]));

var G__15316 = (i__5770__auto___15315 + (1));
i__5770__auto___15315 = G__15316;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop$macros.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(applied_science.js_interop$macros.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,obj,keyvals){
var o = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","some-or","applied-science.js-interop/some-or",-391248189,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__5523__auto__ = (function applied_science$js_interop$macros$iter__15027(s__15028){
return (new cljs.core.LazySeq(null,(function (){
var s__15028__$1 = s__15028;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15028__$1);
if(temp__5804__auto__){
var s__15028__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15028__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__15028__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__15030 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__15029 = (0);
while(true){
if((i__15029 < size__5522__auto__)){
var vec__15033 = cljs.core._nth(c__5521__auto__,i__15029);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15033,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15033,(1),null);
cljs.core.chunk_append(b__15030,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))));

var G__15317 = (i__15029 + (1));
i__15029 = G__15317;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15030),applied_science$js_interop$macros$iter__15027(cljs.core.chunk_rest(s__15028__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15030),null);
}
} else {
var vec__15037 = cljs.core.first(s__15028__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15037,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15037,(1),null);
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))),applied_science$js_interop$macros$iter__15027(cljs.core.rest(s__15028__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
})()], 0)))),null,(1),null))], 0))));
}));

(applied_science.js_interop$macros.assoc_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop$macros.assoc_BANG_.cljs$lang$applyTo = (function (seq15021){
var G__15022 = cljs.core.first(seq15021);
var seq15021__$1 = cljs.core.next(seq15021);
var G__15023 = cljs.core.first(seq15021__$1);
var seq15021__$2 = cljs.core.next(seq15021__$1);
var G__15024 = cljs.core.first(seq15021__$2);
var seq15021__$3 = cljs.core.next(seq15021__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15022,G__15023,G__15024,seq15021__$3);
}));

return null;
})()
;
(applied_science.js_interop$macros.assoc_BANG_.cljs$lang$macro = true);

var ret__5824__auto___15322 = applied_science.js_interop$macros.assoc_in_BANG_ = (function applied_science$js_interop$macros$assoc_in_BANG_(_AMPERSAND_form,_AMPERSAND_env,obj,ks,v){
if(cljs.core.vector_QMARK_(ks)){
var o = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","some-or","applied-science.js-interop/some-or",-391248189,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.get_in_PLUS__BANG_(o,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(ks)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.last(ks),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,o,null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop.impl","assoc-in*","applied-science.js-interop.impl/assoc-in*",45744373,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_keys(ks),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))], 0))));
}
});
(applied_science.js_interop$macros.assoc_in_BANG_.cljs$lang$macro = true);

var ret__5824__auto___15323 = applied_science.js_interop$macros._BANG_assoc_in_BANG_ = (function applied_science$js_interop$macros$_BANG_assoc_in_BANG_(_AMPERSAND_form,_AMPERSAND_env,obj,ks,v){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"obj__15046__auto__","obj__15046__auto__",-1410417075,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get-in","applied-science.js-interop/!get-in",272015301,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"obj__15046__auto__","obj__15046__auto__",-1410417075,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(ks),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,cljs.core.last(ks),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"obj__15046__auto__","obj__15046__auto__",-1410417075,null),null,(1),null))], 0))));
});
(applied_science.js_interop$macros._BANG_assoc_in_BANG_.cljs$lang$macro = true);

var ret__5824__auto___15324 = (function (){
applied_science.js_interop$macros._BANG_update = (function applied_science$js_interop$macros$_BANG_update(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15325 = arguments.length;
var i__5770__auto___15326 = (0);
while(true){
if((i__5770__auto___15326 < len__5769__auto___15325)){
args__5775__auto__.push((arguments[i__5770__auto___15326]));

var G__15327 = (i__5770__auto___15326 + (1));
i__5770__auto___15326 = G__15327;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((5) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((5)),(0),null)):null);
return applied_science.js_interop$macros._BANG_update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5776__auto__);
});

(applied_science.js_interop$macros._BANG_update.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,obj,k,f,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"o__15049__auto__","o__15049__auto__",1123370238,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"o__15049__auto__","o__15049__auto__",1123370238,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"o__15049__auto__","o__15049__auto__",1123370238,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(applied_science.js_interop$macros._BANG_update.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(applied_science.js_interop$macros._BANG_update.cljs$lang$applyTo = (function (seq15052){
var G__15053 = cljs.core.first(seq15052);
var seq15052__$1 = cljs.core.next(seq15052);
var G__15054 = cljs.core.first(seq15052__$1);
var seq15052__$2 = cljs.core.next(seq15052__$1);
var G__15055 = cljs.core.first(seq15052__$2);
var seq15052__$3 = cljs.core.next(seq15052__$2);
var G__15056 = cljs.core.first(seq15052__$3);
var seq15052__$4 = cljs.core.next(seq15052__$3);
var G__15057 = cljs.core.first(seq15052__$4);
var seq15052__$5 = cljs.core.next(seq15052__$4);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15053,G__15054,G__15055,G__15056,G__15057,seq15052__$5);
}));

return null;
})()
;
(applied_science.js_interop$macros._BANG_update.cljs$lang$macro = true);

var ret__5824__auto___15328 = (function (){
applied_science.js_interop$macros.update_BANG_ = (function applied_science$js_interop$macros$update_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15329 = arguments.length;
var i__5770__auto___15330 = (0);
while(true){
if((i__5770__auto___15330 < len__5769__auto___15329)){
args__5775__auto__.push((arguments[i__5770__auto___15330]));

var G__15331 = (i__5770__auto___15330 + (1));
i__5770__auto___15330 = G__15331;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((5) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((5)),(0),null)):null);
return applied_science.js_interop$macros.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5776__auto__);
});

(applied_science.js_interop$macros.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,obj,k,f,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"o__15070__auto__","o__15070__auto__",-1033551072,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!update","applied-science.js-interop/!update",-868872919,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","some-or","applied-science.js-interop/some-or",-391248189,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"o__15070__auto__","o__15070__auto__",-1033551072,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),args], 0)))),null,(1),null))], 0))));
}));

(applied_science.js_interop$macros.update_BANG_.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(applied_science.js_interop$macros.update_BANG_.cljs$lang$applyTo = (function (seq15072){
var G__15073 = cljs.core.first(seq15072);
var seq15072__$1 = cljs.core.next(seq15072);
var G__15074 = cljs.core.first(seq15072__$1);
var seq15072__$2 = cljs.core.next(seq15072__$1);
var G__15075 = cljs.core.first(seq15072__$2);
var seq15072__$3 = cljs.core.next(seq15072__$2);
var G__15076 = cljs.core.first(seq15072__$3);
var seq15072__$4 = cljs.core.next(seq15072__$3);
var G__15077 = cljs.core.first(seq15072__$4);
var seq15072__$5 = cljs.core.next(seq15072__$4);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15073,G__15074,G__15075,G__15076,G__15077,seq15072__$5);
}));

return null;
})()
;
(applied_science.js_interop$macros.update_BANG_.cljs$lang$macro = true);

var ret__5824__auto___15336 = (function (){
applied_science.js_interop$macros.update_in_BANG_ = (function applied_science$js_interop$macros$update_in_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15337 = arguments.length;
var i__5770__auto___15338 = (0);
while(true){
if((i__5770__auto___15338 < len__5769__auto___15337)){
args__5775__auto__.push((arguments[i__5770__auto___15338]));

var G__15339 = (i__5770__auto___15338 + (1));
i__5770__auto___15338 = G__15339;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((5) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((5)),(0),null)):null);
return applied_science.js_interop$macros.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5776__auto__);
});

(applied_science.js_interop$macros.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,obj,ks,f,args){
if(cljs.core.vector_QMARK_(ks)){
var o = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","some-or","applied-science.js-interop/some-or",-391248189,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"inner-obj__15086__auto__","inner-obj__15086__auto__",440215808,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.get_in_PLUS__BANG_(o,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(ks)),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","update!","applied-science.js-interop/update!",1834803760,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"inner-obj__15086__auto__","inner-obj__15086__auto__",440215808,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.last(ks),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),args], 0)))),null,(1),null)),(new cljs.core.List(null,o,null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop.impl","update-in*","applied-science.js-interop.impl/update-in*",-1172951159,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_keys(ks),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(args),null,(1),null))], 0))));
}
}));

(applied_science.js_interop$macros.update_in_BANG_.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(applied_science.js_interop$macros.update_in_BANG_.cljs$lang$applyTo = (function (seq15088){
var G__15089 = cljs.core.first(seq15088);
var seq15088__$1 = cljs.core.next(seq15088);
var G__15090 = cljs.core.first(seq15088__$1);
var seq15088__$2 = cljs.core.next(seq15088__$1);
var G__15091 = cljs.core.first(seq15088__$2);
var seq15088__$3 = cljs.core.next(seq15088__$2);
var G__15092 = cljs.core.first(seq15088__$3);
var seq15088__$4 = cljs.core.next(seq15088__$3);
var G__15093 = cljs.core.first(seq15088__$4);
var seq15088__$5 = cljs.core.next(seq15088__$4);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15089,G__15090,G__15091,G__15092,G__15093,seq15088__$5);
}));

return null;
})()
;
(applied_science.js_interop$macros.update_in_BANG_.cljs$lang$macro = true);

var ret__5824__auto___15340 = applied_science.js_interop$macros.push_BANG_ = (function applied_science$js_interop$macros$push_BANG_(_AMPERSAND_form,_AMPERSAND_env,array,v){
var sym = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("array"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Array","js/Array",-423508366,null)], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,sym,null,(1),null)),(new cljs.core.List(null,array,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".push",".push",-1497267248,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null))], 0))));
});
(applied_science.js_interop$macros.push_BANG_.cljs$lang$macro = true);

var ret__5824__auto___15341 = applied_science.js_interop$macros.unshift_BANG_ = (function applied_science$js_interop$macros$unshift_BANG_(_AMPERSAND_form,_AMPERSAND_env,array,v){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","doto","cljs.core/doto",-1284816239,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".unshift",".unshift",549569771,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))))),null,(1),null))], 0))));
});
(applied_science.js_interop$macros.unshift_BANG_.cljs$lang$macro = true);

var ret__5824__auto___15342 = (function (){
applied_science.js_interop$macros.call = (function applied_science$js_interop$macros$call(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15343 = arguments.length;
var i__5770__auto___15344 = (0);
while(true){
if((i__5770__auto___15344 < len__5769__auto___15343)){
args__5775__auto__.push((arguments[i__5770__auto___15344]));

var G__15345 = (i__5770__auto___15344 + (1));
i__5770__auto___15344 = G__15345;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return applied_science.js_interop$macros.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(applied_science.js_interop$macros.call.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,obj,k,args){
if(applied_science.js_interop$macros.dot_sym_QMARK_(k)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros.dot_call(k),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"obj__15115__auto__","obj__15115__auto__",-333267230,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.with_meta(new cljs.core.Symbol(null,"f__15116__auto__","f__15116__auto__",1010678380,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"applied_science/js_interop$macros.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,253,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,24,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,253,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,26,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","function","applied-science.js-interop/function",-1056574773,null),null,(1),null))], 0)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"obj__15115__auto__","obj__15115__auto__",-333267230,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".call",".call",1496874263,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__15116__auto__","f__15116__auto__",1010678380,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"obj__15115__auto__","obj__15115__auto__",-333267230,null),null,(1),null)),args], 0)))),null,(1),null))], 0))));
}
}));

(applied_science.js_interop$macros.call.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(applied_science.js_interop$macros.call.cljs$lang$applyTo = (function (seq15121){
var G__15122 = cljs.core.first(seq15121);
var seq15121__$1 = cljs.core.next(seq15121);
var G__15123 = cljs.core.first(seq15121__$1);
var seq15121__$2 = cljs.core.next(seq15121__$1);
var G__15124 = cljs.core.first(seq15121__$2);
var seq15121__$3 = cljs.core.next(seq15121__$2);
var G__15125 = cljs.core.first(seq15121__$3);
var seq15121__$4 = cljs.core.next(seq15121__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15122,G__15123,G__15124,G__15125,seq15121__$4);
}));

return null;
})()
;
(applied_science.js_interop$macros.call.cljs$lang$macro = true);

var ret__5824__auto___15346 = (function (){
applied_science.js_interop$macros.call_in = (function applied_science$js_interop$macros$call_in(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15347 = arguments.length;
var i__5770__auto___15348 = (0);
while(true){
if((i__5770__auto___15348 < len__5769__auto___15347)){
args__5775__auto__.push((arguments[i__5770__auto___15348]));

var G__15349 = (i__5770__auto___15348 + (1));
i__5770__auto___15348 = G__15349;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return applied_science.js_interop$macros.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(applied_science.js_interop$macros.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,obj,ks,args){
if(cljs.core.vector_QMARK_(ks)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"parent__15138__auto__","parent__15138__auto__",440549779,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get-in","applied-science.js-interop/!get-in",272015301,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.pop(ks),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.with_meta(new cljs.core.Symbol(null,"f__15139__auto__","f__15139__auto__",1382835419,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"applied_science/js_interop$macros.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,259,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,24,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,259,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,26,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","function","applied-science.js-interop/function",-1056574773,null),null,(1),null))], 0)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"parent__15138__auto__","parent__15138__auto__",440549779,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.peek(ks),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".call",".call",1496874263,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__15139__auto__","f__15139__auto__",1382835419,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"parent__15138__auto__","parent__15138__auto__",440549779,null),null,(1),null)),args], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop.impl","apply-in*","applied-science.js-interop.impl/apply-in*",962865774,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_keys(ks),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),null,(1),null)),args))),null,(1),null))], 0))));
}
}));

(applied_science.js_interop$macros.call_in.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(applied_science.js_interop$macros.call_in.cljs$lang$applyTo = (function (seq15140){
var G__15141 = cljs.core.first(seq15140);
var seq15140__$1 = cljs.core.next(seq15140);
var G__15142 = cljs.core.first(seq15140__$1);
var seq15140__$2 = cljs.core.next(seq15140__$1);
var G__15143 = cljs.core.first(seq15140__$2);
var seq15140__$3 = cljs.core.next(seq15140__$2);
var G__15144 = cljs.core.first(seq15140__$3);
var seq15140__$4 = cljs.core.next(seq15140__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15141,G__15142,G__15143,G__15144,seq15140__$4);
}));

return null;
})()
;
(applied_science.js_interop$macros.call_in.cljs$lang$macro = true);

var ret__5824__auto___15350 = applied_science.js_interop$macros.apply = (function applied_science$js_interop$macros$apply(_AMPERSAND_form,_AMPERSAND_env,obj,k,arg_array){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"obj__15165__auto__","obj__15165__auto__",772593202,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.with_meta(new cljs.core.Symbol(null,"f__15166__auto__","f__15166__auto__",-1795609745,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"applied_science/js_interop$macros.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,265,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,22,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,265,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,24,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","function","applied-science.js-interop/function",-1056574773,null),null,(1),null))], 0)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"obj__15165__auto__","obj__15165__auto__",772593202,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__15166__auto__","f__15166__auto__",-1795609745,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"obj__15165__auto__","obj__15165__auto__",772593202,null),null,(1),null)),(new cljs.core.List(null,arg_array,null,(1),null))], 0)))),null,(1),null))], 0))));
});
(applied_science.js_interop$macros.apply.cljs$lang$macro = true);

var ret__5824__auto___15351 = applied_science.js_interop$macros.apply_in = (function applied_science$js_interop$macros$apply_in(_AMPERSAND_form,_AMPERSAND_env,obj,ks,arg_array){
if(cljs.core.vector_QMARK_(ks)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"parent__15172__auto__","parent__15172__auto__",526861334,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get-in","applied-science.js-interop/!get-in",272015301,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.pop(ks),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.with_meta(new cljs.core.Symbol(null,"f__15173__auto__","f__15173__auto__",-120987308,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"applied_science/js_interop$macros.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,271,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,24,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,271,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,26,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","function","applied-science.js-interop/function",-1056574773,null),null,(1),null))], 0)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"parent__15172__auto__","parent__15172__auto__",526861334,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.peek(ks),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__15173__auto__","f__15173__auto__",-120987308,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"parent__15172__auto__","parent__15172__auto__",526861334,null),null,(1),null)),(new cljs.core.List(null,arg_array,null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop.impl","apply-in*","applied-science.js-interop.impl/apply-in*",962865774,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_keys(ks),null,(1),null)),(new cljs.core.List(null,arg_array,null,(1),null))], 0))));
}
});
(applied_science.js_interop$macros.apply_in.cljs$lang$macro = true);

applied_science.js_interop$macros.literal_obj = (function applied_science$js_interop$macros$literal_obj(keyvals){
var keyvals_str = ["({",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15182){
var vec__15183 = p__15182;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15183,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15183,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((applied_science.js_interop$macros.dot_sym_QMARK_(k))?cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(applied_science.js_interop$macros.dot_name(k)):["\"",cljs.core.name(k),"\""].join(''))),":~{}"].join('');
}),keyvals)),"})"].join('');
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),keyvals_str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,keyvals)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
var ret__5824__auto___15352 = (function (){
applied_science.js_interop$macros.obj = (function applied_science$js_interop$macros$obj(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15353 = arguments.length;
var i__5770__auto___15354 = (0);
while(true){
if((i__5770__auto___15354 < len__5769__auto___15353)){
args__5775__auto__.push((arguments[i__5770__auto___15354]));

var G__15355 = (i__5770__auto___15354 + (1));
i__5770__auto___15354 = G__15355;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop$macros.obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(applied_science.js_interop$macros.obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,keyvals){
var kvs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals);
if(cljs.core.every_QMARK_((function (p1__15186_SHARP_){
return (((p1__15186_SHARP_ instanceof cljs.core.Keyword)) || (((typeof p1__15186_SHARP_ === 'string') || (applied_science.js_interop$macros.dot_sym_QMARK_(p1__15186_SHARP_)))));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,kvs))){
return applied_science.js_interop$macros.literal_obj(kvs);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__5523__auto__ = (function applied_science$js_interop$macros$iter__15197(s__15198){
return (new cljs.core.LazySeq(null,(function (){
var s__15198__$1 = s__15198;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15198__$1);
if(temp__5804__auto__){
var s__15198__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15198__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__15198__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__15200 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__15199 = (0);
while(true){
if((i__15199 < size__5522__auto__)){
var vec__15201 = cljs.core._nth(c__5521__auto__,i__15199);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15201,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15201,(1),null);
cljs.core.chunk_append(b__15200,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))));

var G__15356 = (i__15199 + (1));
i__15199 = G__15356;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15200),applied_science$js_interop$macros$iter__15197(cljs.core.chunk_rest(s__15198__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15200),null);
}
} else {
var vec__15204 = cljs.core.first(s__15198__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15204,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15204,(1),null);
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))),applied_science$js_interop$macros$iter__15197(cljs.core.rest(s__15198__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(kvs);
})()], 0))));
}
}));

(applied_science.js_interop$macros.obj.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop$macros.obj.cljs$lang$applyTo = (function (seq15187){
var G__15188 = cljs.core.first(seq15187);
var seq15187__$1 = cljs.core.next(seq15187);
var G__15189 = cljs.core.first(seq15187__$1);
var seq15187__$2 = cljs.core.next(seq15187__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15188,G__15189,seq15187__$2);
}));

return null;
})()
;
(applied_science.js_interop$macros.obj.cljs$lang$macro = true);

applied_science.js_interop$macros.litval_STAR_ = (function applied_science$js_interop$macros$litval_STAR_(v){
if((v instanceof cljs.core.Keyword)){
var G__15207 = cljs.core.name(v);
if(cljs.core.truth_(cljs.core.namespace(v))){
return [cljs.core.namespace(v),"/",G__15207].join('');
} else {
return G__15207;
}
} else {
return v;
}
});
/**
 * Recursively converts literal Clojure maps/vectors into JavaScript object/array expressions
 * 
 *   Options map accepts a :keyfn for custom key conversions.
 */
applied_science.js_interop$macros.lit_STAR_ = (function applied_science$js_interop$macros$lit_STAR_(var_args){
var G__15212 = arguments.length;
switch (G__15212) {
case 1:
return applied_science.js_interop$macros.lit_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop$macros.lit_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop$macros.lit_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return applied_science.js_interop$macros.lit_STAR_.cljs$core$IFn$_invoke$arity$2(null,x);
}));

(applied_science.js_interop$macros.lit_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p__15213,x){
var map__15214 = p__15213;
var map__15214__$1 = cljs.core.__destructure_map(map__15214);
var opts = map__15214__$1;
var keyfn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15214__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.identity);
var valfn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15214__$1,new cljs.core.Keyword(null,"valfn","valfn",-1900691475),applied_science.js_interop$macros.litval_STAR_);
if(cljs.core.map_QMARK_(x)){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("applied-science.js-interop","obj","applied-science.js-interop/obj",-1164656258,null),cljs.core.reduce_kv((function (p1__15208_SHARP_,p2__15209_SHARP_,p3__15210_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(p1__15208_SHARP_,(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(p2__15209_SHARP_) : keyfn.call(null,p2__15209_SHARP_)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([applied_science.js_interop$macros.lit_STAR_.cljs$core$IFn$_invoke$arity$2(opts,p3__15210_SHARP_)], 0));
}),cljs.core.PersistentVector.EMPTY,x));
} else {
if(cljs.core.vector_QMARK_(x)){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop$macros.lit_STAR_,x));
} else {
return (valfn.cljs$core$IFn$_invoke$arity$1 ? valfn.cljs$core$IFn$_invoke$arity$1(x) : valfn.call(null,x));

}
}
}));

(applied_science.js_interop$macros.lit_STAR_.cljs$lang$maxFixedArity = 2);

var ret__5824__auto___15358 = /**
 * Recursively converts literal Clojure maps/vectors into JavaScript object/array expressions
 * (using j/obj and cljs.core/array)
 */
applied_science.js_interop$macros.lit = (function applied_science$js_interop$macros$lit(_AMPERSAND_form,_AMPERSAND_env,form){
return applied_science.js_interop$macros.lit_STAR_.cljs$core$IFn$_invoke$arity$1(form);
});
(applied_science.js_interop$macros.lit.cljs$lang$macro = true);

var ret__5824__auto___15359 = (function (){
/**
 * `let` with destructuring that supports js property and array access.
 * Use ^:js metadata on the binding form to invoke. Eg/
 * 
 * (let [^:js {:keys [a]} obj] …)
 */
applied_science.js_interop$macros.let$ = (function applied_science$js_interop$macros$let(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15360 = arguments.length;
var i__5770__auto___15361 = (0);
while(true){
if((i__5770__auto___15361 < len__5769__auto___15360)){
args__5775__auto__.push((arguments[i__5770__auto___15361]));

var G__15362 = (i__5770__auto___15361 + (1));
i__5770__auto___15361 = G__15362;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(applied_science.js_interop$macros.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.empty_QMARK_(bindings)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body)));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(applied_science.js_interop.destructure.destructure(cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),bindings))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","let","applied-science.js-interop/let",-142128647,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),bindings)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}
}));

(applied_science.js_interop$macros.let$.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop$macros.let$.cljs$lang$applyTo = (function (seq15215){
var G__15216 = cljs.core.first(seq15215);
var seq15215__$1 = cljs.core.next(seq15215);
var G__15217 = cljs.core.first(seq15215__$1);
var seq15215__$2 = cljs.core.next(seq15215__$1);
var G__15218 = cljs.core.first(seq15215__$2);
var seq15215__$3 = cljs.core.next(seq15215__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15216,G__15217,G__15218,seq15215__$3);
}));

return null;
})()
;
(applied_science.js_interop$macros.let$.cljs$lang$macro = true);

var ret__5824__auto___15363 = (function (){
/**
 * `fn` with argument destructuring that supports js property and array access.
 * Use ^:js metadata on binding forms to invoke. Eg/
 * 
 * (fn [^:js {:keys [a]}] …)
 */
applied_science.js_interop$macros.fn = (function applied_science$js_interop$macros$fn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15364 = arguments.length;
var i__5770__auto___15365 = (0);
while(true){
if((i__5770__auto___15365 < len__5769__auto___15364)){
args__5775__auto__.push((arguments[i__5770__auto___15365]));

var G__15366 = (i__5770__auto___15365 + (1));
i__5770__auto___15365 = G__15366;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(applied_science.js_interop$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.cons(new cljs.core.Symbol("clojure.core","fn","clojure.core/fn",-980152636,null),applied_science.js_interop.destructure.destructure_fn_args(args));
}));

(applied_science.js_interop$macros.fn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop$macros.fn.cljs$lang$applyTo = (function (seq15222){
var G__15223 = cljs.core.first(seq15222);
var seq15222__$1 = cljs.core.next(seq15222);
var G__15224 = cljs.core.first(seq15222__$1);
var seq15222__$2 = cljs.core.next(seq15222__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15223,G__15224,seq15222__$2);
}));

return null;
})()
;
(applied_science.js_interop$macros.fn.cljs$lang$macro = true);

var ret__5824__auto___15367 = (function (){
/**
 * `defn` with argument destructuring that supports js property and array access.
 * Use ^:js metadata on binding forms to invoke.
 */
applied_science.js_interop$macros.defn = (function applied_science$js_interop$macros$defn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15368 = arguments.length;
var i__5770__auto___15369 = (0);
while(true){
if((i__5770__auto___15369 < len__5769__auto___15368)){
args__5775__auto__.push((arguments[i__5770__auto___15369]));

var G__15370 = (i__5770__auto___15369 + (1));
i__5770__auto___15369 = G__15370;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop$macros.defn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(applied_science.js_interop$macros.defn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.cons(new cljs.core.Symbol("clojure.core","defn","clojure.core/defn",-1504648747,null),applied_science.js_interop.destructure.destructure_fn_args(args));
}));

(applied_science.js_interop$macros.defn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop$macros.defn.cljs$lang$applyTo = (function (seq15225){
var G__15226 = cljs.core.first(seq15225);
var seq15225__$1 = cljs.core.next(seq15225);
var G__15227 = cljs.core.first(seq15225__$1);
var seq15225__$2 = cljs.core.next(seq15225__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15226,G__15227,seq15225__$2);
}));

return null;
})()
;
(applied_science.js_interop$macros.defn.cljs$lang$macro = true);

