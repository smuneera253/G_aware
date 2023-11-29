package com.governmentaware.governmentaware.service;

import com.governmentaware.governmentaware.model.Leader;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface LeaderService {
    public Leader create (Leader leader);

    public List<Leader> getAllLeader();

    public Leader getOneLeader(Integer id);

    public Leader update(Leader leader);

    public String deleteLeader(Integer id);

    public List<Leader> getSearch(String name);
}
