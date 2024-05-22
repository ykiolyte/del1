-- Users Table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Roles Table
CREATE TABLE IF NOT EXISTS roles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

-- Cities Table
CREATE TABLE IF NOT EXISTS cities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

-- Routes Table
CREATE TABLE IF NOT EXISTS routes (
    id SERIAL PRIMARY KEY,
    origin_id BIGINT NOT NULL,
    destination_id BIGINT NOT NULL,
    distance DOUBLE PRECISION NOT NULL,
    CONSTRAINT fk_origin FOREIGN KEY(origin_id) REFERENCES cities(id),
    CONSTRAINT fk_destination FOREIGN KEY(destination_id) REFERENCES cities(id)
);

-- Shipments Table
CREATE TABLE IF NOT EXISTS shipments (
    id SERIAL PRIMARY KEY,
    description TEXT NOT NULL,
    origin_id BIGINT NOT NULL,
    destination_id BIGINT NOT NULL,
    CONSTRAINT fk_shipment_origin FOREIGN KEY(origin_id) REFERENCES cities(id),
    CONSTRAINT fk_shipment_destination FOREIGN KEY(destination_id) REFERENCES cities(id)
);

-- UserRoles Table
CREATE TABLE IF NOT EXISTS user_roles (
    user_id BIGINT NOT NULL,
    role_id BIGINT NOT NULL,
    CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(id),
    CONSTRAINT fk_role FOREIGN KEY(role_id) REFERENCES roles(id),
    PRIMARY KEY (user_id, role_id)
);

-- ShipmentRoutes Table
CREATE TABLE IF NOT EXISTS shipment_routes (
    shipment_id BIGINT NOT NULL,
    route_id BIGINT NOT NULL,
    CONSTRAINT fk_shipment FOREIGN KEY(shipment_id) REFERENCES shipments(id),
    CONSTRAINT fk_route FOREIGN KEY(route_id) REFERENCES routes(id),
    PRIMARY KEY (shipment_id, route_id)
);
