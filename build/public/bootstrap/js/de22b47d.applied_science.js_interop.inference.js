goog.provide('applied_science.js_interop.inference');
applied_science.js_interop.inference.normalize_tag = (function applied_science$js_interop$inference$normalize_tag(tag){
if(cljs.core.set_QMARK_(tag)){
var tags = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(applied_science.js_interop.inference.normalize_tag),tag);
if(((1) <= cljs.core.count(tags))){
return cljs.core.first(tags);
} else {
return tags;
}
} else {
if(cljs.core.truth_(tag)){
var G__14559 = cljs.core.name(tag);
var G__14560 = tag;
var fexpr__14558 = new cljs.core.PersistentArrayMap(null, 3, ["Array",new cljs.core.Symbol(null,"array","array",-440182315,null),"String",new cljs.core.Symbol(null,"string","string",-349010059,null),"Keyword",new cljs.core.Symbol(null,"keyword","keyword",-1843046022,null)], null);
return (fexpr__14558.cljs$core$IFn$_invoke$arity$2 ? fexpr__14558.cljs$core$IFn$_invoke$arity$2(G__14559,G__14560) : fexpr__14558.call(null,G__14559,G__14560));
} else {
return null;
}
}
});
applied_science.js_interop.inference.as_set = (function applied_science$js_interop$inference$as_set(x){
if(cljs.core.set_QMARK_(x)){
return x;
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([x]);
}
});
applied_science.js_interop.inference.within_QMARK_ = (function applied_science$js_interop$inference$within_QMARK_(pred_tags,tags){
return clojure.set.superset_QMARK_(pred_tags,applied_science.js_interop.inference.as_set(tags));
});
/**
 * Infers type of expr
 */
applied_science.js_interop.inference.infer_tags = (function applied_science$js_interop$inference$infer_tags(env,expr){
return applied_science.js_interop.inference.normalize_tag(cljs.analyzer.infer_tag(env,(function (){var _STAR_cljs_warnings_STAR__orig_val__14561 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__14562 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"private-var-access","private-var-access",967536101),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"declared-arglists-mismatch","declared-arglists-mismatch",-496878383),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"protocol-with-overwriting-method","protocol-with-overwriting-method",319993011),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"non-dynamic-earmuffed-var","non-dynamic-earmuffed-var",-202005643),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__14562);

try{return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,expr);
}finally {(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__14561);
}})()));
});
applied_science.js_interop.inference.tag_in_QMARK_ = (function applied_science$js_interop$inference$tag_in_QMARK_(env,form,tags){
if(cljs.core.truth_(env)){
var G__14578 = applied_science.js_interop.inference.infer_tags(env,form);
if((G__14578 == null)){
return null;
} else {
return applied_science.js_interop.inference.within_QMARK_(tags,G__14578);
}
} else {
return null;
}
});
