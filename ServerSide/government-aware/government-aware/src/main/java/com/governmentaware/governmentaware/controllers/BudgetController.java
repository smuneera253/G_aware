package com.governmentaware.governmentaware.controllers;

import com.governmentaware.governmentaware.model.Budget;
import com.governmentaware.governmentaware.service.BudgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/budget")
public class BudgetController {

    @Autowired
    BudgetService budgetService;

    @PostMapping("/create")
    public Budget create(@RequestBody Budget budget){
        return budgetService.create(budget);
    }

    @GetMapping("")
    public List<Budget> getALLBudget(){
        return budgetService.getAllBudget();
    }

    @GetMapping("/{budget_id}")
    public Budget getOneBudget(@PathVariable Integer budget_id) {
        return budgetService.getOneBudget(budget_id);
    }

    @PutMapping("/update")
    public Budget update(@RequestBody Budget budget) {
        return budgetService.update(budget);
    }

    @DeleteMapping("/{budget_id}")
    public String deleteBudget(@PathVariable Integer budget_id) {
        return budgetService.deleteBudget(budget_id);
    }

    @GetMapping("/search")
    public List<Budget> getSearch(@RequestParam("query") String central) {
        return budgetService.getSearch(central);
    }
}
