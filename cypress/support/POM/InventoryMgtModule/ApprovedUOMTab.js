export class ApprovedUOMTab {

    InventoryMgtModuleButton() {
        return cy.get('a[href="/inventory-management"]').parent()
    }
    ApprovedUOMTabButton () {
        return cy.contains('Approved UOM')
    }
    AddNewUOMButton() {
        return cy.contains('Add New UOM')
    }
    UnitField1() {
    }
    AddAnotherButton() {
        return 
    }
    UnitField2() {
        return cy.get('#uom-field-1')
    }
    AddAnotherButton() {
        return 
    }
    UnitField3() {
        return cy.get('#uom-field-2')
    } 


}