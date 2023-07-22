package com.governmentaware.governmentaware.service.Impl;

import com.governmentaware.governmentaware.model.Leader;
import com.governmentaware.governmentaware.repository.LeaderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class LeaderServiceimpl {
    @Autowired
    LeaderRepository LeaderRepository;
    @Override
    public Leader create(Leader leader){
        return LeaderRepository.save(leader);
    }
}
