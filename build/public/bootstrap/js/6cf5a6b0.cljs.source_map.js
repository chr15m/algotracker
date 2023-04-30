goog.provide('cljs.source_map');
goog.scope(function(){
  cljs.source_map.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__26619){
var vec__26620 = p__26619;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26620,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26620,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__26624 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26624,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26624,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26624,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26624,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26624,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(cljs.source_map.goog$module$goog$object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__5804__auto__)){
var name__$1 = temp__5804__auto__;
return (cljs.source_map.goog$module$goog$object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__26634 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26634,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26634,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26634,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26634,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26634,(4),null);
var vec__26637 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26637,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26637,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26637,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26637,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26637,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__5045__auto__ = col;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__5045__auto__ = name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__26646 = segmap;
var map__26646__$1 = cljs.core.__destructure_map(map__26646);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26646__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26646__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26646__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26646__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26646__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__26653 = arguments.length;
switch (G__26653) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(cljs.source_map.goog$module$goog$object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = cljs.source_map.goog$module$goog$object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__26664 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__28157 = cljs.core.next(segs__$1);
var G__28158 = nrelseg;
var G__28159 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__28157;
relseg__$1 = G__28158;
result__$1 = G__28159;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26664,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26664,(1),null);
var G__28160 = (gline + (1));
var G__28161 = cljs.core.next(lines__$1);
var G__28162 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__28163 = result__$1;
gline = G__28160;
lines__$1 = G__28161;
relseg = G__28162;
result = G__28163;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2);

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__26680 = segmap;
var map__26680__$1 = cljs.core.__destructure_map(map__26680);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26680__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26680__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26680__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26680__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26680__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__26675_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__26675_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__26683 = arguments.length;
switch (G__26683) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(cljs.source_map.goog$module$goog$object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = cljs.source_map.goog$module$goog$object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__26692 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__28174 = cljs.core.next(segs__$1);
var G__28175 = nrelseg;
var G__28176 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__28174;
relseg__$1 = G__28175;
result__$1 = G__28176;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26692,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26692,(1),null);
var G__28177 = (gline + (1));
var G__28178 = cljs.core.next(lines__$1);
var G__28179 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__28180 = result__$1;
gline = G__28177;
lines__$1 = G__28178;
relseg = G__28179;
result = G__28180;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode.cljs$lang$maxFixedArity = 2);

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__26700){
var vec__26702 = p__26700;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26702,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26702,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26702,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26702,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26702,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__26711){
var vec__26712 = p__26711;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26712,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26712,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26712,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26712,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26712,(4),null);
var seg = vec__26712;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__26718){
var vec__26721 = p__26718;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26721,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26721,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26721,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26721,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26721,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__5045__auto__ = name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return lname;
}
})()], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cols__$1,cljs.source_map.base64_vlq.encode(offset));
}),cljs.core.PersistentVector.EMPTY,cols));
}),cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5802__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5802__auto__)){
var name = temp__5802__auto__;
var idx = (function (){var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(names__GT_idx),name);
if(cljs.core.truth_(temp__5802__auto____$1)){
var idx = temp__5802__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref(name_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segv,idx);
} else {
return segv;
}
});
var encode_cols = (function (infos,source_idx,line,col){
var seq__26742 = cljs.core.seq(infos);
var chunk__26743 = null;
var count__26744 = (0);
var i__26745 = (0);
while(true){
if((i__26745 < count__26744)){
var info = chunk__26743.cljs$core$IIndexed$_nth$arity$2(null,i__26745);
var segv_28190 = info__GT_segv(info,source_idx,line,col);
var gline_28191 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_28192 = cljs.core.count(cljs.core.deref(lines));
if((gline_28191 > (lc_28192 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__26742,chunk__26743,count__26744,i__26745,segv_28190,gline_28191,lc_28192,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_28191 - (lc_28192 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_28190], null));
});})(seq__26742,chunk__26743,count__26744,i__26745,segv_28190,gline_28191,lc_28192,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__26742,chunk__26743,count__26744,i__26745,segv_28190,gline_28191,lc_28192,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28191], null),cljs.core.conj,segv_28190);
});})(seq__26742,chunk__26743,count__26744,i__26745,segv_28190,gline_28191,lc_28192,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__28198 = seq__26742;
var G__28199 = chunk__26743;
var G__28200 = count__26744;
var G__28201 = (i__26745 + (1));
seq__26742 = G__28198;
chunk__26743 = G__28199;
count__26744 = G__28200;
i__26745 = G__28201;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26742);
if(temp__5804__auto__){
var seq__26742__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26742__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26742__$1);
var G__28202 = cljs.core.chunk_rest(seq__26742__$1);
var G__28203 = c__5568__auto__;
var G__28204 = cljs.core.count(c__5568__auto__);
var G__28205 = (0);
seq__26742 = G__28202;
chunk__26743 = G__28203;
count__26744 = G__28204;
i__26745 = G__28205;
continue;
} else {
var info = cljs.core.first(seq__26742__$1);
var segv_28206 = info__GT_segv(info,source_idx,line,col);
var gline_28207 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_28208 = cljs.core.count(cljs.core.deref(lines));
if((gline_28207 > (lc_28208 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__26742,chunk__26743,count__26744,i__26745,segv_28206,gline_28207,lc_28208,info,seq__26742__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_28207 - (lc_28208 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_28206], null));
});})(seq__26742,chunk__26743,count__26744,i__26745,segv_28206,gline_28207,lc_28208,info,seq__26742__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__26742,chunk__26743,count__26744,i__26745,segv_28206,gline_28207,lc_28208,info,seq__26742__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28207], null),cljs.core.conj,segv_28206);
});})(seq__26742,chunk__26743,count__26744,i__26745,segv_28206,gline_28207,lc_28208,info,seq__26742__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__28212 = cljs.core.next(seq__26742__$1);
var G__28213 = null;
var G__28214 = (0);
var G__28215 = (0);
seq__26742 = G__28212;
chunk__26743 = G__28213;
count__26744 = G__28214;
i__26745 = G__28215;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__26791_28216 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__26792_28217 = null;
var count__26793_28218 = (0);
var i__26794_28219 = (0);
while(true){
if((i__26794_28219 < count__26793_28218)){
var vec__27088_28220 = chunk__26792_28217.cljs$core$IIndexed$_nth$arity$2(null,i__26794_28219);
var source_idx_28221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27088_28220,(0),null);
var vec__27091_28222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27088_28220,(1),null);
var __28223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27091_28222,(0),null);
var lines_28224__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27091_28222,(1),null);
var seq__27095_28225 = cljs.core.seq(lines_28224__$1);
var chunk__27096_28226 = null;
var count__27097_28227 = (0);
var i__27098_28228 = (0);
while(true){
if((i__27098_28228 < count__27097_28227)){
var vec__27160_28230 = chunk__27096_28226.cljs$core$IIndexed$_nth$arity$2(null,i__27098_28228);
var line_28231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27160_28230,(0),null);
var cols_28232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27160_28230,(1),null);
var seq__27163_28234 = cljs.core.seq(cols_28232);
var chunk__27164_28235 = null;
var count__27165_28236 = (0);
var i__27166_28237 = (0);
while(true){
if((i__27166_28237 < count__27165_28236)){
var vec__27173_28241 = chunk__27164_28235.cljs$core$IIndexed$_nth$arity$2(null,i__27166_28237);
var col_28242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27173_28241,(0),null);
var infos_28243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27173_28241,(1),null);
encode_cols(infos_28243,source_idx_28221,line_28231,col_28242);


