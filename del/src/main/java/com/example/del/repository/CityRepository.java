package com.example.del.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.del.entity.City;

@Repository
public interface CityRepository extends JpaRepository<City, Long> {
}
