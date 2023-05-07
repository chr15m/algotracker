goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14699 = arguments.length;
var i__5770__auto___14700 = (0);
while(true){
if((i__5770__auto___14700 < len__5769__auto___14699)){
args__5775__auto__.push((arguments[i__5770__auto___14700]));

var G__14701 = (i__5770__auto___14700 + (1));
i__5770__auto___14700 = G__14701;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__14533_14702 = keyvals;
var vec__14534_14703 = G__14533_14702;
var seq__14535_14704 = cljs.core.seq(vec__14534_14703);
var first__14536_14705 = cljs.core.first(seq__14535_14704);
var seq__14535_14706__$1 = cljs.core.next(seq__14535_14704);
var k_14707 = first__14536_14705;
var first__14536_14708__$1 = cljs.core.first(seq__14535_14706__$1);
var seq__14535_14709__$2 = cljs.core.next(seq__14535_14706__$1);
var v_14710 = first__14536_14708__$1;
var keyvals_14711__$1 = seq__14535_14709__$2;
var G__14533_14712__$1 = G__14533_14702;
while(true){
var vec__14537_14713 = G__14533_14712__$1;
var seq__14538_14714 = cljs.core.seq(vec__14537_14713);
var first__14539_14715 = cljs.core.first(seq__14538_14714);
var seq__14538_14716__$1 = cljs.core.next(seq__14538_14714);
var k_14717__$1 = first__14539_14715;
var first__14539_14718__$1 = cljs.core.first(seq__14538_14716__$1);
var seq__14538_14719__$2 = cljs.core.next(seq__14538_14716__$1);
var v_14720__$1 = first__14539_14718__$1;
var keyvals_14721__$2 = seq__14538_14719__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_14717__$1)] = v_14720__$1);

if(keyvals_14721__$2){
var G__14722 = keyvals_14721__$2;
G__14533_14712__$1 = G__14722;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq14526){
var G__14527 = cljs.core.first(seq14526);
var seq14526__$1 = cljs.core.next(seq14526);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14527,seq14526__$1);
}));

applied_science.js_interop.unchecked_get = (function applied_science$js_interop$unchecked_get(obj,k){
return (obj[applied_science.js_interop.impl.wrap_key(k)]);
});
/**
 * Returns the value mapped to key, not-found or nil if key not present.
 * 
 *   ```
 *   (j/get o :k)
 *   (j/get o .-k)
 *   ```
 */
applied_science.js_interop.get = (function applied_science$js_interop$get(var_args){
var G__14541 = arguments.length;
switch (G__14541) {
case 2:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj14542 = obj;
var k14543 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj14544 = obj14542;
return (((!((obj14544 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k14543,obj14544)));
})()){
return (obj14542[k14543]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var obj14545 = obj;
var k14546 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj14547 = obj14545;
return (((!((obj14547 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k14546,obj14547)));
})()){
return (obj14545[k14546]);
} else {
return not_found;
}
}));

(applied_science.js_interop.get.cljs$lang$maxFixedArity = 3);

/**
 * Returns the value in a nested object structure, where ks is
 * a sequence of keys. Returns nil if the key is not present,
 * or the not-found value if supplied.
 * 
 * ```
 * (j/get-in o [:x :y] :fallback-value)
 * (j/get-in o [.-x .-y] :fallback-value)
 * ```
 */
applied_science.js_interop.get_in = (function applied_science$js_interop$get_in(var_args){
var G__14549 = arguments.length;
switch (G__14549) {
case 2:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,ks){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,ks,not_found){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$3(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),not_found);
}));

