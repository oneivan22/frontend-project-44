.PHONY: install brain-games publish link lint brain-even brain-calc brain-prime brain-progression lint-fix

# Установка зависимостей и настройка прав
install:
	npm ci
	chmod +x bin/brain-games.js bin/brain-even.js bin/brain-gcd.js bin/brain-progression.js


# Публикация и линкинг
publish:
	npm publish --dry-run

link:
	npm link

# Линтинг
lint:
	npx eslint .

lint-fix: 
	npx exlint --fix .
