package com.governmentaware.governmentaware.service;

import com.governmentaware.governmentaware.model.Plans;
import org.springframework.stereotype.Service;

import java.util.List;
@Service

public interface PlansService {
    public Plans create(Plans plans);

   public List<Plans> getAllPlans();

   public Plans getOnePlans(Integer id);

    public Plans update(Plans plans);

    public String deletePlans(Integer id);

    public List<Plans> getSearch(String planName);

}
