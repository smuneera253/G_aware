package com.governmentaware.governmentaware.repository;

import com.governmentaware.governmentaware.model.Plans;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
public interface PlansRepository extends JpaRepository<Plans, Integer> {

    List<Plans>findByplanName(String planName);
}
