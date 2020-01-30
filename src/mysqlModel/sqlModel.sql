-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema schoolApi
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema schoolApi
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `schoolApi` DEFAULT CHARACTER SET utf8 ;
USE `schoolApi` ;

-- -----------------------------------------------------
-- Table `schoolApi`.`teacher`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `schoolApi`.`teacher` (
  `id_teacher` INT NOT NULL AUTO_INCREMENT,
  `teacher_first_name` VARCHAR(45) NOT NULL,
  `teacher_last_name` VARCHAR(45) NOT NULL,
  `teacher_specialization` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_teacher`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `schoolApi`.`group`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `schoolApi`.`group` (
  `id_group` INT NOT NULL AUTO_INCREMENT,
  `group_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_group`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `schoolApi`.`student`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `schoolApi`.`student` (
  `id_student` INT NOT NULL AUTO_INCREMENT,
  `student_first_name` VARCHAR(45) NOT NULL,
  `student_last_name` VARCHAR(45) NOT NULL,
  `group_id_group` INT NOT NULL,
  PRIMARY KEY (`id_student`),
  INDEX `fk_student_group_idx` (`group_id_group` ASC) VISIBLE,
  CONSTRAINT `fk_student_group`
    FOREIGN KEY (`group_id_group`)
    REFERENCES `schoolApi`.`group` (`id_group`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `schoolApi`.`classroom`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `schoolApi`.`classroom` (
  `id_classroom` INT NOT NULL,
  `classroom_capacity` INT NOT NULL,
  PRIMARY KEY (`id_classroom`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `schoolApi`.`lesson`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `schoolApi`.`lesson` (
  `id_lesson` INT NOT NULL AUTO_INCREMENT,
  `lesson_title` VARCHAR(45) NOT NULL,
  `group_id_group` INT NOT NULL,
  `teacher_id_teacher` INT NOT NULL,
  `classroom_id_classroom` INT NOT NULL,
  PRIMARY KEY (`id_lesson`),
  INDEX `fk_lesson_group1_idx` (`group_id_group` ASC) VISIBLE,
  INDEX `fk_lesson_teacher1_idx` (`teacher_id_teacher` ASC) VISIBLE,
  INDEX `fk_lesson_classroom1_idx` (`classroom_id_classroom` ASC) VISIBLE,
  CONSTRAINT `fk_lesson_group1`
    FOREIGN KEY (`group_id_group`)
    REFERENCES `schoolApi`.`group` (`id_group`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_lesson_teacher1`
    FOREIGN KEY (`teacher_id_teacher`)
    REFERENCES `schoolApi`.`teacher` (`id_teacher`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_lesson_classroom1`
    FOREIGN KEY (`classroom_id_classroom`)
    REFERENCES `schoolApi`.`classroom` (`id_classroom`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
