package com.governmentaware.governmentaware.service.Impl;

import com.governmentaware.governmentaware.model.Leader;
import com.governmentaware.governmentaware.repository.LeaderRepository;
import com.governmentaware.governmentaware.service.LeaderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LeaderServiceImpl implements LeaderService {

    @Autowired
    LeaderRepository leaderRepository;

    @Override
    public Leader create(Leader leader){
        return leaderRepository.save(leader);
    }

    @Override
    public List<Leader> getAllLeader() {
        return leaderRepository.findAll();
    }

    @Override
    public Leader getOneLeader(Integer id) {
        return leaderRepository.findById(id).get();
    }

    @Override
    public Leader update(Leader leader) {
        return leaderRepository.save(leader);
    }

    @Override
    public String deleteLeader(Integer id) {
        leaderRepository.deleteById(id);
        return "Leader Details are deleted from the database";
    }

    @Override
    public List<Leader> getSearch(String name) {
        return leaderRepository.getSearch(name);
    }
}
