goog.provide('cljs.compiler');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_source_map_data_gen_col_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv((function (xs,ns,_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(needle,cljs.compiler.get_first_ns_segment(ns))){
return cljs.core.reduced(needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__30499 = s;
var map__30499__$1 = cljs.core.__destructure_map(map__30499);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30499__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30499__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__30501 = info;
var map__30502 = G__30501;
var map__30502__$1 = cljs.core.__destructure_map(map__30502);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30502__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__30501__$1 = G__30501;
while(true){
var d__$2 = d__$1;
var map__30505 = G__30501__$1;
var map__30505__$1 = cljs.core.__destructure_map(map__30505);
var shadow__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30505__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$2)){
var G__31720 = (d__$2 + (1));
var G__31721 = shadow__$2;
d__$1 = G__31720;
G__30501__$1 = G__31721;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s).cljs$core$IHash$_hash$arity$1(null),cljs.compiler.shadow_depth(s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__30512){
var map__30514 = p__30512;
var map__30514__$1 = cljs.core.__destructure_map(map__30514);
var name_var = map__30514__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30514__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30514__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__30515 = info;
var map__30515__$1 = cljs.core.__destructure_map(map__30515);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30515__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30515__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__30516 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__30516) : cljs.compiler.munge.call(null,G__30516));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__30529 = arguments.length;
switch (G__30529) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
}));

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.impl.cljs_map_QMARK_(s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if((!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null)))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.compiler.hash_scope(s);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):(((!((renamed == null))))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = (function (){var fexpr__30538 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11790,11790,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__30538.cljs$core$IFn$_invoke$arity$1 ? fexpr__30538.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__30538.call(null,ss__$3));
})();
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
}));

(cljs.compiler.munge.cljs$lang$maxFixedArity = 2);

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__30546 = cp;
switch (G__30546) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.cljs$core$IFn$_invoke$arity$2("0000",unpadded.length);
return ["\\u",pad,cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__30558_31728 = cljs.core.seq(s);
var chunk__30560_31729 = null;
var count__30561_31730 = (0);
var i__30562_31731 = (0);
while(true){
if((i__30562_31731 < count__30561_31730)){
var c_31737 = chunk__30560_31729.cljs$core$IIndexed$_nth$arity$2(null,i__30562_31731);
sb.append(cljs.compiler.escape_char(c_31737));


var G__31739 = seq__30558_31728;
var G__31740 = chunk__30560_31729;
var G__31741 = count__30561_31730;
var G__31742 = (i__30562_31731 + (1));
seq__30558_31728 = G__31739;
chunk__30560_31729 = G__31740;
count__30561_31730 = G__31741;
i__30562_31731 = G__31742;
continue;
} else {
var temp__5804__auto___31744 = cljs.core.seq(seq__30558_31728);
if(temp__5804__auto___31744){
var seq__30558_31745__$1 = temp__5804__auto___31744;
if(cljs.core.chunked_seq_QMARK_(seq__30558_31745__$1)){
var c__5568__auto___31746 = cljs.core.chunk_first(seq__30558_31745__$1);
var G__31747 = cljs.core.chunk_rest(seq__30558_31745__$1);
var G__31748 = c__5568__auto___31746;
var G__31749 = cljs.core.count(c__5568__auto___31746);
var G__31750 = (0);
seq__30558_31728 = G__31747;
chunk__30560_31729 = G__31748;
count__30561_31730 = G__31749;
i__30562_31731 = G__31750;
continue;
} else {
var c_31751 = cljs.core.first(seq__30558_31745__$1);
sb.append(cljs.compiler.escape_char(c_31751));


var G__31752 = cljs.core.next(seq__30558_31745__$1);
var G__31753 = null;
var G__31754 = (0);
var G__31755 = (0);
seq__30558_31728 = G__31752;
chunk__30560_31729 = G__31753;
count__30561_31730 = G__31754;
i__30562_31731 = G__31755;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\""].join('');
});
cljs.compiler.emit_STAR_ = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__30622 = cljs.core.get_global_hierarchy;
return (fexpr__30622.cljs$core$IFn$_invoke$arity$0 ? fexpr__30622.cljs$core$IFn$_invoke$arity$0() : fexpr__30622.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__30625_31757 = ast;
var map__30625_31758__$1 = cljs.core.__destructure_map(map__30625_31757);
var env_31759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30625_31758__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_31759))){
var map__30626_31760 = env_31759;
var map__30626_31761__$1 = cljs.core.__destructure_map(map__30626_31760);
var line_31762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30626_31761__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_31763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30626_31761__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__30627 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__30629 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__30628 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__30628.cljs$core$IFn$_invoke$arity$1 ? fexpr__30628.cljs$core$IFn$_invoke$arity$1(G__30629) : fexpr__30628.call(null,G__30629));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30627,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__30627;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_31762 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_31763)?(column_31763 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
}));
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__30642 = arguments.length;
switch (G__30642) {
case 0:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___31771 = arguments.length;
var i__5770__auto___31772 = (0);
while(true){
if((i__5770__auto___31772 < len__5769__auto___31771)){
args_arr__5794__auto__.push((arguments[i__5770__auto___31772]));

var G__31773 = (i__5770__auto___31772 + (1));
i__5770__auto___31772 = G__31773;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5795__auto__);

}
});

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.impl.cljs_map_QMARK_(a)){
cljs.compiler.emit(a);
} else {
if(cljs.analyzer.impl.cljs_seq_QMARK_(a)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,a);
} else {
if(typeof a === 'function'){
(a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null));
} else {
var s_31774 = (function (){var G__30647 = a;
if((!(typeof a === 'string'))){
return G__30647.toString();
} else {
return G__30647;
}
})();
var temp__5808__auto___31775 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5808__auto___31775 == null)){
} else {
var sm_data_31776 = temp__5808__auto___31775;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_31776,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__30631_SHARP_){
return (p1__30631_SHARP_ + s_31774.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_31774], 0));

}
}
}
}

return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__30659 = cljs.core.seq(xs);
var chunk__30660 = null;
var count__30661 = (0);
var i__30662 = (0);
while(true){
if((i__30662 < count__30661)){
var x = chunk__30660.cljs$core$IIndexed$_nth$arity$2(null,i__30662);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__31780 = seq__30659;
var G__31781 = chunk__30660;
var G__31782 = count__30661;
var G__31783 = (i__30662 + (1));
seq__30659 = G__31780;
chunk__30660 = G__31781;
count__30661 = G__31782;
i__30662 = G__31783;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30659);
if(temp__5804__auto__){
var seq__30659__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30659__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__30659__$1);
var G__31784 = cljs.core.chunk_rest(seq__30659__$1);
var G__31785 = c__5568__auto__;
var G__31786 = cljs.core.count(c__5568__auto__);
var G__31787 = (0);
seq__30659 = G__31784;
chunk__30660 = G__31785;
count__30661 = G__31786;
i__30662 = G__31787;
continue;
} else {
var x = cljs.core.first(seq__30659__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__31788 = cljs.core.next(seq__30659__$1);
var G__31789 = null;
var G__31790 = (0);
var G__31791 = (0);
seq__30659 = G__31788;
chunk__30660 = G__31789;
count__30661 = G__31790;
i__30662 = G__31791;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq30635){
var G__30636 = cljs.core.first(seq30635);
var seq30635__$1 = cljs.core.next(seq30635);
var G__30637 = cljs.core.first(seq30635__$1);
var seq30635__$2 = cljs.core.next(seq30635__$1);
var G__30638 = cljs.core.first(seq30635__$2);
var seq30635__$3 = cljs.core.next(seq30635__$2);
var G__30639 = cljs.core.first(seq30635__$3);
var seq30635__$4 = cljs.core.next(seq30635__$3);
var G__30640 = cljs.core.first(seq30635__$4);
var seq30635__$5 = cljs.core.next(seq30635__$4);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30636,G__30637,G__30638,G__30639,G__30640,seq30635__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__30667){
var map__30669 = p__30667;
var map__30669__$1 = cljs.core.__destructure_map(map__30669);
var m = map__30669__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30669__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__30677 = arguments.length;
switch (G__30677) {
case 0:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___31793 = arguments.length;
var i__5770__auto___31797 = (0);
while(true){
if((i__5770__auto___31797 < len__5769__auto___31793)){
args_arr__5794__auto__.push((arguments[i__5770__auto___31797]));

var G__31800 = (i__5770__auto___31797 + (1));
i__5770__auto___31797 = G__31800;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5795__auto__);

}
});

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__30699_31801 = cljs.core.seq(xs);
var chunk__30700_31802 = null;
var count__30701_31803 = (0);
var i__30702_31804 = (0);
while(true){
if((i__30702_31804 < count__30701_31803)){
var x_31805 = chunk__30700_31802.cljs$core$IIndexed$_nth$arity$2(null,i__30702_31804);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_31805);


var G__31806 = seq__30699_31801;
var G__31807 = chunk__30700_31802;
var G__31808 = count__30701_31803;
var G__31809 = (i__30702_31804 + (1));
seq__30699_31801 = G__31806;
chunk__30700_31802 = G__31807;
count__30701_31803 = G__31808;
i__30702_31804 = G__31809;
continue;
} else {
var temp__5804__auto___31810 = cljs.core.seq(seq__30699_31801);
if(temp__5804__auto___31810){
var seq__30699_31811__$1 = temp__5804__auto___31810;
if(cljs.core.chunked_seq_QMARK_(seq__30699_31811__$1)){
var c__5568__auto___31812 = cljs.core.chunk_first(seq__30699_31811__$1);
var G__31813 = cljs.core.chunk_rest(seq__30699_31811__$1);
var G__31814 = c__5568__auto___31812;
var G__31815 = cljs.core.count(c__5568__auto___31812);
var G__31816 = (0);
seq__30699_31801 = G__31813;
chunk__30700_31802 = G__31814;
count__30701_31803 = G__31815;
i__30702_31804 = G__31816;
continue;
} else {
var x_31817 = cljs.core.first(seq__30699_31811__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_31817);


var G__31818 = cljs.core.next(seq__30699_31811__$1);
var G__31819 = null;
var G__31820 = (0);
var G__31821 = (0);
seq__30699_31801 = G__31818;
chunk__30700_31802 = G__31819;
count__30701_31803 = G__31820;
i__30702_31804 = G__31821;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln();
}));

/** @this {Function} */
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq30671){
var G__30672 = cljs.core.first(seq30671);
var seq30671__$1 = cljs.core.next(seq30671);
var G__30673 = cljs.core.first(seq30671__$1);
var seq30671__$2 = cljs.core.next(seq30671__$1);
var G__30674 = cljs.core.first(seq30671__$2);
var seq30671__$3 = cljs.core.next(seq30671__$2);
var G__30675 = cljs.core.first(seq30671__$3);
var seq30671__$4 = cljs.core.next(seq30671__$3);
var G__30676 = cljs.core.first(seq30671__$4);
var seq30671__$5 = cljs.core.next(seq30671__$4);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30672,G__30673,G__30674,G__30675,G__30676,seq30671__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30703_31822 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30704_31823 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30705_31824 = true;
var _STAR_print_fn_STAR__temp_val__30707_31825 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30705_31824);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30707_31825);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30704_31823);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30703_31822);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
});
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__30709 = cljs.core.get_global_hierarchy;
return (fexpr__30709.cljs$core$IFn$_invoke$arity$0 ? fexpr__30709.cljs$core$IFn$_invoke$arity$0() : fexpr__30709.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.impl.cljs_seq_QMARK_(x)){
return (cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.core.record_QMARK_(x)){
var vec__30716 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30716,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30716,(1),null);
var G__30719 = ns;
var G__30720 = name;
var G__30721 = (function (){
var G__30722 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__30722) : cljs.compiler.emit_constant.call(null,G__30722));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__30719,G__30720,G__30721) : cljs.compiler.emit_record_value.call(null,G__30719,G__30720,G__30721));
} else {
if(cljs.analyzer.impl.cljs_map_QMARK_(x)){
var G__30723 = cljs.core.keys(x);
var G__30724 = cljs.core.vals(x);
var G__30725 = cljs.compiler.emit_constants_comma_sep;
var G__30726 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__30723,G__30724,G__30725,G__30726) : cljs.compiler.emit_map.call(null,G__30723,G__30724,G__30725,G__30726));
} else {
if(cljs.analyzer.impl.cljs_vector_QMARK_(x)){
return (cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.analyzer.impl.cljs_set_QMARK_(x)){
return (cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3(x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_) : cljs.compiler.emit_set.call(null,x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_));
} else {
return cljs.compiler.emit_constant_STAR_.cljs$core$IFn$_invoke$arity$1(x);

}
}
}
}
}
});
cljs.compiler.emit_constant = (function cljs$compiler$emit_constant(v){
var m = cljs.analyzer.elide_irrelevant_meta(cljs.core.meta(v));
if((!((cljs.core.seq(m) == null)))){
var G__30727 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__30728 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__30727,G__30728) : cljs.compiler.emit_with_meta.call(null,G__30727,G__30728));
} else {
return cljs.compiler.emit_constant_no_meta(v);
}
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(x)], 0))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("null");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("NaN");
} else {
if(cljs.core.not(isFinite(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((((x > (0)))?"Infinity":"-Infinity"));
} else {
if((((x === (0))) && ((((1) / x) < (0))))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(-0)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(",x,")");

}
}
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x)));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(x)?"true":"false"));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(new RegExp(\"\"))");
} else {
var vec__30749 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30749,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30749,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30749,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Keyword(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant((cljs.core.truth_(ns)?[ns,"/",name].join(''):name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(kw));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace(sym);
var name = cljs.core.name(sym);
var symstr = (((!((ns == null))))?[ns,"/",name].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Symbol(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(symstr);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(sym));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(null);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
var temp__5802__auto__ = (function (){var and__5043__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__5043__auto__)){
var G__30755 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__30755) : x.call(null,G__30755));
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var value = temp__5802__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
var temp__5802__auto__ = (function (){var and__5043__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__5043__auto__)){
var G__30756 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__30756) : x.call(null,G__30756));
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var value = temp__5802__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_symbol(x);
}
}));
cljs.compiler.emit_constants_comma_sep = (function cljs$compiler$emit_constants_comma_sep(cs){
return (function (){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,m){
if(cljs.core.even_QMARK_(i)){
return cljs.compiler.emit_constant(m);
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(m);
}
}),cljs.compiler.comma_sep(cs)));
});
});
cljs.compiler.array_map_threshold = (8);
cljs.compiler.emit_inst = (function cljs$compiler$emit_inst(inst_ms){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("new Date(",inst_ms,")");
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emit_inst(date.getTime());
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash(uuid_str),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_(items)){
var G__30762 = items;
var G__30763 = (function (p1__30761_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__30761_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__30762,G__30763) : cljs.compiler.emit_js_object.call(null,G__30762,G__30763));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__30767){
var map__30768 = p__30767;
var map__30768__$1 = cljs.core.__destructure_map(map__30768);
var ast = map__30768__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30768__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30768__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30768__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5802__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5802__auto__)){
var const_expr = temp__5802__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__30772 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__30772__$1 = cljs.core.__destructure_map(map__30772);
var cenv = map__30772__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30772__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name(var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__5045__auto__ = js_module_name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ast));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__30774 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var G__30775 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__30775) : cljs.compiler.es5_GT__EQ_.call(null,G__30775));
})();
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__5043__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__30774,cljs.analyzer.es5_allowed);
} else {
return G__30774;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__5045__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__30779 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__30779,reserved);
} else {
return G__30779;
}
})();
var env__9256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__30780_31840 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__30780_31841__$1 = (((G__30780_31840 instanceof cljs.core.Keyword))?G__30780_31840.fqn:null);
switch (G__30780_31841__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace(var_name))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"].",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default",cljs.core.name(var_name));
} else {
return and__5043__auto__;
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);
}

