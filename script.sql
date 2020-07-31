drop database if exists practice;
create database if not exists practice;
use practice;

create table if not exists users(
user_id int primary key unique ,
user_email char(50) not null ,
frist_name char(150),
last_name char(150)
);

create table if not exists employees (
employee_id int not null auto_increment primary key,
email varchar(50),
department varchar(40),
worktype varchar(40),
first_name varchar(150),
last_name varchar(150),
salary double,
isActive boolean,
date_of_joining DATETIME
);


create table if not exists salary_table(
employee_id int not null primary key,
paid boolean,
received_at DATETIME,
foreign key(employee_id) references employees(employee_id) ON delete cascade
);

create table if not exists payments(
payment_id int not null auto_increment primary key,
payment_date datetime,
remark varchar(255),
payment_mode varchar(20),
email varchar(150),
net_amount double,
gst_amount double ,
total double
);

create table if not exists purchases(
purchase_id int not null auto_increment primary key,
item varchar(100),
purchase_date datetime,
purchase_quantity int ,
type_id varchar(40),
price double
);






create table if not exists vendors( 
vendor_id int not null auto_increment primary key,
first_name varchar(255),
last_name varchar(255),
mobile varchar(20),
payment_id int,
purchase_id int,
foreign key(payment_id) references payments(payment_id)  ON DELETE CASCADE,
foreign key(purchase_id) references purchases(purchase_id)  ON DELETE CASCADE
);

create table if not exists row_stock(
item_id varchar(40) not null primary key,
item_name varchar(255),
current_quantity int,
vendor_id int,
foreign key(vendor_id) references vendors(vendor_id) on delete cascade
);

create table if not exists products(
product_id int not null primary key,
item_name varchar(255),
current_quantity int,
used double
);

create table if not exists customers (
customer_id int not  null auto_increment primary key,
cutomser_type enum('permanent','temporary')not null,
balance double ,
payment_id int,
mobile varchar(20) ,
foreign key(payment_id) references payments(payment_id)  ON DELETE CASCADE
);

create table if not exists product_sales(
product_id int ,
customer_id int,
primary key(product_id,customer_id),
foreign key(product_id) references products(product_id) on delete cascade ,
foreign key(customer_id) references customers(customer_id) on delete cascade
);

create table if not exists addresses(
address_id int not null primary key,
city varchar(150),
state varchar(150),
county varchar(150),
address1 varchar(200),
address2 varchar(200),
postal_code int
);

create table if not exists employee_address(
address_id int ,
employee_id int ,
foreign key(address_id) references addresses(address_id),
foreign key(employee_id) references employees(employee_id)
);

create table if not exists customer_address(
address_id int ,
customer_id int ,
foreign key(address_id) references addresses(address_id),
foreign key(customer_id) references customers(customer_id)
);

