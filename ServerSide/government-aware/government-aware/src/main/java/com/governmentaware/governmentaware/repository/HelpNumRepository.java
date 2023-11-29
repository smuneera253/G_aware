package com.governmentaware.governmentaware.repository;

import com.governmentaware.governmentaware.model.Helpnum;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface HelpnumRepository extends JpaRepository <Helpnum , Integer> {
    List<Helpnum>findByEmetgency(String emergency)
}
