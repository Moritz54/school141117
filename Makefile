.DEFAULT_GOAL := help

.PHONY: start
start: ## DEV: Starts the application
	foundation watch

.PHONY: install
install: ## DEV: Starts the application
	npm install
	bower install
