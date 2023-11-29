package com.governmentaware.governmentaware.model;

import jakarta.persistence.*;

@Entity
public class Leader {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int pm_id;

    @Column
    private  String name;

    @Column
    private  String starting_date;

    @Column
    private  String ending_date;

    @Column
    private  String party;

    @Column
    private  String image;

    public int getPm_id() {
        return pm_id;
    }

    public void setPm_id(int pm_id) {
        this.pm_id = pm_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStarting_date() {
        return starting_date;
    }

    public void setStarting_date(String starting_date) {
        this.starting_date = starting_date;
    }

    public String getEnding_date() {
        return ending_date;
    }

    public void setEnding_date(String ending_date) {
        this.ending_date = ending_date;
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
