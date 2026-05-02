# Notification System Design

## Introduction
This system retrieves notifications from an external API and renders them with priority and pagination.

## Components
- Frontend: Next.js project
- API Proxy: Next.js API endpoints to bypass CORS issues
- Logging Middleware: Utility for logging events

## Notification Retrieval
Notifications are retrieved from a secure API that requires Bearer authentication.

## Priority Rules
Notifications are ordered based on their priority, with the following rules:
- Placement (Priority 1)
- Result (Priority 2)
- Event (Priority 3)

In case of equal priority, the most recent notifications appear first.

## Pagination
Notifications are rendered per page (5 notifications per page).

## Filters
Notifications can be filtered by their type, which includes:
- Placement
- Result
- Event

## Logging Middleware
Notifications are logged to record:
- API calls
- User events
- Errors

## Error Handling
Errors returned from the API are gracefully handled and logged.

## Summary
The system design allows for scalability, easy UI development, and efficient notification processing.