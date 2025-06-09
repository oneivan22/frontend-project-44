install:
	npm ci
	chmod +x bin/brain-games.js bin/brain-even.js bin/brain-gcd.js bin/brain-progression.js
brain-games:
	node bin/brain-games.js
	chmod +x bin/brain-games.js

publish:
	npm publish --dry-run

link:
	npm link

lint:
	npx eslint .

lint-fix: 
	npx exlint --fix .
