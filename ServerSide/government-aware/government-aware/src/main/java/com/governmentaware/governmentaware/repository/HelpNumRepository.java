package com.governmentaware.governmentaware.repository;

import com.governmentaware.governmentaware.model.HelpNum;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface HelpNumRepository extends JpaRepository<HelpNum, Integer> {
    List<HelpNum> findByEmergency(String emergency);
}