(applied_science.js_interop.get_in.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if `obj` contains `k`.
 * 
 *   ```
 *   (j/contains? o :k)
 *   (j/contains? o .-k)
 *   ```
 */
applied_science.js_interop.contains_QMARK_ = (function applied_science$js_interop$contains_QMARK_(obj,k){
return applied_science.js_interop.impl.contains_QMARK__STAR_(obj,applied_science.js_interop.impl.wrap_key(k));
});
/**
 * Returns an object containing only those entries in `o` whose key is in `ks`.
 * 
 *   ```
 *   (j/select-keys o [:a :b :c])
 *   (j/select-keys o [.-a .-b .-c])
 *   ```
 */
applied_science.js_interop.select_keys = (function applied_science$js_interop$select_keys(obj,ks){
return applied_science.js_interop.impl.select_keys_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.ILookup}
*/
applied_science.js_interop.JSLookup = (function (obj){
this.obj = obj;
this.cljs$lang$protocol_mask$partition0$ = 33024;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var obj14550 = self__.obj;
var k14551 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj14552 = obj14550;
return (((!((obj14552 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k14551,obj14552)));
})()){
return (obj14550[k14551]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var obj14553 = self__.obj;
var k14554 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj14555 = obj14553;
return (((!((obj14555 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k14554,obj14555)));
})()){
return (obj14553[k14554]);
} else {
return not_found;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.obj;
}));

(applied_science.js_interop.JSLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(applied_science.js_interop.JSLookup.cljs$lang$type = true);

(applied_science.js_interop.JSLookup.cljs$lang$ctorStr = "applied-science.js-interop/JSLookup");

(applied_science.js_interop.JSLookup.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"applied-science.js-interop/JSLookup");
}));

/**
 * Positional factory function for applied-science.js-interop/JSLookup.
 */
applied_science.js_interop.__GT_JSLookup = (function applied_science$js_interop$__GT_JSLookup(obj){
return (new applied_science.js_interop.JSLookup(obj));
});

/**
 * Wraps `obj` with an ILookup implementation, to support reading/destructuring. Does not support renamable keys.
 * 
 *   ```
 *   (let [{:keys [a b c]} (j/lookup o)]
 * ...)
 *   ```
 */
applied_science.js_interop.lookup = (function applied_science$js_interop$lookup(obj){
if(cljs.core.truth_(obj)){
return (new applied_science.js_interop.JSLookup(obj));
} else {
return null;
}
});
/**
 * Sets key-value pairs on `obj`, returns `obj`.
 * 
 *   ```
 *   (j/assoc! o :x 10)
 *   (j/assoc! o .-x 10)
 *   ```
 */
applied_science.js_interop.assoc_BANG_ = (function applied_science$js_interop$assoc_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14726 = arguments.length;
var i__5770__auto___14727 = (0);
while(true){
if((i__5770__auto___14727 < len__5769__auto___14726)){
args__5775__auto__.push((arguments[i__5770__auto___14727]));

var G__14728 = (i__5770__auto___14727 + (1));
i__5770__auto___14727 = G__14728;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var obj__$1 = (((!((obj == null))))?obj:({}));
var G__14567 = keyvals;
var vec__14569 = G__14567;
var seq__14570 = cljs.core.seq(vec__14569);
var first__14571 = cljs.core.first(seq__14570);
var seq__14570__$1 = cljs.core.next(seq__14570);
var k = first__14571;
var first__14571__$1 = cljs.core.first(seq__14570__$1);
var seq__14570__$2 = cljs.core.next(seq__14570__$1);
var v = first__14571__$1;
var kvs = seq__14570__$2;
var G__14567__$1 = G__14567;
while(true){
var vec__14574 = G__14567__$1;
var seq__14575 = cljs.core.seq(vec__14574);
var first__14576 = cljs.core.first(seq__14575);
var seq__14575__$1 = cljs.core.next(seq__14575);
var k__$1 = first__14576;
var first__14576__$1 = cljs.core.first(seq__14575__$1);
var seq__14575__$2 = cljs.core.next(seq__14575__$1);
var v__$1 = first__14576__$1;
var kvs__$1 = seq__14575__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__14731 = kvs__$1;
G__14567__$1 = G__14731;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq14556){
var G__14557 = cljs.core.first(seq14556);
var seq14556__$1 = cljs.core.next(seq14556);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14557,seq14556__$1);
}));

/**
 * Mutates the value in a nested object structure, where ks is a
 *   sequence of keys and v is the new value. If any levels do not
 *   exist, objects will be created.
 * 
 *   ```
 *   (j/assoc-in! o [:x :y] 10)
 *   (j/assoc-in! o [.-x .-y] 10)
 *   ```
 */
