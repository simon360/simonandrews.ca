.PHONY: build
build: ## Build the application
	docker compose build
	docker compose build production

.PHONY: deps
deps: ## Adjust dependencies before the build stage
	docker compose run --build deps sh

.PHONY: dev
dev: ## Run the development environment
	docker compose --profile dev up --build --remove-orphans

.PHONY: stop
stop: ## Stop the development environment
	docker compose down

.PHONY: production
production: ## Run the production environment
	docker compose run --build --service-ports production

.PHONY: lint
lint: ## Run linting
	docker compose \
		--profile lint \
		up \
		--build \
		--remove-orphans \
		--exit-code-from=lint

.PHONY: e2e
e2e: ## Run the e2e tests
	docker compose \
		--profile e2e \
		up \
		--build \
		--remove-orphans \
		--exit-code-from=cypress

.PHONY: help
help: ## This message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help
