#!/bin/bash
# Quick restart script
docker compose -f docker-compose.yaml restart
echo "Services restarted!"
docker compose -f docker-compose.yaml ps
