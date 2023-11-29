package com.governmentaware.governmentaware.model;

import jakarta.persistence.*;

@Entity
@Table(name = "currency")
public class Budget {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int budget_id;

    @Column
    private String central;

    @Column
    private String total;
    @Column
    private String sector;

    public String getSector() {
        return sector;
    }

    public void setSector(String sector) {
        this.sector = sector;
    }

    public String getTotal() {
        return total;
    }

    public void setTotal(String total) {
        this.total = total;
    }

    public int getBudget_id() {
        return budget_id;
    }

    public void setBudget_id(int budget_id) {
        this.budget_id = budget_id;
    }

    public String getCentral() {
        return central;
    }

    public void setCentral(String central) {
        this.central = central;
    }


}