break;
default:
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);

}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"var","var",-769682797),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"binding","binding",539932593),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"local","local",-1497766724),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__30796){
var map__30800 = p__30796;
var map__30800__$1 = cljs.core.__destructure_map(map__30800);
var arg = map__30800__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30800__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30800__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30800__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30800__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));


var map__30801 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__30801__$1 = cljs.core.__destructure_map(map__30801);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30801__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__9256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__30807){
var map__30808 = p__30807;
var map__30808__$1 = cljs.core.__destructure_map(map__30808);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30808__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30808__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30808__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_((function (p1__30820_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__30820_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__30832 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__30832) : comma_sep.call(null,G__30832));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__30833 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__30833) : comma_sep.call(null,G__30833));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__30836){
var map__30837 = p__30836;
var map__30837__$1 = cljs.core.__destructure_map(map__30837);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30837__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30837__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30837__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__9256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_list = (function cljs$compiler$emit_list(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.List.EMPTY");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.list(",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),")");
}
});
cljs.compiler.emit_vector = (function cljs$compiler$emit_vector(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentVector.EMPTY");
} else {
var cnt = cljs.core.count(items);
if((cnt < (32))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentVector(null, ",cnt,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentVector.fromArray([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], true)");
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__30842){
var map__30843 = p__30842;
var map__30843__$1 = cljs.core.__destructure_map(map__30843);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30843__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30843__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_((function (p1__30844_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__30844_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__30847 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__30847) : comma_sep.call(null,G__30847));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__30851){
var map__30852 = p__30851;
var map__30852__$1 = cljs.core.__destructure_map(map__30852);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30852__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30852__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5804__auto___31870 = cljs.core.seq(items);
if(temp__5804__auto___31870){
var items_31871__$1 = temp__5804__auto___31870;
var vec__30866_31872 = items_31871__$1;
var seq__30867_31873 = cljs.core.seq(vec__30866_31872);
var first__30868_31874 = cljs.core.first(seq__30867_31873);
var seq__30867_31875__$1 = cljs.core.next(seq__30867_31873);
var vec__30869_31876 = first__30868_31874;
var k_31877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30869_31876,(0),null);
var v_31878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30869_31876,(1),null);
var r_31879 = seq__30867_31875__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_31877),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_31878) : emit_js_object_val.call(null,v_31878)));

var seq__30876_31880 = cljs.core.seq(r_31879);
var chunk__30877_31881 = null;
var count__30878_31882 = (0);
var i__30879_31883 = (0);
while(true){
if((i__30879_31883 < count__30878_31882)){
var vec__30889_31886 = chunk__30877_31881.cljs$core$IIndexed$_nth$arity$2(null,i__30879_31883);
var k_31887__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30889_31886,(0),null);
var v_31888__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30889_31886,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_31887__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_31888__$1) : emit_js_object_val.call(null,v_31888__$1)));


var G__31893 = seq__30876_31880;
var G__31894 = chunk__30877_31881;
var G__31895 = count__30878_31882;
var G__31896 = (i__30879_31883 + (1));
seq__30876_31880 = G__31893;
chunk__30877_31881 = G__31894;
count__30878_31882 = G__31895;
i__30879_31883 = G__31896;
continue;
} else {
var temp__5804__auto___31897__$1 = cljs.core.seq(seq__30876_31880);
if(temp__5804__auto___31897__$1){
var seq__30876_31898__$1 = temp__5804__auto___31897__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30876_31898__$1)){
var c__5568__auto___31899 = cljs.core.chunk_first(seq__30876_31898__$1);
var G__31900 = cljs.core.chunk_rest(seq__30876_31898__$1);
var G__31901 = c__5568__auto___31899;
var G__31902 = cljs.core.count(c__5568__auto___31899);
var G__31903 = (0);
seq__30876_31880 = G__31900;
chunk__30877_31881 = G__31901;
count__30878_31882 = G__31902;
i__30879_31883 = G__31903;
continue;
} else {
var vec__30892_31904 = cljs.core.first(seq__30876_31898__$1);
var k_31905__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30892_31904,(0),null);
var v_31906__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30892_31904,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_31905__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_31906__$1) : emit_js_object_val.call(null,v_31906__$1)));


