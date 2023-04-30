goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__25303 = libspec;
var seq__25304 = cljs.core.seq(vec__25303);
var first__25305 = cljs.core.first(seq__25304);
var seq__25304__$1 = cljs.core.next(seq__25304);
var lib = first__25305;
var spec = seq__25304__$1;
var libspec__$1 = vec__25303;
var vec__25306 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25306,(0),null);
var vec__25309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25306,(1),null);
var seq__25310 = cljs.core.seq(vec__25309);
var first__25311 = cljs.core.first(seq__25310);
var seq__25310__$1 = cljs.core.next(seq__25310);
var _ = first__25311;
var first__25311__$1 = cljs.core.first(seq__25310__$1);
var seq__25310__$2 = cljs.core.next(seq__25310__$1);
var alias = first__25311__$1;
var post_spec = seq__25310__$2;
var post = vec__25309;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));

var G__25318 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25318,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__25318;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__25323 = cljs.core.seq(new_as_aliases);
var chunk__25324 = null;
var count__25325 = (0);
var i__25326 = (0);
while(true){
if((i__25326 < count__25325)){
var vec__25340 = chunk__25324.cljs$core$IIndexed$_nth$arity$2(null,i__25326);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25340,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25340,(1),null);


var G__25373 = seq__25323;
var G__25374 = chunk__25324;
var G__25375 = count__25325;
var G__25376 = (i__25326 + (1));
seq__25323 = G__25373;
chunk__25324 = G__25374;
count__25325 = G__25375;
i__25326 = G__25376;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25323);
if(temp__5804__auto__){
var seq__25323__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25323__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__25323__$1);
var G__25377 = cljs.core.chunk_rest(seq__25323__$1);
var G__25378 = c__5568__auto__;
var G__25379 = cljs.core.count(c__5568__auto__);
var G__25380 = (0);
seq__25323 = G__25377;
chunk__25324 = G__25378;
count__25325 = G__25379;
i__25326 = G__25380;
continue;
} else {
var vec__25347 = cljs.core.first(seq__25323__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25347,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25347,(1),null);


var G__25381 = cljs.core.next(seq__25323__$1);
var G__25382 = null;
var G__25383 = (0);
var G__25384 = (0);
seq__25323 = G__25381;
chunk__25324 = G__25382;
count__25325 = G__25383;
i__25326 = G__25384;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__25351 = arguments.length;
switch (G__25351) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__25359 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__25359__$1 = cljs.core.__destructure_map(map__25359);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25359__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25359__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__25360 = ret__$1;
var G__25360__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__25360,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__25360);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__25360__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__25360__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__25361,p__25362){
var map__25363 = p__25361;
var map__25363__$1 = cljs.core.__destructure_map(map__25363);
var ret__$1 = map__25363__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25363__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__25364 = p__25362;
var seq__25365 = cljs.core.seq(vec__25364);
var first__25366 = cljs.core.first(seq__25365);
var seq__25365__$1 = cljs.core.next(seq__25365);
var spec_key = first__25366;
var libspecs = seq__25365__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__25367 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__25367__$1 = cljs.core.__destructure_map(map__25367);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25367__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25367__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__25368 = ret__$1;
var G__25368__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__25368,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__25368);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__25368__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__25368__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});
