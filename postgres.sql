

CREATE TABLE courses (
id SERIAL PRIMARY KEY,
courseName TEXT NOT NULL,
credits INTEGER NOT NULL,
duration INTEGER NOT NULL
);

INSERT INTO courses ( courseName , credits ,duration)
VALUES ('telly'   , 7, 3 ),
('maths'   , 9, 6 ),
('scientce'   , 9, 1 );



CREATE TABLE students (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
age INTEGER NOT NULL,
birthDate DATE NOT NULL,
courseId    INTEGER,
    FOREIGN KEY (courseId) REFERENCES courses(id)  
);

INSERT INTO students ( name , age ,birthDate  ,courseId)
VALUES ('raj'   , 13, '1997-03-31'  ,   2 ),
('mahi'   , 16, '1997-03-23'  , 1 ),
('jay'   , 16, '2026-10-28' ,2 ),
('yuvi'   , 28, '1997-06-2' , 1),
('abhay'   , 15, '1924-10-22',2 );


ALTER TABLE students 
ADD COLUMN color TEXT;
ALTER TABLE students 
ADD COLUMN grad TEXT;
ALTER TABLE students 
ADD COLUMN email TEXT;

-- ADD INDEX
CREATE INDEX idx_age ON students(age);

-- Update Data

UPDATE students
SET color = 'red',
 grad = 'A+',
 email = 'mahi@yopmail.com'
WHERE name = 'mahi';


UPDATE students
SET color = 'green',
 grad = 'B+',
 email = 'raj@yopmail.com'
WHERE name = 'raj';

SELECT * FROM students;



-- Update Multiple Records
-- UPDATE students
-- SET age = age + 1
-- FROM courses
-- WHERE students.courseId = courses.id
--   AND courses.courseName = 'maths';  -- Specify the course ID
  


--  QUERY
SELECT students.name   , courses.coursename FROM students
JOIN courses ON students.courseId = courses.id
WHERE courses.coursename = 'maths';

-- AGGRIGATION
SELECT AVG(credits) as average FROM courses;

-- UPDATE students
UPDATE courses
SET credits = 10
WHERE coursename = 'maths';

SELECT * FROM courses;

-- DELETE 
DELETE FROM students
WHERE name = 'jay';


-- GROUP

SELECT students.name, courses.coursename
FROM students
JOIN courses ON students.courseId = courses.id
ORDER BY courses.coursename;


-- Subqueries
SELECT * FROM students
WHERE age > (SELECT AVG(age) from students);


-- CRETE VIEW
CREATE VIEW studentInfo AS 
SELECT students.name , students.age, courses.coursename , courses.credits FROM students
JOIN courses ON students.courseId = courses.id;


SELECT * FROM studentInfo;

-- Count Students by Age
SELECT 
    CASE
        WHEN age >= 10 AND age < 20 THEN '10-20'
        WHEN age >= 20 AND age < 30 THEN '20-30'
        ELSE '30 and above'
    END AS ageGroup,
    COUNT(*) AS studentCount
FROM students
GROUP BY ageGroup;

--  Find Students with Recent Birthdays
SELECT name, birthDate
FROM students
WHERE 
    (EXTRACT(MONTH FROM birthDate) = EXTRACT(MONTH FROM CURRENT_DATE) AND 
     EXTRACT(DAY FROM birthDate) BETWEEN EXTRACT(DAY FROM CURRENT_DATE) AND EXTRACT(DAY FROM CURRENT_DATE) + 30)
    OR 
    (EXTRACT(MONTH FROM birthDate) = EXTRACT(MONTH FROM CURRENT_DATE) + 1 AND 
     EXTRACT(DAY FROM birthDate) <= (EXTRACT(DAY FROM CURRENT_DATE) + 30 - EXTRACT(DAY FROM DATE_TRUNC('MONTH', CURRENT_DATE + INTERVAL '1 month'))));


-- Uniqu Ages
WITH UniqueAges AS (
    SELECT age
    FROM students
    GROUP BY age
    HAVING COUNT(*) = 1)
SELECT students.name, students.age
FROM students
JOIN UniqueAges ON students.age = UniqueAges.age;


-- Conditional Logic

SELECT  students.name,  students.age,
    CASE
        WHEN age <  18  THEN 'Miner'
        ELSE 'Adult'
    END AS ageGroup FROM students;


-- Filter by Month of Birth

SELECT * FROM students
WHERE EXTRACT(DAY FROM birthDate) = 31;


-- Count Students by Color

SELECT color,
COUNT(*) AS studentCount
FROM students
GROUP by color;

-- Age in month
SELECT 
    *,
    CASE 
        WHEN age < 18 THEN 'Minor' 
        ELSE 'Adult'               
    END AS age_status,            
    age * 12 AS age_in_months      
FROM 
    students; 















