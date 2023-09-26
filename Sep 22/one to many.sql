create table customers(
   customer_id int primary key,
   customer_name varchar(30),
   customer_city varchar(30)
);
insert into customers
values
(1, 'vishal', 'faridabad'),
(2, 'abraham', 'delhi'),
(3, 'naresh', 'ahedabad'),
(4, 'akhil', 'mumbai');

create table orders(
   order_id int primary key,
   item_name varchar(30),
   order_cost int
);
insert into orders
values
(1, 'shoes', 5000),
(2, 'braclet', 1500),
(3, 'shirt', 2600),
(4, 'mobile', 20000);

create table customer_order(
  customer_id int,
  order_id int primary key,
  foreign key (customer_id) references customers(customer_id),
  foreign key (order_id) references orders(order_id)
);
insert into customer_order
values
(1, 1),
(1, 2),
(2, 3),
(3, 4);

select * from customers;
select * from orders;
select * from customer_order;