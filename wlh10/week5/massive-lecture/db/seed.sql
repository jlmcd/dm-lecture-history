CREATE TABLE wlh10 (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    address VARCHAR(255),
    left_side BOOLEAN,
    right_side BOOLEAN
);

INSERT INTO wlh10 (first_name, last_name, address, left_side, right_side)
VALUES 
('Katie', 'Cruise', '123 Cool Ct.', true, false),
('Sean', 'Scott', '456 Awesome Ave.', false, true),
('Eric', 'Fonseca', '789 Neat St.', true, false);