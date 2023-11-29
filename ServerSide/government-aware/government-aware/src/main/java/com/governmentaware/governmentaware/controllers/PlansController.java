package com.governmentaware.governmentaware.controllers;

import com.governmentaware.governmentaware.model.Plans;
import com.governmentaware.governmentaware.service.PlansService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/plans")
public class PlansController {
    @Autowired
    PlansService plansService;

    @PostMapping("/create")
    public Plans create(@RequestBody Plans plans){return plansService.create(plans);}

    @GetMapping("")
    public List<Plans> getALLPlans(){return plansService.getAllPlans();}

    @GetMapping("/{id}")
    public Plans getOnePlans(@PathVariable Integer id) {
        return plansService.getOnePlans(id);
    }

    @PutMapping("/update")
    public Plans update(@RequestBody Plans plans) {
        return plansService.update(plans);
    }

    @DeleteMapping("/{id}")
    public String deletePlans(@PathVariable Integer id) {
        return plansService.deletePlans(id);
    }

    @GetMapping("/search")
    public List<Plans> getSearch(@RequestParam("query") String planName) {
        return plansService.getSearch(planName);
    }


}
