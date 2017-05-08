PATH  := node_modules/.bin:$(PATH)
SHELL := /bin/bash

out   := docs/assets
css   := docs/assets/styles.css
scss  := assets/styles/styles.scss

.PHONY: build-dev clean

all: build-dev

build-dev: clean $(css)

clean:
	rm -rf $(css)

$(css): $(scss)
	mkdir -p $(dir $@)
	node-sass $(scss) --include-path node_modules --output $(out)

install: node_modules
	npm install

