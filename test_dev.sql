-- phpMyAdmin SQL Dump
-- version 4.3.2
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Июл 02 2019 г., 11:32
-- Версия сервера: 5.6.21-log
-- Версия PHP: 5.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `test.dev`
--

-- --------------------------------------------------------

--
-- Структура таблицы `city`
--

CREATE TABLE IF NOT EXISTS `city` (
  `ID` int(11) NOT NULL,
  `NAME` varchar(256) NOT NULL,
  `ID_REGION` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `city`
--

INSERT INTO `city` (`ID`, `NAME`, `ID_REGION`) VALUES
(1, 'Київ', 26),
(2, 'Хмельницький', 22),
(4, 'Житомир', 6),
(5, 'Дніпро', 4),
(6, 'Павлоград', 4);

-- --------------------------------------------------------

--
-- Структура таблицы `locations`
--

CREATE TABLE IF NOT EXISTS `locations` (
  `ID` int(11) NOT NULL,
  `ID_TYPE` int(11) NOT NULL,
  `ID_CITY` int(11) NOT NULL,
  `LAT` double NOT NULL,
  `LNG` double NOT NULL,
  `ADDRESS` varchar(256) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `locations`
--

INSERT INTO `locations` (`ID`, `ID_TYPE`, `ID_CITY`, `LAT`, `LNG`, `ADDRESS`) VALUES
(1, 1, 1, 50.495688, 30.405586, 'вул. Маршала Гречка, 13-А'),
(2, 1, 1, 50.488486, 30.494202, 'пр-т Степана Бандери, 6'),
(3, 1, 1, 50.497004, 30.464553, 'вул. Скляренко 5-Б'),
(4, 1, 2, 49.41055, 26.99526, 'м.Хмельницький'),
(5, 1, 4, 50.2681, 28.6662, 'м.Житомир'),
(6, 2, 5, 48.46195, 35.00042, 'м.Дніпро'),
(7, 1, 6, 48.53192, 35.86942, 'м.Павлоград'),
(8, 3, 1, 50.508805, 30.51212, 'пр-т Героїв Сталінграду 14г\nТелефон: 044-411-95-71, 067-443-65-65'),
(9, 4, 1, 50.336568, 30.409078, 'смт. Чабани, Києво-Святошинський р-н Вулиця: 7-й км шосе Київ-Одеса, вул. Кірова 162'),
(10, 2, 2, 49.42055, 26.98526, 'Хмельницький Борщ'),
(11, 3, 4, 50.2681, 28.7662, 'Житомир ресторан'),
(12, 2, 6, 48.52192, 35.87942, 'кафе "Борщ"'),
(13, 4, 5, 48.47195, 35.01042, 'м.Дніпро'),
(14, 1, 5, 48.48195, 35.02042, '');

-- --------------------------------------------------------

--
-- Структура таблицы `region`
--

CREATE TABLE IF NOT EXISTS `region` (
  `ID` int(11) NOT NULL,
  `NAME` varchar(250) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `region`
--

INSERT INTO `region` (`ID`, `NAME`) VALUES
(4, 'Дніпропетровська'),
(6, 'Житомирська'),
(22, 'Хмельницька'),
(26, 'м.Київ');

-- --------------------------------------------------------

--
-- Структура таблицы `type`
--

CREATE TABLE IF NOT EXISTS `type` (
  `ID` int(11) NOT NULL,
  `NAME` varchar(64) NOT NULL,
  `MARKER` varchar(64) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `type`
--

INSERT INTO `type` (`ID`, `NAME`, `MARKER`) VALUES
(1, 'АЗС', 'fillingstation.png'),
(2, 'Кафе "Борщ"', 'coffee.png'),
(3, 'Ресторан "Меланж"', 'restaurant.png'),
(4, 'Готельно-рестораний комплекс "Чабани"', 'hotel-restaurant.png');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`ID`);

--
-- Индексы таблицы `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`ID`);

--
-- Индексы таблицы `region`
--
ALTER TABLE `region`
  ADD PRIMARY KEY (`ID`);

--
-- Индексы таблицы `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `city`
--
ALTER TABLE `city`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT для таблицы `locations`
--
ALTER TABLE `locations`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT для таблицы `region`
--
ALTER TABLE `region`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=29;
--
-- AUTO_INCREMENT для таблицы `type`
--
ALTER TABLE `type`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
