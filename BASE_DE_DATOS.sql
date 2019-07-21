-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 21-07-2019 a las 06:57:06
-- Versión del servidor: 10.3.15-MariaDB
-- Versión de PHP: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hotelalamo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `idcliente` int(11) NOT NULL,
  `num_documento` varchar(60) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `direccion` varchar(45) DEFAULT NULL,
  `correo` varchar(45) DEFAULT NULL,
  `usuario` varchar(45) NOT NULL,
  `contrasena` char(250) DEFAULT NULL,
  `tipo_documento` int(11) NOT NULL,
  `tipo_cliente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`idcliente`, `num_documento`, `nombre`, `apellido`, `direccion`, `correo`, `usuario`, `contrasena`, `tipo_documento`, `tipo_cliente`) VALUES
(1, '1090499082', 'Duvan', 'B', 'Calle 13', 'duvan@gmail.com', 'alertapunk', '$2y$10$mOt75NHTWfhvYzbFmw9Y2OHW8N78/mDUPtn9XWCU/juHRsTqqPTKm', 1, 2),
(2, '6545655', 'nariz', 'ortega', 'asdsad', 'dasd@gmail.com', 'ylir', 'dsadasd', 2, 2),
(3, '61654655454', 'daniel', 'luna', 'dasdasd', 'daniel@gmail.com', 'dam', '$2y$10$XcWP6586/wGFq/zWajkq0OMIbYviZdM2GpylDN8y3BIIsf64R7YI6', 1, 1),
(7, '544554', 'dasd', 'dasd', 'asdsad', 'dad@gmail.com', 'otro', '$2y$10$8x0bNeKi.USpscbAZmXyWODmps6AsBaNMFpPRUUbvDwWWJW92ZK1.', 1, 1),
(8, '109049904', 'camilo', 'ojeda', 'calle13', 'camilo@gmail.com', 'camilo', '$2y$10$mOt75NHTWfhvYzbFmw9Y2OHW8N78/mDUPtn9XWCU/juHRsTqqPTKm', 2, 1),
(9, '1090231293', 'das', 'dasd', 'ansdkajshd', 'dasdsdd@gmail.com', 'asdasd', '$2y$10$TJor6ICguKG.hN9E6JXJkedX9OmRSG1UPX8nKPRSH7IzVMgOWn4Ju', 1, 1),
(10, '23123123', 'duvan', 'bot', 'dsadas', 'ddasds@gmail.com', 'admin', '$2y$10$uQcy/05xzfJyqC/SndGteuD9BraNic7c/udXZ.p.LnWzsdsIyhD/a', 1, 1),
(38, '123123', 'asdasd', 'dasd', 'asdasd', 'duvdn@gmail.com', 'dasda', '$2y$10$OPP2.wqSwoeWyeZGmOZ0k.ym0Xq4k0k98PEo/T5rw9YTHWdaWBPva', 1, 1),
(39, '1231232', 'duvan', 'dasd', 'dasdasd', 'dan@gmail.com', 'jelou', '$2y$10$osxcsKOA2loh21/1n.5YmO1H/x/YPd3L7LqCGsrb4I2mJudpTnDLK', 1, 1),
(40, '515454', 'dasd', 'dasd', 'calle', 'dasqqq@gmail.com', 'alera', '$2y$10$Snr5jInLSSCR1iNOr/0rGOTggtqqeF/49j.PCn2ztQNjdxaEFDGvK', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleado`
--

