CREATE TABLE [dbo].[Users]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY(1,1),
	[username] nvarchar(100) not null,
	[firstname]  nvarchar(100) not null,
	[lastname]  nvarchar(100) not null,
	[createddate] datetime default(getdate())
)
