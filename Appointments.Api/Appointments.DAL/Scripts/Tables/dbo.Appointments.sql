CREATE TABLE [dbo].[Appointments]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY(1,1),
	[dlId] INT NOT NULL,
	[templateId] int not null,
	[start] datetime NOT NULL,
	[end] datetime NOT NULL,
	[subject] nvarchar(200) NOT NULL,
	[message] nvarchar(200) NOT NULL,
)
