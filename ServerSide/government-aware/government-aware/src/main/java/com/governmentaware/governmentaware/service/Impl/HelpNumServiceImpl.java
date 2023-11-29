package com.governmentaware.governmentaware.service.Impl;

import com.governmentaware.governmentaware.model.HelpNum;
import com.governmentaware.governmentaware.repository.HelpNumRepository;
import com.governmentaware.governmentaware.service.HelpNumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class HelpNumServiceImpl implements HelpNumService {
    @Autowired
    private HelpNumRepository helpNumRepository;

    @Override
    public HelpNum create(HelpNum helpNum){return helpNumRepository.save(helpNum);}

    @Override
    public List<HelpNum> getAllHelpNum() {
        return helpNumRepository.findAll();
    }

    public HelpNum getOneHelpNum(Integer id) {
        return helpNumRepository.findById(id).orElse(null);
    }

    @Override
    public HelpNum update(HelpNum helpNum) {
        return helpNumRepository.save(helpNum);
    }

    @Override
    public String deleteHelpNum(Integer id) {
        helpNumRepository.deleteById(id);
        return "Plans details are deleted from the database";
    }

    @Override
    public List<HelpNum> getSearch(String emergency) {
        return helpNumRepository.findByEmergency(emergency);
    }
}