var G__28245 = seq__27163_28234;
var G__28246 = chunk__27164_28235;
var G__28247 = count__27165_28236;
var G__28248 = (i__27166_28237 + (1));
seq__27163_28234 = G__28245;
chunk__27164_28235 = G__28246;
count__27165_28236 = G__28247;
i__27166_28237 = G__28248;
continue;
} else {
var temp__5804__auto___28249 = cljs.core.seq(seq__27163_28234);
if(temp__5804__auto___28249){
var seq__27163_28250__$1 = temp__5804__auto___28249;
if(cljs.core.chunked_seq_QMARK_(seq__27163_28250__$1)){
var c__5568__auto___28251 = cljs.core.chunk_first(seq__27163_28250__$1);
var G__28252 = cljs.core.chunk_rest(seq__27163_28250__$1);
var G__28253 = c__5568__auto___28251;
var G__28254 = cljs.core.count(c__5568__auto___28251);
var G__28255 = (0);
seq__27163_28234 = G__28252;
chunk__27164_28235 = G__28253;
count__27165_28236 = G__28254;
i__27166_28237 = G__28255;
continue;
} else {
var vec__27178_28256 = cljs.core.first(seq__27163_28250__$1);
var col_28257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27178_28256,(0),null);
var infos_28258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27178_28256,(1),null);
encode_cols(infos_28258,source_idx_28221,line_28231,col_28257);


var G__28259 = cljs.core.next(seq__27163_28250__$1);
var G__28260 = null;
var G__28261 = (0);
var G__28262 = (0);
seq__27163_28234 = G__28259;
chunk__27164_28235 = G__28260;
count__27165_28236 = G__28261;
i__27166_28237 = G__28262;
continue;
}
} else {
}
}
break;
}


var G__28263 = seq__27095_28225;
var G__28264 = chunk__27096_28226;
var G__28265 = count__27097_28227;
var G__28266 = (i__27098_28228 + (1));
seq__27095_28225 = G__28263;
chunk__27096_28226 = G__28264;
count__27097_28227 = G__28265;
i__27098_28228 = G__28266;
continue;
} else {
var temp__5804__auto___28268 = cljs.core.seq(seq__27095_28225);
if(temp__5804__auto___28268){
var seq__27095_28269__$1 = temp__5804__auto___28268;
if(cljs.core.chunked_seq_QMARK_(seq__27095_28269__$1)){
var c__5568__auto___28270 = cljs.core.chunk_first(seq__27095_28269__$1);
var G__28271 = cljs.core.chunk_rest(seq__27095_28269__$1);
var G__28272 = c__5568__auto___28270;
var G__28273 = cljs.core.count(c__5568__auto___28270);
var G__28274 = (0);
seq__27095_28225 = G__28271;
chunk__27096_28226 = G__28272;
count__27097_28227 = G__28273;
i__27098_28228 = G__28274;
continue;
} else {
var vec__27182_28275 = cljs.core.first(seq__27095_28269__$1);
var line_28276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27182_28275,(0),null);
var cols_28277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27182_28275,(1),null);
var seq__27185_28278 = cljs.core.seq(cols_28277);
var chunk__27186_28279 = null;
var count__27187_28280 = (0);
var i__27188_28281 = (0);
while(true){
if((i__27188_28281 < count__27187_28280)){
var vec__27201_28284 = chunk__27186_28279.cljs$core$IIndexed$_nth$arity$2(null,i__27188_28281);
var col_28285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27201_28284,(0),null);
var infos_28286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27201_28284,(1),null);
encode_cols(infos_28286,source_idx_28221,line_28276,col_28285);


var G__28287 = seq__27185_28278;
var G__28288 = chunk__27186_28279;
var G__28289 = count__27187_28280;
var G__28290 = (i__27188_28281 + (1));
seq__27185_28278 = G__28287;
chunk__27186_28279 = G__28288;
count__27187_28280 = G__28289;
i__27188_28281 = G__28290;
continue;
} else {
var temp__5804__auto___28291__$1 = cljs.core.seq(seq__27185_28278);
if(temp__5804__auto___28291__$1){
var seq__27185_28292__$1 = temp__5804__auto___28291__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27185_28292__$1)){
var c__5568__auto___28293 = cljs.core.chunk_first(seq__27185_28292__$1);
var G__28294 = cljs.core.chunk_rest(seq__27185_28292__$1);
var G__28295 = c__5568__auto___28293;
var G__28296 = cljs.core.count(c__5568__auto___28293);
var G__28297 = (0);
seq__27185_28278 = G__28294;
chunk__27186_28279 = G__28295;
count__27187_28280 = G__28296;
i__27188_28281 = G__28297;
continue;
} else {
var vec__27215_28298 = cljs.core.first(seq__27185_28292__$1);
var col_28299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27215_28298,(0),null);
var infos_28300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27215_28298,(1),null);
encode_cols(infos_28300,source_idx_28221,line_28276,col_28299);


