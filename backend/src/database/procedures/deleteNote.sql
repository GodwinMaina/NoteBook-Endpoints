
CREATE PROCEDURE DeleteNote
    @note_Id VARCHAR(100)
AS
BEGIN
  
    DELETE FROM Notes WHERE note_id = @note_id;
END;


