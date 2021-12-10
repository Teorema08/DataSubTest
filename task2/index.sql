/* I use studentId to avoid problems if there are people with same Name and Surname
 I also didn't know the data type of fields, so I assumed that using cast() may be useful */
 
-- a)
SELECT Students.StudentId, FirstName, LastName
FROM Students
INNER JOIN Exam ON Students.StudentId = Exam.StudentId
WHERE CAST(Exam.Result AS int ) < 3
GROUP BY Students.StudentId, FirstName, LastName
HAVING count(*) >= 2 

-- b)
SELECT [Students.Group] 
FROM Students 
INNER JOIN 
    ( SELECT Students.StudentId, COUNT(Exams.StudentId) AS NumberOfFailed
       FROM Students INNER JOIN Exams ON Students.StudentId = Exams.StudentId
       WHERE CAST(Exams.Result) < 3
       GROUP BY Students.StudentId
       ) AS FailedExams ON FailedExams.StudentId = Students.StudentId AND FailedExams.NumberOfFailed >= 2
  GROUP BY [Students.Group]
  HAVING COUNT(FailedExam.StudentId) >= 10
