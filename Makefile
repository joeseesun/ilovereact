# Makefile
.PHONY: css
css:
	mkdir -p bundle
	postcss --watch --use autoprefixer --use postcss-import css/app.css --output bundle/app.css

.PHONY: server
server:
	@# WARNING: The indentation MUST be a tab. Spaces won't work.
	browser-sync start --server --files='index.html,testjs.html,js/app.js,bundle/app.css,bundle/testjs.css'

.PHONY: clean
clean:
	rm -r bundle
.PHONY: dev
dev:
	make css & make server
.PHONY: push
push:
	git add . && git ci -m "new" && git push origin master && git push origin master:gh-pages