CREATE TABLE `empleado` (
  `idempleado` int(11) NOT NULL,
  `Nombre` varchar(45) DEFAULT NULL,
  `Apellido` varchar(45) DEFAULT NULL,
  `usuario` varchar(45) DEFAULT NULL,
  `contrasena` char(200) DEFAULT NULL,
  `tipo_empleado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `empleado`
--

INSERT INTO `empleado` (`idempleado`, `Nombre`, `Apellido`, `usuario`, `contrasena`, `tipo_empleado`) VALUES
(1, 'El', 'Administrador', 'admin', '$2y$10$mOt75NHTWfhvYzbFmw9Y2OHW8N78/mDUPtn9XWCU/juHRsTqqPTKm', 1),
(2, 'El', 'Recepcionista', 'recep', '$2y$10$mOt75NHTWfhvYzbFmw9Y2OHW8N78/mDUPtn9XWCU/juHRsTqqPTKm', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habitaciones`
--

CREATE TABLE `habitaciones` (
  `idhabitaciones` int(11) NOT NULL,
  `estado` int(11) NOT NULL,
  `numHabitacion` varchar(45) NOT NULL,
  `tipo_habitacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `habitaciones`
--

INSERT INTO `habitaciones` (`idhabitaciones`, `estado`, `numHabitacion`, `tipo_habitacion`) VALUES
(1, 1, '01', 1),
(2, 1, '02', 2),
(3, 1, '03', 3),
(4, 1, '04', 2),
(5, 1, '05', 2),
(6, 1, '06', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `images`
--

CREATE TABLE `images` (
  `idimages` int(11) NOT NULL,
  `url` text DEFAULT NULL,
  `idhabitaciones` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `images`
--

INSERT INTO `images` (`idimages`, `url`, `idhabitaciones`) VALUES
(4, 'http://localhost/profesional/Resource/images/Habitaciones/doble.jpg', 2),
(5, 'http://localhost/profesional/Resource/images/Habitaciones/matrimonial.jpg', 3),
(6, 'http://localhost/profesional/Resource/images/Habitaciones/doble.jpg', 4),
(7, 'http://localhost/profesional/Resource/images/Habitaciones/doble.jpg', 5),
(8, 'http://localhost/profesional/Resource/images/Habitaciones/simple.jpg', 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserva`
--

CREATE TABLE `reserva` (
  `codigo` int(11) NOT NULL,
  `fecha_entrada` date NOT NULL,
  `fecha_salida` date DEFAULT NULL,
  `dias` varchar(45) NOT NULL,
  `costo` float DEFAULT NULL,
  `descuento` float DEFAULT NULL,
  `total` float DEFAULT NULL,
  `cliente_id` int(11) NOT NULL,
  `idhabitacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `reserva`
--

INSERT INTO `reserva` (`codigo`, `fecha_entrada`, `fecha_salida`, `dias`, `costo`, `descuento`, `total`, `cliente_id`, `idhabitacion`) VALUES
(1, '2019-07-16', '2019-07-20', '4', 1200000, 30, 840000, 1, 3),
(2, '2019-07-16', '2019-08-22', '37', 3700000, 30, 2590000, 1, 6),
(3, '2019-07-16', '2019-07-19', '3', 600000, 20, 480000, 1, 4),
(4, '2019-07-17', '2019-07-26', '9', 1800000, 0, 1800000, 3, 5),
(5, '2019-07-17', '2019-07-30', '13', 3900000, 0, 3900000, 8, 3),
(6, '2019-07-18', '2019-07-19', '1', 200000, 20, 160000, 1, 2),
(7, '2019-07-21', '2019-07-22', '1', 200000, 20, 160000, 1, 5),
(8, '2019-04-21', '2019-04-22', '2', 200000, 0, 200000, 1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `telefono`
--

CREATE TABLE `telefono` (
  `idtelefono` int(11) NOT NULL,
  `telefono` varchar(45) NOT NULL,
  `idcliente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_cliente`
--

CREATE TABLE `tipo_cliente` (
  `idtipo_cliente` int(11) NOT NULL,
  `descripcion` varchar(45) NOT NULL,
  `descuento` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tipo_cliente`
--

INSERT INTO `tipo_cliente` (`idtipo_cliente`, `descripcion`, `descuento`) VALUES
(1, 'Esporadico', 0),
(2, 'Habitual', 15);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_documento`
--

CREATE TABLE `tipo_documento` (
  `idtipo_documento` int(11) NOT NULL,
  `Descripcion` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tipo_documento`
--

INSERT INTO `tipo_documento` (`idtipo_documento`, `Descripcion`) VALUES
(1, 'Cedula'),
(2, 'Pasaporte'),
(3, 'Prueba Rol');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_empleado`
--

CREATE TABLE `tipo_empleado` (
  `id_tipoempleado` int(11) NOT NULL,
  `descripcion` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tipo_empleado`
--

INSERT INTO `tipo_empleado` (`id_tipoempleado`, `descripcion`) VALUES
(1, 'Administrador'),
(2, 'Recepcionista');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_habitacion`
--

CREATE TABLE `tipo_habitacion` (
  `idtipo_habitacion` int(11) NOT NULL,
  `descripcion` varchar(45) NOT NULL,
  `precio` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tipo_habitacion`
--

INSERT INTO `tipo_habitacion` (`idtipo_habitacion`, `descripcion`, `precio`) VALUES
(1, 'Simple', 550000),
(2, 'Doble', 200000),
(3, 'Matrimonial', 300000),
(8, 'Simple Doble', 500000);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`idcliente`),
  ADD UNIQUE KEY `idcliente_UNIQUE` (`idcliente`),
  ADD UNIQUE KEY `num_documento_UNIQUE` (`num_documento`),
  ADD UNIQUE KEY `usuario_UNIQUE` (`usuario`),
  ADD KEY `fk_cliente_tipo_documento_idx` (`tipo_documento`),
  ADD KEY `fk_cliente_tipo_cliente1_idx` (`tipo_cliente`);

--
-- Indices de la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD PRIMARY KEY (`idempleado`),
  ADD UNIQUE KEY `idempleado_UNIQUE` (`idempleado`),
  ADD KEY `fk_empleado_tipo_empleado1_idx` (`tipo_empleado`);

--
-- Indices de la tabla `habitaciones`
--
ALTER TABLE `habitaciones`
  ADD PRIMARY KEY (`idhabitaciones`),
  ADD KEY `fk_habitaciones_tipo_habitacion1_idx` (`tipo_habitacion`);

--
-- Indices de la tabla `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`idimages`),
  ADD UNIQUE KEY `idimages_UNIQUE` (`idimages`),
  ADD KEY `fk_images_habitaciones1_idx` (`idhabitaciones`);

--
-- Indices de la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD PRIMARY KEY (`codigo`),
  ADD UNIQUE KEY `codigo_UNIQUE` (`codigo`),
  ADD KEY `fk_reserva_cliente1_idx` (`cliente_id`),
  ADD KEY `fk_reserva_habitaciones1_idx` (`idhabitacion`);

--
-- Indices de la tabla `telefono`
--
ALTER TABLE `telefono`
  ADD PRIMARY KEY (`idtelefono`),
  ADD UNIQUE KEY `idtelefono_UNIQUE` (`idtelefono`),
  ADD KEY `fk_telefono_cliente1_idx` (`idcliente`);

--
-- Indices de la tabla `tipo_cliente`
--
ALTER TABLE `tipo_cliente`
  ADD PRIMARY KEY (`idtipo_cliente`);

--
-- Indices de la tabla `tipo_documento`
--
ALTER TABLE `tipo_documento`
  ADD PRIMARY KEY (`idtipo_documento`);

--
-- Indices de la tabla `tipo_empleado`
--
ALTER TABLE `tipo_empleado`
  ADD PRIMARY KEY (`id_tipoempleado`),
  ADD UNIQUE KEY `idtable1_UNIQUE` (`id_tipoempleado`);

--
-- Indices de la tabla `tipo_habitacion`
--
ALTER TABLE `tipo_habitacion`
  ADD PRIMARY KEY (`idtipo_habitacion`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `idcliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT de la tabla `empleado`
--
ALTER TABLE `empleado`
  MODIFY `idempleado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `habitaciones`
--
ALTER TABLE `habitaciones`
  MODIFY `idhabitaciones` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `images`
--
ALTER TABLE `images`
  MODIFY `idimages` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `reserva`
--
ALTER TABLE `reserva`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `telefono`
--
ALTER TABLE `telefono`
  MODIFY `idtelefono` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipo_cliente`
--
ALTER TABLE `tipo_cliente`
  MODIFY `idtipo_cliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tipo_documento`
--
ALTER TABLE `tipo_documento`
  MODIFY `idtipo_documento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tipo_empleado`
--
ALTER TABLE `tipo_empleado`
  MODIFY `id_tipoempleado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tipo_habitacion`
--
ALTER TABLE `tipo_habitacion`
  MODIFY `idtipo_habitacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD CONSTRAINT `fk_cliente_tipo_cliente1` FOREIGN KEY (`tipo_cliente`) REFERENCES `tipo_cliente` (`idtipo_cliente`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_cliente_tipo_documento` FOREIGN KEY (`tipo_documento`) REFERENCES `tipo_documento` (`idtipo_documento`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD CONSTRAINT `fk_empleado_tipo_empleado1` FOREIGN KEY (`tipo_empleado`) REFERENCES `tipo_empleado` (`id_tipoempleado`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `habitaciones`
--
ALTER TABLE `habitaciones`
  ADD CONSTRAINT `fk_habitaciones_tipo_habitacion1` FOREIGN KEY (`tipo_habitacion`) REFERENCES `tipo_habitacion` (`idtipo_habitacion`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `fk_images_habitaciones1` FOREIGN KEY (`idhabitaciones`) REFERENCES `habitaciones` (`idhabitaciones`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD CONSTRAINT `fk_reserva_cliente1` FOREIGN KEY (`cliente_id`) REFERENCES `cliente` (`idcliente`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_reserva_habitaciones1` FOREIGN KEY (`idhabitacion`) REFERENCES `habitaciones` (`idhabitaciones`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `telefono`
--
ALTER TABLE `telefono`
  ADD CONSTRAINT `fk_telefono_cliente1` FOREIGN KEY (`idcliente`) REFERENCES `cliente` (`idcliente`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