var G__31907 = cljs.core.next(seq__30876_31898__$1);
var G__31908 = null;
var G__31909 = (0);
var G__31910 = (0);
seq__30876_31880 = G__31907;
chunk__30877_31881 = G__31908;
count__30878_31882 = G__31909;
i__30879_31883 = G__31910;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_js_array = (function cljs$compiler$emit_js_array(items,comma_sep){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"]");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__30898){
var map__30899 = p__30898;
var map__30899__$1 = cljs.core.__destructure_map(map__30899);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30899__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30899__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30899__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__30908){
var map__30909 = p__30908;
var map__30909__$1 = cljs.core.__destructure_map(map__30909);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30909__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30909__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__30913){
var map__30914 = p__30913;
var map__30914__$1 = cljs.core.__destructure_map(map__30914);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30914__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__30915){
var map__30916 = p__30915;
var map__30916__$1 = cljs.core.__destructure_map(map__30916);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30916__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30916__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__9256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__30922 = cljs.analyzer.unwrap_quote(expr);
var map__30922__$1 = cljs.core.__destructure_map(map__30922);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30922__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30922__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30922__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__5045__auto__ = (function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842));
if(and__5043__auto__){
var and__5043__auto____$1 = form;
if(cljs.core.truth_(and__5043__auto____$1)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = (!((const_expr == null)));
if(and__5043__auto__){
return (cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.truthy_constant_QMARK_.call(null,const_expr));
} else {
return and__5043__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__30923 = cljs.analyzer.unwrap_quote(expr);
var map__30923__$1 = cljs.core.__destructure_map(map__30923);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30923__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30923__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30923__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__5045__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__5045__auto__){
return or__5045__auto__;
} else {
var and__5043__auto__ = (!((const_expr == null)));
if(and__5043__auto__){
return (cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.falsey_constant_QMARK_.call(null,const_expr));
} else {
return and__5043__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__5045__auto__ = (function (){var fexpr__30924 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__30924.cljs$core$IFn$_invoke$arity$1 ? fexpr__30924.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__30924.call(null,tag));
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__30929){
var map__30930 = p__30929;
var map__30930__$1 = cljs.core.__destructure_map(map__30930);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30930__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30930__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30930__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30930__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30930__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__5045__auto__ = unchecked;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(else$);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",((checked)?"cljs.core.truth_":null),"(",test,")?",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(",test,"){");
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(then,"} else {");

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(else$,"}");
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__30935){
var map__30937 = p__30935;
var map__30937__$1 = cljs.core.__destructure_map(map__30937);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30937__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30937__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30937__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30937__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function(){");
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",gs,";");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("switch (",v,") {");

var seq__30945_31912 = cljs.core.seq(nodes);
var chunk__30946_31913 = null;
var count__30947_31914 = (0);
var i__30948_31915 = (0);
while(true){
if((i__30948_31915 < count__30947_31914)){
var map__31009_31916 = chunk__30946_31913.cljs$core$IIndexed$_nth$arity$2(null,i__30948_31915);
var map__31009_31917__$1 = cljs.core.__destructure_map(map__31009_31916);
var ts_31918 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31009_31917__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__31010_31919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31009_31917__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__31010_31920__$1 = cljs.core.__destructure_map(map__31010_31919);
var then_31921 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31010_31920__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__31012_31922 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_31918));
var chunk__31013_31923 = null;
var count__31014_31924 = (0);
var i__31015_31925 = (0);
while(true){
if((i__31015_31925 < count__31014_31924)){
var test_31926 = chunk__31013_31923.cljs$core$IIndexed$_nth$arity$2(null,i__31015_31925);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_31926,":");


var G__31927 = seq__31012_31922;
var G__31928 = chunk__31013_31923;
var G__31929 = count__31014_31924;
var G__31930 = (i__31015_31925 + (1));
seq__31012_31922 = G__31927;
chunk__31013_31923 = G__31928;
count__31014_31924 = G__31929;
i__31015_31925 = G__31930;
continue;
} else {
var temp__5804__auto___31934 = cljs.core.seq(seq__31012_31922);
if(temp__5804__auto___31934){
var seq__31012_31935__$1 = temp__5804__auto___31934;
if(cljs.core.chunked_seq_QMARK_(seq__31012_31935__$1)){
var c__5568__auto___31937 = cljs.core.chunk_first(seq__31012_31935__$1);
var G__31938 = cljs.core.chunk_rest(seq__31012_31935__$1);
var G__31939 = c__5568__auto___31937;
var G__31940 = cljs.core.count(c__5568__auto___31937);
var G__31941 = (0);
seq__31012_31922 = G__31938;
chunk__31013_31923 = G__31939;
count__31014_31924 = G__31940;
i__31015_31925 = G__31941;
continue;
} else {
var test_31942 = cljs.core.first(seq__31012_31935__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_31942,":");


var G__31944 = cljs.core.next(seq__31012_31935__$1);
var G__31945 = null;
var G__31946 = (0);
var G__31947 = (0);
seq__31012_31922 = G__31944;
chunk__31013_31923 = G__31945;
count__31014_31924 = G__31946;
i__31015_31925 = G__31947;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_31921);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_31921);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__31948 = seq__30945_31912;
var G__31949 = chunk__30946_31913;
var G__31950 = count__30947_31914;
var G__31951 = (i__30948_31915 + (1));
seq__30945_31912 = G__31948;
chunk__30946_31913 = G__31949;
count__30947_31914 = G__31950;
i__30948_31915 = G__31951;
continue;
} else {
var temp__5804__auto___31952 = cljs.core.seq(seq__30945_31912);
if(temp__5804__auto___31952){
var seq__30945_31953__$1 = temp__5804__auto___31952;
if(cljs.core.chunked_seq_QMARK_(seq__30945_31953__$1)){
var c__5568__auto___31954 = cljs.core.chunk_first(seq__30945_31953__$1);
var G__31955 = cljs.core.chunk_rest(seq__30945_31953__$1);
var G__31956 = c__5568__auto___31954;
var G__31957 = cljs.core.count(c__5568__auto___31954);
var G__31958 = (0);
seq__30945_31912 = G__31955;
chunk__30946_31913 = G__31956;
count__30947_31914 = G__31957;
i__30948_31915 = G__31958;
continue;
} else {
var map__31020_31959 = cljs.core.first(seq__30945_31953__$1);
var map__31020_31960__$1 = cljs.core.__destructure_map(map__31020_31959);
var ts_31961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31020_31960__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__31022_31962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31020_31960__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__31022_31963__$1 = cljs.core.__destructure_map(map__31022_31962);
var then_31964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31022_31963__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__31024_31965 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_31961));
var chunk__31025_31966 = null;
var count__31026_31967 = (0);
var i__31027_31968 = (0);
while(true){
if((i__31027_31968 < count__31026_31967)){
var test_31969 = chunk__31025_31966.cljs$core$IIndexed$_nth$arity$2(null,i__31027_31968);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_31969,":");


var G__31970 = seq__31024_31965;
var G__31971 = chunk__31025_31966;
var G__31972 = count__31026_31967;
var G__31973 = (i__31027_31968 + (1));
seq__31024_31965 = G__31970;
chunk__31025_31966 = G__31971;
count__31026_31967 = G__31972;
i__31027_31968 = G__31973;
continue;
} else {
var temp__5804__auto___31974__$1 = cljs.core.seq(seq__31024_31965);
if(temp__5804__auto___31974__$1){
var seq__31024_31975__$1 = temp__5804__auto___31974__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31024_31975__$1)){
var c__5568__auto___31976 = cljs.core.chunk_first(seq__31024_31975__$1);
var G__31977 = cljs.core.chunk_rest(seq__31024_31975__$1);
var G__31978 = c__5568__auto___31976;
var G__31979 = cljs.core.count(c__5568__auto___31976);
var G__31980 = (0);
seq__31024_31965 = G__31977;
chunk__31025_31966 = G__31978;
count__31026_31967 = G__31979;
i__31027_31968 = G__31980;
continue;
} else {
var test_31981 = cljs.core.first(seq__31024_31975__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_31981,":");


var G__31982 = cljs.core.next(seq__31024_31975__$1);
var G__31983 = null;
var G__31984 = (0);
var G__31985 = (0);
seq__31024_31965 = G__31982;
chunk__31025_31966 = G__31983;
count__31026_31967 = G__31984;
i__31027_31968 = G__31985;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_31964);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_31964);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__31986 = cljs.core.next(seq__30945_31953__$1);
var G__31987 = null;
var G__31988 = (0);
var G__31989 = (0);
seq__30945_31912 = G__31986;
chunk__30946_31913 = G__31987;
count__30947_31914 = G__31988;
i__30948_31915 = G__31989;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",default$);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(default$);
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",gs,";})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__31033){
var map__31034 = p__31033;
var map__31034__$1 = cljs.core.__destructure_map(map__31034);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31034__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31034__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__31043 = env;
var G__31044 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__31043,G__31044) : cljs.compiler.resolve_type.call(null,G__31043,G__31044));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__31045 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31045,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31045,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__31038_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__31038_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__31038_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__31049 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__31049,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__31049;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__31053 = env;
var G__31054 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__31053,G__31054) : cljs.compiler.resolve_type.call(null,G__31053,G__31054));
})()),"="].join('');
} else {
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(t)))));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(ts),(1),(cljs.core.count(ts) - (1)));
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(ts__$1,/\|/);
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31059_SHARP_){
return cljs.compiler.resolve_type(env,p1__31059_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__31060 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__31061 = cljs.core.seq(vec__31060);
var first__31062 = cljs.core.first(seq__31061);
var seq__31061__$1 = cljs.core.next(seq__31061);
var p = first__31062;
var first__31062__$1 = cljs.core.first(seq__31061__$1);
var seq__31061__$2 = cljs.core.next(seq__31061__$1);
var ts = first__31062__$1;
var first__31062__$2 = cljs.core.first(seq__31061__$2);
var seq__31061__$3 = cljs.core.next(seq__31061__$2);
var n = first__31062__$2;
var xs = seq__31061__$3;
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p);
if(and__5043__auto__){
var and__5043__auto____$1 = ts;
if(cljs.core.truth_(and__5043__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__31067 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__31068 = cljs.core.seq(vec__31067);
var first__31069 = cljs.core.first(seq__31068);
var seq__31068__$1 = cljs.core.next(seq__31068);
var p = first__31069;
var first__31069__$1 = cljs.core.first(seq__31068__$1);
var seq__31068__$2 = cljs.core.next(seq__31068__$1);
var ts = first__31069__$1;
var xs = seq__31068__$2;
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p);
if(and__5043__auto__){
var and__5043__auto____$1 = ts;
if(cljs.core.truth_(and__5043__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
var G__31071 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__31070 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__31070.cljs$core$IFn$_invoke$arity$1 ? fexpr__31070.cljs$core$IFn$_invoke$arity$1(G__31071) : fexpr__31070.call(null,G__31071));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__31079 = arguments.length;
switch (G__31079) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(null,doc,jsdoc);
}));

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = (function cljs$compiler$print_comment_lines(e){
var vec__31087 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31072_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__31072_SHARP_);
} else {
return p1__31072_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__31088 = cljs.core.seq(vec__31087);
var first__31089 = cljs.core.first(seq__31088);
var seq__31088__$1 = cljs.core.next(seq__31088);
var x = first__31089;
var ys = seq__31088__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__31090 = cljs.core.seq(ys);
var chunk__31091 = null;
var count__31092 = (0);
var i__31093 = (0);
while(true){
if((i__31093 < count__31092)){
var next_line = chunk__31091.cljs$core$IIndexed$_nth$arity$2(null,i__31093);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__32015 = seq__31090;
var G__32016 = chunk__31091;
var G__32017 = count__31092;
var G__32018 = (i__31093 + (1));
seq__31090 = G__32015;
chunk__31091 = G__32016;
count__31092 = G__32017;
i__31093 = G__32018;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31090);
if(temp__5804__auto__){
var seq__31090__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31090__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__31090__$1);
var G__32019 = cljs.core.chunk_rest(seq__31090__$1);
var G__32020 = c__5568__auto__;
var G__32021 = cljs.core.count(c__5568__auto__);
var G__32022 = (0);
seq__31090 = G__32019;
chunk__31091 = G__32020;
count__31092 = G__32021;
i__31093 = G__32022;
continue;
} else {
var next_line = cljs.core.first(seq__31090__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__32024 = cljs.core.next(seq__31090__$1);
var G__32025 = null;
var G__32026 = (0);
var G__32027 = (0);
seq__31090 = G__32024;
chunk__31091 = G__32025;
count__31092 = G__32026;
i__31093 = G__32027;
continue;
}
} else {
return null;
}
}
break;
}
});
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

var seq__31100_32029 = cljs.core.seq(docs__$2);
var chunk__31101_32030 = null;
var count__31102_32031 = (0);
var i__31103_32032 = (0);
while(true){
if((i__31103_32032 < count__31102_32031)){
var e_32039 = chunk__31101_32030.cljs$core$IIndexed$_nth$arity$2(null,i__31103_32032);
if(cljs.core.truth_(e_32039)){
print_comment_lines(e_32039);
} else {
}


var G__32041 = seq__31100_32029;
var G__32042 = chunk__31101_32030;
var G__32043 = count__31102_32031;
var G__32044 = (i__31103_32032 + (1));
seq__31100_32029 = G__32041;
chunk__31101_32030 = G__32042;
count__31102_32031 = G__32043;
i__31103_32032 = G__32044;
continue;
} else {
var temp__5804__auto___32045 = cljs.core.seq(seq__31100_32029);
if(temp__5804__auto___32045){
var seq__31100_32046__$1 = temp__5804__auto___32045;
if(cljs.core.chunked_seq_QMARK_(seq__31100_32046__$1)){
var c__5568__auto___32047 = cljs.core.chunk_first(seq__31100_32046__$1);
var G__32048 = cljs.core.chunk_rest(seq__31100_32046__$1);
var G__32049 = c__5568__auto___32047;
var G__32050 = cljs.core.count(c__5568__auto___32047);
var G__32051 = (0);
seq__31100_32029 = G__32048;
chunk__31101_32030 = G__32049;
count__31102_32031 = G__32050;
i__31103_32032 = G__32051;
continue;
} else {
var e_32052 = cljs.core.first(seq__31100_32046__$1);
if(cljs.core.truth_(e_32052)){
print_comment_lines(e_32052);
} else {
}


var G__32053 = cljs.core.next(seq__31100_32046__$1);
var G__32054 = null;
var G__32055 = (0);
var G__32056 = (0);
seq__31100_32029 = G__32053;
chunk__31101_32030 = G__32054;
count__31102_32031 = G__32055;
i__31103_32032 = G__32056;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" */");
} else {
return null;
}
}));

(cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3);

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (((x === true) || (((x === false) || (typeof x === 'number'))))));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__5043__auto__ = cljs.core.some((function (p1__31109_SHARP_){
return goog.string.startsWith(p1__31109_SHARP_,"@define");
}),jsdoc);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = opts;
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__5043__auto____$2){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_(define)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([define], 0));
} else {
return null;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__31111){
var map__31116 = p__31111;
var map__31116__$1 = cljs.core.__destructure_map(map__31116);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31116__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31116__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31116__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31116__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31116__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31116__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31116__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31116__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31116__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31116__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__5045__auto__ = init;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(env,doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(goog_define)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["@define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog_define),"}"].join('')], null):null),jsdoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)], 0)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(" = ",(function (){var temp__5802__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__5802__auto__)){
var define = temp__5802__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("; return (");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast], 0)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");})()");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(")");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__5043__auto__)){
return test;
} else {
return and__5043__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__31127){
var map__31129 = p__31127;
var map__31129__$1 = cljs.core.__destructure_map(map__31129);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31129__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31129__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31129__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__31130_32062 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__31131_32063 = null;
var count__31132_32064 = (0);
var i__31133_32065 = (0);
while(true){
if((i__31133_32065 < count__31132_32064)){
var vec__31144_32067 = chunk__31131_32063.cljs$core$IIndexed$_nth$arity$2(null,i__31133_32065);
var i_32068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31144_32067,(0),null);
var param_32069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31144_32067,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_32069);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__32071 = seq__31130_32062;
var G__32072 = chunk__31131_32063;
var G__32073 = count__31132_32064;
var G__32074 = (i__31133_32065 + (1));
seq__31130_32062 = G__32071;
chunk__31131_32063 = G__32072;
count__31132_32064 = G__32073;
i__31133_32065 = G__32074;
continue;
} else {
var temp__5804__auto___32075 = cljs.core.seq(seq__31130_32062);
if(temp__5804__auto___32075){
var seq__31130_32076__$1 = temp__5804__auto___32075;
if(cljs.core.chunked_seq_QMARK_(seq__31130_32076__$1)){
var c__5568__auto___32077 = cljs.core.chunk_first(seq__31130_32076__$1);
var G__32078 = cljs.core.chunk_rest(seq__31130_32076__$1);
var G__32079 = c__5568__auto___32077;
var G__32080 = cljs.core.count(c__5568__auto___32077);
var G__32081 = (0);
seq__31130_32062 = G__32078;
chunk__31131_32063 = G__32079;
count__31132_32064 = G__32080;
i__31133_32065 = G__32081;
continue;
} else {
var vec__31150_32082 = cljs.core.first(seq__31130_32076__$1);
var i_32083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31150_32082,(0),null);
var param_32084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31150_32082,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_32084);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__32085 = cljs.core.next(seq__31130_32076__$1);
var G__32086 = null;
var G__32087 = (0);
var G__32088 = (0);
seq__31130_32062 = G__32085;
chunk__31131_32063 = G__32086;
count__31132_32064 = G__32087;
i__31133_32065 = G__32088;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.first(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.rest(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__31153_32091 = cljs.core.seq(params);
var chunk__31154_32092 = null;
var count__31155_32093 = (0);
var i__31156_32094 = (0);
while(true){
if((i__31156_32094 < count__31155_32093)){
var param_32095 = chunk__31154_32092.cljs$core$IIndexed$_nth$arity$2(null,i__31156_32094);
cljs.compiler.emit(param_32095);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_32095,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__32098 = seq__31153_32091;
var G__32099 = chunk__31154_32092;
var G__32100 = count__31155_32093;
var G__32101 = (i__31156_32094 + (1));
seq__31153_32091 = G__32098;
chunk__31154_32092 = G__32099;
count__31155_32093 = G__32100;
i__31156_32094 = G__32101;
continue;
} else {
var temp__5804__auto___32102 = cljs.core.seq(seq__31153_32091);
if(temp__5804__auto___32102){
var seq__31153_32103__$1 = temp__5804__auto___32102;
if(cljs.core.chunked_seq_QMARK_(seq__31153_32103__$1)){
var c__5568__auto___32104 = cljs.core.chunk_first(seq__31153_32103__$1);
var G__32105 = cljs.core.chunk_rest(seq__31153_32103__$1);
var G__32106 = c__5568__auto___32104;
var G__32107 = cljs.core.count(c__5568__auto___32104);
var G__32108 = (0);
seq__31153_32091 = G__32105;
chunk__31154_32092 = G__32106;
count__31155_32093 = G__32107;
i__31156_32094 = G__32108;
continue;
} else {
var param_32109 = cljs.core.first(seq__31153_32103__$1);
cljs.compiler.emit(param_32109);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_32109,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__32110 = cljs.core.next(seq__31153_32103__$1);
var G__32111 = null;
var G__32112 = (0);
var G__32113 = (0);
seq__31153_32091 = G__32110;
chunk__31154_32092 = G__32111;
count__31155_32093 = G__32112;
i__31156_32094 = G__32113;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.seq(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__31161_32115 = cljs.core.seq(params);
var chunk__31162_32116 = null;
var count__31163_32117 = (0);
var i__31164_32118 = (0);
while(true){
if((i__31164_32118 < count__31163_32117)){
var param_32119 = chunk__31162_32116.cljs$core$IIndexed$_nth$arity$2(null,i__31164_32118);
cljs.compiler.emit(param_32119);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_32119,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__32120 = seq__31161_32115;
var G__32121 = chunk__31162_32116;
var G__32122 = count__31163_32117;
var G__32123 = (i__31164_32118 + (1));
seq__31161_32115 = G__32120;
chunk__31162_32116 = G__32121;
count__31163_32117 = G__32122;
i__31164_32118 = G__32123;
continue;
} else {
var temp__5804__auto___32124 = cljs.core.seq(seq__31161_32115);
if(temp__5804__auto___32124){
var seq__31161_32125__$1 = temp__5804__auto___32124;
if(cljs.core.chunked_seq_QMARK_(seq__31161_32125__$1)){
var c__5568__auto___32126 = cljs.core.chunk_first(seq__31161_32125__$1);
var G__32127 = cljs.core.chunk_rest(seq__31161_32125__$1);
var G__32128 = c__5568__auto___32126;
var G__32129 = cljs.core.count(c__5568__auto___32126);
var G__32130 = (0);
seq__31161_32115 = G__32127;
chunk__31162_32116 = G__32128;
count__31163_32117 = G__32129;
i__31164_32118 = G__32130;
continue;
} else {
var param_32131 = cljs.core.first(seq__31161_32125__$1);
cljs.compiler.emit(param_32131);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_32131,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__32132 = cljs.core.next(seq__31161_32125__$1);
var G__32133 = null;
var G__32134 = (0);
var G__32135 = (0);
seq__31161_32115 = G__32132;
chunk__31162_32116 = G__32133;
count__31163_32117 = G__32134;
i__31164_32118 = G__32135;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__31175 = cljs.core.seq(params);
var chunk__31176 = null;
var count__31177 = (0);
var i__31178 = (0);
while(true){
if((i__31178 < count__31177)){
var param = chunk__31176.cljs$core$IIndexed$_nth$arity$2(null,i__31178);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__32137 = seq__31175;
var G__32138 = chunk__31176;
var G__32139 = count__31177;
var G__32140 = (i__31178 + (1));
seq__31175 = G__32137;
chunk__31176 = G__32138;
count__31177 = G__32139;
i__31178 = G__32140;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31175);
if(temp__5804__auto__){
var seq__31175__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31175__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__31175__$1);
var G__32145 = cljs.core.chunk_rest(seq__31175__$1);
var G__32146 = c__5568__auto__;
var G__32147 = cljs.core.count(c__5568__auto__);
var G__32148 = (0);
seq__31175 = G__32145;
chunk__31176 = G__32146;
count__31177 = G__32147;
i__31178 = G__32148;
continue;
} else {
var param = cljs.core.first(seq__31175__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__32149 = cljs.core.next(seq__31175__$1);
var G__32150 = null;
var G__32151 = (0);
var G__32152 = (0);
seq__31175 = G__32149;
chunk__31176 = G__32150;
count__31177 = G__32151;
i__31178 = G__32152;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__31180){
var map__31181 = p__31180;
var map__31181__$1 = cljs.core.__destructure_map(map__31181);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31181__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31181__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31181__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31181__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31181__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31181__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__9256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"(");

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("var ",i," = 0, ",a," = new Array(arguments.length -  ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("while (",i," < ",a,".length) {",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__31183){
var map__31184 = p__31183;
var map__31184__$1 = cljs.core.__destructure_map(map__31184);
var f = map__31184__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31184__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31184__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31184__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31184__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31184__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31184__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31184__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31184__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__9256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_32157__$1 = (function (){var or__5045__auto__ = name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_32158 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_32157__$1);
var delegate_name_32159 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_32158),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_32159," = function (");

var seq__31189_32164 = cljs.core.seq(params);
var chunk__31190_32165 = null;
var count__31191_32166 = (0);
var i__31192_32167 = (0);
while(true){
if((i__31192_32167 < count__31191_32166)){
var param_32169 = chunk__31190_32165.cljs$core$IIndexed$_nth$arity$2(null,i__31192_32167);
cljs.compiler.emit(param_32169);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_32169,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__32170 = seq__31189_32164;
var G__32171 = chunk__31190_32165;
var G__32172 = count__31191_32166;
var G__32173 = (i__31192_32167 + (1));
seq__31189_32164 = G__32170;
chunk__31190_32165 = G__32171;
count__31191_32166 = G__32172;
i__31192_32167 = G__32173;
continue;
} else {
var temp__5804__auto___32174 = cljs.core.seq(seq__31189_32164);
if(temp__5804__auto___32174){
var seq__31189_32175__$1 = temp__5804__auto___32174;
if(cljs.core.chunked_seq_QMARK_(seq__31189_32175__$1)){
var c__5568__auto___32176 = cljs.core.chunk_first(seq__31189_32175__$1);
var G__32177 = cljs.core.chunk_rest(seq__31189_32175__$1);
var G__32178 = c__5568__auto___32176;
var G__32179 = cljs.core.count(c__5568__auto___32176);
var G__32180 = (0);
seq__31189_32164 = G__32177;
chunk__31190_32165 = G__32178;
count__31191_32166 = G__32179;
i__31192_32167 = G__32180;
continue;
} else {
var param_32181 = cljs.core.first(seq__31189_32175__$1);
cljs.compiler.emit(param_32181);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_32181,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__32182 = cljs.core.next(seq__31189_32175__$1);
var G__32183 = null;
var G__32184 = (0);
var G__32185 = (0);
seq__31189_32164 = G__32182;
chunk__31190_32165 = G__32183;
count__31191_32166 = G__32184;
i__31192_32167 = G__32185;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_32158," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_32188 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_32188,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_32159,".call(this,");

var seq__31194_32189 = cljs.core.seq(params);
var chunk__31195_32190 = null;
var count__31196_32191 = (0);
var i__31197_32192 = (0);
while(true){
if((i__31197_32192 < count__31196_32191)){
var param_32193 = chunk__31195_32190.cljs$core$IIndexed$_nth$arity$2(null,i__31197_32192);
cljs.compiler.emit(param_32193);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_32193,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__32195 = seq__31194_32189;
var G__32196 = chunk__31195_32190;
var G__32197 = count__31196_32191;
var G__32198 = (i__31197_32192 + (1));
seq__31194_32189 = G__32195;
chunk__31195_32190 = G__32196;
count__31196_32191 = G__32197;
i__31197_32192 = G__32198;
continue;
} else {
var temp__5804__auto___32199 = cljs.core.seq(seq__31194_32189);
if(temp__5804__auto___32199){
var seq__31194_32200__$1 = temp__5804__auto___32199;
if(cljs.core.chunked_seq_QMARK_(seq__31194_32200__$1)){
var c__5568__auto___32201 = cljs.core.chunk_first(seq__31194_32200__$1);
var G__32202 = cljs.core.chunk_rest(seq__31194_32200__$1);
var G__32203 = c__5568__auto___32201;
var G__32204 = cljs.core.count(c__5568__auto___32201);
var G__32205 = (0);
seq__31194_32189 = G__32202;
chunk__31195_32190 = G__32203;
count__31196_32191 = G__32204;
i__31197_32192 = G__32205;
continue;
} else {
var param_32206 = cljs.core.first(seq__31194_32200__$1);
cljs.compiler.emit(param_32206);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_32206,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__32207 = cljs.core.next(seq__31194_32200__$1);
var G__32208 = null;
var G__32209 = (0);
var G__32210 = (0);
seq__31194_32189 = G__32207;
chunk__31195_32190 = G__32208;
count__31196_32191 = G__32209;
i__31197_32192 = G__32210;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_32158,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_32158,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_32157__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_32158,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_32159,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_32158,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__31221){
var map__31222 = p__31221;
var map__31222__$1 = cljs.core.__destructure_map(map__31222);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31222__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31222__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31222__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31222__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31222__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31222__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31222__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31222__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31217_SHARP_){
var and__5043__auto__ = p1__31217_SHARP_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__31217_SHARP_));
} else {
return and__5043__auto__;
}
}),recur_frames)], 0));
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(recur_params,(cljs.core.truth_((function (){var or__5045__auto__ = in_loop;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.seq(recur_params);
}
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loop_lets], 0)):null))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_32223__$1 = (function (){var or__5045__auto__ = name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_32224 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_32223__$1);
var maxparams_32225 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_32226 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_32224),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_32227 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__31218_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__31218_SHARP_)));
}),cljs.core.seq(mmap_32226));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_32224," = null;");

var seq__31245_32231 = cljs.core.seq(ms_32227);
var chunk__31246_32232 = null;
var count__31247_32233 = (0);
var i__31248_32234 = (0);
while(true){
if((i__31248_32234 < count__31247_32233)){
var vec__31276_32235 = chunk__31246_32232.cljs$core$IIndexed$_nth$arity$2(null,i__31248_32234);
var n_32236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31276_32235,(0),null);
var meth_32237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31276_32235,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_32236," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_32237))){
cljs.compiler.emit_variadic_fn_method(meth_32237);
} else {
cljs.compiler.emit_fn_method(meth_32237);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__32239 = seq__31245_32231;
var G__32240 = chunk__31246_32232;
var G__32241 = count__31247_32233;
var G__32242 = (i__31248_32234 + (1));
seq__31245_32231 = G__32239;
chunk__31246_32232 = G__32240;
count__31247_32233 = G__32241;
i__31248_32234 = G__32242;
continue;
} else {
var temp__5804__auto___32245 = cljs.core.seq(seq__31245_32231);
if(temp__5804__auto___32245){
var seq__31245_32249__$1 = temp__5804__auto___32245;
if(cljs.core.chunked_seq_QMARK_(seq__31245_32249__$1)){
var c__5568__auto___32250 = cljs.core.chunk_first(seq__31245_32249__$1);
var G__32251 = cljs.core.chunk_rest(seq__31245_32249__$1);
var G__32252 = c__5568__auto___32250;
var G__32253 = cljs.core.count(c__5568__auto___32250);
var G__32254 = (0);
seq__31245_32231 = G__32251;
chunk__31246_32232 = G__32252;
count__31247_32233 = G__32253;
i__31248_32234 = G__32254;
continue;
} else {
var vec__31283_32255 = cljs.core.first(seq__31245_32249__$1);
var n_32256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31283_32255,(0),null);
var meth_32257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31283_32255,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_32256," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_32257))){
cljs.compiler.emit_variadic_fn_method(meth_32257);
} else {
cljs.compiler.emit_fn_method(meth_32257);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__32258 = cljs.core.next(seq__31245_32249__$1);
var G__32259 = null;
var G__32260 = (0);
var G__32261 = (0);
seq__31245_32231 = G__32258;
chunk__31246_32232 = G__32259;
count__31247_32233 = G__32260;
i__31248_32234 = G__32261;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_32224," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_32225),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_32225)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_32225));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__31286_32262 = cljs.core.seq(ms_32227);
var chunk__31287_32263 = null;
var count__31288_32264 = (0);
var i__31289_32265 = (0);
while(true){
if((i__31289_32265 < count__31288_32264)){
var vec__31304_32266 = chunk__31287_32263.cljs$core$IIndexed$_nth$arity$2(null,i__31289_32265);
var n_32267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31304_32266,(0),null);
var meth_32268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31304_32266,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_32268))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_32269 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_32269," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_32270 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_32269," = new cljs.core.IndexedSeq(",a_32270,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_32267,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_32225)),(((cljs.core.count(maxparams_32225) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_32269,");"], 0));
} else {
var pcnt_32274 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_32268));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_32274,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_32267,".call(this",(((pcnt_32274 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_32274,maxparams_32225)),null,(1),null)),(2),null))),");");
}


