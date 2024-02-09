
CREATE PROCEDURE UpdateNote
    @NoteId VARCHAR(100),
    @Title VARCHAR(255),
    @Content VARCHAR(MAX),
    @CreatedAt VARCHAR(50)
AS
BEGIN

    UPDATE Notes
    SET Title = @Title,
        Content = @Content,
        CreatedAt = @CreatedAt
    WHERE NoteId = @NoteId;
END;
