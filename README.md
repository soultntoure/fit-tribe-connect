# Fit Tribe Connect: Connect. Sweat. Belong.

## Project Purpose

Fit Tribe Connect is a fitness booking application meticulously crafted to address the identified market gap in the fitness technology sector. Our core mission is to move beyond transactional class bookings and cultivate a vibrant, interconnected community around fitness. We aim to empower users to discover unique local fitness classes, connect with fellow participants and instructors, and foster deeper engagement. Crucially, the platform is built to champion niche fitness styles and provide independent instructors with the integrated tools they need to manage their businesses, market their offerings, and build loyal communities without relying on fragmented external solutions.

## Technology Stack Justification & Competitive Advantage

Our technology choices are strategically aligned to deliver on our core value proposition and exploit key market opportunities:

*   **Backend: Node.js with NestJS Framework & WebSockets**
    *   **Justification:** Node.js provides an efficient, asynchronous, and scalable environment ideal for handling concurrent user requests and real-time communication. NestJS, built on Express and leveraging TypeScript, offers a robust, modular, and maintainable architecture. This is paramount for building complex community features like live chat, group forums, and instant notifications.
    *   **Competitive Advantage:** The built-in WebSocket support in NestJS directly enables the "Community First" platform opportunity by facilitating real-time interactions crucial for class-specific chats, instructor Q&A sessions, and fostering peer-to-peer accountability. This level of integrated community engagement is a significant differentiator from competitors that remain largely transactional.

*   **Database: PostgreSQL with Redis**
    *   **Justification:** PostgreSQL offers robust ACID compliance, data integrity, and advanced features like JSONB support, making it ideal for storing structured user data, class schedules, booking information, and instructor profiles. Redis serves as an in-memory data structure store, perfect for caching frequently accessed data and managing real-time session information (like user presence in chats), significantly boosting application performance.
    *   **Competitive Advantage:** This combination ensures reliable data management for bookings while optimizing the speed and responsiveness of community features, providing a seamless user experience essential for retaining users seeking dynamic interactions.

*   **Frontend (Web): React**
    *   **Justification:** React's component-based architecture, declarative programming model, and vast ecosystem allow for the rapid development of dynamic and interactive user interfaces. It's well-suited for building rich user profiles, engaging class listings, booking flows, and community forums.
    *   **Competitive Advantage:** Enables us to create intuitive interfaces for both users discovering classes and instructors managing their businesses. The flexibility of React allows for the seamless integration of community features directly within the class browsing and booking experience, unlike the more rigid interfaces of existing platforms.

*   **Mobile: React Native**
    *   **Justification:** React Native allows for cross-platform mobile development (iOS and Android) from a single codebase. This significantly reduces development time and cost while ensuring a consistent user experience across devices.
    *   **Competitive Advantage:** Facilitates faster market penetration and broader user adoption by delivering a high-quality mobile experience efficiently. This allows us to reach users wherever they are, making class discovery and community participation effortless.

*   **Infrastructure: AWS, Docker**
    *   **Justification:** Utilizing AWS services (e.g., EC2/ECS for compute, RDS for database, S3 for storage, CloudFront for CDN) provides a scalable, reliable, and secure cloud infrastructure. Docker ensures consistent development, testing, and deployment environments.
    *   **Competitive Advantage:** Provides the foundation for a scalable platform capable of supporting growth and fluctuating user loads, ensuring high availability for both booking and community features.

**Overall Competitive Edge:** This technology stack uniquely positions Fit Tribe Connect to deliver on the "Community First" ethos. By prioritizing real-time communication (WebSockets), integrated social features, and a unified content hub for instructors, we directly address the unmet needs for deeper connection and support for niche fitness, setting us apart from transactional competitors.

## Project Structure Overview

Fit Tribe Connect is structured into distinct, yet interconnected, modules:

*   **`backend/`**: Contains the NestJS application responsible for API endpoints, business logic, database interactions, authentication, and real-time WebSocket services.
    *   `src/`: Core application logic, controllers, services, modules, entities.
    *   `prisma/` (or `src/database/`): Database schema and migration configurations.
    *   `config/`: Application configuration files.
*   **`frontend/`**: Houses the React web application for user and instructor interfaces.
    *   `public/`: Static assets.
    *   `src/`: React components, pages, routing, state management, API integration logic.
*   **`mobile/`**: Contains the React Native application for iOS and Android platforms.
    *   `App.js`: Root component.
    *   `src/`: Screens, components, navigation, state management, API integration.
*   **`shared/`** (Optional, for monorepo): Common utilities, types, or constants used across backend, frontend, and mobile applications.
*   **`docker-compose.yml`**: Defines the multi-container Docker environment for local development, including backend, database, and potentially Redis.
*   **`package.json`**: Root package file, potentially used for managing monorepo workspaces or top-level scripts.
