package com.governmentaware.governmentaware.service.Impl;

import com.governmentaware.governmentaware.model.Budget;
import com.governmentaware.governmentaware.repository.BudgetRepository;
import com.governmentaware.governmentaware.service.BudgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BudgetServiceImpl implements BudgetService {

    @Autowired
    private BudgetRepository budgetRepository;

    @Override
    public Budget create(Budget budget) {
        return budgetRepository.save(budget);
    }

    @Override
    public List<Budget> getAllBudget() {
        return budgetRepository.findAll();
    }

    @Override
    public Budget getOneBudget(Integer budget_id) {
        return budgetRepository.findById(budget_id).orElse(null);
    }

    @Override
    public Budget update(Budget budget) {
        return budgetRepository.save(budget);
    }

    @Override
    public String deleteBudget(Integer budget_id) {
        budgetRepository.deleteById(budget_id);
        return "Budget details are deleted from the database";
    }

    @Override
    public List<Budget> getSearch(String central) {
        return budgetRepository.findByCentral(central);
    }
}
