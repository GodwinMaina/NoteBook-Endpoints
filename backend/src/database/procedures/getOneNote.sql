CREATE PROCEDURE GetOneNote
    @NoteId VARCHAR(100)
AS
BEGIN
   
    SELECT * FROM Notes WHERE NoteId = @NoteId;
END;
