-- Optional: 清空旧数据（手动执行一次）
--DELETE FROM questions;
--DELETE FROM categories;

-- 插入分类
INSERT INTO categories (id, name) VALUES 
(1, 'IT Support'),
(2, 'OISS'),
(3, 'Libraries'),
(4, 'Health Services');

-- 插入问题
INSERT INTO questions (content, link, category_id) VALUES
('Reset NetID password', 'https://northwestern.edu/it/reset-password', 1),
('Wi-Fi not working', 'https://northwestern.edu/it/wifi', 1),
('Service Desk location', 'https://northwestern.edu/it/service-desk', 1),

('Extend F-1 visa', 'https://northwestern.edu/oiss/extend-visa', 2),
('OPT application steps', 'https://northwestern.edu/oiss/opt-steps', 2),
('Pick up I-20', 'https://northwestern.edu/oiss/pick-up-i20', 2),

('Opening hours', 'https://northwestern.edu/library/hours', 3),
('Book a study room', 'https://northwestern.edu/library/book-room', 3),
('Subject librarian', 'https://northwestern.edu/library/subject-librarian', 3),

('Schedule appointment', 'https://northwestern.edu/health/schedule', 4),
('Patient portal', 'https://northwestern.edu/health/portal', 4),
('Immunizations', 'https://northwestern.edu/health/immunizations', 4);
