STATIC=public/*.html public/css public/chiptune2.js public/img # public/images public/assets

all: build build/server.js

build/server.js: src/**/*.cljs shadow-cljs.edn node_modules
	npx shadow-cljs release server --debug

build: src/**/* $(STATIC) node_modules
	mkdir -p build/public
	rsync -rvL --exclude=.git $(STATIC) build/public
	npx shadow-cljs release bootstrap app
	touch build

node_modules: package.json
	pnpm i --no-lockfile --shamefully-hoist
	touch node_modules

chiptune2.js:
	git clone https://github.com/deskjet/chiptune2.js.git

.PHONY: watch watcher server repl clean

server: node_modules chiptune2.js
	@echo "waiting for devserver.js to appear."
	@rm -f devserver.js; until [ -f devserver.js -a -d .shadow-cljs ]; do sleep 1; done; echo "devserver.js appeared. starting."
	@sleep 1 && while [ 1 ]; do DEV=1 node devserver.js; sleep 3; echo "restarting devserver.js"; done

watcher: node_modules chiptune2.js
	npx shadow-cljs watch server bootstrap app

watch:
	make -j2 watcher server

repl:
	npx shadow-cljs cljs-repl app

clean:
	rm -rf .shadow-cljs devserver.js server.js build node_modules package-lock.json