applied_science.js_interop.assoc_in_BANG_ = (function applied_science$js_interop$assoc_in_BANG_(obj,ks,v){
return applied_science.js_interop.impl.assoc_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),v);
});
/**
 * 'Updates' a value in a JavaScript object, where k is a key and
 *   f is a function that will take the old value and any supplied
 *   args and return the new value, which replaces the old value.
 *   If the key does not exist, nil is passed as the old value.
 * 
 *   ```
 *   (j/update! o :a + 10)
 *   (j/update! o .-a + 10)
 *   ```
 */
applied_science.js_interop.update_BANG_ = (function applied_science$js_interop$update_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14735 = arguments.length;
var i__5770__auto___14736 = (0);
while(true){
if((i__5770__auto___14736 < len__5769__auto___14735)){
args__5775__auto__.push((arguments[i__5770__auto___14736]));

var G__14738 = (i__5770__auto___14736 + (1));
i__5770__auto___14736 = G__14738;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
var obj__$1 = (((!((obj == null))))?obj:({}));
var k_STAR_ = applied_science.js_interop.impl.wrap_key(k);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,(obj__$1[k_STAR_]),args);
(obj__$1[k_STAR_] = v);

return obj__$1;
}));

(applied_science.js_interop.update_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq14581){
var G__14582 = cljs.core.first(seq14581);
var seq14581__$1 = cljs.core.next(seq14581);
var G__14583 = cljs.core.first(seq14581__$1);
var seq14581__$2 = cljs.core.next(seq14581__$1);
var G__14584 = cljs.core.first(seq14581__$2);
var seq14581__$3 = cljs.core.next(seq14581__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14582,G__14583,G__14584,seq14581__$3);
}));

/**
 * 'Updates' a value in a nested object structure, where ks is a
 *   sequence of keys and f is a function that will take the old value
 *   and any supplied args and return the new value, mutating the
 *   nested structure.  If any levels do not exist, objects will be
 *   created.
 * 
 *   ```
 *   (j/update-in! o [:x :y] + 10)
 *   (j/update-in! o [.-x .-y] + 10)
 *   ```
 */
applied_science.js_interop.update_in_BANG_ = (function applied_science$js_interop$update_in_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14767 = arguments.length;
var i__5770__auto___14768 = (0);
while(true){
if((i__5770__auto___14768 < len__5769__auto___14767)){
args__5775__auto__.push((arguments[i__5770__auto___14768]));

var G__14769 = (i__5770__auto___14768 + (1));
i__5770__auto___14768 = G__14769;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,f,args){
return applied_science.js_interop.impl.update_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),f,args);
}));

(applied_science.js_interop.update_in_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq14586){
var G__14587 = cljs.core.first(seq14586);
var seq14586__$1 = cljs.core.next(seq14586);
var G__14588 = cljs.core.first(seq14586__$1);
var seq14586__$2 = cljs.core.next(seq14586__$1);
var G__14589 = cljs.core.first(seq14586__$2);
var seq14586__$3 = cljs.core.next(seq14586__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14587,G__14588,G__14589,seq14586__$3);
}));

/**
 * Extends `obj` with the properties of one or more objects, overwriting
 * existing properties, moving left to right. Returns `obj`.
 * An empty starting object is provided if `obj` is nil.
 *   ```
 *   (j/extend o other)
 *   (j/extend o other #js{:x 1})
 *   ```
 *   Not IE6-friendly
 */
