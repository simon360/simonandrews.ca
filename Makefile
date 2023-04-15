.PHONY: build
build: ## Build the application
	docker compose build
	docker compose build production

.PHONY: deps
deps: ## Adjust dependencies before the build stage
	docker compose run deps sh

.PHONY: dev
dev: ## Run the development environment
	docker compose up

.PHONY: stop
stop: ## Stop the development environment
	docker compose down

.PHONY: production
production: ## Run the production environment
	docker compose run --service-ports production

.PHONY: help
help: ## This message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help