var G__32275 = seq__31286_32262;
var G__32276 = chunk__31287_32263;
var G__32277 = count__31288_32264;
var G__32278 = (i__31289_32265 + (1));
seq__31286_32262 = G__32275;
chunk__31287_32263 = G__32276;
count__31288_32264 = G__32277;
i__31289_32265 = G__32278;
continue;
} else {
var temp__5804__auto___32279 = cljs.core.seq(seq__31286_32262);
if(temp__5804__auto___32279){
var seq__31286_32280__$1 = temp__5804__auto___32279;
if(cljs.core.chunked_seq_QMARK_(seq__31286_32280__$1)){
var c__5568__auto___32281 = cljs.core.chunk_first(seq__31286_32280__$1);
var G__32282 = cljs.core.chunk_rest(seq__31286_32280__$1);
var G__32283 = c__5568__auto___32281;
var G__32284 = cljs.core.count(c__5568__auto___32281);
var G__32285 = (0);
seq__31286_32262 = G__32282;
chunk__31287_32263 = G__32283;
count__31288_32264 = G__32284;
i__31289_32265 = G__32285;
continue;
} else {
var vec__31323_32286 = cljs.core.first(seq__31286_32280__$1);
var n_32287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31323_32286,(0),null);
var meth_32288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31323_32286,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_32288))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_32297 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_32297," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_32298 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_32297," = new cljs.core.IndexedSeq(",a_32298,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_32287,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_32225)),(((cljs.core.count(maxparams_32225) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_32297,");"], 0));
} else {
var pcnt_32299 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_32288));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_32299,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_32287,".call(this",(((pcnt_32299 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_32299,maxparams_32225)),null,(1),null)),(2),null))),");");
}


var G__32308 = cljs.core.next(seq__31286_32280__$1);
var G__32309 = null;
var G__32310 = (0);
var G__32311 = (0);
seq__31286_32262 = G__32308;
chunk__31287_32263 = G__32309;
count__31288_32264 = G__32310;
i__31289_32265 = G__32311;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_32312 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_32227)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_32312,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_32224,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_32224,".cljs$lang$applyTo = ",cljs.core.some((function (p1__31220_SHARP_){
var vec__31343 = p1__31220_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31343,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31343,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_32227),".cljs$lang$applyTo;");
} else {
}

var seq__31346_32319 = cljs.core.seq(ms_32227);
var chunk__31347_32320 = null;
var count__31348_32321 = (0);
var i__31349_32322 = (0);
while(true){
if((i__31349_32322 < count__31348_32321)){
var vec__31358_32324 = chunk__31347_32320.cljs$core$IIndexed$_nth$arity$2(null,i__31349_32322);
var n_32325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31358_32324,(0),null);
var meth_32326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31358_32324,(1),null);
var c_32327 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_32326));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_32326))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_32224,".cljs$core$IFn$_invoke$arity$variadic = ",n_32325,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_32224,".cljs$core$IFn$_invoke$arity$",c_32327," = ",n_32325,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__32329 = seq__31346_32319;
var G__32330 = chunk__31347_32320;
var G__32331 = count__31348_32321;
var G__32332 = (i__31349_32322 + (1));
seq__31346_32319 = G__32329;
chunk__31347_32320 = G__32330;
count__31348_32321 = G__32331;
i__31349_32322 = G__32332;
continue;
} else {
var temp__5804__auto___32334 = cljs.core.seq(seq__31346_32319);
if(temp__5804__auto___32334){
var seq__31346_32335__$1 = temp__5804__auto___32334;
if(cljs.core.chunked_seq_QMARK_(seq__31346_32335__$1)){
var c__5568__auto___32336 = cljs.core.chunk_first(seq__31346_32335__$1);
var G__32337 = cljs.core.chunk_rest(seq__31346_32335__$1);
var G__32338 = c__5568__auto___32336;
var G__32339 = cljs.core.count(c__5568__auto___32336);
var G__32340 = (0);
seq__31346_32319 = G__32337;
chunk__31347_32320 = G__32338;
count__31348_32321 = G__32339;
i__31349_32322 = G__32340;
continue;
} else {
var vec__31365_32341 = cljs.core.first(seq__31346_32335__$1);
var n_32342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31365_32341,(0),null);
var meth_32343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31365_32341,(1),null);
var c_32344 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_32343));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_32343))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_32224,".cljs$core$IFn$_invoke$arity$variadic = ",n_32342,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_32224,".cljs$core$IFn$_invoke$arity$",c_32344," = ",n_32342,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__32346 = cljs.core.next(seq__31346_32335__$1);
var G__32347 = null;
var G__32348 = (0);
var G__32349 = (0);
seq__31346_32319 = G__32346;
chunk__31347_32320 = G__32347;
count__31348_32321 = G__32348;
i__31349_32322 = G__32349;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_32224,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__31386){
var map__31387 = p__31386;
var map__31387__$1 = cljs.core.__destructure_map(map__31387);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31387__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31387__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31387__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__31395_32351 = cljs.core.seq(statements);
var chunk__31396_32352 = null;
var count__31397_32353 = (0);
var i__31398_32354 = (0);
while(true){
if((i__31398_32354 < count__31397_32353)){
var s_32355 = chunk__31396_32352.cljs$core$IIndexed$_nth$arity$2(null,i__31398_32354);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_32355);


var G__32356 = seq__31395_32351;
var G__32357 = chunk__31396_32352;
var G__32358 = count__31397_32353;
var G__32359 = (i__31398_32354 + (1));
seq__31395_32351 = G__32356;
chunk__31396_32352 = G__32357;
count__31397_32353 = G__32358;
i__31398_32354 = G__32359;
continue;
} else {
var temp__5804__auto___32360 = cljs.core.seq(seq__31395_32351);
if(temp__5804__auto___32360){
var seq__31395_32361__$1 = temp__5804__auto___32360;
if(cljs.core.chunked_seq_QMARK_(seq__31395_32361__$1)){
var c__5568__auto___32365 = cljs.core.chunk_first(seq__31395_32361__$1);
var G__32366 = cljs.core.chunk_rest(seq__31395_32361__$1);
var G__32367 = c__5568__auto___32365;
var G__32368 = cljs.core.count(c__5568__auto___32365);
var G__32369 = (0);
seq__31395_32351 = G__32366;
chunk__31396_32352 = G__32367;
count__31397_32353 = G__32368;
i__31398_32354 = G__32369;
continue;
} else {
var s_32370 = cljs.core.first(seq__31395_32361__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_32370);


var G__32371 = cljs.core.next(seq__31395_32361__$1);
var G__32372 = null;
var G__32373 = (0);
var G__32374 = (0);
seq__31395_32351 = G__32371;
chunk__31396_32352 = G__32372;
count__31397_32353 = G__32373;
i__31398_32354 = G__32374;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__31407){
var map__31408 = p__31407;
var map__31408__$1 = cljs.core.__destructure_map(map__31408);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31408__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31408__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31408__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31408__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31408__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__5045__auto__ = name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__31413,is_loop){
var map__31414 = p__31413;
var map__31414__$1 = cljs.core.__destructure_map(map__31414);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31414__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31414__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31414__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__31416_32383 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__31417_32384 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__31417_32384);

try{var seq__31422_32385 = cljs.core.seq(bindings);
var chunk__31423_32386 = null;
var count__31424_32387 = (0);
var i__31425_32388 = (0);
while(true){
if((i__31425_32388 < count__31424_32387)){
var map__31444_32389 = chunk__31423_32386.cljs$core$IIndexed$_nth$arity$2(null,i__31425_32388);
var map__31444_32390__$1 = cljs.core.__destructure_map(map__31444_32389);
var binding_32391 = map__31444_32390__$1;
var init_32392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31444_32390__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_32391);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_32392,";");


var G__32393 = seq__31422_32385;
var G__32394 = chunk__31423_32386;
var G__32395 = count__31424_32387;
var G__32396 = (i__31425_32388 + (1));
seq__31422_32385 = G__32393;
chunk__31423_32386 = G__32394;
count__31424_32387 = G__32395;
i__31425_32388 = G__32396;
continue;
} else {
var temp__5804__auto___32397 = cljs.core.seq(seq__31422_32385);
if(temp__5804__auto___32397){
var seq__31422_32398__$1 = temp__5804__auto___32397;
if(cljs.core.chunked_seq_QMARK_(seq__31422_32398__$1)){
var c__5568__auto___32399 = cljs.core.chunk_first(seq__31422_32398__$1);
var G__32400 = cljs.core.chunk_rest(seq__31422_32398__$1);
var G__32401 = c__5568__auto___32399;
var G__32402 = cljs.core.count(c__5568__auto___32399);
var G__32403 = (0);
seq__31422_32385 = G__32400;
chunk__31423_32386 = G__32401;
count__31424_32387 = G__32402;
i__31425_32388 = G__32403;
continue;
} else {
var map__31448_32404 = cljs.core.first(seq__31422_32398__$1);
var map__31448_32405__$1 = cljs.core.__destructure_map(map__31448_32404);
var binding_32406 = map__31448_32405__$1;
var init_32407 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31448_32405__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_32406);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_32407,";");


var G__32408 = cljs.core.next(seq__31422_32398__$1);
var G__32409 = null;
var G__32410 = (0);
var G__32411 = (0);
seq__31422_32385 = G__32408;
chunk__31423_32386 = G__32409;
count__31424_32387 = G__32410;
i__31425_32388 = G__32411;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__31416_32383);
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__31472){
var map__31473 = p__31472;
var map__31473__$1 = cljs.core.__destructure_map(map__31473);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31473__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31473__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31473__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__5636__auto___32418 = cljs.core.count(exprs);
var i_32420 = (0);
while(true){
if((i_32420 < n__5636__auto___32418)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_32420) : temps.call(null,i_32420))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_32420) : exprs.call(null,i_32420)),";");