applied_science.js_interop.extend_BANG_ = (function applied_science$js_interop$extend_BANG_(var_args){
var G__14603 = arguments.length;
switch (G__14603) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___14777 = arguments.length;
var i__5770__auto___14778 = (0);
while(true){
if((i__5770__auto___14778 < len__5769__auto___14777)){
args_arr__5794__auto__.push((arguments[i__5770__auto___14778]));

var G__14779 = (i__5770__auto___14778 + (1));
i__5770__auto___14778 = G__14779;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return obj;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x){
var obj__$1 = (((!((obj == null))))?obj:({}));
if((!((x == null)))){
var seq__14609_14780 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__14610_14781 = null;
var count__14611_14782 = (0);
var i__14612_14783 = (0);
while(true){
if((i__14612_14783 < count__14611_14782)){
var k_14784 = chunk__14610_14781.cljs$core$IIndexed$_nth$arity$2(null,i__14612_14783);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_14784,applied_science.js_interop.unchecked_get(x,k_14784)], 0));


var G__14785 = seq__14609_14780;
var G__14786 = chunk__14610_14781;
var G__14787 = count__14611_14782;
var G__14788 = (i__14612_14783 + (1));
seq__14609_14780 = G__14785;
chunk__14610_14781 = G__14786;
count__14611_14782 = G__14787;
i__14612_14783 = G__14788;
continue;
} else {
var temp__5804__auto___14789 = cljs.core.seq(seq__14609_14780);
if(temp__5804__auto___14789){
var seq__14609_14790__$1 = temp__5804__auto___14789;
if(cljs.core.chunked_seq_QMARK_(seq__14609_14790__$1)){
var c__5568__auto___14792 = cljs.core.chunk_first(seq__14609_14790__$1);
var G__14793 = cljs.core.chunk_rest(seq__14609_14790__$1);
var G__14794 = c__5568__auto___14792;
var G__14795 = cljs.core.count(c__5568__auto___14792);
var G__14796 = (0);
seq__14609_14780 = G__14793;
chunk__14610_14781 = G__14794;
count__14611_14782 = G__14795;
i__14612_14783 = G__14796;
continue;
} else {
var k_14797 = cljs.core.first(seq__14609_14790__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_14797,applied_science.js_interop.unchecked_get(x,k_14797)], 0));


var G__14798 = cljs.core.next(seq__14609_14790__$1);
var G__14799 = null;
var G__14800 = (0);
var G__14801 = (0);
seq__14609_14780 = G__14798;
chunk__14610_14781 = G__14799;
count__14611_14782 = G__14800;
i__14612_14783 = G__14801;
continue;
}
} else {
}
}
break;
}
} else {
}

return obj__$1;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(applied_science.js_interop.extend_BANG_,applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(obj,x),more);
}));

/** @this {Function} */
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq14600){
var G__14601 = cljs.core.first(seq14600);
var seq14600__$1 = cljs.core.next(seq14600);
var G__14602 = cljs.core.first(seq14600__$1);
var seq14600__$2 = cljs.core.next(seq14600__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14601,G__14602,seq14600__$2);
}));

