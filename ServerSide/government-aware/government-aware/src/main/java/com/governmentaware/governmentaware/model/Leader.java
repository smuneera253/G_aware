package com.governmentaware.governmentaware.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class leader {
    @Id
    private int pmId;

    @Column
    private  String Name;

    @Column
    private  int Age;

    @Column
    private  String StartingDate;

    @Column
    private  String EndingDate;

    @Column
    private  String party;

    @Column
    private  String image;

    public int getPmId() {
        return pmId;
    }

    public void setPmId(int pmId) {
        this.pmId = pmId;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public int getAge() {
        return Age;
    }

    public void setAge(int age) {
        Age = age;
    }

    public String getStartingDate() {
        return StartingDate;
    }

    public void setStartingDate(String startingDate) {
        StartingDate = startingDate;
    }

    public String getEndingDate() {
        return EndingDate;
    }

    public void setEndingDate(String endingDate) {
        EndingDate = endingDate;
    }

    public String getParty() {
        return party;
    }

    public void setParty(String party) {
        this.party = party;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