var G__28301 = cljs.core.next(seq__27185_28292__$1);
var G__28302 = null;
var G__28303 = (0);
var G__28304 = (0);
seq__27185_28278 = G__28301;
chunk__27186_28279 = G__28302;
count__27187_28280 = G__28303;
i__27188_28281 = G__28304;
continue;
}
} else {
}
}
break;
}


var G__28305 = cljs.core.next(seq__27095_28269__$1);
var G__28306 = null;
var G__28307 = (0);
var G__28308 = (0);
seq__27095_28225 = G__28305;
chunk__27096_28226 = G__28306;
count__27097_28227 = G__28307;
i__27098_28228 = G__28308;
continue;
}
} else {
}
}
break;
}


var G__28309 = seq__26791_28216;
var G__28310 = chunk__26792_28217;
var G__28311 = count__26793_28218;
var G__28312 = (i__26794_28219 + (1));
seq__26791_28216 = G__28309;
chunk__26792_28217 = G__28310;
count__26793_28218 = G__28311;
i__26794_28219 = G__28312;
continue;
} else {
var temp__5804__auto___28313 = cljs.core.seq(seq__26791_28216);
if(temp__5804__auto___28313){
var seq__26791_28314__$1 = temp__5804__auto___28313;
if(cljs.core.chunked_seq_QMARK_(seq__26791_28314__$1)){
var c__5568__auto___28316 = cljs.core.chunk_first(seq__26791_28314__$1);
var G__28317 = cljs.core.chunk_rest(seq__26791_28314__$1);
var G__28318 = c__5568__auto___28316;
var G__28319 = cljs.core.count(c__5568__auto___28316);
var G__28320 = (0);
seq__26791_28216 = G__28317;
chunk__26792_28217 = G__28318;
count__26793_28218 = G__28319;
i__26794_28219 = G__28320;
continue;
} else {
var vec__27218_28321 = cljs.core.first(seq__26791_28314__$1);
var source_idx_28322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27218_28321,(0),null);
var vec__27221_28323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27218_28321,(1),null);
var __28324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27221_28323,(0),null);
var lines_28325__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27221_28323,(1),null);
var seq__27224_28326 = cljs.core.seq(lines_28325__$1);
var chunk__27225_28327 = null;
var count__27226_28328 = (0);
var i__27227_28329 = (0);
while(true){
if((i__27227_28329 < count__27226_28328)){
var vec__27295_28332 = chunk__27225_28327.cljs$core$IIndexed$_nth$arity$2(null,i__27227_28329);
var line_28333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27295_28332,(0),null);
var cols_28334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27295_28332,(1),null);
var seq__27298_28335 = cljs.core.seq(cols_28334);
var chunk__27299_28336 = null;
var count__27300_28337 = (0);
var i__27301_28338 = (0);
while(true){
if((i__27301_28338 < count__27300_28337)){
var vec__27334_28339 = chunk__27299_28336.cljs$core$IIndexed$_nth$arity$2(null,i__27301_28338);
var col_28340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27334_28339,(0),null);
var infos_28341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27334_28339,(1),null);
encode_cols(infos_28341,source_idx_28322,line_28333,col_28340);


var G__28342 = seq__27298_28335;
var G__28343 = chunk__27299_28336;
var G__28344 = count__27300_28337;
var G__28345 = (i__27301_28338 + (1));
seq__27298_28335 = G__28342;
chunk__27299_28336 = G__28343;
count__27300_28337 = G__28344;
i__27301_28338 = G__28345;
continue;
} else {
var temp__5804__auto___28346__$1 = cljs.core.seq(seq__27298_28335);
if(temp__5804__auto___28346__$1){
var seq__27298_28347__$1 = temp__5804__auto___28346__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27298_28347__$1)){
var c__5568__auto___28348 = cljs.core.chunk_first(seq__27298_28347__$1);
var G__28349 = cljs.core.chunk_rest(seq__27298_28347__$1);
var G__28350 = c__5568__auto___28348;
var G__28351 = cljs.core.count(c__5568__auto___28348);
var G__28352 = (0);
seq__27298_28335 = G__28349;
chunk__27299_28336 = G__28350;
count__27300_28337 = G__28351;
i__27301_28338 = G__28352;
continue;
} else {
var vec__27346_28353 = cljs.core.first(seq__27298_28347__$1);
var col_28354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27346_28353,(0),null);
var infos_28355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27346_28353,(1),null);
encode_cols(infos_28355,source_idx_28322,line_28333,col_28354);


var G__28357 = cljs.core.next(seq__27298_28347__$1);
var G__28358 = null;
var G__28359 = (0);
var G__28360 = (0);
seq__27298_28335 = G__28357;
chunk__27299_28336 = G__28358;
count__27300_28337 = G__28359;
i__27301_28338 = G__28360;
continue;
}
} else {
}
}
break;
}


