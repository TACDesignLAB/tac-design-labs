#!/bin/bash
# Quick start script - builds and starts all services
docker compose -f docker-compose.yaml up -d --build
echo "Services started!"
docker compose -f docker-compose.yaml ps
