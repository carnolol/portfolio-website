create table my_skills(
id serial primary key,
name varchar(100), 
img TEXT
)


create table my_backend_skills(
id serial primary key, 
name varchar(200),
img text
)

create table my_other_skills(
id serial primary key, 
name varchar(200), 
img text
)

create table my_projects(
id serial PRIMARY key, 
img text, 
name varchar(100), 
site_link text,
site_code text,
description varchar(500)
)

create table project_screenshots(
    id serial primary key,
    image text, 
    project_id int references my_projects(id)
)