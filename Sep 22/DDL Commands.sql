use saeculum;

select * from temp1;

alter table temp1
add column people int;

alter table temp1
rename column people to population;

alter table temp1
drop column population;

alter table temp1
rename cities;

drop table temp2;

select * from students;

truncate table students;