var G__28361 = seq__27224_28326;
var G__28362 = chunk__27225_28327;
var G__28363 = count__27226_28328;
var G__28364 = (i__27227_28329 + (1));
seq__27224_28326 = G__28361;
chunk__27225_28327 = G__28362;
count__27226_28328 = G__28363;
i__27227_28329 = G__28364;
continue;
} else {
var temp__5804__auto___28365__$1 = cljs.core.seq(seq__27224_28326);
if(temp__5804__auto___28365__$1){
var seq__27224_28366__$1 = temp__5804__auto___28365__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27224_28366__$1)){
var c__5568__auto___28367 = cljs.core.chunk_first(seq__27224_28366__$1);
var G__28368 = cljs.core.chunk_rest(seq__27224_28366__$1);
var G__28369 = c__5568__auto___28367;
var G__28370 = cljs.core.count(c__5568__auto___28367);
var G__28371 = (0);
seq__27224_28326 = G__28368;
chunk__27225_28327 = G__28369;
count__27226_28328 = G__28370;
i__27227_28329 = G__28371;
continue;
} else {
var vec__27357_28372 = cljs.core.first(seq__27224_28366__$1);
var line_28373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27357_28372,(0),null);
var cols_28374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27357_28372,(1),null);
var seq__27361_28376 = cljs.core.seq(cols_28374);
var chunk__27362_28377 = null;
var count__27363_28378 = (0);
var i__27364_28379 = (0);
while(true){
if((i__27364_28379 < count__27363_28378)){
var vec__27392_28383 = chunk__27362_28377.cljs$core$IIndexed$_nth$arity$2(null,i__27364_28379);
var col_28384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27392_28383,(0),null);
var infos_28385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27392_28383,(1),null);
encode_cols(infos_28385,source_idx_28322,line_28373,col_28384);


var G__28386 = seq__27361_28376;
var G__28387 = chunk__27362_28377;
var G__28388 = count__27363_28378;
var G__28389 = (i__27364_28379 + (1));
seq__27361_28376 = G__28386;
chunk__27362_28377 = G__28387;
count__27363_28378 = G__28388;
i__27364_28379 = G__28389;
continue;
} else {
var temp__5804__auto___28390__$2 = cljs.core.seq(seq__27361_28376);
if(temp__5804__auto___28390__$2){
var seq__27361_28391__$1 = temp__5804__auto___28390__$2;
if(cljs.core.chunked_seq_QMARK_(seq__27361_28391__$1)){
var c__5568__auto___28392 = cljs.core.chunk_first(seq__27361_28391__$1);
var G__28393 = cljs.core.chunk_rest(seq__27361_28391__$1);
var G__28394 = c__5568__auto___28392;
var G__28395 = cljs.core.count(c__5568__auto___28392);
var G__28396 = (0);
seq__27361_28376 = G__28393;
chunk__27362_28377 = G__28394;
count__27363_28378 = G__28395;
i__27364_28379 = G__28396;
continue;
} else {
var vec__27411_28397 = cljs.core.first(seq__27361_28391__$1);
var col_28398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27411_28397,(0),null);
var infos_28399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27411_28397,(1),null);
encode_cols(infos_28399,source_idx_28322,line_28373,col_28398);


var G__28400 = cljs.core.next(seq__27361_28391__$1);
var G__28401 = null;
var G__28402 = (0);
var G__28403 = (0);
seq__27361_28376 = G__28400;
chunk__27362_28377 = G__28401;
count__27363_28378 = G__28402;
i__27364_28379 = G__28403;
continue;
}
} else {
}
}
break;
}


var G__28405 = cljs.core.next(seq__27224_28366__$1);
var G__28406 = null;
var G__28407 = (0);
var G__28408 = (0);
seq__27224_28326 = G__28405;
chunk__27225_28327 = G__28406;
count__27226_28328 = G__28407;
i__27227_28329 = G__28408;
continue;
}
} else {
}
}
break;
}


var G__28409 = cljs.core.next(seq__26791_28314__$1);
var G__28410 = null;
var G__28411 = (0);
var G__28412 = (0);
seq__26791_28216 = G__28409;
chunk__26792_28217 = G__28410;
count__26793_28218 = G__28411;
i__26794_28219 = G__28412;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__27421 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__26729_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26729_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__26730_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__26730_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26732_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__26732_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__27438 = G__27421;
cljs.source_map.goog$module$goog$object.set(G__27438,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__27438;
} else {
return G__27421;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__27454 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27454,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27454,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__27457 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27457,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27457,(1),null);
var G__28435 = cljs.core.next(col_map_seq);
var G__28436 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__27457,col,infos,vec__27454,line,col_map){
return (function (v,p__27463){
var map__27465 = p__27463;
var map__27465__$1 = cljs.core.__destructure_map(map__27465);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27465__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27465__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__27457,col,infos,vec__27454,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__28435;
new_cols = G__28436;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__28447 = cljs.core.next(line_map_seq);
var G__28448 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__28447;
new_lines = G__28448;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map());
var seq__27474_28449 = cljs.core.seq(reverse_map);
var chunk__27475_28450 = null;
var count__27476_28451 = (0);
var i__27477_28452 = (0);
while(true){
if((i__27477_28452 < count__27476_28451)){
var vec__27885_28453 = chunk__27475_28450.cljs$core$IIndexed$_nth$arity$2(null,i__27477_28452);
var line_28454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27885_28453,(0),null);
var columns_28455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27885_28453,(1),null);
var seq__27888_28456 = cljs.core.seq(columns_28455);
var chunk__27889_28457 = null;
var count__27890_28458 = (0);
var i__27891_28459 = (0);
while(true){
if((i__27891_28459 < count__27890_28458)){
var vec__27940_28465 = chunk__27889_28457.cljs$core$IIndexed$_nth$arity$2(null,i__27891_28459);
var column_28466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27940_28465,(0),null);
var column_info_28467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27940_28465,(1),null);
var seq__27943_28474 = cljs.core.seq(column_info_28467);
var chunk__27944_28475 = null;
var count__27945_28476 = (0);
var i__27946_28477 = (0);
while(true){
if((i__27946_28477 < count__27945_28476)){
var map__27954_28481 = chunk__27944_28475.cljs$core$IIndexed$_nth$arity$2(null,i__27946_28477);
var map__27954_28482__$1 = cljs.core.__destructure_map(map__27954_28481);
var gline_28483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27954_28482__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27954_28482__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27954_28482__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28483], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__27943_28474,chunk__27944_28475,count__27945_28476,i__27946_28477,seq__27888_28456,chunk__27889_28457,count__27890_28458,i__27891_28459,seq__27474_28449,chunk__27475_28450,count__27476_28451,i__27477_28452,map__27954_28481,map__27954_28482__$1,gline_28483,gcol_28484,name_28485,vec__27940_28465,column_28466,column_info_28467,vec__27885_28453,line_28454,columns_28455,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28484], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28454,new cljs.core.Keyword(null,"col","col",-1959363084),column_28466,new cljs.core.Keyword(null,"name","name",1843675177),name_28485], null));
});})(seq__27943_28474,chunk__27944_28475,count__27945_28476,i__27946_28477,seq__27888_28456,chunk__27889_28457,count__27890_28458,i__27891_28459,seq__27474_28449,chunk__27475_28450,count__27476_28451,i__27477_28452,map__27954_28481,map__27954_28482__$1,gline_28483,gcol_28484,name_28485,vec__27940_28465,column_28466,column_info_28467,vec__27885_28453,line_28454,columns_28455,inverted))
,cljs.core.sorted_map()));


