package com.governmentaware.governmentaware.model;

import jakarta.persistence.*;

@Entity
@Table(name = "plans")

public class Plans {

    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)

    private int id;

    @Column String planName;

    @Column String sector;

    @Column String about;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPlanName() {
        return planName;
    }

    public void setPlanName(String planName) {
        this.planName = planName;
    }

    public String getSector() {
        return sector;
    }

    public void setSector(String sector) {
        this.sector = sector;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }
}
