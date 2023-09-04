use saeculum;

create table temp2(
  id int,
  name varchar(30),
  age int,
  primary key (id,name)
);

insert into temp2 values(101, 'anil', 25);  
insert into temp2 values(101, 'sunil', 21);   -- it will work cause here we made combination of id and name the primary key

insert into temp2 values(101, 'anil', 21);    -- it will give error because combination of id and name is same as first one

insert into temp2 values(102,'akshay',26);
insert into temp2 values(102,'sunil',26);

select * from temp2;