var G__32425 = (i_32420 + (1));
i_32420 = G__32425;
continue;
} else {
}
break;
}

var n__5636__auto___32426 = cljs.core.count(exprs);
var i_32427 = (0);
while(true){
if((i_32427 < n__5636__auto___32426)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_32427) : params.call(null,i_32427)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_32427) : temps.call(null,i_32427)),";");

var G__32428 = (i_32427 + (1));
i_32427 = G__32428;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__31480){
var map__31481 = p__31480;
var map__31481__$1 = cljs.core.__destructure_map(map__31481);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31481__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31481__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31481__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__31482_32429 = cljs.core.seq(bindings);
var chunk__31483_32430 = null;
var count__31484_32431 = (0);
var i__31485_32432 = (0);
while(true){
if((i__31485_32432 < count__31484_32431)){
var map__31491_32433 = chunk__31483_32430.cljs$core$IIndexed$_nth$arity$2(null,i__31485_32432);
var map__31491_32434__$1 = cljs.core.__destructure_map(map__31491_32433);
var binding_32435 = map__31491_32434__$1;
var init_32436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31491_32434__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_32435)," = ",init_32436,";");


var G__32437 = seq__31482_32429;
var G__32438 = chunk__31483_32430;
var G__32439 = count__31484_32431;
var G__32440 = (i__31485_32432 + (1));
seq__31482_32429 = G__32437;
chunk__31483_32430 = G__32438;
count__31484_32431 = G__32439;
i__31485_32432 = G__32440;
continue;
} else {
var temp__5804__auto___32441 = cljs.core.seq(seq__31482_32429);
if(temp__5804__auto___32441){
var seq__31482_32442__$1 = temp__5804__auto___32441;
if(cljs.core.chunked_seq_QMARK_(seq__31482_32442__$1)){
var c__5568__auto___32443 = cljs.core.chunk_first(seq__31482_32442__$1);
var G__32444 = cljs.core.chunk_rest(seq__31482_32442__$1);
var G__32445 = c__5568__auto___32443;
var G__32446 = cljs.core.count(c__5568__auto___32443);
var G__32447 = (0);
seq__31482_32429 = G__32444;
chunk__31483_32430 = G__32445;
count__31484_32431 = G__32446;
i__31485_32432 = G__32447;
continue;
} else {
var map__31493_32449 = cljs.core.first(seq__31482_32442__$1);
var map__31493_32450__$1 = cljs.core.__destructure_map(map__31493_32449);
var binding_32451 = map__31493_32450__$1;
var init_32452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31493_32450__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_32451)," = ",init_32452,";");


var G__32454 = cljs.core.next(seq__31482_32442__$1);
var G__32455 = null;
var G__32456 = (0);
var G__32457 = (0);
seq__31482_32429 = G__32454;
chunk__31483_32430 = G__32455;
count__31484_32431 = G__32456;
i__31485_32432 = G__32457;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__31506){
var map__31507 = p__31506;
var map__31507__$1 = cljs.core.__destructure_map(map__31507);
var expr = map__31507__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31507__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31507__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31507__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__5043__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = cljs.core.not(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__5043__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__5043__auto__ = protocol;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = tag;
if(cljs.core.truth_(and__5043__auto____$1)){
var or__5045__auto__ = (function (){var and__5043__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = protocol;
if(cljs.core.truth_(and__5043__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto____$2 = (function (){var or__5045__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__5043__auto____$2)){
var or__5045__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__5045__auto____$1){
return or__5045__auto____$1;
} else {
var and__5043__auto____$3 = (!(cljs.core.set_QMARK_(tag)));
if(and__5043__auto____$3){
var and__5043__auto____$4 = cljs.core.not((function (){var fexpr__31512 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__31512.cljs$core$IFn$_invoke$arity$1 ? fexpr__31512.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__31512.call(null,tag));
})());
if(and__5043__auto____$4){
var temp__5804__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tag,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true)));
if(cljs.core.truth_(temp__5804__auto__)){
var ps = temp__5804__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
}
} else {
return and__5043__auto____$2;
}
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})();
var first_arg_tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var opt_not_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_arg_tag,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__31516 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__31516.cljs$core$IFn$_invoke$arity$1 ? fexpr__31516.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__31516.call(null,first_arg_tag));
})())));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var ftag = cljs.analyzer.infer_tag(env,f);
var js_QMARK_ = (function (){var or__5045__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"js","js",-886355190,null));
if(or__5045__auto__){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null));
if(or__5045__auto____$1){
return or__5045__auto____$1;
} else {
return new cljs.core.Keyword(null,"foreign","foreign",990521149).cljs$core$IFn$_invoke$arity$1(info);
}
}
})();
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__5045__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__5045__auto__){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var temp__5804__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5804__auto__)){
var ns_str = temp__5804__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_(new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__5045__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),ftag);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote(f);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__31508 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return (arity > mfa);
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__31504_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31504_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__31505_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31505_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31508,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31508,(1),null);
var env__9256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(!(",cljs.core.first(args),"))");
} else {
if(opt_count_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("((",cljs.core.first(args),").length)");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_32489 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_32489,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_32490 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_32490,args)),(((mfa_32490 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_32490,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = js_QMARK_;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,"(",cljs.compiler.comma_sep(args),")");
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__5043__auto__)){
var G__31525 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__31524 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__31524.cljs$core$IFn$_invoke$arity$1 ? fexpr__31524.cljs$core$IFn$_invoke$arity$1(G__31525) : fexpr__31524.call(null,G__31525));
} else {
return and__5043__auto__;
}
})())){
var fprop_32499 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_32499," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_32499,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_32499," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_32499,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")");
}

}
}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__31526){
var map__31528 = p__31526;
var map__31528__$1 = cljs.core.__destructure_map(map__31528);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31528__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31528__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31528__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__31532){
var map__31533 = p__31532;
var map__31533__$1 = cljs.core.__destructure_map(map__31533);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31533__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31533__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31533__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(",target," = ",val,")");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.sublib_select = (function cljs$compiler$sublib_select(sublib){
if(cljs.core.truth_(sublib)){
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(sublib,/\./);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31536_SHARP_){
return ["['",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31536_SHARP_),"']"].join('');
}),xs));
} else {
return null;
}
});
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
var vec__31537 = cljs.analyzer.lib_AMPERSAND_sublib(lib);
var lib_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31537,(0),null);
var sublib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31537,(1),null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib)," = goog.global",cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name((function (){var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib_SINGLEQUOTE_));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.name(lib_SINGLEQUOTE_));
}
})()),/\./))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.sublib_select(sublib),";"], 0));
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__31542 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__31542__$1 = cljs.core.__destructure_map(map__31542);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31542__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31542__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__31543 = options;
var map__31543__$1 = cljs.core.__destructure_map(map__31543);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31543__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31543__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31543__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__31544 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__31550 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__31550__$1 = cljs.core.__destructure_map(map__31550);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31550__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31550__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31544,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31544,(1),null);
var vec__31547 = (function (){var map__31551 = cljs.core.group_by(cljs.analyzer.goog_module_dep_QMARK_,libs_to_load);
var map__31551__$1 = cljs.core.__destructure_map(map__31551);
var goog_modules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31551__$1,true);
var libs_to_load__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31551__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog_modules,libs_to_load__$1], null);
})();
var goog_modules = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31547,(0),null);
var libs_to_load__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31547,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__31552_32522 = cljs.core.seq(libs_to_load__$1);
var chunk__31553_32523 = null;
var count__31554_32524 = (0);
var i__31555_32525 = (0);
while(true){
if((i__31555_32525 < count__31554_32524)){
var lib_32526 = chunk__31553_32523.cljs$core$IIndexed$_nth$arity$2(null,i__31555_32525);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_32526)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_32526),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_32526),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_32526),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_32526),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_32526,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_32526),"');");
}

}
}
}


var G__32529 = seq__31552_32522;
var G__32530 = chunk__31553_32523;
var G__32531 = count__31554_32524;
var G__32533 = (i__31555_32525 + (1));
seq__31552_32522 = G__32529;
chunk__31553_32523 = G__32530;
count__31554_32524 = G__32531;
i__31555_32525 = G__32533;
continue;
} else {
var temp__5804__auto___32537 = cljs.core.seq(seq__31552_32522);
if(temp__5804__auto___32537){
var seq__31552_32538__$1 = temp__5804__auto___32537;
if(cljs.core.chunked_seq_QMARK_(seq__31552_32538__$1)){
var c__5568__auto___32539 = cljs.core.chunk_first(seq__31552_32538__$1);
var G__32540 = cljs.core.chunk_rest(seq__31552_32538__$1);
var G__32541 = c__5568__auto___32539;
var G__32542 = cljs.core.count(c__5568__auto___32539);
var G__32543 = (0);
seq__31552_32522 = G__32540;
chunk__31553_32523 = G__32541;
count__31554_32524 = G__32542;
i__31555_32525 = G__32543;
continue;
} else {
var lib_32544 = cljs.core.first(seq__31552_32538__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_32544)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_32544),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_32544),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_32544),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_32544),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_32544,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_32544),"');");
}

}
}
}


