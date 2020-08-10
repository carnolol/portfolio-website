select * from my_projects mp
JOIN project_screenshots ps ON mp.id = ps.project_id
-- where project_id = $1