var G__28514 = seq__27943_28474;
var G__28515 = chunk__27944_28475;
var G__28516 = count__27945_28476;
var G__28517 = (i__27946_28477 + (1));
seq__27943_28474 = G__28514;
chunk__27944_28475 = G__28515;
count__27945_28476 = G__28516;
i__27946_28477 = G__28517;
continue;
} else {
var temp__5804__auto___28518 = cljs.core.seq(seq__27943_28474);
if(temp__5804__auto___28518){
var seq__27943_28519__$1 = temp__5804__auto___28518;
if(cljs.core.chunked_seq_QMARK_(seq__27943_28519__$1)){
var c__5568__auto___28520 = cljs.core.chunk_first(seq__27943_28519__$1);
var G__28522 = cljs.core.chunk_rest(seq__27943_28519__$1);
var G__28523 = c__5568__auto___28520;
var G__28524 = cljs.core.count(c__5568__auto___28520);
var G__28525 = (0);
seq__27943_28474 = G__28522;
chunk__27944_28475 = G__28523;
count__27945_28476 = G__28524;
i__27946_28477 = G__28525;
continue;
} else {
var map__27963_28526 = cljs.core.first(seq__27943_28519__$1);
var map__27963_28527__$1 = cljs.core.__destructure_map(map__27963_28526);
var gline_28528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27963_28527__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27963_28527__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27963_28527__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28528], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__27943_28474,chunk__27944_28475,count__27945_28476,i__27946_28477,seq__27888_28456,chunk__27889_28457,count__27890_28458,i__27891_28459,seq__27474_28449,chunk__27475_28450,count__27476_28451,i__27477_28452,map__27963_28526,map__27963_28527__$1,gline_28528,gcol_28529,name_28530,seq__27943_28519__$1,temp__5804__auto___28518,vec__27940_28465,column_28466,column_info_28467,vec__27885_28453,line_28454,columns_28455,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28529], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28454,new cljs.core.Keyword(null,"col","col",-1959363084),column_28466,new cljs.core.Keyword(null,"name","name",1843675177),name_28530], null));
});})(seq__27943_28474,chunk__27944_28475,count__27945_28476,i__27946_28477,seq__27888_28456,chunk__27889_28457,count__27890_28458,i__27891_28459,seq__27474_28449,chunk__27475_28450,count__27476_28451,i__27477_28452,map__27963_28526,map__27963_28527__$1,gline_28528,gcol_28529,name_28530,seq__27943_28519__$1,temp__5804__auto___28518,vec__27940_28465,column_28466,column_info_28467,vec__27885_28453,line_28454,columns_28455,inverted))
,cljs.core.sorted_map()));


var G__28543 = cljs.core.next(seq__27943_28519__$1);
var G__28544 = null;
var G__28545 = (0);
var G__28546 = (0);
seq__27943_28474 = G__28543;
chunk__27944_28475 = G__28544;
count__27945_28476 = G__28545;
i__27946_28477 = G__28546;
continue;
}
} else {
}
}
break;
}


var G__28547 = seq__27888_28456;
var G__28549 = chunk__27889_28457;
var G__28550 = count__27890_28458;
var G__28552 = (i__27891_28459 + (1));
seq__27888_28456 = G__28547;
chunk__27889_28457 = G__28549;
count__27890_28458 = G__28550;
i__27891_28459 = G__28552;
continue;
} else {
var temp__5804__auto___28556 = cljs.core.seq(seq__27888_28456);
if(temp__5804__auto___28556){
var seq__27888_28558__$1 = temp__5804__auto___28556;
if(cljs.core.chunked_seq_QMARK_(seq__27888_28558__$1)){
var c__5568__auto___28560 = cljs.core.chunk_first(seq__27888_28558__$1);
var G__28562 = cljs.core.chunk_rest(seq__27888_28558__$1);
var G__28564 = c__5568__auto___28560;
var G__28566 = cljs.core.count(c__5568__auto___28560);
var G__28568 = (0);
seq__27888_28456 = G__28562;
chunk__27889_28457 = G__28564;
count__27890_28458 = G__28566;
i__27891_28459 = G__28568;
continue;
} else {
var vec__27974_28570 = cljs.core.first(seq__27888_28558__$1);
var column_28572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27974_28570,(0),null);
var column_info_28574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27974_28570,(1),null);
var seq__27977_28575 = cljs.core.seq(column_info_28574);
var chunk__27978_28576 = null;
var count__27979_28577 = (0);
var i__27980_28578 = (0);
while(true){
if((i__27980_28578 < count__27979_28577)){
var map__27998_28579 = chunk__27978_28576.cljs$core$IIndexed$_nth$arity$2(null,i__27980_28578);
var map__27998_28580__$1 = cljs.core.__destructure_map(map__27998_28579);
var gline_28581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27998_28580__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27998_28580__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27998_28580__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28581], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__27977_28575,chunk__27978_28576,count__27979_28577,i__27980_28578,seq__27888_28456,chunk__27889_28457,count__27890_28458,i__27891_28459,seq__27474_28449,chunk__27475_28450,count__27476_28451,i__27477_28452,map__27998_28579,map__27998_28580__$1,gline_28581,gcol_28582,name_28583,vec__27974_28570,column_28572,column_info_28574,seq__27888_28558__$1,temp__5804__auto___28556,vec__27885_28453,line_28454,columns_28455,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28582], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28454,new cljs.core.Keyword(null,"col","col",-1959363084),column_28572,new cljs.core.Keyword(null,"name","name",1843675177),name_28583], null));
});})(seq__27977_28575,chunk__27978_28576,count__27979_28577,i__27980_28578,seq__27888_28456,chunk__27889_28457,count__27890_28458,i__27891_28459,seq__27474_28449,chunk__27475_28450,count__27476_28451,i__27477_28452,map__27998_28579,map__27998_28580__$1,gline_28581,gcol_28582,name_28583,vec__27974_28570,column_28572,column_info_28574,seq__27888_28558__$1,temp__5804__auto___28556,vec__27885_28453,line_28454,columns_28455,inverted))
,cljs.core.sorted_map()));


