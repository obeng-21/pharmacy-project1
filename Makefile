.PHONY: setup lint test build
setup:
	cd frontend && npm install
lint:
	cd frontend && npm run lint
test:
	cd frontend && npm test
	cd backend && mvn test
build:
	cd frontend && npm run build
	cd backend && mvn package -DskipTests

