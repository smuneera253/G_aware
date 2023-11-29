//package com.governmentaware.governmentaware.controllers;
//import com.governmentaware.governmentaware.model.HelpNum;
//import com.governmentaware.governmentaware.service.HelpNumService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/help")
////@CrossOrigin(origins = "http://localhost:3000")
//public class HelpNumController {
//    @Autowired
//    HelpNumService helpNumService;
//
//    @PostMapping("/create")
//    public HelpNum create(@RequestBody HelpNum helpNum){
//        return helpNumService.create(helpNum);
//    }
//
//    @GetMapping("")
//    public List<HelpNum> getALLHelpNum(){
//        return helpNumService.getAllHelpNum();
//    }
//
//    @GetMapping("/{id}")
//    public HelpNum getOneHelpNum(@PathVariable Integer id) {
//        return helpNumService.getOneHelpNum(id);
//    }
//
//    @PutMapping("/update")
//    public HelpNum update(@RequestBody HelpNum helpNum) {
//        return helpNumService.update(helpNum);
//    }
//
//    @DeleteMapping("/{id}")
//    public String deleteHelpNum(@PathVariable Integer id) {
//        return helpNumService.deleteHelpNum(id);
//    }
//
//    @GetMapping("/search")
//    public List<HelpNum> getSearch(@RequestParam("query") String emergency) {
//        return helpNumService.getSearch(emergency);
//    }
//}
//
//


package com.governmentaware.governmentaware.controllers;

import com.governmentaware.governmentaware.model.HelpNum;
import com.governmentaware.governmentaware.service.HelpNumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/help")
public class HelpNumController {

    @Autowired
    HelpNumService helpNumService;

    @PostMapping("/create")
    public HelpNum create(@RequestBody HelpNum helpNum){
        return helpNumService.create(helpNum);
    }

    @GetMapping("")
    public List<HelpNum> getALLHelpNum(){
        return helpNumService.getAllHelpNum();
    }

    @GetMapping("/{id}")
    public HelpNum getOneHelpNum(@PathVariable Integer id) {
        return helpNumService.getOneHelpNum(id);
    }

    @PutMapping("/update")
    public HelpNum update(@RequestBody HelpNum helpNum) {
        return helpNumService.update(helpNum);
    }

    @DeleteMapping("/{id}")
    public String deleteHelpNum(@PathVariable Integer id) {
        return helpNumService.deleteHelpNum(id);
    }

    @GetMapping("/search")
    public List<HelpNum> getSearch(@RequestParam("query") String emergency) {
        return helpNumService.getSearch(emergency);
    }
}

