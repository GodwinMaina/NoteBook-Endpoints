
CREATE TABLE NOTES(
    note_id VARCHAR(100) NOT NULL, 
    Title VARCHAR(100) NOT NULL, 
    Content VARCHAR(255) NOT NULL UNIQUE, 
    CreatedAt VARCHAR(15) NOT NULL UNIQUE,    
)
