package com.governmentaware.governmentaware.repository;

import com.governmentaware.governmentaware.model.Leader;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface LeaderRepository extends JpaRepository<Leader, Integer> {

    @Query("select l from Leader l where l.name like %?1%")
    List<Leader> getSearch(String name);

}
