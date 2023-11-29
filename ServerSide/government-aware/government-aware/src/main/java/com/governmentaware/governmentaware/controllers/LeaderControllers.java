package com.governmentaware.governmentaware.controllers;

import com.governmentaware.governmentaware.model.Leader;
import com.governmentaware.governmentaware.service.LeaderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/leader")
public class LeaderControllers {
    @Autowired
    LeaderService leaderService;
    @PostMapping("/create")
    public Leader create(@RequestBody Leader leader) {
        return leaderService.create(leader);

    }

    @GetMapping("")
    public List<Leader> getAllLeader() {
        return leaderService.getAllLeader();
    }

    @GetMapping("/{id}")
    public Leader getOneLeader(@PathVariable Integer id) {
        return leaderService.getOneLeader(id);
    }

    @PutMapping("/update")
    public Leader update(@RequestBody Leader leader) {
        return leaderService.update(leader);
    }

    @DeleteMapping("/{id}")
    public String deleteLeader(@PathVariable Integer id) {
        return leaderService.deleteLeader(id);
    }

    @GetMapping("/search")
        public List<Leader> getSearch(@RequestParam("query") String name) {
        return leaderService.getSearch(name);

    
    }
}
