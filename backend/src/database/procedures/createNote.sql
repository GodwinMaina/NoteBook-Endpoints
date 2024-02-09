CREATE PROCEDURE createNote(
    @note_id VARCHAR(100), 
    @Title VARCHAR(200),
    @Content VARCHAR(255),
    @CreatedAt VARCHAR(200)
    )

AS

BEGIN 
    INSERT INTO NOTES(note_id, Title,Content,CreatedAt)

    VALUES(@note_id, @Title, @Content,  @CreatedAt)
END







