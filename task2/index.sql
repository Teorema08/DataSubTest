/* I use studentId to avoid problems if there are people with same Name and Surname
 I also didn't know the data type of fields, so I assumed that using cast() may be useful */
 
-- a)
SELECT Students.StudentId, FirstName, LastName
FROM Students
LEFT JOIN Exam ON Students.StudentId = Exam.StudentId
WHERE CAST(Exam.Result AS int ) < 3
GROUP BY Students.StudentId, FirstName, LastName
HAVING count(Students.StudentId) > 2 

-- b)
SELECT DISTINCT [Group]
FROM Students
LEFT JOIN Exam ON Students.StudentId = Exam.StudentId
WHERE CAST(Exam.Result AS int ) < 3
GROUP BY Students.StudentId, [Group]
HAVING count(Students.StudentId) > 2 AND count([group]) > 10