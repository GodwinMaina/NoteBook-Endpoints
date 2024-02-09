CREATE PROCEDURE getNotes
AS
BEGIN
   
    SET NOCOUNT ON;
    
    SELECT * FROM Notes;
END;