(applied_science.js_interop.extend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Appends `v` to `array` and returns the mutated array.
 * 
 *   ```
 *   (j/push! arr 10)
 *   ```
 */
applied_science.js_interop.push_BANG_ = (function applied_science$js_interop$push_BANG_(array,x){
var G__14629 = array;
G__14629.push(x);

return G__14629;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__14632 = array;
G__14632.unshift(x);

return G__14632;
});
/**
 * Call function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/call o :someFunction arg1 arg2)
 *   (j/call o .-someFunction arg1 arg2)
 *   ```
 */
applied_science.js_interop.call = (function applied_science$js_interop$call(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14810 = arguments.length;
var i__5770__auto___14811 = (0);
while(true){
if((i__5770__auto___14811 < len__5769__auto___14810)){
args__5775__auto__.push((arguments[i__5770__auto___14811]));

var G__14812 = (i__5770__auto___14811 + (1));
i__5770__auto___14811 = G__14812;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj14640 = obj;
var k14641 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj14642 = obj14640;
return (((!((obj14642 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k14641,obj14642)));
})()){
return (obj14640[k14641]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq14633){
var G__14635 = cljs.core.first(seq14633);
var seq14633__$1 = cljs.core.next(seq14633);
var G__14636 = cljs.core.first(seq14633__$1);
var seq14633__$2 = cljs.core.next(seq14633__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14635,G__14636,seq14633__$2);
}));

/**
 * Apply function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/apply o :someFunction #js [arg1 arg2])
 *   (j/apply o .-someFunction #js [arg1 arg2])
 *   ```
 */
applied_science.js_interop.apply = (function applied_science$js_interop$apply(obj,k,arg_array){
return (function (){var obj14646 = obj;
var k14647 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj14648 = obj14646;
return (((!((obj14648 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k14647,obj14648)));
})()){
return (obj14646[k14647]);
} else {
return undefined;
}
})().apply(obj,arg_array);
});
/**
 * Call function nested at `path` with `args`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/call-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.call_in = (function applied_science$js_interop$call_in(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14813 = arguments.length;
var i__5770__auto___14814 = (0);
while(true){
if((i__5770__auto___14814 < len__5769__auto___14813)){
args__5775__auto__.push((arguments[i__5770__auto___14814]));

var G__14815 = (i__5770__auto___14814 + (1));
i__5770__auto___14814 = G__14815;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,args){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),cljs.core.to_array(args));
}));

(applied_science.js_interop.call_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq14652){
var G__14653 = cljs.core.first(seq14652);
var seq14652__$1 = cljs.core.next(seq14652);
var G__14654 = cljs.core.first(seq14652__$1);
var seq14652__$2 = cljs.core.next(seq14652__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14653,G__14654,seq14652__$2);
}));

/**
 * Apply function nested at `path` with `arg-array`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/apply-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.apply_in = (function applied_science$js_interop$apply_in(obj,ks,arg_array){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),arg_array);
});
/**
 * Create JavaScript object from an even number arguments representing
 * interleaved keys and values.
 * 
 * ```
 * (obj :a 1 :b 2 .-c 3 .-d 4)
 * ```
 */
applied_science.js_interop.obj = (function applied_science$js_interop$obj(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14818 = arguments.length;
var i__5770__auto___14819 = (0);
while(true){
if((i__5770__auto___14819 < len__5769__auto___14818)){
args__5775__auto__.push((arguments[i__5770__auto___14819]));

var G__14820 = (i__5770__auto___14819 + (1));
i__5770__auto___14819 = G__14820;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var obj = ({});
var seq__14666_14821 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__14667_14822 = null;
var count__14668_14823 = (0);
var i__14669_14824 = (0);
while(true){
if((i__14669_14824 < count__14668_14823)){
var vec__14684_14825 = chunk__14667_14822.cljs$core$IIndexed$_nth$arity$2(null,i__14669_14824);
var k_14826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14684_14825,(0),null);
var v_14827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14684_14825,(1),null);
var obj14687_14828 = obj;
var obj14688_14829 = (((!((obj14687_14828 == null))))?obj14687_14828:({}));
(obj14688_14829[applied_science.js_interop.impl.wrap_key(k_14826)] = v_14827);



var G__14830 = seq__14666_14821;
var G__14831 = chunk__14667_14822;
var G__14832 = count__14668_14823;
var G__14833 = (i__14669_14824 + (1));
seq__14666_14821 = G__14830;
chunk__14667_14822 = G__14831;
count__14668_14823 = G__14832;
i__14669_14824 = G__14833;
continue;
} else {
var temp__5804__auto___14834 = cljs.core.seq(seq__14666_14821);
if(temp__5804__auto___14834){
var seq__14666_14835__$1 = temp__5804__auto___14834;
if(cljs.core.chunked_seq_QMARK_(seq__14666_14835__$1)){
var c__5568__auto___14836 = cljs.core.chunk_first(seq__14666_14835__$1);
var G__14837 = cljs.core.chunk_rest(seq__14666_14835__$1);
var G__14838 = c__5568__auto___14836;
var G__14839 = cljs.core.count(c__5568__auto___14836);
var G__14840 = (0);
seq__14666_14821 = G__14837;
chunk__14667_14822 = G__14838;
count__14668_14823 = G__14839;
i__14669_14824 = G__14840;
continue;
} else {
var vec__14691_14841 = cljs.core.first(seq__14666_14835__$1);
var k_14842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14691_14841,(0),null);
var v_14843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14691_14841,(1),null);
var obj14694_14844 = obj;
var obj14695_14845 = (((!((obj14694_14844 == null))))?obj14694_14844:({}));
(obj14695_14845[applied_science.js_interop.impl.wrap_key(k_14842)] = v_14843);



var G__14846 = cljs.core.next(seq__14666_14835__$1);
var G__14847 = null;
var G__14848 = (0);
var G__14849 = (0);
seq__14666_14821 = G__14846;
chunk__14667_14822 = G__14847;
count__14668_14823 = G__14848;
i__14669_14824 = G__14849;
continue;
}
} else {
}
}
break;
}

return obj;
}));

(applied_science.js_interop.obj.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq14662){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14662));
}));

