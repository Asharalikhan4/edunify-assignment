CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    contact INT,
    image TEXT,
    email_id TEXT NOT NULL
);

INSERT INTO schools (name, address, city, state, contact, image, email_id)
VALUES ('Shri guru ram rai public school', 'Kurriya', 'Hardoi', 'Uttar Pradesh', 1234567890, 'example.jpg', 'contactagrr@gmail.com');
