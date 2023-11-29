package com.governmentaware.governmentaware.model;

import jakarta.persistence.*;

@Entity
@Table(name = "HelpingNumber")

public class HelpNum {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private int id;
    @Column
    private String emergency;
    @Column
    private String contact;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmergency() {
        return emergency;
    }

    public void setEmergency(String emergency) {
        this.emergency = emergency;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }
}
