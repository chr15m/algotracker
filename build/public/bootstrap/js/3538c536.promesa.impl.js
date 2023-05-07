goog.provide('promesa.impl');
promesa.impl._STAR_default_promise_STAR_ = Promise;
promesa.impl.resolved = (function promesa$impl$resolved(v){
return promesa.impl._STAR_default_promise_STAR_.resolve(v);
});
promesa.impl.rejected = (function promesa$impl$rejected(v){
return promesa.impl._STAR_default_promise_STAR_.reject(v);
});
promesa.impl.deferred = (function promesa$impl$deferred(){
var state = ({});
var obj = (new promesa.impl._STAR_default_promise_STAR_((function (resolve,reject){
(state.resolve = resolve);

return (state.reject = reject);
})));
var x14732 = obj;
(x14732.promesa$protocols$ICompletable$ = cljs.core.PROTOCOL_SENTINEL);

(x14732.promesa$protocols$ICompletable$_resolve_BANG_$arity$2 = (function (_,v){
var ___$1 = this;
return state.resolve(v);
}));

(x14732.promesa$protocols$ICompletable$_reject_BANG_$arity$2 = (function (_,v){
var ___$1 = this;
return state.reject(v);
}));

return x14732;
});
promesa.impl.extend_promise_BANG_ = (function promesa$impl$extend_promise_BANG_(t){
(t.prototype.promesa$protocols$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL);

(t.prototype.promesa$protocols$IPromiseFactory$_promise$arity$1 = (function (p){
var p__$1 = this;
return p__$1;
}));

(t.prototype.promesa$protocols$IPromise$ = cljs.core.PROTOCOL_SENTINEL);

(t.prototype.promesa$protocols$IPromise$_map$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__14740_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__14740_SHARP_) : f.call(null,p1__14740_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_map$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__14742_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__14742_SHARP_) : f.call(null,p1__14742_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_bind$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__14743_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__14743_SHARP_) : f.call(null,p1__14743_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_bind$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__14744_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__14744_SHARP_) : f.call(null,p1__14744_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_then$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__14745_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__14745_SHARP_) : f.call(null,p1__14745_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_then$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__14750_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__14750_SHARP_) : f.call(null,p1__14750_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_mapErr$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.catch((function (p1__14751_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__14751_SHARP_) : f.call(null,p1__14751_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_mapErr$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.catch((function (p1__14752_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__14752_SHARP_) : f.call(null,p1__14752_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_thenErr$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.catch((function (p1__14753_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__14753_SHARP_) : f.call(null,p1__14753_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_thenErr$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.catch((function (p1__14754_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__14754_SHARP_) : f.call(null,p1__14754_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_handle$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__14755_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__14755_SHARP_,null) : f.call(null,p1__14755_SHARP_,null));
}),(function (p1__14756_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__14756_SHARP_) : f.call(null,null,p1__14756_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_handle$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__14757_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__14757_SHARP_,null) : f.call(null,p1__14757_SHARP_,null));
}),(function (p1__14758_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__14758_SHARP_) : f.call(null,null,p1__14758_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_finally$arity$2 = (function (it,f){
var it__$1 = this;
it__$1.then((function (p1__14759_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__14759_SHARP_,null) : f.call(null,p1__14759_SHARP_,null));
}),(function (p1__14760_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__14760_SHARP_) : f.call(null,null,p1__14760_SHARP_));
}));

return it__$1;
}));

return (t.prototype.promesa$protocols$IPromise$_finally$arity$3 = (function (it,f,executor){
var it__$1 = this;
it__$1.then((function (p1__14761_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__14761_SHARP_,null) : f.call(null,p1__14761_SHARP_,null));
}),(function (p1__14762_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__14762_SHARP_) : f.call(null,null,p1__14762_SHARP_));
}));

return it__$1;
}));
});
promesa.impl.extend_promise_BANG_(Promise);
(promesa.protocols.IPromise["_"] = true);

