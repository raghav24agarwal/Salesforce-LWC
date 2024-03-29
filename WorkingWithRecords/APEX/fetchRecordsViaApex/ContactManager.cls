public with sharing class ContactManager {
    
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContact() {
        return [Select id, LastName, Phone from Contact LIMIT 20];
    }

}