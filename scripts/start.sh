#!/bin/bash
# Quick start script
docker compose -f docker-compose.yaml up -d
echo "Services started!"
docker compose -f docker-compose.yaml ps
