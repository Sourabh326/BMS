-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 11, 2020 at 07:05 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bricks_soft`
--

-- --------------------------------------------------------

--
-- Table structure for table `st_customer_info`
--

CREATE TABLE `st_customer_info` (
  `id` int(11) NOT NULL,
  `customer_name` text CHARACTER SET utf8,
  `address` text CHARACTER SET utf8,
  `mobile_no` text CHARACTER SET utf8,
  `balance` double DEFAULT NULL,
  `status` enum('0','1') NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `st_customer_info`
--

INSERT INTO `st_customer_info` (`id`, `customer_name`, `address`, `mobile_no`, `balance`, `status`) VALUES
(1, 'Prashant Asne', 'Shreeji Mall First Floor', '08103263220', 129000, '1'),
(2, 'Aarif Khan', 'Raja Nagar Balaghat', '8962402667', 0, '1');

-- --------------------------------------------------------

--
-- Table structure for table `st_default_receipt_no`
--

CREATE TABLE `st_default_receipt_no` (
  `id` int(11) NOT NULL,
  `to_year` int(11) NOT NULL,
  `payment_receive_receipt_no` int(11) NOT NULL,
  `payment_given_receipt_no` int(11) NOT NULL,
  `order_receipt_no` int(11) NOT NULL,
  `sales_receipt_no` int(11) NOT NULL,
  `purchase_receipt_no` int(11) NOT NULL,
  `expense_receipt_no` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `st_default_receipt_no`
--

INSERT INTO `st_default_receipt_no` (`id`, `to_year`, `payment_receive_receipt_no`, `payment_given_receipt_no`, `order_receipt_no`, `sales_receipt_no`, `purchase_receipt_no`, `expense_receipt_no`) VALUES
(1, 2020, 0, 0, 0, 0, 0, 0),
(2, 2021, 0, 0, 0, 0, 0, 0),
(3, 2022, 0, 0, 0, 0, 0, 0),
(4, 2023, 0, 0, 0, 0, 0, 0),
(5, 2024, 0, 0, 0, 0, 0, 0),
(6, 2025, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `st_employee_category`
--

CREATE TABLE `st_employee_category` (
  `id` int(11) NOT NULL,
  `category_name` text CHARACTER SET utf8
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `st_employee_info`
--

CREATE TABLE `st_employee_info` (
  `id` int(11) NOT NULL,
  `cat_id` int(11) DEFAULT NULL,
  `employee_name` text,
  `city` text,
  `address` text,
  `contact_one` text,
  `contact_two` text,
  `basic_salary` double DEFAULT '0',
  `status` enum('0','1') NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `st_expense_category`
--

CREATE TABLE `st_expense_category` (
  `id` int(11) NOT NULL,
  `category_name` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `st_expense_category`
--

INSERT INTO `st_expense_category` (`id`, `category_name`) VALUES
(1, 'Office Expense'),
(2, 'Electricity Bill');

-- --------------------------------------------------------

--
-- Table structure for table `st_expense_info`
--

CREATE TABLE `st_expense_info` (
  `id` int(11) NOT NULL,
  `cat_id` int(11) DEFAULT NULL,
  `tansaction_date` date DEFAULT NULL,
  `transaction_time` time DEFAULT NULL,
  `receipt_no` text,
  `person_name` text,
  `amount` double DEFAULT NULL,
  `description` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `st_expense_info`
--

INSERT INTO `st_expense_info` (`id`, `cat_id`, `tansaction_date`, `transaction_time`, `receipt_no`, `person_name`, `amount`, `description`) VALUES
(2, 2, '2020-07-29', '20:52:00', 'Exp-2020-2', 'Prashant Asne', 3000, '');

-- --------------------------------------------------------

--
-- Table structure for table `st_login_history`
--

CREATE TABLE `st_login_history` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `full_name` text CHARACTER SET utf8 NOT NULL,
  `login_time` time NOT NULL,
  `login_date` date NOT NULL,
  `logout_time` time NOT NULL,
  `logout_date` date NOT NULL,
  `login_ip` text NOT NULL,
  `host_name` text CHARACTER SET utf8 NOT NULL,
  `location` text CHARACTER SET utf8 NOT NULL,
  `city` text CHARACTER SET utf8 NOT NULL,
  `country` text CHARACTER SET utf8 NOT NULL,
  `status` enum('0','1') NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `st_login_history`
--

INSERT INTO `st_login_history` (`id`, `user_id`, `full_name`, `login_time`, `login_date`, `logout_time`, `logout_date`, `login_ip`, `host_name`, `location`, `city`, `country`, `status`) VALUES
(265, 1, 'SR Cement', '20:58:00', '2020-07-30', '00:00:00', '0000-00-00', '::1', 'localhost', '', '', '', '1');

-- --------------------------------------------------------

--
-- Table structure for table `st_logo`
--

CREATE TABLE `st_logo` (
  `id` int(11) NOT NULL,
  `image` text NOT NULL,
  `image_title` varchar(300) NOT NULL,
  `status` enum('0','1') NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `st_logo`
--

INSERT INTO `st_logo` (`id`, `image`, `image_title`, `status`) VALUES
(1, '1587221877_srcement_logo.png', '', '1');

-- --------------------------------------------------------

--
-- Table structure for table `st_manufacturing_raw_qty_info`
--

CREATE TABLE `st_manufacturing_raw_qty_info` (
  `id` int(11) NOT NULL,
  `ready_product_id` int(11) DEFAULT NULL,
  `raw_material_id` int(11) DEFAULT NULL,
  `raw_material_per_unit_qty` double NOT NULL DEFAULT '0',
  `raw_material_per_unit_rate` double NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `st_manufacturing_raw_qty_info`
--

INSERT INTO `st_manufacturing_raw_qty_info` (`id`, `ready_product_id`, `raw_material_id`, `raw_material_per_unit_qty`, `raw_material_per_unit_rate`) VALUES
(107, 1, 1, 1, 0.04),
(108, 1, 2, 1, 0.01),
(109, 1, 10, 1, 0.4),
(110, 1, 3, 1, 0.32),
(111, 1, 4, 1, 0.05),
(112, 1, 5, 1, 0.03),
(113, 1, 11, 1, 4),
(114, 1, 12, 2, 3.25),
(115, 1, 13, 1.08, 0.7);

-- --------------------------------------------------------

--
-- Table structure for table `st_payment_receive_given_info`
--

CREATE TABLE `st_payment_receive_given_info` (
  `id` int(11) NOT NULL,
  `person_id` int(11) DEFAULT NULL,
  `transaction_date` date DEFAULT NULL,
  `transaction_type` text,
  `service_type` text,
  `paid_amount` double DEFAULT NULL,
  `payment_mode` text,
  `remark` text,
  `receipt_no` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `st_production_info`
--

CREATE TABLE `st_production_info` (
  `id` int(11) NOT NULL,
  `production_date` date DEFAULT NULL,
  `ready_product_id` int(11) DEFAULT NULL,
  `production_qty` int(11) DEFAULT NULL,
  `total_production_cost` double NOT NULL DEFAULT '0',
  `entry_date_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `st_production_info`
