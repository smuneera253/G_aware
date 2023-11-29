//package com.governmentaware.governmentaware.service;
//
//import com.governmentaware.governmentaware.model.HelpNum;
//
//import java.util.List;
//
//public interface HelpNumService {
//    public HelpNum create(HelpNum helpNum);
//
//    public List<HelpNum> getAllHelpNum();
//
//    public HelpNum getOneHelpNum(Integer budget_id);
//
//
//
//    public HelpNum update(HelpNum helpNum);
//
//    public String deleteHelpNum(Integer id);
//
//    public List<HelpNum> getSearch(String emergency);
//}


// HelpNumService.java
package com.governmentaware.governmentaware.service;

import com.governmentaware.governmentaware.model.HelpNum;
import com.governmentaware.governmentaware.model.Plans;

import java.util.List;

public interface HelpNumService {
    HelpNum create(HelpNum helpNum);

    List<HelpNum> getAllHelpNum();

    HelpNum getOneHelpNum(Integer id);

    HelpNum update(HelpNum helpNum);

    String deleteHelpNum(Integer id);

    List<Plans> getAllPlans();

    List<HelpNum> getSearch(String emergency);
}
