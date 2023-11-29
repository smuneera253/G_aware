package com.governmentaware.governmentaware.service;

import com.governmentaware.governmentaware.model.Budget;

import java.util.List;

public interface BudgetService {
    Budget create(Budget budget);

    List<Budget> getAllBudget();

    Budget getOneBudget(Integer budget_id);

    Budget update(Budget budget);

    String deleteBudget(Integer budget_id);

    List<Budget> getSearch(String central);
}
