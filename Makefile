install:
	npm install

run:
	npm start

build:
	npm run build

deploy:
	npx surge build

test:
	npm test a

lint:
	npx eslint src/
