#!/bin/bash

# Production Docker Compose Management Script
# Usage: ./scripts/prod.sh [start|stop|restart|status|logs|down|rebuild]

set -e

COMPOSE_FILE="docker-compose.yaml"
PROJECT_NAME="tac-labs-frontend"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if .env file exists
if [ ! -f .env ]; then
    echo -e "${RED}Error: .env file not found!${NC}"
    echo "Please create a .env file with required environment variables."
    exit 1
fi

case "$1" in
    start)
        echo -e "${GREEN}Starting production services...${NC}"
        docker compose -f "$COMPOSE_FILE" up -d
        echo -e "${GREEN}Services started successfully!${NC}"
        echo "Run './scripts/prod.sh status' to check service status"
        ;;

    stop)
        echo -e "${YELLOW}Stopping production services...${NC}"
        docker compose -f "$COMPOSE_FILE" stop
        echo -e "${GREEN}Services stopped successfully!${NC}"
        ;;

    restart)
        echo -e "${YELLOW}Restarting production services...${NC}"
        docker compose -f "$COMPOSE_FILE" restart
        echo -e "${GREEN}Services restarted successfully!${NC}"
        ;;

    down)
        echo -e "${YELLOW}Stopping and removing containers...${NC}"
        docker compose -f "$COMPOSE_FILE" down
        echo -e "${GREEN}Containers removed successfully!${NC}"
        ;;

    rebuild)
        echo -e "${YELLOW}Rebuilding and restarting services...${NC}"
        docker compose -f "$COMPOSE_FILE" down
        docker compose -f "$COMPOSE_FILE" build --no-cache
        docker compose -f "$COMPOSE_FILE" up -d
        echo -e "${GREEN}Services rebuilt and started successfully!${NC}"
        ;;

    status)
        echo -e "${GREEN}Service Status:${NC}"
        docker compose -f "$COMPOSE_FILE" ps
        ;;

    logs)
        if [ -n "$2" ]; then
            # Show logs for specific service
            echo -e "${GREEN}Showing logs for $2...${NC}"
            docker compose -f "$COMPOSE_FILE" logs -f "$2"
        else
            # Show logs for all services
            echo -e "${GREEN}Showing logs for all services...${NC}"
            docker compose -f "$COMPOSE_FILE" logs -f
        fi
        ;;

    pull)
        echo -e "${GREEN}Pulling latest images...${NC}"
        docker compose -f "$COMPOSE_FILE" pull
        echo -e "${GREEN}Images pulled successfully!${NC}"
        ;;

    *)
        echo "TAC Design Labs - Production Management"
        echo ""
        echo "Usage: ./scripts/prod.sh [command] [options]"
        echo ""
        echo "Commands:"
        echo "  start     - Start all services"
        echo "  stop      - Stop all services (containers remain)"
        echo "  restart   - Restart all services"
        echo "  down      - Stop and remove all containers"
        echo "  rebuild   - Rebuild images and restart services"
        echo "  status    - Show status of all services"
        echo "  logs      - Show logs (use 'logs [service-name]' for specific service)"
        echo "  pull      - Pull latest images"
        echo ""
        echo "Examples:"
        echo "  ./scripts/prod.sh start"
        echo "  ./scripts/prod.sh logs tac-labs-next-frontend"
        echo "  ./scripts/prod.sh restart"
        exit 1
        ;;
esac
