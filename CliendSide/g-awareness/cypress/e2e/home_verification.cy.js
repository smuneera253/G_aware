describe("verification web page",()=>{

    it("verifying the content in home page",()=>{
        cy.visit("/govt")
        cy.wait(5000)

        cy.get(`[class="img22"]`).should("exist")
        cy.get(`[class="img1"]`).should("exist")
        cy.get(`[value="Urdu"]`).should("contain", "Urdu")
        cy.get(`[class="skip null"]`).should("contain","Skip main content |")
        cy.get(`[class="skip Dark"]`).should("contain","Dark mode |")
        cy.get(`[class="search1"]`).should("exist")
        cy.get(`[class="btn11"]`).should("exist")
        cy.get(`[class="sign11"]`).should("contain","sign up")
        cy.get(`[class="login11"]`).should("contain","login")
        cy.get(`[class="login11"]`).should("contain","about")
        cy.get(`[class="poltical bottom"]`).eq(0).should("contain","Political leaders")
        cy.get(`[class="poltical bottom"]`).eq(1).should("contain","Government Budjet")
        cy.get(`[class="poltical bottom"]`).eq(2).should("contain","Government Plans")
        cy.get(`[class="poltical bottom"]`).eq(3).should("contain","Government Office Number")

        cy.get(`[class="poltical bottom"]`).eq(4).should("contain","Tourist Place")
        cy.get(`[class="poltical bottom"]`).eq(5).should("contain","Help Line Numbers")
        cy.get(`[class="back1"]`).should("contain","back to top")
        cy.get(`[class="box7"]`).should("exist")
        cy.get(`[class="aboutus"]`).should("exist")

        cy.get(`[class="foter"]`).eq(0).find("h4").should("contain", "About")
        cy.get(`[class="foter"]`).eq(0).find("P").eq(0).should("contain","Government information")
        cy.get(`[class="foter"]`).eq(0).find("p").eq(1).should("contain","Poltical leader")
        cy.get(`[class="foter"]`).eq(0).find("p").eq(2).should("contain","Government budjet")
        cy.get(`[class="foter"]`).eq(0).find("p").eq(3).should("contain","police department")

        cy.get(`[class="foter"]`).eq(1).find("h4").should("contain", "Government Plans")
        cy.get(`[class="foter"]`).eq(1).find("P").eq(0).should("contain","loans")
        cy.get(`[class="foter"]`).eq(1).find("p").eq(1).should("contain","benefit plans for people")
        cy.get(`[class="foter"]`).eq(1).find("p").eq(2).should("contain","hierarchy information about Government")

        cy.get(`[class="foter"]`).eq(2).find("h4").should("contain", "Government office numbers")
        cy.get(`[class="foter"]`).eq(2).find("P").eq(0).should("contain","Help_line numbers")
        cy.get(`[class="foter"]`).eq(2).find("p").eq(1).should("contain","agriculture")
        cy.get(`[class="foter"]`).eq(2).find("p").eq(2).should("contain","indian culture")
        cy.get(`[class="foter"]`).eq(2).find("p").eq(3).should("contain","indian cricket")

        cy.get(`[class="foter"]`).eq(3).find("h4").should("contain", "Government Jobs notifications")
        cy.get(`[class="foter"]`).eq(3).find("P").eq(0).should("contain","Government Jobs notification")
        cy.get(`[class="foter"]`).eq(3).find("p").eq(1).should("contain","UPSC")
        cy.get(`[class="foter"]`).eq(3).find("p").eq(2).should("contain","NEET1")
        cy.get(`[class="foter"]`).eq(3).find("p").eq(3).should("contain","indian army jobs")
        cy.get(`[class="foter"]`).eq(3).find("p").eq(4).should("contain","CBI jobs")

        cy.get(`[class="icon2"]`).should("exist")
        cy.get(`[class="Twitter"]`).should("exist")
        cy.get(`[class="linkdil"]`).should("exist")
        cy.get(`[class="facebook"]`).should("exist")



      

        




    })
    // it("verifying the content in bank details page",()=>{

    // })

})