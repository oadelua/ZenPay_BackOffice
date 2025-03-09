export class ApprovedProductNameTab {

    InventoryMgtModuleButton() {
        return cy.get('a[href="/inventory-management"]').parent()
    }
    AddProductNameButton() {
        return cy.contains('Add Product Name')
    }
    ProductNameField1() {
        return cy.get('#product-name-field-0')
    }
    AddAnotherButton() {
        return cy.get ('#add-more-product')
    }
    ProductNameField2() {
        return cy.get('#product-name-field-1')
    }
    AddAnotherButton() {
        return cy.get ('#add-more-product') 
    }
    ProductNameField3() {
        return cy.get('#product-name-field-2')
    } 
    SubmitButton () {
        return cy.get ('#submit-btn')
    }
    BulkUploadButton () {
        return cy.contains ('Bulk Upload')
    }
    AttachFileButton () {
        return cy.contains ('Drag and drop files here or click to upload')
    }
}