var G__28603 = seq__27977_28575;
var G__28604 = chunk__27978_28576;
var G__28605 = count__27979_28577;
var G__28606 = (i__27980_28578 + (1));
seq__27977_28575 = G__28603;
chunk__27978_28576 = G__28604;
count__27979_28577 = G__28605;
i__27980_28578 = G__28606;
continue;
} else {
var temp__5804__auto___28608__$1 = cljs.core.seq(seq__27977_28575);
if(temp__5804__auto___28608__$1){
var seq__27977_28610__$1 = temp__5804__auto___28608__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27977_28610__$1)){
var c__5568__auto___28611 = cljs.core.chunk_first(seq__27977_28610__$1);
var G__28612 = cljs.core.chunk_rest(seq__27977_28610__$1);
var G__28613 = c__5568__auto___28611;
var G__28614 = cljs.core.count(c__5568__auto___28611);
var G__28615 = (0);
seq__27977_28575 = G__28612;
chunk__27978_28576 = G__28613;
count__27979_28577 = G__28614;
i__27980_28578 = G__28615;
continue;
} else {
var map__28001_28616 = cljs.core.first(seq__27977_28610__$1);
var map__28001_28617__$1 = cljs.core.__destructure_map(map__28001_28616);
var gline_28618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28001_28617__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28001_28617__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28001_28617__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28618], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__27977_28575,chunk__27978_28576,count__27979_28577,i__27980_28578,seq__27888_28456,chunk__27889_28457,count__27890_28458,i__27891_28459,seq__27474_28449,chunk__27475_28450,count__27476_28451,i__27477_28452,map__28001_28616,map__28001_28617__$1,gline_28618,gcol_28619,name_28620,seq__27977_28610__$1,temp__5804__auto___28608__$1,vec__27974_28570,column_28572,column_info_28574,seq__27888_28558__$1,temp__5804__auto___28556,vec__27885_28453,line_28454,columns_28455,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28619], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28454,new cljs.core.Keyword(null,"col","col",-1959363084),column_28572,new cljs.core.Keyword(null,"name","name",1843675177),name_28620], null));
});})(seq__27977_28575,chunk__27978_28576,count__27979_28577,i__27980_28578,seq__27888_28456,chunk__27889_28457,count__27890_28458,i__27891_28459,seq__27474_28449,chunk__27475_28450,count__27476_28451,i__27477_28452,map__28001_28616,map__28001_28617__$1,gline_28618,gcol_28619,name_28620,seq__27977_28610__$1,temp__5804__auto___28608__$1,vec__27974_28570,column_28572,column_info_28574,seq__27888_28558__$1,temp__5804__auto___28556,vec__27885_28453,line_28454,columns_28455,inverted))
,cljs.core.sorted_map()));


var G__28627 = cljs.core.next(seq__27977_28610__$1);
var G__28628 = null;
var G__28629 = (0);
var G__28630 = (0);
seq__27977_28575 = G__28627;
chunk__27978_28576 = G__28628;
count__27979_28577 = G__28629;
i__27980_28578 = G__28630;
continue;
}
} else {
}
}
break;
}


var G__28631 = cljs.core.next(seq__27888_28558__$1);
var G__28632 = null;
var G__28633 = (0);
var G__28634 = (0);
seq__27888_28456 = G__28631;
chunk__27889_28457 = G__28632;
count__27890_28458 = G__28633;
i__27891_28459 = G__28634;
continue;
}
} else {
}
}
break;
}


