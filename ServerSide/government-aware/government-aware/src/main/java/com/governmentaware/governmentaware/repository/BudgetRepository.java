package com.governmentaware.governmentaware.repository;

import com.governmentaware.governmentaware.model.Budget;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BudgetRepository extends JpaRepository<Budget, Integer> {

    List<Budget> findByCentral(String central);
}
