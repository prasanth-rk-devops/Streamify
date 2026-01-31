-- ADMIN USER (password must be hashed manually if used)
INSERT INTO users (email, password, role)
VALUES ('admin@streamify.com', '$2b$10$dummyhash', 'ADMIN');

-- SAMPLE USER
INSERT INTO users (email, password)
VALUES ('user@streamify.com', '$2b$10$dummyhash');

-- SAMPLE PROFILES
INSERT INTO profiles (user_id, name)
VALUES
  (1, 'Admin Profile'),
  (2, 'John'),
  (2, 'Family');

-- MOVIES
INSERT INTO movies (title, category, poster, description)
VALUES
  (
    'Inception',
    'trending',
    'movie1.jpg',
    'A skilled thief enters dreams to steal secrets.'
  ),
  (
    'Interstellar',
    'top',
    'movie2.jpg',
    'Explorers travel through a wormhole in space.'
  ),
  (
    'Mad Max: Fury Road',
    'action',
    'movie3.jpg',
    'Post-apocalyptic action-packed road chase.'
  );

-- SAMPLE SUBSCRIPTION
INSERT INTO subscriptions (user_id, plan, status)
VALUES (2, 'PREMIUM', 'ACTIVE');

-- SAMPLE PAYMENT
INSERT INTO payments (user_id, amount, status)
VALUES (2, 499.00, 'SUCCESS');

-- SAMPLE WATCH HISTORY
INSERT INTO watch_history (user_id, movie_id)
VALUES
  (2, 1),
  (2, 2);