var G__28635 = seq__27474_28449;
var G__28636 = chunk__27475_28450;
var G__28637 = count__27476_28451;
var G__28638 = (i__27477_28452 + (1));
seq__27474_28449 = G__28635;
chunk__27475_28450 = G__28636;
count__27476_28451 = G__28637;
i__27477_28452 = G__28638;
continue;
} else {
var temp__5804__auto___28640 = cljs.core.seq(seq__27474_28449);
if(temp__5804__auto___28640){
var seq__27474_28641__$1 = temp__5804__auto___28640;
if(cljs.core.chunked_seq_QMARK_(seq__27474_28641__$1)){
var c__5568__auto___28642 = cljs.core.chunk_first(seq__27474_28641__$1);
var G__28643 = cljs.core.chunk_rest(seq__27474_28641__$1);
var G__28644 = c__5568__auto___28642;
var G__28645 = cljs.core.count(c__5568__auto___28642);
var G__28646 = (0);
seq__27474_28449 = G__28643;
chunk__27475_28450 = G__28644;
count__27476_28451 = G__28645;
i__27477_28452 = G__28646;
continue;
} else {
var vec__28010_28647 = cljs.core.first(seq__27474_28641__$1);
var line_28648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28010_28647,(0),null);
var columns_28649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28010_28647,(1),null);
var seq__28013_28653 = cljs.core.seq(columns_28649);
var chunk__28014_28654 = null;
var count__28015_28655 = (0);
var i__28016_28656 = (0);
while(true){
if((i__28016_28656 < count__28015_28655)){
var vec__28066_28657 = chunk__28014_28654.cljs$core$IIndexed$_nth$arity$2(null,i__28016_28656);
var column_28658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28066_28657,(0),null);
var column_info_28659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28066_28657,(1),null);
var seq__28071_28660 = cljs.core.seq(column_info_28659);
var chunk__28072_28661 = null;
var count__28073_28662 = (0);
var i__28074_28663 = (0);
while(true){
if((i__28074_28663 < count__28073_28662)){
var map__28084_28664 = chunk__28072_28661.cljs$core$IIndexed$_nth$arity$2(null,i__28074_28663);
var map__28084_28665__$1 = cljs.core.__destructure_map(map__28084_28664);
var gline_28666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28084_28665__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28667 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28084_28665__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28668 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28084_28665__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28666], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__28071_28660,chunk__28072_28661,count__28073_28662,i__28074_28663,seq__28013_28653,chunk__28014_28654,count__28015_28655,i__28016_28656,seq__27474_28449,chunk__27475_28450,count__27476_28451,i__27477_28452,map__28084_28664,map__28084_28665__$1,gline_28666,gcol_28667,name_28668,vec__28066_28657,column_28658,column_info_28659,vec__28010_28647,line_28648,columns_28649,seq__27474_28641__$1,temp__5804__auto___28640,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28667], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28648,new cljs.core.Keyword(null,"col","col",-1959363084),column_28658,new cljs.core.Keyword(null,"name","name",1843675177),name_28668], null));
});})(seq__28071_28660,chunk__28072_28661,count__28073_28662,i__28074_28663,seq__28013_28653,chunk__28014_28654,count__28015_28655,i__28016_28656,seq__27474_28449,chunk__27475_28450,count__27476_28451,i__27477_28452,map__28084_28664,map__28084_28665__$1,gline_28666,gcol_28667,name_28668,vec__28066_28657,column_28658,column_info_28659,vec__28010_28647,line_28648,columns_28649,seq__27474_28641__$1,temp__5804__auto___28640,inverted))
,cljs.core.sorted_map()));


var G__28674 = seq__28071_28660;
var G__28675 = chunk__28072_28661;
var G__28676 = count__28073_28662;
var G__28677 = (i__28074_28663 + (1));
seq__28071_28660 = G__28674;
chunk__28072_28661 = G__28675;
count__28073_28662 = G__28676;
i__28074_28663 = G__28677;
continue;
} else {
var temp__5804__auto___28679__$1 = cljs.core.seq(seq__28071_28660);
if(temp__5804__auto___28679__$1){
var seq__28071_28680__$1 = temp__5804__auto___28679__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28071_28680__$1)){
var c__5568__auto___28681 = cljs.core.chunk_first(seq__28071_28680__$1);
var G__28683 = cljs.core.chunk_rest(seq__28071_28680__$1);
var G__28684 = c__5568__auto___28681;
var G__28685 = cljs.core.count(c__5568__auto___28681);
var G__28686 = (0);
seq__28071_28660 = G__28683;
chunk__28072_28661 = G__28684;
count__28073_28662 = G__28685;
i__28074_28663 = G__28686;
continue;
} else {
var map__28085_28687 = cljs.core.first(seq__28071_28680__$1);
var map__28085_28688__$1 = cljs.core.__destructure_map(map__28085_28687);
var gline_28689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28085_28688__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28085_28688__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28085_28688__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28689], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__28071_28660,chunk__28072_28661,count__28073_28662,i__28074_28663,seq__28013_28653,chunk__28014_28654,count__28015_28655,i__28016_28656,seq__27474_28449,chunk__27475_28450,count__27476_28451,i__27477_28452,map__28085_28687,map__28085_28688__$1,gline_28689,gcol_28690,name_28691,seq__28071_28680__$1,temp__5804__auto___28679__$1,vec__28066_28657,column_28658,column_info_28659,vec__28010_28647,line_28648,columns_28649,seq__27474_28641__$1,temp__5804__auto___28640,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28690], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28648,new cljs.core.Keyword(null,"col","col",-1959363084),column_28658,new cljs.core.Keyword(null,"name","name",1843675177),name_28691], null));
});})(seq__28071_28660,chunk__28072_28661,count__28073_28662,i__28074_28663,seq__28013_28653,chunk__28014_28654,count__28015_28655,i__28016_28656,seq__27474_28449,chunk__27475_28450,count__27476_28451,i__27477_28452,map__28085_28687,map__28085_28688__$1,gline_28689,gcol_28690,name_28691,seq__28071_28680__$1,temp__5804__auto___28679__$1,vec__28066_28657,column_28658,column_info_28659,vec__28010_28647,line_28648,columns_28649,seq__27474_28641__$1,temp__5804__auto___28640,inverted))
,cljs.core.sorted_map()));


var G__28695 = cljs.core.next(seq__28071_28680__$1);
var G__28696 = null;
var G__28697 = (0);
var G__28698 = (0);
seq__28071_28660 = G__28695;
chunk__28072_28661 = G__28696;
count__28073_28662 = G__28697;
i__28074_28663 = G__28698;
continue;
}
} else {
}
}
break;
}