var G__32546 = cljs.core.next(seq__31552_32538__$1);
var G__32547 = null;
var G__32548 = (0);
var G__32549 = (0);
seq__31552_32522 = G__32546;
chunk__31553_32523 = G__32547;
count__31554_32524 = G__32548;
i__31555_32525 = G__32549;
continue;
}
} else {
}
}
break;
}

var seq__31561_32550 = cljs.core.seq(node_libs);
var chunk__31562_32551 = null;
var count__31563_32552 = (0);
var i__31564_32553 = (0);
while(true){
if((i__31564_32553 < count__31563_32552)){
var lib_32554 = chunk__31562_32551.cljs$core$IIndexed$_nth$arity$2(null,i__31564_32553);
var vec__31571_32555 = cljs.analyzer.lib_AMPERSAND_sublib(lib_32554);
var lib_SINGLEQUOTE__32556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31571_32555,(0),null);
var sublib_32557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31571_32555,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_32554)," = require('",lib_SINGLEQUOTE__32556,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["')",cljs.compiler.sublib_select(sublib_32557),";"], 0));


var G__32558 = seq__31561_32550;
var G__32559 = chunk__31562_32551;
var G__32560 = count__31563_32552;
var G__32561 = (i__31564_32553 + (1));
seq__31561_32550 = G__32558;
chunk__31562_32551 = G__32559;
count__31563_32552 = G__32560;
i__31564_32553 = G__32561;
continue;
} else {
var temp__5804__auto___32562 = cljs.core.seq(seq__31561_32550);
if(temp__5804__auto___32562){
var seq__31561_32563__$1 = temp__5804__auto___32562;
if(cljs.core.chunked_seq_QMARK_(seq__31561_32563__$1)){
var c__5568__auto___32564 = cljs.core.chunk_first(seq__31561_32563__$1);
var G__32565 = cljs.core.chunk_rest(seq__31561_32563__$1);
var G__32566 = c__5568__auto___32564;
var G__32567 = cljs.core.count(c__5568__auto___32564);
var G__32568 = (0);
seq__31561_32550 = G__32565;
chunk__31562_32551 = G__32566;
count__31563_32552 = G__32567;
i__31564_32553 = G__32568;
continue;
} else {
var lib_32573 = cljs.core.first(seq__31561_32563__$1);
var vec__31574_32574 = cljs.analyzer.lib_AMPERSAND_sublib(lib_32573);
var lib_SINGLEQUOTE__32575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31574_32574,(0),null);
var sublib_32576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31574_32574,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_32573)," = require('",lib_SINGLEQUOTE__32575,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["')",cljs.compiler.sublib_select(sublib_32576),";"], 0));


var G__32577 = cljs.core.next(seq__31561_32563__$1);
var G__32578 = null;
var G__32579 = (0);
var G__32580 = (0);
seq__31561_32550 = G__32577;
chunk__31562_32551 = G__32578;
count__31563_32552 = G__32579;
i__31564_32553 = G__32580;
continue;
}
} else {
}
}
break;
}

var seq__31577_32585 = cljs.core.seq(goog_modules);
var chunk__31578_32586 = null;
var count__31579_32587 = (0);
var i__31580_32588 = (0);
while(true){
if((i__31580_32588 < count__31579_32587)){
var lib_32589 = chunk__31578_32586.cljs$core$IIndexed$_nth$arity$2(null,i__31580_32588);
var vec__31587_32590 = cljs.analyzer.lib_AMPERSAND_sublib(lib_32589);
var lib_SINGLEQUOTE__32591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31587_32590,(0),null);
var sublib_32592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31587_32590,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",lib_SINGLEQUOTE__32591,"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.scope(function(){");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_goog_module_lib.cljs$core$IFn$_invoke$arity$1(lib_32589)," = goog.module.get('",lib_SINGLEQUOTE__32591,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["')",cljs.compiler.sublib_select(sublib_32592),";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");


var G__32593 = seq__31577_32585;
var G__32594 = chunk__31578_32586;
var G__32595 = count__31579_32587;
var G__32596 = (i__31580_32588 + (1));
seq__31577_32585 = G__32593;
chunk__31578_32586 = G__32594;
count__31579_32587 = G__32595;
i__31580_32588 = G__32596;
continue;
} else {
var temp__5804__auto___32597 = cljs.core.seq(seq__31577_32585);
if(temp__5804__auto___32597){
var seq__31577_32598__$1 = temp__5804__auto___32597;
if(cljs.core.chunked_seq_QMARK_(seq__31577_32598__$1)){
var c__5568__auto___32599 = cljs.core.chunk_first(seq__31577_32598__$1);
var G__32600 = cljs.core.chunk_rest(seq__31577_32598__$1);
var G__32601 = c__5568__auto___32599;
var G__32602 = cljs.core.count(c__5568__auto___32599);
var G__32603 = (0);
seq__31577_32585 = G__32600;
chunk__31578_32586 = G__32601;
count__31579_32587 = G__32602;
i__31580_32588 = G__32603;
continue;
} else {
var lib_32604 = cljs.core.first(seq__31577_32598__$1);
var vec__31590_32605 = cljs.analyzer.lib_AMPERSAND_sublib(lib_32604);
var lib_SINGLEQUOTE__32606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31590_32605,(0),null);
var sublib_32607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31590_32605,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",lib_SINGLEQUOTE__32606,"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.scope(function(){");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_goog_module_lib.cljs$core$IFn$_invoke$arity$1(lib_32604)," = goog.module.get('",lib_SINGLEQUOTE__32606,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["')",cljs.compiler.sublib_select(sublib_32607),";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");


var G__32612 = cljs.core.next(seq__31577_32598__$1);
var G__32613 = null;
var G__32614 = (0);
var G__32615 = (0);
seq__31577_32585 = G__32612;
chunk__31578_32586 = G__32613;
count__31579_32587 = G__32614;
i__31580_32588 = G__32615;
continue;
}
} else {
}
}
break;
}

var seq__31593_32616 = cljs.core.seq(global_exports_libs);
var chunk__31594_32617 = null;
var count__31595_32618 = (0);
var i__31596_32619 = (0);
while(true){
if((i__31596_32619 < count__31595_32618)){
var lib_32620 = chunk__31594_32617.cljs$core$IIndexed$_nth$arity$2(null,i__31596_32619);
var map__31607_32625 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(cljs.core.first(cljs.analyzer.lib_AMPERSAND_sublib(lib_32620))));
var map__31607_32626__$1 = cljs.core.__destructure_map(map__31607_32625);
var global_exports_32627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31607_32626__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_32627,lib_32620);


var G__32628 = seq__31593_32616;
var G__32629 = chunk__31594_32617;
var G__32630 = count__31595_32618;
var G__32631 = (i__31596_32619 + (1));
seq__31593_32616 = G__32628;
chunk__31594_32617 = G__32629;
count__31595_32618 = G__32630;
i__31596_32619 = G__32631;
continue;
} else {
var temp__5804__auto___32632 = cljs.core.seq(seq__31593_32616);
if(temp__5804__auto___32632){
var seq__31593_32633__$1 = temp__5804__auto___32632;
if(cljs.core.chunked_seq_QMARK_(seq__31593_32633__$1)){
var c__5568__auto___32634 = cljs.core.chunk_first(seq__31593_32633__$1);
var G__32635 = cljs.core.chunk_rest(seq__31593_32633__$1);
var G__32636 = c__5568__auto___32634;
var G__32637 = cljs.core.count(c__5568__auto___32634);
var G__32638 = (0);
seq__31593_32616 = G__32635;
chunk__31594_32617 = G__32636;
count__31595_32618 = G__32637;
i__31596_32619 = G__32638;
continue;
} else {
var lib_32639 = cljs.core.first(seq__31593_32633__$1);
var map__31610_32640 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(cljs.core.first(cljs.analyzer.lib_AMPERSAND_sublib(lib_32639))));
var map__31610_32641__$1 = cljs.core.__destructure_map(map__31610_32640);
var global_exports_32642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31610_32641__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_32642,lib_32639);


var G__32647 = cljs.core.next(seq__31593_32633__$1);
var G__32648 = null;
var G__32649 = (0);
var G__32650 = (0);
seq__31593_32616 = G__32647;
chunk__31594_32617 = G__32648;
count__31595_32618 = G__32649;
i__31596_32619 = G__32650;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__31611){
var map__31612 = p__31611;
var map__31612__$1 = cljs.core.__destructure_map(map__31612);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31612__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31612__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31612__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31612__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31612__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31612__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31612__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__31613){
var map__31614 = p__31613;
var map__31614__$1 = cljs.core.__destructure_map(map__31614);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31614__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31614__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31614__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31614__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31614__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31614__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31614__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__31615){
var map__31616 = p__31615;
var map__31616__$1 = cljs.core.__destructure_map(map__31616);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31616__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31616__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31616__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31616__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31616__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__31618_32655 = cljs.core.seq(protocols);
var chunk__31619_32656 = null;
var count__31620_32657 = (0);
var i__31621_32658 = (0);
while(true){
if((i__31621_32658 < count__31620_32657)){
var protocol_32659 = chunk__31619_32656.cljs$core$IIndexed$_nth$arity$2(null,i__31621_32658);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_32659)),"}");


var G__32660 = seq__31618_32655;
var G__32661 = chunk__31619_32656;
var G__32662 = count__31620_32657;
var G__32663 = (i__31621_32658 + (1));
seq__31618_32655 = G__32660;
chunk__31619_32656 = G__32661;
count__31620_32657 = G__32662;
i__31621_32658 = G__32663;
continue;
} else {
var temp__5804__auto___32664 = cljs.core.seq(seq__31618_32655);
if(temp__5804__auto___32664){
var seq__31618_32665__$1 = temp__5804__auto___32664;
if(cljs.core.chunked_seq_QMARK_(seq__31618_32665__$1)){
var c__5568__auto___32666 = cljs.core.chunk_first(seq__31618_32665__$1);
var G__32667 = cljs.core.chunk_rest(seq__31618_32665__$1);
var G__32668 = c__5568__auto___32666;
var G__32669 = cljs.core.count(c__5568__auto___32666);
var G__32670 = (0);
seq__31618_32655 = G__32667;
chunk__31619_32656 = G__32668;
count__31620_32657 = G__32669;
i__31621_32658 = G__32670;
continue;
} else {
var protocol_32671 = cljs.core.first(seq__31618_32665__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_32671)),"}");


var G__32672 = cljs.core.next(seq__31618_32665__$1);
var G__32673 = null;
var G__32674 = (0);
var G__32675 = (0);
seq__31618_32655 = G__32672;
chunk__31619_32656 = G__32673;
count__31620_32657 = G__32674;
i__31621_32658 = G__32675;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__31622_32678 = cljs.core.seq(fields__$1);
var chunk__31623_32679 = null;
var count__31624_32680 = (0);
var i__31625_32681 = (0);
while(true){
if((i__31625_32681 < count__31624_32680)){
var fld_32686 = chunk__31623_32679.cljs$core$IIndexed$_nth$arity$2(null,i__31625_32681);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_32686," = ",fld_32686,";");


var G__32687 = seq__31622_32678;
var G__32688 = chunk__31623_32679;
var G__32689 = count__31624_32680;
var G__32690 = (i__31625_32681 + (1));
seq__31622_32678 = G__32687;
chunk__31623_32679 = G__32688;
count__31624_32680 = G__32689;
i__31625_32681 = G__32690;
continue;
} else {
var temp__5804__auto___32691 = cljs.core.seq(seq__31622_32678);
if(temp__5804__auto___32691){
var seq__31622_32693__$1 = temp__5804__auto___32691;
if(cljs.core.chunked_seq_QMARK_(seq__31622_32693__$1)){
var c__5568__auto___32695 = cljs.core.chunk_first(seq__31622_32693__$1);
var G__32697 = cljs.core.chunk_rest(seq__31622_32693__$1);
var G__32698 = c__5568__auto___32695;
var G__32699 = cljs.core.count(c__5568__auto___32695);
var G__32700 = (0);
seq__31622_32678 = G__32697;
chunk__31623_32679 = G__32698;
count__31624_32680 = G__32699;
i__31625_32681 = G__32700;
continue;
} else {
var fld_32706 = cljs.core.first(seq__31622_32693__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_32706," = ",fld_32706,";");


var G__32707 = cljs.core.next(seq__31622_32693__$1);
var G__32708 = null;
var G__32709 = (0);
var G__32710 = (0);
seq__31622_32678 = G__32707;
chunk__31623_32679 = G__32708;
count__31624_32680 = G__32709;
i__31625_32681 = G__32710;
continue;
}
} else {
}
}
break;
}