(promesa.protocols._map["_"] = (function() {
var G__14863 = null;
var G__14863__2 = (function (it,f){
return promesa.protocols._map(promesa.protocols._promise(it),f);
});
var G__14863__3 = (function (it,f,e){
return promesa.protocols._map(promesa.protocols._promise(it),f,e);
});
G__14863 = function(it,f,e){
switch(arguments.length){
case 2:
return G__14863__2.call(this,it,f);
case 3:
return G__14863__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14863.cljs$core$IFn$_invoke$arity$2 = G__14863__2;
G__14863.cljs$core$IFn$_invoke$arity$3 = G__14863__3;
return G__14863;
})()
);

(promesa.protocols._bind["_"] = (function() {
var G__14866 = null;
var G__14866__2 = (function (it,f){
return promesa.protocols._bind(promesa.protocols._promise(it),f);
});
var G__14866__3 = (function (it,f,e){
return promesa.protocols._bind(promesa.protocols._promise(it),f,e);
});
G__14866 = function(it,f,e){
switch(arguments.length){
case 2:
return G__14866__2.call(this,it,f);
case 3:
return G__14866__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14866.cljs$core$IFn$_invoke$arity$2 = G__14866__2;
G__14866.cljs$core$IFn$_invoke$arity$3 = G__14866__3;
return G__14866;
})()
);

(promesa.protocols._then["_"] = (function() {
var G__14874 = null;
var G__14874__2 = (function (it,f){
return promesa.protocols._then(promesa.protocols._promise(it),f);
});
var G__14874__3 = (function (it,f,e){
return promesa.protocols._then(promesa.protocols._promise(it),f,e);
});
G__14874 = function(it,f,e){
switch(arguments.length){
case 2:
return G__14874__2.call(this,it,f);
case 3:
return G__14874__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14874.cljs$core$IFn$_invoke$arity$2 = G__14874__2;
G__14874.cljs$core$IFn$_invoke$arity$3 = G__14874__3;
return G__14874;
})()
);

(promesa.protocols._mapErr["_"] = (function() {
var G__14875 = null;
var G__14875__2 = (function (it,f){
return promesa.protocols._mapErr(promesa.protocols._promise(it),f);
});
var G__14875__3 = (function (it,f,e){
return promesa.protocols._mapErr(promesa.protocols._promise(it),f,e);
});
G__14875 = function(it,f,e){
switch(arguments.length){
case 2:
return G__14875__2.call(this,it,f);
case 3:
return G__14875__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14875.cljs$core$IFn$_invoke$arity$2 = G__14875__2;
G__14875.cljs$core$IFn$_invoke$arity$3 = G__14875__3;
return G__14875;
})()
);

(promesa.protocols._thenErr["_"] = (function() {
var G__14876 = null;
var G__14876__2 = (function (it,f){
return promesa.protocols._thenErr(promesa.protocols._promise(it),f);
});
var G__14876__3 = (function (it,f,e){
return promesa.protocols._thenErr(promesa.protocols._promise(it),f,e);
});
G__14876 = function(it,f,e){
switch(arguments.length){
case 2:
return G__14876__2.call(this,it,f);
case 3:
return G__14876__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14876.cljs$core$IFn$_invoke$arity$2 = G__14876__2;
G__14876.cljs$core$IFn$_invoke$arity$3 = G__14876__3;
return G__14876;
})()
);

(promesa.protocols._handle["_"] = (function() {
var G__14879 = null;
var G__14879__2 = (function (it,f){
return promesa.protocols._handle(promesa.protocols._promise(it),f);
});
var G__14879__3 = (function (it,f,e){
return promesa.protocols._handle(promesa.protocols._promise(it),f,e);
});
G__14879 = function(it,f,e){
switch(arguments.length){
case 2:
return G__14879__2.call(this,it,f);
case 3:
return G__14879__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14879.cljs$core$IFn$_invoke$arity$2 = G__14879__2;
G__14879.cljs$core$IFn$_invoke$arity$3 = G__14879__3;
return G__14879;
})()
);

(promesa.protocols._finally["_"] = (function() {
var G__14882 = null;
var G__14882__2 = (function (it,f){
return promesa.protocols._finally(promesa.protocols._promise(it),f);
});
var G__14882__3 = (function (it,f,e){
return promesa.protocols._finally(promesa.protocols._promise(it),f,e);
});
G__14882 = function(it,f,e){
switch(arguments.length){
case 2:
return G__14882__2.call(this,it,f);
case 3:
return G__14882__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14882.cljs$core$IFn$_invoke$arity$2 = G__14882__2;
G__14882.cljs$core$IFn$_invoke$arity$3 = G__14882__3;
return G__14882;
})()
);
(Error.prototype.promesa$protocols$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL);

(Error.prototype.promesa$protocols$IPromiseFactory$_promise$arity$1 = (function (e){
var e__$1 = this;
return promesa.impl.rejected(e__$1);
}));

(promesa.protocols.IPromiseFactory["_"] = true);

(promesa.protocols._promise["_"] = (function (v){
return promesa.impl.resolved(v);
}));
promesa.impl.promise__GT_str = (function promesa$impl$promise__GT_str(p){
return "#<Promise[~]>";
});
(Promise.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(Promise.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (p,writer,opts){
var p__$1 = this;
return cljs.core._write(writer,promesa.impl.promise__GT_str(p__$1));
}));