var G__28700 = seq__28013_28653;
var G__28701 = chunk__28014_28654;
var G__28702 = count__28015_28655;
var G__28703 = (i__28016_28656 + (1));
seq__28013_28653 = G__28700;
chunk__28014_28654 = G__28701;
count__28015_28655 = G__28702;
i__28016_28656 = G__28703;
continue;
} else {
var temp__5804__auto___28704__$1 = cljs.core.seq(seq__28013_28653);
if(temp__5804__auto___28704__$1){
var seq__28013_28705__$1 = temp__5804__auto___28704__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28013_28705__$1)){
var c__5568__auto___28707 = cljs.core.chunk_first(seq__28013_28705__$1);
var G__28708 = cljs.core.chunk_rest(seq__28013_28705__$1);
var G__28709 = c__5568__auto___28707;
var G__28710 = cljs.core.count(c__5568__auto___28707);
var G__28711 = (0);
seq__28013_28653 = G__28708;
chunk__28014_28654 = G__28709;
count__28015_28655 = G__28710;
i__28016_28656 = G__28711;
continue;
} else {
var vec__28095_28712 = cljs.core.first(seq__28013_28705__$1);
var column_28713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28095_28712,(0),null);
var column_info_28714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28095_28712,(1),null);
var seq__28098_28715 = cljs.core.seq(column_info_28714);
var chunk__28099_28716 = null;
var count__28100_28717 = (0);
var i__28101_28718 = (0);
while(true){
if((i__28101_28718 < count__28100_28717)){
var map__28116_28720 = chunk__28099_28716.cljs$core$IIndexed$_nth$arity$2(null,i__28101_28718);
var map__28116_28721__$1 = cljs.core.__destructure_map(map__28116_28720);
var gline_28722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28116_28721__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28116_28721__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28116_28721__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28722], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__28098_28715,chunk__28099_28716,count__28100_28717,i__28101_28718,seq__28013_28653,chunk__28014_28654,count__28015_28655,i__28016_28656,seq__27474_28449,chunk__27475_28450,count__27476_28451,i__27477_28452,map__28116_28720,map__28116_28721__$1,gline_28722,gcol_28723,name_28724,vec__28095_28712,column_28713,column_info_28714,seq__28013_28705__$1,temp__5804__auto___28704__$1,vec__28010_28647,line_28648,columns_28649,seq__27474_28641__$1,temp__5804__auto___28640,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28723], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28648,new cljs.core.Keyword(null,"col","col",-1959363084),column_28713,new cljs.core.Keyword(null,"name","name",1843675177),name_28724], null));
});})(seq__28098_28715,chunk__28099_28716,count__28100_28717,i__28101_28718,seq__28013_28653,chunk__28014_28654,count__28015_28655,i__28016_28656,seq__27474_28449,chunk__27475_28450,count__27476_28451,i__27477_28452,map__28116_28720,map__28116_28721__$1,gline_28722,gcol_28723,name_28724,vec__28095_28712,column_28713,column_info_28714,seq__28013_28705__$1,temp__5804__auto___28704__$1,vec__28010_28647,line_28648,columns_28649,seq__27474_28641__$1,temp__5804__auto___28640,inverted))
,cljs.core.sorted_map()));


var G__28725 = seq__28098_28715;
var G__28726 = chunk__28099_28716;
var G__28727 = count__28100_28717;
var G__28728 = (i__28101_28718 + (1));
seq__28098_28715 = G__28725;
chunk__28099_28716 = G__28726;
count__28100_28717 = G__28727;
i__28101_28718 = G__28728;
continue;
} else {
var temp__5804__auto___28729__$2 = cljs.core.seq(seq__28098_28715);
if(temp__5804__auto___28729__$2){
var seq__28098_28730__$1 = temp__5804__auto___28729__$2;
if(cljs.core.chunked_seq_QMARK_(seq__28098_28730__$1)){
var c__5568__auto___28731 = cljs.core.chunk_first(seq__28098_28730__$1);
var G__28732 = cljs.core.chunk_rest(seq__28098_28730__$1);
var G__28733 = c__5568__auto___28731;
var G__28734 = cljs.core.count(c__5568__auto___28731);
var G__28735 = (0);
seq__28098_28715 = G__28732;
chunk__28099_28716 = G__28733;
count__28100_28717 = G__28734;
i__28101_28718 = G__28735;
continue;
} else {
var map__28124_28736 = cljs.core.first(seq__28098_28730__$1);
var map__28124_28737__$1 = cljs.core.__destructure_map(map__28124_28736);
var gline_28738 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28124_28737__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28124_28737__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28124_28737__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28738], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__28098_28715,chunk__28099_28716,count__28100_28717,i__28101_28718,seq__28013_28653,chunk__28014_28654,count__28015_28655,i__28016_28656,seq__27474_28449,chunk__27475_28450,count__27476_28451,i__27477_28452,map__28124_28736,map__28124_28737__$1,gline_28738,gcol_28739,name_28740,seq__28098_28730__$1,temp__5804__auto___28729__$2,vec__28095_28712,column_28713,column_info_28714,seq__28013_28705__$1,temp__5804__auto___28704__$1,vec__28010_28647,line_28648,columns_28649,seq__27474_28641__$1,temp__5804__auto___28640,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28739], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28648,new cljs.core.Keyword(null,"col","col",-1959363084),column_28713,new cljs.core.Keyword(null,"name","name",1843675177),name_28740], null));
});})(seq__28098_28715,chunk__28099_28716,count__28100_28717,i__28101_28718,seq__28013_28653,chunk__28014_28654,count__28015_28655,i__28016_28656,seq__27474_28449,chunk__27475_28450,count__27476_28451,i__27477_28452,map__28124_28736,map__28124_28737__$1,gline_28738,gcol_28739,name_28740,seq__28098_28730__$1,temp__5804__auto___28729__$2,vec__28095_28712,column_28713,column_info_28714,seq__28013_28705__$1,temp__5804__auto___28704__$1,vec__28010_28647,line_28648,columns_28649,seq__27474_28641__$1,temp__5804__auto___28640,inverted))
,cljs.core.sorted_map()));


var G__28742 = cljs.core.next(seq__28098_28730__$1);
var G__28743 = null;
var G__28744 = (0);
var G__28745 = (0);
seq__28098_28715 = G__28742;
chunk__28099_28716 = G__28743;
count__28100_28717 = G__28744;
i__28101_28718 = G__28745;
continue;
}
} else {
}
}
break;
}


var G__28746 = cljs.core.next(seq__28013_28705__$1);
var G__28747 = null;
var G__28748 = (0);
var G__28749 = (0);
seq__28013_28653 = G__28746;
chunk__28014_28654 = G__28747;
count__28015_28655 = G__28748;
i__28016_28656 = G__28749;
continue;
}
} else {
}
}
break;
}


var G__28750 = cljs.core.next(seq__27474_28641__$1);
var G__28751 = null;
var G__28752 = (0);
var G__28753 = (0);
seq__27474_28449 = G__28750;
chunk__27475_28450 = G__28751;
count__27476_28451 = G__28752;
i__27477_28452 = G__28753;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
