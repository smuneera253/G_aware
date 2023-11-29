package com.governmentaware.governmentaware.service.Impl;

import com.governmentaware.governmentaware.model.Plans;
import com.governmentaware.governmentaware.repository.PlansRepository;
import com.governmentaware.governmentaware.service.PlansService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class PlansServiceImp implements PlansService {

    @Autowired
    private PlansRepository plansRepository;

    @Override
    public Plans create(Plans plans){return plansRepository.save(plans);}

    @Override
    public List<Plans> getAllPlans() {
        return plansRepository.findAll();
    }

    public Plans getOnePlans(Integer id) {
        return plansRepository.findById(id).orElse(null);
    }

    @Override
    public Plans update(Plans plans) {
        return plansRepository.save(plans);
    }

    @Override
    public String deletePlans(Integer id) {
        plansRepository.deleteById(id);
        return "Plans details are deleted from the database";
    }

    @Override
    public List<Plans> getSearch(String planName) {
        return plansRepository.findByplanName(planName);
    }
}



