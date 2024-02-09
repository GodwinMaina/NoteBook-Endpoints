
CREATE PROCEDURE UpdateNote
    @note_id VARCHAR(100),
    @Title VARCHAR(255),
    @Content VARCHAR(MAX),
    @CreatedAt VARCHAR(50)
AS
BEGIN

    UPDATE Notes
    SET Title = @Title,
        Content = @Content,
        CreatedAt = @CreatedAt
    WHERE note_Id = @note_id;
END;