var seq__31626_32716 = cljs.core.seq(pmasks);
var chunk__31627_32717 = null;
var count__31628_32718 = (0);
var i__31629_32719 = (0);
while(true){
if((i__31629_32719 < count__31628_32718)){
var vec__31636_32720 = chunk__31627_32717.cljs$core$IIndexed$_nth$arity$2(null,i__31629_32719);
var pno_32721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31636_32720,(0),null);
var pmask_32722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31636_32720,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_32721,"$ = ",pmask_32722,";");


var G__32723 = seq__31626_32716;
var G__32724 = chunk__31627_32717;
var G__32725 = count__31628_32718;
var G__32726 = (i__31629_32719 + (1));
seq__31626_32716 = G__32723;
chunk__31627_32717 = G__32724;
count__31628_32718 = G__32725;
i__31629_32719 = G__32726;
continue;
} else {
var temp__5804__auto___32727 = cljs.core.seq(seq__31626_32716);
if(temp__5804__auto___32727){
var seq__31626_32728__$1 = temp__5804__auto___32727;
if(cljs.core.chunked_seq_QMARK_(seq__31626_32728__$1)){
var c__5568__auto___32729 = cljs.core.chunk_first(seq__31626_32728__$1);
var G__32730 = cljs.core.chunk_rest(seq__31626_32728__$1);
var G__32731 = c__5568__auto___32729;
var G__32732 = cljs.core.count(c__5568__auto___32729);
var G__32733 = (0);
seq__31626_32716 = G__32730;
chunk__31627_32717 = G__32731;
count__31628_32718 = G__32732;
i__31629_32719 = G__32733;
continue;
} else {
var vec__31639_32734 = cljs.core.first(seq__31626_32728__$1);
var pno_32735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31639_32734,(0),null);
var pmask_32736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31639_32734,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_32735,"$ = ",pmask_32736,";");


var G__32737 = cljs.core.next(seq__31626_32728__$1);
var G__32738 = null;
var G__32739 = (0);
var G__32740 = (0);
seq__31626_32716 = G__32737;
chunk__31627_32717 = G__32738;
count__31628_32718 = G__32739;
i__31629_32719 = G__32740;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__31642){
var map__31643 = p__31642;
var map__31643__$1 = cljs.core.__destructure_map(map__31643);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31643__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31643__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31643__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31643__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31643__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__31644_32746 = cljs.core.seq(protocols);
var chunk__31645_32747 = null;
var count__31646_32748 = (0);
var i__31647_32749 = (0);
while(true){
if((i__31647_32749 < count__31646_32748)){
var protocol_32750 = chunk__31645_32747.cljs$core$IIndexed$_nth$arity$2(null,i__31647_32749);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_32750)),"}");


var G__32751 = seq__31644_32746;
var G__32752 = chunk__31645_32747;
var G__32753 = count__31646_32748;
var G__32754 = (i__31647_32749 + (1));
seq__31644_32746 = G__32751;
chunk__31645_32747 = G__32752;
count__31646_32748 = G__32753;
i__31647_32749 = G__32754;
continue;
} else {
var temp__5804__auto___32755 = cljs.core.seq(seq__31644_32746);
if(temp__5804__auto___32755){
var seq__31644_32756__$1 = temp__5804__auto___32755;
if(cljs.core.chunked_seq_QMARK_(seq__31644_32756__$1)){
var c__5568__auto___32757 = cljs.core.chunk_first(seq__31644_32756__$1);
var G__32758 = cljs.core.chunk_rest(seq__31644_32756__$1);
var G__32759 = c__5568__auto___32757;
var G__32760 = cljs.core.count(c__5568__auto___32757);
var G__32761 = (0);
seq__31644_32746 = G__32758;
chunk__31645_32747 = G__32759;
count__31646_32748 = G__32760;
i__31647_32749 = G__32761;
continue;
} else {
var protocol_32762 = cljs.core.first(seq__31644_32756__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_32762)),"}");


var G__32763 = cljs.core.next(seq__31644_32756__$1);
var G__32764 = null;
var G__32765 = (0);
var G__32766 = (0);
seq__31644_32746 = G__32763;
chunk__31645_32747 = G__32764;
count__31646_32748 = G__32765;
i__31647_32749 = G__32766;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__31649_32767 = cljs.core.seq(fields__$1);
var chunk__31650_32768 = null;
var count__31651_32769 = (0);
var i__31652_32770 = (0);
while(true){
if((i__31652_32770 < count__31651_32769)){
var fld_32771 = chunk__31650_32768.cljs$core$IIndexed$_nth$arity$2(null,i__31652_32770);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_32771," = ",fld_32771,";");


var G__32772 = seq__31649_32767;
var G__32773 = chunk__31650_32768;
var G__32774 = count__31651_32769;
var G__32775 = (i__31652_32770 + (1));
seq__31649_32767 = G__32772;
chunk__31650_32768 = G__32773;
count__31651_32769 = G__32774;
i__31652_32770 = G__32775;
continue;
} else {
var temp__5804__auto___32776 = cljs.core.seq(seq__31649_32767);
if(temp__5804__auto___32776){
var seq__31649_32777__$1 = temp__5804__auto___32776;
if(cljs.core.chunked_seq_QMARK_(seq__31649_32777__$1)){
var c__5568__auto___32778 = cljs.core.chunk_first(seq__31649_32777__$1);
var G__32779 = cljs.core.chunk_rest(seq__31649_32777__$1);
var G__32780 = c__5568__auto___32778;
var G__32781 = cljs.core.count(c__5568__auto___32778);
var G__32782 = (0);
seq__31649_32767 = G__32779;
chunk__31650_32768 = G__32780;
count__31651_32769 = G__32781;
i__31652_32770 = G__32782;
continue;
} else {
var fld_32783 = cljs.core.first(seq__31649_32777__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_32783," = ",fld_32783,";");


var G__32784 = cljs.core.next(seq__31649_32777__$1);
var G__32785 = null;
var G__32786 = (0);
var G__32787 = (0);
seq__31649_32767 = G__32784;
chunk__31650_32768 = G__32785;
count__31651_32769 = G__32786;
i__31652_32770 = G__32787;
continue;
}
} else {
}
}
break;
}

var seq__31653_32788 = cljs.core.seq(pmasks);
var chunk__31654_32789 = null;
var count__31655_32790 = (0);
var i__31656_32791 = (0);
while(true){
if((i__31656_32791 < count__31655_32790)){
var vec__31663_32792 = chunk__31654_32789.cljs$core$IIndexed$_nth$arity$2(null,i__31656_32791);
var pno_32793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31663_32792,(0),null);
var pmask_32794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31663_32792,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_32793,"$ = ",pmask_32794,";");


var G__32795 = seq__31653_32788;
var G__32796 = chunk__31654_32789;
var G__32797 = count__31655_32790;
var G__32798 = (i__31656_32791 + (1));
seq__31653_32788 = G__32795;
chunk__31654_32789 = G__32796;
count__31655_32790 = G__32797;
i__31656_32791 = G__32798;
continue;
} else {
var temp__5804__auto___32799 = cljs.core.seq(seq__31653_32788);
if(temp__5804__auto___32799){
var seq__31653_32800__$1 = temp__5804__auto___32799;
if(cljs.core.chunked_seq_QMARK_(seq__31653_32800__$1)){
var c__5568__auto___32801 = cljs.core.chunk_first(seq__31653_32800__$1);
var G__32802 = cljs.core.chunk_rest(seq__31653_32800__$1);
var G__32803 = c__5568__auto___32801;
var G__32804 = cljs.core.count(c__5568__auto___32801);
var G__32805 = (0);
seq__31653_32788 = G__32802;
chunk__31654_32789 = G__32803;
count__31655_32790 = G__32804;
i__31656_32791 = G__32805;
continue;
} else {
var vec__31666_32806 = cljs.core.first(seq__31653_32800__$1);
var pno_32807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31666_32806,(0),null);
var pmask_32808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31666_32806,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_32807,"$ = ",pmask_32808,";");


var G__32810 = cljs.core.next(seq__31653_32800__$1);
var G__32811 = null;
var G__32812 = (0);
var G__32813 = (0);
seq__31653_32788 = G__32810;
chunk__31654_32789 = G__32811;
count__31655_32790 = G__32812;
i__31656_32791 = G__32813;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__31669){
var map__31670 = p__31669;
var map__31670__$1 = cljs.core.__destructure_map(map__31670);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31670__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31670__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31670__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31670__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31670__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"host-field","host-field",-72662140),(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"host-call","host-call",1059629755),(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__31672){
var map__31673 = p__31672;
var map__31673__$1 = cljs.core.__destructure_map(map__31673);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31673__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31673__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31673__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31673__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31673__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__5043__auto__ = code;
if(cljs.core.truth_(and__5043__auto__)){
return goog.string.startsWith(clojure.string.trim(code),"/*");
} else {
return and__5043__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__9256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__31678 = cljs.core.seq(table);
var chunk__31679 = null;
var count__31680 = (0);
var i__31681 = (0);
while(true){
if((i__31681 < count__31680)){
var vec__31688 = chunk__31679.cljs$core$IIndexed$_nth$arity$2(null,i__31681);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31688,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31688,(1),null);
var ns_32828 = cljs.core.namespace(sym);
var name_32829 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__32830 = seq__31678;
var G__32831 = chunk__31679;
var G__32832 = count__31680;
var G__32833 = (i__31681 + (1));
seq__31678 = G__32830;
chunk__31679 = G__32831;
count__31680 = G__32832;
i__31681 = G__32833;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31678);
if(temp__5804__auto__){
var seq__31678__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31678__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__31678__$1);
var G__32834 = cljs.core.chunk_rest(seq__31678__$1);
var G__32835 = c__5568__auto__;
var G__32836 = cljs.core.count(c__5568__auto__);
var G__32837 = (0);
seq__31678 = G__32834;
chunk__31679 = G__32835;
count__31680 = G__32836;
i__31681 = G__32837;
continue;
} else {
var vec__31691 = cljs.core.first(seq__31678__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31691,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31691,(1),null);
var ns_32838 = cljs.core.namespace(sym);
var name_32839 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__32840 = cljs.core.next(seq__31678__$1);
var G__32841 = null;
var G__32842 = (0);
var G__32843 = (0);
seq__31678 = G__32840;
chunk__31679 = G__32841;
count__31680 = G__32842;
i__31681 = G__32843;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__31695 = arguments.length;
switch (G__31695) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.analyzer.get_externs():null));
}));

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq(cljs.core.keys(externs));
while(true){
if(ks){
var k_32845 = cljs.core.first(ks);
var vec__31696_32846 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_32845);
var top_32847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31696_32846,(0),null);
var prefix_SINGLEQUOTE__32848 = vec__31696_32846;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_32845)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__32848) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_32847)) || (cljs.core.contains_QMARK_(known_externs,top_32847)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__32848)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_32847);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__32848)),";");
}
} else {
}

var m_32850 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_32845);
if(cljs.core.empty_QMARK_(m_32850)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__32848,m_32850,top_level,known_externs);
}

var G__32852 = cljs.core.next(ks);
ks = G__32852;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);