--

INSERT INTO `st_production_info` (`id`, `production_date`, `ready_product_id`, `production_qty`, `total_production_cost`, `entry_date_time`) VALUES
(17, '2020-09-03', 2, 700, 98, '2020-09-03 12:47:59'),
(18, '2020-09-03', 2, 1000, 140, '2020-09-03 13:06:53'),
(19, '2020-09-03', 1, 100, 1210.6, '2020-09-03 18:55:32'),
(20, '2020-09-03', 1, 1000, 24212, '2020-09-03 19:04:44'),
(21, '2020-09-03', 1, 1000, 24212, '2020-09-03 19:06:43'),
(22, '2020-09-04', 1, 100, 2421.2, '2020-09-04 18:44:07'),
(23, '2020-09-05', 1, 90, 1089.54, '2020-09-05 17:19:26'),
(24, '2020-09-05', 2, 90, 0, '2020-09-05 17:19:26');

-- --------------------------------------------------------

--
-- Table structure for table `st_production_material_used_info`
--

CREATE TABLE `st_production_material_used_info` (
  `id` int(11) NOT NULL,
  `production_id` int(11) DEFAULT NULL,
  `manufacturing_raw_qty_id` int(11) DEFAULT NULL,
  `total_qty` double NOT NULL DEFAULT '0',
  `total_cost` double NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `st_product_category`
--

CREATE TABLE `st_product_category` (
  `id` int(11) NOT NULL,
  `category_name` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `st_product_category`
--

INSERT INTO `st_product_category` (`id`, `category_name`) VALUES
(1, 'brick'),
(2, 'tile'),
(3, 'Pever'),
(4, 'Sand');

-- --------------------------------------------------------

--
-- Table structure for table `st_purchase_info`
--

CREATE TABLE `st_purchase_info` (
  `id` int(11) NOT NULL,
  `vendor_id` int(11) DEFAULT NULL,
  `purchase_date` date DEFAULT NULL,
  `purchase_time` time DEFAULT NULL,
  `vendor_bill_no` text CHARACTER SET utf8,
  `total_gst_amount` double NOT NULL DEFAULT '0',
  `total_gross_amount` double NOT NULL DEFAULT '0',
  `total_transport_and_handling_charges` double NOT NULL DEFAULT '0',
  `other_charges` double NOT NULL DEFAULT '0',
  `total_discount` double NOT NULL DEFAULT '0',
  `total_net_amount` double NOT NULL DEFAULT '0',
  `transporting_type` text CHARACTER SET utf8 COMMENT 'SELF/BY COMPANY/THIRD PARTY VEHICLE',
  `gst_including_excluding_type` text CHARACTER SET utf8,
  `status` enum('0','1') NOT NULL DEFAULT '1',
  `entry_date_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `st_purchase_product_info`
--

CREATE TABLE `st_purchase_product_info` (
  `id` int(11) NOT NULL,
  `purchase_id` int(11) DEFAULT NULL,
  `raw_material_id` int(11) DEFAULT NULL,
  `unit` text CHARACTER SET utf8 COMMENT 'Eg. Kg., Liter etc.',
  `qty` double DEFAULT NULL,
  `unit_price` double DEFAULT '0',
  `gross_amount` double DEFAULT '0',
  `gst_percent` double DEFAULT '0',
  `gst_amount` double DEFAULT '0',
  `net_amount` double DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `st_purchase_transportation_info`
--

CREATE TABLE `st_purchase_transportation_info` (
  `id` int(11) NOT NULL,
  `purchase_id` int(11) DEFAULT NULL,
  `raw_material_id` int(11) DEFAULT NULL,
  `transportation_cat_id` int(11) DEFAULT NULL,
  `vehicle_name` text,
  `vehicle_no` text,
  `driver_name` text,
  `driver_contact_no` text,
  `no_of_trip_a_day` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `st_raw_material_stock`
--

CREATE TABLE `st_raw_material_stock` (
  `product_id` int(11) NOT NULL,
  `product_name` text CHARACTER SET utf8,
  `unit` text CHARACTER SET utf8,
  `qty` double DEFAULT '0',
  `rate` double NOT NULL DEFAULT '0',
  `status` enum('0','1') NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `st_raw_material_stock`
--

INSERT INTO `st_raw_material_stock` (`product_id`, `product_name`, `unit`, `qty`, `rate`, `status`) VALUES
(1, 'Electricity', 'hrs', 1, 0.04, '1'),
(2, 'Water', 'Ltr', 1, 0.01, '1'),
(3, 'Manpower + Operator', 'Nos Bricks', 1, 0.32, '1'),
(4, 'Stacking Charge', 'Nos Bricks', 1, 0.05, '1'),
(5, 'Machine Mantenence', 'Nos Bricks', 1, 0.03, '1'),
(10, 'Sand', 'kg', 1, 0.4, '1'),
(11, 'Gypsum', 'kg', 1, 4, '1'),
(12, 'Lime', 'kg', 2, 3.25, '1'),
(13, 'Fly Ash', 'kg', 1.08, 0.7, '1');

-- --------------------------------------------------------

--
-- Table structure for table `st_ready_product_stock`
--

CREATE TABLE `st_ready_product_stock` (
  `product_id` int(11) NOT NULL,
  `product_category_id` int(11) DEFAULT NULL,
  `product_name` text,
  `qty` int(11) DEFAULT NULL,
  `standard_weight` double NOT NULL DEFAULT '0',
  `standard_size` double NOT NULL DEFAULT '0',
  `per_qty_selling_cost` double NOT NULL DEFAULT '0',
  `status` enum('0','1') NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `st_ready_product_stock`
--

INSERT INTO `st_ready_product_stock` (`product_id`, `product_category_id`, `product_name`, `qty`, `standard_weight`, `standard_size`, `per_qty_selling_cost`, `status`) VALUES
(1, 1, 'fly bricks', 90, 78, 78, 45, '1'),
(2, 2, 'floor tile', 90, 10, 10, 66, '1');

-- --------------------------------------------------------

--
-- Table structure for table `st_sales_info`
--

CREATE TABLE `st_sales_info` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `sales_date` date DEFAULT NULL,
  `sales_time` time DEFAULT NULL,
  `transport_cost` double NOT NULL DEFAULT '0',
  `labour_charge` double NOT NULL DEFAULT '0',
  `discount` double NOT NULL DEFAULT '0',
  `gross_amount` double DEFAULT NULL,
  `gst_amount` double DEFAULT NULL,
  `net_amount` double DEFAULT NULL,
  `pay_amount` double DEFAULT NULL,
  `old_balance` double DEFAULT NULL,
  `current_balance_amount` double DEFAULT NULL,
  `receipt_no` text CHARACTER SET utf8,
  `transporting_type` text CHARACTER SET utf8 COMMENT 'SELF/BY COMPANY/THIRD PARTY VEHICLE',
  `gst_including_excluding_type` text CHARACTER SET utf8,
  `entry_date_time` datetime DEFAULT NULL,
  `status` enum('0','1') CHARACTER SET utf8 DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `st_sales_product_detail`
--

CREATE TABLE `st_sales_product_detail` (
  `id` int(11) NOT NULL,
  `receipt_no` text,
  `ready_product_id` int(11) DEFAULT NULL,
  `unit` text COMMENT 'Eg. Kg./Liter/Bags Etc.',
  `qty` int(11) DEFAULT '0',
  `per_unit_rate` double NOT NULL DEFAULT '0',
  `gross_amount` double NOT NULL DEFAULT '0',
  `gst_percent` double NOT NULL DEFAULT '0',
  `gst_amount` double NOT NULL DEFAULT '0',
  `net_amount` double NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `st_sales_transportation_info`
--

CREATE TABLE `st_sales_transportation_info` (
  `id` int(11) NOT NULL,
  `receipt_no` text,
  `ready_product_id` int(11) DEFAULT NULL,
  `transportation_cat_id` int(11) DEFAULT NULL,
  `vehicle_name` text,
  `vehicle_no` text,
  `driver_name` text,
  `driver_contact_no` text,
  `no_of_trip_a_day` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `st_transportation_type`
--

CREATE TABLE `st_transportation_type` (
  `id` int(11) NOT NULL,
  `category_name` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `st_transportation_type`
--

INSERT INTO `st_transportation_type` (`id`, `category_name`) VALUES
(1, 'By Customer Self'),
(2, 'By Company'),
(3, 'By Third Party Vehicle');

-- --------------------------------------------------------

--
-- Table structure for table `st_user_login`
--

CREATE TABLE `st_user_login` (
  `id` int(11) NOT NULL,
  `user_role_id` int(11) DEFAULT NULL,
  `person_name` text,
  `user_name` text,
  `password` text,
  `password_show` text,
  `email_id` text,
  `contact_no` text,
  `status` enum('0','1') NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `st_user_login`
--

INSERT INTO `st_user_login` (`id`, `user_role_id`, `person_name`, `user_name`, `password`, `password_show`, `email_id`, `contact_no`, `status`) VALUES
(1, 1, 'sourabh Nehar', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin', NULL, NULL, '1');

-- --------------------------------------------------------

--
-- Table structure for table `st_user_role`
--

CREATE TABLE `st_user_role` (
  `id` int(11) NOT NULL,
  `role_name` text CHARACTER SET utf8
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `st_user_role`
--

INSERT INTO `st_user_role` (`id`, `role_name`) VALUES
(1, 'Supper Admin'),
(2, 'Admin'),
(3, 'Operator');

-- --------------------------------------------------------

--
-- Table structure for table `st_vendor_info`
--

CREATE TABLE `st_vendor_info` (
  `vendor_id` int(11) NOT NULL,
  `person_name` text,
  `company_name` text,
  `city` text,
  `address` text,
  `email_id` text,
  `contact_one` text,
  `contact_two` text,
  `balance` double DEFAULT '0',
  `status` enum('0','1') DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `st_vendor_info`
--

INSERT INTO `st_vendor_info` (`vendor_id`, `person_name`, `company_name`, `city`, `address`, `email_id`, `contact_one`, `contact_two`, `balance`, `status`) VALUES
(33, 'Sourabh', 'wuw', 'bgt', 'bgt', 'sa@gmail.com', '3547890878', '1234567890', 32, '1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `st_customer_info`
--
ALTER TABLE `st_customer_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `st_default_receipt_no`
--
ALTER TABLE `st_default_receipt_no`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `st_employee_category`
--
ALTER TABLE `st_employee_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `st_employee_info`
--
ALTER TABLE `st_employee_info`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cat_id` (`cat_id`);

--
-- Indexes for table `st_expense_category`
--
ALTER TABLE `st_expense_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `st_expense_info`
--
ALTER TABLE `st_expense_info`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cat_id` (`cat_id`);

--
-- Indexes for table `st_login_history`
--
ALTER TABLE `st_login_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `st_logo`
--
ALTER TABLE `st_logo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `st_manufacturing_raw_qty_info`
--
ALTER TABLE `st_manufacturing_raw_qty_info`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `raw_material_id_2` (`raw_material_id`),
  ADD KEY `ready_product_id` (`ready_product_id`),
  ADD KEY `raw_material_id` (`raw_material_id`);

--
-- Indexes for table `st_payment_receive_given_info`
--
ALTER TABLE `st_payment_receive_given_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `st_production_info`
--
ALTER TABLE `st_production_info`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ready_product_id` (`ready_product_id`);

--
-- Indexes for table `st_production_material_used_info`
--
ALTER TABLE `st_production_material_used_info`
  ADD PRIMARY KEY (`id`),
  ADD KEY `manufacturing_raw_qty_id` (`manufacturing_raw_qty_id`),
  ADD KEY `production_id` (`production_id`);

--
-- Indexes for table `st_product_category`
--
ALTER TABLE `st_product_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `st_purchase_info`
--
ALTER TABLE `st_purchase_info`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vendor_id` (`vendor_id`);

--
-- Indexes for table `st_purchase_product_info`
--
ALTER TABLE `st_purchase_product_info`
  ADD PRIMARY KEY (`id`),
  ADD KEY `purchase_id` (`purchase_id`),
  ADD KEY `raw_material_id` (`raw_material_id`);

--
-- Indexes for table `st_purchase_transportation_info`
--
ALTER TABLE `st_purchase_transportation_info`
  ADD PRIMARY KEY (`id`),
  ADD KEY `raw_material_id` (`raw_material_id`);

--
-- Indexes for table `st_raw_material_stock`
--
ALTER TABLE `st_raw_material_stock`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `st_ready_product_stock`
--
ALTER TABLE `st_ready_product_stock`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `product_category_id` (`product_category_id`);

--
-- Indexes for table `st_sales_info`
--
ALTER TABLE `st_sales_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `st_sales_product_detail`
--
ALTER TABLE `st_sales_product_detail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ready_product_id` (`ready_product_id`);

--
-- Indexes for table `st_sales_transportation_info`
--
ALTER TABLE `st_sales_transportation_info`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ready_product_id` (`ready_product_id`);

--
-- Indexes for table `st_transportation_type`
--
ALTER TABLE `st_transportation_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `st_user_login`
--
ALTER TABLE `st_user_login`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_role_id` (`user_role_id`);

--
-- Indexes for table `st_user_role`
--
ALTER TABLE `st_user_role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `st_vendor_info`
--
ALTER TABLE `st_vendor_info`
  ADD PRIMARY KEY (`vendor_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `st_customer_info`
--
ALTER TABLE `st_customer_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `st_default_receipt_no`
--
ALTER TABLE `st_default_receipt_no`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `st_employee_category`
--
ALTER TABLE `st_employee_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `st_employee_info`
--
ALTER TABLE `st_employee_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `st_expense_category`
--
ALTER TABLE `st_expense_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `st_expense_info`
--
ALTER TABLE `st_expense_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `st_login_history`
--
ALTER TABLE `st_login_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=266;

--
-- AUTO_INCREMENT for table `st_logo`
--
ALTER TABLE `st_logo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `st_manufacturing_raw_qty_info`
--
ALTER TABLE `st_manufacturing_raw_qty_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=134;

--
-- AUTO_INCREMENT for table `st_payment_receive_given_info`
--
ALTER TABLE `st_payment_receive_given_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `st_production_info`
--
ALTER TABLE `st_production_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `st_production_material_used_info`
--
ALTER TABLE `st_production_material_used_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `st_product_category`
--
ALTER TABLE `st_product_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `st_purchase_info`
--
ALTER TABLE `st_purchase_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `st_purchase_product_info`
--
ALTER TABLE `st_purchase_product_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `st_purchase_transportation_info`
--
ALTER TABLE `st_purchase_transportation_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `st_raw_material_stock`
--
ALTER TABLE `st_raw_material_stock`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `st_ready_product_stock`
--
ALTER TABLE `st_ready_product_stock`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `st_sales_info`
--
ALTER TABLE `st_sales_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `st_sales_product_detail`
--
ALTER TABLE `st_sales_product_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `st_sales_transportation_info`
--
ALTER TABLE `st_sales_transportation_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `st_transportation_type`
--
ALTER TABLE `st_transportation_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `st_user_login`
--
ALTER TABLE `st_user_login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `st_user_role`
--
ALTER TABLE `st_user_role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `st_vendor_info`
--
ALTER TABLE `st_vendor_info`
  MODIFY `vendor_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `st_employee_info`
--
ALTER TABLE `st_employee_info`
  ADD CONSTRAINT `wh_employee_info_cat_id` FOREIGN KEY (`cat_id`) REFERENCES `st_employee_category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `st_expense_info`
--
ALTER TABLE `st_expense_info`
  ADD CONSTRAINT `wh_expense_info_cat_id` FOREIGN KEY (`cat_id`) REFERENCES `st_expense_category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `st_manufacturing_raw_qty_info`
--
ALTER TABLE `st_manufacturing_raw_qty_info`
  ADD CONSTRAINT `st_manufacturing_raw_qty_info_raw_material_id` FOREIGN KEY (`raw_material_id`) REFERENCES `st_raw_material_stock` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `st_manufacturing_raw_qty_info_ready_product_id` FOREIGN KEY (`ready_product_id`) REFERENCES `st_ready_product_stock` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `st_production_info`
--
ALTER TABLE `st_production_info`
  ADD CONSTRAINT `st_production_info_ready_product_id` FOREIGN KEY (`ready_product_id`) REFERENCES `st_ready_product_stock` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `st_production_material_used_info`
--
ALTER TABLE `st_production_material_used_info`
  ADD CONSTRAINT `st_production_material_used_info_manufacturing_raw_qty_id` FOREIGN KEY (`manufacturing_raw_qty_id`) REFERENCES `st_manufacturing_raw_qty_info` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `st_production_material_used_info_production_id` FOREIGN KEY (`production_id`) REFERENCES `st_production_info` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `st_purchase_info`
--
ALTER TABLE `st_purchase_info`
  ADD CONSTRAINT `st_purchase_info_vendor_id` FOREIGN KEY (`vendor_id`) REFERENCES `st_vendor_info` (`vendor_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `st_purchase_product_info`
--
ALTER TABLE `st_purchase_product_info`
  ADD CONSTRAINT `st_purchase_product_info_purchase_id` FOREIGN KEY (`purchase_id`) REFERENCES `st_purchase_info` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `st_purchase_product_info_raw_material_id` FOREIGN KEY (`raw_material_id`) REFERENCES `st_raw_material_stock` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `st_ready_product_stock`
--
ALTER TABLE `st_ready_product_stock`
  ADD CONSTRAINT `st_ready_product_stock_product_category_id` FOREIGN KEY (`product_category_id`) REFERENCES `st_product_category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `st_sales_product_detail`
--
ALTER TABLE `st_sales_product_detail`
  ADD CONSTRAINT `st_sales_product_detail_ready_product_id` FOREIGN KEY (`ready_product_id`) REFERENCES `st_ready_product_stock` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `st_sales_transportation_info`
--
ALTER TABLE `st_sales_transportation_info`
  ADD CONSTRAINT `st_sales_transportation_info_ready_product_id` FOREIGN KEY (`ready_product_id`) REFERENCES `st_ready_product_stock` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `st_user_login`
--
ALTER TABLE `st_user_login`
  ADD CONSTRAINT `st_user_login_user_role_id` FOREIGN KEY (`user_role_id`) REFERENCES `st_user_role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
